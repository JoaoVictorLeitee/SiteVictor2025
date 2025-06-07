import linkedin from '../../Imagens/linkedin.png';
import github from '../../Imagens/github.png';
import styled from 'styled-components';

const Icone = styled.li`
  margin-left: 20px;
  cursor: pointer;
  display: flex;

  &:hover {
    transform: scale(1.1);
    background-image: linear-gradient(to right, rgba(240, 240, 240, 0.05) 1%, rgba(240, 240, 240, 0.2) 100%);
  }
`;

const Iconesstyle = styled.ul`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const IconeImg = styled.img`
  width: 45px;
  height: auto;
`;

function Icones() {
    return (
        <Iconesstyle>
            <Icone>
                <a href="https://www.linkedin.com/in/jo%C3%A3oVictorLeite/" target="_blank" rel="noopener noreferrer">
                    <IconeImg src={linkedin} alt="LinkedIn" />
                </a>
            </Icone>
            <Icone>
                <a href="https://github.com/JoaoVictorLeitee" target="_blank" rel="noopener noreferrer">
                    <IconeImg src={github} alt="GitHub" />
                </a>
            </Icone>
        </Iconesstyle>
    );
}

export default Icones;
