import { useWebId } from "@inrupt/solid-react-components"
import ParseRDFToRoute from "./ParseRDFToRoute";

const auth = require('solid-auth-cli')
const FC   = require('solid-file-client')
const fc   = new FC( auth )
const parser = new ParseRDFToRoute();

class LoadFromPod{

    loadAll(user){
        var userWebId = useWebId();
        var viadeRoutes = userWebId.substring(0, userWebId.length - 16) + "/public/viade/routes";
        var files = [];

        if(fc.itemExists(viadeRoutes)){
            files = fc.readFolder(viadeRoutes);
        }

        files.forEach(file => {
            user.addRoute(parser.parse(file));
        });
    }

    async loadFile(url){
        return await fc.readFile(url);
    }
    
}

let loadFromPod = new LoadFromPod();