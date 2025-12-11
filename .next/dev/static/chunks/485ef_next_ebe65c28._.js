(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/mazhar_rony/node_modules/next/dist/shared/lib/utils.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$mazhar_rony$2f$mazhar_roney$2f$mazhar_rony$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/mazhar_rony/mazhar_roney/mazhar_rony/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
var _async_to_generator = __turbopack_context__.r("[project]/mazhar_rony/mazhar_roney/mazhar_rony/node_modules/@swc/helpers/cjs/_async_to_generator.cjs [client] (ecmascript)");
var _call_super = __turbopack_context__.r("[project]/mazhar_rony/mazhar_roney/mazhar_rony/node_modules/@swc/helpers/cjs/_call_super.cjs [client] (ecmascript)");
var _class_call_check = __turbopack_context__.r("[project]/mazhar_rony/mazhar_roney/mazhar_rony/node_modules/@swc/helpers/cjs/_class_call_check.cjs [client] (ecmascript)");
var _inherits = __turbopack_context__.r("[project]/mazhar_rony/mazhar_roney/mazhar_rony/node_modules/@swc/helpers/cjs/_inherits.cjs [client] (ecmascript)");
var _to_consumable_array = __turbopack_context__.r("[project]/mazhar_rony/mazhar_roney/mazhar_rony/node_modules/@swc/helpers/cjs/_to_consumable_array.cjs [client] (ecmascript)");
var _wrap_native_super = __turbopack_context__.r("[project]/mazhar_rony/mazhar_roney/mazhar_rony/node_modules/@swc/helpers/cjs/_wrap_native_super.cjs [client] (ecmascript)");
var _ts_generator = __turbopack_context__.r("[project]/mazhar_rony/mazhar_roney/mazhar_rony/node_modules/@swc/helpers/cjs/_ts_generator.cjs [client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function DecodeError1() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function MiddlewareNotFoundError1() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function MissingStaticPage1() {
        return MissingStaticPage;
    },
    NormalizeError: function NormalizeError1() {
        return NormalizeError;
    },
    PageNotFoundError: function PageNotFoundError1() {
        return PageNotFoundError;
    },
    SP: function SP1() {
        return SP;
    },
    ST: function ST1() {
        return ST;
    },
    WEB_VITALS: function WEB_VITALS1() {
        return WEB_VITALS;
    },
    execOnce: function execOnce1() {
        return execOnce;
    },
    getDisplayName: function getDisplayName1() {
        return getDisplayName;
    },
    getLocationOrigin: function getLocationOrigin1() {
        return getLocationOrigin;
    },
    getURL: function getURL1() {
        return getURL;
    },
    isAbsoluteUrl: function isAbsoluteUrl1() {
        return isAbsoluteUrl;
    },
    isResSent: function isResSent1() {
        return isResSent;
    },
    loadGetInitialProps: function loadGetInitialProps1() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function normalizeRepeatedSlashes1() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function stringifyError1() {
        return stringifyError;
    }
});
var WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    var used = false;
    var result;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (!used) {
            used = true;
            result = fn.apply(void 0, _to_consumable_array._(args));
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
var ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
var isAbsoluteUrl = function(url) {
    return ABSOLUTE_URL_REGEX.test(url);
};
function getLocationOrigin() {
    var _window_location = window.location, protocol = _window_location.protocol, hostname = _window_location.hostname, port = _window_location.port;
    return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}
function getURL() {
    var href = window.location.href;
    var origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    var urlParts = url.split('?');
    var urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? "?".concat(urlParts.slice(1).join('?')) : '');
}
function loadGetInitialProps(App, ctx) {
    return _async_to_generator._(function() {
        var _App_prototype, message, res, _tmp, props, message1;
        return _ts_generator._(this, function(_state) {
            switch(_state.label){
                case 0:
                    if ("TURBOPACK compile-time truthy", 1) {
                        ;
                        if ((_App_prototype = App.prototype) === null || _App_prototype === void 0 ? void 0 : _App_prototype.getInitialProps) {
                            message = '"'.concat(getDisplayName(App), '.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.');
                            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                                value: "E394",
                                enumerable: false,
                                configurable: true
                            });
                        }
                    }
                    // when called from _app `ctx` is nested in `ctx`
                    res = ctx.res || ctx.ctx && ctx.ctx.res;
                    if (!!App.getInitialProps) return [
                        3,
                        3
                    ];
                    if (!(ctx.ctx && ctx.Component)) return [
                        3,
                        2
                    ];
                    _tmp = {};
                    return [
                        4,
                        loadGetInitialProps(ctx.Component, ctx.ctx)
                    ];
                case 1:
                    // @ts-ignore pageProps default
                    return [
                        2,
                        (_tmp.pageProps = _state.sent(), _tmp)
                    ];
                case 2:
                    return [
                        2,
                        {}
                    ];
                case 3:
                    return [
                        4,
                        App.getInitialProps(ctx)
                    ];
                case 4:
                    props = _state.sent();
                    if (res && isResSent(res)) {
                        return [
                            2,
                            props
                        ];
                    }
                    if (!props) {
                        message1 = '"'.concat(getDisplayName(App), '.getInitialProps()" should resolve to an object. But found "').concat(props, '" instead.');
                        throw Object.defineProperty(new Error(message1), "__NEXT_ERROR_CODE", {
                            value: "E394",
                            enumerable: false,
                            configurable: true
                        });
                    }
                    if ("TURBOPACK compile-time truthy", 1) {
                        if (Object.keys(props).length === 0 && !ctx.ctx) {
                            console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps"));
                        }
                    }
                    return [
                        2,
                        props
                    ];
            }
        });
    })();
}
var SP = typeof performance !== 'undefined';
var ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every(function(method) {
    return typeof performance[method] === 'function';
});
var DecodeError = /*#__PURE__*/ function(Error1) {
    _inherits._(DecodeError, Error1);
    function DecodeError() {
        _class_call_check._(this, DecodeError);
        return _call_super._(this, DecodeError, arguments);
    }
    return DecodeError;
}(_wrap_native_super._(Error));
var NormalizeError = /*#__PURE__*/ function(Error1) {
    _inherits._(NormalizeError, Error1);
    function NormalizeError() {
        _class_call_check._(this, NormalizeError);
        return _call_super._(this, NormalizeError, arguments);
    }
    return NormalizeError;
}(_wrap_native_super._(Error));
var PageNotFoundError = /*#__PURE__*/ function(Error1) {
    _inherits._(PageNotFoundError, Error1);
    function PageNotFoundError(page) {
        _class_call_check._(this, PageNotFoundError);
        var _this;
        _this = _call_super._(this, PageNotFoundError);
        _this.code = 'ENOENT';
        _this.name = 'PageNotFoundError';
        _this.message = "Cannot find module for page: ".concat(page);
        return _this;
    }
    return PageNotFoundError;
}(_wrap_native_super._(Error));
var MissingStaticPage = /*#__PURE__*/ function(Error1) {
    _inherits._(MissingStaticPage, Error1);
    function MissingStaticPage(page, message) {
        _class_call_check._(this, MissingStaticPage);
        var _this;
        _this = _call_super._(this, MissingStaticPage);
        _this.message = "Failed to load static file for page: ".concat(page, " ").concat(message);
        return _this;
    }
    return MissingStaticPage;
}(_wrap_native_super._(Error));
var MiddlewareNotFoundError = /*#__PURE__*/ function(Error1) {
    _inherits._(MiddlewareNotFoundError, Error1);
    function MiddlewareNotFoundError() {
        _class_call_check._(this, MiddlewareNotFoundError);
        var _this;
        _this = _call_super._(this, MiddlewareNotFoundError);
        _this.code = 'ENOENT';
        _this.message = "Cannot find the middleware module";
        return _this;
    }
    return MiddlewareNotFoundError;
}(_wrap_native_super._(Error));
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map
}),
"[project]/mazhar_rony/node_modules/next/dist/pages/_app.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _async_to_generator = __turbopack_context__.r("[project]/mazhar_rony/mazhar_roney/mazhar_rony/node_modules/@swc/helpers/cjs/_async_to_generator.cjs [client] (ecmascript)");
var _call_super = __turbopack_context__.r("[project]/mazhar_rony/mazhar_roney/mazhar_rony/node_modules/@swc/helpers/cjs/_call_super.cjs [client] (ecmascript)");
var _class_call_check = __turbopack_context__.r("[project]/mazhar_rony/mazhar_roney/mazhar_rony/node_modules/@swc/helpers/cjs/_class_call_check.cjs [client] (ecmascript)");
var _create_class = __turbopack_context__.r("[project]/mazhar_rony/mazhar_roney/mazhar_rony/node_modules/@swc/helpers/cjs/_create_class.cjs [client] (ecmascript)");
var _inherits = __turbopack_context__.r("[project]/mazhar_rony/mazhar_roney/mazhar_rony/node_modules/@swc/helpers/cjs/_inherits.cjs [client] (ecmascript)");
var _object_spread = __turbopack_context__.r("[project]/mazhar_rony/mazhar_roney/mazhar_rony/node_modules/@swc/helpers/cjs/_object_spread.cjs [client] (ecmascript)");
var _type_of = __turbopack_context__.r("[project]/mazhar_rony/mazhar_roney/mazhar_rony/node_modules/@swc/helpers/cjs/_type_of.cjs [client] (ecmascript)");
var _ts_generator = __turbopack_context__.r("[project]/mazhar_rony/mazhar_roney/mazhar_rony/node_modules/@swc/helpers/cjs/_ts_generator.cjs [client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
        return App;
    }
});
var _interop_require_default = __turbopack_context__.r("[project]/mazhar_rony/mazhar_roney/mazhar_rony/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
var _jsxruntime = __turbopack_context__.r("[project]/mazhar_rony/mazhar_roney/mazhar_rony/node_modules/react/jsx-runtime.js [client] (ecmascript)");
var _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/mazhar_rony/mazhar_roney/mazhar_rony/node_modules/react/index.js [client] (ecmascript)"));
var _utils = __turbopack_context__.r("[project]/mazhar_rony/node_modules/next/dist/shared/lib/utils.js [client] (ecmascript)");
/**
 * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
 * This allows for keeping state between navigation, custom error handling, injecting additional data.
 */ function appGetInitialProps(_0) {
    return _async_to_generator._(function(param) {
        var Component, ctx, pageProps;
        return _ts_generator._(this, function(_state) {
            switch(_state.label){
                case 0:
                    Component = param.Component, ctx = param.ctx;
                    return [
                        4,
                        (0, _utils.loadGetInitialProps)(Component, ctx)
                    ];
                case 1:
                    pageProps = _state.sent();
                    return [
                        2,
                        {
                            pageProps: pageProps
                        }
                    ];
            }
        });
    }).apply(this, arguments);
}
var App = /*#__PURE__*/ function(_react_default_Component) {
    _inherits._(App, _react_default_Component);
    function App() {
        _class_call_check._(this, App);
        return _call_super._(this, App, arguments);
    }
    _create_class._(App, [
        {
            key: "render",
            value: function render() {
                var _this_props = this.props, Component = _this_props.Component, pageProps = _this_props.pageProps;
                return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, _object_spread._({}, pageProps));
            }
        }
    ]);
    return App;
}(_react["default"].Component);
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
if ((typeof exports["default"] === 'function' || _type_of._(exports["default"]) === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
    Object.defineProperty(exports["default"], '__esModule', {
        value: true
    });
    Object.assign(exports["default"], exports);
    module.exports = exports["default"];
} //# sourceMappingURL=_app.js.map
}),
"[project]/mazhar_rony/node_modules/next/app.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/mazhar_rony/node_modules/next/dist/pages/_app.js [client] (ecmascript)");
}),
]);

//# sourceMappingURL=485ef_next_ebe65c28._.js.map