import { SectionHeading } from "./SectionHeading";
import { techStack } from "@/data/tech";

export function TechStack() {
  const row = [...techStack, ...techStack];
  return (
    <section id="tech" className="section">
      <div className="container">
        <SectionHeading
          number="03"
          eyebrow="Toolbox"
          title="A modern toolbox,"
          italic="picked per project."
          description="Not every project needs every tool — these are the ones I reach for most often."
        />
      </div>

      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)",
        }}
      >
        <div className="flex w-max gap-3 animate-marquee py-2">
          {row.map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="shrink-0 rounded-full border border-white/[0.08] bg-white/[0.02] px-5 py-2 text-sm text-white/70 font-mono tracking-tight"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
