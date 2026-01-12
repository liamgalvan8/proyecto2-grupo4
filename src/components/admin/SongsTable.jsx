import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getSongs, deleteSong } from '../../utils/songsStorage';
import ConfirmModal from '../modal/ConfirmModal';
import './songsTable.css';

export default function SongsTable({ onEdit }) {
  const [songs, setSongs] = useState(() => getSongs());
  const [query, setQuery] = useState('');
  const [showConfirm, setShowConfirm] = useState(false);
  const [songToDelete, setSongToDelete] = useState(null);

  function loadSongs() {
    const s = getSongs();
    setSongs(s);
  }

  useEffect(() => {
    const handler = () => loadSongs();
    window.addEventListener('songsChanged', handler);
    return () => window.removeEventListener('songsChanged', handler);
  }, []);

  function handleDelete(codigo) {
    setSongToDelete(codigo);
    setShowConfirm(true);
  }

  function confirmDelete() {
    try {
      deleteSong(songToDelete);
      loadSongs();
      toast.success('Canción eliminada');
    } catch (e) {
      toast.error('Error al eliminar: ' + e.message);
    } finally {
      setShowConfirm(false);
      setSongToDelete(null);
    }
  }

  function cancelDelete() {
    setShowConfirm(false);
    setSongToDelete(null);
  }

  const filtered = songs.filter(s => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return (
      s.titulo.toLowerCase().includes(q) ||
      s.artista.toLowerCase().includes(q)
    );
  });

  return (
    <>
      <ConfirmModal 
        isOpen={showConfirm}
        message="¿Estás seguro que querés eliminar esta canción?"
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />
      <div className="songs-table-container">
      <div className="songs-table-header">
        <input
          type="text"
          placeholder="Buscar por título o artista..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="songs-search"
        />
        <div className="songs-count">{filtered.length} canciones</div>
      </div>

      <div className="songs-table-wrapper">
        <table className="songs-table">
          <thead>
            <tr>
              <th>Código</th>
              <th>Título</th>
              <th>Artista</th>
              <th>Categoría</th>
              <th>Duración</th>
              <th>Preview</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 && (
              <tr>
                <td colSpan="7" className="no-data">No hay canciones cargadas</td>
              </tr>
            )}

            {filtered.map(song => (
              <tr key={song.codigo}>
                <td className="cell-code">{song.codigo}</td>
                <td>{song.titulo}</td>
                <td>{song.artista}</td>
                <td>{song.categoria}</td>
                <td>{song.duracion}</td>
                <td>
                  <audio controls preload="none" src={song.audioUrl} className="preview-audio">
                    Tu navegador no soporta audio.
                  </audio>
                </td>
                <td>
                  <button className="btn btn-edit" onClick={() => onEdit && onEdit(song)}>Editar</button>
                  <button className="btn btn-delete" onClick={() => handleDelete(song.codigo)}>Borrar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}
