import React from "react";
import NavBar from '../../graphic interface/NavBar.js';
import {useParams} from "react-router-dom";

const UserRoutes = () => {
    let { id } = useParams();
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <h3>ID: {id}</h3>
      </div>
    </div>
  );
};

export default UserRoutes;