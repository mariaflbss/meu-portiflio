import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Timeline } from "./components/Timeline";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <a
        href="#sobre"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] btn btn-primary"
      >
        Pular para o conteúdo
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <About id="sobre" />
        <Skills id="habilidades" />
        <Projects id="projetos" />
        <Timeline id="trajetoria" />
        <Contact id="contato" />
      </main>

      <Footer />
    </>
  );
}

export default App;
