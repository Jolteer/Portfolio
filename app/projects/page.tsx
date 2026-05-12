import type { Metadata } from "next";
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
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
        <p className="text-muted-foreground">
          A selection of things I&rsquo;ve built. Filter by stack to find
          something specific.
        </p>
      </header>

      {projects.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          No projects yet. Add an MDX file in{" "}
          <code>content/projects/</code> to get started.
        </p>
      ) : (
        <TagFilter projects={projects} tags={tags} />
      )}
    </div>
  );
}
