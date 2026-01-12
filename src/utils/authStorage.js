const CURRENT_USER_KEY = 'currentUser';
const ADMIN_EMAIL = 'admin@rollingmusic.com';

export function login(usuario) {
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(usuario));
}

export function logout() {
  localStorage.removeItem(CURRENT_USER_KEY);
}

export function getCurrentUser() {
  const raw = localStorage.getItem(CURRENT_USER_KEY);
  return raw ? JSON.parse(raw) : null;
}

export function isAuthenticated() {
  return getCurrentUser() !== null;
}

export function isAdmin() {
  const user = getCurrentUser();
  return user && user.email === ADMIN_EMAIL;
}
