import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { blogPosts } from "@/lib/content/blog";

export const metadata: Metadata = {
  title: "Blogs",
};

export default function BlogIndexPage() {
  return (
    <section className="pb-24 pt-28 sm:pt-32">
      <Container>
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
            Blogs
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
            Explore Our
          </h1>
          <h1 className="mt-1 max-w-4xl text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
            Insight-Driven Thinking
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Strategic insights, marketing clarity, and growth-focused thinking from
            Elevon.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {blogPosts.map((post, idx) => (
            <Reveal key={post.slug} delay={idx * 0.05}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block rounded-card border border-white/[0.08] bg-surface/50 p-6 transition hover:border-white/20"
              >
                <h2 className="text-lg font-semibold text-foreground group-hover:text-foreground/90">
                  {post.title}
                </h2>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  {post.category}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
