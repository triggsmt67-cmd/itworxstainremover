import { notFound } from "next/navigation";
import { PRODUCTS } from "@/config/products";
import { Hero } from "@/components/sections/Hero";
import { ProblemRecognition } from "@/components/sections/ProblemRecognition";
import { ProofSection } from "@/components/sections/ProofSection";
import { StepsAndMechanism } from "@/components/sections/StepsAndMechanism";
import { SocialProof } from "@/components/sections/SocialProof";
import { FAQSection } from "@/components/sections/FAQSection";
import { StickyCTA } from "@/components/ui/StickyCTA";
import { ProductLayout } from "@/components/layout/ProductLayout";

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = PRODUCTS[slug];

  if (!product) {
    notFound();
  }

  return (
    <ProductLayout hook={product.hook}>
      {/* 2. Hero & 3. Trust Signals (combined inside Hero) */}
      <Hero product={product} />

      {/* 4. Problem Recognition */}
      <ProblemRecognition product={product} />

      {/* 5. Outcome & 6. Proof Section */}
      <ProofSection product={product} />

      {/* 7. Why it works & 9. How it works */}
      <StepsAndMechanism product={product} />

      {/* 10. Use Cases & 11. Social Proof */}
      <SocialProof product={product} />

      {/* 12. FAQ / Objection Handling & 13. Final CTA */}
      <FAQSection product={product} />

      {/* Sticky Mobile CTA */}
      <StickyCTA product={product} />
    </ProductLayout>
  );
}
