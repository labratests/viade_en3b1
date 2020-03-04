class Route{
    constructor( name, date, description, routeElements, media ){
        this.name=name;
        this.date=date;
        this.description=description;
        this.routeElements=routeElements;
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