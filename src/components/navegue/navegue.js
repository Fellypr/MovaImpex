"use client";

import "./navegue.css";
import { useLanguage } from "../../context/LanguageContext";

const translations = {
  pt: {
    navegue: "Navegue",
    home: "Home",
    empressa: "Nossa Empresa",
    servico: "Serviços",
    contato: "Contato",
    informacao: "Informações",
    politica: "Políticas de Privacidade",
  },
  en: {
    politica: "Privacy Policy",
    navegue: "Browse",
    home: "Home",
    empressa: "Our Company",
    servico: "Services",
    contato: "Contact",
    informacao: "Information",
  },
};

export default function Navegue() {
  const { locale } = useLanguage();
  const t = translations[locale];
  return (
    <div className="navegueMainContainer">
      <h1 className="navegueTit">{t.navegue}</h1>
      <ul className="navegueList">
        <li className="navegueListItem">
          <a href="/nossaEmpresa">{t.empressa}</a>
        </li>
        <li className="navegueListItem">
          <a href="/servicos">{t.servico}</a>
        </li>
        <li className="navegueListItem">
          <a href="/informacoes">{t.informacao}</a>
        </li>
        <li className="navegueListItem">
          <a href="/contato">{t.contato}</a>
        </li>
        <li className="navegueListItem">
          <a href="/politica">{t.politica}</a>
        </li>
      </ul>
    </div>
  );
}
