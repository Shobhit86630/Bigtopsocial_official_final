import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <section className="pb-24 pt-28 sm:pt-32">
      <Container className="max-w-3xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
            Let&apos;s Work Together
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
            Have Something in Mind?
          </h1>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
            We are all here
          </h1>
          <p className="mt-8 text-base leading-relaxed text-muted sm:text-lg">
            Whether you need clarity, strategy, or full-scale execution — our team is
            here to support your growth.
          </p>
        </Reveal>

        <div className="mt-14 space-y-10">
          <Reveal>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
              Email
            </h2>
            <a
              href="mailto:hello@elevon.media"
              className="mt-2 inline-block text-lg font-semibold text-foreground transition hover:text-foreground/80"
            >
              hello@elevon.media
            </a>
          </Reveal>
          <Reveal delay={0.04}>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
              Phone
            </h2>
            <a
              href="tel:+40003454567"
              className="mt-2 inline-block text-lg font-semibold text-foreground transition hover:text-foreground/80"
            >
              4(000) 345-4567
            </a>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
              Address
            </h2>
            <p className="mt-2 text-lg font-semibold leading-relaxed text-foreground">
              <Link
                href="https://maps.google.com/?q=475+Madison+Avenue+New+York"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-foreground/80"
              >
                475 Madison Avenue, Floor 12 New York, NY 10022 United States
              </Link>
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
