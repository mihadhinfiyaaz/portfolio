/**
 * Shared motion system — the single source for easing, durations and staggers.
 * Every GSAP and Motion animation on the site should read from here.
 */

type Bezier = [number, number, number, number];

/** Cubic-bezier control points (Motion accepts these arrays directly). */
export const bezier = {
  /** Default for reveals and entrances. */
  out: [0.16, 1, 0.3, 1],
  /** Scene transitions, page wipes. */
  inOut: [0.65, 0, 0.35, 1],
  /** Hover and UI micro-interactions. */
  snap: [0.2, 0.8, 0.2, 1],
} as const satisfies Record<string, Bezier>;

export type EaseName = keyof typeof bezier;

/** GSAP ease names, registered via CustomEase in `registerGsap()`. */
export const ease: Record<EaseName, string> = {
  out: "site.out",
  inOut: "site.inOut",
  snap: "site.snap",
};

/** Durations in seconds. */
export const dur = {
  micro: 0.2,
  ui: 0.45,
  reveal: 0.9,
  scene: 1.4,
} as const;

/** Stagger offsets in seconds. */
export const stagger = {
  chars: 0.03,
  lines: 0.08,
  items: 0.12,
} as const;

/** Media queries shared by gsap.matchMedia() and CSS-in-JS checks. */
export const media = {
  desktop: "(min-width: 768px)",
  mobile: "(max-width: 767px)",
  reduceMotion: "(prefers-reduced-motion: reduce)",
} as const;
