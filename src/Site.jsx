import { Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import Sessoes from './paginas/Sessoes';
import Assentos from './paginas/Assentos';
import Sucesso from './paginas/Sucesso';
import Menu from './paginas/Menu';  

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    overflow-x: hidden;
  }
`;

function Site() {
  return (
    <div>
      <GlobalStyle />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sessoes/:idFilme" element={<Sessoes />} />
        <Route path="/assentos/:idSessao" element={<Assentos />} />
        <Route path="/sucesso" element={<Sucesso />} />
      </Routes>
    </div>
  );
}

export default Site;
