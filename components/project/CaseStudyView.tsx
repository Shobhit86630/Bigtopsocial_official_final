import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import type { CaseBlock, Project } from "@/lib/content/projects";

function renderBlock(block: CaseBlock, sectionIdx: number, blockIdx: number) {
  if (block.type === "paragraphs") {
    return block.paragraphs.map((p, idx) => (
      <p
        key={`${sectionIdx}-${blockIdx}-p-${idx}`}
        className="mt-4 text-sm leading-relaxed text-muted sm:text-base"
      >
        {p}
      </p>
    ));
  }
  return (
    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted sm:text-base">
      {block.items.map((item, idx) => (
        <li key={`${sectionIdx}-${blockIdx}-li-${idx}`}>{item}</li>
      ))}
    </ul>
  );
}

export function CaseStudyView({ project }: { project: Project }) {
  return (
    <>
      <section className="border-b border-white/[0.06] pb-16 pt-28 sm:pt-32">
        <Container>
          <p className="text-sm text-muted">{project.date}</p>
          <h1 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
            {project.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {project.pills.map((p, idx) => (
              <span
                key={`${p}-${idx}`}
                className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-foreground/90"
              >
                {p}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <div className="grid gap-8 border-y border-white/[0.06] py-8 sm:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                {project.servicesLabel}
              </p>
              <p className="mt-2 text-sm font-medium text-foreground">
                {project.servicesValue}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                {project.categoryLabel}
              </p>
              <p className="mt-2 text-sm font-medium text-foreground">
                {project.categoryValue}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                {project.clientLabel}
              </p>
              <p className="mt-2 text-sm font-medium text-foreground">
                {project.clientValue}
              </p>
            </div>
          </div>
          <a
            href={project.liveHref}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex h-11 items-center justify-center rounded-full border border-white/15 px-8 text-sm font-semibold text-foreground transition hover:border-white/30"
          >
            View Live Website
          </a>
        </Container>
      </section>

      <section className="pb-6">
        <Container>
          <div className="relative aspect-[21/9] overflow-hidden rounded-card border border-white/[0.08]">
            <Image
              src={project.coverSrc}
              alt={project.coverAlt}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container className="max-w-3xl">
          {project.blocks.map((section, i) => (
            <Reveal key={section.heading + String(i)} delay={i * 0.04}>
              <h2 className="mt-12 text-xl font-semibold text-foreground first:mt-0 sm:text-2xl">
                {section.heading}
              </h2>
              {section.content.map((c, j) => (
                <div key={j}>{renderBlock(c, i, j)}</div>
              ))}
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="border-t border-white/[0.06] py-16">
        <Container>
          <h2 className="text-2xl font-semibold text-foreground">
            More Other cases
          </h2>
          <Link
            href="/project"
            className="mt-3 inline-block text-sm font-semibold text-foreground/80 underline-offset-4 hover:underline"
          >
            View more works
          </Link>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {project.moreCases.map((c) => (
              <Link
                key={c.slug}
                href={`/project/${c.slug}`}
                className="rounded-card border border-white/[0.08] bg-surface/50 px-5 py-4 text-sm font-semibold text-foreground transition hover:border-white/20"
              >
                {c.title}
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
