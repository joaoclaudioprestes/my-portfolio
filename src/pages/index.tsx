import react from "react";
import { Header } from "@/components/header";
import React from "react";
import { SocialIcons } from "@/components/socialIcons";

export default function Home() {
  return (
    <>
      <Header />
      <section className="w-[80vw] h-[90dvh] flex flex-col m-auto justify-center items-center font-mono">
        <h2 className="text-gray-400 text-2xl">Oi, eu sou João!</h2>
        <h1 className="text-gray-300 text-3xl font-bold text-center">
          Vamos transformar ideias em código?
        </h1>
        <h2 className="text-green-600 text-xl mt-2">Full Stack Developer</h2>

        <SocialIcons />
      </section>

      <section className="w-[80vw] h-[90dvh] flex flex-col m-auto justify-center items-center font-mono">
        About Me
      </section>
    </>
  );
}
