//? images
import logo from "/images/resources/logotipo_gekidokan.png";

const Footer = () => {
  return (
    <footer className="p-4 pt-[100px] bg-white">
      <div className="mx-auto max-w-screen-xl text-center">
        <a href="/" className="flex justify-center items-center flex-col">
          <img
            src={logo}
            alt="gekidokan"
            className="h-42 opacity-50 hover:opacity-100 transition-all"
          />
        </a>

        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()} Gekidokan S.A. Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
