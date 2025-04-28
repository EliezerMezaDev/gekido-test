import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";

import Section from "./layouts/Section";

const socialNetworks = [
  {
    label: "@gekidokan",
    url: "https://www.instagram.com/gekidokan?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    icon: FaInstagram,
    hoverClass: "transition hover:text-[#dd2a7b]",
  },
  {
    label: "Gekidokan",
    url: "#",
    icon: FiYoutube,
    hoverClass: "transition hover:text-[#ff0033]",
  },
];

const SocialNetworks = () => {
  return (
    <Section>
      <div className="py-8 px-4 flex justify-center items-center flex-col">
        <h2 className="text-5xl tracking-tight font-extrabold text-black">
          Siguenos
        </h2>

        <ul className="flex flex-col md:flex-row">
          {socialNetworks.map((social) => (
            <li key={social.label} className="px-8 py-12">
              <a
                href={social.url}
                className={`flex justify-center items-center flex-col text-center text-lg ${social.hoverClass}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="w-20 h-20" />
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default SocialNetworks;
