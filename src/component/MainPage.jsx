import img1 from '../img/Anuat004.png'
import img2 from '../img/Camelia006.png'
import img3 from '../img/Eye-serum005.png'
import img4 from '../img/Gel-cleanser003.png'
import img5 from '../img/Ginseng008.png'
import img6 from '../img/Jabon001.png'
import ItemCount from "./ItemCount";

const MainPage = () => {

  const handleAddToCart = (quantity) => {
    alert(`Has agregado ${quantity} producto(s) al carrito`);
  };
  return (
    <>
      <main className="contenido-principal contenedor">
        <h2 className="text-center">Nuestros Productos</h2>

        <div className="listado-productos">
          <div className="producto">
            <img src={img1} alt="Imagen producto" />
            <div className="texto-producto">
              <h3>Anuat</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt maiores aperiam
              </p>
              <p className="precio">$2,000</p>
              <ItemCount stock={20} initial={1} onAdd={handleAddToCart}/>
            </div>
          </div>

          <div className="producto">
            <img src={img2} alt="Imagen producto" />
            <div className="texto-producto">
              <h3>Camelia</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt maiores aperiam
              </p>
              <p className="precio">$4,000</p>
              <ItemCount stock={20} initial={1} onAdd={handleAddToCart}/>
            </div>
          </div>

          <div className="producto">
            <img src={img3} alt="Imagen producto" />
            <div className="texto-producto">
              <h3>Eye serum</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt maiores aperiam
              </p>
              <p className="precio">$6,000</p>
              <ItemCount stock={20} initial={1} onAdd={handleAddToCart}/>
            </div>
          </div>

          <div className="producto">
            <img src={img4} alt="Imagen producto" />
            <div className="texto-producto">
              <h3>Gel cleanser</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt maiores aperiam
              </p>
              <p className="precio">$8,000</p>
              <ItemCount stock={20} initial={1} onAdd={handleAddToCart}/>
            </div>
          </div>

          <div className="producto">
            <img src={img5} alt="Imagen producto" />
            <div className="texto-producto">
              <h3>Ginseng</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt maiores aperiam
              </p>
              <p className="precio">$9,000</p>
              <ItemCount stock={20} initial={1} onAdd={handleAddToCart}/>
            </div>
          </div>

          <div className="producto">
            <img src={img6} alt="Imagen producto" />
            <div className="texto-producto">
              <h3>Jabon</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt maiores aperiam
              </p>
              <p className="precio">$10,000</p>
              <ItemCount stock={20} initial={1} onAdd={handleAddToCart}/>
            </div>
          </div>

        </div>
      </main>
    </>
  );
};

export default MainPage;
