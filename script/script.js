// let like_button = document.querySelectorAll(".place__like-button");

let editProfileButton = document.querySelector(".profile__edit-button");

let editExitButton = document.querySelector(".edit-box__exit")

let profileEditor = document.querySelector(".popup");

let profileName = document.querySelector(".profile__name");

let profileDescriptor = document.querySelector(".profile__descriptor");

let editName = document.querySelector(".edit-box__text_type_name");

let editDescriptor = document.querySelector(".edit-box__text_type_descriptor");

let saveButton = document.getElementById("save-button");

let likeButton = document.querySelectorAll(".place__button");

let form = document.querySelector(".edit-box");


function openEditBox() {
    profileEditor.classList.add("popup_visible");
    editName.value = profileName.textContent;
    editDescriptor.value = profileDescriptor.textContent;
}

function closeEditBox() {
    profileEditor.classList.remove("popup_visible");
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = editName.value;
    profileDescriptor.textContent = editDescriptor.value;
    closeEditBox();
}

editProfileButton.addEventListener("click", openEditBox);

editExitButton.addEventListener("click", closeEditBox);

form.addEventListener("submit", handleFormSubmit);

// for later in this project
// for (let i=0; i<=likeButton.length-1; i++) {
//             likeButton[i].addEventListener("click", function() {
//                 likeButton[i].classList.toggle("place__button_fill_none")
//                 likeButton[i].classList.toggle("place__button_fill_black")
//             })
//     }
