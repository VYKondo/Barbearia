import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import Hours from "@/components/sections/Hours";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero id="inicio" />
      <About id="sobre" />
      <Services id="servicos" />
      <Gallery id="galeria" />
      <Hours id="horarios" />
      <Testimonials id="depoimentos" />
      <Contact id="contato" />
    </>
  );
}
