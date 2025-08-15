"use client";

import "./footer.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useLanguage } from "../../context/LanguageContext";

const translations = {
  pt: {
    address: "Avenida Brasil, 1500 Ed. New York – Sala 207, Vila Frezzarim, Americana – SP, 13465-785 – Brasil",
    services: "Serviços",
    information: "Informações",
    privacyPolicy: "Políticas de Privacidade",
    contact: "Contato",
    ourCompany: "Nossa Empresa",
    copyright: "© Todos os direitos reservados | Mova Impex",
  },
  en: {
    address: "Avenida Brasil, 1500 Ed. New York – Sala 207, Vila Frezzarim, Americana – SP, 13465-785 – Brazil",
    services: "Services",
    information: "Information",
    privacyPolicy: "Privacy Policy",
    contact: "Contact",
    ourCompany: "Our Company",
    copyright: "© All rights reserved | Mova Impex",
  },
};

export default function Footer() {
  const { locale } = useLanguage();
  const t = translations[locale];

  return (
    <footer className="footerMain">
      {/* Logo centralizada no topo */}
      <div className="logoFooterTop">
        <img
          src="/img/Logo/Mova-Impex-PNG-2-1-1.png"
          alt="Mova Impex"
          width={140}
        />
      </div>

      <div className="informationsFotter">
        <div className="contato">
          <p>
            <FaPhoneAlt /> (19) 3013-4040
            <MdEmail /> contato@movaimpex.com.br
            <FaLocationDot /> {t.address}
          </p>
        </div>

        <div className="ancorasDeNavegacao">
          <a href="/servicos">{t.services}</a>
          <a href="/informacoes">{t.information}</a>
          <a href="/politica">{t.privacyPolicy}</a>
          <a href="/contato">{t.contact}</a>
          <a href="/nossaEmpresa">{t.ourCompany}</a>
        </div>
      </div>

      <p className="copyright">
        {t.copyright}
      </p>
    </footer>
  );
}