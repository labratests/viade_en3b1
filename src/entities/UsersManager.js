import User from "./User";
import LoadFromPod from '../parser/LoadFromPod.js';

class UsersManager{

    static createUserAndLoadRoutes(webid){
        let loadFromPod = new LoadFromPod();
        var username = webid.slice(8).split(".");
        var user = new User(username[0]);
        loadFromPod.loadAll(user);
    }

}

export default UsersManager;