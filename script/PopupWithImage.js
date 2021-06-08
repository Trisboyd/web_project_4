// NEED TO IMPORT THESE
const imagePopupPic = document.querySelector(".popup-image-container__pic");

const imagePopupTitle = document.querySelector(".popup-image-container__title")



import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {

    constructor(popupSelector) {
        super(popupSelector);
    }

    // Modify opening to include insertion of image and title data
    open(data) {
        imagePopupPic.src = data.link;
        imagePopupPic.alt = data.name;
        imagePopupTitle.textContent = data.name;
        super.open();
        
    };
}
