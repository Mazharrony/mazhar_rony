(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/mazhar_rony/mazhar_roney/mazhar_rony/lib/services/serviceData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Service data configuration for detail pages
__turbopack_context__.s([
    "isValidServiceSlug",
    ()=>isValidServiceSlug,
    "serviceData",
    ()=>serviceData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mazhar_rony/mazhar_roney/mazhar_rony/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
var serviceData = {
    'social-media-marketing': {
        id: 'social',
        titleKey: 'services.items.0.title',
        taglineKey: 'services.detail.social.tagline',
        overviewKey: 'services.detail.social.overview',
        icon: '📱'
    },
    'content-video-production': {
        id: 'content',
        titleKey: 'services.items.1.title',
        taglineKey: 'services.detail.content.tagline',
        overviewKey: 'services.detail.content.overview',
        icon: '🎥'
    },
    'google-meta-ads': {
        id: 'ads',
        titleKey: 'services.items.2.title',
        taglineKey: 'services.detail.ads.tagline',
        overviewKey: 'services.detail.ads.overview',
        icon: '🎯'
    },
    'website-optimization': {
        id: 'webopt',
        titleKey: 'services.items.3.title',
        taglineKey: 'services.detail.webopt.tagline',
        overviewKey: 'services.detail.webopt.overview',
        icon: '⚡'
    },
    'brand-strategy-design': {
        id: 'brand',
        titleKey: 'services.items.4.title',
        taglineKey: 'services.detail.brand.tagline',
        overviewKey: 'services.detail.brand.overview',
        icon: '✨'
    },
    'ecommerce-management': {
        id: 'ecommerce',
        titleKey: 'services.items.5.title',
        taglineKey: 'services.detail.ecommerce.tagline',
        overviewKey: 'services.detail.ecommerce.overview',
        icon: '🛒'
    },
    'web-app-development': {
        id: 'webapp',
        titleKey: 'services.items.6.title',
        taglineKey: 'services.detail.webapp.tagline',
        overviewKey: 'services.detail.webapp.overview',
        icon: '💻'
    }
};
var isValidServiceSlug = function(slug) {
    return slug in serviceData;
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPageClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mazhar_rony/mazhar_roney/mazhar_rony/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mazhar_rony/mazhar_roney/mazhar_rony/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mazhar_rony/mazhar_roney/mazhar_rony/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mazhar_rony/mazhar_roney/mazhar_rony/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mazhar_rony/mazhar_roney/mazhar_rony/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mazhar_rony/mazhar_roney/mazhar_rony/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mazhar_rony/mazhar_roney/mazhar_rony/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mazhar_rony/mazhar_roney/mazhar_rony/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$lib$2f$i18n$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mazhar_rony/mazhar_roney/mazhar_rony/lib/i18n/LanguageProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$lib$2f$services$2f$serviceData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mazhar_rony/mazhar_roney/mazhar_rony/lib/services/serviceData.ts [app-client] (ecmascript)");
;
;
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
var ServicesPageClient = function() {
    _s();
    var t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$lib$2f$i18n$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])().t;
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), 2), hoveredService = _useState[0], setHoveredService = _useState[1];
    // Map service IDs to detail keys
    var serviceDetailMap = {
        social: {
            titleKey: 'services.details.socialMedia.title',
            descKey: 'services.details.socialMedia.description',
            skillsKey: 'services.details.socialMedia.skills'
        },
        content: {
            titleKey: 'services.details.contentVideo.title',
            descKey: 'services.details.contentVideo.description',
            skillsKey: 'services.details.contentVideo.skills'
        },
        ads: {
            titleKey: 'services.details.ads.title',
            descKey: 'services.details.ads.description',
            skillsKey: 'services.details.ads.skills'
        },
        webopt: {
            titleKey: 'services.details.website.title',
            descKey: 'services.details.website.description',
            skillsKey: 'services.details.website.skills'
        },
        brand: {
            titleKey: 'services.details.brand.title',
            descKey: 'services.details.brand.description',
            skillsKey: 'services.details.brand.skills'
        },
        ecommerce: {
            titleKey: 'services.details.ecommerce.title',
            descKey: 'services.details.ecommerce.description',
            skillsKey: 'services.details.ecommerce.skills'
        },
        webapp: {
            titleKey: 'services.details.webApp.title',
            descKey: 'services.details.webApp.description',
            skillsKey: 'services.details.webApp.skills'
        }
    };
    var services = Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$lib$2f$services$2f$serviceData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serviceData"]).map(function(param) {
        var _param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), slug = _param[0], data = _param[1];
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
            slug: slug
        }, data), {
            detail: serviceDetailMap[data.id]
        });
    });
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
    var itemVariants = {
        hidden: {
            opacity: 0,
            y: 30
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [
                    0.22,
                    1,
                    0.36,
                    1
                ]
            }
        }
    };
    var cardVariants = {
        hidden: {
            opacity: 0,
            y: 40,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.7,
                ease: [
                    0.22,
                    1,
                    0.36,
                    1
                ]
            }
        },
        hover: {
            y: -8,
            scale: 1.02,
            transition: {
                duration: 0.4,
                ease: [
                    0.22,
                    1,
                    0.36,
                    1
                ]
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "services-page",
        initial: "hidden",
        animate: "visible",
        variants: containerVariants,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                className: "services-hero",
                variants: itemVariants,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "services-hero-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                            className: "services-badge",
                            variants: itemVariants,
                            children: t('services.label')
                        }, void 0, false, {
                            fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPageClient.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                            className: "services-hero-title gradient-text",
                            variants: itemVariants,
                            children: t('services.title')
                        }, void 0, false, {
                            fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPageClient.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                            className: "services-hero-subtitle",
                            variants: itemVariants,
                            children: t('services.subtitle')
                        }, void 0, false, {
                            fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPageClient.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPageClient.tsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, _this)
            }, void 0, false, {
                fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPageClient.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                className: "services-grid-section",
                variants: containerVariants,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "services-grid-container",
                    children: services.map(function(service, index) {
                        var _service_detail, _service_detail1, _service_detail2, _skills_;
                        var title = t(((_service_detail = service.detail) === null || _service_detail === void 0 ? void 0 : _service_detail.titleKey) || service.titleKey);
                        var description = t(((_service_detail1 = service.detail) === null || _service_detail1 === void 0 ? void 0 : _service_detail1.descKey) || '');
                        var skills = t(((_service_detail2 = service.detail) === null || _service_detail2 === void 0 ? void 0 : _service_detail2.skillsKey) || '') || [];
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
                            className: "service-card-modern",
                            variants: cardVariants,
                            initial: "hidden",
                            whileInView: "visible",
                            viewport: {
                                once: true,
                                margin: '-100px'
                            },
                            whileHover: "hover",
                            onHoverStart: function() {
                                return setHoveredService(service.id);
                            },
                            onHoverEnd: function() {
                                return setHoveredService(null);
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "service-card-header",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "service-icon-wrapper",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "service-icon",
                                                children: service.icon
                                            }, void 0, false, {
                                                fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPageClient.tsx",
                                                lineNumber: 147,
                                                columnNumber: 21
                                            }, _this)
                                        }, void 0, false, {
                                            fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPageClient.tsx",
                                            lineNumber: 146,
                                            columnNumber: 19
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "service-card-number",
                                            children: [
                                                "0",
                                                index + 1
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPageClient.tsx",
                                            lineNumber: 149,
                                            columnNumber: 19
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPageClient.tsx",
                                    lineNumber: 145,
                                    columnNumber: 17
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "service-card-content",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "service-card-title gradient-text",
                                            children: title
                                        }, void 0, false, {
                                            fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPageClient.tsx",
                                            lineNumber: 153,
                                            columnNumber: 19
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "service-card-description",
                                            children: description
                                        }, void 0, false, {
                                            fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPageClient.tsx",
                                            lineNumber: 154,
                                            columnNumber: 19
                                        }, _this),
                                        skills && Array.isArray(skills) && skills.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "service-skills-preview",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "skills-preview-grid",
                                                children: [
                                                    skills.slice(0, 3).map(function(skill, skillIndex) {
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "skill-preview-item",
                                                            style: {
                                                                '--accent': skill.accent
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "skill-preview-icon",
                                                                    children: skill.icon
                                                                }, void 0, false, {
                                                                    fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPageClient.tsx",
                                                                    lineNumber: 165,
                                                                    columnNumber: 29
                                                                }, _this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "skill-preview-title",
                                                                    children: skill.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPageClient.tsx",
                                                                    lineNumber: 166,
                                                                    columnNumber: 29
                                                                }, _this)
                                                            ]
                                                        }, skillIndex, true, {
                                                            fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPageClient.tsx",
                                                            lineNumber: 160,
                                                            columnNumber: 27
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
                                                        fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPageClient.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 27
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPageClient.tsx",
                                                lineNumber: 158,
                                                columnNumber: 23
                                            }, _this)
                                        }, void 0, false, {
                                            fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPageClient.tsx",
                                            lineNumber: 157,
                                            columnNumber: 21
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPageClient.tsx",
                                    lineNumber: 152,
                                    columnNumber: 17
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "service-card-footer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/services/".concat(service.slug),
                                        className: "service-card-link",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: t('common.viewMore')
                                            }, void 0, false, {
                                                fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPageClient.tsx",
                                                lineNumber: 184,
                                                columnNumber: 21
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "20",
                                                height: "20",
                                                viewBox: "0 0 20 20",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M7.5 15L12.5 10L7.5 5",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPageClient.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 23
                                                }, _this)
                                            }, void 0, false, {
                                                fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPageClient.tsx",
                                                lineNumber: 185,
                                                columnNumber: 21
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPageClient.tsx",
                                        lineNumber: 180,
                                        columnNumber: 19
                                    }, _this)
                                }, void 0, false, {
                                    fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPageClient.tsx",
                                    lineNumber: 179,
                                    columnNumber: 17
                                }, _this),
                                skills.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "service-card-glow ".concat(hoveredService === service.id ? 'active' : ''),
                                    style: {
                                        '--accent': ((_skills_ = skills[0]) === null || _skills_ === void 0 ? void 0 : _skills_.accent) || '#6366f1'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPageClient.tsx",
                                    lineNumber: 204,
                                    columnNumber: 19
                                }, _this)
                            ]
                        }, service.slug, true, {
                            fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPageClient.tsx",
                            lineNumber: 134,
                            columnNumber: 15
                        }, _this);
                    })
                }, void 0, false, {
                    fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPageClient.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, _this)
            }, void 0, false, {
                fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPageClient.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                className: "services-cta-section",
                variants: itemVariants,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "services-cta-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                            className: "services-cta-title gradient-text",
                            variants: itemVariants,
                            children: "Ready to Transform Your Digital Presence?"
                        }, void 0, false, {
                            fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPageClient.tsx",
                            lineNumber: 220,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                            className: "services-cta-description",
                            variants: itemVariants,
                            children: "Let's discuss how we can help you achieve your goals. Get in touch and let's build something extraordinary together."
                        }, void 0, false, {
                            fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPageClient.tsx",
                            lineNumber: 223,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "services-cta-buttons",
                            variants: itemVariants,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/contact",
                                    className: "cta-button-primary",
                                    children: "Get Started"
                                }, void 0, false, {
                                    fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPageClient.tsx",
                                    lineNumber: 227,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/#portfolio",
                                    className: "cta-button-secondary",
                                    children: "View Work"
                                }, void 0, false, {
                                    fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPageClient.tsx",
                                    lineNumber: 230,
                                    columnNumber: 13
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPageClient.tsx",
                            lineNumber: 226,
                            columnNumber: 11
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPageClient.tsx",
                    lineNumber: 219,
                    columnNumber: 9
                }, _this)
            }, void 0, false, {
                fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPageClient.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/mazhar_rony/mazhar_roney/mazhar_rony/src/components/ServicesPageClient.tsx",
        lineNumber: 104,
        columnNumber: 5
    }, _this);
};
_s(ServicesPageClient, "eXL9HAnzeOKbQs7Dsqt5/q4Y59c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$lib$2f$i18n$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = ServicesPageClient;
const __TURBOPACK__default__export__ = ServicesPageClient;
var _c;
__turbopack_context__.k.register(_c, "ServicesPageClient");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=mazhar_rony_mazhar_roney_mazhar_rony_01d1c614._.js.map