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

/***/ "./src/components/VideoJs/index.tsx":
/*!******************************************!*\
  !*** ./src/components/VideoJs/index.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"VideoJS\": function() { return /* binding */ VideoJS; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! video.js */ \"./node_modules/video.js/dist/video.es.js\");\n/* harmony import */ var video_js_dist_video_js_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! video.js/dist/video-js.css */ \"./node_modules/video.js/dist/video-js.css\");\n/* harmony import */ var video_js_dist_video_js_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(video_js_dist_video_js_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst VideoJS = (props)=>{\n    _s();\n    const videoRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    const playerRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef();\n    const { options , onReady  } = props;\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        // Make sure Video.js player is only initialized once\n        if (!playerRef.current) {\n            // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode. \n            const videoElement = document.createElement(\"video-js\");\n            videoElement.classList.add(\"vjs-big-play-centered\");\n            videoRef.current.appendChild(videoElement);\n            const player = playerRef.current = (0,video_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(videoElement, options, ()=>{\n                onReady && onReady(player);\n            });\n        // You could update an existing player in the `else` block here\n        // on prop change, for example:\n        } else {\n            const player = playerRef.current;\n            if (player) {\n                player.autoplay(true);\n                player.src(options.sources);\n            }\n        }\n    }, [\n        options,\n        videoRef\n    ]);\n    // Dispose the Video.js player when the functional component unmounts\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        const player = playerRef.current;\n        return ()=>{\n            if (player && !player.isDisposed()) {\n                player.dispose();\n                playerRef.current = null;\n            }\n        };\n    }, [\n        playerRef\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        \"data-vjs-player\": true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ref: videoRef\n        }, void 0, false, {\n            fileName: \"/home/arthur/Projects/studies/codetv/frontend/src/components/VideoJs/index.tsx\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/arthur/Projects/studies/codetv/frontend/src/components/VideoJs/index.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n_s(VideoJS, \"bnDqIex76F+3YH3m5e6j2tGQJQ0=\");\n_c = VideoJS;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VideoJS);\nvar _c;\n$RefreshReg$(_c, \"VideoJS\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9WaWRlb0pzL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ0s7QUFDSztBQUU3QixNQUFNRSxVQUFVLENBQUNDLFFBQWU7O0lBQ3JDLE1BQU1DLFdBQVdKLG1EQUFZLENBQWlCLElBQUk7SUFDbEQsTUFBTU0sWUFBWU4sbURBQVk7SUFDOUIsTUFBTSxFQUFDTyxRQUFPLEVBQUVDLFFBQU8sRUFBQyxHQUFHTDtJQUUzQkgsc0RBQWUsQ0FBQyxJQUFNO1FBRXBCLHFEQUFxRDtRQUNyRCxJQUFJLENBQUNNLFVBQVVJLE9BQU8sRUFBRTtZQUN0Qix1RkFBdUY7WUFDdkYsTUFBTUMsZUFBZUMsU0FBU0MsYUFBYSxDQUFDO1lBRTVDRixhQUFhRyxTQUFTLENBQUNDLEdBQUcsQ0FBQztZQUMzQlgsU0FBU00sT0FBTyxDQUFDTSxXQUFXLENBQUNMO1lBRTdCLE1BQU1NLFNBQVNYLFVBQVVJLE9BQU8sR0FBR1Qsb0RBQU9BLENBQUNVLGNBQWNKLFNBQVMsSUFBTTtnQkFDdEVDLFdBQVdBLFFBQVFTO1lBQ3JCO1FBRUYsK0RBQStEO1FBQy9ELCtCQUErQjtRQUMvQixPQUFPO1lBQ0wsTUFBTUEsU0FBU1gsVUFBVUksT0FBTztZQUNoQyxJQUFHTyxRQUFRO2dCQUNUQSxPQUFPQyxRQUFRLENBQUMsSUFBSTtnQkFDcEJELE9BQU9FLEdBQUcsQ0FBQ1osUUFBUWEsT0FBTztZQUM1QixDQUFDO1FBQ0gsQ0FBQztJQUNILEdBQUc7UUFBQ2I7UUFBU0g7S0FBUztJQUV0QixxRUFBcUU7SUFDckVKLHNEQUFlLENBQUMsSUFBTTtRQUNwQixNQUFNaUIsU0FBU1gsVUFBVUksT0FBTztRQUVoQyxPQUFPLElBQU07WUFDWCxJQUFJTyxVQUFVLENBQUNBLE9BQU9JLFVBQVUsSUFBSTtnQkFDbENKLE9BQU9LLE9BQU87Z0JBQ2RoQixVQUFVSSxPQUFPLEdBQUcsSUFBSTtZQUMxQixDQUFDO1FBQ0g7SUFDRixHQUFHO1FBQUNKO0tBQVU7SUFFZCxxQkFDRSw4REFBQ2lCO1FBQUlDLGlCQUFlO2tCQUNsQiw0RUFBQ0Q7WUFBSUUsS0FBS3JCOzs7Ozs7Ozs7OztBQUdoQixFQUFDO0dBL0NZRjtLQUFBQTtBQWlEYiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9WaWRlb0pzL2luZGV4LnRzeD8wMGJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdmlkZW9qcyBmcm9tICd2aWRlby5qcyc7XG5pbXBvcnQgJ3ZpZGVvLmpzL2Rpc3QvdmlkZW8tanMuY3NzJztcblxuZXhwb3J0IGNvbnN0IFZpZGVvSlMgPSAocHJvcHM6IGFueSkgPT4ge1xuICBjb25zdCB2aWRlb1JlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IHBsYXllclJlZiA9IFJlYWN0LnVzZVJlZjxhbnk+KCk7XG4gIGNvbnN0IHtvcHRpb25zLCBvblJlYWR5fSA9IHByb3BzO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICAvLyBNYWtlIHN1cmUgVmlkZW8uanMgcGxheWVyIGlzIG9ubHkgaW5pdGlhbGl6ZWQgb25jZVxuICAgIGlmICghcGxheWVyUmVmLmN1cnJlbnQpIHtcbiAgICAgIC8vIFRoZSBWaWRlby5qcyBwbGF5ZXIgbmVlZHMgdG8gYmUgX2luc2lkZV8gdGhlIGNvbXBvbmVudCBlbCBmb3IgUmVhY3QgMTggU3RyaWN0IE1vZGUuIFxuICAgICAgY29uc3QgdmlkZW9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInZpZGVvLWpzXCIpO1xuXG4gICAgICB2aWRlb0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgndmpzLWJpZy1wbGF5LWNlbnRlcmVkJyk7XG4gICAgICB2aWRlb1JlZi5jdXJyZW50LmFwcGVuZENoaWxkKHZpZGVvRWxlbWVudCk7XG5cbiAgICAgIGNvbnN0IHBsYXllciA9IHBsYXllclJlZi5jdXJyZW50ID0gdmlkZW9qcyh2aWRlb0VsZW1lbnQsIG9wdGlvbnMsICgpID0+IHtcbiAgICAgICAgb25SZWFkeSAmJiBvblJlYWR5KHBsYXllcik7XG4gICAgICB9KTtcblxuICAgIC8vIFlvdSBjb3VsZCB1cGRhdGUgYW4gZXhpc3RpbmcgcGxheWVyIGluIHRoZSBgZWxzZWAgYmxvY2sgaGVyZVxuICAgIC8vIG9uIHByb3AgY2hhbmdlLCBmb3IgZXhhbXBsZTpcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcGxheWVyID0gcGxheWVyUmVmLmN1cnJlbnQ7XG4gICAgICBpZihwbGF5ZXIpIHtcbiAgICAgICAgcGxheWVyLmF1dG9wbGF5KHRydWUpO1xuICAgICAgICBwbGF5ZXIuc3JjKG9wdGlvbnMuc291cmNlcyk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbb3B0aW9ucywgdmlkZW9SZWZdKTtcblxuICAvLyBEaXNwb3NlIHRoZSBWaWRlby5qcyBwbGF5ZXIgd2hlbiB0aGUgZnVuY3Rpb25hbCBjb21wb25lbnQgdW5tb3VudHNcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBwbGF5ZXIgPSBwbGF5ZXJSZWYuY3VycmVudDtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAocGxheWVyICYmICFwbGF5ZXIuaXNEaXNwb3NlZCgpKSB7XG4gICAgICAgIHBsYXllci5kaXNwb3NlKCk7XG4gICAgICAgIHBsYXllclJlZi5jdXJyZW50ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBbcGxheWVyUmVmXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGRhdGEtdmpzLXBsYXllcj5cbiAgICAgIDxkaXYgcmVmPXt2aWRlb1JlZn0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlkZW9KUzsiXSwibmFtZXMiOlsiUmVhY3QiLCJ2aWRlb2pzIiwiVmlkZW9KUyIsInByb3BzIiwidmlkZW9SZWYiLCJ1c2VSZWYiLCJwbGF5ZXJSZWYiLCJvcHRpb25zIiwib25SZWFkeSIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJ2aWRlb0VsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsInBsYXllciIsImF1dG9wbGF5Iiwic3JjIiwic291cmNlcyIsImlzRGlzcG9zZWQiLCJkaXNwb3NlIiwiZGl2IiwiZGF0YS12anMtcGxheWVyIiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/VideoJs/index.tsx\n"));

/***/ })

});