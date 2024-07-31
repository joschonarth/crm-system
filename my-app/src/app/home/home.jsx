import React from 'react';
import Navbar from '../components/navbar/navbar'
import ListaClientes from '../components/listaCliente/listaCliente';
import './home.css';

function Home(){
    return <div>
        <Navbar/>
        <div className='container-fluid titulo'>
            <h1>Cadastro de Clientes</h1>
            <ListaClientes/>
        </div>
    </div>
}

export default Home;