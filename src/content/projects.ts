import type { Project } from "./types";

// TODO: replace with the owner's real projects. Do not invent entries.
export const projects: Project[] = [
  {
    slug: "flagship",
    title: "TODO: flagship project title",
    summary: "TODO: one-line summary",
    role: "TODO: role",
    stack: ["TODO: stack"],
    year: "TODO: year",
    flagship: true,
    caseStudy: true,
  },
];

export const flagship = projects.find((p) => p.flagship);
export const otherProjects = projects.filter((p) => !p.flagship);
export const caseStudies = projects.filter((p) => p.caseStudy);
