import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-blanco.png';
import './Navbar.css';

const NavBar = () => {
    const [menuAbierto, setMenuAbierto] = useState(false);

    return (
        <nav className="custom-navbar">
            <div className="nav-container">
                <Link className="nav-logo" to="/home">
                    <img src={logo} alt="Logo Codemusic" />
                </Link>

                <button
                    className="nav-menu-toggle"
                    onClick={() => setMenuAbierto(!menuAbierto)}
                    aria-label="Abrir menú"
                >
                    <span className={`line ${menuAbierto ? 'open' : ''}`}></span>
                    <span className={`line ${menuAbierto ? 'open' : ''}`}></span>
                    <span className={`line ${menuAbierto ? 'open' : ''}`}></span>
                </button>

                <ul className={`nav-links ${menuAbierto ? 'active' : ''}`}>
                    <li><Link to="/home" onClick={() => setMenuAbierto(false)}>Inicio</Link></li>
                    <li><Link to="/registro" onClick={() => setMenuAbierto(false)}>Registro</Link></li>
                    <li><Link to="/login" onClick={() => setMenuAbierto(false)}>Inicio Sesion</Link></li>
                    <li><Link to="/aboutus" onClick={() => setMenuAbierto(false)}>Sobre Nosotros</Link></li>
                    <li>
                        <Link to="/admin" className="btn-admin" onClick={() => setMenuAbierto(false)}>
                            Administrador
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;