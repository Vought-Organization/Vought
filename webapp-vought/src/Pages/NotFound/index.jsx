import { useNavigate } from "react-router-dom";
import NavBar from "../../components/Navbar";
import './style.css'

function NotFound(props) {

    const navigate = useNavigate()
   
    const url = 'https://i.imgur.com/xb2POIK.png'
    return (
        <>
        <NavBar/>
        <div className="divPai">
            <img id="imagemNotFound" src={url} alt="" />
            <p className="mensagemErro"><h1>404</h1>
                  Ocorreu um erro durante a pesquisa, desculpe.
                  Pesquise novamente ou volte para a <span onClick={() => navigate("/")} className="telaInicial">página inicial!</span>
            </p>
        </div>
        </>
        
    )
}
export default NotFound;