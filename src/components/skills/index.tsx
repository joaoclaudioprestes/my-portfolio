import { Skill } from "./skill"
import { DiHtml5, DiCss3, DiJavascript1 } from "react-icons/di"


const MOCK_SKILLS = [
  {
    name: "HTML",
    icon: <DiHtml5 />,
    experience: 3,
  },
  {
    name: "CSS",
    icon: <DiCss3 />,
    experience: 3,
  },
  {
    name: "JavaScript",
    icon: <DiJavascript1 />,
    experience: 3,
  },
  {
    name: "HTML",
    icon: <DiHtml5 />,
    experience: 3,
  },
  {
    name: "CSS",
    icon: <DiCss3 />,
    experience: 3,
  },
  {
    name: "JavaScript",
    icon: <DiJavascript1 />,
    experience: 3,
  },
]

export const Skills = () => {
  return (
    <>
      {MOCK_SKILLS.map(skill => (
        <Skill key={skill.name} {...skill}/>
      ))}
    </>
  )
}