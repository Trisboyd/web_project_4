export default class FormValidator {

    constructor (settings, formElement) {
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._errorClass = settings.errorClass;
        this._element = formElement;
    }

    // Enables validation message to appear
    _showError = (inputElement, errorMessage) => {
        const errorElement = this._element.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass)
        errorElement.textContent = errorMessage;
    }   

    // Hides validation message
    _hideError = (inputElement) => {
        const errorElement = this._element.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass)
        errorElement.textContent = "";
    }

    // Checks whether forms passes validation and applies messages
    _checkFormValidity = (inputElement) => {
        if (!inputElement.validity.valid) {
            this._showError(inputElement, inputElement.validationMessage);
        }
        else {
            this._hideError(inputElement);
        }
    }

    // Checks inputs for valid input
    _hasInvalidInput = () => {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        })
    }

    // Removes submit function and applies new styles if forms fail validation
    _toggleSubmitButton = () => {
        if (this._hasInvalidInput()) {
            this._buttonElement.classList.add(this._inactiveButtonClass);
            this._buttonElement.disabled = true;
        } 
        else {
            this._buttonElement.classList.remove(this._inactiveButtonClass);
            this._buttonElement.disabled = false;
        }
    };

    // Adds event listeners to all forms
    _setEventListeners = () => {
        this._inputList = Array.from(this._element.querySelectorAll(this._inputSelector));
        this._buttonElement = this._element.querySelector(this._submitButtonSelector);
        this._toggleSubmitButton();
        this._inputList.forEach(inputElement => {
            inputElement.addEventListener("input", () => {
                this._checkFormValidity(inputElement);
                this._toggleSubmitButton();
            })
        })
    }

    // Applies all validation styles and functions to forms
    enableFormValidation() {
        this._element.addEventListener("submit", function (evt) {
            evt.preventDefault();
        })
        this._setEventListeners();
    }

    resetValidation() {
        this._toggleSubmitButton();
        this._inputList.forEach((inputElement) => {
            this._hideError(inputElement);
        });
    }
}




