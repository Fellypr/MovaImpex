"use client";

import "./footer.css";
import { IoLogoWhatsapp } from "react-icons/io5";
import { useLanguage } from "../../context/LanguageContext";
import { TfiEmail } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";

const translations = {
  pt: {
    address:
      "Avenida Brasil, 1500 Ed. New York – Sala 207, Vila Frezzarim, Americana – SP, 13465-785 – Brasil",
    services: "Serviços",
    information: "Informações",
    privacyPolicy: "Políticas de Privacidade",
    contact: "Contato",
    contactTitle: "CONTATO",
    ourCompany: "Nossa Empresa",
    copyright: "© Todos os direitos reservados | Mova Impex",
    whereWeAre: "Onde Estamos",
    navegue: "NAVEGUE",
    home: "Home",
  },
  en: {
    navegue: "BROWSE",
    address:
      "Avenida Brasil, 1500 Ed. New York – Sala 207, Vila Frezzarim, Americana – SP, 13465-785 – Brazil",
    services: "Services",
    information: "Information",
    privacyPolicy: "Privacy Policy",
    contact: "Contact",
    contactTitle: "CONTACT",
    ourCompany: "Our Company",
    copyright: "© All rights reserved | Mova Impex",
    whereWeAre: "Where We Are",
  },
};

export default function Footer() {
  const { locale } = useLanguage();
  const t = translations[locale];

  return (
    <>
      <div className="footerPrincipal">
        <footer className="footerMain">
          <div className="footer">
            <div className="logoFooterTop">
              <img
                src="/img/Logo/Mova-Impex-PNG-2-1-1.png"
                alt="Mova Impex"
                width={140}
              />
            </div>

            <div className="ancorasDeNavegacaoMain">
              <div className="ancorasDeNavegacao">
                <p className="navegueTitle">{t.navegue}</p>
                <ul>
                  <li>
                    <Link href="/">{t.home}</Link>
                  </li>
                  <li>
                    <Link href="/nossaEmpresa">{t.ourCompany}</Link>
                  </li>
                  <li>
                    <Link href="/servicos">{t.services}</Link>
                  </li>
                  <li>
                    <Link href="/informacoes">{t.information}</Link>
                  </li>
                  <li>
                    <Link href="/politica">{t.privacyPolicy}</Link>
                  </li>
                </ul>
              </div>

              <div className="contato">
                <p className="contatoTitle">{t.contactTitle}</p>
                <ul>
                  <li>
                    <IoLogoWhatsapp className="iconfote" />
                    <p>(19) 3013-4040</p>
                  </li>
                  <li>
                    <TfiEmail className="iconfote" />
                    <p>contato@movaimpex.com.br</p>
                  </li>
                  <li className="address">
                    <div className="iconAddress">
                      <CiLocationOn className="iconfote" />
                    </div>
                    <p>{t.address}</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mapaFooter">
              <p className="mapaTitle">{t.whereWeAre}</p>
              <div className="mapaFoteer">
                <p className="mapaTitle">{t.locationTitle}</p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.312752922606!2d-47.354208225406126!3d-22.753771832418977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c89bd854865baf%3A0xf6b36cd929c692ee!2sAmerican%20Square%20-%20Torre%20New%20York!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                  style={{ border: 0, borderRadius: "8px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="mapaContainerFotter"
                ></iframe>
              </div>
            </div>
          </div>
        </footer>
        <p className="copyright">{t.copyright}</p>
      </div>
    </>
  );
}
