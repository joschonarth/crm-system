import React from 'react';
import Navbar from '../components/navbar/navbar'
import './novocliente.css';

function NovoCliente(){
    return <div>
        <Navbar/>
        <div className='container-fluid titulo'>

            <div className="offset-lg-3 col-lg-6">
                <h1>Novo Cliente</h1>

                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Nome</label>
                        <input type="text" className="form-control" id="nome" aria-describedby="nameHelp"/>
                    </div>

                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                    </div>

                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Telefone</label>
                        <input type="text" className="form-control" id="telefone" aria-describedby="phoneHelp"/>
                    </div>
        
                    <button type="submit" className="btn btn-outline-primary">Cancelar</button>
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </form>
            </div>
        </div>
    </div>;
}

export default NovoCliente;