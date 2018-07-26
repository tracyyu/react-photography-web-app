import React, { Component } from "react";
import Map from "./Map";
import locations from '../../assets/data/location.json';

export default class MapContainer extends Component {

	render() {
		return (
            <Map
                locations={locations}
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAsy3F7hIzf5Avuq458KRuXkV1oibJyomQ&v=3.exp&libraries=geometry,drawing,places`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `400px`, width: `100%` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		);
    }
}
