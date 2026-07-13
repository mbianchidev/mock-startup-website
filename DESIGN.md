---
name: Matteo
description: A product-shaped portfolio presented as an audacious human-platform launch.
colors:
  launch-black: "#0A0A0B"
  launch-black-soft: "#111113"
  launch-panel: "#1A1A1D"
  launch-panel-raised: "#252528"
  signal-white: "#FFFFFF"
  signal-muted: "#B4B4B8"
  signal-dim: "#6E6E73"
  electric-cyan: "#00D9FF"
  electric-cyan-hover: "#00BFEA"
  proof-green: "#00FF94"
  proof-green-hover: "#00E682"
  border-visible: "#FFFFFF1A"
  border-subtle: "#FFFFFF0F"
typography:
  display:
    fontFamily: "Archivo Black, Arial Black, sans-serif"
    fontSize: "clamp(3.4rem, 7.6vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.94
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Archivo Black, Arial Black, sans-serif"
    fontSize: "clamp(3rem, 5.7vw, 5rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Public Sans, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "clamp(1.5rem, 2.3vw, 2.15rem)"
    fontWeight: 800
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Public Sans, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Public Sans, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 800
    lineHeight: 1.2
rounded:
  sm: "8px"
  md: "10px"
  lg: "12px"
  xl: "16px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section: "clamp(90px, 11vw, 160px)"
components:
  button-primary:
    backgroundColor: "{colors.electric-cyan}"
    textColor: "{colors.launch-black}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "14px 22px"
  button-primary-hover:
    backgroundColor: "{colors.proof-green}"
    textColor: "{colors.launch-black}"
  button-secondary:
    backgroundColor: "{colors.launch-panel}"
    textColor: "{colors.signal-white}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "14px 22px"
  product-shell:
    backgroundColor: "{colors.launch-panel}"
    textColor: "{colors.signal-white}"
    rounded: "{rounded.xl}"
    padding: "16px"
  proof-surface:
    backgroundColor: "{colors.proof-green}"
    textColor: "{colors.launch-black}"
    rounded: "{rounded.xl}"
    padding: "clamp(32px, 5vw, 64px)"
---

# Design System: Matteo

## 1. Overview

**Creative North Star: "The Human Release Candidate"**

Matteo looks like a high-performance product launch for a human: a black anodized chassis, fluorescent QA labels, an engineering test report, and a release note written by someone who knows the whole premise is ridiculous. Satire earns attention first; progressively stronger open-source, speaking, and delivery evidence converts that attention into credibility.

The system uses one dominant idea per section rather than repeating a landing-page template. Dark launch surfaces establish technical confidence, Electric Cyan marks action and active system state, Proof Green identifies verifiable evidence, and Signal White creates a blunt final release-note close. It explicitly rejects the generic AI-generated SaaS landing page, conventional corporate resume site, chaotic meme site, and serious enterprise consultancy.

**Key Characteristics:**

- Oversized compressed display type paired with highly readable public-service body type.
- Hard section changes: dark launch grid, diagnostic console, proof-green repository surface, cyan tool matrix, white release notes.
- Asymmetric manifests and ledgers instead of identical icon-card grids.
- Real default content before hydration; interaction enriches rather than unlocks evidence.
- Short, purposeful motion: scan pass, status pulse, state shift, and tactile controls.

## 2. Colors

The palette is a full technical signal system, not decorative neon: black is the chassis, cyan is attention, green is proof, and white is the final specification sheet.

### Primary

- **Electric Cyan:** Primary action, active compatibility state, navigation signal, and the drenched toolchain section.
- **Electric Cyan Hover:** Denser cyan for pressed and hover states where green would incorrectly imply proof.

### Secondary

- **Proof Green:** Repository evidence, confirmed results, pass states, and the featured open-source project surface.
- **Proof Green Hover:** Stronger green for proof-bearing interactions.

### Neutral

- **Launch Black:** Main page stage and highest-contrast ink on cyan, green, and white surfaces.
- **Soft Launch Black:** Alternating dark section and mobile-menu surface.
- **Launch Panel:** Product chassis, diagnostic controls, project records, and report containers.
- **Raised Launch Panel:** Hovered or selected dark surfaces.
- **Signal White:** Primary copy and the closing release-note surface.
- **Muted Signal:** All supporting body copy on dark surfaces.
- **Dim Signal:** Nonessential metadata only; never body copy.
- **Visible Border / Subtle Border:** Structural dividers and full-outline containers.

**The Two-Signal Rule.** Cyan means attention or action. Green means proof or confirmed outcome. An element never uses both just to look energetic.

**The Drenched Interruption Rule.** One cyan section may interrupt the dark rhythm. Its purpose is to reset attention and inventory the operating environment, not to advertise another CTA.

## 3. Typography

**Display Font:** Archivo Black (with Arial Black fallback)

**Body Font:** Public Sans (with system sans fallbacks)

**Character:** Archivo Black feels like packaging and launch signage rather than an editorial headline. Public Sans is practical, highly legible, and deliberately unglamorous; it keeps the satire credible and the evidence easy to scan.

### Hierarchy

- **Display** (400, `clamp(3.4rem, 7.6vw, 6rem)`, 0.94): Hero and final release-note statements.
- **Headline** (400, `clamp(3rem, 5.7vw, 5rem)`, 0.98): Section-defining claims.
- **Title** (800, `clamp(1.5rem, 2.3vw, 2.15rem)`, 1.12): Capability, project, and diagnostic titles.
- **Body** (400, `1rem`, 1.7): Supporting copy, capped near 65–70 characters.
- **Label** (800, `0.9rem`, 1.2): Actions, status labels, metadata, and compact navigation.

**The Blunt Instrument Rule.** Display type states one sharp idea. It never carries paragraphs, fake metrics, or vague transformation language.

**The No-Costume Rule.** Code-like labels identify actual system keys or states. Monospace styling is never added merely to signal “developer.”

## 4. Elevation

Depth is structural, not decorative. The product chassis and diagnostic console receive one broad, dark ambient shadow; proof and tool surfaces use color and full borders rather than floating cards. Interactive records move by only two to five pixels.

### Shadow Vocabulary

- **Chassis Depth** (`0 28px 90px color-mix(in srgb, var(--bg-primary) 82%, transparent)`): Hero product shell only.
- **Console Depth** (`0 24px 70px color-mix(in srgb, var(--bg-primary) 82%, transparent)`): Compatibility lab and mobile navigation.
- **Action Signal** (`0 14px 34px color-mix(in srgb, var(--primary-color) 22%, transparent)`): Primary action hover.

**The One-Chassis Rule.** Only one object per viewport may carry deep ambient elevation. Everything else earns hierarchy through color, scale, spacing, or borders.

## 5. Components

### Buttons

- **Shape:** Compact engineered rectangle (`10px` radius) with at least `52px` height for primary homepage actions.
- **Primary:** Solid Electric Cyan with Launch Black text; Proof Green appears only on hover as a deliberate “confirmed” response.
- **Hover / Focus:** Two-pixel lift, restrained cyan shadow, and a three-pixel Proof Green focus ring.
- **Secondary:** Launch Panel with a full one-pixel Visible Border; never a gradient or glass treatment.

### Chips

- **Style:** Full-border pills for technology metadata only.
- **State:** Static inventory, not pseudo-buttons. Interactive choices use diagnostic selector rows instead.

### Cards / Containers

- **Corner Style:** `16px` for major product, proof, console, and report containers; `12px` for media; `8px` to `10px` for controls.
- **Background:** Dark tonal surfaces at rest, Proof Green only for evidence-bearing featured content.
- **Shadow Strategy:** One deep chassis or console shadow per viewport; ordinary records remain flat.
- **Border:** Full one-pixel border. Side stripes are forbidden.
- **Internal Padding:** `24px` to `64px`, scaled by narrative importance.

### Navigation

- **Style:** Sticky Launch Black header, two-line product mark, muted links, solid cyan booking CTA.
- **Mobile:** The toggle and CTA render in static HTML. The menu uses `aria-expanded`, `aria-controls`, Escape dismissal, and a full-width stacked surface.

### Compatibility Lab

Native buttons form the challenge selector. Each button owns an `aria-pressed` state and controls a default server-rendered result region. The selected result uses an atomic polite live region, but evidence is present before interaction.

### Proof Ledger

The featured creator-owned project receives the Proof Green surface. Supporting projects use flat dark records. Star counts are explicitly labeled as project signal and never imply personal ownership of a third-party project's popularity.

## 6. Do's and Don'ts

### Do:

- **Do** let satire introduce the interaction, then replace it with inspectable evidence.
- **Do** keep body text on dark surfaces at Signal White or Muted Signal.
- **Do** use Electric Cyan for action and Proof Green for evidence.
- **Do** keep every essential claim, link, and default diagnostic result in static exported HTML.
- **Do** respect reduced motion globally and locally; scanning, pulsing, and state-shift effects must disappear without losing meaning.
- **Do** use direct external booking URLs and Next links for internal static-export routes.

### Don't:

- **Don't** produce a generic AI-generated SaaS landing page with interchangeable gradients, repeated icon cards, or vague transformation claims.
- **Don't** turn the experience into a conventional corporate resume or portfolio timeline.
- **Don't** create a chaotic meme site; memes may sharpen a point but never obscure navigation, evidence, or readability.
- **Don't** imitate a serious enterprise consultancy with jargon, stock-photo polish, or institutional distance.
- **Don't** use gradient text, glassmorphism, colored side-stripe borders, nested cards, or the hero-metric template.
- **Don't** present a third-party project's total stars as Matteo's contribution.
- **Don't** repeat tiny uppercase tracked eyebrows or numbered section markers as page scaffolding.
