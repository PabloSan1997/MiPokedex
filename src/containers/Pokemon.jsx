import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { Cargando } from '../components/Cargando';
import { ContenedorPokemon } from '../components/ContenedorPokemon';
import { Header2 } from '../components/Header2';
import { useMiContexto } from '../context';

function Pokemon() {
    const { nombre } = useParams();
    const { datoss, error, loading } = useMiContexto();
    if (datoss.length == 0) {
        return <>
            <Header2 nombre={nombre} />
            {loading ? (<>
                <div className="mira">
                    <p className='error'>Cargando</p>
                    <Cargando />
                </div>
            </>) : (<>
                {error && <p>Error al conectar con el servidor</p>}
            </>)}
        </>
    } else {
        const dato = datoss.find(elemento => elemento.name === nombre);
        return (
            <>
                {!!dato ? (
                    <>
                        <Header2 nombre={dato.name} />
                        <ContenedorPokemon
                            imagen={dato.sprites.other.home.front_default}
                            altura={dato.height / 10}
                            abilidades={dato.abilities}
                            movimientos={dato.moves}
                            especie={dato.species.name}
                            tipo={dato.types}
                            nombre={dato.name}
                            peso={dato.weight}
                        />
                    </>
                ) : <Navigate to="/index.html/home" />}
            </>
        )
    }

}

export { Pokemon }