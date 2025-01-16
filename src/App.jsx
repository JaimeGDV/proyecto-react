import Categorias from "./component/Categorias";
import { Header } from "./component/Header";
import MainPage from "./component/MainPage";
import { Navegacion } from "./component/Navegacion";
import { Detalle } from "./component/Detalle";
import SobreNosotros from "./component/SobreNosotros";
import { Galeria } from "./component/Galeria";
import Footer from "./component/Footer";
import { 
  BrowserRouter, 
  Route, 
  Routes,
 } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Navegacion/>
        <Routes>
          <Route path='/' element={<Categorias/>} />
          <Route path="/mainPage" element={<MainPage />} />
          <Route path='/Categorias' element={<Categorias/>} />
          <Route path='/SobreNosotros' element={<SobreNosotros/>} />
          <Route path='/Galeria' element={<Galeria/>} />
          <Route path="/detalle/:id" element={<Detalle />} />
          <Route path="*" element={<h1>Error 404: Ruta no encontrada</h1>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
