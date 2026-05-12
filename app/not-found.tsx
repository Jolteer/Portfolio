import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 py-20 text-center sm:py-28">
      <p className="text-[8rem] font-bold leading-none tracking-tighter">
        <span className="text-gradient">404</span>
      </p>
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          Page not found
        </h1>
        <p className="max-w-sm text-muted-foreground">
          That page doesn&rsquo;t exist (or it moved). Let&rsquo;s get you back
          on track.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Link
          href="/"
          className="group inline-flex items-center gap-1.5 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-all hover:-translate-y-0.5 hover:shadow-md"
        >
          <Home className="h-4 w-4" />
          Go home
        </Link>
        <Link
          href="/projects"
          className="group inline-flex items-center gap-1.5 rounded-md border border-border bg-background/60 px-4 py-2 text-sm font-medium backdrop-blur transition-colors hover:bg-muted"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          Browse projects
        </Link>
      </div>
    </div>
  );
}
