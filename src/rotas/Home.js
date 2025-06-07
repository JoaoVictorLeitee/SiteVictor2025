import HomeTela from '../Componentes/TelaHome';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: linear-gradient(90deg, #000 60%, #111 95%);
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    list-style: none;
  }
`;

function Home() {
  return (
    <AppContainer>
      <HomeTela />
    </AppContainer>
  );
}

export default Home;
