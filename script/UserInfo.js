const profileName = document.querySelector(".profile__name");

const profileDescriptor = document.querySelector(".profile__descriptor");

export default class UserInfo {

    constructor(data) {
        this._name = data.name;
        this._descriptor = data.descriptor;
    }

    getUserInfo() {
        this._userInfo = {
            userName: this._name.textContent,
            userDescriptor: this._descriptor.textContent
        }
        return this._userInfo;
    }

    setUserInfo() {
        profileName.textContent = this._userInfo.userName;
        profileDescriptor.textContent = this._userInfo.userDescriptor;
    }
}