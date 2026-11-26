import React from 'react';
import { Link } from 'react-router-dom';
import { TiSocialFacebook, TiSocialInstagram } from 'react-icons/ti';
import { categories } from 'mock/api';
import './Footer.css';

const Footer = () => {
    const linkFB = process.env.REACT_APP_FACEBOOK;
    const linkIG = process.env.REACT_APP_INSTAGRAM;
    const nameBusiness = process.env.REACT_APP_NAME_BUSINESS || 'La Magia di Victoria';

    return (
        <footer className="site-footer">
            <div className="container site-footer-grid">
                <div>
                    <p className="site-footer-brand">{nameBusiness}</p>
                    <p className="site-footer-text">Productos Victoria's Secret originales, traídos directamente desde Miami.</p>
                </div>
                <nav aria-label="Categorías">
                    <p className="eyebrow">Categorías</p>
                    <ul className="site-footer-links">
                        {categories.map((c) => (
                            <li key={c.id}><Link to={`/category/${c.id}`}>{c.label}</Link></li>
                        ))}
                    </ul>
                </nav>
                <div>
                    <p className="eyebrow">Síguenos</p>
                    <div className="site-footer-social">
                        {linkIG && <a href={linkIG} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><TiSocialInstagram /></a>}
                        {linkFB && <a href={linkFB} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><TiSocialFacebook /></a>}
                    </div>
                </div>
            </div>
            <div className="container site-footer-bottom">
                © {new Date().getFullYear()} {nameBusiness}. Todos los derechos reservados.
            </div>
        </footer>
    );
};

export default Footer;
