import Popup from "./Popup.js";

// Popup class for expanding card images

export default class PopupWithImage extends Popup {

    constructor(popupSelector, escKey) {
        super(popupSelector, escKey);
        this._popupImage = this._popup.querySelector(".popup-image-container__pic");
        this._popupTitle = this._popup.querySelector(".popup-image-container__title")
    }

    // Modify opening to include insertion of image and title data
    open( {data} ) {
        this._popupImage.src = data.link;
        this._popupImage.alt = data.name;
        this._popupTitle.textContent = data.name;
        super.open();
        
    };
}
