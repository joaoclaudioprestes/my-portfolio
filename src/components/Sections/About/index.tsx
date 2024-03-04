import { Button } from "@/components/UI/button";
import { SocialIcons } from "@/components/UI/socialIcons";
import { TechBadge } from "@/components/UI/techBadge";
import { TitleSection } from "@/components/UI/titleSection";
import Image from "next/image";

export const About = () => {
  return (
    <section className="w-full m-auto flex flex-col items-start gap-14 bg-[#F5F5F0] md:flex-row md:justify-center md:items-center md:p-20 mt-20">
      <div className="w-[90vw] flex flex-col-reverse justify-center items-center gap-9 md:flex-row md:w-[70vw]">
        <div className="w-[90%]">
          <TitleSection
            title="Sobre mim"
            subTitle="Conheça-um-pouco-sobre-mim"
          />
          <p className="text-black text-md mt-4 md:text-lg">
            Desenvolvedor desde 2023 e estudante de Ciência da Computação. Em
            minha jornada acadêmica, busco constantemente a evolução na área
            Tech, explorando diariamente novas tecnologias e progredindo em meio
            a descobertas contínuas. Desde o início, aplico e registro meu
            aprendizado por meio de diversos projetos. Convido você a conferir
            um vislumbre do meu conhecimento em ação. 🚀
          </p>

          <TechBadge />

          <div className="flex gap-6 items-baseline my-6">
            <Button content="Entre em contato ->" important={true} />
            <SocialIcons />
          </div>
        </div>

        <div className="w-[90%]">
          <span className="relative w-fit top-12 left-2 bg-white rounded-full text-black text-sm flex items-center gap-2 py-1 px-1">
            <Image
              src={"/favicon.ico"}
              alt="Foto programador"
              width={30}
              height={30}
              className="rounded-sm"
            />
            jovem programador
          </span>
          <Image
            src={"/photo-programer.jpg"}
            alt="Foto programador"
            width={150}
            height={150}
            layout="responsive"
            className="rounded-sm"
          />
        </div>
      </div>
    </section>
  );
};
