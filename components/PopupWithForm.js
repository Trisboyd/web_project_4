// IMPORTS

import {profileName, profileDescriptor, editName, editDescriptor} from "../utilities/constants.js";

import Popup from "./Popup.js";


// PopupWithForm Class

export default class PopupWithForm extends Popup {

    constructor( {formSubmission}, popupSelector) { 
        super(popupSelector);
        this._formSubmit = formSubmission;
        this._formSubmit = this._formSubmit.bind(this);
        // formSubmission should be the function that processes the submission of data into the popup
    }

    // Takes data from form inputs
    _getInputValues() {
        this._popupArray = Array.from(this._popup.querySelectorAll(".edit-box__text"));
        this.inputObject = {};
        this._popupArray.forEach((input) => {
            const textInput = input.value;
            this.inputObject[input.name] = textInput;
        });
        return this.inputObject;
    };

    open() {
        super.open();
        if (this._popup.classList.contains("popup_profile-edit")) {
            editName.value = profileName.textContent;
            editDescriptor.value = profileDescriptor.textContent;
        };
    }

    // Modify close to include reseting input fields
    close() {
        this._form.removeEventListener("submit", this._formSubmit)
        super.close();
        if (this._popup.classList.contains("popup_add-place")) {
            this._form.reset();
        }
    }

    // Modify event listeners for submission
    setEventListeners() {
        super.setEventListeners();
        this._form = this._popup.querySelector(".edit-box");
        this._form.addEventListener("submit", () => {
            this._submitForm();
        })
    };

    _submitForm() {
        this._formSubmit(this._getInputValues());
        this.close();
    }
}