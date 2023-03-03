import React from 'react'
import { useMiContexto } from '../context';
import "../styles/contenedorLista.css";

function ContenedorLista() {
  const {datos}=useMiContexto();
  return (
    <div className="contenedorLista">
      {datos.map(elemento=>(
        <Caja 
        key={elemento.id}
        nombre={elemento.name}
        imagen={elemento.sprites.front_default}
        />
      )
        )}
    </div>
  )
}

function Caja({nombre, imagen}){
const nombreBien=()=>{
  let elnombre = nombre.split('');
  elnombre[0]=elnombre[0].toLocaleUpperCase();
  return elnombre.join('');
}
  return(
    <div className="caja">
      <img src={imagen} alt="" className="imagen" />
      <p className="nombre">{nombreBien()}</p>
    </div>
  );
}
export {ContenedorLista}