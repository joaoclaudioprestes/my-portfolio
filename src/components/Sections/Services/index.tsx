import { TitleSection } from "@/components/UI/titleSection";
import { CiDesktop, CiMobile2 } from "react-icons/ci";
import { PiFigmaLogo } from "react-icons/pi";
import { CardService } from "@/components/UI/cardService";

const MOCK_SERVICES = [
  {
    img: "/img/mobile.jpg",
    icon: <CiMobile2 />,
    title: "Mobile",
    sub: "Desenvolvo aplicações móveis de acordo com suas preferências.",
  },
  {
    img: "/img/ui.jpg",
    icon: <PiFigmaLogo />,
    title: "UI",
    sub: "Projeto interfaces claras e objetivas e de fácil usabilidade para o usuário.",
  },
  {
    img: "/img/web.jpg",
    icon: <CiDesktop />,
    title: "Web",
    sub: "Desenvolvo projetos web, como blogs, sites, landing pages, e-commerce, etc...",
  },
];

export const Services = () => {
  return (
    <section className="w-full py-20 flex flex-col items-center gap-14 md:justify-center md:items-start md:p-20 bg-[#F5F5F0]">
      <div className="w-[90vw] flex flex-col gap-5 m-auto md:w-[70vw]">
        <TitleSection
          title="Serviços"
          subTitle="serviços-prestados"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        />
        <div className="flex flex-col gap-4 justify-between items-center md:flex-row h-fit">
          {MOCK_SERVICES.map((service) => (
            <CardService
              key={service.title}
              {...service}
              initial={{ scale: 0, x: -100 }}
              whileInView={{ scale: 1, x: 0 }}
              transition={{ duration: 0.5}}
              exit={{ scale: 0, x: -100 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
