"use client";

import React from "react";
import "./servicos.css";
import Navbar from "../../components/navbar/Navbar";
import "../../components/navbar/Navbar.css";
import Footer from "../../components/footer/footer";
import { useLanguage } from "../../context/LanguageContext";

const translations = {
  pt: {
    // TITLES
    title1: "Importação e Exportação",
    title2: "Assessoria",
    title3: "Gestão da Logística",
    title4: "Despacho Aduaneiro",

    // IMPORTAÇÃO E EXPORTAÇÃO
    text1_1:
      "Nosso serviço abrange todas as etapas das importações, iniciando pela busca de produtos no mercado externo, seguindo com negociação dos custos até o embarque.",
    text1_2:
      "Cotamos todos os custos do desembaraço e o cálculo dos impostos (II, IPI, ICMS, PIS e COFINS) e, orçamos o transporte terrestre ou aéreo em todo o território brasileiro, para a entrega dos produtos importados.",
    text1_3:
      "Nossos profissionais auxiliam na análise dos produtos serem nacionalizados no território através do NCM e HS e consultamos os departamentos governamentais para nos informarmos se há necessidade de licenças ou cotas para Importação (L. I.) para os produtos serem nacionalizados para o território brasileiro.",
    text1_4:
      "Nossa empresa providência todos os trâmites para a emissão da L. I. pelo INMETRO e pelo MAPA (Ministério da Agricultura, Pecuária e Abastecimento).",
    text1_5:
      "Também prestamos serviços de busca de produtos e fornecedores em outros países para empresas que necessitam importar, mas ainda não possuem um fornecedor no exterior.",
    text1_6:
      "Prestamos serviços para todas as empresas que queiram vender seus produtos em outros mercados. Abrange desde a identificação do cliente, negociação, preparação dos documentação, contratação do frete internacional (porto a porto ou porta a porta) e administração de todas as etapas para os despachos aduaneiros, do carregamento na origem da carga até a entrega ao importador.",
    text1_7:
      "Trabalhamos com as modalidades de exportação aérea e marítima, tanto na categoria consolidada, quando no preenchimento de contêineres de 20 pés e 40 pés.",
    text1_8:
      "Atuamos com todo tipo de mercadoria, alimentos perecíveis e não-perecíveis, refrigerados, roupas, livros, máquinas e equipamentos, produtos de limpeza e cargas IMO, dentre outros.",
    text1_9:
      "Nossos profissionais auxiliam na análise dos produtos a serem exportados e identificam se há necessidade de licenças especiais para a importação por outros países.",

    // ASSESSORIA
    text2_1:
      "Realizamos a análise da legislação aduaneira do destino e da origem da carga, com base no NCM e HS, planilhamos as previsões de todos os custos, inclusos os impostos e taxas locais e elaboramos a emissão das licenças de exportação e importação, bem como o Registro de Exportação e Declaração de Importação.",
    text2_2:
      "Assessoramos as empresas, da elaboração do custo do produto para exportação e importação, passando pela análise de NCM e HS, informando sobre redução e desoneração dos impostos; até o desembaraço aduaneiro, na importação e exportação; e entrega em depósitos do importador, facilitando a participação e o acesso das empresas no mercado internacional.",
    text2_3:
      "Auxiliamos na confecção de documentos necessários para os trâmites de importação e exportação, atendendo todos os requisitos legais para desembaraço das mercadorias.",
    text2_4:
      "Instruímos sobre a emissão de Notas Fiscais de exportação direta e indireta, auxiliando desde o cadastro do produto com seu NCM, até a utilização do CFOP compatível.",

    // LOGÍSTICA
    text3_1:
      "Gerenciamos toda a parte logística da importação e exportação, tanto nacional como internacional, garantindo a coleta na origem e entrega da mercadoria no destino contratado.",
    text3_2:
      "Fazemos o acompanhamento da mercadoria desde a sua origem até o destino, contando com a parceria de transportadoras e armazéns.",
    text3_3:
      "Operamos na contratação de frete nacional e internacional, atuando com uma equipe de agentes de carga e armadores altamente capacitados.",

    // DESPACHO ADUANEIRO
    text4_1:
      "Efetuamos o desembaraço aduaneiro para liberação da carga nos portos e aeroportos do Brasil.",
    text4_2:
      "• Desembaraço aduaneiro e emissão de D. I. (Declaração de Importação), R. E. (Registro de Exportação) e D.S.E. (Declaração Simplificada de Exportação) e emissão de todos os registros e comprovantes do Siscomex;",
    text4_3: "• Contratação de seguros;",
    text4_4:
      "• Elaboração de documentos na Importação e Exportação e certificados para exportação;",
    text4_5:
      "• Análise da legislação quanto ao NCM e HS do produto, para verificar se há impedimentos ou se o produto necessita de anuência de algum órgão governamental.",
  },
  en: {
    // TITLES
    title1: "Import Export",
    title2: "Advisory",
    title3: "Logistics Management",
    title4: "Customs Clearance",

    // IMPORT / EXPORT
    text1_1:
      "Our service covers all stages of imports, starting with the search for products in the foreign market, continuing with cost negotiation until shipment.",
    text1_2:
      "We quote all customs clearance costs and the calculation of taxes (II, IPI, ICMS, PIS and COFINS) and we budget for land or air transport throughout the Brazilian territory, for the delivery of imported products.",
    text1_3:
      "Our professionals assist in the analysis of products to be nationalized in the territory through the NCM and HS and we consult government departments to inform us if there is a need for licenses or quotas for Import (L.I.) for the products to be nationalized in the Brazilian territory.",
    text1_4:
      "Our company provides all the procedures for the issuance of the L.I. by INMETRO and MAPA (Ministry of Agriculture, Livestock and Supply).",
    text1_5:
      "We also provide search services for products and suppliers in other countries for companies that need to import but do not yet have a supplier abroad.",
    text1_6:
      "We provide services to all companies that want to sell their products in other markets. It ranges from customer identification, negotiation, preparation of documents, contracting of international freight (port-to-port or door-to-door) and administration of all steps for customs clearance, from loading at the origin of the cargo to delivery to the importer.",
    text1_7:
      "We work with air and sea export modalities, both in the consolidated category and in filling 20-foot and 40-foot containers.",
    text1_8:
      "We work with all types of goods, perishable and non-perishable food, refrigerated, clothing, books, machinery and equipment, cleaning products and IMO cargo, among others.",
    text1_9:
      "Our professionals assist in the analysis of products to be exported and identify if there is a need for special licenses for importation into other countries.",

    // ADVISORY
    text2_1:
      "We analyze the customs legislation of the cargo’s destination and origin, based on the NCM and HS, we work out the forecasts of all costs, including local taxes and fees, and prepare the issuance of export and import licenses, as well as the Registration of Export and Import Declaration.",
    text2_2:
      "We advise companies, from the elaboration of the cost of the product for export and import, through the analysis of NCM and HS, informing about tax reduction and exemption; even customs clearance, in import and export; and delivery to importer’s warehouses, facilitating the participation and access of companies in the international market.",
    text2_3:
      "We assist in the preparation of documents necessary for import and export procedures, meeting all legal requirements for clearance of goods.",
    text2_4:
      "We instruct on the issuance of Invoices for direct and indirect export, helping from the registration of the product with its NCM, to the use of the compatible CFOP.",

    // LOGISTICS MANAGEMENT
    text3_1:
      "We manage all the logistical part of import and export, both nationally and internationally, ensuring the collection at the origin and delivery of the goods to the contracted destination.",
    text3_2:
      "We monitor the goods from their origin to their destination, with a partnership with carriers and warehouses.",
    text3_3:
      "We operate in the contracting of national and international freight, working with a team of highly trained cargo agents and shipowners.",

    // CUSTOMS CLEARANCE
    text4_1:
      "We carry out customs clearance for cargo release at ports and airports throughout Brazil.",
    text4_2:
      "• Customs clearance and issuance of D.I. (Import Declaration), R.E. (Export Registration) and D.S.E. (Simplified Export Declaration) and issuance of all Siscomex registrations and receipts;",
    text4_3: "• Insurance contracting;",
    text4_4:
      "• Preparation of documents in Import and Export and certificates for export;",
    text4_5:
      "• Analysis of the legislation regarding the NCM and HS of the product, to check if there are impediments or if the product needs the consent of a government agency.",
  },
};

export default function Servicos() {
  const { locale } = useLanguage();
  const t = translations[locale];

  return (
    <div>
      
      
      <Navbar />

      <div className="servicosMain">
        {/* Importação e Exportação */}
        <div className="servicosSection">
          <p className="servicosTitle">{t.title1}</p>
          <br />
          <p className="servicosText">
            {t.text1_1} <br />
            <br />
            {t.text1_2} <br />
            <br />
            {t.text1_3} <br />
            <br />
            {t.text1_4} <br />
            <br />
            {t.text1_5} <br />
            <br />
            {t.text1_6} <br />
            <br />
            {t.text1_7} <br />
            <br />
            {t.text1_8} <br />
            <br />
            {t.text1_9}
          </p>
        </div>

        {/* Assessoria */}
        <div className="servicosSection">
          <p className="servicosTitle">{t.title2}</p>
          <br />
          <p className="servicosText">
            {t.text2_1} <br />
            <br />
            {t.text2_2} <br />
            <br />
            {t.text2_3} <br />
            <br />
            {t.text2_4}
          </p>
        </div>

        {/* Gestão da Logística */}
        <div className="servicosSection">
          <p className="servicosTitle">{t.title3}</p>
          <br />
          <p className="servicosText">
            {t.text3_1} <br />
            <br />
            {t.text3_2} <br />
            <br />
            {t.text3_3}
          </p>
        </div>

        {/* Despacho Aduaneiro */}
        <div className="servicosSection">
          <p className="servicosTitle">{t.title4}</p>
          <br />
          <p className="servicosText">
            {t.text4_1} <br />
            <br />
            {t.text4_2} <br />
            <br />
            {t.text4_3} <br />
            <br />
            {t.text4_4} <br />
            <br />
            {t.text4_5}
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
