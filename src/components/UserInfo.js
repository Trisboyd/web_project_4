export default class UserInfo {

    constructor(name, descriptor, avatar, profile) {
        this._name = document.querySelector(`.${name}`);
        this._descriptor = document.querySelector(`.${descriptor}`);
        this._avatar = document.querySelector(`.${avatar}`);
    }

    setUserInfo(data) {
        this._name.textContent = data.name;
        this._descriptor.textContent = data.descriptor;
        this._avatar.src = data.avatar;
        this._userId = data.userId;
    }

    getUserInfo() {
        this._userInfo = {
            name: this._name.textContent,
            descriptor: this._descriptor.textContent,
            avatar: this._avatar,
            userId: this._userId
        }
        return this._userInfo;
    }

    getUserId() {
        return this._userId;
    }
}