import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Work from "@/components/Work";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/**
 * Home — Lumet Studios marketing page.
 * Single-page layout with sections:
 * Hero → Services → Process (dark) → Work → Stats (dark) → About → Contact → Footer
 *
 * Design: Editorial Mono — Swiss editorial style with strict grid,
 * generous whitespace, monospace labels, and deliberate dark/light rhythm.
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Work />
        <Stats />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
