import { TitleSection } from "@/components/UI/titleSection";
import { BiCodeBlock } from "react-icons/bi";
import { GrNavigate } from "react-icons/gr";


const MOCK_SERVICES = [
  {
    icon: <BiCodeBlock />,
    title: "Desenvolvimento de Software",
    sub: "Desenvolvimento de sistemas web e mobile, utilizando as melhores tecnologias do mercado, com foco em qualidade e segurança.",
  },
  {
    icon: <BiCodeBlock />,
    title: "UI",
    sub: "Desenvolvimento de interfaces de usuário, com foco em usabilidade e experiência do usuário.",
  },
  {
    icon: <GrNavigate />,
    title: "Desenvolvimento Web",
    sub: "Desenvolvimento de websites institucionais e blogs, utilizando as melhores tecnologias do mercado, com foco em qualidade e segurança.",
  },
];

export const Services = () => {
  return (
    <section className="w-full py-20 flex flex-col items-center gap-14 md:justify-center md:items-start md:p-20 bg-[#F5F5F0]">
      <div className="w-[90vw] flex flex-col gap-5 m-auto md:w-[70vw]">
        <TitleSection title="Serviços" />
        <div className="flex flex-col gap-2 items-baseline">
          {MOCK_SERVICES.map((service) => (
            <div key={service.title} className="p-8 border border-transparent rounded-md w-full bg-white flex flex-col gap-2">
              <div className="text-[40px]">{service.icon}</div>
              <h3 className="text-2xl font-bold text-black mb-4">
               {service.title}
              </h3>
              <p className="text-gray-600 text-lg">
                {service.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
