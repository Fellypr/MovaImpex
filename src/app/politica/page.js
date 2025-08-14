import "./politica.css";
import "../servicos/servicos.css";
import "../../components/navbar/Navbar.css";
import Link from "next/link";
import Footer from "@/components/footer/footer";
export default function PoliticaDePrivacidade() {
  return (
    <div className="politicaMain">
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

        <h2 className="titleHome">Política de Privacidade</h2>
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
        <div className="servicosSection">
          <p className="servicosTitle">SEÇÃO 1 – INFORMAÇÕES GERAIS</p>
          <br />
          <p className="servicosText">
            A presente Política de Privacidade contém informações sobre coleta,
            uso, armazenamento, tratamento e proteção dos dados pessoais dos
            usuários e visitantes do site MOVAIMPEX.COM.BR, com a finalidade de
            demonstrar absoluta transparência quanto ao assunto e esclarecer a
            todos interessados sobre os tipos de dados que são coletados, os
            motivos da coleta e a forma como os usuários podem gerenciar ou
            excluir as suas informações pessoais. <br />
            <br /> Esta Política de Privacidade aplica-se a todos os usuários e
            visitantes do site MOVAIMPEX.COM.BR e integra os Termos e Condições
            Gerais de Uso do site MOVAIMPEX.COM.BR, devidamente inscrita no CNPJ
            sob o nº 26.406.317/0001-16, situado em AMERICANA/SP.
            <br />
            <br /> O presente documento foi elaborado em conformidade com a Lei
            Geral de Proteção de Dados Pessoais (Lei 13.709/18), o Marco Civil
            da Internet (Lei 12.965/14) (e o Regulamento da UE n. 2016/6790).
            Ainda, o documento poderá ser atualizado em decorrência de eventual
            atualização normativa, razão pela qual se convida o usuário a
            consultar periodicamente esta seção.
          </p>
        </div>

        <div className="servicosSection">
          <p className="servicosTitle">
            SEÇÃO 2 – COMO RECOLHEMOS OS DADOS PESSOAIS DO USUÁRIO E DO
            VISITANTE?
          </p>
          <br />
          <p className="servicosText">
            Os dados pessoais do usuário e visitante são recolhidos pela
            plataforma da seguinte forma: <br />
            <br />
            <ul>
              <li>
                Quando o usuário solicita nosso contato via mensagem na
                plataforma MOVAIMPEX.COM.BR: esses dados são os dados de
                identificação básicos, como e-mail, nome e telefone. A partir
                deles, podemos identificar o usuário e o visitante, além de
                garantir uma maior segurança e bem-estar às suas necessidades.
                Ficam cientes os usuários e visitantes de que informações
                inseridas na plataforma estará acessível a todos os demais
                integrantes da equipe MOVA IMPEX IMPORTAÇÃO E EXPORTAÇÃO LTDA.
              </li>
              <li>
                Quando um usuário e visitante acessa páginas do site
                MOVAIMPEX.COM.BR: as informações sobre interação e acesso são
                coletadas pela empresa para garantir uma melhor experiência ao
                usuário e visitante. Estes dados podem tratar sobre as
                palavras-chaves utilizadas em uma busca, o compartilhamento de
                um documento específico, comentários, visualizações de páginas,
                perfis, a URL de onde o usuário e visitante provêm, o navegador
                que utilizam e seus IPs de acesso, dentre outras que poderão ser
                armazenadas e retidas.
              </li>
            </ul>
          </p>
        </div>

        <div className="servicosSection">
          <p className="servicosTitle">
            SEÇÃO 3 – QUAIS DADOS PESSOAIS RECOLHEMOS SOBRE O USUÁRIO E
            VISITANTE?
          </p>
          <br />
          <p className="servicosText">
            Os dados pessoais do usuário e visitante recolhidos são os
            seguintes: <br />
            <br />
            <ul>
              <li>
                Dados para entrar em contato conosco pela plataforma
                MOVAIMPEX.COM.BR: e-mail, nome e telefone.
              </li>
              <li>
                Dados para otimização da navegação: acesso a páginas,
                palavras-chave utilizadas na busca, recomendações, comentários,
                interação com outros perfis e usuários, perfis seguidos,
                endereço de IP.
              </li>
              <li>
                Dados para concretizar transações: a MOVA IMPEX não realiza nem
                faz intermediação de negócios entre seus usuários pela
                plataforma MOVAIMPEX.COM.BR, apenas disponibiliza um espaço para
                que seus usuários entre em contato conosco a fim de tratar sobre
                dúvidas, informações e orçamentos.
              </li>
            </ul>
          </p>
        </div>

        <div className="servicosSection">
          <p className="servicosTitle">
            SEÇÃO 4 – PARA QUE FINALIDADES UTILIZAMOS OS DADOS PESSOAIS DO
            USUÁRIO E VISITANTE?
          </p>
          <br />
          <p className="servicosText">
            Os dados pessoais do usuário e do visitante coletados e armazenados
            pela plataforma MOVAIMPEX.COM.BR tem por finalidade:
            <br />
            <br />
            <ul>
              <li>
                Bem-estar do usuário e visitante: aprimorar o serviço oferecido,
                facilitar, agilizar e cumprir os compromissos estabelecidos
                entre o usuário e a empresa, melhorar a experiência dos usuários
                e fornecer funcionalidades específicas a depender das
                características básicas do usuário.
              </li>
              <li>
                Melhorias da plataforma: compreender como o usuário utiliza os
                serviços da plataforma, para ajudar no desenvolvimento de
                negócios e técnicas.
              </li>
              <li>
                Comercial: os dados são usados para personalizar o conteúdo
                oferecido e gerar subsídio à plataforma para a melhora da
                qualidade no funcionamento dos serviços.
              </li>
              <li>
                Previsão do perfil do usuário: tratamento automatizados de dados
                pessoais para avaliar o uso na plataforma. O tratamento de dados
                pessoais para finalidades não previstas nesta Política de
                Privacidade somente ocorrerá mediante comunicação prévia ao
                usuário, de modo que os direitos e obrigações aqui previstos
                permanecem aplicáveis.
              </li>
            </ul>
          </p>
        </div>

        <div className="servicosSection">
          <p className="servicosTitle">
            SEÇÃO 5 – POR QUANTO TEMPO OS DADOS PESSOAIS FICAM ARMAZENADOS?
          </p>
          <br />
          <p className="servicosText">
            Os dados pessoais do usuário e visitante são armazenados pela
            plataforma durante o período necessário para a prestação do serviço
            ou o cumprimento das finalidades previstas no presente documento,
            conforme o disposto no inciso I do artigo 15 da Lei 13.709/18.{" "}
            <br />
            <br />
            Os dados podem ser removidos ou anonimizados a pedido do usuário,
            excetuando os casos em que a lei oferecer outro tratamento.
            <br />
            <br /> Ainda, os dados pessoais dos usuários apenas podem ser
            conservados após o término de seu tratamento nas seguintes hipóteses
            previstas no artigo 16 da referida lei:
            <br />
            <br />
            I – Cumprimento de obrigação legal ou regulatória pelo controlador;
            <br />
            <br />
            II – Estudo por órgão de pesquisa, garantida, sempre que possível, a
            anonimização dos dados pessoais;
            <br />
            <br />
            III – Transferência a terceiro, desde que respeitados os requisitos
            de tratamento de dados dispostos nesta Lei;
            <br />
            <br />
            IV – Uso exclusivo do controlador, vedado seu acesso por terceiro, e
            desde que anonimizados os dados.
          </p>
        </div>

        <div className="servicosSection">
          <p className="servicosTitle">
            SEÇÃO 6 – SEGURANÇA DOS DADOS PESSOAIS ARMAZENADOS
          </p>
          <br />
          <p className="servicosText">
            A plataforma se compromete a aplicar as medidas técnicas e
            organizativas aptas a proteger os dados pessoais de acessos não
            autorizados e de situações de destruição, perda, alteração,
            comunicação ou difusão de tais dados.
            <br />
            <br /> A plataforma não se exime de responsabilidade por culpa
            exclusiva de terceiros, como em caso de ataque de hackers ou
            crackers, ou culpa exclusiva do usuário, como no caso em que ele
            mesmo transfere seus dados a terceiros. O site se compromete a
            comunicar o usuário em caso de alguma violação de segurança dos seus
            dados pessoais.
            <br />
            <br /> Os dados pessoais armazenados são tratados com
            confidencialidade, dentro dos limites legais. No entanto, podemos
            divulgar suas informações pessoais caso sejamos obrigados pela lei
            para fazê-lo ou se você violar nossos Termos de Serviço.
          </p>
        </div>

        <div className="servicosSection">
          <p className="servicosTitle">SEÇÃO 7 – COMPARTILHAMENTO DOS DADOS</p>
          <br />
          <p className="servicosText">
            O compartilhamento de dados do usuário ocorre apenas com os dados
            referentes a publicações realizadas pelo próprio usuário, tais ações
            são compartilhadas publicamente com todos os integrantes da equipe
            MOVA IMPEX IMPORTAÇÃO E EXPORTAÇÃO LTDA.
            <br />
            <br /> Os dados do perfil do usuário são compartilhados publicamente
            em sistemas de busca e dentro da plataforma, sendo permitido ao
            usuário modificar tal configuração para que seu perfil não apareça
            nos resultados de busca de tais ferramentas.
          </p>
        </div>

        <div className="servicosSection">
          <p className="servicosTitle">
            SEÇÃO 8 – OS DADOS PESSOAIS ARMAZENADOS SERÃO TRANSFERIDOS A
            TERCEIROS?
          </p>
          <br />
          <p className="servicosText">
            Os dados pessoais não serão compartilhados com terceiros, portanto,
            caso o usuário acesse qualquer anúncio pertencente a outro site,
            toda a responsabilidade da referida proteção dos dados desse
            usuário, se transfere ao novo site acessado Ao ser redirecionado
            para um aplicativo ou site de terceiros, você não será mais regido
            por essa Política de Privacidade ou pelos Termos de serviço da nossa
            plataforma. Não somos responsáveis pelas práticas de privacidade de
            outros sites e lhe incentivamos a ler as declarações de privacidade
            deles.
          </p>
        </div>

        <div className="servicosSection">
          <p className="servicosTitle">
            SEÇÃO 9 – COOKIES OU DADOS DE NAVEGAÇÃO
          </p>
          <br />
          <p className="servicosText">
            Os cookies referem-se a arquivos de texto enviados pela plataforma
            ao computador do usuário e visitante e que nele ficam armazenados,
            com informações relacionadas à navegação no site. Tais informações
            são relacionadas aos dados de acesso como local e horário de acesso
            e são armazenadas pelo navegador do usuário e visitante para que o
            servidor da plataforma possa lê-las posteriormente a fim de
            personalizar os serviços da plataforma. O usuário e o visitante da
            plataforma MOVAIMPEX.COM.BR manifesta conhecer e aceitar que pode
            ser utilizado um sistema de coleta de dados de navegação mediante à
            utilização de cookies.
            <br />
            <br /> O cookie persistente permanece no disco rígido do usuário e
            visitante depois que o navegador é fechado e será usado pelo
            navegador em visitas subsequentes ao site. Os cookies persistentes
            podem ser removidos seguindo as instruções do seu navegador.
            <br />
            <br />
            Já o cookie de sessão é temporário e desaparece depois que o
            navegador é fechado. É possível redefinir seu navegador da web para
            recusar todos os cookies, porém alguns recursos da plataforma podem
            não funcionar corretamente se a capacidade de aceitar cookies
            estiver desabilitada.
          </p>
        </div>

        <div className="servicosSection">
          <p className="servicosTitle">SEÇÃO 10 – CONSENTIMENTO</p>
          <br />
          <p className="servicosText">
            Ao utilizar os serviços e fornecer as informações pessoais na
            plataforma MOVAIMPEX.COM.BR , Privacidade.
            <br />
            <br />O usuário está consentindo com a presente Política de O
            usuário tem direito de retirar o seu consentimento a qualquer tempo,
            para tanto deve entrar em contato através do email
            contato@movaimpex.com.br
          </p>
        </div>

        <div className="servicosSection">
          <p className="servicosTitle">
            SEÇÃO 11 – ALTERAÇÕES PARA ESSA POLÍTICA DE PRIVACIDADE
          </p>
          <br />
          <p className="servicosText">
            Reservamos o direito de modificar essa Política de Privacidade a
            qualquer momento, então, é recomendável que o usuário e visitante
            revise-a com frequência.
            <br />
            <br />
            As alterações e esclarecimentos vão surtir efeito imediatamente após
            sua publicação na plataforma. Quando realizadas alterações, será
            atualizado a data de modificação informado na primeira linha deste
            presente termo apresentado. Ao utilizar o serviço ou fornecer
            informações pessoais após eventuais modificações, o usuário e
            visitante demonstra sua concordância com as novas normas. Diante da
            fusão ou venda da plataforma à outra empresa os dados dos usuários
            podem ser transferidos para os novos proprietários para que a
            permanência dos serviços oferecidos.
          </p>
        </div>

        <div className="servicosSection">
          <p className="servicosTitle">
            SEÇÃO 12 – JURISDIÇÃO PARA RESOLUÇÃO DE CONFLITOS
          </p>
          <br />
          <p className="servicosText">
            Para a solução de controvérsias decorrentes do presente instrumento
            será aplicado integralmente o Direito brasileiro. da empresa. Os
            eventuais litígios deverão ser apresentados no foro da comarca em
            que se encontra a sede.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
