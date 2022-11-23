import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import NavBarDinamica from './NavBarDinamica';

const NavBar = () => {
  return (
    <>
      <Grid
        container
        justifyContent="center"
        sx={{ backgroundColor: '#3A0635', height: '70px' }}
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
                backgroundColor: '#3A0635',
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
                  gap: 5,
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Button
                  sx={{ color: (theme) => theme.palette.common.white }}
                  size="small"
                >
                  Home
                </Button>
                <Button
                  sx={{ color: (theme) => theme.palette.common.white }}
                  size="small"
                  variant="text"
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
