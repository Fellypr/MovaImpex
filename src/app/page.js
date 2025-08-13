"use client";


import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Card from "@/components/card/card";
import Footer from "@/components/footer/footer";

export default function Home() {


  return (
    <div>
      <Navbar />
      <div className="bannerMain">
        <div className="banner">
          <picture>
            <img src="/img/Design sem nome.png" alt="Banner" />
          </picture>
          <div className="bannerText">
            <p className="bannerText1">
              O cuidado com cada detalhe é a base de um trabalho de excelência.
            </p>
            <p className="bannerText2">
              soluções confiáveis em importação, exportação e logística
              aduaneira. Agilidade, segurança e atendimento personalizado para o
              sucesso do seu comércio exterior.
            </p>
          </div>
        </div>
      </div>

      <div className="cardsMain">
        <Card />
      </div>

      <div className="oqueMovaPodeFazerMain">
        <div className="oqueMovaPodeFazerSection">
          <div className="TextMain">
            <div className="listraText"></div>
            <h1>Como a Mova Impex pode te ajudar</h1>
          </div>

          <div className="Container">
            <picture>
              <img
                src="/img/imgHome/ship.png"
                alt="Banner"
                width={300}
                height={300}
              />
            </picture>
            <div className="TextContainer">
              <p className="TextContainerTitle">IMPORTAÇÃO E EXPORTAÇÃO</p>
              <p className="TextContainerText">
                Nossos serviços abrangem desde a identificação do cliente, a
                negociação dos preços e o pagamento, frete internacional,
                documentação para despachos aduaneiros até a entrega no local
                solicitado pela contratante dos nossos serviços. Para empresas
                que precisam importar e exportar, cuidamos de todas as etapas.
              </p>
            </div>
            <picture>
              <img
                src="/img/imgHome/advice.png"
                alt="Banner"
                width={300}
                height={300}
              />
            </picture>

            <div className="TextContainer">
              <p className="TextContainerTitle">ASSESSORIA</p>
              <p className="TextContainerText">
                Realizamos a análise da legislação aduaneira do destino e da
                origem da carga, com base no NCM e HS, planilhamos as previsões
                de todos os custos, incluindo impostos e taxas locais e
                elaboramos a emissão das licenças de exportação e importação,
                bem como o Registro de Exportação e Declaração de Importação.
              </p>
            </div>
            <picture>
              <img
                src="/img/imgHome/cargo.png"
                alt="Banner"
                width={300}
                height={300}
              />
            </picture>

            <div className="TextContainer">
              <p className="TextContainerTitle">
                GESTÃO DA LOGÍSTICA NACIONAL E INTERNACIONAL
              </p>
              <p className="TextContainerText">
                Gerenciamos toda a parte logística da importação e exportação,
                tanto nacional como internacional, garantindo a coleta na origem
                e entrega da mercadoria no destino contratado.
              </p>
            </div>
            <picture>
              <img
                src="/img/imgHome/container.png"
                alt="Banner"
                width={300}
                height={300}
              />
            </picture>

            <p style={{ fontWeight: "medium" , fontSize: "28px"}}>DESPACHO ADUANEIRO</p>
            <p style={{ fontSize: "16px" }}>
              Efetuamos o desembaraço aduaneiro para liberação da carga nos
              portos e aeroportos de todo o Brasil.
            </p>
            <a style={{ fontSize: "17px",textDecoration: "underline",color: "red",cursor: "pointer" }} href="/servicos">Saiba mais sobre os nosso serviços</a>
          </div>
        </div>
      </div>

      <div className="mapa">
            <div className="mapaTitle">
                <div className="listraText"></div>
                <p style={{ fontSize: "28px", fontWeight: "medium" }}>Onde Estamos Localizados</p>
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

      <div className="footerMain">
        <Footer />
      </div>
    </div>
  );
}
