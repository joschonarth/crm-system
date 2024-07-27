import React from 'react';
import {Link} from 'react-router-dom';
import './resetSenha.css';


function ResetSenha(){
    return <div className='d-flex align-items-center text-center form-container'>
    <form className='form-signin'>
        <img className="mb-4" src="/img/logo-small2.png" alt=""/>
        <h1 className="h3 mb-3 fw-normal">Recuperar Senha</h1>

        <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="Email"/>
            <label for="floatingInput">Email</label>
        </div>

        <button className="btn btn-primary w-100 py-2" type="submit">Enviar</button>

        <div className='login-links mt-5'>
            <Link to="/app/cadastro" className='mx-3'>Criar uma conta.</Link>
        </div>

        <p className="mt-5 mb-3 text-body-secondary">&copy; Desenvolvido por 99 Coders</p>
  </form>
</div>;
}

export default ResetSenha;