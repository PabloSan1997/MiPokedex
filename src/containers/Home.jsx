import React from 'react'
import { Buscador } from '../components/Buscador'
import {Cantidad} from '../components/Cantidad'
import { ContenedorLista } from '../components/ContenedorLista'
import { Header } from '../components/Header'

function Home() {
  return (
   <>
    <Header/>
    <div className="areaentradas">
    <Buscador/>
    <Cantidad/>
    </div>
    <ContenedorLista/>
   </>
  )
}

export {Home}