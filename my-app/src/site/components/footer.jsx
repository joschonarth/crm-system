import React from 'react';

function Footer(){
    var ano = new Date().getFullYear();

    return <section id='footer'>
        <div>
            <ul className="list-unstyled list-inline social text-center">
                <li className="list-inline-item"><a href="/#"><i className="fa fa-facebook fa-2x"></i></a></li>
                <li className="list-inline-item"><a href="/#"><i className="fa fa-twitter fa-2x"></i></a></li>
                <li className="list-inline-item"><a href="/#"><i className="fa fa-instagram fa-2x"></i></a></li>
                <li className="list-inline-item"><a href="/#" target='_blank'><i className="fa fa-envolope fa-2x"></i></a></li>
            </ul>
        </div>
        <a href="mailto:email@gmail.com">email@gmail.com</a>
        <p>Desenvolvido por 99 CRM - {ano}</p>
    </section>;
}

export default Footer;