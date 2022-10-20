import React from "react";
import './index.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";
import { useForm } from 'react-hook-form';
import dayjs from 'dayjs'
import RelativeTime from 'dayjs/plugin/relativeTime'
import { useNavigate } from 'react-router-dom';




const adiciona = () => {

  const navigate = useNavigate();


  dayjs.extend(RelativeTime)


  const [value, setValue] = React.useState(dayjs());



  const { register, handleSubmit } = useForm()


  const addPost = data => axios.post("http://localhost:8080/v1/events", data)
  .then(() => {
    console.log(data)
    console.log(value)
    console.log("Tudo certo!")
    alert("Evento cadastrado com sucesso!")
    navigate('/escolha-evento')
  }) .catch(() => {
    console.log(data)
    console.log("Alguma coisa deu errado!")
  })


  return (
    <>
    <div id="container">
      <div id="container-form-1">
        <div id="container-inputs-form-1">
            <div id="container-parte-1-form">
              <h2 id="titulo-container">Cadastre seu evento</h2>
              <div className="container-input-form">
              <TextField id="outlined-basic" label="Nome do evento" fullWidth variant="outlined" name="nameEvent" {...register("nameEvent")} />
              </div>
              <div className="container-input-form">
              <TextField id="outlined-basic" label="Categoria do evento" fullWidth variant="outlined" name="categoryEvent" {...register("categoryEvent")}/>
              </div>
              <div className="container-input-form">
              <TextField
                id="outlined-multiline-static"
                label="Descrição do evento"
                multiline
                name="description" {...register("description")}
                fullWidth
                rows={4}
              />
              </div>
              <div className="container-input-form">
              <TextField id="outlined-basic" label="Insira o cep do local" name="cep" {...register("cep")} fullWidth variant="outlined" />
              </div>
              <div className="container-input-form">
              <TextField id="outlined-basic" label="Insira o endereço do local" name="addressEvent" {...register("addressEvent")} fullWidth variant="outlined" />
              </div>
            </div>
            <div id="container-parte-2-form">
              <div id="estado-cidade">
            <TextField id="outlined-basic" label="Estado" variant="outlined" name="state" {...register("state")} />
            <TextField id="outlined-basic" label="Cidade" variant="outlined" name="city" {...register("city")} />
              </div>
              <div id="container-datas">
              <div id="data-container">
              <input type="date" id="input-da-data"
              name="startData"
              {...register("startData")}/>
              </div>
                <div id="data-container">
                <input type="date" id="input-da-data"
                  name="endData"
                  {...register("endData")}/>
                </div>
              </div>
              <div id="container-botoes">
              <Button variant="contained" onClick={() => navigate('/escolha-evento')} id="cancelar-evento" type="submit">Cancelar</Button>
              <form action="" onSubmit={handleSubmit(addPost)}>
              <Button variant="contained" id="publicar-evento" type="submit">Publicar</Button>
              </form>
              </div>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default adiciona;
