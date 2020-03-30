import ParseRDFToRoute from "./ParseRDFToRoute";

const auth = require('solid-auth-cli')
const FC   = require('solid-file-client')
const fc   = new FC( auth )
const parser = new ParseRDFToRoute();

class LoadFromPod{

    async loadAll(user){
        var userWebId = user.toString();
        var viadeRoutes = userWebId.slice(0, userWebId.length - 16) + "/public/viade/routes";
        var files = [];

        if(await fc.itemExists(viadeRoutes)){
            files = await fc.readFolder(viadeRoutes).files;
        }

        files.forEach(file => {
            user.addRoute(parser.parse(file));
        });
    }

    async loadFile(url){
        return await fc.readFile(url);
    }
    
}

export default LoadFromPod;