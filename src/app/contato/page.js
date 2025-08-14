import "./contato.css";
import "../../components/navbar/Navbar.css";
import Navbar from "@/components/navbar/Navbar";
import { CiPhone } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import Footer from "@/components/footer/footer";

import Link from "next/link";

export default function Contato() {
  return (
    <>
      <div className="NavBarMain">
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
              <h2 className="titleHome"  >
                <Link href="/contato" style={{ color: "#21A2BF" }}>Contato</Link>
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
          </div>
      <div className="contatoMain">
        <div className="contatoSection">
          <h1 className="contatoTitle">Fale Conosco</h1>

          <div className="contatoContainer">
            <div className="contatoItem">
              <CiPhone className="contatoIcon" />
              <p>(19) 3013-4040</p>
            </div>

            <div className="contatoItem">
              <TfiEmail className="contatoIcon" />
              <p>contato@movaimpex.com.br</p>
            </div>

            <div className="contatoItem">
              <FaLocationDot className="contatoIcon" />
              <p>
                Avenida Brasil, 1500 Ed. New York – Sala 207, Vila Frezzarim,
                Americana – SP, 13465-785 – Brasil
              </p>
            </div>

            <div className="contatoItem">
              <MdAccessTime className="contatoIcon" />
              <p>
                Segunda à Quinta-feira: 9h às 18h <br />
                Sexta-feira: até as 17h
              </p>
            </div>
          </div>

          <div className="mapa">
            <div className="mapaTitle">
              <div className="listraText"></div>
              <p style={{ fontSize: "28px", fontWeight: "medium" }}>
                Onde Estamos Localizados
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.312752922606!2d-47.354208225406126!3d-22.753771832418977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c89bd854865baf%3A0xf6b36cd929c692ee!2sAmerican%20Square%20-%20Torre%20New%20York!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="800"
              height="300"
              style={{ border: 1, borderRadius: "12px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="mapaContainer"
            ></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
