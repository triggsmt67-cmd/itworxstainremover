"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { ProductData } from "@/config/products";
import { Star } from "lucide-react";

export function SocialProof({ product }: { product: ProductData }) {
  const reviews = product.reviews;

  return (
    <section className="bg-[#FDFCFB] py-24 border-y border-[#E6E8EA]">
      <Container>
        <div className="flex flex-col items-center mb-16 max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827] mb-6">Real households. Real stain problems.</h2>
          <p className="text-lg text-[#4B5563] font-medium leading-relaxed">
            Built for households dealing with recurring stain problems every week.
          </p>
        </div>

        {/* Use-Case Bands - High visual weight */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {product.useCases.map((useCase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-1 bg-white rounded-[2rem] border border-[#E6E8EA] shadow-premium overflow-hidden transition-all duration-300 hover:shadow-elevated"
            >
              <div className="relative aspect-[4/3] rounded-[1.75rem] overflow-hidden mb-8">
                <Image
                  src={useCase.image}
                  alt={useCase.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="px-6 pb-6">
                <h3 className="text-2xl font-bold text-[#111827] mb-3">{useCase.name}</h3>
                <p className="text-[#4B5563] font-medium leading-relaxed mb-4">{useCase.description}</p>
                <div className="h-0.5 w-12 bg-[#FF6B00] rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Believable Social Proof */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="p-8 bg-white border border-[#E6E8EA] rounded-2xl shadow-premium"
            >
              <div className="flex text-[#FFB800] mb-4 gap-0.5">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-lg font-bold text-[#111827] mb-4">"{review.text}"</p>
              <div className="mt-6 pt-6 border-t border-[#F3F4F6] flex items-center justify-between">
                <div>
                  <p className="font-bold text-[#111827]">{review.author}</p>
                  <p className="text-sm text-[#9CA3AF] font-bold tracking-tight">{review.location || "Verified Buyer"}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#FDFCFB] border border-[#E6E8EA] flex items-center justify-center">
                  <span className="text-xs font-black text-[#111827]">AZ</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
