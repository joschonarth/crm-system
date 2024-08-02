import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';
import { AuthContext } from '../../context/auth';

function Navbar(){

    const {setLogged} = useContext(AuthContext);

    function Logout(){
        setLogged(false);
        localStorage.removeItem('logged');
    }

    return <nav className="navbar fixed-top navbar-expand-md navbar-dark">

    <div className="container-fluid">
        {/* <a href="/#" className="navbar-brand">99 CRM</a> */}
        <a href="#" className="navbar-brand">
                <img src="/img/logo.png" alt="" height="28"/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/app/home" className="nav-link" aria-current="page">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/app/novo-cliente" className="nav-link" aria-current="page">Novo Cliente</Link>
                </li>
                <li className="nav-item">
                    <a onClick={Logout} className="nav-link" aria-current="page">Sair</a>
                </li>
            </ul>            
        </div>
    </div>
</nav>;
}

export default Navbar;