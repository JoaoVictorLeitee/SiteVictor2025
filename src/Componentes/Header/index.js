import Icones from '../../Componentes/Icones';
import OpcoesHeader from '../../Componentes/OpcoesHeader';
import Logo from '../../Componentes/Logo/index'
import styled from 'styled-components'
import { HashLink } from 'react-router-hash-link';

const HeaderContainer = styled.header`
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 70px;
  max-width: 1900px;
  width: 100%;
  margin: 0 auto; /* centraliza */

  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 10px 15px;
  }
`;


const Nav = styled.nav`
  display: flex;
  gap: 25px;

  @media (max-width: 768px) {
    gap: 15px;
    margin: 10px 0;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
`;
const NavLink = styled(HashLink)`
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 6px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: rgba(34, 197, 94, 0.8);
    color: #000;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 6px 10px;
  }
`;


const IconesWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 10px;
    justify-content: center;
    width: 100%;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <HashLink smooth to="#home" aria-label="Ir para Home">
        <Logo />
      </HashLink>
      <Nav>
        <NavLink smooth to="#home">Home</NavLink>
        <NavLink smooth to="#portfolio">Skills</NavLink>
        <NavLink smooth to="#contato">Contato</NavLink>
      </Nav>
      <IconesWrapper>
        <Icones />
      </IconesWrapper>
    </HeaderContainer>
  );
}

export default Header;
