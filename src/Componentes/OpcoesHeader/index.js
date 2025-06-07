import styled from 'styled-components';
import { Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link';

const textoOpcoes = ['Certificados', 'Portfolio', 'Contato'];

const Opcao = styled.li`
  min-width: 120px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  margin-right: 15px;
  color: #ffffff;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.08);
    box-shadow: 0 12px 30px rgba(34, 197, 94, 0.5);
    background-color: rgba(34, 197, 94, 0.5);
    backdrop-filter: blur(4px);
  }

  @media (max-width: 768px) {
    font-size: 16px;
    min-width: auto;
    margin-right: 10px;
  }
`;


const Opcoes = styled.ul`
  display: flex;
  box-sizing: border-box;

  /* Estilos responsivos */
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

function OpcoesHeader() {
  return (
    <Opcoes>
      {textoOpcoes.map((texto) => (
        <Opcao key={texto}>
          <HashLink smooth to={`#${texto.toLowerCase()}`}>
            <p>{texto}</p>
          </HashLink>
        </Opcao>
      ))}
    </Opcoes>
  );
}



export default OpcoesHeader;
