"use client";
import "./Navbar.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useLanguage } from "../../context/LanguageContext";
import { usePathname } from 'next/navigation';

const translations = {
  pt: {
    home: "Home",
    empressa: "Nossa Empresa",
    servico: "Serviços",
    contato: "Contato",
    informacao: "Informações"
  },
  en: {
    home: "Home",
    empressa: "Our Company",
    servico: "Services",
    contato: "Contact",
    informacao: "Information"
  },
};
export default function Navbar() {
  
  const [NavbarReponsivelMobile, setNavbarReponsivelMobile] = useState(false);

  const [isMobile, setIsMobile] = useState(false);
  const [menu, setMenu] = useState(false);

  const checkMobile = () => {
    if (window.innerWidth <= 600) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  function openMenu() {
    setMenu(!menu);
  }
  const { locale, setLocale } = useLanguage();

  const handleLanguageChange = (newLocale) => {
    setLocale(newLocale);
  };
  
  const t = translations[locale];
  const pathname = usePathname();
  return (
    <div className={isMobile ? "NavBarMainReponsivo" : "NavBarMain"}>
      <button
        onClick={openMenu}
        className={isMobile ? "RiMenu2LineReponsivo" : "RiMenu2Line"}
      >
        <RiMenu2Line size={30} />
      </button>
      <Link href="/">
        <img
          src="/img/Logo/Mova-Impex-PNG-2-1-1.png"
          className="custom-logoEnteredLazyloaded"
          alt="Mova Impex"
          decoding="async"
          loading="lazy"
        />
      </Link>
      <div className="titleNav">
        <h2 className="titleHome">
          <Link href="/" className={pathname === "/" ? "active" : ""}>
            {t.home}
          </Link>
        </h2>
        <h2 className="titleHome">
          <Link href="/nossaEmpresa" className={pathname === "/nossaEmpresa" ? "active" : ""}>
            {t.empressa}
          </Link>
        </h2>
        <h2 className="titleHome">
          <Link href="/servicos" className={pathname === "/servicos" ? "active" : ""}>
            {t.servico}
          </Link>
        </h2>
        <h2 className="titleHome">
          <Link href="/informacoes" className={pathname === "/informacoes" ? "active" : ""}>
            {t.informacao}
          </Link>
        </h2>
        <h2 className="titleHome">
          <Link href="/contato" className={pathname === "/contato" ? "active" : ""}>
            {t.contato}
          </Link>
        </h2>
      </div>

      <div className="languagens">
        <button onClick={() => handleLanguageChange("en")}>
          <img
            src="/img/Logo/bandeiras/united-states-2.png"
            alt="Bandeira EUA"
            className="Bandeira"
          />
        </button>
        <button onClick={() => handleLanguageChange("pt")}>
          <img
            src="/img/Logo/bandeiras/brazil-1.png"
            alt="Bandeira Brasil"
            className="Bandeira"
          />
        </button>
      </div>

       <div className={menu ? "menuMobile" : "noneMobile"}>
        <IoIosCloseCircleOutline
          className="IoIosCloseCircleOutline"
          size={30}
          onClick={() => setMenu(false)} 
        />
        <div className="titleNavMobile">
          <h2 className="titleHome">
            <Link href="/" onClick={() => setMenu(false)} className={pathname === "/" ? "active" : ""}>
              {t.home}
            </Link>
          </h2>
          <h2 className="titleHome">
            <Link href="/nossaEmpresa" onClick={() => setMenu(false)} className={pathname === "/nossaEmpresa" ? "active" : ""}>
              {t.empressa}
            </Link>
          </h2>
          <h2 className="titleHome">
            <Link href="/servicos" onClick={() => setMenu(false)} className={pathname === "/servicos" ? "active" : ""}>
              {t.servico}
            </Link>
          </h2>
          <h2 className="titleHome">
            <Link href="/informacoes" onClick={() => setMenu(false)} className={pathname === "/informacoes" ? "active" : ""}>
              {t.informacao}
            </Link>
          </h2>
          <h2 className="titleHome">
            <Link href="/contato" onClick={() => setMenu(false)} className={pathname === "/contato" ? "active" : ""}>
              {t.contato}
            </Link>
          </h2>
        </div>
        
        <div className="languagensMobile">
          <button onClick={() => handleLanguageChange("en")}>
            <img
              src="/img/Logo/bandeiras/united-states-2.png"
              alt="Bandeira EUA"
              className="Bandeira"
            />
          </button>
          <button onClick={() => handleLanguageChange("pt")}>
            <img
              src="/img/Logo/bandeiras/brazil-1.png"
              alt="Bandeira Brasil"
              className="Bandeira"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
