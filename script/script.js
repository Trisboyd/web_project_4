// profile variables
const editProfileButton = document.querySelector(".profile__edit-button");

const editProfileExitButton = document.querySelector(".popup__exit_edit-profile");

const profileEditor = document.querySelector(".popup_profile-edit");

const profileName = document.querySelector(".profile__name");

const profileDescriptor = document.querySelector(".profile__descriptor");

const editName = document.querySelector(".edit-box__text_type_name");

const formProfile = document.querySelector(".edit-box_profile");

const editDescriptor = document.querySelector(".edit-box__text_type_descriptor");

// Add Place variables
const addPlace = document.querySelector(".popup_add-place");

const addPlaceExitButton = document.querySelector(".popup__exit_add-place");

const addPlaceButton = document.querySelector(".profile__add-place-button");

const addPlacename = document.querySelector("#place-title");

const addPlaceImage = document.querySelector("#image-link");

const formAddPlace = document.querySelector(".edit-box_place");

// Image Popup variables
const imagePopup = document.querySelector(".popup_image");

const imagePopupExit = document.querySelector(".popup__exit_image");

// Place variables
const likeButton = document.querySelectorAll(".place__button");

const placeImage = document.querySelectorAll(".place__image");


// places setup
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

const places = document.querySelector(".places");

// define variables and put info into placeCards

function writePlace(name, link) {
     const placeTemplate = document.querySelector("#place-template").content.querySelector(".place");
     const placeElement = placeTemplate.cloneNode(true);
     const placeImage = placeElement.querySelector(".place__image");
     const placeName = placeElement.querySelector(".place__name");
     const placeButton = placeElement.querySelector(".place__button");
     const trashButton = placeElement.querySelector(".place__trash");
     placeImage.src = link;
     placeImage.alt = name;
     placeName.textContent = name;
     likeButtonChange(placeButton);
     removePlace(trashButton);
     imageExpand(placeImage, placeName);
     imageClose();
     return placeElement;
}

// Render placeCards

function renderPlaces(name, link) {
    const writtenPlace = writePlace(name, link);
    places.append(writtenPlace);
}

// Call the Render Function

initialCards.forEach(card => {
    renderPlaces(card.name, card.link);
})

// Toggle Like Buttons

function likeButtonChange(placeButton) {
    placeButton.addEventListener("click", function () {
        placeButton.classList.toggle("place__button_type_unfilled")
        placeButton.classList.toggle("place__button_type_filled")
    });
}

// Remove placeCards with trash button 

function removePlace(trashButton) {
    trashButton.addEventListener("click", function() {
        trashButton.parentElement.remove();
    });
}

// Open Image Popup

function imageExpand(placeImage, placeName) {
    placeImage.addEventListener("click", function(evt) {
        document.querySelector(".popup-image-container__pic").src = placeImage.src;
        document.querySelector(".popup-image-container__pic").alt = `${placeName.textContent}`;
        document.querySelector(".popup-image-container__title").textContent = `${placeName.textContent}`;
        changePopup(imagePopup);
    });
}

// Close Image Popup

function imageClose() {
    imagePopupExit.addEventListener("click", function() {
        imagePopup.classList.remove("popup_visible");
    });
}

// New Card Details

function newPlaceDetails (placeName, placeLink) {
    const newPlace = {
        name: placeName,
        link: placeLink
    };
    renderPlaces(newPlace.name, newPlace.link);
}

// Render New Card

function addNewPlace(evt) {
    evt.preventDefault();
    const newPlaceName = addPlace.querySelector("#place-title").value;
    const newPlaceImage = addPlace.querySelector("#image-link").value;
    newPlaceDetails(newPlaceName, newPlaceImage);
    changePopup(addPlace);
}


// General Popup Toggle
function changePopup(popup) {
    popup.classList.toggle("popup_visible");
}

// Open Profile Editor with default information

function openEditBox() {
    changePopup(profileEditor);
    editName.value = profileName.textContent;
    editDescriptor.value = profileDescriptor.textContent;
}

// Create New Profile Information

function profileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = editName.value;
    profileDescriptor.textContent = editDescriptor.value;
    changePopup(profileEditor);
}

// Close Profile Editor

function closeEditBox() {
    changePopup(profileEditor);
}

// Open New Place Popup

function changeAddPlaceVisibilty() {
    changePopup(addPlace);
}

// Open Image Popup

function openImagePopup() {
    changePopup(imagePopup);
}

// Close Image Popup

function closeImagePopup() {
    imagePopupExit.addEventListener("click", function() {
        changePopup(imagePopup);
    });
}


// Event Listeners
editProfileButton.addEventListener("click", openEditBox);

editProfileExitButton.addEventListener("click", closeEditBox);

formProfile.addEventListener("submit", profileFormSubmit);

addPlaceButton.addEventListener("click", changeAddPlaceVisibilty);

addPlaceExitButton.addEventListener("click", changeAddPlaceVisibilty);

formAddPlace.addEventListener("submit", addNewPlace);

