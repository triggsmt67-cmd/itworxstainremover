"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { ProductData } from "@/config/products";
import { Check } from "lucide-react";

export function ProofSection({ product }: { product: ProductData }) {
  return (
    <section className="bg-[#FDFCFB] py-24 border-b border-[#E6E8EA]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Right (Visual Proof) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:order-2"
          >
            <div className="relative aspect-video md:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-elevated border-4 border-white">
              <Image
                src={product.images.proof}
                alt="Proof of Transformation"
                fill
                className="object-cover"
              />
              <div className="absolute top-8 left-8 p-3 rounded-lg bg-white/90 backdrop-blur shadow-premium">
                <span className="text-[#111827] font-bold text-sm uppercase tracking-wider">Before</span>
              </div>
              <div className="absolute bottom-8 right-8 p-3 rounded-lg bg-white/90 backdrop-blur shadow-premium">
                <span className="text-[#FF6B00] font-bold text-sm uppercase tracking-wider italic">After IT-WORX</span>
              </div>
            </div>
          </motion.div>

          {/* Left: Content Transformation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8 md:order-1"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827] leading-[1.1]">A Better Shot Before the Wash.</h2>
            <p className="text-xl text-[#4B5563] font-medium leading-relaxed max-w-xl">
              Treat stains early so shirts, workwear, towels, and everyday laundry have a better chance before they become permanent.
            </p>
            
            <div className="space-y-6 mt-4">
              {[
                "Fewer rewashes on stubborn stains",
                "More clothes kept in rotation",
                "Safe for colors, whites, delicates, synthetics, cotton, and blends",
                "Industrial-strength stain fighting power for home laundry"
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="mt-1 p-1 rounded-full bg-[#FF6B00]/10 text-[#FF6B00]">
                    <Check className="w-5 h-5" strokeWidth={3} />
                  </div>
                  <p className="text-lg font-bold text-[#111827]">{item}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-4 p-8 bg-[#111827] rounded-2xl text-white shadow-elevated">
              <p className="text-lg font-medium leading-relaxed opacity-90 italic">
                "I was skeptical. I've tried everything on my husband's shop shirts. IT-WORX is the only thing that actually cut through the heavy grease without a second wash."
              </p>
            <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FF6B00] flex items-center justify-center text-white font-bold text-xs uppercase">WW</div>
                <div className="text-sm">
                  <p className="font-bold">Workwear Wendy</p>
                  <p className="text-white/60">Verified Purchase</p>
                </div>
              </div>
            </div>

            <div className="mt-2 text-center md:text-left">
               <p className="text-xs font-bold text-[#9CA3AF] uppercase tracking-[0.2em]">
                 Bleach-Free · Dye-Free · Ammonia-Free
               </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
