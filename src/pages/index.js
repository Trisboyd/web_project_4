
// IMPORTS ________________________________________________________________________________

// styles
import "../pages/index.css";

// javascript classes
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import Api from "../components/Api.js";

// javascript constants
import {
    escKey, places, settings, profileForm, profilePic, avatarForm, editProfileButton, placeForm,
    addPlaceButton, editName, editDescriptor, profileImageContainer, server, token
} from "../utilities/constants.js";
import PopupDelete from "../components/PopupDelete";
import { data } from "autoprefixer";


// VALIDATION CODE_______________________________________________________________________________________________

const profileValidator = new FormValidator(settings, profileForm);
const addPlaceValidator = new FormValidator(settings, placeForm);
const avatarValidator = new FormValidator(settings, avatarForm);

profileValidator.enableFormValidation();
addPlaceValidator.enableFormValidation();
avatarValidator.enableFormValidation();

// API INSTATIATION__________________________________________________________________________________________

const api = new Api(server, token);


// UPLOAD INITIAL PROFILE AND CARDS___________________________________________________________________________

// Create new instance of UserInfo
const newUser = new UserInfo("profile__name", "profile__descriptor", "profile__pic", "profile");

// Create new instance of Section (class that renders cards)
const cardList = new Section({
    renderer: (card) => {
        const newCard = createCard(card);
        cardList.addItem(newCard.generateCard());
    }
}, ".places");

// Load userinfo and cards

Promise.all([api.getProfile(), api.getCardList()])
    .then(res => {
        const [userData, cardData] = res;

        newUser.setUserInfo({
            name: userData.name,
            descriptor: userData.about,
            avatar: userData.avatar,
            userId: userData._id
        });

        cardList.renderItems(cardData);
    })
    .catch(err => {console.log(err)})

// PROFILE POPUP______________________________________________________________________________________________

// Create popup for editing profile which resets User Info based on popup inputs
const profilePopup = new PopupWithForm({
    formSubmission: (inputObject) => {
        profilePopup.renderLoading(true);
        api.changeProfile({ data: inputObject })
            .then(() => {
                newUser.changeUserInfo(inputObject);
                profilePopup.close();
            })
            .catch(err => { console.log(err) })
            .finally(() => {
                profilePopup.renderLoading(false);
            });
    },
}, "popup_profile-edit", escKey);

// set event listeners for profilePopup
profilePopup.setEventListeners();

// Add event listener on "edit profile" to open profilePopup
editProfileButton.addEventListener("click", () => {
    profilePopup.open();
    profileValidator.resetValidation();
    inputProfileInfo(newUser.getUserInfo());
})

// Reset profile editor info to match current profile
const inputProfileInfo = (data) => {
    editName.value = data.name;
    editDescriptor.value = data.descriptor;
}

// AVATAR POPUP_____________________________________________________________________________________________

// Create avatar popup
const avatarPopup = new PopupWithForm({
    formSubmission: (inputObject) => {
        avatarPopup.renderLoading(true);
        api.changeAvatar(
            inputObject.link
        ).then(res => {
            newUser.setUserInfo({
                name: res.name,
                descriptor: res.about,
                avatar: res.avatar,
                userId: res._id
            });
            avatarPopup.close();
        })
            .catch(err => { console.log(err) })
            .finally(() => {
                avatarPopup.renderLoading(false);
            });
    }
}, "popup_avatar", escKey);

// Add event listener for avatar popup
profileImageContainer.addEventListener("click", () => {
    avatarPopup.open();
    avatarValidator.resetValidation();
})

// Set Event Listeners
avatarPopup.setEventListeners();


// CARDS_______________________________________________________________________________________________

// Create imagePopup
const imagePopup = new PopupWithImage("popup_image", escKey);

// set exit event listeners for imagePopups
imagePopup.setEventListeners();

// Create delete Card popup
const deleteCardPopup = new PopupDelete("popup_card-delete", escKey);

// Create a card
const createCard = (cardData) => {
    const newCard = new Card({
        data: cardData,
        handleCardClick: () => {
            imagePopup.open({ data: cardData })
        },
        handleDeleteClick: () => { //activates delete card popup, if confirmed then deletes card from page and server
            deleteCardPopup.open();
            deleteCardPopup.setDeleteHandler({
                formSubmission: () => {
                    api.deleteCard(cardData._id).then(res => {
                        newCard.removeCard();
                        deleteCardPopup.close();
                    })
                        .catch(err => { console.log(err) })
                }
            })
            deleteCardPopup.setEventListeners();
        },
        handleLikeAdd: (id) => { //add likes to card and server
            api.addLike(id).then(res => {
                newCard.addHeart();
                newCard.setLikes(res);
            })
        },
        handleLikeDelete: (id) => { //removes like from card and server
            api.removeLike(id).then(res => {
                newCard.removeHeart();
                newCard.setLikes(res);
            })
                .catch(err => { console.log(err) })
        }
    }, newUser.getUserId(), "#place-template");
    return newCard;
}


// ADD A CARD POPUP______________________________________________________________________________________

// Create popup for adding a Card
const addPlacePopup = new PopupWithForm({
    formSubmission: (inputObject) => {
        addPlacePopup.renderLoading(true);
        api.addCard({ data: inputObject }).then(cardData => {
            const newCard = createCard(cardData);
            cardList.addItem(newCard.generateCard());
            addPlacePopup.close();
        })
            .catch(err => { console.log(err) })
            .finally(() => {
                addPlacePopup.renderLoading(false);
            });
    }
}, "popup_add-place", escKey);


// Add event listener for "add place" button to open addPlace
addPlaceButton.addEventListener("click", () => {
    addPlacePopup.open();
    addPlaceValidator.resetValidation();
})

// Add event listeners for "add place"
addPlacePopup.setEventListeners();



// TEST CODE SPOT__________________________________________________

