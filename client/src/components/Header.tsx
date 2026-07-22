import { useEffect, useState } from "react";

/**
 * Header - minimal fixed navigation for Lumet Studios.
 * Transparent over hero, transitions to opaque white on scroll.
 * Mobile menu via overlay with body scroll lock.
 */
const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FAFAF9]/90 backdrop-blur-xl border-b border-[#E5E5E5]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="container flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#top"
            className={`font-bold text-lg md:text-xl tracking-tight transition-colors ${
              scrolled ? "text-[#0D0D0D]" : "text-[#0D0D0D]"
            }`}
            aria-label="Lumet Studios home"
          >
            Lumet<span className="text-[#1D4ED8]">.</span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="lumet-link text-sm font-medium text-[#404040] hover:text-[#0D0D0D] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA - desktop */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="lumet-cta inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#1D4ED8] hover:bg-[#1741B0] rounded-sm"
            >
              Book a call
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="inline-block">
                <path d="M3 7H11M11 7L7 3M11 7L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
              </svg>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`block w-6 h-0.5 bg-[#0D0D0D] transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#0D0D0D] transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#0D0D0D] transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-[#FAFAF9]" onClick={() => setMenuOpen(false)} />
          <div className="relative flex flex-col items-start gap-6 pt-24 px-6 pb-8 h-full overflow-y-auto">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-2xl font-semibold text-[#0D0D0D] lumet-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-4 inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-white bg-[#1D4ED8] rounded-sm"
              onClick={() => setMenuOpen(false)}
            >
              Book a call
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7H11M11 7L7 3M11 7L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
