"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduce = useReducedMotion();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const shouldAnimate = isHydrated && !reduce;

  return (
    <motion.div
      className={className}
      initial={shouldAnimate ? { opacity: 0, y: 24 } : false}
      whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={
        shouldAnimate
          ? {
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1] as const,
              delay,
            }
          : undefined
      }
    >
      {children}
    </motion.div>
  );
}
