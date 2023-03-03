import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useMiContexto } from '../context';
import "../styles/header2.css";
function Header2({nombre}) {
    const nombreBien=()=> nombre.toLocaleUpperCase();
    const {setBuscado}=useMiContexto();
    const navegar=useNavigate();
    const accion =()=>{
        setBuscado('');
        navegar('/home');
    }
  return (
    <header>
        <button className='boton' onClick={accion}>Regresar</button>
        <h1 className='tiTexto'>{nombreBien()}</h1>
    </header>
  )
}

export {Header2}