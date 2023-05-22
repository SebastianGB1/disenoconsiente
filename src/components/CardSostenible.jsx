import { useContext } from "react";
import { Context } from "../context/context";
import img_sostenible from "../static/images/img_sostenible.png";
import firma_renato from "../static/images/firma_renato.png";
import leer_mas from '../static/images/leer_mas.png'

export default function PrensaCard() {
  const { setShowModal, setModalContent } = useContext(Context);

  const handleClick = () => {
    setShowModal(true);
    setModalContent({
      tittle: "Prueba",
      body: 'Se supone que aca va descripcion mas larga del articulo. El boton "Ver mas" reenvia a google por ahora',
    });
  };

  return (
    <div>
      <div class="flex flex-col items-center bg-white rounded-3xl max-w-sm shadow-2xl md:flex-row md:max-w-5xl mx-5 p-5 mb-16">
        <div className="md:basis-105">
        <img
          className="w-100"
          src={img_sostenible}
          alt="Telas pet"
        />
        <img
          className="object-cover md:h-auto w-3/4 mt-5"
          src={firma_renato}
          alt="Telas pet"
        />
        </div>
        <div className="flex flex-col justify-start p-4 text-left">
          <h1 class="mb-2 text-md font-raleway font-bold text-rosado">
          Diseño sostenible en Medellín: Una guía para diseñadores emergentes comprometidos y REsponsables
          </h1>
          <p class="mb-3 font-raleway text-justify leading-8 lg:w-97">
          Tanto la sostenibilidad como el diseño sostenible se ha convertido en un tema cada vez más importante en la industria del diseño. A medida que la conciencia sobre el impacto ambiental y social de nuestras acciones, los diseñadores tienen la responsabilidad de adoptar prácticas más sostenibles en su trabajo. En este artículo, discutiremos cómo los diseñadores emergentes pueden comenzar a diseñar de manera más consciente en Medellín, Colombia. También hablaremos sobre la importancia de ser fiel a la ética y a las inclinaciones personales como diseñador a la hora de crear. Al seguir estas pautas, los diseñadores emergentes pueden ser parte de una comunidad de diseñadores que trabaja para proteger nuestro planeta, mientras se adaptan a los desafíos que presenta la creciente demanda de productos sostenibles.
          </p>
          <button>
            <img src={leer_mas} alt="leer_mas" className="float-right w-44" />
          </button>
        </div>
      </div>
    </div>
  );
}
