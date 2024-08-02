import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Site from './site/site.jsx'
import Login from './app/login/login.jsx';
import Cadastro from './app/cadastro/cadastro.jsx';
import ResetSenha from './app/resetSenha/resetSenha.jsx';
import Home from './app/home/home.jsx';
import NovoCliente from './app/novoCliente/novoCliente.jsx';
import EditarCliente from './app/editarCliente/editarCliente.jsx';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Site />} />
                <Route exact path='/app' element={<Login />} />
                <Route exact path='/app/cadastro' element={<Cadastro />} />
                <Route exact path='/app/reset-senha' element={<ResetSenha />} />
                <Route exact path='/app/home' element={<Home />} />
                <Route exact path='/app/novo-cliente' element={<NovoCliente />} />
                <Route exact path='/app/editar-cliente/:id' element={<EditarCliente />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;