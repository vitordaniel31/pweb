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

/***/ "./pages/movies.js":
/*!*************************!*\
  !*** ./pages/movies.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Movies),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Movies({ data  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: Array.isArray(data.Search) ? data.Search.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: m.Poster\n                    }, void 0, false, {\n                        fileName: \"/home/vitor/pweb/Receita3/pages/movies.js\",\n                        lineNumber: 6,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/home/vitor/pweb/Receita3/pages/movies.js\",\n                        lineNumber: 6,\n                        columnNumber: 47\n                    }, this),\n                    m.Title,\n                    \" --- \",\n                    m.Year\n                ]\n            }, void 0, true, {\n                fileName: \"/home/vitor/pweb/Receita3/pages/movies.js\",\n                lineNumber: 5,\n                columnNumber: 17\n            }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: data.Poster\n                }, void 0, false, {\n                    fileName: \"/home/vitor/pweb/Receita3/pages/movies.js\",\n                    lineNumber: 13,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/home/vitor/pweb/Receita3/pages/movies.js\",\n                    lineNumber: 13,\n                    columnNumber: 50\n                }, this),\n                data.Title,\n                \" --- \",\n                data.Year\n            ]\n        }, void 0, true, {\n            fileName: \"/home/vitor/pweb/Receita3/pages/movies.js\",\n            lineNumber: 12,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/vitor/pweb/Receita3/pages/movies.js\",\n        lineNumber: 3,\n        columnNumber: 9\n    }, this);\n}\nasync function getServerSideProps(context) {\n    const res = await fetch(`https://www.omdbapi.com/?apikey=9b30f837&t=movie&y=2022`);\n    const data = await res.json();\n    return {\n        props: {\n            data\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQWUsU0FBU0EsTUFBTSxDQUFDLEVBQUNDLElBQUksR0FBQyxFQUFDO0lBQ2xDLHFCQUNJLDhEQUFDQyxLQUFHO2tCQUNDQyxLQUFLLENBQUNDLE9BQU8sQ0FBQ0gsSUFBSSxDQUFDSSxNQUFNLENBQUMsR0FBR0osSUFBSSxDQUFDSSxNQUFNLENBQUNDLEdBQUcsQ0FBRSxDQUFDQyxDQUFDLGlCQUM3Qyw4REFBQ0wsS0FBRzs7a0NBQ0EsOERBQUNNLEtBQUc7d0JBQUNDLEdBQUcsRUFBRUYsQ0FBQyxDQUFDRyxNQUFNOzs7Ozs0QkFBUTtrQ0FBQSw4REFBQ0MsSUFBRTs7Ozs0QkFBRTtvQkFDOUJKLENBQUMsQ0FBQ0ssS0FBSztvQkFBQyxPQUFLO29CQUFDTCxDQUFDLENBQUNNLElBQUk7Ozs7OztvQkFDbkIsQ0FDUixpQkFHRSw4REFBQ1gsS0FBRzs7OEJBQ0EsOERBQUNNLEtBQUc7b0JBQUNDLEdBQUcsRUFBRVIsSUFBSSxDQUFDUyxNQUFNOzs7Ozt3QkFBUTs4QkFBQSw4REFBQ0MsSUFBRTs7Ozt3QkFBRTtnQkFDakNWLElBQUksQ0FBQ1csS0FBSztnQkFBQyxPQUFLO2dCQUFDWCxJQUFJLENBQUNZLElBQUk7Ozs7OztnQkFDekI7Ozs7O1lBRVIsQ0FDVDtBQUNMLENBQUM7QUFFTSxlQUFlQyxrQkFBa0IsQ0FBQ0MsT0FBTyxFQUFDO0lBQzdDLE1BQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUMsQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO0lBQ2xGLE1BQU1oQixJQUFJLEdBQUcsTUFBTWUsR0FBRyxDQUFDRSxJQUFJLEVBQUU7SUFDN0IsT0FBTztRQUNIQyxLQUFLLEVBQUU7WUFDSGxCLElBQUk7U0FDUDtLQUNKO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlY2VpdGExLy4vcGFnZXMvbW92aWVzLmpzP2FmNTQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWVzKHtkYXRhfSl7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtBcnJheS5pc0FycmF5KGRhdGEuU2VhcmNoKSA/IGRhdGEuU2VhcmNoLm1hcCggKG0pID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bS5Qb3N0ZXJ9PjwvaW1nPjxici8+XG4gICAgICAgICAgICAgICAgICAgIHttLlRpdGxlfSAtLS0ge20uWWVhcn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpIFxuICAgICAgICAgICAgOiBcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS5Qb3N0ZXJ9PjwvaW1nPjxici8+XG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLlRpdGxlfSAtLS0ge2RhdGEuWWVhcn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9ICAgICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KXtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT05YjMwZjgzNyZ0PW1vdmllJnk9MjAyMmApXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgZGF0YVxuICAgICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBcbiJdLCJuYW1lcyI6WyJNb3ZpZXMiLCJkYXRhIiwiZGl2IiwiQXJyYXkiLCJpc0FycmF5IiwiU2VhcmNoIiwibWFwIiwibSIsImltZyIsInNyYyIsIlBvc3RlciIsImJyIiwiVGl0bGUiLCJZZWFyIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInJlcyIsImZldGNoIiwianNvbiIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/movies.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/movies.js"));
module.exports = __webpack_exports__;

})();