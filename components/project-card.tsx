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
  const year = new Date(project.date).getFullYear();

  return (
    <article
      className={cn(
        "group gradient-border card-glow relative flex flex-col gap-3 overflow-hidden rounded-xl border border-border/70 bg-card/70 p-5 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-card hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20",
        className,
      )}
    >
      <div className="relative z-[2] flex items-start justify-between gap-3">
        <div className="space-y-0.5">
          <h3 className="text-base font-semibold tracking-tight">
            <Link
              href={`/projects/${project.slug}`}
              className="before:absolute before:inset-0 before:content-['']"
            >
              {project.title}
            </Link>
          </h3>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            {project.role ?
              <span>{project.role}</span>
            : null}
            {project.role ?
              <span aria-hidden className="text-muted-foreground/50">
                &middot;
              </span>
            : null}
            <span>{year}</span>
          </div>
        </div>
        <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
      </div>

      <p className="relative z-[2] line-clamp-3 text-sm text-muted-foreground">
        {project.summary}
      </p>

      <div className="relative z-[2] mt-auto flex flex-wrap items-center gap-1.5 pt-1">
        {project.tags.slice(0, 5).map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border/60 bg-background/60 px-2 py-0.5 text-[11px] text-muted-foreground backdrop-blur transition-colors group-hover:border-border group-hover:text-foreground/80"
          >
            {tag}
          </span>
        ))}
      </div>

      {project.links?.github ?
        <Link
          href={project.links.github}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`${project.title} on GitHub`}
          className="absolute right-4 bottom-4 z-10 rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <Github className="h-4 w-4" />
        </Link>
      : null}
    </article>
  );
}
