import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-border/60">
      <div className="mx-auto flex max-w-4xl flex-col items-start justify-between gap-6 px-4 py-10 sm:flex-row sm:items-center sm:px-6">
        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-[var(--brand-1)] via-[var(--brand-2)] to-[var(--brand-3)] text-xs font-bold text-white shadow-sm"
          >
            {siteConfig.name.charAt(0)}
          </span>
          <div className="text-sm leading-tight">
            <p className="font-medium">{siteConfig.author.name}</p>
            <p className="text-muted-foreground">
              &copy; {year} &middot; Built with Next.js &amp; Tailwind
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <Github className="h-4 w-4" />
          </Link>
          <Link
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" />
          </Link>
          <Link
            href={siteConfig.links.email}
            aria-label="Email"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
          </Link>
          <Link
            href="#main"
            className="ml-2 hidden text-xs text-muted-foreground transition-colors hover:text-foreground sm:inline"
          >
            Back to top &uarr;
          </Link>
        </div>
      </div>
    </footer>
  );
}
