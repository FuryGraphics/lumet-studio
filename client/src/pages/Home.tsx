import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import System from "@/components/System";
import Process from "@/components/Process";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import PageMeta from "@/components/PageMeta";
import { Faq, Section } from "@/components/PageShell";
import { homeFaqs } from "@/data/homeFaq";
import { SITE_DESCRIPTION } from "@/data/site";

/**
 * Home - Local Cascade marketing page.
 * Single-page layout with sections:
 * Hero, system, process, about, plan, questions, contact, footer.
 * The Work section is hidden for now; components/Work.tsx is still there.
 * The four services and the industries list also have their own pages.
 *
 * Design: Editorial Mono - Swiss editorial style with strict grid,
 * generous whitespace, monospace labels, and deliberate dark/light rhythm.
 */
export default function Home() {
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
      <PageMeta
        title="Law Firm Websites for US Attorneys | Local Cascade"
        description={SITE_DESCRIPTION}
        path="/"
      />
      <Header />
      <main>
        <Hero />
        <System />
        <Process />
        <About />
        <Pricing />
        <Section label="QUESTIONS">
          <h2
            className="lc-display text-[#0D0D0D] mb-8 md:mb-12"
            style={{ fontSize: "clamp(1.75rem, 4.5vw, 3.25rem)" }}
          >
            Questions from firms
          </h2>
          <Faq items={homeFaqs} />
        </Section>
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
