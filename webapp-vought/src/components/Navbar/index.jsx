import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBarDinamica from './NavBarDinamica';

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Grid
        container
        justifyContent="center"
        sx={{ backgroundColor: '#530a4c', height: '70px' }}
      >
        <Grid item xs={11} md={10}>
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                height: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flex: 1,
                maxWidth: {
                  xs: 300,
                  md: 520,
                },
              }}
            >
              <Typography>Home</Typography>
              <Box
                sx={{
                  gap: 5,
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Button
                  sx={{
                    color: (theme) => theme.palette.common.white,
                    backgroundColor: '#3A0635',
                  }}
                  onClick={() => navigate('/')}
                >
                  Home
                </Button>
                <Button
                  sx={{
                    color: (theme) => theme.palette.common.white,
                    backgroundColor: '#3A0635',
                  }}
                  variant="text"
                  onClick={() => navigate('quem-somos')}
                >
                  Quem somos nós
                </Button>
              </Box>
            </Box>
            <NavBarDinamica />
          </Box>
        </Grid>
      </Grid>
      <Divider />
    </>
  );
};

export default NavBar;
