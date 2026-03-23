# CLAUDE.md — HXO Studio (Landing Site)

## What This Is

HXO Studio marketing site. Static HTML + CSS + Vite. Deployed on Cloudflare Pages from `main`.

## Tech

- Vanilla HTML/CSS/JS (no React)
- Vite for build/dev (`npm run dev`, `npm run build`)
- Output: `dist/`

## Visual Design Debugging

When something on the page won't resize, move, or display the way you expect, follow this process before writing any CSS:

### 1. Check the parent chain first

The most common reason an element won't get bigger is that a **parent container** is constraining it — not the element itself. Adding overrides to the child won't help if the parent has `overflow: hidden`, a fixed `aspect-ratio`, `max-width`, or `max-height`.

**Example from this project:** The `.card-image-wrap` class enforces `aspect-ratio: 16/9` and `overflow: hidden` on all card images. If you put a hero image inside a `.project-card`, it will always render as a small thumbnail no matter what you do to the `<img>` tag. The fix is to take the image OUT of the card system, not to override the image styles.

### 2. Remove wrappers before adding overrides

If you've written 3+ CSS overrides and the element still won't budge, you're fighting a parent constraint. Stop adding rules. Instead:
- Look at the HTML structure
- Identify which parent div is imposing the limit
- Remove the element from that parent (restructure the HTML)
- Then style the element directly in its new, unconstrained container

### 3. Grid ratios control visual weight

When two columns sit side by side, the fr ratio determines which one dominates visually. For a hero image that needs to hit hard:
- `0.6fr / 1.4fr` gives the image ~70% of the width
- `0.9fr / 1.1fr` gives it ~55% — that's a thumbnail, not a hero
- If the image is landscape (wider than tall), it needs the wider column or it will always look small

### 4. Keep hero sections tight

A hero's job is: hook, proof, action. That's it.
- Left column: title, tagline, one CTA button
- Right column: the image, as large as possible
- Move body copy, details, and secondary CTAs BELOW the hero grid
- Don't put exit ramps (back links, secondary nav) next to the buy button

## Card System

The `.project-card` + `.card-image-wrap` classes are for uniform project tiles on the homepage. They enforce consistent sizing.

**Do NOT use `.project-card` for:**
- Hero images that need to be large
- Full-width graphics
- Anything that needs to break out of the 16:9 thumbnail constraint

**Use `.project-card` for:**
- Homepage project tiles
- Detail cards below the fold (package contents, pricing)

## Style Reference

- Navy: `#002244`
- Royal Blue: `#00338d`
- Silverware: `#b7b7bf`
- Background: `#0a0a0a`
- Font: Avenir Next, Montserrat, system sans-serif
