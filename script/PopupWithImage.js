import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {

    constructor(popupSelector) {
        super(popupSelector);
    }

    // Modify opening to include insertion of image and title data
    open();
}