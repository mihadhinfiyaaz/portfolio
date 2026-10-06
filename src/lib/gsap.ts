"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";
import { bezier, ease, type EaseName } from "./motion";

let registered = false;

/** Registers plugins and the site eases once. Client-only. */
export function registerGsap() {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger, CustomEase, useGSAP);
  for (const name of Object.keys(bezier) as EaseName[]) {
    CustomEase.create(ease[name], bezier[name].join(","));
  }
  registered = true;
}

registerGsap();

export { gsap, ScrollTrigger, useGSAP };
