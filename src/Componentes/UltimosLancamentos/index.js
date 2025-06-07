import { livros } from "./DadosUltimosLancamentos";
import styled from "styled-components";
import CardRecomenda from "../CardRecomenda";
import imagemLivro from '../../Imagens/livro2.png'

const UltimosLancamentosContainer = styled.section`
background-color: #EBECEE;
padding-bottom: 20px;
display: flex;
flex-direction: column;
`

const Titulo = styled.h2`
width: 100%;
padding: 30px 0;
background-color: #FFF;
color: #000;
font-size: 36px;
text-align: center;
margin: 0;
`

const NovosLivrosContainer = styled.div`
margin-top: 30px;
display: flex;
widht: 100%;
justify-content: center;
cursor: pointer;
`


function UltimosLancamentos() {
    return(
    <UltimosLancamentosContainer>
        <Titulo>Últimos Lançamentos</Titulo>
        <NovosLivrosContainer>
        {livros.map(livro => (
        <img src={livro.src}/>
        ))}
        </NovosLivrosContainer>
        <CardRecomenda
        titulo = "Talvez você se interesse por..."
        subtitulo="Angular 11"
        descricao="Construindo uma aplicação com a plataforma Google"
        img={imagemLivro}
        />
    </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos;