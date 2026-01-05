import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login.jsx';
import Registro from './components/Registro/Registro.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Esta ruta "/" siempre mostrará el Login al principio */}
        <Route path="/" element={<Login />} />
        
        {/* Esta ruta "/registro" es la que queremos ver ahora */}
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;