"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { ReactNode } from "react";

interface ProductLayoutProps {
  children: ReactNode;
  hook: string;
}

export function ProductLayout({ children, hook }: ProductLayoutProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen selection:bg-[#FF6B00]/30 selection:text-[#111827]">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-[#FF6B00] origin-left z-[200]"
        style={{ scaleX }}
      />

      {/* 1. Pattern Interrupt / Hook (Header Bar) */}
      <div className="bg-[#1F2937] text-white py-3 px-6 text-center text-sm font-bold uppercase tracking-[0.2em] relative z-[100]">
        <div className="grain-overlay opacity-[0.1]" />
        {hook}
      </div>

      {children}
    </div>
  );
}
