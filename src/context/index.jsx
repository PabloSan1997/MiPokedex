import React from 'react'
import { useApi } from '../components/API';
const Contexto = React.createContext();

function Porvedor ({children}){
    const {datos, cantidad, setCantidad}=useApi();
    let total = datos.length;
   return( <Contexto.Provider
    value={{
        total,
        cantidad,
        setCantidad,
        datos
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