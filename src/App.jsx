import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/navbar.jsx'
import Login from './pages/Login/Login.jsx';
import Registro from './pages/Registro/Registro.jsx';
import Home from './pages/home/home';
import Aboutus from './pages/Aboutus/Aboutus.jsx';
import NotFound from './pages/notfound/notfound';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>

      <Routes>
        <Route path="/login" element={<Login />} />
        
        
        <Route path="/registro" element={<Registro />} />
        
        
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;