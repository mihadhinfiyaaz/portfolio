"use client";

import { useSyncExternalStore } from "react";
import { media } from "@/lib/motion";

function subscribe(onChange: () => void) {
  const mq = window.matchMedia(media.reduceMotion);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

/** True when the user prefers reduced motion. Server render assumes false. */
export function useReducedMotion() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(media.reduceMotion).matches,
    () => false,
  );
}
