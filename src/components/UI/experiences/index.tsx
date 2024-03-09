import { Experience } from "./experience"

const MOCK_EXPERIENCES = [
  {
    company: "Prefeitura de Araçoiaba da Serra",
    job: "Estagiário",
    logo: "/favicon.ico",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis tempus nisi, sed hendrerit nibh porta vitae. Donec id quam eget nulla sollicitudin dictum. Nulla vel eros lorem. Morbi magna nibh, congue vitae mauris sit amet, egestas dictum elit. In porta rhoncus sem, quis condimentum lacus accumsan non. Quisque id purus rhoncus, lacinia ipsum non, molestie nunc."
  },
  {
    company: "Prefeitura de Araçoiaba da Serra",
    job: "Estagiário",
    logo: "/favicon.ico",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis tempus nisi, sed hendrerit nibh porta vitae. Donec id quam eget nulla sollicitudin dictum. Nulla vel eros lorem. Morbi magna nibh, congue vitae mauris sit amet, egestas dictum elit. In porta rhoncus sem, quis condimentum lacus accumsan non. Quisque id purus rhoncus, lacinia ipsum non, molestie nunc."
  },
]

export function Experiences() {
  return (
    <div className="flex flex-col gap-4">
      {MOCK_EXPERIENCES.map(experience => (
        <Experience key={experience.company} {...experience}/>
      ))}
    </div>
  )
}
