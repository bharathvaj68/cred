# CRED Frontend Clone

A premium, high-fidelity frontend replication of the CRED landing page built using **React**, **Vite**, **Tailwind CSS v4**, and **Framer Motion**. This project meticulously implements CRED's signature dark aesthetic, high-contrast luxury typography, fluid scroll-bound micro-interactions, manual horizontal snap behaviors, and deep footer compliance indices.

---

## Key Features Highlighted

### 1. Cinematic Hero Block
- **Immersive Video Core:** Fullscreen, layout-constrained background video tracking layer with a customized radial overlay gradient for crisp contrast.
- **Adaptive Navigation Structure:** Floating responsive navbar featuring a vector-drawn hexagonal brand mark and an interactive state-toggle menu trigger.
- **Floating Action Anchor:** An absolute-positioned, backdrop-blur-enhanced download badge featuring a pixel-perfect minimal vector QR layout block.

### 2. Trust Intro Spotlight Section
- **Word-by-Word Sequence Spotlight:** Smooth, localized typography illumination that transitions words individually from deep neutral gray (`#262626`) to pure white (`#ffffff`) using progressive Framer Motion scroll interpolation.
- **Editorial Column Geometry:** Strict structural containment restricted to a precise `max-w-[40%]` boundary layer for an elegant, high-end editorial look that forces typography to stack vertically.

### 3. About Text Scroll Reveal
- **Line-Block Intersection Highlights:** High-impact narrative text arrays that smoothly change color states as they pass custom viewport offset milestones (`["start end", "end start"]`).
- **Lowercase Layout Cadence:** Strict adherence to the signature lowercase aesthetic combined with the custom serif font framework.

### 4. Deserve More promotional Interstitial
- **High Contrast Messaging Block:** Minimalist editorial header layout that acts as a structural separator between the initial scroll reveals and the hardware showcase modules.

### 5. Credit Card Control Grid
- **Split-Screen Layout Architecture:** Asymmetric 2-column structural grid system balancing heavy left-aligned descriptive typography against interactive media placeholders.
- **Asset Containers:** Dedicated absolute dimension frames prepared for dropping custom rotating card loop animations or device showcases.

### 6. Frictionless Horizontal Product Matrix
- **Pure CSS Gesture Snapping:** Horizontal slide deck utilizing hardware-accelerated scroll snapping (`snap-x snap-mandatory`) for fluid touch and trackpad tracking.
- **Native Scrollbar Elimination:** Complete layout integration using Tailwind CSS v4's native `@plugin` architecture to natively strip default browser layout bars without breaking overflow parameters.
- **Drop-In Asset Blueprints:** Explicit structural container frames pre-configured to easily display custom cropped asset images.

### 7. Data-Driven Rating Assemblies
- **Multi-Bureau Visual Clusters:** Identical grid-aligned scoring pillars featuring modular, infinitely scalable inline vector star iconography.
- **Micro-Metrics Integration:** High-contrast baseline typography styling separating dynamic core rating integers from secondary baseline scale marks.

### 8. Controlled Accordion System
- **Height-Dynamic FAQ Toggles:** Fully state-managed informational accordion component wrapped in Framer Motion’s `<AnimatePresence>` to execute seamless height transformations upon user interaction.

### 9. Matrix Footer and Compliance Grid
- **Ecosystem Index:** Deep-linking multi-column footer blueprint mapping company upgrades, payments networks, design repositories, and extensive policy links.
- **Security Parameters Badge Assembly:** Visual array displaying grayscale-filtered, high-contrast verification tokens detailing data protection systems.

---

## Tech Stack and Architecture

- **Core Engine:** React 18+ (Vite Single Page Application architecture)
- **Styling Pipeline:** Tailwind CSS v4 (Pure CSS Engine, removing the need for an external `tailwind.config.js`)
- **Animation Framework:** Framer Motion
- **Icon Assets:** Custom Inline Vector Paths (`SVG`) for crisp rendering

---

## Project Directory Blueprint

```text
src/
├── components/
│   ├── HeroSection.jsx              # Immersive video section with custom navigation
│   ├── TrustIntroScroll.jsx         # Word-by-word scrolling highlighting layout (max-w-40%)
│   ├── AboutScrollReveal.jsx        # Line-block progressive text spotlight 
│   ├── DeserveMore.jsx              # Typography informational separator layout
│   ├── DoMoreCreditCards.jsx        # Split-screen grid highlighting standard card maintenance features
│   ├── FeaturesHorizontalScroll.jsx # Horizontal flex viewport container with snap-center rules
│   ├── RatingSection.jsx            # Multi-bureau star-rating columns
│   ├── FaqAccordion.jsx             # Controlled height state accordion blocks
│   └── DeepFooter.jsx               # Link tree layout matrix with compliance badges
├── fonts/
│   └── denton/                      # Denton custom typographic asset files
├── App.jsx                          # Structural section layout stacking
├── index.css                        # Tailwind directives, custom font-face mappings & plugins
└── main.jsx                         # Application DOM mounting sequence
