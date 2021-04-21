const places = document.querySelector(".places");

// define variables and put info into placeCards

function writePlace(placeCards) {
    placeCards.forEach(card => {
        const placeTemplate = document.querySelector("#place-template").content.querySelector(".place");
        const placeElement = placeTemplate.cloneNode(true);
        const placeImage = placeElement.querySelector(".place__image");
        const placeName = placeElement.querySelector(".place__name");
        const placeButton = placeElement.querySelector(".place__button");
        const trashButton = placeElemebt.querySelector(".place__trash");
        placeImage.style.background = `url(${place.link})`;
        placeName.textContent = place.name;
        likeButtonChange(placeButton);
        removePlace(trashButton, placeElement);
        imageExpand(placeImage, placeName);
        imageClose(imagePopupExit);
    })
}

// Render placeCards

function renderPlaces(placeCards, container) {
    container.append(placeCards);
}

// Toggle Like Buttons

function likeButtonChange(placeButton) {
    placeButton.addEventListener("click", function () {
        placeButton.classList.toggle("place__button_type_unfilled")
        placeButton.classList.toggle("place__button_type_filled")
    });
}

// Remove placeCards with trash button 

function removePlace(trashButton, placeElement) {
    trashButton.addEventListener("click", function(evt) {
        evt.target.closest(placeElement).remove();
    });
}

// Open Image Popup

function imageExpand(placeImage, placeName) {
    placeImage.addEventListener("click", function(evt) {
        document.querySelector(".popup__image_pic").style.background = `url(${evt.target.style.background})`;
        document.querySelector(".popup__image_title").textContent = `${placeName.textContent}`;
        changePopup(imagePopup);
    });
}

// Close Image Popup

function imageClose(exitButton) {
    exitButton.addEventListener("click", function() {
        changePopup(imagePopup);
    });
}

// Call the Render Function

renderPlaces(initialcards, places);