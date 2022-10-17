import React from "react";
import './index.css'
import imagemEdit from '../../assets/imgs/edit-icon.png'
import imagemDelete from '../../assets/imgs/delete-icon.png'
import { useNavigate } from 'react-router-dom';


const CrudComponent = (props) => {
  const navigate = useNavigate();

  return (
    <>
     <div className="card-evento">
                <div className="icons">
                <img src={imagemEdit} alt="" onClick={() => navigate(`/edita-evento/${props.idEvent}`)}/>
                <img src={imagemDelete}alt="" />
                </div>
                <div className="info-evento">
                    <p id="paragrafo-info">
                        <h1 id="nome-evento" type="text">{props.nomeEvento}</h1>
                        <div id="endereco-evento" type="text">{props.enderecoEvento}</div>
                    </p>
                    <div id="saiba-mais">
                    <p id="saiba-mais">
                      Clique e saiba mais
                    </p>
                    </div>
                </div>
            </div>
    </>
  )
}

export default CrudComponent;
