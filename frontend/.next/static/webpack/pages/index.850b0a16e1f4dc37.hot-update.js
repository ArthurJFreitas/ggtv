"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Video/index.tsx":
/*!****************************************!*\
  !*** ./src/components/Video/index.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Video; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _VideoJs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../VideoJs */ \"./src/components/VideoJs/index.tsx\");\n/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! video.js */ \"./node_modules/video.js/dist/video.es.js\");\n\nvar _s = $RefreshSig$();\n\n// This imports the functional component from the previous sample.\n\n\nfunction Video() {\n    _s();\n    const playerRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    const videoJsOptions = {\n        autoplay: true,\n        controls: true,\n        responsive: true,\n        muted: true,\n        fluid: true,\n        html5: {\n            hls: {\n                enableLowInitialPlaylist: true,\n                smoothQualityChange: true,\n                overrideNative: true\n            }\n        },\n        sources: [\n            {\n                src: \"http://127.0.0.1:8888/live/0wBic-qV4/index.m3u8\",\n                type: \"application/x-mpegURL\"\n            }\n        ]\n    };\n    const handlePlayerReady = (player)=>{\n        playerRef.current = player;\n        // You can handle player events here, for example:\n        player.on(\"waiting\", ()=>{\n            video_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].log(\"player is waiting\");\n        });\n        player.on(\"dispose\", ()=>{\n            video_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].log(\"player will dispose\");\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_VideoJs__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            options: videoJsOptions,\n            onReady: handlePlayerReady\n        }, void 0, false, {\n            fileName: \"/home/arthur/Projects/studies/codetv/frontend/src/components/Video/index.tsx\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Video, \"ezlvRaRDG1HW7XN2TkWUyOHHTRM=\");\n_c = Video;\nvar _c;\n$RefreshReg$(_c, \"Video\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9WaWRlby9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTBCO0FBRTFCLGtFQUFrRTtBQUNsQztBQUNEO0FBRWhCLFNBQVNHLFFBQU87O0lBQzdCLE1BQU1DLFlBQVlKLG1EQUFZLENBQUMsSUFBSTtJQUVuQyxNQUFNTSxpQkFBaUI7UUFDckJDLFVBQVUsSUFBSTtRQUNkQyxVQUFVLElBQUk7UUFDZEMsWUFBWSxJQUFJO1FBQ2hCQyxPQUFPLElBQUk7UUFDWEMsT0FBTyxJQUFJO1FBQ1hDLE9BQU87WUFDTEMsS0FBSztnQkFDSEMsMEJBQTBCLElBQUk7Z0JBQzlCQyxxQkFBcUIsSUFBSTtnQkFDekJDLGdCQUFnQixJQUFJO1lBQ3RCO1FBQ0Y7UUFDQUMsU0FBUztZQUFDO2dCQUNSQyxLQUFJO2dCQUNKQyxNQUFNO1lBQ1I7U0FBRTtJQUNKO0lBRUEsTUFBTUMsb0JBQW9CLENBQUNDLFNBQWdCO1FBQ3pDakIsVUFBVWtCLE9BQU8sR0FBR0Q7UUFFcEIsa0RBQWtEO1FBQ2xEQSxPQUFPRSxFQUFFLENBQUMsV0FBVyxJQUFNO1lBQ3pCckIsb0RBQVcsQ0FBQztRQUNkO1FBRUFtQixPQUFPRSxFQUFFLENBQUMsV0FBVyxJQUFNO1lBQ3pCckIsb0RBQVcsQ0FBQztRQUNkO0lBQ0Y7SUFFQSxxQkFDRTtrQkFDRSw0RUFBQ0QsZ0RBQU9BO1lBQUN3QixTQUFTbkI7WUFBZ0JvQixTQUFTTjs7Ozs7OztBQUdqRCxDQUFDO0dBeEN1QmpCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1ZpZGVvL2luZGV4LnRzeD9jMWJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8vIFRoaXMgaW1wb3J0cyB0aGUgZnVuY3Rpb25hbCBjb21wb25lbnQgZnJvbSB0aGUgcHJldmlvdXMgc2FtcGxlLlxuaW1wb3J0IFZpZGVvSlMgZnJvbSAnLi4vVmlkZW9KcydcbmltcG9ydCB2aWRlb2pzIGZyb20gJ3ZpZGVvLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlkZW8oKXtcbiAgY29uc3QgcGxheWVyUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IHZpZGVvSnNPcHRpb25zID0ge1xuICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgIGNvbnRyb2xzOiB0cnVlLFxuICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgbXV0ZWQ6IHRydWUsXG4gICAgZmx1aWQ6IHRydWUsXG4gICAgaHRtbDU6IHtcbiAgICAgIGhsczoge1xuICAgICAgICBlbmFibGVMb3dJbml0aWFsUGxheWxpc3Q6IHRydWUsXG4gICAgICAgIHNtb290aFF1YWxpdHlDaGFuZ2U6IHRydWUsXG4gICAgICAgIG92ZXJyaWRlTmF0aXZlOiB0cnVlLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHNvdXJjZXM6IFt7XG4gICAgICBzcmM6J2h0dHA6Ly8xMjcuMC4wLjE6ODg4OC9saXZlLzB3QmljLXFWNC9pbmRleC5tM3U4JyxcbiAgICAgIHR5cGU6ICdhcHBsaWNhdGlvbi94LW1wZWdVUkwnXG4gICAgfV1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVQbGF5ZXJSZWFkeSA9IChwbGF5ZXI6IGFueSkgPT4ge1xuICAgIHBsYXllclJlZi5jdXJyZW50ID0gcGxheWVyO1xuXG4gICAgLy8gWW91IGNhbiBoYW5kbGUgcGxheWVyIGV2ZW50cyBoZXJlLCBmb3IgZXhhbXBsZTpcbiAgICBwbGF5ZXIub24oJ3dhaXRpbmcnLCAoKSA9PiB7XG4gICAgICB2aWRlb2pzLmxvZygncGxheWVyIGlzIHdhaXRpbmcnKTtcbiAgICB9KTtcblxuICAgIHBsYXllci5vbignZGlzcG9zZScsICgpID0+IHtcbiAgICAgIHZpZGVvanMubG9nKCdwbGF5ZXIgd2lsbCBkaXNwb3NlJyk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFZpZGVvSlMgb3B0aW9ucz17dmlkZW9Kc09wdGlvbnN9IG9uUmVhZHk9e2hhbmRsZVBsYXllclJlYWR5fSAvPlxuICAgIDwvPlxuICApO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsIlZpZGVvSlMiLCJ2aWRlb2pzIiwiVmlkZW8iLCJwbGF5ZXJSZWYiLCJ1c2VSZWYiLCJ2aWRlb0pzT3B0aW9ucyIsImF1dG9wbGF5IiwiY29udHJvbHMiLCJyZXNwb25zaXZlIiwibXV0ZWQiLCJmbHVpZCIsImh0bWw1IiwiaGxzIiwiZW5hYmxlTG93SW5pdGlhbFBsYXlsaXN0Iiwic21vb3RoUXVhbGl0eUNoYW5nZSIsIm92ZXJyaWRlTmF0aXZlIiwic291cmNlcyIsInNyYyIsInR5cGUiLCJoYW5kbGVQbGF5ZXJSZWFkeSIsInBsYXllciIsImN1cnJlbnQiLCJvbiIsImxvZyIsIm9wdGlvbnMiLCJvblJlYWR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Video/index.tsx\n"));

/***/ })

});