let like_button = document.querySelectorAll(".place__like-button");

let editProfileButton = document.querySelector(".profile__edit-button");

let editProfileExitButton = document.querySelector(".popup__exit_edit-profile");

let profileEditor = document.querySelector(".popup__profile-edit");

let addPlace = document.querySelector(".popup__add-place");

let addPlaceExitButton = document.querySelector(".popup__exit_add-place");

let imagePopup = document.querySelector(".popup__image");

let placeImage = document.querySelectorAll(".place__image");

let profileName = document.querySelector(".profile__name");

let profileDescriptor = document.querySelector(".profile__descriptor");

let editName = document.querySelector(".edit-box__text_type_name");

let addPlaceButton = document.querySelector(".profile__add-place-button");

let editDescriptor = document.querySelector(".edit-box__text_type_descriptor");

let likeButton = document.querySelectorAll(".place__button");

let formProfile = document.querySelector(".edit-box");


function openEditBox() {
    profileEditor.classList.add("popup_visible");
    editName.value = profileName.textContent;
    editDescriptor.value = profileDescriptor.textContent;
}

function openAddPlace() {
    addPlace.classList.add("popup_visible");
}

function closeAddPlace() {
    addPlace.classList.remove("popup_visible");
}

function closeEditBox() {
    profileEditor.classList.remove("popup_visible");
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

editProfileButton.addEventListener("click", openEditBox);

editProfileExitButton.addEventListener("click", closeEditBox);

formProfile.addEventListener("submit", profileFormSubmit);

addPlaceButton.addEventListener("click", openAddPlace);

addPlaceExitButton.addEventListener("click", closeAddPlace);

for (let i=0; i<=placeImage.length-1; i++) {
    placeImage[i].addEventListener("click", function() {
        imagePopup.classList.add("popup_visible");
    })
}

for (let i=0; i<=likeButton.length-1; i++) {
    likeButton[i].addEventListener("click", function() {
        likeButton[i].classList.toggle("place__button_filled")
        likeButton[i].classList.toggle("place__button_type_unfilled")
    })
}