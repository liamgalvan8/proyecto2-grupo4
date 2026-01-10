import React, { useEffect, useState } from 'react';
import { addSong, updateSong, isMp3Url, formatDuration } from '../../utils/songsStorage';
import './songModal.css';

export default function SongModal({ isOpen, onClose, song = null }) {
  const [form, setForm] = useState(() => ({
    titulo: song?.titulo || '',
    artista: song?.artista || '',
    categoria: song?.categoria || '',
    imagenUrl: song?.imagenUrl || '',
    audioUrl: song?.audioUrl || '',
    duracion: song?.duracion || '',
    codigo: song?.codigo || '',
  }));
  const [loadingDuration, setLoadingDuration] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!form.audioUrl || !isMp3Url(form.audioUrl)) {
      setTimeout(() => setForm(prev => ({ ...prev, duracion: '' })), 0);
      return;
    }

    setTimeout(() => {
      setLoadingDuration(true);
      setForm(prev => ({ ...prev, duracion: '' }));
      setError(null);
    }, 0);

    const audio = new Audio();
    let mounted = true;

    const onLoaded = () => {
      if (!mounted) return;
      const seconds = audio.duration;
      const formatted = formatDuration(seconds);
      if (formatted) {
        setForm(prev => ({ ...prev, duracion: formatted }));
      } else {
        setError('No se pudo detectar la duración del audio');
      }
      setLoadingDuration(false);
      audio.removeEventListener('loadedmetadata', onLoaded);
    };

    const onError = () => {
      if (!mounted) return;
      setError('No se pudo cargar el audio (posible CORS o URL inválida)');
      setLoadingDuration(false);
      audio.removeEventListener('error', onError);
    };

    audio.addEventListener('loadedmetadata', onLoaded);
    audio.addEventListener('error', onError);
    audio.preload = 'metadata';
    audio.src = form.audioUrl;

    // cleanup
    return () => {
      mounted = false;
      try {
        audio.pause();
        audio.src = '';
      } catch (e) {
        console.error('Error cleaning up audio element', e);
      }
    };
  }, [form.audioUrl]);

  function onSubmit(e) {
    e.preventDefault();
    setError(null);

    const payload = {
      titulo: form.titulo.trim(),
      artista: form.artista.trim(),
      categoria: form.categoria.trim(),
      imagenUrl: form.imagenUrl.trim(),
      audioUrl: form.audioUrl.trim(),
      duracion: form.duracion,
    };

    try {
      if (song && song.codigo) {
        updateSong(song.codigo, payload);
        alert('Canción actualizada');
      } else {
        addSong(payload);
        alert('Canción creada');
      }

      window.dispatchEvent(new CustomEvent('songsChanged'));
      onClose();
    } catch (err) {
      console.error(err);
      if (err && err.details) {
        setError(err.details.join('; '));
      } else {
        setError(err.message || 'Error al guardar');
      }
    }
  }

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <h2>{song ? 'Editar Canción' : 'Crear Canción'}</h2>
        <form onSubmit={onSubmit} className="modal-form">
          {form.codigo && (
            <div className="form-row">
              <label>Código</label>
              <input value={form.codigo} readOnly />
            </div>
          )}

          <div className="form-row">
            <label>Título *</label>
            <input value={form.titulo} onChange={e => setForm(prev => ({ ...prev, titulo: e.target.value }))} required />
          </div>

          <div className="form-row">
            <label>Artista *</label>
            <input value={form.artista} onChange={e => setForm(prev => ({ ...prev, artista: e.target.value }))} required />
          </div>

          <div className="form-row">
            <label>Categoría *</label>
            <input value={form.categoria} onChange={e => setForm(prev => ({ ...prev, categoria: e.target.value }))} required />
          </div>

          <div className="form-row">
            <label>Imagen URL *</label>
            <input value={form.imagenUrl} onChange={e => setForm(prev => ({ ...prev, imagenUrl: e.target.value }))} required />
          </div>

          <div className="form-row">
            <label>Audio URL (.mp3) *</label>
            <input value={form.audioUrl} onChange={e => setForm(prev => ({ ...prev, audioUrl: e.target.value }))} required />
          </div>

          <div className="form-row">
            <label>Duración</label>
            <input value={loadingDuration ? 'Detectando...' : form.duracion} readOnly />
          </div>

          {error && <div className="form-error">{error}</div>}

          <div className="modal-actions">
            <button type="button" className="btn btn-cancel" onClick={onClose}>Cancelar</button>
            <button type="submit" className="btn btn-save" disabled={loadingDuration || !form.duracion}>Guardar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
