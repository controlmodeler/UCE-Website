# AGENTS.md — UCE-Website Agent Instructions

## What this repo is
Public marketing landing page for UCE (Universal Control Engine)
by ControlModeler Technologies.

Live at: controlmodeler.com
GitHub Pages deployment from main branch.

## File structure
- index.html — main landing page (single source of truth)
- css/styles.css — all styles (rebuilt 2026-04-03)
- js/scripts.js — animations and form handling
- assets/fonts/ — local font files (empty, using Google Fonts)
- assets/images/ — images (empty, placeholder)
- skills/ — agent skill files for landing page work
- archive/ — old drafts, do not touch

## Design language (never violate)
- Background: #0a0b0c (near black)
- Amber accent: #f5a623 (primary CTA, highlights)
- Green accent: #4af09a (success, positive states only)
- Font body/headings: IBM Plex Sans
- Font code/terminal: IBM Plex Mono
- Aesthetic: dark engineering, NOT SaaS-bright
- No gradients, no illustrations, no stock-photo style
- No white or light background sections

## Section structure (index.html)
1. Header/nav
2. Hero + terminal mockup
3. Problem (4 cards)
4. How it works / pipeline (4 steps)
5. Outputs / deliverables (6 cards)
6. Competitive position / quadrant
7. Audience (3 cards)
8. Beta CTA + form
9. Footer

## Rules for all agents
- Read this file before making any changes
- Read skills/landing-page-copy/SKILL.md for copy guidance
- Read skills/landing-page-layout/SKILL.md for layout guidance
- Never modify archive/
- Never introduce new font families
- Never add bright or white sections
- All new sections must follow existing
  section-inner/section-label/section-title pattern
- Mobile responsive is mandatory for every change
- Only push to main branch
- Commit message format: type: short description
  Types: feat, fix, chore, style, content

## Deployment
GitHub Pages — auto deploys on push to main.
Custom domain: controlmodeler.com (CNAME configured)
Do not modify CNAME file.
