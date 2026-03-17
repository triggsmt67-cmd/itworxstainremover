"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface AmazonCTAProps {
  url: string;
  label: string;
  variant?: "primary" | "secondary" | "outline" | "sticky";
  className?: string;
}

export function AmazonCTA({ url, label, variant = "primary", className }: AmazonCTAProps) {
  const baseStyles = "relative inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 overflow-hidden shadow-premium group";
  
  const variants = {
    primary: "bg-[#FF6B00] text-white hover:bg-[#E66000] focus:ring-[#FF6B00]",
    secondary: "bg-[#111827] text-white hover:bg-[#1F2937] focus:ring-[#111827]",
    outline: "border-2 border-[#111827] text-[#111827] hover:bg-[#111827] hover:text-white focus:ring-[#111827]",
    sticky: "bg-[#FF6B00] text-white hover:bg-[#E66000] focus:ring-[#FF6B00] px-6 py-3 text-base shadow-elevated",
  };

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], className)}
    >
      <span className="relative z-10 flex items-center gap-2">
        {label}
        <ExternalLink className="w-4 h-4" />
      </span>
      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.a>
  );
}
