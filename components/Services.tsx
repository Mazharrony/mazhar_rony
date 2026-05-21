"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHeading
          number="02"
          eyebrow="Services"
          title="What I can build"
          italic="for your business."
          description="From a single landing page to a full SaaS — pick what you need, or message me with your idea."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.07]">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="group relative bg-ink-900 p-7 hover:bg-ink-850 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="grid h-10 w-10 place-items-center rounded-lg border border-white/[0.1] bg-white/[0.02] group-hover:border-accent/50 group-hover:bg-accent/[0.05] transition-colors">
                    <Icon className="h-[18px] w-[18px] text-white/85 group-hover:text-accent transition-colors" />
                  </div>
                  <span className="font-mono text-[10px] tracking-widest text-white/30 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-8 font-display text-lg font-medium tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-white/55 leading-relaxed">
                  {s.description}
                </p>
                <ul className="mt-6 space-y-2 text-sm">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-white/65"
                    >
                      <span className="mt-1.5 h-px w-2.5 bg-white/25 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <ArrowUpRight className="absolute bottom-6 right-6 h-4 w-4 text-white/0 group-hover:text-accent transition-colors" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
