# AGENTS.md — UCE Website Repo Instructions

## Repository Identity

This repository is the public-facing website for UCE.

Use these names consistently:
- Company: ControlModeler Technologies
- Platform: Universal Control Engine
- Abbreviation: UCE

Do not mix this repo with backend/compiler implementation concerns unless explicitly required for website content accuracy.

---

## Mission

This repository exists to present UCE clearly to:
- EPC firms
- controls engineers
- process engineers
- automation engineers
- technical decision makers

The website should explain:
- the problem UCE solves
- why current controls-definition workflows are weak
- how UCE improves engineering rigor
- why the platform matters commercially and technically

---

## Core Execution Rule

This repo is a marketing and product-positioning surface.

Priority order:
1. clear messaging
2. credible technical positioning
3. simple responsive implementation
4. clean visual hierarchy
5. lightweight maintainability

Do not overengineer the site before message clarity is strong.

---

## MVP Website Goal

The MVP website should:
- communicate the UCE value proposition clearly
- look credible and modern
- work well on desktop and mobile
- support future growth into a larger company site

The MVP should not attempt to become:
- a complex web app
- a CMS-heavy platform
- a docs portal
- a product UI clone

---

## Approved Technical Direction

For the MVP:
- prefer simple, static-first implementation
- prefer HTML, CSS, and minimal JavaScript unless otherwise approved
- keep dependencies minimal
- avoid introducing frameworks unless there is a clear reason

If the repo later migrates to a larger framework, keep the structure component-friendly and content-focused.

---

## Design Rules

The site should feel:
- industrial
- modern
- technical
- credible
- clean
- not generic SaaS

Use visual language that supports:
- engineering clarity
- system architecture
- deterministic workflows
- automation credibility

Avoid:
- overly playful UI
- trendy startup clichés
- vague marketing fluff
- exaggerated claims
- decorative complexity without message value

---

## Writing Rules

All copy should be:
- clear
- specific
- technically credible
- concise
- readable by engineering and management audiences

Prefer:
- concrete claims
- strong section headings
- direct explanations
- structured benefit statements

Avoid:
- empty buzzwords
- hype language
- unsupported superlatives
- vague “AI platform” wording unless explicitly supported

---

## Audience Rules

Primary audiences:
- EPC engineering teams
- controls and automation engineers
- process engineering stakeholders
- technical leads
- industrial software decision makers

Write for technically literate readers first.

The site may be persuasive, but it must remain credible to engineers.

---

## Architecture Content Rules

When describing UCE:
- preserve the company/platform/product hierarchy
- keep terminology consistent
- do not invent product names casually
- do not introduce unsupported roadmap claims
- keep technical explanations aligned with approved architecture docs

Use these stable terms where relevant:
- Universal Control Engine
- UCE
- ControlModeler
- SCDE Engine
- Validation Engine
- Execution Engine
- UADM

---

## Implementation Rules

Preferred implementation behavior:
- atomic edits
- small PRs
- reusable sections
- semantic HTML
- accessible structure
- responsive layout
- minimal JavaScript

Avoid:
- large rewrites without reason
- heavy dependencies
- unnecessary animation libraries
- hidden complexity
- hardcoded content repeated across many files

---

## SEO Rules

The MVP site should include:
- one clear page topic per page
- proper heading hierarchy
- title and meta description
- semantic section structure
- crawlable content
- descriptive links

Do not distort copy just to force keywords.

---

## Visual Structure Rules

The homepage should typically prioritize:
1. Hero
2. Problem
3. Solution
4. Platform / architecture explanation
5. Key capabilities
6. Workflow / outcomes
7. CTA

This order may be adjusted only when the message becomes stronger.

---

## Change Discipline

When proposing or applying changes:
- explain what changed
- explain why
- identify risk
- keep edits incremental

Flag explicitly:
- breaking structural changes
- framework migration
- dependency additions
- content decisions that affect brand positioning

---

## Long-Term Direction

This repo may later expand into:
- product pages
- architecture pages
- docs/resources
- blog/news
- lead capture flows

Do not prebuild all of that now.

Build the landing page foundation correctly first.

---

## Final Guidance

The strongest path for this repo is:
- get the message right
- keep the implementation simple
- make the design credible
- keep content technically grounded
- expand only after the MVP landing page is working well