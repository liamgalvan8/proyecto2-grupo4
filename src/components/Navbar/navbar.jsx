import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-blanco.png';
import './Navbar.css';

const NavBar = () => {
    // Estado para el menú hamburguesa en móviles
    const [menuAbierto, setMenuAbierto] = useState(false);

    return (
        <div className="home-container">

            <nav className="custom-navbar">
                <div className="nav-container">

                    {/* Logo */}
                    <Link className="nav-logo" to="/home">
                        <img src={logo} alt="Logo" />
                    </Link>

                    {/* Botón Hamburguesa (Solo visible en celulares) */}
                    <button
                        className="nav-menu-toggle"
                        onClick={() => setMenuAbierto(!menuAbierto)}
                    >
                        <span className={`line ${menuAbierto ? 'open' : ''}`}></span>
                        <span className={`line ${menuAbierto ? 'open' : ''}`}></span>
                        <span className={`line ${menuAbierto ? 'open' : ''}`}></span>
                    </button>

                    {/* Links de Navegación */}
                    <ul className={`nav-links ${menuAbierto ? 'active' : ''}`}>
                        <li><Link to="/home" onClick={() => setMenuAbierto(false)}>Inicio</Link></li>
                        <li><Link to="/registro" onClick={() => setMenuAbierto(false)}>Registro</Link></li>
                        <li><Link to="/login" onClick={() => setMenuAbierto(false)}>Inicio Sesion</Link></li>
                        <li><Link to="/aboutus" onClick={() => setMenuAbierto(false)}>Sobre Nosotros</Link></li>

                        {/* Botón Suscribirse dentro de la lista para móviles */}
                        <li className="nav-btn-mobile">
                            <Link to="/admin" className="btn-suscribirse">Administrador</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;