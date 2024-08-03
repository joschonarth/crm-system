import React from 'react';

function Testimonials() {
    return (
        <section id='testimonials'>
            <div className="container">
                <div id="carouselExampleInterval" className="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="5000">
                            <h3>"Excelente ferramenta para acompanhamento do dia a dia, sendo flexível o suficiente para a maior parte dos usos. Seja para controle de CRM ou para controle de visitas, o CRM System tem se revelado uma ferramenta muito útil e intuitiva."</h3>
                            <img src="img/cliente1.jpg" alt="Cliente 1"/>
                            <em>Rafael Oliveira - São Paulo</em>
                        </div>
                        <div className="carousel-item" data-bs-interval="5000">
                            <h3>"Estou impressionada com o CRM System. Ele é versátil e fácil de usar, ajudando tanto na coordenação de equipes quanto no controle de visitas. Uma ferramenta que realmente faz a diferença."</h3>
                            <img src="img/cliente2.jpg" alt="Cliente 2"/>
                            <em>Mariana Costa - Rio de Janeiro</em>
                        </div>
                        <div className="carousel-item" data-bs-interval="5000">
                            <h3>"Com o CRM System, nossa eficiência aumentou muito. A plataforma é flexível e fácil de adaptar, facilitando o gerenciamento diário de contatos e visitas. Uma solução prática e eficaz!"</h3>
                            <img src="img/cliente3.jpg" alt="Cliente 3"/>
                            <em>Lara Almeida - Minas Gerais</em>
                        </div>        
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div> 
        </section>
    );
}
export default Testimonials;