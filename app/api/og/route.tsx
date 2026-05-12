import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";

const size = { width: 1200, height: 630 };

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title")?.slice(0, 120) ?? siteConfig.title;
  const subtitle =
    searchParams.get("subtitle")?.slice(0, 160) ?? siteConfig.shortDescription;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px",
        background:
          "linear-gradient(135deg, #0b0c0f 0%, #14161c 50%, #1a1f2e 100%)",
        color: "#f5f6f8",
        fontFamily: "ui-sans-serif, system-ui, sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 12,
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
          }}
        />
        <div style={{ fontSize: 28, fontWeight: 600, letterSpacing: -0.5 }}>
          {siteConfig.author.name}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            letterSpacing: -1.5,
            lineHeight: 1.05,
            maxWidth: 1000,
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#9ca3af",
            maxWidth: 1000,
            lineHeight: 1.3,
          }}
        >
          {subtitle}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 22,
          color: "#9ca3af",
        }}
      >
        <div>{siteConfig.url.replace(/^https?:\/\//, "")}</div>
        <div>{siteConfig.author.role}</div>
      </div>
    </div>,
    size,
  );
}
