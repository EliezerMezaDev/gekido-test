import { Link } from "react-router-dom";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

//? layouts
import Section from "./layouts/Section";

const ContactUs = () => {
  return (
    <Section>
      <div className="py-8 px-4 flex justify-center items-center flex-col">
        <h2 className="text-5xl mb-8 tracking-tight font-extrabold text-black">
          Contactanos
        </h2>

        <ul className="grid gap-4">
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
              href="https://wa.me/584143210449"
              target="_blank"
              rel="noopener noreferrer"
              className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow transition-all hover:bg-red-50 hover:border-red-300 flex flex-col items-center"
            >
              <FaWhatsapp className="w-8 h-8 mb-4" />
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                (+58)414-321-0449
              </h5>
            </a>
          </li>

          <p className="mb-2 font-light text-gray-700 text-lg text-center">
            <Link
              to="/contacto"
              className="font-medium text-red-300 hover:text-red-500 hover:underline"
            >
              O dejanos un mensaje...
            </Link>
          </p>
        </ul>
      </div>
    </Section>
  );
};

export default ContactUs;
