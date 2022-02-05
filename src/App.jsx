import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Header from "./components/Header";
import Content from "./components/Content";
import { EntityProvider } from './providers/Entity';
import { ConfirmProvider } from './providers/Confirm';

import Home from './pages/Home'
import Clientes from './pages/Clientes'
import ClienteForm from "./pages/Clientes/Form";
import Movimentacoes from './pages/Movimentacoes'
import Usuarios from './pages/Usuarios'

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './styles/global.css'

function App() {

  return (

    <React.StrictMode>
    
      <BrowserRouter>
        <EntityProvider>
          <ConfirmProvider>
            <ToastContainer />
            <main>
              <Header />
              <Content>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/clientes" element={<Clientes />} />
                    <Route path="/clientes/new" element={<ClienteForm />} />
                    <Route path="/clientes/:id" element={<ClienteForm />} />
                    <Route path="/clientes/edit/:id" element={<ClienteForm />} />
                    <Route path="/movimentacoes" element={<Movimentacoes />} />
                    <Route path="/usuarios" element={<Usuarios />} />
                  </Routes>
              </Content>
            </main>
          </ConfirmProvider>
        </EntityProvider>
      </BrowserRouter>

    </React.StrictMode>

  );
}

export default App;
