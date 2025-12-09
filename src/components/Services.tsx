// src/components/Services.tsx
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import "./Services.css";

const Services: React.FC = () => {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const stripRef = useRef<HTMLDivElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);

  const [maxOffset, setMaxOffset] = useState(0);
  const [sectionHeight, setSectionHeight] = useState<number | null>(null);
  const [prefersReduced, setPrefersReduced] = useState(false);

  // Measure strip width and viewport to derive maxOffset and required scroll height
  useLayoutEffect(() => {
    const measure = () => {
      if (!stripRef.current || !viewportRef.current) return;
      const stripWidth = stripRef.current.scrollWidth;
      const viewportWidth = viewportRef.current.clientWidth;
      const diff = Math.max(stripWidth - viewportWidth, 0);
      setMaxOffset(diff);

      if (typeof window !== "undefined") {
        // 3x multiplier gives smooth scroll-jacking effect
        setSectionHeight(diff * 3 + window.innerHeight);
      }
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [language]);

  // Respect prefers-reduced-motion
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Scroll progress: section enters viewport and exits
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Smooth easing with rest at start/end - cubic bezier for natural feel
  const smoothProgress = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0, 0, 1, 1],
    { ease: (t: number) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2 }
  );

  // Map smooth progress to horizontal travel
  const stripX = useTransform(smoothProgress, [0, 1], [0, -maxOffset || 0]);

  const services = [
    { id: "social", titleKey: "services.items.0.title", bodyKey: "services.items.0.description", href: "/services/social-media-marketing" },
    { id: "content", titleKey: "services.items.1.title", bodyKey: "services.items.1.description", href: "/services/content-video-production" },
    { id: "ads", titleKey: "services.items.2.title", bodyKey: "services.items.2.description", href: "/services/google-meta-ads" },
    { id: "webopt", titleKey: "services.items.3.title", bodyKey: "services.items.3.description", href: "/services/website-optimization" },
    { id: "brand", titleKey: "services.items.4.title", bodyKey: "services.items.4.description", href: "/services/brand-strategy-design" },
    { id: "ecommerce", titleKey: "services.items.5.title", bodyKey: "services.items.5.description", href: "/services/ecommerce-management" },
    { id: "webapp", titleKey: "services.items.6.title", bodyKey: "services.items.6.description", href: "/services/web-app-development" },
  ];

  const innerClass = prefersReduced ? "services-inner reduced" : "services-inner sticky";
  const viewportClass = prefersReduced ? "services-viewport scrollable" : "services-viewport";

  return (
    <section
      id="services"
      className="fold services-section"
      ref={sectionRef}
      style={prefersReduced ? undefined : { height: sectionHeight || "auto" }}
    >
      <div className={innerClass}>
        <div className="services-header">
          <p className="services-pill">{t("services.label")}</p>
          <h2 className="services-title">{t("services.title")}</h2>
          <p className="services-subtitle">{t("services.subtitle")}</p>
        </div>

        <div className={viewportClass} ref={viewportRef}>
          <motion.div
            className="services-strip"
            ref={stripRef}
            style={{ x: prefersReduced ? 0 : stripX }}
          >
            {services.map((service) => (
              <article key={service.id} className="service-card">
                <h3 className="service-card-title">{t(service.titleKey)}</h3>
                <p className="service-card-body">{t(service.bodyKey)}</p>
                <a href={service.href} className="service-card-link">
                  {t("common.viewMore")} <span>→</span>
                </a>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
