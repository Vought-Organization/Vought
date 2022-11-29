import { useNavigate } from 'react-router-dom';
import './index.css'
import imagemEdit from '../../assets/imgs/edit-icon.png'


const TelaCrud = ({idEvent, nomeEvento, enderecoEvento}) => {

  const navigate = useNavigate();

  return (
    <>
    <div className="card-evento">
                <div className="icons">
                </div>
                <div className="info-evento">
                    <p id="paragrafo-info">
                        <h1 id="nome-evento" type="text">{nomeEvento}</h1>
                        <div id="endereco-evento" type="text">{enderecoEvento}</div>
                    </p>
                    <div id="saiba-mais">
                    <p id="saiba-mais" onClick={() => navigate({pathname: `pagina-evento/${idEvent}`})}>
                      Clique e saiba mais
                    </p>
                    </div>
                </div>
            </div>
    </>
  )
}

export default TelaCrud;
