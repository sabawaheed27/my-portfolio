import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Project from "../components/Project";
import SpaceBackground from "@/components/SpaceBackground";
import Footer from "@/components/Footer";
import Skills from "@/components/Skill";

export default function HomePage() {
  return (
    <>
    <SpaceBackground />
      <Hero />
      <Project/>
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
