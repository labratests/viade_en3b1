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

export function getRoutes(user){
    return User.routes;
}

export default User;