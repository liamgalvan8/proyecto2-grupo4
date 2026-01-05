import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import './registro.css';

export default function Registro() {
    const navigate = useNavigate();

    
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        fechaNacimiento: '',
        email: '',
        password: '',
        rol: 'invitado' 
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const usuariosViejos = JSON.parse(localStorage.getItem('usuarios')) || [];
        
        if (usuariosViejos.find(u => u.email === formData.email)) {
            return alert('Este correo ya existe');
        }

        usuariosViejos.push(formData);
        localStorage.setItem('usuarios', JSON.stringify(usuariosViejos));
        alert('¡Registro exitoso!');
        navigate('/'); 
    };

    return (
        <main className="registro-bg"> {/* Fondo completo y responsivo */}
            <div className="card-registro"> 
                <h1>REGISTRARSE</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Nombre</label>
                        <input name="nombre" type="text" onChange={handleChange} required />
                    </div>
                    <div className="input-group">
                        <label>Apellido</label>
                        <input name="apellido" type="text" onChange={handleChange} required />
                    </div>
                    {/* Campos nuevos para cumplir con el diseño */}
                    <div className="input-group">
                        <label>Número de teléfono</label>
                        <input name="telefono" type="tel" onChange={handleChange} required />
                    </div>
                    <div className="input-group">
                        <label>Fecha de Nacimiento</label>
                        <input name="fechaNacimiento" type="date" onChange={handleChange} required />
                    </div>
                    <div className="input-group">
                        <label>Email</label>
                        <input name="email" type="email" onChange={handleChange} required />
                    </div>
                    <div className="input-group">
                        <label>Contraseña</label>
                        <input name="password" type="password" onChange={handleChange} required minLength="8" />
                    </div>
                    <button type="submit">REGISTRARSE</button>
                </form>
                <div className="login-link">
                    ¿Ya tienes cuenta? <Link to="/"><span>Inicia Sesión</span></Link>
                </div>
            </div>
        </main>
    );
}