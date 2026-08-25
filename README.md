# Elaf — Global Shariah Advisory & Islamic Financial Architecture

A React + Vite website for an Islamic finance advisory firm. This first pass implements the site header/navigation and the hero section, styled to match the provided design reference (dark hero with a dotted grid background and a gradient "noodle" shape accent).

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173/`.

## Project structure

```
src/
  assets/
    bg-dots.png       # dotted grid background used behind the hero
    hero-noodle.png   # gradient wave/blob graphic anchored to hero bottom
  components/
    Header.jsx / .css # top navigation
    Hero.jsx   / .css # hero section (headline, CTA, trust badge, seal)
  App.jsx
  index.css          # design tokens (colors, fonts) + shared button styles
```

## Notes

- Fonts: `Sora` (headings) + `Inter` (body), loaded via Google Fonts in `index.html`.
- More sections will be added as additional design assets are provided — each new section should live in its own component under `src/components/`.
