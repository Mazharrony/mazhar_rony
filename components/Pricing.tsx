"use client";
import { motion } from "framer-motion";
import { WaIcon } from "./WaIcon";
import { SectionHeading } from "./SectionHeading";
import { pricing } from "@/data/pricing";
import { waLink } from "@/data/site";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <SectionHeading
          number="07"
          eyebrow="Pricing"
          title="Honest, affordable,"
          italic="negotiable."
          description="Starting prices below — every project is unique. WhatsApp me with your idea and I'll send a tailored quote."
        />

        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {pricing.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className={cn(
                "relative rounded-2xl p-7 md:p-8 flex flex-col transition-colors",
                p.highlighted
                  ? "gradient-border bg-white/[0.04]"
                  : "card card-hover",
              )}
            >
              {p.highlighted && (
                <div className="absolute -top-3 left-7 inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/[0.15] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-accent backdrop-blur-md">
                  Most popular
                </div>
              )}
              <div className="flex items-start justify-between">
                <h3 className="font-display text-xl font-medium tracking-tight">
                  {p.name}
                </h3>
                <span className="font-mono text-[10px] tracking-widest text-white/30 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-1.5 text-sm text-white/55">{p.tagline}</p>
              <div className="mt-7 pb-6 border-b border-white/[0.06] flex items-baseline gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                  from
                </span>
                <span
                  className={cn(
                    "font-display text-4xl md:text-[2.5rem] font-medium tracking-tightest leading-none",
                    p.highlighted ? "gradient-accent" : "text-white",
                  )}
                >
                  {p.priceFrom}
                </span>
              </div>
              <ul className="mt-6 space-y-3 text-sm flex-1">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-white/70"
                  >
                    <span
                      className={cn(
                        "mt-2 h-px w-3 shrink-0",
                        p.highlighted ? "bg-accent/70" : "bg-white/25",
                      )}
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={waLink(p.ctaMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors",
                  p.highlighted
                    ? "bg-white text-ink-900 hover:bg-white/90"
                    : "border border-white/[0.12] bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/20",
                )}
              >
                <WaIcon className="h-4 w-4 text-emerald-500" />
                Get a quote
              </a>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-white/45 max-w-xl mx-auto">
          Prices are starting estimates. Every project is negotiable depending on
          scope, timeline, and your business needs — let&apos;s talk.
        </p>
      </div>
    </section>
  );
}
