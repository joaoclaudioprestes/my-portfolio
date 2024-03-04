import { Header } from "@/components/UI/header";
import React from "react";
import { HeroSection } from './../components/Sections/HeroSection/index';
import { About } from "@/components/Sections/About";
import { Skills } from "@/components/Sections/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <Skills />
    </>
  );
}
