"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/location",{

/***/ "./pages/location.js":
/*!***************************!*\
  !*** ./pages/location.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Location; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\n\n\nfunction Location() {\n    var _this = this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var imdbID = router.query.imdbID;\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"https://extreme-ip-lookup.com/json/?key=bUGSZs7LZXoyY5hTMie7\", fetcher), data = ref.data, error = ref.error;\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"falha na requisi\\xe7\\xe3o...\"\n    }, void 0, false, {\n        fileName: \"/home/vitor/pweb/Receita4/pages/location.js\",\n        lineNumber: 11,\n        columnNumber: 23\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"carregando...\"\n    }, void 0, false, {\n        fileName: \"/home/vitor/pweb/Receita4/pages/location.js\",\n        lineNumber: 13,\n        columnNumber: 23\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            Object.keys(data).map(function(v) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                children: v\n                            }, void 0, false, {\n                                fileName: \"/home/vitor/pweb/Receita4/pages/location.js\",\n                                lineNumber: 19,\n                                columnNumber: 24\n                            }, _this),\n                            data[v]\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/vitor/pweb/Receita4/pages/location.js\",\n                        lineNumber: 19,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/vitor/pweb/Receita4/pages/location.js\",\n                    lineNumber: 18,\n                    columnNumber: 17\n                }, _this);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"./\",\n                children: \"Movies\"\n            }, void 0, false, {\n                fileName: \"/home/vitor/pweb/Receita4/pages/location.js\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/vitor/pweb/Receita4/pages/location.js\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, this);\n}\n_s(Location, \"mZuyhWoEayG5q+fyCgnn11lj9Sg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = Location;\nfunction fetcher(url) {\n    return _fetcher.apply(this, arguments);\n}\nfunction _fetcher() {\n    _fetcher = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function(url) {\n        var res, json;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    return [\n                        4,\n                        fetch(url)\n                    ];\n                case 1:\n                    res = _state.sent();\n                    return [\n                        4,\n                        res.json()\n                    ];\n                case 2:\n                    json = _state.sent();\n                    return [\n                        2,\n                        json\n                    ];\n            }\n        });\n    });\n    return _fetcher.apply(this, arguments);\n}\nvar _c;\n$RefreshReg$(_c, \"Location\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2NhdGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQXdCO0FBRWU7QUFFeEIsU0FBU0UsUUFBUSxHQUFFOzs7SUFDOUIsSUFBTUMsTUFBTSxHQUFHRixzREFBUyxFQUFFO0lBQzFCLElBQU0sTUFBUSxHQUFLRSxNQUFNLENBQUNFLEtBQUssQ0FBdkJELE1BQU07SUFFZCxJQUFzQkosR0FBK0UsR0FBL0VBLCtDQUFNLENBQUMsOERBQThELEVBQUVNLE9BQU8sQ0FBQyxFQUE5RkMsSUFBSSxHQUFXUCxHQUErRSxDQUE5Rk8sSUFBSSxFQUFFQyxLQUFLLEdBQUlSLEdBQStFLENBQXhGUSxLQUFLO0lBRWxCLElBQUlBLEtBQUssRUFBRSxxQkFBTyw4REFBQ0MsS0FBRztrQkFBQyw4QkFBc0I7Ozs7O1lBQU07SUFFbkQsSUFBSSxDQUFDRixJQUFJLEVBQUUscUJBQU8sOERBQUNFLEtBQUc7a0JBQUMsZUFBYTs7Ozs7WUFBTTtJQUUxQyxxQkFDSSw4REFBQ0EsS0FBRzs7WUFDQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNKLElBQUksQ0FBQyxDQUFDSyxHQUFHLENBQUNDLFNBQUFBLENBQUM7cUNBQ3BCLDhEQUFDSixLQUFHOzhCQUNBLDRFQUFDSyxHQUFDOzswQ0FBQyw4REFBQ0MsR0FBQzswQ0FBRUYsQ0FBQzs7Ozs7cUNBQUs7NEJBQUNOLElBQUksQ0FBQ00sQ0FBQyxDQUFDOzs7Ozs7NkJBQUs7Ozs7O3lCQUN4QjthQUNULENBQUM7MEJBQ0YsOERBQUNHLEdBQUM7Z0JBQUNDLElBQUksRUFBQyxJQUFJOzBCQUFDLFFBQU07Ozs7O29CQUFJOzs7Ozs7WUFDckIsQ0FFVDtBQUVMLENBQUM7R0F0QnVCZixRQUFROztRQUNiRCxrREFBUztRQUdGRCwyQ0FBTTs7O0FBSlJFLEtBQUFBLFFBQVE7U0EwQmpCSSxPQUFPLENBQUNZLEdBQUc7V0FBWFosUUFBTzs7U0FBUEEsUUFBTztJQUFQQSxRQUFPLEdBQXRCLDZGQUF1QlksR0FBRyxFQUFFO1lBRWxCQyxHQUFHLEVBRUhDLElBQUk7Ozs7b0JBRkU7O3dCQUFNQyxLQUFLLENBQUNILEdBQUcsQ0FBQztzQkFBQTs7b0JBQXRCQyxHQUFHLEdBQUcsYUFBZ0I7b0JBRWY7O3dCQUFNQSxHQUFHLENBQUNDLElBQUksRUFBRTtzQkFBQTs7b0JBQXZCQSxJQUFJLEdBQUcsYUFBZ0I7b0JBRTdCOzt3QkFBT0EsSUFBSTtzQkFBQzs7O0lBRWhCLENBQUM7V0FSY2QsUUFBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9sb2NhdGlvbi5qcz9hNTAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xuXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9jYXRpb24oKXtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IGltZGJJRCB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gICAgY29uc3Qge2RhdGEsIGVycm9yfSA9IHVzZVNXUihcImh0dHBzOi8vZXh0cmVtZS1pcC1sb29rdXAuY29tL2pzb24vP2tleT1iVUdTWnM3TFpYb3lZNWhUTWllN1wiLCBmZXRjaGVyKTsgICBcbiAgICBcbiAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PmZhbGhhIG5hIHJlcXVpc2nDp8Ojby4uLjwvZGl2PlxuXG4gICAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdj5jYXJyZWdhbmRvLi4uPC9kaXY+XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge09iamVjdC5rZXlzKGRhdGEpLm1hcCh2ID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cD48Yj57dn08L2I+e2RhdGFbdl19PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICBcbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPGEgaHJlZj0nLi8nPk1vdmllczwvYT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICApICAgIFxuXG59XG5cblxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaGVyKHVybCkge1xuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcblxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgcmV0dXJuIGpzb247XG5cbn1cblxuIl0sIm5hbWVzIjpbInVzZVNXUiIsInVzZVJvdXRlciIsIkxvY2F0aW9uIiwicm91dGVyIiwiaW1kYklEIiwicXVlcnkiLCJmZXRjaGVyIiwiZGF0YSIsImVycm9yIiwiZGl2IiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsInYiLCJwIiwiYiIsImEiLCJocmVmIiwidXJsIiwicmVzIiwianNvbiIsImZldGNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/location.js\n"));

/***/ })

});