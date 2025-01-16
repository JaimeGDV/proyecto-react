import { Link } from "react-router-dom";

export const Navegacion = () => {
  return (
    <>
      <div className="contenedor-navegacion">
        <nav className="nav-principal contenedor">
          <Link to="/">Inicio</Link>
          <Link to="/SobreNosotros">Nosotros</Link>
          <Link to="/Categorias">Categorias</Link>
          <Link to="/Blog">Blog</Link>
          <Link to="/Galeria">Galeria</Link>
          <Link to="/Contacto">Contacto</Link>
        </nav>
      </div>
    </>
  );
};
