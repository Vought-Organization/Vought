import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const EditarEvento = () => {
  const { register, handleSubmit, reset } = useForm();

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://voughtback.duckdns.org/v1/events/${id}`).then((response) => {
      reset(response.data);
    });
  }, []);

  const editPost = (data) =>
    axios
      .put(`https://voughtback.duckdns.org/v1/events/${id}`, data)
      .then(() => {
        console.log(data);
        console.log('Tudo certo!');
        alert('Evento editado com sucesso!');
        navigate('/crud-evento');
      })
      .catch(() => {
        console.log(data);
        console.log('Alguma coisa deu errado!');
      });

  return (
    <>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      ></Box>

      <div id="container">
        <div className="container-evento">
          <div id="container-informacoes">
            <h3 id="titulo">* Informações do evento</h3>
            <div className="container-input">
              <p className="titulo_input">
                Nome do evento <pre className="obrigatorio"> *</pre>
              </p>
              <div className="input_container">
                <TextField
                  id="filled-basic"
                  fullWidth
                  sx={{ m: 1 }}
                  name="nameEvent"
                  {...register('nameEvent')}
                />
              </div>
            </div>
            <div className="container-input">
              <p className="titulo_input">
                Categoria do evento <pre className="obrigatorio"> *</pre>
              </p>
              <div className="input_container">
                <TextField
                  id="filled-basic"
                  fullWidth
                  sx={{ m: 1 }}
                  name="categoryEvent"
                  {...register('categoryEvent')}
                />
              </div>
            </div>
            <div className="container-input" id="container-descricao">
              <p className="titulo_input">
                Insira a descrição do evento{' '}
                <pre className="obrigatorio"> *</pre>
              </p>
              <div className="input_container">
                <TextField
                  id="outlined-multiline-static"
                  multiline
                  rows={4}
                  name="description"
                  {...register('description')}
                  fullWidth
                  sx={{ m: 1 }}
                />
              </div>
            </div>
            <div className="container-input">
              <p className="titulo_input">
                Insira o Cep do local <pre className="obrigatorio"> *</pre>
              </p>
              <div className="input_container">
                <TextField
                  id="filled-basic"
                  fullWidth
                  sx={{ m: 1 }}
                  name="cep"
                  {...register('cep')}
                />
              </div>
            </div>

            <div className="container-input">
              <p className="titulo_input">
                Endereço do local <pre className="obrigatorio"> *</pre>
              </p>
              <div className="input_container">
                <TextField
                  id="filled-basic"
                  fullWidth
                  sx={{ m: 1 }}
                  name="addressEvent"
                  {...register('addressEvent')}
                />
              </div>
            </div>
          </div>
          <div id="container-informacoes-2">
            <div className="container-input-2" id="estado">
              <div id="input-estado-cidade">
                <p className="titulo_input">
                  Estado <pre className="obrigatorio"> *</pre>
                </p>
                <div id="input_container">
                  <TextField
                    id="filled-basic"
                    fullWidth
                    sx={{ m: 1 }}
                    name="state"
                    {...register('state')}
                  />
                </div>
                <p className="titulo_input">
                  Cidade <pre className="obrigatorio"> *</pre>
                </p>
                <div id="input_container">
                  <TextField
                    id="filled-basic"
                    fullWidth
                    sx={{ m: 1 }}
                    name="city"
                    {...register('city')}
                  />
                </div>
              </div>
            </div>
            <div className="container-input">
              <p className="titulo_input">
                Data inicial do evento <pre className="obrigatorio"> *</pre>
              </p>
              <div className="input_container">
                <TextField
                  id="filled-basic"
                  fullWidth
                  sx={{ m: 1 }}
                  name="startData"
                  {...register('startData')}
                />
              </div>
            </div>
            <div className="container-input">
              <form
                className="input_container"
                id="button-publicar"
                onSubmit={handleSubmit(editPost)}
              >
                <Button variant="contained" type="submit">
                  Editar Evento
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditarEvento;
