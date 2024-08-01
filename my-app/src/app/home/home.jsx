import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import ListaClientes from '../components/listaCliente/listaCliente';
import './home.css';

import { firestore } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';

function Home(){

    const [clientes, setClientes] = useState([]);
    const [busca, setBusca] = useState('');
    const [texto, setTexto] = useState('');

    useEffect(() => {
        async function fetchClientes() {
            try {
                const querySnapshot = await getDocs(collection(firestore, 'clientes'));
                const listaCliente = querySnapshot.docs
                    .map(doc => ({
                        id: doc.id,
                        nome: doc.data().nome,
                        email: doc.data().email,
                        phone: doc.data().phone
                    }))
                    .filter(cliente => cliente.nome.toLowerCase().includes(busca.toLowerCase()));

                setClientes(listaCliente);
            } catch (error) {
                console.error("Erro ao buscar clientes: ", error);
            }
        }
        fetchClientes();
    }, [busca]);

    return <div>
        <Navbar/>
        <div className='container-fluid titulo'>
            <h1>Cadastro de Clientes</h1>

            <div className='row'>
                <div className='col-4'>
                    <Link to='/app/novo-cliente' className="btn btn-primary" type="button"><i class="fa-solid fa-plus"></i> Cliente</Link>
                </div>
                
                <div className='col-8'>
                    <div className="input-group mb-3">
                        <input onChange={(e) => setTexto(e.target.value)} type="text" className="form-control" placeholder="Pesquisa por nome" aria-describedby="button-addon2"/>
                        <button onClick={(e) => setBusca(texto)} className="btn btn-primary" type="button" id="button-addon2"><i class="fa-solid fa-magnifying-glass"></i> Pesquisar</button>
                    </div>
                </div>
            </div>

            <ListaClientes arrayClientes={clientes} />
        </div>
    </div>
}

export default Home;