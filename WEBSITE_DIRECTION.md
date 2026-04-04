# UCE Website — Direction & Context

## Purpose

Single-page marketing site for UCE beta launch. Target: senior controls engineers at mid-size EPCs and system integrators (5–50 engineers). This is not a SaaS landing page — it's an engineering tool presented by an engineer.

## Deployment

- Repo: `UCE-Website` on GitHub (ControlModeler org)
- Hosting: GitHub Pages
- Domain: controlmodeler.com (CNAME included)

## Design Language

- **Dark, engineering-grade aesthetic** — not startup-bright
- **Fonts:** IBM Plex Mono (headings, terminal, code) + IBM Plex Sans (body)
- **Background:** near-black (#0a0b0c) with subtle grid overlay
- **Primary accent:** amber (#f5a623) — used for CTAs, highlights, active states
- **Secondary accent:** green (#4af09a) — terminal success states, checkmarks
- **Cards/surfaces:** dark grays (#0f1012 → #1f2326) with subtle borders (#1e2124)
- **Tone:** technical, confident, minimal. No gradients, no illustrations, no stock photos.

## Page Sections (current draft)

1. **Header** — Logo (diamond mark + UCE), nav links (How it works, Outputs, Beta), Request access CTA
2. **Hero** — "Control system design data, compiled." + descriptor paragraph + terminal mockup showing a real `uce project build` run + stat row (11 entity types, 100% vendor-agnostic, DCS + PLC)
3. **Problem** — 4 cards: no single source of truth, no validation, platform lock-in, manual/slow/expensive
4. **How it works** — 4-step pipeline: structured input → canonical model → validation → deterministic output + provenance chain strip
5. **Outputs** — 6 cards: control narrative (.docx), IO list (.xlsx), C&E table (.xlsx), interlock register (.xlsx), logic diagrams (.drawio), validation report (.json)
6. **Competitive position** — quadrant chart showing UCE alone in top-right (vendor-agnostic + deep engineering intent), competitors in other quadrants
7. **Who it's for** — 3 cards: mid-size EPCs, system integrators, packaged equipment vendors. Lead line: "Built for controls engineers by a controls engineer."
8. **Beta CTA** — form (name, email, company, team size, platforms) + direct email fallback
9. **Footer** — brand, links, copyright

## Messaging Principles

- Lead with the engineering problem, not the product
- Show real output (terminal mockup, not mockup screenshots)
- Credibility comes from domain depth, not design polish
- "A senior controls engineer built this for himself" — not "we're disrupting industrial automation"
- No feature lists — show the pipeline and the deliverables
- Determinism is the trust anchor: identical input → identical output

## Key Copy Points (from strategic context)

- UCE is a deterministic engineering compiler, not a document generator
- The canonical model is 11 entity types encoding 20+ years of domain expertise
- Vendor-agnostic by design — Siemens/Schneider copilots can't be universal because it would help engineers pick competitors
- Target users are priced out by AVEVA/SPI and underserved by vendor tools
- Beta cohort: 3–5 companies, deep engagement, not volume

## What's Missing / Next Steps

- **styles.css** — the original stylesheet was not preserved from the first draft. Needs to be rebuilt from scratch to match the design language above and the HTML structure in index.html. This is the primary blocker.
- **Favicon + OG meta tags** — needed before any public link sharing
- **Beta form backend** — currently client-side only. Options: Formspree, Netlify Forms, or a simple serverless function. Low priority for initial deploy.
- **Analytics** — Plausible or Simple Analytics (privacy-friendly, no cookie banner needed). Add before beta outreach begins.
- **App shell mockup** — `uce-app-shell.html` exists in Product/Website/ as a 64KB standalone demo of the UCE UI. Could be linked from the landing page as a "See the interface" CTA in a future iteration.

## Source Files

The original drafts live in `Product/Website/` (OneDrive):
- `index_1.html` — full landing page HTML (copied to this repo as index.html)
- `scripts_1.js` — animations and form handling (copied to js/scripts.js)
- `uce-app-shell.html` — standalone UI mockup (not in repo yet, optional)
