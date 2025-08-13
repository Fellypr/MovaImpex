import "./nossaEmpresa.css";
import "../../components/navbar/Navbar.css";
import Link from "next/link";
import Footer from "@/components/footer/footer";
export default function NossaEmpresa() {
  return (
    <main className="nossaEmpresaMain">
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

        <h2 className="titleHome">Nossa Empresa</h2>
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

      <div className="nossaEmpresaSection">
        <picture>
          <img
            src="/img/Design-sem-nome-1-1-768x768.png"
            alt="Banner"
            className="nossaEmpresaImg"
          />
        </picture>
        <div className="nossaEmpresaText">
          <p className="nossaEmpresaText1">A Mova Impex</p>
          <p className="nossaEmpresaText2">
            É uma empresa que atua no ramo da importação e principalmente na
            exportação, tanto direta como indireta. Nosso principal objetivo é
            ajudar os nossos clientes com todas as etapas em relação a
            importação e exportação.
          </p>
        </div>
      </div>

      <div className="nossaEmpresaSection">
        <img src="/img/target.png" alt="Banner" className="badge"  />
        <div className="nossaEmpresaText">
          <p className="nossaEmpresaText1">Missão</p>
          <p className="nossaEmpresaText2">
            Atuar nas operações de Comércio Exterior, principalmente na
            importação e exportação de produtos Asiáticos, Brasileiros e Sul
            Americanos.
            <br />
            <br /> Estamos sempre em busca de novos fornecedores e clientes.
            Reunimos todos os players necessários ao processo de logística
            completo das mercadorias até a entrega ao destino final.
          </p>
        </div>
      </div>

      <div className="nossaEmpresaSection">
        <img src="/img/badge.png" alt="Banner" className="badge" />
        <div className="nossaEmpresaText">
          <p className="nossaEmpresaText1">Valores</p>
          <p className="nossaEmpresaText2">
            Garantimos sempre a melhor qualidade em nossos serviços, atendendo
            nossos clientes da melhor forma possível.
            <br />
            <br /> Acreditamos que o crescimento e solidez é construído através
            de transparência e honestidade, para ter um relacionamento duradouro
            com nossos clientes respeitando sempre esses valores.
          </p>
        </div>
      </div>

      <div className="nossaEmpresaSection">
        <img src="/img/vision.png" alt="Banner" className="badge" />
        <div className="nossaEmpresaText">
          <p className="nossaEmpresaText1">Visão</p>
          <p className="nossaEmpresaText2">
            Desejamos expandir nossos negócios até atingir o mercado mundial,
            sempre prezando pela excelência em nossos serviços, para assim, nos
            tornarmos referência global.
          </p>
        </div>
      </div>

      <div className="nossaEmpresaCardMain">
        <div className="nossaEmpresaTextcard">
          <div className="listraText"></div>
          <p className="nossaEmpresaCardText2">Produtos que trabalhamos</p>
        </div>
        <div className="nossaEmpresaCardSection">
          <div className="nossaEmpresaCard">
            <img
              src="/img/products-1.png"
              alt="Banner"
              className="nossaEmpresaCardImg"
              width={200}
            />
            <p className="nossaEmpresaCardText1">Produtos não perecíveis</p>
          </div>

          <div className="nossaEmpresaCard">
            <img
              src="/img/dairy-products.png"
              alt="Banner"
              className="nossaEmpresaCardImg"
              width={200}
            />
            <p className="nossaEmpresaCardText1">Produtos perecíveis</p>
          </div>

          <div className="nossaEmpresaCard">
            <img
              src="/img/products.png"
              alt="Banner"
              className="nossaEmpresaCardImg"
              width={200}
            />
            <p className="nossaEmpresaCardText1">Limpeza e higiene</p>
          </div>

          <div className="nossaEmpresaCard">
            <img
              src="/img/grain.png"
              alt="Banner"
              className="nossaEmpresaCardImg"
              width={200}
            />
            <p className="nossaEmpresaCardText1">Commodities</p>
          </div>

          <div className="nossaEmpresaCard">
            <img
              src="/img/equipment.png"
              alt="Banner"
              className="nossaEmpresaCardImg"
              width={200}
            />
            <p className="nossaEmpresaCardText1">Equipamentos</p>
          </div>

          <div className="nossaEmpresaCard">
            <img
              src="/img/house.png"
              alt="Banner"
              className="nossaEmpresaCardImg"
              width={200}
            />
            <p className="nossaEmpresaCardText1">Utilidades domésticas</p>
          </div>

          <div className="nossaEmpresaCard">
            <img
              src="/img/toys.png"
              alt="Banner"
              className="nossaEmpresaCardImg"
              width={200}
            />
            <p className="nossaEmpresaCardText1">Jogos e brinquedos</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
