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
          <Route path='/' element={<Navigate to='/MiPokedex/home'/>} />
          <Route path='/MiPokedex' element={<Navigate to='/MiPokedex/home'/>} />
          <Route path='/MiPokedex/home' element={<Home />} />
          <Route path='/MiPokedex/pokemon' element={<Navigate to='/MiPokedex/home' />} />
          <Route path='/MiPokedex/pokemon/:nombre' element={<Pokemon/>} />
          <Route path='*' element={<p>Not Found 404</p>} />
        </Routes>
      </BrowserRouter>
    </Porvedor>
  )
}

export default App
