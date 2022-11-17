// import axios from 'axios';
// import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
// import {
//   Box,
//   BoxFormulario,
//   TituloBoxFormulario,
//   BoxLadoEsquerdo,
//   FormCEP,
//   InputCEP,
//   InputEndereco,
//   BoxLadoDireito,
//   InputEndereco2,
//   BotaoPublicar,
//   InputData,
// } from './AppStyled';
// import TextField from '@mui/material/TextField';
// import $ from 'jquery';
// import './style.css';
// import { useEffect } from 'react';

// const FormEvento = () => {
//   var searchInput = 'search_input';

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src =
//       'https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyBcrmgLdJ79VsDc5lbmueQQIakqiwAIg-Y&callback=initMap';

//     document.body(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   const google = window.google.maps.places;

//   $(document).ready(function () {
//     var autocomplete;
//     autocomplete = new google.maps.places.Autocomplete(
//       document.getElementById(searchInput),
//       {
//         types: ['geocode'],
//       }
//     );

//     google.maps.event.addListener(autocomplete, 'place_changed', function () {
//       var near_place = autocomplete.getPlace();

//       let latitude = near_place.geometry.location.lat();
//       let longitude = near_place.geometry.location.lng();

//       console.log(latitude, longitude);

//       setValue('latitude', latitude);
//       setValue('longitude', longitude);
//     });
//   });

//   $(document).on('change', '#' + searchInput, function () {
//     document.getElementById('latitude_input').value = '';
//     document.getElementById('longitude_input').value = '';

//     document.getElementById('latitude').innerHTML = '';
//     document.getElementById('longitude').innerHTML = '';
//   });

//   function initialize() {
//     var map = new google.maps.Map(document.getElementById('map'), {
//       center: { lat: -33.8688, lng: 151.2195 },
//       zoom: 12,
//     });

//     var input = document.getElementById('search_input');

//     var autocomplete = new google.maps.places.Autocomplete(input);
//     autocomplete.bindTo('bounds', map);

//     var infowindow = new google.maps.InfoWindow();

//     var marker = new google.maps.Marker({
//       map: map,
//       anchorPoint: new google.maps.Point(0, -29),
//     });

//     autocomplete.addListener('place_changed', function () {
//       infowindow.close();
//       marker.setVisible(false);
//       var place = autocomplete.getPlace();
//       if (!place.geometry) {
//         window.alert('Esse lugar não tem especificação');
//         return;
//       }

//       if (place.geometry.viewport) {
//         map.fitBounds(place.geometry.viewport);
//       } else {
//         map.setCenter(place.geometry.location);
//         map.setZoom(17);
//       }
//       marker.setIcon({
//         url: place.icon,
//         size: new google.maps.Size(71, 71),
//         origin: new google.maps.Point(0, 0),
//         anchor: new google.maps.Point(17, 34),
//         scaledSize: new google.maps.Size(35, 35),
//       });
//       marker.setPosition(place.geometry.location);
//       marker.setVisible(true);

//       var address = '';
//       if (place.address_components) {
//         address = [
//           (place.address_components[0] &&
//             place.address_components[0].short_name) ||
//             '',
//           (place.address_components[1] &&
//             place.address_components[1].short_name) ||
//             '',
//           (place.address_components[2] &&
//             place.address_components[2].short_name) ||
//             '',
//         ].join(' ');
//       }
//       infowindow.setContent(
//         '<div><strong>' + place.name + '</strong><br>' + address
//       );
//       infowindow.open(map, marker);
//     });
//   }
//   google.maps.event.addDomListener(window, 'load', initialize);

//   const { register, handleSubmit, setValue } = useForm();

//   const onSubmit = (e) => {
//     console.log(e);
//   };

//   const checkCEP = (e) => {
//     const cep = e.target.value.replace(/\D/g, '');

//     console.log(cep);
//     fetch(`https://viacep.com.br/ws/${cep}/json/`).then((res) =>
//       res
//         .json()
//         .then((data) => {
//           console.log(data);
//           let endereco = data.bairro + ', ' + data.logradouro;
//           setValue('addressEvent', endereco);
//           setValue('state', data.uf);
//           setValue('city', data.localidade);
//         })
//         .catch(() => {
//           alert('CEP Inválido');
//         })
//     );
//   };

//   const navigate = useNavigate();

//   const addPost = (data) =>
//     axios
//       .post('http://localhost:8080/v1/events', data)
//       .then(() => {
//         console.log(data);
//         console.log('Tudo certo!');
//         alert('Evento cadastrado com sucesso!');
//         navigate('/escolha-evento');
//       })
//       .catch(() => {
//         console.log(data);
//         console.log('Alguma coisa deu errado!');
//       });

//   function initMapa() {
//     var map = new google.maps.Map(document.getElementById('map'), {
//       center: { lat: -33.8688, lgn: 151.2195 },
//       zoom: 13,
//     });
//     var input = document.getElementById('searchInput');
//     map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

//     var autocomplete = new google.maps.places.Autocomplete(input);
//     autocomplete.bindTo('bounds', map);

//     var infowindow = new google.maps.InfoWindow();
//     var marker = new google.maps.Marker({
//       map: map,
//       anchorPoint: new google.maps.Point(0, -29),
//     });

//     autocomplete.addListener('place_changed', function () {
//       infowindow.close();
//       marker.setVisible(false);
//       var place = autocomplete.getPlace();
//       if (!place.geometry) {
//         window.alert("Autocomplete's returned place contains no geometry");
//         return;
//       }

//       if (place.geometry.viewport) {
//         map.fitBounds(place.geometry.viewport);
//       } else {
//         map.setCenter(place.geometry.location);
//         map.setZoom(17);
//       }
//       marker.setIcon({
//         url: place.icon,
//         size: new google.maps.Size(71, 71),
//         origin: new google.maps.Point(0, 0),
//         anchor: new google.maps.Point(17, 34),
//         scaledSize: new google.maps.Size(35, 35),
//       });
//       marker.setPosition(place.geometry.location);
//       marker.setVisible(true);

//       var address = '';
//       if (place.address_components) {
//         address = [
//           (place.address_components[0] &&
//             place.address_components[0].short_name) ||
//             '',
//           (place.address_components[1] &&
//             place.address_components[1].short_name) ||
//             '',
//           (place.address_components[2] &&
//             place.address_components[2].short_name) ||
//             '',
//         ].join(' ');
//       }

//       for (var i = 0 < place.address_components.length; i++; ) {
//         if (place.address_components[i].types[0] == 'postal_code') {
//           document.getElementById('').innerHTML =
//             place.address_components[i].long_name;
//         }
//       }
//     });
//   }

//   return (
//     <Box>
//       <BoxFormulario>
//         {/*Lado esquerdo do formulário */}
//         <BoxLadoEsquerdo>
//           <TituloBoxFormulario>
//             Cadastre aqui as informações do evento
//           </TituloBoxFormulario>
//           <TextField
//             id="outlined-basic"
//             label="Nome do evento"
//             fullWidth
//             inputProps={{ sx: { fontSize: 12.0 } }}
//             variant="outlined"
//             name="nameEvent"
//             {...register('nameEvent')}
//           />

//           <TextField
//             id="outlined-basic"
//             label="Categoria do evento"
//             fullWidth
//             inputProps={{ sx: { fontSize: 12.0 } }}
//             variant="outlined"
//             name="nameEvent"
//             {...register('categoryEvent')}
//           />

//           <TextField
//             id="outlined-basic"
//             label="Descrição do evento"
//             fullWidth
//             inputProps={{ sx: { fontSize: 12.0 } }}
//             variant="outlined"
//             name="nameEvent"
//             {...register('description')}
//           />

//           <InputData
//             placeholder="Insira o endereço completo do evento"
//             type="text"
//             id="search_input"
//           />

//           {/*Formulário CEP no lado esquerdo*/}
//           <FormCEP onSubmit={handleSubmit(onSubmit)}>
//             <InputCEP
//               placeholder="CEP"
//               {...register('cep')}
//               onBlur={checkCEP}
//               name="cep"
//             />
//           </FormCEP>

//           <InputEndereco2
//             placeholder="Endereço do evento"
//             name="addressEvent"
//             disabled
//             {...register('addressEvent')}
//           />

//           <InputEndereco
//             placeholder="Estado"
//             name="stateEvent"
//             disabled
//             {...register('state')}
//           />

//           <InputEndereco
//             placeholder="Cidade"
//             name="cityEvent"
//             disabled
//             {...register('city')}
//           />

//           <InputData
//             type="datetime-local"
//             placeholder="Data Inicial do evento"
//             {...register('startData')}
//           />

//           <InputData
//             placeholder="Data Final do evento"
//             type="datetime-local"
//             {...register('endData')}
//           />
//         </BoxLadoEsquerdo>

//         {/*Lado direito do formulário */}
//         <BoxLadoDireito>
//           <input id="latitude" type="hidden" {...register('latitude')} />

//           <input id="longitude" type="hidden" {...register('longitude')} />

//           <div id="map"></div>

//           {/*Botão de publicar */}
//           <form onSubmit={handleSubmit(addPost)}>
//             <BotaoPublicar>Publicar Evento</BotaoPublicar>
//           </form>
//         </BoxLadoDireito>
//       </BoxFormulario>
//     </Box>
//   );
// };

// export default FormEvento;

import React from 'react'

const index = () => {
  return (
    <div>index</div>
  )
}

export default index
