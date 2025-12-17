// src/components/Services.tsx
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import MobileServices from "./MobileServices";
import {
  SocialMediaIcon,
  VideoIcon,
  TargetIcon,
  LightningIcon,
  SparkleIcon,
  ShoppingIcon,
  CodeIcon,
} from "./ServicesPageIcons";
import "./Services.css";

const Services: React.FC = () => {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [prefersReduced, setPrefersReduced] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // keep language dependency (was used for measurement previously)
  void language;

  // Respect prefers-reduced-motion
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const services = [
    { id: "social", titleKey: "services.items.0.title", bodyKey: "services.items.0.description", href: "/services/social-media-marketing", icon: SocialMediaIcon, color: "#6366f1" },
    { id: "content", titleKey: "services.items.1.title", bodyKey: "services.items.1.description", href: "/services/content-video-production", icon: VideoIcon, color: "#a855f7" },
    { id: "ads", titleKey: "services.items.2.title", bodyKey: "services.items.2.description", href: "/services/google-meta-ads", icon: TargetIcon, color: "#ec4899" },
    { id: "webopt", titleKey: "services.items.3.title", bodyKey: "services.items.3.description", href: "/services/website-optimization", icon: LightningIcon, color: "#f59e0b" },
    { id: "brand", titleKey: "services.items.4.title", bodyKey: "services.items.4.description", href: "/services/brand-strategy-design", icon: SparkleIcon, color: "#10b981" },
    { id: "ecommerce", titleKey: "services.items.5.title", bodyKey: "services.items.5.description", href: "/services/ecommerce-management", icon: ShoppingIcon, color: "#06b6d4" },
    { id: "webapp", titleKey: "services.items.6.title", bodyKey: "services.items.6.description", href: "/services/web-app-development", icon: CodeIcon, color: "#8b5cf6" },
  ];

  const containerVariants = prefersReduced
    ? undefined
    : {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
      };

  const cardVariants = prefersReduced
    ? undefined
    : {
        hidden: { opacity: 0, y: 14 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
        },
      };

  // Render mobile component on mobile devices
  if (isMobile) {
    return <MobileServices services={services} />;
  }

  // Desktop version (unchanged)
  return (
    <section
      id="services"
      className="fold services-section"
      ref={sectionRef}
    >
      <div className="services-inner">
        <div className="services-header">
          <p className="services-pill">{t("services.label")}</p>
          <h2 className="services-title">{t("services.title")}</h2>
          <p className="services-subtitle">{t("services.subtitle")}</p>
        </div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial={prefersReduced ? false : "hidden"}
          whileInView={prefersReduced ? undefined : "visible"}
          viewport={{ once: true, margin: "-10% 0px" }}
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
            <motion.article
              key={service.id}
              className="service-card"
              variants={cardVariants}
              whileHover={prefersReduced ? undefined : { y: -6 }}
              style={{ '--accent-color': service.color } as React.CSSProperties}
            >
              <div className="service-card-icon" aria-hidden="true">
                <IconComponent size={28} />
              </div>
              <h3 className="service-card-title">{t(service.titleKey)}</h3>
              <p className="service-card-body">{t(service.bodyKey)}</p>
              <a href={service.href} className="service-card-link">
                {t("common.viewMore")} <span>→</span>
              </a>
            </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
