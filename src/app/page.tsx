import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import { Particles } from "../components/ui/particles";
import FadeIn from "@/app/components/FramerMotion";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden  text-white">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Particles />
      </div>
      <Navbar />
      <Hero />
      <FadeIn>
        <Projects />
      </FadeIn>
      <Skills />
      <About />
      <Contact />
    </main>
  );
}
