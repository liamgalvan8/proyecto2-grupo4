import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/navbar.jsx'
import Login from './pages/Login/Login.jsx';
import Registro from './pages/Registro/Registro.jsx';
import Home from './pages/home/home';
import Aboutus from './pages/aboutus/aboutus.jsx';
import NotFound from './pages/notfound/notfound';
import Admin from './pages/admin/Admin.jsx';
import Footer from './components/footer/footer.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';


import Detail from './pages/detail/detail.jsx'; 

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        
        <Route path="/detalle/:id" element={<Detail />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;