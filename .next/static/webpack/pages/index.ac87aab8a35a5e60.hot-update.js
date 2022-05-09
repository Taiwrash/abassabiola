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

/***/ "./components/ArticleCard.js":
/*!***********************************!*\
  !*** ./components/ArticleCard.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ArticleCard\": function() { return /* binding */ ArticleCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_handleArticleClick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/handleArticleClick */ \"./lib/handleArticleClick.js\");\n/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slugify */ \"./node_modules/slugify/slugify.js\");\n/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_hooks_useIsArticleRead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/hooks/useIsArticleRead */ \"./lib/hooks/useIsArticleRead.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dist/client/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n// import siteMetadata from '@/data/siteMetadata';\n\n\n\nvar _s = $RefreshSig$();\nfunction ArticleCard(param) {\n    var article = param.article;\n    _s();\n    console.log(article);\n    var router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var slug = slugify__WEBPACK_IMPORTED_MODULE_3___default()(article.slug).toLowerCase();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: function() {\n                return (0,_lib_handleArticleClick__WEBPACK_IMPORTED_MODULE_2__.handleArticleClicked)(slug);\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"group\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        className: \"rounded-xl group-hover:opacity-75\",\n                        objectFit: \"cover\",\n                        src: \"/hello.png\",\n                        // src={article.data.image}\n                        placeholder: \"blur\",\n                        blurDataURL: \"/hello.png\",\n                        width: 684,\n                        height: 800,\n                        layout: \"intrinsic\",\n                        alt: \"article cover\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\private\\\\portfolio\\\\abasabiola-com\\\\components\\\\ArticleCard.js\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-left w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"mt-2 text-2xl\",\n                                children: article.title\n                            }, void 0, false, {\n                                fileName: \"D:\\\\private\\\\portfolio\\\\abasabiola-com\\\\components\\\\ArticleCard.js\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: article.summary\n                            }, void 0, false, {\n                                fileName: \"D:\\\\private\\\\portfolio\\\\abasabiola-com\\\\components\\\\ArticleCard.js\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-base font-semibold flex items-center\",\n                                children: new Date(article.publishedOn).toLocaleDateString()\n                            }, void 0, false, {\n                                fileName: \"D:\\\\private\\\\portfolio\\\\abasabiola-com\\\\components\\\\ArticleCard.js\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\private\\\\portfolio\\\\abasabiola-com\\\\components\\\\ArticleCard.js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\private\\\\portfolio\\\\abasabiola-com\\\\components\\\\ArticleCard.js\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\private\\\\portfolio\\\\abasabiola-com\\\\components\\\\ArticleCard.js\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\private\\\\portfolio\\\\abasabiola-com\\\\components\\\\ArticleCard.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_s(ArticleCard, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_dist_client_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = ArticleCard;\nvar _c;\n$RefreshReg$(_c, \"ArticleCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FydGljbGVDYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBK0I7QUFDa0M7QUFDakUsa0RBQWtEO0FBQ3BCO0FBQ21DO0FBQ2I7O0FBRzdDLFNBQVNLLFdBQVcsQ0FBQyxLQUFXLEVBQUU7UUFBYixPQUFTLEdBQVQsS0FBVyxDQUFUQyxPQUFPOztJQUNuQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE9BQU8sQ0FBQztJQUNwQixJQUFNRyxNQUFNLEdBQUdMLGtFQUFTLEVBQUU7SUFDMUIsSUFBTU0sSUFBSSxHQUFHUiw4Q0FBTyxDQUFDSSxPQUFPLENBQUNJLElBQUksQ0FBQyxDQUFDQyxXQUFXLEVBQUU7SUFDaEQscUJBQ0UsOERBQUNDLEtBQUc7a0JBQ0YsNEVBQUNDLFFBQU07WUFBQ0MsT0FBTyxFQUFFO3VCQUFNYiw2RUFBb0IsQ0FBQ1MsSUFBSSxDQUFDO2FBQUE7c0JBQy9DLDRFQUFDRSxLQUFHO2dCQUFDRyxTQUFTLEVBQUMsT0FBTzs7a0NBQ3BCLDhEQUFDZixtREFBSzt3QkFDSmUsU0FBUyxFQUFDLG1DQUFtQzt3QkFDN0NDLFNBQVMsRUFBQyxPQUFPO3dCQUVqQkMsR0FBRyxFQUFDLFlBQVk7d0JBQ2hCLDJCQUEyQjt3QkFDM0JDLFdBQVcsRUFBQyxNQUFNO3dCQUNsQkMsV0FBVyxFQUFDLFlBQVk7d0JBQ3hCQyxLQUFLLEVBQUUsR0FBRzt3QkFDVkMsTUFBTSxFQUFFLEdBQUc7d0JBQ1hDLE1BQU0sRUFBQyxXQUFXO3dCQUNsQkMsR0FBRyxFQUFFLGVBQWU7Ozs7OzRCQUNwQjtrQ0FDRiw4REFBQ1gsS0FBRzt3QkFBQ0csU0FBUyxFQUFDLGtCQUFrQjs7MENBQy9CLDhEQUFDUyxJQUFFO2dDQUFDVCxTQUFTLEVBQUMsZUFBZTswQ0FBRVQsT0FBTyxDQUFDbUIsS0FBSzs7Ozs7b0NBQU07MENBRWxELDhEQUFDQyxHQUFDOzBDQUFFcEIsT0FBTyxDQUFDcUIsT0FBTzs7Ozs7b0NBQUs7MENBQ3hCLDhEQUFDQyxNQUFJO2dDQUFDYixTQUFTLEVBQUMsMkNBQTJDOzBDQUN4RCxJQUFJYyxJQUFJLENBQUN2QixPQUFPLENBQUN3QixXQUFXLENBQUMsQ0FBQ0Msa0JBQWtCLEVBQUU7Ozs7O29DQUM5Qzs7Ozs7OzRCQUNIOzs7Ozs7b0JBQ0Y7Ozs7O2dCQUNDOzs7OztZQUNMLENBQ047Q0FDSDtHQWpDZTFCLFdBQVc7O1FBRVZELDhEQUFTOzs7QUFGVkMsS0FBQUEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FydGljbGVDYXJkLmpzPzI1NTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyBoYW5kbGVBcnRpY2xlQ2xpY2tlZCB9IGZyb20gJy4uL2xpYi9oYW5kbGVBcnRpY2xlQ2xpY2snO1xyXG4vLyBpbXBvcnQgc2l0ZU1ldGFkYXRhIGZyb20gJ0AvZGF0YS9zaXRlTWV0YWRhdGEnO1xyXG5pbXBvcnQgc2x1Z2lmeSBmcm9tICdzbHVnaWZ5JztcclxuaW1wb3J0IHsgdXNlSXNBcnRpY2xlUmVhZCB9IGZyb20gJy4uL2xpYi9ob29rcy91c2VJc0FydGljbGVSZWFkJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBcnRpY2xlQ2FyZCh7IGFydGljbGUgfSkge1xyXG4gIGNvbnNvbGUubG9nKGFydGljbGUpXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3Qgc2x1ZyA9IHNsdWdpZnkoYXJ0aWNsZS5zbHVnKS50b0xvd2VyQ2FzZSgpXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQXJ0aWNsZUNsaWNrZWQoc2x1Zyl9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXBcIj5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIGdyb3VwLWhvdmVyOm9wYWNpdHktNzVcIlxyXG4gICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXHJcblxyXG4gICAgICAgICAgICBzcmM9XCIvaGVsbG8ucG5nXCJcclxuICAgICAgICAgICAgLy8gc3JjPXthcnRpY2xlLmRhdGEuaW1hZ2V9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiYmx1clwiXHJcbiAgICAgICAgICAgIGJsdXJEYXRhVVJMPVwiL2hlbGxvLnBuZ1wiXHJcbiAgICAgICAgICAgIHdpZHRoPXs2ODR9XHJcbiAgICAgICAgICAgIGhlaWdodD17ODAwfVxyXG4gICAgICAgICAgICBsYXlvdXQ9XCJpbnRyaW5zaWNcIlxyXG4gICAgICAgICAgICBhbHQ9eydhcnRpY2xlIGNvdmVyJ31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGVmdCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm10LTIgdGV4dC0yeGxcIj57YXJ0aWNsZS50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICB7Lyoge0pTT04uc3RyaW5naWZ5KGFydGljbGUpfSAqL31cclxuICAgICAgICAgICAgPHA+e2FydGljbGUuc3VtbWFyeX08L3A+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LXNlbWlib2xkIGZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAge25ldyBEYXRlKGFydGljbGUucHVibGlzaGVkT24pLnRvTG9jYWxlRGF0ZVN0cmluZygpfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsImhhbmRsZUFydGljbGVDbGlja2VkIiwic2x1Z2lmeSIsInVzZUlzQXJ0aWNsZVJlYWQiLCJ1c2VSb3V0ZXIiLCJBcnRpY2xlQ2FyZCIsImFydGljbGUiLCJjb25zb2xlIiwibG9nIiwicm91dGVyIiwic2x1ZyIsInRvTG93ZXJDYXNlIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsImNsYXNzTmFtZSIsIm9iamVjdEZpdCIsInNyYyIsInBsYWNlaG9sZGVyIiwiYmx1ckRhdGFVUkwiLCJ3aWR0aCIsImhlaWdodCIsImxheW91dCIsImFsdCIsImgzIiwidGl0bGUiLCJwIiwic3VtbWFyeSIsInNwYW4iLCJEYXRlIiwicHVibGlzaGVkT24iLCJ0b0xvY2FsZURhdGVTdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ArticleCard.js\n");

/***/ })

});