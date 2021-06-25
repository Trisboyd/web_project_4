// CODE NOTE, PLACE AND CARD ARE USED INTERCHANGEABLY, THEY BOTH REFERENCE THE SAME
// OBJECT WHICH CONTAINS AN IMG, TITLE, AND LIKE BUTTON REPRESENTED BY A HEART


// CLASS FOR CARD/PLACE-----------------------------------------------------------------------------
export default class Card {

    constructor ({ data, handleCardClick, handleDeleteClick, handleLikeAdd, handleLikeDelete }, template) {
        this._name = data.name;
        this._link = data.link;
        this._id = data._id;
        this._likeArray = data.likes;
        this._handleCardClick = handleCardClick;
        this._handleDeleteClick = handleDeleteClick;
        this._handleLikeAdd = handleLikeAdd;
        this._handleLikeDelete = handleLikeDelete;
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
        this._element.querySelector(".place__like-count").textContent = this._likeArray.length;
        this._setEventListeners();

        return this._element;
    }

    // Set all event listeners
    _setEventListeners() {
        this._element.querySelector(".place__button")
        .addEventListener("click", () => {
            if (this._likeArray.some(like => {
                return like._id === "790d2a76d08d07fcb42879ff"
            })) {
                this._handleLikeDelete(
                    this._id
                )
            }
            else {
                this._handleLikeAdd(
                    this._id
                )
            }
        })

        this._element.querySelector(".place__trash")
        .addEventListener("click", () => {
            this._handleDeleteClick(this._id);
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
    removeCard() {
        this._element.querySelector(".place__trash")
        .parentElement.remove();
    }

    // Fill in heart and add like 
    addHeart() {
        this._element.querySelector(".place__button")
        .classList
        .add("place__button_type_filled");
        this._element.querySelector(".place__like-count").textContent = (this._likeArray.length);
    }

    // Unfill heart and subtract from likes
    removeHeart() {
        this._element.querySelector(".place__button")
        .classList
        .remove("place__button_type_filled");
        this._element.querySelector(".place__like-count").textContent = (this._likeArray.length);
    }
}