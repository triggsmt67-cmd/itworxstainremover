"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { ProductData } from "@/config/products";

export function ProblemRecognition({ product }: { product: ProductData }) {
  const stains = product.stainCategories;

  return (
    <section className="bg-white py-24 border-y border-[#E6E8EA]">
      <Container>
        <div className="flex flex-col items-center mb-16 max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827] mb-6">Recognize these?</h2>
          <p className="text-lg text-[#4B5563] font-medium leading-relaxed">
            These are the stains that usually need more than detergent alone. From coffee and food spills to workwear grease and pet messes, IT-WORX is built for the laundry problems that keep coming back.
          </p>
        </div>

        {/* Dynamic Image Grid - High visual weight */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {stains.map((stain, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group aspect-square rounded-2xl overflow-hidden shadow-premium"
            >
              <Image
                src={stain.image}
                alt={stain.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-white font-bold text-sm md:text-base uppercase tracking-wider">{stain.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
