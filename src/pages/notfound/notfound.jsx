import { Link } from "react-router";
import "./notfound.css";

const NotFound = () => {
    return (
        <div className="contenedorPrincipal">
            <div className="textos-grupo">
                <h1 className="texto404">404</h1>
                <h2 className="textoPrincipal">PAGINA NO ENCONTRADA</h2>
                <p className="textoSecundario">estamos trabajando en eso...</p>
            </div>

            <Link to="/home" className="link-home">
                Volver al Inicio
            </Link>
        </div>
    );
};

export default NotFound;