import User from "./User";
import {loadFromPod} from 'LoadFromPod.js';

class UsersManager{

    static createUserAndLoadRoutes(webid){
        var username = webid.slice(8).split(".");
        var user = new User(username[0]);
        loadFromPod.loadAll(user);
    }
}

export default UsersManager;