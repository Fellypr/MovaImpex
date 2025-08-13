import "./contato.css";
import "../../components/navbar/Navbar.css";
import Link from "next/link";

import { CiPhone } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import Footer from "@/components/footer/footer";

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
        <h2 className="titleHome">Contato</h2>
        <div className="languagens">
          <img
            decoding="async"
            src="https://movaimpex.com.br/wp-content/uploads/2021/11/united-states-2.png"
            alt="Bandeira EUA"
            loading="lazy"
            className="Bandeira"
          />
          <img
            decoding="async"
            src="https://movaimpex.com.br/wp-content/uploads/2021/11/brazil-1.png"
            alt="Bandeira Brasil"
            loading="lazy"
            className="Bandeira"
          />
        </div>
      </div>

      <div className="contatoMain">
        <div className="contatoSection">
          <h1 className="contatoTitle">Precisa de ajuda? Fale conosco!</h1>
          <div className="contatoContainer">
            <div className="contatoItem">
              <CiPhone className="contatoIcon" />
              <p>(19) 3013-4040</p>
            </div>
            <div className="contatoItem">
              <TfiEmail className="contatoIcon" />
              <p>contato@movaimpex.com.br</p>
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

        <div className="observation">
            <img src="/img/Logo/Company-rafiki.png" alt="Observation" width={300}/>
            <p>OBS: Não realizamos atendimento aos sábados, domingos e feriados.</p>
        </div>
      </div>

      <Footer />
    </>
  );
}
