import React from 'react';

function Menu(){
    return <nav className="navbar fixed-top navbar-expand-md navbar-dark">

    <div className="container">
        {/* <a href="/#" className="navbar-brand">CRM System</a> */}
        <a href="/#" className="navbar-brand">
                <img src="img/logo.png" alt="" height="40"/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <a href="#banner" className="nav-link" aria-current="page">Home</a>
                </li>
                <li className="nav-item">
                    <a href="#features" className="nav-link" aria-current="page">Features</a>
                </li>
                <li className="nav-item">
                    <a href="#testimonials" className="nav-link" aria-current="page">Clientes</a>
                </li>
                <li className="nav-item">
                    <a href="#planos" className="nav-link" aria-current="page">Planos e Preços</a>
                </li>
                <li className="nav-item">
                    <a href="#footer" className="nav-link" aria-current="page">Contato</a>
                </li>
            </ul>            
        </div>
    </div>
</nav>;
}

export default Menu;