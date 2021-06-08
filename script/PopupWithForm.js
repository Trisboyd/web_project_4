// IMPORT THESE CONSTANTS

const profileName = document.querySelector(".profile__name");

const profileDescriptor = document.querySelector(".profile__descriptor");

const formSubmitButton = document.querySelector(".edit-box__submit");

const editName = document.querySelector(".edit-box__text_type_name");

const editDescriptor = document.querySelector(".edit-box__text_type_descriptor");


import Popup from "./Popup.js";

// PopupWithForm Class

export default class PopupWithForm extends Popup {

    constructor(formSubmission, popupSelector) { 
        super(popupSelector);
        this._formSubmit = formSubmission;
        // formSubmission should be the function that processes the submission of data into the popup
    }

    // Takes data from form inputs
    _getInputValues() {
        this._popupArray = Array.from(this._popup.querySelectorAll(".edit-box__text"));
        this._inputObject = {};
        this._popupArray.forEach((input) => {
            this._inputObject[this._popupArray.indexOf(input)] = input;
        });
        return this._inputObject;
    };

    open() {
        super.open();
        if (this._popup.classList.contains("popup_profile-edit")) {
            editName.textContent = profileName.textContent;
            editDescriptor.textContent = profileDescriptor.textContent;
        };
    }

    // Modify event listeners for submission
    setEventListeners() {
        super.setEventListeners();
        this._form = this._popup.querySelector(".edit-box");
        this._form.addEventListener("submit", () => {
            this._getInputValues();
            this._formSubmit(this._inputObject);
        })
    };

    // Modify close to include reseting input fields
    close() {
        super.close();
        this._form.reset();
    }
}