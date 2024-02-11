import { HighlightProject } from "./highlightProject";

const MOCK_PROJECTS = [
  {
    name: "Teste",
    img: "/photo-programer.jpg",
    description:
      "BookWise é uma plataforma de avaliação de livros que foi desenvolvida durante o bootcamp Ignite da Rocketseat. Com apenas um Figma precisávamos desenvolver essa aplicação completa Full Stack com Next.js.",
      reverse:false
  },
  {
    name: "Teste",
    img: "/photo-programer.jpg",
    description:
      "BookWise é uma plataforma de avaliação de livros que foi desenvolvida durante o bootcamp Ignite da Rocketseat. Com apenas um Figma precisávamos desenvolver essa aplicação completa Full Stack com Next.js.",
      reverse: true
  },
];

export const Highlights = () => {
  return (
    <div className="w-full flex flex-col">
      {MOCK_PROJECTS.map((project) => (
        <HighlightProject key={project.name} {...project} />
      ))}
    </div>
  );
};
