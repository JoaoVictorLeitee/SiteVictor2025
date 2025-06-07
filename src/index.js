// index.tsx ou App.tsx (o principal)

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import Header from './Componentes/Header';
import Home from './rotas/Home';
import Portifolio from './rotas/Portifolio';
import Curriculo from './rotas/Curriculo';
import Certificacoes from './rotas/Certificados';
import ContatoTela from './rotas/ContatoTela';
import Rodape from './Componentes/Rodape/rodape';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';


const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    scroll-behavior: smooth;
    overflow-x: hidden; /* <-- ESSENCIAL */
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-y: auto;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;


const MainContent = styled.main`
  display: flex;
  flex-direction: column;
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* ✅ Aqui começa */}
      <GlobalStyle />
      <Header />
      <MainContent>
        <Home />
        <Certificacoes />
        <Portifolio />
        <ContatoTela />
      </MainContent>
      <Rodape />
    </BrowserRouter> {/* ✅ Aqui termina */}
  </React.StrictMode>
);

reportWebVitals();
