import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Introduction } from "@/components/portfolio/Introduction";
import { Curriculum } from "@/components/portfolio/Curriculum";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Academic } from "@/components/portfolio/Academic";
import { Certifications } from "@/components/portfolio/Certifications";
import { Events } from "@/components/portfolio/Events";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Introduction />
        <Curriculum />
        <Projects />
        <Skills />
        <Academic />
        <Certifications />
        <Events />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
