import { Clock } from "@/components/UI/clook";
import { SocialIcons } from "./../../UI/socialIcons/index";
import { Divider } from "@/components/UI/divider";
import { Button } from "@/components/UI/button";

export const HeroSection = () => {
  return (
    <section className="w-[90vw] m-auto flex flex-col items-start gap-14 md:flex-row md:justify-between md:w-[70vw] md:items-center my-20">
      <div className="md:max-w-[40%]">
        <h1 className="font-regular text-5xl flex items-center md:text-6xl">
          Olá! 👨🏻‍💻🌍
        </h1>
        <h1 className="font-regular text-5xl md:text-6xl">
          Eu sou o João Prestes
        </h1>
        <div className="w-full flex items-center h-10 my-9 md:mt-7 ">
          <SocialIcons />
          <Divider horizontal={true} />
          <Clock />
        </div>
      </div>
      <div className="flex flex-col gap-4 md:w-[40%]">
        <h2 className="text-2xl font-regular md:text-3xl">
          Um <span className="font-bold">Desenvolvedor Full-Stack</span> em São Paulo, Brasil.
        </h2>
        <p className="text-md font-regular">
          Conhecendo, aprendendo e me desenvolvendo a cada dia.
        </p>
        <div className="flex gap-4">
          <Button content="Sobre mim" important={true} />
          <Button content="Projetos" important={false} link="/projects"/>
        </div>
      </div>
    </section>
  );
};
