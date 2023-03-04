import React from 'react'
import { Buscador } from '../components/Buscador'
import {Cantidad} from '../components/Cantidad'
import { ContenedorLista } from '../components/ContenedorLista'
import { Header } from '../components/Header'
import { useMiContexto } from '../context'

function Home() {
  const {error, loading}= useMiContexto();
  
  return (
   <>
    <Header/>
    <div className="areaentradas">
    <Buscador/>
    <Cantidad/>
    </div>
    {!loading ? (!error?<ContenedorLista/>:<p className='error'>Error al cargar los pokemons</p>):
    <p className='error'>Cargando...</p>
    }

   </>
  )
}

export {Home}