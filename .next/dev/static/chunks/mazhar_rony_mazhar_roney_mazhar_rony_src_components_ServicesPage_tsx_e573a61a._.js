(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mazhar_rony/mazhar_roney/mazhar_rony/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mazhar_rony/mazhar_roney/mazhar_rony/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mazhar_rony/mazhar_roney/mazhar_rony/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mazhar_rony/mazhar_roney/mazhar_rony/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$lib$2f$i18n$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mazhar_rony/mazhar_roney/mazhar_rony/lib/i18n/LanguageProvider.tsx [app-client] (ecmascript)");
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
var ServicesPage = function() {
    _s();
    var t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$lib$2f$i18n$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])().t;
    var services = [
        {
            id: "social",
            slug: "social-media-marketing",
            titleKey: "services.items.0.title",
            bodyKey: "services.items.0.description",
            detailsKey: "services.details.socialMedia",
            icon: "📱"
        },
        {
            id: "content",
            slug: "content-video-production",
            titleKey: "services.items.1.title",
            bodyKey: "services.items.1.description",
            detailsKey: "services.details.contentVideo",
            icon: "🎥"
        },
        {
            id: "ads",
            slug: "google-meta-ads",
            titleKey: "services.items.2.title",
            bodyKey: "services.items.2.description",
            detailsKey: "services.details.ads",
            icon: "🎯"
        },
        {
            id: "webopt",
            slug: "website-optimization",
            titleKey: "services.items.3.title",
            bodyKey: "services.items.3.description",
            detailsKey: "services.details.website",
            icon: "⚡"
        },
        {
            id: "brand",
            slug: "brand-strategy-design",
            titleKey: "services.items.4.title",
            bodyKey: "services.items.4.description",
            detailsKey: "services.details.brand",
            icon: "✨"
        },
        {
            id: "ecommerce",
            slug: "ecommerce-management",
            titleKey: "services.items.5.title",
            bodyKey: "services.items.5.description",
            detailsKey: "services.details.ecommerce",
            icon: "🛒"
        },
        {
            id: "webapp",
            slug: "web-app-development",
            titleKey: "services.items.6.title",
            bodyKey: "services.items.6.description",
            detailsKey: "services.details.webApp",
            icon: "💻"
        }
    ];
    var containerVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };
    var cardVariants = {
        hidden: {
            opacity: 0,
            y: 30
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        },
        hover: {
            y: -8,
            transition: {
                duration: 0.3
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "services-page-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                className: "services-page-hero",
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.6
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "services-page-pill",
                        children: t("services.label")
                    }, void 0, false, {
                        fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPage.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "services-page-title gradient-text",
                        children: t("services.title")
                    }, void 0, false, {
                        fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPage.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "services-page-subtitle",
                        children: t("services.subtitle")
                    }, void 0, false, {
                        fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPage.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPage.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "services-grid",
                variants: containerVariants,
                initial: "hidden",
                animate: "visible",
                children: services.map(function(service, index) {
                    var skills = t("".concat(service.detailsKey, ".skills"));
                    var description = t("".concat(service.detailsKey, ".description"));
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
                        className: "service-page-card",
                        variants: cardVariants,
                        whileHover: "hover",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "service-card-header",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "service-icon",
                                        children: service.icon
                                    }, void 0, false, {
                                        fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPage.tsx",
                                        lineNumber: 129,
                                        columnNumber: 17
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "service-card-title gradient-text",
                                        children: t(service.titleKey)
                                    }, void 0, false, {
                                        fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPage.tsx",
                                        lineNumber: 130,
                                        columnNumber: 17
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPage.tsx",
                                lineNumber: 128,
                                columnNumber: 15
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "service-card-description",
                                children: description || t(service.bodyKey)
                            }, void 0, false, {
                                fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPage.tsx",
                                lineNumber: 135,
                                columnNumber: 15
                            }, _this),
                            skills && Array.isArray(skills) && skills.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "service-skills-preview",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "skills-preview-title",
                                        children: "Key Capabilities"
                                    }, void 0, false, {
                                        fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPage.tsx",
                                        lineNumber: 141,
                                        columnNumber: 19
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "skills-preview-grid",
                                        children: [
                                            skills.slice(0, 3).map(function(skill, idx) {
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "skill-preview-item",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "skill-preview-icon",
                                                            children: skill.icon
                                                        }, void 0, false, {
                                                            fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPage.tsx",
                                                            lineNumber: 145,
                                                            columnNumber: 25
                                                        }, _this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "skill-preview-name",
                                                            children: skill.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPage.tsx",
                                                            lineNumber: 146,
                                                            columnNumber: 25
                                                        }, _this)
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPage.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 23
                                                }, _this);
                                            }),
                                            skills.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "skill-preview-more",
                                                children: [
                                                    "+",
                                                    skills.length - 3,
                                                    " more"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPage.tsx",
                                                lineNumber: 150,
                                                columnNumber: 23
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPage.tsx",
                                        lineNumber: 142,
                                        columnNumber: 19
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPage.tsx",
                                lineNumber: 140,
                                columnNumber: 17
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/services/".concat(service.slug),
                                className: "service-card-cta",
                                children: [
                                    t("common.viewMore"),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "→"
                                    }, void 0, false, {
                                        fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPage.tsx",
                                        lineNumber: 162,
                                        columnNumber: 40
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPage.tsx",
                                lineNumber: 158,
                                columnNumber: 15
                            }, _this)
                        ]
                    }, service.id, true, {
                        fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPage.tsx",
                        lineNumber: 122,
                        columnNumber: 13
                    }, _this);
                })
            }, void 0, false, {
                fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPage.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                className: "services-page-cta",
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: true
                },
                transition: {
                    duration: 0.6,
                    delay: 0.3
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "cta-title gradient-text",
                        children: t("services.detail.cta.title") || "Let's Stop Wasting Time"
                    }, void 0, false, {
                        fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPage.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "cta-description",
                        children: t("services.detail.cta.description") || "Your competitors are already doing this. Every day you wait, you're leaving money on the table. Let's talk."
                    }, void 0, false, {
                        fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPage.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cta-buttons",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                className: "cta-btn-primary",
                                children: t("services.detail.cta.primary") || "I'm Ready, Let's Talk"
                            }, void 0, false, {
                                fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPage.tsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "cta-btn-secondary",
                                children: t("common.viewMore") || "View More"
                            }, void 0, false, {
                                fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPage.tsx",
                                lineNumber: 186,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPage.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPage.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPage.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, _this);
};
_s(ServicesPage, "ot2YhC7pP10gRrIouBKIa40vomw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$lib$2f$i18n$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = ServicesPage;
const __TURBOPACK__default__export__ = ServicesPage;
var _c;
__turbopack_context__.k.register(_c, "ServicesPage");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=mazhar_rony_mazhar_roney_mazhar_rony_src_components_ServicesPage_tsx_e573a61a._.js.map