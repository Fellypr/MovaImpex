import "./card.css";
import Link from "next/link";

export default function Card() {
  return (
    <div className="card">
      <Link href="/servicos" className="card-content">
        <picture>
          <img src="/img/Design sem nome.png" alt="Banner" />
        </picture>
        <h3 className="card-title">Serviços</h3>
        <p className="card-text">
          Comércio exterior Conheça os nossos serviços para Importar ou
          Exportar. Saiba mais
        </p>
      </Link>

      <Link href="/empresa" className="card-content">
        <picture>
          <img src="/img/Design sem nome.png" alt="Banner" />
        </picture>
        <h3 className="card-title">Nossa Empresa</h3>
        <p className="card-text">
          Acreditamos Que o crescimento e solidez é construído através de
          transparência e honestidade.Saiba mais
        </p>
      </Link>

      <Link href="/informacoes" className="card-content">
        <picture>
          <img src="/img/Design sem nome.png" alt="Banner" />
        </picture>
        <h3 className="card-title">Informações</h3>
        <p className="card-text">
          Acompanhamos Sua carga, da preparação do embarque até a chegada ao
          destino na Importação e na Exportação.Saiba mais
        </p>
      </Link>
    </div>
  );
}
