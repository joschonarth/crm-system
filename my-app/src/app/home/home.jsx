import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import ListaClientes from '../components/listaCliente/listaCliente';
import './home.css';

import { firestore } from '../config/firebase';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';

import SweetAlert from 'react-bootstrap-sweetalert';

function Home(){

    const [clientes, setClientes] = useState([]);
    const [busca, setBusca] = useState('');
    const [texto, setTexto] = useState('');
    const [excluido, setExcluido] = useState('');
    const [confirmacao, setConfirmacao] = useState(false);
    const [confirmacaoId, setConfirmacaoId] = useState('');

     async function deleteUser(id) {
        try {
            const userDocRef = doc(firestore, 'clientes', id);
            await deleteDoc(userDocRef);
            setExcluido(id);
            setConfirmacao(false);
            console.log(`Usuário com ID ${id} excluído com sucesso.`);
        } catch (error) {
            console.error(`Erro ao excluir o usuário com ID ${id}:`, error);
        }
    }

    function confirmDeleteUser(id){
        setConfirmacaoId(id);
        setConfirmacao(true);
    }

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
    }, [busca, excluido]);

    return <div>
        <Navbar/>
        <div className='container-fluid titulo'>
            <h1>Cadastro de Clientes</h1>

            <div className='row'>
                <div className='col-4'>
                    <Link to='/app/novo-cliente' className="btn btn-primary" type="button"><i className="fa-solid fa-plus"></i> Cliente</Link>
                </div>
                
                <div className='col-8'>
                    <div className="input-group mb-3">
                        <input onChange={(e) => setTexto(e.target.value)} type="text" className="form-control" placeholder="Pesquisa por nome" aria-describedby="button-addon2"/>
                        <button onClick={(e) => setBusca(texto)} className="btn btn-primary" type="button" id="button-addon2"><i className="fa-solid fa-magnifying-glass"></i> Pesquisar</button>
                    </div>
                </div>
            </div>

            <ListaClientes arrayClientes={clientes} clickDelete={confirmDeleteUser} />

            {
            confirmacao ? <SweetAlert
                            warning
                            showCancel
                            showCloseButton
                            confirmBtnText="Sim"
                            confirmBtnBsStyle={'danger'}
                            cancelBtnText="Não"
                            // cancelBtnStyle={'light'}
                            title="Exclusão"
                            onConfirm={() =>deleteUser(confirmacaoId)}
                            onCancel={()=> setConfirmacao(false)}
                            reverseButtons={true}
                            >
                            Deseja excluir o cliente selecionado?
                        </SweetAlert> : null 
            }
        </div>
    </div>
}

export default Home;