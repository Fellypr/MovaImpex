"use client";
import "./Navbar.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { IoIosCloseCircleOutline } from "react-icons/io";
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

  return (
    <div className={isMobile ? "NavBarMainReponsivo" : "NavBarMain"}>
      <button onClick={openMenu} className={isMobile ? "RiMenu2LineReponsivo" : "RiMenu2Line"}>
        <RiMenu2Line
          size={30}
        />
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
          <Link href="/">Home</Link>
        </h2>
        <h2 className="titleHome">
          <Link href="/nossaEmpresa">Nossa Empresa</Link>
        </h2>
        <h2 className="titleHome">
          <Link href="/servicos"> Serviços</Link>
        </h2>
        <h2 className="titleHome">
          <Link href="/informacoes">Informações</Link>
        </h2>
        <h2 className="titleHome">
          <Link href="/contato">Contato</Link>
        </h2>
      </div>
      <div className="languagens">
        <img
          decoding="async"
          src="/img/Logo/bandeiras/united-states-2.png"
          alt="Bandeira EUA"
          loading="lazy"
          className="Bandeira"
        />
        <img
          decoding="async"
          src="/img/Logo/bandeiras/brazil-1.png"
          alt="Bandeira Brasil"
          loading="lazy"
          className="Bandeira"
        />
      </div>

      <div className={menu ? "menuMobile" : "noneMobile"}>
        <IoIosCloseCircleOutline
          className="IoIosCloseCircleOutline"
          size={30}
          onClick={menu ? () => setMenu(false) : () => setMenu(true)}
        />
        <div className="titleNavMobile">
          <h2 className="titleHome">
            <Link href="/">Home</Link>
          </h2>
          <h2 className="titleHome">
            <Link href="/nossaEmpresa">Nossa Empresa</Link>
          </h2>
          <h2 className="titleHome">
            <Link href="/servicos"> Serviços</Link>
          </h2>
          <h2 className="titleHome">
            <Link href="/informacoes">Informações</Link>
          </h2>
          <h2 className="titleHome">
            <Link href="/contato">Contato</Link>
          </h2>
        </div>
        <div className="languagensMobile">
          <img
            decoding="async"
            src="/img/Logo/bandeiras/united-states-2.png"
            alt="Bandeira EUA"
            loading="lazy"
            className="Bandeira"
          />
          <img
            decoding="async"
            src="/img/Logo/bandeiras/brazil-1.png"
            alt="Bandeira Brasil"
            loading="lazy"
            className="Bandeira"
          />
        </div>
      </div>
    </div>
  );
}
