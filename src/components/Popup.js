export default class Popup {

    constructor(popupSelector, escKey) {
        this._popup = document.querySelector(`.${popupSelector}`);
        this._handleEscClose = this._handleEscClose.bind(this);
        this._escKey = escKey;
    }

    open() {
        this._popup.classList.add("popup_visible");
        document.addEventListener("keyup", this._handleEscClose)
    };

    close() {
        this._popup.classList.remove("popup_visible");
        document.removeEventListener("keyup", this._handleEscClose)
    };

    _handleEscClose(event) {
        if (event.which === this._escKey) {
            this.close();
        };
    }   

    // indicate to user that process is occuring
    renderLoading(isLoading) {
        const submitButton = this._popup.querySelector(".edit-box__submit");
        if (isLoading) {
            submitButton.textContent = "Saving...";
        }
        else {submitButton.textContent = submitButton.value;
        }
    }

    setEventListeners() {
        this._popup.addEventListener("click", (event) => {
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
