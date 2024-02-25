import Link from "next/link";
import { Header } from "@/components/header";
import React from "react";
import { SocialIcons } from "@/components/socialIcons";
import { GoArrowRight } from "react-icons/go";
import { TechBadge } from "@/components/techBadge";
import Image from "next/image";
import { Skills } from "@/components/skills";
import { TitleSection } from "@/components/titleSection";
import { Divider } from "@/components/divider";
import { Highlights } from "@/components/highlights";
import { LinkEdit } from "@/components/linkEdit";
import { Experiences } from "./../components/experiences/index";

export default function Home() {
  return (
    <>
      <Header />
      <section className="hero h-[90dvh] flex flex-col justify-center items-center font-mono">
        <h2 className="text-gray-400 text-2xl">Oi, eu sou João!</h2>
        <h1 className="text-gray-300 text-3xl font-bold text-center">
          Vamos transformar ideias em código?
        </h1>
        <h2 className="text-green-600 text-xl mt-2">Full Stack Developer</h2>
      </section>

      <section className="about w-full h-[100dvh] flex justify-center items-center ">
        <div className="w-[90vw] flex flex-col-reverse justify-center items-center gap-6 md:flex-row md:w-[60vw]">
          <div className="w-[90%]">
            <h2 className="text-green-600 text-xl font-bold md:text-2xl">
              # Conheça um pouco sobre mim...
            </h2>
            <p className="text-white text-md mt-4 md:text-lg">
              Desenvolvedor desde 2023 e estudante de Ciência da Computação. Em
              minha jornada acadêmica, busco constantemente a evolução na área
              Tech, explorando diariamente novas tecnologias e progredindo em
              meio a descobertas contínuas. Desde o início, aplico e registro
              meu aprendizado por meio de diversos projetos. Convido você a
              conferir um vislumbre do meu conhecimento em ação. 🚀
            </p>

            <TechBadge />

            <div className="flex gap-6 items-baseline">
              <button>
                <Link
                  href={"/about"}
                  className="bg-green-600 py-3 px-4 mt-6 rounded-lg text-gray-50 flex justify-center items-center gap-2 hover:bg-green-500 transition-all disabled:opacity-50"
                >
                  Entre em contato <GoArrowRight />
                </Link>
              </button>

              <SocialIcons />
            </div>
          </div>

          <div className="w-[90%]">
            <span className="relative top-9 left-2 px-3 py-1 bg-white rounded-full text-gray text-sm font-mono">
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

      <section className="skills w-full h-auto bg-[#111827] flex justify-center items-center font-mono py-[10rem]">
        <div className="w-[70vw] md:w-[60vw]">
          <TitleSection title="Conhecimentos" subTitle="competências" />

          <div className="flex justify-center md:justify-normal gap-3 flex-col md:flex-row flex-wrap mt-6">
            <Skills />
          </div>
        </div>
      </section>

      <section className="projects w-full h-auto bg-[#111827] flex flex-col justify-center items-center font-mono py-[10rem]">
        <div className="w-[90vw] md:w-[60vw]">
          <TitleSection title="Projetos em destaque..." subTitle="destaques" />
          <Divider />
          <Highlights />
          <LinkEdit nameLink="Veja todos os meus projeto" srcLink="#" />
        </div>
      </section>

      <section className="experiences flex justify-center my-36">
        <div className="w-[90vw] md:w-[60vw] md:flex md:gap-10 md: items-start">
          <TitleSection title="Expêriencias" subTitle="tragetoria" />
          <div className="">
            <Experiences />
          </div>
        </div>
      </section>

      <section className="contact flex justify-center my-36 text-white">
        <div className="w-[90vw] md:w-[60vw] md:flex md:gap-10 md:items-start">
          <TitleSection title="Contato" subTitle="Entre em contato comigo." />
        </div>
      </section>
    </>
  );
}
