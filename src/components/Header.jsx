import React from 'react'
import Logo from "../asserts/logo.svg"
import { useMiContexto } from '../context';
import "../styles/header.css";
function Header() {
    const {total}=useMiContexto();
  return (
    <header>
        <h1><img src={Logo} alt="Logo"/><p>Mi Pokedex</p></h1>
        <p className='registro'>Total de pokemons registrados: {total}</p>
    </header>
  )
}

export {Header}