import styled, { keyframes } from "styled-components";
import CurriculoPDF from '../../Imagens/Curriculo Victor Leite.pdf';
import fotocurriculo from "../../Imagens/curriculofoto.jpg";

const animeLeft = keyframes`
  0% {
    transform: translateX(-40px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const CurriculoContainer = styled.section`
    color: #555;
    text-align: center;
    padding: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const CurriculoWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 20px;
`;

const CurriculoBox = styled.div`
    background-color: white;
    padding: 10.7vw;
    box-shadow: 0px 0px 10px rgba(0, 0.1, 0.2, 0.5); /* Sombreamento */
    border-radius: 10px;
    width: 20%; /* Defina a largura como uma porcentagem ou uma unidade relativa adequada */
    margin-left: 0px; /* Ajuste conforme necessário */
    animation: ${animeLeft} 1s forwards; /* Adiciona a animação */
`;

const VerticalImage = styled.img`
    width: 39%; /* Definindo largura de auto */
    max-width: 100vw; /* Largura máxima da imagem */
    padding: 0%;
    height: auto; /* Garante que a imagem seja responsiva */
    border-radius: 16px;
    margin-bottom: 0px; /* Adicionando espaçamento abaixo da imagem */
    animation: ${animeLeft} 1s forwards;
`;

const Titulo = styled.h2`
    color: #333;
    font-size: 3vw; /* Tamanho da fonte responsivo em relação à largura da viewport */
    margin-bottom: 1vw; /* Margem inferior responsiva */
    display: flex;
    align-items: center; /* Centraliza verticalmente o texto */
    justify-content: center; /* Centraliza horizontalmente o texto */
`;

const Subtitulo = styled.a`
    color: #333;
    font-size: 2.5vw; /* Tamanho da fonte responsivo em relação à largura da viewport */
    margin-bottom: 1vw; /* Margem inferior responsiva */
    display: flex;
    align-items: center; /* Centraliza verticalmente o texto */
    justify-content: center; /* Centraliza horizontalmente o texto */
`;

const BotaoDownload = styled.button`
    background-color: #007bff;
    color: white;
    padding: 2%;
    margin-bottom: 1%;
    font-size: 90%;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    
    &:hover {
        background-color: #0056b3;
    }
`;



function handleDownloadClick() {
    window.open(CurriculoPDF, "_blank");
}

function CurriculoTela() {
    return (
        <CurriculoContainer>
            <CurriculoWrapper>
                <VerticalImage src={fotocurriculo} />
                <CurriculoBox>
                    <Titulo>Currículo Victor Leite</Titulo>
                    <Subtitulo>Link para Impressão ou Download em PDF</Subtitulo>
                    <BotaoDownload onClick={handleDownloadClick}>Baixar Currículo</BotaoDownload>
                </CurriculoBox>
            </CurriculoWrapper>
        </CurriculoContainer>
    );
}

export default CurriculoTela;
