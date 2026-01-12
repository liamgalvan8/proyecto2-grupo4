import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container-footer">
                <div className="footer-row">
                    
                    {/* Columna 1: Información */}
                    <div className="footer-links">
                        <h4>MÁS INFORMACIÓN</h4>
                        <ul>
                            <li><Link to="/404">Contacto</Link></li>
                            <li><Link to="/404">Acerca de nosotros</Link></li>
                            <li><Link to="/404">Política de privacidad</Link></li>
                        </ul>
                    </div>

                    {/* Columna 2: Ayuda */}
                    <div className="footer-links">
                        <h4>AYUDA</h4>
                        <ul>
                            <li><Link to="/404">Centro de ayuda</Link></li>
                            <li><Link to="/404">Dispositivos compatibles</Link></li>
                            <li><Link to="/404">Envíanos tus comentarios</Link></li>
                        </ul>
                    </div>

                    {/* Columna 3: Redes Sociales (Iconos originales) */}
                    <div className="footer-links">
                        <h4>SÍGUENOS</h4>
                        <div className="social-links">
                            <a href="#"><i className="fab fa-x-twitter"></i></a>
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-tiktok"></i></a>
                            <a href="#"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>

                </div>
                {/* Se eliminó la sección footer-bottom de derechos reservados */}
            </div>
        </footer>
    );
};

export default Footer;