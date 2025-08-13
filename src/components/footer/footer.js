import "./footer.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="footerMain">
      <p className="ajuda">Precisa de ajuda? Fale conosco</p>
      <div className="informationsFotter">
        <div className="contato">
          <p>
            <FaPhoneAlt /> (19) 3013-4040  <MdEmail /> contato@movaimpex.com.br <FaLocationDot /> Avenida Brasil, 1500 Ed. New
            York – Sala 207, Vila Frezzarim, Americana – SP, 13465-785 – Brasil
          </p>
        </div>

        <div className="logoWithDirection">
          <picture className="logoFooter">
            <img
              src="/img/Logo/Mova-Impex-PNG-2-1-1.png"
              alt="Banner"
              width={120}
            />
          </picture>
          <p style={{ fontSize: "16px" }}>
            © Todos os direitos reservados | Mova Impex
          </p>
        </div>
        <div className="ancorasDeNavegacao">
            <a href="/servicos">Serviços</a>
            <a href="/informacoes">Informacões</a>
            <a href="/politica">Políticas de Privacidade</a>
            <a href="/contato">Contato</a>
            <a href="/nossaEmpresa">NossaEmpresa</a>
          </div>
      </div>
    </footer>
  );
}
