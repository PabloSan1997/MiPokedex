import React from 'react'
import { useMiContexto } from '../context';

function Cantidad() {
    const {setCantidad, cantidad}=useMiContexto();
    const [cambiar, setCambiar]=React.useState(cantidad);
    const sumbit = (e)=>{
        e.preventDefault();
        setCantidad(cambiar);

    }

  return (
   <form onSubmit={sumbit}>
        <div className="entradas">
            <label htmlFor="#entrada1">{"Cantidad de pokemons (maximo: )"}</label>
            <input 
            type="number"  
            id="entrada1" 
            placeholder='Cantidad...' 
            min="0" 
            max="1279"
            onChange={(e)=>setCambiar(e.target.value)}
            />
        </div>
        <button type='submit'>Actualizar</button>
   </form>
  )
}

export {Cantidad}