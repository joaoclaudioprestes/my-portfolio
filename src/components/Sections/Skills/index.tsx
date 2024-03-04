import { Skill } from "@/components/UI/skills";
import { TitleSection } from "@/components/UI/titleSection";
import { DiHtml5, DiCss3, DiJavascript1 } from "react-icons/di";

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
  ];
  return (
    <section className="w-full py-20 m-auto flex flex-col items-center gap-14 bg-[#F5F5F0] md:justify-center md:items-start md:p-20">
      <div className="w-[90vw] flex flex-col justify-center gap-9 md:w-full">
        <TitleSection title="Conhecimentos" subTitle="algumas-skills" />
        <div className="flex flex-wrap justify-center gap-5">
          {MOCK_SKILLS.map((skill) => (
            <Skill key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};
