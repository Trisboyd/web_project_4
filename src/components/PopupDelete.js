import Popup from "./Popup.js";

// PopupDelete class

export default class PopupDelete {

    constructor({formSubmission}, popupSelector, escKey) {
        super(popupSelector, escKey);
        this._formSubmission = formSubmission;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form = this._popup.querySelector(".edit-box");
        this._form.addEventListener("submit", () => {
            this._formSubmission();
        })
    }
}