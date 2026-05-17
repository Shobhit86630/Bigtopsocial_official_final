import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import BorderGlow from "@/components/BorderGlow";
import { Container } from "@/components/layout/Container";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { Reveal } from "@/components/motion/Reveal";
import { ReelsCarousel } from "@/components/home/ReelsCarousel";
import { PostStageSlider } from "@/components/home/PostStageSlider";
import { WobbleCard } from "@/components/ui/wobble-card";
import { blogListing } from "@/lib/content/blog";
import {
  homeBlogTeasers,
  pricingPlans,
  processSteps,
  services,
  stats,
  testimonials,
} from "@/lib/content/home";
import { projectTeasers } from "@/lib/content/projects";

function Stars() {
  return (
    <div className="flex items-center justify-center gap-1 text-accent">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-base leading-none">
          ★
        </span>
      ))}
    </div>
  );
}

const clientLogos = [
  "/clients-logos/Eklim.png",
  "/clients-logos/NTSW.png",
  "/clients-logos/artynx.png",
  "/clients-logos/chromotics.png",
  "/clients-logos/home of creativity.png",
  "/clients-logos/hridayam paints.png",
  "/clients-logos/kat expert.png",
  "/clients-logos/nagpur heights.png",
  "/clients-logos/nisargs.png",
  "/clients-logos/swadesi drp.png",
];

const homeCardGlow = {
  backgroundColor: "rgba(18, 18, 18, 0.72)",
  borderRadius: 12,
  glowRadius: 34,
  edgeSensitivity: 18,
  glowColor: "220 85 48",
  glowIntensity: 0.9,
  coneSpread: 22,
  fillOpacity: 0.16,
  colors: ["#071a3d", "#40bbff", "#ffffff"],
};

export function HomeSections() {
  return (
    <>
      <section className="relative flex min-h-[100svh] flex-col overflow-hidden pt-[76px] sm:pt-[84px] lg:pt-[88px]">
  <div className="pointer-events-none absolute inset-0">
    <video
      className="absolute inset-0 h-full w-full object-cover object-center"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden
    >
      <source src="/herovideo2.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-black/15" />
  </div>

  <div className="relative z-10 flex min-h-0 flex-1 flex-col justify-center pb-16 sm:pb-20 lg:pb-24">
    <Container className="relative text-center">
      <Reveal>
        <Stars />
        <p className="mt-3 text-sm text-foreground/80">
          5.0 rating · Helped over 100+ businesses
        </p>
        <h1 className="mt-10 text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-tight text-foreground">
          Elevating brands
        </h1>
        <h1 className="mt-1 text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-tight text-foreground">
          Forward, Faster
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white sm:text-lg">
          We help ambitious brands scale with performance marketing, creative
          strategy, and conversion-focused campaigns.
        </p>
        <Link
          href="/contact"
          className="mt-10 inline-flex h-12 items-center justify-center rounded-full bg-foreground px-10 text-sm text-background transition hover:bg-foreground/90"
        >
          Book a Consultation
        </Link>
      </Reveal>

      <Reveal delay={0.08} className="mt-14">
        <p className="text-xs tracking-[0.28em] text-white/80">
          Trusted by startups, scaleups & global brands
        </p>
        <div className="mt-10 overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div
            className="flex items-center gap-8 px-6"
            style={{
              width: 'max-content',
              animation: 'scroll-right 25s linear infinite'
            }}
          >
            {[...clientLogos, ...clientLogos].map((logo, idx) => (
              <div
                key={`${logo}-${idx}`}
                className="flex h-8 w-auto items-center justify-center opacity-80 transition duration-300 hover:opacity-100 sm:h-10"
              >
                <img
                  src={logo}
                  alt={logo.replace("/clients-logos/", "").replace(/[-.]/g, " ")}
                  className="h-20 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Container>
  </div>

  {/* ✅ BLEND: fades hero into black below */}
  <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-full bg-gradient-to-b from-transparent to-black" />
</section>

<section className="relative bg-[#050505] py-20 sm:py-24">
  {/* ✅ BLEND: reinforces the black at the very top of this section */}
  <div className="pointer-events-none absolute top-0 left-0 h-24 w-full bg-gradient-to-b from-black to-transparent" />

  <Container>
    <Reveal>
<Link
  href="/about"
  className="
  mb-10
    relative -top-10 left-1/2 z-40
    inline-flex -translate-x-1/2
    overflow-hidden
    rounded-full
    border border-white/10
    bg-black/70
    px-6 py-2
    text-xs font-semibold uppercase tracking-[0.2em]
    text-foreground/90
    backdrop-blur-md
    transition
    hover:border-white/20
    hover:bg-black/80

    before:absolute
    before:left-[12%]
    before:right-[12%]
    before:top-0
    before:h-px
    before:bg-gradient-to-r
    before:from-transparent
    before:via-sky-400/60
    before:to-transparent
    before:content-['']
  "
>
  About
</Link>
      <h2 className="max-w-3xl text-4xl tracking-tight text-foreground sm:text-5xl text-center mx-auto">
        We make brands memorable
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted text-center mx-auto">
        We blend strategy & creativity to help brands grow, connect, & stand
        out with content that drives real engagement.
      </p>
    </Reveal>

    <div className="mt-12 w-full overflow-x-hidden lg:overflow-visible">
      <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:min-w-[920px] lg:grid-cols-4">
      {stats.map((s, idx) => (
        <Reveal key={s.numeral} delay={idx * 0.05}>
          <div className="aspect-square h-full rounded-[18px] border border-gray-400/20 bg-[#0b0b0b]/85 p-6 backdrop-blur-xl sm:p-7">
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-start justify-between gap-4">
                <span className="text-sm text-foreground/95">{s.numeral}</span>
                <span className="text-right text-xs text-foreground/60">{s.label}</span>
              </div>
              <div className="mt-10 flex items-end gap-1">
                <span className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                  {s.value}
                </span>
                <span className="pb-1 text-lg font-semibold text-foreground/70">
                  {s.suffix}
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
      </div>
    </div>
  </Container>
</section>

      <section className="py-20 sm:py-24">
        <Container>
          <Reveal className="text-center flex flex-col items-center">
            <div className="mb-10 relative inline-flex overflow-hidden rounded-full border border-white/10 bg-black/70 px-6 py-2 text-xs uppercase tracking-[0.2em] text-foreground/90 backdrop-blur-md transition hover:border-white/20 hover:bg-black/80 before:absolute before:left-[12%] before:right-[12%] before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-sky-400/60 before:to-transparent before:content-['']">
              Our Services
            </div>
            <h2 className="mt-10 max-w-3xl text-4xl tracking-tight text-foreground sm:text-5xl mx-auto">
              What we master
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted">
              We empower brands to grow, engage, and succeed with clever social
              tactics and captivating visuals.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">
            {services.map((svc, idx) => (
              <Reveal key={svc.title} delay={idx * 0.04}>
                <div className="group relative overflow-hidden aspect-square h-full rounded-[18px] border border-gray-400/20 bg-[#0b0b0b]/85 transform-gpu transition-transform duration-500 ease-out motion-safe:hover:scale-[1.03]">
                  {"bgImage" in svc && svc.bgImage ? (
                    <>
                      <Image
                        src={svc.bgImage}
                        alt={svc.title}
                        fill
                        className="object-cover opacity-20 transition-opacity duration-500 group-hover:opacity-35"
                        sizes="(max-width: 768px) 100vw, 300px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                    </>
                  ) : null}
                  <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-7">
                    <h3 className="text-lg text-foreground">
                      {svc.title}
                    </h3>
                    <p className="mt-auto text-sm leading-relaxed text-white/70">
                      {svc.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

<section className="relative py-20 sm:py-24">
      <Container>
          <Reveal className="text-center flex flex-col items-center">
            <div className="mb-10 relative inline-flex overflow-hidden rounded-full border border-white/10 bg-black/70 px-6 py-2 text-xs uppercase tracking-[0.2em] text-foreground/90 backdrop-blur-md transition hover:border-white/20 hover:bg-black/80 before:absolute before:left-[12%] before:right-[12%] before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-sky-400/60 before:to-transparent before:content-['']">
              How We Work?
            </div>
            <h2 className="mt-10 max-w-3xl text-4xl tracking-tight text-foreground sm:text-5xl mx-auto">
              Our proven growth process
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted">
              We blend strategy, creativity, and data to design campaigns that grab
              attention, foster engagement, and drive tangible results.
            </p>
          </Reveal>

          {/* Master SVG definitions for premium gradients */}
          <svg className="absolute w-0 h-0 invisible">
            <defs>
              <linearGradient id="arrow-grad-horiz" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.15)" />
                <stop offset="40%" stopColor="rgba(255, 255, 255, 0.45)" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 0.95)" />
              </linearGradient>
              <linearGradient id="arrow-grad-vert" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.15)" />
                <stop offset="40%" stopColor="rgba(255, 255, 255, 0.45)" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 0.95)" />
              </linearGradient>
            </defs>
          </svg>

          <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-16 lg:gap-y-16">
            {processSteps.map((step, idx) => (
              <Reveal key={step.title} delay={idx * 0.06} className="relative">
                <div className="group relative overflow-hidden aspect-square h-full rounded-[18px] border border-gray-400/20 bg-[#0b0b0b]/85 p-6 backdrop-blur-xl sm:p-7 transform-gpu transition-transform duration-500 ease-out motion-safe:hover:scale-[1.03]">
                  <div className="flex h-full flex-col justify-between">
                    <div className="flex items-start justify-between gap-4">
                      <span className="text-xs font-semibold tracking-wider text-foreground/40 font-mono">
                        0{idx + 1}
                      </span>
                    </div>
                    <div className="mt-auto">
                      <h3 className="text-base font-medium text-foreground sm:text-lg">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-white/60">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Horizontal Arrow (Desktop only) */}
                {idx < 3 && (
                  <div className="pointer-events-none absolute left-full top-1/2 -translate-y-1/2 w-16 lg:w-[64px] hidden lg:flex items-center justify-center z-20">
                    <svg className="w-12 h-6 drop-shadow-[0_0_8px_rgba(255,255,255,0.35)] transition-all duration-500 group-hover:scale-x-110 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]" viewBox="0 0 48 24" fill="url(#arrow-grad-horiz)">
                      <path d="M0 10h36v-4l8 6-8 6v-4H0z" />
                    </svg>
                  </div>
                )}
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-transparent px-10 text-sm font-semibold text-foreground transition hover:border-white/30"
            >
              Book an Appointment
            </Link>
          </Reveal>
        </Container>
      </section>

      <ReelsCarousel />

      <PostStageSlider />

      <section className="py-24 sm:py-32">
        <Container>
          <div className="flex justify-center text-center">
            <Reveal className="max-w-2xl flex flex-col items-center">
              <div className="mb-10 relative inline-flex overflow-hidden rounded-full border border-white/10 bg-black/70 px-6 py-2 text-xs uppercase tracking-[0.2em] text-foreground/90 backdrop-blur-md transition hover:border-white/20 hover:bg-black/80 before:absolute before:left-[12%] before:right-[12%] before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-sky-400/60 before:to-transparent before:content-['']">
                Portfolio
              </div>
              <h2 className="mt-10 text-4xl tracking-tight text-foreground sm:text-5xl mx-auto">
                The selected projects
              </h2>
              <p className="mx-auto mt-5 text-lg leading-relaxed text-muted">
                Discover our selected projects, highlighting partnerships with
                forward-thinking clients in various sectors.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
            {projectTeasers.slice(0, 3).map((p, idx) => {
              // Make every 3rd item span full width to create an asymmetric editorial feel
              const isLarge = idx % 3 === 0;

              return (
                <Reveal 
                  key={p.slug} 
                  delay={idx * 0.05}
                  className={isLarge ? "sm:col-span-2" : ""}
                >
                  <Link 
                    href={`/project/${p.slug}`} 
                    className="group flex h-full flex-col overflow-hidden rounded-[20px] bg-[#111111] transition-transform duration-[0.8s] ease-[cubic-bezier(0.16,1,0.3,1)] motion-safe:hover:scale-[1.02]"
                  >
                    <div className={`relative w-full overflow-hidden ${isLarge ? "aspect-[4/3] sm:aspect-[21/9]" : "aspect-[4/3]"}`}>
                      <Image
                        src={p.image}
                        alt={p.alt}
                        fill
                        className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] motion-safe:group-hover:scale-[1.05]"
                        sizes={isLarge ? "100vw" : "(max-width: 640px) 100vw, 50vw"}
                      />
                    </div>
                    
                    {/* Text Block Below Image */}
                    <div className="flex flex-1 items-center justify-between p-6 sm:px-8 sm:py-6">
                      <h3 className="text-[17px] tracking-tight text-white">
                        {p.title}
                      </h3>
                      <p className="text-[13px] text-white/60">
                        {p.year}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <Reveal className="text-center flex flex-col items-center">
            <div className="mb-10 relative inline-flex overflow-hidden rounded-full border border-white/10 bg-black/70 px-6 py-2 text-xs uppercase tracking-[0.2em] text-foreground/90 backdrop-blur-md transition hover:border-white/20 hover:bg-black/80 before:absolute before:left-[12%] before:right-[12%] before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-sky-400/60 before:to-transparent before:content-['']">
              Testimonial
            </div>
            <h2 className="mt-10 max-w-3xl text-4xl tracking-tight text-foreground sm:text-5xl mx-auto">
              Client Feedback
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted">
              Discover success stories from satisfied clients. Learn how we assisted
              them in reaching their objectives and generating significant, enduring
              results.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">
            {testimonials.map((t, idx) => (
              <Reveal key={t.name} delay={idx * 0.04}>
                <div className="group relative overflow-hidden aspect-square h-full rounded-[18px] border border-gray-400/20 bg-[#0b0b0b]/85 transform-gpu transition-transform duration-500 ease-out motion-safe:hover:scale-[1.03]">
                  <figure className="relative flex h-full flex-col p-6 sm:p-7">
                    {"bgImage" in t && t.bgImage ? (
                      <>
                        <Image
                          src={t.bgImage}
                          alt={`${t.name} testimonial background`}
                          fill
                          className="object-cover opacity-20 transition-opacity duration-500 group-hover:opacity-35"
                          sizes="(max-width: 768px) 100vw, 300px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-transparent" />
                      </>
                    ) : null}
                    <blockquote className="relative z-10 text-sm leading-relaxed text-foreground [text-shadow:0_2px_10px_rgba(0,0,0,0.7)]">
                      "{t.quote}"
                    </blockquote>
                    <figcaption className="relative z-10 mt-auto pt-6 text-left text-sm [text-shadow:0_2px_10px_rgba(0,0,0,0.7)]">
                      <div className="text-foreground font-semibold">{t.name}</div>
                      <div className="text-foreground/80 text-xs mt-0.5">{t.role}</div>
                    </figcaption>
                  </figure>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Brands Grid Section */}
      <section className="relative overflow-hidden py-28 sm:py-36 bg-[#030303]">
        {/* 1. Vintage CSS Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] pointer-events-none" />
        
        {/* 2. Warm Amber Vintage Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255, 255, 255, 0.08)_0%,transparent_70%)] pointer-events-none" />
        
        {/* 3. Cinema Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(3,3,3,0.85)_100%)] pointer-events-none" />
        
        {/* 4. Film Grain/Noise Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.035] pointer-events-none" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` 
          }} 
        />

        {/* 5. Edge Blending Gradients */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#030303] via-[#030303]/90 to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#030303] via-[#030303]/90 to-transparent pointer-events-none z-10" />

        <Container className="relative z-10">
          <Reveal className="text-center flex flex-col items-center">
            <div className="mb-20 relative inline-flex overflow-hidden rounded-full border border-white/10 bg-black/70 px-6 py-2 text-xs uppercase tracking-[0.2em] text-foreground/90 backdrop-blur-md transition hover:border-white/20 hover:bg-black/80 before:absolute before:left-[12%] before:right-[12%] before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-sky-400/60 before:to-transparent before:content-['']">
              Partners
            </div>
            <h2 className="max-w-3xl text-4xl tracking-tight text-foreground sm:text-5xl mx-auto">
              Trusted by ambitious brands
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted">
              We collaborate with industry leaders and fast-growing startups to build digital authorities and high-converting channels.
            </p>
          </Reveal>

          {/* Clean Floating Grid Layout */}
          <div className="mt-20 grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-5 gap-x-8 gap-y-12 sm:gap-y-16 items-center justify-center">
            {clientLogos.map((logoPath, idx) => {
              const name = logoPath.split("/").pop()?.replace(".png", "") || `Client ${idx}`;
              return (
                <Reveal 
                  key={logoPath} 
                  delay={idx * 0.02}
                  className="flex items-center justify-center p-4 transition-all duration-300"
                >
                  <div className="relative w-full h-full flex items-center justify-center transition-all duration-300">
                    <Image
                      src={logoPath}
                      alt={name}
                      width={220}
                      height={110}
                      className="max-h-16 sm:max-h-20 w-auto object-contain transition-all duration-300 filter brightness-0 invert sepia-[0.25] opacity-50 hover:opacity-100 hover:sepia-0 hover:scale-[1.05]"
                    />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <Reveal className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="mb-10 relative inline-flex overflow-hidden rounded-full border border-white/10 bg-black/70 px-6 py-2 text-xs uppercase tracking-[0.2em] text-foreground/90 backdrop-blur-md transition hover:border-white/20 hover:bg-black/80 before:absolute before:left-[12%] before:right-[12%] before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-sky-400/60 before:to-transparent before:content-['']">
              FAQ
            </div>
            <h2 className="mt-10 text-4xl tracking-tight text-foreground sm:text-5xl">
              Everything you’re wondering
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
              Have questions? Find clear, concise answers to the most common inquiries
              below.
            </p>
          </Reveal>

          <Reveal className="lg:ml-auto lg:w-full lg:max-w-4xl">
            <FaqAccordion />
          </Reveal>
          </div>
        </Container>
        <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-full bg-gradient-to-b from-transparent to-[#000]" />
      </section>


    </>
  );
}
