import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './cadastro.css';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Cadastro(){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagem, setMensagem] = useState('');

    function cadastrarUsuario(){
        alert('OK');
    }

    return <div className='d-flex align-items-center text-center form-container'>
    <form className='form-signin'>
        <img className="mb-4" src="/img/logo-small2.png" alt=""/>
        <h1 className="h3 mb-3 fw-normal">Criar Conta</h1>

        <div className="form-floating">
            <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="Email"/>
            <label for="floatingInput">Email</label>
        </div>
        <div className="form-floating">
            <input onChange={(e) => setSenha(e.target.value)} type="password" className="form-control" id="floatingPassword" placeholder="Senha"/>
            <label for="floatingPassword">Senha</label>
        </div>

        <button onClick={cadastrarUsuario} className="btn btn-primary w-100 py-2" type="button">Criar Conta</button>

        { mensagem.length > 0 ? <div className="alert alert-danger mt-2" role="alert">{mensagem}</div> : null }

        <div className='login-links mt-5'>
            <Link to="/app" className='mx-3'>Já tenho uma conta.</Link>
        </div>

        <p className="mt-5 mb-3 text-body-secondary">&copy; Desenvolvido por 99 Coders</p>
  </form>
</div>;
}

export default Cadastro;