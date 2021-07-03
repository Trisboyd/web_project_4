import Popup from "./Popup.js";

import PopupWithForm from "./PopupWithForm.js";

// PopupDelete class

export default class PopupDelete extends Popup{

    constructor(popupSelector, escKey) {
        super(popupSelector, escKey);
    }

    setEventListeners() {
        super.setEventListeners();
        this._form = this._popup.querySelector(".edit-box");
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._formSubmit();
        })
    }

    setDeleteHandler({formSubmission}) {
        this._formSubmit = formSubmission;
    }
}