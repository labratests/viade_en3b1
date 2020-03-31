import React from "react";
import NavBar from '../../graphic interface/NavBar.js';
import {useParams} from "react-router-dom";
import RouteDetailsCard from "../../graphic interface/RouteDetailsCard.js"
import Route from'../../../entities/Route.js';
import RouteElement from'../../../entities/RouteElement.js';
import User from "../../../entities/User.js";

const RouteDetails = () => {
    let { id } = useParams();

    //datos falsos hasta integrar user
    let fakeUser = new User('fake');
    fakeUser.addRoute(new Route('ruta1','08/04/2020',123,'ruta larga',[
      new RouteElement(1,43.359683,-5.850272,0),
      new RouteElement(1,43.361770, -5.848060,0),
      new RouteElement(1,43.363291, -5.850281,0),
      new RouteElement(1,43.362667, -5.851740,0),
      new RouteElement(1,43.364970, -5.853963,0)
    ]));
    fakeUser.addRoute(new Route('ruta2','15/02/2020',15,'ruta muy corta',[
      new RouteElement(1,43.556428, -5.926715,0),
      new RouteElement(1,43.557540, -5.922617,0)
    ]));
    fakeUser.addRoute(new Route('ruta3','01/01/2020',260,'ruta muy larga',[
      new RouteElement(1,43.526225, -5.669465,0),
      new RouteElement(1,43.533587, -5.683302,0),
      new RouteElement(1,43.540584, -5.693542,0),
      new RouteElement(1,43.549988, -5.708704,0),
      new RouteElement(1,43.551855, -5.716201,0)
    ]));
    fakeUser.addRoute(new Route('ruta4','25/11/2019',64,'ruta corta',[
      new RouteElement(1,43.312144,-5.695810,0),
      new RouteElement(1,43.309761,-5.691106,0),
      new RouteElement(1,43.305206,-5.688753,0)
    ]));

    let myroute=fakeUser.getRoutes().filter((r) => (r.getName()==id));
    console.log( myroute ) ;
    console.log( myroute[0] ) ;

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <RouteDetailsCard route = {myroute[0]} ></RouteDetailsCard>
      </div>
    </div>
  );
};

export default RouteDetails;