export const siteConfig = {
  name: "Joshua",
  title: "Joshua | Software Engineer",
  shortDescription:
    "Software engineer building reliable, well-crafted web apps.",
  description:
    "Portfolio of Joshua, a software engineer focused on full-stack web, ML, and developer tools. Selected projects, writing, and resume.",
  url: "https://your-name.vercel.app",
  ogImage: "https://your-name.vercel.app/og.png",
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
