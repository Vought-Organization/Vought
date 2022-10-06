import React from 'react';

import { Box } from '@mui/material';

import MapGoogle from './components/Maps';
import Rotas from './Routes';

const App = () => {
  return (
    <Box height="100%" width="100%">
      <Rotas />
    </Box>
  );
};

export default App;
