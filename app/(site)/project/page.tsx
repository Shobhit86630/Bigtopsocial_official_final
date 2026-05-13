import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { projectTeasers } from "@/lib/content/projects";

export const metadata: Metadata = {
  title: "Explore Our Portfolio",
};

export default function ProjectIndexPage() {
  return (
    <section className="pb-24 pt-28 sm:pt-32">
      <Container>
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
            Explore Our Portfolio
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
            Explore Our
          </h1>
          <h1 className="mt-1 max-w-4xl text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
            Impactful Projects
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            From ambitious startups to established brands, we build powerful digital
            experiences that elevate presence and drive measurable results.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
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
                    <span className="text-lg font-semibold text-foreground">
                      {p.title}
                    </span>
                    <span className="text-sm text-foreground/80">{p.year}</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
