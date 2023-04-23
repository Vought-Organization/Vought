import TelaTeste from '../../components/TelaTeste';
import NavBar from '../../components/Navbar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';

const TesteCrud = () => {
  const [evento, setEvento] = useState([]);

  useEffect(() => {
    listar();
  }, []);

  function listar() {
    console.log('Requisição está sendo feita: ');

    axios
      .get('http://54.163.233.38:8080/v1/events')
      .then((response) => {
        console.log(response.data);
        setEvento(response.data);
      })
      .catch((errorOcorrido) => {
        console.log(errorOcorrido);
      });
  }

  return (
    <>
      <NavBar></NavBar>
      <div className="divGeral">
        {evento.map((evento) => {
          return (
            <TelaTeste
              idEvent={evento.idEvent}
              key={evento.idEvent}
              nomeEvento={evento.nameEvent}
              enderecoEvento={evento.addressEvent}
            ></TelaTeste>
          );
        })}
      </div>
    </>
  );
};

export default TesteCrud;
