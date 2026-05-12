import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import matter from "gray-matter";
import { MdxContent } from "@/components/mdx/mdx-content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.author.name} \u2014 background, skills, and experience.`,
};

const skills = {
  Languages: ["TypeScript", "JavaScript", "Python", "SQL"],
  Frontend: ["React", "Next.js", "Tailwind CSS", "shadcn/ui"],
  Backend: ["Node.js", "FastAPI", "PostgreSQL", "REST", "tRPC"],
  Tooling: ["Git", "Docker", "Vercel", "GitHub Actions", "Playwright"],
};

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
    <div className="space-y-12">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">About</h1>
        <p className="text-muted-foreground">
          {siteConfig.author.role} based in {siteConfig.author.location}.
        </p>
      </header>

      {aboutBody ?
        <section className="prose prose-portfolio max-w-none dark:prose-invert">
          <MdxContent source={aboutBody} />
        </section>
      : null}

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Skills</h2>
        <dl className="grid gap-4 sm:grid-cols-2">
          {Object.entries(skills).map(([group, items]) => (
            <div
              key={group}
              className="rounded-lg border border-border bg-card p-4"
            >
              <dt className="text-sm font-semibold">{group}</dt>
              <dd className="mt-2 flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-muted/60 px-2 py-0.5 text-xs text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Experience</h2>
        <ol className="space-y-4 border-l border-border pl-5">
          {timeline.map((entry) => (
            <li key={`${entry.when}-${entry.title}`} className="relative">
              <span className="absolute -left-[1.625rem] top-1.5 h-2.5 w-2.5 rounded-full bg-primary" />
              <p className="text-xs text-muted-foreground">{entry.when}</p>
              <p className="font-medium">
                {entry.title}
                <span className="text-muted-foreground">
                  {" "}
                  &middot; {entry.org}
                </span>
              </p>
              <p className="text-sm text-muted-foreground">
                {entry.description}
              </p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
