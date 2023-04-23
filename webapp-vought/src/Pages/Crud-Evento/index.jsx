import Navbar from '../../components/Navbar/index';
import api from '../../api';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { CrudComponent } from '../../components/CrudEvento/index';

const CrudEvento = () => {
  const [evento, setEvento] = useState([]);

  function deletePost(id) {
    axios.delete(`http://54.163.233.38:8080/v1/events/${id}`);
    setEvento(evento.filter((eventos) => eventos.id !== id));
    alert('Evento deletado com sucesso!');
    location.reload();
  }

  useEffect(() => {
    listar();
  }, []);

  function listar() {
    console.log('Requisição está sendo feita: ');

    api
      .get()
      .then(function (respostaObtida) {
        console.log(respostaObtida.data);
        setEvento(respostaObtida.data);
      })
      .catch((errorOcorrido) => {
        console.log(errorOcorrido);
      });
  }
  return (
    <>
      <Navbar />
      <div id="container">
        <div className="music-boxes">
          {evento.map((evento) => {
            return (
              <CrudComponent
                idEvent={evento.idEvent}
                key={evento.idEvent}
                nomeEvento={evento.nameEvent}
                enderecoEvento={evento.addressEvent}
                deletePost={deletePost}
              ></CrudComponent>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CrudEvento;
