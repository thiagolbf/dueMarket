import { HeaderComponent } from "../../components/Header";
import { AboutUsMain } from "./style";
import gui from "../../assets/guilherme.png";
import paulo from "../../assets/paulo.png";
import thiago from "../../assets/thiago.png";
import raul from "../../assets/raul.png";
import vanagila from "../../assets/vanagila.png";
import { CardDevsComponent } from "../../components/CardDevs";

export const AboutUsPage = () => {
  const devs = [
    {
      id: 1,
      img: gui,
      name: "Guilherme Colhado de Souza",
      description:
        "Carreira desenvolvida na área de Tecnologia da Informação, com ampla experiência em projetos Front-End, trabalho em equipe, versionamento de codigo e sempre tenta ajudar seus colegas de equipe.",
      linkedin: "https://www.linkedin.com/in/guilherme-colhado-5337011a9/",
      github: "https://github.com/guilherme-colhado",
    },
    {
      id: 2,
      img: paulo,
      name: "Paulo de Tarso Pupio",
      description:
        "Cursou engenharia Bioquímica mas atualmente está realizando o sonho de entrar no mercado digital e aprendeu FrontEnd como porta para esse mundo tão incrível e dinâmico.",
      linkedin: "https://www.linkedin.com/in/paulo-de-tarso-pupio/",
      github: "https://github.com/ppupio",
    },
    {
      id: 3,
      img: vanagila,
      name: "Vanágila Xavier Rodrigues",
      description: "Desenvolvedora Front-End",
      linkedin: "https://www.linkedin.com/in/vanagila/",
      github: "https://github.com/vanagila",
    },
    {
      id: 4,
      img: thiago,
      name: "Thiago Barcelos",
      description:
        "Formado em Engenharia Mecatrônica com mais de 15 anos de experiência no mercado de automação, desenvolvendo projetos elétricos, programação de CLP e gerenciamento de projetos. Neste momento em transição de carreira para a área de desenvolvimento web",
      linkedin: "http://www.linkedin.com/in/thiagolbf",
      github: "https://github.com/thiagolbf",
    },
    {
      id: 5,
      img: raul,
      name: "Raul Ribeiro Bastos",
      description:
        "Fascinado pela programação, decidiu seguir carreira na área cursando ADS e aprendendo Front-End com o objetivo de realizar o seu sonho.",
      linkedin: "https://www.linkedin.com/in/raulribeirobastos/",
      github: "https://github.com/raul070707",
    },
  ];

  return (
    <>
      <HeaderComponent />
      <AboutUsMain>
        <h2>dueMarket</h2>
        <p>
          Aplicativo voltado para mercados conscientes e consumidores atentos.
          Os consumidores monitoram seus produtos para promoções especiais. Os
          mercados terão mais uma via de acesso à diminuição de desperdício.
        </p>
        <div>
          {devs.map((dev) => (
            <CardDevsComponent
              key={dev.id}
              description={dev.description}
              github={dev.github}
              linkedin={dev.linkedin}
              img={dev.img}
              name={dev.name}
            />
          ))}
        </div>
      </AboutUsMain>
    </>
  );
};
