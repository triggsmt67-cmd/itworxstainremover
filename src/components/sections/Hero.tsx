"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { AmazonCTA } from "@/components/ui/AmazonCTA";
import { Shield, MapPin, FlaskConical, Wind } from "lucide-react";
import { ProductData } from "@/config/products";

const iconMap = {
  Shield: Shield,
  MapPin: MapPin,
  FlaskConical: FlaskConical,
  Wind: Wind,
};

export function Hero({ product }: { product: ProductData }) {
  return (
    <section className="relative overflow-hidden pt-20 pb-20 md:pt-32 md:pb-32 bg-diamond-dark text-white">
      {/* Visual Grain */}
      <div className="grain-overlay" />
      
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[700px] h-[700px] bg-[#FF6B00]/5 blur-[120px] rounded-full" />
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-8"
          >
            <div className="inline-flex w-fit max-w-full items-center justify-center rounded-3xl bg-white px-4 py-2 text-center text-[#FF6B00] text-xs sm:text-sm font-black uppercase tracking-wider shadow-sm">
              {product.tagline}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black italic uppercase text-white leading-[1.05] tracking-tight">
              {product.headline}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-xl">
              {product.subheadline}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
              <AmazonCTA 
                url={product.amazonUrl} 
                label={product.ctaLabels.hero} 
                variant="primary" 
                className="w-full sm:w-auto"
              />
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg font-black text-[#FFB800]">4.1</span>
                  <div className="flex -space-x-1">
                    {[1, 2, 3, 4].map((i) => (
                      <span key={i} className="text-[#FFB800] text-lg">★</span>
                    ))}
                    <span className="text-gray-600 text-lg">★</span>
                  </div>
                </div>
                <p className="text-sm font-bold text-white">Rated by Amazon customers</p>
              </div>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-x-8 gap-y-4 mt-8 pt-8 border-t border-gray-800">
              {product.trustBadges.map((badge, idx) => {
                const Icon = iconMap[badge.icon as keyof typeof iconMap] || Shield;
                return (
                  <div key={idx} className="flex items-center gap-2 text-sm font-bold text-gray-400">
                    <Icon className="w-4 h-4 text-[#FF6B00]" strokeWidth={3} />
                    <span>{badge.text}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
          
          {/* Right: Feature Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 aspect-[4/5] md:aspect-square rounded-[2rem] overflow-hidden shadow-elevated border-8 border-white/50 bg-white">
              <Image
                src={product.images.hero}
                alt={product.name}
                fill
                priority
                className="object-cover"
              />
            </div>
            
            {/* Floating Callout */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -bottom-8 -left-8 md:-left-12 z-20 p-6 bg-white rounded-2xl shadow-elevated border border-[#E6E8EA] max-w-[280px]"
            >
              <p className="text-[#FF6B00] font-bold text-sm uppercase tracking-wide mb-2 italic">Result Oriented</p>
              <p className="text-[#111827] font-bold text-lg leading-snug">"It literally vanished before I even put it in the wash."</p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
