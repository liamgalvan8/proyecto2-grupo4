import React from 'react';
import { Link } from 'react-router-dom';
import error404 from '../../assets/images/error404.gif';
import fondo from '../../assets/images/fondo-3.png';
import './notfound.css';

const NotFound = () => {
    return (
        <div className="notfound-page" style={{ backgroundImage: `url(${fondo})` }}>
            <div className="notfound-content" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                

                {/* Lado Izquierdo: Textos y Botón */}
                <div className="textos404" style={{ backgroundColor: 'transparent' }}>
                    <h1 className="notfound-title" style={{ backgroundColor: 'transparent' }}>404</h1>
                    <h2 className="notfound-subtitle"style={{ backgroundColor: 'transparent' }}>¡Te perdiste en el ritmo!</h2>
                    <p className="notfound-description"style={{ backgroundColor: 'transparent' }}>
                        Lo sentimos, la página que buscas no existe o fue movida a otra lista de reproducción.
                    </p>
                    <Link to="/home" className="notfound-button">
                        Volver a CodeMusic
                    </Link>
                </div>

                {/* Lado Derecho: El GIF más grande */}
                <div className="gif404" style={{ backgroundColor: 'transparent' }}>
                    <img src={error404} alt="Error 404" className="notfound-gif" />
                </div>
            </div>
        </div>
    );
};

export default NotFound;