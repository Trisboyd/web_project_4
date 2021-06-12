
// IMPORTS ________________________________________________________________________________

import "../pages/index.css";

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import {escKey, places, settings, profileForm, editProfileButton, placeForm, initialCards, addPlaceButton, editName, editDescriptor} from "../utilities/constants.js";


// VALIDATION CODE -----------------------------------------------------------------------------

const profileValidator = new FormValidator(settings, profileForm);
const addPlaceValidator = new FormValidator(settings, placeForm);

profileValidator.enableFormValidation();
addPlaceValidator.enableFormValidation();


// RENDER INITIAL CARDS

const createCard = (cardData) => {
    const newCard = new Card({
        data: cardData,
        handleCardClick: () => {
            imagePopup.open({data: cardData})
        }
    }, "#place-template");
    return newCard;
}

const imagePopup = new PopupWithImage("popup_image", escKey);

const cardList = new Section({
    data: initialCards,
    renderer: (initialCard) => {
        const newCard = createCard(initialCard);
        // const newCard = new Card({
        //     data: initialCard,
        //     handleCardClick: () => {
        //         imagePopup.open({data: initialCard});
        //     }
        // }, "#place-template");

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

// Create popup for adding a Card

const addPlacePopup = new PopupWithForm({
    formSubmission: (inputObject) => {
        const newCard = createCard(inputObject);
        // const newCard = new Card({
        //     data: addPlacePopup.inputObject,
        //     handleCardClick: () => {
        //         imagePopup.open({data: addPlacePopup.inputObject})
        //     }          
        // }, "#place-template")
        places.prepend(newCard.generateCard());
    } 
    }, "popup_add-place", escKey);


// Add event listener for "add place" button to open addPlaceProfile

addPlaceButton.addEventListener("click", () => {
    addPlacePopup.open();
    addPlaceValidator.resetValidation();
})

// Add event listeners for "add place"

addPlacePopup.setEventListeners();




// Reset profile editor info to match current profile

const inputProfileInfo = (data) => {
    editName.value = data.name;
    editDescriptor.value = data.descriptor;
}