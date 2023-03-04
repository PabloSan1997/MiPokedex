import axios from "axios";
import React from "react";
function leerGuardado(){
  if(!localStorage.cantidad){
    localStorage.cantidad=20;
  }
  return localStorage.cantidad;
}
function useApi() {
  const [cantidad, setCantidad] = React.useState(leerGuardado());
  const [datoss, setDatoss] = React.useState([]);
  const [error, setError]=React.useState(false);
  const [loading, setLoading]=React.useState(true);
  React.useEffect(() => {
    setTimeout(async () => {
      setLoading(true);
      try {
        const info = await axios(
          `https://pokeapi.co/api/v2/pokemon?limit=${cantidad}&offset=0`
        );
        const masInfo = await Promise.all(
          info.data.results.map(async (elemento) => {
            let hola = await axios(elemento.url);
            return{ ...elemento, ...hola.data};
          })
        );
        localStorage.cantidad=cantidad;
        setError(false);
        setLoading(false);
        setDatoss(masInfo);
      } catch (error) {
        setDatoss([]);
        setError(true);
        setLoading(false);
      }
    }, 100);
  }, [cantidad]);
  return { datoss, cantidad, setCantidad, error, loading, setLoading };
}
export { useApi };
