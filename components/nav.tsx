"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/50">
      <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 font-semibold tracking-tight"
        >
          <span
            aria-hidden
            className="relative inline-flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-[var(--brand-1)] via-[var(--brand-2)] to-[var(--brand-3)] text-[11px] font-bold text-white shadow-sm transition-transform group-hover:scale-105"
          >
            {siteConfig.name.charAt(0)}
            <span className="absolute inset-0 rounded-md opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-60 bg-gradient-to-br from-[var(--brand-1)] via-[var(--brand-2)] to-[var(--brand-3)]" />
          </span>
          <span className="transition-opacity group-hover:opacity-80">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="flex items-center gap-0.5 sm:gap-1">
          {siteConfig.nav
            .filter((item) => item.href !== "/")
            .map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-md px-3 py-1.5 text-sm transition-colors",
                    active ? "text-foreground" : (
                      "text-muted-foreground hover:text-foreground"
                    ),
                  )}
                >
                  {active ?
                    <span
                      aria-hidden
                      className="absolute inset-0 rounded-md bg-muted/80 ring-1 ring-border/60"
                    />
                  : null}
                  <span className="relative">{item.label}</span>
                </Link>
              );
            })}
          <ThemeToggle className="ml-1" />
        </nav>
      </div>
    </header>
  );
}
