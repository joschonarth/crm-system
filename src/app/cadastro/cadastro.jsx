import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './cadastro.css';
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function Cadastro() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [sucesso, setSucesso] = useState('');

    function cadastrarUsuario() {
        setMensagem('');

        if (!email || !senha) {
            setMensagem('Informe todos os campos');
            return;
        }

        createUserWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                setSucesso('Y');
            })
            .catch((error) => {
                setSucesso('N');
                if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
                    setMensagem('Email já cadastrado.');
                } else if (error.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
                    setMensagem('A senha deve ter pelo menos 6 caracteres');
                } else if (error.message === 'Firebase: Error (auth/invalid-email).') {
                    setMensagem('Digite um Email válido');
                } else {
                    setMensagem(error.message);
                }
            });
    }

    return <div className='d-flex align-items-center text-center form-container'>
    <form className='form-signin'>
        <img className="mb-4" src="/img/logo-blue.png" height="70" alt=""/>
        <h1 className="h3 mb-3 fw-normal">Criar Conta</h1>

        <div className="form-floating">
            <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="Email"/>
            <label htmlFor="floatingInput">Email</label>
        </div>
        <div className="form-floating">
            <input onChange={(e) => setSenha(e.target.value)} type="password" className="form-control" id="floatingPassword" placeholder="Senha"/>
            <label htmlFor="floatingPassword">Senha</label>
        </div>

        <button onClick={cadastrarUsuario} className="btn btn-primary w-100 py-2" type="button">Criar Conta</button>

        { mensagem.length > 0 ? <div className="alert alert-danger mt-2" role="alert">{mensagem}</div> : null }
        { sucesso === 'Y' ? <Navigate to='/app/home '/> : null }

        <div className='login-links mt-5'>
            <Link to="/app" className='mx-3'>Já tenho uma conta.</Link>
        </div>

        <p className="mt-5 mb-3 text-body-secondary">&copy; Desenvolvido por CRM System</p>
  </form>
</div>;
}

export default Cadastro;