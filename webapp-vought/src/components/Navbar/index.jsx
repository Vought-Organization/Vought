import { Box, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import NavBarDinamica from './NavBarDinamica';

const NavBar = () => {
  return (
    <>
      <Grid container sx={{ height: '70px' }} justifyContent="center">
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
                backgroundColor: 'blueviolet',
                height: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flex: 1,
                maxWidth: {
                  xs: 300,
                  md: 460,
                },
              }}
            >
              <Typography>Home</Typography>
              <Box
                sx={{
                  backgroundColor: 'pink',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography>Home</Typography>
                <Typography>Quem somos nós</Typography>
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
