import { CotizadorProvider } from "./context/CotizadorProvider";
import Appseguro from "./components/Appseguro";
function App() {
  return (
    <CotizadorProvider>
      <Appseguro />
    </CotizadorProvider>
  );
}

export default App;
