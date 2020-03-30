class Route{
    constructor( name, date, time, description, routeElements, comments, media ){
        this.name = name;
        this.date = date;
        this.time = time;
        this.description = description;
        this.routeElements = routeElements;
        this.comments = comments;
        this.media = media;
        this.totalDistance = this.getTotalDistance();
    }

    getName(){
        return this.name;
    }

    getDate(){
        return this.date;
    }

    getTime(){
        return this.time;
    }

    getDescription(){
        return this.description;
    }

    getRouteElements(){
        return this.routeElements;
    }

    getTotalDistance(){
        var total = 0;
        var aux = 0;

        for (let i = 1; i < this.routeElements.length; i++) {
            aux = this.routeElements[i].getLatitude() - this.routeElements[i-1].getLatitude();
            total += this.addDistance(aux);
            aux = this.routeElements[i].getLongitude() - this.routeElements[i-1].getLongitude();
            total += this.addDistance(aux);
            aux = this.routeElements[i].getElevation() - this.routeElements[i-1].getElevation();
            total += this.addDistance(aux);
        }

        return total;
    }

    addDistance(aux){
        if(aux < 0){
            return -aux;
        } else {
            return aux;
        }
    }

    getComments(){
        return this.comments;
    }

    getMedia(){
        return this.media;
    }

    addMedia(media){
        this.media.push(media);
    }

    addRouteElement(routeElement){
        this.routeElements.push(routeElement);
    }

}

export default Route;