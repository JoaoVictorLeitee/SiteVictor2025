import React from "react";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

const FooterContainer = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  box-shadow: 0 -2px 10px rgba(34, 197, 94, 0.3);
`;

const Links = styled.nav`
  display: flex;
  flex-direction: row; /* em linha */
  gap: 20px; /* espaçamento entre links */
  flex-wrap: wrap;
  margin-left: 160px;
`;

const FooterLink = styled(HashLink)`
  color: #22c55e;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #94d3a2;
  }
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 22px;
  color: #22c55e;
  font-family: 'Courier New', Courier, monospace;
`;

const CopyRight = styled.div`
  font-size: 14px;
  color: #94a3b8;
  margin-top: 10px;
  width: 100%;
  text-align: center;

  @media(min-width: 600px) {
    width: auto;
    margin-top: 0;
  }
`;

function Rodape() {
  return (
    <FooterContainer>
      <Logo>{`<VictorLeite />`}</Logo>

      <Links>
        <FooterLink smooth to="#home">Home</FooterLink>
        <FooterLink smooth to="#portfolio">Portfolio</FooterLink>
        <FooterLink smooth to="#certificados">Certificados</FooterLink>
        <FooterLink smooth to="#contato">Contato</FooterLink>
      </Links>

      <CopyRight>© {new Date().getFullYear()} Victor Leite. Todos os direitos reservados.</CopyRight>
    </FooterContainer>
  );
}

export default Rodape;
