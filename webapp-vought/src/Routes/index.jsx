import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Cadastro from '../Pages/Cadastro';
import Evento from '../Pages/Evento';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import QuemSomos from '../Pages/QuemSomos';
import EscolhaEvento from '../Pages/Escolha-Evento/Escolha';

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route exact path="/quem-somos" element={<QuemSomos />} />
        <Route exact path="/evento" element={<Evento />} />
        <Route exact path='/escolha-evento' element={<EscolhaEvento></EscolhaEvento>}></Route>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
