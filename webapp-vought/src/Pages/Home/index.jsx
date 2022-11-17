import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Maps from '../../components/Maps';

import imageHome from '../../assets/imgs/home/image-banner.png';
import NavBar from '../../components/Navbar';

import Geocode from 'react-geocode';

const places = [
  {
    id: 1,
    evento: 'Eldorado',
    endereco: 'Av rebouças 4456',
    coords: [
      {
        lat: -23.571688,
        lng: -46.696022,
      },
    ],
  },
  {
    id: 2,
    evento: 'Jesus2',
    endereco: 'Av paulista 445',
    coords: [
      {
        lat: -23.557521,
        lng: -46.661092,
      },
    ],
  },
  {
    id: 3,
    evento: 'Joquei',
    endereco: 'Av paulista 445',
    coords: [
      {
        lat: -23.582526,
        lng: -46.699584,
      },
    ],
  },
  {
    id: 4,
    evento: 'Jesus4',
    endereco: 'Av paulista 445',
    coords: [
      {
        lat: -23.534862,
        lng: -46.634121,
      },
    ],
  },
  {
    id: 5,
    evento: 'Ibirapuera',
    endereco: 'Av paulista 445',
    coords: [
      {
        lat: -23.587218,
        lng: -46.664037,
      },
    ],
  },
  {
    id: 6,
    evento: 'Quarta Divisão',
    endereco: 'Av paulista 445',
    coords: [
      {
        lat: -23.681282,
        lng: -46.355625,
      },
    ],
  },
  {
    id: 7,
    evento: 'Jesus4',
    endereco: 'Av paulista 445',
    coords: [
      {
        lat: -23.557143,
        lng: -46.664547,
      },
    ],
  },
  {
    id: 8,
    evento: 'Guaianazes',
    endereco: 'Av paulista 445',
    coords: [
      {
        lat: -23.576639,
        lng: -46.371823,
      },
    ],
  },
];

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    Geocode.setApiKey('AIzaSyBcrmgLdJ79VsDc5lbmueQQIakqiwAIg-Y');

    // set response language. Defaults to english.
    Geocode.setLanguage('pt');

    // set response region. Its optional.
    // A Geocoding request with region=es (Spain) will return the Spanish city.
    Geocode.setRegion('br');
    Geocode.fromAddress('Rua dos andradas 69').then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);

  return (
    <Stack>
      <NavBar />
      <Box></Box>
      <Grid container sx={{ alignItems: 'center', justifyContent: 'center' }}>
        <Grid container item xs={12} md={9}>
          <Grid
            item
            xs={12}
            sm={6}
            md={5}
            sx={{ display: 'flex', justifyContent: 'center' }}
            spacing={2}
          >
            <Box
              sx={{
                maxHeight: {
                  xs: '400px',
                  sm: '430px',
                  md: '850px',
                },
                display: 'flex',
                justifyContent: 'center',
                objectFit: 'contain',
              }}
            >
              <img src={imageHome} alt="" style={{ height: '100%' }} />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={5}
            sx={{
              padding: {
                xs: '10px 20px',
                md: '0',
              },
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontFamily: 'Inter',
                fontSize: {
                  xs: '1.5rem',
                  md: '3rem',
                },
                margin: {
                  md: '32px',
                  xs: '20px',
                },
              }}
            >
              VOUGHT
            </Typography>
            <Box
              sx={{
                gap: 4,
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  fontFamily: 'Inter',
                  fontSize: {
                    xs: '1rem',
                    md: '1.5rem',
                  },
                  lineHeight: 'normal',
                }}
              >
                O maior site de procura de eventos da América Latina, com a
                VOUGHT você acha seu evento preferido no piscar de olhos.
              </Typography>
              <Typography>Clique e ache um evento com o seu gosto. </Typography>
              <Typography>
                <Button>Encontrar eventos</Button>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Box>
        <Maps places={places ?? []} />
      </Box>
    </Stack>
  );
};

export default Home;
