import { Link } from "react-router-dom";

//? layouts
import Section from "./layouts/Section";

//? images
import senseiPortraid from "/images/resources/juan_portraid.webp";

const AboutUs = () => {
  return (
    <Section>
      <div className="max-w-screen-xl min-h-fit p-8 mx-auto gap-4 lg:gap-8 lg:py-16 flex flex-col lg:flex-row">
        <div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            Acerca de nosotros
          </h1>

          <p className="mb-2 font-light text-gray-700 text-lg">
            El Gekidokan es una <strong>academia de artes marciales</strong>,
            las cuales basan sus enseñanzas en <i> Karate tradicional </i> y en
            el <i>Kobudo.</i>
          </p>

          <p className="mb-2 font-light text-gray-700 text-lg">
            El Karate del Gekidokan integra elementos de varios estilos de
            karate, principalmente de <i>Shito-Ryu y Shorin-Ryu.</i> En este
            estilo se incentiva a los alumnos a estudiar Kihon, Kata, Bunkai y
            Kumite de forma práctica y lógica. Este estilo tiene como objetivo
            el preparar a sus practicantes en Budokas (practicantes del camino
            marcial), expertos en artes marciales practicas y esenciales para la
            autodefensa, así como también en preparar personas valientes y
            disciplinadas. La doctrina del Karate en el Gekidokan nace de la
            necesidad de buscar mantener la marcialidad del Karate, manteniendo
            sus tradición de forma lógica y practica.
          </p>
          <p className="mb-2 font-light text-gray-700 text-lg">
            En cuanto al Kobudo,{" "}
            <Link
              to="/nosotros"
              className="font-medium text- dark:text-red-500 hover:underline"
            >
              Ver mas...
            </Link>
          </p>
        </div>
        <div className="md:max-w-[400px] flex flex-col items-center md:justify-start">
          <span>
            <img src={senseiPortraid} alt="juan_portraid" />
            [Sensei Juan Simon - 2024]
          </span>
        </div>
      </div>
    </Section>
  );
};

export default AboutUs;
