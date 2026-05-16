import Image from "next/image";
import Link from "next/link";
import BorderGlow from "@/components/BorderGlow";
import { Container } from "@/components/layout/Container";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { Reveal } from "@/components/motion/Reveal";
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
        <h1 className="mt-10 text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-tight text-foreground">
          Elevating brands
        </h1>
        <h1 className="mt-1 text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-tight text-foreground">
          Forward, Faster
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white sm:text-lg">
          We help ambitious brands scale with performance marketing, creative
          strategy, and conversion-focused campaigns.
        </p>
        <Link
          href="/contact"
          className="mt-10 inline-flex h-12 items-center justify-center rounded-full bg-foreground px-10 text-sm font-semibold text-background transition hover:bg-foreground/90"
        >
          Book a Consultation
        </Link>
      </Reveal>

      <Reveal delay={0.08} className="mt-14">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/80">
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

<section className="relative py-20 sm:py-24">
  {/* ✅ BLEND: reinforces the black at the very top of this section */}
  <div className="pointer-events-none absolute top-0 left-0 h-24 w-full bg-gradient-to-b from-black to-transparent" />

  <Container>
    <Reveal>
<Link
  href="/about"
  className="
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
    before:via-white/40
    before:to-transparent
    before:content-['']
  "
>
  About
</Link>
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
        About
      </p>
      <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        We make brands memorable
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
        We blend strategy & creativity to help brands grow, connect, & stand
        out with content that drives real engagement.
      </p>
    </Reveal>

    <div className="mt-12 grid gap-4 sm:grid-cols-2">
      {stats.map((s, idx) => (
        <Reveal key={s.numeral} delay={idx * 0.05}>
          <BorderGlow
            {...homeCardGlow}
            className="h-full transform-gpu transition-transform duration-500 ease-out motion-safe:hover:scale-[1.02]"
          >
            <div className="flex h-full flex-col justify-between p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <span className="text-sm text-foreground">{s.numeral}</span>
                <span className="text-right text-xs text-muted">{s.label}</span>
              </div>
              <div className="mt-10 flex items-end gap-1">
                <span className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                  {s.value}
                </span>
                <span className="pb-1 text-lg font-semibold text-muted">
                  {s.suffix}
                </span>
              </div>
            </div>
          </BorderGlow>
        </Reveal>
      ))}
    </div>
  </Container>
</section>

      <section className="py-20 sm:py-24">
        <Container>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
              Our Services
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              What we master
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
              We empower brands to grow, engage, and succeed with clever social
              tactics and captivating visuals.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((svc, idx) => (
              <Reveal key={svc.title} delay={idx * 0.04}>
                <BorderGlow
                  {...homeCardGlow}
                  className="h-full transform-gpu transition-transform duration-500 ease-out motion-safe:hover:scale-[1.03]"
                >
                  <div className="h-full p-6">
                    <h3 className="text-lg font-semibold text-foreground">
                      {svc.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{svc.body}</p>
                  </div>
                </BorderGlow>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

<section className="relative py-20 sm:py-24">
      <Container>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
              How We Work?
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Our proven growth process
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
              We blend strategy, creativity, and data to design campaigns that grab
              attention, foster engagement, and drive tangible results.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, idx) => (
              <Reveal key={step.title} delay={idx * 0.06}>
                <BorderGlow
                  {...homeCardGlow}
                  className="h-full transform-gpu transition-transform duration-500 ease-out motion-safe:hover:scale-[1.05]"
                >
                  <div className="h-full p-6">
                    <h3 className="text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {step.body}
                    </p>
                  </div>
                </BorderGlow>
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

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-10  lg:items-start">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
              Portfolio
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              The selected projects
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
              Discover our selected projects, highlighting partnerships with
              forward-thinking clients in various sectors.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {projectTeasers.map((p, idx) => (
              <Reveal key={p.slug} delay={idx * 0.06}>
                <Link href={`/project/${p.slug}`} className="group block">
                  <WobbleCard
                    containerClassName="h-full rounded-card border border-[#FFFFFF26] bg-surface/40 transition group-hover:border-white/20"
                    className="!p-0"
                  >
                    <div className="relative aspect-[16/11] overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.alt}
                        fill
                        className="object-cover transition duration-700 motion-safe:group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                        <h3 className="text-lg font-semibold text-foreground">
                          {p.title}
                        </h3>
                        <span className="text-sm text-foreground/80">{p.year}</span>
                      </div>
                    </div>
                  </WobbleCard>
                </Link>
              </Reveal>
            ))}
          </div>
          </div>
        </Container>
      </section>



      <section className="py-20 sm:py-24">
        <Container>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
              Testimonial
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Client Feedback
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
              Discover success stories from satisfied clients. Learn how we assisted
              them in reaching their objectives and generating significant, enduring
              results.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-0.5 md:grid-cols-4">
            {testimonials.map((t, idx) => (
              <Reveal key={t.name} delay={idx * 0.04}>
                <BorderGlow
                  {...homeCardGlow}
                  className="mx-auto aspect-square w-full max-w-[300px] rounded-[25px]"
                >
                  <figure className="relative flex h-full flex-col overflow-hidden rounded-[inherit] p-6">
                    {t.bgImage ? (
                      <Image
                        src={t.bgImage}
                        alt={`${t.name} testimonial background`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 300px"
                      />
                    ) : null}
                    <blockquote className="relative z-10 text-sm leading-relaxed text-foreground [text-shadow:0_2px_10px_rgba(0,0,0,0.7)]">
                      {t.quote}
                    </blockquote>
                    <figcaption className="relative z-10 mt-auto pt-6 text-left text-sm [text-shadow:0_2px_10px_rgba(0,0,0,0.7)]">
                      <div className="font-semibold text-foreground">{t.name}</div>
                      <div className="text-foreground/85">{t.role}</div>
                    </figcaption>
                  </figure>
                </BorderGlow>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
              FAQ
            </p>
            <div className="mt-4 max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Everything
              </h2>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                you’re wondering
              </h2>
            </div>
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
      </section>

<section className="relative py-20 sm:py-24 overflow-hidden">
  <Container className="relative z-10">
    <Reveal>
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
        Blog and News
      </p>
      <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Insights, Ideas, and Perspectives
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
        Have questions? Our FAQ section has you covered with quick answers to the
        most common inquiries.
      </p>
    </Reveal>

    <div className="mt-12 grid gap-6 md:grid-cols-3">
      {homeBlogTeasers.map((b, idx) => {
        const meta = blogListing.find((x) => x.slug === b.slug);
        return (
          <Reveal key={b.slug} delay={idx * 0.06}>
            <BorderGlow
              {...homeCardGlow}
              className="h-full transform-gpu transition-transform duration-500 ease-out motion-safe:hover:scale-[1.03]"
            >
              <Link
                href={`/blog/${b.slug}`}
                className="group block h-full p-6"
              >
                <h3 className="text-base font-semibold text-foreground group-hover:text-foreground/90">
                  {b.title}
                </h3>
                {meta && (
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted">
                    {meta.category}
                  </p>
                )}
              </Link>
            </BorderGlow>
          </Reveal>
        );
      })}
    </div>
  </Container>

{/* ✅ BLEND: fades into footer below */}
<div className="pointer-events-none absolute bottom-0 left-0 h-64 w-full bg-gradient-to-b from-transparent to-[#000]" />
</section>

    </>
  );
}
