import Popup from "./Popup.js";

// PopupDelete class

export default class PopupDelete extends Popup{

    constructor(popupSelector, escKey) {
        super(popupSelector, escKey);
    }

    setEventListeners({formSubmission}) {
        super.setEventListeners();
        this._form = this._popup.querySelector(".edit-box");
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this.close();
            formSubmission();
        })
    }
}