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
                        <h4>Más información</h4>
                        <ul>
                            <li><Link to="/contacto">Contacto</Link></li>
                            <li><Link to="/sobre-nosotros">Acerca de nosotros</Link></li>
                            <li><Link to="/privacidad">Política de privacidad</Link></li>
                        </ul>
                    </div>

                    {/* Columna 2: Ayuda */}
                    <div className="footer-links">
                        <h4>Ayuda</h4>
                        <ul>
                            <li><Link to="/ayuda">Centro de ayuda</Link></li>
                            <li><Link to="/dispositivos">Dispositivos compatibles</Link></li>
                            <li><Link to="/comentarios">Envíanos tus comentarios</Link></li>
                        </ul>
                    </div>

                    {/* Columna 3: Redes Sociales */}
                    <div className="footer-links">
                        <h4>Síguenos</h4>
                        <div className="social-links">
                            {/* Nota: Para redes sociales externas se usa <a>, 
                  para páginas internas se usa <Link> */}
                            <a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="bi bi-twitter-x"></i></a>
                            <a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
                            <a href="https://tiktok.com" target="_blank" rel="noreferrer"><i className="bi bi-tiktok"></i></a>
                            <a href="https://youtube.com" target="_blank" rel="noreferrer"><i className="bi bi-youtube"></i></a>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;