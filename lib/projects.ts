import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type ProjectLinks = {
  github?: string;
  live?: string;
  paper?: string;
  demo?: string;
};

export type ProjectFrontmatter = {
  title: string;
  slug: string;
  summary: string;
  tags: string[];
  role?: string;
  date: string;
  featured?: boolean;
  links?: ProjectLinks;
  cover?: string;
};

export type Project = ProjectFrontmatter & {
  body: string;
};

const PROJECTS_DIR = path.join(process.cwd(), "content", "projects");

function readProjectsDir(): string[] {
  if (!fs.existsSync(PROJECTS_DIR)) return [];
  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"));
}

function parseProjectFile(filename: string): Project {
  const filePath = path.join(PROJECTS_DIR, filename);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const fallbackSlug = filename.replace(/\.(mdx|md)$/, "");
  const frontmatter = data as Partial<ProjectFrontmatter>;
  return {
    title: frontmatter.title ?? fallbackSlug,
    slug: frontmatter.slug ?? fallbackSlug,
    summary: frontmatter.summary ?? "",
    tags: frontmatter.tags ?? [],
    role: frontmatter.role,
    date: frontmatter.date ?? new Date().toISOString(),
    featured: frontmatter.featured ?? false,
    links: frontmatter.links,
    cover: frontmatter.cover,
    body: content,
  };
}

export function getAllProjects(): Project[] {
  return readProjectsDir()
    .map(parseProjectFile)
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
}

export function getFeaturedProjects(limit = 3): Project[] {
  const all = getAllProjects();
  const featured = all.filter((p) => p.featured);
  return (featured.length > 0 ? featured : all).slice(0, limit);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((p) => p.slug === slug);
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  for (const project of getAllProjects()) {
    for (const tag of project.tags) tags.add(tag);
  }
  return Array.from(tags).sort((a, b) => a.localeCompare(b));
}
