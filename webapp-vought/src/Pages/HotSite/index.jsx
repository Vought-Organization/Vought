import NavBar from "../../components/Navbar";
import './style.css'
import events from 'axios';

function HotSite() {
   
   async function downloadTxt() {
        console.log("Requisição está sendo feita: ");
    
        events.get("http://localhost:8080/v1/events/export-eventos")
        .then((response) => {
            console.log(response.data);
            setEvento(response.data);
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
                </div>
                <div className="search_box">
                    <div className="input_bx">
                        <p>Quer saber mais sobre os eventos e os participantes?
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