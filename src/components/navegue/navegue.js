"use client";

import "./navegue.css";
import { useLanguage } from "../../context/LanguageContext";
import Link from "next/link";

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
          <Link href="/nossaEmpresa">{t.empressa}</Link>
        </li>
        <li className="navegueListItem">
          <Link href="/servicos">{t.servico}</Link>
        </li>
        <li className="navegueListItem">
          <Link href="/informacoes">{t.informacao}</Link>
        </li>
        <li className="navegueListItem">
          <Link href="/contato">{t.contato}</Link>
        </li>
        <li className="navegueListItem">
          <Link href="/politica">{t.politica}</Link>
        </li>
      </ul>
    </div>
  );
}
