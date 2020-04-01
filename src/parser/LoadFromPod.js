import ParseRDFToRoute from "./ParseRDFToRoute";

const auth = require('solid-auth-cli')
const FC = require('solid-file-client')
const fc = new FC(auth)
const parser = new ParseRDFToRoute();

export async function loadAll() {
    let session = await auth.currentSession();
    var userWebId = user.toString();
    var viadeRoutes = userWebId.slice(0, userWebId.length - 16) + "/viade/routes";
    var files = [];

    try {
        if (await fc.itemExists(viadeRoutes)) {
            files = await fc.readFolder(viadeRoutes).files;
        }
        else {
            files.forEach(file => {
                user.addRoute(parser.parse(file));
            });
        }
    }
    catch (error) {
        console.log("##### ERROR #####")
        console.log(error)         // A full error response 
        console.log(error.status)  // Just the status code of the error
        console.log(error.message) // Just the status code and statusText
    }


}

async function loadFile(url) {
    return await fc.readFile(url);
}



export default LoadFromPod;