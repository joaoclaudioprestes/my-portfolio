import { TitleSection } from "@/components/UI/titleSection";
import Image from "next/image";
import { CiDesktop } from "react-icons/ci";
import { FaCode, FaFigma } from "react-icons/fa";
import { HiCode } from "react-icons/hi";
import { PiFigmaLogo } from "react-icons/pi";
import {CardService} from "@/components/UI/cardService"

const MOCK_SERVICES = [
  {
    img: "/software.jpg",
    icon: <HiCode />,
    title: "Desenvolvimento de Software",
    sub: "Desenvolvimento de sistemas web e mobile, utilizando as melhores tecnologias do mercado, com foco em qualidade e segurança.",
  },
  {
    img: "/software.jpg",
    icon: <PiFigmaLogo />,
    title: "UI",
    sub: "Desenvolvimento de interfaces de usuário, com foco em usabilidade e experiência do usuário.",
  },
  {
    img: "/software.jpg",
    icon: <CiDesktop />,
    title: "Desenvolvimento Web",
    sub: "Desenvolvimento de websites institucionais e blogs, utilizando as melhores tecnologias do mercado, com foco em qualidade e segurança.",
  },
];

export const Services = () => {
  return (
    <section className="w-full py-20 flex flex-col items-center gap-14 md:justify-center md:items-start md:p-20 bg-[#F5F5F0]">
      <div className="w-[90vw] flex flex-col gap-5 m-auto md:w-[70vw]">
        <TitleSection title="Serviços" />
        <div className="flex flex-col gap-3 justify-between items-center md:flex-row h-fit">
         {MOCK_SERVICES.map((service) => (
          <CardService key={service.title} {...service} />
         ))}
        </div>
      </div>
    </section>
  );
};
