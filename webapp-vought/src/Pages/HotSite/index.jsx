import NavBar from "../../components/Navbar";
import React , {useState} from "react";
import './style.css'
import events from 'axios';

function HotSite() {

    const [evento, setEvento] = useState([]);

   async function downloadTxt() {
        console.log("Requisição está sendo feita: ");

        events.get("http://backvought.duckdns.org:8080/v1/events/export-eventos")
        .then((response) => {
            console.log(response.data);
            const url = window.URL.createObjectURL(new Blob([response.data]))
            const link = document.createElement("a")
            link.href = url
            link.setAttribute("download", "exportation-information.txt");
            document.body.appendChild(link)
            link.click();
        })
        .catch((errorOcorrido) => {
            console.log(errorOcorrido)
        })
    }

    async function importTxt() {
        console.log("Requisição está sendo feita: ");

        events.get("http://backvought.duckdns.org:8080/v1/events/import-eventos")
        .then((response) => {
            console.log(response.data);
            alert("Dados Importados com sucesso!")
        })
        .catch((errorOcorrido) => {
            console.log(errorOcorrido)
        })
    }

    return (
        <>
          <NavBar/>
          <div className="banner">
            <div className="bg">
                <img src="https://wallpaperaccess.com/full/3097725.jpg" alt="" className="cover" />
                <div className="content">
                     <h2>Explore the World</h2>
                     <button onClick={() => downloadTxt()} className="btn"> Descubra Agora</button>
                     <button onClick={() => importTxt()} className="btn"> Importar Dados</button>
                </div>
                <div className="search_box">
                    <div className="input_bx">
                        <p>Quer saber mais sobre os seus eventos e os participantes?
                           Click no botão acima, e descubra um ramo de possibilidades
                           em que você jamais viu!
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}
export default HotSite;
