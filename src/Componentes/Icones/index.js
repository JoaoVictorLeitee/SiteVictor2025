import linkedin from '../../Imagens/linkedin.png'
import github from '../../Imagens/github.png'
import styled from 'styled-components'

const Icone = styled.li`
    margin-right: -140px;
    width: 0px;
    cursor: pointer;
    display: flex;
    margin-left: 200px;
    &:hover {
        -xpedu-transform: scale(0.8);
        -ms-transform: scale(1.0);
         transform: scale(1.1);
        background-image: linear-gradient(to right, rgba(240, 240, 240, 5) 1%, rgba(240, 240, 240, 0.2) 100%);
      }
`
const Iconesstyle = styled.ul`
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 25vw;
    
`

const Iconelinkedin = styled.img`
    width: 45px; /* Defini o tamanho dos ícones como 20px */
    height: auto; /* Mantém a proporção da altura automaticamente */
    
`
const Iconegithub = styled.img`
    width: 45px; /* Defini o tamanho dos ícones como 20px */
    height: auto; /* Mantém a proporção da altura automaticamente */
`

function Icones() {
    // Supondo que você tenha dois ícones diferentes para o LinkedIn e o GitHub
    const icones = [linkedin, github]

    return (
        <Iconesstyle>
            <Icone>
                <a href="https://www.linkedin.com/in/jo%C3%A3oVictorLeite/" target="_blank">
                    <Iconelinkedin src={icones[0]} alt="LinkedIn" />
                </a>
            </Icone>
            <Icone>
                <a href="https://github.com/JoaoVictorLeitee" target="_blank">
                    <Iconegithub src={icones[1]} alt="GitHub" />
                </a>
            </Icone>
        </Iconesstyle>
    );
}



export default Icones;

