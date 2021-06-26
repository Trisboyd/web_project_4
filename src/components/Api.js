// API class for server connections

export default class Api {

    constructor(server, authToken) {
        this._url = server;
        this._authToken = authToken;
    }

    // gather profile data
    getProfile() {
        return fetch(`${this._url}/users/me`, {
            headers: {
                authorization: this._authToken}
            })
            .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`) )
            .catch(err => {console.log(err)});
    }

    // gather cards from server
    getCardList() {
        return fetch(`${this._url}/cards`, {
            headers: {
                authorization: this._authToken}
            })
            .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
            .catch(err => {console.log(err)});
    }

    // update profile info on server based on user changes
    changeProfile({ data }) {
        return fetch(`${this._url}/users/me`, {
            method: "PATCH",
            headers: {
                authorization: this._authToken,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: data.name,
                about: data.descriptor
            })
        })
            .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
            .catch(err => {console.log(err)})
    }

    // add card to server
    addCard({data}) {
        return fetch(`${this._url}/cards`, {
            method: "POST",
            headers: {
                authorization: this._authToken,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
        .catch(err => {console.log(err)})
    }

    // delete card from server
    deleteCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}`, {
            method: "DELETE",
            headers: {
                authorization: this._authToken
            }
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
        .catch(err => {console.log(err)})
    }

    // add a like to a card in the server
    addLike(cardId) {
        return fetch(`${this._url}/cards/likes/${cardId}`, {
            method: "PUT",
            headers: {
                authorization: this._authToken
            }
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
        .catch(err => {console.log(err)})
    }

    // remove a like from a card in the server
    removeLike(cardId) {
        return fetch(`${this._url}/cards/likes/${cardId}`, {
            method: "DELETE",
            headers: {
                authorization: this._authToken
            }
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
        .catch(err => {console.log(err)})
    }

    // changer avatar (you guessed it... in the server)
    changeAvatar(link) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: "PATCH",
            headers: {
                authorization: this._authToken,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                avatar: link
            })
        })
            .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
            .catch(err => {console.log(err)})
    }
}