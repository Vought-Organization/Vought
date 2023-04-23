import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './index.css';
import Seta from './kisspng-arrow-button-icon-right-arrow-transparent-background-5a77bc2a82ed16.7252492515177963945363.png'
import Maps from '../../components/Maps';
import NavBar from '../../components/Navbar';



const TelaPagamento = () => {

  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [, setIdEvent] = useState([])
  const [, setLatitude] =useState([]);
  const [, setLongitude] = useState([]);
  const [, setNameEvent] = useState([]);
  const [, setAdressEvent] = useState([])

  const carousel = useRef(null);
  const alow = useRef(null);
  const alow2 = useRef(null);


  useEffect((data) => {
    axios.get("http://54.163.233.38:8080/v1/events/qttd/3", data)
    .then((data) => {
      console.log(data.data)
      setData(data.data)
    })
  }, [])


  useEffect((response) => {
    axios.get("http://54.163.233.38:8080/v1/events", response)
    .then((response) => {
      console.log('DATA AQUI', response.data)
      setIdEvent(response.data.idEvent)
      setNameEvent(response.data.nameEvent)
      setAdressEvent(response.data.addressEvent)
      setLatitude(response.data.latitude)
      setLongitude(response.data.longitude)
      setData2(response.data)
    })
  }, [])

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth
    console.log(carousel.current.offsetWidth);
  }

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth
    console.log(carousel.current.offsetWidth);
  }
  const handleLeftClick2 = (e) => {
    e.preventDefault();
    alow.current.scrollLeft -= alow.current.offsetWidth
    console.log(carousel.current.offsetWidth);
  }

  const handleRightClick2 = (e) => {
    e.preventDefault();
    alow.current.scrollLeft += alow.current.offsetWidth
    console.log(carousel.current.offsetWidth);
  }
  const handleLeftClick3 = (e) => {
    e.preventDefault();
    alow2.current.scrollLeft -= alow2.current.offsetWidth
    console.log(carousel.current.offsetWidth);
  }

  const handleRightClick3 = (e) => {
    e.preventDefault();
    alow2.current.scrollLeft += alow2.current.offsetWidth
    console.log(carousel.current.offsetWidth);
  }

  const places = [
    {
      id: 2,
      evento: "Teste",
      endereco: 'Av paulista 445',
      image: 'https://iili.io/H2M0Gaf.md.jpg',
      coords: [
        {
          lat: -23.4839417,
          lng: -46.5758245,
        },
      ],
    },
    {
      id: 3,
      evento: 'Teste',
      endereco: 'Av paulista 445',
      image: 'https://iili.io/H2Vxdhv.md.jpg',
      coords: [
        {
          lat: -23.582526,
          lng: -46.699584,
        },
      ],
    },
    {
      id: 4,
      evento: 'Jesus4',
      endereco: 'Av paulista 445',
      image: 'https://freeimage.host/i/H2M0Gaf',
      coords: [
        {
          lat: -23.534862,
          lng: -46.634121,
        },
      ],
    },
    {
      id: 5,
      evento: 'Ibirapuera',
      endereco: 'Av paulista 445',
      image: 'https://freeimage.host/i/H2M0Gaf',
      coords: [
        {
          lat: -23.587218,
          lng: -46.664037,
        },
      ],
    },
    {
      id: 6,
      evento: 'Quarta Divisão',
      endereco: 'Av paulista 445',
      image: 'https://freeimage.host/i/H2M0Gaf',
      coords: [
        {
          lat: -23.681282,
          lng: -46.355625,
        },
      ],
    },
    {
      id: 7,
      evento: 'Jesus4',
      endereco: 'Av paulista 445',
      image: 'https://freeimage.host/i/H2M0Gaf',
      coords: [
        {
          lat: -23.557143,
          lng: -46.664547,
        },
      ],
    },
    {
      id: 8,
      evento: 'Guaianazes',
      endereco: 'Av paulista 445',
      image: 'https://freeimage.host/i/H2M0Gaf',
      coords: [
        {
          lat: -23.576639,
          lng: -46.371823,
        },
      ],
    },
  ];


  return (
    <>
        <div id="container--home">
    <NavBar></NavBar>


            <div id="home--principal">
              <div id="lado--esquerdo"></div>

              <div id="lado--direito">
                <h1 id="titulo--home">VOUGHT</h1>
                  <div id="caixa--home">
                  <span id="paragrafo--home">O maior site de procura de eventos da
                  América Latina, com a VOUGHT você acha seu
                  evento preferido no piscar de olhos.</span>
                  <h1 id="titulo--botao">
                  Clique e ache um evento com o seu gosto.
                  </h1>
                  <button id="botao--principal"><a href="#mapa--do--google">Achar evento</a></button>
                  </div>
              </div>
            </div>
        </div>
        <div id="container--evento">
          <h1 id="titulo--evento">Últimos eventos publicados</h1>

          <div id="div--evento">
            <div id="destaque--evento" ref={carousel}>
              {data.map((item) => {
                const {idEvent, nameEvent, addressEvent} = item;
          return(<div id="info--evento" key={idEvent} onClick={() => navigate({pathname: `pagina-evento/${idEvent}`})}>
                <span className="titulo--evento">{nameEvent}</span>
                <span className="endereco--evento">{addressEvent}</span>
          </div>
          );
          })}
            </div>
            <div className="buttons">
              <button onClick={handleLeftClick}><img src={Seta} alt="" id="imagem--1"/></button>
              <button onClick={handleRightClick}><img src={Seta} alt=""/></button>
            </div>
            <div className="container--mapa" id="mapa--do--google">
              <h1 className="texto--aba--mapa">Pesquise seu evento</h1>
              <h1 className="texto2--aba--mapa">Com nosso mapa interativo você pode pesquisar o evento que você desejar ou filtrar pelo tipo de evento
              <b className="texto2--aba--mapa2"> que você gosta.</b></h1>
              <div className="mapa--google">
                <Maps places={places ?? []} />
              </div>
          </div>
          <div className="container--eventos">
            <h1>VEJA OS EVENTOS DISPONÍVEIS</h1>
          <div className="buttons--2">
              <button onClick={handleLeftClick2}><img src={Seta} alt="" id="imagem--1"/></button>
              <button onClick={handleRightClick2}><img src={Seta} alt=""/></button>
            </div>
            <div className="container--1" ref={alow}>
            {data2.map((item) =>{
                const {idEvent, nameEvent, addressEvent} = item;
          return(<div id="info--evento--2" key={idEvent} onClick={() => navigate({pathname: `pagina-evento/${idEvent}`})}>
                  <div className="informacoes">
                     <span className="titulo--evento--2">{nameEvent}</span>
                        <span className="endereco--evento--2">{addressEvent}</span>
                  </div>
          </div>
          );
          })}
            </div>
            <div className="container--2"></div>
          </div>
          <div className="container--eventos--2">
          <div className="buttons--2">
              <button onClick={handleLeftClick3}><img src={Seta} alt="" id="imagem--1"/></button>
              <button onClick={handleRightClick3}><img src={Seta} alt=""/></button>
            </div>
            <div className="container--1" ref={alow2}>
            {data2.map((item) =>{
                const {idEvent, nameEvent, addressEvent} = item;
          return(<div id="info--evento--2" key={idEvent} onClick={() => navigate({pathname: `pagina-evento/${idEvent}`})}>
                  <div className="informacoes">
                     <span className="titulo--evento--2">{nameEvent}</span>
                        <span className="endereco--evento--2">{addressEvent}</span>
                  </div>
          </div>
          );
          })}
            </div>
            <div className="container--2"></div>
          </div>
          <div className="footer">Vought - Copyright @ 2022 SPTECH. All rights reserved.</div>
          </div>
        </div>
    </>
  )
}

export default TelaPagamento;
