import Link from "next/link";
import { Header } from "@/components/header";
import React from "react";
import { SocialIcons } from "@/components/socialIcons";
import { GoArrowRight } from "react-icons/go";
import { TechBadge } from "@/components/techBadge";
import Image from "next/image";

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

      <section className="w-[80vw] h-[90dvh] flex m-auto justify-center items-center font-mono gap-3">
        <div className="w-2/3">
          <h2 className="text-2xl text-green-600">
            Olá, conheça um pouco sobre mim!
          </h2>
          <p className="text-white text-md">
            Desenvolvedor desde 2023 e estudante de Ciência da Computação. Em
            minha jornada acadêmica, busco constantemente a evolução na área
            Tech, explorando diariamente novas tecnologias e progredindo em meio
            a descobertas contínuas. Desde o início, aplico e registro meu
            aprendizado por meio de diversos projetos. Convido você a conferir
            um vislumbre do meu conhecimento em ação. 🚀
          </p>

          <div className="mt-4">
            <TechBadge />
          </div>

          <div className="flex gap-4 mt-5 items-baseline">
            <button>
              <Link
                href={"/about"}
                className="bg-green-600 py-3 px-4 rounded-lg text-gray-50 flex justify-center items-center gap-2 hover:bg-green-500 transition-all disabled:opacity-50"
              >
                Entre em contato <GoArrowRight />
              </Link>
            </button>
            <SocialIcons />
          </div>
        </div>

        <div className="w-full h-4/6 bg-[#272727] relative rounded-[40px]">
          <div className="w-2/3 bottom-0 left-0 absolute rounded-bl-lg">
            <Image
              src={"/photo-programer.jpg"}
              alt=""
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>
    </>
  );
}
