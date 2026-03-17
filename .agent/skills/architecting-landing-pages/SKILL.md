---
name: architecting-landing-pages
description: Builds high-fidelity, high-converting React landing pages with advanced aesthetics and animations. Use when the user requests a new marketing page, hero section, or design refinement.
---

# Architecting Landing Pages

This skill ensures every landing page built or refined follows the "True Path" standard of premium aesthetics, smooth animations, and high-performance design.

## When to use this skill
- When starting a new marketing site or project.
- When the user asks to "make this page look premium" or "add a wow factor."
- When building core landing page components like Heroes, Trust Barometers, or Pricing Sections.

## Workflow

### 1. Plan-Validate-Execute
- [ ] **Aesthetic Audit**: Define the color palette (e.g., Deep Charcoal #050505, Primary #FF6B00) and typography (e.g., Inter, Outfit).
- [ ] **Animation Mapping**: Identify which elements need `motion` (Hero entry, scroll triggers, button hovers).
- [ ] **Dependency Check**: Ensure `framer-motion` and `lucide-react` are installed.
- [ ] **Responsive Test**: Verify breakpoint scaling for extreme typography (e.g., `text-6xl` to `text-9xl`).

### 2. Design Consistency Checklist
- [ ] **Glassmorphism**: Use `backdrop-blur-xl` and subtle borders (`border-white/10`) for cards.
- [ ] **Micro-animations**: Add `whileHover={{ scale: 1.02 }}` to interactive cards.
- [ ] **Layering**: Use absolute-positioned gradients and glass overlays to create depth.
- [ ] **Performance**: Use `priority` on above-the-fold images and limit heavy 3D backgrounds on mobile.

## Instructions

### Component Template: Glass Card
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="p-8 rounded-[32px] bg-white/[0.03] border border-white/10 backdrop-blur-3xl shadow-2xl"
>
  {/* Content goes here */}
</motion.div>
```

### Premium Gradient Text
```tsx
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-white">
  Your High-Impact Headline
</span>
```

## Resources
- [Animation Patterns](resources/animation-patterns.md)
