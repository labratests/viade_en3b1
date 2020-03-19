import {Route, Media, Comment, RouteElement} from './entities/*';
import { fromRDF } from 'jsonld';
import {loadFromPod} from 'LoadFromPod.ts';

class ParseRDFToRoute{
    
    constructor(url){
        this.file=loadFromPod.loadFile(url);
    }

    parse(){       
        
        
        var jsonRoute = JSON.parse( fromRDF(this.file) );

        var name = "";
        var description = "";
        var date = "";
        var routeElements = [];
        var comments = [];
        var media = [];

        name = jsonRoute.getString("Name");
        description = jsonRoute.getString("Description");
        date = jsonRoute.getString("Date");

        var jsonArray = jsonRoute.getJSONArray("elements");
        var element = new RouteElement("", 0, 0, 0);

        jsonArray.forEach(arrayElement => {
            element.name = arrayElement.getString("name");
            element.elevation = arrayElement.getString("elevation");
            element.londitude = arrayElement.getString("longitude");
            element.latitude = arrayElement.getString("latitude");
            routeElements.push(element);
        });

        jsonArray = jsonRoute.getJSONArray("media");
        element = new Media("");

        jsonArray.forEach(arrayElement => {
            element.url = arrayElement.getString("url");
            media.push(element);
        });

        jsonArray = jsonRoute.getJSONArray("comments");
        element = new Comment("");

        jsonArray.forEach(arrayElement => {
            element.text = arrayElement.getString("text");
            comments.push(element);
        });

        
        return new Route(name, date, description, routeElements, comments, media);

    }

}

export default ParseRDFToRoute;