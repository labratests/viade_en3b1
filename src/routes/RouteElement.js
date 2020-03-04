class RouteElement{
    constructor( name, latitude, londitude ){
        this.name=name;
        this.latitude = latitude;
        this.londitude=londitude;
    }

    getName(){
        return this.name;
    }

    getLatitude(){
        return this.latitude;
    }

    getLongitude(){
        return this.londitude;
    }
}