import { HighlightProject } from "./highlightProject"


const MOCK_PROJECTS = [
  {
    name: "Teste",
    img: "/photo-programer.jpg",
    description: "tentando........................"
  }
]


export const Highlights = () => {
  return(
    <div className="w-full">
      {MOCK_PROJECTS.map(project => (
        <HighlightProject key={project.name} {...project} />
      ))}
    </div>
  )
}