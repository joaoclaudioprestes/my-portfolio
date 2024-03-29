import { Experience } from "./experience";

const MOCK_EXPERIENCES = [
  {
    company: "Prefeitura de Araçoiaba da Serra",
    job: "Estagiário de TI",
    logo: "/img/logo-prefeitura.png",
    description:
      "Como estagiário de TI, minhas responsabilidades incluem auxiliar na manutenção e suporte técnico de computadores, realizar instalação e configuração de softwares e fornecer suporte aos usuários internos. Além disso, participei ativamente de projetos relacionados à infraestrutura de redes e servidores, o que me proporcionou um conhecimento prático valioso em ambientes corporativos.",
    link: "https://www.aracoiaba.sp.gov.br",
  },
];

export function Experiences() {
  return (
    <div className="flex flex-col gap-4">
      {MOCK_EXPERIENCES.map((experience) => (
        <Experience key={experience.company} {...experience} />
      ))}
    </div>
  );
}
