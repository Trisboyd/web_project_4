export default class UserInfo {

    constructor(name, descriptor) {
        this._name = document.querySelector(`.${name}`);
        this._descriptor = document.querySelector(`.${descriptor}`);
    }

    getUserInfo() {
        this._userInfo = {
            name: this._name.textContent,
            descriptor: this._descriptor.textContent
        }
        return this._userInfo;
    }

    setUserInfo(data) {
        this._name.textContent = data.name;
        this._descriptor.textContent = data.descriptor;
    }
 
}