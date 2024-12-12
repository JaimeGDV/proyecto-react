
import img1 from '../img/Anuat004.png'
import img2 from '../img/Anuat004.png'
import img3 from '../img/Anuat004.png'

const Categorias = () => {

  return (
    <>
      <section className="contenedor categorias">
        <h2 className="text-center">Categorias de cuidado</h2>

        <div className="listado-categorias">
          <div className="categorias">
            <img src={img1} alt="Imagen Categoria" />
            <a href="#">Piel</a>
          </div>

          <div className="categorias">
            <img src={img2} alt="Imagen Categoria" />
            <a href="#">Cabello</a>
          </div>

          <div className="categorias">
            <img src={img3} alt="Imagen Categoria" />
            <a href="#">Rostro</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categorias;
