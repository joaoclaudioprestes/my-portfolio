import { HighlightProject } from "./highlightProject";

const MY_PROJECTS = [
  {
    name: "IntegraBike",
    img: "/integrabike.jpg",
    description: "IntegraBike é um projeto desenvolvido durante a faculdade para facilitar o compartilhamento de bicicletas na cidade. Utilizando tecnologias como Node.js, React e MongoDB, o projeto oferece uma plataforma completa para registro de bicicletas, reserva de horários e acompanhamento em tempo real das rotas dos usuários.",
  },
  {
    name: "Calculadora de Juros Compostos",
    img: "/calculadorajuros.jpg",
    description: "A Calculadora de Juros Compostos é uma ferramenta desenvolvida para cálculo de investimentos financeiros. Utilizando JavaScript puro, a aplicação permite que os usuários insiram valores de investimento, taxa de juros e período de aplicação para calcular os rendimentos ao longo do tempo.",
  },
];

export const Highlights = () => {
  return (
    <div className="w-full flex flex-col gap-2">
      {MY_PROJECTS.map((project, index) => (
        <HighlightProject key={index} {...project} />
      ))}
    </div>
  );
};
