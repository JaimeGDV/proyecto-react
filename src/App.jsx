import Categorias from "./component/Categorias";
import { Header } from "./component/Header";
import MainPage from "./component/MainPage";
import { Navegacion } from "./component/Navegacion";
import SobreNosotros from "./component/SobreNosotros";
import Footer from "./component/Footer";

function App() {

  const handleAddToCart = (quantity) => {
    alert(`Has agregado ${quantity} producto(s) al carrito`);
  };
  return (
    <>
      <Header/>
      <Navegacion/>
      <MainPage/>
      <Categorias/>
      <SobreNosotros/>
      <Footer/> 
    </>
  )
}

export default App
