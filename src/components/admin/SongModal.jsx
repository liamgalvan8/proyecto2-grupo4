import React, { useEffect, useState, useRef } from 'react';
import { addSong, updateSong, isAcceptableAudioSource, formatDuration } from '../../utils/songsStorage';
import './songModal.css';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

export default function SongModal({ isOpen, onClose, song = null }) {
  const [form, setForm] = useState(() => ({
    titulo: song?.titulo || '',
    artista: song?.artista || '',
    categoria: song?.categoria || '',
    imagenUrl: song?.imagenUrl || '', // url or dataURL
    audioUrl: song?.audioUrl || '', // url or dataURL
    duracion: song?.duracion || '',
    codigo: song?.codigo || '',
  }));
  const [loadingDuration, setLoadingDuration] = useState(false);
  const [error, setError] = useState(null);
  const formRef = useRef(null);

  // Handle image file input (convert to dataURL)
  function handleImageFileChange(e) {
    setError(null);
    const f = e.target.files && e.target.files[0];
    if (!f) return;
    if (!f.type.startsWith('image/')) {
      setError('El archivo debe ser una imagen válida');
      return;
    }
    if (f.size > MAX_FILE_SIZE) {
      setError('La imagen supera el límite de 5 MB');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => setForm(prev => ({ ...prev, imagenUrl: reader.result }));
    reader.onerror = () => setError('No se pudo leer la imagen');
    reader.readAsDataURL(f);
  }

  // Handle audio file input (convert to dataURL and detect duration)
  function handleAudioFileChange(e) {
    setError(null);
    const f = e.target.files && e.target.files[0];
    if (!f) return;
    if (!(f.type.includes('audio') || f.name.toLowerCase().endsWith('.mp3'))) {
      setError('El archivo de audio debe ser un .mp3');
      return;
    }
    if (f.size > MAX_FILE_SIZE) {
      setError('El audio supera el límite de 5 MB');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result;
      setForm(prev => ({ ...prev, audioUrl: dataUrl, duracion: '' }));
    };
    reader.onerror = () => setError('No se pudo leer el audio');
    reader.readAsDataURL(f);
  }

  useEffect(() => {
    if (!form.audioUrl || !isAcceptableAudioSource(form.audioUrl)) {
      // Clear duration if source not acceptable
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
        alert('Canción agregada');
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
        <h2>{song ? 'Editar Canción' : 'Agregar Canción'}</h2>

        <div className="modal-content">
          <form ref={formRef} onSubmit={onSubmit} className="modal-form">
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
              <label>Imagen (archivo o URL) *</label>
              <input type="file" accept="image/*" onChange={handleImageFileChange} />
              <input value={form.imagenUrl} onChange={e => setForm(prev => ({ ...prev, imagenUrl: e.target.value }))} placeholder="Pegar URL o usar archivo" required />
              {form.imagenUrl && (
                <div className="image-preview">
                  <img src={form.imagenUrl} alt="Preview" className="preview-img" />
                </div>
              )}
            </div>

            <div className="form-row">
              <label>Audio (.mp3) * (archivo o URL)</label>
              <input type="file" accept="audio/mpeg,.mp3" onChange={handleAudioFileChange} />
              <input value={form.audioUrl} onChange={e => setForm(prev => ({ ...prev, audioUrl: e.target.value }))} placeholder="Pegar URL .mp3 o usar archivo" required />
              {form.audioUrl && (
                <div className="audio-preview">
                  <audio controls preload="none" src={form.audioUrl} className="preview-audio">Tu navegador no soporta audio.</audio>
                </div>
              )}
            </div>

            <div className="form-row">
              <label>Duración</label>
              <input value={loadingDuration ? 'Detectando...' : form.duracion} readOnly />
            </div>

            {error && <div className="form-error">{error}</div>}

            <div style={{ height: 8 }} />
          </form>
        </div>

        <div className="modal-actions">
          <button type="button" className="btn btn-cancel" onClick={onClose}>Cancelar</button>
          <button
            type="button"
            className="btn btn-save"
            onClick={() => {
              const f = formRef.current;
              if (!f) return;
              if (typeof f.requestSubmit === 'function') {
                f.requestSubmit();
              } else if (typeof f.reportValidity === 'function') {
                if (f.reportValidity()) f.submit();
              } else {
                f.submit();
              }
            }}
            disabled={loadingDuration || !form.duracion}
          >
            {song ? 'Guardar' : 'Agregar'}
          </button>
        </div>
      </div>
    </div>
  );
}
