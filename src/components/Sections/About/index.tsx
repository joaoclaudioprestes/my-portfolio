import { Button } from "@/components/UI/button";
import { SocialIcons } from "@/components/UI/socialIcons";
import { TechBadge } from "@/components/UI/techBadge";
import { TitleSection } from "@/components/UI/titleSection";
import Image from "next/image";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section
      id="About"
      className="w-full m-auto bg-[#F5F5F0] md:justify-start md:items-center md:p-20 mt-20"
    >
      <div className="w-[90vw] m-auto flex flex-col-reverse justify-center items-center gap-9 md:flex-row md:w-[70vw]">
        <div className="w-[90%]" id="about">
          <TitleSection
            title="Sobre mim"
            subTitle="Conheça um pouco sobre mim"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          />
          <motion.p
            className="text-black text-md mt-4 md:text-lg"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            Desenvolvedor desde 2023 e estudante de Ciência da Computação. Em
            minha jornada acadêmica, busco constantemente a evolução na área
            Tech, explorando diariamente novas tecnologias e progredindo em meio
            a descobertas contínuas. Desde o início, aplico e registro meu
            aprendizado por meio de diversos projetos. Convido você a conferir
            um vislumbre do meu conhecimento em ação. 🚀
          </motion.p>

          <TechBadge
            ArrayTech={["JavaScript", "ReactJS", "NextJS", "Node"]}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.2 }}
          />

          <motion.div
            className="flex gap-6 items-baseline my-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { staggerChildren: 0.5 } }}
            exit={{ opacity: 0 }}
          >
            <Button
              content="Entre em contato"
              important={true}
              link="#Contact"
            />
            <SocialIcons />
          </motion.div>
        </div>

        <motion.div
          className="w-[90%]"
          initial={{ opacity: 0, y: 100, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.5 }}
        >
          <span className="relative w-fit top-12 left-2 bg-white rounded-full text-black text-sm flex items-center gap-2 py-1 px-1">
            <Image
              src={"/favicon.ico"}
              alt="Foto programador"
              width={30}
              height={30}
              className="rounded-full"
            />
            Jovem programador
          </span>
          <Image
            src={"/photo-programer.jpg"}
            alt="Foto programador"
            width={100}
            height={100}
            layout="responsive"
            className="rounded-sm"
          />
        </motion.div>
      </div>
    </section>
  );
};
