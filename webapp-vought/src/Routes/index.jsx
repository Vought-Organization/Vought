import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Cadastro from '../Pages/Cadastro';
import Evento from '../Pages/Evento';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import QuemSomos from '../Pages/QuemSomos';

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/evento" element={<Evento />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
