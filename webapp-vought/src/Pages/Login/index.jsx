import React from 'react'

import "./login.css";
import Grid from "@mui/material/Grid";
import { TextField } from '@mui/material';

const Login = () => {
  return (
    <>
      {/* <div className="container"> */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <div className="divCadastro">

            <p className="p1">Você é novo por aqui?</p>
            <p className="p2"> Se cadastre em nosso sistema pelo botão abaixo para </p>
            <p className="p3">começar a usar nossos serviços!</p>

            <button className="botaoCadastrar">Cadastrar</button>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <h1>Login</h1>
          <input className="input1" type="Nome" placeholder="Nome" />
          <input className="input2" type="Email" placeholder="Email" />

          <button className="botaoEntrar">Entrar</button>
          <p className="p4">Não tem uma conta?</p>
          <p className="p5">Crie uma aqui</p>
        </Grid>
      </Grid>
      {/* </div> */}

    </>

  )
};

export default Login
