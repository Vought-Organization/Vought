import Navbar from '../Navbar/index'
import { Caixa, BoxFormulario, InputData, BotaoPublicar } from '../AdicionarIngresso/AppStyled'
import axios from 'axios'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const FormIngresso = () => {

  useEffect(() => {
    axios.get('http://localhost:8080/v1/events')
    .then((response) => {
      console.log(response.data[response.data.length - 1])
    })
    .catch(() => {
      console.log("Algo deu errado!")
    })
  })

  const { register, handleSubmit, setValue} = useForm();

  const navigate = useNavigate();

  const postEvento = (data) => {
    axios
      .post('http://localhost:8080/v1/tickets', data)
      .then(() => {
        console.log(data);
        console.log('Tudo certo!');
        alert('Ticket atribuido ao evento');
        navigate('/escolha-evento');
      })
      .catch(() => {
        console.log(data);
        console.log('Alguma coisa deu errado!');
      });
  }

  return (
    <>
      <Navbar></Navbar>
      <Caixa>

        <BoxFormulario>

          <h1>Adicionar um ingresso</h1>

          <InputData type="number" name='quantity' min="30.00" step="0.01" placeholder='Preço do ingresso'
          {...register("precoIngresso")} />

          <form onSubmit={handleSubmit(postEvento)}>
            <BotaoPublicar>Publicar Evento</BotaoPublicar>
          </form>

        </BoxFormulario>

      </Caixa>
    </>
  )
}

export default FormIngresso;
