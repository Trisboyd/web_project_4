
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

// javascript constants
import {escKey, places, settings, profileForm, editProfileButton, placeForm, initialCards, addPlaceButton, editName, editDescriptor} from "../utilities/constants.js";


// VALIDATION CODE_______________________________________________________________________________________________

const profileValidator = new FormValidator(settings, profileForm);
const addPlaceValidator = new FormValidator(settings, placeForm);

profileValidator.enableFormValidation();
addPlaceValidator.enableFormValidation();


// PROFILE POPUP______________________________________________________________________________________________

// Create new instance of UserInfo
const newUser = new UserInfo("profile__name", "profile__descriptor");

// Create popup for editing profile which resets User Info based on popup inputs
const profilePopup = new PopupWithForm({
    formSubmission: (inputObject) => {
        newUser.setUserInfo(inputObject);
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


// CARDS_______________________________________________________________________________________________

// Create imagePopup
const imagePopup = new PopupWithImage("popup_image", escKey);

// set exit event listeners for imagePopups
imagePopup.setEventListeners();

// Render initial cards
const createCard = (cardData) => {
    const newCard = new Card({
        data: cardData,
        handleCardClick: () => {
            imagePopup.open({data: cardData})
        }
    }, "#place-template");
    return newCard;
}

// Create section to render cards
const cardList = new Section({
    data: initialCards,
    renderer: (initialCard) => {
        const newCard = createCard(initialCard);
        cardList.addItem(newCard.generateCard());
    }
    }, ".places"
)

cardList.renderItems();

// ADD A CARD POPUP______________________________________________________________________________________

// Create popup for adding a Card
const addPlacePopup = new PopupWithForm({
    formSubmission: (inputObject) => {
        const newCard = createCard(inputObject);
        places.prepend(newCard.generateCard());
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

const deleteConfirmationPopup = document.querySelector(".popup_card-delete");

const changeAvatarPopup = document.querySelector(".popup_change-avatar");

const popupVisible = (popup) => {
    popup.classList.add("popup_visible");
}

const cardTrash = document.querySelector(".place__trash");

const profilePic = document.querySelector(".profile__pic");

cardTrash.addEventListener("click", () => {
    popupVisible(deleteConfirmationPopup);
});


//PROFILE AVATAR TESTS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const editVisible = () => {
    profilePicEdit.classList.toggle("profile__pic_edit_visible");
    profilePic.classList.toggle("profile__pic_hovered");
}

const profileImageContainer = document.querySelector(".profile__image-container");

const profilePicEdit = document.querySelector(".profile__pic_edit");

profileImageContainer.addEventListener("mouseover", editVisible);
profileImageContainer.addEventListener("mouseout", editVisible);

profileImageContainer.addEventListener("click", () => {
    popupVisible(changeAvatarPopup);
})