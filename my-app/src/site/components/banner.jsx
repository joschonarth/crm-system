import React from 'react';

function Banner(){
    return <section id='banner'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <h1>Uma plataforma de CRM simples de configurar e fácil de usar.</h1>
                    <h4>Gerencie seus clientes em único lugar.</h4>
                    <button type='button' className=''>Criar uma conta</button>
                    <button type='button' className=''>Fazer Login</button>

                </div>
                <div className="col-lg-6">
                    
                </div>
            </div>
        </div> 
    </section>;
}

export default Banner;