(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/Header.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Header = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "flex justify-between items-center w-full px-200 pt-400",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/images/logo.svg",
                    alt: "Mood tracker logo",
                    className: "h-full"
                }, void 0, false, {
                    fileName: "[project]/src/components/Header.tsx",
                    lineNumber: 5,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 4,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "/images/avatar-placeholder.svg",
                alt: "User avatar",
                className: "w-500 h-500 rounded-full"
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 7,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Header.tsx",
        lineNumber: 3,
        columnNumber: 7
    }, this);
};
_c = Header;
const __TURBOPACK__default__export__ = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/lib/api.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "fetchMoods": (()=>fetchMoods),
    "fetchQuotes": (()=>fetchQuotes),
    "submitLog": (()=>submitLog)
});
const BASE_URL = 'http://localhost:3001';
async function fetchMoods() {
    const res = await fetch(`${BASE_URL}/moodEntries`);
    if (!res.ok) {
        throw new Error('Failed to fetch moods');
    }
    return res.json();
}
async function submitLog(data) {
    const payload = {
        ...data,
        createdAt: new Date().toISOString()
    };
    const res = await fetch(`${BASE_URL}/moodEntries`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    if (!res.ok) {
        throw new Error('Failed to submit log');
    }
    return res.json();
}
async function fetchQuotes() {
    const res = await fetch(`${BASE_URL}/moodQuotes`);
    if (!res.ok) {
        throw new Error('Failed to fetch quotes');
    }
    return res.json();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/store/logStore.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useLogStore": (()=>useLogStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/api.ts [app-client] (ecmascript)");
;
;
const useLogStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        logs: [],
        fetchLogs: async ()=>{
            const logs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchMoods"])();
            set({
                logs
            });
        },
        addLog: (log)=>set((state)=>({
                    logs: [
                        ...state.logs,
                        log
                    ]
                })),
        setLogs: (logs)=>set({
                logs
            }),
        clearLogs: ()=>set({
                logs: []
            }),
        getLastLog: ()=>{
            const logs = get().logs;
            return logs.length > 0 ? logs[logs.length - 1] : null;
        }
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Button/Button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Button = ({ label, disabled = false, type = 'primary', className, onClick })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: `text-neutral-0 preset-4 rounded-10 cursor-pointer px-400 py-200 font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline disabled:cursor-not-allowed disabled:bg-blue-200 disabled:opacity-50 ${className} ${type === 'primary' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-neutral-0 text-neutral-900 hover:bg-neutral-50'}`,
        onClick: onClick,
        disabled: disabled,
        children: label
    }, void 0, false, {
        fileName: "[project]/src/components/Button/Button.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
};
_c = Button;
const __TURBOPACK__default__export__ = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/lib/utils/date.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "formatDateWithOrdinal": (()=>formatDateWithOrdinal)
});
function getOrdinal(day) {
    if (day > 3 && day < 21) return 'th'; // 11th, 12th, 13th
    switch(day % 10){
        case 1:
            return 'st';
        case 2:
            return 'nd';
        case 3:
            return 'rd';
        default:
            return 'th';
    }
}
function formatDateWithOrdinal(date) {
    const weekday = date.toLocaleDateString('en-US', {
        weekday: 'long'
    });
    const month = date.toLocaleDateString('en-US', {
        month: 'long'
    });
    const day = date.getDate();
    const year = date.getFullYear();
    return `${weekday}, ${month} ${day}${getOrdinal(day)}, ${year}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/lib/moods.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * Mood tracking utilities and configuration
 *
 * This module provides utilities for managing mood tracking in the mood tracking app.
 * It defines mood value types, configurations, and helper functions for converting between
 * different representations of mood states.
 *
 * The module centralizes mood logic to ensure:
 * - Consistent mood categorization across the application
 * - Type-safe mood value handling
 * - Easy conversion between numeric values and human-readable labels
 * - Standardized mood colors and icons for UI consistency
 * - Comprehensive mood configuration including visual elements
 *
 * @module moods
 */ /**
 * Valid mood values representing different emotional states
 *
 * These values represent the predefined mood categories used throughout the app.
 * Each value corresponds to a specific emotional state with associated visual elements.
 *
 * The values follow a scale from negative to positive emotions:
 * - -2: Very Sad (extreme negative emotion)
 * - -1: Sad (negative emotion)
 * - 0: Neutral (balanced emotion)
 * - 1: Happy (positive emotion)
 * - 2: Very Happy (extreme positive emotion)
 *
 * @example
 * ```typescript
 * const moodValue: MoodValue = 1; // Represents a happy mood
 * ```
 */ __turbopack_context__.s({
    "getMood": (()=>getMood),
    "moodMap": (()=>moodMap)
});
const moodMap = {
    [-2]: {
        value: -2,
        label: 'Very Sad',
        color: 'bg-red-300',
        colorHex: '#FFB9B9',
        icon: {
            white: '/images/icon-very-sad-white.svg',
            color: '/images/icon-very-sad-color.svg'
        }
    },
    [-1]: {
        value: -1,
        label: 'Sad',
        color: 'bg-indigo-200',
        colorHex: '#B8B1FF',
        icon: {
            white: '/images/icon-sad-white.svg',
            color: '/images/icon-sad-color.svg'
        }
    },
    [0]: {
        value: 0,
        label: 'Neutral',
        color: 'bg-blue-300',
        colorHex: '#89CAFF',
        icon: {
            white: '/images/icon-neutral-white.svg',
            color: '/images/icon-neutral-color.svg'
        }
    },
    [1]: {
        value: 1,
        label: 'Happy',
        color: 'bg-green-300',
        colorHex: '#89E780',
        icon: {
            white: '/images/icon-happy-white.svg',
            color: '/images/icon-happy-color.svg'
        }
    },
    [2]: {
        value: 2,
        label: 'Very Happy',
        color: 'bg-amber-300',
        colorHex: '#FFC97C',
        icon: {
            white: '/images/icon-very-happy-white.svg',
            color: '/images/icon-very-happy-color.svg'
        }
    }
};
function getMood(value) {
    return moodMap[value];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Container.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Container = ({ children, as: Component = "div", className })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {
        className: `w-full rounded-16 bg-neutral-0 border border-blue-100 py-250 px-200 flex flex-col gap-300 ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/Container.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
};
_c = Container;
const __TURBOPACK__default__export__ = Container;
var _c;
__turbopack_context__.k.register(_c, "Container");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/store/quoteStore.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useQuoteStore": (()=>useQuoteStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/api.ts [app-client] (ecmascript)");
;
;
const useQuoteStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        quotes: {
            [-2]: [],
            [-1]: [],
            0: [],
            1: [],
            2: []
        },
        fetchQuotes: async ()=>{
            const quotes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchQuotes"])();
            set({
                quotes: quotes
            });
        },
        getRandomQuoteForMood: (mood)=>{
            const quotes = get().quotes[mood];
            if (!quotes || quotes.length === 0) return null;
            const i = Math.floor(Math.random() * quotes.length);
            return quotes[i];
        }
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Greetings/MoodCard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$moods$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/moods.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$quoteStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/quoteStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const MoodCard = ({ mood })=>{
    _s();
    const { getRandomQuoteForMood } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$quoteStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuoteStore"])();
    const moodConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$moods$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMood"])(mood);
    const quote = getRandomQuoteForMood(mood);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        as: "section",
        className: "relative w-full items-center justify-center overflow-hidden md:items-start md:justify-between lg:col-span-2 lg:h-[340px] lg:p-400",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "preset-3 text-left font-bold text-neutral-600",
                        children: "I'm feeling"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Greetings/MoodCard.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "preset-2 text-left font-bold text-neutral-900",
                        children: moodConfig.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/Greetings/MoodCard.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Greetings/MoodCard.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: moodConfig.icon.color,
                alt: moodConfig.label,
                className: "h-[200px] w-[200px] md:absolute md:-bottom-1/8 md:left-3/4 md:h-[320px] md:w-[320px] md:-translate-x-1/2"
            }, void 0, false, {
                fileName: "[project]/src/components/Greetings/MoodCard.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-150 md:w-1/2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/images/icon-quote.svg",
                        "aria-hidden": "true",
                        className: "h-300 w-300"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Greetings/MoodCard.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "preset-6-italic text-left text-neutral-600",
                        children: [
                            "“",
                            quote,
                            "”"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Greetings/MoodCard.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Greetings/MoodCard.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Greetings/MoodCard.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
};
_s(MoodCard, "0q0mbzWv7eR6jgo5HdWJZkS1GUE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$quoteStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuoteStore"]
    ];
});
_c = MoodCard;
const __TURBOPACK__default__export__ = MoodCard;
var _c;
__turbopack_context__.k.register(_c, "MoodCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Greetings/Greetings.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$logStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/logStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Button/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$utils$2f$date$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/utils/date.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Greetings$2f$MoodCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Greetings/MoodCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const Greeting = ({ className, onOpenLogModal })=>{
    _s();
    const { getLastLog } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$logStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLogStore"])();
    const lastLog = getLastLog();
    const hasLoggedToday = lastLog?.createdAt.split('T')[0] === new Date().toISOString().split('T')[0];
    const today = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$utils$2f$date$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateWithOrdinal"])(new Date());
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex flex-col items-center justify-center gap-200 text-center ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "preset-3-mobile md:preset-3 font-bold text-blue-600",
                children: "Hello, Lisa!"
            }, void 0, false, {
                fileName: "[project]/src/components/Greetings/Greetings.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "preset-1-mobile md:preset-1 font-bold text-neutral-900",
                children: "How are you feeling today?"
            }, void 0, false, {
                fileName: "[project]/src/components/Greetings/Greetings.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "preset-6 text-neutral-600",
                children: today
            }, void 0, false, {
                fileName: "[project]/src/components/Greetings/Greetings.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            !hasLoggedToday ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                label: "Log today's mood",
                onClick: onOpenLogModal
            }, void 0, false, {
                fileName: "[project]/src/components/Greetings/Greetings.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid w-full grid-cols-1 gap-400 lg:grid-cols-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Greetings$2f$MoodCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    mood: lastLog?.mood
                }, void 0, false, {
                    fileName: "[project]/src/components/Greetings/Greetings.tsx",
                    lineNumber: 32,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Greetings/Greetings.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Greetings/Greetings.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
};
_s(Greeting, "624s7VbULtWgRM2I+oZSe9O1dLo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$logStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLogStore"]
    ];
});
_c = Greeting;
const __TURBOPACK__default__export__ = Greeting;
var _c;
__turbopack_context__.k.register(_c, "Greeting");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/TrendChart/CustomXAxisTick.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const CustomXAxisTick = ({ x, y, payload })=>{
    const date = new Date(payload.value);
    const month = date.toLocaleDateString('en-US', {
        month: 'long'
    }); // e.g. "April"
    const day = date.getDate(); // e.g. 12
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        transform: `translate(${x},${y})`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: 0,
                y: 12,
                dy: -4,
                textAnchor: "middle",
                fontSize: "12",
                fill: "#12114D",
                children: month
            }, void 0, false, {
                fileName: "[project]/src/components/TrendChart/CustomXAxisTick.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: 0,
                y: 24,
                textAnchor: "middle",
                fontSize: "13",
                fontWeight: "semibold",
                fill: "#12114D",
                children: day
            }, void 0, false, {
                fileName: "[project]/src/components/TrendChart/CustomXAxisTick.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TrendChart/CustomXAxisTick.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
};
_c = CustomXAxisTick;
const __TURBOPACK__default__export__ = CustomXAxisTick;
var _c;
__turbopack_context__.k.register(_c, "CustomXAxisTick");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/lib/sleep.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * Sleep tracking utilities and configuration
 *
 * This module provides utilities for managing sleep duration tracking in the mood tracking app.
 * It defines sleep value types, mappings, and helper functions for converting between
 * different representations of sleep duration.
 *
 * The module centralizes sleep duration logic to ensure:
 * - Consistent sleep duration categorization across the application
 * - Type-safe sleep value handling
 * - Easy conversion between numeric values and human-readable labels
 * - Standardized sleep duration ranges for user input and display
 *
 * @module sleep
 */ /**
 * Valid sleep duration values in hours
 *
 * These values represent the predefined sleep duration categories used throughout the app.
 * Each value corresponds to a specific range of sleep hours for consistent tracking.
 *
 * The values are chosen to represent meaningful sleep duration ranges:
 * - 1: Very short sleep (0-2 hours)
 * - 3.5: Short sleep (2-4 hours)
 * - 5.5: Below recommended sleep (5-6 hours)
 * - 7.5: Recommended sleep (7-8 hours)
 * - 9: Extended sleep (9+ hours)
 *
 * @example
 * ```typescript
 * const sleepValue: SleepValue = 7.5; // Represents 7-8 hours of sleep
 * ```
 */ __turbopack_context__.s({
    "getSleep": (()=>getSleep),
    "sleepIndexMap": (()=>sleepIndexMap),
    "sleepMap": (()=>sleepMap),
    "sleepSteps": (()=>sleepSteps)
});
const sleepMap = {
    1: '0-2 hours',
    3.5: '2-4 hours',
    5.5: '5-6 hours',
    7.5: '7-8 hours',
    9: '9+ hours'
};
const sleepSteps = [
    1,
    3.5,
    5.5,
    7.5,
    9
];
const sleepIndexMap = {
    1: 1,
    3.5: 2,
    5.5: 3,
    7.5: 4,
    9: 5
};
function getSleep(value) {
    return sleepMap[value];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/TrendChart/CustomYAxisTick.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$sleep$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/sleep.ts [app-client] (ecmascript)");
;
;
/**
 * Custom Y-axis tick component for the trend chart
 *
 * This component renders custom tick labels for the Y-axis of the sleep trend chart.
 * It displays sleep duration labels with a sleep icon for each tick value.
 *
 * @param x - The x coordinate for positioning the tick (provided by Recharts)
 * @param y - The y coordinate for positioning the tick (provided by Recharts)
 * @param payload - The tick payload containing the value and other metadata (provided by Recharts)
 * @returns JSX element representing the custom tick or null for index 0
 *
 * @example
 * <CustomYAxisTick x={50} y={100} payload={{ value: 2 }} />
 * // Renders: [sleep icon] "2-4 hours"
 */ const CustomYAxisTick = ({ x, y, payload })=>{
    const index = payload.value;
    if (index === 0) {
        return null;
    }
    const sleepValue = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$sleep$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sleepSteps"][index - 1];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        transform: `translate(${x},${y})`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("image", {
                href: "/images/icon-sleep.svg",
                x: -60,
                y: -5,
                width: 10,
                height: 10,
                fill: "#57577B"
            }, void 0, false, {
                fileName: "[project]/src/components/TrendChart/CustomYAxisTick.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: -44,
                y: 0,
                textAnchor: "start",
                fontSize: "12",
                fill: "#57577B",
                dominantBaseline: "middle",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$sleep$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSleep"])(sleepValue)
            }, void 0, false, {
                fileName: "[project]/src/components/TrendChart/CustomYAxisTick.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TrendChart/CustomYAxisTick.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
};
_c = CustomYAxisTick;
const __TURBOPACK__default__export__ = CustomYAxisTick;
var _c;
__turbopack_context__.k.register(_c, "CustomYAxisTick");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/TrendChart/CustomTooltip.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$moods$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/moods.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$sleep$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/sleep.ts [app-client] (ecmascript)");
;
;
;
const TOOLTIP_CLASSES = {
    container: 'rounded-10 flex max-w-[175px] flex-col gap-150 border border-blue-100 bg-white p-150 text-sm text-neutral-800 shadow-lg',
    section: 'gap-075 flex flex-col',
    title: 'preset-8 text-neutral-800',
    content: 'preset-7 text-neutral-900',
    moodContent: 'preset-7 flex items-center gap-100 text-neutral-900',
    reflectionContent: 'preset-7 whitespace-pre-wrap text-neutral-900',
    moodIcon: 'h-200 w-200'
};
const TooltipSection = ({ title, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: TOOLTIP_CLASSES.section,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: TOOLTIP_CLASSES.title,
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/TrendChart/CustomTooltip.tsx",
                lineNumber: 30,
                columnNumber: 5
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TrendChart/CustomTooltip.tsx",
        lineNumber: 29,
        columnNumber: 3
    }, this);
_c = TooltipSection;
const CustomTooltip = ({ active, payload })=>{
    if (!active || !payload || payload.length === 0) {
        return null;
    }
    const logEntry = payload[0].payload;
    try {
        const mood = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$moods$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMood"])(logEntry.mood);
        const sleep = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$sleep$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSleep"])(logEntry.sleepHours);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: TOOLTIP_CLASSES.container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TooltipSection, {
                    title: "Mood",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: TOOLTIP_CLASSES.moodContent,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: mood.icon.color,
                                alt: mood.label,
                                className: TOOLTIP_CLASSES.moodIcon
                            }, void 0, false, {
                                fileName: "[project]/src/components/TrendChart/CustomTooltip.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this),
                            mood.label
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TrendChart/CustomTooltip.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/TrendChart/CustomTooltip.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TooltipSection, {
                    title: "Sleep",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: TOOLTIP_CLASSES.content,
                        children: sleep
                    }, void 0, false, {
                        fileName: "[project]/src/components/TrendChart/CustomTooltip.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/TrendChart/CustomTooltip.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TooltipSection, {
                    title: "Reflection",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: TOOLTIP_CLASSES.reflectionContent,
                        children: logEntry.journalEntry
                    }, void 0, false, {
                        fileName: "[project]/src/components/TrendChart/CustomTooltip.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/TrendChart/CustomTooltip.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this),
                logEntry.feelings && logEntry.feelings.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TooltipSection, {
                    title: "Tags",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: TOOLTIP_CLASSES.content,
                        children: logEntry.feelings.join(', ')
                    }, void 0, false, {
                        fileName: "[project]/src/components/TrendChart/CustomTooltip.tsx",
                        lineNumber: 65,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/TrendChart/CustomTooltip.tsx",
                    lineNumber: 64,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TrendChart/CustomTooltip.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this);
    } catch (error) {
        console.error('Error rendering tooltip:', error);
        return null;
    }
};
_c1 = CustomTooltip;
const __TURBOPACK__default__export__ = CustomTooltip;
var _c, _c1;
__turbopack_context__.k.register(_c, "TooltipSection");
__turbopack_context__.k.register(_c1, "CustomTooltip");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/TrendChart/TrendChart.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$LabelList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/LabelList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/ReferenceLine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$moods$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/moods.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrendChart$2f$CustomXAxisTick$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TrendChart/CustomXAxisTick.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrendChart$2f$CustomYAxisTick$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TrendChart/CustomYAxisTick.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$sleep$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/sleep.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrendChart$2f$CustomTooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TrendChart/CustomTooltip.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const TrendChart = ({ className, logs })=>{
    const transformedLogs = logs.map((log)=>({
            ...log,
            sleepIndex: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$sleep$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sleepIndexMap"][log.sleepHours]
        }));
    // Get the data that will actually be rendered in the chart
    const chartData = transformedLogs.slice(-11);
    console.log('transformedLogs', transformedLogs);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        as: "section",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "preset-3-mobile md:preset-3 font-semibold text-neutral-900",
                children: "Mood and sleep trends"
            }, void 0, false, {
                fileName: "[project]/src/components/TrendChart/TrendChart.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            transformedLogs && transformedLogs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                width: "100%",
                height: "100%",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                    data: chartData,
                    margin: {
                        top: 20,
                        right: 10,
                        bottom: 10,
                        left: 10
                    },
                    children: [
                        [
                            1,
                            2,
                            3,
                            4,
                            5
                        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReferenceLine"], {
                                y: i,
                                stroke: "#E0E6FA",
                                strokeWidth: 1
                            }, i, false, {
                                fileName: "[project]/src/components/TrendChart/TrendChart.tsx",
                                lineNumber: 46,
                                columnNumber: 15
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                            type: "number",
                            domain: [
                                0,
                                5
                            ],
                            ticks: [
                                0,
                                1,
                                2,
                                3,
                                4,
                                5
                            ],
                            axisLine: false,
                            tickLine: false,
                            tick: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrendChart$2f$CustomYAxisTick$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/components/TrendChart/TrendChart.tsx",
                                lineNumber: 54,
                                columnNumber: 21
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/src/components/TrendChart/TrendChart.tsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                            dataKey: "createdAt",
                            axisLine: false,
                            tickLine: false,
                            interval: 0,
                            tick: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrendChart$2f$CustomXAxisTick$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/components/TrendChart/TrendChart.tsx",
                                lineNumber: 61,
                                columnNumber: 21
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/src/components/TrendChart/TrendChart.tsx",
                            lineNumber: 56,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrendChart$2f$CustomTooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/components/TrendChart/TrendChart.tsx",
                                lineNumber: 63,
                                columnNumber: 31
                            }, void 0),
                            cursor: {
                                fill: 'transparent'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/TrendChart/TrendChart.tsx",
                            lineNumber: 63,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                            dataKey: "sleepIndex",
                            radius: [
                                30,
                                30,
                                30,
                                30
                            ],
                            barSize: 40,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$LabelList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LabelList"], {
                                    dataKey: "mood",
                                    content: ({ x, y, value })=>{
                                        const mood = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$moods$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMood"])(value);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("image", {
                                            href: mood.icon.white,
                                            x: Number(x) + 5,
                                            y: Number(y) + 5,
                                            width: 30,
                                            height: 30
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TrendChart/TrendChart.tsx",
                                            lineNumber: 70,
                                            columnNumber: 21
                                        }, void 0);
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TrendChart/TrendChart.tsx",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, this),
                                chartData.map((entry, index)=>{
                                    const mood = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$moods$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMood"])(entry.mood);
                                    console.log('entry', entry);
                                    console.log('mood', mood);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                        fill: mood.colorHex
                                    }, `${entry.createdAt}-${index}`, false, {
                                        fileName: "[project]/src/components/TrendChart/TrendChart.tsx",
                                        lineNumber: 84,
                                        columnNumber: 24
                                    }, this);
                                })
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/TrendChart/TrendChart.tsx",
                            lineNumber: 64,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/TrendChart/TrendChart.tsx",
                    lineNumber: 44,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/TrendChart/TrendChart.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TrendChart/TrendChart.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
};
_c = TrendChart;
const __TURBOPACK__default__export__ = TrendChart;
var _c;
__turbopack_context__.k.register(_c, "TrendChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/lib/utils/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "compareLast5WithPrevious5Mood": (()=>compareLast5WithPrevious5Mood),
    "compareLast5WithPrevious5Sleep": (()=>compareLast5WithPrevious5Sleep),
    "getAverageMoodLast5Days": (()=>getAverageMoodLast5Days),
    "getAverageSleepLast5Days": (()=>getAverageSleepLast5Days),
    "isValueEmpty": (()=>isValueEmpty)
});
function getAverageMoodLast5Days(moods) {
    if (!Array.isArray(moods) || moods.length < 5) return null;
    // Sort by createdAt descending (most recent first)
    const sorted = [
        ...moods
    ].sort((a, b)=>new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    const last5 = sorted.slice(0, 5);
    const sum = last5.reduce((acc, entry)=>acc + entry.mood, 0);
    const avg = Math.round(sum / 5);
    return avg;
}
function roundToSleepValue(value) {
    if (value < 2) return 1;
    if (value < 4) return 3.5;
    if (value < 6) return 5.5;
    if (value < 8) return 7.5;
    return 9;
}
function getAverageSleepLast5Days(logs) {
    if (!Array.isArray(logs) || logs.length < 5) return null;
    // Sort by createdAt descending (most recent first)
    const sorted = [
        ...logs
    ].sort((a, b)=>new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    const last5 = sorted.slice(0, 5);
    const sum = last5.reduce((acc, entry)=>acc + entry.sleepHours, 0);
    const avg = Math.round(sum / 5);
    return roundToSleepValue(avg);
}
function compareLast5WithPrevious5Mood(entries) {
    if (!Array.isArray(entries) || entries.length < 10) return null;
    // Sort by createdAt descending (most recent first)
    const sorted = [
        ...entries
    ].sort((a, b)=>new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    const last5 = sorted.slice(0, 5);
    const prev5 = sorted.slice(5, 10);
    const avgMood = (arr)=>arr.reduce((acc, entry)=>acc + entry.mood, 0) / arr.length;
    const last5Mood = avgMood(last5);
    const prev5Mood = avgMood(prev5);
    if (last5Mood > prev5Mood) return 'increase';
    if (last5Mood < prev5Mood) return 'decrease';
    return 'equal';
}
function compareLast5WithPrevious5Sleep(entries) {
    if (!Array.isArray(entries) || entries.length < 10) return null;
    // Sort by createdAt descending (most recent first)
    const sorted = [
        ...entries
    ].sort((a, b)=>new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    const last5 = sorted.slice(0, 5);
    const prev5 = sorted.slice(5, 10);
    const avgSleep = (arr)=>arr.reduce((acc, entry)=>acc + entry.sleepHours, 0) / arr.length;
    const last5Sleep = avgSleep(last5);
    const prev5Sleep = avgSleep(prev5);
    if (last5Sleep > prev5Sleep) return 'increase';
    if (last5Sleep < prev5Sleep) return 'decrease';
    return 'equal';
}
function isValueEmpty(value) {
    return value === null || value === undefined;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/AverageCard/AverageCard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const AverageCard = ({ children, title, backgroundColor })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-150",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "preset-5 text-neutral-900",
                children: [
                    title,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "preset-7 text-neutral-600",
                        children: " (Last 5 Check-ins)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AverageCard/AverageCard.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AverageCard/AverageCard.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${backgroundColor} rounded-16 px-200 py-300 flex flex-col gap-150 relative overflow-hidden`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/images/bg-pattern-averages.svg",
                        alt: "",
                        "aria-hidden": "true",
                        className: "absolute right-0 top-1/2 -translate-y-1/2 size-[200%] translate-x-5/8 pointer-events-none select-none",
                        style: {
                            zIndex: 0
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/AverageCard/AverageCard.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/components/AverageCard/AverageCard.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AverageCard/AverageCard.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AverageCard/AverageCard.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
};
_c = AverageCard;
const __TURBOPACK__default__export__ = AverageCard;
var _c;
__turbopack_context__.k.register(_c, "AverageCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/AverageCard/TendancyLine.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
;
const TendancyLine = ({ tendency, className = '' })=>{
    const getIconSrc = (tendency)=>{
        switch(tendency){
            case 'increase':
                return '/images/icon-trend-increase.svg';
            case 'decrease':
                return '/images/icon-trend-decrease.svg';
            case 'equal':
                return '/images/icon-trend-same.svg';
            default:
                return '/images/icon-trend-same.svg';
        }
    };
    const getLabel = (tendency)=>{
        switch(tendency){
            case 'increase':
                return 'Increase from the previous 5 check-ins';
            case 'decrease':
                return 'Decrease from the previous 5 check-ins';
            case 'equal':
                return 'Same as the previous 5 check-ins';
            default:
                return 'Same as the previous 5 check-ins';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-start gap-100 ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: getIconSrc(tendency),
                alt: `${tendency} trend`,
                width: 16,
                height: 16,
                className: "pt-025 flex-shrink-0"
            }, void 0, false, {
                fileName: "[project]/src/components/AverageCard/TendancyLine.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "preset-7",
                children: getLabel(tendency)
            }, void 0, false, {
                fileName: "[project]/src/components/AverageCard/TendancyLine.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AverageCard/TendancyLine.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
};
_c = TendancyLine;
const __TURBOPACK__default__export__ = TendancyLine;
var _c;
__turbopack_context__.k.register(_c, "TendancyLine");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/AverageCard/MoodAverageCard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// src/components/AverageCard.tsx
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$moods$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/moods.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AverageCard$2f$AverageCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AverageCard/AverageCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AverageCard$2f$TendancyLine$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AverageCard/TendancyLine.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/utils/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const MoodAverageCard = ({ value, logs })=>{
    _s();
    const [empty, setEmpty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValueEmpty"])(value));
    const [mood, setMood] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "MoodAverageCard.useState": ()=>!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValueEmpty"])(value) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$moods$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMood"])(value) : null
    }["MoodAverageCard.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MoodAverageCard.useEffect": ()=>{
            const isEmpty = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValueEmpty"])(value);
            setEmpty(isEmpty);
            setMood(!isEmpty ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$moods$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMood"])(value) : null);
        }
    }["MoodAverageCard.useEffect"], [
        value
    ]);
    const backgroundColor = !empty ? mood.color : 'bg-blue-100';
    const title = !empty ? mood.label : 'Keep tracking!';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AverageCard$2f$AverageCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: "Average Mood",
        backgroundColor: backgroundColor,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col justify-start gap-150",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-200",
                    children: [
                        !empty && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: mood.icon.white,
                            alt: "",
                            "aria-hidden": "true",
                            className: "size-300"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AverageCard/MoodAverageCard.tsx",
                            lineNumber: 35,
                            columnNumber: 22
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "preset-4 font-semibold text-neutral-900",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/components/AverageCard/MoodAverageCard.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AverageCard/MoodAverageCard.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                !empty ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AverageCard$2f$TendancyLine$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    tendency: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compareLast5WithPrevious5Mood"])(logs),
                    className: "text-neutral-900"
                }, void 0, false, {
                    fileName: "[project]/src/components/AverageCard/MoodAverageCard.tsx",
                    lineNumber: 40,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "preset-7 text-neutral-600",
                    children: "Log 5 check-ins to see your average mood."
                }, void 0, false, {
                    fileName: "[project]/src/components/AverageCard/MoodAverageCard.tsx",
                    lineNumber: 45,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AverageCard/MoodAverageCard.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/AverageCard/MoodAverageCard.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
};
_s(MoodAverageCard, "WgJeVMLM9ec+E2VTQ6b1PPsibZE=");
_c = MoodAverageCard;
const __TURBOPACK__default__export__ = MoodAverageCard;
var _c;
__turbopack_context__.k.register(_c, "MoodAverageCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/AverageCard/SleepAverageCard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$sleep$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/sleep.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/utils/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AverageCard$2f$AverageCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AverageCard/AverageCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AverageCard$2f$TendancyLine$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AverageCard/TendancyLine.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const SleepAverageCard = ({ value, logs })=>{
    _s();
    const [empty, setEmpty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValueEmpty"])(value));
    const [sleep, setSleep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "SleepAverageCard.useState": ()=>!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValueEmpty"])(value) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$sleep$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSleep"])(value) : null
    }["SleepAverageCard.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SleepAverageCard.useEffect": ()=>{
            const isEmpty = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValueEmpty"])(value);
            setEmpty(isEmpty);
            setSleep(!isEmpty ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$sleep$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSleep"])(value) : null);
        }
    }["SleepAverageCard.useEffect"], [
        value
    ]);
    const backgroundColor = !empty ? 'bg-blue-600' : 'bg-blue-100';
    const title = !empty ? sleep : 'Not enough data yet!';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AverageCard$2f$AverageCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: "Average Sleep",
        backgroundColor: backgroundColor,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col justify-start gap-150",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-200",
                    children: [
                        !empty && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/images/icon-sleep.svg",
                            alt: "",
                            "aria-hidden": "true",
                            className: "size-300"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AverageCard/SleepAverageCard.tsx",
                            lineNumber: 32,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "preset-4 font-semibold text-neutral-900",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/components/AverageCard/SleepAverageCard.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AverageCard/SleepAverageCard.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                !empty ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AverageCard$2f$TendancyLine$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    tendency: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compareLast5WithPrevious5Sleep"])(logs),
                    className: "text-neutral-900"
                }, void 0, false, {
                    fileName: "[project]/src/components/AverageCard/SleepAverageCard.tsx",
                    lineNumber: 37,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "preset-7 text-neutral-600",
                    children: "Log 5 check-ins to see your average mood."
                }, void 0, false, {
                    fileName: "[project]/src/components/AverageCard/SleepAverageCard.tsx",
                    lineNumber: 42,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AverageCard/SleepAverageCard.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/AverageCard/SleepAverageCard.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
};
_s(SleepAverageCard, "nriE/f+JtL1eVreDQryMgS+Dx/w=");
_c = SleepAverageCard;
const __TURBOPACK__default__export__ = SleepAverageCard;
var _c;
__turbopack_context__.k.register(_c, "SleepAverageCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/RadioButton.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const RadioButton = ({ value, checked, onChange, children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: `bg-neutral-0 flex items-center justify-between gap-150 rounded-xl border border-2 px-200 py-150 ${checked ? 'border-blue-600' : 'border-blue-100'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "radio",
                name: "mood",
                value: value,
                checked: checked,
                onChange: onChange,
                className: "peer hidden"
            }, void 0, false, {
                fileName: "[project]/src/components/RadioButton.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex h-250 w-250 items-center justify-center rounded-full border-2 border-blue-100 transition peer-checked:border-[6px] peer-checked:border-blue-600`
            }, void 0, false, {
                fileName: "[project]/src/components/RadioButton.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            children
        ]
    }, value, true, {
        fileName: "[project]/src/components/RadioButton.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
};
_c = RadioButton;
const __TURBOPACK__default__export__ = RadioButton;
var _c;
__turbopack_context__.k.register(_c, "RadioButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/LogModal/StepMood.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$moods$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/moods.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Button/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RadioButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RadioButton.tsx [app-client] (ecmascript)");
;
;
;
;
const StepMood = ({ mood, onSelect, onNext })=>{
    const moodValues = [
        -2,
        -1,
        0,
        1,
        2
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "preset-3 font-bold text-neutral-900",
                children: "How was your mood today?"
            }, void 0, false, {
                fileName: "[project]/src/components/LogModal/StepMood.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-150",
                children: moodValues.map((value)=>{
                    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$moods$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMood"])(value);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RadioButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        value: value.toString(),
                        checked: mood === value,
                        onChange: ()=>onSelect(value),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "preset-5 flex-1 font-semibold text-neutral-900",
                                children: data.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/LogModal/StepMood.tsx",
                                lineNumber: 27,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: data.icon.color,
                                alt: data.label,
                                className: "h-500 w-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/LogModal/StepMood.tsx",
                                lineNumber: 28,
                                columnNumber: 15
                            }, this)
                        ]
                    }, value, true, {
                        fileName: "[project]/src/components/LogModal/StepMood.tsx",
                        lineNumber: 21,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/LogModal/StepMood.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                label: "Continue",
                onClick: onNext,
                disabled: mood === null
            }, void 0, false, {
                fileName: "[project]/src/components/LogModal/StepMood.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
_c = StepMood;
const __TURBOPACK__default__export__ = StepMood;
var _c;
__turbopack_context__.k.register(_c, "StepMood");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/lib/feelings.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "FEELING_TAGS": (()=>FEELING_TAGS)
});
const FEELING_TAGS = [
    'Joyful',
    'Down',
    'Anxious',
    'Calm',
    'Excited',
    'Frustrated',
    'Lonely',
    'Grateful',
    'Overwhelmed',
    'Motivated',
    'Irritable',
    'Peaceful',
    'Tired',
    'Hopeful',
    'Confident',
    'Stressed',
    'Content',
    'Disappointed',
    'Optimistic',
    'Restless'
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Checkbox.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Checkbox = ({ tag, isChecked, handleChange, disabled = false })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: `bg-neutral-0 rounded-10 flex cursor-pointer items-center gap-100 border border-blue-100 px-150 py-200 text-sm font-medium transition peer-checked:border-blue-600 ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "checkbox",
                value: tag,
                checked: isChecked,
                onChange: handleChange,
                className: "peer hidden",
                disabled: disabled
            }, void 0, false, {
                fileName: "[project]/src/components/Checkbox.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `relative flex h-4 w-4 items-center justify-center rounded-[4px] border border-blue-100 transition peer-checked:border-blue-600 peer-checked:bg-blue-600`,
                children: isChecked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/images/icon-check.svg",
                    alt: "Check",
                    className: "h-100 w-100"
                }, void 0, false, {
                    fileName: "[project]/src/components/Checkbox.tsx",
                    lineNumber: 29,
                    columnNumber: 23
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Checkbox.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `preset-6 ${disabled ? 'text-neutral-300' : 'text-neutral-900'}`,
                children: tag
            }, void 0, false, {
                fileName: "[project]/src/components/Checkbox.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Checkbox.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
};
_c = Checkbox;
const __TURBOPACK__default__export__ = Checkbox;
var _c;
__turbopack_context__.k.register(_c, "Checkbox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Button/FooterButtons.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Button/Button.tsx [app-client] (ecmascript)");
;
;
const FooterButtons = ({ onBack, onNext, disabled = false, nextLabel = 'Continue' })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex w-full flex-col gap-150 md:flex-row",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "md:w-1/2",
                label: "Back",
                onClick: onBack,
                type: "secondary"
            }, void 0, false, {
                fileName: "[project]/src/components/Button/FooterButtons.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "md:w-1/2",
                label: nextLabel,
                onClick: onNext,
                disabled: disabled
            }, void 0, false, {
                fileName: "[project]/src/components/Button/FooterButtons.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Button/FooterButtons.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
};
_c = FooterButtons;
const __TURBOPACK__default__export__ = FooterButtons;
var _c;
__turbopack_context__.k.register(_c, "FooterButtons");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/LogModal/StepFeelings.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$feelings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/feelings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Checkbox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$FooterButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Button/FooterButtons.tsx [app-client] (ecmascript)");
;
;
;
;
const StepFeelings = ({ selected, onChange, onNext, onBack })=>{
    const toggleTag = (tag)=>{
        if (selected.includes(tag)) {
            onChange(selected.filter((t)=>t !== tag));
        } else if (selected.length < 3) {
            onChange([
                ...selected,
                tag
            ]);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "gap-075 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "preset-3 font-bold text-neutral-900",
                        children: "How did you feel?"
                    }, void 0, false, {
                        fileName: "[project]/src/components/LogModal/StepFeelings.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "preset-6 text-neutral-600",
                        children: "Select up to three tags:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/LogModal/StepFeelings.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/LogModal/StepFeelings.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-x-200 gap-y-150",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$feelings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FEELING_TAGS"].map((tag)=>{
                    const isSelected = selected.includes(tag);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        tag: tag,
                        isChecked: isSelected,
                        handleChange: ()=>toggleTag(tag),
                        disabled: selected.length >= 3 && !isSelected
                    }, tag, false, {
                        fileName: "[project]/src/components/LogModal/StepFeelings.tsx",
                        lineNumber: 32,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/LogModal/StepFeelings.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$FooterButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onBack: onBack,
                onNext: onNext,
                disabled: selected.length === 0
            }, void 0, false, {
                fileName: "[project]/src/components/LogModal/StepFeelings.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
_c = StepFeelings;
const __TURBOPACK__default__export__ = StepFeelings;
var _c;
__turbopack_context__.k.register(_c, "StepFeelings");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/LogModal/StepJournal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$FooterButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Button/FooterButtons.tsx [app-client] (ecmascript)");
;
;
const StepJournal = ({ value, onChange, onNext, onBack })=>{
    const maxLength = 150;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "preset-3 font-bold text-neutral-900",
                children: "Write about your day..."
            }, void 0, false, {
                fileName: "[project]/src/components/LogModal/StepJournal.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        value: value,
                        onChange: (e)=>onChange(e.target.value),
                        placeholder: "Today, I felt...",
                        maxLength: maxLength,
                        rows: 5,
                        className: "bg-neutral-0 w-full resize-none rounded-xl border border-gray-300 px-200 py-150 placeholder:text-neutral-600 placeholder:italic focus:ring-2 focus:ring-blue-500 focus:outline-none",
                        style: {
                            fontSize: '18px',
                            lineHeight: '130%',
                            letterSpacing: '0px'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/LogModal/StepJournal.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "preset-8 self-end text-neutral-600",
                        children: [
                            value.length,
                            "/",
                            maxLength
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/LogModal/StepJournal.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/LogModal/StepJournal.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$FooterButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onBack: onBack,
                onNext: onNext
            }, void 0, false, {
                fileName: "[project]/src/components/LogModal/StepJournal.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
_c = StepJournal;
const __TURBOPACK__default__export__ = StepJournal;
var _c;
__turbopack_context__.k.register(_c, "StepJournal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/LogModal/StepSleep.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$sleep$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/sleep.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$FooterButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Button/FooterButtons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RadioButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RadioButton.tsx [app-client] (ecmascript)");
;
;
;
;
const sleepOptions = [
    9,
    7.5,
    5.5,
    3.5,
    1
];
const StepSleep = ({ sleepHours, onSelect, onSubmit, onBack })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "preset-3 font-bold text-neutral-900",
                children: "How many hours did you sleep last night?"
            }, void 0, false, {
                fileName: "[project]/src/components/LogModal/StepSleep.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-100",
                children: sleepOptions.map((value)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RadioButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        value: value.toString(),
                        checked: sleepHours === value,
                        onChange: ()=>onSelect(value),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "preset-5 flex-1 font-semibold text-neutral-900",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$sleep$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sleepMap"][value]
                        }, void 0, false, {
                            fileName: "[project]/src/components/LogModal/StepSleep.tsx",
                            lineNumber: 29,
                            columnNumber: 13
                        }, this)
                    }, value, false, {
                        fileName: "[project]/src/components/LogModal/StepSleep.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/LogModal/StepSleep.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$FooterButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onBack: onBack,
                onNext: onSubmit,
                nextLabel: "Submit"
            }, void 0, false, {
                fileName: "[project]/src/components/LogModal/StepSleep.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
_c = StepSleep;
const __TURBOPACK__default__export__ = StepSleep;
var _c;
__turbopack_context__.k.register(_c, "StepSleep");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/LogModal/Stepper.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Stepper = ({ current })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "status",
                className: "sr-only",
                "aria-live": "polite",
                children: [
                    "Step ",
                    current + 1,
                    " of 4"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/LogModal/Stepper.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "progressbar",
                "aria-label": "Form Step Progress",
                "aria-valuenow": current,
                "aria-valuemin": 1,
                "aria-valuemax": 4,
                className: "grid grid-cols-4 gap-150",
                children: Array.from({
                    length: 4
                }).map((_, index)=>{
                    const isCompletedOrCurrent = index <= current;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `h-075 w-full rounded-full transition-all duration-300 ease-in-out ${isCompletedOrCurrent ? 'bg-blue-600' : 'bg-blue-100'} `
                    }, index, false, {
                        fileName: "[project]/src/components/LogModal/Stepper.tsx",
                        lineNumber: 23,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/LogModal/Stepper.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
_c = Stepper;
const __TURBOPACK__default__export__ = Stepper;
var _c;
__turbopack_context__.k.register(_c, "Stepper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/LogModal/LogModal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LogModal$2f$StepMood$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LogModal/StepMood.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LogModal$2f$StepFeelings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LogModal/StepFeelings.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LogModal$2f$StepJournal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LogModal/StepJournal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LogModal$2f$StepSleep$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LogModal/StepSleep.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LogModal$2f$Stepper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LogModal/Stepper.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$logStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/logStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
const LogModal = ({ onClose })=>{
    _s();
    const { addLog } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$logStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLogStore"])();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        mood: null,
        feelings: [],
        journalEntry: '',
        sleepHours: null
    });
    const handleNext = ()=>setStep((prev)=>prev + 1);
    const handleBack = ()=>setStep((prev)=>prev - 1);
    const updateFormData = (updates)=>{
        setFormData((prev)=>({
                ...prev,
                ...updates
            }));
    };
    const handleSubmit = async ()=>{
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["submitLog"])(formData);
            addLog(result);
            console.log('✅ Saved:', result);
            onClose();
        } catch (error) {
            console.error('❌ Submission failed:', error);
            alert('Something went wrong. Please try again.');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gradient-light relative flex w-full max-w-xl flex-col gap-300 rounded-2xl px-250 py-400 shadow-lg md:gap-400 md:px-500 md:py-600",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "absolute top-400 right-400 text-2xl text-neutral-300 hover:text-neutral-500",
                    onClick: onClose,
                    children: "×"
                }, void 0, false, {
                    fileName: "[project]/src/components/LogModal/LogModal.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "preset-2 font-bold text-neutral-900",
                    children: "Log your mood"
                }, void 0, false, {
                    fileName: "[project]/src/components/LogModal/LogModal.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LogModal$2f$Stepper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    current: step
                }, void 0, false, {
                    fileName: "[project]/src/components/LogModal/LogModal.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this),
                step === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LogModal$2f$StepMood$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    mood: formData.mood,
                    onSelect: (mood)=>updateFormData({
                            mood
                        }),
                    onNext: handleNext
                }, void 0, false, {
                    fileName: "[project]/src/components/LogModal/LogModal.tsx",
                    lineNumber: 56,
                    columnNumber: 11
                }, this),
                step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LogModal$2f$StepFeelings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    selected: formData.feelings,
                    onChange: (feelings)=>updateFormData({
                            feelings
                        }),
                    onNext: handleNext,
                    onBack: handleBack
                }, void 0, false, {
                    fileName: "[project]/src/components/LogModal/LogModal.tsx",
                    lineNumber: 63,
                    columnNumber: 11
                }, this),
                step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LogModal$2f$StepJournal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    value: formData.journalEntry,
                    onChange: (journalEntry)=>updateFormData({
                            journalEntry
                        }),
                    onNext: handleNext,
                    onBack: handleBack
                }, void 0, false, {
                    fileName: "[project]/src/components/LogModal/LogModal.tsx",
                    lineNumber: 71,
                    columnNumber: 11
                }, this),
                step === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LogModal$2f$StepSleep$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    sleepHours: formData.sleepHours,
                    onSelect: (sleepHours)=>updateFormData({
                            sleepHours
                        }),
                    onSubmit: handleSubmit,
                    onBack: handleBack
                }, void 0, false, {
                    fileName: "[project]/src/components/LogModal/LogModal.tsx",
                    lineNumber: 79,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/LogModal/LogModal.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/LogModal/LogModal.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
};
_s(LogModal, "Qh8v6K3y07RbbMCz1iDJ69UpjBE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$logStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLogStore"]
    ];
});
_c = LogModal;
const __TURBOPACK__default__export__ = LogModal;
var _c;
__turbopack_context__.k.register(_c, "LogModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Greetings$2f$Greetings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Greetings/Greetings.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrendChart$2f$TrendChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TrendChart/TrendChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/utils/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AverageCard$2f$MoodAverageCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AverageCard/MoodAverageCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AverageCard$2f$SleepAverageCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AverageCard/SleepAverageCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LogModal$2f$LogModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LogModal/LogModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$logStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/logStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$quoteStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/quoteStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
const HomePage = ()=>{
    _s();
    const { logs, fetchLogs } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$logStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLogStore"])();
    const { fetchQuotes } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$quoteStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuoteStore"])();
    const [showLogModal, setShowLogModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            async function loadData() {
                try {
                    await fetchLogs();
                    await fetchQuotes();
                } catch (err) {
                    console.error('Failed to load logs:', err);
                }
            }
            loadData();
        }
    }["HomePage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "layout-grid px-200 pt-600 pb-1000 font-sans md:px-500 lg:gap-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Greetings$2f$Greetings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "area-greeting",
                        onOpenLogModal: ()=>setShowLogModal(true)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        as: "section",
                        className: "area-cards",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AverageCard$2f$MoodAverageCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                value: logs.length > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAverageMoodLast5Days"])(logs) : null,
                                logs: logs
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AverageCard$2f$SleepAverageCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                value: logs.length > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$utils$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAverageSleepLast5Days"])(logs) : null,
                                logs: logs
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrendChart$2f$TrendChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "area-chart min-h-[420px]",
                        logs: logs
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    showLogModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LogModal$2f$LogModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onClose: ()=>setShowLogModal(false)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 50,
                        columnNumber: 26
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
_s(HomePage, "J4ZBVhjh2Mrxb9bbEPHsyql2Jnc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$logStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLogStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$quoteStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuoteStore"]
    ];
});
_c = HomePage;
const __TURBOPACK__default__export__ = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_dd99cb36._.js.map