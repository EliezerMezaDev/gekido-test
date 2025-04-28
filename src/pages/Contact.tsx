import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

//? common
import Section from "../components/layouts/Section";

const Contact = () => {
  return (
    <Section>
      <div className="py-8 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
          Dejanos un mensaje
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
          ¿Estas interesado en formar parte del Gekidokan? Seguinos a traves de
          nuestras redes social y dejanos un mensaje, te responderemos a la
          brevedad posible.
        </p>

        <div className="grid justify-center items-start sm:grid-cols-2 gap-4">
          <ul className="p-4 grid gap-4">
            <li>
              <a
                href="mailto: dojogekido@gmail.com"
                className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow transition-all hover:bg-red-50 hover:border-red-300 flex flex-col items-center"
              >
                <FaEnvelope className="w-8 h-8 mb-4" />
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  dojogekido@gmail.com
                </h5>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://wa.me/584143210449"
                className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow transition-all hover:bg-red-50 hover:border-red-300 flex flex-col items-center"
              >
                <FaWhatsapp className="w-8 h-8 mb-4" />

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  (+58)414-3210449
                </h5>
              </a>
            </li>
          </ul>

          <form
            action="#"
            className="p-4 space-y-4 max-w-[100vw] max-md:w-[400px]"
          >
            <div>
              <label
                htmlFor="contactForm_name"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Nombre
              </label>
              <input
                type="text"
                id="contactForm_name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="ej: Pedro Perez"
                required
              />
            </div>
            <div>
              <label
                htmlFor="contactForm_age"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Edad
              </label>
              <input
                type="text"
                id="contactForm_age"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="ej: 12 años"
                required
              />
            </div>
            <div>
              <label
                htmlFor="contactForm_phone"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Telefono
              </label>
              <input
                type="text"
                id="contactForm_phone"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                placeholder="ej: 04122356677"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="contactForm_message"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Mensaje
              </label>
              <textarea
                id="contactForm_message"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 resize-none"
                placeholder="ej: Hola, me gustaria conocer los horarios de las clases de Karate"
              ></textarea>
            </div>

            <button
              className="px-6 py-2 rounded-lg
          font-medium bg-red-200 border border-red-300 hover:bg-red-300 transition-all"
              type="submit"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
