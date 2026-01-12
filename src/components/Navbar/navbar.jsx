import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logout, isAuthenticated, getCurrentUser, isAdmin } from '../../utils/authStorage';
import logo from '../../assets/images/logo-blanco.png';
import './Navbar.css';

const NavBar = () => {
    const navigate = useNavigate();
    const [menuAbierto, setMenuAbierto] = useState(false);
    const user = getCurrentUser();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="custom-navbar">
            <div className="nav-container">
                <Link className="nav-logo" to="/home">
                    <img src={logo} alt="Logo" />
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
                    
                    {!isAuthenticated() ? (
                        <>
                            <li><Link to="/registro" onClick={() => setMenuAbierto(false)}>Registro</Link></li>
                            <li><Link to="/login" onClick={() => setMenuAbierto(false)}>Inicio Sesión</Link></li>
                        </>
                    ) : (
                        <>
                            <li><span style={{ color: '#fff', padding: '0 12px' }}>Hola, {user?.nombre}</span></li>
                            <li>
                                <button 
                                    onClick={() => { handleLogout(); setMenuAbierto(false); }}
                                    style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', padding: 0 }}
                                >
                                    Cerrar Sesión
                                </button>
                            </li>
                        </>
                    )}
                    
                    <li><Link to="/aboutus" onClick={() => setMenuAbierto(false)}>Sobre Nosotros</Link></li>

                    {isAdmin() && (
                        <li className="nav-btn-mobile">
                            <Link to="/admin" className="btn-suscribirse" onClick={() => setMenuAbierto(false)}>Administrador</Link>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;