# Typography Pairings for Industrial V3

These pairings are designed to convey precision, cleanliness, and technical authority.

## 1. The Precision Pair (Geist + Inter)
**Best For**: Scientific, high-performance cleaning technology.
- **Headings**: `Geist` (Heavy weights for impact)
- **Body**: `Inter` (Standard weights for readability)
- **Rationale**: Minimalist and highly technical.

## 2. The Hero Pair (Outfit + Inter)
**Best For**: Consumer-facing premium cleaning products.
- **Headings**: `Outfit` (Geometric and friendly, but professional)
- **Body**: `Inter`
- **Rationale**: More approachable while maintaining an "engineered" feel.

## 3. The Technical Detail (Geist Mono)
**Best For**: Ingredient lists, performance data, or UI labels.
- **Font**: `Geist Mono`
- **Rationale**: Reinforces the "formulaic" and precise nature of the brand.

---

### Suggested CSS Utility Classes (Tailwind v4)
```css
.heading-industrial {
  font-family: 'Geist', sans-serif;
  letter-spacing: -0.02em;
  font-weight: 800;
  text-transform: uppercase;
}

.body-technical {
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
  color: var(--color-slate-300);
}
```
