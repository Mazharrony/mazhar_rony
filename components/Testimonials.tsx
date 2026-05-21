"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { testimonials } from "@/data/content";

export function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <SectionHeading
          number="07"
          eyebrow="Kind words"
          title="What clients"
          italic="say."
          description="Real feedback from people I've worked with. (More coming as projects launch.)"
        />

        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="card card-hover p-7 flex flex-col"
            >
              <Quote className="h-5 w-5 text-accent/70" />
              <blockquote className="mt-5 font-display text-lg md:text-xl text-white/85 leading-relaxed tracking-tight flex-1 text-pretty">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-white/[0.06]">
                <div className="font-medium">{t.name}</div>
                <div className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
                  {t.role}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
