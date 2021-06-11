const profileName = document.querySelector(".profile__name");

const profileDescriptor = document.querySelector(".profile__descriptor");

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
        profileName.textContent = data.name;
        profileDescriptor.textContent = data.descriptor;
    }

    // setUserInfo({data}) {
    //     profileName.textContent = data.input0;
    //     profileDescriptor.textContent = data.input1;
    // }
 
}