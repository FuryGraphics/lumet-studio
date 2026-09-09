import Header from "@/components/Header";
import Hero from "@/components/Hero";
import System from "@/components/System";
import Process from "@/components/Process";
import Work from "@/components/Work";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/**
 * Home - Lumet Studios marketing page.
 * Single-page layout with sections:
 * Hero → System → Process (dark) → Work → Stats (dark) → About → Pricing → Contact → Footer
 *
 * Design: Editorial Mono - Swiss editorial style with strict grid,
 * generous whitespace, monospace labels, and deliberate dark/light rhythm.
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      <Header />
      <main>
        <Hero />
        <System />
        <Process />
        <Work />
        <Stats />
        <About />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
