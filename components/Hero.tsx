"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { WaIcon } from "./WaIcon";
import { site, waLink } from "@/data/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-36 md:pt-44 pb-20 md:pb-28 overflow-hidden"
    >
      {/* Refined background — one warm orb + subtle grain */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -top-32 right-[-10%] h-[640px] w-[640px] rounded-full bg-accent/10 blur-3xl animate-orb-drift" />
        <div className="absolute top-1/3 left-[-15%] h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute inset-0 grain opacity-[0.35] mix-blend-overlay" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-ink-900" />
      </div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Top meta line */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-10">
            {site.available && (
              <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-white/55">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                Available · booking now
              </div>
            )}
            <span className="hidden sm:inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-white/40">
              <MapPin className="h-3 w-3" />
              {site.location}
            </span>
            <span className="hidden md:inline-flex font-mono text-[11px] uppercase tracking-[0.22em] text-white/40">
              Freelance · Remote worldwide
            </span>
          </div>

          {/* Editorial headline */}
          <h1 className="font-display font-medium tracking-tightest leading-[0.95] text-[clamp(2.75rem,8.5vw,7.5rem)] max-w-[18ch]">
            <span className="text-white">Modern web &amp; app </span>
            <span className="font-serif italic font-normal text-white/85">
              experiences
            </span>{" "}
            <br className="hidden md:block" />
            <span className="text-white">for businesses that </span>
            <span className="font-serif italic font-normal text-white/85">
              mean something
            </span>
            <span className="text-accent">.</span>
          </h1>

          {/* Two-column meta below headline */}
          <div className="mt-12 md:mt-16 grid lg:grid-cols-12 gap-10 lg:gap-12 items-end">
            <div className="lg:col-span-7 max-w-xl">
              <div className="flex items-start gap-4">
                <div className="hidden sm:block h-px w-12 bg-white/20 mt-3 shrink-0" />
                <p className="text-base md:text-lg text-white/65 leading-relaxed text-pretty">
                  I&apos;m <span className="text-white">{site.name}</span> — a
                  freelance developer based in Dubai. I design and build modern
                  websites, web apps, and mobile experiences for founders and
                  small teams who care about quality.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#work" className="btn-primary group">
                  See selected work
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  <WaIcon className="h-4 w-4 text-emerald-400" />
                  WhatsApp me
                </a>
              </div>
            </div>

            {/* Stat list — editorial style, not boxy */}
            <dl className="lg:col-span-5 grid grid-cols-2 gap-y-7 gap-x-6 border-t border-white/10 pt-8 lg:border-t-0 lg:pt-0 lg:border-l lg:pl-10">
              {site.stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                    {s.label}
                  </dt>
                  <dd className="mt-2 font-display text-3xl md:text-4xl font-medium tracking-tightest gradient-accent">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
