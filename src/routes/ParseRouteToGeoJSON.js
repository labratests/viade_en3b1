class ParseRouteToGeoJSON{
    constructor(route){
        this.route=route;
    }

    parse(){

        var strData = "<ul><li>type: Route</li>";
        strData += "<li>name: " + this.route.getName() + "</li>";
            
        strData +=  "<li>geometry: </li>";
        strData += "<ul>coorditanes: ";

        strData += "<ul>"
            
        this.route.array.forEach(routeElement => {
            strData += "<li>" + routeElement.getName() + " [ " + routeElement.getLatitude() + " , " + routeElement.getLongitude() + " ]</li>";
        });

        strData += "</ul>";
        strData += "</ul>";  
          
        return strData;
    }
}