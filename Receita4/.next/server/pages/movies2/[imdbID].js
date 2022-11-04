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
exports.id = "pages/movies2/[imdbID]";
exports.ids = ["pages/movies2/[imdbID]"];
exports.modules = {

/***/ "./pages/movies2/[imdbID].js":
/*!***********************************!*\
  !*** ./pages/movies2/[imdbID].js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Movies),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Movies({ data  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: data.Poster\n                    }, void 0, false, {\n                        fileName: \"/home/vitor/pweb/Receita4/pages/movies2/[imdbID].js\",\n                        lineNumber: 7,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/home/vitor/pweb/Receita4/pages/movies2/[imdbID].js\",\n                        lineNumber: 7,\n                        columnNumber: 46\n                    }, this),\n                    data.Title,\n                    \" --- \",\n                    data.Year\n                ]\n            }, void 0, true, {\n                fileName: \"/home/vitor/pweb/Receita4/pages/movies2/[imdbID].js\",\n                lineNumber: 6,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"./\",\n                children: \"Movies2\"\n            }, void 0, false, {\n                fileName: \"/home/vitor/pweb/Receita4/pages/movies2/[imdbID].js\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/vitor/pweb/Receita4/pages/movies2/[imdbID].js\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, this);\n}\nasync function getServerSideProps(context) {\n    const { imdbID  } = context.query;\n    const res = await fetch(\"http://www.omdbapi.com/?apikey=9b30f837&i=\" + imdbID);\n    const data = await res.json();\n    return {\n        props: {\n            data\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMyL1tpbWRiSURdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQXVDO0FBRXhCLFNBQVNDLE1BQU0sQ0FBQyxFQUFDQyxJQUFJLEdBQUMsRUFBQztJQUNsQyxxQkFDSSw4REFBQ0MsS0FBRzs7MEJBQ0EsOERBQUNBLEtBQUc7O2tDQUNBLDhEQUFDQyxLQUFHO3dCQUFDQyxHQUFHLEVBQUVILElBQUksQ0FBQ0ksTUFBTTs7Ozs7NEJBQVE7a0NBQUEsOERBQUNDLElBQUU7Ozs7NEJBQUU7b0JBQ2pDTCxJQUFJLENBQUNNLEtBQUs7b0JBQUMsT0FBSztvQkFBQ04sSUFBSSxDQUFDTyxJQUFJOzs7Ozs7b0JBQ3pCOzBCQUNOLDhEQUFDQyxHQUFDO2dCQUFDQyxJQUFJLEVBQUMsSUFBSTswQkFBQyxTQUFPOzs7OztvQkFBSTs7Ozs7O1lBQ3RCLENBQ1Q7QUFFTCxDQUFDO0FBRU0sZUFBZUMsa0JBQWtCLENBQUNDLE9BQU8sRUFBQztJQUM3QyxNQUFNLEVBQUVDLE1BQU0sR0FBRSxHQUFHRCxPQUFPLENBQUNFLEtBQUs7SUFDaEMsTUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQyw0Q0FBNEMsR0FBR0gsTUFBTSxDQUFDO0lBQzlFLE1BQU1aLElBQUksR0FBRyxNQUFNYyxHQUFHLENBQUNFLElBQUksRUFBRTtJQUM3QixPQUFPO1FBQ0hDLEtBQUssRUFBRTtZQUNIakIsSUFBSTtTQUNQO0tBQ0o7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVjZWl0YTEvLi9wYWdlcy9tb3ZpZXMyL1tpbWRiSURdLmpzPzMwZDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vdmllcyh7ZGF0YX0pe1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLlBvc3Rlcn0+PC9pbWc+PGJyLz5cbiAgICAgICAgICAgICAgICB7ZGF0YS5UaXRsZX0gLS0tIHtkYXRhLlllYXJ9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxhIGhyZWY9Jy4vJz5Nb3ZpZXMyPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICApICAgIFxuXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCl7XG4gICAgY29uc3QgeyBpbWRiSUQgfSA9IGNvbnRleHQucXVlcnk7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9OWIzMGY4MzcmaT1cIiArIGltZGJJRClcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBkYXRhXG4gICAgICAgIH1cbiAgICB9XG59XG5cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJNb3ZpZXMiLCJkYXRhIiwiZGl2IiwiaW1nIiwic3JjIiwiUG9zdGVyIiwiYnIiLCJUaXRsZSIsIlllYXIiLCJhIiwiaHJlZiIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJpbWRiSUQiLCJxdWVyeSIsInJlcyIsImZldGNoIiwianNvbiIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/movies2/[imdbID].js\n");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/movies2/[imdbID].js"));
module.exports = __webpack_exports__;

})();