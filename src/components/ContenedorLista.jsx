import React from 'react'
import { useMiContexto } from '../context';


function ContenedorLista() {
  const {datos}=useMiContexto();
  return (
    <div className="contenedorLista">
      {datos.map(elemento=>(
        <Caja 
        key={elemento.id}
        nombre={elemento.name}
        />
      )
        )}
    </div>
  )
}
function Caja({nombre}){
  return(
    <div className="caja">
      <p className="nombre">{nombre}</p>
    </div>
  );
}
export {ContenedorLista}