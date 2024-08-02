import React, { useState, useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './login.css';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { AuthContext } from '../context/auth';

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [sucesso, setSucesso] = useState('');
    const {setLogged} = useContext(AuthContext);

    function loginUsuario() {
        signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                const user = userCredential.user;
                // alert('Login realizado com sucesso!');
                localStorage.setItem('logged', 'Y');
                setLogged(true);
                setSucesso('Y');
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // alert(errorMessage);
                localStorage.setItem('logged', 'N');
                setLogged(false);
                setSucesso('N');
            });
    }

    function alterarEmail(event) {
        setEmail(event.target.value);
    }

    function alterarSenha(event) {
        setSenha(event.target.value);
    }

    return (
        <div className='d-flex align-items-center text-center form-container'>
            <form className='form-signin'>
                <img className="mb-4" src="img/logo-small2.png" alt=""/>
                <h1 className="h3 mb-3 fw-normal">Login</h1>

                <div className="form-floating">
                    <input onChange={alterarEmail} type="email" className="form-control" id="floatingInput" placeholder="Email"/>
                    <label htmlFor="floatingInput">Email</label>
                </div>
                <div className="form-floating">
                    <input onChange={alterarSenha} type="password" className="form-control" id="floatingPassword" placeholder="Senha"/>
                    <label htmlFor="floatingPassword">Senha</label>
                </div>

                <button onClick={loginUsuario} className="btn btn-primary w-100 py-2" type="button">Acessar</button>

                { sucesso === 'N' ? <div className="alert alert-danger mt-2" role="alert">Email ou Senha inválidos!</div> : null }
                { sucesso === 'Y' ? <Navigate to='/app/home '/> : null }

                <div className='login-links mt-5'>
                    <Link to="/app/reset-senha" className='mx-3'>Esqueci minha senha</Link>
                    <Link to="/app/cadastro" className='mx-3'>Criar uma conta</Link>
                </div>

                <p className="mt-5 mb-3 text-body-secondary">&copy; Desenvolvido por 99 Coders</p>
            </form>
        </div>
    );
}

export default Login;
