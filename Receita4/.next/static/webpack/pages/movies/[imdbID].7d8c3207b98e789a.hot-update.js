"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/movies/[imdbID]",{

/***/ "./pages/movies/[imdbID].js":
/*!**********************************!*\
  !*** ./pages/movies/[imdbID].js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Movies; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\n\n\nfunction Movies() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var imdbID = router.query.imdbID;\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"http://www.omdbapi.com/?apikey=9b30f837&i=\" + imdbID, fetcher), data = ref.data, error = ref.error;\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"falha na requisi\\xe7\\xe3o...\"\n    }, void 0, false, {\n        fileName: \"/home/vitor/pweb/Receita4/pages/movies/[imdbID].js\",\n        lineNumber: 11,\n        columnNumber: 23\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"carregando...\"\n    }, void 0, false, {\n        fileName: \"/home/vitor/pweb/Receita4/pages/movies/[imdbID].js\",\n        lineNumber: 13,\n        columnNumber: 23\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: data.Poster\n                    }, void 0, false, {\n                        fileName: \"/home/vitor/pweb/Receita4/pages/movies/[imdbID].js\",\n                        lineNumber: 18,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/home/vitor/pweb/Receita4/pages/movies/[imdbID].js\",\n                        lineNumber: 18,\n                        columnNumber: 46\n                    }, this),\n                    data.Title,\n                    \" --- \",\n                    data.Year\n                ]\n            }, void 0, true, {\n                fileName: \"/home/vitor/pweb/Receita4/pages/movies/[imdbID].js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"movies\"\n            }, void 0, false, {\n                fileName: \"/home/vitor/pweb/Receita4/pages/movies/[imdbID].js\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/vitor/pweb/Receita4/pages/movies/[imdbID].js\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, this);\n}\n_s(Movies, \"mZuyhWoEayG5q+fyCgnn11lj9Sg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = Movies;\nfunction fetcher(url) {\n    return _fetcher.apply(this, arguments);\n}\nfunction _fetcher() {\n    _fetcher = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function(url) {\n        var res, json;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    return [\n                        4,\n                        fetch(url)\n                    ];\n                case 1:\n                    res = _state.sent();\n                    return [\n                        4,\n                        res.json()\n                    ];\n                case 2:\n                    json = _state.sent();\n                    return [\n                        2,\n                        json\n                    ];\n            }\n        });\n    });\n    return _fetcher.apply(this, arguments);\n}\nvar _c;\n$RefreshReg$(_c, \"Movies\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMvW2ltZGJJRF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUF3QjtBQUVlO0FBRXhCLFNBQVNFLE1BQU0sR0FBRTs7SUFDNUIsSUFBTUMsTUFBTSxHQUFHRixzREFBUyxFQUFFO0lBQzFCLElBQU0sTUFBUSxHQUFLRSxNQUFNLENBQUNFLEtBQUssQ0FBdkJELE1BQU07SUFFZCxJQUFzQkosR0FBc0UsR0FBdEVBLCtDQUFNLENBQUMsNENBQTRDLEdBQUdJLE1BQU0sRUFBRUUsT0FBTyxDQUFDLEVBQXJGQyxJQUFJLEdBQVdQLEdBQXNFLENBQXJGTyxJQUFJLEVBQUVDLEtBQUssR0FBSVIsR0FBc0UsQ0FBL0VRLEtBQUs7SUFFbEIsSUFBSUEsS0FBSyxFQUFFLHFCQUFPLDhEQUFDQyxLQUFHO2tCQUFDLDhCQUFzQjs7Ozs7WUFBTTtJQUVuRCxJQUFJLENBQUNGLElBQUksRUFBRSxxQkFBTyw4REFBQ0UsS0FBRztrQkFBQyxlQUFhOzs7OztZQUFNO0lBRTFDLHFCQUNJLDhEQUFDQSxLQUFHOzswQkFDQSw4REFBQ0EsS0FBRzs7a0NBQ0EsOERBQUNDLEtBQUc7d0JBQUNDLEdBQUcsRUFBRUosSUFBSSxDQUFDSyxNQUFNOzs7Ozs0QkFBUTtrQ0FBQSw4REFBQ0MsSUFBRTs7Ozs0QkFBRTtvQkFDakNOLElBQUksQ0FBQ08sS0FBSztvQkFBQyxPQUFLO29CQUFDUCxJQUFJLENBQUNRLElBQUk7Ozs7OztvQkFDekI7MEJBQ04sOERBQUNDLEdBQUM7Z0JBQUNDLElBQUksRUFBQyxRQUFROzs7OztvQkFBSzs7Ozs7O1lBQ25CLENBRVQ7QUFFTCxDQUFDO0dBckJ1QmYsTUFBTTs7UUFDWEQsa0RBQVM7UUFHRkQsMkNBQU07OztBQUpSRSxLQUFBQSxNQUFNO1NBeUJmSSxPQUFPLENBQUNZLEdBQUc7V0FBWFosUUFBTzs7U0FBUEEsUUFBTztJQUFQQSxRQUFPLEdBQXRCLDZGQUF1QlksR0FBRyxFQUFFO1lBRWxCQyxHQUFHLEVBRUhDLElBQUk7Ozs7b0JBRkU7O3dCQUFNQyxLQUFLLENBQUNILEdBQUcsQ0FBQztzQkFBQTs7b0JBQXRCQyxHQUFHLEdBQUcsYUFBZ0I7b0JBRWY7O3dCQUFNQSxHQUFHLENBQUNDLElBQUksRUFBRTtzQkFBQTs7b0JBQXZCQSxJQUFJLEdBQUcsYUFBZ0I7b0JBRTdCOzt3QkFBT0EsSUFBSTtzQkFBQzs7O0lBRWhCLENBQUM7V0FSY2QsUUFBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9tb3ZpZXMvW2ltZGJJRF0uanM/MzFkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcblxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vdmllcygpe1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHsgaW1kYklEIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgICBjb25zdCB7ZGF0YSwgZXJyb3J9ID0gdXNlU1dSKFwiaHR0cDovL3d3dy5vbWRiYXBpLmNvbS8/YXBpa2V5PTliMzBmODM3Jmk9XCIgKyBpbWRiSUQsIGZldGNoZXIpOyAgICBcblxuICAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+ZmFsaGEgbmEgcmVxdWlzacOnw6NvLi4uPC9kaXY+XG5cbiAgICBpZiAoIWRhdGEpIHJldHVybiA8ZGl2PmNhcnJlZ2FuZG8uLi48L2Rpdj5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLlBvc3Rlcn0+PC9pbWc+PGJyLz5cbiAgICAgICAgICAgICAgICB7ZGF0YS5UaXRsZX0gLS0tIHtkYXRhLlllYXJ9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxhIGhyZWY9J21vdmllcyc+PC9hPlxuICAgICAgICA8L2Rpdj5cblxuICAgICkgICAgXG5cbn1cblxuXG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoZXIodXJsKSB7XG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICByZXR1cm4ganNvbjtcblxufVxuXG4iXSwibmFtZXMiOlsidXNlU1dSIiwidXNlUm91dGVyIiwiTW92aWVzIiwicm91dGVyIiwiaW1kYklEIiwicXVlcnkiLCJmZXRjaGVyIiwiZGF0YSIsImVycm9yIiwiZGl2IiwiaW1nIiwic3JjIiwiUG9zdGVyIiwiYnIiLCJUaXRsZSIsIlllYXIiLCJhIiwiaHJlZiIsInVybCIsInJlcyIsImpzb24iLCJmZXRjaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/movies/[imdbID].js\n"));

/***/ })

});