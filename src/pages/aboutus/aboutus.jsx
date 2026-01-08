import React from 'react';
import './Aboutus.css';

const Aboutus = () => {
    const equipo = [
        {
            nombre: 'LIAM GALVAN',
            rol: 'Fullstack Developer',
            imagen: '/src/assets/images/avatarliam.jpeg'
        },
        {
            nombre: 'LUCIANA ROLDAN',
            rol: 'Frontend Developer',
            imagen: '/src/assets/images/avatarluchi.png'
        },
        {
            nombre: 'MARCOS RILLO CABANNE',
            rol: 'Backend Developer',
            imagen: '/src/assets/images/avatarmarcos.jpeg'
        },
    ];

    return (
        <div className="about-bg">
            <div className="card-about-horizontal">
                <img 
                    src="/src/assets/images/codemusic.png" 
                    alt="Banner Codemusic" 
                    className="about-banner-img" 
                />

                <h2 className="about-section-subtitle">SOBRE NOSOTROS</h2>
                <h1 className="about-main-title">
                    CODEMUSIC: DONDE CADA LÍNEA DE CÓDIGO SUENA A TU CANCIÓN FAVORITA.
                </h1>

                <div className="about-footer-text">
                    <p>Somos un grupo de desarrolladores apasionados por la música y la innovación.</p>
                    <p>Ubicados en el corazón de San Miguel de Tucumán, trabajamos para crear el futuro del sonido digital.</p>
                </div>

                <div className="about-gallery-horizontal">
                    {equipo.map((miembro, index) => (
                        <div key={index} className="member-item">
                            <div className="avatar-circle">
                                <img src={miembro.imagen} alt={miembro.nombre} />
                            </div>
                            <h3 className="member-name">{miembro.nombre}</h3>
                            <p className="member-role">{miembro.rol}</p>
                        </div>
                    ))}
                </div>

                <div className="about-map-container">
                    <h2 className="map-section-title">¿DÓNDE ENCONTRARNOS?</h2>
                    
                    <div className="map-content-layout">
                        <div className="map-info-text">
                            <h3>RollingCode School</h3>
                            <p><strong>Dirección:</strong> Gral. José María Paz 576, T4000 San Miguel de Tucumán.</p>
                            <p><strong>Teléfono:</strong> +54 381 578-3030</p>
                            <p><strong>Horarios:</strong> Lunes a Viernes de 09:00 a 18:00 hs.</p>
                            <a href="https://rollingcodeschool.com/" target="_blank" rel="noreferrer" className="map-link">
                                Visitar sitio web
                            </a>
                        </div>

                        <div className="map-wrapper">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1022202950946!2d-65.20939042456312!3d-26.836171376692345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c0f17f30f1d%3A0xe06066d659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses!2sar!4v1715800000000!5m2!1ses!2sar" 
                                width="100%" 
                                height="250" 
                                style={{ border: 0 }} 
                                allowFullScreen="" 
                                loading="lazy">
                            </iframe>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Aboutus;