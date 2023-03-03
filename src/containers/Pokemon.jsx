import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { Header2 } from '../components/Header2';
import { useMiContexto } from '../context';

function Pokemon() {
    const {nombre}=useParams();
    const {datos} = useMiContexto();
    const dato = datos.find(elemento=>elemento.name===nombre);
    if(!dato){
        return <Navigate to="/home"/>
    }else{
        return (
            <>
            <Header2 nombre={dato.name}/>
            <img src={dato.sprites.other.home.front_default} alt="" className="imagen" />
            </>
          )
    }
 
}

export {Pokemon}