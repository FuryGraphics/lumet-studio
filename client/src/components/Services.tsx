import { useScrollReveal } from "@/hooks/useScrollReveal";

/**
 * Services — five core capabilities in an editorial list layout.
 * Left rail index, offset heading, hairline-separated rows.
 */
const services = [
  {
    num: "01",
    title: "GHL Buildouts & Completion",
    desc: "Funnels, automations, pipelines, snapshots, workflows. We finish and maintain GoHighLevel setups end to end — so your clients never see a half-built system.",
  },
  {
    num: "02",
    title: "Website Design & Development",
    desc: "Clean, conversion-focused sites built to perform. From landing pages to full builds, we deliver work your clients will be proud to show off.",
  },
  {
    num: "03",
    title: "Google Review Funnels",
    desc: "Reputation systems that turn happy customers into public five-star reviews. Automated, ethical, and built to compound your clients' credibility.",
  },
  {
    num: "04",
    title: "Client Request & Backend Management",
    desc: "We act as your invisible fulfillment arm. Managing incoming requests, handling internal operations, and keeping everything moving — so you stay client-facing.",
  },
  {
    num: "05",
    title: "Design Services",
    desc: "Brand identity, UI/UX, and marketing design with a senior-level eye. Every asset meets a standard your clients will mistake for an in-house creative team.",
  },
];

export default function Services() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="services" className="py-20 md:py-32 bg-[#FAFAF9] border-t border-[#E5E5E5]">
      <div ref={ref} className={`container ${isVisible ? "is-visible" : ""}`}>
        {/* Section header — left rail */}
        <div className="grid grid-cols-12 gap-4 mb-12 md:mb-16">
          <div className="col-span-12 md:col-span-2 flex items-center gap-3">
            <span className="font-mono-label text-[#A3A3A3]">01 / SERVICES</span>
          </div>
          <div className="hidden md:block col-span-10">
            <span className="block h-px w-full bg-[#E5E5E5]" />
          </div>
        </div>

        {/* Heading + intro — offset */}
        <div className="grid grid-cols-12 gap-4 mb-12 md:mb-16">
          <div className="col-span-12 md:col-span-2" />
          <div className="col-span-12 md:col-span-6">
            <h2 className="lumet-display text-3xl md:text-4xl lg:text-5xl text-[#0D0D0D]">
              What we
              <br />
              handle.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:pt-2">
            <p className="lumet-body text-base text-[#525252]">
              Five core capabilities. One team behind your team. Everything
              delivered white-label, on spec, and on time.
            </p>
          </div>
        </div>

        {/* Service rows — grid aligned */}
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-2" />
          <div className="col-span-12 md:col-span-10">
            <div className="border-t border-[#E5E5E5]">
              {services.map((service) => (
                <div
                  key={service.num}
                  className="group grid grid-cols-12 gap-4 py-6 md:py-8 border-b border-[#E5E5E5] hover:bg-white/50 transition-colors px-2 md:px-4 -mx-2 md:-mx-4"
                >
                  <div className="col-span-2 md:col-span-1">
                    <span className="font-mono-label text-[#A3A3A3] group-hover:text-[#1D4ED8] transition-colors">
                      {service.num}
                    </span>
                  </div>
                  <div className="col-span-10 md:col-span-4">
                    <h3 className="text-lg md:text-xl font-semibold text-[#0D0D0D] group-hover:text-[#1D4ED8] transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <div className="col-span-12 md:col-span-7">
                    <p className="lumet-body text-sm md:text-base text-[#525252]">
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
