import { HighlightProject } from "./highlightProject";
import { motion } from "framer-motion";

const MY_PROJECTS = [
  {
    name: "Todo-List - React",
    img: "/img/todoreact.png",
    description:
      "A Lista de Tarefas é um projeto desenvolvido com React durante o curso, oferecendo uma aplicação web interativa para gerenciamento de tarefas. Utilizando tecnologias como JavaScript, React e CSS, a aplicação permite aos usuários adicionar, excluir e marcar tarefas como concluídas, proporcionando uma experiência intuitiva e eficiente de organização de atividades diárias.",
    techs: ["JavaScript", "ReactJS", "CSS"],
    demoLink: "https://todo-react-beta-lemon.vercel.app/",
    repositoryLink: "https://github.com/joaoclaudioprestes/todo-react",
  },
  {
    name: "Buscar usuário GitHub - React",
    img: "/img/usuario.png",
    description:
      "O Buscador de Usuários GitHub é uma aplicação React que permite aos usuários encontrar perfis no GitHub. Desenvolvido com JavaScript, React e CSS, esta aplicação exibe o nome, foto de perfil e quantidade de repositórios públicos de um usuário pesquisado. É uma maneira simples e eficiente de explorar perfis no GitHub diretamente de uma interface amigável e responsiva.",
    techs: ["JavaScript", "ReactJS", "CSS", "GitHub API"],
    demoLink: "https://search-user-github-sable.vercel.app/",
    repositoryLink: "https://github.com/joaoclaudioprestes/search-user-github",
  },
];

export const Highlights = () => {
  return (
    <motion.div
      className="w-full flex flex-col gap-2"
      initial={{ x: +100 }}
      whileInView={{ x: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ x: +100 }}
    >
      {MY_PROJECTS.map((project, index) => (
        <HighlightProject key={index} {...project} />
      ))}
    </motion.div>
  );
};
