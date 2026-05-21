import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const runtime = "edge";
export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0A0A0B 0%, #14110F 55%, #1A1310 100%)",
          color: "white",
          fontFamily: "system-ui, -apple-system, Segoe UI, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, color: "rgba(255,255,255,0.6)" }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#fff",
              color: "#0A0A0B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: 26,
              letterSpacing: -1,
            }}
          >
            MR
          </div>
          <span>{site.url.replace(/^https?:\/\//, "")}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 88,
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: -2,
              maxWidth: 980,
            }}
          >
            <span>{site.name}</span>
            <span style={{ color: "rgba(255,255,255,0.55)" }}>&nbsp;— {site.role}</span>
          </div>
          <div
            style={{
              fontSize: 30,
              color: "rgba(255,255,255,0.72)",
              maxWidth: 900,
              lineHeight: 1.3,
            }}
          >
            {site.tagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            color: "rgba(255,255,255,0.55)",
          }}
        >
          <span>Based in {site.location} · Remote worldwide</span>
          <span style={{ color: "#FF8C5A" }}>Next.js · React · React Native</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
