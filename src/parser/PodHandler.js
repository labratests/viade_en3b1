const auth = require('solid-auth-client');
const FC = require('solid-file-client');
const fc = new FC(auth);

class PodHandler {

    constructor(session) {
        this.session = session;

        this.pod="https://" + session.webId.split('/')[2];
        this.viadeFolder = "/viade/";

        this.routesFolder = "routes/";
        this.resourcesFolder = "resources/"; // for photos and videos 
        this.commentsFolder = "comments/";
    }

    storeRoute(fileName, routeJson, callback = () => {}) {
        let url = this.pod + this.viadeFolder + this.routesFolder + fileName;
        this.storeFile(url, routeJson, callback)
    }

    storeMedia() {

    }

    storeFile(url, data, callback) {
        let response = fc.createFile(url, data);
        response.then(
            (response) => { callback(response.url, response); }
            , (error) => { callback(null, error); }
        );
    }
}

export default PodHandler;