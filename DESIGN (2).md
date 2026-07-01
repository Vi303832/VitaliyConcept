---
name: Monochrome Atelier with Bronze
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#4e4639'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#7f7667'
  outline-variant: '#d1c5b4'
  surface-tint: '#775a19'
  primary: '#775a19'
  on-primary: '#ffffff'
  primary-container: '#c5a059'
  on-primary-container: '#4e3700'
  inverse-primary: '#e9c176'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfde'
  on-secondary-container: '#636262'
  tertiary: '#5e5e5e'
  on-tertiary: '#ffffff'
  tertiary-container: '#a6a5a5'
  on-tertiary-container: '#3a3b3b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdea5'
  primary-fixed-dim: '#e9c176'
  on-primary-fixed: '#261900'
  on-primary-fixed-variant: '#5d4201'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e3e2e2'
  tertiary-fixed-dim: '#c7c6c6'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#464747'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  headline-sm:
    fontFamily: Libre Caslon Text
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 32px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
---

## Brand & Style
The design system embodies a "Modern Luxury" aesthetic, targeting a high-end audience that values precision, heritage, and contemporary minimalism. The personality is curated, authoritative, and quiet, yet punctuated by deliberate moments of warmth.

The style is a hybrid of **Minimalism** and **High-Contrast**, utilizing vast whitespace and a strict monochromatic foundation to allow the bronze accent to function as a singular, high-impact focus point. The emotional response should be one of exclusivity and confidence, where the UI recedes to let content and key actions command attention.

## Colors
The palette is rooted in a "Monochrome Atelier" base, using a spectrum of grays and off-whites to establish a gallery-like environment. 

- **Primary (Bronze):** `#C5A059` is reserved strictly for high-impact CTAs and critical highlights. It provides a warm, metallic contrast against the cooler neutral tones.
- **Secondary (Obsidian):** `#1A1A1A` serves as the primary text color and dark background surface, providing the weight necessary for a luxury feel.
- **Neutral (Gallery & Slate):** A range of grays from `#F9F9F9` (backgrounds) to `#717171` (secondary text) creates subtle depth without introducing chromatic noise.

The bronze accent is calibrated for accessibility, maintaining a 4.5:1 contrast ratio against both the white (`#FFFFFF`) surfaces and the obsidian (`#1A1A1A`) backgrounds when used for typography or iconography.

## Typography
The typography strategy pairs a literary, high-contrast serif for headlines with a clean, functional sans-serif for interface elements.

- **Headlines (Libre Caslon Text):** Used to evoke a sense of editorial prestige. Large scales should use tighter letter-spacing to maintain a "locked-in" professional appearance.
- **Body & UI (Manrope):** Chosen for its modern, balanced proportions. It ensures legibility in data-dense areas while remaining sophisticated.
- **Labels:** Always use uppercase with increased tracking for a "boutique" aesthetic on buttons and small headers.

## Layout & Spacing
The design system utilizes a **fixed-width grid** for desktop to ensure a controlled editorial composition, while transitioning to a fluid layout for mobile devices.

- **Grid:** A 12-column grid on desktop with generous 64px outer margins to create "breathing room."
- **Rhythm:** An 8px linear scale governs all padding and margins.
- **Scaling:** On mobile, margins reduce to 20px and the 12-column grid collapses to a single-column stack, prioritizing vertical rhythm and generous touch targets.

## Elevation & Depth
Depth is communicated through **Tonal Layers** rather than heavy shadows. The system stays intentionally "flat" to maintain its minimalist integrity.

- **Surfaces:** Use subtle shifts between white (`#FFFFFF`) and the neutral tint (`#F9F9F9`) to define content containers.
- **Outlines:** Low-contrast borders (1px solid, 10% Obsidian) replace shadows for card definitions.
- **Interaction:** A singular, high-diffusion shadow (0px 12px 24px, 5% Obsidian) may be used on primary Bronze CTAs upon hover to simulate a gentle lift.

## Shapes
The shape language is strictly **Sharp**. 0px border radii are used across all components, from buttons to image containers. This architectural approach reinforces the "Atelier" feel, conveying a sense of precision and structural permanence.

## Components
- **Buttons:** The Primary CTA is a solid Bronze (`#C5A059`) block with Obsidian text, no border, and sharp corners. Secondary buttons use an Obsidian outline with a transparent fill.
- **Input Fields:** Minimalist design with only a bottom border (1px) in a medium gray, which transitions to Obsidian on focus. No rounded corners.
- **Cards:** Defined by a 1px Obsidian border at 10% opacity. Headers within cards should use the `label-caps` style.
- **Chips/Tags:** Small, rectangular labels with a light gray background and Obsidian text. 
- **Lists:** Separated by thin (0.5px) horizontal rules to maintain a clean, organized flow without adding visual bulk.
- **Checkboxes/Radios:** Square (0px radius) containers. When active, they fill with Bronze.