import React from 'react';

import { AuthProvider } from './Context/useAuth';

import Rotas from './Routes';

const App = () => {
  return (
    <AuthProvider>
      <Rotas />
    </AuthProvider>
  );
};

export default App;
