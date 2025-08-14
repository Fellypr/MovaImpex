export const metadata = {
  title: "Mova Impex",
  description:
    "Empresa especializada em softwares industriais, sistemas MES e IoT.",
  keywords: "TI, software industrial, sistemas MES, IoT, desenvolvimento",
  authors: [{ name: "Mova Impex" }],
  openGraph: {
    title: "Mova Impex",
    description: "Soluções inteligentes para indústria e IoT.",
    url: "https://mova-impex.vercel.app/",
    type: "website",
  },
};

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
            <p className="bannerText1">Comércio exterior</p>
            <p className="bannerText2">
              O cuidado com cada detalhe é a base de um trabalho de excelência!
            </p>
          </div>
        </div>
      </div>

      <div className="oqueMovaPodeFazerMain">
        <div className="oqueMovaPodeFazerSection">
          <div className="TextMain">
            <div className="listraText"></div>
            <h1>Como a <strong>Mova Impex</strong> pode te ajudar</h1>
          </div>

          <div className="Container">
            <div className="CardHome">
              <picture>
                <img src="/img/imgHome/ship.png" alt="Banner" width={150} />
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
            </div>

            <div className="CardHome">
              <picture>
                <img
                  src="/img/imgHome/advice.png"
                  alt="Banner"
                  width={150}
                />
              </picture>

              <div className="TextContainer">
                <p className="TextContainerTitle">ASSESSORIA</p>
                <p className="TextContainerText">
                  Realizamos a análise da legislação aduaneira do destino e da
                  origem da carga, com base no NCM e HS, planilhamos as
                  previsões de todos os custos, incluindo impostos e taxas
                  locais e elaboramos a emissão das licenças de exportação e
                  importação, bem como o Registro de Exportação e Declaração de
                  Importação.
                </p>
              </div>
            </div>
            <div className="CardHome">
              <picture>
                <img
                  src="/img/imgHome/cargo.png"
                  alt="Banner"
                  width={150}
                />
              </picture>

              <div className="TextContainer">
                <p className="TextContainerTitle">
                  GESTÃO DA LOGÍSTICA NACIONAL E INTERNACIONAL
                </p>
                <p className="TextContainerText">
                  Gerenciamos toda a parte logística da importação e exportação,
                  tanto nacional como internacional, garantindo a coleta na
                  origem e entrega da mercadoria no destino contratado.
                </p>
              </div>
            </div>

            <div className="CardHome">
              <picture>
                <img
                  src="/img/imgHome/container.png"
                  alt="Banner"
                  width={150}
                />
              </picture>

              <div className="TextContainer">
                <p className="TextContainerTitle">DESPACHO ADUANEIRO</p>
                <p className="TextContainerText">
                  Efetuamos o desembaraço aduaneiro para liberação da carga nos
                  portos e aeroportos de todo o Brasil.
                </p>
              </div>
            </div>

            <a href="/servicos" >
              <button className="buttonHome">Saiba mais sobre os nossos serviços</button>
            </a>

          </div>
        </div>
      </div>

      <div className="footerMain">
        <Footer />
      </div>
    </div>
  );
}
