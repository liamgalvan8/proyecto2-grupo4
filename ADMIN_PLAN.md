# Plan del MVP — Página de Administrador (ABM de canciones) ✅

Última actualización: 2026-01-09

---

## 🎯 Objetivo
Crear la página `/admin` accesible sólo por administradores que permita **Crear / Leer / Actualizar / Borrar (CRUD)** canciones. 
- Persistencia: `localStorage` (clave `songs`).
- Formato audio: **MP3** (solo extensión `.mp3`).
- IDs: generar automáticamente con `uuid` y validar que no haya duplicados.
- Duración: detectar desde elemento `Audio` en frontend; si no se puede detectar, bloquear el guardado y mostrar error.
- UI: **tabla** (mobile-first) + **modal** para crear/editar. No imágenes en la tabla; preview audio por fila.

---

## 🧾 Modelo de datos (por canción)
```json
{
  "codigo": "uuid-v4",
  "titulo": "string",
  "artista": "string",
  "categoria": "string",
  "imagenUrl": "string (url)",
  "audioUrl": "string (url .mp3)",
  "duracion": "string (MM:SS)",
  "createdAt": "timestamp"
}
```
- Campos obligatorios: `titulo, artista, categoria, imagenUrl, audioUrl, duracion, codigo`.
- No se permite editar `codigo` (readonly).
- No hay múltiples artistas por ahora.

---

## 🔐 Acceso y seed de admin (temporariamente sin protección)
- Por ahora la **ruta `/admin` será pública** (sin guard ni restricción) para que el equipo pueda validar la vista. No se implementará autenticación en esta fase.
- El *seed* de admin y la protección de la ruta se posponen para una fase posterior si se requiere; hay una tarea pendiente para implementarlos más adelante.
- En esta Fase 1 se mostrará el enlace a `/admin` en el `NavBar` para todos los usuarios (visible públicamente).

---

## ✅ Reglas de validación
- `audioUrl` debe terminar en `.mp3` y ser una URL válida.
- `imagenUrl` debe ser una URL válida (no se comprueba que la imagen exista para evitar issues CORS).
- Para detectar la duración, se cargará el `Audio` y se leerá `duration`. Si la duración no se obtiene (NaN/0), se mostrará error y se bloqueará el guardado.
- Antes de guardar una canción nueva se comprueba que no exista otra con el mismo `codigo`.

---

## 🧭 UI / UX — Comportamiento
- Página `/admin` mostrará:
  - Buscador en vivo (filtra por `titulo` o `artista`).
  - Tabla mobile-first con columnas: `Código | Título | Artista | Categoría | Duración | Preview | Acciones`.
  - Botones por fila: `Editar` (abre modal), `Borrar` (abre confirmación).
  - Modal Crear/Editar con los campos obligatorios mencionados.
  - Mini-player por fila para preview (elemento `<audio>` simple).
  - Feedback por `toasts` (éxito / error). Posición por defecto: arriba-derecha.
  - Confirmación modal antes de eliminar.

---

## 🛠️ Archivos a crear / modificar
- Crear:
  - `src/pages/admin/Admin.jsx` (componente principal de la página admin) — **COMPLETADO**
  - `src/components/admin/SongsTable.jsx` (tabla + buscador + preview) — pendiente
  - `src/components/admin/SongModal.jsx` (modal crear/editar) — pendiente
  - `src/utils/songsStorage.js` (getSongs, saveSongs, addSong, updateSong, deleteSong) — **COMPLETADO**
  - `src/utils/auth.js` (helpers auth: seedAdmin, getCurrentUser, isAdmin) — postergado
  - `src/components/ui/Toast.jsx` y `src/components/ui/ConfirmModal.jsx` (pequeños componentes UI) — pendientes
  - `src/pages/admin/admin.css` (estilos mobile-first, seguir paleta existente) — **COMPLETADO**
- Modificar:
  - `src/pages/Login/Login.jsx` → (no se realizan cambios de autenticación en esta fase)
  - `src/App.jsx` → ruta `/admin` añadida — **COMPLETADO**
  - `src/components/Navbar/navbar.jsx` → link `/admin` actualizado — **COMPLETADO**

---

## 🗂️ Fases y tareas (detallado)

### Fase 1 — Crear la vista `/admin` pública y navegación (Estado: completado)
- [x] Crear `src/pages/admin/Admin.jsx` (componente de la página admin pública).
- [x] Agregar ruta `/admin` en `App.jsx` apuntando a la página creada (sin guard de autenticación).
- [x] Mostrar enlace `/admin` en `NavBar` visible para todos los usuarios (temporalmente).

**Criterio de aceptación:** la página `/admin` es accesible públicamente y el enlace está visible en el `NavBar`. Implementación verificada manualmente.

**Tareas de mantenimiento derivadas de la auditoría (prioridad alta)**
- Estas correcciones son pequeñas y recomendables de aplicar antes de avanzar con la Fase 5 (toasts/confirm modal):
  - [x] Corregir import de `Aboutus` en `src/App.jsx` para usar la ruta y capitalización correctas (`./pages/aboutus/aboutus.jsx`).
  - [x] Corregir import de `Link` en `src/pages/notfound/notfound.jsx` para usar `react-router-dom` en vez de `react-router`.
  - [x] Cambiar `navigate('/')` en `src/pages/Registro/Registro.jsx` por `navigate('/login')` para evitar redirecciones a NotFound tras registro.
  - [x] Revisar y documentar `src/components/modal.jsx` que actualmente no se utiliza (archivo reemplazado con nota `REMOVED`).
  - [x] Resolver advertencias de ESLint y limpieza de código en `src/components/admin/SongModal.jsx` (evitar setState síncrono dentro de efectos).

> Nota: estos ítems se agregan aquí (Fase 1) porque son correcciones de infraestructura y de rutas que mejoran la estabilidad antes de continuar con la UI de toasts/confirmaciones.

---

### Fase 2 — Persistencia y utilidades (Estado: completado)
- [x] Implementar `songsStorage.js` con las funciones necesarias y comprobación de duplicados por `codigo`.

**Criterio de aceptación:** las utilidades funcionan y persisten en `localStorage` con la clave `songs`. Archivo implementado: `src/utils/songsStorage.js`.

---

### Fase 3 — Tabla y búsqueda (Estado: completado)
- [x] Implementar `SongsTable` con búsqueda en vivo y mini-player por fila.

**Criterio de aceptación:** la tabla muestra `songs` desde `localStorage`, se puede buscar en vivo por título/artista y reproducir previews. Archivo implementado: `src/components/admin/SongsTable.jsx`.

---

### Fase 4 — Modal Crear/Editar (Estado: completado)
- [x] Implementar `SongModal`: validaciones, generación `codigo` (si no viene), auto-detección de `duracion` con `Audio` y bloqueo si no detecta.

**Criterio de aceptación:** crear/editar guardan correctamente las canciones en `localStorage` y no permiten duplicados por `codigo`. Archivos implementados: `src/components/admin/SongModal.jsx`, `src/components/admin/songModal.css`.

---

### Fase 5 — Feedback y confirmación
- [ ] Implementar `Toast` y `ConfirmModal`.

**Criterio de aceptación:** acciones muestran toasts; borrar pide confirmación.

---

### Fase 6 — Estilos y ajustes finales
- [ ] Estilos mobile-first en `admin.css` y ajustes visuales para coherencia con la app.

**Criterio de aceptación:** interfaz usable en móvil y escritorio, respeta paleta y tipografías existentes.

---

### Fase 7 — Documentación y tareas pendientes (postergado)
- [ ] Tests unitarios para `songsStorage` y validaciones (URL, formato) — *postergado*.
- [ ] Documentación en `README.md` sobre cómo usar la página admin y credenciales seed — *postergado*.

**Criterio de aceptación:** estas tareas se completarán al final del proyecto si el alcance lo requiere.

---

## 📋 Criterios de aceptación globales
- La ruta `/admin` está **temporalmente pública** para validación (la protección por roles se implementará en una fase posterior si es necesario).
- CRUD completo (crear, editar, borrar) con persistencia en `localStorage`.
- Sólo `.mp3` permitido; duración detectada por frontend; se bloquea guardado si no hay duración.
- No se muestran imágenes en la tabla; preview de audio disponible por fila.
- UX: toasts, confirm-delete, búsqueda en vivo.

---

## 📝 Notas y decisiones tomadas
- No se ha incluido import/export, undo ni reordenado (decisión ya tomada).
- No se hace backend por el scope del proyecto (todo en frontend con `localStorage`).
- No se permitirá edición manual de la duración (readonly rellenado por auto-detección).
- Se usará `uuid` para `codigo`.

---

## 🔧 Cómo modificar este plan
Si decidimos cambiar alcance o comportamientos, editar este archivo `ADMIN_PLAN.md` y añadir un registro de cambios en la sección siguiente: 
- Añadir la fecha y el cambio propuesto.

---

## 📌 Próximo paso recomendado
- Aplicar las **Tareas de mantenimiento críticas** listadas en Fase 1 (imports, redirect en `Registro.jsx`, eliminar `modal.jsx`). Una vez aplicadas y verificadas, continuar con **Fase 5** — implementar toasts y `ConfirmModal` (reemplazar `alert()` y `confirm()` por componentes UI).

---

Si querés, lo implemento ahora mismo (Fase 1) y lo subo en un commit con descripción clara. ¿Comienzo? 🚀