import { Link } from 'react-router-dom'; // Importación necesaria
import './styles.css';

export default function Login() {
    return (
        <main className="login-bg">
            <div className="card">
                <h1>INICIA SESIÓN</h1>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email"
                            placeholder="email" 
                            required 
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Contraseña</label>
                        <input 
                            type="password" 
                            id="password"
                            placeholder="contraseña" 
                            minLength="8"
                            maxLength="20"
                            required 
                        />
                    </div>

                    <button type="submit">INICIAR SESIÓN</button>
                </form>
                <div className="register">
                    Si no tienes una cuenta, toca en 
                    {/* Cambiamos span por Link para que sea funcional */}
                    <Link to="/registro" className="register-link"> "REGISTRARSE" </Link> 
                    para crear una cuenta y disfrutar codemusic.
                </div>
            </div>
        </main>
    );
}