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
exports.id = "pages/movies";
exports.ids = ["pages/movies"];
exports.modules = {

/***/ "./pages/movies/index.js":
/*!*******************************!*\
  !*** ./pages/movies/index.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Movies)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);\nswr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction Movies() {\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(`http://www.omdbapi.com/?apikey=9b30f837&s=bagdad`, fetcher);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"falha na requisi\\xe7\\xe3o...\"\n    }, void 0, false, {\n        fileName: \"/home/vitor/pweb/Receita4/pages/movies/index.js\",\n        lineNumber: 7,\n        columnNumber: 23\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"carregando...\"\n    }, void 0, false, {\n        fileName: \"/home/vitor/pweb/Receita4/pages/movies/index.js\",\n        lineNumber: 9,\n        columnNumber: 23\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            data.Search.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"movies/\" + m.imdbID,\n                        children: [\n                            m.Title,\n                            \" --- \",\n                            m.Year\n                        ]\n                    }, m.imdbID, true, {\n                        fileName: \"/home/vitor/pweb/Receita4/pages/movies/index.js\",\n                        lineNumber: 15,\n                        columnNumber: 44\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/vitor/pweb/Receita4/pages/movies/index.js\",\n                    lineNumber: 15,\n                    columnNumber: 39\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"/\",\n                children: \"Home\"\n            }, void 0, false, {\n                fileName: \"/home/vitor/pweb/Receita4/pages/movies/index.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/home/vitor/pweb/Receita4/pages/movies/index.js\",\n                lineNumber: 16,\n                columnNumber: 33\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/vitor/pweb/Receita4/pages/movies/index.js\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, this);\n}\nasync function fetcher(url) {\n    const res = await fetch(url);\n    const json = await res.json();\n    return json;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQXdCO0FBRVQsU0FBU0MsTUFBTSxHQUFFO0lBRTVCLE1BQU0sRUFBQ0MsSUFBSSxHQUFFQyxLQUFLLEdBQUMsR0FBR0gsK0NBQU0sQ0FBQyxDQUFDLGdEQUFnRCxDQUFDLEVBQUVJLE9BQU8sQ0FBQztJQUV6RixJQUFJRCxLQUFLLEVBQUUscUJBQU8sOERBQUNFLEtBQUc7a0JBQUMsOEJBQXNCOzs7OztZQUFNO0lBRW5ELElBQUksQ0FBQ0gsSUFBSSxFQUFFLHFCQUFPLDhEQUFDRyxLQUFHO2tCQUFDLGVBQWE7Ozs7O1lBQU07SUFFMUMscUJBRUksOERBQUNBLEtBQUc7O1lBRUVILElBQUksQ0FBQ0ksTUFBTSxDQUFDQyxHQUFHLENBQUUsQ0FBQ0MsQ0FBQyxpQkFBSyw4REFBQ0gsS0FBRzs4QkFBQyw0RUFBQ0ksR0FBQzt3QkFBZ0JDLElBQUksRUFBRSxTQUFTLEdBQUdGLENBQUMsQ0FBQ0csTUFBTTs7NEJBQUdILENBQUMsQ0FBQ0ksS0FBSzs0QkFBQyxPQUFLOzRCQUFDSixDQUFDLENBQUNLLElBQUk7O3VCQUEzREwsQ0FBQyxDQUFDRyxNQUFNOzs7OzRCQUF3RDs7Ozs7d0JBQU0sQ0FBRzswQkFDaEgsOERBQUNGLEdBQUM7Z0JBQUNDLElBQUksRUFBQyxHQUFHOzBCQUFDLE1BQUk7Ozs7O29CQUFJOzBCQUFBLDhEQUFDSSxJQUFFOzs7O29CQUFFOzs7Ozs7WUFDdkIsQ0FFVDtBQUVMLENBQUM7QUFJRCxlQUFlVixPQUFPLENBQUNXLEdBQUcsRUFBRTtJQUV4QixNQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDRixHQUFHLENBQUM7SUFFNUIsTUFBTUcsSUFBSSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0UsSUFBSSxFQUFFO0lBRTdCLE9BQU9BLElBQUksQ0FBQztBQUVoQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVjZWl0YTEvLi9wYWdlcy9tb3ZpZXMvaW5kZXguanM/NTAyYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWVzKCl7XG5cbiAgICBjb25zdCB7ZGF0YSwgZXJyb3J9ID0gdXNlU1dSKGBodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9OWIzMGY4Mzcmcz1iYWdkYWRgLCBmZXRjaGVyKSAgICBcblxuICAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+ZmFsaGEgbmEgcmVxdWlzacOnw6NvLi4uPC9kaXY+XG5cbiAgICBpZiAoIWRhdGEpIHJldHVybiA8ZGl2PmNhcnJlZ2FuZG8uLi48L2Rpdj5cblxuICAgIHJldHVybiAoXG5cbiAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgeyBkYXRhLlNlYXJjaC5tYXAoIChtKSA9PiA8ZGl2PjxhIGtleT17bS5pbWRiSUR9IGhyZWY9e1wibW92aWVzL1wiICsgbS5pbWRiSUR9PnttLlRpdGxlfSAtLS0ge20uWWVhcn08L2E+PC9kaXY+ICApIH1cbiAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+SG9tZTwvYT48YnIvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICkgICAgXG5cbn1cblxuXG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoZXIodXJsKSB7XG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICByZXR1cm4ganNvbjtcblxufVxuXG4iXSwibmFtZXMiOlsidXNlU1dSIiwiTW92aWVzIiwiZGF0YSIsImVycm9yIiwiZmV0Y2hlciIsImRpdiIsIlNlYXJjaCIsIm1hcCIsIm0iLCJhIiwiaHJlZiIsImltZGJJRCIsIlRpdGxlIiwiWWVhciIsImJyIiwidXJsIiwicmVzIiwiZmV0Y2giLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/movies/index.js\n");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/movies/index.js"));
module.exports = __webpack_exports__;

})();