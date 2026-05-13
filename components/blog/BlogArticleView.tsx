import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import type { BlogPost } from "@/lib/content/blog";

export function BlogArticleView({ post }: { post: BlogPost }) {
  return (
    <>
      <section className="border-b border-white/[0.06] pb-16 pt-28 sm:pt-32">
        <Container className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
            Blogs
          </p>
          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {post.title}
          </h1>
          <div className="mt-8 grid gap-6 border-t border-white/[0.06] pt-6 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Category
              </p>
              <p className="mt-2 text-sm font-medium text-foreground">
                {post.category}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Publish date
              </p>
              <p className="mt-2 text-sm font-medium text-foreground">
                {post.publishDate}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <article className="py-12 sm:py-16">
        <Container className="max-w-3xl">
          {post.sections.map((sec, i) => (
            <Reveal key={`${sec.heading}-${i}`} delay={i * 0.04}>
              <h2 className="mt-10 text-xl font-semibold text-foreground first:mt-0 sm:text-2xl">
                {sec.heading}
              </h2>
              {sec.paragraphs?.map((p, pi) => (
                <p
                  key={`${sec.heading}-p-${pi}`}
                  className="mt-4 text-sm leading-relaxed text-muted sm:text-base"
                >
                  {p}
                </p>
              ))}
              {sec.bullets && (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted sm:text-base">
                  {sec.bullets.map((b, bi) => (
                    <li key={`${sec.heading}-b-${bi}`}>{b}</li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}

          <nav className="mt-14 flex flex-col gap-4 border-t border-white/[0.06] pt-10 text-sm sm:flex-row sm:justify-between">
            {post.prev ? (
              <Link
                href={`/blog/${post.prev.slug}`}
                className="font-semibold text-foreground/90 transition hover:text-foreground"
              >
                ‹ {post.prev.title}
              </Link>
            ) : (
              <span />
            )}
            {post.next ? (
              <Link
                href={`/blog/${post.next.slug}`}
                className="font-semibold text-foreground/90 transition hover:text-foreground sm:text-right"
              >
                {post.next.title} ›
              </Link>
            ) : null}
          </nav>
        </Container>
      </article>
    </>
  );
}
