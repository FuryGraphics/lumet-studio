import { useScrollReveal } from "@/hooks/useScrollReveal";

/**
 * Work — showcase cards with mono captions for project meta.
 * Editorial case-study layout: cropped images, typographic captions,
 * hairline borders, strict grid alignment.
 * Responsive: 1 col mobile, 2 col tablet (sm), 3 col desktop (md+).
 */
const projects = [
  {
    image: "/manus-storage/lumet-project-1_dad3802a.png",
    category: "WEB DESIGN & DEVELOPMENT",
    title: "Law Firm Website Build",
    meta: "GHL · CONVERSION FOCUSED · 5-DAY TURNAROUND",
    desc: "Full website build for an attorney niche client. Designed, developed, and deployed within a GoHighLevel funnel framework.",
  },
  {
    image: "/manus-storage/lumet-project-2_ec4e4cac.png",
    category: "WEB DESIGN + REVIEW FUNNEL",
    title: "Accountants Full Setup",
    meta: "GHL · REVIEW FUNNEL · CLIENT ONBOARDING AUTOMATION",
    desc: "Website redesign paired with a five-star Google review funnel and automated client onboarding and tax-season follow-up sequences.",
  },
  {
    image: "/manus-storage/lumet-project-3_23282dd6.png",
    category: "GHL BUILDOUT",
    title: "Agency Snapshot & Automation",
    meta: "GHL · SNAPSHOTS · WORKFLOWS · PIPELINES",
    desc: "Complete GoHighLevel snapshot build with custom automations, pipeline setup, and workflow sequences for a niche marketing agency.",
  },
];

export default function Work() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="work" className="py-16 md:py-32 bg-[#FAFAF9] border-t border-[#E5E5E5]">
      <div ref={ref} className={`container ${isVisible ? "is-visible" : ""}`}>
        {/* Section header — left rail */}
        <div className="grid grid-cols-12 gap-4 mb-8 md:mb-16">
          <div className="col-span-12 md:col-span-2 flex items-center gap-3">
            <span className="font-mono-label text-[#A3A3A3]">03 / WORK</span>
          </div>
          <div className="hidden md:block col-span-7">
            <span className="block h-px w-full bg-[#E5E5E5]" />
          </div>
          <div className="col-span-12 md:col-span-3 flex md:justify-end">
            <a
              href="#contact"
              className="lumet-link text-sm font-medium text-[#404040] hover:text-[#0D0D0D]"
            >
              Start a project →
            </a>
          </div>
        </div>

        {/* Heading — offset on grid */}
        <div className="grid grid-cols-12 gap-4 mb-8 md:mb-16">
          <div className="col-span-12 md:col-span-2" />
          <div className="col-span-12 md:col-span-9">
            <h2 className="lumet-display text-2xl md:text-4xl lg:text-5xl text-[#0D0D0D]">
              Selected work
              <br />
              and capabilities.
            </h2>
          </div>
        </div>

        {/* Project cards — responsive grid: 1 col mobile, 2 col sm, 3 col md+ */}
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-2" />
          <div className="col-span-12 md:col-span-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group cursor-pointer"
                  onClick={() => (window.location.hash = "#contact")}
                >
                  {/* Image — cropped, editorial */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#F5F5F5] border border-[#E5E5E5] mb-4 md:mb-5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    {/* Mono index overlay */}
                    <span className="absolute top-3 left-3 font-mono-label text-white/80 bg-black/40 px-2 py-1 text-[0.625rem] md:text-xs">
                      {project.category}
                    </span>
                  </div>

                  {/* Caption — typographic, editorial */}
                  <div className="space-y-2 md:space-y-3">
                    <h3 className="text-lg md:text-xl font-semibold text-[#0D0D0D] group-hover:text-[#1D4ED8] transition-colors">
                      {project.title}
                    </h3>
                    <p className="lumet-body text-sm text-[#525252]">
                      {project.desc}
                    </p>
                    <div className="pt-3 border-t border-[#E5E5E5]">
                      <p className="font-mono-label text-[#A3A3A3] text-[0.625rem] md:text-xs">
                        {project.meta}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
