import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup,Polyline } from 'react-leaflet';

export default class ViadeMap extends Component {
    constructor(data){
        super();
        this.data = data;
        this.points = this.data.features.map(point => (
            [point.geometry.coordinates[0],point.geometry.coordinates[1]]
            ));
    }
  
  setPopup = () =>{}

  render() {
    return (
      <Map center={this.points[0,0]} zoom={16} >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polyline   positions={this.data.features.map(point => (
          [point.geometry.coordinates[0],point.geometry.coordinates[1]]
          ))} color='blue'/>
        
        {this.data.features.map(point => (
        <Marker key={point.properties.POSITION} 
        position={[
            point.geometry.coordinates[0],
            point.geometry.coordinates[1]]
        }>
          <Popup>
            {point.properties.POPUP}
          </Popup>
        </Marker>
        ))}
      </Map>
    )
  }
}