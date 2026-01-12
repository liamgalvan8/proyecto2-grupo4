import { Link } from 'react-router-dom';
import './home.css';

import girlImage from '../../assets/images/12.png';
import foto1 from '../../assets/images/5.png';
import foto2 from '../../assets/images/6.png';
import foto3 from '../../assets/images/7.png';
import foto4 from '../../assets/images/8.png';
import foto5 from '../../assets/images/9.png';
import foto6 from '../../assets/images/10.png';
import plan1 from '../../assets/images/3.png'
import fondoplimpio from '../../assets/images/fondo-3.png'
import logoMarcaAgua from '../../assets/images/codemusic.png';

const Home = () => {
    const playlists = [
        { id: 1, title: "Toma el control todas las mañanas", img: foto1 },
        { id: 2, title: "Conviértete en el DJ de tu equipo", img: foto2 },
        { id: 3, title: "Envía música sin necesidad de estar cerca", img: foto3 },
        { id: 4, title: "Incrementa tu impacto", img: foto4 },
        { id: 5, title: "Alegra a los demás con música", img: foto5 },
        { id: 6, title: "Exporta tus playlist desde otras plataformas", img: foto6 },
    ];

    return (
        <div className="home-main-wrapper">
<section className="home-container" id="inicio">
    {/* Imagen de fondo (Marca de agua) */}
    <img 
        src={fondoplimpio} 
        alt="" 
        className="home-watermark" 
    />

    <div className="home-content">
        <div className="home-text-section">
            <h1 className="home-title">
                BIENVENIDOS <br /> A <br />
                <span className="brand-name">CODEMUSIC</span>
            </h1>
            <p className="home-description">
                Viví la experiencia musical con nosotros con audio Dolby Atmos, <br />
                empieza ya con 7 días gratis de prueba.
            </p>
            <Link to="/404" className="home-btn-primary">
                OBTENER 1 MES GRATIS
            </Link>
        </div>

        <div className="home-image-section">
            <img src={girlImage} alt="Chica escuchando música" className="home-img" />
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


            <section className="features-section" id="nosotros">
                <div className="features-content">
                    <div className="features-left">
                        <img src={logoMarcaAgua} alt="Marca de agua CodeMusic" className="watermark-logo" />
                        <h2 className="feature-main-title">porque <br /><span className="highlight">escuchar</span> en <br />codemusic</h2>
                    </div>
                    <div className="features-right">
                        <div className="feature-item">
                            <div className="feature-header"><span className="feature-icon">↗</span><h4>GRAN BIBLIOTECA MUSICAL</h4></div>
                            <p>Contamos con más de 100 millones de canciones, un amplio repertorio musical...</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-header"><span className="feature-icon">↗</span><h4>CONTAMOS CON AUDIO ESPACIAL</h4></div>
                            <p>Contamos con el audio Dolby Atmos para un sonido envolvente y espacial...</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-header"><span className="feature-icon">↗</span><h4>SÉ TU MISMO EL DUEÑO</h4></div>
                            <p>CodeMusic permite a sus usuarios modificar desde el plan free, tener control total de sus playlist.</p>
                        </div>
                    </div>
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
                        <ul className="plan-features">
                            <li>• Acceso a más de 100 millones de canciones.</li>
                            <li>• Calidad de audio estándar.</li>
                            <li>• Anuncios entre canciones.</li>
                        </ul>
                    </div>


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


        </div>
    );
};

export default Home;