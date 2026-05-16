import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { FooterSubscribeForm } from "@/components/layout/FooterSubscribeForm";
import { NavLinks } from "@/components/layout/NavLinks";

const social = [
  { href: "https://x.com/", label: "X" },
  { href: "https://www.instagram.com/", label: "Instagram" },
  { href: "https://www.youtube.com/", label: "Youtube" },
  { href: "https://framer.link/clariv-studio", label: "Framer" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden pb-10 pt-20 text-sm text-white/90">

  {/* ✅ BLEND: fades previous section into footer video */}
<div className="pointer-events-none absolute top-0 left-0 z-10 h-64 w-full bg-gradient-to-b from-[#000] via-[#000]/80 to-transparent" />

      <div className="pointer-events-none absolute inset-0">
        <video
          className="absolute inset-0 h-full w-full object-cover object-center opacity-85"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
        >
          <source src="/herovideo2.mp4" type="video/mp4" />
        </video>
      </div>
      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <FooterSubscribeForm />
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/80">
                Navigate
              </p>
              <div className="mt-4">
                <NavLinks className="[&_ul]:flex-col [&_ul]:gap-3 [&_ul]:text-foreground/90" />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/80">
                  Email
                </h3>
                <a
                  href="mailto:hello@elevon.media"
                  className="mt-2 block text-foreground/90 transition hover:text-foreground"
                >
                  bigtopsocial@gmail.com
                </a>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/80">
                  Phone
                </h3>
                <a
                  href="tel:+40003454567"
                  className="mt-2 block text-foreground/90 transition hover:text-foreground"
                >
                  4(000) 345-4567
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/80">
                  Location
                </h3>
                <p className="mt-2 text-sm font-semibold text-foreground">
                  Elevon Studio
                </p>
                <p className="mt-1 max-w-xs leading-relaxed text-foreground/80">
                  475 Madison Avenue, Floor 12 New York, NY 10022 United States
                </p>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/80">
                  Social
                </h3>
                <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                  {social.map((s) => (
                    <li key={s.href}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-foreground/90 transition hover:text-foreground"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/[0.06] pt-8 text-xs text-white/90 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <a
              href="https://framer.link/clariv-studio"
              target="_blank"
              rel="noreferrer"
              className="text-foreground/80 transition hover:text-foreground"
            >
              © 2026 Elevon Studio
            </a>
            <Link
              href="/terms-conditions"
              className="transition hover:text-foreground"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy-policy"
              className="transition hover:text-foreground"
            >
              Privacy Policy
            </Link>
          </div>
          <a
            href="https://www.framer.com/"
            target="_blank"
            rel="noreferrer"
            className="max-w-md text-[11px] leading-snug text-white/90 transition hover:text-foreground/80"
          >
            Create a free website with Framer, the website builder loved by
            startups, designers and agencies.
          </a>
        </div>
      </Container>
    </footer>
  );
}
