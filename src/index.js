import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import Header from './Componentes/Header';
import Home from './rotas/Home';
import Portifolio from './rotas/Portifolio';
import Certificacoes from './rotas/Certificados';
import ContatoTela from './rotas/ContatoTela';
import Rodape from './Componentes/Rodape/rodape';
import styled from 'styled-components';

// Global styles para reset e ajustes básicos
const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    scroll-behavior: smooth;
    overflow-x: hidden; /* evita scroll horizontal */
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

// Container principal, estrutura em coluna
const MainContent = styled.main`
  display: flex;
  flex-direction: column;
`;

// Criação da raiz de forma segura
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <MainContent>
        <Home />
        <Certificacoes />
        <Portifolio />
        <ContatoTela />
      </MainContent>
      <Rodape />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
