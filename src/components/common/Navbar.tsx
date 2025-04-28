import { Link } from "react-router-dom";

import logotipo from "/images/resources/logotipo_gekidokan_lateral.webp";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-b-black/10 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            <img src={logotipo} alt="gekidokan" className="h-14" />
          </Link>

          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-red-500">
              Inicio
            </Link>
            <Link to="/nosotros" className="text-gray-600 hover:text-red-500">
              Nosotros
            </Link>
            <Link to="/contacto" className="text-gray-600 hover:text-red-500">
              Contacto
            </Link>
            <Link to="/blog" className="text-gray-600 hover:text-red-500">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
