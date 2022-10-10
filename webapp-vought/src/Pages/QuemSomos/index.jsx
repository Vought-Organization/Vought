import React from 'react';
import './index.css'
import Dardo from '../../assets/imgs/alvo-de-dardos 1.png'
import Mapa from '../../assets/imgs/google-maps 1.png'
import FotoDepoimento from '../../assets/imgs/Component 14.png'
import Navbar from '../../components/Navbar/index'


const QuemSomos = () => {
  return (
    <>
    <Navbar></Navbar>
    <header id="showcase">
            <div id="showcase-container">
                <h1>VOUGHT</h1>
            </div>
        </header>

        <section id="conquistas">
            <div class="headline">Nossas conquistas</div>
            <div id="conquistas-container">
                <h1 class="conquista">+500 <br/> CLIENTES <br/> ATENDIDOS</h1>
                <h1 class="conquista">+500 <br /> COMPRAS <br /> EFETUADAS</h1>
                <h1 class="conquista">+500 <br /> EVENTOS <br /> CADASTRADOS</h1>
            </div>
        </section>

        <section id="depoimentos">
            <div class="headline">Depoimentos</div>
            <div id="depoimentos-container">
                <div class="depoimento">
                    <img src={FotoDepoimento} alt="" class="imagem_depoimento" />
                    <p class="texto_depoimento">“Graças a Vought eu consigo achar lugares
                        para ir no final de semana sem nenhum esforço.
                        Agilizou muito minha rotina e organização
                        de tempo.”</p>
                        <h1 class="nome_depoimento">Igor Gomes</h1>
                </div>
                <div class="depoimento">
                    <img src={FotoDepoimento} alt="" class="imagem_depoimento" />
                    <p class="texto_depoimento">“Com a disponibilidade de comprar os ingressos
                        por aqui mesmo sem precisar entrar em outro
                        site ou ir presencial comprar ajuda demais
                        minha rotina.”</p>
                        <h1 class="nome_depoimento">Fernando Lima</h1>
                </div>
                <div class="depoimento">
                    <img src={FotoDepoimento} alt="" class="imagem_depoimento" />
                    <p class="texto_depoimento">“Agora consigo ter muito mais visibilidade em
                        meus eventos e não tenho dor de cabeça na hora
                        de divulgação para vender os ingressos.”</p>
                        <h1 class="nome_depoimento">Leticia Albuquerque</h1>
                </div>
            </div>
        </section>
        <section id="beneficios">
            <div class="headline">SOBRE NOSSA APLICAÇÃO E BENEFÍCIOS</div>
            <div id="beneficios-container">
                <div class="beneficio">
                    <img src={Dardo} alt="" />
                    <h1 class="titulo">DIRETO AO PONTO</h1>
                    <p>Nossa aplicação é direta ao ponto
                        e assim que entrar você ja pode utilizar.
                        Você só precisa do login quando for
                        comprar nosso ingresso e ter uma
                        interação melhor com o produto.</p>
                </div>
                <div class="beneficio">
                    <img src={Mapa} alt="" />
                    <h1 class="titulo">BOA USABILIDADE</h1>
                    <p>Nossa ferramenta foi testada e é muito simples
                        de usar, basta você escrever o nome do
                        lugar que você quer ir ou filtrar algum
                        tipo de evento que você gosta e pronto, o
                        mapa já trás para você o lugar mais próximo de
                        sua preferência.</p>
                </div>
            </div>
        </section>

        <footer id="footer">
            <p>Copyright 2022 - Todos os direitos reservados.</p>
            <p>Designed by Vought</p>
        </footer>
    </>
  )
};

export default QuemSomos;
