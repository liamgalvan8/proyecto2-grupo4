import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css'; 

export default function Login() {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];
        
        const usuarioEncontrado = usuariosRegistrados.find(
            (u) => u.email === credentials.email && u.password === credentials.password
        );

        if (usuarioEncontrado) {
            alert(`¡Bienvenido, ${usuarioEncontrado.nombre}!`);
            navigate('/home'); 
        } else {
            alert('Correo o contraseña incorrectos');
        }
    };

    return (
        /* "login-bg" activa el fondo azul y el centrado flex */
        <main className="login-bg">
            {/* "card-login" crea la tarjeta blanca sólida */}
            <div className="card-login">
                <h1>INICIA SESIÓN</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email"
                            placeholder="email" 
                            onChange={handleChange}
                            required 
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Contraseña</label>
                        <input 
                            type="password" 
                            id="password"
                            placeholder="contraseña" 
                            onChange={handleChange}
                            required 
                        />
                    </div>

                    <button type="submit">INICIAR SESIÓN</button>
                </form>

                <div className="register">
                    Si no tienes una cuenta, toca en 
                    <Link to="/registro" className="register-link"> "REGISTRARSE" </Link> 
                    para crear una cuenta y disfrutar codemusic.
                </div>
            </div>
        </main>
    );
}