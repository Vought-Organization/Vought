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
import FormEvento from '../Pages/FormAdicionarEvento'
import AdicionarIngresso from '../Pages/AdicionarIngresso';
import PaginaEvento from '../Pages/PaginaEvento';
import TesteCrud from '../Pages/TesteCrud';
import NotFound from '../Pages/NotFound';
import TelaPagamento from '../Pages/TelaPagamento'
import HotSite from '../Pages/HotSite';

const Rotas = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route index element={<TelaPagamento />} />
          <Route exact path="/quem-somos" element={<QuemSomos />} />
          <Route exact path="/evento" element={<Evento />} />
          <Route exact path="/escolha-evento" element={<EscolhaEvento />} />
          <Route exact path="/crud-evento" element={<CrudEvento />} />
          <Route exact path="/adiciona-evento" element={<AdicionarEvento />} />
          <Route exact path="/edita-evento/:id" element={<EditarEvento />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/cadastro" element={<Cadastro />} />
          <Route exact path="/hot-site" element={<HotSite />} />
          <Route exact path="*" element={<NotFound/>}/>
          <Route exact path="/adicionar-evento" element={<FormEvento />}></Route>
          <Route exact path="/adicionar-ingresso" element={<AdicionarIngresso />}></Route>
          <Route exact path='/pagina-evento/:id' element={<PaginaEvento></PaginaEvento>}></Route>
          <Route exact path='/tela-teste' element={<Home></Home>}></Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default Rotas;
