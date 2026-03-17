
export interface ProductData {
  slug: string;
  name: string;
  amazonUrl: string;
  headline: string;
  subheadline: string;
  tagline: string;
  hook: string;
  trustBadges: { icon: string; text: string }[];
  stainCategories: { name: string; image: string }[];
  useCases: { name: string; image: string; description: string }[];
  reviews: { author: string; text: string; location?: string; stars: number }[];
  faqs: { question: string; answer: string }[];
  images: {
    hero: string;
    proof: string;
    mechanism: string;
    lifestyle: string;
    product: string;
  };
  ctaLabels: {
    hero: string;
    mid: string;
    final: string;
  };
}

export const PRODUCTS: Record<string, ProductData> = {
  "it-worx-stain-remover": {
    slug: "it-worx-stain-remover",
    name: "IT-WORX Laundry Stain Remover",
    amazonUrl: "https://www.amazon.com/dp/B0DPR93VJY",
    hook: "SAVE THE CLOTHES YOU THOUGHT WERE RUINED.",
    headline: "A simple pretreat step for real-life stains.",
    subheadline: "Treat the stain first, then wash as usual. Built to help lift grease, sweat, food, pet messes, and everyday laundry stains before they set in.",
    tagline: "For the stains a normal wash often leaves behind.",
    ctaLabels: {
      hero: "View on Amazon",
      mid: "Buy on Amazon",
      final: "Buy on Amazon",
    },
    images: {
      hero: "/assets/Hero/hero-spray-heavy-soiled-fabric.png",
      proof: "/assets/Stains/stain-red-drop-white-shirt.png",
      mechanism: "/assets/process/process-pre-soak-basin-timer.png",
      lifestyle: "/assets/lifestyle/lifestyle-family-laundry-room.png",
      product: "/assets/product/product-bottle-on-washer-bathroom.png",
    },
    trustBadges: [
      { icon: "Shield", text: "Made in the USA" },
      { icon: "Shield", text: "Color-Safe" },
      { icon: "FlaskConical", text: "Bleach-Free" },
      { icon: "Wind", text: "Unscented" },
      { icon: "Shield", text: "Spray or Pre-Soak" },
    ],
    stainCategories: [
      { name: "Grease & Oil", image: "/assets/Stains/stain-dark-grease-workwear-pocket.png" },
      { name: "Coffee & Food", image: "/assets/Stains/stain-food-denim-pocket.png" },
      { name: "Blood & Protein", image: "/assets/Stains/stain-red-drop-white-shirt.png" },
      { name: "Urine & Pet Messes", image: "/assets/Stains/stain-pet-accident-rug.png" },
      { name: "Grass & Sweat", image: "/assets/Stains/stain-underarm-yellowing-closeup.png" },
      { name: "Everyday Mud", image: "/assets/Stains/stain-grease-shirt-cuff.png" },
    ],
    useCases: [
      { name: "Kids' Clothes", image: "/assets/lifestyle/lifestyle-family-laundry-room.png", description: "Save play clothes from dirt and grass." },
      { name: "Workwear", image: "/assets/lifestyle/lifestyle-workwear-man-shop.png", description: "Remove grease and oil from shop shirts." },
      { name: "Athletic Gear", image: "/assets/Stains/stain-orange-juice-white-shirt.png", description: "Safe enough for your favorite synthetics and blends." },
      { name: "Linens", image: "/assets/lifestyle/lifestyle-family-laundry-room.png", description: "Treat bedding and towels before they go in the wash." },
    ],
    reviews: [
      { author: "Sarah M.", text: "This saved my favorite white shirt from a massive coffee spill. I've never seen anything like it.", stars: 5, location: "Verified Purchase" },
      { author: "Jake R.", text: "Finally found something that removes shop grease from my work shirts without ruining the fabric.", stars: 5, location: "Verified Purchase" },
      { author: "Linda K.", text: "Works great on kids' grass stains and old food mishaps. It's a laundry room staple now.", stars: 5, location: "Verified Purchase" },
    ],
    faqs: [
      { question: "Will it bleach my clothes?", answer: "No. IT-WORX is 100% bleach-free and formulated to be safe for all color-fast fabrics." },
      { question: "Is it safe for colors?", answer: "Yes, it's designed to protect the integrity of your fabrics while targeting only the stain." },
      { question: "Does it have a harsh smell?", answer: "No, IT-WORX is unscented and does not contain the harsh chemical fumes found in industrial alternatives." },
      { question: "How long should it sit?", answer: "For best results, let it sit for 5-10 minutes before washing normally. For older stains, you can let it sit longer." },
      { question: "Does it work on old stains?", answer: "Yes! While fresh is best, many customers have had great success with set-in stains by applying and letting it sit overnight before washing." },
    ],
  },
};
