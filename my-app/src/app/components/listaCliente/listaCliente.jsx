import React, { useState, useEffect } from 'react';
import './listaCliente.css';

import { firestore } from '../../config/firebase';
import { collection, getDocs } from 'firebase/firestore';

function ListaClientes() {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        async function fetchClientes() {
            try {
                const querySnapshot = await getDocs(collection(firestore, 'clientes'));
                const listaCliente = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    nome: doc.data().nome,
                    email: doc.data().email,
                    phone: doc.data().phone
                }));
                setClientes(listaCliente);
            } catch (error) {
                console.error("Erro ao buscar clientes: ", error);
            }
        }

        fetchClientes();
    }, []);

    return (
        <table className="table table-hover table-bordered">
            <thead>
                <tr className='table-secondary'>
                    <th scope="col">Código</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Email</th>
                    <th scope="col">Telefone</th>
                </tr>
            </thead>
            <tbody>
                {clientes.map(cliente => (
                    <tr key={cliente.id}>
                        <th scope="row">{cliente.id}</th>
                        <td>{cliente.nome}</td>
                        <td>{cliente.email}</td>
                        <td>{cliente.phone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ListaClientes;
