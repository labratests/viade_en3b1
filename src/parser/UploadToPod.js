import auth from 'solid-auth-client';
import PodHandler from './PodHandler';

// const auth = require('solid-auth-client');


export async function uploadMedia(media) {
    let session = await auth.currentSession();
    let storageHandler = new PodHandler(session);
    // let fileName = route.getName() + "@" + route.getId() + ".jsonld";
    // storageHandler.storeRoute(fileName, route.getJsonLD(), (urlInPod, response) => {
    //     let alertText = "";
    //     if (urlInPod === null) {
    //         alertText = "ERROR"; // error
    //     } else {
    //         alertText = "SUCCESS"; // success
    //     }
    //     alert(alertText);
    // });
}

export async function uploadRoute(route) {
    let session = await auth.currentSession();
    let storageHandler = new PodHandler(session);
    let fileName = route.getName() + "@" + route.getId() + ".jsonld";
    storageHandler.storeRoute(fileName, route.getJsonLD(), (urlInPod, response) => {
        let alertText = "";
        if (urlInPod === null) {
            alertText = "ERROR"; // error
        } else {
            alertText = "SUCCESS"; // success
        }
        alert(alertText);
    });
}