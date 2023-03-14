import React from "react";
import Navbar from '../../components/Navbar/index'
import '../Crud-Evento/index.css'
import CrudComponent from '../../components/CrudEvento/index'
import api from '../../api'
import { useState, useEffect } from "react";
import axios from 'axios'


const CrudEvento = () => {

  const [evento, setEvento] = useState( [] );

  function deletePost(id) {
    axios.delete(`http://44.214.102.135:8080/v1/events/${id}`)
    setEvento(evento.filter(eventos => eventos.id !== id))
    alert("Evento deletado com sucesso!")
    location.reload()
  }

  useEffect(() => {listar()}, [])

  function listar() {
    console.log("Requisição está sendo feita: ");

    api.get()                               // invocando o método "get" do axios utilizando a URL base instanciada em "api.js"
    .then(function (respostaObtida) {       // método get responde uma Promise que será resolvida, e quando obtiver uma resposta, cairá no "then" recebendo a resposta como parâmetro
        console.log(respostaObtida.data);   // exibindo o atributo "data", que possui o vetor de dados do objeto de resposta que foi recebido
        setEvento(respostaObtida.data);    // utilizando o setter para alterar o valor do estado (useState) de "evento"
    })
    .catch((errorOcorrido) => {             // caso a requisição falhe, o "catch" pegará o erro, recebendo como parâmetro de uma função
        console.log(errorOcorrido)          // exibindo o erro que ocorreu na requisição
    });
}
  return (
    <>
      <Navbar></Navbar>
      <div id="container">
      <div className="music-boxes">
            {
                evento.map((evento) => {
                   return (<CrudComponent
                    idEvent={evento.idEvent}
                    key={evento.idEvent}
                    nomeEvento={evento.nameEvent}
                    enderecoEvento={evento.addressEvent}
                    deletePost={deletePost}
                    >
                    </CrudComponent>)
                })
            }
        </div>
      </div>
    </>
  )
}

export default CrudEvento;
