
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/home/home'
import Aboutus from './pages/aboutus/aboutus'
import Login from './components/Login/Login.jsx'
import NotFound from './pages/notfound/notfound'

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/aboutus" element={<Aboutus/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  )

}

export default App
