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

const renderCards = (card) => {
    places.prepend(card);
}

initialCards.forEach(card => {
    const newCard = new Card(card, "#place-template");
    renderCards(newCard);
})