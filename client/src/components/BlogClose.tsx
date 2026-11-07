import { Arrow } from "@/components/PageShell";

/**
 * Closing band for the blog. No price: the notes stay clear of fees.
 */
export default function BlogClose() {
  return (
    <section className="py-16 md:py-28 bg-[#0D0D0D] text-white">
      <div className="container">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-2">
            <span className="font-mono-label text-[#525252]">CONTACT</span>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2
              className="lc-display text-white"
              style={{ fontSize: "clamp(1.75rem, 5vw, 3.75rem)" }}
            >
              A website for
              <br />
              your firm.
            </h2>
            <p className="lc-body mt-6 text-base md:text-xl text-[#A3A3A3] max-w-2xl">
              Local Cascade builds websites for US law firms. If you want to
              talk about yours, write to us.
            </p>
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="/#contact"
                className="lc-cta inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-[#004AAD] hover:bg-[#003A87] rounded-sm w-full sm:w-auto"
              >
                Contact
                <Arrow />
              </a>
              <a
                href="/services"
                className="lc-link text-base font-medium text-[#A3A3A3] hover:text-white"
              >
                See services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
