"use client";

import React from "react";
import "./politica.css";
import "../servicos/servicos.css";
import "../../components/navbar/Navbar.css";
import Link from "next/link";
import Footer from "../../components/footer/footer";

import { useEffect, useState } from "react";

import { RiMenu2Line } from "react-icons/ri";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useLanguage } from "../../context/LanguageContext";

const translations = {
  pt: {
    titlemain: "POLÍTICAS DE PRIVACIDADE",
    // Títulos das seções
    section1Title: "SEÇÃO 1 – INFORMAÇÕES GERAIS",
    section2Title:
      "SEÇÃO 2 – COMO RECOLHEMOS OS DADOS PESSOAIS DO USUÁRIO E DO VISITANTE?",
    section3Title:
      "SEÇÃO 3 – QUAIS DADOS PESSOAIS RECOLHEMOS SOBRE O USUÁRIO E VISITANTE?",
    section4Title:
      "SEÇÃO 4 – PARA QUE FINALIDADES UTILIZAMOS OS DADOS PESSOAIS DO USUÁRIO E VISITANTE?",
    section5Title:
      "SEÇÃO 5 – POR QUANTO TEMPO OS DADOS PESSOAIS FICAM ARMAZENADOS?",
    section6Title: "SEÇÃO 6 – SEGURANÇA DOS DADOS PESSOAIS ARMAZENADOS",
    section7Title: "SEÇÃO 7 – COMPARTILHAMENTO DOS DADOS",
    section8Title:
      "SEÇÃO 8 – OS DADOS PESSOAIS ARMAZENADOS SERÃO TRANSFERIDOS A TERCEIROS?",
    section9Title: "SEÇÃO 9 – COOKIES OU DADOS DE NAVEGAÇÃO",
    section10Title: "SEÇÃO 10 – CONSENTIMENTO",
    section11Title: "SEÇÃO 11 – ALTERAÇÕES PARA ESSA POLÍTICA DE PRIVACIDADE",
    section12Title: "SEÇÃO 12 – JURISDIÇÃO PARA RESOLUÇÃO DE CONFLITOS",

    // Textos das seções
    section1Text1:
      "A presente Política de Privacidade contém informações sobre coleta, uso, armazenamento, tratamento e proteção dos dados pessoais dos usuários e visitantes do site MOVAIMPEX.COM.BR, com a finalidade de demonstrar absoluta transparência quanto ao assunto e esclarecer a todos interessados sobre os tipos de dados que são coletados, os motivos da coleta e a forma como os usuários podem gerenciar ou excluir as suas informações pessoais.",
    section1Text2:
      "Esta Política de Privacidade aplica-se a todos os usuários e visitantes do site MOVAIMPEX.COM.BR e integra os Termos e Condições Gerais de Uso do site MOVAIMPEX.COM.BR, devidamente inscrita no CNPJ sob o nº 26.406.317/0001-16, situado em AMERICANA/SP.",
    section1Text3:
      "O presente documento foi elaborado em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei 13.709/18), o Marco Civil da Internet (Lei 12.965/14) (e o Regulamento da UE n. 2016/6790). Ainda, o documento poderá ser atualizado em decorrência de eventual atualização normativa, razão pela qual se convida o usuário a consultar periodicamente esta seção.",

    section2Text1:
      "Os dados pessoais do usuário e visitante são recolhidos pela plataforma da seguinte forma:",
    section2List1:
      "Quando o usuário solicita nosso contato via mensagem na plataforma MOVAIMPEX.COM.BR: esses dados são os dados de identificação básicos, como e-mail, nome e telefone. A partir deles, podemos identificar o usuário e o visitante, além de garantir uma maior segurança e bem-estar às suas necessidades. Ficam cientes os usuários e visitantes de que informações inseridas na plataforma estará acessível a todos os demais integrantes da equipe MOVA IMPEX IMPORTAÇÃO E EXPORTAÇÃO LTDA.",
    section2List2:
      "Quando um usuário e visitante acessa páginas do site MOVAIMPEX.COM.BR: as informações sobre interação e acesso são coletadas pela empresa para garantir uma melhor experiência ao usuário e visitante. Estes dados podem tratar sobre as palavras-chaves utilizadas em uma busca, o compartilhamento de um documento específico, comentários, visualizações de páginas, perfis, a URL de onde o usuário e visitante provêm, o navegador que utilizam e seus IPs de acesso, dentre outras que poderão ser armazenadas e retidas.",

    section3Text1:
      "Os dados pessoais do usuário e visitante recolhidos são os seguintes:",
    section3List1:
      "Dados para entrar em contato conosco pela plataforma MOVAIMPEX.COM.BR: e-mail, nome e telefone.",
    section3List2:
      "Dados para otimização da navegação: acesso a páginas, palavras-chave utilizadas na busca, recomendações, comentários, interação com outros perfis e usuários, perfis seguidos, endereço de IP.",
    section3List3:
      "Dados para concretizar transações: a MOVA IMPEX não realiza nem faz intermediação de negócios entre seus usuários pela plataforma MOVAIMPEX.COM.BR, apenas disponibiliza um espaço para que seus usuários entre em contato conosco a fim de tratar sobre dúvidas, informações e orçamentos.",

    section4Text1:
      "Os dados pessoais do usuário e do visitante coletados e armazenados pela plataforma MOVAIMPEX.COM.BR tem por finalidade:",
    section4List1:
      "Bem-estar do usuário e visitante: aprimorar o serviço oferecido, facilitar, agilizar e cumprir os compromissos estabelecidos entre o usuário e a empresa, melhorar a experiência dos usuários e fornecer funcionalidades específicas a depender das características básicas do usuário.",
    section4List2:
      "Melhorias da plataforma: compreender como o usuário utiliza os serviços da plataforma, para ajudar no desenvolvimento de negócios e técnicas.",
    section4List3:
      "Comercial: os dados são usados para personalizar o conteúdo oferecido e gerar subsídio à plataforma para a melhora da qualidade no funcionamento dos serviços.",
    section4List4:
      "Previsão do perfil do usuário: tratamento automatizados de dados pessoais para avaliar o uso na plataforma. O tratamento de dados pessoais para finalidades não previstas nesta Política de Privacidade somente ocorrerá mediante comunicação prévia ao usuário, de modo que os direitos e obrigações aqui previstos permanecem aplicáveis.",

    section5Text1:
      "Os dados pessoais do usuário e visitante são armazenados pela plataforma durante o período necessário para a prestação do serviço ou o cumprimento das finalidades previstas no presente documento, conforme o disposto no inciso I do artigo 15 da Lei 13.709/18.",
    section5Text2:
      "Os dados podem ser removidos ou anonimizados a pedido do usuário, excetuando os casos em que a lei oferecer outro tratamento.",
    section5Text3:
      "Ainda, os dados pessoais dos usuários apenas podem ser conservados após o término de seu tratamento nas seguintes hipóteses previstas no artigo 16 da referida lei:",
    section5List1:
      "I – Cumprimento de obrigação legal ou regulatória pelo controlador;",
    section5List2:
      "II – Estudo por órgão de pesquisa, garantida, sempre que possível, a anonimização dos dados pessoais;",
    section5List3:
      "III – Transferência a terceiro, desde que respeitados os requisitos de tratamento de dados dispostos nesta Lei;",
    section5List4:
      "IV – Uso exclusivo do controlador, vedado seu acesso por terceiro, e desde que anonimizados os dados.",

    section6Text1:
      "A plataforma se compromete a aplicar as medidas técnicas e organizativas aptas a proteger os dados pessoais de acessos não autorizados e de situações de destruição, perda, alteração, comunicação ou difusão de tais dados.",
    section6Text2:
      "A plataforma não se exime de responsabilidade por culpa exclusiva de terceiros, como em caso de ataque de hackers ou crackers, ou culpa exclusiva do usuário, como no caso em que ele mesmo transfere seus dados a terceiros. O site se compromete a comunicar o usuário em caso de alguma violação de segurança dos seus dados pessoais.",
    section6Text3:
      "Os dados pessoais armazenados são tratados com confidencialidade, dentro dos limites legais. No entanto, podemos divulgar suas informações pessoais caso sejamos obrigados pela lei para fazê-lo ou se você violar nossos Termos de Serviço.",

    section7Text1:
      "O compartilhamento de dados do usuário ocorre apenas com os dados referentes a publicações realizadas pelo próprio usuário, tais ações são compartilhadas publicamente com todos os integrantes da equipe MOVA IMPEX IMPORTAÇÃO E EXPORTAÇÃO LTDA.",
    section7Text2:
      "Os dados do perfil do usuário são compartilhados publicamente em sistemas de busca e dentro da plataforma, sendo permitido ao usuário modificar tal configuração para que seu perfil não apareça nos resultados de busca de tais ferramentas.",

    section8Text1:
      "Os dados pessoais não serão compartilhados com terceiros, portanto, caso o usuário acesse qualquer anúncio pertencente a outro site, toda a responsabilidade da referida proteção dos dados desse usuário, se transfere ao novo site acessado Ao ser redirecionado para um aplicativo ou site de terceiros, você não será mais regido por essa Política de Privacidade ou pelos Termos de serviço da nossa plataforma. Não somos responsáveis pelas práticas de privacidade de outros sites e lhe incentivamos a ler as declarações de privacidade deles.",

    section9Text1:
      "Os cookies referem-se a arquivos de texto enviados pela plataforma ao computador do usuário e visitante e que nele ficam armazenados, com informações relacionadas à navegação no site. Tais informações são relacionadas aos dados de acesso como local e horário de acesso e são armazenadas pelo navegador do usuário e visitante para que o servidor da plataforma possa lê-las posteriormente a fim de personalizar os serviços da plataforma. O usuário e o visitante da plataforma MOVAIMPEX.COM.BR manifesta conhecer e aceitar que pode ser utilizado um sistema de coleta de dados de navegação mediante à utilização de cookies.",
    section9Text2:
      "O cookie persistente permanece no disco rígido do usuário e visitante depois que o navegador é fechado e será usado pelo navegador em visitas subsequentes ao site. Os cookies persistentes podem ser removidos seguindo as instruções do seu navegador.",
    section9Text3:
      "Já o cookie de sessão é temporário e desaparece depois que o navegador é fechado. É possível redefinir seu navegador da web para recusar todos os cookies, porém alguns recursos da plataforma podem não funcionar corretamente se a capacidade de aceitar cookies estiver desabilitada.",

    section10Text1:
      "Ao utilizar os serviços e fornecer as informações pessoais na plataforma MOVAIMPEX.COM.BR, você está consentindo com a presente Política de Privacidade. O usuário tem direito de retirar o seu consentimento a qualquer tempo, para tanto deve entrar em contato através do email contato@movaimpex.com.br",

    section11Text1:
      "Reservamos o direito de modificar essa Política de Privacidade a qualquer momento, então, é recomendável que o usuário e visitante revise-a com frequência.",
    section11Text2:
      "As alterações e esclarecimentos vão surtir efeito imediatamente após sua publicação na plataforma. Quando realizadas alterações, será atualizado a data de modificação informado na primeira linha deste presente termo apresentado. Ao utilizar o serviço ou fornecer informações pessoais após eventuais modificações, o usuário e visitante demonstra sua concordância com as novas normas. Diante da fusão ou venda da plataforma à outra empresa os dados dos usuários podem ser transferidos para os novos proprietários para que a permanência dos serviços oferecidos.",

    section12Text1:
      "Para a solução de controvérsias decorrentes do presente instrumento será aplicado integralmente o Direito brasileiro. Os eventuais litígios deverão ser apresentados no foro da comarca em que se encontra a sede da empresa.",
  },
  en: {
    titlemain: "PRIVACY POLICY",

    // Section titles
    section1Title: "SECTION 1 – GENERAL INFORMATION",
    section2Title:
      "SECTION 2 – HOW DO WE COLLECT PERSONAL USER AND VISITOR DATA?",
    section3Title:
      "SECTION 3 – WHAT PERSONAL DATA DO WE COLLECT ABOUT THE USER AND VISITOR?",
    section4Title:
      "SECTION 4 – FOR WHAT PURPOSES DO WE USE PERSONAL USER AND VISITOR DATA?",
    section5Title: "SECTION 5 – HOW LONG IS PERSONAL DATA STORED?",
    section6Title: "SECTION 6 – SECURITY OF STORED PERSONAL DATA",
    section7Title: "SECTION 7 – DATA SHARING",
    section8Title:
      "SECTION 8 – WILL PERSONAL DATA STORED WILL BE TRANSFERRED TO THIRD PARTIES?",
    section9Title: "SECTION 9 – COOKIES OR NAVIGATION DATA",
    section10Title: "SECTION 10 – CONSENT",
    section11Title: "SECTION 11 – CHANGES TO THIS PRIVACY POLICY",
    section12Title: "SECTION 12 – JURISDICTION FOR CONFLICT RESOLUTION",

    // Section texts
    section1Text1:
      "This Privacy Policy contains information on the collection, use, storage, treatment and protection of the personal data of users and visitors to the MOVAIMPEX.COM.BR website, in order to demonstrate absolute transparency on the subject and clarify the types of information to all interested parties of data that is collected, the reasons for collecting it, and how users can manage or delete their personal information.",
    section1Text2:
      "This Privacy Policy applies to all users and visitors of the MOVAIMPEX.COM.BR website and integrates the General Terms and Conditions of Use of the MOVAIMPEX.COM.BR website, duly registered with the CNPJ under No. 26.406.317/0001-16, located in AMERICANA/SP.",
    section1Text3:
      "This document was prepared in accordance with the General Law for the Protection of Personal Data (Law 13.709/18), the Marco Civil da Internet (Law 12.965/14) (and EU Regulation n. 2016/6790). Also, the document may be updated as a result of any regulatory update, which is why the user is invited to periodically consult this section.",

    section2Text1:
      "User and visitor personal data are collected by the platform as follows:",
    section2List1:
      "When the user requests our contact via message on the MOVAIMPEX.COM.BR platform: these data are the basic identification data, such as e-mail, name and telephone. From them, we can identify the user and the visitor, in addition to ensuring greater security and well-being for their needs. Users and visitors are aware that information entered on the platform will be accessible to all other members of the MOVA IMPEX IMPORTAÇÃO E EXPORTAÇÃO LTDA team.",
    section2List2:
      "When a user and visitor access pages of the MOVAIMPEX.COM.BR website: information about interaction and access is collected by the company to ensure a better experience for the user and visitor. This data can deal with the keywords used in a search, the sharing of a specific document, comments, page views, profiles, the URL from which the user and visitor come, the browser they use and their access IPs, among others that can be stored and retained.",

    section3Text1:
      "The personal data of the user and visitor collected are as follows:",
    section3List1:
      "Data to contact us through the MOVAIMPEX.COM.BR platform: e-mail, name and telephone.",
    section3List2:
      "Data for navigation optimization: access to pages, keywords used in the search, recommendations, comments, interaction with other profiles and users, profiles followed, IP address.",
    section3List3:
      "Data to carry out transactions: MOVA IMPEX does not carry out or mediate business between its users through the MOVAIMPEX.COM.BR platform, it only provides a space for its users to contact us in order to deal with questions, information and budgets.",

    section4Text1:
      "User and visitor personal data collected and stored by the MOVAIMPEX.COM.BR platform is intended to:",
    section4List1:
      "User and visitor well-being: improving the service offered, facilitating, streamlining and fulfilling the commitments established between the user and the company, improving the user experience and providing specific functionality depending on the user’s basic characteristics.",
    section4List2:
      "Platform Improvements: Understand how the user uses platform services to help with business and technical development.",
    section4List3:
      "Commercial: the data is used to personalize the content offered and generate subsidy for the platform to improve the quality of the services’ operation.",
    section4List4:
      "User profile preview: automated processing of personal data to assess usage on the platform. The processing of personal data for purposes not provided for in this Privacy Policy will only occur upon prior notice to the user, so that the rights and obligations set forth herein remain applicable.",

    section5Text1:
      "The personal data of the user and visitor are stored by the platform for the period necessary to provide the service or fulfill the purposes set out in this document, as provided for in item I of article 15 of Law 13.709/18.",
    section5Text2:
      "Data can be removed or anonymized at the user’s request, except in cases where the law provides for another treatment.",
    section5Text3:
      "Furthermore, the personal data of users can only be saved after the end of their treatment in the following cases provided for in article 16 of the aforementioned law:",
    section5List1:
      "I – Compliance with a legal or regulatory obligation by the controller;",
    section5List2:
      "II – Study by a research body, ensuring, whenever possible, the anonymization of personal data;",
    section5List3:
      "III – Transfer to a third party, provided that the data processing requirements set out in this Law are respected;",
    section5List4:
      "IV – Exclusive use of the control access by a third party, and provided that the data is anonymized.",

    section6Text1:
      "The platform undertakes to apply technical and organizational measures capable of protecting personal data from unauthorized access and from situations of destruction, loss, alteration, communication or dissemination of such data.",
    section6Text2:
      "The platform does not exempt itself from liability for the exclusive fault of third parties, such as in the case of a hacker or cracker attack, or the sole fault of the user, as in the case where he himself transfers his data to third parties. The website undertakes to notify the user in the event of any breach of the security of their personal data.",
    section6Text3:
      "The stored personal data is treated confidentially, within legal limits. However, we may disclose your personal information if we are required by law to do so or if you violate our Terms of Service.",

    section7Text1:
      "The sharing of user data only occurs with data referring to publications made by the user, such actions are shared publicly with all members of the MOVA IMPEX IMPORTAÇÃO E EXPORTAÇÃO LTDA team.",
    section7Text2:
      "User profile data is shared publicly on search engines and within the platform, and the user is allowed to modify this setting so that their profile does not appear in the search results of such tools.",

    section8Text1:
      "Personal data will not be shared with third parties, therefore, if the user accesses any advertisement belonging to another website, the entire responsibility for the aforementioned protection of that user’s data is transferred to the new website accessed. When redirected to a third-party application or website, you will no longer be bound by this Privacy Policy or the Terms of Service for our platform. We are not responsible for the privacy practices of other websites and encourage you to read their privacy statements.",

    section9Text1:
      "Cookies refer to text files sent by the platform to the user’s and visitor’s computer and which are stored there, with information related to navigation on the website. Such information is related to access data such as location and access time and is stored by the user’s and visitor’s browser so that the platform server can read them later in order to customize the platform’s services. The user and visitor of the MOVAIMPEX.COM.BR platform expresses that they know and accept that a navigation data collection system can be used through the use of cookies.",
    section9Text2:
      "The persistent cookie remains on the user’s and visitor’s hard drive after the browser is closed and will be used by the browser on subsequent visits to the website. Persistent cookies can be removed by following your browser’s instructions.",
    section9Text3:
      "The session cookie is temporary and disappears after the browser is closed. It is possible to reset your web browser to refuse all cookies, however some platform features may not work correctly if the ability to accept cookies is disabled.",

    section10Text1:
      "When using the services and providing personal information on the MOVAIMPEX.COM.BR platform, Privacy. The user is consenting to this Policy The user has the right to withdraw his consent at any time, for that he must contact us via email contato@movaimpex.com.br",

    section11Text1:
      "We reserve the right to modify this Privacy Policy at any time, so it is recommended that the user and visitor review it frequently.",
    section11Text2:
      "Changes and clarifications will take effect immediately after their publication on the platform. When changes are made, the modification date informed in the first line of this present term will be updated. By using the service or providing personal information after any changes, the user and visitor demonstrate their agreement with the new standards. Upon the merger or sale of the platform to another company, the users’ data may be transferred to the new owners so that the services offered can be maintained.",

    section12Text1:
      "For the settlement of disputes arising from this instrument, Brazilian law will be fully applied. from the company. Any disputes must be filed in the court of the district in which the head office is located.",
  },
};

export default function PoliticaDePrivacidade() {
  const { locale, setLocale } = useLanguage();
  const t = translations[locale];

  const [NavbarReponsivelMobile, setNavbarReponsivelMobile] = useState(false);

  const [isMobile, setIsMobile] = useState(false);
  const [menu, setMenu] = useState(false);

  const checkMobile = () => {
    if (window.innerWidth <= 600) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  function openMenu() {
    setMenu(!menu);
  }

  const handleLanguageChange = (newLocale) => {
    setLocale(newLocale);
  };

  return (
    <div className="politicaMain">
      
      <div className={isMobile ? "NavBarMainReponsivo" : "NavBarMain"}>
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
          <h2 className="titleHome">{t.titlemain}</h2>
        </div>

        <div className="languagens">
          <button onClick={() => handleLanguageChange("en")}>
            <img
              src="/img/Logo/bandeiras/united-states-2.png"
              alt="Bandeira EUA"
              className="Bandeira"
            />
          </button>
          <button onClick={() => handleLanguageChange("pt")}>
            <img
              src="/img/Logo/bandeiras/brazil-1.png"
              alt="Bandeira Brasil"
              className="Bandeira"
            />
          </button>
        </div>

        <div className={isMobile ? "optionsMobile" : "menuhiden"}>
          <div className="languagensMobi">
            <button onClick={() => handleLanguageChange("en")}>
              <img
                src="/img/Logo/bandeiras/united-states-2.png"
                alt="Bandeira EUA"
                className="Bandeira"
              />
            </button>
            <h2>{t.titlemain}</h2>
            <button onClick={() => handleLanguageChange("pt")}>
              <img
                src="/img/Logo/bandeiras/brazil-1.png"
                alt="Bandeira Brasil"
                className="Bandeira"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="servicosMain">
        <div className="servicosSection">
          <p className="servicosTitle">
            <b>{t.section1Title}</b>
          </p>
          <br />
          <p className="servicosText">
            {t.section1Text1} <br />
            <br /> {t.section1Text2}
            <br />
            <br /> {t.section1Text3}
          </p>
        </div>

        <div className="servicosSection">
          <p className="servicosTitle">
            <b>{t.section2Title}</b>
          </p>
          <br />
          <p className="servicosText">
            {t.section2Text1} <br />
            <br />
            <ul>
              <li>{t.section2List1}</li>
              <li>{t.section2List2}</li>
            </ul>
          </p>
        </div>

        <div className="servicosSection">
          <p className="servicosTitle">
            <b>{t.section3Title}</b>
          </p>
          <br />
          <p className="servicosText">
            {t.section3Text1} <br />
            <br />
            <ul>
              <li>{t.section3List1}</li>
              <li>{t.section3List2}</li>
              <li>{t.section3List3}</li>
            </ul>
          </p>
        </div>

        <div className="servicosSection">
          <p className="servicosTitle">
            <b>{t.section4Title}</b>
          </p>
          <br />
          <p className="servicosText">
            {t.section4Text1}
            <br />
            <br />
            <ul>
              <li>{t.section4List1}</li>
              <li>{t.section4List2}</li>
              <li>{t.section4List3}</li>
              <li>{t.section4List4}</li>
            </ul>
          </p>
        </div>

        <div className="servicosSection">
          <p className="servicosTitle">
            <b>{t.section5Title}</b>
          </p>
          <br />
          <p className="servicosText">
            {t.section5Text1}
            <br />
            <br />
            {t.section5Text2}
            <br />
            <br />
            {t.section5Text3}
            <br />
            <br />
            {t.section5List1}
            <br />
            <br />
            {t.section5List2}
            <br />
            <br />
            {t.section5List3}
            <br />
            <br />
            {t.section5List4}
          </p>
        </div>

        <div className="servicosSection">
          <p className="servicosTitle">
            <b>{t.section6Title}</b>
          </p>
          <br />
          <p className="servicosText">
            {t.section6Text1}
            <br />
            <br /> {t.section6Text2}
            <br />
            <br /> {t.section6Text3}
          </p>
        </div>

        <div className="servicosSection">
          <p className="servicosTitle">
            <b>{t.section7Title}</b>
          </p>
          <br />
          <p className="servicosText">
            {t.section7Text1}
            <br />
            <br /> {t.section7Text2}
          </p>
        </div>

        <div className="servicosSection">
          <p className="servicosTitle">
            <b>{t.section8Title}</b>
          </p>
          <br />
          <p className="servicosText">{t.section8Text1}</p>
        </div>

        <div className="servicosSection">
          <p className="servicosTitle">
            <b>{t.section9Title}</b>
          </p>
          <br />
          <p className="servicosText">
            {t.section9Text1}
            <br />
            <br /> {t.section9Text2}
            <br />
            <br /> {t.section9Text3}
          </p>
        </div>

        <div className="servicosSection">
          <p className="servicosTitle">
            <b>{t.section10Title}</b>
          </p>
          <br />
          <p className="servicosText">{t.section10Text1}</p>
        </div>

        <div className="servicosSection">
          <p className="servicosTitle">
            <b>{t.section11Title}</b>
          </p>
          <br />
          <p className="servicosText">
            {t.section11Text1}
            <br />
            <br />
            {t.section11Text2}
          </p>
        </div>

        <div className="servicosSection">
          <p className="servicosTitle">
            <b>{t.section12Title}</b>
          </p>
          <br />
          <p className="servicosText">{t.section12Text1}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
