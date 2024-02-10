import Link from "next/link";
import { Header } from "@/components/header";
import React from "react";
import { SocialIcons } from "@/components/socialIcons";
import { GoArrowRight } from "react-icons/go";

export default function Home() {
  return (
    <>
      <Header />
      <section className="h-[90dvh] flex flex-col justify-center items-center font-mono">
        <h2 className="text-gray-400 text-2xl">Oi, eu sou João!</h2>
        <h1 className="text-gray-300 text-3xl font-bold text-center">
          Vamos transformar ideias em código?
        </h1>
        <h2 className="text-green-600 text-xl mt-2">Full Stack Developer</h2>
      </section>

      <section className="w-[80vw] h-[90dvh] flex flex-col m-auto justify-center items-center font-mono">
        <div>
          <h2 className="">Olá, conheça um pouco sobre mim!</h2>
          <p>
            Desenvolvedor desde 2023 e estudante de Ciência da Computação. Em
            minha jornada acadêmica, busco constantemente a evolução na área
            Tech, explorando diariamente novas tecnologias e progredindo em meio
            a descobertas contínuas. Desde o início, aplico e registro meu
            aprendizado por meio de diversos projetos. Convido você a conferir
            um vislumbre do meu conhecimento em ação. 🚀
          </p>

          <div></div>

          <div className="flex gap-4 mt-2 items-baseline">
            <button>
              <Link
                href={"/about"}
                className="flex items-center gap-2 text-white border px-3 py-1 rounded-lg bg-white-300"
              >
                Entre em contato <GoArrowRight />
              </Link>
            </button>
            <SocialIcons />
          </div>
        </div>
      </section>
    </>
  );
}
