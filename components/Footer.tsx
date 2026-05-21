import { Mail, ArrowUp } from "lucide-react";
import { WaIcon } from "./WaIcon";
import { site, waLink } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.07] mt-10">
      <div className="container py-16 md:py-20">
        {/* Big wordmark */}
        <div className="flex items-end justify-between gap-6 border-b border-white/[0.07] pb-12">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
              {site.role} / {site.location}
            </div>
            <div className="mt-3 font-display font-medium tracking-tightest leading-[0.95] text-[clamp(2.5rem,7vw,5rem)]">
              {site.name.split(" ")[0]}{" "}
              <span className="font-serif italic font-normal text-white/85">
                {site.name.split(" ")[1]}
                <span className="text-accent">.</span>
              </span>
            </div>
          </div>
          <a
            href="#top"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/20 px-4 py-2 text-sm transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
            Back to top
          </a>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-8">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40 mb-3">
              Contact
            </div>
            <div className="space-y-2">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/75 hover:text-white transition-colors"
              >
                <WaIcon className="h-4 w-4 text-emerald-400" />
                {site.whatsappDisplay}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2 text-sm text-white/75 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 text-white/55" />
                {site.email}
              </a>
            </div>
          </div>

          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40 mb-3">
              Sections
            </div>
            <div className="grid grid-cols-2 gap-y-2 text-sm text-white/65">
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#work" className="hover:text-white transition-colors">Work</a>
              <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
              <a href="#process" className="hover:text-white transition-colors">Process</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            </div>
          </div>

          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40 mb-3">
              Currently
            </div>
            <p className="text-sm text-white/65 leading-relaxed">
              Available for new projects. Replies usually within a few hours,
              Sun – Thu.
            </p>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/[0.07] flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-white/35">
          <p>
            © {new Date().getFullYear()} {site.name} · All rights reserved
          </p>
          <p>Made with care in Dubai</p>
        </div>
      </div>
    </footer>
  );
}
