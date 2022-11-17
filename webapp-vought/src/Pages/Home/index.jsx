import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Maps from '../../components/Maps';

import imageHome from '../../assets/imgs/home/image-banner.png';
import NavBar from '../../components/Navbar';

const places = [
  {
    id: 1,
    evento: 'Jesus',
    endereco: 'Av paulista 445',
    coords: [
      {
        lat: -23.556783,
        lng: -46.661934,
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
    evento: 'Jesus3',
    endereco: 'Av paulista 445',
    coords: [
      {
        lat: -23.557949,
        lng: -46.662315,
      },
    ],
  },
  {
    id: 4,
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
    id: 5,
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
    id: 6,
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
    evento: 'Jesus4',
    endereco: 'Av paulista 445',
    coords: [
      {
        lat: -23.557143,
        lng: -46.664547,
      },
    ],
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <Stack>
      <NavBar />
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
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid container item md={9} xs={12} spacing={1}>
          <Grid xs={12} md={6}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="../../assets/imgs/home/farol-santander.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid xs={12} md={6}></Grid>
        </Grid>
      </Grid>
      <Box>
        <Maps places={places ?? []} />
      </Box>
    </Stack>
  );
};

export default Home;
