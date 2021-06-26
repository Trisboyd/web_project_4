// profile variables
export const editProfileButton = document.querySelector(".profile__edit-button");

export const editName = document.querySelector(".edit-box__text_type_name");

export const editDescriptor = document.querySelector(".edit-box__text_type_descriptor");

export const profilePic = document.querySelector(".profile__pic");

export const profilePicEdit = document.querySelector(".profile__pic_edit");

export const profileImageContainer = document.querySelector(".profile__image-container");

// Add Card/Place variables
export const addPlaceButton = document.querySelector(".profile__add-place-button");

// Define ESC key and allow pressing ESC key to close modal window
export const escKey = 27;

// Places Grid Variable
export const places = document.querySelector(".places");

// Server url
export const server = "https://around.nomoreparties.co/v1/group-12";

// Server authorization
export const token = "aa7e78f0-aba7-4938-a0ab-42cab952d914";

// Settings for Form Validation

export const settings = {
    formSelector: ".edit-box",
    inputSelector: ".edit-box__text",
    submitButtonSelector: ".edit-box__submit",
    inactiveButtonClass: "edit-box__submit_inactive",
    inputErrorClass: "edit-box__text_type_error",
    errorClass: ".edit-box__error_visible"
  };

// Form Variables
export const profileForm = document.querySelector(".edit-box_profile");
export const placeForm = document.querySelector(".edit-box_place");
export const avatarForm = document.querySelector(".edit-box_avatar");