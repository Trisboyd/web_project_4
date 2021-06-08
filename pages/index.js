
// // HANDLE CLOSE POPUP FUNCTIONS INCLUDING ESC KEY AND CLICKS OUTSIDE MODAL WINDOW-------------------------------


// const isEscEvent = (evt, action) => {
//     if (evt.which === escKey) {
//         const popupActive = document.querySelector(".popup_visible");
//         action(popupActive);
//     }
// }

// const handleEscUp = evt => {
//     evt.preventDefault();
//     isEscEvent(evt, closePopup);
// }

// const openPopup = popupModal => {
//     popupModal.classList.add("popup_visible");
//     document.addEventListener("keyup", handleEscUp);
// }

// const closePopup = popupModal => {
//     popupModal.classList.remove("popup_visible");
//     document.removeEventListener("keyup", handleEscUp);
// }

// // Allows clicks outside the modal window to close the modal window
// document.addEventListener("click", function(evt) {
//     const targetElement = evt.target;
//     if (targetElement.classList.contains("popup_visible")) {
//         closePopup(targetElement);
//     }
// })


// // CARD/PLACE RELATED CODE----------------------------------------------------------------------------------

// 


// // ADDING A NEW CARD/PLACE CODE-----------------------------------------------------------------------


// // Add details to new Card for Add Place Modal Window
// const addPlaceDetails = (placeName, placeLink) => {
//     const newPlace = {
//         name: placeName,
//         link: placeLink
//     };
//     const newCard = createCard(newPlace);
//     const cardElement = newCard.generateCard();
//     renderCard(cardElement);
// }

// // Render New Card
// const addNewPlace = (evt) => {
//     evt.preventDefault();
//     const placeName = addPlaceName.value;
//     const placeLink = addPlaceImage.value;
//     addPlaceDetails(placeName, placeLink);
//     clearNewPlaceDetails();
//     closePopup(addPlace);
// }

// // Clear add Place values after submitting form
// const clearNewPlaceDetails = () => {
//     formAddPlace.reset();
// }


// // SET EVENT LISTENER FOR ADDING A NEW CARD/PLACE ON SUBMISSION OF FORM
// formAddPlace.addEventListener("submit", addNewPlace);


// // PROFILE AND ADD CARD/PLACE CODE ------------------------------------------------------------------------------------------

// // Open Profile Editor with default information

// function openEditBox() {
//     openPopup(profileEditor);
//     editName.value = profileName.textContent;
//     editDescriptor.value = profileDescriptor.textContent;
// }

// // Create New Profile Information

// function profileFormSubmit(evt) {
//     evt.preventDefault();
//     profileName.textContent = editName.value;
//     profileDescriptor.textContent = editDescriptor.value;
//     closePopup(profileEditor);
// }

// // Close Profile Editor

// function closeEditBox() {
//     closePopup(profileEditor);
// }

// // Open New Place Popup

// function openAddPlace() {
//     openPopup(addPlace);
//     addPlaceValidator.resetValidation();
// }

// function closeAddPlace() {
//     closePopup(addPlace);
// }

// // Form Event Listeners
// editProfileButton.addEventListener("click", openEditBox);

// editProfileExitButton.addEventListener("click", closeEditBox);

// formProfile.addEventListener("submit", profileFormSubmit);

// addPlaceButton.addEventListener("click", openAddPlace);

// addPlaceExitButton.addEventListener("click", closeAddPlace);




// VALIDATION CODE -----------------------------------------------------------------------------

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import {settings, profileForm, placeForm, initialCards} from "../utilities/constants.js";


const profileValidator = new FormValidator(settings, profileForm);
const addPlaceValidator = new FormValidator(settings, placeForm);



profileValidator.enableFormValidation();
addPlaceValidator.enableFormValidation();


// NEW STUFF !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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

imagePopup.setEventListeners();


editProfileButton.addEventListener("click", ()=> {
    const profilePopup = new PopupwithForm
})