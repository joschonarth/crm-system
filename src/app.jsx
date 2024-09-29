import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Site from './site/site.jsx'
import Login from './app/login/login.jsx';
import Cadastro from './app/cadastro/cadastro.jsx';
import ResetSenha from './app/resetSenha/resetSenha.jsx';
import Home from './app/home/home.jsx';
import NovoCliente from './app/novoCliente/novoCliente.jsx';
import EditarCliente from './app/editarCliente/editarCliente.jsx';
import { AuthContext } from './app/context/auth.jsx';

function SecureRoute({ element: Element, ...rest }) {
    const { logged } = useContext(AuthContext);
    
    return logged ? Element : <Navigate to="/app" />;
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Site />} />
                <Route path='/app' element={<Login />} />
                <Route path='/app/cadastro' element={<Cadastro />} />
                <Route path='/app/reset-senha' element={<ResetSenha />} />
                <Route path='/app/home' element={<SecureRoute element={<Home />} />} />
                <Route path='/app/novo-cliente' element={<SecureRoute element={<NovoCliente />} />} />
                <Route path='/app/editar-cliente/:id' element={<SecureRoute element={<EditarCliente />} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;