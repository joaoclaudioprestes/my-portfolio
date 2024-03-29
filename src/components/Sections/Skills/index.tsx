import { Skill } from "@/components/UI/skills";
import { TitleSection } from "@/components/UI/titleSection";
import { DiHtml5, DiCss3, DiJavascript1, DiJava } from "react-icons/di";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  SiTypescript,
  SiMysql,
  SiNextdotjs,
  SiStyledcomponents,
  SiExpress,
} from "react-icons/si";

export const Skills = () => {
  const MOCK_SKILLS = [
    {
      name: "HTML",
      icon: <DiHtml5 />,
      color: "#DD4B25",
    },
    {
      name: "CSS",
      icon: <DiCss3 />,
      color: "#254BDD",
    },
    {
      name: "JavaScript",
      icon: <DiJavascript1 />,
      color: "#EFD81D",
    },
    {
      name: "React",
      icon: <FaReact />,
      color: "#61DAFB",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      color: "#000000",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      color: "#8CC84B",
    },
    {
      name: "Express.js",
      icon: <SiExpress />,
      color: "#000000",
    },

    {
      name: "TypeScript",
      icon: <SiTypescript />,
      color: "#3178C6",
    },
    {
      name: "Styled Components",
      icon: <SiStyledcomponents />,
      color: "#DB7093",
    },
    {
      name: "Java",
      icon: <DiJava />,
      color: "#E14A3A",
    },
    {
      name: "Python",
      icon: <FaPython />,
      color: "#3776AB",
    },
    {
      name: "SQL",
      icon: <SiMysql />,
      color: "#4479A1",
    },
  ];

  return (
    <section className="w-full py-20 flex flex-col items-center gap-14 bg-[#F5F5F0] md:justify-center md:items-start md:p-20">
      <div className="w-[90vw] flex flex-col gap-10 m-auto md:w-[70vw]">
        <TitleSection
          title="Conhecimentos"
          subTitle="algumas-skills"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        />
        <div className="w-full flex flex-wrap justify-center gap-5">
          {MOCK_SKILLS.map((skill) => (
            <Skill
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              color={skill.color}
              initial={{ x: -100 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.5, delay: 0.001 }}
              exit={{ scaleY: 0, x: -100 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
