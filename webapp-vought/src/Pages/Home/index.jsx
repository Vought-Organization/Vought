import { Box, Button, Grid, Paper, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Maps from '../../components/Maps';
import { useQuery } from 'react-query';

import imageHome from '../../assets/imgs/home/image-banner.png';
import NavBar from '../../components/Navbar';

import Geocode from 'react-geocode';
import { acessoUsuario } from '../../Services/Usuario/acessoUsuario';
import { useAuth } from '../../Context/useAuth';

const places = [
  {
    id: 2,
    evento: 'Jesus2',
    endereco: 'Av paulista 445',
    image: 'https://iili.io/H2M0Gaf.md.jpg',
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
    image: 'https://iili.io/H2Vxdhv.md.jpg',
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
    image: 'https://freeimage.host/i/H2M0Gaf',
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
    image: 'https://freeimage.host/i/H2M0Gaf',
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
    image: 'https://freeimage.host/i/H2M0Gaf',
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
    image: 'https://freeimage.host/i/H2M0Gaf',
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
    image: 'https://freeimage.host/i/H2M0Gaf',
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

  const { signed, user, loginUsuario, logoutUsuario } = useAuth();

  // useEffect(() => {
  //   Geocode.setApiKey('AIzaSyBcrmgLdJ79VsDc5lbmueQQIakqiwAIg-Y');

  //   // set response language. Defaults to english.
  //   Geocode.setLanguage('pt');

  //   // set response region. Its optional.
  //   // A Geocoding request with region=es (Spain) will return the Spanish city.
  //   Geocode.setRegion('br');
  //   Geocode.fromAddress('Rua dos andradas 69').then(
  //     (response) => {
  //       const { lat, lng } = response.results[0].geometry.location;
  //       console.log(lat, lng);
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // }, []);

  return (
    <Stack>
      <NavBar />
      <Grid
        container
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          padding: {
            xs: '0 10px',
            sm: '0',
          },
          backgroundColor: '#F5F7F8',
        }}
      >
        <Grid
          container
          item
          xs={11}
          md={10}
          component="Paper"
          sx={{
            backgroundColor: 'white',
            margin: '30px 0',
            borderRadius: '30px',
          }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              padding: 1,
            }}
            spacing={2}
          >
            <Paper
              elevation={3}
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                objectFit: {
                  xs: 'contain',
                  sm: {},
                },
                maxHeight: {
                  mobile: '200px',
                  xs: '300px',
                  sm: '430px',
                  xl: '700px  ',
                },
              }}
            >
              <img
                src={imageHome}
                alt=""
                style={{
                  height: '100%',
                  width: '100%',
                  objectFit: {
                    xs: 'cover',
                    xl: {},
                  },
                  backgroundSize: 'cover',
                }}
              />
            </Paper>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              padding: {
                xs: '10px 20px',
                md: '0',
              },
              width: '100%',
            }}
          >
            <Box sx={{ width: '100%' }}>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontFamily: 'Inter',
                  fontSize: {
                    xs: '1.5rem',
                    sm: '3rem',
                  },
                  margin: {
                    sm: '32px',
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
                <Typography>
                  Clique e ache um evento com o seu gosto.{' '}
                </Typography>
                <Typography>
                  <Button>Encontrar eventos</Button>
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          container
          item
          xs={12}
          display="flex"
          justifyContent="center"
          sx={{}}
        >
          <Grid item xs={11}>
            <Maps places={places ?? []} />
          </Grid>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Home;
