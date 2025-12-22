
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/home/home'
import Aboutus from './pages/aboutus/aboutus'

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/aboutus" element={<Aboutus/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
