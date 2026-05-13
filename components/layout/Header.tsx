"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { NavLinks } from "@/components/layout/NavLinks";

export function Header() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const delta = currentScrollY - lastScrollY.current;

        if (open) {
          setVisible(true);
        } else if (currentScrollY <= 100) {
          setVisible(true);
        } else if (delta > 10) {
          setVisible(false);
        } else if (delta < -10) {
          setVisible(true);
        }

        lastScrollY.current = currentScrollY;
        ticking.current = false;
      });
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 bg-transparent border-white/[0.06] backdrop-blur-xl transition-transform duration-300 ease-out ${visible ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="mx-auto flex h-[72px] max-w-content items-center justify-between px-5 sm:h-[80px] sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center text-foreground">
          <Image
            src="/main.logo.png"
            alt="Brand logo"
            width={100}
            height={20}
            className="h-5 w-auto"
          />
        </Link>

        <NavLinks className="hidden lg:block" />

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden text-sm font-semibold text-foreground transition hover:text-foreground/80 lg:inline"
          >
            Let&apos;s Grow
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-foreground lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-3.5 w-4">
              <span
                className={`absolute left-0 top-0 h-0.5 w-4 bg-white transition ${open ? "translate-y-1.5 rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-4 bg-white transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute left-0 top-3 h-0.5 w-4 bg-white transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-white/[0.06] bg-transparent lg:hidden ${open ? "block" : "hidden"}`}
      >
        <div className="mx-auto max-w-content space-y-8 px-5 py-8">
          <NavLinks onNavigate={() => setOpen(false)} />
          <Link
            href="/contact"
            className="inline-block text-sm font-semibold text-foreground"
            onClick={() => setOpen(false)}
          >
            Let&apos;s Grow
          </Link>
        </div>
      </div>
    </header>
  );
}
