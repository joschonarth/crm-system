import React from 'react';
import './login.css';

function Login(){
    return <div className='d-flex align-items-center text-center form-container'>
    <form className='form-signin'>
        <img className="mb-4" src="images/logo-small2.png" alt=""/>
        <h1 className="h3 mb-3 fw-normal">Login</h1>

        <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="Email"/>
            <label for="floatingInput">Email</label>
        </div>
        <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Senha"/>
            <label for="floatingPassword">Senha</label>
        </div>

        <button className="btn btn-primary w-100 py-2" type="submit">Acessar</button>

        <div className='login-links mt-5'>
            <a href="#" className='mx-3'>Esqueci minha senha</a>
            <a href="#" className='mx-3'>Criar uma conta</a>
        </div>

        <p className="mt-5 mb-3 text-body-secondary">&copy; Desenvolvido por 99 Coders</p>
  </form>
</div>;
}

export default Login;