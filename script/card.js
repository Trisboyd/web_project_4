// CODE NOTE, PLACE AND CARD ARE USED INTERCHANGEABLY, THEY BOTH REFERENCE THE SAME
// OBJECT WHICH CONTAINS AN IMG, TITLE, AND LIKE BUTTON REPRESENTED BY A HEART

// CLASS FOR CARD/PLACE-----------------------------------------------------------------------------
class Card {

    constructor (data, template) {
        this._name = data.name;
        this._link = data.link;
        this._template = template;
    }

    // Gathers template from HTML for insertion of unique data
    _getTemplate() {
        const cardElement = document
        .querySelector(this._template)
        .content.querySelector(".place")
        .cloneNode(true);

        this._element = cardElement;
    }

    // Inserts data into template
    _generateCard() {
        this._element.querySelector(".place__name").textContent = this._name;
        this._element.querySelector(".place__image").src = this._link;
        this._element.querySelector(".place__image").alt = this._name;
        this._element.setEventListeners();

        return this._element;
    }


    // Set all event listeners
    _setEventListeners() {
        this._element.querySelector(".place__button")
        .addEventListener("click", () => {
            this._toggleHeart();
        })

        this._element.querySelector(".place__trash")
        .addEventListener("click", () => {
            this._removeCard();
        })

        this._element.querySelector(".place__image")
        .addEventListener("click", () => {
            this._expandImage();
        })

    }

    // Click on image and have it fill modal window
     _expandImage() {
        const imagePopupPic = document.querySelector(".popup-image-container__pic");
        const imagePopupName = document.querySelector(".popup-image-container__title");
        imagePopupPic.src = this._element.querySelector(".place__image").src;
        imagePopupPic.alt = this._element.querySelector(".place__image").textContent;
        imagePopupName.textContent = this._element.querySelector(".place__image").textContent;
        this._openImagePopup();
    }

    // Open Modal Window for Image
    _openImagePopup() {
        document.querySelector(".popup__image")
        .classList.add("popup_visible");
    }


    // Click trash icon and remove card
    _removeCard() {
        this._element.querySelector(".place__trash")
        .parentElement.remove();
    }

    // Toggle heart: filled or unfilled
    _toggleHeart() {
        this._element.querySelector(".place__button")
        .classList
        .toggle("place__button_type_filled")
    }
}

// NON CLASS CODE------------------------------------------------------------------------------------

// INITIAL/DEFAULT CARDS/PLACE INFO
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

// Call Render Cards on initial set
initialCards.forEach(card => {
    const newCard = new Card(card, "#place-template");
    renderCard(newCard);
})

// ADDING A NEW CARD/PLACE CODE-----------------------------------------------------------------------

// Add Place Variables
const formAddPlace = document.querySelector(".edit-box_place");

const addPlaceName = document.querySelector("#place-title");

const addPlaceImage = document.querySelector("#image-link");


// Add details to new Card for Add Place Modal Window
const addPlaceDetails = (placeName, placeLink) => {
    const newPlace = {
        name: placeName,
        link: placeLink
    };
    const newCard = new Card(newPlace, "#place-template");
    renderCard(newCard);
}

// Render New Card
const addNewPlace = (evt) => {
    evt.preventDefault();
    const placeName = addPlaceName.value;
    const placeLink = addPlaceImage.value;
    addNewPlaceDetails(placeName, placeLink);
    clearNewPlaceDetails();
    closePopup(addPlace);
}

// Clear add Place values after submitting form
const clearNewPlaceDetails = () => {
    addPlaceName.value = "";
    addPlaceImage.value = "";
}

// SET EVENT LISTENER FOR ADDING A NEW CARD/PLACE ON SUBMISSION OF FORM
formAddPlace.addEventListener("submit", addNewPlace);