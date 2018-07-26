import React from "react";
import { Marker } from "react-google-maps";
import cameraIcon from '../../assets/images/cameraMarker.png';

export default class Markers extends React.Component {

  render(){
    return(
        <Marker
          position={this.props.location}
          icon={cameraIcon}
        >
        </Marker>
    );
  }
}