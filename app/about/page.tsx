import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import matter from "gray-matter";
import {
  Code2,
  Layers,
  Server,
  User,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { MdxContent } from "@/components/mdx/mdx-content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.author.name} \u2014 background, skills, and experience.`,
};

const skills: Array<{
  group: string;
  icon: LucideIcon;
  items: string[];
}> = [
  {
    group: "Languages",
    icon: Code2,
    items: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    group: "Frontend",
    icon: Layers,
    items: ["React", "Next.js", "Tailwind CSS", "shadcn/ui"],
  },
  {
    group: "Backend",
    icon: Server,
    items: ["Node.js", "FastAPI", "PostgreSQL", "REST", "tRPC"],
  },
  {
    group: "Tooling",
    icon: Wrench,
    items: ["Git", "Docker", "Vercel", "GitHub Actions", "Playwright"],
  },
];

const timeline: Array<{
  when: string;
  title: string;
  org: string;
  description: string;
}> = [
  {
    when: "2024 \u2013 Present",
    title: "Software Engineer",
    org: "Self / Freelance",
    description:
      "Designing and shipping full-stack web apps. Open to full-time roles.",
  },
  {
    when: "2022 \u2013 2024",
    title: "B.S. Computer Science",
    org: "Your University",
    description:
      "Focus on systems and ML. Capstone: a personal-finance forecasting app.",
  },
];

function loadAboutMdx(): string | null {
  const filePath = path.join(process.cwd(), "content", "about.mdx");
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { content } = matter(raw);
  return content;
}

export default function AboutPage() {
  const aboutBody = loadAboutMdx();

  return (
    <div className="space-y-16">
      <header className="space-y-3">
        <p className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          <User className="h-3.5 w-3.5" />
          About
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          <span className="text-gradient">{siteConfig.author.name}</span>
        </h1>
        <p className="text-muted-foreground">
          {siteConfig.author.role} based in {siteConfig.author.location}.
        </p>
      </header>

      {aboutBody ?
        <section className="prose prose-portfolio max-w-none dark:prose-invert">
          <MdxContent source={aboutBody} />
        </section>
      : null}

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">Skills</h2>
        <dl className="grid gap-4 sm:grid-cols-2">
          {skills.map(({ group, icon: Icon, items }) => (
            <div
              key={group}
              className="group relative overflow-hidden rounded-xl border border-border/70 bg-card/60 p-5 backdrop-blur transition-colors hover:bg-card"
            >
              <div className="flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-muted text-muted-foreground transition-colors group-hover:text-foreground">
                  <Icon className="h-3.5 w-3.5" />
                </span>
                <dt className="text-sm font-semibold">{group}</dt>
              </div>
              <dd className="mt-3 flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border/60 bg-background/60 px-2 py-0.5 text-xs text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">Experience</h2>
        <ol className="relative space-y-6 border-l border-border/70 pl-6">
          {timeline.map((entry) => (
            <li key={`${entry.when}-${entry.title}`} className="relative">
              <span
                aria-hidden
                className="absolute -left-[1.875rem] top-1.5 h-3 w-3 rounded-full bg-gradient-to-br from-[var(--brand-1)] via-[var(--brand-2)] to-[var(--brand-3)] ring-4 ring-background"
              />
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {entry.when}
              </p>
              <p className="mt-1 font-medium">
                {entry.title}
                <span className="text-muted-foreground">
                  {" "}
                  &middot; {entry.org}
                </span>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {entry.description}
              </p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
