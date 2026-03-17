# Animation Patterns

## 1. Hero Entrance
A multi-stage entrance that builds excitement.
1. Background fades in first (duration 1.2s).
2. Heading slides up with `staggerChildren`.
3. Subtext and CTAs fade in last.

## 2. Reveal on Scroll
Always use `viewport={{ once: true }}` to avoid distracting the user with repeat animations on every scroll. Use a subtle `y: 20` offset for a smooth "rising" effect.

## 3. The "Pulse" Indicator
Use for live performance or status indicators.
```tsx
<div className="relative flex h-3 w-3">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
</div>
```
