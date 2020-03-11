class User{
    constructor(name){
        this.name = name;
        this.routes = [];
    }

    addRoute(route){
        this.routes.push(route);
    }
}