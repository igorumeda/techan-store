import { useState } from "react/cjs/react.development";
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Context from "./Context";
import Header from "./components/Header";
import Content from "./components/Content";

import Home from './pages/Home'
import Clientes from './pages/Clientes'
import Movimentacoes from './pages/Movimentacoes'
import Usuarios from './pages/Usuarios'

import './styles/global.css'

function App() {

  const [currentPage, setCurrentPage] = useState('PaginaInicial');

  return (
    
    <BrowserRouter>
      <Context.Provider value={[
        currentPage,
        setCurrentPage
      ]}>
        <main>
          <Header />
          <Content>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/clientes" element={<Clientes />} />
              <Route path="/movimentacoes" element={<Movimentacoes />} />
              <Route path="/usuarios" element={<Usuarios />} />
            </Routes>
          </Content>
        </main>
      </Context.Provider>
    </BrowserRouter>

  );
}

export default App;
