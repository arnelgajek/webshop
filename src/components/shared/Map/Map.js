import React from "react";
import { withGoogleMap, GoogleMap } from 'react-google-maps';

class Map extends React.Component {
  render() {

    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 56.832340, lng: 13.932947 } }
        defaultZoom = { 12 }
        >
        </GoogleMap>
    ));

    return (
      <div className="ui container">
        <GoogleMapExample
          containerElement={ <div style={{ height:'350px', width:'100%'}} /> }
          mapElement={ <div style={{ height:'100%'}} /> }
          />
      </div>
    );
  }
}

export default Map;
