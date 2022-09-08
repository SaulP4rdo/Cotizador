import { useState, createContext } from "react";

import {
  obtenerDiferenciaYears,
  calcularMarca,
  calcularPlan,
  formatearDinero,
} from "../helpers";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {
  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });

  const [error, setError] = useState("");
  const [resultado, setResultado] = useState(0);

  const handleChangeDatos = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const cotizarSeguro = () => {
    // Base
    let resultado = 2000;

    // Diferencia de años
    const diferencia = obtenerDiferenciaYears(datos.year);

    // hay que restar el 3%

    resultado -= ((diferencia * 3) / 100) * resultado;

    // Americano 15%
    // Europeo 30%
    // Asiatico 5%
    resultado *= calcularMarca(datos.marca);

    // plan basico 20%
    // plan completo 50
    resultado *= calcularPlan(datos.plan);

    // Formatear dinaero

    resultado = formatearDinero(resultado);

    setResultado(resultado);
  };

  return (
    <CotizadorContext.Provider
      value={{
        datos,
        handleChangeDatos,
        error,
        setError,
        cotizarSeguro,
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};

export { CotizadorProvider };

export default CotizadorContext;
