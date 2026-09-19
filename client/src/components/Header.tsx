import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import { services } from "@/data/services";

/**
 * Header - minimal fixed navigation for Lumet Studios.
 * Transparent over hero, transitions to opaque white on scroll.
 * Mobile menu via overlay with body scroll lock.
 */
const navLinks = [
  { label: "Services", href: "/services", menu: true },
  { label: "Industries", href: "/industries" },
  { label: "How it works", href: "/#process" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "/#contact" },
];

/** Routes go through wouter; home-page anchors stay plain links so the
 *  browser handles the hash (Home scrolls to it after a cross-page load). */
function NavLink({
  href,
  className,
  onClick,
  children,
}: {
  href: string;
  className: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return href.includes("#") ? (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  ) : (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

/** ServicesMenu - the Services item on desktop: a link to /services that also
 *  opens a panel of the individual service pages. Opens on hover and on
 *  focus, closes on Escape, outside click, or a route change, so it never
 *  hangs open after navigating. */
function ServicesMenu() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const wrap = useRef<HTMLLIElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);

  useEffect(() => setOpen(false), [location]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (!wrap.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  // A small delay on leave, so the diagonal trip to the panel does not close it
  const hold = () => {
    window.clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const release = () => {
    closeTimer.current = window.setTimeout(() => setOpen(false), 120);
  };

  return (
    <li
      ref={wrap}
      className="relative"
      onMouseEnter={hold}
      onMouseLeave={release}
      onFocus={hold}
      onBlur={e => {
        if (!wrap.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <span className="flex items-center gap-1.5">
        <Link
          href="/services"
          className="lumet-link text-sm font-medium text-[#404040] hover:text-[#0D0D0D] transition-colors"
        >
          Services
        </Link>
        <button
          type="button"
          aria-label="Show services"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="p-1 -m-1 text-[#737373] hover:text-[#0D0D0D] transition-colors"
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            aria-hidden="true"
          >
            <path
              d="M1 3L5 7L9 3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="square"
            />
          </svg>
        </button>
      </span>

      {open && (
        <div className="absolute left-0 top-full pt-4 z-50">
          <div className="w-[22rem] bg-[#FAFAF9] border border-[#E5E5E5] shadow-[0_12px_40px_rgba(13,13,13,0.08)]">
            {services.map(s => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                onClick={() => setOpen(false)}
                className="group flex items-baseline gap-3 p-4 border-b border-[#E5E5E5] last:border-b-0 hover:bg-white transition-colors"
              >
                <span className="font-mono-label text-[#A3A3A3] group-hover:text-[#1D4ED8] transition-colors">
                  {s.num}
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-[#0D0D0D] group-hover:text-[#1D4ED8] transition-colors">
                    {s.title}
                    {s.price ? (
                      <span className="font-mono-label text-[#737373] ml-2">
                        ${s.price}/MO
                      </span>
                    ) : null}
                  </span>
                  <span className="lumet-body block text-xs text-[#737373] mt-0.5">
                    {s.tagline}
                  </span>
                </span>
              </Link>
            ))}
            <Link
              href="/services"
              onClick={() => setOpen(false)}
              className="block p-4 bg-[#0D0D0D] text-white text-sm font-semibold hover:bg-[#1D4ED8] transition-colors"
            >
              All services and pricing →
            </Link>
          </div>
        </div>
      )}
    </li>
  );
}

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
          <Link
            href="/"
            className={`font-bold text-lg md:text-xl tracking-tight transition-colors ${
              scrolled ? "text-[#0D0D0D]" : "text-[#0D0D0D]"
            }`}
            aria-label="Lumet Studios home"
          >
            Lumet<span className="text-[#1D4ED8]">.</span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map(link =>
              link.menu ? (
                <ServicesMenu key={link.href} />
              ) : (
              <li key={link.href}>
                <NavLink
                  href={link.href}
                  className="lumet-link text-sm font-medium text-[#404040] hover:text-[#0D0D0D] transition-colors"
                >
                  {link.label}
                </NavLink>
              </li>
              )
            )}
          </ul>

          {/* CTA - desktop */}
          <div className="hidden md:block">
            <a
              href="/#pricing"
              className="lumet-cta inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#1D4ED8] hover:bg-[#1741B0] rounded-sm"
            >
              Get started
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="inline-block"
              >
                <path
                  d="M3 7H11M11 7L7 3M11 7L7 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                />
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
            <span
              className={`block w-6 h-0.5 bg-[#0D0D0D] transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#0D0D0D] transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#0D0D0D] transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-[#FAFAF9]"
            onClick={() => setMenuOpen(false)}
          />
          <div className="relative flex flex-col items-start gap-6 pt-24 px-6 pb-8 h-full overflow-y-auto">
            {navLinks.map(link => (
              <div key={link.href} className="w-full">
                <NavLink
                  href={link.href}
                  className="text-2xl font-semibold text-[#0D0D0D] lumet-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
                {link.menu && (
                  <ul className="mt-4 pl-4 border-l border-[#E5E5E5] space-y-3">
                    {services.map(s => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          onClick={() => setMenuOpen(false)}
                          className="block text-base font-medium text-[#404040]"
                        >
                          {s.title}
                          {s.price ? (
                            <span className="font-mono-label text-[#A3A3A3] ml-2">
                              ${s.price}/MO
                            </span>
                          ) : null}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <a
              href="/#pricing"
              className="mt-4 inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-white bg-[#1D4ED8] rounded-sm"
              onClick={() => setMenuOpen(false)}
            >
              Get started
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 7H11M11 7L7 3M11 7L7 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                />
              </svg>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
