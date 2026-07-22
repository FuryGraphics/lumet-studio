/**
 * Footer - dark, editorial, with brand tagline and structured links.
 * Grid-aligned columns with mono labels.
 * Responsive: stacks on mobile, 2-col on tablet, full grid on desktop.
 */
const footerLinks = {
  Services: [
    { label: "GHL Buildouts", href: "#services" },
    { label: "Web Design & Dev", href: "#services" },
    { label: "Review Funnels", href: "#services" },
    { label: "Backend Management", href: "#services" },
    { label: "Design Services", href: "#services" },
  ],
  Studio: [
    { label: "Work", href: "#work" },
    { label: "How it works", href: "#process" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-[#0D0D0D] text-white pt-12 md:pt-24 pb-8 overflow-hidden">
      {/* Spotlight gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 50% at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container relative">
        {/* Top - logo + links in responsive grid */}
        <div className="grid grid-cols-12 gap-6 md:gap-4 pb-10 md:pb-16 border-b border-[#1A1A1A]">
          {/* Logo + tagline */}
          <div className="col-span-12 md:col-span-5">
            <a
              href="#top"
              className="lumet-logo text-2xl md:text-4xl"
              aria-label="Lumet Studios home"
            >
              Lumet<span className="text-[#1D4ED8]">.</span>
            </a>
            <p className="lumet-body mt-4 md:mt-6 text-sm md:text-base text-[#A3A3A3] max-w-sm">
              The studio behind the studios. White-label fulfillment for
              marketing agencies and niche-service businesses.
            </p>
            <p className="font-mono-label text-[#525252] mt-4 md:mt-6">
              YOU SELL IT. WE BUILD IT.
            </p>
          </div>

          {/* Services links */}
          <div className="col-span-6 md:col-span-3 md:col-start-7">
            <p className="font-mono-label text-[#525252] mb-4 md:mb-5">SERVICES</p>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.Services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="lumet-link text-sm text-[#A3A3A3] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio links */}
          <div className="col-span-6 md:col-span-2">
            <p className="font-mono-label text-[#525252] mb-4 md:mb-5">STUDIO</p>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.Studio.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="lumet-link text-sm text-[#A3A3A3] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-12 md:col-span-2">
            <p className="font-mono-label text-[#525252] mb-4 md:mb-5">CONTACT</p>
            <a
              href="mailto:hello@lumetstudio.online"
              className="lumet-link block text-sm text-[#A3A3A3] hover:text-white transition-colors mb-3"
            >
              hello@lumetstudio.online
            </a>
            <p className="font-mono-label text-[#525252]">
              REMOTE · GLOBAL
            </p>
          </div>
        </div>

        {/* Bottom - copyright + back to top */}
        <div className="grid grid-cols-12 gap-4 pt-6 md:pt-8">
          <div className="col-span-12 md:col-span-6">
            <p className="font-mono-label text-[#525252] text-xs md:text-sm">
              © {new Date().getFullYear()} LUMET STUDIOS - ALL RIGHTS RESERVED
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 flex md:justify-end">
            <a
              href="#top"
              className="lumet-link flex items-center gap-2 text-sm text-[#A3A3A3] hover:text-white transition-colors"
            >
              Back to top
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 10V2M6 2L2 6M6 2L10 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
