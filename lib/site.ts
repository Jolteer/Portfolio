function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  const prodHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (prodHost) return `https://${prodHost}`;

  const previewHost = process.env.VERCEL_URL;
  if (previewHost) return `https://${previewHost}`;

  return "http://localhost:3000";
}

const SITE_URL = resolveSiteUrl();

export const siteConfig = {
  name: "Joshua",
  title: "Joshua | Software Engineer",
  shortDescription:
    "Software engineer building reliable, well-crafted web apps.",
  description:
    "Portfolio of Joshua, a software engineer focused on full-stack web, ML, and developer tools. Selected projects, writing, and resume.",
  url: SITE_URL,
  ogImage: `${SITE_URL}/api/og`,
  author: {
    name: "Joshua",
    role: "Software Engineer",
    location: "United States",
    email: "you@example.com",
    avatar: "/images/avatar.png",
  },
  links: {
    github: "https://github.com/your-username",
    linkedin: "https://www.linkedin.com/in/your-username",
    email: "mailto:you@example.com",
    resume: "/resume.pdf",
  },
  nav: [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/resume", label: "Resume" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
