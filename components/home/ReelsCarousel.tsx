"use client";

import { useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { useEffect, useRef } from "react";

const reelCards = [
  {
    title: "Campaign Reel",
    caption: "Short-form narrative",
    src: "/reels/1.mp4",
  },
  {
    title: "Brand Story",
    caption: "Fast-cut brand story",
    src: "/reels/2.mp4",
  },
  {
    title: "Product Focus",
    caption: "Product-led motion",
    src: "/reels/3.mp4",
  },
  {
    title: "BTS Edit",
    caption: "Behind the scenes",
    src: "/reels/4.mp4",
  },
  {
    title: "Founder Vision",
    caption: "Minimal social edit",
    src: "/reels/5.mp4",
  },
  {
    title: "Highlight Reel",
    caption: "Weekly highlights",
    src: "/reels/6.mp4",
  },
  {
    title: "Motion Reel",
    caption: "Motion graphics",
    src: "/reels/7.mp4",
  },
  {
    title: "Creative Cut",
    caption: "Creative story",
    src: "/reels/8.mp4",
  },
  {
    title: "Social Short",
    caption: "Social media cut",
    src: "/reels/9.mp4",
  },
] as const;

function ReelCard({ card }: { card: typeof reelCards[number] }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Use IntersectionObserver to play/pause video based on visibility
    // This heavily optimizes performance by only playing videos that are in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Play when visible
            video.play().catch(() => {
              // Ignore play errors (e.g., auto-play prevented by browser policy)
            });
          } else {
            // Pause when out of view to save resources
            video.pause();
          }
        });
      },
      {
        root: null,
        rootMargin: "50px", // Pre-load/play slightly before entering the viewport
        threshold: 0,
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <article
      className="
        relative flex-none
        w-[50vw]
        max-w-[15rem]
        sm:w-[14rem]
        lg:w-[15rem]

        transform-gpu
        will-change-transform
      "
    >
      <div
        className="
          group/card
          relative aspect-[9/16]
          overflow-hidden
          rounded-2xl
          border border-white/10
          bg-[#0b0b0b]

          shadow-[0_18px_45px_rgba(0,0,0,0.42)]

          transform-gpu
          backface-hidden
          will-change-transform

          transition-transform
          duration-300
          ease-out

          hover:scale-[1.02]
        "
      >
        {/* VIDEO */}
        <video
          ref={videoRef}
          className="
            h-full w-full
            object-cover

            transform-gpu
            backface-hidden
          "
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={card.title}
          disablePictureInPicture
          disableRemotePlayback
        >
          <source src={card.src} type="video/mp4" />
        </video>

        {/* OVERLAY */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.88),rgba(0,0,0,0.08)_62%,rgba(0,0,0,0.12))]" />

        {/* CONTENT */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5">
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/55">
            Reel
          </p>

          <h3 className="mt-2 text-lg font-medium tracking-tight text-white">
            {card.title}
          </h3>

          <p className="mt-1 text-sm leading-relaxed text-white/65">
            {card.caption}
          </p>
        </div>
      </div>
    </article>
  );
}

export function ReelsCarousel() {
  const reduceMotion = useReducedMotion();

  // duplicate for seamless infinite loop
  const loopedCards = [...reelCards, ...reelCards];

  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      {/* Heading */}
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center flex flex-col items-center">
          <div className="mb-10 relative inline-flex overflow-hidden rounded-full border border-white/10 bg-black/70 px-6 py-2 text-xs uppercase tracking-[0.2em] text-foreground/90 backdrop-blur-md transition hover:border-white/20 hover:bg-black/80 before:absolute before:left-[12%] before:right-[12%] before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-sky-400/60 before:to-transparent before:content-['']">
            Reels
          </div>

          <h2 className="mt-10 text-3xl tracking-tight text-white sm:text-4xl">
            Short-form motion, built to loop
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/60">
            A minimal horizontal reel strip for campaign cuts, product clips,
            and founder stories.
          </p>
        </div>
      </Container>

      {/* Slider */}
      <div className="relative mt-28 overflow-hidden max-w-[1600px] mx-auto">
        {/* SMOOTH MASKED GRADIENT BLUR LEFT */}
        <div 
          className="pointer-events-none absolute inset-y-0 left-0 z-30 w-32 sm:w-96 bg-gradient-to-r from-black via-black/80 to-transparent backdrop-blur-[16px]" 
          style={{
            WebkitMaskImage: "linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.85) 30%, rgba(0, 0, 0, 0) 100%)",
            maskImage: "linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.85) 30%, rgba(0, 0, 0, 0) 100%)"
          }}
        />

        {/* SMOOTH MASKED GRADIENT BLUR RIGHT */}
        <div 
          className="pointer-events-none absolute inset-y-0 right-0 z-30 w-32 sm:w-96 bg-gradient-to-l from-black via-black/80 to-transparent backdrop-blur-[16px]" 
          style={{
            WebkitMaskImage: "linear-gradient(to left, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.85) 30%, rgba(0, 0, 0, 0) 100%)",
            maskImage: "linear-gradient(to left, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.85) 30%, rgba(0, 0, 0, 0) 100%)"
          }}
        />

        {/* Carousel Container */}
        <div className="relative overflow-hidden px-4 sm:px-8">
          <div className="group overflow-hidden">
            <div
              className={[
                `
                reels-track
                flex w-max items-stretch
                gap-6 lg:gap-8
                py-2

                transform-gpu
                will-change-transform
                backface-hidden
              `,
                reduceMotion
                  ? ""
                  : "motion-safe:animate-[reels-marquee_26s_linear_infinite] group-hover:[animation-play-state:paused]",
              ].join(" ")}
              style={{
                /* We adjust the animation duration since there are more videos now. 
                   Assuming each card takes ~18rem and we have 9 cards = 162rem per loop.
                   Let's slow it down to 50s. */
                animationDuration: reduceMotion ? undefined : "50s"
              }}
            >
              {loopedCards.map((card, index) => (
                <ReelCard key={`${card.title}-${index}`} card={card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}