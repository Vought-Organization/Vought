import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import GoogleMapReact from 'google-map-react';

import { Box, Paper, Popover, TextField, Typography } from '@mui/material';

import stylesMap from './stylesMap';
import { calculaDistancia } from '../../Utils/calculaDistancia';

function Maps({ places }) {
  const [geo, setGeo] = useState({});
  const [eventZoom, setEventZoom] = useState(14);
  const [eventGeo, setEventGeo] = useState({});
  const [filtro, setFiltro] = useState('');
  const [child, setChild] = useState();
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      console.log('Localização não habilitada');
    } else {
      navigator.geolocation.getCurrentPosition(success, console.log('ok'));
    }
  }, []);

  function success(position) {
    console.log(`lat: ${position.coords.latitude}`);
    console.log(`lng: ${position.coords.longitude}`);
    setGeo({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
  }

  const filterPlaces = places?.filter((lugares) => {
    if (lugares.evento.toLowerCase().includes(filtro.toLowerCase())) {
      return lugares;
    }
    return null;
  });

  const debounce = (func) => {
    let timer;
    return (...args) => {
      const context = this;
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 1000);
    };
  };

  const handleChange = (e) => {
    setFiltro(e.target.value);
  };

  const handleFilter = useCallback(debounce(handleChange), []);

  const handleClickEvent = useCallback(
    (evento) => {
      if (eventZoom !== 20) {
        setEventZoom(20);
      }

      setEventGeo({
        lat: evento.coords[0].lat,
        lng: evento.coords[0].lng,
      });
    },
    [eventZoom, setEventGeo, setEventZoom]
  );

  const handleOpenPopOver = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopOver = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Box
      sx={{
        width: '100%',
        height: '80vh',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 10,
          left: 6,
          padding: 2,
          backgroundColor: 'white',
          zIndex: 1,
          height: 'calc(100% - 50px)',
          width: {
            md: '400px',
            xs: '200px',
          },
        }}
      >
        <TextField fullWidth onChange={handleFilter} />
        <Box
          sx={{
            overflowY: 'auto',
            maxHeight: 'calc(100% - 100px)',
            marginTop: '20px',
          }}
        >
          {filterPlaces?.map((filter) => (
            <Paper
              elevation={1}
              sx={{ margin: '10px 2px' }}
              onClick={() => handleClickEvent(filter)}
            >
              <Box
                sx={{
                  gap: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '5px 10px',
                }}
              >
                <Box>{filter.evento}</Box>
                <Box>{filter.endereco}</Box>
                <Typography>
                  {`Distância
                ${calculaDistancia(
                  geo.lat,
                  geo.lng,
                  filter.coords[0].lat,
                  filter.coords[0].lng
                )} km`}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Box>
      </Box>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBcrmgLdJ79VsDc5lbmueQQIakqiwAIg-Y' }}
        center={eventGeo == {} ? geo : eventGeo}
        defaultCenter={{ lat: -23.556783, lng: -46.661934 }}
        defaultZoom={14}
        // zoom={eventZoom}
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: stylesMap,
        }}
        yesIWantToUseGoogleMapApiInternals
        onChildClick={(child) => setChild(child)}
      >
        <Box
          lat={geo.lat}
          lng={geo.lng}
          style={{
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
            padding: '6px',
            borderRadius: '50%',
            backgroundColor: 'red',
          }}
        />
        {filterPlaces?.map((pla) => (
          <Box
            key={pla.id}
            style={{
              position: 'absolute',
              transform: 'translate(-50%, -50%)',
              zIndex: 1,
              '&:hover': { zIndex: 2 },
            }}
            lat={pla.coords[0].lat}
            lng={pla.coords[0].lng}
            onClick={handleOpenPopOver}
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
                {`Distância
                ${calculaDistancia(
                  geo.lat,
                  geo.lng,
                  pla.coords[0].lat,
                  pla.coords[0].lng
                )} km`}
              </Typography>
            </Paper>
          </Box>
        ))}
      </GoogleMapReact>
    </Box>
  );
}

export default Maps;
