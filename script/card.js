// CODE NOTE, PLACE AND CARD ARE USED INTERCHANGEABLY, THEY BOTH REFERENCE THE SAME
// OBJECT WHICH CONTAINS AN IMG, TITLE, AND LIKE BUTTON REPRESENTED BY A HEART

const imagePopup = document.querySelector(".popup_image");

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
            this._openPopup(imagePopup);
        })

    }

    // Click on image and have it fill modal window
     _expandImage() {
        document.querySelector(".popup-image-container__pic").src = this._element.querySelector(".place__image").src;
        document.querySelector(".popup-image-container__pic").alt = this._element.querySelector(".place__image").textContent
        document.querySelector(".popup-image-container__title").textContent = this._element.querySelector(".place__name").textContent;
    }

    // Open Modal Window for Image
    // _openImagePopup() {
    //     document.querySelector(".popup_image")
    //     .classList.add("popup_visible");
    //     document.addEventListener("keyup", (event) => {
    //     this._handleEscUp(event)
    //     });
    // }
 
    // Checks whether a keyup is an esc in order to close the image popup
    // _isEscEvent = (event) => {
    //     const escKey = 27;
    //     if (event.which === escKey) {
    //         this._closePopup();
    //     }
    // }   
    // Activates the isEscevent function and prevents default settings
    // _handleEscUp = (event) => {
    //     event.preventDefault();
    //     this._isEscEvent(event);
    // }
    // Closes the image popup
    // _closePopup = () => {
    //     document.querySelector(".popup_image").classList.remove("popup_visible");
    //     document.removeEventListener("keyup", () => {
    //         this._handleEscUp()
    //     });
    // }

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