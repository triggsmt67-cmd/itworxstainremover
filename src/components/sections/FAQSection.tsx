"use client";

import { Container } from "@/components/ui/Container";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Star, ExternalLink } from "lucide-react";
import { useState } from "react";
import { AmazonCTA } from "@/components/ui/AmazonCTA";
import { ProductData } from "@/config/products";

export function FAQSection({ product }: { product: ProductData }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => setOpenIndex(prev => prev === idx ? null : idx);

  return (
    <section className="bg-white py-24 mb-24 overflow-hidden">
      <Container>
        <div className="flex flex-col items-center mb-16 max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827] mb-6">Common Questions.</h2>
          <p className="text-lg text-[#4B5563] font-medium leading-relaxed">
            Everything you need to know before you bring IT-WORX into your laundry room.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-32">
          {product.faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border-b border-[#E6E8EA] last:border-0 overflow-hidden transition-all duration-300 ${openIndex === idx ? 'bg-[#FDFCFB]' : ''}`}
            >
              <button 
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between py-10 px-6 text-left"
              >
                <div className="flex gap-4 items-center">
                  <div className="w-8 h-8 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-[#111827]">{faq.question}</h3>
                </div>
                <ChevronDown 
                  className={`w-6 h-6 text-[#9CA3AF] transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-[#FF6B00]' : ''}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-12 pl-12 pr-12">
                      <p className="text-lg text-[#4B5563] font-medium leading-relaxed pl-6 border-l-4 border-[#FF6B00]/20">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Final Final CTA: The conversion anchor */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           className="relative overflow-hidden rounded-[3rem] bg-[#111827] px-12 py-20 text-center text-white"
        >
          {/* Decorative Texture */}
          <div className="grain-overlay opacity-[0.05]" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00]/30 via-transparent to-transparent opacity-50" />
          
          <div className="relative z-10 flex flex-col items-center gap-8">
            <div className="flex -space-x-1 mb-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-8 h-8 fill-[#FFB800] text-[#FFB800]" />
              ))}
            </div>
            
            <h2 className="text-5xl md:text-7xl font-extrabold max-w-4xl tracking-tight leading-[1.05]">
              Treat the stain before it sets.
            </h2>
            
            <p className="text-xl md:text-2xl text-white/70 font-medium max-w-2xl mx-auto leading-relaxed">
              Keep IT-WORX on hand for the coffee spills, grease marks, pet messes, and everyday stains that a normal wash can miss.
            </p>
            
            <div className="mt-4 flex flex-col sm:flex-row items-center gap-4">
              <AmazonCTA url={product.amazonUrl} label={product.ctaLabels.final} variant="primary" />
              <motion.a
                href="https://www.amazon.com/review/create-review/?channel=glance-detail&asin=B0DPR93VJY&ie=UTF8"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 overflow-hidden shadow-premium group border-2 border-white/20 text-white hover:bg-white hover:text-[#111827] focus:ring-white"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Leave an Amazon review
                  <ExternalLink className="w-4 h-4" />
                </span>
              </motion.a>
            </div>
            
            <div className="mt-4 flex items-center gap-4 text-sm font-bold opacity-60 uppercase tracking-widest">
              <span>Available on Amazon</span>
              <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
              <span>Amazon return options apply</span>
              <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
              <span>Shipping options shown at checkout</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
