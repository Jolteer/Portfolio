import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group relative flex flex-col gap-3 rounded-lg border border-border bg-card p-5 transition-colors hover:bg-muted/40",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold tracking-tight">
            <Link
              href={`/projects/${project.slug}`}
              className="before:absolute before:inset-0 before:content-['']"
            >
              {project.title}
            </Link>
          </h3>
          {project.role ? (
            <p className="mt-0.5 text-xs text-muted-foreground">
              {project.role}
            </p>
          ) : null}
        </div>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </div>

      <p className="text-sm text-muted-foreground line-clamp-3">
        {project.summary}
      </p>

      <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-1">
        {project.tags.slice(0, 5).map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border bg-muted/60 px-2 py-0.5 text-[11px] text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      {project.links?.github ? (
        <Link
          href={project.links.github}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`${project.title} on GitHub`}
          className="absolute right-4 bottom-4 z-10 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github className="h-4 w-4" />
        </Link>
      ) : null}
    </article>
  );
}
