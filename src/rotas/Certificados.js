import styled from 'styled-components'
import SobreTela from '../Componentes/Certificados/Certificados';



const AppContainer = styled.div`
width: 100%;
min-height: 100vh; /* Alterado para min-height para garantir que a tela seja pelo menos tão alta quanto o viewport */
background-image: linear-gradient(90deg, #000 60%, #111 95%);
padding: 20px; /* Adicionado um preenchimento para afastar o conteúdo das bordas da tela */
display: flex;
justify-content: center; /* Centralizar o conteúdo verticalmente */
align-items: center; /* Centralizar o conteúdo horizontalmente */

li {
  list-style: none;
}
`

function Certificacoes() {
  return (
    <AppContainer>
      <section id="certificacoes">
        <SobreTela />
      </section>
    </AppContainer>
  );
}

export default Certificacoes;
