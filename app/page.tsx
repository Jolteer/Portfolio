import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { getFeaturedProjects } from "@/lib/projects";
import { siteConfig } from "@/lib/site";

export default function HomePage() {
  const featured = getFeaturedProjects(3);

  return (
    <div className="space-y-16">
      <section className="space-y-5">
        <p className="text-sm font-medium text-muted-foreground">
          Hi, I&rsquo;m {siteConfig.author.name}
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {siteConfig.shortDescription}
        </h1>
        <p className="text-base text-muted-foreground sm:text-lg">
          I work across the stack &mdash; from product UIs in React/Next.js to
          backend services and data pipelines. I care about reliability,
          thoughtful UX, and shipping things people actually use.
        </p>

        <div className="flex flex-wrap items-center gap-2 pt-2">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            View projects
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href={siteConfig.links.resume}
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
          >
            Resume
          </Link>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background hover:bg-muted transition-colors"
          >
            <Github className="h-4 w-4" />
          </Link>
          <Link
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background hover:bg-muted transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </Link>
          <Link
            href={siteConfig.links.email}
            aria-label="Email"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background hover:bg-muted transition-colors"
          >
            <Mail className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex items-end justify-between">
          <h2 className="text-xl font-semibold tracking-tight">
            Featured projects
          </h2>
          <Link
            href="/projects"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            All projects &rarr;
          </Link>
        </div>

        {featured.length === 0 ?
          <p className="text-sm text-muted-foreground">
            Drop a `.mdx` file into <code>content/projects/</code> with{" "}
            <code>featured: true</code> to populate this section.
          </p>
        : <div className="grid gap-4 sm:grid-cols-2">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        }
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Get in touch</h2>
        <p className="text-sm text-muted-foreground">
          The fastest way to reach me is{" "}
          <Link
            href={siteConfig.links.email}
            className="text-primary underline underline-offset-4 hover:opacity-80"
          >
            email
          </Link>
          . I&rsquo;m open to full-time roles and interesting freelance work.
        </p>
      </section>
    </div>
  );
}
