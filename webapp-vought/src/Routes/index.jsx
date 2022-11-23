import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';

import Cadastro from '../Pages/Cadastro';
import Evento from '../Pages/Evento';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import QuemSomos from '../Pages/QuemSomos';
import EscolhaEvento from '../Pages/Escolha-Evento';
import CrudEvento from '../Pages/Crud-Evento';
import AdicionarEvento from '../Pages/AdicionarEvento';
import EditarEvento from '../Pages/EditarEvento';
import FormEvento from '../Pages/FormAdicionarEvento';
import NotFound from '../Pages/NotFound';

const Rotas = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route exact path="/quem-somos" element={<QuemSomos />} />
          <Route exact path="/evento" element={<Evento />} />
          <Route exact path="/escolha-evento" element={<EscolhaEvento />} />
          <Route exact path="/crud-evento" element={<CrudEvento />} />
          <Route exact path="/adiciona-evento" element={<AdicionarEvento />} />
          <Route exact path="/edita-evento/:id" element={<EditarEvento />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/cadastro" element={<Cadastro />} />
          <Route exact path="*" element={<NotFound/>}/>
          <Route
            exact
            path="/adicionar-evento"
            element={<FormEvento />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default Rotas;
