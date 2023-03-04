import { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  BoxFormulario,
  TituloBoxFormulario,
  BoxLadoEsquerdo,
  FormCEP,
  InputCEP,
  InputEndereco,
  BoxLadoDireito,
  InputEndereco2,
  BotaoPublicar,
  InputData,
} from './AppStyled';
import TextField from '@mui/material/TextField';
import $ from 'jquery';
import './style.css';
import { useEffect } from 'react';

import GoogleMapReact from 'google-map-react';
import Geocode from 'react-geocode';
import stylesMap from '../Maps/stylesMap';

const FormEvento = () => {
  const defaultProps = {
    center: {
      lat: -23.558611,
      lng: -46.660868,
    },
    zoom: 11,
  };
  const { register, handleSubmit, setValue, values } = useForm();

  const onSubmit = (e) => {
    console.log(e);
  };

  const [geo, setGeo] = useState(false);
  const [local, setLocal] = useState({});

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, '');

    console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then((res) =>
      res
        .json()
        .then((data) => {
          console.log(data);
          let endereco = data.bairro + ', ' + data.logradouro;
          setValue('addressEvent', endereco);
          setValue('state', data.uf);
          setValue('city', data.localidade);
          // setCep(endereco);

          Geocode.setApiKey('AIzaSyBcrmgLdJ79VsDc5lbmueQQIakqiwAIg-Y');

          // set response language. Defaults to english.
          Geocode.setLanguage('pt');

          // set response region. Its optional.
          // A Geocoding request with region=es (Spain) will return the Spanish city.
          Geocode.setRegion('br');
          Geocode.fromAddress(endereco).then(
            (response) => {
              const { lat, lng } = response.results[0].geometry.location;
              console.log(lat, lng);
              setValue('latitude', lat);
              setValue('longitude', lng);
              setLocal({ lat: lat, lng: lng });
              setGeo(true);
              console.log('setei os valores');
            },
            (error) => {
              console.error(error);
            }
          );
        })
        .catch(() => {
          alert('CEP Inválido');
        })
    );
  };

  const navigate = useNavigate();

  const addPost = (data) =>
    axios
      .post('http://backend-vought.duckdns.org:8080/v1/events', data)
      .then(() => {
        console.log(data);
        console.log('Tudo certo!');
        alert('Evento cadastrado com sucesso!');
        navigate('/adicionar-ingresso');
      })
      .catch(() => {
        console.log(data);
        console.log('Alguma coisa deu errado!');
      });

  return (
    <Box>
      <BoxFormulario>
        {/*Lado esquerdo do formulário */}
        <BoxLadoEsquerdo>
          <TituloBoxFormulario>
            Cadastre aqui as informações do evento
          </TituloBoxFormulario>
          <TextField
            id="outlined-basic"
            label="Nome do evento"
            fullWidth
            inputProps={{ sx: { fontSize: 12.0 } }}
            variant="outlined"
            name="nameEvent"
            {...register('nameEvent')}
          />

          <TextField
            id="outlined-basic"
            label="Categoria do evento"
            fullWidth
            inputProps={{ sx: { fontSize: 12.0 } }}
            variant="outlined"
            name="nameEvent"
            {...register('categoryEvent')}
          />

          <TextField
            id="outlined-basic"
            label="Descrição do evento"
            fullWidth
            inputProps={{ sx: { fontSize: 12.0 } }}
            variant="outlined"
            name="nameEvent"
            {...register('description')}
          />

          {/*Formulário CEP no lado esquerdo*/}
          <FormCEP onSubmit={handleSubmit(onSubmit)}>
            <InputCEP
              placeholder="CEP"
              {...register('cep')}
              onBlur={checkCEP}
              name="cep"
            />
          </FormCEP>

          <InputEndereco2
            placeholder="Endereço do evento"
            name="addressEvent"
            disabled
            {...register('addressEvent')}
          />

          <InputEndereco
            placeholder="Estado"
            name="stateEvent"
            disabled
            {...register('state')}
          />

          <InputEndereco
            placeholder="Cidade"
            name="cityEvent"
            disabled
            {...register('city')}
          />

          <InputData
            type="datetime-local"
            placeholder="Data Inicial do evento"
            {...register('startData')}
          />

          <InputData
            placeholder="Data Final do evento"
            type="datetime-local"
            {...register('endData')}
          />
        </BoxLadoEsquerdo>

        {/*Lado direito do formulário */}
        <BoxLadoDireito>
          <input id="latitude" type="hidden" {...register('latitude')} />
          <input id="longitude" type="hidden" {...register('longitude')} />
          <div id="map">
            <div style={{ height: '100%', width: '100%' }}>
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: 'AIzaSyBcrmgLdJ79VsDc5lbmueQQIakqiwAIg-Y',
                }}
                center={setGeo ? local : defaultProps.center}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                zoom={16}
              >
                {true && (
                  <div
                    lat={local.lat}
                    lng={local.lng}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50',
                      width: '18px',
                      height: '18px',
                      backgroundColor: '#000',
                      border: '2px solid #fff',
                      borderRadius: '100',
                      userSelect: 'none',
                      transform: 'translate(-50%, -50%)',
                      cursor: 'pointer',
                      '&:hover': {
                        zIndex: '1',
                      },
                    }}
                  ></div>
                )}
              </GoogleMapReact>
            </div>
          </div>
          {/*Botão de publicar */}
          <form onSubmit={handleSubmit(addPost)}>
            <BotaoPublicar>Publicar Evento</BotaoPublicar>
          </form>
        </BoxLadoDireito>
      </BoxFormulario>
    </Box>
  );
};

export default FormEvento;
