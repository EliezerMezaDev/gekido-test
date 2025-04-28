import { Link } from "react-router-dom";

//? common
import Section from "../components/layouts/Section";

const NotFound = () => {
  return (
    <Section>
      <div className="text-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">Página no encontrada</p>
          <Link to="/" className="text-red-500 hover:text-red-700 font-medium">
            Volver al inicio
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default NotFound;
