"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { Container } from "@/components/layout/Container";

type PostCard = {
  title: string;
  meta: string;
  type: "Image" | "Video";
  src: string;
};

const cards: PostCard[] = [
  {
    title: "Brand reveal post",
    meta: "Feed post • 01",
    type: "Image",
    src: "/post contents/1.png",
  },
  {
    title: "Campaign highlight",
    meta: "Carousel • 02",
    type: "Image",
    src: "/post contents/2.png",
  },
  {
    title: "Product teaser",
    meta: "Feed post • 03",
    type: "Image",
    src: "/post contents/3.png",
  },
  {
    title: "Social proof card",
    meta: "Feed post • 04",
    type: "Image",
    src: "/post contents/4.png",
  },
  {
    title: "Behind the scenes",
    meta: "Carousel • 05",
    type: "Image",
    src: "/post contents/5.png",
  },
  {
    title: "Founder vision",
    meta: "Feed post • 06",
    type: "Image",
    src: "/post contents/6.png",
  },
  {
    title: "Feature showcase",
    meta: "Feed post • 07",
    type: "Image",
    src: "/post contents/7.png",
  },
  {
    title: "Community highlight",
    meta: "Carousel • 08",
    type: "Image",
    src: "/post contents/8.png",
  },
] as const;

function StageCard({
  card,
  isActive,
  offset,
  distance,
  onClick,
}: {
  card: PostCard;
  isActive: boolean;
  offset: number;
  distance: number;
  onClick: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Performance Optimization: Only play video if it is the active center card
  useEffect(() => {
    if (card.type === "Video" && videoRef.current) {
      if (isActive) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isActive, card.type]);

  // spacing between cards
  const CARD_SPACING = 310;

  // scale hierarchy
  const scale = isActive ? 1 : distance === 1 ? 0.88 : 0.76;

  // opacity hierarchy
  const opacity = isActive ? 1 : distance === 1 ? 0.42 : 0.12;

  // slight perspective rotation
  const rotate = isActive ? 0 : offset > 0 ? 5 : -5;

  // vertical lift
  const translateY = isActive ? -14 : 0;

  // stacking
  const zIndex = 100 - distance;

  return (
    <motion.div
      className="
        absolute
        w-[82vw]
        max-w-[26rem]
        sm:w-[22rem]
        lg:w-[26rem]
        cursor-pointer
      "
      animate={{
        x: offset * CARD_SPACING,
        scale,
        opacity,
        rotateY: rotate,
        y: translateY,
      }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 22,
      }}
      style={{
        zIndex,
        transformStyle: "preserve-3d",
      }}
      onClick={onClick}
    >
      <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[#0b0b0b] shadow-[0_30px_80px_rgba(0,0,0,0.55)] pointer-events-none">
        <div className="relative aspect-[4/5]">
          {card.type === "Image" ? (
            <Image
              src={card.src}
              alt={card.title}
              fill
              className="object-cover"
              sizes="(max-width:768px) 78vw, 24rem"
              priority={isActive}
            />
          ) : (
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={card.title}
            >
              <source src={card.src} type="video/mp4" />
            </video>
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.88),rgba(0,0,0,0.08)_58%,rgba(0,0,0,0.18))]" />

          {/* Content */}
          <div className="absolute inset-x-0 bottom-0 p-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/50">
              {card.meta}
            </p>

            <h3 className="mt-2 text-lg font-medium tracking-tight text-white">
              {card.title}
            </h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function PostStageSlider() {
  const reduceMotion = useReducedMotion();

  const [activeIndex, setActiveIndex] = useState(2);
  const [isInteracting, setIsInteracting] = useState(false);

  const wheelLock = useRef(false);
  const autoAdvance = useRef<number | null>(null);

  const activeCard = useMemo(() => cards[activeIndex], [activeIndex]);

  const goTo = (nextIndex: number) => {
    const total = cards.length;
    setActiveIndex((nextIndex + total) % total);
  };

  // Auto-slide functionality with pause on hover/interaction
  useEffect(() => {
    if (reduceMotion || isInteracting) return;

    autoAdvance.current = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % cards.length);
    }, 3800);

    return () => {
      if (autoAdvance.current) {
        window.clearInterval(autoAdvance.current);
      }
    };
  }, [reduceMotion, isInteracting]);

  return (
    <section className="relative overflow-hidden py-20 sm:py-22">
      {/* Header */}
      <Container>
        <div className="mx-auto max-w-3xl text-center flex flex-col items-center">
          <div className="mb-10 relative inline-flex overflow-hidden rounded-full border border-white/10 bg-black/70 px-6 py-2 text-xs uppercase tracking-[0.2em] text-foreground/90 backdrop-blur-md transition hover:border-white/20 hover:bg-black/80 before:absolute before:left-[12%] before:right-[12%] before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-sky-400/60 before:to-transparent before:content-['']">
            Posts
          </div>

          <h2 className="mt-10 text-4xl tracking-tight text-white sm:text-5xl ">
            Posts that pop on the feed
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/60">
            A centered cinematic carousel with layered depth and smooth
            horizontal interaction.
          </p>
        </div>
      </Container>

      {/* Slider */}
      <div className="w-full overflow-hidden px-4 sm:px-8 lg:px-16 xl:px-24">
        <motion.div
          className="relative isolate overflow-hidden rounded-[40px] touch-pan-y cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsInteracting(true)}
          onMouseLeave={() => setIsInteracting(false)}
          onTouchStart={() => setIsInteracting(true)}
          onTouchEnd={() => setIsInteracting(false)}
          onWheel={(event) => {
            if (
              !event.shiftKey &&
              Math.abs(event.deltaY) <= Math.abs(event.deltaX)
            ) {
              return;
            }
            if (wheelLock.current) return;

            wheelLock.current = true;

            goTo(activeIndex + (event.deltaY > 0 || event.deltaX > 0 ? 1 : -1));

            window.setTimeout(() => {
              wheelLock.current = false;
            }, 600);
          }}
          onPanEnd={(_e, info) => {
            // Enhanced swipe/drag detection via framer motion
            if (Math.abs(info.offset.x) > 40) {
              goTo(activeIndex + (info.offset.x < 0 ? 1 : -1));
            }
          }}
        >
          {/* Ambient background glow */}
          <div className="pointer-events-none absolute inset-0 " />

          {/* Carousel */}
          <div className="relative flex min-h-[38rem] items-center justify-center overflow-hidden py-12 sm:min-h-[44rem]">
            <div className="relative flex h-[36rem] w-full items-center justify-center">
              {cards.map((card, index) => {
                const total = cards.length;

                let offset = index - activeIndex;

                // Circular indexing
                if (offset > total / 2) offset -= total;
                if (offset < -total / 2) offset += total;

                const distance = Math.abs(offset);
                const isActive = offset === 0;

                return (
                  <StageCard
                    key={`${card.title}-${index}`}
                    card={card}
                    isActive={isActive}
                    offset={offset}
                    distance={distance}
                    onClick={() => goTo(index)}
                  />
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <Container className="mt-8">
        <div className="flex items-center justify-between gap-4 text-sm text-white/50">
          <span>Active: {activeCard.title}</span>
          <span>Swipe, scroll, or click a card</span>
        </div>
      </Container>
    </section>
  );
}