import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { MdxContent } from "@/components/mdx/mdx-content";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";
import { siteConfig } from "@/lib/site";
import { formatDate } from "@/lib/utils";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      type: "article",
      url: `${siteConfig.url}/projects/${project.slug}`,
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(project.title)}`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.summary,
      images: [`/api/og?title=${encodeURIComponent(project.title)}`],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article className="space-y-8">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        All projects
      </Link>

      <header className="space-y-3">
        <p className="text-sm text-muted-foreground">
          {formatDate(project.date)}
          {project.role ? ` \u00b7 ${project.role}` : ""}
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {project.title}
        </h1>
        <p className="text-lg text-muted-foreground">{project.summary}</p>

        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-muted/60 px-2 py-0.5 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.links ? (
          <div className="flex flex-wrap items-center gap-2 pt-3">
            {project.links.github ? (
              <Link
                href={project.links.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 text-sm hover:bg-muted transition-colors"
              >
                <Github className="h-4 w-4" />
                Source
              </Link>
            ) : null}
            {project.links.live ? (
              <Link
                href={project.links.live}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 text-sm hover:bg-muted transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                Live
              </Link>
            ) : null}
            {project.links.demo ? (
              <Link
                href={project.links.demo}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 text-sm hover:bg-muted transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                Demo
              </Link>
            ) : null}
          </div>
        ) : null}
      </header>

      {project.cover ? (
        <div className="overflow-hidden rounded-lg border border-border bg-muted">
          <Image
            src={project.cover}
            alt={`${project.title} cover image`}
            width={1600}
            height={900}
            className="h-auto w-full"
            priority
          />
        </div>
      ) : null}

      <div className="prose prose-portfolio max-w-none dark:prose-invert">
        <MdxContent source={project.body} />
      </div>
    </article>
  );
}
