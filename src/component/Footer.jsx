const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="grid-footer contenedor">
          <div>
            <h3>Categorias</h3>
            <nav className="footer-menu">
              <a href="#">Piel</a>
              <a href="#">Cabello</a>
            </nav>
          </div>
          <div>
            <h3>Sobre Nosotros</h3>
            <nav className="footer-menu">
              <a href="#">Nuestra Historia</a>
              <a href="#">Mision, Vision y Valores</a>
              <a href="#">Politica de privacidad</a>
              <a href="#">Terminos del Servicio</a>
            </nav>
          </div>
          <div>
            <h3>Soporte</h3>
            <nav className="footer-menu">
              <a href="#">Preguntas Frecuentes</a>
              <a href="#">Ayuda en Linea</a>
              <a href="#">Confianza y Seguridad</a>
            </nav>
          </div>
        </div>
        <p className="copyright">
          Todos los derechos Reservados, primer proyecto
        </p>
      </footer>
    </>
  );
};

export default Footer;
