import { HeroSection } from "./../components/Sections/HeroSection/index";
import { About } from "@/components/Sections/About";
import { Skills } from "@/components/Sections/Skills";
import { HighlightsSection } from "@/components/Sections/HighlightsSection";
import { Experience } from "@/components/Sections/Experience";
import { Services } from "@/components/Sections/Services";
import { Contact } from "@/components/Sections/Contact";
import { Footer } from "@/components/Sections/FooterSection";
import { Header } from "@/components/Sections/HeaderSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <Experience />
      <Services />
      <Skills />
      <HighlightsSection />
      <Contact />
      <Footer />
    </>
  );
}
