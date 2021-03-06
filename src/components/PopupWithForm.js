import Popup from "./Popup.js";


// PopupWithForm Class

export default class PopupWithForm extends Popup {

    constructor({ formSubmission }, popupSelector, escKey) {
        super(popupSelector, escKey);
        this._formSubmit = formSubmission;
        // formSubmission should be the function that processes the submission of data into the popup
        this._inputList = Array.from(this._popup.querySelectorAll(".edit-box__text"));
    }

    // Takes data from form inputs
    _getInputValues() {
        this.inputObject = {};
        this._inputList.forEach((input) => {
            const textInput = input.value;
            this.inputObject[input.name] = textInput;
        });
        return this.inputObject;
    };

    // Modify close to include reseting input fields
    close() {
        super.close();
        this._form.reset();
    }

    // Modify event listeners for submission
    setEventListeners() {
        super.setEventListeners();
        this._form = this._popup.querySelector(".edit-box");
        this._form.addEventListener("submit", () => {
            this._submitForm();
        })
    };

    // Calls formSubmission and closes popup
    _submitForm() {
        this._formSubmit(this._getInputValues());
    }

    // indicate to user that process is occuring
    renderLoading(isLoading) {
        const submitButton = this._popup.querySelector(".edit-box__submit");
        if (isLoading) {
            submitButton.textContent = "Saving...";
        }
        else {
            submitButton.textContent = submitButton.value;
        }
    }
}

