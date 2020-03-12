class Route{
    constructor( name, date, description, routeElements, comments, media ){
        this.name = name;
        this.date = date;
        this.description = description;
        this.routeElements = routeElements;
        this.comments = comments;
        this.media = media;
    }

    getName(){
        return this.name;
    }

    getDate(){
        return this.date;
    }

    getDescription(){
        return this.description;
    }

    getRouteElements(){
        return this.routeElements;
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