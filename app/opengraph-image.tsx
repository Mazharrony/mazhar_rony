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
            "radial-gradient(1200px 600px at 100% 0%, rgba(255,140,90,0.18), transparent 60%), radial-gradient(900px 600px at 0% 100%, rgba(124,123,255,0.15), transparent 60%), #0A0A0B",
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
              fontSize: 88,
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: -2,
              maxWidth: 980,
            }}
          >
            {site.name}
            <span style={{ color: "rgba(255,255,255,0.55)" }}> — {site.role}</span>
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
