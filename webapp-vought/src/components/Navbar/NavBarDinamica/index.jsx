import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useAuth } from '../../../Context/useAuth';

import AdbIcon from '@mui/icons-material/Adb';

const NavBarDinamica = () => {
  const { signed } = useAuth();

  if (signed) {
    return (
      <Box>
        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
        <Typography
          variant="h5"
          noWrap
          component="a"
          href=""
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          LOGO
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              {page}
            </Button>
          ))}
        </Box>
      </Box>
    );
  } else {
    return (
      <Box sx={{ maxWidth: 440 }}>
        <Button>Criar Conta</Button>
        <Button>Entrar</Button>
      </Box>
    );
  }
};

export default NavBarDinamica;
