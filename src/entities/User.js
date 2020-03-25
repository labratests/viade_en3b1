class User{
    constructor(name){
        this.name = name;
        this.routes = [];
    }

    addRoute(route){
        this.routes.push(route);
    }

    getRoutes(){
        return this.routes.slice().sort((a,b) => b.getDate() - a.getDate());
    }
}

export default User;