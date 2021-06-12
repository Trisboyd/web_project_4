// NEED TO IMPORT escKey
import {escKey} from "../utilities/constants.js";

export default class Popup {

    constructor(popupSelector) {
        this._popup = document.querySelector(`.${popupSelector}`);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open() {
        this._popup.classList.add("popup_visible");
        document.addEventListener("keyup", this._handleEscClose)
    };

    close() {
        this._popup.classList.remove("popup_visible");
    };

    _handleEscClose(event) {
        if (event.which === escKey) {
            this.close(this._popup);
        };
    }   


    setEventListeners() {
        document.addEventListener("click", (event) => {
            const targetElement = event.target;
            if (targetElement.classList.contains("popup_visible")) {
                this.close();
            }
            if (targetElement.classList.contains("popup__exit")) {
                this.close();
                }
            })

    };
}