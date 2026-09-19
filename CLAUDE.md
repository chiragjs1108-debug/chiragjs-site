# chiragjs.in

Personal site for Chirag J S — fractional Digital Project Head & SEO Architect
for education admissions. B2B: the audience is college management, coaching
centre owners and admissions consultancies. Not students.

These are high-ticket buyers. The site should feel like it was built by someone
technical — precise, fast, confident — not like a marketing template.

The site is itself a credential. A prospect may run it through PageSpeed
Insights or check whether the schema validates. Build it to the standard we
sell.

## Stack

- Next.js (App Router), TypeScript strict mode, Tailwind CSS
- Static generation only. No database, no CMS, no auth.
- `motion` (Framer Motion) for animation — the one approved animation
  dependency
- `lucide-react` for icons
- Forms post to Formspree. No backend, no webhooks.
- Deployed on Vercel, auto-deploy from GitHub `main`

## Hard rules

- All copy lives in `/src/content/*.ts` as typed objects. Components render;
  never hardcode copy in JSX.
- No new dependencies without asking me first.
- Every page exports `metadata` with a unique title and description.
- Mobile-first. Check 375px before desktop.
- Semantic HTML: one `h1` per page, headings in order, real `button` and `a`
  elements.
- Images via `next/image` with explicit width/height and meaningful alt text.
- Every animation must respect `prefers-reduced-motion`. No exceptions.
- **Never invent metrics, client names, or testimonials.** If a number is
  needed and is not in `/src/content/work.ts`, ask me for it. Do not write a
  placeholder that reads as a real figure.
- Run `npm run build` before every commit. Vercel deploys whatever lands on
  `main`.

---

## Design system

Dark-first. Near-black surfaces, acid lime as the single accent, monospace for
data and labels. The aesthetic reference is a good developer tool — dense,
precise, high contrast — not a SaaS landing page.

### Colour tokens

Define in `tailwind.config.ts`. Never use arbitrary hex values.

| Token | Hex | Use |
| --- | --- | --- |
| `base` | #0A0A0B | Page background |
| `surface` | #141518 | Cards, raised panels |
| `surface-2` | #1C1D21 | Nested cards, hover states |
| `border` | #26282D | Hairlines, dividers, card borders |
| `border-bright` | #3A3D44 | Hover borders, active states |
| `lime` | #C8FF3D | The accent |
| `lime-dim` | #9BCC2E | Lime on hover, secondary accent |
| `lime-glow` | rgba(200,255,61,0.12) | Glow backgrounds, focus rings |
| `text` | #F5F6F7 | Primary text |
| `text-2` | #A1A4AB | Secondary text, body on dark |
| `text-3` | #6B6F78 | Muted, captions, metadata |
| `light` | #F7F8F8 | Rare light-section background |
| `ink` | #0A0A0B | Text on light sections |

### Using lime

Lime is a scalpel, not a paintbrush. It carries meaning: *this is the
important thing on this screen*.

**Use it for:** the single primary CTA per screen, one key figure in a stat
block, the active state in navigation and the table of contents, data
highlights inside diagrams, and thin accent rules.

**Never:** as a large background fill (except one deliberate CTA block per
page), as body text, on more than one CTA per screen, or behind long text.

A screen with three or more lime elements is almost certainly wrong.

### Typography

- **Space Grotesk** — headings, stat figures, anything that should feel built
- **Inter** — body copy and UI
- **JetBrains Mono** — eyebrows, labels, metrics, table headers, code, URLs,
  section numbers

All three via `next/font/google`, self-hosted, no layout shift.

| Element | Font | Desktop → mobile | Weight | Tracking |
| --- | --- | --- | --- | --- |
| h1 | Space Grotesk | 64px → 38px | 700 | -0.03em |
| h2 | Space Grotesk | 44px → 30px | 600 | -0.02em |
| h3 | Space Grotesk | 26px → 22px | 600 | -0.01em |
| Body | Inter | 18px → 17px | 400 | 0 |
| Body large | Inter | 21px → 19px | 400 | 0 |
| Eyebrow | JetBrains Mono | 13px | 500, uppercase | +0.12em |
| Stat figure | Space Grotesk | 56px → 40px | 700 | -0.03em |
| Label / meta | JetBrains Mono | 13px | 400 | +0.02em |
| Small | Inter | 15px | 400 | 0 |

Body line-height 1.65, headings 1.1. Max measure 68 characters on prose.

The mono eyebrow is the signature move — use it consistently above every
section heading, ideally with a section number: `01 / THE PROBLEM`.

### Surfaces and depth

No drop shadows. Depth comes from background steps and hairline borders:
`base` → `surface` → `surface-2`, each with a 1px `border` outline. Radius 12px
on cards, 8px on buttons and small elements, 6px on badges.

Selective lime glow — `box-shadow: 0 0 40px rgba(200,255,61,0.08)` — on the
primary CTA and one hero element only.

### Grid and texture

A subtle dot or line grid at 3–5% opacity on dark sections gives the technical
texture. Use it behind heroes and diagram sections, never behind body text.

### Layout

Container max-width 1240px, 20px gutters on mobile. Vertical rhythm on an 8px
scale: 120px between major sections on desktop, 72px on mobile. Generous
whitespace is what stops dense content reading as heavy.

---

## Motion

Micro-animation throughout, but purposeful — motion should reveal structure or
confirm interaction, never decorate.

### Standard behaviours

- **Scroll reveal:** sections fade up 16px over 500ms, `cubic-bezier(0.16, 1,
  0.3, 1)`, staggered 60ms between siblings. Once only, never on re-scroll.
- **Stat counters:** count up when scrolled into view, ~900ms, ease-out.
- **Diagram draw-on:** SVG paths animate via `stroke-dashoffset` when the
  diagram enters view; nodes scale in after, staggered.
- **Hover:** cards lift 2px and border shifts to `border-bright` over 180ms.
  Buttons brighten and glow slightly. Never scale text.
- **Sticky progress bar** on `/blueprint`: 2px lime bar at the top tracking
  read position.
- **Table of contents:** active section highlights in lime as you scroll.
- **Page transitions:** 200ms fade. Nothing elaborate.

### Rules

- Nothing animates for longer than 600ms except counters and diagram draws
- Nothing loops indefinitely except one hero element at most
- Nothing blocks reading — text is legible before animation completes
- Under `prefers-reduced-motion: reduce`, all transforms become instant
  opacity changes; counters show final values; diagrams render complete
- Animation never delays LCP. Hero text is server-rendered and visible
  immediately

---

## Voice

Plain, direct, specific. No marketing superlatives — not "cutting-edge",
"revolutionary", "passionate", "seamless", "unlock", "supercharge". Concrete
numbers over adjectives. Short sentences. Confident about method, honest about
limits.

## Commands

- `npm run dev` — local dev
- `npm run build` — must pass before any commit
- `npm run lint`

## Git

- Conventional commits: `feat:`, `fix:`, `content:`, `style:`, `chore:`
- Commit after each complete unit of work, not each file.
