import React from 'react'
import { useMiContexto } from '../context';
import "../styles/cantidad.css";

function Cantidad() {
    const {setCantidad, cantidad}=useMiContexto();
    const [cambiar, setCambiar]=React.useState(cantidad);
    const sumbit = (e)=>{
        e.preventDefault();
        setCantidad(cambiar);

    }

  return (
   <form onSubmit={sumbit} className="formulario">
        <div className="entradas">
            <input 
            type="number"  
            id="entrada1" 
            placeholder='Cantidad...' 
            min="1" 
            max="1279"
            onChange={(e)=>setCambiar(e.target.value)}
            />
        </div>
        <button type='submit' className='boton'>Actualizar</button>
   </form>
  )
}

export {Cantidad}