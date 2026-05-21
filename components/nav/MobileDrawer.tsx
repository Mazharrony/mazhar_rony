"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Copy, Check, Github, Linkedin, MapPin, Mail } from "lucide-react";
import { WaIcon } from "../WaIcon";
import { useBodyScrollLock } from "@/lib/useBodyScrollLock";
import { cn } from "@/lib/utils";
import { site, waLink } from "@/data/site";

type NavLink = { href: string; label: string };

type Props = {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
};

export function MobileDrawer({ open, onClose, links }: Props) {
  useBodyScrollLock(open);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const t = setTimeout(() => firstLinkRef.current?.focus(), 80);
    return () => {
      window.removeEventListener("keydown", onKey);
      clearTimeout(t);
    };
  }, [open, onClose]);

  const onCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* noop */
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      aria-hidden={!open}
      data-open={open ? "true" : "false"}
      className={cn(
        "drawer-root fixed inset-0 z-[60] lg:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
    >
      {/* Solid backdrop (cheap pre-baked gradient, no runtime blur) */}
      <div
        aria-hidden
        className="drawer-bg absolute inset-0"
        onClick={onClose}
      />

      <div className="relative h-full w-full flex flex-col">
        {/* Spacer leaves room for the real navbar which floats above the drawer */}
        <div className="h-20 shrink-0" aria-hidden />

        {/* Links */}
        <ul className="container flex-1 flex flex-col justify-center gap-1 sm:gap-2 py-10">
          {links.map((l, i) => (
            <li
              key={l.href}
              className="drawer-item overflow-hidden"
              style={{ ["--i" as string]: i }}
            >
              <Link
                ref={i === 0 ? firstLinkRef : undefined}
                href={l.href}
                onClick={onClose}
                tabIndex={open ? 0 : -1}
                className="group flex items-baseline gap-4 sm:gap-6 py-2 sm:py-3"
              >
                <span className="font-mono text-[11px] tracking-[0.22em] text-white/35 w-8 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display font-medium tracking-tightest text-[clamp(2rem,9vw,3.75rem)] leading-[1.05] text-white/85 group-hover:text-white transition-colors">
                  {l.label}
                </span>
                <ArrowUpRight className="ml-auto h-5 w-5 sm:h-6 sm:w-6 text-white/30 transition-all group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Footer block */}
        <div
          className="drawer-footer container pb-[max(1.25rem,env(safe-area-inset-bottom))]"
          style={{ ["--i" as string]: links.length }}
        >
          <div className="border-t border-white/10 pt-6 grid gap-5">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              tabIndex={open ? 0 : -1}
              className="group inline-flex items-center justify-between rounded-2xl px-5 py-4 bg-white text-ink-900 hover:bg-white/90 transition-colors"
            >
              <span className="inline-flex items-center gap-2.5 text-sm font-medium">
                <WaIcon className="h-5 w-5 text-emerald-500" />
                Start a project on WhatsApp
              </span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <button
              type="button"
              onClick={onCopyEmail}
              tabIndex={open ? 0 : -1}
              className="group inline-flex items-center justify-between rounded-xl border border-white/[0.1] bg-white/[0.02] px-4 py-3 text-left hover:bg-white/[0.05] hover:border-white/20 transition-colors"
            >
              <span className="inline-flex items-center gap-2.5 text-sm text-white/80">
                <Mail className="h-4 w-4 text-white/50" />
                {site.email}
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-[0.18em] text-white/45 group-hover:text-accent transition-colors">
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5" /> Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" /> Copy
                  </>
                )}
              </span>
            </button>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <a
                  href={site.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  tabIndex={open ? 0 : -1}
                  className="grid place-items-center h-10 w-10 rounded-full border border-white/10 bg-white/[0.03] text-white/70 hover:text-white hover:border-white/25 transition-colors"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={site.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  tabIndex={open ? 0 : -1}
                  className="grid place-items-center h-10 w-10 rounded-full border border-white/10 bg-white/[0.03] text-white/70 hover:text-white hover:border-white/25 transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
              <div className="text-right">
                <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
                  <MapPin className="h-3 w-3" /> {site.location}
                </div>
                {site.available && (
                  <div className="mt-1 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    </span>
                    Available · booking now
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
