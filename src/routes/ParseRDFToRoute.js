import {Route} from './entities/Route.js';
import { fromRDF } from 'jsonld';

class ParseRDFToRoute{
    
    constructor(file){
        this.file=file;
    }

    parse(){       
        
        
        var jsonRoute = JSON.parse( fromRDF(this.file) );

        var name = "";
        var description = "";
        var date = "";
        var routeElements = [];
        var comments = [];
        var media = [];

       for(var element in jsonRoute){

           if(element === "name"){
                name = "value";
           } else if (element === "description"){
                description = "value";
           } else if (element === "date"){
                date = "value";
           } else if (element === "comment"){
                // iterate the comments and push each of them
           } else if (element === "media"){
                // iterate the media and push each of them
           } else if (element === "coordinates"){
                // iterate the coordinates and push each of them
           }
       }
        
        return new Route(name, date, description, routeElements, comments, media);

    }

}