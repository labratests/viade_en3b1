import User from "./User";
import LoadFromPod from '../parser/LoadFromPod.js';

class UsersManager{

    static createUserAndLoadRoutes(webid){
        let loadFromPod = new LoadFromPod();
        var username = webid.slice(8).split(".");
        this.user = new User(username[0]);
        loadFromPod.loadAll(this.user);
    }

}

export function getUser(){
    return UsersManager.user;
}

export default UsersManager;