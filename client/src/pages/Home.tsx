import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import System from "@/components/System";
import Process from "@/components/Process";
import Work from "@/components/Work";
import Stats from "@/components/Stats";
import ResultsBand from "@/components/ResultsBand";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { usePageMeta } from "@/hooks/usePageMeta";

/**
 * Home - Local Cascade marketing page.
 * Single-page layout with sections:
 * Hero → System → Process (dark) → Work → Stats (dark) → About → Pricing → Contact → Footer
 * The four services and the industries list also have their own pages.
 *
 * Design: Editorial Mono - Swiss editorial style with strict grid,
 * generous whitespace, monospace labels, and deliberate dark/light rhythm.
 */
export default function Home() {
  usePageMeta(
    "Websites, Local SEO, Reviews & AI Text Back for Local Businesses | Local Cascade",
    "Local Cascade builds and runs your whole customer-getting system: a custom website, local SEO, an automated Google review funnel, and AI missed-call text back. Live in under 7 days for $297/mo. No contracts.",
    "/"
  );

  // Arriving from another page at /#section: the browser tried to jump before
  // React rendered the section, so scroll once it exists. Instant, because the
  // global smooth scroll gets cut short while the page is still laying out,
  // and again after load in case images above the section shifted it.
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;
    const jump = () =>
      document.getElementById(id)?.scrollIntoView({ behavior: "instant" });
    const frame = requestAnimationFrame(jump);
    window.addEventListener("load", jump, { once: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("load", jump);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      <Header />
      <main>
        <Hero />
        <System />
        <Process />
        <Work />
        <Stats />
        <ResultsBand />
        <About />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
