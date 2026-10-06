@AGENTS.md

# Project: Cybersecurity & Software Motion-Graphics Portfolio

Owner: Mihadh Infiyaaz, CS graduate specializing in cybersecurity.
Goal: a high-end portfolio that presents my projects, skills, and background,
and whose motion design is itself a showcase of my motion graphics skills.
Quality bar: a professional motion-design studio site, not a template.

## Stack
Next.js (App Router), TypeScript, Tailwind CSS, GSAP + ScrollTrigger,
Framer Motion (UI and page transitions), Three.js via React Three Fiber
(hero scene), Lenis (smooth scroll).

## Visual direction
- Dark, cyberpunk-editorial. Near-black background (#07090B), off-white text,
  one electric teal accent (#19F0D0), one muted secondary tone. No other colors.
- Type: a strong display grotesk for headings, a monospace for technical labels.
  Large, confident type scale with generous spacing.
- Restraint: a few spectacular moments, not animation everywhere.

## Motion principles
- Consistent easing and durations across the site (define as shared constants).
- Scroll-driven storytelling: pinned scenes, parallax layers, text that
  "decrypts" into place.
- Hover states, magnetic buttons, custom cursor, eased page transitions.
- Every animation must serve the story; remove anything that doesn't.

## Sections
Hero, About, Projects, Skills, Education, Contact.
- Single scrolling page. The flagship project gets a full-screen cinematic
  section with a "view case study" link to a dedicated page at
  /projects/[slug] (eased page transition). Smaller projects are compact
  cards with no pages of their own. Keep the route data-driven so more
  case-study pages can be added later.
- Education: degree (exact title and graduation year are TODO).

## Rules
- Check Context7 for current docs before writing GSAP, Three.js, or
  Framer Motion code.
- After each section, use Playwright to load the page and screenshot it at
  desktop and mobile widths, and fix any layout problems.
- Performance: lazy-load heavy scenes, cap particle counts, lighter on mobile.
- Respect prefers-reduced-motion with a graceful fallback.
- Keep keyboard access and readable contrast. Key info must be reachable fast.
- Never invent projects, credentials, or claims. Use clearly marked TODO
  placeholders for any content I haven't provided.
- Don't add features I didn't ask for. Ask before large structural changes.
- Commit to git after each working milestone.
