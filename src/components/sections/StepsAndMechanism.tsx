"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { ProductData } from "@/config/products";
import { AmazonCTA } from "@/components/ui/AmazonCTA";

export function StepsAndMechanism({ product }: { product: ProductData }) {
  const steps = [
    { title: "Spray", text: "Apply IT-WORX liberally directly to the stain.", icon: "1" },
    { title: "Let it Sit", text: "Wait 5-10 minutes (or longer for set-in messes).", icon: "2" },
    { title: "Wash", text: "Toss it in the laundry as you normally would.", icon: "3" },
  ];

  return (
    <section className="bg-white py-24 pb-0 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:items-end">
          {/* Mechanism: The "Invisible Power" */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="md:order-1 relative h-full flex flex-col items-center"
          >
            <div className="relative w-full aspect-[4/5] rounded-t-[3rem] overflow-hidden border-x border-t border-[#E6E8EA] shadow-premium">
              <Image
                src={product.images.mechanism}
                alt="Proven IT-WORX Action"
                fill
                className="object-cover object-[60%_top]"
              />
              {/* Small Floating Badge */}
              <div className="absolute bottom-6 right-6 px-6 py-3 bg-white/90 backdrop-blur rounded-full border border-[#E6E8EA] text-center shadow-elevated">
                <p className="text-xl font-extrabold text-[#111827]">Why It Works</p>
                <p className="text-xs font-bold opacity-80 uppercase tracking-wider text-[#FF6B00]">Proven</p>
              </div>
            </div>
          </motion.div>

          {/* How it Works: Real Steps */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-12 pb-24 md:order-2"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827] mb-6">A simple pretreat step for stubborn stains.</h2>
              <p className="text-xl text-[#4B5563] font-medium leading-relaxed max-w-xl">
                IT-WORX is designed to help break down grease, food stains, sweat, pet messes, and other tough laundry problems before the wash cycle does the rest. Spray it directly on the stain or use it as a pre-soak, then wash normally.
              </p>
            </div>
            
            <div className="flex flex-col gap-10">
              {steps.map((step, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[#FF6B00] text-white font-black text-xl shadow-premium">
                    {step.icon}
                  </div>
                  <div className="pt-1">
                    <h3 className="text-2xl font-bold text-[#111827] mb-2">{step.title}</h3>
                    <p className="text-lg text-[#4B5563] font-medium leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pt-8">
              <AmazonCTA url={product.amazonUrl} label={product.ctaLabels.mid} variant="primary" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
