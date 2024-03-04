import { Header } from "@/components/UI/header";
import React from "react";
import { HeroSection } from './../components/Sections/HeroSection/index';
import { About } from "@/components/Sections/About";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <About />
    </>
  );
}
