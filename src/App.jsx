import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Home } from './containers/Home'
import { Porvedor } from './context/index.jsx';
import "./styles/index.css";

function App() {
  return (
    <Porvedor>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/pokemon' element={<div>pokemon</div>} />
          <Route path='*' element={<p>Not Found 404</p>} />
        </Routes>
      </BrowserRouter>
    </Porvedor>
  )
}

export default App
