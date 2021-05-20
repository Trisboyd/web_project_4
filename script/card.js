class Card {

    constructor (data, template) {
        this._name = data.name;
        this._link = data.link;
        this._template = template;
    }

    // Gathers template from HTML for insertion of unique data
    _getTemplate() {
        const cardElement = document
        .querySelector("#place-template")
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

// fill card with info
// 