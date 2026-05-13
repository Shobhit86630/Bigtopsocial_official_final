import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { Reveal } from "@/components/motion/Reveal";
import { aboutTeam, industries } from "@/lib/content/about";
import { stats, testimonials } from "@/lib/content/home";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-white/[0.06] pb-16 pt-28 sm:pt-32">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
            About Us
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
            Where brands
          </h1>
          <h1 className="mt-1 max-w-4xl text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
            become unforgettable
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            A team of creators and marketers elevating brands with powerful content
            and campaigns.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              Our Story
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
              Established in 2014, driven by creativity & innovation continuously.
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

          <Reveal className="mt-12 max-w-3xl">
            <p className="text-lg font-medium leading-relaxed text-foreground/90">
              At Elevon, we believe powerful marketing blends strategy, creativity, and
              performance. We craft campaigns that look great, connect deeply, and drive
              real growth.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-10 md:grid-cols-2">
            <Reveal>
              <h3 className="text-xl font-semibold text-foreground">Our mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                To help brands grow through bold strategy, creative storytelling, and
                performance-driven marketing.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h3 className="text-xl font-semibold text-foreground">Vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                To become a globally trusted marketing agency that turns ideas into
                measurable impact.
              </p>
            </Reveal>
          </div>

          <Reveal className="mt-12">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-10 text-sm font-semibold text-background transition hover:bg-foreground/90"
            >
              Get in Touch
            </Link>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-white/[0.06] py-16 sm:py-20">
        <Container>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
              Awards
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Awards & Achievements
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
              We’re honored to be recognized for our creativity, performance, and
              commitment to delivering outstanding marketing results.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-white/[0.06] py-16 sm:py-20">
        <Container>
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
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

      <section className="border-t border-white/[0.06] py-16 sm:py-20">
        <Container>
          <Reveal>
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              Trusted by teams building what’s ahead.
            </h2>
            <p className="mt-4 text-sm text-muted">Design partner</p>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-white/[0.06] py-16 sm:py-20">
        <Container>
          <Reveal>
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              Industries We Power.
            </h2>
            <p className="mt-4 max-w-4xl text-sm leading-relaxed text-muted sm:text-base">
              {industries}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-white/[0.06] py-16 sm:py-20">
        <Container>
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Minds behind Elevon
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
              Our team blends strategy, creativity, and performance to build marketing
              that drives real growth.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {aboutTeam.map((m, idx) => (
              <Reveal key={m.name} delay={idx * 0.04}>
                <div className="rounded-card border border-white/[0.08] bg-surface/50 p-6">
                  <h3 className="text-lg font-semibold text-foreground">{m.name}</h3>
                  <p className="mt-2 text-sm text-muted">{m.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-white/[0.06] py-16 sm:py-20">
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
    </>
  );
}
