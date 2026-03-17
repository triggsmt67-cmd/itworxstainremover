"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { AmazonCTA } from "@/components/ui/AmazonCTA";
import { ProductData } from "@/config/products";

export function StickyCTA({ product }: { product: ProductData }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after hero (approx 600px)
      if (window.scrollY > 600) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 bg-white/80 backdrop-blur-xl border-t border-[#E6E8EA] md:hidden shadow-elevated"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col">
               <p className="text-sm font-bold text-[#111827] truncate">IT-WORX Stain Remover</p>
               <div className="flex text-[#FFB800] text-xs">★★★★★</div>
            </div>
            <AmazonCTA 
              url={product.amazonUrl} 
              label="View on Amazon" 
              variant="sticky" 
              className="flex-1 max-w-[200px]" 
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
