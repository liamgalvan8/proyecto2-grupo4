const adminUser = {
  nombre: 'Admin',
  apellido: 'Sistema',
  telefono: '000000000',
  fechaNacimiento: '1990-01-01',
  email: 'admin@rollingmusic.com',
  password: 'Admin123!',
  rol: 'admin'
};

export function seedAdminIfNeeded() {
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  const exists = usuarios.find(u => u.email === adminUser.email);
  
  if (!exists) {
    usuarios.push(adminUser);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    console.log('✅ Usuario admin creado');
  }
}
