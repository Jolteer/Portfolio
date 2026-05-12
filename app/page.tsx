import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { getFeaturedProjects } from "@/lib/projects";
import { siteConfig } from "@/lib/site";

const stack = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "Tailwind CSS",
  "Docker",
  "Vercel",
];

export default function HomePage() {
  const featured = getFeaturedProjects(3);

  return (
    <div className="space-y-24">
      {/* ---------- Hero ---------- */}
      <section className="relative space-y-7 pt-2 sm:pt-6">
        <div
          className="inline-flex animate-fade-in-up items-center gap-2 rounded-full border border-border/70 bg-background/60 px-3 py-1 text-xs text-muted-foreground shadow-sm backdrop-blur"
          style={{ animationDelay: "40ms" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Available for new opportunities
        </div>

        <div className="space-y-4">
          <p
            className="animate-fade-in-up text-sm font-medium text-muted-foreground"
            style={{ animationDelay: "100ms" }}
          >
            Hi, I&rsquo;m {siteConfig.author.name} &mdash;
          </p>
          <h1
            className="animate-fade-in-up text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl"
            style={{ animationDelay: "160ms" }}
          >
            I build <span className="text-gradient">reliable</span>,
            <br className="hidden sm:inline" /> well-crafted{" "}
            <span className="text-gradient">web apps</span>.
          </h1>
          <p
            className="animate-fade-in-up max-w-2xl text-base text-muted-foreground sm:text-lg"
            style={{ animationDelay: "220ms" }}
          >
            Full-stack engineer working across React/Next.js, Node, Python, and
            data pipelines. I care about reliability, thoughtful UX, and
            shipping things people actually use.
          </p>
        </div>

        <div
          className="animate-fade-in-up flex flex-wrap items-center gap-2 pt-2"
          style={{ animationDelay: "280ms" }}
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-1.5 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            View projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href={siteConfig.links.email}
            className="group inline-flex items-center gap-1.5 rounded-md border border-border bg-background/60 px-4 py-2 text-sm font-medium backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-muted"
          >
            Get in touch
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <div className="mx-1 hidden h-6 w-px bg-border sm:block" />
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background/60 backdrop-blur transition-colors hover:bg-muted"
          >
            <Github className="h-4 w-4" />
          </Link>
          <Link
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background/60 backdrop-blur transition-colors hover:bg-muted"
          >
            <Linkedin className="h-4 w-4" />
          </Link>
          <Link
            href={siteConfig.links.email}
            aria-label="Email"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background/60 backdrop-blur transition-colors hover:bg-muted"
          >
            <Mail className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ---------- Tech stack marquee ---------- */}
      <section
        aria-label="Stack I use"
        className="relative -mx-4 overflow-hidden sm:-mx-6"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
        <div
          className="flex w-max gap-3 px-4 sm:px-6"
          style={{ animation: "marquee 38s linear infinite" }}
        >
          {[...stack, ...stack].map((item, idx) => (
            <span
              key={`${item}-${idx}`}
              className="inline-flex shrink-0 items-center rounded-full border border-border/70 bg-background/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ---------- Featured projects ---------- */}
      <section className="space-y-6">
        <div className="flex items-end justify-between">
          <div className="space-y-1">
            <p className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5" />
              Selected work
            </p>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Featured projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            All projects
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {featured.length === 0 ?
          <p className="rounded-lg border border-dashed border-border bg-card/40 p-6 text-sm text-muted-foreground">
            Drop a <code>.mdx</code> file into <code>content/projects/</code>{" "}
            with <code>featured: true</code> to populate this section.
          </p>
        : <div className="grid gap-4 sm:grid-cols-2">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        }
      </section>

      {/* ---------- Get in touch ---------- */}
      <section className="relative overflow-hidden rounded-2xl border border-border/70 bg-card/60 p-8 backdrop-blur sm:p-10">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-50 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklch, var(--brand-1) 55%, transparent) 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklch, var(--brand-3) 55%, transparent) 0%, transparent 70%)",
          }}
        />
        <div className="relative space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Let&rsquo;s build something.
          </h2>
          <p className="max-w-xl text-muted-foreground">
            Open to full-time roles and interesting freelance work. The fastest
            way to reach me is email &mdash; I usually reply within a day.
          </p>
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <Link
              href={siteConfig.links.email}
              className="group inline-flex items-center gap-1.5 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <Mail className="h-4 w-4" />
              {siteConfig.author.email}
            </Link>
            <Link
              href={siteConfig.links.resume}
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background/60 px-4 py-2 text-sm font-medium backdrop-blur transition-colors hover:bg-muted"
            >
              Resume
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
