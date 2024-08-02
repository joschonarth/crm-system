import React, { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import './editarCliente.css';

import { firestore } from '../config/firebase';
import { collection, doc, getDoc, updateDoc } from 'firebase/firestore';

function EditarCliente() {
    const { id } = useParams();
    
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [sucesso, setSucesso] = useState('N');
    
    const clientesCollection = collection(firestore, 'clientes');
    const clienteDocRef = doc(clientesCollection, id);

    useEffect(() => {
        const fetchCliente = async () => {
            try {
                const docSnap = await getDoc(clienteDocRef);
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setNome(data.nome);
                    setEmail(data.email);
                    setPhone(data.phone);
                } else {
                    setMensagem('Cliente não encontrado');
                }
            } catch (error) {
                setMensagem('Erro ao buscar cliente: ' + error.message);
            }
        };
        fetchCliente();
    }, [id]);

    const AtualizarCliente = async () => {
        if (!nome) {
            setMensagem('Informe o nome');
        } else if (!email) {
            setMensagem('Informe o email');
        } else if (!phone) {
            setMensagem('Informe o telefone');
        } else {
            try {
                await updateDoc(clienteDocRef, {
                    nome,
                    email,
                    phone,
                });
                setMensagem('Cliente atualizado com sucesso!');
                setSucesso('Y');
            } catch (error) {
                setMensagem('Erro ao atualizar cliente: ' + error.message);
                setSucesso('N');
            }
        }
    };

    return <div>
        <Navbar/>
        <div className='container-fluid titulo'>

            <div className="offset-lg-3 col-lg-6">
                <h1>Editar Cliente</h1>

                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Código</label>
                        <input type="text" value={id} className="form-control" id="codigo" aria-describedby="codigoHelp" disabled/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Nome</label>
                        <input onChange={(e) => setNome(e.target.value)} value={nome} type="text" className="form-control" id="nome" aria-describedby="nameHelp"/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Telefone</label>
                        <input onChange={(e) => setPhone(e.target.value)} value={phone} type="text" className="form-control" id="telefone" aria-describedby="phoneHelp"/>
                    </div>
        
                    <div className="text-center">
                        <Link to='/app/home' className="btn btn-outline-primary btn-action">Cancelar</Link>
                        <button onClick={AtualizarCliente} type="button" className="btn btn-primary btn-action">Salvar</button>
                    </div>

                    { mensagem.length > 0 ? <div className="alert alert-danger mt-2" role="alert">{mensagem}</div> : null }
                    { sucesso === 'Y' ? <Navigate to='/app/home '/> : null }

                </form>
            </div>
        </div>
    </div>;
}

export default EditarCliente;