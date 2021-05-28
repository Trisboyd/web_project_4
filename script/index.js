// profile variables
const editProfileButton = document.querySelector(".profile__edit-button");

const editProfileExitButton = document.querySelector(".popup__exit_edit-profile");

const profileEditor = document.querySelector(".popup_profile-edit");

const profileName = document.querySelector(".profile__name");

const profileDescriptor = document.querySelector(".profile__descriptor");

const editName = document.querySelector(".edit-box__text_type_name");

const formProfile = document.querySelector(".edit-box_profile");

const editDescriptor = document.querySelector(".edit-box__text_type_descriptor");


// Add Card/Place variables
const addPlace = document.querySelector(".popup_add-place");

const addPlaceExitButton = document.querySelector(".popup__exit_add-place");

const addPlaceButton = document.querySelector(".profile__add-place-button");

const addPlaceName = document.querySelector("#place-title");

const addPlaceImage = document.querySelector("#image-link");

const formAddPlace = document.querySelector(".edit-box_place");

const addPlaceSubmit = document.querySelector("#add-place-submit");

// Image Popup variables
const imagePopup = document.querySelector(".popup_image");

const imagePopupExit = document.querySelector(".popup__exit_image");


// CARD/PLACE RELATED CODE----------------------------------------------------------------------------------

import {Card} from "./CARD.js";

// INITIAL CARDS/PLACE INFO
const initialCards = [
    {
        name: "Gulf of California",
        link: "https://images.unsplash.com/photo-1597244586456-1044325c5ce4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z3VsZiUyMG9mJTIwY2FsaWZvcm5pYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "Grand Canyon",
        link: "https://images.unsplash.com/photo-1516302350523-4c29d47b89e0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhbmQlMjBjYW55b258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "Rocky Mountains",
        link: "https://images.unsplash.com/photo-1583542225701-e9bb2c337ed3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cm9ja3klMjBtb3VudGFpbnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "Rio Grande River",
        link: "https://images.unsplash.com/photo-1610660059460-f4fa987fb3ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHRleGFzJTIwcml2ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "Palo Duro Canyon",
        link: "https://images.unsplash.com/photo-1579477460827-0c6598bc1e51?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBhbG8lMjBkdXJvJTIwY2FueW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "Great Plains",
        link: "https://images.unsplash.com/photo-1608240525233-7c6e1657c494?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGdyZWF0JTIwcGxhaW5zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
];

// Places Grid Variable
const places = document.querySelector(".places");

// Add Card to Grid
const renderCard = (card) => {
    places.prepend(card);
}

// Create a New Card instance
const createCard = (card) => {
    return new Card(card, "#place-template");
}

// Call Render Cards on initial set
initialCards.forEach(card => {
    const newCard = createCard(card);
    const cardElement = newCard.generateCard();
    renderCard(cardElement);
})

// ADDING A NEW CARD/PLACE CODE-----------------------------------------------------------------------


// Add details to new Card for Add Place Modal Window
const addPlaceDetails = (placeName, placeLink) => {
    const newPlace = {
        name: placeName,
        link: placeLink
    };
    const newCard = createCard(newPlace);
    const cardElement = newCard.generateCard();
    renderCard(cardElement);
}

// Render New Card
const addNewPlace = (evt) => {
    evt.preventDefault();
    const placeName = addPlaceName.value;
    const placeLink = addPlaceImage.value;
    addPlaceDetails(placeName, placeLink);
    clearNewPlaceDetails();
    closePopup(addPlace);
}

// Clear add Place values after submitting form
const clearNewPlaceDetails = () => {
    addPlaceName.value = "";
    addPlaceImage.value = "";
}

// call close function on image popup exit button

closeImagePopup();

// SET EVENT LISTENER FOR ADDING A NEW CARD/PLACE ON SUBMISSION OF FORM
formAddPlace.addEventListener("submit", addNewPlace);


// PROFILE AND ADD CARD/PLACE CODE ------------------------------------------------------------------------------------------

// Open Profile Editor with default information

function openEditBox() {
    openPopup(profileEditor);
    editName.value = profileName.textContent;
    editDescriptor.value = profileDescriptor.textContent;
}

// Create New Profile Information

function profileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = editName.value;
    profileDescriptor.textContent = editDescriptor.value;
    closePopup(profileEditor);
}

// Close Profile Editor

function closeEditBox() {
    closePopup(profileEditor);
}

// Open New Place Popup

function openAddPlace() {
    openPopup(addPlace);
    addPlaceSubmit.disabled = true;
    addPlaceSubmit.classList.add("edit-box__submit_inactive");
}

function closeAddPlace() {
    closePopup(addPlace);
}

// Event Listeners
editProfileButton.addEventListener("click", openEditBox);

editProfileExitButton.addEventListener("click", closeEditBox);

formProfile.addEventListener("submit", profileFormSubmit);

addPlaceButton.addEventListener("click", openAddPlace);

addPlaceExitButton.addEventListener("click", closeAddPlace);

// Close Image Popup

function closeImagePopup() {
    imagePopupExit.addEventListener("click", function () {
        closePopup(imagePopup);
    });
}

// HANDLE CLOSE POPUP FUNCTIONS INCLUDING ESC KEY AND CLICKS OUTSIDE MODAL WINDOW-------------------------------

// Define ESC key and allow pressing ESC key to close modal window
const escKey = 27;

const isEscEvent = (evt, action) => {
    const popupActive = document.querySelector(".popup_visible");

    if (evt.which === escKey) {
        action(popupActive);
    }
}

const handleEscUp = evt => {
    evt.preventDefault();
    isEscEvent(evt, closePopup);
}

const openPopup = popupModal => {
    popupModal.classList.add("popup_visible");
    document.addEventListener("keyup", handleEscUp);
}

const closePopup = popupModal => {
    popupModal.classList.remove("popup_visible");
    document.removeEventListener("keyup", handleEscUp);
}

// Allows clicks outside the modal window to close the modal window
document.addEventListener("click", function(evt) {
    const popupActive = document.querySelector(".popup_visible");
    const targetElement = evt.target;
    if (targetElement === popupActive) {
        closePopup(popupActive);
    }
})


// VALIDATION CODE -----------------------------------------------------------------------------

import {FormValidator} from "./FORMVALIDATOR.js";

const settings = {
    formSelector: ".edit-box",
    inputSelector: ".edit-box__text",
    submitButtonSelector: ".edit-box__submit",
    inactiveButtonClass: "edit-box__submit_inactive",
    inputErrorClass: ".edit-box__text_type_error",
    errorClass: ".edit-box__error_visible"
  };

const profileForm = document.querySelector(".edit-box_profile");
const placeForm = document.querySelector(".edit-box_place");
const profileValidator = new FormValidator(settings, profileForm);
const addPlaceValidator = new FormValidator(settings, placeForm);



profileValidator.enableFormValidation();
addPlaceValidator.enableFormValidation();