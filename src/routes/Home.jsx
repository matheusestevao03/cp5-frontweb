import React from 'react';
import { HomeStyle } from '../css/HomeStyle'; 
import logo from '../assets/notas.png';
import violao from '../assets/violao.png';
import piano from '../assets/piano.png';
import flauta from '../assets/flauta.png';

const Home = () => {
    return (
        <HomeStyle>
            <header>
                <img src={logo} alt="Logo Music House" className="logo" />
                <h1>Music House</h1>
                <p>Bem-vindo à Music House! Aqui você encontra os melhores produtos para melhorar sua música.</p>
            </header>

            <section className="products">
                <h2>Produtos em Destaque</h2>
                <div className="product-list">
                    <div className="product">
                        <img src={violao} alt="Violão" className="product-image" />
                        <h3>Violão</h3>
                        <p>Descrição breve do Produto 1.</p>
                    </div>
                    <div className="product">
                        <img src={piano} alt="Piano" className="product-image" />
                        <h3>Piano</h3>
                        <p>Descrição breve do Produto 2.</p>
                    </div>
                    <div className="product">
                        <img src={flauta} alt="Flauta" className="product-image" />
                        <h3>Flauta</h3>
                        <p>Descrição breve do Produto 3.</p>
                    </div>
                </div>
            </section>
        </HomeStyle>
    );
}

export default Home;
