import React, { useState } from "react";

import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const MapGoogle = () => {
  const [geo, setGeo] = useState({ lat: 0, lng: 0 });

  function success(position) {
    setGeo({ lat: position.coords.latitude, lng: position.coords.longitude });
  }

  if (!navigator.geolocation) {
    console.log("Localização não habilitada");
  } else {
    navigator.geolocation.getCurrentPosition(success, console.log("Error"));
  }

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBcrmgLdJ79VsDc5lbmueQQIakqiwAIg-Y",
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{ width: "100vh", height: "100%" }}
      center={geo}
      zoom={15}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default MapGoogle;
