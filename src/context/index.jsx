import React from 'react'
import { useApi } from '../components/API';
const Contexto = React.createContext();

function Porvedor ({children}){
    const {datoss, cantidad, setCantidad}=useApi();
    const [buscado, setBuscado]=React.useState('');
    let datos=datoss;
    let total = datos.length;
    if(buscado===''){
        datos=datoss;
    }else{
        let nuevodatos = datoss;
        datos=nuevodatos.filter(
            elemento=>{
                let nombre = elemento.name.toLocaleUpperCase();
                let buscar = buscado.toLocaleUpperCase();
                return nombre.includes(buscar);
            }
        );
    }
   return( <Contexto.Provider
    value={{
        total,
        cantidad,
        setCantidad,
        datos,
        setBuscado
    }}
    >
        {children}
    </Contexto.Provider>)
}

function useMiContexto(){
    const auth = React.useContext(Contexto);
    return auth;
}

export{Porvedor, useMiContexto}