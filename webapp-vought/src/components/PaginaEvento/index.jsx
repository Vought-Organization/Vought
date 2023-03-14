import axios from 'axios';
import { Caixa, BoxFormulario, Informacoes, InputTitulo, InputData, DivDescricao, InputHorario,
  InputData1, InputHorario1, InputData2, InputHorario2, Foto, BoxFormularioParte1, BoxFormularioParte2,
  Descricao, FormularioEsquerda, FormularioDireita, BotaoComprar, FormularioEsquerda2, FormularioDireita2, InputTitulo2, InputData3, InputData4, InputData5} from './AppStyled'
import { useParams } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { React, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons} from '@paypal/react-paypal-js'
import './index.css'
import { saveAs } from 'file-saver';


const PaginaEvento = () => {

  const navigate = useNavigate();

  const url = "../../assets/imgs/adicionar.pdf"

  const { id } = useParams()

  const { setValue, register} = useForm();

  useEffect(() => {
    console.log(id);
    axios.get(`http://44.214.102.135:8080/v1/events/${id}`)
    .then((response) => {
      console.log(response.data)
      console.log(response.data.addressEvent)
      console.log(new Date(response.data.startData))
      setValue("Titulo", response.data.nameEvent)
      const dia = new Date(response.data.startData).getDay()
      const dataHora = new Date(response.data.startData).getHours()
      const minutos = new Date(response.data.startData).getMinutes();
      const dataHoraFinal = new Date(response.data.endData).getHours();
      const minutosFinal = new Date(response.data.endData).getMinutes();
      const diaInicial = new Date(response.data.startData).getDate()
      const mesInicial = new Date(response.data.startData).getMonth();
      const diaFinal = new Date(response.data.endData).getDate();
      const mesFinal = new Date(response.data.endData).getMonth();
      const Descricao = response.data.description
      if (dia == 1) {
        var data = "Segunda-feira"
      } else if (dia == 2) {
        var data = "Terça-feira"
      } else if (dia == 3) {
        var data = "Quarta-feira"
      } else if (dia == 4) {
        var data = "Quinta-feira"
      } else if (dia == 5) {
        var data = "Sexta-feira"
      } else if (dia == 6) {
        var data = "Sábado"
      } else if (dia == 7) {
        var data = "Domingo"
      }

      if (mesInicial == 1) {
        var dataMes = "Janeiro";
      } else if (mesInicial == 2) {
        var dataMes = "Fevereiro";
      } else if (mesInicial == 3) {
        var dataMes = "Março";
      } else if (mesInicial == 4) {
        var dataMes = "Abril"
      } else if (mesInicial == 5) {
        var dataMes = "Maio"
      } else if (mesInicial == 6) {
        var dataMes = "Junho"
      } else if (mesInicial == 7) {
        var dataMes = "Julho"
      } else if (mesInicial == 8) {
        var dataMes = "Agosto"
      } else if (mesInicial == 9) {
        var dataMes = "Setembro"
      } else if (mesInicial == 10) {
        var dataMes = "Outubro"
      } else if (mesInicial == 11) {
        var dataMes = "Novembro"
      } else if (mesInicial == 12) {
        var dataMes = "Dezembro"
      }

      if (mesFinal == 1) {
        var dataMesFinal = "Janeiro";
      } else if (mesFinal == 2) {
        var dataMesFinal = "Fevereiro";
      } else if (mesFinal == 3) {
        var dataMesFinal = "Março";
      } else if (mesFinal == 4) {
        var dataMesFinal = "Abril"
      } else if (mesFinal == 5) {
        var dataMesFinal = "Maio"
      } else if (mesFinal == 6) {
        var dataMesFinal = "Junho"
      } else if (mesFinal == 7) {
        var dataMesFinal = "Julho"
      } else if (mesFinal == 8) {
        var dataMesFinal = "Agosto"
      } else if (mesFinal == 9) {
        var dataMesFinal = "Setembro"
      } else if (mesFinal == 10) {
        var dataMesFinal = "Outubro"
      } else if (mesFinal == 11) {
        var dataMesFinal = "Novembro"
      } else if (mesFinal == 12) {
        var dataMesFinal = "Dezembro"
      }


      setValue("DataLocal", data + " ás " + dataHora + "h" + minutos + "m")
      setValue("DiaInicial", diaInicial + " de " + dataMes + " a " + diaFinal + " de " + dataMesFinal)
      setValue("Endereco", response.data.addressEvent + "," + response.data.city + " - " + response.data.state)
      setValue("NomeEvento", response.data.nameEvent)
      setValue("TituloDescricao", response.data.nameEvent)
      setValue("Descricao", response.data.description)
      setValue("diaEvento", data)
      setValue("horarioEvento", dataHora + "h" + minutos + "m as " + dataHoraFinal + "h" + minutosFinal + "m" )
    })
  }, [])

  var precoDoEvento;

  const alert = () => {
    alert("teste")
  }

  useEffect(() => {
    axios.get(`http://44.214.102.135:8080/v1/tickets/eventos/${id}`)
    .then((response) => {
      console.log('PREÇO DO EVENTO', response.data[0].precoIngresso)
      precoDoEvento = response.data[0].precoIngresso
      setValue("precoEvento", "Valor do ingresso : R$" + response.data[0].precoIngresso)
    })
    .catch(() => {
      console.log("Ingresso errado!")
    })
  })

  const style = {
    color: 'blue'
  }
  return (
    <>
      <Caixa>

        <BoxFormulario>
      <BoxFormularioParte1>

    <FormularioEsquerda2>
    <Informacoes>
            <InputTitulo {...register("Titulo")} disabled/>
            <DivDescricao>
            <InputData {...register("DataLocal")} disabled></InputData>
            </DivDescricao>
            <DivDescricao>
            <InputData1 {...register("DiaInicial")} disabled></InputData1>
            </DivDescricao>
            <InputData2 {...register("precoEvento")}></InputData2>
            <DivDescricao>
            <InputData2 {...register("Endereco")} disabled></InputData2>


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

        <InputData3 {...register("TituloDescricao")} disabled></InputData3>
        <InputData4 {...register("Descricao")}></InputData4>
        <Descricao>INFORMAÇÕES</Descricao>
        <Descricao>DIA DO EVENTO: <input className='inputDia' type="blocked" {...register("diaEvento")}></input></Descricao>
        <Descricao>HORÁRIO DO EVENTO: <input type="text" className='inputDia' {...register("horarioEvento")}/></Descricao>



        </FormularioEsquerda>


        <FormularioDireita>
            <InputTitulo2 {...register("NomeEvento")} disabled></InputTitulo2>
            <InputData5 value={"FORMAS DE PAGAMENTO"}></InputData5>
            <div id="paypal-button-container">
            <PayPalScriptProvider
            options={{
              "client-id": "AekNogbZqfLM-DVzxKhkfHXAsC2UoZ90cdqCRBUpfyLBO8bcOmgZeX6hZ8Uvxxcs03H9Ejyyin65DFiD",
              currency: "BRL"
            }}
            >
              <PayPalButtons
              style={{
                color: "silver",
                shape: "pill"
              }}
              id="Botoes"
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: precoDoEvento
                      },
                    },
                  ],
                });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then(function (details) {
                  saveAs(url, "ingresso.png")
                })
              }}
              />
            </PayPalScriptProvider>
            </div>

        </FormularioDireita>

      </BoxFormularioParte2>

        </BoxFormulario>

      </Caixa>
    </>
  )
}

export default PaginaEvento;
