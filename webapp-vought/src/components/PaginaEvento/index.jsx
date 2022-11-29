import axios from 'axios';
import { Caixa, BoxFormulario, Informacoes, InputTitulo, InputData, DivDescricao, InputHorario, InputData1, InputHorario1, InputData2, InputHorario2, Foto, BoxFormularioParte1, BoxFormularioParte2, Descricao} from './AppStyled'
import { useParams } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';


const PaginaEvento = () => {

  const { id } = useParams()

  const { setValue, register } = useForm();

  useEffect(() => {
    axios.get(`http://localhost:8080/v1/events/${id}`)
    .then((response) => {
      console.log(response.data)
      console.log(response.data.addressEvent)
      console.log(new Date(response.data.startData))
      setValue("Titulo", response.data.nameEvent)
      const dia = new Date(response.data.startData).getDay()
      const dataHora = new Date(response.data.startData).getHours()
      const diaInicial = new Date(response.data.startData).getDate()
      const mesInicial = new Date(response.data.startData).getMonth();
      const diaFinal = new Date(response.data.endData).getDate();
      const mesFinal = new Date(response.data.endData).getMonth();
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


      setValue("DataLocal", data + "  ás")
      setValue("HoraLocal", dataHora + "h00")
      setValue("DiaInicial", diaInicial + " de " + dataMes + " a")
      setValue("DataFinal", diaFinal + " de " + dataMesFinal)
      setValue("Endereco", response.data.addressEvent + ",")
      setValue("Cidade", response.data.city + " - ")
      setValue("Estado", response.data.state)

    })
  }, [])

  return (
    <>
      <Caixa>

        <BoxFormulario>
      <BoxFormularioParte1>

      <Informacoes>
            <InputTitulo {...register("Titulo")} disabled/>
            <DivDescricao>
            <InputData {...register("DataLocal")} disabled></InputData>
            <InputHorario {...register("HoraLocal")} disabled></InputHorario>
            </DivDescricao>
            <DivDescricao>
            <InputData1 {...register("DiaInicial")} disabled></InputData1>
            <InputHorario1 {...register("DataFinal")} disabled></InputHorario1>
            </DivDescricao>
            <DivDescricao>
            <InputData2 {...register("Endereco")} disabled></InputData2>
            <InputHorario2 {...register("Cidade")} disabled></InputHorario2>
            <InputHorario2 {...register("Estado")} disabled></InputHorario2>

            </DivDescricao>
          </Informacoes>

          <Foto></Foto>
      </BoxFormularioParte1>

      <BoxFormularioParte2>
          <Descricao>DESCRIÇÃO DO EVENTO</Descricao>
      </BoxFormularioParte2>

        </BoxFormulario>

      </Caixa>
    </>
  )
}

export default PaginaEvento;
