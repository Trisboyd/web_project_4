let like_button = document.querySelectorAll(".place__like-button");

let editProfileButton = document.querySelector(".profile__edit-button");

let editExitButton = document.querySelector(".edit-box__exit")

let profileEditor = document.querySelector(".popup__container");

let profileName = document.querySelector(".profile__name");

let profileDescriptor = document.querySelector(".profile__descriptor");

let editName = document.getElementById("profile-name");

let editDescriptor = document.getElementById("profile-descriptor");

let saveButton = document.getElementById("save-button");

function changeDisplay() {
    profileEditor.classList.toggle("popup__opened");
}

editProfileButton.addEventListener("click", changeDisplay);

editExitButton.addEventListener("click", changeDisplay);

function changeProfile(evt) {
    evt.preventDefault();
    profileName.textContent = editName.value;
    profileDescriptor.textContent = editDescriptor.value;
    changeDisplay();
};

saveButton.addEventListener("click", changeProfile);

