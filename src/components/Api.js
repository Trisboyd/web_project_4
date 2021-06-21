class Api {

    constructor({ options }) {
        this._url = options.url;
        this._headers = options.headers;
    }

    getProfile() {
        fetch(this._url + "users/me")
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Error: ${res.status}`);
            })
    }

    getInitialCards() {
        fetch(this._url + "/cards")
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Error: ${res.status}`);
            })
    }

    changeProfile({ data }) {
        fetch(this._url + "users/me", {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.descriptor
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Error: ${res.status}`);
            })
    }

    addCard({ data }) {
        fetch(this._url + "/cards", {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Error: ${res.status}`);
            })
    }

    deleteCard(card) {
        fetch(this._url + "/cards" + `/${card.id}`, {
            method: "DELETE"
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Error: ${res.status}`);
            })

    }

    addLike(card) {
        fetch(this._url + "/cards/likes" + `/${card.id}`, {
            method: "PUT"
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Error: ${res.status}`);
            })
    }

    removeLike(card) {
        fetch(this._url + "/cards/likes" + `/${card.id}`, {
            method: "DELETE"
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Error: ${res.status}`);
            })

    }

    changeAvatar(link) {
        fetch(this._url + "users/me/avatar", {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar: link
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Error: ${res.status}`);
            })
    }
}