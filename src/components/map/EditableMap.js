import React, { Component } from 'react'
import { Map, Polyline, TileLayer, Marker } from 'react-leaflet';

export class EditableMap extends React.Component {

    constructor() {
		super();
        this.state = { points: [] };
	}

    addPoint = (e) => {
		this.state.points.push(e.latlng);
		this.setState({ points: this.state.points.slice() });
    }

    updatePoint = (event) => {
		var id = event.target.options.marker_index;
		var position = event.target.getLatLng();
		const { points } = this.state;

		points[id] = position;
		this.setState({ points: points.slice() });
	}

	removePoint = (event) => {
		if (event.originalEvent.key === 'Backspace') {
			var id = event.target.options.marker_index;
			const { points } = this.state;
			points.splice(id, 1);
			this.setState({ points: points.slice() });
		}
	}
    
    getTrackPoints() {
        return this.state.points.slice();
    }

    render() {
        const position = [43.3619145, -5.8493887];

        return (
            <React.Fragment>
                <Map
                    center={position}
                    zoom={12}
                    style={{ width: "52vh", height: "40vh" }}
                    onClick={this.addPoint}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />

                    <Polyline positions={this.state.points} color='orange' />

                    {this.state.points.map((position, index) =>
                        <Marker
                            marker_index={index}
                            position={position}
                            draggable={true}
                            ondrag={this.updatePoint}
                            onkeydown={this.removePoint}
                        >
                        </Marker>
                    )}
                </Map>
            </React.Fragment>
        )
    }
}

export default EditableMap