const STORAGE_KEY = 'songs';

function _readStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Error leyendo localStorage:', e);
    return [];
  }
}

function _writeStorage(songs) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(songs));
}

function generateId() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return 'id-' + Math.random().toString(36).slice(2, 9);
}

function isValidUrl(url) {
  try {
    const u = new URL(url);
    return u.protocol === 'http:' || u.protocol === 'https:';
  } catch {
    return false;
  }
}

function isDataUrl(url) {
  return typeof url === 'string' && url.startsWith('data:');
}

function isDataAudio(url) {
  return isDataUrl(url) && url.startsWith('data:audio');
}

function isDataImage(url) {
  return isDataUrl(url) && url.startsWith('data:image');
}

function isMp3Url(url) {
  if (!isValidUrl(url)) return false;
  return url.toLowerCase().split('?')[0].endsWith('.mp3');
}

function isAcceptableAudioSource(url) {
  if (!url) return false;
  return isDataAudio(url) || isMp3Url(url) || String(url).toLowerCase().endsWith('.mp3');
}

function isAcceptableImageSource(url) {
  if (!url) return false;
  return isDataImage(url) || isValidUrl(url);
}

function formatDuration(seconds) {
  if (typeof seconds !== 'number' || !isFinite(seconds) || seconds <= 0) return null;
  const mins = Math.floor(seconds / 60);
  const secs = Math.round(seconds % 60).toString().padStart(2, '0');
  return `${mins}:${secs}`;
}

function validateSong(song) {
  const errors = [];
  if (!song) errors.push('Objeto canción inválido');
  if (!song.titulo || !song.titulo.trim()) errors.push('El título es obligatorio');
  if (!song.artista || !song.artista.trim()) errors.push('El artista es obligatorio');
  if (!song.categoria || !song.categoria.trim()) errors.push('La categoría es obligatoria');
  if (!song.imagenUrl || !isAcceptableImageSource(song.imagenUrl)) errors.push('imagenUrl debe ser una URL válida o una imagen subida');
  if (!song.audioUrl || !isAcceptableAudioSource(song.audioUrl)) errors.push('audioUrl debe ser una URL .mp3 válida o un archivo de audio subido');
  if (!song.duracion || !/^[0-9]+:[0-5][0-9]$/.test(song.duracion)) errors.push('La duración es obligatoria y debe tener formato MM:SS');
  return errors;
}

function getSongs() {
  return _readStorage();
}

function saveSongs(songs) {
  _writeStorage(songs);
}

function findSongByCode(codigo) {
  const songs = _readStorage();
  return songs.find(s => s.codigo === codigo) || null;
}

function addSong(song) {
  const songs = _readStorage();
  const item = { ...song };
  if (!item.codigo) item.codigo = generateId();
  if (songs.some(s => s.codigo === item.codigo)) {
    throw new Error('Ya existe una canción con ese código');
  }
  const errors = validateSong(item);
  if (errors.length) {
    const err = new Error('Validación falló: ' + errors.join('; '));
    err.details = errors;
    throw err;
  }
  item.createdAt = Date.now();
  songs.push(item);
  _writeStorage(songs);
  return item;
}

function updateSong(codigo, updates) {
  const songs = _readStorage();
  const idx = songs.findIndex(s => s.codigo === codigo);
  if (idx === -1) throw new Error('Canción no encontrada');
  const updated = { ...songs[idx], ...updates, codigo };
  const errors = validateSong(updated);
  if (errors.length) {
    const err = new Error('Validación falló: ' + errors.join('; '));
    err.details = errors;
    throw err;
  }
  songs[idx] = updated;
  _writeStorage(songs);
  return updated;
}

function deleteSong(codigo) {
  const songs = _readStorage();
  const next = songs.filter(s => s.codigo !== codigo);
  if (next.length === songs.length) throw new Error('Canción no encontrada');
  _writeStorage(next);
  return true;
}

export {
  getSongs,
  saveSongs,
  findSongByCode,
  addSong,
  updateSong,
  deleteSong,
  isValidUrl,
  isMp3Url,
  isDataUrl,
  isDataAudio,
  isDataImage,
  isAcceptableAudioSource,
  isAcceptableImageSource,
  formatDuration,
  validateSong,
};
