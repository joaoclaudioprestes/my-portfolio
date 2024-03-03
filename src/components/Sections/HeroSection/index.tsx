import { Clock } from "@/components/UI/clook";
import { SocialIcons } from "./../../UI/socialIcons/index";
import { Divider } from "@/components/UI/divider";
import { Button } from "@/components/UI/button";

export const HeroSection = () => {
  return (
    <div className="w-[90vw] m-auto flex flex-col items-start gap-14 md:flex-row md:justify-between md:w-[70vw] md:items-center my-20">
      <div className="flex flex-col md:max-w-[40%]">
        <h1 className="font-regular text-5xl flex items-center md:text-6xl">Olá! 👨🏻‍💻🌍</h1>
        <h1 className="font-regular text-5xl md:text-6xl">Eu sou o João Prestes</h1>
        <div className="w-full flex items-center h-10 mt-4 md:mt-9">
          <SocialIcons />
          <Divider horizontal={true} /> 
          <Clock />
        </div>
      </div>
      <div className="flex flex-col gap-4 md:w-[40%]">
        <h2 className="text-2xl font-regular md:text-3xl">
          Um Desenvolvedor Full-Stack em São Paulo, Brasil.
        </h2>
        <p className="text-md font-regular">
          Conhecendo, aprendendo e me desenvolvendo a cada dia.
        </p>
        <div className="flex gap-4">
          <Button content="Sobre mim" important={true} />
          <Button content="Projetos" />
        </div>
      </div>
    </div>
  );
};
