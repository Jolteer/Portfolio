"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";
import { ProjectCard } from "./project-card";

const ALL = "All";

export function TagFilter({
  projects,
  tags,
}: {
  projects: Project[];
  tags: string[];
}) {
  const [active, setActive] = useState<string>(ALL);
  const options = useMemo(() => [ALL, ...tags], [tags]);

  const visible = useMemo(() => {
    if (active === ALL) return projects;
    return projects.filter((p) => p.tags.includes(active));
  }, [active, projects]);

  return (
    <div className="space-y-7">
      <div
        role="tablist"
        aria-label="Filter projects by tag"
        className="flex flex-wrap gap-1.5"
      >
        {options.map((tag) => {
          const selected = tag === active;
          return (
            <button
              key={tag}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(tag)}
              className={cn(
                "rounded-full border px-3 py-1 text-xs font-medium transition-all",
                selected ?
                  "border-foreground bg-foreground text-background shadow-sm"
                : "border-border/70 bg-background/60 text-muted-foreground backdrop-blur hover:border-border hover:bg-muted hover:text-foreground",
              )}
            >
              {tag}
            </button>
          );
        })}
      </div>

      {visible.length === 0 ?
        <p className="rounded-lg border border-dashed border-border bg-card/40 p-6 text-sm text-muted-foreground">
          No projects yet for &ldquo;{active}&rdquo;.
        </p>
      : <div className="grid gap-4 sm:grid-cols-2">
          {visible.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      }
    </div>
  );
}
