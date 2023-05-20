import axios from 'axios';
import {
  Caixa,
  BoxFormulario,
  Informacoes,
  InputTitulo,
  InputData,
  DivDescricao,
  InputData1,
  InputData2,
  Foto,
  BoxFormularioParte1,
  BoxFormularioParte2,
  Descricao,
  FormularioEsquerda,
  FormularioDireita,
  FormularioEsquerda2,
  FormularioDireita2,
  InputTitulo2,
  InputData3,
  InputData4,
  InputData5,
} from './AppStyled';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { React, useEffect } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import './index.css';
import { saveAs } from 'file-saver';

const PaginaEvento = () => {
  const url = '../../assets/imgs/adicionar.pdf';

  const { id } = useParams();

  const { setValue, register } = useForm();

  useEffect(() => {
    axios.get(`https://voughtback.duckdns.org/v1/events/${id}`).then((response) => {
      const dia = new Date(response.data.startData).getDay();
      const dataHora = new Date(response.data.startData).getHours();
      const minutos = new Date(response.data.startData).getMinutes();
      const dataHoraFinal = new Date(response.data.endData).getHours();
      const minutosFinal = new Date(response.data.endData).getMinutes();
      const diaInicial = new Date(response.data.startData).getDate();
      const mesInicial = new Date(response.data.startData).getMonth();
      const diaFinal = new Date(response.data.endData).getDate();
      const mesFinal = new Date(response.data.endData).getMonth();

      let data;
      let dataMes;
      let dataMesFinal;

      data = funcaoPegarDia(dia);
      dataMes = funcaoPegarMesInicial(mesInicial);
      dataMesFinal = funcaoPegarMesFinal(mesFinal);

      setValue('Titulo', response.data.nameEvent);
      setValue('DataLocal', data + ' ás ' + dataHora + 'h' + minutos + 'm');
      setValue(
        'DiaInicial',
        diaInicial + ' de ' + dataMes + ' a ' + diaFinal + ' de ' + dataMesFinal
      );
      setValue(
        'Endereco',
        response.data.addressEvent +
          ',' +
          response.data.city +
          ' - ' +
          response.data.state
      );
      setValue('NomeEvento', response.data.nameEvent);
      setValue('TituloDescricao', response.data.nameEvent);
      setValue('Descricao', response.data.description);
      setValue('diaEvento', data);
      setValue(
        'horarioEvento',
        dataHora +
          'h' +
          minutos +
          'm as ' +
          dataHoraFinal +
          'h' +
          minutosFinal +
          'm'
      );
    });
  }, []);

  const funcaoPegarDia = (dia) => {
    switch (dia) {
      case 1:
        return 'Segunda-feira';
      case 2:
        return 'Terça-feira';
      case 3:
        return 'Quarta-feira';
      case 4:
        return 'Quinta-feira';
      case 5:
        return 'Sexta-feira';
      case 6:
        return 'Sábado';
      case 7:
        return 'Domingo';
    }
  };

  const funcaoPegarMesInicial = (mesInicial) => {
    switch (mesInicial) {
      case 1:
        return 'Janeiro';
      case 2:
        return 'Fevereiro';
      case 3:
        return 'Março';
      case 4:
        return 'Abril';
      case 5:
        return 'Maio';
      case 6:
        return 'Junho';
      case 7:
        return 'Julho';
      case 8:
        return 'Agosto';
      case 9:
        return 'Setembro';
      case 10:
        return 'Outubro';
      case 11:
        return 'Novembro';
      case 12:
        return 'Dezembro';
    }
  };

  const funcaoPegarMesFinal = (mesFinal) => {
    switch (mesFinal) {
      case 1:
        return 'Janeiro';
      case 2:
        return 'Fevereiro';
      case 3:
        return 'Março';
      case 4:
        return 'Abril';
      case 5:
        return 'Maio';
      case 6:
        return 'Junho';
      case 7:
        return 'Julho';
      case 8:
        return 'Agosto';
      case 9:
        return 'Setembro';
      case 10:
        return 'Outubro';
      case 11:
        return 'Novembro';
      case 12:
        return 'Dezembro';
    }
  };

  let precoDoEvento;

  useEffect(() => {
    axios
      .get(`https://voughtback.duckdns.org/v1/tickets/eventos/${id}`)
      .then((response) => {
        console.log('PREÇO DO EVENTO', response.data[0].precoIngresso);
        precoDoEvento = response.data[0].precoIngresso;
        setValue(
          'precoEvento',
          'Valor do ingresso : R$' + response.data[0].precoIngresso
        );
      })
      .catch(() => {
        console.log('Ingresso errado!');
      });
  });

  return (
    <>
      <Caixa>
        <BoxFormulario>
          <BoxFormularioParte1>
            <FormularioEsquerda2>
              <Informacoes>
                <InputTitulo {...register('Titulo')} disabled />
                <DivDescricao>
                  <InputData {...register('DataLocal')} disabled></InputData>
                </DivDescricao>
                <DivDescricao>
                  <InputData1 {...register('DiaInicial')} disabled></InputData1>
                </DivDescricao>
                <InputData2 {...register('precoEvento')}></InputData2>
                <DivDescricao>
                  <InputData2 {...register('Endereco')} disabled></InputData2>
                </DivDescricao>
              </Informacoes>
            </FormularioEsquerda2>

            <FormularioDireita2>
              <Foto></Foto>
            </FormularioDireita2>
          </BoxFormularioParte1>

          <BoxFormularioParte2>
            <FormularioEsquerda>
              <Descricao>DESCRIÇÃO DO EVENTO</Descricao>

              <InputData3
                {...register('TituloDescricao')}
                disabled
              ></InputData3>
              <InputData4 {...register('Descricao')}></InputData4>
              <Descricao>INFORMAÇÕES</Descricao>
              <Descricao>
                DIA DO EVENTO:{' '}
                <input
                  className="inputDia"
                  type="blocked"
                  {...register('diaEvento')}
                ></input>
              </Descricao>
              <Descricao>
                HORÁRIO DO EVENTO:{' '}
                <input
                  type="text"
                  className="inputDia"
                  {...register('horarioEvento')}
                />
              </Descricao>
            </FormularioEsquerda>

            <FormularioDireita>
              <InputTitulo2 {...register('NomeEvento')} disabled></InputTitulo2>
              <InputData5 value={'FORMAS DE PAGAMENTO'}></InputData5>
              <div id="paypal-button-container">
                <PayPalScriptProvider
                  options={{
                    'client-id':
                      'AekNogbZqfLM-DVzxKhkfHXAsC2UoZ90cdqCRBUpfyLBO8bcOmgZeX6hZ8Uvxxcs03H9Ejyyin65DFiD',
                    currency: 'BRL',
                  }}
                >
                  <PayPalButtons
                    style={{
                      color: 'silver',
                      shape: 'pill',
                    }}
                    id="Botoes"
                    createOrder={(data, actions) => {
                      return actions.order.create({
                        purchase_units: [
                          {
                            amount: {
                              value: precoDoEvento,
                            },
                          },
                        ],
                      });
                    }}
                    onApprove={(data, actions) => {
                      return actions.order.capture().then(function (details) {
                        saveAs(url, 'ingresso.png');
                      });
                    }}
                  />
                </PayPalScriptProvider>
              </div>
            </FormularioDireita>
          </BoxFormularioParte2>
        </BoxFormulario>
      </Caixa>
    </>
  );
};

export default PaginaEvento;
