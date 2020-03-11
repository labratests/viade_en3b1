class RouteElement{
    constructor( name, latitude, londitude, elevation ){
        this.name = name;
        this.latitude = latitude;
        this.londitude = londitude;
        this.elevation = elevation;
    }

    getName(){
        return this.name;
    }

    getLatitude(){
        return this.latitude;
    }

    getElevation(){
        return this.elevation;
    }

    getLongitude(){
        return this.londitude;
    }
}