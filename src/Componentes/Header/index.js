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
  max-width: 2000px;
  margin: 0 auto;
`;

const Nav = styled.nav`
  display: flex;
  gap: 25px;
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
`;

function Header() {
    return (
        <HeaderContainer>
            <HashLink smooth to="#home">
                <Logo />
            </HashLink>
            <Nav>
                <NavLink smooth to="#home">Home</NavLink>
                <NavLink smooth to="#portfolio">Skills</NavLink>
                <NavLink smooth to="#contato">Contato</NavLink>
            </Nav>
            <Icones />
        </HeaderContainer>
    );
}

export default Header;
