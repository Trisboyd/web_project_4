
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
import {escKey, places, settings, profileForm, profilePic, avatarForm, editProfileButton, placeForm, 
        addPlaceButton, editName, editDescriptor, profileImageContainer, server, token} from "../utilities/constants.js";
import PopupDelete from "../components/PopupDelete";


// VALIDATION CODE_______________________________________________________________________________________________

const profileValidator = new FormValidator(settings, profileForm);
const addPlaceValidator = new FormValidator(settings, placeForm);
const avatarValidator = new FormValidator(settings, avatarForm);

profileValidator.enableFormValidation();
addPlaceValidator.enableFormValidation();
avatarValidator.enableFormValidation();

// API INSTATIATION__________________________________________________________________________________________

const api = new Api(server, token);


// PROFILE POPUP______________________________________________________________________________________________

// Create new instance of UserInfo
const newUser = new UserInfo("profile__name", "profile__descriptor");


// Set user info based on server
api.getProfile().then(userData => {
    newUser.setUserInfo({
        name: userData.name,
        descriptor: userData.about
    });
    profilePic.src = userData.avatar;
})

// Create popup for editing profile which resets User Info based on popup inputs
const profilePopup = new PopupWithForm({
    formSubmission: (inputObject) => {
        newUser.setUserInfo(inputObject);
        api.changeProfile({data: inputObject});
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
        api.changeAvatar(
            inputObject.link
        ).then(res => {
            console.log(res);
            profilePic.src = res.avatar;
        })
    }
}, "popup_avatar", escKey);

// Add event listener for avatar popup
profileImageContainer.addEventListener("click", ()=> {
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
            imagePopup.open({data: cardData})
        },
        handleDeleteClick: () => {
            deleteCardPopup.open();
            deleteCardPopup.setEventListeners({
                formSubmission: () => {
                    api.deleteCard(cardData._id).then(res => {
                        newCard.removeCard();
                    })
                }
            })
        },
        handleLikeAdd: (id) => {
            api.addLike(id).then(res => {
                newCard.addHeart();
            })
        },
        handleLikeDelete: (id) => {
            api.removeLike(id).then(res => {
                newCard.removeHeart();
            })
        }
    }, "#place-template");
    return newCard;
}

// Create section and render cards from server
api.getCardList().then(cardData => {
    const cardList = new Section({
        data: cardData,
        renderer: (card) => {
            const newCard = createCard(card);
            cardList.addItem(newCard.generateCard());
        }
        }, ".places"
    )
    cardList.renderItems();
})


// ADD A CARD POPUP______________________________________________________________________________________

// Create popup for adding a Card
const addPlacePopup = new PopupWithForm({
    formSubmission: (inputObject) => {
        api.addCard({data: inputObject}).then(cardData => {
            const newCard = createCard(cardData);
            places.prepend(newCard.generateCard());
            })
        } 
    }, "popup_add-place", escKey);


// Add event listener for "add place" button to open addPlace
addPlaceButton.addEventListener("click", () => {
    addPlacePopup.open();
    addPlaceValidator.resetValidation();
})

// Add event listeners for "add place"
addPlacePopup.setEventListeners();

//TEST CODE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!




