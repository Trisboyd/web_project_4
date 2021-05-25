class FormValidator {

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
            this._showError(inputElement, inputElement.validationMessage);
        }
        else {
            this._hideError(inputElement);
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
        if (this._hasInvalidInput(inputList)) {
            buttonElement.classList.add(this._inactiveButtonClass);
            buttonElement.disabled = true;
        } 
        else {
            buttonElement.classList.remove(this._inactiveButtonClass);
            buttonElement.disabled = false;
        }
    };

    // Adds event listeners to all forms
    _setEventListeners = () => {
        const inputList = Array.from(this._element.querySelectorAll(this._inputSelector));
        const buttonElement = this._element.querySelector(this._submitButtonSelector);
        this._toggleSubmitButton(inputList, buttonElement);
        inputList.forEach(inputElement => {
            inputElement.addEventListener("input", () => {
                this._checkFormValidity(inputElement);
                this._toggleSubmitButton(inputList, buttonElement);
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
}

export {FormValidator};




