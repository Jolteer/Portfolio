import type { Metadata } from "next";
import { FolderGit2 } from "lucide-react";
import { TagFilter } from "@/components/tag-filter";
import { getAllProjects, getAllTags } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected software engineering projects: full-stack apps, ML, dev tools, and side projects.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();
  const tags = getAllTags();

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          <FolderGit2 className="h-3.5 w-3.5" />
          {projects.length} {projects.length === 1 ? "project" : "projects"}
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          <span className="text-gradient">Projects</span>
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          A selection of things I&rsquo;ve built &mdash; full-stack apps,
          experiments, and developer tools. Filter by stack to find something
          specific.
        </p>
      </header>

      {projects.length === 0 ?
        <p className="rounded-lg border border-dashed border-border bg-card/40 p-6 text-sm text-muted-foreground">
          No projects yet. Add an MDX file in <code>content/projects/</code> to
          get started.
        </p>
      : <TagFilter projects={projects} tags={tags} />}
    </div>
  );
}
