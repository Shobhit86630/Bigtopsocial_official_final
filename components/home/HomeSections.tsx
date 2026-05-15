import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { Reveal } from "@/components/motion/Reveal";
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
        className="relative bottom-6 left-1/2 z-40 inline-flex -translate-x-1/2 rounded-full border border-white/10 bg-black/70 px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/90 backdrop-blur-md transition hover:border-white/20 hover:bg-black/80"
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
          <div className="flex h-full flex-col justify-between rounded-card border border-white/[0.08] bg-surface-elevated/80 p-6 sm:p-7">
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
                <div className="rounded-card p-px neon-card">
                  <div className="h-full rounded-[inherit] bg-surface/60 p-6">
                    <h3 className="text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {step.body}
                    </p>
                  </div>
                </div>
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
                <Link
                  href={`/project/${p.slug}`}
                  className="group block overflow-hidden rounded-card border border-white/[0.08] bg-surface/40 transition hover:border-white/20"
                >
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.alt}
                      fill
                      className="object-cover transition duration-700 motion-safe:group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                      <h3 className="text-lg font-semibold text-foreground">
                        {p.title}
                      </h3>
                      <span className="text-sm text-foreground/80">{p.year}</span>
                    </div>
                  </div>
                </Link>
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
                <div className="h-full rounded-card border border-white/[0.08] bg-blue p-6">
                  <h3 className="text-lg font-semibold text-foreground">
                    {svc.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{svc.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
              Pricing
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Simple Pricing. Serious Results.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
              Our plans give you exactly what you need — nothing more, nothing less —
              to grow with confidence.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {pricingPlans.map((plan, idx) => (
              <Reveal key={plan.name} delay={idx * 0.06}>
                <div className="flex h-full flex-col rounded-card border border-white/[0.08] bg-surface/60 p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                    {plan.tierLabel}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold text-foreground">
                    {plan.name}
                  </h3>
                  <div className="mt-6 flex items-end gap-2">
                    <span className="text-4xl font-semibold tracking-tight sm:text-5xl">
                      {plan.price}
                    </span>
                    <span className="pb-1 text-sm font-medium text-muted">
                      / Month
                    </span>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-muted">
                    {plan.description}
                  </p>
                  <ul className="mt-6 space-y-3 text-sm text-foreground/90">
                    {plan.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-foreground px-8 text-sm font-semibold text-background transition hover:bg-foreground/90"
                  >
                    Get Started
                  </Link>
                </div>
              </Reveal>
            ))}
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

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((t, idx) => (
              <Reveal key={t.name} delay={idx * 0.04}>
                <figure className="h-full rounded-card border border-white/[0.08] bg-surface/50 p-6">
                  <blockquote className="text-sm leading-relaxed text-foreground/90">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-5 text-sm">
                    <div className="font-semibold text-foreground">{t.name}</div>
                    <div className="text-muted">{t.role}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
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

          <Reveal className="mt-10 max-w-3xl">
            <FaqAccordion />
          </Reveal>
        </Container>
      </section>

<section className="relative py-20 sm:py-24">
  <Container>
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
            <Link
              href={`/blog/${b.slug}`}
              className="group block rounded-card border border-white/[0.08] bg-surface/50 p-6 transition hover:border-white/20"
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
