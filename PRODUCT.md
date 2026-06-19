# Kirk's Elite Karate Club — Product Record

**Repo:** twobirds-kramerica/elite-karate-site
**Deploy:** Not yet published to GitHub Pages (Aaron decision pending — see S-ELITE-KARATE-CDN-FIX audit note)
**Primary contact:** kirkselitekarate@gmail.com
**Address:** 36 St Catharine St, St. Thomas, ON

---

## Product Purpose

A local martial arts club website serving St. Thomas, Ontario. Primary goals:
1. Convert curious parents and adults into a first-class booking
2. Answer the four parent questions: What is it? Is it safe? How much? When?
3. Build community trust through real photos + instructor story

---

## Audiences

| Audience | Primary need | Website job |
|----------|-------------|-------------|
| **Parents of kids 4–15** | Is this right for my child? Safe? | Program info + credentials + schedule → first class booking |
| **Adults 16+** | Fitness, self-defence, community | Class info + instructor story → show up |
| **Existing students** | Schedule updates | Schedule section |

---

## Current State (2026-06-19)

| Check | Status |
|-------|--------|
| Pages deployed | No live GitHub Pages deployment (S-ELITE-KARATE-CDN-FIX noted this — Aaron action P2 filed to decide publish/domain) |
| CDN dependencies | 0 (self-hosted Tailwind CSS + Inter font — S-ELITE-KARATE-CDN-FIX) |
| WCAG 2.2 AA | Pass (S-ELITE-KARATE-CDN-FIX audit: 5 blocking → 0) |
| Skip link | ✅ |
| Mobile nav ARIA | ✅ |
| lang="en-CA" | ✅ |
| Privacy page | ✅ |
| robots.txt | ✅ |
| Design system | ✅ DESIGN.md committed (S-ELITE-KARATE-DESIGN-001, 2026-06-19) |

---

## Competitor Landscape (St. Thomas ON, 2026)

| Club | Style | Differentiator |
|------|-------|---------------|
| **Legacy Shorin Ryu Karate Jutsu** | Shorin-ryu Karate Jutsu | Established 1971, Hanshi Gary Legacy — same discipline as Kirk's |
| **Elgin Court Dojo / Martial Arts Canada** | Karate, self-defence | Located at Elgin Court Public School, Tiny Tigers 3-12 + Adults |
| **Phoenix Martial Arts** | Taekwondo | Family atmosphere, Mike Cranwell 3rd Dan |

**Kirk's positioning:** "Modern Tradition" — newer club with established discipline. Same traditional Shorin-ryu lineage as Legacy (direct comparison), but contemporary approach (beginners welcome, ages 4+, community-first). Sensei Trevor Kirk is the trust anchor.

---

## Token File

Design system: `DESIGN.md` (v1, 2026-06-19)
CSS architecture: `css/style.css` (self-hosted Tailwind utility classes)
Font: `fonts/inter/` (InterVariable.woff2, OFL.txt)

---

## Blocked Before Phase 2

Phase 2 (front-end rebuild against DESIGN.md) requires Aaron to supply:
1. Sensei Kirk's belt rank + years teaching
2. 2–3 parent/student testimonials
3. Price range or "ask about pricing" confirmation
4. Phone number decision
5. Any upcoming events
6. Free first class offer confirmation

See DESIGN.md §11 for full list.
