import Image, { type ImageProps } from "next/image";
import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

function MdxLink({
  href,
  children,
  ...rest
}: ComponentPropsWithoutRef<"a">) {
  if (!href) return <a {...rest}>{children}</a>;
  const isExternal = /^https?:\/\//.test(href);
  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className="text-primary underline underline-offset-4 hover:opacity-80"
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <Link
      href={href}
      className="text-primary underline underline-offset-4 hover:opacity-80"
    >
      {children}
    </Link>
  );
}

function MdxImage({ alt, ...props }: ImageProps) {
  return (
    <span className="block my-8 overflow-hidden rounded-lg border border-border bg-muted">
      <Image
        {...props}
        alt={alt ?? ""}
        className={cn("w-full h-auto", props.className)}
        sizes="(min-width: 768px) 720px, 100vw"
      />
    </span>
  );
}

type CalloutVariant = "info" | "warn" | "success";

const calloutStyles: Record<CalloutVariant, string> = {
  info: "border-primary/40 bg-primary/5",
  warn: "border-amber-500/40 bg-amber-500/5",
  success: "border-emerald-500/40 bg-emerald-500/5",
};

function Callout({
  children,
  variant = "info",
  title,
}: {
  children: ReactNode;
  variant?: CalloutVariant;
  title?: string;
}) {
  return (
    <aside
      className={cn(
        "my-6 rounded-lg border p-4 text-sm",
        calloutStyles[variant],
      )}
    >
      {title ? <p className="font-semibold mb-1">{title}</p> : null}
      <div className="[&>p]:m-0 [&>p+p]:mt-2">{children}</div>
    </aside>
  );
}

export const mdxComponents = {
  a: MdxLink,
  img: (props: ComponentPropsWithoutRef<"img">) => {
    const { src, alt, width, height } = props;
    if (!src || typeof src !== "string") return null;
    return (
      <MdxImage
        src={src}
        alt={alt ?? ""}
        width={typeof width === "number" ? width : 1200}
        height={typeof height === "number" ? height : 630}
      />
    );
  },
  Image: MdxImage,
  Callout,
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      {...props}
      className="scroll-mt-24 mt-10 mb-3 text-2xl font-semibold tracking-tight"
    />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3
      {...props}
      className="scroll-mt-24 mt-8 mb-2 text-xl font-semibold tracking-tight"
    />
  ),
};
