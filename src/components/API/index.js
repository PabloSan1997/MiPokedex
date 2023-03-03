import axios from "axios";
import React from "react";

function useApi() {
  const [cantidad, setCantidad] = React.useState(20);
  const [datoss, setDatoss] = React.useState([]);
  React.useEffect(() => {
    setTimeout(async () => {
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
        setDatoss(masInfo);
      } catch (error) {
        setDatoss([]);
      }
    }, 100);
  }, [cantidad]);
  return { datoss, cantidad, setCantidad };
}
export { useApi };
