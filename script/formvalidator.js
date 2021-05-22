class FormValidator {

    constructor (settings, formElement) {
        this._settings = settings;
        this._element = formElement;
    }

    // Enables validation message to appear
    _showError = (inputElement, errorMessage) => {
        const errorElement = this._lement.querySelector(`#${inputElement.id}-error`);
        errorElement.textContent = errorMessage;
    }   

    // Hides validation message
    _hideError = (inputElement) => {
        const errorElement = this._element.querySelector(`#${inputElement.id}-error`);
        errorElement.textContent = "";
    }

    // Checks whether forms passes validation and applies messages
    _checkFormValidity = (inputElement) => {
        if (!inputElement.validity.valid) {
            showError(inputElement, inputElement.validationMessage);
        }
        else {
            hideError(inputElement);
        }
    }

    // Checks inputs for valid input
    _hasInvalidInput = (inputList) => {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        })
    }

    // Removes submit function and applies new styles if forms fail validation
    _toggleSubmitButton = (inputList, buttonElement) => {
        if (hasInvalidInput(inputList)) {
            buttonElement.classList.add(this._settings.inactiveButtonClass);
            buttonElement.disabled = true;
        } 
        else {
            buttonElement.classList.remove(this._settings.inactiveButtonClass);
            buttonElement.disabled = false;
        }
    };

    // Adds event listeners to all forms
    _setFormEventListeners = () => {
        const inputList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
        const buttonElement = this._formElement.querySelector(this._settings.submitButtonSelector);
        toggleSubmitButton(inputList, buttonElement);
        inputList.forEach(inputElement => {
            inputElement.addEventListener("input", function (evt) {
                checkFormValidity(inputElement);
                toggleSubmitButton(inputList, buttonElement);
            })
        })
    }

    // Applies all validation styles and functions to forms
    enableFormValidation() {
        this._formElement.addEventListener("submit", function (evt) {
            evt.preventDefault();
        })
        setFormEventListeners(this._formElement);
    }
}

const settings = {
    formSelector: ".edit-box",
    inputSelector: ".edit-box__text",
    submitButtonSelector: ".edit-box__submit",
    inactiveButtonClass: "edit-box__submit_inactive",
    inputErrorClass: ".edit-box__text_type_error",
    errorClass: ".edit-box__error_visible"
  };

const profileForm = document.querySelector(".edit-box_profile");
const placeForm = document.querySelector(".edit-box_add-place");
const profileValidator = new FormValidator(settings, profileForm);
const addPlaceValidator = new FormValidator(settings, placeForm);

profileValidator.enableFormValidation();
addPlaceValidator.enableFormValidation();