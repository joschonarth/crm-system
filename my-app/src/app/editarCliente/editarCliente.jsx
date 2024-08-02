import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Navbar from '../components/navbar/navbar'
import './editarCliente.css';

import { firestore } from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';

function EditarCliente(){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [sucesso, setSucesso] = useState('N');
    
    const clientesCollection = collection(firestore, 'clientes');

    useEffect(() => {
        
    }, [])

    async function CadastrarCliente() {

        if (!nome) {
            setMensagem('Informe o nome');
        }
        else if (!email) {
            setMensagem('Informe o email');
        }
        else if (!phone) {
            setMensagem('Informe o telefone');
        }
        else {

            try {
                await addDoc(clientesCollection, {
                    nome: nome,
                    email: email,
                    phone: phone,
                });
                setMensagem('Cliente cadastrado com sucesso!');
                setSucesso('Y');
            } catch (erro) {
                setMensagem('Erro ao cadastrar cliente: ' + erro.message);
                setSucesso('N');
            }

        }

        
    }

    return <div>
        <Navbar/>
        <div className='container-fluid titulo'>

            <div className="offset-lg-3 col-lg-6">
                <h1>Editar Cliente</h1>

                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Código</label>
                        <input type="text" className="form-control" id="nome" aria-describedby="codigoHelp" disabled/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Nome</label>
                        <input onChange={(e) => setNome(e.target.value)} type="text" className="form-control" id="nome" aria-describedby="nameHelp"/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Telefone</label>
                        <input onChange={(e) => setPhone(e.target.value)} type="text" className="form-control" id="telefone" aria-describedby="phoneHelp"/>
                    </div>
        
                    <div className="text-center">
                        <Link to='/app/home' className="btn btn-outline-primary btn-action">Cancelar</Link>
                        <button onClick={CadastrarCliente} type="button" className="btn btn-primary btn-action">Salvar</button>
                    </div>

                    { mensagem.length > 0 ? <div className="alert alert-danger mt-2" role="alert">{mensagem}</div> : null }
                    { sucesso === 'Y' ? <Navigate to='/app/home '/> : null }

                </form>
            </div>
        </div>
    </div>;
}

export default EditarCliente;