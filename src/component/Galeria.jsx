import React from "react";
import galeria_01 from "../img/Camelia006.png";
import galeria_02 from "../img/Camelia006.png";
import galeria_03 from "../img/Camelia006.png";
import galeria_04 from "../img/Camelia006.png";
import galeria_05 from "../img/Camelia006.png";
import galeria_06 from "../img/Camelia006.png";
import galeria_07 from "../img/Camelia006.png";
import galeria_08 from "../img/Camelia006.png";
import galeria_09 from "../img/Camelia006.png";
import { Link } from "react-router-dom";

const images = [
  { src: galeria_01, id: 1 },
  { src: galeria_02, id: 2 },
  { src: galeria_03, id: 3 },
  { src: galeria_04, id: 4 },
  { src: galeria_05, id: 5 },
  { src: galeria_06, id: 6 },
  { src: galeria_07, id: 7 },
  { src: galeria_08, id: 8 },
  { src: galeria_09, id: 9 },
];

export const Galeria = () => {
  return (
    <main className="contenido-principal contenedor">
      <h2 className="text-center">Galeria</h2>
      <ul className="galeria">
        {images.map((image) => (
          <li key={image.id}>
            <Link to={`/detalle/${image.id}`}>
              <img src={image.src} alt={`Imagen ${image.id}`} />
            </Link>
          </li>
        ))}
      </ul>

    </main>
  );
};
