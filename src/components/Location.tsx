//? layouts
import Section from "./layouts/Section";

const Location = () => {
  return (
    <Section wrapperClass="w-full min-h-screen">
      <h2 className="text-5xl mb-4 tracking-tight font-extrabold text-black text-center">
        Ubicanos
      </h2>

      <div className="px-4 text-center">
        <h2 className="text-lg mb-4 tracking-tight text-black">
          Av. Juan Bautista Arismendi con Calle Lindo y Bello, diagonal al Liceo
          Francisco Antonio Rísquez, La Asunción.
        </h2>
      </div>

      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.1914993660457!2d-63.8587708!3d11.024254399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c318f0077508737%3A0xdf23dc6f2f529231!2sGekidokan!5e0!3m2!1ses!2sve!4v1741960869693!5m2!1ses!2sve"
          className="w-full h-[400px] z-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de Gekido"
        />
      </div>
    </Section>
  );
};

export default Location;
