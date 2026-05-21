"use client";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Code2,
  ShieldCheck,
  Clock,
  Eye,
  Repeat,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { site } from "@/data/site";

const pillars = [
  {
    icon: MessageCircle,
    title: "You talk to me. Always.",
    body: "No account managers, no junior hand-offs, no ticket queues. The person writing your code is the person on the call.",
  },
  {
    icon: Code2,
    title: "You own the code. Fully.",
    body: "Clean, documented repo handed over on day one of launch. No vendor lock-in, no obfuscation, no licensing strings attached.",
  },
  {
    icon: ShieldCheck,
    title: "Fixed scope, fixed price.",
    body: "Quote is signed before a line is written. If scope grows, we agree in writing first — no surprise invoices, ever.",
  },
  {
    icon: Clock,
    title: "Dates I actually hit.",
    body: "I take fewer projects so yours ships on the promised week. Milestone-based delivery, with a live preview link from week one.",
  },
  {
    icon: Eye,
    title: "Full visibility, no black box.",
    body: "Weekly previews, async Loom updates, and a shared board. You always know exactly what's done and what's next.",
  },
  {
    icon: Repeat,
    title: "30 days of free polish.",
    body: "After launch, 30 days of complimentary fixes, tweaks, and small adjustments. Bugs are mine, not yours.",
  },
];

export function Trust() {
  return (
    <section id="trust" className="section">
      <div className="container">
        <SectionHeading
          number="06"
          eyebrow="Why work with me"
          title="Trust isn't claimed,"
          italic="it's engineered."
          description="Hiring a freelancer is a leap of faith. Here's exactly how I remove the risk — in writing, before we start."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.07]">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
                className="group relative bg-ink-900 p-7 hover:bg-ink-850 transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent ring-1 ring-accent/20">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-display text-lg font-medium tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-white/55 leading-relaxed">
                  {p.body}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Personal guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="relative mt-10 overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-900/60 p-8 md:p-10"
        >
          <div
            aria-hidden
            className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
          />
          <div className="relative grid md:grid-cols-[1fr_auto] md:items-end gap-8">
            <div className="max-w-2xl">
              <div className="eyebrow mb-4">
                <span className="text-accent/90">A personal note</span>
              </div>
              <p className="font-display text-2xl md:text-3xl leading-snug tracking-tight text-white text-balance">
                &ldquo;If you&rsquo;re not genuinely happy by milestone one,
                walk away — no questions, no invoice. That&rsquo;s how
                confident I am in the work.&rdquo;
              </p>
              <p className="mt-5 text-sm text-white/55 leading-relaxed">
                I&rsquo;d rather lose a project than deliver something you
                regret paying for. {site.name.split(" ")[0]} — {site.location}.
              </p>
            </div>
            <div className="flex md:flex-col items-start md:items-end gap-4 md:text-right">
              <div>
                <div className="font-display text-xl tracking-tight text-white">
                  {site.name}
                </div>
                <div className="text-xs text-white/45 font-mono uppercase tracking-[0.18em] mt-1">
                  Founder &amp; sole developer
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
