# Kirk's Elite Karate Club — Design System v1

**Product:** Kirk's Elite Karate Club (twobirds-kramerica/elite-karate-site)
**Created:** 2026-06-19 · Sprint: S-ELITE-KARATE-DESIGN-001
**Phase 1 (this file):** Research-grounded design system spec
**Phase 2 (Aaron-gated):** Rebuild front end against this spec

---

## 1. Brand Foundation

**Name:** Kirk's Elite Karate Club
**Tagline:** Modern Tradition.
**Style:** Shorin-ryu Jiu-Jitsu
**Location:** 36 St Catharine St, St. Thomas, ON
**Contact:** kirkselitekarate@gmail.com
**Audiences:** (1) Parents of kids 4–15 — primary decision-maker, (2) Adults 16+ — self-enrolled, (3) Community / word-of-mouth referrals

**Brand voice:**
- Direct, community-first, no hype
- "You belong here" posture — welcoming, not gatekeeping
- Respect for tradition, accessible to beginners
- Canadian English throughout

---

## 2. Colour Tokens

| Token | Value | Role |
|-------|-------|------|
| `--color-red` | `#dc2626` | Primary action, brand accent |
| `--color-red-hover` | `#b91c1c` | Button hover state |
| `--color-dark` | `#0f172a` | Headers, nav bg (dark sections) |
| `--color-dark-hover` | `#1e293b` | Dark button hover |
| `--color-bg` | `#f8fafc` | Page background (slate-50) |
| `--color-surface` | `#ffffff` | Cards, sections |
| `--color-text` | `#0f172a` | Body text |
| `--color-text-muted` | `#64748b` | Supporting text |
| `--color-border` | `#e2e8f0` | Borders, dividers |
| `--color-border-light` | `#f1f5f9` | Subtle dividers |
| `--color-gold` | `#b45309` | Achievement badges, belt levels (WCAG 4.5:1 on white) |
| `--color-success` | `#15803d` | Pass/achievement states |

**Dark palette (gallery/promo sections):**
Dark background `#0f172a` with white text. Red accents remain `--color-red`.

**Do not add:** gradients, drop shadows on text, animated colour transitions.

---

## 3. Typography

**Family:** Inter (self-hosted — `fonts/inter/inter.css`, `InterVariable.woff2`)

| Role | Class pattern | Size | Weight | Transform | Tracking |
|------|--------------|------|--------|-----------|---------|
| Display hero | `.type-display` | 5rem–8rem | 900 (black) | uppercase | -0.05em (tighter) |
| Section heading | `.type-section` | 1.875rem | 900 (black) | uppercase | -0.025em |
| Sub-heading | `.type-sub` | 1.25rem | 900 (black) | uppercase | 0.05em (wide) |
| Label/badge | `.type-label` | 0.75rem | 900 (black) | uppercase | 0.15em+ (widest) |
| Body | `.type-body` | 1.125rem | 400–500 | none | normal |
| Body large | `.type-body-lg` | 1.25rem | 400–500 | none | normal |
| Small/meta | `.type-meta` | 0.875rem | 400 | none | normal |

**Line height:** Display/headings: 0.85–1.1; Body: 1.7 (relaxed); Labels: 1.3

**Minimum body text size:** 18px (1.125rem) on all screens — accessibility baseline for seniors/parents reading on phones.

---

## 4. Button System

| Variant | Style | Use |
|---------|-------|-----|
| `.btn-primary` | Red bg, white text, rounded-full, px-12 py-5 | Primary CTA — one per viewport |
| `.btn-secondary` | Dark bg (#0f172a), white text, rounded-full | Secondary CTA |
| `.btn-outline` | Red border, red text, transparent bg, rounded-full | Low-commitment action (e.g., "Learn more") |
| `.btn-ghost` | No border, no bg, red text underline | Inline links in body copy |

**Minimum touch target:** 44px height on all interactive elements.

**CTA copy rules:**
- Primary hero CTA: **"Book a Free Class"** or **"Try It Free"** — NOT "Join the Team" or "Enrol Now" (too commitment-heavy; research shows free trial framing converts 50-60% vs. generic enrol at much lower rates)
- Near every CTA: 1 line of risk reduction — *"No experience needed. No commitment. Free for your first class."*
- "Email Us" contact form: acceptable secondary, never primary conversion path

---

## 5. Components

### 5a. Class Cards

3-column grid, responsive to 1-column on mobile.

```
┌─────────────────────────────┐
│  [photo or icon placeholder]│  — real photo preferred over emoji
│  LITTLE DRAGONS             │  type-sub
│  Ages 4–7          [Red]    │  type-label + red
│  Body copy describing the   │
│  value, NOT the content     │
│  [Try this class →]         │  btn-outline
└─────────────────────────────┘
```

Each card links to a future dedicated program page (Phase 2 IA decision).

### 5b. Testimonial Block

Alternating layout (photo left + quote right) or 3-column grid.

```
┌──────────────────────────────────────────┐
│ ★★★★★                                   │
│ "My son has been here 8 months and the  │
│  discipline transfer to school has been  │
│  real. Sensei Kirk runs a tight ship."  │
│                                          │
│  — [Parent name], St. Thomas ON          │
└──────────────────────────────────────────┘
```

Required placement: immediately below hero CTA, and immediately above contact CTA.

### 5c. Instructor Bio

```
┌─────────────────────────────────────────┐
│  [Photo — headshot or action shot]      │
│  Sensei Trevor Kirk                     │  type-sub
│  [Belt rank] · [Years teaching]         │  type-label, muted
│  Body copy — brief, personal, 2–3 lines │
│  Focuses on WHY he teaches, not resume  │
└─────────────────────────────────────────┘
```

**Required:** Belt rank (exact — e.g., "5th Dan Shorin-ryu Jiu-Jitsu") and years of experience. Aaron to supply this data for Phase 2.

### 5d. Schedule Table

Clean bordered table already in current site — keep the pattern. Add:
- "Book this class" or "Try for free" link per row
- Mobile: collapse to card stack (day / time / class on separate lines)

### 5e. FAQ Accordion

Parent audience's top questions (to be confirmed by Aaron/Kirk before Phase 2):
1. Do my kids need any experience?
2. What age can my child start?
3. What does a class cost?
4. What does my child need to wear/bring?
5. How safe is it? What if my child gets scared?
6. How long before my child gets their first belt?
7. Is there a contract?

Each row: question (button, aria-expanded) → answer (collapsible).

---

## 6. Page / Section Order (IA)

Current single-page layout is correct for a small local club. Phase 2 order:

```
Nav (sticky)
  ↓
1. Hero — headline + "Book a Free Class" primary CTA + risk reduction line
2. Social proof strip — 3 parent quote snippets OR Google rating badge
3. Class Programs — 3 cards (Little Dragons / Youth / Adult Karate), each with "Try this class →"
4. Instructor Bio — Sensei Trevor Kirk credentials + story
5. Schedule — table, each row with "Try for free" link
6. Testimonials — 2–3 fuller parent/adult testimonials
7. FAQ — accordion, parent-focused questions
8. Contact + Find Us — email, address, map (keep existing approach)
Footer
```

**What the current site is missing vs. this order:**
| Gap | Priority |
|-----|---------|
| "Book a Free Class" / "Try It Free" CTA (vs "Join the Team") | P0 — most important conversion fix |
| Risk reduction line near hero CTA | P0 |
| Testimonials / social proof | P1 |
| Instructor credentials (belt rank, years) | P1 |
| FAQ accordion | P2 |
| "Try this class" link on each class card | P2 |
| Phone number (email-only limits same-day contact) | P2 — Aaron decision |

---

## 7. Responsive Breakpoints

| Breakpoint | Target |
|-----------|--------|
| Default (0px+) | Single-column, full-width sections |
| 640px (sm) | 2-column contact grid, gallery 2-col |
| 768px (md) | 2-col hero split, 2-col nav |
| 1024px (lg) | 3-col class cards, gallery 3-col |
| 1280px (xl) | Container max-width: 1280px (already set) |

Mobile-first mandatory. Most enquiries arrive on phone (parent checking while at pickup).

---

## 8. Accessibility Baseline

Per CLAUDE.md: all sprints meet WCAG 2.2 AA.

| Rule | Value |
|------|-------|
| Body text contrast | ≥ 4.5:1 (AA) |
| Large text (18px+ bold) | ≥ 3:1 (AA Large) |
| Minimum touch target | 44×44px |
| Skip link | Already present — keep |
| Mobile nav | aria-expanded, aria-controls — already present |
| Images | alt text on every img (currently good) |
| Focus visible | CSS :focus-visible ring on all interactive elements |
| Heading hierarchy | h1 (hero) → h2 (sections) → h3 (cards) |

**Current heading issue:** h1 "Modern Tradition." is a tagline, not a content heading. For Phase 2, add a visually-hidden h1 or restructure so the page's primary subject ("Shorin-ryu Karate in St. Thomas") is the h1 and "Modern Tradition" is the display tagline.

---

## 9. Photography Direction

Kirk has 26 real photos (kirks photo 1–26.jpg). These are a major competitive asset — real instructor + real students vs. stock.

**Current usage:** 7 photos in use (1 in nav logo, 1 in hero, 5 in gallery).

**Priority for Phase 2:**
- Class card photos: 3 photos showing each age group (Little Dragons, Youth, Adult)
- Instructor bio: 1 headshot or mid-action
- Testimonials: If parent/student headshots available, use them — no faces = quote text only
- Remaining photos: populate gallery (current site uses 6 of 26)

**Photo naming:** Rename from `kirks photo 1.jpg` to descriptive slugs (`instructor-demo.jpg`, `kids-class.jpg`) before Phase 2 — better SEO alt text + maintainability.

---

## 10. What Phase 2 Does NOT Change

- Single-page architecture (no multi-page rebuild required — IA fits on one long page)
- Inter font (already self-hosted, SIL OFL)
- Self-hosted utility CSS architecture (no CDN dependencies)
- Google Maps embed (already in use, no sovereignty change)
- Contact via email (kirkselitekarate@gmail.com — Aaron/Kirk decision to add phone)
- Admin CMS (Netlify Identity + Decap CMS — separate concern, lower priority)
- Footer credit ("Built by Two Birds Innovation")

---

## 11. Phase 2 Blocked On (Aaron-gated)

Before rebuilding the front end, Aaron needs to confirm:

| # | Item | Why needed |
|---|------|-----------|
| 1 | Sensei Kirk's belt rank + years teaching | Instructor bio |
| 2 | 2–3 parent/student testimonials (name + quote) | Social proof near CTAs |
| 3 | Price range (even "ask about pricing" is OK) | FAQ + parent objection |
| 4 | Phone number for contact section? | Immediate enquiry path |
| 5 | Any upcoming events / belt ceremonies? | Schedule + community hooks |
| 6 | "Free first class" offer — is this what Kirk offers? | CTA copy accuracy |

These six items gate Phase 2. Phase 2 sprint cannot start until Aaron provides them.
