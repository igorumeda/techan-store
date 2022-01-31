import { useState } from "react/cjs/react.development";
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Context from "./Context";
import Header from "./components/Header";
import Content from "./components/Content";

import Home from './pages/Home'
import Clientes from './pages/Clientes'
import ClienteForm from "./pages/Clientes/Form";
import Movimentacoes from './pages/Movimentacoes'
import Usuarios from './pages/Usuarios'

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './styles/global.css'

function App() {

  const [currentPage, setCurrentPage] = useState('PaginaInicial');
  const [confirm, setConfirm] = useState({titulo: '', pergunta: '', visivel: false, result: false});

  return (
    
    <BrowserRouter>
      <Context.Provider value={[
        currentPage,
        setCurrentPage,
        confirm,
        setConfirm
      ]}>
        <ToastContainer />
        <main>
          <Header />
          <Content>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/clientes" element={<Clientes />} />
                <Route path="/clientes/:id" element={<ClienteForm />} />
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
