import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBarDinamica from './NavBarDinamica';
import './style.css'

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Grid
        container
        justifyContent="center"
        sx={{ backgroundColor: '#3A0635', height: '80px' }}
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
                  md: 480,
                },
              }}
            >
              <Typography sx={{color: 'white'}}>Vought</Typography>
              <Box
                sx={{
                  gap: 5,
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <a href=""
                className='link--logo'
                onClick={() => navigate('/')}>
                  Home
                </a>
                <a href=""
                className='link--logo'
                onClick={()=> navigate('/quem-somos')}>Quem somos</a>
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
