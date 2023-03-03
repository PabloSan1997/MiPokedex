import React from 'react'
import {Cantidad} from '../components/Cantidad'
import { ContenedorLista } from '../components/ContenedorLista'
import { Header } from '../components/Header'

function Home() {
  return (
   <>
    <Header/>
    <Cantidad/>
    <ContenedorLista/>
   </>
  )
}

export {Home}