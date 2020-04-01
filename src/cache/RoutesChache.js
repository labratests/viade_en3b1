import { loadAllRoutes } from '../parser/RouteHandler';

export default {
    routes: [],
    selected: "",
    // addRoute(route) {
    //     if(route && !this.routes.find(obj => route.name === obj.name)) {
    //         RouteGateway.add(route);
    //         this.routes.push(Object.assign({}, route));
    //     }
    // }, 
    async getRoutes() {
        if(this.routes.length === 0) {
            this.routes = await loadAllRoutes();
            console.log("ROUTESCACHE");
            console.log(this.routes);
        }
        return this.routes;
    }, 
    clear() {
        this.routes = [];
        this.selected = null;
    }
}
