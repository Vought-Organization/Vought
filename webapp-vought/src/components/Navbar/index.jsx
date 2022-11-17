import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav id="navbar">
        <div id="navbar-container">
          <h1 className="logo">VOUGHT</h1>
          <div id="navbar-items-box">
            <ul id="navbar-items-1">
              <li>
                <a onClick={() => navigate('/home')}>Home</a>
              </li>
              <li>
                <a onClick={() => navigate('/quem-somos')}>Quem somos</a>
              </li>
              <li>
                <a onClick={() => navigate('/escolha-evento')}>Evento</a>
              </li>
            </ul>
          </div>
          <div id="navbar-items-box-2">
            <ul id="navbar-items-2">
              <li id="btn_entrar">
                {' '}
                <a onClick={() => navigate('/login')}>Cadastrar</a>
              </li>
              <li>
                <button id="btn_criar_conta" onClick={() => navigate('/login')}>
                  Entrar
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
