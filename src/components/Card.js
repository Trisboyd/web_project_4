// CODE NOTE, PLACE AND CARD ARE USED INTERCHANGEABLY, THEY BOTH REFERENCE THE SAME
// OBJECT WHICH CONTAINS AN IMG, TITLE, AND LIKE BUTTON REPRESENTED BY A HEART



// CLASS FOR CARD/PLACE-----------------------------------------------------------------------------
export default class Card {

    constructor ({ data, handleCardClick, handleDeleteClick, handleLikeAdd, handleLikeDelete }, template) {
        this._name = data.name;
        this._link = data.link;
        this._id = data._id;
        this._userId = data.owner._id;
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
        this._filterUserCards();
        if (this._likeArray.some(like => {
            return like._id === "790d2a76d08d07fcb42879ff"
        })) {
            this.addHeart()
        }
        return this._element;
    }

    // Remove trash icons from non-user cards so they can't be deleted
    _filterUserCards() {
        if (this._userId !== "790d2a76d08d07fcb42879ff") {
            this._element.querySelector(".place__trash").remove();
        }
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
    }

    // Unfill heart and subtract from likes
    removeHeart() {
        this._element.querySelector(".place__button")
        .classList
        .remove("place__button_type_filled");
    }

    // Set like content on page based on Api response
    setLikes(res) {
        this._element.querySelector(".place__like-count").textContent = res.likes.length;
        this._likeArray = res.likes;
    }
}