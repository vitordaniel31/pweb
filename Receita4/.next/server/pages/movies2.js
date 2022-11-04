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
exports.id = "pages/movies2";
exports.ids = ["pages/movies2"];
exports.modules = {

/***/ "./pages/movies2/index.js":
/*!********************************!*\
  !*** ./pages/movies2/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Movies),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Movies({ data  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            data.Search.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"movies2/\" + m.imdbID,\n                        children: [\n                            m.Title,\n                            \" --- \",\n                            m.Year\n                        ]\n                    }, m.imdbID, true, {\n                        fileName: \"/home/vitor/pweb/Receita4/pages/movies2/index.js\",\n                        lineNumber: 7,\n                        columnNumber: 44\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/vitor/pweb/Receita4/pages/movies2/index.js\",\n                    lineNumber: 7,\n                    columnNumber: 39\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"/\",\n                children: \"Home\"\n            }, void 0, false, {\n                fileName: \"/home/vitor/pweb/Receita4/pages/movies2/index.js\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/home/vitor/pweb/Receita4/pages/movies2/index.js\",\n                lineNumber: 8,\n                columnNumber: 33\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/vitor/pweb/Receita4/pages/movies2/index.js\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, this);\n}\nasync function getServerSideProps(context) {\n    const res = await fetch(`http://www.omdbapi.com/?apikey=9b30f837&s=bagdad`);\n    const data = await res.json();\n    return {\n        props: {\n            data\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMyL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUFlLFNBQVNBLE1BQU0sQ0FBQyxFQUFDQyxJQUFJLEdBQUMsRUFBQztJQUVsQyxxQkFFSSw4REFBQ0MsS0FBRzs7WUFFRUQsSUFBSSxDQUFDRSxNQUFNLENBQUNDLEdBQUcsQ0FBRSxDQUFDQyxDQUFDLGlCQUFLLDhEQUFDSCxLQUFHOzhCQUFDLDRFQUFDSSxHQUFDO3dCQUFnQkMsSUFBSSxFQUFFLFVBQVUsR0FBR0YsQ0FBQyxDQUFDRyxNQUFNOzs0QkFBR0gsQ0FBQyxDQUFDSSxLQUFLOzRCQUFDLE9BQUs7NEJBQUNKLENBQUMsQ0FBQ0ssSUFBSTs7dUJBQTVETCxDQUFDLENBQUNHLE1BQU07Ozs7NEJBQXlEOzs7Ozt3QkFBTSxDQUFHOzBCQUNqSCw4REFBQ0YsR0FBQztnQkFBQ0MsSUFBSSxFQUFDLEdBQUc7MEJBQUMsTUFBSTs7Ozs7b0JBQUk7MEJBQUEsOERBQUNJLElBQUU7Ozs7b0JBQUU7Ozs7OztZQUN2QixDQUVUO0FBRUwsQ0FBQztBQUVNLGVBQWVDLGtCQUFrQixDQUFDQyxPQUFPLEVBQUM7SUFDN0MsTUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQyxDQUFDLGdEQUFnRCxDQUFDLENBQUM7SUFDM0UsTUFBTWQsSUFBSSxHQUFHLE1BQU1hLEdBQUcsQ0FBQ0UsSUFBSSxFQUFFO0lBQzdCLE9BQU87UUFDSEMsS0FBSyxFQUFFO1lBQ0hoQixJQUFJO1NBQ1A7S0FDSjtBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWNlaXRhMS8uL3BhZ2VzL21vdmllczIvaW5kZXguanM/YjM4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3ZpZXMoe2RhdGF9KXtcblxuICAgIHJldHVybiAoXG5cbiAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgeyBkYXRhLlNlYXJjaC5tYXAoIChtKSA9PiA8ZGl2PjxhIGtleT17bS5pbWRiSUR9IGhyZWY9e1wibW92aWVzMi9cIiArIG0uaW1kYklEfT57bS5UaXRsZX0gLS0tIHttLlllYXJ9PC9hPjwvZGl2PiAgKSB9XG4gICAgICAgICAgICA8YSBocmVmPVwiL1wiPkhvbWU8L2E+PGJyLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICApICAgIFxuXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCl7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT05YjMwZjgzNyZzPWJhZ2RhZGApXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgZGF0YVxuICAgICAgICB9XG4gICAgfVxuICB9XG4gIFxuXG4iXSwibmFtZXMiOlsiTW92aWVzIiwiZGF0YSIsImRpdiIsIlNlYXJjaCIsIm1hcCIsIm0iLCJhIiwiaHJlZiIsImltZGJJRCIsIlRpdGxlIiwiWWVhciIsImJyIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInJlcyIsImZldGNoIiwianNvbiIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/movies2/index.js\n");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/movies2/index.js"));
module.exports = __webpack_exports__;

})();