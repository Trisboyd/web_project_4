// VALIDATION

// Enables validation message to appear
const showError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
}

// Hides validation message
const hideError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = "";
}

// Checks whether forms passes validation and applies messages
const checkFormValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showError(formElement, inputElement, inputElement.validationMessage);
    }
    else {
        hideError(formElement, inputElement);
    }
}

// Checks inputs for valid input
const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
})
}

// Removes submit function and applies new styles if forms fail validation
const toggleSubmitButton = (inputList, formElement, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(settings.inactiveButtonClass);
        formElement.removeEventListener("submit", profileFormSubmit)
        formElement.removeEventListener("submit", addNewPlace);
        profileSubmit.disabled = true;
        addPlaceSubmit.disabled = true;
    } 
    else {
        buttonElement.classList.remove(settings.inactiveButtonClass);
        checkFormType(formElement);
        profileSubmit.disabled = false;
        addPlaceSubmit.disabled = false;
    }
};

// Checks which type of form in order to add submit functions back to proper forms
const checkFormType = formElement => {
    if (formElement.classList.contains("edit-box_profile")) {
        formElement.addEventListener("submit", profileFormSubmit);
    }
    else {formElement.addEventListener("submit", addNewPlace)}
}

// Adds event listeners to all forms
const setFormEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
    const buttonElement = formElement.querySelector(settings.submitButtonSelector);
    toggleSubmitButton(inputList, formElement, buttonElement);
    inputList.forEach(inputElement => {
        inputElement.addEventListener("input", function (evt) {
            checkFormValidity(formElement, inputElement);
            toggleSubmitButton(inputList, formElement, buttonElement);
        })
    })
}

// Applies all validation styles and functions to forms
function enableFormValidation(settings) {
    const formList = Array.from(document.querySelectorAll(settings.formSelector));
    formList.forEach(formElement => {
        formElement.addEventListener("submit", function (evt) {
            evt.preventDefault();
        })
        setFormEventListeners(formElement);
    })
}

const settings = {
    formSelector: ".edit-box",
    inputSelector: ".edit-box__text",
    submitButtonSelector: ".edit-box__submit",
    inactiveButtonClass: "edit-box__submit_inactive",
    inputErrorClass: ".edit-box__text_type_error",
    errorClass: ".edit-box__error_visible"
  }; 

enableFormValidation(settings);