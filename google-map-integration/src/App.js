import React from 'react' ;
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";

export default class App extends React.Component {
    render(){
        const MapWithAMarker = withScriptjs(withGoogleMap(props =>
            <GoogleMap
              defaultZoom={10}
              defaultCenter={{ lat: 27.688716, lng: 84.411257 }}
            >
              <Marker
                position={{ lat: 27.688716, lng: 84.411257 }}
              />
            </GoogleMap>
          ));
        return(
            <div>
                <MapWithAMarker
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` , width: '50%' }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        );
    }
}