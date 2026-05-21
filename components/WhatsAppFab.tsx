"use client";
import { useEffect, useState } from "react";
import { waLink, site } from "@/data/site";
import { WaIcon } from "./WaIcon";

export function WhatsAppFab() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${site.name} on WhatsApp`}
      className={`fixed z-40 bottom-5 right-5 sm:bottom-6 sm:right-6 group transition-all duration-300 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <span className="absolute inset-0 rounded-full bg-emerald-500/50 animate-pulse-ring" aria-hidden />
      <span className="relative grid place-items-center h-14 w-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-glow shadow-emerald-500/40 transition">
        <WaIcon className="h-6 w-6" />
      </span>
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden md:block whitespace-nowrap rounded-full bg-ink-800/90 backdrop-blur border border-white/10 px-3 py-1.5 text-xs opacity-0 group-hover:opacity-100 transition">
        Chat on WhatsApp
      </span>
    </a>
  );
}
