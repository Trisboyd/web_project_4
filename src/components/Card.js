// CODE NOTE, PLACE AND CARD ARE USED INTERCHANGEABLY, THEY BOTH REFERENCE THE SAME
// OBJECT WHICH CONTAINS AN IMG, TITLE, AND LIKE BUTTON REPRESENTED BY A HEART


// CLASS FOR CARD/PLACE-----------------------------------------------------------------------------
export default class Card {

    constructor ({ data, handleCardClick }, template) {
        this._name = data.name;
        this._link = data.link;
        this._handleCardClick = handleCardClick;
        this._template = template;
    }

    // Gathers template from HTML for insertion of unique data
    _getTemplate() {
        const cardElement = document.querySelector
        (this._template).content
        .querySelector(".place")
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
            this._handleCardClick (
                {name: this._name, 
                link: this._link
                });
        })
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