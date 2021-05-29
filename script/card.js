// CODE NOTE, PLACE AND CARD ARE USED INTERCHANGEABLY, THEY BOTH REFERENCE THE SAME
// OBJECT WHICH CONTAINS AN IMG, TITLE, AND LIKE BUTTON REPRESENTED BY A HEART


// CLASS FOR CARD/PLACE-----------------------------------------------------------------------------
class Card {

    constructor (data, template, popupHandler) {
        this._name = data.name;
        this._link = data.link;
        this._template = template;
        this._openPopup = popupHandler;
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
    generateCard() {
        this._getTemplate();
        this._element.querySelector(".place__name").textContent = this._name;
        this._element.querySelector(".place__image").src = this._link;
        this._element.querySelector(".place__image").alt = this._name;
        this._setEventListeners();

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
        document.querySelector(".popup-image-container__pic").src = this._element.querySelector(".place__image").src;
        document.querySelector(".popup-image-container__pic").alt = this._element.querySelector(".place__image").textContent
        document.querySelector(".popup-image-container__title").textContent = this._element.querySelector(".place__name").textContent;
        this._openPopup(document.querySelector(".popup_image"));
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

export {Card};