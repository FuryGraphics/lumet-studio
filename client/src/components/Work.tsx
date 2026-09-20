import { useScrollReveal } from "@/hooks/useScrollReveal";
import { unsplashPhotos } from "@/data/unsplash-photos";
import { photographerUrl, unsplashUrl } from "@/lib/unsplash";

/**
 * Work - showcase cards with mono captions for project meta.
 * Editorial case-study layout: cropped images, typographic captions,
 * hairline borders, strict grid alignment.
 * Responsive: 1 col mobile, 2 col tablet (sm), 3 col desktop (md+).
 *
 * Each card is an <article> rather than one wrapping <a>, because the Unsplash
 * credit carries its own links and anchors cannot nest. The image link is
 * hidden from assistive tech so the card still exposes a single destination.
 *
 * `photoSlot` names an entry in the generated Unsplash data. Until
 * `pnpm fetch:unsplash` has been run that data is empty, so a card falls back
 * to `image` and renders no credit.
 */
const projects = [
  {
    photoSlot: "work-contractors",
    image: "/images/work-contractors.webp",
    category: "HOME SERVICES",
    title: "Website & Marketing System For Contractors",
    meta: "WEBSITE · REVIEW FUNNEL · MISSED CALL TEXT BACK · SMS CAMPAIGNS",
    desc: "The same three-part system built for home service contractors: conversion-focused website, automated review funnel, missed call text back, and one-click SMS campaigns.",
    link: "https://www.estimate-engine.com/",
  },
  {
    photoSlot: "work-roofing",
    image: "/images/work-roofing.webp",
    category: "ROOFING",
    title: "Forever Homes Roof Restoration",
    meta: "WEBSITE · GOOGLE REVIEW FUNNEL · LOCAL SEO · INSPECTION BOOKING",
    desc: "Complete digital setup for a Tampa Bay roofing restoration company. Website build, Google review funnel, free inspection booking automation, and a local SEO foundation.",
    link: "https://www.foreverhomesroofrestoration.com/",
  },
];

export default function Work() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="work"
      className="py-16 md:py-32 bg-[#FAFAF9] border-t border-[#E5E5E5]"
    >
      <div ref={ref} className={`container ${isVisible ? "is-visible" : ""}`}>
        {/* Section header - left rail */}
        <div className="grid grid-cols-12 gap-4 mb-8 md:mb-16">
          <div className="col-span-12 md:col-span-2 flex items-center gap-3">
            <span className="font-mono-label text-[#A3A3A3]">03 / WORK</span>
          </div>
          <div className="hidden md:block col-span-7">
            <span className="block h-px w-full bg-[#E5E5E5]" />
          </div>
          <div className="col-span-12 md:col-span-3 flex md:justify-end">
            <a
              href="#pricing"
              className="lc-link text-sm font-medium text-[#404040] hover:text-[#0D0D0D]"
            >
              See pricing →
            </a>
          </div>
        </div>

        {/* Heading - offset on grid */}
        <div className="grid grid-cols-12 gap-4 mb-8 md:mb-16">
          <div className="col-span-12 md:col-span-2" />
          <div className="col-span-12 md:col-span-9">
            <h2 className="lc-display text-2xl md:text-4xl lg:text-5xl text-[#0D0D0D]">
              Systems we have
              <br />
              already built.
            </h2>
          </div>
        </div>

        {/* Project cards - responsive grid: 1 col mobile, 2 col sm, 3 col md+ */}
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-2" />
          <div className="col-span-12 md:col-span-10">
            <div
              className={`grid grid-cols-1 gap-6 md:gap-8 ${
                projects.length >= 3
                  ? "sm:grid-cols-2 md:grid-cols-3"
                  : "sm:grid-cols-2"
              }`}
            >
              {projects.map(project => {
                const photo = unsplashPhotos[project.photoSlot];

                return (
                  <article key={project.title} className="group">
                    {/* Image - cropped, editorial */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-[#F5F5F5] border border-[#E5E5E5]">
                        <img
                          src={photo ? photo.urls.regular : project.image}
                          alt={
                            photo ? photo.alt || project.title : project.title
                          }
                          style={
                            photo ? { backgroundColor: photo.color } : undefined
                          }
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          loading="lazy"
                        />
                        {/* Mono index overlay */}
                        <span className="absolute top-3 left-3 font-mono-label text-white/80 bg-black/40 px-2 py-1 text-[0.625rem] md:text-xs">
                          {project.category}
                        </span>
                        {/* Visit link overlay on hover */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono-label text-white text-xs md:text-sm bg-[#1D4ED8] px-4 py-2">
                            VIEW LIVE SITE →
                          </span>
                        </div>
                      </div>
                    </a>

                    {/* Unsplash credit - required whenever a photo is shown */}
                    {photo && (
                      <p className="font-mono-label text-[#A3A3A3] text-[0.625rem] md:text-xs mt-2">
                        Photo by{" "}
                        <a
                          href={photographerUrl(photo)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline underline-offset-2 hover:text-[#0D0D0D] transition-colors"
                        >
                          {photo.photographer.name}
                        </a>{" "}
                        on{" "}
                        <a
                          href={unsplashUrl()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline underline-offset-2 hover:text-[#0D0D0D] transition-colors"
                        >
                          Unsplash
                        </a>
                      </p>
                    )}

                    {/* Caption - typographic, editorial */}
                    <div className="space-y-2 md:space-y-3 mt-4 md:mt-5">
                      <h3 className="text-lg md:text-xl font-semibold text-[#0D0D0D]">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group-hover:text-[#1D4ED8] transition-colors"
                        >
                          {project.title}
                        </a>
                      </h3>
                      <p className="lc-body text-sm text-[#525252]">
                        {project.desc}
                      </p>
                      <div className="pt-3 border-t border-[#E5E5E5]">
                        <p className="font-mono-label text-[#A3A3A3] text-[0.625rem] md:text-xs">
                          {project.meta}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
