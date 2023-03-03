import React from 'react'
import { useMiContexto } from '../context';
import "../styles/buscador.css";
function Buscador() {
  const {setBuscado}=useMiContexto();
  const [buscando, setBuscando]=React.useState('');
  const generar =()=>{
    setBuscado(buscando);
  }
  return (
   <div className="buscador">
    <input 
    type="text" 
    className="buscar" 
    placeholder='Buscar...'
    value={buscando}
    onChange={(event)=>setBuscando(event.target.value)}
    />
    <button className="buscar" onClick={generar}>Buscar</button>
   </div>
  )
}

export {Buscador}