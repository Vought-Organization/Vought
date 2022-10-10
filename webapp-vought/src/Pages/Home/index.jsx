import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Button variant="outlined" onClick={() => navigate('/quem-somos')}>
        a
      </Button>
    </div>
  );
};

export default Home;
