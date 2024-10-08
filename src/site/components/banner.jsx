import React from 'react';

function Banner(){
    return <section id='banner'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <h1>Uma plataforma de CRM simples de configurar e fácil de usar.</h1>
                    <h4>Gerencie seus clientes em único lugar.</h4>
                    <a href="/app/cadastro" className='btn btn-dark btn-lg btn-banner'>Criar uma conta</a>
                    <a href="/app" className='btn btn-outline-light btn-lg btn-banner'>Fazer Login</a>

                </div>

                <div className="col-lg-6">
                    <img src="img/banner.png" alt="Banner" className="img-fluid"/>    
                </div>
            </div>
        </div> 
    </section>;
}

export default Banner;