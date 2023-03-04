import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Home } from './containers/Home'
import { Pokemon } from './containers/Pokemon';
import { Porvedor } from './context/index.jsx';
import "./styles/index.css";
import "./styles/responsiva.css";
function App() {
  return (
    <Porvedor>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/index.html/home' />} />
          <Route path='/index.html' element={<Navigate to='/index.html/home'/>} />
          <Route path='/index.html/home' element={<Home />} />
          <Route path='/index.html/pokemon' element={<Navigate to='/index.html/home' />} />
          <Route path='/index.html/pokemon/:nombre' element={<Pokemon/>} />
          <Route path='*' element={<p>Not Found 404</p>} />
        </Routes>
      </BrowserRouter>
    </Porvedor>
  )
}

export default App
