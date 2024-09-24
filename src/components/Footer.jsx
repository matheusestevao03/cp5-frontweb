import React from 'react';
import { FooterStyle } from '../css/FooterStyle'; 

const Footer = () => {
    return (
        <FooterStyle>
            <footer>
                <div className="footer-content">
                    <p>&copy; {new Date().getFullYear()} Music House. Todos os direitos reservados.</p>
                    <ul className="social-links">
                        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    </ul>
                    <p>
                        <a href="/contato">Contato</a> | 
                        <a href="/sobre"> Sobre nós</a>
                    </p>
                </div>
            </footer>
        </FooterStyle>
    );
}

export default Footer;
