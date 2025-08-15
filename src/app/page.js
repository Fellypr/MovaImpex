"use client";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Card from "@/components/card/card";
import Footer from "@/components/footer/footer";
import { useLanguage } from "../context/LanguageContext";
const translations = {
  pt: {
    // Títulos e frases de destaque
    greeting: "Comércio exterior",
    description:
      "O cuidado com cada detalhe é a base de um trabalho de excelência!",
    howMovaCanHelpTitle: "Como a Mova Impex pode te ajudar",

    // Seção Importação e Exportação
    importExportTitle: "IMPORTAÇÃO E EXPORTAÇÃO",
    importExportText:
      "Nossos serviços abrangem desde a identificação do cliente, a negociação dos preços e o pagamento, frete internacional, documentação para despachos aduaneiros até a entrega no local solicitado pela contratante dos nossos serviços. Para empresas que precisam importar e exportar, cuidamos de todas as etapas.",

    // Seção Assessoria
    consultingTitle: "ASSESSORIA",
    consultingText:
      "Realizamos a análise da legislação aduaneira do destino e da origem da carga, com base no NCM e HS, planilhamos as previsões de todos os custos, incluindo impostos e taxas locais e elaboramos a emissão das licenças de exportação e importação, bem como o Registro de Exportação e Declaração de Importação.",

    // Seção Gestão da Logística
    logisticsTitle: "GESTÃO DA LOGÍSTICA NACIONAL E INTERNACIONAL",
    logisticsText:
      "Gerenciamos toda a parte logística da importação e exportação, tanto nacional como internacional, garantindo a coleta na origem e entrega da mercadoria no destino contratado.",

    // Seção Despacho Aduaneiro
    customsClearanceTitle: "DESPACHO ADUANEIRO",
    customsClearanceText:
      "Efetuamos o desembaraço aduaneiro para liberação da carga nos portos e aeroportos de todo o Brasil.",

    // Links e Rodapé
    learnMore: "Saiba mais sobre os nossos serviços",
    services: "Serviços",
    information: "Informações",
    privacyPolicy: "Políticas de Privacidade",
    contact: "Contato",
    aboutUs: "Nossa Empresa",
    whereWeAre: "Onde Estamos",
    footerText: "© Todos os direitos reservados | Mova Impex",
    phone: "(19) 3013-4040",
    email: "contato@movaimpex.com.br",
    address:
      "Avenida Brasil, 1500 Ed. New York – Sala 207, Vila Frezzarim, Americana – SP, 13465-785 – Brasil",
  },
  en: {
    // Títulos e frases de destaque
    greeting: "Foreign trade",
    description: "Attention to every detail is the basis of excellent work!",
    howMovaCanHelpTitle: "How Mova Impex can help you",

    // Seção Importação e Exportação
    importExportTitle: "IMPORT AND EXPORT",
    importExportText:
      "Our services cover everything from client identification, price negotiation and payment, international freight, documentation for customs clearance, to delivery at the location requested by the contracting party of our services. For companies that need to import and export, we handle all stages.",

    // Seção Assessoria
    consultingTitle: "CONSULTING",
    consultingText:
      "We analyze the customs legislation of the cargo's destination and origin, based on NCM and HS, we plan forecasts for all costs, including local taxes and fees, and we prepare the issuance of export and import licenses, as well as the Export Registry and Import Declaration.",

    // Seção Gestão da Logística
    logisticsTitle: "NATIONAL AND INTERNATIONAL LOGISTICS MANAGEMENT",
    logisticsText:
      "We manage the entire logistics of import and export, both national and international, guaranteeing collection at the origin and delivery of the merchandise at the contracted destination.",

    // Seção Despacho Aduaneiro
    customsClearanceTitle: "CUSTOMS CLEARANCE",
    customsClearanceText:
      "We perform customs clearance to release cargo in ports and airports throughout Brazil.",

    // Links e Rodapé
    learnMore: "Learn more about our services",
    services: "Services",
    information: "Information",
    privacyPolicy: "Privacy Policy",
    contact: "Contact",
    aboutUs: "About Us",
    whereWeAre: "Where We Are",
    footerText: "© All rights reserved | Mova Impex",
    phone: "(19) 3013-4040",
    email: "contato@movaimpex.com.br",
    address:
      "Avenida Brasil, 1500 Ed. New York – Sala 207, Vila Frezzarim, Americana – SP, 13465-785 – Brazil",
  },
};

export default function Home() {
  const { locale } = useLanguage();
  const t = translations[locale];

  return (
    <div>
      <Navbar />
      <div className="bannerMain">
        <div className="banner">
          <picture>
            <img src="/img/Design sem nome.png" alt="Banner" />
          </picture>
          <div className="bannerText">
            <p className="bannerText1">{t.greeting}</p>
            <p className="bannerText2">{t.description}</p>
          </div>
        </div>
      </div>

      <div className="oqueMovaPodeFazerMain">
        <div className="oqueMovaPodeFazerSection">
          <div className="TextMain">
            <div className="listraText"></div>
            <h1>{t.howMovaCanHelpTitle}</h1>
          </div>

          <div className="Container">
            <div className="CardHome">
              <picture>
                <img src="/img/imgHome/ship.png" alt="Banner" width={150} />
              </picture>
              <div className="TextContainer">
                <p className="TextContainerTitle">{t.importExportTitle}</p>
                <p className="TextContainerText">{t.importExportText}</p>
              </div>
            </div>

            <div className="CardHome">
              <picture>
                <img src="/img/imgHome/advice.png" alt="Banner" width={150} />
              </picture>
              <div className="TextContainer">
                <p className="TextContainerTitle">{t.consultingTitle}</p>
                <p className="TextContainerText">{t.consultingText}</p>
              </div>
            </div>

            <div className="CardHome">
              <picture>
                <img src="/img/imgHome/cargo.png" alt="Banner" width={150} />
              </picture>
              <div className="TextContainer">
                <p className="TextContainerTitle">{t.logisticsTitle}</p>
                <p className="TextContainerText">{t.logisticsText}</p>
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
                <p className="TextContainerTitle">{t.customsClearanceTitle}</p>
                <p className="TextContainerText">{t.customsClearanceText}</p>
              </div>
            </div>

            <a href="/servicos">
              <button className="buttonHome">
                <p style={{ color: "#ffffffff" }}>{t.learnMore}</p>
              </button>
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
