let like_button = document.querySelectorAll(".place__like-button");

let editProfileButton = document.querySelector(".profile__edit-button");

let editExitButton = document.querySelector(".edit-box__exit")

let profileEditor = document.querySelector(".popup__container");

let profileName = document.querySelector(".profile__name");

let profileDescriptor = document.querySelector(".profile__descriptor");

let editName = document.getElementById("profile-name");

let editDescriptor = document.getElementById("profile-descriptor");

let saveButton = document.getElementById("save-button");

let likeButton = document.querySelectorAll(".place__button");


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

// function fillHeart(x) {
//     x.classList.toggle("place__button_fill_none");
//     x.classList.toggle("place__button_fill_black");
// }

// function likeButtonEvent() {
//     for (let i=0; i<=likeButton.length-1; i++) {
//         likeButton[i].addEventListener("click", fillHeart(likeButton[i]));
//     }
// }

// likeButtonEvent();

for (let i=0; i<=likeButton.length-1; i++) {
            likeButton[i].addEventListener("click", function() {
                likeButton[i].classList.toggle("place__button_fill_none")
                likeButton[i].classList.toggle("place__button_fill_black")
            })
    }
