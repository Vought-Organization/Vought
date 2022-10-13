import React from "react";
import './index.css'
import Navbar from '../../components/Navbar/index'
import imgCriar from '../../assets/imgs/adicionar.png'
import imgEditar from '../../assets/imgs/editar.png'
import { useNavigate } from "react-router-dom";

const Escolha = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <div className="containers" onClick={() => navigate("/crud-evento")}>
          <div className="imagem_container">
          <img src={imgCriar} alt="" className="imagem" />
            </div>
          <div className="texto_container">
            <div className="titulo">
              <h1>CRIAR EVENTO</h1>
            </div>
            <div className="texto">
              <p>Crie e personalize seu evento do jeito que você preferir.</p>
            </div>
          </div>
        </div>
        <div className="containers">
        <div className="imagem_container">
          <img src={imgEditar} alt="" className="imagem" />
            </div>
          <div className="texto_container">
            <div className="titulo">
              <h1>SEUS EVENTOS</h1>
            </div>
            <div className="texto">
              <p>Aqui você pode conferir todos os eventos que você já criou e alterá-los.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Escolha;
