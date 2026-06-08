# Spot — Design System (Mobile)

## Overview
The Spot design system is a clean, token-based approach emphasizing simplicity, hierarchy, and touch-friendly interactions. Built with a 4px grid and focusing on warm, inviting aesthetic.

---

## Design Tokens

### Colors

#### Primary Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--color-ink` | `#0A0A0A` | Primary text, UI elements |
| `--color-paper` | `#F4EFE6` | Magazine-like cream background |
| `--color-paper-pure` | `#FFFFFF` | Photo-focused screens, cards |
| `--color-accent` | `#FF5A1F` | CTA buttons, favorites (찜), emphasis |
| `--color-accent-deep` | `#D8410F` | Active state for accent color |
| `--color-accent-soft` | `#FFE7DC` | Background for accent chips |

#### Grayscale
| Token | Value | Usage |
|-------|-------|-------|
| `--color-gray-50` | `#F7F5F1` | Subtle backgrounds |
| `--color-gray-100` | `#E8E4DD` | Dividers, placeholder backgrounds |
| `--color-gray-300` | `#BDB7AD` | Placeholder labels, secondary text |
| `--color-gray-500` | `#7A736A` | Secondary text |
| `--color-gray-700` | `#3F3A33` | Tertiary text |

#### Semantic
| Token | Value | Usage |
|-------|-------|-------|
| `--color-warning` | `#C7901A` | Calendar negotiation status |

---

### Spacing (4px Grid)

```css
--s-1:  4px
--s-2:  8px
--s-3:  12px
--s-4:  16px
--s-5:  20px
--s-6:  24px
--s-8:  32px
--s-10: 40px
--s-12: 48px
--s-16: 64px
```

**Padding & Margins:** Always use spacing tokens. No arbitrary values.

---

### Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--r-none` | `0` | No radius |
| `--r-sm` | `4px` | Small elements |
| `--r-md` | `8px` | Standard borders, CTA buttons |
| `--r-lg` | `16px` | Cards, large containers |
| `--r-pill` | `9999px` | Chips, pills, header |

---

### Typography

#### Fonts
- **Primary:** `Pretendard Variable` (Korean) / System font fallback
- **Mono:** `JetBrains Mono` (Numbers, code, labels)

#### Type Scale (3 weights only: 400, 500, 700)

| Class | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| `.t-mono-xs` | 11px | 500 | 1.3 | Tiny mono labels |
| `.t-mono-sm` | 12px | 500 | 1.3 | Small caps |
| `.t-caption` | 13px | 500 | 1.4 | Captions, labels |
| `.body-sm` | 15px | 400 | 1.5 | Small body text |
| `.body` | 17px | 400 | 1.55 | Standard body |
| `.body-lg` | 18px | 400 | 1.55 | Large body |
| `.t-h3` | 19px | 700 | 1.35 | Heading 3 |
| `.t-h2` | 22px | 700 | 1.3 | Heading 2 |
| `.t-h1` | 28px | 700 | 1.2 | Heading 1 |
| `.t-price` | 26px | 700 | 1.2 | Price display |

**Mobile Adjustments:**
- Reduce heading sizes by ~10-15% for small screens
- Maintain line-height ratios
- Ensure minimum 44px touch targets

---

### Layout

| Token | Value | Note |
|-------|-------|------|
| `--container` | 1200px | Max width (desktop) |
| `--header-h` | 56px | Header height |
| `--sticky-cta-h` | 80px | Sticky CTA area height |

**Mobile Layout:**
- Full width with safe margins
- No fixed container width
- Sticky CTA at bottom (80px reserved space)

---

## Components

### Button — CTA (Call-to-Action)

```css
.cta {
  display: block;
  width: 100%;
  background: var(--color-accent);
  color: #fff;
  border: none;
  border-radius: var(--r-md);
  height: 52px;
  font-size: 17px;
  font-weight: 700;
  font-family: inherit;
  letter-spacing: -0.01em;
  cursor: pointer;
}

.cta:active {
  background: var(--color-accent-deep);
}
```

**Mobile:** Always 100% width. Sticky at bottom with 16px margin bottom (reserved space: 80px).

---

### Chip

```css
.chip {
  display: inline-flex;
  align-items: center;
  gap: var(--s-1);
  padding: 6px 10px;
  border-radius: var(--r-pill);
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  white-space: nowrap;
}

/* Variants */
.chip-mono { font-family: var(--font-mono); letter-spacing: 0.05em; }
.chip-accent { background: var(--color-accent-soft); color: var(--color-accent-deep); }
.chip-gray { background: var(--color-gray-100); color: var(--color-gray-500); }
.chip-ink { background: rgba(10,10,10,0.7); color: #fff; backdrop-filter: blur(6px); }
```

---

### Card

```css
.card {
  background: var(--color-paper-pure);
  border-radius: var(--r-lg);
  border: 1px solid var(--color-gray-100);
}
```

**Mobile:** Add padding: `var(--s-4)` to `var(--s-6)`

---

### Header (Pill Style)

```css
.site-header {
  height: 60px;
  padding: 6px 8px 6px 28px;
  display: flex;
  align-items: center;
  gap: var(--s-6);
  background: var(--color-paper-pure);
  border-radius: var(--r-pill);
}

.wordmark {
  font-weight: 800;
  font-size: 20px;
  letter-spacing: -0.035em;
  color: var(--color-ink);
  padding-right: var(--s-3);
  border-right: 1px solid var(--color-gray-100);
  margin-right: var(--s-3);
}

.wordmark .dot {
  color: var(--color-accent);
}
```

**Mobile:** 
- Remove pill border-radius
- Stack horizontally with back button on left
- Height: 56px (standard mobile header)

---

### Tap Target

```css
.tap {
  min-width: 44px;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  -webkit-tap-highlight-color: transparent;
}
```

**Mobile Critical:** All interactive elements must be ≥44px × 44px (iOS) / ≥48px × 48px (Android).

---

### Divider

```css
.divider {
  height: 1px;
  background: var(--color-gray-100);
}
```

---

## Accessibility & Interactions

### Touch-Friendly Sizing
- **Minimum tap target:** 44px × 44px
- **Comfortable tap target:** 48px × 52px
- **Spacing between taps:** ≥8px minimum

### Keyboard Navigation
- `.site-header nav a::after` — Underline animation for active/hover
- Transition: 200ms `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-soft)

### States
- `:active` — Instant visual feedback (color change or scale)
- `:hover` — Desktop only, graceful degradation on mobile
- `.active` — Class-based for current page/state

---

## Easing & Motion

```css
--ease-out-soft: cubic-bezier(0.16, 1, 0.3, 1);
```

**Recommended transitions:**
- Button states: 120ms
- Navigation underline: 200ms
- Page transitions: 300–400ms

---

## Mobile-Specific Guidelines

### Viewport & Scaling
```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

### Safe Area (Notch/Rounded Corners)
```css
padding: max(16px, env(safe-area-inset-left))
```

### Font Smoothing
```css
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
```

### Layout Padding
- **Standard:** `var(--s-6)` (24px) on sides, `var(--s-4)` (16px) top/bottom
- **Content:** Max-width containers with padding

### CTA Positioning
```css
position: fixed;
bottom: 0;
left: 0;
right: 0;
padding: var(--s-4);
background: var(--color-paper-pure);
box-shadow: 0 -1px 8px rgba(0,0,0,0.04);
z-index: 100;
```

Reserve 80px at bottom of content (`margin-bottom: 80px`).

---

## Dark Mode (Optional Future)

Consider implementing with CSS variables:
```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-ink: #F4EFE6;
    --color-paper: #0A0A0A;
    --color-paper-pure: #1A1A1A;
    /* ... invert as needed ... */
  }
}
```

---

## Spacing Patterns

### Content Blocks
- **Top padding:** `var(--s-12)` (48px) between sections
- **Horizontal padding:** `var(--s-6)` (24px) on mobile

### List Spacing
- **Between items:** `var(--s-4)` (16px) or `var(--s-5)` (20px)
- **Item padding:** `var(--s-3)` to `var(--s-4)` inner

### Form Fields
- **Input height:** 48px–52px
- **Gap between fields:** `var(--s-4)` to `var(--s-5)`
- **Label to input:** `var(--s-2)` (8px)

---

## Do's & Don'ts

### ✅ Do
- Use only the defined color tokens
- Use spacing from the 4px grid (--s-1 through --s-16)
- Use defined border radius values
- Keep type sizes within scale (or use custom class)
- Maintain 44px+ tap targets
- Use `letter-spacing: -0.01em` by default

### ❌ Don't
- Use arbitrary colors, spacing, or radius values
- Create new font sizes without team approval
- Use more than 3 font weights (400, 500, 700)
- Apply shadow unless explicitly in design tokens
- Nest styles deeper than 3 levels

---

## Reference Files

- **tokens.css** — Core design token definitions
- **hero.html** — Desktop hero page example
- **find.html** — Desktop listing page example
- **Space Detail (Mobile).html** — Mobile component reference

---

## Export for Figma / Design Tools

All tokens are CSS variables. For design tool sync:
1. Export as JSON from design system
2. Map to Figma variables or design tokens
3. Sync via plugin (Tokens Studio, etc.)

---

## Version History

- **v0.1** — Initial design system documentation based on Spot prototype
- **Mobile Ready:** Updated for responsive patterns and touch interactions

