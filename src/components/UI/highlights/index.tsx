import { HighlightProject } from "./highlightProject";

const MOCK_PROJECTS = [
  {
    name: "Teste",
    img: "/photo-programer.jpg",
    description:
      "BookWise é uma plataforma de avaliação de livros que foi desenvolvida durante o bootcamp Ignite da Rocketseat. Com apenas um Figma precisávamos desenvolver essa aplicação completa Full Stack com Next.js.",
  },
  {
    name: "Teste",
    img: "/photo-programer.jpg",
    description:
      "BookWise é uma plataforma de avaliação de livros que foi desenvolvida durante o bootcamp Ignite da Rocketseat. Com apenas um Figma precisávamos desenvolver essa aplicação completa Full Stack com Next.js.",
  },
];

export const Highlights = () => {
  return (
    <div className="w-full flex flex-col gap-2">
      {MOCK_PROJECTS.map((project) => (
        <HighlightProject key={project.name} {...project} />
      ))}
    </div>
  );
};
