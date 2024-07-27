import React from 'react';
import Menu from './components/menu';
import Banner from './components/banner';
import Features from './components/features';
import Testimonials from './components/testimonials';
import Planos from './components/planos';
import Footer from './components/footer';

function Site(){
    return <div>
        <Menu/>
        <Banner/>
        <Features/>
        <Testimonials/>
        <Planos/>
        <Footer/>
    </div>;
}

export default Site;