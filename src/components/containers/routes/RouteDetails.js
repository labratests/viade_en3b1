import React from "react";
import NavBar from '../../graphic interface/NavBar.js';
import {useParams} from "react-router-dom";
import DetailsMap from "../../map/DetailsMap.js"
import Route from'../../../entities/Route.js';
import RouteElement from'../../../entities/RouteElement.js';

const UserRoutes = () => {
    let { id } = useParams();
    let myroute = new Route('ruta3','01/01/2020',260,'ruta muy larga',[
        new RouteElement(1,43.526225, -5.669465,0),
        new RouteElement(2,43.533587, -5.683302,0),
        new RouteElement(3,43.540584, -5.693542,0),
        new RouteElement(4,43.549988, -5.708704,0),
        new RouteElement(5,43.551855, -5.716201,0)
      ]);
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <h3>ID: {id}</h3>
      </div>
      <div>
        <DetailsMap route = {myroute} ></DetailsMap>
      </div>
    </div>
  );
};

export default UserRoutes;