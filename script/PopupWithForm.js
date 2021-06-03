import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {

    constructor(popupSelector) {
        super(popupSelector);
    }

    // Takes data from form inputs
    _getInputValues();

    // Modify event listeners for submission
    setEventListeners();

    // Modify close to include reseting input fields
    close();
}