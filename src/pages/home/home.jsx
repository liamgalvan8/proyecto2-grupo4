import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';


import girlImage from '../../assets/images/fondo.png.jpeg'; 
import manSupport from '../../assets/images/fondo.png.jpeg'; 

const Home = () => {
    const playlists = [
        { id: 1, title: "Toma el control todas las mañanas", img: "ruta-1.jpg" },
        { id: 2, title: "Conviértete en el DJ de tu equipo", img: "ruta-2.jpg" },
        { id: 3, title: "Envia musica sin necesidad de estar cerca", img: "ruta-3.jpg" },
        { id: 4, title: "Incrementa tu impacto", img: "ruta-4.jpg" },
        { id: 5, title: "Alegra a los demas con musica", img: "ruta-5.jpg" },
        { id: 6, title: "exporta tus playlist desde otras plataformas", img: "ruta-6.jpg" },
    ];

    return (
        <div className="home-main-wrapper">
            

            <section className="home-container" id="inicio">
                <div className="home-content">
                    <div className="home-text-section">
                        <h1 className="home-title">BIENVENIDOS <br /> A <br /> CODEMUSIC</h1>
                        <p className="home-description">
                            Viví la experiencia musical con nosotros con audio DolbyAtmos, <br />
                            empieza ya con 7 días gratis de prueba.
                        </p>
                        <Link to="/404" className="home-btn-primary">OBTENER 1 MES GRATIS</Link>
                    </div>
                    <div className="home-image-section">
                        <div className="bg-shape-hero"></div>
                        <img src={girlImage} alt="Chica música" className="home-img" />
                    </div>
                </div>
            </section>


            <section className="playlists-section" id="playlists">
                <h2 className="playlists-main-title">ESCUCHA NUESTRAS PLAYLIST</h2>
                <div className="playlists-grid">
                    {playlists.map((item) => (
                        <Link to={`/detalle/${item.id}`} key={item.id} className="playlist-link">
                            <div className="playlist-card">
                                <div className={`playlist-thumb color-variant-${item.id}`}>
                                    <img src={item.img} alt={`Módulo ${item.id}`} />
                                </div>
                                <div className="playlist-info">
                                    <span className="module-number">MÓDULO {item.id}</span>
                                    <p className="module-text">{item.title}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>


            <section className="plans-section" id="planes">
                <h2 className="plans-main-title">NUESTROS PLANES</h2>
                <div className="plans-grid">
                    <div className="plan-card">
                        <h3 className="plan-name">PLAN FREE</h3>
                        <div className="plan-visual variant-free">
                            <div className="plan-price-bar">
                                <span>0,00 USD / mes</span>
                                <Link to="/404" className="btn-subscribe">SUSCRIBIRSE</Link>
                            </div>
                        </div>
                    </div>
                    <div className="plan-card">
                        <h3 className="plan-name">PLAN ESTANDAR</h3>
                        <div className="plan-visual variant-standard">
                            <div className="plan-price-bar">
                                <span>6,49 USD / mes</span>
                                <Link to="/404" className="btn-subscribe">SUSCRIBIRSE</Link>
                            </div>
                        </div>
                    </div>
                    <div className="plan-card">
                        <h3 className="plan-name">PLAN ULTRA</h3>
                        <div className="plan-visual variant-ultra">
                            <div className="plan-price-bar">
                                <span>14,99 USD / mes</span>
                                <Link to="/404" className="btn-subscribe">SUSCRIBIRSE</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="support-section" id="contacto">
                <div className="support-container">
                    <img src={manSupport} alt="Soporte" className="support-man-img" />
                    <div className="support-content">
                        <h2 className="support-main-title">¡Estamos emocionados de que elijas a codemusic!</h2>
                        <a href="mailto:SOPORT@CODEMUSIC.COM" className="support-email-btn">SOPORT@CODEMUSIC.COM</a>
                        <p className="support-legal">COPYRIGHT © 2026 CODEMUSIC INC. TODOS LOS DERECHOS RESERVADOS.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;