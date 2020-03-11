class ParseRouteToGeoJSON{
    constructor(route){
        this.route=route;
    }

    parse(){

        var strData = "{<ul><li>type: Route,</li>";
        strData += "<li>name: " + this.route.getName() + ",</li>";
    
        strData += "<li>trackpoints: [";
        for(var trackpoint in this.route.routeElements){
            strData += "{<li>type: TrackPoint,</li>";
            strData += "<li>properties: {"
            strData += "<li>name: " + trackpoint.getName() + "</li>},</li>";
            strData += "<li>geometry: {";
            strData += "<li>type: Point,<li>";
            strData += "<li>name: " + trackpoint.getName() + ",</li>";
            strData += "<li>coordinates: [" + trackpoint.getLongitude() + "," + trackpoint.getLatitude() + "]}";
            if(trackpoint !== this.route.routeElements.get(this.route.routeElements.length)){
                strData += ",";
            }
        }

        strData += "</ul>";

        strData += "]</li></ul>}";  
          
        return strData;
    }
}