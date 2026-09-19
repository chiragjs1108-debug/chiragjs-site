# chiragjs.in — Build Brief

Hand this to Claude Code alongside `CLAUDE.md`. Work through it session by
session; do not attempt the whole site in one pass.

---

## 1. What this site is

A six-page site for Chirag J S, a fractional Digital Project Head and SEO
Architect who builds organic admissions engines for education businesses.

The audience is B2B and high-ticket: college management, coaching centre
owners, admissions consultancies. Every page is public and indexable. There
are no gated or unlisted pages.

The commercial goal is enquiries — via form, WhatsApp, or phone.

---

## 2. Pages

| Route | Purpose |
| --- | --- |
| `/` | Position the offer, show proof, drive to `/blueprint` or `/contact` |
| `/services` | The three offers in detail. Main commercial ranking page |
| `/work` | Case studies index |
| `/work/[slug]` | Individual case study |
| `/blueprint` | The full pitch, long-form and visual. Primary content asset |
| `/about` | Credibility and working style |
| `/contact` | Enquiry form plus direct channels |
| `/privacy` | Data handling notice (the form collects personal data) |

---

## 3. Repository structure

```
chiragjs-site/
├── CLAUDE.md
├── README.md
├── .env.local                 ← gitignored
├── .env.example
├── next.config.ts
├── tailwind.config.ts         ← design tokens
├── tsconfig.json
└── package.json

src/
├── app/
│   ├── layout.tsx             ← fonts, header, footer
│   ├── page.tsx               ← /
│   ├── globals.css
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── not-found.tsx
│   ├── services/page.tsx
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── privacy/page.tsx
│   ├── work/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   └── blueprint/page.tsx
│
├── components/
│   ├── layout/                ← Header, Footer, Container, GridTexture
│   ├── motion/                ← Reveal, StaggerGroup, CountUp, DrawSVG
│   ├── sections/              ← Hero, ProofBar, ServiceCard, CTA, FAQ
│   ├── blueprint/             ← TableOfContents, ProgressBar,
│   │                             BlueprintSection, StatBlock,
│   │                             one component per diagram
│   └── ui/                    ← Button, Badge, Card, Eyebrow, DataTable
│
├── content/
│   ├── site.ts                ← name, tagline, contact, nav
│   ├── services.ts
│   ├── work.ts                ← case studies with real metrics
│   ├── faq.ts
│   └── blueprint/
│       └── main.ts            ← blueprint content as typed sections
│
└── lib/
    ├── schema.ts              ← JSON-LD builders
    ├── metadata.ts            ← per-page metadata helper
    └── analytics.ts
```

Type the blueprint sections as
`{ id, number, eyebrow, heading, body, visual?, stats? }` so the table of
contents and progress bar generate themselves rather than being maintained by
hand.

**Why blueprint content sits in its own folder:** it is one file today, but a
vertical-specific page (`/blueprint/colleges`) may earn its place later.
Keeping it separate means adding a file and a route then, rather than pulling
a long page apart.

---

## 4. Page specifications

### `/` — Home

Under six screens on mobile. Every section leads with a visual or a figure,
not a paragraph.

1. **Hero** — h1, one supporting line, two buttons (*See the blueprint*
   primary with lime glow, *Start a conversation* ghost). Subtle grid texture
   behind. One slow ambient motion element at most.
2. **The problem** — three cards with icons: rising CPC, zero equity in ad
   spend, pipeline dies when spend stops. Mono labels, short lines.
3. **Proof bar** — three real metrics as animated count-ups in Space Grotesk,
   mono captions beneath. High on the page; it makes everything below
   credible.
4. **The chain** — find demand → build the asset → capture the lead →
   compound the return. Four nodes connected by a line that draws in on
   scroll.
5. **Services preview** — three cards linking to `/services`.
6. **Closing CTA** — one line, one lime button, lime glow block.

### `/services`

Three offers as distinct sections. Each: what it is, who it suits, what is
delivered, what is not included. Lead each with an icon and a mono label.

1. **Fractional SEO Architecture** — the core engagement. Deliverables stack,
   governance rhythm, and the boundary (Chirag architects; the client's team
   executes)
2. **Cornerstone Content Writing** — priced separately, per page or batch
3. **Organic Lead System** — the zero-cost tracked-lead build, positioned as
   a centralised lead desk with no licence fee

Close with an engagement-model block: scoping sprint first, then setup fee +
monthly retainer + success bonus.

Target terms: *fractional SEO consultant education*, *SEO for college
admissions India*.

### `/work` and `/work/[slug]`

Index plus one page per case study. Each study: the situation, what was built
(architecture, page count, schema approach), what happened (real metrics with
timeframes), and what would be done differently.

That last section is unusual and disproportionately effective — it signals
self-evaluation rather than only marketing.

Lead each case study with a metrics strip — three count-up figures — before
any prose.

**This page cannot ship with invented numbers.** If only one property has
solid data, publish one case study rather than two thin ones.

### `/about`

Short. Twelve years in admissions, why domain knowledge changes the SEO
output, how the engagement works, and what is deliberately not offered. Photo
included — B2B buyers are hiring a person.

### `/contact`

See section 6.

### `/privacy`

What is collected, why, where it is stored, how to request deletion. Mention
Formspree as the processor.

---

## 5. The `/blueprint` page

The primary content asset and the link that gets sent to prospects.

### Substantive, but never text-heavy

This page has to rank, which means real indexable content — a page of mostly
graphics ranks for nothing. The goal is not less content; it is content that
does not *read* as heavy.

How that is achieved:

- **Every section opens with a visual anchor** — a diagram, a stat block, an
  icon row, or a table. Prose follows the visual, never the reverse.
- **Sections are short.** 120–250 words each, then a visual break. Fifteen
  short sections beat five long ones at identical word count.
- **Data lives in cards and tables**, not sentences. Any paragraph containing
  three or more figures should be a table.
- **Generous whitespace** — 120px between sections on desktop. Density on the
  page, not on the screen.
- **Progressive reveal** — content fades up as you scroll, so the reader
  always faces one section, not a wall.
- **Sticky progress bar and table of contents** so length reads as depth
  rather than as a slog.

Target roughly 3,000–4,000 words across 15 sections, with 10+ distinct
visuals. That ranks and still feels like a product page.

### Section order

Each gets a mono section number, an eyebrow, a heading, a visual, and short
prose.

1. What this is, and who it is for
2. The problem with rented traffic
3. The economics, side by side — comparison table
4. The owned asset, and the honest timeline — ROI curve chart
5. Why a fractional architect — comparison table
6. The ten-stage build method — animated process flow
7. How many pages it takes — formula plus scenario table
8. The toolchain — icon grid, free vs paid tagged
9. The 16-week roadmap — horizontal timeline, draws in on scroll
10. Governance rhythm — cadence cards
11. Lead tracking without a CRM — flow diagram
12. Risks, plainly stated — two-column table
13. What I own vs what you own — split diagram
14. Commercial terms — pricing tier cards
15. Next steps — numbered CTA block

### Diagrams

Build as inline SVG React components in `components/blueprint/`, each
animating on scroll entry:

- Hub-and-spoke architecture — nodes scale in, connectors draw outward
- Search-intent pyramid — tiers fill bottom-up
- Organic vs paid ROI curve — both paths draw left to right
- Ten-stage process flow — stages reveal in sequence
- Indexation wave staircase — bars rise in order
- Lead capture flow — pulse travels along the path
- Optimization loop — circular path draws, nodes pop in

Each needs a `<title>` element for accessibility, must scale via `viewBox`
plus `width: 100%`, and must render complete and static under
`prefers-reduced-motion`. On mobile, stack multi-column diagrams vertically
rather than shrinking them.

Use `lime` for the element each diagram is actually about; everything else in
`text-3` and `border`. A diagram with lime everywhere communicates nothing.

### Icons

`lucide-react`, 1.5px stroke, sized 20–24px inline and 32px in cards. One
icon per concept, used consistently — the same icon means the same thing
across every page.

### PDF

Offer a "Download as PDF" link serving a pre-generated file. No runtime
generation.

---

## 6. Contact and lead capture

No n8n, no webhooks, no backend.

### Three channels, equally prominent

1. **Formspree form** — posts directly, emails Chirag on submission
2. **WhatsApp** — `wa.me` link with a pre-filled message carrying the page
   the visitor came from
3. **Phone** — `tel:` link, tappable on mobile

Business buyers differ in how they make first contact. Offering all three
converts better than pushing everyone through a form.

### The form

Client-side POST to the Formspree endpoint. Store as
`NEXT_PUBLIC_FORMSPREE_ENDPOINT` in `.env.local` and in Vercel's environment
variables. The endpoint is public by design; Formspree handles abuse.

**Visible fields:** name, organisation, email, phone, message.

**Hidden fields**, populated client-side before submit — these travel through
into the notification email, preserving attribution:

- `source`, `utm_source`, `utm_medium`, `utm_campaign`
- `landing_page`, `referrer`, `page_submitted_from`, `timestamp`

**Spam:** include Formspree's `_gotcha` honeypot field, plus a
time-to-submit check rejecting anything under two seconds. No CAPTCHA — it
costs conversions and is unnecessary at this volume.

**States:** handle idle, submitting, success and error explicitly. On error,
show the WhatsApp and phone options prominently rather than a dead end.

**Subject line:** set `_subject` so enquiry emails are identifiable at a
glance.

### Known limitation

Enquiries arrive as individual emails rather than in a sortable sheet, and
Formspree's free tier caps monthly submissions. Fine at current volume. If
enquiries become frequent, revisit — Formspree can forward to a Google Sheet
on paid tiers, or the earlier n8n approach becomes worth the setup.

---

## 7. SEO and technical requirements

Non-negotiable, not nice-to-have.

- **Core Web Vitals green on mobile**: LCP < 2.5s, INP < 200ms, CLS < 0.1.
  Animation must not delay LCP — hero text server-renders and is visible
  immediately.
- **Lighthouse 95+** on Performance, Accessibility, Best Practices, SEO
- **Unique title and meta description per page** via `lib/metadata.ts`
- **One `h1` per page**, headings sequential, no skipped levels
- **Generated `sitemap.xml` and `robots.txt`**. Everything is indexable
- **Canonical URL on every page**
- **Open Graph and Twitter cards**, 1200×630 — most B2B sharing happens in
  WhatsApp and LinkedIn, both of which render these

### Schema markup (JSON-LD via `lib/schema.ts`)

- `Person` on `/about` — name, job title, knowsAbout, sameAs
- `ProfessionalService` on `/` — service type, area served (Bengaluru,
  Karnataka, India)
- `Service` on each `/services` block
- `Article` on `/blueprint`
- `BreadcrumbList` on `/work/[slug]`
- `FAQPage` wherever real FAQs are published

Validate every one in Google's Rich Results Test before shipping.

### Accessibility

This palette needs care. Lime on near-black passes easily; **black text on
lime fills must be checked**, and lime must never be used for body text on
dark. Visible focus states on every interactive element — use a lime ring.
Keyboard navigable throughout. Alt text describing function, not appearance.

Every animation honours `prefers-reduced-motion`.

---

## 8. Build sessions

One goal per session. Commit at the end of each.

**Session 1 — foundation and design system**
> Read CLAUDE.md. Set up the colour tokens in tailwind.config.ts, configure
> Space Grotesk, Inter and JetBrains Mono via next/font, build the root layout
> with header and footer, and create the Container, Button, Card, Eyebrow and
> GridTexture primitives. Build a temporary page rendering every token, type
> style and component state for review. No real pages yet.

Review that page carefully. Fixing the type scale or palette later means
touching everything.

**Session 2 — motion primitives**
> Install motion (Framer Motion). Build the reusable motion components:
> Reveal (fade up on scroll, once only), StaggerGroup, CountUp, and DrawSVG
> for path animation. Each must honour prefers-reduced-motion by rendering the
> final state instantly. Demo them on the token page.

Getting these right once means every later section animates consistently.

**Session 3 — content layer and home**
> Create typed content files in /src/content (site, services, work, faq),
> using my real copy where given and clearly marked TODOs where not. Then
> build the home page section by section using the motion primitives.

**Session 4 — services, about, privacy**

**Session 5 — contact**
> Build the contact page: Formspree form with hidden UTM and source fields,
> _gotcha honeypot, time-to-submit check, and explicit idle/submitting/
> success/error states. Plus prominent WhatsApp and phone options. On error,
> surface those alternatives rather than a dead end.

Test with a real submission before moving on.

**Session 6 — the blueprint page.** The biggest. Split across sittings:
structure, table of contents and progress bar first; then the SVG diagram
components with their scroll animations; then content population.

**Session 7 — work and case studies.** Only once real metrics exist.

**Session 8 — SEO and technical pass**
> Add per-page metadata, JSON-LD schema via lib/schema.ts, generated sitemap
> and robots, Open Graph images, canonicals. Then run Lighthouse and fix
> anything under 95. Verify no animation is delaying LCP.

**Session 9 — launch checks.** Search Console verification, sitemap
submission, GA4 live, 404 page, real-device testing, Rich Results Test, and a
full pass with reduced-motion enabled.

### Working with Claude Code

Give it one page or one system per session, not "build the site". Review the
diff before each commit. When something looks wrong, say what you expected
rather than only what broke. If a session starts changing files outside its
scope, stop it and restate the goal.

---

## 9. Inputs Chirag must supply

**Before Session 3**

- [ ] Contact details: phone, email, LinkedIn URL, WhatsApp number
- [ ] Formspree account and form endpoint
- [ ] Headline: one sentence on what you do, in your own words
- [ ] Public pricing figures for the blueprint page

**Before Session 7 — currently blocking**

- [ ] Organic traffic growth from Ayushpedia.in / cutoffs.info, with timeframe
- [ ] Number of keywords or pages ranking on page one
- [ ] Organic enquiries per month, if tracked

Search Console provides the first two in about ten minutes. Until these
exist, `/work` and the proof bar on `/` cannot ship honestly — and an
evidence-based SEO pitch with no evidence is a weak position.

**Before Session 9**

- [ ] Professional photo for `/about`
- [ ] GA4 property created
- [ ] Search Console access for chiragjs.in
