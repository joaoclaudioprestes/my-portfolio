import { Header } from "@/components/Sections/header";
import React from "react";
import { HeroSection } from "./../components/Sections/HeroSection/index";
import { About } from "@/components/Sections/About";
import { Skills } from "@/components/Sections/Skills";
import { Projects } from "@/components/Sections/Projects";
import { Experience } from "@/components/Sections/Experience";
import { Services } from "@/components/Sections/Services";
import { Contact } from "@/components/Sections/Contact";
import { Footer } from "@/components/Sections/footer";

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
      <Contact />
      <Footer />
    </>
  );
}
