import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './detail.css';

const Detail = () => {
    // Capturamos el ID de la URL (ej: /detalle/1)
    const { id } = useParams();

    // Datos de ejemplo (Luego los traerás de tu base de datos/storage)
    const songData = {
        code: id,
        title: "Toma el control todas las mañanas",
        artist: "Liam Galvan",
        category: "Pop / Electrónica",
        duration: "3:45",
        image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800"
    };

    return (
        <div className="detail-main-wrapper">
            <div className="detail-container">
                
                <div className="detail-visual-section">
                    <div className="bg-shape-detail"></div>
                    <img src={songData.image} alt={songData.title} className="song-img-detail" />
                </div>

                <div className="detail-info-section">
                    <span className="song-detail-code">CÓDIGO: {songData.code}</span>
                    <h1 className="song-detail-title">{songData.title}</h1>
                    <h2 className="song-detail-artist">{songData.artist}</h2>
                    
                    <div className="song-detail-specs">
                        <p><strong>Categoría:</strong> {songData.category}</p>
                        <p><strong>Duración:</strong> {songData.duration} minutos</p>
                    </div>

                    <div className="detail-actions">
                        <button className="btn-play-now">REPRODUCIR AHORA</button>
                        <Link to="/home" className="btn-back-home">VOLVER A HOME</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;