const auth = require('solid-auth-cli')
const FC   = require('solid-file-client')
const fc   = new FC( auth )

class LoadFromPod{

    async loadFile(url){
        return await fc.readFile(url);
    }
    
}

let loadFromPod = new LoadFromPod();