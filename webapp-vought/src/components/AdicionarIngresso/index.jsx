import Navbar from '../Navbar/index';
import {
  Caixa,
  BoxFormulario,
  InputData,
  BotaoPublicar,
} from '../AdicionarIngresso/AppStyled';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const FormIngresso = () => {
  useEffect(() => {
    axios
      .get('http://54.163.233.38:8080/v1/events')
      .then((response) => {
        console.log(response.data[response.data.length - 1].idEvent);
        setValue('event', response.data[response.data.length - 1].idEvent);
      })
      .catch(() => {
        console.log('Algo deu errado!');
      });
  });

  useEffect(() => {
    axios
      .get('http://54.163.233.38:8080/v1/tickets')
      .then((response) => {
        console.log(response.data[response.data.length - 1]);
      })
      .catch(() => {
        console.log('Algo deu errado!');
      });
  });

  const { register, handleSubmit, setValue } = useForm();

  const navigate = useNavigate();

  const postEvento = (data) => {
    const data2 = {
      precoIngresso: data.precoIngresso,
      event: {
        idEvent: data.event,
      },
    };

    axios
      .post('http://54.163.233.38:8080/v1/tickets', data2)
      .then(() => {
        console.log('data input', data.event);
        console.log('data passada', data2);
        console.log('Tudo certo!');
        alert('Ticket atribuido ao evento');
        navigate('/escolha-evento');
      })
      .catch(() => {
        console.log(data);
        console.log('Alguma coisa deu errado!');
      });
  };

  return (
    <>
      <Navbar></Navbar>
      <Caixa>
        <BoxFormulario>
          <h1>Adicionar um ingresso</h1>

          <InputData
            type="number"
            name="quantity"
            min="30.00"
            step="0.01"
            placeholder="Preço do ingresso"
            {...register('precoIngresso')}
          />

          <form action="" id="form">
            <InputData type="hidden" {...register('event')}></InputData>
          </form>

          <form onSubmit={handleSubmit(postEvento)}>
            <BotaoPublicar>Publicar Evento</BotaoPublicar>
          </form>
        </BoxFormulario>
      </Caixa>
    </>
  );
};

export default FormIngresso;
