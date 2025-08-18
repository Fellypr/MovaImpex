"use client";

import "./contato.css";
import "../../components/navbar/Navbar.css";
import Navbar from "@/components/navbar/Navbar";
import { CiPhone } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import Footer from "@/components/footer/footer";
import { useLanguage } from "../../context/LanguageContext";

const translations = {
  pt: {
    titleTelefone: "Telefone",
    titleEmail : "E-mail",
    titleEndereco : "Endereço",
    titledehours : "Horário de Atendimento",
    contactTitle: "Fale Conosco",
    address: "Avenida Brasil, 1500 Ed. New York – Sala 207, Vila Frezzarim, Americana – SP, 13465-785 – Brasil",
    openingHours: "De Segunda à sexta-feira, das 8:00h às 17:00h",
    locationTitle: "Onde Estamos Localizados",
  },
  en: {
    titleTelefone: "Telephone",
    titleEmail : "E-mail",
    titleEndereco : "Address",
    titledehours : "Opening Hours",
    contactTitle: "Contact",
    address: "Avenida Brasil, 1500 Ed. New York – Sala 207, Vila Frezzarim, Americana – SP, 13465-785 – Brazil",
    openingHours: "Monday to Friday, from 8:00 to 17:00",
    locationTitle: "Where We Are Located",
  },
};

export default function Contato() {
  const { locale } = useLanguage();
  const t = translations[locale];

  return (
    <>
      <Navbar />
      <div className="contatoMain">
        <div className="contatoSection">
          <h1 className="contatoTitlePageMain">{t.contactTitle}</h1>

          <div className="contatoContainer">
            <div className="contatoItem">
              <CiPhone className="contatoIcon" />
              <p>{t.titleTelefone}:</p>
              <p>(19) 3013-4040</p>
            </div>

            <div className="contatoItem">
              <TfiEmail className="contatoIcon" />
              <p>{t.titleEmail}:</p>
              <p>contato@movaimpex.com.br</p>
            </div>

            <div className="contatoItem">
              <FaLocationDot className="contatoIcon" />
              <p>{t.titleEndereco}: {t.address}</p>
            </div>

            <div className="contatoItem">
              <MdAccessTime className="contatoIcon" />
              <p>{t.titledehours}:</p>
              <p>
                {t.openingHours}<br />
                {t.openingHoursFriday}
              </p>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}