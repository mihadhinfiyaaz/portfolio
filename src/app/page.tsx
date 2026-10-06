import { site } from "@/content/site";

// Foundation placeholder. Sections are built in order, starting with the hero.
export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col justify-center gap-6 px-6 md:px-16">
      <p className="font-mono text-sm uppercase tracking-widest text-signal">
        {"// foundation"}
      </p>
      <h1 className="text-5xl font-extrabold uppercase leading-none tracking-tight md:text-8xl">
        {site.name}
      </h1>
      <p className="font-mono text-sm text-muted">{site.role}</p>
    </main>
  );
}
