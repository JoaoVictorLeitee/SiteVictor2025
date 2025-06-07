import styled, { keyframes } from "styled-components";
import fotohome from "../../Imagens/eu.jpg";
import CurriculoPDF from '../../Imagens/Curriculo Victor Leite.pdf';
import javascript from "../../Imagens/javascript.png";
import node from "../../Imagens/node.png";
import postgres from "../../Imagens/postgres.png";
import delphi from "../../Imagens/delphi.png";
import python from "../../Imagens/python.png";
import eusemfundo from "../../Imagens/eu2.png";

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

const HomeContainer = styled.section`
  background-color: #000;
  border-radius: 20px;
  box-shadow: 0 12px 30px rgba(34, 197, 94, 0.3);
  animation: ${animeLeft} 1s forwards;
  max-width: 1100px;
  width: 100%;
  padding: 40px 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 30px 15px;
    justify-content: center;
  }
`;

const ContainerHome = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const LeftContent = styled.div`
  flex: 1 1 400px;
  color: #ffffff;
  padding-right: 30px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex: 1 1 100%;   /* Aqui força ocupar 100% da largura */
    padding-right: 0;
    margin-bottom: 30px;
    text-align: center;
  }
`;
const Title = styled.h1`
  font-size: clamp(24px, 5vw, 48px);
  margin-bottom: 10px;
`;



const Paragraph = styled.p`
  font-size: 16px;
  margin-top: 20px;
  color: #cbd5e1;
  max-width: 500px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
  flex-wrap: wrap;
  justify-content: center;
`;

const IconesProgramacao = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin-bottom: 20px;

  img {
    width: 50px;
    height: 50px;
    object-fit: contain;
    border-radius: 50%;
    border: 2px solid #22c55e;
    box-shadow: 0 0 8px rgba(34, 197, 94, 0.3);
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

const Button = styled.a`
  padding: 12px 24px;
  border-radius: 8px;
  background-color: #22c55e;
  color: #000;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #16a34a;
  }
`;

const RightImage = styled.div`
  flex: 1 1 300px;
  display: flex;
  justify-content: center;
  margin-top: 0;
  box-sizing: border-box;

  img {
    width: 100%;
    max-width: 300px;
    height: auto;
    border-radius: 50%;
    max-width: 100%; /* garante que a imagem não ultrapasse container */
  }

  @media (max-width: 768px) {
    flex: 1 1 100%;  /* força ocupar 100% no mobile */
    margin-top: 20px;

    img {
      max-width: 200px;
      max-width: 100%;  /* redundante mas garante */
    }
  }
`;

const HomeWrapper = styled.div.attrs(() => ({
  id: 'home',
}))`
  padding: 40px 20px;
  min-height: 100vh;
  box-sizing: border-box;
  border-radius: 20px;
`;

const Highlight = styled.span`
  color: #22c55e;
  font-weight: bold;
  font-size: 70%;
`;

const Highlight3 = styled.span`
  color: #22c55e;
  font-weight: bold;
  font-size: 55%;
`;

const Highlight2 = styled.span`
  color: #22c55e;
  font-weight: bold;
  font-size: 35%;
`;

function handleDownloadClick() {
  window.open(CurriculoPDF, "_blank");
}

function HomeTela() {
  return (
    <HomeWrapper>
      <HomeContainer>
        <ContainerHome>
          <LeftContent>
            <IconesProgramacao img src={fotohome} alt="Foto" />
            <Title>
              Olá!, Me chamo
              <br />
              João Victor Leite <Highlight>Desenvolvedor Full-Stack</Highlight>
              <br />
              <Highlight3>Supervisor de Suporte</Highlight3>
              <br />
              <Highlight2>JavaScript - NodeJS - Python - Delphi - PostgreSQL</Highlight2>
              <div>
                <IconesProgramacao>
                  <img src={javascript} alt="JavaScript" />
                  <img src={node} alt="NodeJS" />
                  <img src={python} alt="Python" />
                  <img src={delphi} alt="Delphi" />
                  <img src={postgres} alt="PostgreSQL" />
                </IconesProgramacao>
              </div>
            </Title>
            <Paragraph>
              Com 8 anos de experiência em suporte e manutenção de software, incluindo migração e administração de bancos de dados PostgreSQL, suporte ao usuário e liderança de equipe.
              <br />
              <br />
              Conhecimentos práticos demonstrados em portfólio no GitHub, com foco em JavaScript, Node.js, Python e Delphi.
              <br />
              Desde 2021, mantenho uma rotina constante de estudos e aprimoramento técnico. Sou formado em Sistemas de Informação (2020) e estou em busca da minha primeira oportunidade
              como desenvolvedor júnior para colocar em prática meus conhecimentos e crescer profissionalmente na área de tecnologia.
            </Paragraph>
            <Buttons>
              <Button onClick={handleDownloadClick}>Download Currículo</Button>
            </Buttons>
          </LeftContent>
          <RightImage>
            <img src={eusemfundo} alt="Foto" />
          </RightImage>
        </ContainerHome>
      </HomeContainer>
    </HomeWrapper>
  );
}

export default HomeTela;
