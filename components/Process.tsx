"use client";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { process } from "@/data/content";

export function Process() {
  return (
    <section id="process" className="section">
      <div className="container">
        <SectionHeading
          number="05"
          eyebrow="How it works"
          title="A simple,"
          italic="clear process."
          description="No mystery, no surprises. Here's exactly how we'll go from idea to launch together."
        />

        <ol className="relative grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.07]">
          {process.map((p, i) => (
            <motion.li
              key={p.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group relative bg-ink-900 p-7 hover:bg-ink-850 transition-colors"
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent/90 tabular-nums">
                {p.step}
              </div>
              <h3 className="mt-5 font-display text-lg font-medium tracking-tight">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-white/55 leading-relaxed">
                {p.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
