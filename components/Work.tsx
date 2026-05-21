"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/data/projects";

export function Work() {
  const [showAll, setShowAll] = useState(false);
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="section">
      <div className="container">
        <SectionHeading
          number="04"
          eyebrow="Selected Work"
          title="A snapshot of"
          italic="recent projects."
          description={`${projects.length} live products shipped — from luxury real estate to e-commerce, SaaS dashboards, and bilingual sites.`}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {featured.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>

        <AnimatePresence initial={false}>
          {showAll && (
            <motion.div
              key="more"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 pt-5">
                {rest.map((p) => (
                  <ProjectCard key={p.slug} p={p} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {rest.length > 0 && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="btn-ghost group"
              aria-expanded={showAll}
            >
              {showAll ? "Show less" : `Show all ${projects.length} projects`}
              <ChevronDown
                className={`h-4 w-4 transition-transform ${showAll ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
