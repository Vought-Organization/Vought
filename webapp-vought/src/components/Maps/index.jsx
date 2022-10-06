import React, { useEffect, useState } from 'react';

import GoogleMapReact from 'google-map-react';

import { Box } from '@mui/material';

function Maps() {
  const [geo, setGeo] = useState({ lat: 0, lng: 0 });

  function success(position) {
    console.log(`lat: ${position.coords.latitude}`);
    console.log(`lng: ${position.coords.longitude}`);
    setGeo({ lat: position.coords.latitude, lng: position.coords.longitude });
  }

  useEffect(() => {
    if (!navigator.geolocation) {
      console.log('Localização não habilitada');
    } else {
      navigator.geolocation.getCurrentPosition(success, console.log('ok'));
    }
  }, []);

  return (
    <Box sx={{ width: 900, height: 900 }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBcrmgLdJ79VsDc5lbmueQQIakqiwAIg-Y' }}
        center={geo}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options=""
      >
        {}
      </GoogleMapReact>
    </Box>
  );
}

export default Maps;
