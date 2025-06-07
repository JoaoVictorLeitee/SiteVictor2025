import styled, { keyframes } from "styled-components";

// Animação de entrada
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

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

const SectionContainer = styled.section`
  background-color: #000;
  border-radius: 20px;
  box-shadow: 0 12px 30px rgba(34, 197, 94, 0.3);
  animation: ${animeLeft} 1s forwards;
  max-width: 1100px;
  width: 100%;
  padding: 40px 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 30px 20px;
  }
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
  width: 100%; /* <- adicione isso */
  margin-bottom: 30px; /* opcional: afasta do conteúdo abaixo */
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  animation: ${fadeInUp} 1.2s ease forwards;
`;

const Card = styled.div`
  background-color: #161b22;
  border: 1px solid #2c313a;
  border-radius: 12px;
  padding: 60px;
  width: 300px;
  max-width: 90%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 15px;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-10px);
  }
`;

const CardIcon = styled.div`
  font-size: 32px;
`;

const CardTitle = styled.h3`
  font-size: 24px;
  margin: 0;
`;

const CardDescription = styled.p`
  font-size: 16px;
  line-height: 1.4;
  color: #c9d1d9;
`;

function PortifolioTela() {
  return (
    <SectionContainer id="portfolio">
      <Title>SKILLS</Title>
      <CardsContainer>
        <Card>
          <CardIcon>💻</CardIcon>
          <CardTitle>Website Development</CardTitle>
          <CardDescription>
            Desenvolvo websites a partir de layouts prontos, aplicando boas práticas de responsividade, performance e compatibilidade entre dispositivos. Entrego interfaces otimizadas, fieis ao design e com código limpo e escalável.
          </CardDescription>
        </Card>

        <Card>
          <CardIcon>🔗</CardIcon>
          <CardTitle>APIs RESTful</CardTitle>
          <CardDescription>
            Desenvolvo APIs RESTful utilizando Node.js com Express e também com o framework Horse em Delphi. Tenho domínio na criação de rotas, controle de autenticação (JWT), tratamento de erros, conexão com bancos de dados como PostgreSQL e MongoDB, além da aplicação de boas práticas como separação de camadas (MVC), middlewares e documentação com Swagger. Busco sempre manter o código limpo, organizado e de fácil manutenção.
          </CardDescription>
        </Card>

        <Card>
          <CardIcon>📊</CardIcon>
          <CardTitle>Analise de dados</CardTitle>
          <CardDescription>
            Realizo análise de dados com Python utilizando bibliotecas como Pandas, NumPy, Matplotlib e Seaborn. Tenho experiência em limpeza e tratamento de dados, criação de gráficos interativos, análise estatística e extração de insights para apoio na tomada de decisões. Também trabalho com leitura de arquivos CSV, Excel e integração com bancos de dados como PostgreSQL e MongoDB.
          </CardDescription>
        </Card>

        <Card>
          <CardIcon>🧰</CardIcon>
          <CardTitle>Aplicativos Delphi para Diversas Áreas</CardTitle>
          <CardDescription>
            Desenvolvo sistemas em Delphi voltados para diferentes setores, como comercial, financeiro, industrial e suporte técnico.
            Utilizo componentes modernos e integração com APIs, possibilitando a comunicação com bancos de dados, serviços web e aplicações móveis.
            Os sistemas são construídos com foco em desempenho, usabilidade e facilidade de manutenção.
          </CardDescription>
        </Card>
      </CardsContainer>
    </SectionContainer>
  );
}

export default PortifolioTela;
