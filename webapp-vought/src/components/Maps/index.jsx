import React, { useEffect, useState } from 'react';

import GoogleMapReact from 'google-map-react';

import { Box, Paper, Typography } from '@mui/material';

import { calculaDistancia } from '../../Utils/calculaDistancia';

import stylesMap from './stylesMap';
import BarraPesquisa from './BarraPesquisa';

function Maps({ places }) {
  const [geo, setGeo] = useState({});
  const [value, setValue] = useState(geo);
  const [eventZoom, setEventZoom] = useState(14);
  const [filtro, setFiltro] = useState('');

  useEffect(() => {
    if (!navigator.geolocation) {
      console.log('Localização não habilitada');
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        setGeo({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        console.log(position.coords);
      });
    }
  }, []);

  useEffect(() => {
    let exec;
    if (geo) {
      exec = setTimeout(() => {
        setValue(geo);
        console.log('Estou aqui');
      }, 1000);
    }

    return () => {
      clearTimeout(exec);
    };
  }, [geo]);

  const filterPlaces = places?.filter((lugares) => {
    if (
      lugares.evento.toLowerCase().includes(filtro.toLowerCase()) ||
      lugares.endereco.toLowerCase().includes(filtro.toLowerCase())
    ) {
      return lugares;
    }
    return null;
  });

  return (
    <Box
      sx={{
        width: '100%',
        height: {
          sm: '60vh',
          md: '500px',
        },
        position: 'relative',
      }}
    >
      <BarraPesquisa
        setFiltro={setFiltro}
        setEventZoom={setEventZoom}
        setValue={setValue}
        filterPlaces={filterPlaces}
        geo={geo}
      />
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBcrmgLdJ79VsDc5lbmueQQIakqiwAIg-Y' }}
        center={value}
        defaultCenter={geo}
        defaultZoom={20}
        zoom={eventZoom}
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: false,
          gestureHandling: 'none',
          style: stylesMap,
        }}
        yesIWantToUseGoogleMapApiInternals
        onChildClick={(child) => setChild(child)}
      >
        <Box
          lat={geo.lat}
          lng={geo.lng}
          sx={{
            // position: 'absolute',
            // transform: 'translate(-50%, -50%)',
            // zIndex: 1,
            // padding: '6px',
            // borderRadius: '50%',
            // backgroundColor: 'red',
            position: 'absolute',
            top: '50%',
            left: '50',
            width: '18px',
            height: '18px',
            backgroundColor: '#000',
            border: '2px solid #fff',
            borderRadius: '100',
            userSelect: 'none',
            transform: 'translate(-50%, -50%)',
            cursor: 'pointer',
            '&:hover': {
              zIndex: '1',
            },
          }}
        />
        {filterPlaces?.map((pla) => (
          <Box
            key={pla.id}
            sx={{
              position: 'absolute',
              transform: 'translate(-50%, -50%)',
              zIndex: 1,
              '&:hover': { zIndex: 2 },
            }}
            lat={pla.coords[0].lat}
            lng={pla.coords[0].lng}
          >
            <Paper
              elevation={1}
              sx={{
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: '100px',
              }}
            >
              <Typography gutterBottom>{pla.evento}</Typography>
              <Typography>
                {calculaDistancia(
                  geo.lat,
                  geo.lng,
                  pla.coords[0].lat,
                  pla.coords[0].lng
                )}
              </Typography>
            </Paper>
          </Box>
        ))}
      </GoogleMapReact>
    </Box>
  );
}

export default Maps;
