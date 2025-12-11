(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/DatePicker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
var DatePicker = function(param) {
    var id = param.id, name = param.name, value = param.value, onChange = param.onChange, min = param.min, required = param.required, disabled = param.disabled, ariaRequired = param['aria-required'], ariaInvalid = param['aria-invalid'];
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), isOpen = _useState[0], setIsOpen = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date()), 2), currentMonth = _useState1[0], setCurrentMonth = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(value ? new Date(value) : null), 2), selectedDate = _useState2[0], setSelectedDate = _useState2[1];
    var containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var minDate = min ? new Date(min) : new Date();
    minDate.setHours(0, 0, 0, 0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DatePicker.useEffect": function() {
            if (value) {
                setSelectedDate(new Date(value));
            }
        }
    }["DatePicker.useEffect"], [
        value
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DatePicker.useEffect": function() {
            var handleClickOutside = {
                "DatePicker.useEffect.handleClickOutside": function(event) {
                    if (containerRef.current && !containerRef.current.contains(event.target)) {
                        setIsOpen(false);
                    }
                }
            }["DatePicker.useEffect.handleClickOutside"];
            if (isOpen) {
                document.addEventListener('mousedown', handleClickOutside);
            }
            return ({
                "DatePicker.useEffect": function() {
                    document.removeEventListener('mousedown', handleClickOutside);
                }
            })["DatePicker.useEffect"];
        }
    }["DatePicker.useEffect"], [
        isOpen
    ]);
    var getDaysInMonth = function(date) {
        var year = date.getFullYear();
        var month = date.getMonth();
        var firstDay = new Date(year, month, 1);
        var lastDay = new Date(year, month + 1, 0);
        var daysInMonth = lastDay.getDate();
        var startingDayOfWeek = firstDay.getDay();
        var days = [];
        // Add empty cells for days before the first day of the month
        for(var i = 0; i < startingDayOfWeek; i++){
            days.push(null);
        }
        // Add all days of the month
        for(var day = 1; day <= daysInMonth; day++){
            days.push(new Date(year, month, day));
        }
        return days;
    };
    var formatDate = function(date) {
        if (!date) return '';
        var year = date.getFullYear();
        var month = String(date.getMonth() + 1).padStart(2, '0');
        var day = String(date.getDate()).padStart(2, '0');
        return "".concat(year, "-").concat(month, "-").concat(day);
    };
    var formatDisplayDate = function(date) {
        if (!date) return '';
        var month = String(date.getMonth() + 1).padStart(2, '0');
        var day = String(date.getDate()).padStart(2, '0');
        var year = date.getFullYear();
        return "".concat(month, " / ").concat(day, " / ").concat(year);
    };
    var handleDateSelect = function(date) {
        if (date < minDate) return;
        setSelectedDate(date);
        onChange(formatDate(date));
        setIsOpen(false);
    };
    var handlePrevMonth = function() {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
    };
    var handleNextMonth = function() {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
    };
    var handleToday = function() {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        if (today >= minDate) {
            handleDateSelect(today);
        }
    };
    var handleClear = function() {
        setSelectedDate(null);
        onChange('');
        setIsOpen(false);
    };
    var days = getDaysInMonth(currentMonth);
    var monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    var dayNames = [
        'Su',
        'Mo',
        'Tu',
        'We',
        'Th',
        'Fr',
        'Sa'
    ];
    var isDateDisabled = function(date) {
        return date < minDate;
    };
    var isDateSelected = function(date) {
        if (!selectedDate) return false;
        return date.getDate() === selectedDate.getDate() && date.getMonth() === selectedDate.getMonth() && date.getFullYear() === selectedDate.getFullYear();
    };
    var isToday = function(date) {
        var today = new Date();
        return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "custom-date-picker",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "hidden",
                id: id,
                name: name,
                value: value,
                required: required,
                disabled: disabled,
                "aria-required": ariaRequired,
                "aria-invalid": ariaInvalid
            }, void 0, false, {
                fileName: "[project]/src/components/DatePicker.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "date-picker-input ".concat(isOpen ? 'open' : '', " ").concat(disabled ? 'disabled' : ''),
                onClick: function() {
                    return !disabled && setIsOpen(!isOpen);
                },
                role: "button",
                tabIndex: disabled ? -1 : 0,
                onKeyDown: function(e) {
                    if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
                        e.preventDefault();
                        setIsOpen(!isOpen);
                    }
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: selectedDate ? 'date-value' : 'date-placeholder',
                        children: selectedDate ? formatDisplayDate(selectedDate) : 'mm / dd / yyyy'
                    }, void 0, false, {
                        fileName: "[project]/src/components/DatePicker.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "calendar-icon",
                        width: "20",
                        height: "20",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "3",
                                y: "4",
                                width: "18",
                                height: "18",
                                rx: "2",
                                ry: "2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DatePicker.tsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "16",
                                y1: "2",
                                x2: "16",
                                y2: "6"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DatePicker.tsx",
                                lineNumber: 198,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "8",
                                y1: "2",
                                x2: "8",
                                y2: "6"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DatePicker.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "3",
                                y1: "10",
                                x2: "21",
                                y2: "10"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DatePicker.tsx",
                                lineNumber: 200,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DatePicker.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DatePicker.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "date-picker-calendar",
                    initial: {
                        opacity: 0,
                        y: -10,
                        scale: 0.95
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        y: -10,
                        scale: 0.95
                    },
                    transition: {
                        duration: 0.2,
                        ease: [
                            0.16,
                            1,
                            0.3,
                            1
                        ]
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "calendar-header",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "calendar-nav-button",
                                    onClick: handlePrevMonth,
                                    "aria-label": "Previous month",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                            points: "15 18 9 12 15 6"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DatePicker.tsx",
                                            lineNumber: 221,
                                            columnNumber: 19
                                        }, _this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DatePicker.tsx",
                                        lineNumber: 220,
                                        columnNumber: 17
                                    }, _this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DatePicker.tsx",
                                    lineNumber: 214,
                                    columnNumber: 15
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "calendar-month-year",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "calendar-month",
                                            children: monthNames[currentMonth.getMonth()]
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DatePicker.tsx",
                                            lineNumber: 225,
                                            columnNumber: 17
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "calendar-year",
                                            children: currentMonth.getFullYear()
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DatePicker.tsx",
                                            lineNumber: 226,
                                            columnNumber: 17
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/DatePicker.tsx",
                                    lineNumber: 224,
                                    columnNumber: 15
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "calendar-nav-button",
                                    onClick: handleNextMonth,
                                    "aria-label": "Next month",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                            points: "9 18 15 12 9 6"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DatePicker.tsx",
                                            lineNumber: 235,
                                            columnNumber: 19
                                        }, _this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DatePicker.tsx",
                                        lineNumber: 234,
                                        columnNumber: 17
                                    }, _this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DatePicker.tsx",
                                    lineNumber: 228,
                                    columnNumber: 15
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/DatePicker.tsx",
                            lineNumber: 213,
                            columnNumber: 13
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "calendar-weekdays",
                            children: dayNames.map(function(day) {
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "calendar-weekday",
                                    children: day
                                }, day, false, {
                                    fileName: "[project]/src/components/DatePicker.tsx",
                                    lineNumber: 242,
                                    columnNumber: 17
                                }, _this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/DatePicker.tsx",
                            lineNumber: 240,
                            columnNumber: 13
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "calendar-days",
                            children: days.map(function(date, index) {
                                if (!date) {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "calendar-day empty"
                                    }, "empty-".concat(index), false, {
                                        fileName: "[project]/src/components/DatePicker.tsx",
                                        lineNumber: 251,
                                        columnNumber: 26
                                    }, _this);
                                }
                                var disabled = isDateDisabled(date);
                                var selected = isDateSelected(date);
                                var today = isToday(date);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "calendar-day ".concat(disabled ? 'disabled' : '', " ").concat(selected ? 'selected' : '', " ").concat(today ? 'today' : ''),
                                    onClick: function() {
                                        return !disabled && handleDateSelect(date);
                                    },
                                    disabled: disabled,
                                    "aria-label": "Select ".concat(formatDisplayDate(date)),
                                    children: date.getDate()
                                }, date.toISOString(), false, {
                                    fileName: "[project]/src/components/DatePicker.tsx",
                                    lineNumber: 259,
                                    columnNumber: 19
                                }, _this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/DatePicker.tsx",
                            lineNumber: 248,
                            columnNumber: 13
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "calendar-footer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "calendar-action-button",
                                    onClick: handleClear,
                                    children: "Clear"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DatePicker.tsx",
                                    lineNumber: 274,
                                    columnNumber: 15
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "calendar-action-button",
                                    onClick: handleToday,
                                    disabled: new Date() < minDate,
                                    children: "Today"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DatePicker.tsx",
                                    lineNumber: 277,
                                    columnNumber: 15
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/DatePicker.tsx",
                            lineNumber: 273,
                            columnNumber: 13
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/DatePicker.tsx",
                    lineNumber: 206,
                    columnNumber: 11
                }, _this)
            }, void 0, false, {
                fileName: "[project]/src/components/DatePicker.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DatePicker.tsx",
        lineNumber: 160,
        columnNumber: 5
    }, _this);
};
_s(DatePicker, "Qc3/I4GOOD2xeKOuuSPDacLbNgE=");
_c = DatePicker;
const __TURBOPACK__default__export__ = DatePicker;
var _c;
__turbopack_context__.k.register(_c, "DatePicker");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Contact.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n/LanguageProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DatePicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DatePicker.tsx [app-client] (ecmascript)");
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
var Contact = function() {
    _s();
    var containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(containerRef, {
        once: false,
        margin: "-100px"
    });
    var t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])().t;
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), submitted = _useState[0], setSubmitted = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), isAnimating = _useState1[0], setIsAnimating = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), 2), brief = _useState2[0], setBrief = _useState2[1];
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), aiLoading = _useState3[0], setAiLoading = _useState3[1];
    var _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), aiError = _useState4[0], setAiError = _useState4[1];
    var _useState5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({}), 2), errors = _useState5[0], setErrors = _useState5[1];
    // Meeting form states
    var _useState6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), meetingSubmitted = _useState6[0], setMeetingSubmitted = _useState6[1];
    var _useState7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), meetingAnimating = _useState7[0], setMeetingAnimating = _useState7[1];
    var _useState8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({}), 2), meetingErrors = _useState8[0], setMeetingErrors = _useState8[1];
    var _useState9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''), 2), meetingDate = _useState9[0], setMeetingDate = _useState9[1];
    var _useState10 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''), 2), meetingTimezone = _useState10[0], setMeetingTimezone = _useState10[1];
    var validateForm = function(name, email, message) {
        var newErrors = {};
        // Validate name
        if (!name || name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        } else if (name.trim().length > 100) {
            newErrors.name = 'Name must be less than 100 characters';
        }
        // Validate email
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        // Validate message
        if (!message || message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        } else if (message.trim().length > 5000) {
            newErrors.message = 'Message must be less than 5000 characters';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    var handleSubmit = function(e) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
            var formData, name, email, message, website, res, errorData, data, err;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                switch(_state.label){
                    case 0:
                        e.preventDefault();
                        formData = new FormData(e.target);
                        name = formData.get('name') || '';
                        email = formData.get('email') || '';
                        message = formData.get('message') || '';
                        website = formData.get('website'); // Honeypot field
                        // Check honeypot (spam protection)
                        if (website) {
                            // Bot detected, silently fail
                            return [
                                2
                            ];
                        }
                        // Validate form
                        if (!validateForm(name, email, message)) {
                            return [
                                2
                            ];
                        }
                        setIsAnimating(true);
                        setAiLoading(true);
                        setAiError(false);
                        setBrief(null);
                        setErrors({});
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            6,
                            7,
                            8
                        ]);
                        return [
                            4,
                            fetch('/api/brief', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    name: name.trim(),
                                    email: email.trim(),
                                    message: message.trim()
                                })
                            })
                        ];
                    case 2:
                        res = _state.sent();
                        if (!!res.ok) return [
                            3,
                            4
                        ];
                        return [
                            4,
                            res.json()["catch"](function() {
                                return {};
                            })
                        ];
                    case 3:
                        errorData = _state.sent();
                        throw new Error(errorData.error || 'Request failed');
                    case 4:
                        return [
                            4,
                            res.json()
                        ];
                    case 5:
                        data = _state.sent();
                        if (data.brief) {
                            setBrief(data.brief);
                        } else {
                            setAiError(true);
                        }
                        return [
                            3,
                            8
                        ];
                    case 6:
                        err = _state.sent();
                        setAiError(true);
                        if ("TURBOPACK compile-time truthy", 1) {
                            console.error('Form submission error:', err);
                        }
                        return [
                            3,
                            8
                        ];
                    case 7:
                        setAiLoading(false);
                        setSubmitted(true);
                        setIsAnimating(false);
                        setTimeout(function() {
                            setSubmitted(false);
                            e.target.reset();
                            setBrief(null);
                            setAiError(false);
                            setErrors({});
                        }, 6000);
                        return [
                            7
                        ];
                    case 8:
                        return [
                            2
                        ];
                }
            });
        })();
    };
    var validateMeetingForm = function(name, email, date, time, context) {
        var newErrors = {};
        // Validate name
        if (!name || name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }
        // Validate email
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        // Validate date
        if (!date) {
            newErrors.date = 'Please select a preferred date';
        } else {
            var selectedDate = new Date(date);
            var today = new Date();
            today.setHours(0, 0, 0, 0);
            if (selectedDate < today) {
                newErrors.date = 'Please select a future date';
            }
        }
        // Validate time
        if (!time) {
            newErrors.time = 'Please select a preferred time';
        }
        // Validate context
        if (!context || context.trim().length < 10) {
            newErrors.context = 'Please provide meeting context (at least 10 characters)';
        }
        setMeetingErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    var handleMeetingSubmit = function(e) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
            var formData, name, email, date, time, timezone, context, duration, website, emailBody, response, mailtoLink, err, mailtoLink1;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                switch(_state.label){
                    case 0:
                        e.preventDefault();
                        formData = new FormData(e.target);
                        name = formData.get('meeting-name') || '';
                        email = formData.get('meeting-email') || '';
                        date = meetingDate || formData.get('meeting-date') || '';
                        time = formData.get('meeting-time') || '';
                        timezone = meetingTimezone || formData.get('meeting-timezone') || '';
                        context = formData.get('meeting-context') || '';
                        duration = formData.get('meeting-duration') || '60min';
                        website = formData.get('website-meeting'); // Honeypot field
                        // Check honeypot
                        if (website) {
                            return [
                                2
                            ];
                        }
                        // Validate form
                        if (!validateMeetingForm(name, email, date, time, context)) {
                            return [
                                2
                            ];
                        }
                        setMeetingAnimating(true);
                        setMeetingErrors({});
                        // Format email content
                        emailBody = "\nNew Meeting Request\n\nName: ".concat(name, "\nEmail: ").concat(email, "\nPreferred Date: ").concat(date, "\nPreferred Time: ").concat(time, "\nTimezone: ").concat(timezone || 'Not specified', "\nDuration: ").concat(duration, "\nMeeting Context:\n").concat(context, "\n\n---\nThis meeting request was submitted from the contact page.\n    ").trim();
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            3,
                            4,
                            5
                        ]);
                        return [
                            4,
                            fetch('/api/meeting', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    name: name.trim(),
                                    email: email.trim(),
                                    date: date,
                                    time: time,
                                    timezone: timezone.trim(),
                                    duration: duration,
                                    context: context.trim()
                                })
                            })
                        ];
                    case 2:
                        response = _state.sent();
                        if (response.ok) {
                            // API request successful
                            setMeetingSubmitted(true);
                        } else {
                            // API failed, use mailto as fallback
                            mailtoLink = "mailto:hello@meetmazhar.site?subject=Meeting Request - ".concat(encodeURIComponent(name), "&body=").concat(encodeURIComponent(emailBody));
                            window.location.href = mailtoLink;
                            setMeetingSubmitted(true);
                        }
                        return [
                            3,
                            5
                        ];
                    case 3:
                        err = _state.sent();
                        // API error, use mailto as fallback
                        mailtoLink1 = "mailto:hello@meetmazhar.site?subject=Meeting Request - ".concat(encodeURIComponent(name), "&body=").concat(encodeURIComponent(emailBody));
                        window.location.href = mailtoLink1;
                        setMeetingSubmitted(true);
                        if ("TURBOPACK compile-time truthy", 1) {
                            console.error('Meeting form submission error:', err);
                        }
                        return [
                            3,
                            5
                        ];
                    case 4:
                        setMeetingAnimating(false);
                        setTimeout(function() {
                            setMeetingSubmitted(false);
                            e.target.reset();
                            setMeetingErrors({});
                            setMeetingDate('');
                            setMeetingTimezone('');
                        }, 6000);
                        return [
                            7
                        ];
                    case 5:
                        return [
                            2
                        ];
                }
            });
        })();
    };
    var contactMethods = [
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                fill: "currentColor",
                width: "24",
                height: "24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                }, void 0, false, {
                    fileName: "[project]/src/components/Contact.tsx",
                    lineNumber: 273,
                    columnNumber: 11
                }, _this)
            }, void 0, false, {
                fileName: "[project]/src/components/Contact.tsx",
                lineNumber: 272,
                columnNumber: 9
            }, _this),
            label: t('contact.methods.email.label'),
            value: 'hello@meetmazhar.site',
            href: 'mailto:hello@meetmazhar.site'
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                fill: "currentColor",
                width: "24",
                height: "24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                }, void 0, false, {
                    fileName: "[project]/src/components/Contact.tsx",
                    lineNumber: 283,
                    columnNumber: 11
                }, _this)
            }, void 0, false, {
                fileName: "[project]/src/components/Contact.tsx",
                lineNumber: 282,
                columnNumber: 9
            }, _this),
            label: t('contact.methods.whatsapp.label'),
            value: '+971 50 721 7156',
            href: 'https://wa.me/971507217156?text=Hi%20Mazhar%2C%20I%27d%20like%20to%20talk%20about%20a%20project.'
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                fill: "currentColor",
                width: "24",
                height: "24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                }, void 0, false, {
                    fileName: "[project]/src/components/Contact.tsx",
                    lineNumber: 293,
                    columnNumber: 11
                }, _this)
            }, void 0, false, {
                fileName: "[project]/src/components/Contact.tsx",
                lineNumber: 292,
                columnNumber: 9
            }, _this),
            label: t('contact.methods.phone.label'),
            value: '+971 50 721 7156',
            href: 'tel:+971507217156'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "contact-section",
        ref: containerRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "contact-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "contact-header",
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: isInView ? {
                        opacity: 1,
                        y: 0
                    } : {
                        opacity: 0,
                        y: 30
                    },
                    transition: {
                        duration: 0.6,
                        ease: [
                            0.16,
                            1,
                            0.3,
                            1
                        ]
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            className: "contact-label-button",
                            initial: {
                                opacity: 0,
                                scale: 0.9
                            },
                            animate: isInView ? {
                                opacity: 1,
                                scale: 1
                            } : {
                                opacity: 0,
                                scale: 0.9
                            },
                            transition: {
                                delay: 0.1,
                                duration: 0.5
                            },
                            children: t('contact.label')
                        }, void 0, false, {
                            fileName: "[project]/src/components/Contact.tsx",
                            lineNumber: 312,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                            className: "contact-title",
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: isInView ? {
                                opacity: 1,
                                y: 0
                            } : {
                                opacity: 0,
                                y: 20
                            },
                            transition: {
                                delay: 0.2,
                                duration: 0.6,
                                ease: [
                                    0.16,
                                    1,
                                    0.3,
                                    1
                                ]
                            },
                            children: t('contact.title')
                        }, void 0, false, {
                            fileName: "[project]/src/components/Contact.tsx",
                            lineNumber: 321,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                            className: "contact-subtitle",
                            initial: {
                                opacity: 0
                            },
                            animate: isInView ? {
                                opacity: 1
                            } : {
                                opacity: 0
                            },
                            transition: {
                                delay: 0.3,
                                duration: 0.5
                            },
                            children: t('contact.subtitle')
                        }, void 0, false, {
                            fileName: "[project]/src/components/Contact.tsx",
                            lineNumber: 330,
                            columnNumber: 11
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Contact.tsx",
                    lineNumber: 306,
                    columnNumber: 9
                }, _this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "contact-content-grid",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "contact-form-card",
                            initial: {
                                opacity: 0,
                                y: 40
                            },
                            animate: isInView ? {
                                opacity: 1,
                                y: 0
                            } : {
                                opacity: 0,
                                y: 40
                            },
                            transition: {
                                delay: 0.4,
                                duration: 0.6,
                                ease: [
                                    0.16,
                                    1,
                                    0.3,
                                    1
                                ]
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleSubmit,
                                    className: "contact-form",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            name: "website",
                                            style: {
                                                display: 'none'
                                            },
                                            tabIndex: -1,
                                            autoComplete: "off",
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Contact.tsx",
                                            lineNumber: 351,
                                            columnNumber: 15
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "name",
                                                    children: t('contact.form.name')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Contact.tsx",
                                                    lineNumber: 361,
                                                    columnNumber: 17
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    id: "name",
                                                    name: "name",
                                                    placeholder: t('contact.form.namePlaceholder'),
                                                    required: true,
                                                    disabled: isAnimating || submitted,
                                                    "aria-required": "true",
                                                    "aria-invalid": errors.name ? 'true' : 'false',
                                                    "aria-describedby": errors.name ? 'name-error' : undefined
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Contact.tsx",
                                                    lineNumber: 362,
                                                    columnNumber: 17
                                                }, _this),
                                                errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    id: "name-error",
                                                    className: "form-error",
                                                    role: "alert",
                                                    children: errors.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Contact.tsx",
                                                    lineNumber: 374,
                                                    columnNumber: 19
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Contact.tsx",
                                            lineNumber: 360,
                                            columnNumber: 15
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "email",
                                                    children: t('contact.form.email')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Contact.tsx",
                                                    lineNumber: 381,
                                                    columnNumber: 17
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    id: "email",
                                                    name: "email",
                                                    placeholder: t('contact.form.emailPlaceholder'),
                                                    required: true,
                                                    disabled: isAnimating || submitted,
                                                    "aria-required": "true",
                                                    "aria-invalid": errors.email ? 'true' : 'false',
                                                    "aria-describedby": errors.email ? 'email-error' : undefined
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Contact.tsx",
                                                    lineNumber: 382,
                                                    columnNumber: 17
                                                }, _this),
                                                errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    id: "email-error",
                                                    className: "form-error",
                                                    role: "alert",
                                                    children: errors.email
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Contact.tsx",
                                                    lineNumber: 394,
                                                    columnNumber: 19
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Contact.tsx",
                                            lineNumber: 380,
                                            columnNumber: 15
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "subject",
                                                    children: t('contact.form.subject')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Contact.tsx",
                                                    lineNumber: 401,
                                                    columnNumber: 17
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    id: "subject",
                                                    name: "subject",
                                                    placeholder: t('contact.form.subjectPlaceholder'),
                                                    disabled: isAnimating || submitted
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Contact.tsx",
                                                    lineNumber: 402,
                                                    columnNumber: 17
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Contact.tsx",
                                            lineNumber: 400,
                                            columnNumber: 15
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "message",
                                                    children: t('contact.form.message')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Contact.tsx",
                                                    lineNumber: 412,
                                                    columnNumber: 17
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    id: "message",
                                                    name: "message",
                                                    placeholder: t('contact.form.messagePlaceholder'),
                                                    rows: 6,
                                                    required: true,
                                                    disabled: isAnimating || submitted,
                                                    "aria-required": "true",
                                                    "aria-invalid": errors.message ? 'true' : 'false',
                                                    "aria-describedby": errors.message ? 'message-error' : undefined
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Contact.tsx",
                                                    lineNumber: 413,
                                                    columnNumber: 17
                                                }, _this),
                                                errors.message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    id: "message-error",
                                                    className: "form-error",
                                                    role: "alert",
                                                    children: errors.message
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Contact.tsx",
                                                    lineNumber: 425,
                                                    columnNumber: 19
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Contact.tsx",
                                            lineNumber: 411,
                                            columnNumber: 15
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                            type: "submit",
                                            className: "contact-submit-button",
                                            disabled: isAnimating || submitted,
                                            whileHover: submitted ? {} : {
                                                scale: 1.02
                                            },
                                            whileTap: submitted ? {} : {
                                                scale: 0.98
                                            },
                                            children: submitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                initial: {
                                                    opacity: 0
                                                },
                                                animate: {
                                                    opacity: 1
                                                },
                                                transition: {
                                                    duration: 0.3
                                                },
                                                children: t('contact.form.success')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Contact.tsx",
                                                lineNumber: 439,
                                                columnNumber: 19
                                            }, _this) : isAnimating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                animate: {
                                                    rotate: 360
                                                },
                                                transition: {
                                                    duration: 1,
                                                    repeat: Infinity,
                                                    ease: 'linear'
                                                },
                                                children: "✈️"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Contact.tsx",
                                                lineNumber: 447,
                                                columnNumber: 19
                                            }, _this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: t('contact.form.submit')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Contact.tsx",
                                                lineNumber: 454,
                                                columnNumber: 19
                                            }, _this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Contact.tsx",
                                            lineNumber: 431,
                                            columnNumber: 15
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Contact.tsx",
                                    lineNumber: 349,
                                    columnNumber: 13
                                }, _this),
                                (aiLoading || brief || aiError) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "ai-brief-card",
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.4
                                    },
                                    children: [
                                        aiLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ai-loading",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Thinking…"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Contact.tsx",
                                                lineNumber: 469,
                                                columnNumber: 21
                                            }, _this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Contact.tsx",
                                            lineNumber: 468,
                                            columnNumber: 19
                                        }, _this),
                                        brief && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ai-brief-content",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Here's what I understood from your message:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Contact.tsx",
                                                    lineNumber: 474,
                                                    columnNumber: 21
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    children: [
                                                        brief.projectType && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                    children: "Project type:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Contact.tsx",
                                                                    lineNumber: 476,
                                                                    columnNumber: 49
                                                                }, _this),
                                                                " ",
                                                                brief.projectType
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/Contact.tsx",
                                                            lineNumber: 476,
                                                            columnNumber: 45
                                                        }, _this),
                                                        brief.deliverables && Array.isArray(brief.deliverables) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                    children: "Deliverables:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Contact.tsx",
                                                                    lineNumber: 478,
                                                                    columnNumber: 29
                                                                }, _this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    children: brief.deliverables.map(function(d, i) {
                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: d
                                                                        }, i, false, {
                                                                            fileName: "[project]/src/components/Contact.tsx",
                                                                            lineNumber: 480,
                                                                            columnNumber: 79
                                                                        }, _this);
                                                                    })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Contact.tsx",
                                                                    lineNumber: 479,
                                                                    columnNumber: 27
                                                                }, _this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/Contact.tsx",
                                                            lineNumber: 478,
                                                            columnNumber: 25
                                                        }, _this),
                                                        brief.goals && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                    children: "Goals:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Contact.tsx",
                                                                    lineNumber: 484,
                                                                    columnNumber: 43
                                                                }, _this),
                                                                " ",
                                                                brief.goals
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/Contact.tsx",
                                                            lineNumber: 484,
                                                            columnNumber: 39
                                                        }, _this),
                                                        brief.urgency && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                    children: "Urgency:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Contact.tsx",
                                                                    lineNumber: 485,
                                                                    columnNumber: 45
                                                                }, _this),
                                                                " ",
                                                                brief.urgency
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/Contact.tsx",
                                                            lineNumber: 485,
                                                            columnNumber: 41
                                                        }, _this),
                                                        brief.notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                    children: "Notes:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Contact.tsx",
                                                                    lineNumber: 486,
                                                                    columnNumber: 43
                                                                }, _this),
                                                                " ",
                                                                brief.notes
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/Contact.tsx",
                                                            lineNumber: 486,
                                                            columnNumber: 39
                                                        }, _this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Contact.tsx",
                                                    lineNumber: 475,
                                                    columnNumber: 21
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Contact.tsx",
                                            lineNumber: 473,
                                            columnNumber: 19
                                        }, _this),
                                        aiError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ai-error",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Couldn't generate a brief, but your message was sent!"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Contact.tsx",
                                                lineNumber: 492,
                                                columnNumber: 21
                                            }, _this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Contact.tsx",
                                            lineNumber: 491,
                                            columnNumber: 19
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Contact.tsx",
                                    lineNumber: 461,
                                    columnNumber: 15
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Contact.tsx",
                            lineNumber: 343,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "contact-methods-card",
                            initial: {
                                opacity: 0,
                                y: 40
                            },
                            animate: isInView ? {
                                opacity: 1,
                                y: 0
                            } : {
                                opacity: 0,
                                y: 40
                            },
                            transition: {
                                delay: 0.5,
                                duration: 0.6,
                                ease: [
                                    0.16,
                                    1,
                                    0.3,
                                    1
                                ]
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "methods-header",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: t('contact.quickContact.title')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Contact.tsx",
                                            lineNumber: 507,
                                            columnNumber: 15
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: t('contact.quickContact.subtitle')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Contact.tsx",
                                            lineNumber: 508,
                                            columnNumber: 15
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Contact.tsx",
                                    lineNumber: 506,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "methods-list",
                                    children: contactMethods.map(function(method, idx) {
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                            href: method.href,
                                            className: "contact-method-item",
                                            target: method.label === 'WhatsApp' ? '_blank' : undefined,
                                            rel: method.label === 'WhatsApp' ? 'noopener noreferrer' : undefined,
                                            initial: {
                                                opacity: 0,
                                                y: 20
                                            },
                                            animate: isInView ? {
                                                opacity: 1,
                                                y: 0
                                            } : {
                                                opacity: 0,
                                                y: 20
                                            },
                                            transition: {
                                                delay: 0.6 + idx * 0.08,
                                                duration: 0.4
                                            },
                                            whileHover: {
                                                scale: 1.02
                                            },
                                            whileTap: {
                                                scale: 0.98
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "method-icon-wrapper",
                                                    children: method.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Contact.tsx",
                                                    lineNumber: 525,
                                                    columnNumber: 19
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "method-content",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "method-label",
                                                            children: method.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Contact.tsx",
                                                            lineNumber: 529,
                                                            columnNumber: 21
                                                        }, _this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "method-value",
                                                            children: method.value
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Contact.tsx",
                                                            lineNumber: 530,
                                                            columnNumber: 21
                                                        }, _this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Contact.tsx",
                                                    lineNumber: 528,
                                                    columnNumber: 19
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "method-arrow",
                                                    children: "→"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Contact.tsx",
                                                    lineNumber: 532,
                                                    columnNumber: 19
                                                }, _this)
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/src/components/Contact.tsx",
                                            lineNumber: 513,
                                            columnNumber: 17
                                        }, _this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Contact.tsx",
                                    lineNumber: 511,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "contact-info-card",
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: isInView ? {
                                        opacity: 1
                                    } : {
                                        opacity: 0
                                    },
                                    transition: {
                                        delay: 0.9,
                                        duration: 0.5
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "info-item",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "info-text",
                                                children: t('contact.info.location')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Contact.tsx",
                                                lineNumber: 544,
                                                columnNumber: 17
                                            }, _this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Contact.tsx",
                                            lineNumber: 543,
                                            columnNumber: 15
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "info-item",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "info-text",
                                                children: t('contact.info.availability')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Contact.tsx",
                                                lineNumber: 547,
                                                columnNumber: 17
                                            }, _this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Contact.tsx",
                                            lineNumber: 546,
                                            columnNumber: 15
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "info-item",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "info-text",
                                                children: t('contact.info.responseTime')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Contact.tsx",
                                                lineNumber: 550,
                                                columnNumber: 17
                                            }, _this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Contact.tsx",
                                            lineNumber: 549,
                                            columnNumber: 15
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Contact.tsx",
                                    lineNumber: 537,
                                    columnNumber: 13
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Contact.tsx",
                            lineNumber: 500,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "contact-meeting-card",
                            initial: {
                                opacity: 0,
                                y: 40
                            },
                            animate: isInView ? {
                                opacity: 1,
                                y: 0
                            } : {
                                opacity: 0,
                                y: 40
                            },
                            transition: {
                                delay: 0.6,
                                duration: 0.6,
                                ease: [
                                    0.16,
                                    1,
                                    0.3,
                                    1
                                ]
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "meeting-header",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: t('contact.meeting.title')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Contact.tsx",
                                            lineNumber: 563,
                                            columnNumber: 15
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: t('contact.meeting.subtitle')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Contact.tsx",
                                            lineNumber: 564,
                                            columnNumber: 15
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Contact.tsx",
                                    lineNumber: 562,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleMeetingSubmit,
                                    className: "meeting-form",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            name: "website-meeting",
                                            style: {
                                                display: 'none'
                                            },
                                            tabIndex: -1,
                                            autoComplete: "off",
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Contact.tsx",
                                            lineNumber: 569,
                                            columnNumber: 15
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "meeting-name",
                                                    children: t('contact.meeting.form.name')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Contact.tsx",
                                                    lineNumber: 579,
                                                    columnNumber: 17
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    id: "meeting-name",
                                                    name: "meeting-name",
                                                    placeholder: t('contact.meeting.form.namePlaceholder'),
                                                    required: true,
                                                    disabled: meetingAnimating || meetingSubmitted,
                                                    "aria-required": "true",
                                                    "aria-invalid": meetingErrors.name ? 'true' : 'false'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Contact.tsx",
                                                    lineNumber: 580,
                                                    columnNumber: 17
                                                }, _this),
                                                meetingErrors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "form-error",
                                                    role: "alert",
                                                    children: meetingErrors.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Contact.tsx",
                                                    lineNumber: 591,
                                                    columnNumber: 19
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Contact.tsx",
                                            lineNumber: 578,
                                            columnNumber: 15
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "meeting-email",
                                                    children: t('contact.meeting.form.email')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Contact.tsx",
                                                    lineNumber: 596,
                                                    columnNumber: 17
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    id: "meeting-email",
                                                    name: "meeting-email",
                                                    placeholder: t('contact.meeting.form.emailPlaceholder'),
                                                    required: true,
                                                    disabled: meetingAnimating || meetingSubmitted,
                                                    "aria-required": "true",
                                                    "aria-invalid": meetingErrors.email ? 'true' : 'false'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Contact.tsx",
                                                    lineNumber: 597,
                                                    columnNumber: 17
                                                }, _this),
                                                meetingErrors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "form-error",
                                                    role: "alert",
                                                    children: meetingErrors.email
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Contact.tsx",
                                                    lineNumber: 608,
                                                    columnNumber: 19
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Contact.tsx",
                                            lineNumber: 595,
                                            columnNumber: 15
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-row",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "form-group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "meeting-date",
                                                            children: t('contact.meeting.form.date')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Contact.tsx",
                                                            lineNumber: 614,
                                                            columnNumber: 19
                                                        }, _this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DatePicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            id: "meeting-date",
                                                            name: "meeting-date",
                                                            value: meetingDate,
                                                            onChange: setMeetingDate,
                                                            min: new Date().toISOString().split('T')[0],
                                                            required: true,
                                                            disabled: meetingAnimating || meetingSubmitted,
                                                            "aria-required": "true",
                                                            "aria-invalid": meetingErrors.date ? 'true' : 'false'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Contact.tsx",
                                                            lineNumber: 615,
                                                            columnNumber: 19
                                                        }, _this),
                                                        meetingErrors.date && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "form-error",
                                                            role: "alert",
                                                            children: meetingErrors.date
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Contact.tsx",
                                                            lineNumber: 627,
                                                            columnNumber: 21
                                                        }, _this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Contact.tsx",
                                                    lineNumber: 613,
                                                    columnNumber: 17
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "form-group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "meeting-time",
                                                            children: t('contact.meeting.form.time')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Contact.tsx",
                                                            lineNumber: 632,
                                                            columnNumber: 19
                                                        }, _this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "time",
                                                            id: "meeting-time",
                                                            name: "meeting-time",
                                                            required: true,
                                                            disabled: meetingAnimating || meetingSubmitted,
                                                            "aria-required": "true",
                                                            "aria-invalid": meetingErrors.time ? 'true' : 'false'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Contact.tsx",
                                                            lineNumber: 633,
                                                            columnNumber: 19
                                                        }, _this),
                                                        meetingErrors.time && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "form-error",
                                                            role: "alert",
                                                            children: meetingErrors.time
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Contact.tsx",
                                                            lineNumber: 643,
                                                            columnNumber: 21
                                                        }, _this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Contact.tsx",
                                                    lineNumber: 631,
                                                    columnNumber: 17
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Contact.tsx",
                                            lineNumber: 612,
                                            columnNumber: 15
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-row",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "form-group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "meeting-timezone",
                                                            children: t('contact.meeting.form.timezone')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Contact.tsx",
                                                            lineNumber: 650,
                                                            columnNumber: 19
                                                        }, _this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            id: "meeting-timezone",
                                                            name: "meeting-timezone",
                                                            placeholder: t('contact.meeting.form.timezonePlaceholder'),
                                                            disabled: meetingAnimating || meetingSubmitted
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Contact.tsx",
                                                            lineNumber: 651,
                                                            columnNumber: 19
                                                        }, _this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Contact.tsx",
                                                    lineNumber: 649,
                                                    columnNumber: 17
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "form-group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "meeting-duration",
                                                            children: t('contact.meeting.form.duration')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Contact.tsx",
                                                            lineNumber: 661,
                                                            columnNumber: 19
                                                        }, _this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            id: "meeting-duration",
                                                            name: "meeting-duration",
                                                            disabled: meetingAnimating || meetingSubmitted,
                                                            className: "form-select",
                                                            defaultValue: "60min",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "30min",
                                                                    children: t('contact.meeting.form.durationOptions.30min')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Contact.tsx",
                                                                    lineNumber: 669,
                                                                    columnNumber: 21
                                                                }, _this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "60min",
                                                                    children: t('contact.meeting.form.durationOptions.60min')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Contact.tsx",
                                                                    lineNumber: 670,
                                                                    columnNumber: 21
                                                                }, _this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "90min",
                                                                    children: t('contact.meeting.form.durationOptions.90min')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Contact.tsx",
                                                                    lineNumber: 671,
                                                                    columnNumber: 21
                                                                }, _this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "custom",
                                                                    children: t('contact.meeting.form.durationOptions.custom')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Contact.tsx",
                                                                    lineNumber: 672,
                                                                    columnNumber: 21
                                                                }, _this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/Contact.tsx",
                                                            lineNumber: 662,
                                                            columnNumber: 19
                                                        }, _this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Contact.tsx",
                                                    lineNumber: 660,
                                                    columnNumber: 17
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Contact.tsx",
                                            lineNumber: 648,
                                            columnNumber: 15
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "meeting-context",
                                                    children: t('contact.meeting.form.context')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Contact.tsx",
                                                    lineNumber: 678,
                                                    columnNumber: 17
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    id: "meeting-context",
                                                    name: "meeting-context",
                                                    placeholder: t('contact.meeting.form.contextPlaceholder'),
                                                    rows: 4,
                                                    required: true,
                                                    disabled: meetingAnimating || meetingSubmitted,
                                                    "aria-required": "true",
                                                    "aria-invalid": meetingErrors.context ? 'true' : 'false'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Contact.tsx",
                                                    lineNumber: 679,
                                                    columnNumber: 17
                                                }, _this),
                                                meetingErrors.context && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "form-error",
                                                    role: "alert",
                                                    children: meetingErrors.context
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Contact.tsx",
                                                    lineNumber: 690,
                                                    columnNumber: 19
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Contact.tsx",
                                            lineNumber: 677,
                                            columnNumber: 15
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                            type: "submit",
                                            className: "contact-submit-button",
                                            disabled: meetingAnimating || meetingSubmitted,
                                            whileHover: meetingSubmitted ? {} : {
                                                scale: 1.02
                                            },
                                            whileTap: meetingSubmitted ? {} : {
                                                scale: 0.98
                                            },
                                            children: meetingSubmitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                initial: {
                                                    opacity: 0
                                                },
                                                animate: {
                                                    opacity: 1
                                                },
                                                transition: {
                                                    duration: 0.3
                                                },
                                                children: t('contact.meeting.form.success')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Contact.tsx",
                                                lineNumber: 702,
                                                columnNumber: 19
                                            }, _this) : meetingAnimating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                animate: {
                                                    rotate: 360
                                                },
                                                transition: {
                                                    duration: 1,
                                                    repeat: Infinity,
                                                    ease: 'linear'
                                                },
                                                children: "✈️"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Contact.tsx",
                                                lineNumber: 710,
                                                columnNumber: 19
                                            }, _this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: t('contact.meeting.form.submit')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Contact.tsx",
                                                lineNumber: 717,
                                                columnNumber: 19
                                            }, _this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Contact.tsx",
                                            lineNumber: 694,
                                            columnNumber: 15
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Contact.tsx",
                                    lineNumber: 567,
                                    columnNumber: 13
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Contact.tsx",
                            lineNumber: 556,
                            columnNumber: 11
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Contact.tsx",
                    lineNumber: 341,
                    columnNumber: 9
                }, _this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Contact.tsx",
            lineNumber: 304,
            columnNumber: 7
        }, _this)
    }, void 0, false, {
        fileName: "[project]/src/components/Contact.tsx",
        lineNumber: 303,
        columnNumber: 5
    }, _this);
};
_s(Contact, "Qk2pa89v+1cLhltO4unBsMqgCnA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = Contact;
const __TURBOPACK__default__export__ = Contact;
var _c;
__turbopack_context__.k.register(_c, "Contact");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_2a314bc1._.js.map