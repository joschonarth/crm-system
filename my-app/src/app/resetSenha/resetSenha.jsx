import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './resetSenha.css';
import { auth } from '../config/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';

function ResetSenha(){

    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [sucesso, setSucesso] = useState('');

    function recuperarSenha(){
        sendPasswordResetEmail(auth, email)
        .then((userCredential) => {
            setMensagem('');
            setSucesso('Email enviado com sucesso!')
        })
        .catch(erro => {
            setSucesso('')
            setMensagem('Erro ao enviar email: ' + erro.message);
        })
    }

    return <div className='d-flex align-items-center text-center form-container'>
    <form className='form-signin'>
        <img className="mb-4" src="/img/logo-small2.png" alt=""/>
        <h1 className="h3 mb-3 fw-normal">Recuperar Senha</h1>

        <div className="form-floating">
            <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="Email"/>
            <label for="floatingInput">Email</label>
        </div>

        <button onClick={recuperarSenha} className="btn btn-primary w-100 py-2 mt-3" type="button">Enviar</button>

        { mensagem.length > 0 ? <div className="alert alert-danger mt-2" role="alert">{mensagem}</div> : null }
        { sucesso.length > 0 ? <div className="alert alert-success mt-2" role="alert">{sucesso}</div> : null }

        <div className='login-links mt-5'>
            <Link to="/app/cadastro" className='mx-3'>Criar uma conta.</Link>
        </div>

        <p className="mt-5 mb-3 text-body-secondary">&copy; Desenvolvido por 99 Coders</p>
  </form>
</div>;
}

export default ResetSenha;