import React from "react";
import "./servicos.css";
import Link from "next/link";
import "../../components/navbar/Navbar.css";
import Footer from "@/components/footer/footer";
export default function Servicos() {
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
        <div className="titleNav">
          <h2 className="titleHome">
            <Link href="/">Home</Link>
          </h2>
          <h2 className="titleHome">
            <Link href="/nossaEmpresa">
              Nossa Empresa
            </Link>
          </h2>
          <h2 className="titleHome">
            <Link href="/servicos" style={{ color: "#21A2BF" }}> Serviços</Link>
          </h2>
          <h2 className="titleHome">
            <Link href="/informacoes">Informações</Link>
          </h2>
          <h2 className="titleHome">
            <Link href="/contato">Contato</Link>
          </h2>
        </div>
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
      <div className="servicosMain">
        <div className="servicosTitleMain">
          <p>Importação e Exportação</p>
          <p>Assessoria Gestão da logística</p>
          <p> Despacho Aduaneiro</p>
        </div>
        <div className="servicosSection">
          <p className="servicosTitle">
            Prestamos serviços para todas as empresas que queiram vender seus
            produtos em outros mercados.
          </p>
          <br />
          <p className="servicosText">
            Abrange desde a identificação do cliente, negociação, preparação dos
            documentos, contratação do frete internacional (porto a porto ou
            porta a porta) e, administração de todas as etapas para os despachos
            aduaneiros, do carregamento na origem da carga até a entrega ao
            importador. <br />
            <br /> rabalhamos com as modalidades de exportação aérea e marítima,
            tanto na categoria consolidada, quando no preenchimento de
            contêineres de 20 pés e 40 pés.
            <br />
            <br /> Atuamos com todo tipo de mercadoria, alimentos perecíveis e
            não-perecíveis, refrigerados, roupas, livros, máquinas e
            equipamentos, produtos de limpeza e cargas IMO, dentre outros.
            <br />
            <br />
            Nossos profissionais auxiliam na análise dos produtos a serem
            exportados e identificam se há necessidade de licenças especiais
            para a importação por outros países.
          </p>
        </div>

        <div className="servicosSection">
          <p className="servicosTitle">
            Nosso serviço abrange todas as etapas das importações, iniciando
            pela busca de produtos no mercado externo, seguindo com negociação
            dos custos até o embarque.
          </p>
          <br />
          <p className="servicosText">
            Cotamos todos os custos do desembaraço e o cálculo dos impostos (I
            I, IPI, ICMS, PIS e COFINS) e, orçamos o transporte terrestre ou
            aéreo em todo o território brasileiro, para a entrega dos produtos
            importados. <br />
            <br /> Nossos profissionais auxiliam na análise dos produtos serem
            nacionalizados no território através do NCM e HS e consultamos os
            departamentos governamentais para nos informarmos se há necessidade
            de licenças ou cotas para Importação (L. I.) para os produtos serem
            nacionalizados para o território brasileiro. Nossa empresa
            providência todos os trâmites para a emissão da L. I. pelo INMETRO e
            pelo MAPA (Ministério da Agricultura, Pecuária e Abastecimento).
            <br />
            <br /> Também prestamos serviços de busca de produtos e fornecedores
            em outros países para empresas que necessitam importar, mas ainda
            não possuem um fornecedor no exterior.
          </p>
        </div>

        <div className="servicosSection">
          <p className="servicosTitle">
            Realizamos a análise da legislação aduaneira do destino e da origem
            da carga, com base no NCM e HS, planilhamos as previsões de todos os
            custos, incluindo os impostos e taxas locais e elaboramos a emissão
            das licenças de exportação e importação, bem como o Registro de
            Exportação e Declaração de Importação.
          </p>
          <br />
          <p className="servicosText">
            Assessoramos as empresas, da elaboração do custo do produto para
            exportação e importação, passando pela análise de NCM e HS,
            informando sobre redução e desoneração dos impostos; até o
            desembaraço aduaneiro, na importação e exportação; e entrega em
            depósitos do importador, facilitando a participação e o acesso das
            empresas no mercado internacional. <br />
            <br /> Auxiliamos na confecção de documentos necessários para os
            trâmites de importação e exportação, atendendo todos os requisitos
            legais para desembaraço das mercadorias.
            <br />
            <br /> Instruímos sobre a emissão de Notas Fiscais de exportação
            direta e indireta, auxiliando desde o cadastro do produto com seu
            NCM, até a utilização do CFOP compatível.
            <br />
            <br /> Gerenciamos toda a parte logística da importação e
            exportação, tanto nacional como internacional, garantindo a coleta
            na origem e entrega da mercadoria no destino contratado.
            <br />
            <br /> Fazemos o acompanhamento da mercadoria desde a sua origem até
            o destino, contando com a parceria de transportadoras e armazéns.
            <br />
            <br />
            Operamos na contratação de frete nacional e internacional, atuando
            com uma equipe de agentes de carga e armadores altamente
            capacitados.
          </p>
        </div>

        <div className="servicosSection">
          <p className="servicosTitle">
            Efetuamos o desembaraço aduaneiro para liberação da carga nos portos
            e aeroportos do Brasil.
          </p>
          <br />
          <p className="servicosText">
            • Desembaraço aduaneiro e emissão de D. I. (Declaração de
            Importação), R. E. (Registro de Exportação) e D.S.E. (Declaração
            Simplificada de Exportação) e emissão de todos os registros e
            comprovantes do Siscomex;
            <br />
            <br />• Contratação de seguros;
            <br />
            <br /> • Elaboração de documentos na Importação e Exportação e
            certificados para exportação; <br />
            <br />• Análise da legislação quanto ao NCM e HS do produto, para
            verificar se há impedimentos ou se o produto necessita de anuência
            de algum órgão governamental.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
