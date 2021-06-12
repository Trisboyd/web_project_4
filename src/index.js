
// IMPORTS ________________________________________________________________________________

import "./pages/index.css";

import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithForm from "./components/PopupWithForm.js";
import UserInfo from "./components/UserInfo.js";
import Section from "./components/Section.js";
import {formAddPlace, places, settings, profileForm, editProfileButton, placeForm, initialCards, addPlaceButton} from "./utilities/constants.js";


// VALIDATION CODE -----------------------------------------------------------------------------

const profileValidator = new FormValidator(settings, profileForm);
const addPlaceValidator = new FormValidator(settings, placeForm);

profileValidator.enableFormValidation();
addPlaceValidator.enableFormValidation();


// RENDER INITIAL CARDS

const imagePopup = new PopupWithImage("popup_image");

const cardList = new Section({
    data: initialCards,
    renderer: (initialCard) => {
        const newCard = new Card({
            data: initialCard,
            handleCardClick: () => {
                imagePopup.open({data: initialCard});
            }
        }, "#place-template");

        cardList.addItem(newCard.generateCard());
    }

    }, ".places"
)

cardList.renderItems();

// set exit event listeners for imagePopups
imagePopup.setEventListeners();

// Create new instance of UserInfo

const newUser = new UserInfo("profile__name", "profile__descriptor");


// Create popup for editing profile which resets User Info based on popup inputs

const profilePopup = new PopupWithForm({
    formSubmission: () => {
        newUser.setUserInfo(profilePopup.inputObject);
        },
    }, "popup_profile-edit");


// Add event listener on "edit profile" to open profilePopup

editProfileButton.addEventListener("click", () => {
    profilePopup.open();
    profilePopup.setEventListeners();
})

// Create popup for adding a Card

const addPlacePopup = new PopupWithForm({
    formSubmission: () => {
        const newCard = new Card({
            data: addPlacePopup.inputObject,
            handleCardClick: () => {
                imagePopup.open({data: addPlacePopup.inputObject})
            }          
        }, "#place-template")
        places.prepend(newCard.generateCard());
    } 
    }, "popup_add-place");


// Add event listener for "add place" button to open addPlaceProfile

addPlaceButton.addEventListener("click", () => {
    addPlacePopup.open();
    addPlaceValidator.resetValidation();
})

// Add event listeners for "add place"

addPlacePopup.setEventListeners();

