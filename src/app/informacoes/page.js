"use client";

import "./informacao.css";
import Link from "next/link";
import "../../components/navbar/Navbar.css";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
//react
import { useState, useEffect } from "react";

import Footer from "@/components/footer/footer";

export default function PoliticaDePrivacidade() {
  const [slide, setSlide] = useState(2);

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
  },[]);
  const container = [
    {
      id: 1,
      img: "/img/tiposDeContainers/CONTAINER-20-DRY.png",
    },
    {
      id: 2,
      img: "/img/tiposDeContainers/CONTAINER-40-DRY.png",
    },
    {
      id: 3,
      img: "/img/tiposDeContainers/CONTAINER-40-HC.png",
    },
    {
      id: 4,
      img: "/img/tiposDeContainers/FLAT-RACK-20.png",
    },
    {
      id: 5,
      img: "/img/tiposDeContainers/FLAT-RACK-40.png",
    },
    {
      id: 6,
      img: "/img/tiposDeContainers/OPEN-TOP-20.png",
    },
    {
      id: 7,
      img: "/img/tiposDeContainers/OPEN-TOP-40.png",
    },
    {
      id: 8,
      img: "/img/tiposDeContainers/PLATAFORMA-20.png",
    },
    {
      id: 9,
      img: "/img/tiposDeContainers/PLATAFORMA-40.png",
    },
    {
      id: 10,
      img: "/img/tiposDeContainers/REFRIGERATED-40-REEFER.png",
    },
    {
      id: 11,
      img: "/img/tiposDeContainers/VENTILATED.png",
    },
  ];
  return (
    <div>
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

        <h2 className="titleHome">Informações</h2>
        <div className="languagens">
          <img
            decoding="async"
            src="https://movaimpex.com.br/wp-content/uploads/2021/11/united-states-2.png"
            alt="Bandeira EUA"
            loading="lazy"
            className="Bandeira"
          />
          <img
            decoding="async"
            src="https://movaimpex.com.br/wp-content/uploads/2021/11/brazil-1.png"
            alt="Bandeira Brasil"
            loading="lazy"
            className="Bandeira"
          />
        </div>
      </div>

      <div className="informacoesMain">
        <div className="informacoestext">
          <div className="informacoesListra">-</div>
          <h1 className="informacoesTitle">Registros emitidos pelo Siscomex</h1>
        </div>
        <div className="informacoesSection">
          <div className="informacoesDeImportacaoEexportacao">
            <div className="informacoesConteudo">
              <p className="informacoesConteudoTitle">Importação</p>
              <ul>
                <li>L.I. Licença de Importação</li>
                <li>Extrato de L.I.</li>
                <li>D.I. Declaração de Importação</li>
                <li>Extrato de D.I.</li>
                <li>R.O.F. Registro de Operação Financeira.</li>
                <li>C.I. Comprovante de Importação</li>
              </ul>
            </div>

            <img src="/img/Design-sem-nome-5-1.png" />

            <div className="informacoesConteudo">
              <p className="informacoesConteudoTitle">Exportação</p>
              <ul>
                <li>R.E. Registro de Exportação</li>
                <li>R.V. Registro de Venda</li>
                <li>R.O.C. Registro de Operação de Crédito</li>
                <li>S.D. Solicitação de Despacho</li>
                <li>C.E. Comprovante de Exportação</li>
              </ul>
            </div>
          </div>

          <div className="informacoestext">
            <div className="informacoesListra">-</div>
            <h1 className="informacoesTitle">Tipos de containers</h1>
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
              QUAL É A DIFERENÇA ENTRE UMA EXPORTAÇÃO INDIRETA E DIRETA
            </h2>
            <br />
            <p>
              A exportação direta ocorre quando a empresa vendedora negocia
              diretamente com o comprador situado no exterior. Em outras
              palavras, não há um intermediário na transação.
            </p>
            <br />
            <p>
              A exportação indireta, por sua vez, é realizada mediante a
              intermediação de uma firma. O vendedor nacional não realiza a
              exportação propriamente dita, mas vende para outra empresa,
              situada no país, portanto, uma venda no mercado interno, e esta
              última fará a operação de exportação.
            </p>
          </div>

          <div className="informacoesSobreEla">
            <h2 className="informacoesSobreElaTitle">O QUE É SISCOMEX?</h2>
            <br />
            <p>
              Siscomex é um instrumento informatizado em que é exercido o
              controle governamental do comércio exterior brasileiro. Tem o
              propósito de conectar os principais usuários do sistema:
              exportadores; importadores; Secretaria da Receita Federal
              (Ministério da Fazenda); Secretaria de Comércio Exterior
              (Ministério da Indústria do Comércio e do Turismo); Banco Central
              do Brasil; Banco do Brasil S.A. e bancos autorizados a operar em
              câmbio de moeda estrangeira; representantes legais de empresas
              exportadoras e importadoras; empresas de transporte; e outras
              secretarias e departamentos dos demais ministérios, diretamente
              relacionados com diversos aspectos do comércio exterior
              brasileiro.
            </p>
          </div>

          <div className="informacoesSobreEla">
            <h2 className="informacoesSobreElaTitle">O QUE SÃO NCM E HS?</h2>
            <br />
            <p>
              O código NCM e HS Code, são números que cada produto possui para
              saber a classificação verdadeira do mesmo. Uma forma de se ter
              segurança e saber o que está sendo importado.
            </p>
            <br />
            <p>
              Todos os produtos que são adquiridos forem do Brasil, precisam de
              uma codificação especifica para se ter a descrição correta de cada
              mercadoria. E o HS Code é um padrão universal, em que todo o mundo
              sabe suas especificações.
            </p>
            <br />
            <p>
              O HS Code é um código universal, no qual através dele você
              consegue saber qual o tipo de mercadoria será transportado para
              outro país. E este número é necessário para a importação.
            </p>
            <br />
            <p>
              O código é de 8 dígitos, sendo que para HS Code eles são divididos
              por setores, para saber quais são as classificações para cada tipo
              de mercadoria. No qual os dois primeiros dígitos são denominados
              capítulos, os dois próximos a posição, os outros dois subposição e
              o restante já se adequa a codificação do NCM.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
