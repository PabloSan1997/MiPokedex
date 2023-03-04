import React from 'react'
import cargar from "../asserts/cargar.svg";
import "../styles/cargando.css";

function Cargando() {
 return(
    <div className="cargando">
        <img src={cargar} alt="cargar" style={{width:"50px"}} className="cargar"/>
    </div>
 );
}

export { Cargando }