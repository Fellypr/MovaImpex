import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Card from "@/components/card/card";
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
    </div>
  );
}
