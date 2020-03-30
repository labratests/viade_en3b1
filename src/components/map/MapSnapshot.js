import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup,Polyline } from 'react-leaflet';
import * as data from "../../demoData/demoRoute.json";

export default class MapSnapshot extends Component {
  points = data.features.map(point => (
    [point.geometry.coordinates[0],point.geometry.coordinates[1]]
    ));
  
  setPopup = () =>{}

  render() {
    return (
      <Map bounds={this.points} doubleClickZoom={false} dragging={false} keyboard={false}
       scrollWheelZoom={false} tap={false} touchZoom={false} zoomControl={false} boxZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polyline   positions={data.features.map(point => (
          [point.geometry.coordinates[0],point.geometry.coordinates[1]]
          ))} color='blue'/>
        ))}
      </Map>
    )
  }
}