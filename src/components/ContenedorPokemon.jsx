import React from 'react'
import "../styles/contenedorpokemon.css";
function ContenedorPokemon({imagen, altura, especie, tipo, nombre, abilidades, peso, movimientos}) {
    const abilidadesfun=()=>{
      let hola =  abilidades.map(elemento=>
            nom(elemento.ability.name)
        );
        return hola.join(', ');
    }
    const nom = (texto)=>{
        let hola = texto.split('');
        hola[0]=hola[0].toLocaleUpperCase();
        return hola.join('');
    }
const tipofun=()=>{
    let hola = tipo.map(elemento=>
        nom(elemento.type.name)
        );
    return hola.join(', ');
}
const movimientosfun=()=>{
    let hola = movimientos.map(elemento=>
        nom(elemento.move.name)
        );
        return hola.join(', ');
}

  return (
    <div className="contenedorPokemon">
        <div className="area-imagen">
            <img src={imagen} alt={nombre} className="imagen" />
        </div>
        <div className="area-descripcion">
                <div className="fila">
                    <p className="titulo">Nombre</p>
                    <p className="texto">{nom(nombre)}</p>
                </div>
                <div className="fila">
                    <p className="titulo">Tipo</p>
                    <p className="texto">{tipofun()}</p>
                </div>
                <div className="fila">
                    <p className="titulo">Especie</p>
                    <p className="texto">{nom(especie)}</p>
                </div>
                <div className="fila">
                    <p className="titulo">Abilidades</p>
                    <p className="texto">{abilidadesfun()}</p>
                </div>
                <div className="fila">
                    <p className="titulo">Altura</p>
                    <p className="texto">{altura}m</p>
                </div>
                <div className="fila">
                    <p className="titulo">Peso</p>
                    <p className="texto">{peso}Kg</p>
                </div>
            </div>
            <div className="filauno">
                    <p className="titulo">Movimientos</p>
                    <p className="texto">{movimientosfun()}</p>
                </div>
    </div>
  )
}

export {ContenedorPokemon}