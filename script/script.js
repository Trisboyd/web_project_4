// profile variables
let editProfileButton = document.querySelector(".profile__edit-button");

let editProfileExitButton = document.querySelector(".popup__exit_edit-profile");

let profileEditor = document.querySelector(".popup__profile-edit");

let profileName = document.querySelector(".profile__name");

let profileDescriptor = document.querySelector(".profile__descriptor");

let editName = document.querySelector(".edit-box__text_type_name");

let formProfile = document.querySelector(".edit-box__profile");

let editDescriptor = document.querySelector(".edit-box__text_type_descriptor");

// Add Place variables
let addPlace = document.querySelector(".popup__add-place");

let addPlaceExitButton = document.querySelector(".popup__exit_add-place");

let addPlaceButton = document.querySelector(".profile__add-place-button");

let addPlacename = document.querySelector("#place-title");

let addPlaceImage = document.querySelector("#image-link");

let formAddPlace = document.querySelector(".edit-box__place");

// Image Popup variables
let imagePopup = document.querySelector(".popup__image");

let placeImage = document.querySelectorAll(".place__image");

// Place variables
let likeButton = document.querySelectorAll(".place__button");


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

function writePlaces(cards) {
    cards.forEach(card => {
        const placeTemplate = document.querySelector("#place-template").content.querySelector(".place");
        const placeElement = placeTemplate.cloneNode(true);
        const placeImage = placeElement.querySelector(".place__image");
        const placeName = placeElement.querySelector(".place__name");
        const placeButton = placeElement.querySelector(".place__button")
        placeImage.style.background = `url(${card.link})`;
        placeName.textContent = card.name;
        imageExpand(placeImage);
        likeButtonChange(placeButton);
        places.append(placeElement);
    });
}

function imageExpand(image) {
    image.addEventListener("click", function () {
        imagePopup.classList.add("popup_visible");
    });
}

function likeButtonChange(button) {
    button.addEventListener("click", function () {
        button.classList.toggle("place__button_type_unfilled")
        button.classList.toggle("place__button_type_filled")
    });
}

function newPlaceDetails (a, b) {
    const newPlace = {
        name: a,
        link: b
    };
    const newPlaceArray = [newPlace]
    writePlaces(newPlaceArray);
}

function addNewPlace(evt) {
    evt.preventDefault();
    const newPlaceName = addPlace.querySelector("#place-title").value;
    const newPlaceImage = addPlace.querySelector("#image-link").value;
    newPlaceDetails(newPlaceName, newPlaceImage);
    addPlace.classList.toggle("popup_visible");
}

writePlaces(initialCards);

formAddPlace.addEventListener("submit", addNewPlace);


// Functions
function openEditBox() {
    profileEditor.classList.add("popup_visible");
    editName.value = profileName.textContent;
    editDescriptor.value = profileDescriptor.textContent;
}

function closeEditBox() {
    profileEditor.classList.remove("popup_visible");
}

function openAddPlace() {
    addPlace.classList.add("popup_visible");
}

function closeAddPlace() {
    addPlace.classList.remove("popup_visible");
}

function profileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = editName.value;
    profileDescriptor.textContent = editDescriptor.value;
    closeEditBox();
}

function openImagePopup() {
    imagePopup.classList.add("popup_visible");
}

// Event Listeners
editProfileButton.addEventListener("click", openEditBox);

editProfileExitButton.addEventListener("click", closeEditBox);

formProfile.addEventListener("submit", profileFormSubmit);

addPlaceButton.addEventListener("click", openAddPlace);

addPlaceExitButton.addEventListener("click", closeAddPlace);



// Loops
for (let i = 0; i <= placeImage.length - 1; i++) {
    placeImage[i].addEventListener("click", function () {
        imagePopup.classList.add("popup_visible");
    })
}

for (let i = 0; i <= likeButton.length - 1; i++) {
    likeButton[i].addEventListener("click", function () {
        likeButton[i].classList.toggle("place__button_type_unfilled")
        likeButton[i].classList.toggle("place__button_type_filled")
    })
}


