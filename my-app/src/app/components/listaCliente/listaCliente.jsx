import React from 'react';
import { Link } from 'react-router-dom';
import './listaCliente.css';

function ListaClientes(props) {

    function deleteUser(id){
        alert('Usuario excluido' + id);
    }

    return (
        <table className="table table-hover table-bordered">
            <thead>
                <tr className='table-secondary'>
                    <th scope="col">Código</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Email</th>
                    <th scope="col">Telefone</th>
                    <th scope="col" className="col-action"></th>
                </tr>
            </thead>
            <tbody>
                {props.arrayClientes.map(cliente => (
                    <tr key={cliente.id}>
                        <th scope="row">{cliente.id}</th>
                        <td>{cliente.nome}</td>
                        <td>{cliente.email}</td>
                        <td>{cliente.phone}</td>
                        <td>
                            <Link to='#'><i className="fa-solid fa-pen-to-square icon-action"></i></Link>
                            <Link to='#' onClick={() => deleteUser(cliente.id)}><i className="fa-solid fa-trash icon-action delete-icon"></i></Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ListaClientes;
