import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%', // Adjust the width as needed
  height: '400px' // Adjust the height as needed
};

const center = {
  lat: 0, // Replace with the latitude for the initial center of the map
  lng: 0  // Replace with the longitude for the initial center of the map
};

const MapComponent = () => {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCi7t-ZRpBL49k1XRdcKDgxrAhUUhI-TnI"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* You can add markers or other components here */ }
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MapComponent);
