/**
 * Any string starting with "TODO:" is placeholder content that the owner has not
 * provided yet. It renders with the visible TODO styling and must be replaced,
 * never invented.
 */
export type Todo = `TODO:${string}`;

export type Project = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  stack: string[];
  year: string;
  /** The single flagship project gets the cinematic section. */
  flagship?: boolean;
  /** True = has a dedicated page at /projects/[slug]. */
  caseStudy?: boolean;
  links?: { label: string; href: string }[];
};

export type Education = {
  degree: string;
  institution: string;
  year: string;
};

export const isTodo = (value: string): value is Todo => value.startsWith("TODO:");
