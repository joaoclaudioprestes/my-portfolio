import { Header } from "@/components/UI/header";
import React from "react";
import { HeroSection } from "./../components/Sections/HeroSection/index";
import { About } from "@/components/Sections/About";
import { Skills } from "@/components/Sections/Skills";
import { Projects } from "@/components/Sections/Projects";
import { Experience } from "@/components/Sections/Experience";
import { Services } from "@/components/Sections/Services";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <Experience />
      <Services />
      <Skills />
      <Projects />
    </>
  );
}
