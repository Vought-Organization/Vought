import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Cadastro from '../Pages/Cadastro';
import Evento from '../Pages/Evento';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import QuemSomos from '../Pages/QuemSomos';
import EscolhaEvento from '../Pages/Escolha-Evento'
import CrudEvento from '../Pages/Crud-Evento'
import AdicionarEvento from '../Pages/AdicionarEvento';
import EditarEvento from '../Pages/EditarEvento';

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route exact path="/quem-somos" element={<QuemSomos />} />
        <Route exact path="/evento" element={<Evento />} />
        <Route exact path='/escolha-evento' element={<EscolhaEvento></EscolhaEvento>} />
        <Route exact path='/crud-evento' element={<CrudEvento></CrudEvento>}/>
        <Route exact path='/adiciona-evento' element={<AdicionarEvento></AdicionarEvento>}/>
        <Route exact path='/edita-evento/:id' element={<EditarEvento></EditarEvento>} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
