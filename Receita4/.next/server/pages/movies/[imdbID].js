"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/movies/[imdbID]";
exports.ids = ["pages/movies/[imdbID]"];
exports.modules = {

/***/ "./pages/movies/[imdbID].js":
/*!**********************************!*\
  !*** ./pages/movies/[imdbID].js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Movies)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);\nswr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction Movies() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { imdbID  } = router.query;\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"http://www.omdbapi.com/?apikey=9b30f837&i=\" + imdbID, fetcher);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"falha na requisi\\xe7\\xe3o...\"\n    }, void 0, false, {\n        fileName: \"/home/vitor/pweb/Receita4/pages/movies/[imdbID].js\",\n        lineNumber: 11,\n        columnNumber: 23\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"carregando...\"\n    }, void 0, false, {\n        fileName: \"/home/vitor/pweb/Receita4/pages/movies/[imdbID].js\",\n        lineNumber: 13,\n        columnNumber: 23\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: data.Poster\n                    }, void 0, false, {\n                        fileName: \"/home/vitor/pweb/Receita4/pages/movies/[imdbID].js\",\n                        lineNumber: 18,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/home/vitor/pweb/Receita4/pages/movies/[imdbID].js\",\n                        lineNumber: 18,\n                        columnNumber: 46\n                    }, this),\n                    data.Title,\n                    \" --- \",\n                    data.Year\n                ]\n            }, void 0, true, {\n                fileName: \"/home/vitor/pweb/Receita4/pages/movies/[imdbID].js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"./\",\n                children: \"Movies\"\n            }, void 0, false, {\n                fileName: \"/home/vitor/pweb/Receita4/pages/movies/[imdbID].js\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/vitor/pweb/Receita4/pages/movies/[imdbID].js\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, this);\n}\nasync function fetcher(url) {\n    const res = await fetch(url);\n    const json = await res.json();\n    return json;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMvW2ltZGJJRF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBd0I7QUFFZTtBQUV4QixTQUFTRSxNQUFNLEdBQUU7SUFDNUIsTUFBTUMsTUFBTSxHQUFHRixzREFBUyxFQUFFO0lBQzFCLE1BQU0sRUFBRUcsTUFBTSxHQUFFLEdBQUdELE1BQU0sQ0FBQ0UsS0FBSztJQUUvQixNQUFNLEVBQUNDLElBQUksR0FBRUMsS0FBSyxHQUFDLEdBQUdQLCtDQUFNLENBQUMsNENBQTRDLEdBQUdJLE1BQU0sRUFBRUksT0FBTyxDQUFDO0lBRTVGLElBQUlELEtBQUssRUFBRSxxQkFBTyw4REFBQ0UsS0FBRztrQkFBQyw4QkFBc0I7Ozs7O1lBQU07SUFFbkQsSUFBSSxDQUFDSCxJQUFJLEVBQUUscUJBQU8sOERBQUNHLEtBQUc7a0JBQUMsZUFBYTs7Ozs7WUFBTTtJQUUxQyxxQkFDSSw4REFBQ0EsS0FBRzs7MEJBQ0EsOERBQUNBLEtBQUc7O2tDQUNBLDhEQUFDQyxLQUFHO3dCQUFDQyxHQUFHLEVBQUVMLElBQUksQ0FBQ00sTUFBTTs7Ozs7NEJBQVE7a0NBQUEsOERBQUNDLElBQUU7Ozs7NEJBQUU7b0JBQ2pDUCxJQUFJLENBQUNRLEtBQUs7b0JBQUMsT0FBSztvQkFBQ1IsSUFBSSxDQUFDUyxJQUFJOzs7Ozs7b0JBQ3pCOzBCQUNOLDhEQUFDQyxHQUFDO2dCQUFDQyxJQUFJLEVBQUMsSUFBSTswQkFBQyxRQUFNOzs7OztvQkFBSTs7Ozs7O1lBQ3JCLENBRVQ7QUFFTCxDQUFDO0FBSUQsZUFBZVQsT0FBTyxDQUFDVSxHQUFHLEVBQUU7SUFFeEIsTUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQ0YsR0FBRyxDQUFDO0lBRTVCLE1BQU1HLElBQUksR0FBRyxNQUFNRixHQUFHLENBQUNFLElBQUksRUFBRTtJQUU3QixPQUFPQSxJQUFJLENBQUM7QUFFaEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlY2VpdGExLy4vcGFnZXMvbW92aWVzL1tpbWRiSURdLmpzPzMxZDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5cbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3ZpZXMoKXtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IGltZGJJRCB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gICAgY29uc3Qge2RhdGEsIGVycm9yfSA9IHVzZVNXUihcImh0dHA6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT05YjMwZjgzNyZpPVwiICsgaW1kYklELCBmZXRjaGVyKTsgICAgXG5cbiAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PmZhbGhhIG5hIHJlcXVpc2nDp8Ojby4uLjwvZGl2PlxuXG4gICAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdj5jYXJyZWdhbmRvLi4uPC9kaXY+XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS5Qb3N0ZXJ9PjwvaW1nPjxici8+XG4gICAgICAgICAgICAgICAge2RhdGEuVGl0bGV9IC0tLSB7ZGF0YS5ZZWFyfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YSBocmVmPScuLyc+TW92aWVzPC9hPlxuICAgICAgICA8L2Rpdj5cblxuICAgICkgICAgXG5cbn1cblxuXG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoZXIodXJsKSB7XG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICByZXR1cm4ganNvbjtcblxufVxuXG4iXSwibmFtZXMiOlsidXNlU1dSIiwidXNlUm91dGVyIiwiTW92aWVzIiwicm91dGVyIiwiaW1kYklEIiwicXVlcnkiLCJkYXRhIiwiZXJyb3IiLCJmZXRjaGVyIiwiZGl2IiwiaW1nIiwic3JjIiwiUG9zdGVyIiwiYnIiLCJUaXRsZSIsIlllYXIiLCJhIiwiaHJlZiIsInVybCIsInJlcyIsImZldGNoIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/movies/[imdbID].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/movies/[imdbID].js"));
module.exports = __webpack_exports__;

})();