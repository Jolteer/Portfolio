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
    <div className="space-y-6">
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
                "rounded-full border px-3 py-1 text-xs transition-colors",
                selected
                  ? "border-primary/40 bg-primary text-primary-foreground"
                  : "border-border bg-background text-muted-foreground hover:text-foreground hover:bg-muted",
              )}
            >
              {tag}
            </button>
          );
        })}
      </div>

      {visible.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          No projects yet for {active}.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {visible.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
