import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';


import girlImage from '../../assets/images/fondo.png.jpeg'; 
import logoMarcaAgua from '../../assets/images/codemusic.png';
import manSupport from '../../assets/images/man-pink.png';

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
                        <h1 className="home-title">BIENVENIDOS <br /> A <br /><span className="brand-name">CODEMUSIC</span></h1>
                        <p className="home-description">
                            Viví la experiencia musical con nosotros con audio DolbyAtmos, <br />
                            empieza ya con 7 días gratis de prueba.
                        </p>
                        <Link to="/404" className="home-btn-primary">OBTENER 1 MES GRATIS</Link>
                    </div>
                    <div className="home-image-section">
                        <div className="bg-shape shape-blue"></div>
                        <div className="bg-shape shape-green"></div>
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

            {/* SECCIÓN 3: POR QUÉ ESCUCHAR (FEATURES) */}
            <section className="features-section" id="nosotros">
                <div className="features-content">
                    <div className="features-left">
                        <img src={logoMarcaAgua} alt="" className="watermark-logo" />
                        <h2 className="feature-main-title">porque <br /><span className="highlight">escuchar</span> en <br />codemusic</h2>
                    </div>
                    <div className="features-right">
                        <div className="feature-item">
                            <div className="feature-header"><span className="feature-icon">↗</span><h4>GRAN BIBLIOTECA MUSICAL</h4></div>
                            <p>Contamos con más de 100 millones de canciones, un amplio repertorio musical...</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-header"><span className="feature-icon">↗</span><h4>CONTAMOS CON AUDIO ESPACIAL</h4></div>
                            <p>Contamos con el audio dolby atmos para un sonido envolvente y espacial...</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-header"><span className="feature-icon">↗</span><h4>SÉ TU MISMO EL DUEÑO</h4></div>
                            <p>CodeMusic permite a sus usuarios modificar desde el plan free, tener control total de sus playlist.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECCIÓN 4: PLANES */}
            <section className="plans-section" id="planes">
                <h2 className="plans-main-title">NUESTROS PLANES</h2>
                <div className="plans-grid">
                    {/* Plan Free */}
                    <div className="plan-card">
                        <h3 className="plan-name">PLAN FREE</h3>
                        <div className="plan-visual variant-free">
                            <div className="plan-price-bar">
                                <span>0,00 USD / mes</span>
                                <Link to="/404" className="btn-subscribe">SUSCRIBIRSE</Link>
                            </div>
                        </div>
                        <ul className="plan-features">
                            <li>• Acceso a más de 100 millones de canciones.</li>
                            <li>• Calidad de audio estándar.</li>
                            <li>• Anuncios entre canciones.</li>
                        </ul>
                    </div>

                    {/* Plan Estándar */}
                    <div className="plan-card">
                        <h3 className="plan-name">PLAN ESTANDAR</h3>
                        <div className="plan-visual variant-standard">
                            <div className="plan-price-bar">
                                <div className="price-info">
                                    <span className="promo">0 USD Durante 1 mes</span>
                                    <span className="subtext">6,49 USD*** al mes</span>
                                </div>
                                <Link to="/404" className="btn-subscribe">SUSCRIBIRSE</Link>
                            </div>
                        </div>
                        <ul className="plan-features">
                            <li>• Sin anuncios (Música ininterrumpida).</li>
                            <li>• Audio de alta fidelidad (Hi-Fi).</li>
                            <li>• Descarga de música para offline.</li>
                        </ul>
                    </div>

                    {/* Plan Ultra */}
                    <div className="plan-card">
                        <h3 className="plan-name">PLAN ULTRA</h3>
                        <div className="plan-visual variant-ultra">
                            <div className="plan-price-bar">
                                <div className="price-info">
                                    <span className="promo">0 USD Durante 1 mes</span>
                                    <span className="subtext">14,99 USD*** al mes</span>
                                </div>
                                <Link to="/404" className="btn-subscribe">SUSCRIBIRSE</Link>
                            </div>
                        </div>
                        <ul className="plan-features">
                            <li>• Audio Espacial y Dolby Atmos.</li>
                            <li>• Calidad de estudio (Ultra HD).</li>
                            <li>• Streaming en hasta 4 dispositivos.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* SECCIÓN 5: SOPORTE */}
            <section className="support-section" id="contacto">
                <div className="support-container">
                    <div className="support-image-wrapper">
                        <img src={manSupport} alt="Soporte Codemusic" className="support-man-img" />
                    </div>
                    <div className="support-content">
                        <h2 className="support-main-title">¡Estamos emocionados de que elijas a codemusic!</h2>
                        <div className="support-info-box">
                            <p className="support-text-label">PARA CUALQUIER PREGUNTA SOBRE LA PLATAFORMA. COMUNICATE AL SOPORTE</p>
                            <a href="mailto:SOPORT@CODEMUSIC.COM" className="support-email-btn">SOPORT@CODEMUSIC.COM</a>
                        </div>
                        <div className="support-legal-info">
                            <p>COPYRIGHT © 2026 CODEMUSIC INC. TODOS LOS DERECHOS RESERVADOS.</p>
                            <div className="legal-links">
                                <Link to="/404">POLÍTICA DE PRIVACIDAD</Link> | <Link to="/404">AVISO LEGAL</Link> | <Link to="/404">MAPA DEL SITIO</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;