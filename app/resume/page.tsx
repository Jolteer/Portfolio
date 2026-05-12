import type { Metadata } from "next";
import Link from "next/link";
import { Download } from "lucide-react";
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
    <div className="space-y-10">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">
            {siteConfig.author.name}
          </h1>
          <p className="text-muted-foreground">
            {siteConfig.author.role} &middot; {siteConfig.author.location}
          </p>
          <p className="text-sm">
            <Link
              href={siteConfig.links.email}
              className="text-primary underline underline-offset-4"
            >
              {siteConfig.author.email}
            </Link>{" "}
            &middot;{" "}
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer noopener"
              className="text-primary underline underline-offset-4"
            >
              GitHub
            </Link>{" "}
            &middot;{" "}
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="text-primary underline underline-offset-4"
            >
              LinkedIn
            </Link>
          </p>
        </div>
        <Link
          href={siteConfig.links.resume}
          className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
        >
          <Download className="h-4 w-4" />
          Download PDF
        </Link>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Skills</h2>
        <div className="flex flex-wrap gap-1.5">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-border bg-muted/60 px-2 py-0.5 text-xs text-muted-foreground"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Experience</h2>
        {experience.map((entry) => (
          <article
            key={`${entry.when}-${entry.title}`}
            className="rounded-lg border border-border bg-card p-4"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-medium">
                {entry.title}
                <span className="text-muted-foreground">
                  {" "}
                  &middot; {entry.org}
                </span>
              </h3>
              <p className="text-xs text-muted-foreground">{entry.when}</p>
            </div>
            <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
              {entry.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Education</h2>
        {education.map((entry) => (
          <article
            key={`${entry.when}-${entry.title}`}
            className="rounded-lg border border-border bg-card p-4"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-medium">
                {entry.title}
                <span className="text-muted-foreground">
                  {" "}
                  &middot; {entry.org}
                </span>
              </h3>
              <p className="text-xs text-muted-foreground">{entry.when}</p>
            </div>
            <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
              {entry.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </div>
  );
}
