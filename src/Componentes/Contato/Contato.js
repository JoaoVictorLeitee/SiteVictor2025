import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const ContatoContainer = styled.section`
  background-color: #000;
  border-radius: 20px;
  box-shadow: 0 12px 30px rgba(34, 197, 94, 0.3);
  max-width: 1100px;
  width: 100%;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 40px;
  color:rgb(255, 255, 255);
`;

const ContatoCard = styled.a`
  background: #000;
  border-radius: 12px;
  padding: 20px 30px;
  margin: 15px 0;
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 12px 24px rgba(34, 197, 94, 0.2);
    background: linear-gradient(90deg, #1e1e1e, #1a1a1a);
  }
`;

const IconWrapper = styled.div`
  font-size: 32px;
  color: #22c55e;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 18px;
    color: #94a3b8;
  }

  strong {
    font-size: 20px;
    color: #fff;
  }
`;

function Contato() {
  return (
    <ContatoContainer id="contato">
      <Title>Entre em Contato</Title>
      <ContatoCard href="https://wa.me/5561981650362" target="_blank" rel="noopener noreferrer">
        <IconWrapper><FaWhatsapp /></IconWrapper>
        <TextWrapper>
          <span>WhatsApp</span>
          <strong>(61) 98165-0362</strong>
        </TextWrapper>
      </ContatoCard>
      <ContatoCard href="mailto:victorleite.contatos@gmail.com">
        <IconWrapper><FaEnvelope /></IconWrapper>
        <TextWrapper>
          <span>Email</span>
          <strong>victorleite.contatos@gmail.com</strong>
        </TextWrapper>
      </ContatoCard>
    </ContatoContainer>
  );
}

export default Contato;
