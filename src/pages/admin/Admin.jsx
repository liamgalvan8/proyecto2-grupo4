import React from 'react';
import './admin.css';
import SongsTable from '../../components/admin/SongsTable';
import SongModal from '../../components/admin/SongModal';
import { useState } from 'react';

export default function Admin() {
    const [modalOpen, setModalOpen] = useState(false);
    const [editingSong, setEditingSong] = useState(null);
    const [modalKey, setModalKey] = useState(0);

    const openCreate = () => { setEditingSong(null); setModalKey(Date.now()); setModalOpen(true); };
    const openEdit = (song) => { setEditingSong(song); setModalKey(Date.now()); setModalOpen(true); };

    return (
        <main className="admin-bg">
            <div className="card-admin">
                <h1>Panel de Administrador</h1>
                <p>Aquí estará la tabla de canciones (CRUD). Por ahora la vista es pública para poder validar la interfaz.</p>

                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 8 }}>
                    <button className="btn btn-save" onClick={openCreate}>Crear canción</button>
                </div>

                <SongsTable onEdit={openEdit} />

                <SongModal key={modalKey} isOpen={modalOpen} onClose={() => setModalOpen(false)} song={editingSong} />
            </div>
        </main>
    );
}
