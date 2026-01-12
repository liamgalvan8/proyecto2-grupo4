import { Navigate } from 'react-router-dom';
import { isAdmin } from '../utils/authStorage';

export default function ProtectedRoute({ children }) {
  if (!isAdmin()) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
