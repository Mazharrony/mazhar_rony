"use client";
import { memo, useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { WaIcon } from "./WaIcon";
import { MenuToggle } from "./nav/MenuToggle";
import { MagneticLink } from "./nav/MagneticLink";
import { MobileDrawer } from "./nav/MobileDrawer";
import { useActiveSection } from "@/lib/useActiveSection";
import { cn } from "@/lib/utils";
import { site, waLink } from "@/data/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#pricing", label: "Pricing" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const sectionIds = links.map((l) => l.href);

const DesktopLinks = memo(function DesktopLinks({ active }: { active: string }) {
  return (
    <ul className="hidden lg:flex items-center gap-0.5 text-sm">
      {links.map((l) => {
        const isActive = active === l.href;
        return (
          <li key={l.href} className="relative">
            <MagneticLink
              href={l.href}
              className={cn(
                "relative inline-flex items-center px-3 py-2 rounded-md transition-colors",
                isActive ? "text-white" : "text-white/65 hover:text-white",
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="nav-active-pill"
                  className="absolute inset-0 rounded-md bg-white/[0.06] border border-white/[0.08]"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative z-10 inline-flex items-center gap-1.5">
                {isActive && (
                  <motion.span
                    layoutId="nav-active-dot"
                    className="h-1.5 w-1.5 rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {l.label}
              </span>
            </MagneticLink>
          </li>
        );
      })}
    </ul>
  );
});

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-[70] transition-all duration-300",
          scrolled ? "py-2" : "py-4",
        )}
      >
        <div className="container">
          <nav
            className={cn(
              "flex items-center justify-between rounded-2xl px-4 md:px-5 py-3 transition-all",
              scrolled ? "glass-strong" : "bg-transparent border border-transparent",
            )}
            aria-label="Primary"
          >
            <Link
              href="#top"
              className="group relative inline-flex items-center font-display font-medium tracking-tight text-white text-[15px] md:text-base"
            >
              <span className="relative">
                {site.name}
                <span className="text-accent">.</span>
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
              </span>
            </Link>

            <DesktopLinks active={active} />

            <div className="flex items-center gap-2">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium bg-white text-ink-900 hover:bg-white/90 transition-colors"
              >
                <WaIcon className="h-4 w-4 text-emerald-500" />
                WhatsApp
              </a>
              <MenuToggle
                open={open}
                onClick={() => setOpen((v) => !v)}
                className="lg:hidden"
              />
            </div>
          </nav>
        </div>
      </header>

      <MobileDrawer open={open} onClose={() => setOpen(false)} links={links} />
    </>
  );
}
