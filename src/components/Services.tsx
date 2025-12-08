// src/components/Services.tsx
import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { motion, useScroll, useVelocity, useSpring, useTransform, useMotionValue } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import './Services.css';

const Services: React.FC = () => {
  const { t } = useLanguage();
  
  const stripRef = useRef<HTMLDivElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [maxOffset, setMaxOffset] = useState(0);

  // Calculate max offset for clamping
  useLayoutEffect(() => {
    if (!stripRef.current || !viewportRef.current) return;
    const stripWidth = stripRef.current.scrollWidth;
    const viewportWidth = viewportRef.current.clientWidth;
    const diff = Math.max(stripWidth - viewportWidth, 0);
    setMaxOffset(diff);
  }, []);

  // Velocity-driven horizontal drift
  const { scrollY } = useScroll();
  const rawVelocity = useVelocity(scrollY);

  // Map scroll speed to small drift range (-40px to +40px)
  const drift = useTransform(rawVelocity, [-1500, 1500], [40, -40]);

  const driftSpring = useSpring(drift, {
    stiffness: 140,
    damping: 32,
    mass: 0.7,
  });

  // Respect prefers-reduced-motion
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Clamp drift into real strip bounds [-maxOffset, 0]
  const finalX = prefersReduced
    ? useMotionValue(0)
    : useTransform(driftSpring, (value) => {
        if (maxOffset <= 0) return 0;
        const min = -maxOffset;
        const max = 0;
        return Math.min(Math.max(value, min), max);
      });

  // Services data
  const services = [
    {
      id: "social",
      titleKey: "services.items.0.title",
      bodyKey: "services.items.0.description",
      href: "#service/social-media-marketing",
    },
    {
      id: "content",
      titleKey: "services.items.1.title",
      bodyKey: "services.items.1.description",
      href: "#service/content-video-production",
    },
    {
      id: "ads",
      titleKey: "services.items.2.title",
      bodyKey: "services.items.2.description",
      href: "#service/google-meta-ads",
    },
    {
      id: "webopt",
      titleKey: "services.items.3.title",
      bodyKey: "services.items.3.description",
      href: "#service/website-optimization",
    },
    {
      id: "brand",
      titleKey: "services.items.4.title",
      bodyKey: "services.items.4.description",
      href: "#service/brand-strategy-design",
    },
    {
      id: "ecommerce",
      titleKey: "services.items.5.title",
      bodyKey: "services.items.5.description",
      href: "#service/ecommerce-management",
    },
    {
      id: "webapp",
      titleKey: "services.items.6.title",
      bodyKey: "services.items.6.description",
      href: "#service/web-app-development",
    },
  ];

  return (
    <section id="services" className="fold services-section">
      <div className="services-inner">
        <div className="services-header">
          <p className="services-pill">{t("services.label")}</p>
          <h2 className="services-title">{t("services.title")}</h2>
          <p className="services-subtitle">{t("services.subtitle")}</p>
        </div>

        <div className="services-viewport" ref={viewportRef}>
          <motion.div
            className="services-strip"
            ref={stripRef}
            style={{ x: finalX }}
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
