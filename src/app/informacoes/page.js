"use client";

import "./informacao.css";
import Navbar from "@/components/navbar/Navbar";
import { useLanguage } from "../../context/LanguageContext";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// react
import { useState, useEffect } from "react";

import Footer from "@/components/footer/footer";

const translations = {
  pt: {
    // Títulos e subtítulos
    mainTitle: "Registros emitidos pelo Siscomex",
    importTitle: "Importação",
    exportTitle: "Exportação",
    containerTitle: "Tipos de containers",
    differenceTitle: "QUAL É A DIFERENÇA ENTRE UMA EXPORTAÇÃO INDIRETA E DIRETA",
    siscomexTitle: "O QUE É SISCOMEX?",
    ncmHsTitle: "O QUE SÃO NCM E HS?",

    // Listas e textos descritivos
    importList: [
      "L.I. Licença de Importação",
      "Extrato de L.I.",
      "D.I. Declaração de Importação",
      "Extrato de D.I.",
      "R.O.F. Registro de Operação Financeira.",
      "C.I. Comprovante de Importação",
    ],
    exportList: [
      "R.E. Registro de Exportação",
      "R.V. Registro de Venda",
      "R.O.C. Registro de Operação de Crédito",
      "S.D. Solicitação de Despacho",
      "C.E. Comprovante de Exportação",
    ],
    differenceText1: "A exportação direta ocorre quando a empresa vendedora negocia diretamente com o comprador situado no exterior. Em outras palavras, não há um intermediário na transação.",
    differenceText2: "A exportação indireta, por sua vez, é realizada mediante a intermediação de uma firma. O vendedor nacional não realiza a exportação propriamente dita, mas vende para outra empresa, situada no país, portanto, uma venda no mercado interno, e esta última fará a operação de exportação.",
    siscomexText: "Siscomex é um instrumento informatizado em que é exercido o controle governamental do comércio exterior brasileiro. Tem o propósito de conectar os principais usuários do sistema: exportadores; importadores; Secretaria da Receita Federal (Ministério da Fazenda); Secretaria de Comércio Exterior (Ministério da Indústria do Comércio e do Turismo); Banco Central do Brasil; Banco do Brasil S.A. e bancos autorizados a operar em câmbio de moeda estrangeira; representantes legais de empresas exportadoras e importadoras; empresas de transporte; e outras secretarias e departamentos dos demais ministérios, diretamente relacionados com diversos aspectos do comércio exterior brasileiro.",
    ncmHsText1: "O código NCM e HS Code, são números que cada produto possui para saber a classificação verdadeira do mesmo. Uma forma de se ter segurança e saber o que está sendo importado.",
    ncmHsText2: "Todos os produtos que são adquiridos fora do Brasil, precisam de uma codificação especifica para se ter a descrição correta de cada mercadoria. E o HS Code é um padrão universal, em que todo o mundo sabe suas especificações.",
    ncmHsText3: "O HS Code é um código universal, no qual através dele você consegue saber qual o tipo de mercadoria será transportado para outro país. E este número é necessário para a importação.",
    ncmHsText4: "O código é de 8 dígitos, sendo que para HS Code eles são divididos por setores, para saber quais são as classificações para cada tipo de mercadoria. No qual os dois primeiros dígitos são denominados capítulos, os dois próximos a posição, os outros dois subposição e o restante já se adequa a codificação do NCM.",
  },
  en: {
    // Titles and subtitles
    mainTitle: "Records issued by Siscomex",
    importTitle: "Import",
    exportTitle: "Export",
    containerTitle: "Types of containers",
    differenceTitle: "WHAT IS THE DIFFERENCE BETWEEN INDIRECT AND DIRECT EXPORT?",
    siscomexTitle: "WHAT IS SISCOMEX?",
    ncmHsTitle: "WHAT ARE NCM AND HS?",

    // Lists and descriptive texts
    importList: [
      "I.L. Import License (Licença de Importação)",
      "I.L. Extract",
      "I.D. Import Declaration (Declaração de Importação)",
      "I.D. Extract",
      "F.O.R. Financial Operation Record (Registro de Operação Financeira).",
      "I.C. Import Certificate (Comprovante de Importação)",
    ],
    exportList: [
      "E.R. Export Record (Registro de Exportação)",
      "S.R. Sales Record (Registro de Venda)",
      "C.O.R. Credit Operation Record (Registro de Operação de Crédito)",
      "D.R. Dispatch Request (Solicitação de Despacho)",
      "E.C. Export Certificate (Comprovante de Exportação)",
    ],
    differenceText1: "Direct export occurs when the selling company negotiates directly with the buyer located abroad. In other words, there is no intermediary in the transaction.",
    differenceText2: "Indirect export, on the other hand, is carried out through the intermediation of a company. The national seller does not perform the export itself but sells to another company located in the country, therefore, a sale on the domestic market, and the latter will carry out the export operation.",
    siscomexText: "Siscomex is a computerized instrument through which government control of Brazilian foreign trade is exercised. Its purpose is to connect the main users of the system: exporters; importers; Federal Revenue Service (Ministry of Finance); Foreign Trade Secretariat (Ministry of Industry, Commerce, and Tourism); Central Bank of Brazil; Banco do Brasil S.A. and banks authorized to operate in foreign currency exchange; legal representatives of exporting and importing companies; transport companies; and other secretariats and departments of other ministries, directly related to various aspects of Brazilian foreign trade.",
    ncmHsText1: "The NCM and HS Code are numbers that each product has to know its true classification. It is a way to have security and know what is being imported.",
    ncmHsText2: "All products acquired outside Brazil need a specific codification to have the correct description of each merchandise. And the HS Code is a universal standard, whose specifications are known worldwide.",
    ncmHsText3: "The HS Code is a universal code, through which you can know the type of merchandise that will be transported to another country. This number is necessary for importation.",
    ncmHsText4: "The code has 8 digits, and for HS Code they are divided into sectors, to know the classifications for each type of merchandise. The first two digits are called chapters, the next two are the position, the next two are the sub-position, and the rest already adapts to the NCM codification.",
  },
};

export default function PoliticaDePrivacidade() {
  const [slide, setSlide] = useState(2);
  const { locale } = useLanguage();
  const t = translations[locale];

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 600) {
        setSlide(1);
      } else {
        setSlide(2);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const container = [
    { id: 1, img: "/img/tiposDeContainers/CONTAINER-20-DRY.png" },
    { id: 2, img: "/img/tiposDeContainers/CONTAINER-40-DRY.png" },
    { id: 3, img: "/img/tiposDeContainers/CONTAINER-40-HC.png" },
    { id: 4, img: "/img/tiposDeContainers/FLAT-RACK-20.png" },
    { id: 5, img: "/img/tiposDeContainers/FLAT-RACK-40.png" },
    { id: 6, img: "/img/tiposDeContainers/OPEN-TOP-20.png" },
    { id: 7, img: "/img/tiposDeContainers/OPEN-TOP-40.png" },
    { id: 8, img: "/img/tiposDeContainers/PLATAFORMA-20.png" },
    { id: 9, img: "/img/tiposDeContainers/PLATAFORMA-40.png" },
    { id: 10, img: "/img/tiposDeContainers/REFRIGERATED-40-REEFER.png" },
    { id: 11, img: "/img/tiposDeContainers/VENTILATED.png" },
  ];

  return (
    <div>
      <Navbar />
      <div className="informacoesMain">
        <div className="informacoestext">
          <div className="informacoesListra">-</div>
          <h1 className="informacoesTitle">{t.mainTitle}</h1>
        </div>
        <div className="informacoesSection">
          <div className="informacoesDeImportacaoEexportacao">
            <div className="informacoesConteudo">
              <p className="informacoesConteudoTitle">{t.importTitle}</p>
              <ul>
                {t.importList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <img src="/img/Design-sem-nome-5-1.png" />

            <div className="informacoesConteudo">
              <p className="informacoesConteudoTitle">{t.exportTitle}</p>
              <ul>
                {t.exportList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="informacoestext">
            <div className="informacoesListra">-</div>
            <h1 className="informacoesTitle">{t.containerTitle}</h1>
          </div>

          <div className="TiposDeContainers">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={slide}
              spaceBetween={0}
              navigation={true}
              pagination={{ clickable: true }}
              autoplay={{ delay: 8000 }}
              className="mySwiper"
            >
              {container.map((item) => (
                <SwiperSlide key={item.id} className="swiperSlide">
                  <img src={item.img} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="informacoesSobreEla">
            <h2 className="informacoesSobreElaTitle">
              {t.differenceTitle}
            </h2>
            <br />
            <p>{t.differenceText1}</p>
            <br />
            <p>{t.differenceText2}</p>
          </div>

          <div className="informacoesSobreEla">
            <h2 className="informacoesSobreElaTitle">{t.siscomexTitle}</h2>
            <br />
            <p>{t.siscomexText}</p>
          </div>

          <div className="informacoesSobreEla">
            <h2 className="informacoesSobreElaTitle">{t.ncmHsTitle}</h2>
            <br />
            <p>{t.ncmHsText1}</p>
            <br />
            <p>{t.ncmHsText2}</p>
            <br />
            <p>{t.ncmHsText3}</p>
            <br />
            <p>{t.ncmHsText4}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}