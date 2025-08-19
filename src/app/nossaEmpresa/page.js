"use client";

import React from "react";
import "./nossaEmpresa.css";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/footer";

import { useLanguage } from "../../context/LanguageContext";

const translations = {
  pt: {
    // Seção Principal
    aboutTitle: "A Mova Impex",
    aboutText:
      "É uma empresa que atua no ramo da importação e principalmente na exportação, tanto direta como indireta. Nosso principal objetivo é ajudar os nossos clientes com todas as etapas em relação a importação e exportação.",

    // Missão
    missionTitle: "Missão",
    missionText1:
      "Atuar nas operações de Comércio Exterior, principalmente na importação e exportação de produtos Asiáticos, Brasileiros e Sul Americanos.",
    missionText2:
      "Estamos sempre em busca de novos fornecedores e clientes. Reunimos todos os players necessários ao processo de logística completo das mercadorias até a entrega ao destino final.",

    // Valores
    valuesTitle: "Valores",
    valuesText1:
      "Garantimos sempre a melhor qualidade em nossos serviços, atendendo nossos clientes da melhor forma possível.",
    valuesText2:
      "Acreditamos que o crescimento e solidez é construído através de transparência e honestidade, para ter um relacionamento duradouro com nossos clientes respeitando sempre esses valores.",

    // Visão
    visionTitle: "Visão",
    visionText:
      "Desejamos expandir nossos negócios até atingir o mercado mundial, sempre prezando pela excelência em nossos serviços, para assim, nos tornarmos referência global.",

    // Produtos
    productsTitle: "Produtos que trabalhamos",
    product1: "Produtos não perecíveis",
    product2: "Produtos perecíveis",
    product3: "Limpeza e higiene",
    product4: "Commodities",
    product5: "Equipamentos",
    product6: "Utilidades domésticas",
    product7: "Jogos e brinquedos",
  },
  en: {
    // Main Section
    aboutTitle: "The Mova Impex",
    aboutText:
      "It is a company that operates in the field of imports and mainly in exports, both direct and indirect. Our main objective is to help our customers with all steps regarding import and export.",

    // Mission
    missionTitle: "Mission",
    missionText1:
      "Acting in Foreign Trade operations, mainly in the import and export of Asian, Brazilian and South American products.",
    missionText2:
      "We are always looking for new suppliers and customers, we bring together all the players necessary for the complete logistics process of the goods, from delivery to the final destination.",

    // Values
    valuesTitle: "Values",
    valuesText1:
      "We always guarantee the best quality in our services, serving our customers in the best way possible.",
    valuesText2:
      "We believe that growth and solidity is built through transparency and honesty, in order to have a lasting relationship with our customers, always respecting these values.",

    // Vision
    visionTitle: "Vision",
    visionText:
      "We want to expand our business until reaching the world market, always striving for excellence in our services, so that we can become a global reference.",

    // Products
    productsTitle: "Products we work",
    product1: "Non-perishable products",
    product2: "Perishable products",
    product3: "Cleaning and hygiene",
    product4: "Commodities",
    product5: "Equipments",
    product6: "Housewares",
    product7: "Games and toys",
  },
};

export default function NossaEmpresa() {
  const { locale } = useLanguage();
  const t = translations[locale];

  return (
    <main className="nossaEmpresaMain">
      
      <Navbar />
      <div className="nossaEmpresaContainer">
        <div className="nossaEmpresaSection">
          <img
            src="/img/Design-sem-nome-1-1-768x768.png"
            alt="Banner"
            className="nossaEmpresaImg"
          />
          <div className="nossaEmpresaText">
            <p className="nossaEmpresaText1">{t.aboutTitle}</p>
            <p className="nossaEmpresaText2">{t.aboutText}</p>
          </div>
        </div>

        <div className="nossaEmpresaSection">
          <img src="/img/target.png" alt="Banner" className="badge" />
          <div className="nossaEmpresaText">
            <p className="nossaEmpresaText1">{t.missionTitle}</p>
            <p className="nossaEmpresaText2">
              {t.missionText1}
              <br />
              <br /> {t.missionText2}
            </p>
          </div>
        </div>

        <div className="nossaEmpresaSection">
          <img src="/img/badge.png" alt="Banner" className="badge" />
          <div className="nossaEmpresaText">
            <p className="nossaEmpresaText1">{t.valuesTitle}</p>
            <p className="nossaEmpresaText2">
              {t.valuesText1}
              <br />
              <br /> {t.valuesText2}
            </p>
          </div>
        </div>

        <div className="nossaEmpresaSection">
          <img src="/img/vision.png" alt="Banner" className="badge" />
          <div className="nossaEmpresaText">
            <p className="nossaEmpresaText1">{t.visionTitle}</p>
            <p className="nossaEmpresaText2">{t.visionText}</p>
          </div>
        </div>
      </div>

      <div className="nossaEmpresaCardMain">
        <div className="nossaEmpresaTextcard">
          <div className="listraText"></div>
          <p className="nossaEmpresaCardText2">{t.productsTitle}</p>
        </div>
        <div className="nossaEmpresaCardSection">
          <div className="nossaEmpresaCard">
            <img
              src="/img/products-1.png"
              alt="Banner"
              className="nossaEmpresaCardImg"
              width={200}
            />
            <p className="nossaEmpresaCardText1">{t.product1}</p>
          </div>

          <div className="nossaEmpresaCard">
            <img
              src="/img/dairy-products.png"
              alt="Banner"
              className="nossaEmpresaCardImg"
              width={200}
            />
            <p className="nossaEmpresaCardText1">{t.product2}</p>
          </div>

          <div className="nossaEmpresaCard">
            <img
              src="/img/products.png"
              alt="Banner"
              className="nossaEmpresaCardImg"
              width={200}
            />
            <p className="nossaEmpresaCardText1">{t.product3}</p>
          </div>

          <div className="nossaEmpresaCard">
            <img
              src="/img/grain.png"
              alt="Banner"
              className="nossaEmpresaCardImg"
              width={200}
            />
            <p className="nossaEmpresaCardText1">{t.product4}</p>
          </div>

          <div className="nossaEmpresaCard">
            <img
              src="/img/equipment.png"
              alt="Banner"
              className="nossaEmpresaCardImg"
              width={200}
            />
            <p className="nossaEmpresaCardText1">{t.product5}</p>
          </div>

          <div className="nossaEmpresaCard">
            <img
              src="/img/house.png"
              alt="Banner"
              className="nossaEmpresaCardImg"
              width={200}
            />
            <p className="nossaEmpresaCardText1">{t.product6}</p>
          </div>

          <div className="nossaEmpresaCard">
            <img
              src="/img/toys.png"
              alt="Banner"
              className="nossaEmpresaCardImg"
              width={200}
            />
            <p className="nossaEmpresaCardText1">{t.product7}</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
