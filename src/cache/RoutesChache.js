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
    async getRoutesFromPod() {
        if (this.routes.length === 0) {
            this.routes = await loadAllRoutes();
            console.log("ROUTES FROM POD (CACHE)");
            console.log(this.routes);
        }
        return this.routes;
    },
    getRoutesFromCache() {
        console.log("ROUTES FROM CACHE");
        console.log(this.routes);
        return this.routes;
    },
    clear() {
        this.routes = [];
        this.selected = null;
    }
}
