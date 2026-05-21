import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ p }: { p: Project }) {
  const [c1, c2] = p.gradient ?? ["#FF6B3D", "#7C7BFF"];
  // Strip protocol + trailing slash for the browser-bar URL display
  const host = p.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <article className="group relative card card-hover overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-0.5">
      {/* Browser-chrome thumbnail */}
      <a
        href={p.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block aspect-[16/10] overflow-hidden"
        aria-label={`Open ${p.title} live site`}
      >
        {/* Mock browser frame */}
        <div className="absolute inset-x-3 top-3 z-10 flex items-center gap-3 rounded-md border border-white/10 bg-ink-900/70 backdrop-blur-sm pl-2.5 pr-3 py-1.5">
          <div className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
          </div>
          <div className="flex-1 truncate font-mono text-[10px] text-white/40 text-center">
            {host}
          </div>
          <ArrowUpRight className="h-3 w-3 text-white/30 group-hover:text-white transition-colors" />
        </div>

        {/* Canvas — gradient wash with the title as a faint wordmark */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(120% 100% at 0% 0%, ${c1}33 0%, transparent 55%), radial-gradient(120% 100% at 100% 100%, ${c2}33 0%, transparent 55%), linear-gradient(180deg, #101116 0%, #07080A 100%)`,
          }}
        >
          <div className="absolute inset-0 grain opacity-[0.5] mix-blend-overlay" />

          {/* Faux content lines */}
          <div className="absolute inset-x-7 top-14 space-y-2">
            <div
              className="h-2 rounded-full"
              style={{
                background: `linear-gradient(90deg, ${c1}cc, ${c2}88, transparent)`,
                width: "55%",
              }}
            />
            <div className="h-1.5 rounded-full bg-white/10 w-3/4" />
            <div className="h-1.5 rounded-full bg-white/[0.06] w-2/3" />
          </div>

          {/* Wordmark of the title */}
          <div className="absolute inset-x-7 bottom-6">
            <div className="font-display font-medium text-2xl md:text-3xl tracking-tightest text-white/90 leading-none">
              {p.title}
            </div>
            <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-white/35">
              {p.tags.slice(0, 2).join(" · ")}
            </div>
          </div>

          {/* Hover sheen */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
               style={{ background: `linear-gradient(135deg, transparent 40%, ${c1}10 50%, transparent 60%)` }} />
        </div>

        {/* Open-link affordance */}
        <div className="absolute bottom-3 right-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-white text-ink-900 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </a>

      {/* Body */}
      <div className="p-5 md:p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-lg font-medium tracking-tight">
            {p.title}
          </h3>
          {p.repoUrl && (
            <a
              href={p.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-1 text-[11px] font-mono text-white/40 hover:text-white transition-colors"
              aria-label={`${p.title} GitHub repository`}
            >
              <Github className="h-3.5 w-3.5" />
              repo
            </a>
          )}
        </div>
        <p className="mt-2 text-sm text-white/55 leading-relaxed line-clamp-3">
          {p.description}
        </p>
        <div className="mt-5 pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {p.tags.slice(0, 3).map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
          <a
            href={p.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-white/80 hover:text-accent transition-colors"
          >
            Visit
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </article>
  );
}
