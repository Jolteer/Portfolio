import type { Metadata } from "next";
import Link from "next/link";
import { Download, FileText } from "lucide-react";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume for ${siteConfig.author.name}.`,
};

const experience = [
  {
    when: "2024 \u2013 Present",
    title: "Software Engineer",
    org: "Self / Freelance",
    bullets: [
      "Designed and shipped multiple full-stack web apps end-to-end.",
      "Built tooling and automation to speed up day-to-day workflows.",
    ],
  },
];

const education = [
  {
    when: "2022 \u2013 2024",
    title: "B.S. Computer Science",
    org: "Your University",
    bullets: [
      "Capstone: personal-finance forecasting app (FastAPI + Flutter).",
    ],
  },
];

const skills = [
  "TypeScript",
  "JavaScript",
  "Python",
  "React",
  "Next.js",
  "Node.js",
  "FastAPI",
  "PostgreSQL",
  "Tailwind CSS",
  "Docker",
  "Git",
  "Vercel",
];

export default function ResumePage() {
  return (
    <div className="space-y-12">
      <header className="flex flex-wrap items-start justify-between gap-6">
        <div className="space-y-3">
          <p className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            <FileText className="h-3.5 w-3.5" />
            Resume
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            <span className="text-gradient">{siteConfig.author.name}</span>
          </h1>
          <p className="text-muted-foreground">
            {siteConfig.author.role} &middot; {siteConfig.author.location}
          </p>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
            <Link
              href={siteConfig.links.email}
              className="text-foreground underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary"
            >
              {siteConfig.author.email}
            </Link>
            <span aria-hidden>&middot;</span>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer noopener"
              className="text-foreground underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary"
            >
              GitHub
            </Link>
            <span aria-hidden>&middot;</span>
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="text-foreground underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary"
            >
              LinkedIn
            </Link>
          </p>
        </div>
        <Link
          href={siteConfig.links.resume}
          className="group inline-flex items-center gap-1.5 rounded-md border border-border bg-background/60 px-4 py-2 text-sm font-medium backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-muted hover:shadow-sm"
        >
          <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          Download PDF
        </Link>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Skills</h2>
        <div className="flex flex-wrap gap-1.5">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-border/70 bg-card/60 px-2.5 py-0.5 text-xs text-muted-foreground backdrop-blur transition-colors hover:text-foreground"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Experience</h2>
        <div className="space-y-3">
          {experience.map((entry) => (
            <article
              key={`${entry.when}-${entry.title}`}
              className="group rounded-xl border border-border/70 bg-card/60 p-5 backdrop-blur transition-colors hover:bg-card"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-medium">
                  {entry.title}
                  <span className="text-muted-foreground">
                    {" "}
                    &middot; {entry.org}
                  </span>
                </h3>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {entry.when}
                </p>
              </div>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground marker:text-primary/60">
                {entry.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Education</h2>
        <div className="space-y-3">
          {education.map((entry) => (
            <article
              key={`${entry.when}-${entry.title}`}
              className="group rounded-xl border border-border/70 bg-card/60 p-5 backdrop-blur transition-colors hover:bg-card"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-medium">
                  {entry.title}
                  <span className="text-muted-foreground">
                    {" "}
                    &middot; {entry.org}
                  </span>
                </h3>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {entry.when}
                </p>
              </div>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground marker:text-primary/60">
                {entry.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
