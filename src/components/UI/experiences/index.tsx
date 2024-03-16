import { Experience } from "./experience";

const MOCK_EXPERIENCES = [
  {
    company: "Prefeitura de Araçoiaba da Serra",
    job: "Estagiário de TI",
    logo: "/img/logo-prefeitura.png",
    description:
      "Como estagiário de TI, fui responsável por auxiliar na manutenção e suporte técnico de computadores, instalação e configuração de softwares, e suporte aos usuários internos. Além disso, participei de projetos de infraestrutura de redes e servidores, adquirindo conhecimento prático em ambientes corporativos.",
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
