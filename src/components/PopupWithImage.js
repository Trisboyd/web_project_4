// IMPORTS

import {imagePopupPic, imagePopupTitle} from "../utilities/constants.js";

import Popup from "./Popup.js";


// Popup class for expanding card images

export default class PopupWithImage extends Popup {

    constructor(popupSelector) {
        super(popupSelector);
    }

    // Modify opening to include insertion of image and title data
    open( {data} ) {
        imagePopupPic.src = data.link;
        imagePopupPic.alt = data.name;
        imagePopupTitle.textContent = data.name;
        super.open();
        
    };
}
