let like_button = main.querySelectorAll(".place__like-button");

let editProfileButton = main.querySelector(".profile__edit-button");

let profileEditor = main.querySelector(".edit-profile");



function changeDisplay () {
    profileEditor.classList.toggle("edit-profile__display");
}

editProfileButton.addEventListener("click", changeDisplay());