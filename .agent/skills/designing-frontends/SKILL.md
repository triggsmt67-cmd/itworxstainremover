---
name: designing-frontends
description: Creates distinctive, production-grade frontend interfaces with high design quality. Use when building web components, pages, landing pages, or dashboards to avoid generic AI aesthetics. Focuses on bold typography, cohesive color themes, and high-impact motion.
---

# Designing Frontends

This skill guides the creation of distinctive, memorable frontend interfaces that avoid "AI slop" and generic component patterns.

## When to use this skill
- When building a new UI component or page.
- When styling or beautifying an existing web interface.
- When a project requires a specific "WOW" factor or a unique brand identity.

## Workflow

### 1. Plan-Validate-Execute
- [ ] **Conceptual Direction**: Select a bold aesthetic (e.g., editorial, brutalist, luxury, or retro-futuristic).
- [ ] **Type & Color Selection**: Pair a characterful display font with a refined body font. Define a dominant color palette with sharp accents.
- [ ] **Spatial Mapping**: Plan the layout for spatial composition (asymmetry, grid-breaking, overlap).
- [ ] **Motion Design**: Identify high-impact animation moments (staggered reveals, scroll triggers).
- [ ] **Implementation**: Write production-grade code (React/Tailwind/Motion) and validate the vision.

### 2. Aesthetic Checklist
- [ ] **Typography**: Avoid generic fonts (Inter, Roboto). Use characterful, distinctive pairings.
- [ ] **Color**: Use CSS variables for a cohesive theme. Avoid timid, evenly-distributed palettes.
- [ ] **Motion**: Prioritize high-impact entrance animations and surprising hover states.
- [ ] **Backgrounds**: Use textures, gradient meshes, or noise overlays to add depth.
- [ ] **Spatial**: Break the grid. Use generous whitespace or controlled density.

## Instructions

### Creative Direction Heuristics
- Match code complexity to the aesthetic vision.
- Maximalism requires extensive animation and effects.
- Minimalism requires extreme precision in spacing and typography.

### Implementation: The "Grain" Overlay
Use this snippet to add a premium texture to backgrounds.

```css
.grain-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.05;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAy...'); /* Noise texture */
  filter: contrast(120%) brightness(120%);
}
```

## Resources
- [Typography Pairings](resources/typography.md)
