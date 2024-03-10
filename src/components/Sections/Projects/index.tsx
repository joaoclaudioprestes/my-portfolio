import { CardProject } from "@/components/UI/cardProject";

const MOCK_PROJECTS = [
  {
    nameProject: "IntegraBike",
    descriptionProject: "Projeto desenvolvido na Faculdade.",
    linkRepository:
      "https://github.com/joaoclaudioprestes/projeto-integra-bike",
    linkDeploy: "https://projeto-integra-bike.vercel.app/",
    imgProject: "integrabike.png",
  },
  {
    nameProject: "Calculadora",
    descriptionProject: "Calculadora criada com HTML, CSS e JS.",
    linkRepository: "https://github.com/joaoclaudioprestes/calculator",
    linkDeploy: "https://calculator-ochre-zeta-53.vercel.app/",
    imgProject: "calculadora.png",
  },
  {
    nameProject: "QR Code",
    descriptionProject: "Projeto do Front-end Mentor.",
    linkRepository: "https://github.com/joaoclaudioprestes/qr-code-component",
    linkDeploy: "https://qr-code-component-beta-seven.vercel.app/",
    imgProject: "qrcode.png",
  },
  {
    nameProject: "Calculadora de Juros Compostos",
    descriptionProject:
      "Calculadora de Juros Compostos criada com HTML, CSS e JS.",
    linkRepository:
      "https://github.com/joaoclaudioprestes/compound-interest-calculator",
    linkDeploy: "https://compound-interest-calculator-ebon.vercel.app/",
    imgProject: "calculadorajuros.png",
  },
  {
    nameProject: "Contador",
    descriptionProject: "Contador criado com HTML, CSS e JS.",
    linkRepository: "https://github.com/joaoclaudioprestes/automatic-counter",
    linkDeploy: "https://automatic-counter.vercel.app/",
    imgProject: "contador.png",
  },
  {
    nameProject: "Gerador de Númros",
    descriptionProject:
      "Gerador de números aléatorios criado com HTML, CSS e JS.",
    linkRepository: "https://github.com/joaoclaudioprestes/random-number",
    linkDeploy: "https://random-number-woad-beta.vercel.app/",
    imgProject: "gerador.png",
  },
  {
    nameProject: "Projeto Lampada",
    descriptionProject: "Projeto criado com HTML, CSS e JS.",
    linkRepository: "https://github.com/joaoclaudioprestes/project-lamp",
    linkDeploy: "https://project-lamp.vercel.app/",
    imgProject: "lampada.png",
  },
  {
    nameProject: "Projeto Semáfaro",
    descriptionProject: "Projeto criado com HTML, CSS e JS.",
    linkRepository: "https://github.com/joaoclaudioprestes/traffic-lights",
    linkDeploy: "https://traffic-lights-green.vercel.app/",
    imgProject: "semafaro.png",
  },
  {
    nameProject: "Projeto Calculadora de  Média",
    descriptionProject: "Projeto criado com HTML, CSS e JS.",
    linkRepository: "https://github.com/joaoclaudioprestes/grade-average",
    linkDeploy: "https://grade-average.vercel.app/",
    imgProject: "calculadoramedia.png",
  },
  {
    nameProject: "Projeto Traine.me",
    descriptionProject: "Projeto criado com HTML e CSS - Explorer | Rocketseat",
    linkRepository: "https://github.com/joaoclaudioprestes/treine-me",
    linkDeploy: "https://treine-me-bice.vercel.app/",
    imgProject: "treineme.png",
  },
  {
    nameProject: "Jogo da Adivinhação",
    descriptionProject:
      "Projeto criado com HTML, CSS e JS - Explorer | Rocketseat",
    linkRepository: "https://github.com/joaoclaudioprestes/number-guessing",
    linkDeploy: "https://number-guessing-umber.vercel.app/",
    imgProject: "adivinhar.png",
  },
  {
    nameProject: "Loja de Móveis",
    descriptionProject: "Projeto criado com HTML e CSS - Explorer | Rocketseat",
    linkRepository:
      "https://github.com/joaoclaudioprestes/custom-furniture-page",
    linkDeploy: "https://custom-furniture-page.vercel.app/",
    imgProject: "moveis.png",
  },
  {
    nameProject: "Gerador de Cores RGBA",
    descriptionProject: "Gerador de cores criado com HTML, CSS e JavaScript.",
    linkRepository: "https://github.com/joaoclaudioprestes/color-changer",
    linkDeploy: "https://color-changer-ten-sandy.vercel.app/",
    imgProject: "cor.png",
  },
  {
    nameProject: "Carrossel de Review",
    descriptionProject:
      "Carrossel de reviews criado com HTML, CSS e JavaScript.",
    linkRepository: "https://github.com/joaoclaudioprestes/review-carousel",
    linkDeploy: "https://review-carousel-five.vercel.app/",
    imgProject: "review.png",
  },
  {
    nameProject: "Todo-List",
    descriptionProject: "Todo list criado com HTML, CSS e JavaScript.",
    linkRepository: "https://github.com/joaoclaudioprestes/todo-list",
    linkDeploy: "https://todo-list-henna-gamma.vercel.app/",
    imgProject: "todo.png",
  },
  {
    nameProject: "Todo-List - React",
    descriptionProject: "Todo list criado com React.",
    linkRepository: "https://github.com/joaoclaudioprestes/todo-react",
    linkDeploy: "https://todo-react-beta-lemon.vercel.app/",
    imgProject: "todoreact.png",
  },
  {
    nameProject: "Buscar usuário GitHub - React",
    descriptionProject: "Projeto criado com com React e Tailwindcss.",
    linkRepository: "https://github.com/joaoclaudioprestes/search-user-github",
    linkDeploy: "https://search-user-github-sable.vercel.app/",
    imgProject: "usuario.png",
  },
];

export const Projects = () => {
  return (
    <section className="w-full py-20 flex flex-col items-center gap-14 md:justify-center md:items-start md:p-20">
      <div className="w-[90vw] flex flex-col gap-5 m-auto md:w-[70vw]">
        <h2 className="text-2xl font-bold">Projetos</h2>
        <p className="text-gray-500">
          Conheças meus projetos.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {MOCK_PROJECTS &&
            MOCK_PROJECTS.map((project) => (
              <CardProject
                key={project.nameProject}
                nameProject={project.nameProject}
                descriptionProject={project.descriptionProject}
                linkRepository={project.linkRepository}
                linkDeploy={project.linkDeploy}
                imgProject={project.imgProject}
              />
            ))}
        </div>
      </div>
    </section>
  );
};
