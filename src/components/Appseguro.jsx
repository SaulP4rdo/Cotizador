import Formulario from "./Formulario";
import useCotizador from "../hooks/useCotizador";

const Appseguro = () => {
  return (
    <>
      <header className="m-10">
        <h1 className="text-white text-center text-4xl font-black">
          Cotizador de seguros de auto
        </h1>
      </header>

      <main className="bg-white md:w-2/3 lg:w1/2 mx-auto shadow rounded-lg p-10">
        <Formulario />
      </main>
    </>
  );
};

export default Appseguro;
