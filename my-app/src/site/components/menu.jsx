import React from 'react';

function Menu(){
    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            {/* <a class="navbar-brand" href="#">99 CRM</a> */}
            <a className="navbar-brand" href="#">
                <img src="Images/logo.png" alt="" height="28"/>
            </a>

            <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                <span className='navbar-toggler-icon'></span>
            </button>

            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul className='navbar-nav ms-auto'>
                    
                </ul>
            </div>

        </div>
    </nav>;
}

export default Menu;