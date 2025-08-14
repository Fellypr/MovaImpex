import "./footer.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
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
            <FaPhoneAlt /> (19) 3013-4040 &nbsp; 
            <MdEmail /> contato@movaimpex.com.br &nbsp; 
            <FaLocationDot /> Avenida Brasil, 1500 Ed. New York – Sala 207, Vila Frezzarim, Americana – SP, 13465-785 – Brasil
          </p>
        </div>

        <div className="ancorasDeNavegacao">
          <a href="/servicos">Serviços</a>
          <a href="/informacoes">Informações</a>
          <a href="/politica">Políticas de Privacidade</a>
          <a href="/contato">Contato</a>
          <a href="/nossaEmpresa">Nossa Empresa</a>
        </div>
      </div>

      {/* Mapa menor abaixo de "Onde estamos" */}
      <div className="mapaFooter">
        <p className="mapaTitle">Onde Estamos</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.312752922606!2d-47.354208225406126!3d-22.753771832418977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c89bd854865baf%3A0xf6b36cd929c692ee!2sAmerican%20Square%20-%20Torre%20New%20York!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
          width="200"
          height="200"
          style={{ border: 0, borderRadius: "8px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <p className="copyright">
        © Todos os direitos reservados | Mova Impex
      </p>
    </footer>
  );
}
