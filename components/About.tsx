"use client";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { site } from "@/data/site";

const points = [
  "4+ years building production web & mobile apps",
  "Worked with founders, agencies, and SMBs across the GCC and beyond",
  "Strong focus on UI, motion, and conversion — not just code",
  "Direct, honest communication on WhatsApp throughout the project",
];

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading
          number="01"
          eyebrow="About"
          title="A creative developer, not a"
          italic="template factory."
          description="I help businesses ship products that look modern, feel intentional, and solve real problems."
        />

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <p className="font-display text-xl md:text-2xl text-white/80 leading-relaxed tracking-tight text-pretty">
              {site.bio}
            </p>
            <ul className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {points.map((p, i) => (
                <li
                  key={p}
                  className="flex items-start gap-4 text-sm text-white/65 border-t border-white/[0.07] pt-4"
                >
                  <span className="font-mono text-[10px] tracking-widest text-white/30 mt-1 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden gradient-border">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(120% 100% at 0% 0%, rgba(255,107,61,0.18) 0%, transparent 55%), radial-gradient(120% 100% at 100% 100%, rgba(255,255,255,0.06) 0%, transparent 55%), linear-gradient(180deg, #101116 0%, #07080A 100%)",
                }}
              />
              <div className="absolute inset-0 grain opacity-50 mix-blend-overlay" />

              {/* Big monogram */}
              <div className="absolute inset-0 flex flex-col justify-between p-7">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
                    Mazhar Rony / Dubai
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Online
                  </span>
                </div>
                <div>
                  <div className="font-serif italic text-[7rem] md:text-[8.5rem] leading-[0.85] text-white/95">
                    m.
                  </div>
                  <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                    Building since 2021
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/35">
                      Now
                    </div>
                    <div className="mt-1 text-sm text-white/85">
                      Taking on Q1 projects
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/35">
                      Local time
                    </div>
                    <div className="mt-1 text-sm text-white/85">
                      Asia / Dubai
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
