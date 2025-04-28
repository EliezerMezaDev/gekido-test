//? layouts
import Section from "../components/layouts/Section";

//? images
import senseiPortraid from "/images/resources/juan_portraid.webp";
import gekidokan from "/images/resources/gekidokan.webp";

const About = () => {
  return (
    <Section>
      <div className=" max-w-screen-xl h-auto p-8 mx-auto gap-4 lg:gap-8 lg:py-16 flex flex-col lg:flex-row">
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
            En cuanto al Kobudo, el Gekidokan integra programas del Kobudo de
            Japón y de Ryukyu. Este estilo de artes marcial con armas clasifica
            el armamento en largas y medias (como el Bo y Boken), dobles (como
            Tanbo y Tonfa) y de cadena (como el Nunchaku). El estilo basa la
            práctica y el estudio en el Kihon, el Kata y el Kumi, como pilares
            para familiarizarse con todas las armas. La idea de aprender el arte
            del Kobudo es el aprender a usar cualquier objeto, arma o
            herramienta a disposición para la auto defensa.
          </p>
        </div>
        <div className="md:max-w-[400px] flex max-md:flex-col lg:flex-col items-center md:justify-start gap-4">
          <span>
            <img src={senseiPortraid} alt="juan_portraid" />
            [Sensei Juan Simon - 2024]
          </span>
          <span>
            <img src={gekidokan} alt="gekidokan" />
            [Gekidokan - 2024]
          </span>
        </div>
      </div>
    </Section>
  );
};

export default About;
