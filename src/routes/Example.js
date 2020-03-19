import Route from "../entities/Route.js";
import RouteElement from "../entities/RouteElement.js";
import ParseRouteToGeoJSON from "../parser/ParseRouteToGeoJSON.js";

class Example{
    constructor(){
        this.trackpoints = []

        var point1= new RouteElement("point 1", 43.359683,-5.850272, 0);
        var point2= new RouteElement("Point 2", 43.361770, -5.848060, 0);
        var point3= new RouteElement("Point 3", 43.363291, -5.850281, 0);
        var point4= new RouteElement("Point 4", 43.364970, -5.853963, 0);

        this.trackpoints.push(point1);
        this.trackpoints.push(point2);
        this.trackpoints.push(point3);
        this.trackpoints.push(point4);

        this.route = new Route("Mock Route", "", "This is a simulation of how routes can be displayed", this.trackpoints, "", "");
    }

    parse(){
        return new ParseRouteToGeoJSON(this.route).parse();
    }

}
    export default Example;