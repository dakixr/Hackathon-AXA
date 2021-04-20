/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./src/main/webapp/app/app.scss":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./src/main/webapp/app/app.scss ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/*!\n * Bootstrap v4.6.0 (https://getbootstrap.com/)\n * Copyright 2011-2021 The Bootstrap Authors\n * Copyright 2011-2021 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */\n:root {\n  --blue: #007bff;\n  --indigo: #6610f2;\n  --purple: #6f42c1;\n  --pink: #e83e8c;\n  --red: #dc3545;\n  --orange: #fd7e14;\n  --yellow: #ffc107;\n  --green: #28a745;\n  --teal: #20c997;\n  --cyan: #17a2b8;\n  --white: #fff;\n  --gray: #6c757d;\n  --gray-dark: #343a40;\n  --primary: #007bff;\n  --secondary: #6c757d;\n  --success: #28a745;\n  --info: #17a2b8;\n  --warning: #ffc107;\n  --danger: #dc3545;\n  --light: #f8f9fa;\n  --dark: #343a40;\n  --breakpoint-xs: 0;\n  --breakpoint-sm: 576px;\n  --breakpoint-md: 768px;\n  --breakpoint-lg: 992px;\n  --breakpoint-xl: 1200px;\n  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\narticle, aside, figcaption, figure, footer, header, hgroup, main, nav, section {\n  display: block;\n}\n\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: left;\n  background-color: #fff;\n}\n\n[tabindex=\"-1\"]:focus:not(:focus-visible) {\n  outline: 0 !important;\n}\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n}\n\np {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nabbr[title],\nabbr[data-original-title] {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n  cursor: help;\n  border-bottom: 0;\n  -webkit-text-decoration-skip-ink: none;\n          text-decoration-skip-ink: none;\n}\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit;\n}\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0;\n}\n\ndt {\n  font-weight: 700;\n}\n\ndd {\n  margin-bottom: 0.5rem;\n  margin-left: 0;\n}\n\nblockquote {\n  margin: 0 0 1rem;\n}\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\nsmall {\n  font-size: 80%;\n}\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\na {\n  color: #007bff;\n  text-decoration: none;\n  background-color: transparent;\n}\na:hover {\n  color: #0056b3;\n  text-decoration: underline;\n}\n\na:not([href]):not([class]) {\n  color: inherit;\n  text-decoration: none;\n}\na:not([href]):not([class]):hover {\n  color: inherit;\n  text-decoration: none;\n}\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  font-size: 1em;\n}\n\npre {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n  -ms-overflow-style: scrollbar;\n}\n\nfigure {\n  margin: 0 0 1rem;\n}\n\nimg {\n  vertical-align: middle;\n  border-style: none;\n}\n\nsvg {\n  overflow: hidden;\n  vertical-align: middle;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\ncaption {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #6c757d;\n  text-align: left;\n  caption-side: bottom;\n}\n\nth {\n  text-align: inherit;\n  text-align: -webkit-match-parent;\n}\n\nlabel {\n  display: inline-block;\n  margin-bottom: 0.5rem;\n}\n\nbutton {\n  border-radius: 0;\n}\n\nbutton:focus:not(:focus-visible) {\n  outline: 0;\n}\n\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\nbutton,\ninput {\n  overflow: visible;\n}\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n[role=button] {\n  cursor: pointer;\n}\n\nselect {\n  word-wrap: normal;\n}\n\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\nbutton:not(:disabled),\n[type=button]:not(:disabled),\n[type=reset]:not(:disabled),\n[type=submit]:not(:disabled) {\n  cursor: pointer;\n}\n\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n\ninput[type=radio],\ninput[type=checkbox] {\n  box-sizing: border-box;\n  padding: 0;\n}\n\ntextarea {\n  overflow: auto;\n  resize: vertical;\n}\n\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\nlegend {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n  margin-bottom: 0.5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n  color: inherit;\n  white-space: normal;\n}\n\nprogress {\n  vertical-align: baseline;\n}\n\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n[type=search] {\n  outline-offset: -2px;\n  -webkit-appearance: none;\n}\n\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button;\n}\n\noutput {\n  display: inline-block;\n}\n\nsummary {\n  display: list-item;\n  cursor: pointer;\n}\n\ntemplate {\n  display: none;\n}\n\n[hidden] {\n  display: none !important;\n}\n\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  line-height: 1.2;\n}\n\nh1, .h1 {\n  font-size: 2.5rem;\n}\n\nh2, .h2 {\n  font-size: 2rem;\n}\n\nh3, .h3 {\n  font-size: 1.75rem;\n}\n\nh4, .h4 {\n  font-size: 1.5rem;\n}\n\nh5, .h5 {\n  font-size: 1.25rem;\n}\n\nh6, .h6 {\n  font-size: 1rem;\n}\n\n.lead {\n  font-size: 1.25rem;\n  font-weight: 300;\n}\n\n.display-1 {\n  font-size: 6rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n\n.display-2 {\n  font-size: 5.5rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n\n.display-3 {\n  font-size: 4.5rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n\n.display-4 {\n  font-size: 3.5rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n\nhr {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n}\n\nsmall,\n.small {\n  font-size: 80%;\n  font-weight: 400;\n}\n\nmark,\n.mark {\n  padding: 0.2em;\n  background-color: #fcf8e3;\n}\n\n.list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-inline {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-inline-item {\n  display: inline-block;\n}\n.list-inline-item:not(:last-child) {\n  margin-right: 0.5rem;\n}\n\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase;\n}\n\n.blockquote {\n  margin-bottom: 1rem;\n  font-size: 1.25rem;\n}\n\n.blockquote-footer {\n  display: block;\n  font-size: 80%;\n  color: #6c757d;\n}\n.blockquote-footer::before {\n  content: \"— \";\n}\n\n.img-fluid {\n  max-width: 100%;\n  height: auto;\n}\n\n.img-thumbnail {\n  padding: 0.25rem;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: 0.25rem;\n  max-width: 100%;\n  height: auto;\n}\n\n.figure {\n  display: inline-block;\n}\n\n.figure-img {\n  margin-bottom: 0.5rem;\n  line-height: 1;\n}\n\n.figure-caption {\n  font-size: 90%;\n  color: #6c757d;\n}\n\ncode {\n  font-size: 87.5%;\n  color: #e83e8c;\n  word-wrap: break-word;\n}\na > code {\n  color: inherit;\n}\n\nkbd {\n  padding: 0.2rem 0.4rem;\n  font-size: 87.5%;\n  color: #fff;\n  background-color: #212529;\n  border-radius: 0.2rem;\n}\nkbd kbd {\n  padding: 0;\n  font-size: 100%;\n  font-weight: 700;\n}\n\npre {\n  display: block;\n  font-size: 87.5%;\n  color: #212529;\n}\npre code {\n  font-size: inherit;\n  color: inherit;\n  word-break: normal;\n}\n\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll;\n}\n\n.container,\n.container-fluid,\n.container-xl,\n.container-lg,\n.container-md,\n.container-sm {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n@media (min-width: 576px) {\n  .container-sm, .container {\n    max-width: 540px;\n  }\n}\n@media (min-width: 768px) {\n  .container-md, .container-sm, .container {\n    max-width: 720px;\n  }\n}\n@media (min-width: 992px) {\n  .container-lg, .container-md, .container-sm, .container {\n    max-width: 960px;\n  }\n}\n@media (min-width: 1200px) {\n  .container-xl, .container-lg, .container-md, .container-sm, .container {\n    max-width: 1140px;\n  }\n}\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n.no-gutters {\n  margin-right: 0;\n  margin-left: 0;\n}\n.no-gutters > .col,\n.no-gutters > [class*=col-] {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.col-xl,\n.col-xl-auto, .col-xl-12, .col-xl-11, .col-xl-10, .col-xl-9, .col-xl-8, .col-xl-7, .col-xl-6, .col-xl-5, .col-xl-4, .col-xl-3, .col-xl-2, .col-xl-1, .col-lg,\n.col-lg-auto, .col-lg-12, .col-lg-11, .col-lg-10, .col-lg-9, .col-lg-8, .col-lg-7, .col-lg-6, .col-lg-5, .col-lg-4, .col-lg-3, .col-lg-2, .col-lg-1, .col-md,\n.col-md-auto, .col-md-12, .col-md-11, .col-md-10, .col-md-9, .col-md-8, .col-md-7, .col-md-6, .col-md-5, .col-md-4, .col-md-3, .col-md-2, .col-md-1, .col-sm,\n.col-sm-auto, .col-sm-12, .col-sm-11, .col-sm-10, .col-sm-9, .col-sm-8, .col-sm-7, .col-sm-6, .col-sm-5, .col-sm-4, .col-sm-3, .col-sm-2, .col-sm-1, .col,\n.col-auto, .col-12, .col-11, .col-10, .col-9, .col-8, .col-7, .col-6, .col-5, .col-4, .col-3, .col-2, .col-1 {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col {\n  flex-basis: 0;\n  flex-grow: 1;\n  max-width: 100%;\n}\n\n.row-cols-1 > * {\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n\n.row-cols-2 > * {\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n\n.row-cols-3 > * {\n  flex: 0 0 33.3333333333%;\n  max-width: 33.3333333333%;\n}\n\n.row-cols-4 > * {\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n\n.row-cols-5 > * {\n  flex: 0 0 20%;\n  max-width: 20%;\n}\n\n.row-cols-6 > * {\n  flex: 0 0 16.6666666667%;\n  max-width: 16.6666666667%;\n}\n\n.col-auto {\n  flex: 0 0 auto;\n  width: auto;\n  max-width: 100%;\n}\n\n.col-1 {\n  flex: 0 0 8.3333333333%;\n  max-width: 8.3333333333%;\n}\n\n.col-2 {\n  flex: 0 0 16.6666666667%;\n  max-width: 16.6666666667%;\n}\n\n.col-3 {\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n\n.col-4 {\n  flex: 0 0 33.3333333333%;\n  max-width: 33.3333333333%;\n}\n\n.col-5 {\n  flex: 0 0 41.6666666667%;\n  max-width: 41.6666666667%;\n}\n\n.col-6 {\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n\n.col-7 {\n  flex: 0 0 58.3333333333%;\n  max-width: 58.3333333333%;\n}\n\n.col-8 {\n  flex: 0 0 66.6666666667%;\n  max-width: 66.6666666667%;\n}\n\n.col-9 {\n  flex: 0 0 75%;\n  max-width: 75%;\n}\n\n.col-10 {\n  flex: 0 0 83.3333333333%;\n  max-width: 83.3333333333%;\n}\n\n.col-11 {\n  flex: 0 0 91.6666666667%;\n  max-width: 91.6666666667%;\n}\n\n.col-12 {\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n\n.order-first {\n  order: -1;\n}\n\n.order-last {\n  order: 13;\n}\n\n.order-0 {\n  order: 0;\n}\n\n.order-1 {\n  order: 1;\n}\n\n.order-2 {\n  order: 2;\n}\n\n.order-3 {\n  order: 3;\n}\n\n.order-4 {\n  order: 4;\n}\n\n.order-5 {\n  order: 5;\n}\n\n.order-6 {\n  order: 6;\n}\n\n.order-7 {\n  order: 7;\n}\n\n.order-8 {\n  order: 8;\n}\n\n.order-9 {\n  order: 9;\n}\n\n.order-10 {\n  order: 10;\n}\n\n.order-11 {\n  order: 11;\n}\n\n.order-12 {\n  order: 12;\n}\n\n.offset-1 {\n  margin-left: 8.3333333333%;\n}\n\n.offset-2 {\n  margin-left: 16.6666666667%;\n}\n\n.offset-3 {\n  margin-left: 25%;\n}\n\n.offset-4 {\n  margin-left: 33.3333333333%;\n}\n\n.offset-5 {\n  margin-left: 41.6666666667%;\n}\n\n.offset-6 {\n  margin-left: 50%;\n}\n\n.offset-7 {\n  margin-left: 58.3333333333%;\n}\n\n.offset-8 {\n  margin-left: 66.6666666667%;\n}\n\n.offset-9 {\n  margin-left: 75%;\n}\n\n.offset-10 {\n  margin-left: 83.3333333333%;\n}\n\n.offset-11 {\n  margin-left: 91.6666666667%;\n}\n\n@media (min-width: 576px) {\n  .col-sm {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n\n  .row-cols-sm-1 > * {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n\n  .row-cols-sm-2 > * {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n\n  .row-cols-sm-3 > * {\n    flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n  }\n\n  .row-cols-sm-4 > * {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n\n  .row-cols-sm-5 > * {\n    flex: 0 0 20%;\n    max-width: 20%;\n  }\n\n  .row-cols-sm-6 > * {\n    flex: 0 0 16.6666666667%;\n    max-width: 16.6666666667%;\n  }\n\n  .col-sm-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%;\n  }\n\n  .col-sm-1 {\n    flex: 0 0 8.3333333333%;\n    max-width: 8.3333333333%;\n  }\n\n  .col-sm-2 {\n    flex: 0 0 16.6666666667%;\n    max-width: 16.6666666667%;\n  }\n\n  .col-sm-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n\n  .col-sm-4 {\n    flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n  }\n\n  .col-sm-5 {\n    flex: 0 0 41.6666666667%;\n    max-width: 41.6666666667%;\n  }\n\n  .col-sm-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n\n  .col-sm-7 {\n    flex: 0 0 58.3333333333%;\n    max-width: 58.3333333333%;\n  }\n\n  .col-sm-8 {\n    flex: 0 0 66.6666666667%;\n    max-width: 66.6666666667%;\n  }\n\n  .col-sm-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n\n  .col-sm-10 {\n    flex: 0 0 83.3333333333%;\n    max-width: 83.3333333333%;\n  }\n\n  .col-sm-11 {\n    flex: 0 0 91.6666666667%;\n    max-width: 91.6666666667%;\n  }\n\n  .col-sm-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n\n  .order-sm-first {\n    order: -1;\n  }\n\n  .order-sm-last {\n    order: 13;\n  }\n\n  .order-sm-0 {\n    order: 0;\n  }\n\n  .order-sm-1 {\n    order: 1;\n  }\n\n  .order-sm-2 {\n    order: 2;\n  }\n\n  .order-sm-3 {\n    order: 3;\n  }\n\n  .order-sm-4 {\n    order: 4;\n  }\n\n  .order-sm-5 {\n    order: 5;\n  }\n\n  .order-sm-6 {\n    order: 6;\n  }\n\n  .order-sm-7 {\n    order: 7;\n  }\n\n  .order-sm-8 {\n    order: 8;\n  }\n\n  .order-sm-9 {\n    order: 9;\n  }\n\n  .order-sm-10 {\n    order: 10;\n  }\n\n  .order-sm-11 {\n    order: 11;\n  }\n\n  .order-sm-12 {\n    order: 12;\n  }\n\n  .offset-sm-0 {\n    margin-left: 0;\n  }\n\n  .offset-sm-1 {\n    margin-left: 8.3333333333%;\n  }\n\n  .offset-sm-2 {\n    margin-left: 16.6666666667%;\n  }\n\n  .offset-sm-3 {\n    margin-left: 25%;\n  }\n\n  .offset-sm-4 {\n    margin-left: 33.3333333333%;\n  }\n\n  .offset-sm-5 {\n    margin-left: 41.6666666667%;\n  }\n\n  .offset-sm-6 {\n    margin-left: 50%;\n  }\n\n  .offset-sm-7 {\n    margin-left: 58.3333333333%;\n  }\n\n  .offset-sm-8 {\n    margin-left: 66.6666666667%;\n  }\n\n  .offset-sm-9 {\n    margin-left: 75%;\n  }\n\n  .offset-sm-10 {\n    margin-left: 83.3333333333%;\n  }\n\n  .offset-sm-11 {\n    margin-left: 91.6666666667%;\n  }\n}\n@media (min-width: 768px) {\n  .col-md {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n\n  .row-cols-md-1 > * {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n\n  .row-cols-md-2 > * {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n\n  .row-cols-md-3 > * {\n    flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n  }\n\n  .row-cols-md-4 > * {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n\n  .row-cols-md-5 > * {\n    flex: 0 0 20%;\n    max-width: 20%;\n  }\n\n  .row-cols-md-6 > * {\n    flex: 0 0 16.6666666667%;\n    max-width: 16.6666666667%;\n  }\n\n  .col-md-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%;\n  }\n\n  .col-md-1 {\n    flex: 0 0 8.3333333333%;\n    max-width: 8.3333333333%;\n  }\n\n  .col-md-2 {\n    flex: 0 0 16.6666666667%;\n    max-width: 16.6666666667%;\n  }\n\n  .col-md-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n\n  .col-md-4 {\n    flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n  }\n\n  .col-md-5 {\n    flex: 0 0 41.6666666667%;\n    max-width: 41.6666666667%;\n  }\n\n  .col-md-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n\n  .col-md-7 {\n    flex: 0 0 58.3333333333%;\n    max-width: 58.3333333333%;\n  }\n\n  .col-md-8 {\n    flex: 0 0 66.6666666667%;\n    max-width: 66.6666666667%;\n  }\n\n  .col-md-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n\n  .col-md-10 {\n    flex: 0 0 83.3333333333%;\n    max-width: 83.3333333333%;\n  }\n\n  .col-md-11 {\n    flex: 0 0 91.6666666667%;\n    max-width: 91.6666666667%;\n  }\n\n  .col-md-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n\n  .order-md-first {\n    order: -1;\n  }\n\n  .order-md-last {\n    order: 13;\n  }\n\n  .order-md-0 {\n    order: 0;\n  }\n\n  .order-md-1 {\n    order: 1;\n  }\n\n  .order-md-2 {\n    order: 2;\n  }\n\n  .order-md-3 {\n    order: 3;\n  }\n\n  .order-md-4 {\n    order: 4;\n  }\n\n  .order-md-5 {\n    order: 5;\n  }\n\n  .order-md-6 {\n    order: 6;\n  }\n\n  .order-md-7 {\n    order: 7;\n  }\n\n  .order-md-8 {\n    order: 8;\n  }\n\n  .order-md-9 {\n    order: 9;\n  }\n\n  .order-md-10 {\n    order: 10;\n  }\n\n  .order-md-11 {\n    order: 11;\n  }\n\n  .order-md-12 {\n    order: 12;\n  }\n\n  .offset-md-0 {\n    margin-left: 0;\n  }\n\n  .offset-md-1 {\n    margin-left: 8.3333333333%;\n  }\n\n  .offset-md-2 {\n    margin-left: 16.6666666667%;\n  }\n\n  .offset-md-3 {\n    margin-left: 25%;\n  }\n\n  .offset-md-4 {\n    margin-left: 33.3333333333%;\n  }\n\n  .offset-md-5 {\n    margin-left: 41.6666666667%;\n  }\n\n  .offset-md-6 {\n    margin-left: 50%;\n  }\n\n  .offset-md-7 {\n    margin-left: 58.3333333333%;\n  }\n\n  .offset-md-8 {\n    margin-left: 66.6666666667%;\n  }\n\n  .offset-md-9 {\n    margin-left: 75%;\n  }\n\n  .offset-md-10 {\n    margin-left: 83.3333333333%;\n  }\n\n  .offset-md-11 {\n    margin-left: 91.6666666667%;\n  }\n}\n@media (min-width: 992px) {\n  .col-lg {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n\n  .row-cols-lg-1 > * {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n\n  .row-cols-lg-2 > * {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n\n  .row-cols-lg-3 > * {\n    flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n  }\n\n  .row-cols-lg-4 > * {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n\n  .row-cols-lg-5 > * {\n    flex: 0 0 20%;\n    max-width: 20%;\n  }\n\n  .row-cols-lg-6 > * {\n    flex: 0 0 16.6666666667%;\n    max-width: 16.6666666667%;\n  }\n\n  .col-lg-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%;\n  }\n\n  .col-lg-1 {\n    flex: 0 0 8.3333333333%;\n    max-width: 8.3333333333%;\n  }\n\n  .col-lg-2 {\n    flex: 0 0 16.6666666667%;\n    max-width: 16.6666666667%;\n  }\n\n  .col-lg-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n\n  .col-lg-4 {\n    flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n  }\n\n  .col-lg-5 {\n    flex: 0 0 41.6666666667%;\n    max-width: 41.6666666667%;\n  }\n\n  .col-lg-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n\n  .col-lg-7 {\n    flex: 0 0 58.3333333333%;\n    max-width: 58.3333333333%;\n  }\n\n  .col-lg-8 {\n    flex: 0 0 66.6666666667%;\n    max-width: 66.6666666667%;\n  }\n\n  .col-lg-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n\n  .col-lg-10 {\n    flex: 0 0 83.3333333333%;\n    max-width: 83.3333333333%;\n  }\n\n  .col-lg-11 {\n    flex: 0 0 91.6666666667%;\n    max-width: 91.6666666667%;\n  }\n\n  .col-lg-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n\n  .order-lg-first {\n    order: -1;\n  }\n\n  .order-lg-last {\n    order: 13;\n  }\n\n  .order-lg-0 {\n    order: 0;\n  }\n\n  .order-lg-1 {\n    order: 1;\n  }\n\n  .order-lg-2 {\n    order: 2;\n  }\n\n  .order-lg-3 {\n    order: 3;\n  }\n\n  .order-lg-4 {\n    order: 4;\n  }\n\n  .order-lg-5 {\n    order: 5;\n  }\n\n  .order-lg-6 {\n    order: 6;\n  }\n\n  .order-lg-7 {\n    order: 7;\n  }\n\n  .order-lg-8 {\n    order: 8;\n  }\n\n  .order-lg-9 {\n    order: 9;\n  }\n\n  .order-lg-10 {\n    order: 10;\n  }\n\n  .order-lg-11 {\n    order: 11;\n  }\n\n  .order-lg-12 {\n    order: 12;\n  }\n\n  .offset-lg-0 {\n    margin-left: 0;\n  }\n\n  .offset-lg-1 {\n    margin-left: 8.3333333333%;\n  }\n\n  .offset-lg-2 {\n    margin-left: 16.6666666667%;\n  }\n\n  .offset-lg-3 {\n    margin-left: 25%;\n  }\n\n  .offset-lg-4 {\n    margin-left: 33.3333333333%;\n  }\n\n  .offset-lg-5 {\n    margin-left: 41.6666666667%;\n  }\n\n  .offset-lg-6 {\n    margin-left: 50%;\n  }\n\n  .offset-lg-7 {\n    margin-left: 58.3333333333%;\n  }\n\n  .offset-lg-8 {\n    margin-left: 66.6666666667%;\n  }\n\n  .offset-lg-9 {\n    margin-left: 75%;\n  }\n\n  .offset-lg-10 {\n    margin-left: 83.3333333333%;\n  }\n\n  .offset-lg-11 {\n    margin-left: 91.6666666667%;\n  }\n}\n@media (min-width: 1200px) {\n  .col-xl {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n\n  .row-cols-xl-1 > * {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n\n  .row-cols-xl-2 > * {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n\n  .row-cols-xl-3 > * {\n    flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n  }\n\n  .row-cols-xl-4 > * {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n\n  .row-cols-xl-5 > * {\n    flex: 0 0 20%;\n    max-width: 20%;\n  }\n\n  .row-cols-xl-6 > * {\n    flex: 0 0 16.6666666667%;\n    max-width: 16.6666666667%;\n  }\n\n  .col-xl-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%;\n  }\n\n  .col-xl-1 {\n    flex: 0 0 8.3333333333%;\n    max-width: 8.3333333333%;\n  }\n\n  .col-xl-2 {\n    flex: 0 0 16.6666666667%;\n    max-width: 16.6666666667%;\n  }\n\n  .col-xl-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n\n  .col-xl-4 {\n    flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n  }\n\n  .col-xl-5 {\n    flex: 0 0 41.6666666667%;\n    max-width: 41.6666666667%;\n  }\n\n  .col-xl-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n\n  .col-xl-7 {\n    flex: 0 0 58.3333333333%;\n    max-width: 58.3333333333%;\n  }\n\n  .col-xl-8 {\n    flex: 0 0 66.6666666667%;\n    max-width: 66.6666666667%;\n  }\n\n  .col-xl-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n\n  .col-xl-10 {\n    flex: 0 0 83.3333333333%;\n    max-width: 83.3333333333%;\n  }\n\n  .col-xl-11 {\n    flex: 0 0 91.6666666667%;\n    max-width: 91.6666666667%;\n  }\n\n  .col-xl-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n\n  .order-xl-first {\n    order: -1;\n  }\n\n  .order-xl-last {\n    order: 13;\n  }\n\n  .order-xl-0 {\n    order: 0;\n  }\n\n  .order-xl-1 {\n    order: 1;\n  }\n\n  .order-xl-2 {\n    order: 2;\n  }\n\n  .order-xl-3 {\n    order: 3;\n  }\n\n  .order-xl-4 {\n    order: 4;\n  }\n\n  .order-xl-5 {\n    order: 5;\n  }\n\n  .order-xl-6 {\n    order: 6;\n  }\n\n  .order-xl-7 {\n    order: 7;\n  }\n\n  .order-xl-8 {\n    order: 8;\n  }\n\n  .order-xl-9 {\n    order: 9;\n  }\n\n  .order-xl-10 {\n    order: 10;\n  }\n\n  .order-xl-11 {\n    order: 11;\n  }\n\n  .order-xl-12 {\n    order: 12;\n  }\n\n  .offset-xl-0 {\n    margin-left: 0;\n  }\n\n  .offset-xl-1 {\n    margin-left: 8.3333333333%;\n  }\n\n  .offset-xl-2 {\n    margin-left: 16.6666666667%;\n  }\n\n  .offset-xl-3 {\n    margin-left: 25%;\n  }\n\n  .offset-xl-4 {\n    margin-left: 33.3333333333%;\n  }\n\n  .offset-xl-5 {\n    margin-left: 41.6666666667%;\n  }\n\n  .offset-xl-6 {\n    margin-left: 50%;\n  }\n\n  .offset-xl-7 {\n    margin-left: 58.3333333333%;\n  }\n\n  .offset-xl-8 {\n    margin-left: 66.6666666667%;\n  }\n\n  .offset-xl-9 {\n    margin-left: 75%;\n  }\n\n  .offset-xl-10 {\n    margin-left: 83.3333333333%;\n  }\n\n  .offset-xl-11 {\n    margin-left: 91.6666666667%;\n  }\n}\n.table {\n  width: 100%;\n  margin-bottom: 1rem;\n  color: #212529;\n}\n.table th,\n.table td {\n  padding: 0.75rem;\n  vertical-align: top;\n  border-top: 1px solid #dee2e6;\n}\n.table thead th {\n  vertical-align: bottom;\n  border-bottom: 2px solid #dee2e6;\n}\n.table tbody + tbody {\n  border-top: 2px solid #dee2e6;\n}\n\n.table-sm th,\n.table-sm td {\n  padding: 0.3rem;\n}\n\n.table-bordered {\n  border: 1px solid #dee2e6;\n}\n.table-bordered th,\n.table-bordered td {\n  border: 1px solid #dee2e6;\n}\n.table-bordered thead th,\n.table-bordered thead td {\n  border-bottom-width: 2px;\n}\n\n.table-borderless th,\n.table-borderless td,\n.table-borderless thead th,\n.table-borderless tbody + tbody {\n  border: 0;\n}\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n\n.table-hover tbody tr:hover {\n  color: #212529;\n  background-color: rgba(0, 0, 0, 0.075);\n}\n\n.table-primary,\n.table-primary > th,\n.table-primary > td {\n  background-color: #b8daff;\n}\n.table-primary th,\n.table-primary td,\n.table-primary thead th,\n.table-primary tbody + tbody {\n  border-color: #7abaff;\n}\n\n.table-hover .table-primary:hover {\n  background-color: #9fcdff;\n}\n.table-hover .table-primary:hover > td,\n.table-hover .table-primary:hover > th {\n  background-color: #9fcdff;\n}\n\n.table-secondary,\n.table-secondary > th,\n.table-secondary > td {\n  background-color: #d6d8db;\n}\n.table-secondary th,\n.table-secondary td,\n.table-secondary thead th,\n.table-secondary tbody + tbody {\n  border-color: #b3b7bb;\n}\n\n.table-hover .table-secondary:hover {\n  background-color: #c8cbcf;\n}\n.table-hover .table-secondary:hover > td,\n.table-hover .table-secondary:hover > th {\n  background-color: #c8cbcf;\n}\n\n.table-success,\n.table-success > th,\n.table-success > td {\n  background-color: #c3e6cb;\n}\n.table-success th,\n.table-success td,\n.table-success thead th,\n.table-success tbody + tbody {\n  border-color: #8fd19e;\n}\n\n.table-hover .table-success:hover {\n  background-color: #b1dfbb;\n}\n.table-hover .table-success:hover > td,\n.table-hover .table-success:hover > th {\n  background-color: #b1dfbb;\n}\n\n.table-info,\n.table-info > th,\n.table-info > td {\n  background-color: #bee5eb;\n}\n.table-info th,\n.table-info td,\n.table-info thead th,\n.table-info tbody + tbody {\n  border-color: #86cfda;\n}\n\n.table-hover .table-info:hover {\n  background-color: #abdde5;\n}\n.table-hover .table-info:hover > td,\n.table-hover .table-info:hover > th {\n  background-color: #abdde5;\n}\n\n.table-warning,\n.table-warning > th,\n.table-warning > td {\n  background-color: #ffeeba;\n}\n.table-warning th,\n.table-warning td,\n.table-warning thead th,\n.table-warning tbody + tbody {\n  border-color: #ffdf7e;\n}\n\n.table-hover .table-warning:hover {\n  background-color: #ffe8a1;\n}\n.table-hover .table-warning:hover > td,\n.table-hover .table-warning:hover > th {\n  background-color: #ffe8a1;\n}\n\n.table-danger,\n.table-danger > th,\n.table-danger > td {\n  background-color: #f5c6cb;\n}\n.table-danger th,\n.table-danger td,\n.table-danger thead th,\n.table-danger tbody + tbody {\n  border-color: #ed969e;\n}\n\n.table-hover .table-danger:hover {\n  background-color: #f1b0b7;\n}\n.table-hover .table-danger:hover > td,\n.table-hover .table-danger:hover > th {\n  background-color: #f1b0b7;\n}\n\n.table-light,\n.table-light > th,\n.table-light > td {\n  background-color: #fdfdfe;\n}\n.table-light th,\n.table-light td,\n.table-light thead th,\n.table-light tbody + tbody {\n  border-color: #fbfcfc;\n}\n\n.table-hover .table-light:hover {\n  background-color: #ececf6;\n}\n.table-hover .table-light:hover > td,\n.table-hover .table-light:hover > th {\n  background-color: #ececf6;\n}\n\n.table-dark,\n.table-dark > th,\n.table-dark > td {\n  background-color: #c6c8ca;\n}\n.table-dark th,\n.table-dark td,\n.table-dark thead th,\n.table-dark tbody + tbody {\n  border-color: #95999c;\n}\n\n.table-hover .table-dark:hover {\n  background-color: #b9bbbe;\n}\n.table-hover .table-dark:hover > td,\n.table-hover .table-dark:hover > th {\n  background-color: #b9bbbe;\n}\n\n.table-active,\n.table-active > th,\n.table-active > td {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n\n.table-hover .table-active:hover {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n.table-hover .table-active:hover > td,\n.table-hover .table-active:hover > th {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n\n.table .thead-dark th {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #454d55;\n}\n.table .thead-light th {\n  color: #495057;\n  background-color: #e9ecef;\n  border-color: #dee2e6;\n}\n\n.table-dark {\n  color: #fff;\n  background-color: #343a40;\n}\n.table-dark th,\n.table-dark td,\n.table-dark thead th {\n  border-color: #454d55;\n}\n.table-dark.table-bordered {\n  border: 0;\n}\n.table-dark.table-striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(255, 255, 255, 0.05);\n}\n.table-dark.table-hover tbody tr:hover {\n  color: #fff;\n  background-color: rgba(255, 255, 255, 0.075);\n}\n\n@media (max-width: 575.98px) {\n  .table-responsive-sm {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .table-responsive-sm > .table-bordered {\n    border: 0;\n  }\n}\n@media (max-width: 767.98px) {\n  .table-responsive-md {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .table-responsive-md > .table-bordered {\n    border: 0;\n  }\n}\n@media (max-width: 991.98px) {\n  .table-responsive-lg {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .table-responsive-lg > .table-bordered {\n    border: 0;\n  }\n}\n@media (max-width: 1199.98px) {\n  .table-responsive-xl {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .table-responsive-xl > .table-bordered {\n    border: 0;\n  }\n}\n.table-responsive {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.table-responsive > .table-bordered {\n  border: 0;\n}\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .form-control {\n    transition: none;\n  }\n}\n.form-control::-ms-expand {\n  background-color: transparent;\n  border: 0;\n}\n.form-control:-moz-focusring {\n  color: transparent;\n  text-shadow: 0 0 0 #495057;\n}\n.form-control:focus {\n  color: #495057;\n  background-color: #fff;\n  border-color: #80bdff;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.form-control::-moz-placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n.form-control:-ms-input-placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n.form-control::placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n.form-control:disabled, .form-control[readonly] {\n  background-color: #e9ecef;\n  opacity: 1;\n}\n\ninput[type=date].form-control,\ninput[type=time].form-control,\ninput[type=datetime-local].form-control,\ninput[type=month].form-control {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n\nselect.form-control:focus::-ms-value {\n  color: #495057;\n  background-color: #fff;\n}\n\n.form-control-file,\n.form-control-range {\n  display: block;\n  width: 100%;\n}\n\n.col-form-label {\n  padding-top: calc(0.375rem + 1px);\n  padding-bottom: calc(0.375rem + 1px);\n  margin-bottom: 0;\n  font-size: inherit;\n  line-height: 1.5;\n}\n\n.col-form-label-lg {\n  padding-top: calc(0.5rem + 1px);\n  padding-bottom: calc(0.5rem + 1px);\n  font-size: 1.25rem;\n  line-height: 1.5;\n}\n\n.col-form-label-sm {\n  padding-top: calc(0.25rem + 1px);\n  padding-bottom: calc(0.25rem + 1px);\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n\n.form-control-plaintext {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0;\n  margin-bottom: 0;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #212529;\n  background-color: transparent;\n  border: solid transparent;\n  border-width: 1px 0;\n}\n.form-control-plaintext.form-control-sm, .form-control-plaintext.form-control-lg {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.form-control-sm {\n  height: calc(1.5em + 0.5rem + 2px);\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem;\n}\n\n.form-control-lg {\n  height: calc(1.5em + 1rem + 2px);\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem;\n}\n\nselect.form-control[size], select.form-control[multiple] {\n  height: auto;\n}\n\ntextarea.form-control {\n  height: auto;\n}\n\n.form-group {\n  margin-bottom: 1rem;\n}\n\n.form-text {\n  display: block;\n  margin-top: 0.25rem;\n}\n\n.form-row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -5px;\n  margin-left: -5px;\n}\n.form-row > .col,\n.form-row > [class*=col-] {\n  padding-right: 5px;\n  padding-left: 5px;\n}\n\n.form-check {\n  position: relative;\n  display: block;\n  padding-left: 1.25rem;\n}\n\n.form-check-input {\n  position: absolute;\n  margin-top: 0.3rem;\n  margin-left: -1.25rem;\n}\n.form-check-input[disabled] ~ .form-check-label, .form-check-input:disabled ~ .form-check-label {\n  color: #6c757d;\n}\n\n.form-check-label {\n  margin-bottom: 0;\n}\n\n.form-check-inline {\n  display: inline-flex;\n  align-items: center;\n  padding-left: 0;\n  margin-right: 0.75rem;\n}\n.form-check-inline .form-check-input {\n  position: static;\n  margin-top: 0;\n  margin-right: 0.3125rem;\n  margin-left: 0;\n}\n\n.valid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #28a745;\n}\n\n.valid-tooltip {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: 0.1rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #fff;\n  background-color: rgba(40, 167, 69, 0.9);\n  border-radius: 0.25rem;\n}\n.form-row > .col > .valid-tooltip, .form-row > [class*=col-] > .valid-tooltip {\n  left: 5px;\n}\n\n.was-validated :valid ~ .valid-feedback,\n.was-validated :valid ~ .valid-tooltip,\n.is-valid ~ .valid-feedback,\n.is-valid ~ .valid-tooltip {\n  display: block;\n}\n\n.was-validated .form-control:valid, .form-control.is-valid {\n  border-color: #28a745;\n  padding-right: calc(1.5em + 0.75rem);\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right calc(0.375em + 0.1875rem) center;\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n.was-validated .form-control:valid:focus, .form-control.is-valid:focus {\n  border-color: #28a745;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n\n.was-validated textarea.form-control:valid, textarea.form-control.is-valid {\n  padding-right: calc(1.5em + 0.75rem);\n  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);\n}\n\n.was-validated .custom-select:valid, .custom-select.is-valid {\n  border-color: #28a745;\n  padding-right: calc(0.75em + 2.3125rem);\n  background: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") right 0.75rem center/8px 10px no-repeat, #fff url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\") center right 1.75rem/calc(0.75em + 0.375rem) calc(0.75em + 0.375rem) no-repeat;\n}\n.was-validated .custom-select:valid:focus, .custom-select.is-valid:focus {\n  border-color: #28a745;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n\n.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {\n  color: #28a745;\n}\n.was-validated .form-check-input:valid ~ .valid-feedback,\n.was-validated .form-check-input:valid ~ .valid-tooltip, .form-check-input.is-valid ~ .valid-feedback,\n.form-check-input.is-valid ~ .valid-tooltip {\n  display: block;\n}\n\n.was-validated .custom-control-input:valid ~ .custom-control-label, .custom-control-input.is-valid ~ .custom-control-label {\n  color: #28a745;\n}\n.was-validated .custom-control-input:valid ~ .custom-control-label::before, .custom-control-input.is-valid ~ .custom-control-label::before {\n  border-color: #28a745;\n}\n.was-validated .custom-control-input:valid:checked ~ .custom-control-label::before, .custom-control-input.is-valid:checked ~ .custom-control-label::before {\n  border-color: #34ce57;\n  background-color: #34ce57;\n}\n.was-validated .custom-control-input:valid:focus ~ .custom-control-label::before, .custom-control-input.is-valid:focus ~ .custom-control-label::before {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n.was-validated .custom-control-input:valid:focus:not(:checked) ~ .custom-control-label::before, .custom-control-input.is-valid:focus:not(:checked) ~ .custom-control-label::before {\n  border-color: #28a745;\n}\n\n.was-validated .custom-file-input:valid ~ .custom-file-label, .custom-file-input.is-valid ~ .custom-file-label {\n  border-color: #28a745;\n}\n.was-validated .custom-file-input:valid:focus ~ .custom-file-label, .custom-file-input.is-valid:focus ~ .custom-file-label {\n  border-color: #28a745;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n\n.invalid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #dc3545;\n}\n\n.invalid-tooltip {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: 0.1rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #fff;\n  background-color: rgba(220, 53, 69, 0.9);\n  border-radius: 0.25rem;\n}\n.form-row > .col > .invalid-tooltip, .form-row > [class*=col-] > .invalid-tooltip {\n  left: 5px;\n}\n\n.was-validated :invalid ~ .invalid-feedback,\n.was-validated :invalid ~ .invalid-tooltip,\n.is-invalid ~ .invalid-feedback,\n.is-invalid ~ .invalid-tooltip {\n  display: block;\n}\n\n.was-validated .form-control:invalid, .form-control.is-invalid {\n  border-color: #dc3545;\n  padding-right: calc(1.5em + 0.75rem);\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right calc(0.375em + 0.1875rem) center;\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n.was-validated .form-control:invalid:focus, .form-control.is-invalid:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n\n.was-validated textarea.form-control:invalid, textarea.form-control.is-invalid {\n  padding-right: calc(1.5em + 0.75rem);\n  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);\n}\n\n.was-validated .custom-select:invalid, .custom-select.is-invalid {\n  border-color: #dc3545;\n  padding-right: calc(0.75em + 2.3125rem);\n  background: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") right 0.75rem center/8px 10px no-repeat, #fff url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\") center right 1.75rem/calc(0.75em + 0.375rem) calc(0.75em + 0.375rem) no-repeat;\n}\n.was-validated .custom-select:invalid:focus, .custom-select.is-invalid:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n\n.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {\n  color: #dc3545;\n}\n.was-validated .form-check-input:invalid ~ .invalid-feedback,\n.was-validated .form-check-input:invalid ~ .invalid-tooltip, .form-check-input.is-invalid ~ .invalid-feedback,\n.form-check-input.is-invalid ~ .invalid-tooltip {\n  display: block;\n}\n\n.was-validated .custom-control-input:invalid ~ .custom-control-label, .custom-control-input.is-invalid ~ .custom-control-label {\n  color: #dc3545;\n}\n.was-validated .custom-control-input:invalid ~ .custom-control-label::before, .custom-control-input.is-invalid ~ .custom-control-label::before {\n  border-color: #dc3545;\n}\n.was-validated .custom-control-input:invalid:checked ~ .custom-control-label::before, .custom-control-input.is-invalid:checked ~ .custom-control-label::before {\n  border-color: #e4606d;\n  background-color: #e4606d;\n}\n.was-validated .custom-control-input:invalid:focus ~ .custom-control-label::before, .custom-control-input.is-invalid:focus ~ .custom-control-label::before {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n.was-validated .custom-control-input:invalid:focus:not(:checked) ~ .custom-control-label::before, .custom-control-input.is-invalid:focus:not(:checked) ~ .custom-control-label::before {\n  border-color: #dc3545;\n}\n\n.was-validated .custom-file-input:invalid ~ .custom-file-label, .custom-file-input.is-invalid ~ .custom-file-label {\n  border-color: #dc3545;\n}\n.was-validated .custom-file-input:invalid:focus ~ .custom-file-label, .custom-file-input.is-invalid:focus ~ .custom-file-label {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n\n.form-inline {\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n}\n.form-inline .form-check {\n  width: 100%;\n}\n@media (min-width: 576px) {\n  .form-inline label {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 0;\n  }\n  .form-inline .form-group {\n    display: flex;\n    flex: 0 0 auto;\n    flex-flow: row wrap;\n    align-items: center;\n    margin-bottom: 0;\n  }\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .form-inline .form-control-plaintext {\n    display: inline-block;\n  }\n  .form-inline .input-group,\n.form-inline .custom-select {\n    width: auto;\n  }\n  .form-inline .form-check {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: auto;\n    padding-left: 0;\n  }\n  .form-inline .form-check-input {\n    position: relative;\n    flex-shrink: 0;\n    margin-top: 0;\n    margin-right: 0.25rem;\n    margin-left: 0;\n  }\n  .form-inline .custom-control {\n    align-items: center;\n    justify-content: center;\n  }\n  .form-inline .custom-control-label {\n    margin-bottom: 0;\n  }\n}\n\n.btn {\n  display: inline-block;\n  font-weight: 400;\n  color: #212529;\n  text-align: center;\n  vertical-align: middle;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-color: transparent;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .btn {\n    transition: none;\n  }\n}\n.btn:hover {\n  color: #212529;\n  text-decoration: none;\n}\n.btn:focus, .btn.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.btn.disabled, .btn:disabled {\n  opacity: 0.65;\n}\n.btn:not(:disabled):not(.disabled) {\n  cursor: pointer;\n}\na.btn.disabled,\nfieldset:disabled a.btn {\n  pointer-events: none;\n}\n\n.btn-primary {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n.btn-primary:hover {\n  color: #fff;\n  background-color: #0069d9;\n  border-color: #0062cc;\n}\n.btn-primary:focus, .btn-primary.focus {\n  color: #fff;\n  background-color: #0069d9;\n  border-color: #0062cc;\n  box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);\n}\n.btn-primary.disabled, .btn-primary:disabled {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n.btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active, .show > .btn-primary.dropdown-toggle {\n  color: #fff;\n  background-color: #0062cc;\n  border-color: #005cbf;\n}\n.btn-primary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus, .show > .btn-primary.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);\n}\n\n.btn-secondary {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n.btn-secondary:hover {\n  color: #fff;\n  background-color: #5a6268;\n  border-color: #545b62;\n}\n.btn-secondary:focus, .btn-secondary.focus {\n  color: #fff;\n  background-color: #5a6268;\n  border-color: #545b62;\n  box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5);\n}\n.btn-secondary.disabled, .btn-secondary:disabled {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n.btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active, .show > .btn-secondary.dropdown-toggle {\n  color: #fff;\n  background-color: #545b62;\n  border-color: #4e555b;\n}\n.btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus, .show > .btn-secondary.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5);\n}\n\n.btn-success {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n.btn-success:hover {\n  color: #fff;\n  background-color: #218838;\n  border-color: #1e7e34;\n}\n.btn-success:focus, .btn-success.focus {\n  color: #fff;\n  background-color: #218838;\n  border-color: #1e7e34;\n  box-shadow: 0 0 0 0.2rem rgba(72, 180, 97, 0.5);\n}\n.btn-success.disabled, .btn-success:disabled {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n.btn-success:not(:disabled):not(.disabled):active, .btn-success:not(:disabled):not(.disabled).active, .show > .btn-success.dropdown-toggle {\n  color: #fff;\n  background-color: #1e7e34;\n  border-color: #1c7430;\n}\n.btn-success:not(:disabled):not(.disabled):active:focus, .btn-success:not(:disabled):not(.disabled).active:focus, .show > .btn-success.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(72, 180, 97, 0.5);\n}\n\n.btn-info {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n.btn-info:hover {\n  color: #fff;\n  background-color: #138496;\n  border-color: #117a8b;\n}\n.btn-info:focus, .btn-info.focus {\n  color: #fff;\n  background-color: #138496;\n  border-color: #117a8b;\n  box-shadow: 0 0 0 0.2rem rgba(58, 176, 195, 0.5);\n}\n.btn-info.disabled, .btn-info:disabled {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n.btn-info:not(:disabled):not(.disabled):active, .btn-info:not(:disabled):not(.disabled).active, .show > .btn-info.dropdown-toggle {\n  color: #fff;\n  background-color: #117a8b;\n  border-color: #10707f;\n}\n.btn-info:not(:disabled):not(.disabled):active:focus, .btn-info:not(:disabled):not(.disabled).active:focus, .show > .btn-info.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(58, 176, 195, 0.5);\n}\n\n.btn-warning {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n.btn-warning:hover {\n  color: #212529;\n  background-color: #e0a800;\n  border-color: #d39e00;\n}\n.btn-warning:focus, .btn-warning.focus {\n  color: #212529;\n  background-color: #e0a800;\n  border-color: #d39e00;\n  box-shadow: 0 0 0 0.2rem rgba(222, 170, 12, 0.5);\n}\n.btn-warning.disabled, .btn-warning:disabled {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n.btn-warning:not(:disabled):not(.disabled):active, .btn-warning:not(:disabled):not(.disabled).active, .show > .btn-warning.dropdown-toggle {\n  color: #212529;\n  background-color: #d39e00;\n  border-color: #c69500;\n}\n.btn-warning:not(:disabled):not(.disabled):active:focus, .btn-warning:not(:disabled):not(.disabled).active:focus, .show > .btn-warning.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(222, 170, 12, 0.5);\n}\n\n.btn-danger {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n.btn-danger:hover {\n  color: #fff;\n  background-color: #c82333;\n  border-color: #bd2130;\n}\n.btn-danger:focus, .btn-danger.focus {\n  color: #fff;\n  background-color: #c82333;\n  border-color: #bd2130;\n  box-shadow: 0 0 0 0.2rem rgba(225, 83, 97, 0.5);\n}\n.btn-danger.disabled, .btn-danger:disabled {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n.btn-danger:not(:disabled):not(.disabled):active, .btn-danger:not(:disabled):not(.disabled).active, .show > .btn-danger.dropdown-toggle {\n  color: #fff;\n  background-color: #bd2130;\n  border-color: #b21f2d;\n}\n.btn-danger:not(:disabled):not(.disabled):active:focus, .btn-danger:not(:disabled):not(.disabled).active:focus, .show > .btn-danger.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(225, 83, 97, 0.5);\n}\n\n.btn-light {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n.btn-light:hover {\n  color: #212529;\n  background-color: #e2e6ea;\n  border-color: #dae0e5;\n}\n.btn-light:focus, .btn-light.focus {\n  color: #212529;\n  background-color: #e2e6ea;\n  border-color: #dae0e5;\n  box-shadow: 0 0 0 0.2rem rgba(216, 217, 219, 0.5);\n}\n.btn-light.disabled, .btn-light:disabled {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n.btn-light:not(:disabled):not(.disabled):active, .btn-light:not(:disabled):not(.disabled).active, .show > .btn-light.dropdown-toggle {\n  color: #212529;\n  background-color: #dae0e5;\n  border-color: #d3d9df;\n}\n.btn-light:not(:disabled):not(.disabled):active:focus, .btn-light:not(:disabled):not(.disabled).active:focus, .show > .btn-light.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(216, 217, 219, 0.5);\n}\n\n.btn-dark {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n}\n.btn-dark:hover {\n  color: #fff;\n  background-color: #23272b;\n  border-color: #1d2124;\n}\n.btn-dark:focus, .btn-dark.focus {\n  color: #fff;\n  background-color: #23272b;\n  border-color: #1d2124;\n  box-shadow: 0 0 0 0.2rem rgba(82, 88, 93, 0.5);\n}\n.btn-dark.disabled, .btn-dark:disabled {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n}\n.btn-dark:not(:disabled):not(.disabled):active, .btn-dark:not(:disabled):not(.disabled).active, .show > .btn-dark.dropdown-toggle {\n  color: #fff;\n  background-color: #1d2124;\n  border-color: #171a1d;\n}\n.btn-dark:not(:disabled):not(.disabled):active:focus, .btn-dark:not(:disabled):not(.disabled).active:focus, .show > .btn-dark.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(82, 88, 93, 0.5);\n}\n\n.btn-outline-primary {\n  color: #007bff;\n  border-color: #007bff;\n}\n.btn-outline-primary:hover {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n.btn-outline-primary:focus, .btn-outline-primary.focus {\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n.btn-outline-primary.disabled, .btn-outline-primary:disabled {\n  color: #007bff;\n  background-color: transparent;\n}\n.btn-outline-primary:not(:disabled):not(.disabled):active, .btn-outline-primary:not(:disabled):not(.disabled).active, .show > .btn-outline-primary.dropdown-toggle {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n.btn-outline-primary:not(:disabled):not(.disabled):active:focus, .btn-outline-primary:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-primary.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n\n.btn-outline-secondary {\n  color: #6c757d;\n  border-color: #6c757d;\n}\n.btn-outline-secondary:hover {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n.btn-outline-secondary:focus, .btn-outline-secondary.focus {\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n}\n.btn-outline-secondary.disabled, .btn-outline-secondary:disabled {\n  color: #6c757d;\n  background-color: transparent;\n}\n.btn-outline-secondary:not(:disabled):not(.disabled):active, .btn-outline-secondary:not(:disabled):not(.disabled).active, .show > .btn-outline-secondary.dropdown-toggle {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n.btn-outline-secondary:not(:disabled):not(.disabled):active:focus, .btn-outline-secondary:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-secondary.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n}\n\n.btn-outline-success {\n  color: #28a745;\n  border-color: #28a745;\n}\n.btn-outline-success:hover {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n.btn-outline-success:focus, .btn-outline-success.focus {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n.btn-outline-success.disabled, .btn-outline-success:disabled {\n  color: #28a745;\n  background-color: transparent;\n}\n.btn-outline-success:not(:disabled):not(.disabled):active, .btn-outline-success:not(:disabled):not(.disabled).active, .show > .btn-outline-success.dropdown-toggle {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n.btn-outline-success:not(:disabled):not(.disabled):active:focus, .btn-outline-success:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-success.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n\n.btn-outline-info {\n  color: #17a2b8;\n  border-color: #17a2b8;\n}\n.btn-outline-info:hover {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n.btn-outline-info:focus, .btn-outline-info.focus {\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n.btn-outline-info.disabled, .btn-outline-info:disabled {\n  color: #17a2b8;\n  background-color: transparent;\n}\n.btn-outline-info:not(:disabled):not(.disabled):active, .btn-outline-info:not(:disabled):not(.disabled).active, .show > .btn-outline-info.dropdown-toggle {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n.btn-outline-info:not(:disabled):not(.disabled):active:focus, .btn-outline-info:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-info.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n\n.btn-outline-warning {\n  color: #ffc107;\n  border-color: #ffc107;\n}\n.btn-outline-warning:hover {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n.btn-outline-warning:focus, .btn-outline-warning.focus {\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n.btn-outline-warning.disabled, .btn-outline-warning:disabled {\n  color: #ffc107;\n  background-color: transparent;\n}\n.btn-outline-warning:not(:disabled):not(.disabled):active, .btn-outline-warning:not(:disabled):not(.disabled).active, .show > .btn-outline-warning.dropdown-toggle {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n.btn-outline-warning:not(:disabled):not(.disabled):active:focus, .btn-outline-warning:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-warning.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n\n.btn-outline-danger {\n  color: #dc3545;\n  border-color: #dc3545;\n}\n.btn-outline-danger:hover {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n.btn-outline-danger:focus, .btn-outline-danger.focus {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n}\n.btn-outline-danger.disabled, .btn-outline-danger:disabled {\n  color: #dc3545;\n  background-color: transparent;\n}\n.btn-outline-danger:not(:disabled):not(.disabled):active, .btn-outline-danger:not(:disabled):not(.disabled).active, .show > .btn-outline-danger.dropdown-toggle {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n.btn-outline-danger:not(:disabled):not(.disabled):active:focus, .btn-outline-danger:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-danger.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n}\n\n.btn-outline-light {\n  color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n.btn-outline-light:hover {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n.btn-outline-light:focus, .btn-outline-light.focus {\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n.btn-outline-light.disabled, .btn-outline-light:disabled {\n  color: #f8f9fa;\n  background-color: transparent;\n}\n.btn-outline-light:not(:disabled):not(.disabled):active, .btn-outline-light:not(:disabled):not(.disabled).active, .show > .btn-outline-light.dropdown-toggle {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n.btn-outline-light:not(:disabled):not(.disabled):active:focus, .btn-outline-light:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-light.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n\n.btn-outline-dark {\n  color: #343a40;\n  border-color: #343a40;\n}\n.btn-outline-dark:hover {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n}\n.btn-outline-dark:focus, .btn-outline-dark.focus {\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n.btn-outline-dark.disabled, .btn-outline-dark:disabled {\n  color: #343a40;\n  background-color: transparent;\n}\n.btn-outline-dark:not(:disabled):not(.disabled):active, .btn-outline-dark:not(:disabled):not(.disabled).active, .show > .btn-outline-dark.dropdown-toggle {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n}\n.btn-outline-dark:not(:disabled):not(.disabled):active:focus, .btn-outline-dark:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-dark.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n\n.btn-link {\n  font-weight: 400;\n  color: #007bff;\n  text-decoration: none;\n}\n.btn-link:hover {\n  color: #0056b3;\n  text-decoration: underline;\n}\n.btn-link:focus, .btn-link.focus {\n  text-decoration: underline;\n}\n.btn-link:disabled, .btn-link.disabled {\n  color: #6c757d;\n  pointer-events: none;\n}\n\n.btn-lg, .btn-group-lg > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem;\n}\n\n.btn-sm, .btn-group-sm > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem;\n}\n\n.btn-block {\n  display: block;\n  width: 100%;\n}\n.btn-block + .btn-block {\n  margin-top: 0.5rem;\n}\n\ninput[type=submit].btn-block,\ninput[type=reset].btn-block,\ninput[type=button].btn-block {\n  width: 100%;\n}\n\n.fade {\n  transition: opacity 0.15s linear;\n}\n@media (prefers-reduced-motion: reduce) {\n  .fade {\n    transition: none;\n  }\n}\n.fade:not(.show) {\n  opacity: 0;\n}\n\n.collapse:not(.show) {\n  display: none;\n}\n\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  transition: height 0.35s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n  .collapsing {\n    transition: none;\n  }\n}\n\n.dropup,\n.dropright,\n.dropdown,\n.dropleft {\n  position: relative;\n}\n\n.dropdown-toggle {\n  white-space: nowrap;\n}\n.dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0;\n  border-left: 0.3em solid transparent;\n}\n.dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 10rem;\n  padding: 0.5rem 0;\n  margin: 0.125rem 0 0;\n  font-size: 1rem;\n  color: #212529;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem;\n}\n\n.dropdown-menu-left {\n  right: auto;\n  left: 0;\n}\n\n.dropdown-menu-right {\n  right: 0;\n  left: auto;\n}\n\n@media (min-width: 576px) {\n  .dropdown-menu-sm-left {\n    right: auto;\n    left: 0;\n  }\n\n  .dropdown-menu-sm-right {\n    right: 0;\n    left: auto;\n  }\n}\n@media (min-width: 768px) {\n  .dropdown-menu-md-left {\n    right: auto;\n    left: 0;\n  }\n\n  .dropdown-menu-md-right {\n    right: 0;\n    left: auto;\n  }\n}\n@media (min-width: 992px) {\n  .dropdown-menu-lg-left {\n    right: auto;\n    left: 0;\n  }\n\n  .dropdown-menu-lg-right {\n    right: 0;\n    left: auto;\n  }\n}\n@media (min-width: 1200px) {\n  .dropdown-menu-xl-left {\n    right: auto;\n    left: 0;\n  }\n\n  .dropdown-menu-xl-right {\n    right: 0;\n    left: auto;\n  }\n}\n.dropup .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-top: 0;\n  margin-bottom: 0.125rem;\n}\n.dropup .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0.3em solid;\n  border-left: 0.3em solid transparent;\n}\n.dropup .dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n\n.dropright .dropdown-menu {\n  top: 0;\n  right: auto;\n  left: 100%;\n  margin-top: 0;\n  margin-left: 0.125rem;\n}\n.dropright .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0;\n  border-bottom: 0.3em solid transparent;\n  border-left: 0.3em solid;\n}\n.dropright .dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n.dropright .dropdown-toggle::after {\n  vertical-align: 0;\n}\n\n.dropleft .dropdown-menu {\n  top: 0;\n  right: 100%;\n  left: auto;\n  margin-top: 0;\n  margin-right: 0.125rem;\n}\n.dropleft .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n}\n.dropleft .dropdown-toggle::after {\n  display: none;\n}\n.dropleft .dropdown-toggle::before {\n  display: inline-block;\n  margin-right: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0.3em solid;\n  border-bottom: 0.3em solid transparent;\n}\n.dropleft .dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n.dropleft .dropdown-toggle::before {\n  vertical-align: 0;\n}\n\n.dropdown-menu[x-placement^=top], .dropdown-menu[x-placement^=right], .dropdown-menu[x-placement^=bottom], .dropdown-menu[x-placement^=left] {\n  right: auto;\n  bottom: auto;\n}\n\n.dropdown-divider {\n  height: 0;\n  margin: 0.5rem 0;\n  overflow: hidden;\n  border-top: 1px solid #e9ecef;\n}\n\n.dropdown-item {\n  display: block;\n  width: 100%;\n  padding: 0.25rem 1.5rem;\n  clear: both;\n  font-weight: 400;\n  color: #212529;\n  text-align: inherit;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0;\n}\n.dropdown-item:hover, .dropdown-item:focus {\n  color: #16181b;\n  text-decoration: none;\n  background-color: #e9ecef;\n}\n.dropdown-item.active, .dropdown-item:active {\n  color: #fff;\n  text-decoration: none;\n  background-color: #007bff;\n}\n.dropdown-item.disabled, .dropdown-item:disabled {\n  color: #adb5bd;\n  pointer-events: none;\n  background-color: transparent;\n}\n\n.dropdown-menu.show {\n  display: block;\n}\n\n.dropdown-header {\n  display: block;\n  padding: 0.5rem 1.5rem;\n  margin-bottom: 0;\n  font-size: 0.875rem;\n  color: #6c757d;\n  white-space: nowrap;\n}\n\n.dropdown-item-text {\n  display: block;\n  padding: 0.25rem 1.5rem;\n  color: #212529;\n}\n\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle;\n}\n.btn-group > .btn,\n.btn-group-vertical > .btn {\n  position: relative;\n  flex: 1 1 auto;\n}\n.btn-group > .btn:hover,\n.btn-group-vertical > .btn:hover {\n  z-index: 1;\n}\n.btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,\n.btn-group-vertical > .btn:focus,\n.btn-group-vertical > .btn:active,\n.btn-group-vertical > .btn.active {\n  z-index: 1;\n}\n\n.btn-toolbar {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n.btn-toolbar .input-group {\n  width: auto;\n}\n\n.btn-group > .btn:not(:first-child),\n.btn-group > .btn-group:not(:first-child) {\n  margin-left: -1px;\n}\n.btn-group > .btn:not(:last-child):not(.dropdown-toggle),\n.btn-group > .btn-group:not(:last-child) > .btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.btn-group > .btn:not(:first-child),\n.btn-group > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.dropdown-toggle-split {\n  padding-right: 0.5625rem;\n  padding-left: 0.5625rem;\n}\n.dropdown-toggle-split::after, .dropup .dropdown-toggle-split::after, .dropright .dropdown-toggle-split::after {\n  margin-left: 0;\n}\n.dropleft .dropdown-toggle-split::before {\n  margin-right: 0;\n}\n\n.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {\n  padding-right: 0.375rem;\n  padding-left: 0.375rem;\n}\n\n.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {\n  padding-right: 0.75rem;\n  padding-left: 0.75rem;\n}\n\n.btn-group-vertical {\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n}\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group {\n  width: 100%;\n}\n.btn-group-vertical > .btn:not(:first-child),\n.btn-group-vertical > .btn-group:not(:first-child) {\n  margin-top: -1px;\n}\n.btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),\n.btn-group-vertical > .btn-group:not(:last-child) > .btn {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn:not(:first-child),\n.btn-group-vertical > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.btn-group-toggle > .btn,\n.btn-group-toggle > .btn-group > .btn {\n  margin-bottom: 0;\n}\n.btn-group-toggle > .btn input[type=radio],\n.btn-group-toggle > .btn input[type=checkbox],\n.btn-group-toggle > .btn-group > .btn input[type=radio],\n.btn-group-toggle > .btn-group > .btn input[type=checkbox] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n\n.input-group {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  width: 100%;\n}\n.input-group > .form-control,\n.input-group > .form-control-plaintext,\n.input-group > .custom-select,\n.input-group > .custom-file {\n  position: relative;\n  flex: 1 1 auto;\n  width: 1%;\n  min-width: 0;\n  margin-bottom: 0;\n}\n.input-group > .form-control + .form-control,\n.input-group > .form-control + .custom-select,\n.input-group > .form-control + .custom-file,\n.input-group > .form-control-plaintext + .form-control,\n.input-group > .form-control-plaintext + .custom-select,\n.input-group > .form-control-plaintext + .custom-file,\n.input-group > .custom-select + .form-control,\n.input-group > .custom-select + .custom-select,\n.input-group > .custom-select + .custom-file,\n.input-group > .custom-file + .form-control,\n.input-group > .custom-file + .custom-select,\n.input-group > .custom-file + .custom-file {\n  margin-left: -1px;\n}\n.input-group > .form-control:focus,\n.input-group > .custom-select:focus,\n.input-group > .custom-file .custom-file-input:focus ~ .custom-file-label {\n  z-index: 3;\n}\n.input-group > .custom-file .custom-file-input:focus {\n  z-index: 4;\n}\n.input-group > .form-control:not(:first-child),\n.input-group > .custom-select:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.input-group > .custom-file {\n  display: flex;\n  align-items: center;\n}\n.input-group > .custom-file:not(:last-child) .custom-file-label, .input-group > .custom-file:not(:first-child) .custom-file-label {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.input-group:not(.has-validation) > .form-control:not(:last-child),\n.input-group:not(.has-validation) > .custom-select:not(:last-child),\n.input-group:not(.has-validation) > .custom-file:not(:last-child) .custom-file-label::after {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group.has-validation > .form-control:nth-last-child(n+3),\n.input-group.has-validation > .custom-select:nth-last-child(n+3),\n.input-group.has-validation > .custom-file:nth-last-child(n+3) .custom-file-label::after {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.input-group-prepend,\n.input-group-append {\n  display: flex;\n}\n.input-group-prepend .btn,\n.input-group-append .btn {\n  position: relative;\n  z-index: 2;\n}\n.input-group-prepend .btn:focus,\n.input-group-append .btn:focus {\n  z-index: 3;\n}\n.input-group-prepend .btn + .btn,\n.input-group-prepend .btn + .input-group-text,\n.input-group-prepend .input-group-text + .input-group-text,\n.input-group-prepend .input-group-text + .btn,\n.input-group-append .btn + .btn,\n.input-group-append .btn + .input-group-text,\n.input-group-append .input-group-text + .input-group-text,\n.input-group-append .input-group-text + .btn {\n  margin-left: -1px;\n}\n\n.input-group-prepend {\n  margin-right: -1px;\n}\n\n.input-group-append {\n  margin-left: -1px;\n}\n\n.input-group-text {\n  display: flex;\n  align-items: center;\n  padding: 0.375rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #e9ecef;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n}\n.input-group-text input[type=radio],\n.input-group-text input[type=checkbox] {\n  margin-top: 0;\n}\n\n.input-group-lg > .form-control:not(textarea),\n.input-group-lg > .custom-select {\n  height: calc(1.5em + 1rem + 2px);\n}\n\n.input-group-lg > .form-control,\n.input-group-lg > .custom-select,\n.input-group-lg > .input-group-prepend > .input-group-text,\n.input-group-lg > .input-group-append > .input-group-text,\n.input-group-lg > .input-group-prepend > .btn,\n.input-group-lg > .input-group-append > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem;\n}\n\n.input-group-sm > .form-control:not(textarea),\n.input-group-sm > .custom-select {\n  height: calc(1.5em + 0.5rem + 2px);\n}\n\n.input-group-sm > .form-control,\n.input-group-sm > .custom-select,\n.input-group-sm > .input-group-prepend > .input-group-text,\n.input-group-sm > .input-group-append > .input-group-text,\n.input-group-sm > .input-group-prepend > .btn,\n.input-group-sm > .input-group-append > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem;\n}\n\n.input-group-lg > .custom-select,\n.input-group-sm > .custom-select {\n  padding-right: 1.75rem;\n}\n\n.input-group > .input-group-prepend > .btn,\n.input-group > .input-group-prepend > .input-group-text,\n.input-group:not(.has-validation) > .input-group-append:not(:last-child) > .btn,\n.input-group:not(.has-validation) > .input-group-append:not(:last-child) > .input-group-text,\n.input-group.has-validation > .input-group-append:nth-last-child(n+3) > .btn,\n.input-group.has-validation > .input-group-append:nth-last-child(n+3) > .input-group-text,\n.input-group > .input-group-append:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group > .input-group-append:last-child > .input-group-text:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.input-group > .input-group-append > .btn,\n.input-group > .input-group-append > .input-group-text,\n.input-group > .input-group-prepend:not(:first-child) > .btn,\n.input-group > .input-group-prepend:not(:first-child) > .input-group-text,\n.input-group > .input-group-prepend:first-child > .btn:not(:first-child),\n.input-group > .input-group-prepend:first-child > .input-group-text:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.custom-control {\n  position: relative;\n  z-index: 1;\n  display: block;\n  min-height: 1.5rem;\n  padding-left: 1.5rem;\n  -webkit-print-color-adjust: exact;\n          color-adjust: exact;\n}\n\n.custom-control-inline {\n  display: inline-flex;\n  margin-right: 1rem;\n}\n\n.custom-control-input {\n  position: absolute;\n  left: 0;\n  z-index: -1;\n  width: 1rem;\n  height: 1.25rem;\n  opacity: 0;\n}\n.custom-control-input:checked ~ .custom-control-label::before {\n  color: #fff;\n  border-color: #007bff;\n  background-color: #007bff;\n}\n.custom-control-input:focus ~ .custom-control-label::before {\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.custom-control-input:focus:not(:checked) ~ .custom-control-label::before {\n  border-color: #80bdff;\n}\n.custom-control-input:not(:disabled):active ~ .custom-control-label::before {\n  color: #fff;\n  background-color: #b3d7ff;\n  border-color: #b3d7ff;\n}\n.custom-control-input[disabled] ~ .custom-control-label, .custom-control-input:disabled ~ .custom-control-label {\n  color: #6c757d;\n}\n.custom-control-input[disabled] ~ .custom-control-label::before, .custom-control-input:disabled ~ .custom-control-label::before {\n  background-color: #e9ecef;\n}\n\n.custom-control-label {\n  position: relative;\n  margin-bottom: 0;\n  vertical-align: top;\n}\n.custom-control-label::before {\n  position: absolute;\n  top: 0.25rem;\n  left: -1.5rem;\n  display: block;\n  width: 1rem;\n  height: 1rem;\n  pointer-events: none;\n  content: \"\";\n  background-color: #fff;\n  border: #adb5bd solid 1px;\n}\n.custom-control-label::after {\n  position: absolute;\n  top: 0.25rem;\n  left: -1.5rem;\n  display: block;\n  width: 1rem;\n  height: 1rem;\n  content: \"\";\n  background: 50%/50% 50% no-repeat;\n}\n\n.custom-checkbox .custom-control-label::before {\n  border-radius: 0.25rem;\n}\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3e%3c/svg%3e\");\n}\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before {\n  border-color: #007bff;\n  background-color: #007bff;\n}\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3e%3cpath stroke='%23fff' d='M0 2h4'/%3e%3c/svg%3e\");\n}\n.custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(0, 123, 255, 0.5);\n}\n.custom-checkbox .custom-control-input:disabled:indeterminate ~ .custom-control-label::before {\n  background-color: rgba(0, 123, 255, 0.5);\n}\n\n.custom-radio .custom-control-label::before {\n  border-radius: 50%;\n}\n.custom-radio .custom-control-input:checked ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\");\n}\n.custom-radio .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(0, 123, 255, 0.5);\n}\n\n.custom-switch {\n  padding-left: 2.25rem;\n}\n.custom-switch .custom-control-label::before {\n  left: -2.25rem;\n  width: 1.75rem;\n  pointer-events: all;\n  border-radius: 0.5rem;\n}\n.custom-switch .custom-control-label::after {\n  top: calc(0.25rem + 2px);\n  left: calc(-2.25rem + 2px);\n  width: calc(1rem - 4px);\n  height: calc(1rem - 4px);\n  background-color: #adb5bd;\n  border-radius: 0.5rem;\n  transition: transform 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .custom-switch .custom-control-label::after {\n    transition: none;\n  }\n}\n.custom-switch .custom-control-input:checked ~ .custom-control-label::after {\n  background-color: #fff;\n  transform: translateX(0.75rem);\n}\n.custom-switch .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(0, 123, 255, 0.5);\n}\n\n.custom-select {\n  display: inline-block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 1.75rem 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  vertical-align: middle;\n  background: #fff url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") right 0.75rem center/8px 10px no-repeat;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.custom-select:focus {\n  border-color: #80bdff;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.custom-select:focus::-ms-value {\n  color: #495057;\n  background-color: #fff;\n}\n.custom-select[multiple], .custom-select[size]:not([size=\"1\"]) {\n  height: auto;\n  padding-right: 0.75rem;\n  background-image: none;\n}\n.custom-select:disabled {\n  color: #6c757d;\n  background-color: #e9ecef;\n}\n.custom-select::-ms-expand {\n  display: none;\n}\n.custom-select:-moz-focusring {\n  color: transparent;\n  text-shadow: 0 0 0 #495057;\n}\n\n.custom-select-sm {\n  height: calc(1.5em + 0.5rem + 2px);\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  padding-left: 0.5rem;\n  font-size: 0.875rem;\n}\n\n.custom-select-lg {\n  height: calc(1.5em + 1rem + 2px);\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  font-size: 1.25rem;\n}\n\n.custom-file {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  margin-bottom: 0;\n}\n\n.custom-file-input {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  margin: 0;\n  overflow: hidden;\n  opacity: 0;\n}\n.custom-file-input:focus ~ .custom-file-label {\n  border-color: #80bdff;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.custom-file-input[disabled] ~ .custom-file-label, .custom-file-input:disabled ~ .custom-file-label {\n  background-color: #e9ecef;\n}\n.custom-file-input:lang(en) ~ .custom-file-label::after {\n  content: \"Browse\";\n}\n.custom-file-input ~ .custom-file-label[data-browse]::after {\n  content: attr(data-browse);\n}\n\n.custom-file-label {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  overflow: hidden;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n}\n.custom-file-label::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 3;\n  display: block;\n  height: calc(1.5em + 0.75rem);\n  padding: 0.375rem 0.75rem;\n  line-height: 1.5;\n  color: #495057;\n  content: \"Browse\";\n  background-color: #e9ecef;\n  border-left: inherit;\n  border-radius: 0 0.25rem 0.25rem 0;\n}\n\n.custom-range {\n  width: 100%;\n  height: 1.4rem;\n  padding: 0;\n  background-color: transparent;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.custom-range:focus {\n  outline: 0;\n}\n.custom-range:focus::-webkit-slider-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.custom-range:focus::-moz-range-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.custom-range:focus::-ms-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.custom-range::-moz-focus-outer {\n  border: 0;\n}\n.custom-range::-webkit-slider-thumb {\n  width: 1rem;\n  height: 1rem;\n  margin-top: -0.25rem;\n  background-color: #007bff;\n  border: 0;\n  border-radius: 1rem;\n  -webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  -webkit-appearance: none;\n          appearance: none;\n}\n@media (prefers-reduced-motion: reduce) {\n  .custom-range::-webkit-slider-thumb {\n    -webkit-transition: none;\n    transition: none;\n  }\n}\n.custom-range::-webkit-slider-thumb:active {\n  background-color: #b3d7ff;\n}\n.custom-range::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 0.5rem;\n  color: transparent;\n  cursor: pointer;\n  background-color: #dee2e6;\n  border-color: transparent;\n  border-radius: 1rem;\n}\n.custom-range::-moz-range-thumb {\n  width: 1rem;\n  height: 1rem;\n  background-color: #007bff;\n  border: 0;\n  border-radius: 1rem;\n  -moz-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  -moz-appearance: none;\n       appearance: none;\n}\n@media (prefers-reduced-motion: reduce) {\n  .custom-range::-moz-range-thumb {\n    -moz-transition: none;\n    transition: none;\n  }\n}\n.custom-range::-moz-range-thumb:active {\n  background-color: #b3d7ff;\n}\n.custom-range::-moz-range-track {\n  width: 100%;\n  height: 0.5rem;\n  color: transparent;\n  cursor: pointer;\n  background-color: #dee2e6;\n  border-color: transparent;\n  border-radius: 1rem;\n}\n.custom-range::-ms-thumb {\n  width: 1rem;\n  height: 1rem;\n  margin-top: 0;\n  margin-right: 0.2rem;\n  margin-left: 0.2rem;\n  background-color: #007bff;\n  border: 0;\n  border-radius: 1rem;\n  -ms-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  appearance: none;\n}\n@media (prefers-reduced-motion: reduce) {\n  .custom-range::-ms-thumb {\n    -ms-transition: none;\n    transition: none;\n  }\n}\n.custom-range::-ms-thumb:active {\n  background-color: #b3d7ff;\n}\n.custom-range::-ms-track {\n  width: 100%;\n  height: 0.5rem;\n  color: transparent;\n  cursor: pointer;\n  background-color: transparent;\n  border-color: transparent;\n  border-width: 0.5rem;\n}\n.custom-range::-ms-fill-lower {\n  background-color: #dee2e6;\n  border-radius: 1rem;\n}\n.custom-range::-ms-fill-upper {\n  margin-right: 15px;\n  background-color: #dee2e6;\n  border-radius: 1rem;\n}\n.custom-range:disabled::-webkit-slider-thumb {\n  background-color: #adb5bd;\n}\n.custom-range:disabled::-webkit-slider-runnable-track {\n  cursor: default;\n}\n.custom-range:disabled::-moz-range-thumb {\n  background-color: #adb5bd;\n}\n.custom-range:disabled::-moz-range-track {\n  cursor: default;\n}\n.custom-range:disabled::-ms-thumb {\n  background-color: #adb5bd;\n}\n\n.custom-control-label::before,\n.custom-file-label,\n.custom-select {\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .custom-control-label::before,\n.custom-file-label,\n.custom-select {\n    transition: none;\n  }\n}\n\n.nav {\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n\n.nav-link {\n  display: block;\n  padding: 0.5rem 1rem;\n}\n.nav-link:hover, .nav-link:focus {\n  text-decoration: none;\n}\n.nav-link.disabled {\n  color: #6c757d;\n  pointer-events: none;\n  cursor: default;\n}\n\n.nav-tabs {\n  border-bottom: 1px solid #dee2e6;\n}\n.nav-tabs .nav-link {\n  margin-bottom: -1px;\n  border: 1px solid transparent;\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {\n  border-color: #e9ecef #e9ecef #dee2e6;\n}\n.nav-tabs .nav-link.disabled {\n  color: #6c757d;\n  background-color: transparent;\n  border-color: transparent;\n}\n.nav-tabs .nav-link.active,\n.nav-tabs .nav-item.show .nav-link {\n  color: #495057;\n  background-color: #fff;\n  border-color: #dee2e6 #dee2e6 #fff;\n}\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.nav-pills .nav-link {\n  border-radius: 0.25rem;\n}\n.nav-pills .nav-link.active,\n.nav-pills .show > .nav-link {\n  color: #fff;\n  background-color: #007bff;\n}\n\n.nav-fill > .nav-link,\n.nav-fill .nav-item {\n  flex: 1 1 auto;\n  text-align: center;\n}\n\n.nav-justified > .nav-link,\n.nav-justified .nav-item {\n  flex-basis: 0;\n  flex-grow: 1;\n  text-align: center;\n}\n\n.tab-content > .tab-pane {\n  display: none;\n}\n.tab-content > .active {\n  display: block;\n}\n\n.navbar {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem 1rem;\n}\n.navbar .container,\n.navbar .container-fluid,\n.navbar .container-sm,\n.navbar .container-md,\n.navbar .container-lg,\n.navbar .container-xl {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n}\n.navbar-brand {\n  display: inline-block;\n  padding-top: 0.3125rem;\n  padding-bottom: 0.3125rem;\n  margin-right: 1rem;\n  font-size: 1.25rem;\n  line-height: inherit;\n  white-space: nowrap;\n}\n.navbar-brand:hover, .navbar-brand:focus {\n  text-decoration: none;\n}\n\n.navbar-nav {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n.navbar-nav .nav-link {\n  padding-right: 0;\n  padding-left: 0;\n}\n.navbar-nav .dropdown-menu {\n  position: static;\n  float: none;\n}\n\n.navbar-text {\n  display: inline-block;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n\n.navbar-collapse {\n  flex-basis: 100%;\n  flex-grow: 1;\n  align-items: center;\n}\n\n.navbar-toggler {\n  padding: 0.25rem 0.75rem;\n  font-size: 1.25rem;\n  line-height: 1;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n}\n.navbar-toggler:hover, .navbar-toggler:focus {\n  text-decoration: none;\n}\n\n.navbar-toggler-icon {\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  content: \"\";\n  background: 50%/100% 100% no-repeat;\n}\n\n.navbar-nav-scroll {\n  max-height: 75vh;\n  overflow-y: auto;\n}\n\n@media (max-width: 575.98px) {\n  .navbar-expand-sm > .container,\n.navbar-expand-sm > .container-fluid,\n.navbar-expand-sm > .container-sm,\n.navbar-expand-sm > .container-md,\n.navbar-expand-sm > .container-lg,\n.navbar-expand-sm > .container-xl {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n@media (min-width: 576px) {\n  .navbar-expand-sm {\n    flex-flow: row nowrap;\n    justify-content: flex-start;\n  }\n  .navbar-expand-sm .navbar-nav {\n    flex-direction: row;\n  }\n  .navbar-expand-sm .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-sm .navbar-nav .nav-link {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n  .navbar-expand-sm > .container,\n.navbar-expand-sm > .container-fluid,\n.navbar-expand-sm > .container-sm,\n.navbar-expand-sm > .container-md,\n.navbar-expand-sm > .container-lg,\n.navbar-expand-sm > .container-xl {\n    flex-wrap: nowrap;\n  }\n  .navbar-expand-sm .navbar-nav-scroll {\n    overflow: visible;\n  }\n  .navbar-expand-sm .navbar-collapse {\n    display: flex !important;\n    flex-basis: auto;\n  }\n  .navbar-expand-sm .navbar-toggler {\n    display: none;\n  }\n}\n@media (max-width: 767.98px) {\n  .navbar-expand-md > .container,\n.navbar-expand-md > .container-fluid,\n.navbar-expand-md > .container-sm,\n.navbar-expand-md > .container-md,\n.navbar-expand-md > .container-lg,\n.navbar-expand-md > .container-xl {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-expand-md {\n    flex-flow: row nowrap;\n    justify-content: flex-start;\n  }\n  .navbar-expand-md .navbar-nav {\n    flex-direction: row;\n  }\n  .navbar-expand-md .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-md .navbar-nav .nav-link {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n  .navbar-expand-md > .container,\n.navbar-expand-md > .container-fluid,\n.navbar-expand-md > .container-sm,\n.navbar-expand-md > .container-md,\n.navbar-expand-md > .container-lg,\n.navbar-expand-md > .container-xl {\n    flex-wrap: nowrap;\n  }\n  .navbar-expand-md .navbar-nav-scroll {\n    overflow: visible;\n  }\n  .navbar-expand-md .navbar-collapse {\n    display: flex !important;\n    flex-basis: auto;\n  }\n  .navbar-expand-md .navbar-toggler {\n    display: none;\n  }\n}\n@media (max-width: 991.98px) {\n  .navbar-expand-lg > .container,\n.navbar-expand-lg > .container-fluid,\n.navbar-expand-lg > .container-sm,\n.navbar-expand-lg > .container-md,\n.navbar-expand-lg > .container-lg,\n.navbar-expand-lg > .container-xl {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n@media (min-width: 992px) {\n  .navbar-expand-lg {\n    flex-flow: row nowrap;\n    justify-content: flex-start;\n  }\n  .navbar-expand-lg .navbar-nav {\n    flex-direction: row;\n  }\n  .navbar-expand-lg .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-lg .navbar-nav .nav-link {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n  .navbar-expand-lg > .container,\n.navbar-expand-lg > .container-fluid,\n.navbar-expand-lg > .container-sm,\n.navbar-expand-lg > .container-md,\n.navbar-expand-lg > .container-lg,\n.navbar-expand-lg > .container-xl {\n    flex-wrap: nowrap;\n  }\n  .navbar-expand-lg .navbar-nav-scroll {\n    overflow: visible;\n  }\n  .navbar-expand-lg .navbar-collapse {\n    display: flex !important;\n    flex-basis: auto;\n  }\n  .navbar-expand-lg .navbar-toggler {\n    display: none;\n  }\n}\n@media (max-width: 1199.98px) {\n  .navbar-expand-xl > .container,\n.navbar-expand-xl > .container-fluid,\n.navbar-expand-xl > .container-sm,\n.navbar-expand-xl > .container-md,\n.navbar-expand-xl > .container-lg,\n.navbar-expand-xl > .container-xl {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n@media (min-width: 1200px) {\n  .navbar-expand-xl {\n    flex-flow: row nowrap;\n    justify-content: flex-start;\n  }\n  .navbar-expand-xl .navbar-nav {\n    flex-direction: row;\n  }\n  .navbar-expand-xl .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-xl .navbar-nav .nav-link {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n  .navbar-expand-xl > .container,\n.navbar-expand-xl > .container-fluid,\n.navbar-expand-xl > .container-sm,\n.navbar-expand-xl > .container-md,\n.navbar-expand-xl > .container-lg,\n.navbar-expand-xl > .container-xl {\n    flex-wrap: nowrap;\n  }\n  .navbar-expand-xl .navbar-nav-scroll {\n    overflow: visible;\n  }\n  .navbar-expand-xl .navbar-collapse {\n    display: flex !important;\n    flex-basis: auto;\n  }\n  .navbar-expand-xl .navbar-toggler {\n    display: none;\n  }\n}\n.navbar-expand {\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n}\n.navbar-expand > .container,\n.navbar-expand > .container-fluid,\n.navbar-expand > .container-sm,\n.navbar-expand > .container-md,\n.navbar-expand > .container-lg,\n.navbar-expand > .container-xl {\n  padding-right: 0;\n  padding-left: 0;\n}\n.navbar-expand .navbar-nav {\n  flex-direction: row;\n}\n.navbar-expand .navbar-nav .dropdown-menu {\n  position: absolute;\n}\n.navbar-expand .navbar-nav .nav-link {\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n}\n.navbar-expand > .container,\n.navbar-expand > .container-fluid,\n.navbar-expand > .container-sm,\n.navbar-expand > .container-md,\n.navbar-expand > .container-lg,\n.navbar-expand > .container-xl {\n  flex-wrap: nowrap;\n}\n.navbar-expand .navbar-nav-scroll {\n  overflow: visible;\n}\n.navbar-expand .navbar-collapse {\n  display: flex !important;\n  flex-basis: auto;\n}\n.navbar-expand .navbar-toggler {\n  display: none;\n}\n\n.navbar-light .navbar-brand {\n  color: rgba(0, 0, 0, 0.9);\n}\n.navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus {\n  color: rgba(0, 0, 0, 0.9);\n}\n.navbar-light .navbar-nav .nav-link {\n  color: rgba(0, 0, 0, 0.5);\n}\n.navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {\n  color: rgba(0, 0, 0, 0.7);\n}\n.navbar-light .navbar-nav .nav-link.disabled {\n  color: rgba(0, 0, 0, 0.3);\n}\n.navbar-light .navbar-nav .show > .nav-link,\n.navbar-light .navbar-nav .active > .nav-link,\n.navbar-light .navbar-nav .nav-link.show,\n.navbar-light .navbar-nav .nav-link.active {\n  color: rgba(0, 0, 0, 0.9);\n}\n.navbar-light .navbar-toggler {\n  color: rgba(0, 0, 0, 0.5);\n  border-color: rgba(0, 0, 0, 0.1);\n}\n.navbar-light .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");\n}\n.navbar-light .navbar-text {\n  color: rgba(0, 0, 0, 0.5);\n}\n.navbar-light .navbar-text a {\n  color: rgba(0, 0, 0, 0.9);\n}\n.navbar-light .navbar-text a:hover, .navbar-light .navbar-text a:focus {\n  color: rgba(0, 0, 0, 0.9);\n}\n\n.navbar-dark .navbar-brand {\n  color: #fff;\n}\n.navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus {\n  color: #fff;\n}\n.navbar-dark .navbar-nav .nav-link {\n  color: rgba(255, 255, 255, 0.5);\n}\n.navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {\n  color: rgba(255, 255, 255, 0.75);\n}\n.navbar-dark .navbar-nav .nav-link.disabled {\n  color: rgba(255, 255, 255, 0.25);\n}\n.navbar-dark .navbar-nav .show > .nav-link,\n.navbar-dark .navbar-nav .active > .nav-link,\n.navbar-dark .navbar-nav .nav-link.show,\n.navbar-dark .navbar-nav .nav-link.active {\n  color: #fff;\n}\n.navbar-dark .navbar-toggler {\n  color: rgba(255, 255, 255, 0.5);\n  border-color: rgba(255, 255, 255, 0.1);\n}\n.navbar-dark .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");\n}\n.navbar-dark .navbar-text {\n  color: rgba(255, 255, 255, 0.5);\n}\n.navbar-dark .navbar-text a {\n  color: #fff;\n}\n.navbar-dark .navbar-text a:hover, .navbar-dark .navbar-text a:focus {\n  color: #fff;\n}\n\n.card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem;\n}\n.card > hr {\n  margin-right: 0;\n  margin-left: 0;\n}\n.card > .list-group {\n  border-top: inherit;\n  border-bottom: inherit;\n}\n.card > .list-group:first-child {\n  border-top-width: 0;\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px);\n}\n.card > .list-group:last-child {\n  border-bottom-width: 0;\n  border-bottom-right-radius: calc(0.25rem - 1px);\n  border-bottom-left-radius: calc(0.25rem - 1px);\n}\n.card > .card-header + .list-group,\n.card > .list-group + .card-footer {\n  border-top: 0;\n}\n\n.card-body {\n  flex: 1 1 auto;\n  min-height: 1px;\n  padding: 1.25rem;\n}\n\n.card-title {\n  margin-bottom: 0.75rem;\n}\n\n.card-subtitle {\n  margin-top: -0.375rem;\n  margin-bottom: 0;\n}\n\n.card-text:last-child {\n  margin-bottom: 0;\n}\n\n.card-link:hover {\n  text-decoration: none;\n}\n.card-link + .card-link {\n  margin-left: 1.25rem;\n}\n\n.card-header {\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 0;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n}\n.card-header:first-child {\n  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;\n}\n\n.card-footer {\n  padding: 0.75rem 1.25rem;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-top: 1px solid rgba(0, 0, 0, 0.125);\n}\n.card-footer:last-child {\n  border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);\n}\n\n.card-header-tabs {\n  margin-right: -0.625rem;\n  margin-bottom: -0.75rem;\n  margin-left: -0.625rem;\n  border-bottom: 0;\n}\n\n.card-header-pills {\n  margin-right: -0.625rem;\n  margin-left: -0.625rem;\n}\n\n.card-img-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 1.25rem;\n  border-radius: calc(0.25rem - 1px);\n}\n\n.card-img,\n.card-img-top,\n.card-img-bottom {\n  flex-shrink: 0;\n  width: 100%;\n}\n\n.card-img,\n.card-img-top {\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px);\n}\n\n.card-img,\n.card-img-bottom {\n  border-bottom-right-radius: calc(0.25rem - 1px);\n  border-bottom-left-radius: calc(0.25rem - 1px);\n}\n\n.card-deck .card {\n  margin-bottom: 15px;\n}\n@media (min-width: 576px) {\n  .card-deck {\n    display: flex;\n    flex-flow: row wrap;\n    margin-right: -15px;\n    margin-left: -15px;\n  }\n  .card-deck .card {\n    flex: 1 0 0%;\n    margin-right: 15px;\n    margin-bottom: 0;\n    margin-left: 15px;\n  }\n}\n\n.card-group > .card {\n  margin-bottom: 15px;\n}\n@media (min-width: 576px) {\n  .card-group {\n    display: flex;\n    flex-flow: row wrap;\n  }\n  .card-group > .card {\n    flex: 1 0 0%;\n    margin-bottom: 0;\n  }\n  .card-group > .card + .card {\n    margin-left: 0;\n    border-left: 0;\n  }\n  .card-group > .card:not(:last-child) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n  .card-group > .card:not(:last-child) .card-img-top,\n.card-group > .card:not(:last-child) .card-header {\n    border-top-right-radius: 0;\n  }\n  .card-group > .card:not(:last-child) .card-img-bottom,\n.card-group > .card:not(:last-child) .card-footer {\n    border-bottom-right-radius: 0;\n  }\n  .card-group > .card:not(:first-child) {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n  .card-group > .card:not(:first-child) .card-img-top,\n.card-group > .card:not(:first-child) .card-header {\n    border-top-left-radius: 0;\n  }\n  .card-group > .card:not(:first-child) .card-img-bottom,\n.card-group > .card:not(:first-child) .card-footer {\n    border-bottom-left-radius: 0;\n  }\n}\n\n.card-columns .card {\n  margin-bottom: 0.75rem;\n}\n@media (min-width: 576px) {\n  .card-columns {\n    -moz-column-count: 3;\n         column-count: 3;\n    -moz-column-gap: 1.25rem;\n         column-gap: 1.25rem;\n    orphans: 1;\n    widows: 1;\n  }\n  .card-columns .card {\n    display: inline-block;\n    width: 100%;\n  }\n}\n\n.accordion {\n  overflow-anchor: none;\n}\n.accordion > .card {\n  overflow: hidden;\n}\n.accordion > .card:not(:last-of-type) {\n  border-bottom: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.accordion > .card:not(:first-of-type) {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.accordion > .card > .card-header {\n  border-radius: 0;\n  margin-bottom: -1px;\n}\n\n.breadcrumb {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0.75rem 1rem;\n  margin-bottom: 1rem;\n  list-style: none;\n  background-color: #e9ecef;\n  border-radius: 0.25rem;\n}\n\n.breadcrumb-item + .breadcrumb-item {\n  padding-left: 0.5rem;\n}\n.breadcrumb-item + .breadcrumb-item::before {\n  float: left;\n  padding-right: 0.5rem;\n  color: #6c757d;\n  content: \"/\";\n}\n.breadcrumb-item + .breadcrumb-item:hover::before {\n  text-decoration: underline;\n}\n.breadcrumb-item + .breadcrumb-item:hover::before {\n  text-decoration: none;\n}\n.breadcrumb-item.active {\n  color: #6c757d;\n}\n\n.pagination {\n  display: flex;\n  padding-left: 0;\n  list-style: none;\n  border-radius: 0.25rem;\n}\n\n.page-link {\n  position: relative;\n  display: block;\n  padding: 0.5rem 0.75rem;\n  margin-left: -1px;\n  line-height: 1.25;\n  color: #007bff;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n}\n.page-link:hover {\n  z-index: 2;\n  color: #0056b3;\n  text-decoration: none;\n  background-color: #e9ecef;\n  border-color: #dee2e6;\n}\n.page-link:focus {\n  z-index: 3;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.page-item:first-child .page-link {\n  margin-left: 0;\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n.page-item:last-child .page-link {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n.page-item.active .page-link {\n  z-index: 3;\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n.page-item.disabled .page-link {\n  color: #6c757d;\n  pointer-events: none;\n  cursor: auto;\n  background-color: #fff;\n  border-color: #dee2e6;\n}\n\n.pagination-lg .page-link {\n  padding: 0.75rem 1.5rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n}\n.pagination-lg .page-item:first-child .page-link {\n  border-top-left-radius: 0.3rem;\n  border-bottom-left-radius: 0.3rem;\n}\n.pagination-lg .page-item:last-child .page-link {\n  border-top-right-radius: 0.3rem;\n  border-bottom-right-radius: 0.3rem;\n}\n\n.pagination-sm .page-link {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n.pagination-sm .page-item:first-child .page-link {\n  border-top-left-radius: 0.2rem;\n  border-bottom-left-radius: 0.2rem;\n}\n.pagination-sm .page-item:last-child .page-link {\n  border-top-right-radius: 0.2rem;\n  border-bottom-right-radius: 0.2rem;\n}\n\n.badge {\n  display: inline-block;\n  padding: 0.25em 0.4em;\n  font-size: 75%;\n  font-weight: 700;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .badge {\n    transition: none;\n  }\n}\na.badge:hover, a.badge:focus {\n  text-decoration: none;\n}\n\n.badge:empty {\n  display: none;\n}\n\n.btn .badge {\n  position: relative;\n  top: -1px;\n}\n\n.badge-pill {\n  padding-right: 0.6em;\n  padding-left: 0.6em;\n  border-radius: 10rem;\n}\n\n.badge-primary {\n  color: #fff;\n  background-color: #007bff;\n}\na.badge-primary:hover, a.badge-primary:focus {\n  color: #fff;\n  background-color: #0062cc;\n}\na.badge-primary:focus, a.badge-primary.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n\n.badge-secondary {\n  color: #fff;\n  background-color: #6c757d;\n}\na.badge-secondary:hover, a.badge-secondary:focus {\n  color: #fff;\n  background-color: #545b62;\n}\na.badge-secondary:focus, a.badge-secondary.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n}\n\n.badge-success {\n  color: #fff;\n  background-color: #28a745;\n}\na.badge-success:hover, a.badge-success:focus {\n  color: #fff;\n  background-color: #1e7e34;\n}\na.badge-success:focus, a.badge-success.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n\n.badge-info {\n  color: #fff;\n  background-color: #17a2b8;\n}\na.badge-info:hover, a.badge-info:focus {\n  color: #fff;\n  background-color: #117a8b;\n}\na.badge-info:focus, a.badge-info.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n\n.badge-warning {\n  color: #212529;\n  background-color: #ffc107;\n}\na.badge-warning:hover, a.badge-warning:focus {\n  color: #212529;\n  background-color: #d39e00;\n}\na.badge-warning:focus, a.badge-warning.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n\n.badge-danger {\n  color: #fff;\n  background-color: #dc3545;\n}\na.badge-danger:hover, a.badge-danger:focus {\n  color: #fff;\n  background-color: #bd2130;\n}\na.badge-danger:focus, a.badge-danger.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n}\n\n.badge-light {\n  color: #212529;\n  background-color: #f8f9fa;\n}\na.badge-light:hover, a.badge-light:focus {\n  color: #212529;\n  background-color: #dae0e5;\n}\na.badge-light:focus, a.badge-light.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n\n.badge-dark {\n  color: #fff;\n  background-color: #343a40;\n}\na.badge-dark:hover, a.badge-dark:focus {\n  color: #fff;\n  background-color: #1d2124;\n}\na.badge-dark:focus, a.badge-dark.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n\n.jumbotron {\n  padding: 2rem 1rem;\n  margin-bottom: 2rem;\n  background-color: #e9ecef;\n  border-radius: 0.3rem;\n}\n@media (min-width: 576px) {\n  .jumbotron {\n    padding: 4rem 2rem;\n  }\n}\n\n.jumbotron-fluid {\n  padding-right: 0;\n  padding-left: 0;\n  border-radius: 0;\n}\n\n.alert {\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n}\n\n.alert-heading {\n  color: inherit;\n}\n\n.alert-link {\n  font-weight: 700;\n}\n\n.alert-dismissible {\n  padding-right: 4rem;\n}\n.alert-dismissible .close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  padding: 0.75rem 1.25rem;\n  color: inherit;\n}\n\n.alert-primary {\n  color: #004085;\n  background-color: #cce5ff;\n  border-color: #b8daff;\n}\n.alert-primary hr {\n  border-top-color: #9fcdff;\n}\n.alert-primary .alert-link {\n  color: #002752;\n}\n\n.alert-secondary {\n  color: #383d41;\n  background-color: #e2e3e5;\n  border-color: #d6d8db;\n}\n.alert-secondary hr {\n  border-top-color: #c8cbcf;\n}\n.alert-secondary .alert-link {\n  color: #202326;\n}\n\n.alert-success {\n  color: #155724;\n  background-color: #d4edda;\n  border-color: #c3e6cb;\n}\n.alert-success hr {\n  border-top-color: #b1dfbb;\n}\n.alert-success .alert-link {\n  color: #0b2e13;\n}\n\n.alert-info {\n  color: #0c5460;\n  background-color: #d1ecf1;\n  border-color: #bee5eb;\n}\n.alert-info hr {\n  border-top-color: #abdde5;\n}\n.alert-info .alert-link {\n  color: #062c33;\n}\n\n.alert-warning {\n  color: #856404;\n  background-color: #fff3cd;\n  border-color: #ffeeba;\n}\n.alert-warning hr {\n  border-top-color: #ffe8a1;\n}\n.alert-warning .alert-link {\n  color: #533f03;\n}\n\n.alert-danger {\n  color: #721c24;\n  background-color: #f8d7da;\n  border-color: #f5c6cb;\n}\n.alert-danger hr {\n  border-top-color: #f1b0b7;\n}\n.alert-danger .alert-link {\n  color: #491217;\n}\n\n.alert-light {\n  color: #818182;\n  background-color: #fefefe;\n  border-color: #fdfdfe;\n}\n.alert-light hr {\n  border-top-color: #ececf6;\n}\n.alert-light .alert-link {\n  color: #686868;\n}\n\n.alert-dark {\n  color: #1b1e21;\n  background-color: #d6d8d9;\n  border-color: #c6c8ca;\n}\n.alert-dark hr {\n  border-top-color: #b9bbbe;\n}\n.alert-dark .alert-link {\n  color: #040505;\n}\n\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n.progress {\n  display: flex;\n  height: 1rem;\n  overflow: hidden;\n  line-height: 0;\n  font-size: 0.75rem;\n  background-color: #e9ecef;\n  border-radius: 0.25rem;\n}\n\n.progress-bar {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #007bff;\n  transition: width 0.6s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n  .progress-bar {\n    transition: none;\n  }\n}\n\n.progress-bar-striped {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 1rem 1rem;\n}\n\n.progress-bar-animated {\n  -webkit-animation: 1s linear infinite progress-bar-stripes;\n          animation: 1s linear infinite progress-bar-stripes;\n}\n@media (prefers-reduced-motion: reduce) {\n  .progress-bar-animated {\n    -webkit-animation: none;\n            animation: none;\n  }\n}\n\n.media {\n  display: flex;\n  align-items: flex-start;\n}\n\n.media-body {\n  flex: 1;\n}\n\n.list-group {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  border-radius: 0.25rem;\n}\n\n.list-group-item-action {\n  width: 100%;\n  color: #495057;\n  text-align: inherit;\n}\n.list-group-item-action:hover, .list-group-item-action:focus {\n  z-index: 1;\n  color: #495057;\n  text-decoration: none;\n  background-color: #f8f9fa;\n}\n.list-group-item-action:active {\n  color: #212529;\n  background-color: #e9ecef;\n}\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 0.75rem 1.25rem;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n}\n.list-group-item:first-child {\n  border-top-left-radius: inherit;\n  border-top-right-radius: inherit;\n}\n.list-group-item:last-child {\n  border-bottom-right-radius: inherit;\n  border-bottom-left-radius: inherit;\n}\n.list-group-item.disabled, .list-group-item:disabled {\n  color: #6c757d;\n  pointer-events: none;\n  background-color: #fff;\n}\n.list-group-item.active {\n  z-index: 2;\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n.list-group-item + .list-group-item {\n  border-top-width: 0;\n}\n.list-group-item + .list-group-item.active {\n  margin-top: -1px;\n  border-top-width: 1px;\n}\n\n.list-group-horizontal {\n  flex-direction: row;\n}\n.list-group-horizontal > .list-group-item:first-child {\n  border-bottom-left-radius: 0.25rem;\n  border-top-right-radius: 0;\n}\n.list-group-horizontal > .list-group-item:last-child {\n  border-top-right-radius: 0.25rem;\n  border-bottom-left-radius: 0;\n}\n.list-group-horizontal > .list-group-item.active {\n  margin-top: 0;\n}\n.list-group-horizontal > .list-group-item + .list-group-item {\n  border-top-width: 1px;\n  border-left-width: 0;\n}\n.list-group-horizontal > .list-group-item + .list-group-item.active {\n  margin-left: -1px;\n  border-left-width: 1px;\n}\n\n@media (min-width: 576px) {\n  .list-group-horizontal-sm {\n    flex-direction: row;\n  }\n  .list-group-horizontal-sm > .list-group-item:first-child {\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0;\n  }\n  .list-group-horizontal-sm > .list-group-item:last-child {\n    border-top-right-radius: 0.25rem;\n    border-bottom-left-radius: 0;\n  }\n  .list-group-horizontal-sm > .list-group-item.active {\n    margin-top: 0;\n  }\n  .list-group-horizontal-sm > .list-group-item + .list-group-item {\n    border-top-width: 1px;\n    border-left-width: 0;\n  }\n  .list-group-horizontal-sm > .list-group-item + .list-group-item.active {\n    margin-left: -1px;\n    border-left-width: 1px;\n  }\n}\n@media (min-width: 768px) {\n  .list-group-horizontal-md {\n    flex-direction: row;\n  }\n  .list-group-horizontal-md > .list-group-item:first-child {\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0;\n  }\n  .list-group-horizontal-md > .list-group-item:last-child {\n    border-top-right-radius: 0.25rem;\n    border-bottom-left-radius: 0;\n  }\n  .list-group-horizontal-md > .list-group-item.active {\n    margin-top: 0;\n  }\n  .list-group-horizontal-md > .list-group-item + .list-group-item {\n    border-top-width: 1px;\n    border-left-width: 0;\n  }\n  .list-group-horizontal-md > .list-group-item + .list-group-item.active {\n    margin-left: -1px;\n    border-left-width: 1px;\n  }\n}\n@media (min-width: 992px) {\n  .list-group-horizontal-lg {\n    flex-direction: row;\n  }\n  .list-group-horizontal-lg > .list-group-item:first-child {\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0;\n  }\n  .list-group-horizontal-lg > .list-group-item:last-child {\n    border-top-right-radius: 0.25rem;\n    border-bottom-left-radius: 0;\n  }\n  .list-group-horizontal-lg > .list-group-item.active {\n    margin-top: 0;\n  }\n  .list-group-horizontal-lg > .list-group-item + .list-group-item {\n    border-top-width: 1px;\n    border-left-width: 0;\n  }\n  .list-group-horizontal-lg > .list-group-item + .list-group-item.active {\n    margin-left: -1px;\n    border-left-width: 1px;\n  }\n}\n@media (min-width: 1200px) {\n  .list-group-horizontal-xl {\n    flex-direction: row;\n  }\n  .list-group-horizontal-xl > .list-group-item:first-child {\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0;\n  }\n  .list-group-horizontal-xl > .list-group-item:last-child {\n    border-top-right-radius: 0.25rem;\n    border-bottom-left-radius: 0;\n  }\n  .list-group-horizontal-xl > .list-group-item.active {\n    margin-top: 0;\n  }\n  .list-group-horizontal-xl > .list-group-item + .list-group-item {\n    border-top-width: 1px;\n    border-left-width: 0;\n  }\n  .list-group-horizontal-xl > .list-group-item + .list-group-item.active {\n    margin-left: -1px;\n    border-left-width: 1px;\n  }\n}\n.list-group-flush {\n  border-radius: 0;\n}\n.list-group-flush > .list-group-item {\n  border-width: 0 0 1px;\n}\n.list-group-flush > .list-group-item:last-child {\n  border-bottom-width: 0;\n}\n\n.list-group-item-primary {\n  color: #004085;\n  background-color: #b8daff;\n}\n.list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus {\n  color: #004085;\n  background-color: #9fcdff;\n}\n.list-group-item-primary.list-group-item-action.active {\n  color: #fff;\n  background-color: #004085;\n  border-color: #004085;\n}\n\n.list-group-item-secondary {\n  color: #383d41;\n  background-color: #d6d8db;\n}\n.list-group-item-secondary.list-group-item-action:hover, .list-group-item-secondary.list-group-item-action:focus {\n  color: #383d41;\n  background-color: #c8cbcf;\n}\n.list-group-item-secondary.list-group-item-action.active {\n  color: #fff;\n  background-color: #383d41;\n  border-color: #383d41;\n}\n\n.list-group-item-success {\n  color: #155724;\n  background-color: #c3e6cb;\n}\n.list-group-item-success.list-group-item-action:hover, .list-group-item-success.list-group-item-action:focus {\n  color: #155724;\n  background-color: #b1dfbb;\n}\n.list-group-item-success.list-group-item-action.active {\n  color: #fff;\n  background-color: #155724;\n  border-color: #155724;\n}\n\n.list-group-item-info {\n  color: #0c5460;\n  background-color: #bee5eb;\n}\n.list-group-item-info.list-group-item-action:hover, .list-group-item-info.list-group-item-action:focus {\n  color: #0c5460;\n  background-color: #abdde5;\n}\n.list-group-item-info.list-group-item-action.active {\n  color: #fff;\n  background-color: #0c5460;\n  border-color: #0c5460;\n}\n\n.list-group-item-warning {\n  color: #856404;\n  background-color: #ffeeba;\n}\n.list-group-item-warning.list-group-item-action:hover, .list-group-item-warning.list-group-item-action:focus {\n  color: #856404;\n  background-color: #ffe8a1;\n}\n.list-group-item-warning.list-group-item-action.active {\n  color: #fff;\n  background-color: #856404;\n  border-color: #856404;\n}\n\n.list-group-item-danger {\n  color: #721c24;\n  background-color: #f5c6cb;\n}\n.list-group-item-danger.list-group-item-action:hover, .list-group-item-danger.list-group-item-action:focus {\n  color: #721c24;\n  background-color: #f1b0b7;\n}\n.list-group-item-danger.list-group-item-action.active {\n  color: #fff;\n  background-color: #721c24;\n  border-color: #721c24;\n}\n\n.list-group-item-light {\n  color: #818182;\n  background-color: #fdfdfe;\n}\n.list-group-item-light.list-group-item-action:hover, .list-group-item-light.list-group-item-action:focus {\n  color: #818182;\n  background-color: #ececf6;\n}\n.list-group-item-light.list-group-item-action.active {\n  color: #fff;\n  background-color: #818182;\n  border-color: #818182;\n}\n\n.list-group-item-dark {\n  color: #1b1e21;\n  background-color: #c6c8ca;\n}\n.list-group-item-dark.list-group-item-action:hover, .list-group-item-dark.list-group-item-action:focus {\n  color: #1b1e21;\n  background-color: #b9bbbe;\n}\n.list-group-item-dark.list-group-item-action.active {\n  color: #fff;\n  background-color: #1b1e21;\n  border-color: #1b1e21;\n}\n\n.close {\n  float: right;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: 0.5;\n}\n.close:hover {\n  color: #000;\n  text-decoration: none;\n}\n.close:not(:disabled):not(.disabled):hover, .close:not(:disabled):not(.disabled):focus {\n  opacity: 0.75;\n}\n\nbutton.close {\n  padding: 0;\n  background-color: transparent;\n  border: 0;\n}\n\na.close.disabled {\n  pointer-events: none;\n}\n\n.toast {\n  flex-basis: 350px;\n  max-width: 350px;\n  font-size: 0.875rem;\n  background-color: rgba(255, 255, 255, 0.85);\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);\n  opacity: 0;\n  border-radius: 0.25rem;\n}\n.toast:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n.toast.showing {\n  opacity: 1;\n}\n.toast.show {\n  display: block;\n  opacity: 1;\n}\n.toast.hide {\n  display: none;\n}\n\n.toast-header {\n  display: flex;\n  align-items: center;\n  padding: 0.25rem 0.75rem;\n  color: #6c757d;\n  background-color: rgba(255, 255, 255, 0.85);\n  background-clip: padding-box;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px);\n}\n\n.toast-body {\n  padding: 0.75rem;\n}\n\n.modal-open {\n  overflow: hidden;\n}\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  outline: 0;\n}\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 0.5rem;\n  pointer-events: none;\n}\n.modal.fade .modal-dialog {\n  transition: transform 0.3s ease-out;\n  transform: translate(0, -50px);\n}\n@media (prefers-reduced-motion: reduce) {\n  .modal.fade .modal-dialog {\n    transition: none;\n  }\n}\n.modal.show .modal-dialog {\n  transform: none;\n}\n.modal.modal-static .modal-dialog {\n  transform: scale(1.02);\n}\n\n.modal-dialog-scrollable {\n  display: flex;\n  max-height: calc(100% - 1rem);\n}\n.modal-dialog-scrollable .modal-content {\n  max-height: calc(100vh - 1rem);\n  overflow: hidden;\n}\n.modal-dialog-scrollable .modal-header,\n.modal-dialog-scrollable .modal-footer {\n  flex-shrink: 0;\n}\n.modal-dialog-scrollable .modal-body {\n  overflow-y: auto;\n}\n\n.modal-dialog-centered {\n  display: flex;\n  align-items: center;\n  min-height: calc(100% - 1rem);\n}\n.modal-dialog-centered::before {\n  display: block;\n  height: calc(100vh - 1rem);\n  height: -webkit-min-content;\n  height: -moz-min-content;\n  height: min-content;\n  content: \"\";\n}\n.modal-dialog-centered.modal-dialog-scrollable {\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n}\n.modal-dialog-centered.modal-dialog-scrollable .modal-content {\n  max-height: none;\n}\n.modal-dialog-centered.modal-dialog-scrollable::before {\n  content: none;\n}\n\n.modal-content {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  pointer-events: auto;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n  outline: 0;\n}\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1040;\n  width: 100vw;\n  height: 100vh;\n  background-color: #000;\n}\n.modal-backdrop.fade {\n  opacity: 0;\n}\n.modal-backdrop.show {\n  opacity: 0.5;\n}\n\n.modal-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 1rem 1rem;\n  border-bottom: 1px solid #dee2e6;\n  border-top-left-radius: calc(0.3rem - 1px);\n  border-top-right-radius: calc(0.3rem - 1px);\n}\n.modal-header .close {\n  padding: 1rem 1rem;\n  margin: -1rem -1rem -1rem auto;\n}\n\n.modal-title {\n  margin-bottom: 0;\n  line-height: 1.5;\n}\n\n.modal-body {\n  position: relative;\n  flex: 1 1 auto;\n  padding: 1rem;\n}\n\n.modal-footer {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 0.75rem;\n  border-top: 1px solid #dee2e6;\n  border-bottom-right-radius: calc(0.3rem - 1px);\n  border-bottom-left-radius: calc(0.3rem - 1px);\n}\n.modal-footer > * {\n  margin: 0.25rem;\n}\n\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n\n@media (min-width: 576px) {\n  .modal-dialog {\n    max-width: 500px;\n    margin: 1.75rem auto;\n  }\n\n  .modal-dialog-scrollable {\n    max-height: calc(100% - 3.5rem);\n  }\n  .modal-dialog-scrollable .modal-content {\n    max-height: calc(100vh - 3.5rem);\n  }\n\n  .modal-dialog-centered {\n    min-height: calc(100% - 3.5rem);\n  }\n  .modal-dialog-centered::before {\n    height: calc(100vh - 3.5rem);\n    height: -webkit-min-content;\n    height: -moz-min-content;\n    height: min-content;\n  }\n\n  .modal-sm {\n    max-width: 300px;\n  }\n}\n@media (min-width: 992px) {\n  .modal-lg,\n.modal-xl {\n    max-width: 800px;\n  }\n}\n@media (min-width: 1200px) {\n  .modal-xl {\n    max-width: 1140px;\n  }\n}\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  opacity: 0;\n}\n.tooltip.show {\n  opacity: 0.9;\n}\n.tooltip .arrow {\n  position: absolute;\n  display: block;\n  width: 0.8rem;\n  height: 0.4rem;\n}\n.tooltip .arrow::before {\n  position: absolute;\n  content: \"\";\n  border-color: transparent;\n  border-style: solid;\n}\n\n.bs-tooltip-top, .bs-tooltip-auto[x-placement^=top] {\n  padding: 0.4rem 0;\n}\n.bs-tooltip-top .arrow, .bs-tooltip-auto[x-placement^=top] .arrow {\n  bottom: 0;\n}\n.bs-tooltip-top .arrow::before, .bs-tooltip-auto[x-placement^=top] .arrow::before {\n  top: 0;\n  border-width: 0.4rem 0.4rem 0;\n  border-top-color: #000;\n}\n\n.bs-tooltip-right, .bs-tooltip-auto[x-placement^=right] {\n  padding: 0 0.4rem;\n}\n.bs-tooltip-right .arrow, .bs-tooltip-auto[x-placement^=right] .arrow {\n  left: 0;\n  width: 0.4rem;\n  height: 0.8rem;\n}\n.bs-tooltip-right .arrow::before, .bs-tooltip-auto[x-placement^=right] .arrow::before {\n  right: 0;\n  border-width: 0.4rem 0.4rem 0.4rem 0;\n  border-right-color: #000;\n}\n\n.bs-tooltip-bottom, .bs-tooltip-auto[x-placement^=bottom] {\n  padding: 0.4rem 0;\n}\n.bs-tooltip-bottom .arrow, .bs-tooltip-auto[x-placement^=bottom] .arrow {\n  top: 0;\n}\n.bs-tooltip-bottom .arrow::before, .bs-tooltip-auto[x-placement^=bottom] .arrow::before {\n  bottom: 0;\n  border-width: 0 0.4rem 0.4rem;\n  border-bottom-color: #000;\n}\n\n.bs-tooltip-left, .bs-tooltip-auto[x-placement^=left] {\n  padding: 0 0.4rem;\n}\n.bs-tooltip-left .arrow, .bs-tooltip-auto[x-placement^=left] .arrow {\n  right: 0;\n  width: 0.4rem;\n  height: 0.8rem;\n}\n.bs-tooltip-left .arrow::before, .bs-tooltip-auto[x-placement^=left] .arrow::before {\n  left: 0;\n  border-width: 0.4rem 0 0.4rem 0.4rem;\n  border-left-color: #000;\n}\n\n.tooltip-inner {\n  max-width: 200px;\n  padding: 0.25rem 0.5rem;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem;\n}\n\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: block;\n  max-width: 276px;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n}\n.popover .arrow {\n  position: absolute;\n  display: block;\n  width: 1rem;\n  height: 0.5rem;\n  margin: 0 0.3rem;\n}\n.popover .arrow::before, .popover .arrow::after {\n  position: absolute;\n  display: block;\n  content: \"\";\n  border-color: transparent;\n  border-style: solid;\n}\n\n.bs-popover-top, .bs-popover-auto[x-placement^=top] {\n  margin-bottom: 0.5rem;\n}\n.bs-popover-top > .arrow, .bs-popover-auto[x-placement^=top] > .arrow {\n  bottom: calc(-0.5rem - 1px);\n}\n.bs-popover-top > .arrow::before, .bs-popover-auto[x-placement^=top] > .arrow::before {\n  bottom: 0;\n  border-width: 0.5rem 0.5rem 0;\n  border-top-color: rgba(0, 0, 0, 0.25);\n}\n.bs-popover-top > .arrow::after, .bs-popover-auto[x-placement^=top] > .arrow::after {\n  bottom: 1px;\n  border-width: 0.5rem 0.5rem 0;\n  border-top-color: #fff;\n}\n\n.bs-popover-right, .bs-popover-auto[x-placement^=right] {\n  margin-left: 0.5rem;\n}\n.bs-popover-right > .arrow, .bs-popover-auto[x-placement^=right] > .arrow {\n  left: calc(-0.5rem - 1px);\n  width: 0.5rem;\n  height: 1rem;\n  margin: 0.3rem 0;\n}\n.bs-popover-right > .arrow::before, .bs-popover-auto[x-placement^=right] > .arrow::before {\n  left: 0;\n  border-width: 0.5rem 0.5rem 0.5rem 0;\n  border-right-color: rgba(0, 0, 0, 0.25);\n}\n.bs-popover-right > .arrow::after, .bs-popover-auto[x-placement^=right] > .arrow::after {\n  left: 1px;\n  border-width: 0.5rem 0.5rem 0.5rem 0;\n  border-right-color: #fff;\n}\n\n.bs-popover-bottom, .bs-popover-auto[x-placement^=bottom] {\n  margin-top: 0.5rem;\n}\n.bs-popover-bottom > .arrow, .bs-popover-auto[x-placement^=bottom] > .arrow {\n  top: calc(-0.5rem - 1px);\n}\n.bs-popover-bottom > .arrow::before, .bs-popover-auto[x-placement^=bottom] > .arrow::before {\n  top: 0;\n  border-width: 0 0.5rem 0.5rem 0.5rem;\n  border-bottom-color: rgba(0, 0, 0, 0.25);\n}\n.bs-popover-bottom > .arrow::after, .bs-popover-auto[x-placement^=bottom] > .arrow::after {\n  top: 1px;\n  border-width: 0 0.5rem 0.5rem 0.5rem;\n  border-bottom-color: #fff;\n}\n.bs-popover-bottom .popover-header::before, .bs-popover-auto[x-placement^=bottom] .popover-header::before {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  display: block;\n  width: 1rem;\n  margin-left: -0.5rem;\n  content: \"\";\n  border-bottom: 1px solid #f7f7f7;\n}\n\n.bs-popover-left, .bs-popover-auto[x-placement^=left] {\n  margin-right: 0.5rem;\n}\n.bs-popover-left > .arrow, .bs-popover-auto[x-placement^=left] > .arrow {\n  right: calc(-0.5rem - 1px);\n  width: 0.5rem;\n  height: 1rem;\n  margin: 0.3rem 0;\n}\n.bs-popover-left > .arrow::before, .bs-popover-auto[x-placement^=left] > .arrow::before {\n  right: 0;\n  border-width: 0.5rem 0 0.5rem 0.5rem;\n  border-left-color: rgba(0, 0, 0, 0.25);\n}\n.bs-popover-left > .arrow::after, .bs-popover-auto[x-placement^=left] > .arrow::after {\n  right: 1px;\n  border-width: 0.5rem 0 0.5rem 0.5rem;\n  border-left-color: #fff;\n}\n\n.popover-header {\n  padding: 0.5rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-top-left-radius: calc(0.3rem - 1px);\n  border-top-right-radius: calc(0.3rem - 1px);\n}\n.popover-header:empty {\n  display: none;\n}\n\n.popover-body {\n  padding: 0.5rem 0.75rem;\n  color: #212529;\n}\n\n.carousel {\n  position: relative;\n}\n\n.carousel.pointer-event {\n  touch-action: pan-y;\n}\n\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.carousel-inner::after {\n  display: block;\n  clear: both;\n  content: \"\";\n}\n\n.carousel-item {\n  position: relative;\n  display: none;\n  float: left;\n  width: 100%;\n  margin-right: -100%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transition: transform 0.6s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .carousel-item {\n    transition: none;\n  }\n}\n\n.carousel-item.active,\n.carousel-item-next,\n.carousel-item-prev {\n  display: block;\n}\n\n.carousel-item-next:not(.carousel-item-left),\n.active.carousel-item-right {\n  transform: translateX(100%);\n}\n\n.carousel-item-prev:not(.carousel-item-right),\n.active.carousel-item-left {\n  transform: translateX(-100%);\n}\n\n.carousel-fade .carousel-item {\n  opacity: 0;\n  transition-property: opacity;\n  transform: none;\n}\n.carousel-fade .carousel-item.active,\n.carousel-fade .carousel-item-next.carousel-item-left,\n.carousel-fade .carousel-item-prev.carousel-item-right {\n  z-index: 1;\n  opacity: 1;\n}\n.carousel-fade .active.carousel-item-left,\n.carousel-fade .active.carousel-item-right {\n  z-index: 0;\n  opacity: 0;\n  transition: opacity 0s 0.6s;\n}\n@media (prefers-reduced-motion: reduce) {\n  .carousel-fade .active.carousel-item-left,\n.carousel-fade .active.carousel-item-right {\n    transition: none;\n  }\n}\n\n.carousel-control-prev,\n.carousel-control-next {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 15%;\n  color: #fff;\n  text-align: center;\n  opacity: 0.5;\n  transition: opacity 0.15s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n  .carousel-control-prev,\n.carousel-control-next {\n    transition: none;\n  }\n}\n.carousel-control-prev:hover, .carousel-control-prev:focus,\n.carousel-control-next:hover,\n.carousel-control-next:focus {\n  color: #fff;\n  text-decoration: none;\n  outline: 0;\n  opacity: 0.9;\n}\n\n.carousel-control-prev {\n  left: 0;\n}\n\n.carousel-control-next {\n  right: 0;\n}\n\n.carousel-control-prev-icon,\n.carousel-control-next-icon {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background: 50%/100% 100% no-repeat;\n}\n\n.carousel-control-prev-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e\");\n}\n\n.carousel-control-next-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e\");\n}\n\n.carousel-indicators {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 15;\n  display: flex;\n  justify-content: center;\n  padding-left: 0;\n  margin-right: 15%;\n  margin-left: 15%;\n  list-style: none;\n}\n.carousel-indicators li {\n  box-sizing: content-box;\n  flex: 0 1 auto;\n  width: 30px;\n  height: 3px;\n  margin-right: 3px;\n  margin-left: 3px;\n  text-indent: -999px;\n  cursor: pointer;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  opacity: 0.5;\n  transition: opacity 0.6s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n  .carousel-indicators li {\n    transition: none;\n  }\n}\n.carousel-indicators .active {\n  opacity: 1;\n}\n\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 20px;\n  left: 15%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n}\n\n@-webkit-keyframes spinner-border {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes spinner-border {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.spinner-border {\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  vertical-align: text-bottom;\n  border: 0.25em solid currentColor;\n  border-right-color: transparent;\n  border-radius: 50%;\n  -webkit-animation: 0.75s linear infinite spinner-border;\n          animation: 0.75s linear infinite spinner-border;\n}\n\n.spinner-border-sm {\n  width: 1rem;\n  height: 1rem;\n  border-width: 0.2em;\n}\n\n@-webkit-keyframes spinner-grow {\n  0% {\n    transform: scale(0);\n  }\n  50% {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n@keyframes spinner-grow {\n  0% {\n    transform: scale(0);\n  }\n  50% {\n    opacity: 1;\n    transform: none;\n  }\n}\n.spinner-grow {\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  vertical-align: text-bottom;\n  background-color: currentColor;\n  border-radius: 50%;\n  opacity: 0;\n  -webkit-animation: 0.75s linear infinite spinner-grow;\n          animation: 0.75s linear infinite spinner-grow;\n}\n\n.spinner-grow-sm {\n  width: 1rem;\n  height: 1rem;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .spinner-border,\n.spinner-grow {\n    -webkit-animation-duration: 1.5s;\n            animation-duration: 1.5s;\n  }\n}\n.align-baseline {\n  vertical-align: baseline !important;\n}\n\n.align-top {\n  vertical-align: top !important;\n}\n\n.align-middle {\n  vertical-align: middle !important;\n}\n\n.align-bottom {\n  vertical-align: bottom !important;\n}\n\n.align-text-bottom {\n  vertical-align: text-bottom !important;\n}\n\n.align-text-top {\n  vertical-align: text-top !important;\n}\n\n.bg-primary {\n  background-color: #007bff !important;\n}\n\na.bg-primary:hover, a.bg-primary:focus,\nbutton.bg-primary:hover,\nbutton.bg-primary:focus {\n  background-color: #0062cc !important;\n}\n\n.bg-secondary {\n  background-color: #6c757d !important;\n}\n\na.bg-secondary:hover, a.bg-secondary:focus,\nbutton.bg-secondary:hover,\nbutton.bg-secondary:focus {\n  background-color: #545b62 !important;\n}\n\n.bg-success {\n  background-color: #28a745 !important;\n}\n\na.bg-success:hover, a.bg-success:focus,\nbutton.bg-success:hover,\nbutton.bg-success:focus {\n  background-color: #1e7e34 !important;\n}\n\n.bg-info {\n  background-color: #17a2b8 !important;\n}\n\na.bg-info:hover, a.bg-info:focus,\nbutton.bg-info:hover,\nbutton.bg-info:focus {\n  background-color: #117a8b !important;\n}\n\n.bg-warning {\n  background-color: #ffc107 !important;\n}\n\na.bg-warning:hover, a.bg-warning:focus,\nbutton.bg-warning:hover,\nbutton.bg-warning:focus {\n  background-color: #d39e00 !important;\n}\n\n.bg-danger {\n  background-color: #dc3545 !important;\n}\n\na.bg-danger:hover, a.bg-danger:focus,\nbutton.bg-danger:hover,\nbutton.bg-danger:focus {\n  background-color: #bd2130 !important;\n}\n\n.bg-light {\n  background-color: #f8f9fa !important;\n}\n\na.bg-light:hover, a.bg-light:focus,\nbutton.bg-light:hover,\nbutton.bg-light:focus {\n  background-color: #dae0e5 !important;\n}\n\n.bg-dark {\n  background-color: #343a40 !important;\n}\n\na.bg-dark:hover, a.bg-dark:focus,\nbutton.bg-dark:hover,\nbutton.bg-dark:focus {\n  background-color: #1d2124 !important;\n}\n\n.bg-white {\n  background-color: #fff !important;\n}\n\n.bg-transparent {\n  background-color: transparent !important;\n}\n\n.border {\n  border: 1px solid #dee2e6 !important;\n}\n\n.border-top {\n  border-top: 1px solid #dee2e6 !important;\n}\n\n.border-right {\n  border-right: 1px solid #dee2e6 !important;\n}\n\n.border-bottom {\n  border-bottom: 1px solid #dee2e6 !important;\n}\n\n.border-left {\n  border-left: 1px solid #dee2e6 !important;\n}\n\n.border-0 {\n  border: 0 !important;\n}\n\n.border-top-0 {\n  border-top: 0 !important;\n}\n\n.border-right-0 {\n  border-right: 0 !important;\n}\n\n.border-bottom-0 {\n  border-bottom: 0 !important;\n}\n\n.border-left-0 {\n  border-left: 0 !important;\n}\n\n.border-primary {\n  border-color: #007bff !important;\n}\n\n.border-secondary {\n  border-color: #6c757d !important;\n}\n\n.border-success {\n  border-color: #28a745 !important;\n}\n\n.border-info {\n  border-color: #17a2b8 !important;\n}\n\n.border-warning {\n  border-color: #ffc107 !important;\n}\n\n.border-danger {\n  border-color: #dc3545 !important;\n}\n\n.border-light {\n  border-color: #f8f9fa !important;\n}\n\n.border-dark {\n  border-color: #343a40 !important;\n}\n\n.border-white {\n  border-color: #fff !important;\n}\n\n.rounded-sm {\n  border-radius: 0.2rem !important;\n}\n\n.rounded {\n  border-radius: 0.25rem !important;\n}\n\n.rounded-top {\n  border-top-left-radius: 0.25rem !important;\n  border-top-right-radius: 0.25rem !important;\n}\n\n.rounded-right {\n  border-top-right-radius: 0.25rem !important;\n  border-bottom-right-radius: 0.25rem !important;\n}\n\n.rounded-bottom {\n  border-bottom-right-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important;\n}\n\n.rounded-left {\n  border-top-left-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important;\n}\n\n.rounded-lg {\n  border-radius: 0.3rem !important;\n}\n\n.rounded-circle {\n  border-radius: 50% !important;\n}\n\n.rounded-pill {\n  border-radius: 50rem !important;\n}\n\n.rounded-0 {\n  border-radius: 0 !important;\n}\n\n.clearfix::after {\n  display: block;\n  clear: both;\n  content: \"\";\n}\n\n.d-none {\n  display: none !important;\n}\n\n.d-inline {\n  display: inline !important;\n}\n\n.d-inline-block {\n  display: inline-block !important;\n}\n\n.d-block {\n  display: block !important;\n}\n\n.d-table {\n  display: table !important;\n}\n\n.d-table-row {\n  display: table-row !important;\n}\n\n.d-table-cell {\n  display: table-cell !important;\n}\n\n.d-flex {\n  display: flex !important;\n}\n\n.d-inline-flex {\n  display: inline-flex !important;\n}\n\n@media (min-width: 576px) {\n  .d-sm-none {\n    display: none !important;\n  }\n\n  .d-sm-inline {\n    display: inline !important;\n  }\n\n  .d-sm-inline-block {\n    display: inline-block !important;\n  }\n\n  .d-sm-block {\n    display: block !important;\n  }\n\n  .d-sm-table {\n    display: table !important;\n  }\n\n  .d-sm-table-row {\n    display: table-row !important;\n  }\n\n  .d-sm-table-cell {\n    display: table-cell !important;\n  }\n\n  .d-sm-flex {\n    display: flex !important;\n  }\n\n  .d-sm-inline-flex {\n    display: inline-flex !important;\n  }\n}\n@media (min-width: 768px) {\n  .d-md-none {\n    display: none !important;\n  }\n\n  .d-md-inline {\n    display: inline !important;\n  }\n\n  .d-md-inline-block {\n    display: inline-block !important;\n  }\n\n  .d-md-block {\n    display: block !important;\n  }\n\n  .d-md-table {\n    display: table !important;\n  }\n\n  .d-md-table-row {\n    display: table-row !important;\n  }\n\n  .d-md-table-cell {\n    display: table-cell !important;\n  }\n\n  .d-md-flex {\n    display: flex !important;\n  }\n\n  .d-md-inline-flex {\n    display: inline-flex !important;\n  }\n}\n@media (min-width: 992px) {\n  .d-lg-none {\n    display: none !important;\n  }\n\n  .d-lg-inline {\n    display: inline !important;\n  }\n\n  .d-lg-inline-block {\n    display: inline-block !important;\n  }\n\n  .d-lg-block {\n    display: block !important;\n  }\n\n  .d-lg-table {\n    display: table !important;\n  }\n\n  .d-lg-table-row {\n    display: table-row !important;\n  }\n\n  .d-lg-table-cell {\n    display: table-cell !important;\n  }\n\n  .d-lg-flex {\n    display: flex !important;\n  }\n\n  .d-lg-inline-flex {\n    display: inline-flex !important;\n  }\n}\n@media (min-width: 1200px) {\n  .d-xl-none {\n    display: none !important;\n  }\n\n  .d-xl-inline {\n    display: inline !important;\n  }\n\n  .d-xl-inline-block {\n    display: inline-block !important;\n  }\n\n  .d-xl-block {\n    display: block !important;\n  }\n\n  .d-xl-table {\n    display: table !important;\n  }\n\n  .d-xl-table-row {\n    display: table-row !important;\n  }\n\n  .d-xl-table-cell {\n    display: table-cell !important;\n  }\n\n  .d-xl-flex {\n    display: flex !important;\n  }\n\n  .d-xl-inline-flex {\n    display: inline-flex !important;\n  }\n}\n@media print {\n  .d-print-none {\n    display: none !important;\n  }\n\n  .d-print-inline {\n    display: inline !important;\n  }\n\n  .d-print-inline-block {\n    display: inline-block !important;\n  }\n\n  .d-print-block {\n    display: block !important;\n  }\n\n  .d-print-table {\n    display: table !important;\n  }\n\n  .d-print-table-row {\n    display: table-row !important;\n  }\n\n  .d-print-table-cell {\n    display: table-cell !important;\n  }\n\n  .d-print-flex {\n    display: flex !important;\n  }\n\n  .d-print-inline-flex {\n    display: inline-flex !important;\n  }\n}\n.embed-responsive {\n  position: relative;\n  display: block;\n  width: 100%;\n  padding: 0;\n  overflow: hidden;\n}\n.embed-responsive::before {\n  display: block;\n  content: \"\";\n}\n.embed-responsive .embed-responsive-item,\n.embed-responsive iframe,\n.embed-responsive embed,\n.embed-responsive object,\n.embed-responsive video {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n\n.embed-responsive-21by9::before {\n  padding-top: 42.8571428571%;\n}\n\n.embed-responsive-16by9::before {\n  padding-top: 56.25%;\n}\n\n.embed-responsive-4by3::before {\n  padding-top: 75%;\n}\n\n.embed-responsive-1by1::before {\n  padding-top: 100%;\n}\n\n.flex-row {\n  flex-direction: row !important;\n}\n\n.flex-column {\n  flex-direction: column !important;\n}\n\n.flex-row-reverse {\n  flex-direction: row-reverse !important;\n}\n\n.flex-column-reverse {\n  flex-direction: column-reverse !important;\n}\n\n.flex-wrap {\n  flex-wrap: wrap !important;\n}\n\n.flex-nowrap {\n  flex-wrap: nowrap !important;\n}\n\n.flex-wrap-reverse {\n  flex-wrap: wrap-reverse !important;\n}\n\n.flex-fill {\n  flex: 1 1 auto !important;\n}\n\n.flex-grow-0 {\n  flex-grow: 0 !important;\n}\n\n.flex-grow-1 {\n  flex-grow: 1 !important;\n}\n\n.flex-shrink-0 {\n  flex-shrink: 0 !important;\n}\n\n.flex-shrink-1 {\n  flex-shrink: 1 !important;\n}\n\n.justify-content-start {\n  justify-content: flex-start !important;\n}\n\n.justify-content-end {\n  justify-content: flex-end !important;\n}\n\n.justify-content-center {\n  justify-content: center !important;\n}\n\n.justify-content-between {\n  justify-content: space-between !important;\n}\n\n.justify-content-around {\n  justify-content: space-around !important;\n}\n\n.align-items-start {\n  align-items: flex-start !important;\n}\n\n.align-items-end {\n  align-items: flex-end !important;\n}\n\n.align-items-center {\n  align-items: center !important;\n}\n\n.align-items-baseline {\n  align-items: baseline !important;\n}\n\n.align-items-stretch {\n  align-items: stretch !important;\n}\n\n.align-content-start {\n  align-content: flex-start !important;\n}\n\n.align-content-end {\n  align-content: flex-end !important;\n}\n\n.align-content-center {\n  align-content: center !important;\n}\n\n.align-content-between {\n  align-content: space-between !important;\n}\n\n.align-content-around {\n  align-content: space-around !important;\n}\n\n.align-content-stretch {\n  align-content: stretch !important;\n}\n\n.align-self-auto {\n  align-self: auto !important;\n}\n\n.align-self-start {\n  align-self: flex-start !important;\n}\n\n.align-self-end {\n  align-self: flex-end !important;\n}\n\n.align-self-center {\n  align-self: center !important;\n}\n\n.align-self-baseline {\n  align-self: baseline !important;\n}\n\n.align-self-stretch {\n  align-self: stretch !important;\n}\n\n@media (min-width: 576px) {\n  .flex-sm-row {\n    flex-direction: row !important;\n  }\n\n  .flex-sm-column {\n    flex-direction: column !important;\n  }\n\n  .flex-sm-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n\n  .flex-sm-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n\n  .flex-sm-wrap {\n    flex-wrap: wrap !important;\n  }\n\n  .flex-sm-nowrap {\n    flex-wrap: nowrap !important;\n  }\n\n  .flex-sm-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n\n  .flex-sm-fill {\n    flex: 1 1 auto !important;\n  }\n\n  .flex-sm-grow-0 {\n    flex-grow: 0 !important;\n  }\n\n  .flex-sm-grow-1 {\n    flex-grow: 1 !important;\n  }\n\n  .flex-sm-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n\n  .flex-sm-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n\n  .justify-content-sm-start {\n    justify-content: flex-start !important;\n  }\n\n  .justify-content-sm-end {\n    justify-content: flex-end !important;\n  }\n\n  .justify-content-sm-center {\n    justify-content: center !important;\n  }\n\n  .justify-content-sm-between {\n    justify-content: space-between !important;\n  }\n\n  .justify-content-sm-around {\n    justify-content: space-around !important;\n  }\n\n  .align-items-sm-start {\n    align-items: flex-start !important;\n  }\n\n  .align-items-sm-end {\n    align-items: flex-end !important;\n  }\n\n  .align-items-sm-center {\n    align-items: center !important;\n  }\n\n  .align-items-sm-baseline {\n    align-items: baseline !important;\n  }\n\n  .align-items-sm-stretch {\n    align-items: stretch !important;\n  }\n\n  .align-content-sm-start {\n    align-content: flex-start !important;\n  }\n\n  .align-content-sm-end {\n    align-content: flex-end !important;\n  }\n\n  .align-content-sm-center {\n    align-content: center !important;\n  }\n\n  .align-content-sm-between {\n    align-content: space-between !important;\n  }\n\n  .align-content-sm-around {\n    align-content: space-around !important;\n  }\n\n  .align-content-sm-stretch {\n    align-content: stretch !important;\n  }\n\n  .align-self-sm-auto {\n    align-self: auto !important;\n  }\n\n  .align-self-sm-start {\n    align-self: flex-start !important;\n  }\n\n  .align-self-sm-end {\n    align-self: flex-end !important;\n  }\n\n  .align-self-sm-center {\n    align-self: center !important;\n  }\n\n  .align-self-sm-baseline {\n    align-self: baseline !important;\n  }\n\n  .align-self-sm-stretch {\n    align-self: stretch !important;\n  }\n}\n@media (min-width: 768px) {\n  .flex-md-row {\n    flex-direction: row !important;\n  }\n\n  .flex-md-column {\n    flex-direction: column !important;\n  }\n\n  .flex-md-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n\n  .flex-md-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n\n  .flex-md-wrap {\n    flex-wrap: wrap !important;\n  }\n\n  .flex-md-nowrap {\n    flex-wrap: nowrap !important;\n  }\n\n  .flex-md-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n\n  .flex-md-fill {\n    flex: 1 1 auto !important;\n  }\n\n  .flex-md-grow-0 {\n    flex-grow: 0 !important;\n  }\n\n  .flex-md-grow-1 {\n    flex-grow: 1 !important;\n  }\n\n  .flex-md-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n\n  .flex-md-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n\n  .justify-content-md-start {\n    justify-content: flex-start !important;\n  }\n\n  .justify-content-md-end {\n    justify-content: flex-end !important;\n  }\n\n  .justify-content-md-center {\n    justify-content: center !important;\n  }\n\n  .justify-content-md-between {\n    justify-content: space-between !important;\n  }\n\n  .justify-content-md-around {\n    justify-content: space-around !important;\n  }\n\n  .align-items-md-start {\n    align-items: flex-start !important;\n  }\n\n  .align-items-md-end {\n    align-items: flex-end !important;\n  }\n\n  .align-items-md-center {\n    align-items: center !important;\n  }\n\n  .align-items-md-baseline {\n    align-items: baseline !important;\n  }\n\n  .align-items-md-stretch {\n    align-items: stretch !important;\n  }\n\n  .align-content-md-start {\n    align-content: flex-start !important;\n  }\n\n  .align-content-md-end {\n    align-content: flex-end !important;\n  }\n\n  .align-content-md-center {\n    align-content: center !important;\n  }\n\n  .align-content-md-between {\n    align-content: space-between !important;\n  }\n\n  .align-content-md-around {\n    align-content: space-around !important;\n  }\n\n  .align-content-md-stretch {\n    align-content: stretch !important;\n  }\n\n  .align-self-md-auto {\n    align-self: auto !important;\n  }\n\n  .align-self-md-start {\n    align-self: flex-start !important;\n  }\n\n  .align-self-md-end {\n    align-self: flex-end !important;\n  }\n\n  .align-self-md-center {\n    align-self: center !important;\n  }\n\n  .align-self-md-baseline {\n    align-self: baseline !important;\n  }\n\n  .align-self-md-stretch {\n    align-self: stretch !important;\n  }\n}\n@media (min-width: 992px) {\n  .flex-lg-row {\n    flex-direction: row !important;\n  }\n\n  .flex-lg-column {\n    flex-direction: column !important;\n  }\n\n  .flex-lg-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n\n  .flex-lg-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n\n  .flex-lg-wrap {\n    flex-wrap: wrap !important;\n  }\n\n  .flex-lg-nowrap {\n    flex-wrap: nowrap !important;\n  }\n\n  .flex-lg-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n\n  .flex-lg-fill {\n    flex: 1 1 auto !important;\n  }\n\n  .flex-lg-grow-0 {\n    flex-grow: 0 !important;\n  }\n\n  .flex-lg-grow-1 {\n    flex-grow: 1 !important;\n  }\n\n  .flex-lg-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n\n  .flex-lg-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n\n  .justify-content-lg-start {\n    justify-content: flex-start !important;\n  }\n\n  .justify-content-lg-end {\n    justify-content: flex-end !important;\n  }\n\n  .justify-content-lg-center {\n    justify-content: center !important;\n  }\n\n  .justify-content-lg-between {\n    justify-content: space-between !important;\n  }\n\n  .justify-content-lg-around {\n    justify-content: space-around !important;\n  }\n\n  .align-items-lg-start {\n    align-items: flex-start !important;\n  }\n\n  .align-items-lg-end {\n    align-items: flex-end !important;\n  }\n\n  .align-items-lg-center {\n    align-items: center !important;\n  }\n\n  .align-items-lg-baseline {\n    align-items: baseline !important;\n  }\n\n  .align-items-lg-stretch {\n    align-items: stretch !important;\n  }\n\n  .align-content-lg-start {\n    align-content: flex-start !important;\n  }\n\n  .align-content-lg-end {\n    align-content: flex-end !important;\n  }\n\n  .align-content-lg-center {\n    align-content: center !important;\n  }\n\n  .align-content-lg-between {\n    align-content: space-between !important;\n  }\n\n  .align-content-lg-around {\n    align-content: space-around !important;\n  }\n\n  .align-content-lg-stretch {\n    align-content: stretch !important;\n  }\n\n  .align-self-lg-auto {\n    align-self: auto !important;\n  }\n\n  .align-self-lg-start {\n    align-self: flex-start !important;\n  }\n\n  .align-self-lg-end {\n    align-self: flex-end !important;\n  }\n\n  .align-self-lg-center {\n    align-self: center !important;\n  }\n\n  .align-self-lg-baseline {\n    align-self: baseline !important;\n  }\n\n  .align-self-lg-stretch {\n    align-self: stretch !important;\n  }\n}\n@media (min-width: 1200px) {\n  .flex-xl-row {\n    flex-direction: row !important;\n  }\n\n  .flex-xl-column {\n    flex-direction: column !important;\n  }\n\n  .flex-xl-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n\n  .flex-xl-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n\n  .flex-xl-wrap {\n    flex-wrap: wrap !important;\n  }\n\n  .flex-xl-nowrap {\n    flex-wrap: nowrap !important;\n  }\n\n  .flex-xl-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n\n  .flex-xl-fill {\n    flex: 1 1 auto !important;\n  }\n\n  .flex-xl-grow-0 {\n    flex-grow: 0 !important;\n  }\n\n  .flex-xl-grow-1 {\n    flex-grow: 1 !important;\n  }\n\n  .flex-xl-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n\n  .flex-xl-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n\n  .justify-content-xl-start {\n    justify-content: flex-start !important;\n  }\n\n  .justify-content-xl-end {\n    justify-content: flex-end !important;\n  }\n\n  .justify-content-xl-center {\n    justify-content: center !important;\n  }\n\n  .justify-content-xl-between {\n    justify-content: space-between !important;\n  }\n\n  .justify-content-xl-around {\n    justify-content: space-around !important;\n  }\n\n  .align-items-xl-start {\n    align-items: flex-start !important;\n  }\n\n  .align-items-xl-end {\n    align-items: flex-end !important;\n  }\n\n  .align-items-xl-center {\n    align-items: center !important;\n  }\n\n  .align-items-xl-baseline {\n    align-items: baseline !important;\n  }\n\n  .align-items-xl-stretch {\n    align-items: stretch !important;\n  }\n\n  .align-content-xl-start {\n    align-content: flex-start !important;\n  }\n\n  .align-content-xl-end {\n    align-content: flex-end !important;\n  }\n\n  .align-content-xl-center {\n    align-content: center !important;\n  }\n\n  .align-content-xl-between {\n    align-content: space-between !important;\n  }\n\n  .align-content-xl-around {\n    align-content: space-around !important;\n  }\n\n  .align-content-xl-stretch {\n    align-content: stretch !important;\n  }\n\n  .align-self-xl-auto {\n    align-self: auto !important;\n  }\n\n  .align-self-xl-start {\n    align-self: flex-start !important;\n  }\n\n  .align-self-xl-end {\n    align-self: flex-end !important;\n  }\n\n  .align-self-xl-center {\n    align-self: center !important;\n  }\n\n  .align-self-xl-baseline {\n    align-self: baseline !important;\n  }\n\n  .align-self-xl-stretch {\n    align-self: stretch !important;\n  }\n}\n.float-left {\n  float: left !important;\n}\n\n.float-right {\n  float: right !important;\n}\n\n.float-none {\n  float: none !important;\n}\n\n@media (min-width: 576px) {\n  .float-sm-left {\n    float: left !important;\n  }\n\n  .float-sm-right {\n    float: right !important;\n  }\n\n  .float-sm-none {\n    float: none !important;\n  }\n}\n@media (min-width: 768px) {\n  .float-md-left {\n    float: left !important;\n  }\n\n  .float-md-right {\n    float: right !important;\n  }\n\n  .float-md-none {\n    float: none !important;\n  }\n}\n@media (min-width: 992px) {\n  .float-lg-left {\n    float: left !important;\n  }\n\n  .float-lg-right {\n    float: right !important;\n  }\n\n  .float-lg-none {\n    float: none !important;\n  }\n}\n@media (min-width: 1200px) {\n  .float-xl-left {\n    float: left !important;\n  }\n\n  .float-xl-right {\n    float: right !important;\n  }\n\n  .float-xl-none {\n    float: none !important;\n  }\n}\n.user-select-all {\n  -webkit-user-select: all !important;\n     -moz-user-select: all !important;\n          user-select: all !important;\n}\n\n.user-select-auto {\n  -webkit-user-select: auto !important;\n     -moz-user-select: auto !important;\n      -ms-user-select: auto !important;\n          user-select: auto !important;\n}\n\n.user-select-none {\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important;\n}\n\n.overflow-auto {\n  overflow: auto !important;\n}\n\n.overflow-hidden {\n  overflow: hidden !important;\n}\n\n.position-static {\n  position: static !important;\n}\n\n.position-relative {\n  position: relative !important;\n}\n\n.position-absolute {\n  position: absolute !important;\n}\n\n.position-fixed {\n  position: fixed !important;\n}\n\n.position-sticky {\n  position: sticky !important;\n}\n\n.fixed-top {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1030;\n}\n\n@supports (position: sticky) {\n  .sticky-top {\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n  }\n}\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  overflow: visible;\n  clip: auto;\n  white-space: normal;\n}\n\n.shadow-sm {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\n}\n\n.shadow {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n\n.shadow-lg {\n  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;\n}\n\n.shadow-none {\n  box-shadow: none !important;\n}\n\n.w-25 {\n  width: 25% !important;\n}\n\n.w-50 {\n  width: 50% !important;\n}\n\n.w-75 {\n  width: 75% !important;\n}\n\n.w-100 {\n  width: 100% !important;\n}\n\n.w-auto {\n  width: auto !important;\n}\n\n.h-25 {\n  height: 25% !important;\n}\n\n.h-50 {\n  height: 50% !important;\n}\n\n.h-75 {\n  height: 75% !important;\n}\n\n.h-100 {\n  height: 100% !important;\n}\n\n.h-auto {\n  height: auto !important;\n}\n\n.mw-100 {\n  max-width: 100% !important;\n}\n\n.mh-100 {\n  max-height: 100% !important;\n}\n\n.min-vw-100 {\n  min-width: 100vw !important;\n}\n\n.min-vh-100 {\n  min-height: 100vh !important;\n}\n\n.vw-100 {\n  width: 100vw !important;\n}\n\n.vh-100 {\n  height: 100vh !important;\n}\n\n.m-0 {\n  margin: 0 !important;\n}\n\n.mt-0,\n.my-0 {\n  margin-top: 0 !important;\n}\n\n.mr-0,\n.mx-0 {\n  margin-right: 0 !important;\n}\n\n.mb-0,\n.my-0 {\n  margin-bottom: 0 !important;\n}\n\n.ml-0,\n.mx-0 {\n  margin-left: 0 !important;\n}\n\n.m-1 {\n  margin: 0.25rem !important;\n}\n\n.mt-1,\n.my-1 {\n  margin-top: 0.25rem !important;\n}\n\n.mr-1,\n.mx-1 {\n  margin-right: 0.25rem !important;\n}\n\n.mb-1,\n.my-1 {\n  margin-bottom: 0.25rem !important;\n}\n\n.ml-1,\n.mx-1 {\n  margin-left: 0.25rem !important;\n}\n\n.m-2 {\n  margin: 0.5rem !important;\n}\n\n.mt-2,\n.my-2 {\n  margin-top: 0.5rem !important;\n}\n\n.mr-2,\n.mx-2 {\n  margin-right: 0.5rem !important;\n}\n\n.mb-2,\n.my-2 {\n  margin-bottom: 0.5rem !important;\n}\n\n.ml-2,\n.mx-2 {\n  margin-left: 0.5rem !important;\n}\n\n.m-3 {\n  margin: 1rem !important;\n}\n\n.mt-3,\n.my-3 {\n  margin-top: 1rem !important;\n}\n\n.mr-3,\n.mx-3 {\n  margin-right: 1rem !important;\n}\n\n.mb-3,\n.my-3 {\n  margin-bottom: 1rem !important;\n}\n\n.ml-3,\n.mx-3 {\n  margin-left: 1rem !important;\n}\n\n.m-4 {\n  margin: 1.5rem !important;\n}\n\n.mt-4,\n.my-4 {\n  margin-top: 1.5rem !important;\n}\n\n.mr-4,\n.mx-4 {\n  margin-right: 1.5rem !important;\n}\n\n.mb-4,\n.my-4 {\n  margin-bottom: 1.5rem !important;\n}\n\n.ml-4,\n.mx-4 {\n  margin-left: 1.5rem !important;\n}\n\n.m-5 {\n  margin: 3rem !important;\n}\n\n.mt-5,\n.my-5 {\n  margin-top: 3rem !important;\n}\n\n.mr-5,\n.mx-5 {\n  margin-right: 3rem !important;\n}\n\n.mb-5,\n.my-5 {\n  margin-bottom: 3rem !important;\n}\n\n.ml-5,\n.mx-5 {\n  margin-left: 3rem !important;\n}\n\n.p-0 {\n  padding: 0 !important;\n}\n\n.pt-0,\n.py-0 {\n  padding-top: 0 !important;\n}\n\n.pr-0,\n.px-0 {\n  padding-right: 0 !important;\n}\n\n.pb-0,\n.py-0 {\n  padding-bottom: 0 !important;\n}\n\n.pl-0,\n.px-0 {\n  padding-left: 0 !important;\n}\n\n.p-1 {\n  padding: 0.25rem !important;\n}\n\n.pt-1,\n.py-1 {\n  padding-top: 0.25rem !important;\n}\n\n.pr-1,\n.px-1 {\n  padding-right: 0.25rem !important;\n}\n\n.pb-1,\n.py-1 {\n  padding-bottom: 0.25rem !important;\n}\n\n.pl-1,\n.px-1 {\n  padding-left: 0.25rem !important;\n}\n\n.p-2 {\n  padding: 0.5rem !important;\n}\n\n.pt-2,\n.py-2 {\n  padding-top: 0.5rem !important;\n}\n\n.pr-2,\n.px-2 {\n  padding-right: 0.5rem !important;\n}\n\n.pb-2,\n.py-2 {\n  padding-bottom: 0.5rem !important;\n}\n\n.pl-2,\n.px-2 {\n  padding-left: 0.5rem !important;\n}\n\n.p-3 {\n  padding: 1rem !important;\n}\n\n.pt-3,\n.py-3 {\n  padding-top: 1rem !important;\n}\n\n.pr-3,\n.px-3 {\n  padding-right: 1rem !important;\n}\n\n.pb-3,\n.py-3 {\n  padding-bottom: 1rem !important;\n}\n\n.pl-3,\n.px-3 {\n  padding-left: 1rem !important;\n}\n\n.p-4 {\n  padding: 1.5rem !important;\n}\n\n.pt-4,\n.py-4 {\n  padding-top: 1.5rem !important;\n}\n\n.pr-4,\n.px-4 {\n  padding-right: 1.5rem !important;\n}\n\n.pb-4,\n.py-4 {\n  padding-bottom: 1.5rem !important;\n}\n\n.pl-4,\n.px-4 {\n  padding-left: 1.5rem !important;\n}\n\n.p-5 {\n  padding: 3rem !important;\n}\n\n.pt-5,\n.py-5 {\n  padding-top: 3rem !important;\n}\n\n.pr-5,\n.px-5 {\n  padding-right: 3rem !important;\n}\n\n.pb-5,\n.py-5 {\n  padding-bottom: 3rem !important;\n}\n\n.pl-5,\n.px-5 {\n  padding-left: 3rem !important;\n}\n\n.m-n1 {\n  margin: -0.25rem !important;\n}\n\n.mt-n1,\n.my-n1 {\n  margin-top: -0.25rem !important;\n}\n\n.mr-n1,\n.mx-n1 {\n  margin-right: -0.25rem !important;\n}\n\n.mb-n1,\n.my-n1 {\n  margin-bottom: -0.25rem !important;\n}\n\n.ml-n1,\n.mx-n1 {\n  margin-left: -0.25rem !important;\n}\n\n.m-n2 {\n  margin: -0.5rem !important;\n}\n\n.mt-n2,\n.my-n2 {\n  margin-top: -0.5rem !important;\n}\n\n.mr-n2,\n.mx-n2 {\n  margin-right: -0.5rem !important;\n}\n\n.mb-n2,\n.my-n2 {\n  margin-bottom: -0.5rem !important;\n}\n\n.ml-n2,\n.mx-n2 {\n  margin-left: -0.5rem !important;\n}\n\n.m-n3 {\n  margin: -1rem !important;\n}\n\n.mt-n3,\n.my-n3 {\n  margin-top: -1rem !important;\n}\n\n.mr-n3,\n.mx-n3 {\n  margin-right: -1rem !important;\n}\n\n.mb-n3,\n.my-n3 {\n  margin-bottom: -1rem !important;\n}\n\n.ml-n3,\n.mx-n3 {\n  margin-left: -1rem !important;\n}\n\n.m-n4 {\n  margin: -1.5rem !important;\n}\n\n.mt-n4,\n.my-n4 {\n  margin-top: -1.5rem !important;\n}\n\n.mr-n4,\n.mx-n4 {\n  margin-right: -1.5rem !important;\n}\n\n.mb-n4,\n.my-n4 {\n  margin-bottom: -1.5rem !important;\n}\n\n.ml-n4,\n.mx-n4 {\n  margin-left: -1.5rem !important;\n}\n\n.m-n5 {\n  margin: -3rem !important;\n}\n\n.mt-n5,\n.my-n5 {\n  margin-top: -3rem !important;\n}\n\n.mr-n5,\n.mx-n5 {\n  margin-right: -3rem !important;\n}\n\n.mb-n5,\n.my-n5 {\n  margin-bottom: -3rem !important;\n}\n\n.ml-n5,\n.mx-n5 {\n  margin-left: -3rem !important;\n}\n\n.m-auto {\n  margin: auto !important;\n}\n\n.mt-auto,\n.my-auto {\n  margin-top: auto !important;\n}\n\n.mr-auto,\n.mx-auto {\n  margin-right: auto !important;\n}\n\n.mb-auto,\n.my-auto {\n  margin-bottom: auto !important;\n}\n\n.ml-auto,\n.mx-auto {\n  margin-left: auto !important;\n}\n\n@media (min-width: 576px) {\n  .m-sm-0 {\n    margin: 0 !important;\n  }\n\n  .mt-sm-0,\n.my-sm-0 {\n    margin-top: 0 !important;\n  }\n\n  .mr-sm-0,\n.mx-sm-0 {\n    margin-right: 0 !important;\n  }\n\n  .mb-sm-0,\n.my-sm-0 {\n    margin-bottom: 0 !important;\n  }\n\n  .ml-sm-0,\n.mx-sm-0 {\n    margin-left: 0 !important;\n  }\n\n  .m-sm-1 {\n    margin: 0.25rem !important;\n  }\n\n  .mt-sm-1,\n.my-sm-1 {\n    margin-top: 0.25rem !important;\n  }\n\n  .mr-sm-1,\n.mx-sm-1 {\n    margin-right: 0.25rem !important;\n  }\n\n  .mb-sm-1,\n.my-sm-1 {\n    margin-bottom: 0.25rem !important;\n  }\n\n  .ml-sm-1,\n.mx-sm-1 {\n    margin-left: 0.25rem !important;\n  }\n\n  .m-sm-2 {\n    margin: 0.5rem !important;\n  }\n\n  .mt-sm-2,\n.my-sm-2 {\n    margin-top: 0.5rem !important;\n  }\n\n  .mr-sm-2,\n.mx-sm-2 {\n    margin-right: 0.5rem !important;\n  }\n\n  .mb-sm-2,\n.my-sm-2 {\n    margin-bottom: 0.5rem !important;\n  }\n\n  .ml-sm-2,\n.mx-sm-2 {\n    margin-left: 0.5rem !important;\n  }\n\n  .m-sm-3 {\n    margin: 1rem !important;\n  }\n\n  .mt-sm-3,\n.my-sm-3 {\n    margin-top: 1rem !important;\n  }\n\n  .mr-sm-3,\n.mx-sm-3 {\n    margin-right: 1rem !important;\n  }\n\n  .mb-sm-3,\n.my-sm-3 {\n    margin-bottom: 1rem !important;\n  }\n\n  .ml-sm-3,\n.mx-sm-3 {\n    margin-left: 1rem !important;\n  }\n\n  .m-sm-4 {\n    margin: 1.5rem !important;\n  }\n\n  .mt-sm-4,\n.my-sm-4 {\n    margin-top: 1.5rem !important;\n  }\n\n  .mr-sm-4,\n.mx-sm-4 {\n    margin-right: 1.5rem !important;\n  }\n\n  .mb-sm-4,\n.my-sm-4 {\n    margin-bottom: 1.5rem !important;\n  }\n\n  .ml-sm-4,\n.mx-sm-4 {\n    margin-left: 1.5rem !important;\n  }\n\n  .m-sm-5 {\n    margin: 3rem !important;\n  }\n\n  .mt-sm-5,\n.my-sm-5 {\n    margin-top: 3rem !important;\n  }\n\n  .mr-sm-5,\n.mx-sm-5 {\n    margin-right: 3rem !important;\n  }\n\n  .mb-sm-5,\n.my-sm-5 {\n    margin-bottom: 3rem !important;\n  }\n\n  .ml-sm-5,\n.mx-sm-5 {\n    margin-left: 3rem !important;\n  }\n\n  .p-sm-0 {\n    padding: 0 !important;\n  }\n\n  .pt-sm-0,\n.py-sm-0 {\n    padding-top: 0 !important;\n  }\n\n  .pr-sm-0,\n.px-sm-0 {\n    padding-right: 0 !important;\n  }\n\n  .pb-sm-0,\n.py-sm-0 {\n    padding-bottom: 0 !important;\n  }\n\n  .pl-sm-0,\n.px-sm-0 {\n    padding-left: 0 !important;\n  }\n\n  .p-sm-1 {\n    padding: 0.25rem !important;\n  }\n\n  .pt-sm-1,\n.py-sm-1 {\n    padding-top: 0.25rem !important;\n  }\n\n  .pr-sm-1,\n.px-sm-1 {\n    padding-right: 0.25rem !important;\n  }\n\n  .pb-sm-1,\n.py-sm-1 {\n    padding-bottom: 0.25rem !important;\n  }\n\n  .pl-sm-1,\n.px-sm-1 {\n    padding-left: 0.25rem !important;\n  }\n\n  .p-sm-2 {\n    padding: 0.5rem !important;\n  }\n\n  .pt-sm-2,\n.py-sm-2 {\n    padding-top: 0.5rem !important;\n  }\n\n  .pr-sm-2,\n.px-sm-2 {\n    padding-right: 0.5rem !important;\n  }\n\n  .pb-sm-2,\n.py-sm-2 {\n    padding-bottom: 0.5rem !important;\n  }\n\n  .pl-sm-2,\n.px-sm-2 {\n    padding-left: 0.5rem !important;\n  }\n\n  .p-sm-3 {\n    padding: 1rem !important;\n  }\n\n  .pt-sm-3,\n.py-sm-3 {\n    padding-top: 1rem !important;\n  }\n\n  .pr-sm-3,\n.px-sm-3 {\n    padding-right: 1rem !important;\n  }\n\n  .pb-sm-3,\n.py-sm-3 {\n    padding-bottom: 1rem !important;\n  }\n\n  .pl-sm-3,\n.px-sm-3 {\n    padding-left: 1rem !important;\n  }\n\n  .p-sm-4 {\n    padding: 1.5rem !important;\n  }\n\n  .pt-sm-4,\n.py-sm-4 {\n    padding-top: 1.5rem !important;\n  }\n\n  .pr-sm-4,\n.px-sm-4 {\n    padding-right: 1.5rem !important;\n  }\n\n  .pb-sm-4,\n.py-sm-4 {\n    padding-bottom: 1.5rem !important;\n  }\n\n  .pl-sm-4,\n.px-sm-4 {\n    padding-left: 1.5rem !important;\n  }\n\n  .p-sm-5 {\n    padding: 3rem !important;\n  }\n\n  .pt-sm-5,\n.py-sm-5 {\n    padding-top: 3rem !important;\n  }\n\n  .pr-sm-5,\n.px-sm-5 {\n    padding-right: 3rem !important;\n  }\n\n  .pb-sm-5,\n.py-sm-5 {\n    padding-bottom: 3rem !important;\n  }\n\n  .pl-sm-5,\n.px-sm-5 {\n    padding-left: 3rem !important;\n  }\n\n  .m-sm-n1 {\n    margin: -0.25rem !important;\n  }\n\n  .mt-sm-n1,\n.my-sm-n1 {\n    margin-top: -0.25rem !important;\n  }\n\n  .mr-sm-n1,\n.mx-sm-n1 {\n    margin-right: -0.25rem !important;\n  }\n\n  .mb-sm-n1,\n.my-sm-n1 {\n    margin-bottom: -0.25rem !important;\n  }\n\n  .ml-sm-n1,\n.mx-sm-n1 {\n    margin-left: -0.25rem !important;\n  }\n\n  .m-sm-n2 {\n    margin: -0.5rem !important;\n  }\n\n  .mt-sm-n2,\n.my-sm-n2 {\n    margin-top: -0.5rem !important;\n  }\n\n  .mr-sm-n2,\n.mx-sm-n2 {\n    margin-right: -0.5rem !important;\n  }\n\n  .mb-sm-n2,\n.my-sm-n2 {\n    margin-bottom: -0.5rem !important;\n  }\n\n  .ml-sm-n2,\n.mx-sm-n2 {\n    margin-left: -0.5rem !important;\n  }\n\n  .m-sm-n3 {\n    margin: -1rem !important;\n  }\n\n  .mt-sm-n3,\n.my-sm-n3 {\n    margin-top: -1rem !important;\n  }\n\n  .mr-sm-n3,\n.mx-sm-n3 {\n    margin-right: -1rem !important;\n  }\n\n  .mb-sm-n3,\n.my-sm-n3 {\n    margin-bottom: -1rem !important;\n  }\n\n  .ml-sm-n3,\n.mx-sm-n3 {\n    margin-left: -1rem !important;\n  }\n\n  .m-sm-n4 {\n    margin: -1.5rem !important;\n  }\n\n  .mt-sm-n4,\n.my-sm-n4 {\n    margin-top: -1.5rem !important;\n  }\n\n  .mr-sm-n4,\n.mx-sm-n4 {\n    margin-right: -1.5rem !important;\n  }\n\n  .mb-sm-n4,\n.my-sm-n4 {\n    margin-bottom: -1.5rem !important;\n  }\n\n  .ml-sm-n4,\n.mx-sm-n4 {\n    margin-left: -1.5rem !important;\n  }\n\n  .m-sm-n5 {\n    margin: -3rem !important;\n  }\n\n  .mt-sm-n5,\n.my-sm-n5 {\n    margin-top: -3rem !important;\n  }\n\n  .mr-sm-n5,\n.mx-sm-n5 {\n    margin-right: -3rem !important;\n  }\n\n  .mb-sm-n5,\n.my-sm-n5 {\n    margin-bottom: -3rem !important;\n  }\n\n  .ml-sm-n5,\n.mx-sm-n5 {\n    margin-left: -3rem !important;\n  }\n\n  .m-sm-auto {\n    margin: auto !important;\n  }\n\n  .mt-sm-auto,\n.my-sm-auto {\n    margin-top: auto !important;\n  }\n\n  .mr-sm-auto,\n.mx-sm-auto {\n    margin-right: auto !important;\n  }\n\n  .mb-sm-auto,\n.my-sm-auto {\n    margin-bottom: auto !important;\n  }\n\n  .ml-sm-auto,\n.mx-sm-auto {\n    margin-left: auto !important;\n  }\n}\n@media (min-width: 768px) {\n  .m-md-0 {\n    margin: 0 !important;\n  }\n\n  .mt-md-0,\n.my-md-0 {\n    margin-top: 0 !important;\n  }\n\n  .mr-md-0,\n.mx-md-0 {\n    margin-right: 0 !important;\n  }\n\n  .mb-md-0,\n.my-md-0 {\n    margin-bottom: 0 !important;\n  }\n\n  .ml-md-0,\n.mx-md-0 {\n    margin-left: 0 !important;\n  }\n\n  .m-md-1 {\n    margin: 0.25rem !important;\n  }\n\n  .mt-md-1,\n.my-md-1 {\n    margin-top: 0.25rem !important;\n  }\n\n  .mr-md-1,\n.mx-md-1 {\n    margin-right: 0.25rem !important;\n  }\n\n  .mb-md-1,\n.my-md-1 {\n    margin-bottom: 0.25rem !important;\n  }\n\n  .ml-md-1,\n.mx-md-1 {\n    margin-left: 0.25rem !important;\n  }\n\n  .m-md-2 {\n    margin: 0.5rem !important;\n  }\n\n  .mt-md-2,\n.my-md-2 {\n    margin-top: 0.5rem !important;\n  }\n\n  .mr-md-2,\n.mx-md-2 {\n    margin-right: 0.5rem !important;\n  }\n\n  .mb-md-2,\n.my-md-2 {\n    margin-bottom: 0.5rem !important;\n  }\n\n  .ml-md-2,\n.mx-md-2 {\n    margin-left: 0.5rem !important;\n  }\n\n  .m-md-3 {\n    margin: 1rem !important;\n  }\n\n  .mt-md-3,\n.my-md-3 {\n    margin-top: 1rem !important;\n  }\n\n  .mr-md-3,\n.mx-md-3 {\n    margin-right: 1rem !important;\n  }\n\n  .mb-md-3,\n.my-md-3 {\n    margin-bottom: 1rem !important;\n  }\n\n  .ml-md-3,\n.mx-md-3 {\n    margin-left: 1rem !important;\n  }\n\n  .m-md-4 {\n    margin: 1.5rem !important;\n  }\n\n  .mt-md-4,\n.my-md-4 {\n    margin-top: 1.5rem !important;\n  }\n\n  .mr-md-4,\n.mx-md-4 {\n    margin-right: 1.5rem !important;\n  }\n\n  .mb-md-4,\n.my-md-4 {\n    margin-bottom: 1.5rem !important;\n  }\n\n  .ml-md-4,\n.mx-md-4 {\n    margin-left: 1.5rem !important;\n  }\n\n  .m-md-5 {\n    margin: 3rem !important;\n  }\n\n  .mt-md-5,\n.my-md-5 {\n    margin-top: 3rem !important;\n  }\n\n  .mr-md-5,\n.mx-md-5 {\n    margin-right: 3rem !important;\n  }\n\n  .mb-md-5,\n.my-md-5 {\n    margin-bottom: 3rem !important;\n  }\n\n  .ml-md-5,\n.mx-md-5 {\n    margin-left: 3rem !important;\n  }\n\n  .p-md-0 {\n    padding: 0 !important;\n  }\n\n  .pt-md-0,\n.py-md-0 {\n    padding-top: 0 !important;\n  }\n\n  .pr-md-0,\n.px-md-0 {\n    padding-right: 0 !important;\n  }\n\n  .pb-md-0,\n.py-md-0 {\n    padding-bottom: 0 !important;\n  }\n\n  .pl-md-0,\n.px-md-0 {\n    padding-left: 0 !important;\n  }\n\n  .p-md-1 {\n    padding: 0.25rem !important;\n  }\n\n  .pt-md-1,\n.py-md-1 {\n    padding-top: 0.25rem !important;\n  }\n\n  .pr-md-1,\n.px-md-1 {\n    padding-right: 0.25rem !important;\n  }\n\n  .pb-md-1,\n.py-md-1 {\n    padding-bottom: 0.25rem !important;\n  }\n\n  .pl-md-1,\n.px-md-1 {\n    padding-left: 0.25rem !important;\n  }\n\n  .p-md-2 {\n    padding: 0.5rem !important;\n  }\n\n  .pt-md-2,\n.py-md-2 {\n    padding-top: 0.5rem !important;\n  }\n\n  .pr-md-2,\n.px-md-2 {\n    padding-right: 0.5rem !important;\n  }\n\n  .pb-md-2,\n.py-md-2 {\n    padding-bottom: 0.5rem !important;\n  }\n\n  .pl-md-2,\n.px-md-2 {\n    padding-left: 0.5rem !important;\n  }\n\n  .p-md-3 {\n    padding: 1rem !important;\n  }\n\n  .pt-md-3,\n.py-md-3 {\n    padding-top: 1rem !important;\n  }\n\n  .pr-md-3,\n.px-md-3 {\n    padding-right: 1rem !important;\n  }\n\n  .pb-md-3,\n.py-md-3 {\n    padding-bottom: 1rem !important;\n  }\n\n  .pl-md-3,\n.px-md-3 {\n    padding-left: 1rem !important;\n  }\n\n  .p-md-4 {\n    padding: 1.5rem !important;\n  }\n\n  .pt-md-4,\n.py-md-4 {\n    padding-top: 1.5rem !important;\n  }\n\n  .pr-md-4,\n.px-md-4 {\n    padding-right: 1.5rem !important;\n  }\n\n  .pb-md-4,\n.py-md-4 {\n    padding-bottom: 1.5rem !important;\n  }\n\n  .pl-md-4,\n.px-md-4 {\n    padding-left: 1.5rem !important;\n  }\n\n  .p-md-5 {\n    padding: 3rem !important;\n  }\n\n  .pt-md-5,\n.py-md-5 {\n    padding-top: 3rem !important;\n  }\n\n  .pr-md-5,\n.px-md-5 {\n    padding-right: 3rem !important;\n  }\n\n  .pb-md-5,\n.py-md-5 {\n    padding-bottom: 3rem !important;\n  }\n\n  .pl-md-5,\n.px-md-5 {\n    padding-left: 3rem !important;\n  }\n\n  .m-md-n1 {\n    margin: -0.25rem !important;\n  }\n\n  .mt-md-n1,\n.my-md-n1 {\n    margin-top: -0.25rem !important;\n  }\n\n  .mr-md-n1,\n.mx-md-n1 {\n    margin-right: -0.25rem !important;\n  }\n\n  .mb-md-n1,\n.my-md-n1 {\n    margin-bottom: -0.25rem !important;\n  }\n\n  .ml-md-n1,\n.mx-md-n1 {\n    margin-left: -0.25rem !important;\n  }\n\n  .m-md-n2 {\n    margin: -0.5rem !important;\n  }\n\n  .mt-md-n2,\n.my-md-n2 {\n    margin-top: -0.5rem !important;\n  }\n\n  .mr-md-n2,\n.mx-md-n2 {\n    margin-right: -0.5rem !important;\n  }\n\n  .mb-md-n2,\n.my-md-n2 {\n    margin-bottom: -0.5rem !important;\n  }\n\n  .ml-md-n2,\n.mx-md-n2 {\n    margin-left: -0.5rem !important;\n  }\n\n  .m-md-n3 {\n    margin: -1rem !important;\n  }\n\n  .mt-md-n3,\n.my-md-n3 {\n    margin-top: -1rem !important;\n  }\n\n  .mr-md-n3,\n.mx-md-n3 {\n    margin-right: -1rem !important;\n  }\n\n  .mb-md-n3,\n.my-md-n3 {\n    margin-bottom: -1rem !important;\n  }\n\n  .ml-md-n3,\n.mx-md-n3 {\n    margin-left: -1rem !important;\n  }\n\n  .m-md-n4 {\n    margin: -1.5rem !important;\n  }\n\n  .mt-md-n4,\n.my-md-n4 {\n    margin-top: -1.5rem !important;\n  }\n\n  .mr-md-n4,\n.mx-md-n4 {\n    margin-right: -1.5rem !important;\n  }\n\n  .mb-md-n4,\n.my-md-n4 {\n    margin-bottom: -1.5rem !important;\n  }\n\n  .ml-md-n4,\n.mx-md-n4 {\n    margin-left: -1.5rem !important;\n  }\n\n  .m-md-n5 {\n    margin: -3rem !important;\n  }\n\n  .mt-md-n5,\n.my-md-n5 {\n    margin-top: -3rem !important;\n  }\n\n  .mr-md-n5,\n.mx-md-n5 {\n    margin-right: -3rem !important;\n  }\n\n  .mb-md-n5,\n.my-md-n5 {\n    margin-bottom: -3rem !important;\n  }\n\n  .ml-md-n5,\n.mx-md-n5 {\n    margin-left: -3rem !important;\n  }\n\n  .m-md-auto {\n    margin: auto !important;\n  }\n\n  .mt-md-auto,\n.my-md-auto {\n    margin-top: auto !important;\n  }\n\n  .mr-md-auto,\n.mx-md-auto {\n    margin-right: auto !important;\n  }\n\n  .mb-md-auto,\n.my-md-auto {\n    margin-bottom: auto !important;\n  }\n\n  .ml-md-auto,\n.mx-md-auto {\n    margin-left: auto !important;\n  }\n}\n@media (min-width: 992px) {\n  .m-lg-0 {\n    margin: 0 !important;\n  }\n\n  .mt-lg-0,\n.my-lg-0 {\n    margin-top: 0 !important;\n  }\n\n  .mr-lg-0,\n.mx-lg-0 {\n    margin-right: 0 !important;\n  }\n\n  .mb-lg-0,\n.my-lg-0 {\n    margin-bottom: 0 !important;\n  }\n\n  .ml-lg-0,\n.mx-lg-0 {\n    margin-left: 0 !important;\n  }\n\n  .m-lg-1 {\n    margin: 0.25rem !important;\n  }\n\n  .mt-lg-1,\n.my-lg-1 {\n    margin-top: 0.25rem !important;\n  }\n\n  .mr-lg-1,\n.mx-lg-1 {\n    margin-right: 0.25rem !important;\n  }\n\n  .mb-lg-1,\n.my-lg-1 {\n    margin-bottom: 0.25rem !important;\n  }\n\n  .ml-lg-1,\n.mx-lg-1 {\n    margin-left: 0.25rem !important;\n  }\n\n  .m-lg-2 {\n    margin: 0.5rem !important;\n  }\n\n  .mt-lg-2,\n.my-lg-2 {\n    margin-top: 0.5rem !important;\n  }\n\n  .mr-lg-2,\n.mx-lg-2 {\n    margin-right: 0.5rem !important;\n  }\n\n  .mb-lg-2,\n.my-lg-2 {\n    margin-bottom: 0.5rem !important;\n  }\n\n  .ml-lg-2,\n.mx-lg-2 {\n    margin-left: 0.5rem !important;\n  }\n\n  .m-lg-3 {\n    margin: 1rem !important;\n  }\n\n  .mt-lg-3,\n.my-lg-3 {\n    margin-top: 1rem !important;\n  }\n\n  .mr-lg-3,\n.mx-lg-3 {\n    margin-right: 1rem !important;\n  }\n\n  .mb-lg-3,\n.my-lg-3 {\n    margin-bottom: 1rem !important;\n  }\n\n  .ml-lg-3,\n.mx-lg-3 {\n    margin-left: 1rem !important;\n  }\n\n  .m-lg-4 {\n    margin: 1.5rem !important;\n  }\n\n  .mt-lg-4,\n.my-lg-4 {\n    margin-top: 1.5rem !important;\n  }\n\n  .mr-lg-4,\n.mx-lg-4 {\n    margin-right: 1.5rem !important;\n  }\n\n  .mb-lg-4,\n.my-lg-4 {\n    margin-bottom: 1.5rem !important;\n  }\n\n  .ml-lg-4,\n.mx-lg-4 {\n    margin-left: 1.5rem !important;\n  }\n\n  .m-lg-5 {\n    margin: 3rem !important;\n  }\n\n  .mt-lg-5,\n.my-lg-5 {\n    margin-top: 3rem !important;\n  }\n\n  .mr-lg-5,\n.mx-lg-5 {\n    margin-right: 3rem !important;\n  }\n\n  .mb-lg-5,\n.my-lg-5 {\n    margin-bottom: 3rem !important;\n  }\n\n  .ml-lg-5,\n.mx-lg-5 {\n    margin-left: 3rem !important;\n  }\n\n  .p-lg-0 {\n    padding: 0 !important;\n  }\n\n  .pt-lg-0,\n.py-lg-0 {\n    padding-top: 0 !important;\n  }\n\n  .pr-lg-0,\n.px-lg-0 {\n    padding-right: 0 !important;\n  }\n\n  .pb-lg-0,\n.py-lg-0 {\n    padding-bottom: 0 !important;\n  }\n\n  .pl-lg-0,\n.px-lg-0 {\n    padding-left: 0 !important;\n  }\n\n  .p-lg-1 {\n    padding: 0.25rem !important;\n  }\n\n  .pt-lg-1,\n.py-lg-1 {\n    padding-top: 0.25rem !important;\n  }\n\n  .pr-lg-1,\n.px-lg-1 {\n    padding-right: 0.25rem !important;\n  }\n\n  .pb-lg-1,\n.py-lg-1 {\n    padding-bottom: 0.25rem !important;\n  }\n\n  .pl-lg-1,\n.px-lg-1 {\n    padding-left: 0.25rem !important;\n  }\n\n  .p-lg-2 {\n    padding: 0.5rem !important;\n  }\n\n  .pt-lg-2,\n.py-lg-2 {\n    padding-top: 0.5rem !important;\n  }\n\n  .pr-lg-2,\n.px-lg-2 {\n    padding-right: 0.5rem !important;\n  }\n\n  .pb-lg-2,\n.py-lg-2 {\n    padding-bottom: 0.5rem !important;\n  }\n\n  .pl-lg-2,\n.px-lg-2 {\n    padding-left: 0.5rem !important;\n  }\n\n  .p-lg-3 {\n    padding: 1rem !important;\n  }\n\n  .pt-lg-3,\n.py-lg-3 {\n    padding-top: 1rem !important;\n  }\n\n  .pr-lg-3,\n.px-lg-3 {\n    padding-right: 1rem !important;\n  }\n\n  .pb-lg-3,\n.py-lg-3 {\n    padding-bottom: 1rem !important;\n  }\n\n  .pl-lg-3,\n.px-lg-3 {\n    padding-left: 1rem !important;\n  }\n\n  .p-lg-4 {\n    padding: 1.5rem !important;\n  }\n\n  .pt-lg-4,\n.py-lg-4 {\n    padding-top: 1.5rem !important;\n  }\n\n  .pr-lg-4,\n.px-lg-4 {\n    padding-right: 1.5rem !important;\n  }\n\n  .pb-lg-4,\n.py-lg-4 {\n    padding-bottom: 1.5rem !important;\n  }\n\n  .pl-lg-4,\n.px-lg-4 {\n    padding-left: 1.5rem !important;\n  }\n\n  .p-lg-5 {\n    padding: 3rem !important;\n  }\n\n  .pt-lg-5,\n.py-lg-5 {\n    padding-top: 3rem !important;\n  }\n\n  .pr-lg-5,\n.px-lg-5 {\n    padding-right: 3rem !important;\n  }\n\n  .pb-lg-5,\n.py-lg-5 {\n    padding-bottom: 3rem !important;\n  }\n\n  .pl-lg-5,\n.px-lg-5 {\n    padding-left: 3rem !important;\n  }\n\n  .m-lg-n1 {\n    margin: -0.25rem !important;\n  }\n\n  .mt-lg-n1,\n.my-lg-n1 {\n    margin-top: -0.25rem !important;\n  }\n\n  .mr-lg-n1,\n.mx-lg-n1 {\n    margin-right: -0.25rem !important;\n  }\n\n  .mb-lg-n1,\n.my-lg-n1 {\n    margin-bottom: -0.25rem !important;\n  }\n\n  .ml-lg-n1,\n.mx-lg-n1 {\n    margin-left: -0.25rem !important;\n  }\n\n  .m-lg-n2 {\n    margin: -0.5rem !important;\n  }\n\n  .mt-lg-n2,\n.my-lg-n2 {\n    margin-top: -0.5rem !important;\n  }\n\n  .mr-lg-n2,\n.mx-lg-n2 {\n    margin-right: -0.5rem !important;\n  }\n\n  .mb-lg-n2,\n.my-lg-n2 {\n    margin-bottom: -0.5rem !important;\n  }\n\n  .ml-lg-n2,\n.mx-lg-n2 {\n    margin-left: -0.5rem !important;\n  }\n\n  .m-lg-n3 {\n    margin: -1rem !important;\n  }\n\n  .mt-lg-n3,\n.my-lg-n3 {\n    margin-top: -1rem !important;\n  }\n\n  .mr-lg-n3,\n.mx-lg-n3 {\n    margin-right: -1rem !important;\n  }\n\n  .mb-lg-n3,\n.my-lg-n3 {\n    margin-bottom: -1rem !important;\n  }\n\n  .ml-lg-n3,\n.mx-lg-n3 {\n    margin-left: -1rem !important;\n  }\n\n  .m-lg-n4 {\n    margin: -1.5rem !important;\n  }\n\n  .mt-lg-n4,\n.my-lg-n4 {\n    margin-top: -1.5rem !important;\n  }\n\n  .mr-lg-n4,\n.mx-lg-n4 {\n    margin-right: -1.5rem !important;\n  }\n\n  .mb-lg-n4,\n.my-lg-n4 {\n    margin-bottom: -1.5rem !important;\n  }\n\n  .ml-lg-n4,\n.mx-lg-n4 {\n    margin-left: -1.5rem !important;\n  }\n\n  .m-lg-n5 {\n    margin: -3rem !important;\n  }\n\n  .mt-lg-n5,\n.my-lg-n5 {\n    margin-top: -3rem !important;\n  }\n\n  .mr-lg-n5,\n.mx-lg-n5 {\n    margin-right: -3rem !important;\n  }\n\n  .mb-lg-n5,\n.my-lg-n5 {\n    margin-bottom: -3rem !important;\n  }\n\n  .ml-lg-n5,\n.mx-lg-n5 {\n    margin-left: -3rem !important;\n  }\n\n  .m-lg-auto {\n    margin: auto !important;\n  }\n\n  .mt-lg-auto,\n.my-lg-auto {\n    margin-top: auto !important;\n  }\n\n  .mr-lg-auto,\n.mx-lg-auto {\n    margin-right: auto !important;\n  }\n\n  .mb-lg-auto,\n.my-lg-auto {\n    margin-bottom: auto !important;\n  }\n\n  .ml-lg-auto,\n.mx-lg-auto {\n    margin-left: auto !important;\n  }\n}\n@media (min-width: 1200px) {\n  .m-xl-0 {\n    margin: 0 !important;\n  }\n\n  .mt-xl-0,\n.my-xl-0 {\n    margin-top: 0 !important;\n  }\n\n  .mr-xl-0,\n.mx-xl-0 {\n    margin-right: 0 !important;\n  }\n\n  .mb-xl-0,\n.my-xl-0 {\n    margin-bottom: 0 !important;\n  }\n\n  .ml-xl-0,\n.mx-xl-0 {\n    margin-left: 0 !important;\n  }\n\n  .m-xl-1 {\n    margin: 0.25rem !important;\n  }\n\n  .mt-xl-1,\n.my-xl-1 {\n    margin-top: 0.25rem !important;\n  }\n\n  .mr-xl-1,\n.mx-xl-1 {\n    margin-right: 0.25rem !important;\n  }\n\n  .mb-xl-1,\n.my-xl-1 {\n    margin-bottom: 0.25rem !important;\n  }\n\n  .ml-xl-1,\n.mx-xl-1 {\n    margin-left: 0.25rem !important;\n  }\n\n  .m-xl-2 {\n    margin: 0.5rem !important;\n  }\n\n  .mt-xl-2,\n.my-xl-2 {\n    margin-top: 0.5rem !important;\n  }\n\n  .mr-xl-2,\n.mx-xl-2 {\n    margin-right: 0.5rem !important;\n  }\n\n  .mb-xl-2,\n.my-xl-2 {\n    margin-bottom: 0.5rem !important;\n  }\n\n  .ml-xl-2,\n.mx-xl-2 {\n    margin-left: 0.5rem !important;\n  }\n\n  .m-xl-3 {\n    margin: 1rem !important;\n  }\n\n  .mt-xl-3,\n.my-xl-3 {\n    margin-top: 1rem !important;\n  }\n\n  .mr-xl-3,\n.mx-xl-3 {\n    margin-right: 1rem !important;\n  }\n\n  .mb-xl-3,\n.my-xl-3 {\n    margin-bottom: 1rem !important;\n  }\n\n  .ml-xl-3,\n.mx-xl-3 {\n    margin-left: 1rem !important;\n  }\n\n  .m-xl-4 {\n    margin: 1.5rem !important;\n  }\n\n  .mt-xl-4,\n.my-xl-4 {\n    margin-top: 1.5rem !important;\n  }\n\n  .mr-xl-4,\n.mx-xl-4 {\n    margin-right: 1.5rem !important;\n  }\n\n  .mb-xl-4,\n.my-xl-4 {\n    margin-bottom: 1.5rem !important;\n  }\n\n  .ml-xl-4,\n.mx-xl-4 {\n    margin-left: 1.5rem !important;\n  }\n\n  .m-xl-5 {\n    margin: 3rem !important;\n  }\n\n  .mt-xl-5,\n.my-xl-5 {\n    margin-top: 3rem !important;\n  }\n\n  .mr-xl-5,\n.mx-xl-5 {\n    margin-right: 3rem !important;\n  }\n\n  .mb-xl-5,\n.my-xl-5 {\n    margin-bottom: 3rem !important;\n  }\n\n  .ml-xl-5,\n.mx-xl-5 {\n    margin-left: 3rem !important;\n  }\n\n  .p-xl-0 {\n    padding: 0 !important;\n  }\n\n  .pt-xl-0,\n.py-xl-0 {\n    padding-top: 0 !important;\n  }\n\n  .pr-xl-0,\n.px-xl-0 {\n    padding-right: 0 !important;\n  }\n\n  .pb-xl-0,\n.py-xl-0 {\n    padding-bottom: 0 !important;\n  }\n\n  .pl-xl-0,\n.px-xl-0 {\n    padding-left: 0 !important;\n  }\n\n  .p-xl-1 {\n    padding: 0.25rem !important;\n  }\n\n  .pt-xl-1,\n.py-xl-1 {\n    padding-top: 0.25rem !important;\n  }\n\n  .pr-xl-1,\n.px-xl-1 {\n    padding-right: 0.25rem !important;\n  }\n\n  .pb-xl-1,\n.py-xl-1 {\n    padding-bottom: 0.25rem !important;\n  }\n\n  .pl-xl-1,\n.px-xl-1 {\n    padding-left: 0.25rem !important;\n  }\n\n  .p-xl-2 {\n    padding: 0.5rem !important;\n  }\n\n  .pt-xl-2,\n.py-xl-2 {\n    padding-top: 0.5rem !important;\n  }\n\n  .pr-xl-2,\n.px-xl-2 {\n    padding-right: 0.5rem !important;\n  }\n\n  .pb-xl-2,\n.py-xl-2 {\n    padding-bottom: 0.5rem !important;\n  }\n\n  .pl-xl-2,\n.px-xl-2 {\n    padding-left: 0.5rem !important;\n  }\n\n  .p-xl-3 {\n    padding: 1rem !important;\n  }\n\n  .pt-xl-3,\n.py-xl-3 {\n    padding-top: 1rem !important;\n  }\n\n  .pr-xl-3,\n.px-xl-3 {\n    padding-right: 1rem !important;\n  }\n\n  .pb-xl-3,\n.py-xl-3 {\n    padding-bottom: 1rem !important;\n  }\n\n  .pl-xl-3,\n.px-xl-3 {\n    padding-left: 1rem !important;\n  }\n\n  .p-xl-4 {\n    padding: 1.5rem !important;\n  }\n\n  .pt-xl-4,\n.py-xl-4 {\n    padding-top: 1.5rem !important;\n  }\n\n  .pr-xl-4,\n.px-xl-4 {\n    padding-right: 1.5rem !important;\n  }\n\n  .pb-xl-4,\n.py-xl-4 {\n    padding-bottom: 1.5rem !important;\n  }\n\n  .pl-xl-4,\n.px-xl-4 {\n    padding-left: 1.5rem !important;\n  }\n\n  .p-xl-5 {\n    padding: 3rem !important;\n  }\n\n  .pt-xl-5,\n.py-xl-5 {\n    padding-top: 3rem !important;\n  }\n\n  .pr-xl-5,\n.px-xl-5 {\n    padding-right: 3rem !important;\n  }\n\n  .pb-xl-5,\n.py-xl-5 {\n    padding-bottom: 3rem !important;\n  }\n\n  .pl-xl-5,\n.px-xl-5 {\n    padding-left: 3rem !important;\n  }\n\n  .m-xl-n1 {\n    margin: -0.25rem !important;\n  }\n\n  .mt-xl-n1,\n.my-xl-n1 {\n    margin-top: -0.25rem !important;\n  }\n\n  .mr-xl-n1,\n.mx-xl-n1 {\n    margin-right: -0.25rem !important;\n  }\n\n  .mb-xl-n1,\n.my-xl-n1 {\n    margin-bottom: -0.25rem !important;\n  }\n\n  .ml-xl-n1,\n.mx-xl-n1 {\n    margin-left: -0.25rem !important;\n  }\n\n  .m-xl-n2 {\n    margin: -0.5rem !important;\n  }\n\n  .mt-xl-n2,\n.my-xl-n2 {\n    margin-top: -0.5rem !important;\n  }\n\n  .mr-xl-n2,\n.mx-xl-n2 {\n    margin-right: -0.5rem !important;\n  }\n\n  .mb-xl-n2,\n.my-xl-n2 {\n    margin-bottom: -0.5rem !important;\n  }\n\n  .ml-xl-n2,\n.mx-xl-n2 {\n    margin-left: -0.5rem !important;\n  }\n\n  .m-xl-n3 {\n    margin: -1rem !important;\n  }\n\n  .mt-xl-n3,\n.my-xl-n3 {\n    margin-top: -1rem !important;\n  }\n\n  .mr-xl-n3,\n.mx-xl-n3 {\n    margin-right: -1rem !important;\n  }\n\n  .mb-xl-n3,\n.my-xl-n3 {\n    margin-bottom: -1rem !important;\n  }\n\n  .ml-xl-n3,\n.mx-xl-n3 {\n    margin-left: -1rem !important;\n  }\n\n  .m-xl-n4 {\n    margin: -1.5rem !important;\n  }\n\n  .mt-xl-n4,\n.my-xl-n4 {\n    margin-top: -1.5rem !important;\n  }\n\n  .mr-xl-n4,\n.mx-xl-n4 {\n    margin-right: -1.5rem !important;\n  }\n\n  .mb-xl-n4,\n.my-xl-n4 {\n    margin-bottom: -1.5rem !important;\n  }\n\n  .ml-xl-n4,\n.mx-xl-n4 {\n    margin-left: -1.5rem !important;\n  }\n\n  .m-xl-n5 {\n    margin: -3rem !important;\n  }\n\n  .mt-xl-n5,\n.my-xl-n5 {\n    margin-top: -3rem !important;\n  }\n\n  .mr-xl-n5,\n.mx-xl-n5 {\n    margin-right: -3rem !important;\n  }\n\n  .mb-xl-n5,\n.my-xl-n5 {\n    margin-bottom: -3rem !important;\n  }\n\n  .ml-xl-n5,\n.mx-xl-n5 {\n    margin-left: -3rem !important;\n  }\n\n  .m-xl-auto {\n    margin: auto !important;\n  }\n\n  .mt-xl-auto,\n.my-xl-auto {\n    margin-top: auto !important;\n  }\n\n  .mr-xl-auto,\n.mx-xl-auto {\n    margin-right: auto !important;\n  }\n\n  .mb-xl-auto,\n.my-xl-auto {\n    margin-bottom: auto !important;\n  }\n\n  .ml-xl-auto,\n.mx-xl-auto {\n    margin-left: auto !important;\n  }\n}\n.stretched-link::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  pointer-events: auto;\n  content: \"\";\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.text-monospace {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !important;\n}\n\n.text-justify {\n  text-align: justify !important;\n}\n\n.text-wrap {\n  white-space: normal !important;\n}\n\n.text-nowrap {\n  white-space: nowrap !important;\n}\n\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.text-left {\n  text-align: left !important;\n}\n\n.text-right {\n  text-align: right !important;\n}\n\n.text-center {\n  text-align: center !important;\n}\n\n@media (min-width: 576px) {\n  .text-sm-left {\n    text-align: left !important;\n  }\n\n  .text-sm-right {\n    text-align: right !important;\n  }\n\n  .text-sm-center {\n    text-align: center !important;\n  }\n}\n@media (min-width: 768px) {\n  .text-md-left {\n    text-align: left !important;\n  }\n\n  .text-md-right {\n    text-align: right !important;\n  }\n\n  .text-md-center {\n    text-align: center !important;\n  }\n}\n@media (min-width: 992px) {\n  .text-lg-left {\n    text-align: left !important;\n  }\n\n  .text-lg-right {\n    text-align: right !important;\n  }\n\n  .text-lg-center {\n    text-align: center !important;\n  }\n}\n@media (min-width: 1200px) {\n  .text-xl-left {\n    text-align: left !important;\n  }\n\n  .text-xl-right {\n    text-align: right !important;\n  }\n\n  .text-xl-center {\n    text-align: center !important;\n  }\n}\n.text-lowercase {\n  text-transform: lowercase !important;\n}\n\n.text-uppercase {\n  text-transform: uppercase !important;\n}\n\n.text-capitalize {\n  text-transform: capitalize !important;\n}\n\n.font-weight-light {\n  font-weight: 300 !important;\n}\n\n.font-weight-lighter {\n  font-weight: lighter !important;\n}\n\n.font-weight-normal {\n  font-weight: 400 !important;\n}\n\n.font-weight-bold {\n  font-weight: 700 !important;\n}\n\n.font-weight-bolder {\n  font-weight: bolder !important;\n}\n\n.font-italic {\n  font-style: italic !important;\n}\n\n.text-white {\n  color: #fff !important;\n}\n\n.text-primary {\n  color: #007bff !important;\n}\n\na.text-primary:hover, a.text-primary:focus {\n  color: #0056b3 !important;\n}\n\n.text-secondary {\n  color: #6c757d !important;\n}\n\na.text-secondary:hover, a.text-secondary:focus {\n  color: #494f54 !important;\n}\n\n.text-success {\n  color: #28a745 !important;\n}\n\na.text-success:hover, a.text-success:focus {\n  color: #19692c !important;\n}\n\n.text-info {\n  color: #17a2b8 !important;\n}\n\na.text-info:hover, a.text-info:focus {\n  color: #0f6674 !important;\n}\n\n.text-warning {\n  color: #ffc107 !important;\n}\n\na.text-warning:hover, a.text-warning:focus {\n  color: #ba8b00 !important;\n}\n\n.text-danger {\n  color: #dc3545 !important;\n}\n\na.text-danger:hover, a.text-danger:focus {\n  color: #a71d2a !important;\n}\n\n.text-light {\n  color: #f8f9fa !important;\n}\n\na.text-light:hover, a.text-light:focus {\n  color: #cbd3da !important;\n}\n\n.text-dark {\n  color: #343a40 !important;\n}\n\na.text-dark:hover, a.text-dark:focus {\n  color: #121416 !important;\n}\n\n.text-body {\n  color: #212529 !important;\n}\n\n.text-muted {\n  color: #6c757d !important;\n}\n\n.text-black-50 {\n  color: rgba(0, 0, 0, 0.5) !important;\n}\n\n.text-white-50 {\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n\n.text-decoration-none {\n  text-decoration: none !important;\n}\n\n.text-break {\n  word-break: break-word !important;\n  word-wrap: break-word !important;\n}\n\n.text-reset {\n  color: inherit !important;\n}\n\n.visible {\n  visibility: visible !important;\n}\n\n.invisible {\n  visibility: hidden !important;\n}\n\n@media print {\n  *,\n*::before,\n*::after {\n    text-shadow: none !important;\n    box-shadow: none !important;\n  }\n\n  a:not(.btn) {\n    text-decoration: underline;\n  }\n\n  abbr[title]::after {\n    content: \" (\" attr(title) \")\";\n  }\n\n  pre {\n    white-space: pre-wrap !important;\n  }\n\n  pre,\nblockquote {\n    border: 1px solid #adb5bd;\n    page-break-inside: avoid;\n  }\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\nimg {\n    page-break-inside: avoid;\n  }\n\n  p,\nh2,\nh3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\nh3 {\n    page-break-after: avoid;\n  }\n\n  @page {\n    size: a3;\n  }\n  body {\n    min-width: 992px !important;\n  }\n\n  .container {\n    min-width: 992px !important;\n  }\n\n  .navbar {\n    display: none;\n  }\n\n  .badge {\n    border: 1px solid #000;\n  }\n\n  .table {\n    border-collapse: collapse !important;\n  }\n  .table td,\n.table th {\n    background-color: #fff !important;\n  }\n\n  .table-bordered th,\n.table-bordered td {\n    border: 1px solid #dee2e6 !important;\n  }\n\n  .table-dark {\n    color: inherit;\n  }\n  .table-dark th,\n.table-dark td,\n.table-dark thead th,\n.table-dark tbody + tbody {\n    border-color: #dee2e6;\n  }\n\n  .table .thead-dark th {\n    color: inherit;\n    border-color: #dee2e6;\n  }\n}\nbody {\n  background: #fafafa;\n  margin: 0;\n}\n\na {\n  color: #533f03;\n  font-weight: bold;\n}\n\n* {\n  box-sizing: border-box;\n}\n*:after, *::before {\n  box-sizing: border-box;\n}\n\n.app-container {\n  box-sizing: border-box;\n}\n.app-container .view-container {\n  width: 100%;\n  height: calc(100% - 40px);\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 1rem;\n}\n.app-container .view-container .card {\n  padding: 1rem;\n}\n.app-container .view-container .view-routes {\n  height: 100%;\n}\n.app-container .view-container .view-routes > div {\n  height: 100%;\n}\n\n.fullscreen {\n  position: fixed;\n  top: 100px;\n  left: 0px;\n  width: 99% !important;\n  height: calc(100vh - 110px) !important;\n  margin: 5px;\n  z-index: 1000;\n  padding: 5px 25px 50px 25px !important;\n}\n\n/* ==========================================================================\nBrowser Upgrade Prompt\n========================================================================== */\n.browserupgrade {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n/* ==========================================================================\nCustom button styles\n========================================================================== */\n.icon-button > .btn {\n  background-color: transparent;\n  border-color: transparent;\n  padding: 0.5rem;\n  line-height: 1rem;\n}\n.icon-button > .btn:hover {\n  background-color: transparent;\n  border-color: transparent;\n}\n.icon-button > .btn:focus {\n  box-shadow: none;\n}\n\n/* ==========================================================================\nGeneric styles\n========================================================================== */\n/* Temporary workaround for availity-reactstrap-validation */\n.invalid-feedback {\n  display: inline;\n}\n\n/* other generic styles */\n.title {\n  font-size: 1.25em;\n  margin: 1px 10px 1px 10px;\n}\n\n.description {\n  font-size: 0.9em;\n  margin: 1px 10px 1px 10px;\n}\n\n.shadow {\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;\n  border-radius: 2px;\n}\n\n.error {\n  color: white;\n  background-color: red;\n}\n\n.break {\n  white-space: normal;\n  word-break: break-all;\n}\n\n.break-word {\n  white-space: normal;\n  word-break: keep-all;\n}\n\n.preserve-space {\n  white-space: pre-wrap;\n}\n\n/* padding helpers */\n.pad {\n  padding: 10px !important;\n}\n\n.pad-2 {\n  padding: 2px !important;\n}\n\n.pad-3 {\n  padding: 3px !important;\n}\n\n.pad-5 {\n  padding: 5px !important;\n}\n\n.pad-10 {\n  padding: 10px !important;\n}\n\n.pad-20 {\n  padding: 20px !important;\n}\n\n.pad-25 {\n  padding: 25px !important;\n}\n\n.pad-30 {\n  padding: 30px !important;\n}\n\n.pad-50 {\n  padding: 50px !important;\n}\n\n.pad-75 {\n  padding: 75px !important;\n}\n\n.pad-100 {\n  padding: 100px !important;\n}\n\n.pad-top-4 {\n  padding-top: 4px !important;\n}\n\n.pad-top-5 {\n  padding-top: 5px !important;\n}\n\n.pad-top-10 {\n  padding-top: 10px !important;\n}\n\n.pad-top-20 {\n  padding-top: 20px !important;\n}\n\n.pad-top-25 {\n  padding-top: 25px !important;\n}\n\n.pad-top-30 {\n  padding-top: 30px !important;\n}\n\n.pad-top-50 {\n  padding-top: 50px !important;\n}\n\n.pad-top-75 {\n  padding-top: 75px !important;\n}\n\n.pad-top-100 {\n  padding-top: 100px !important;\n}\n\n.pad-bottom-4 {\n  padding-bottom: 4px !important;\n}\n\n.pad-bottom-5 {\n  padding-bottom: 5px !important;\n}\n\n.pad-bottom-10 {\n  padding-bottom: 10px !important;\n}\n\n.pad-bottom-20 {\n  padding-bottom: 20px !important;\n}\n\n.pad-bottom-25 {\n  padding-bottom: 25px !important;\n}\n\n.pad-bottom-30 {\n  padding-bottom: 30px !important;\n}\n\n.pad-bottom-50 {\n  padding-bottom: 50px !important;\n}\n\n.pad-bottom-75 {\n  padding-bottom: 75px !important;\n}\n\n.pad-bottom-100 {\n  padding-bottom: 100px !important;\n}\n\n.pad-right-5 {\n  padding-right: 5px !important;\n}\n\n.pad-right-10 {\n  padding-right: 10px !important;\n}\n\n.pad-right-20 {\n  padding-right: 20px !important;\n}\n\n.pad-right-25 {\n  padding-right: 25px !important;\n}\n\n.pad-right-30 {\n  padding-right: 30px !important;\n}\n\n.pad-right-50 {\n  padding-right: 50px !important;\n}\n\n.pad-right-75 {\n  padding-right: 75px !important;\n}\n\n.pad-right-100 {\n  padding-right: 100px !important;\n}\n\n.pad-left-5 {\n  padding-left: 5px !important;\n}\n\n.pad-left-10 {\n  padding-left: 10px !important;\n}\n\n.pad-left-20 {\n  padding-left: 20px !important;\n}\n\n.pad-left-25 {\n  padding-left: 25px !important;\n}\n\n.pad-left-30 {\n  padding-left: 30px !important;\n}\n\n.pad-left-50 {\n  padding-left: 50px !important;\n}\n\n.pad-left-75 {\n  padding-left: 75px !important;\n}\n\n.pad-left-100 {\n  padding-left: 100px !important;\n}\n\n.no-padding-left {\n  padding-left: 0 !important;\n}\n\n.no-padding-right {\n  padding-right: 0 !important;\n}\n\n.no-padding-top {\n  padding-top: 0 !important;\n}\n\n.no-padding-bottom {\n  padding-bottom: 0 !important;\n}\n\n.no-padding {\n  padding: 0 !important;\n}\n\n/* end of padding helpers */\n.no-margin {\n  margin: 0px;\n}\n\n.voffset {\n  margin-top: 2px !important;\n}\n\n.voffset-5 {\n  margin-top: 5px !important;\n}\n\n.voffset-10 {\n  margin-top: 10px !important;\n}\n\n.voffset-15 {\n  margin-top: 15px !important;\n}\n\n.voffset-30 {\n  margin-top: 30px !important;\n}\n\n.voffset-40 {\n  margin-top: 40px !important;\n}\n\n.voffset-60 {\n  margin-top: 60px !important;\n}\n\n.voffset-80 {\n  margin-top: 80px !important;\n}\n\n.voffset-100 {\n  margin-top: 100px !important;\n}\n\n.voffset-150 {\n  margin-top: 150px !important;\n}\n\n.readonly {\n  background-color: #eee;\n  opacity: 1;\n}\n\n/* ==========================================================================\nmake sure browsers use the pointer cursor for anchors, even with no href\n========================================================================== */\na:hover {\n  cursor: pointer;\n}\n\n.hand {\n  cursor: pointer;\n}\n\nbutton.anchor-btn {\n  background: none;\n  border: none;\n  padding: 0;\n  align-items: initial;\n  text-align: initial;\n  width: 100%;\n}\n\na.anchor-btn:hover {\n  text-decoration: none;\n}\n\n/* ==========================================================================\nMetrics and Health styles\n========================================================================== */\n#threadDump .popover,\n#healthCheck .popover {\n  top: inherit;\n  display: block;\n  font-size: 10px;\n  max-width: 1024px;\n}\n\n.thread-dump-modal-lock {\n  max-width: 450px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n#healthCheck .popover {\n  margin-left: -50px;\n}\n\n.health-details {\n  min-width: 400px;\n}\n\n/* bootstrap 3 input-group 100% width\nhttp://stackoverflow.com/questions/23436430/bootstrap-3-input-group-100-width */\n.width-min {\n  width: 1% !important;\n}\n\n/* jhipster-needle-scss-add-main JHipster will add new css style */", "",{"version":3,"sources":["webpack://./src/main/webapp/app/app.scss","webpack://./node_modules/bootstrap/scss/bootstrap.scss","webpack://./node_modules/bootstrap/scss/_root.scss","webpack://./node_modules/bootstrap/scss/_reboot.scss","webpack://./node_modules/bootstrap/scss/_variables.scss","webpack://./node_modules/bootstrap/scss/vendor/_rfs.scss","webpack://./node_modules/bootstrap/scss/mixins/_hover.scss","webpack://./node_modules/bootstrap/scss/_type.scss","webpack://./node_modules/bootstrap/scss/mixins/_lists.scss","webpack://./node_modules/bootstrap/scss/_images.scss","webpack://./node_modules/bootstrap/scss/mixins/_image.scss","webpack://./node_modules/bootstrap/scss/mixins/_border-radius.scss","webpack://./node_modules/bootstrap/scss/_code.scss","webpack://./node_modules/bootstrap/scss/_grid.scss","webpack://./node_modules/bootstrap/scss/mixins/_grid.scss","webpack://./node_modules/bootstrap/scss/mixins/_breakpoints.scss","webpack://./node_modules/bootstrap/scss/mixins/_grid-framework.scss","webpack://./node_modules/bootstrap/scss/_tables.scss","webpack://./node_modules/bootstrap/scss/mixins/_table-row.scss","webpack://./node_modules/bootstrap/scss/_forms.scss","webpack://./node_modules/bootstrap/scss/mixins/_transition.scss","webpack://./node_modules/bootstrap/scss/mixins/_forms.scss","webpack://./node_modules/bootstrap/scss/mixins/_gradients.scss","webpack://./node_modules/bootstrap/scss/_buttons.scss","webpack://./node_modules/bootstrap/scss/mixins/_buttons.scss","webpack://./node_modules/bootstrap/scss/_transitions.scss","webpack://./node_modules/bootstrap/scss/_dropdown.scss","webpack://./node_modules/bootstrap/scss/mixins/_caret.scss","webpack://./node_modules/bootstrap/scss/mixins/_nav-divider.scss","webpack://./node_modules/bootstrap/scss/_button-group.scss","webpack://./node_modules/bootstrap/scss/_input-group.scss","webpack://./node_modules/bootstrap/scss/_custom-forms.scss","webpack://./node_modules/bootstrap/scss/_nav.scss","webpack://./node_modules/bootstrap/scss/_navbar.scss","webpack://./node_modules/bootstrap/scss/_card.scss","webpack://./node_modules/bootstrap/scss/_breadcrumb.scss","webpack://./node_modules/bootstrap/scss/_pagination.scss","webpack://./node_modules/bootstrap/scss/mixins/_pagination.scss","webpack://./node_modules/bootstrap/scss/_badge.scss","webpack://./node_modules/bootstrap/scss/mixins/_badge.scss","webpack://./node_modules/bootstrap/scss/_jumbotron.scss","webpack://./node_modules/bootstrap/scss/_alert.scss","webpack://./node_modules/bootstrap/scss/mixins/_alert.scss","webpack://./node_modules/bootstrap/scss/_progress.scss","webpack://./node_modules/bootstrap/scss/_media.scss","webpack://./node_modules/bootstrap/scss/_list-group.scss","webpack://./node_modules/bootstrap/scss/mixins/_list-group.scss","webpack://./node_modules/bootstrap/scss/_close.scss","webpack://./node_modules/bootstrap/scss/_toasts.scss","webpack://./node_modules/bootstrap/scss/_modal.scss","webpack://./node_modules/bootstrap/scss/_tooltip.scss","webpack://./node_modules/bootstrap/scss/mixins/_reset-text.scss","webpack://./node_modules/bootstrap/scss/_popover.scss","webpack://./node_modules/bootstrap/scss/_carousel.scss","webpack://./node_modules/bootstrap/scss/mixins/_clearfix.scss","webpack://./node_modules/bootstrap/scss/_spinners.scss","webpack://./node_modules/bootstrap/scss/utilities/_align.scss","webpack://./node_modules/bootstrap/scss/mixins/_background-variant.scss","webpack://./node_modules/bootstrap/scss/utilities/_background.scss","webpack://./node_modules/bootstrap/scss/utilities/_borders.scss","webpack://./node_modules/bootstrap/scss/utilities/_display.scss","webpack://./node_modules/bootstrap/scss/utilities/_embed.scss","webpack://./node_modules/bootstrap/scss/utilities/_flex.scss","webpack://./node_modules/bootstrap/scss/utilities/_float.scss","webpack://./node_modules/bootstrap/scss/utilities/_interactions.scss","webpack://./node_modules/bootstrap/scss/utilities/_overflow.scss","webpack://./node_modules/bootstrap/scss/utilities/_position.scss","webpack://./node_modules/bootstrap/scss/utilities/_screenreaders.scss","webpack://./node_modules/bootstrap/scss/mixins/_screen-reader.scss","webpack://./node_modules/bootstrap/scss/utilities/_shadows.scss","webpack://./node_modules/bootstrap/scss/utilities/_sizing.scss","webpack://./node_modules/bootstrap/scss/utilities/_spacing.scss","webpack://./node_modules/bootstrap/scss/utilities/_stretched-link.scss","webpack://./node_modules/bootstrap/scss/utilities/_text.scss","webpack://./node_modules/bootstrap/scss/mixins/_text-truncate.scss","webpack://./node_modules/bootstrap/scss/mixins/_text-emphasis.scss","webpack://./node_modules/bootstrap/scss/mixins/_text-hide.scss","webpack://./node_modules/bootstrap/scss/utilities/_visibility.scss","webpack://./node_modules/bootstrap/scss/_print.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACAhB;;;;;EAAA;ACAA;EAGI,eAAA;EAAA,iBAAA;EAAA,iBAAA;EAAA,eAAA;EAAA,cAAA;EAAA,iBAAA;EAAA,iBAAA;EAAA,gBAAA;EAAA,eAAA;EAAA,eAAA;EAAA,aAAA;EAAA,eAAA;EAAA,oBAAA;EAIA,kBAAA;EAAA,oBAAA;EAAA,kBAAA;EAAA,eAAA;EAAA,kBAAA;EAAA,iBAAA;EAAA,gBAAA;EAAA,eAAA;EAIA,kBAAA;EAAA,sBAAA;EAAA,sBAAA;EAAA,sBAAA;EAAA,uBAAA;EAKF,kOAAA;EACA,6GAAA;AFmBF;;AGlBA;;;EAGE,sBAAA;AHqBF;;AGlBA;EACE,uBAAA;EACA,iBAAA;EACA,8BAAA;EACA,6CAAA;AHqBF;;AGfA;EACE,cAAA;AHkBF;;AGRA;EACE,SAAA;EACA,qNCqO4B;ECrJxB,eAtCa;EFxCjB,gBC8O4B;ED7O5B,gBCkP4B;EDjP5B,cCnCS;EDoCT,gBAAA;EACA,sBC9CS;AJyDX;;AGCA;EACE,qBAAA;AHEF;;AGOA;EACE,uBAAA;EACA,SAAA;EACA,iBAAA;AHJF;;AGiBA;EACE,aAAA;EACA,qBCgN4B;AJ9N9B;;AGqBA;EACE,aAAA;EACA,mBCoF0B;AJtG5B;;AG6BA;;EAEE,0BAAA;EACA,yCAAA;UAAA,iCAAA;EACA,YAAA;EACA,gBAAA;EACA,sCAAA;UAAA,8BAAA;AH1BF;;AG6BA;EACE,mBAAA;EACA,kBAAA;EACA,oBAAA;AH1BF;;AG6BA;;;EAGE,aAAA;EACA,mBAAA;AH1BF;;AG6BA;;;;EAIE,gBAAA;AH1BF;;AG6BA;EACE,gBCiJ4B;AJ3K9B;;AG6BA;EACE,qBAAA;EACA,cAAA;AH1BF;;AG6BA;EACE,gBAAA;AH1BF;;AG6BA;;EAEE,mBCoI4B;AJ9J9B;;AG6BA;EExFI,cAAA;AL+DJ;;AGkCA;;EAEE,kBAAA;EEnGE,cAAA;EFqGF,cAAA;EACA,wBAAA;AH/BF;;AGkCA;EAAM,eAAA;AH9BN;;AG+BA;EAAM,WAAA;AH3BN;;AGkCA;EACE,cCXwC;EDYxC,qBCXwC;EDYxC,6BAAA;AH/BF;AMjJE;EHmLE,cCdsC;EDetC,0BCdsC;AJjB1C;;AGwCA;EACE,cAAA;EACA,qBAAA;AHrCF;AM1JE;EHkME,cAAA;EACA,qBAAA;AHrCJ;;AG8CA;;;;EAIE,iGCyD4B;EC7M1B,cAAA;AL0GJ;;AG8CA;EAEE,aAAA;EAEA,mBAAA;EAEA,cAAA;EAGA,6BAAA;AHhDF;;AGwDA;EAEE,gBAAA;AHtDF;;AG8DA;EACE,sBAAA;EACA,kBAAA;AH3DF;;AG8DA;EAGE,gBAAA;EACA,sBAAA;AH7DF;;AGqEA;EACE,yBAAA;AHlEF;;AGqEA;EACE,oBC6E4B;ED5E5B,uBC4E4B;ED3E5B,cCtQS;EDuQT,gBAAA;EACA,oBAAA;AHlEF;;AGyEA;EAEE,mBAAA;EACA,gCAAA;AHvEF;;AG+EA;EAEE,qBAAA;EACA,qBC2JsC;AJxOxC;;AGmFA;EAEE,gBAAA;AHjFF;;AGyFA;EACE,UAAA;AHtFF;;AGyFA;;;;;EAKE,SAAA;EACA,oBAAA;EE5PE,kBAAA;EF8PF,oBAAA;AHtFF;;AGyFA;;EAEE,iBAAA;AHtFF;;AGyFA;;EAEE,oBAAA;AHtFF;;AG4FA;EACE,eAAA;AHzFF;;AG+FA;EACE,iBAAA;AH5FF;;AGmGA;;;;EAIE,0BAAA;AHhGF;;AGyGI;;;;EACE,eAAA;AHnGN;;AGyGA;;;;EAIE,UAAA;EACA,kBAAA;AHtGF;;AGyGA;;EAEE,sBAAA;EACA,UAAA;AHtGF;;AG0GA;EACE,cAAA;EAEA,gBAAA;AHxGF;;AG2GA;EAME,YAAA;EAEA,UAAA;EACA,SAAA;EACA,SAAA;AH9GF;;AGmHA;EACE,cAAA;EACA,WAAA;EACA,eAAA;EACA,UAAA;EACA,qBAAA;EEnSI,iBAtCa;EF2UjB,oBAAA;EACA,cAAA;EACA,mBAAA;AHhHF;;AGmHA;EACE,wBAAA;AHhHF;;AGoHA;;EAEE,YAAA;AHjHF;;AGoHA;EAKE,oBAAA;EACA,wBAAA;AHrHF;;AG4HA;EACE,wBAAA;AHzHF;;AGiIA;EACE,aAAA;EACA,0BAAA;AH9HF;;AGqIA;EACE,qBAAA;AHlIF;;AGqIA;EACE,kBAAA;EACA,eAAA;AHlIF;;AGqIA;EACE,aAAA;AHlIF;;AGuIA;EACE,wBAAA;AHpIF;;AOxVA;;EAEE,qBHqS4B;EGnS5B,gBHqS4B;EGpS5B,gBHqS4B;AJqD9B;;AOtVA;EFgHM,iBAtCa;ALgRnB;;AOzVA;EF+GM,eAtCa;ALoRnB;;AO5VA;EF8GM,kBAtCa;ALwRnB;;AO/VA;EF6GM,iBAtCa;AL4RnB;;AOlWA;EF4GM,kBAtCa;ALgSnB;;AOrWA;EF2GM,eAtCa;ALoSnB;;AOvWA;EFyGM,kBAtCa;EEjEjB,gBHuS4B;AJmE9B;;AOtWA;EFmGM,eAtCa;EE3DjB,gBH0R4B;EGzR5B,gBHiR4B;AJwF9B;;AOvWA;EF8FM,iBAtCa;EEtDjB,gBHsR4B;EGrR5B,gBH4Q4B;AJ8F9B;;AOxWA;EFyFM,iBAtCa;EEjDjB,gBHkR4B;EGjR5B,gBHuQ4B;AJoG9B;;AOzWA;EFoFM,iBAtCa;EE5CjB,gBH8Q4B;EG7Q5B,gBHkQ4B;AJ0G9B;;AOpWA;EACE,gBHgFO;EG/EP,mBH+EO;EG9EP,SAAA;EACA,wCAAA;APuWF;;AO/VA;;EFMI,cAAA;EEHF,gBH0N4B;AJwI9B;;AO/VA;;EAEE,cHkQ4B;EGjQ5B,yBH0Q4B;AJwF9B;;AO1VA;EC/EE,eAAA;EACA,gBAAA;AR6aF;;AO1VA;ECpFE,eAAA;EACA,gBAAA;ARkbF;;AO5VA;EACE,qBAAA;AP+VF;AO7VE;EACE,oBHoP0B;AJ2G9B;;AOrVA;EFjCI,cAAA;EEmCF,yBAAA;APwVF;;AOpVA;EACE,mBHuBO;ECRH,kBAtCa;AL+WnB;;AOpVA;EACE,cAAA;EF7CE,cAAA;EE+CF,cH1GS;AJicX;AOrVE;EACE,aAAA;APuVJ;;AS1cA;ECIE,eAAA;EAGA,YAAA;AVwcF;;ASzcA;EACE,gBLmgCkC;EKlgClC,sBLRS;EKST,yBAAA;EEEE,sBAAA;EDPF,eAAA;EAGA,YAAA;AVidF;;ASncA;EAEE,qBAAA;ATqcF;;ASlcA;EACE,qBAAA;EACA,cAAA;ATqcF;;ASlcA;EJkCI,cAAA;EIhCF,cL3BS;AJgeX;;AY5eA;EPuEI,gBAAA;EOrEF,cRmCQ;EQlCR,qBAAA;AZ+eF;AY5eE;EACE,cAAA;AZ8eJ;;AYzeA;EACE,sBAAA;EP0DE,gBAAA;EOxDF,WRTS;EQUT,yBRDS;EOEP,qBAAA;AX4eJ;AYzeE;EACE,UAAA;EPkDA,eAAA;EOhDA,gBRwQ0B;AJmO9B;;AYreA;EACE,cAAA;EPyCE,gBAAA;EOvCF,cRjBS;AJyfX;AYreE;EPoCE,kBAAA;EOlCA,cAAA;EACA,kBAAA;AZueJ;;AYleA;EACE,iBR8jCkC;EQ7jClC,kBAAA;AZqeF;;Aa7gBE;;;;;;ECDA,WAAA;EACA,mBAAA;EACA,kBAAA;EACA,kBAAA;EACA,iBAAA;AduhBF;;AepeI;EFzCE;IACE,gBT8Le;EJmVrB;AACF;Ae1eI;EFzCE;IACE,gBT8Le;EJwVrB;AACF;Ae/eI;EFzCE;IACE,gBT8Le;EJ6VrB;AACF;AepfI;EFzCE;IACE,iBT8Le;EJkWrB;AACF;AargBE;ECnCA,aAAA;EACA,eAAA;EACA,mBAAA;EACA,kBAAA;Ad2iBF;;AargBE;EACE,eAAA;EACA,cAAA;AbwgBJ;AatgBI;;EAEE,gBAAA;EACA,eAAA;AbwgBN;;AgB9jBE;;;;;;EACE,kBAAA;EACA,WAAA;EACA,mBAAA;EACA,kBAAA;AhBskBJ;;AgBhjBM;EACE,aAAA;EACA,YAAA;EACA,eAAA;AhBmjBR;;AcvhBE;EACE,cAAA;EACA,eAAA;Ad0hBJ;;Ac5hBE;EACE,aAAA;EACA,cAAA;Ad+hBJ;;AcjiBE;EACE,wBAAA;EACA,yBAAA;AdoiBJ;;ActiBE;EACE,aAAA;EACA,cAAA;AdyiBJ;;Ac3iBE;EACE,aAAA;EACA,cAAA;Ad8iBJ;;AchjBE;EACE,wBAAA;EACA,yBAAA;AdmjBJ;;AgBtkBM;EFCJ,cAAA;EACA,WAAA;EACA,eAAA;AdykBF;;AgBtkBU;EFbR,uBAAA;EAIA,wBAAA;AdolBF;;AgB3kBU;EFbR,wBAAA;EAIA,yBAAA;AdylBF;;AgBhlBU;EFbR,aAAA;EAIA,cAAA;Ad8lBF;;AgBrlBU;EFbR,wBAAA;EAIA,yBAAA;AdmmBF;;AgB1lBU;EFbR,wBAAA;EAIA,yBAAA;AdwmBF;;AgB/lBU;EFbR,aAAA;EAIA,cAAA;Ad6mBF;;AgBpmBU;EFbR,wBAAA;EAIA,yBAAA;AdknBF;;AgBzmBU;EFbR,wBAAA;EAIA,yBAAA;AdunBF;;AgB9mBU;EFbR,aAAA;EAIA,cAAA;Ad4nBF;;AgBnnBU;EFbR,wBAAA;EAIA,yBAAA;AdioBF;;AgBxnBU;EFbR,wBAAA;EAIA,yBAAA;AdsoBF;;AgB7nBU;EFbR,cAAA;EAIA,eAAA;Ad2oBF;;AgB5nBM;EAAwB,SAAA;AhBgoB9B;;AgB9nBM;EAAuB,SAAA;AhBkoB7B;;AgB/nBQ;EAAwB,QADb;AhBooBnB;;AgBnoBQ;EAAwB,QADb;AhBwoBnB;;AgBvoBQ;EAAwB,QADb;AhB4oBnB;;AgB3oBQ;EAAwB,QADb;AhBgpBnB;;AgB/oBQ;EAAwB,QADb;AhBopBnB;;AgBnpBQ;EAAwB,QADb;AhBwpBnB;;AgBvpBQ;EAAwB,QADb;AhB4pBnB;;AgB3pBQ;EAAwB,QADb;AhBgqBnB;;AgB/pBQ;EAAwB,QADb;AhBoqBnB;;AgBnqBQ;EAAwB,QADb;AhBwqBnB;;AgBvqBQ;EAAwB,SADb;AhB4qBnB;;AgB3qBQ;EAAwB,SADb;AhBgrBnB;;AgB/qBQ;EAAwB,SADb;AhBorBnB;;AgB5qBY;EFhBV,0BAAA;AdgsBF;;AgBhrBY;EFhBV,2BAAA;AdosBF;;AgBprBY;EFhBV,gBAAA;AdwsBF;;AgBxrBY;EFhBV,2BAAA;Ad4sBF;;AgB5rBY;EFhBV,2BAAA;AdgtBF;;AgBhsBY;EFhBV,gBAAA;AdotBF;;AgBpsBY;EFhBV,2BAAA;AdwtBF;;AgBxsBY;EFhBV,2BAAA;Ad4tBF;;AgB5sBY;EFhBV,gBAAA;AdguBF;;AgBhtBY;EFhBV,2BAAA;AdouBF;;AgBptBY;EFhBV,2BAAA;AdwuBF;;AenuBI;EC3BE;IACE,aAAA;IACA,YAAA;IACA,eAAA;EhBkwBN;;EctuBA;IACE,cAAA;IACA,eAAA;EdyuBF;;Ec3uBA;IACE,aAAA;IACA,cAAA;Ed8uBF;;EchvBA;IACE,wBAAA;IACA,yBAAA;EdmvBF;;EcrvBA;IACE,aAAA;IACA,cAAA;EdwvBF;;Ec1vBA;IACE,aAAA;IACA,cAAA;Ed6vBF;;Ec/vBA;IACE,wBAAA;IACA,yBAAA;EdkwBF;;EgBrxBI;IFCJ,cAAA;IACA,WAAA;IACA,eAAA;EdwxBA;;EgBrxBQ;IFbR,uBAAA;IAIA,wBAAA;EdmyBA;;EgB1xBQ;IFbR,wBAAA;IAIA,yBAAA;EdwyBA;;EgB/xBQ;IFbR,aAAA;IAIA,cAAA;Ed6yBA;;EgBpyBQ;IFbR,wBAAA;IAIA,yBAAA;EdkzBA;;EgBzyBQ;IFbR,wBAAA;IAIA,yBAAA;EduzBA;;EgB9yBQ;IFbR,aAAA;IAIA,cAAA;Ed4zBA;;EgBnzBQ;IFbR,wBAAA;IAIA,yBAAA;Edi0BA;;EgBxzBQ;IFbR,wBAAA;IAIA,yBAAA;Eds0BA;;EgB7zBQ;IFbR,aAAA;IAIA,cAAA;Ed20BA;;EgBl0BQ;IFbR,wBAAA;IAIA,yBAAA;Edg1BA;;EgBv0BQ;IFbR,wBAAA;IAIA,yBAAA;Edq1BA;;EgB50BQ;IFbR,cAAA;IAIA,eAAA;Ed01BA;;EgB30BI;IAAwB,SAAA;EhB+0B5B;;EgB70BI;IAAuB,SAAA;EhBi1B3B;;EgB90BM;IAAwB,QADb;EhBm1BjB;;EgBl1BM;IAAwB,QADb;EhBu1BjB;;EgBt1BM;IAAwB,QADb;EhB21BjB;;EgB11BM;IAAwB,QADb;EhB+1BjB;;EgB91BM;IAAwB,QADb;EhBm2BjB;;EgBl2BM;IAAwB,QADb;EhBu2BjB;;EgBt2BM;IAAwB,QADb;EhB22BjB;;EgB12BM;IAAwB,QADb;EhB+2BjB;;EgB92BM;IAAwB,QADb;EhBm3BjB;;EgBl3BM;IAAwB,QADb;EhBu3BjB;;EgBt3BM;IAAwB,SADb;EhB23BjB;;EgB13BM;IAAwB,SADb;EhB+3BjB;;EgB93BM;IAAwB,SADb;EhBm4BjB;;EgB33BU;IFhBV,cAAA;Ed+4BA;;EgB/3BU;IFhBV,0BAAA;Edm5BA;;EgBn4BU;IFhBV,2BAAA;Edu5BA;;EgBv4BU;IFhBV,gBAAA;Ed25BA;;EgB34BU;IFhBV,2BAAA;Ed+5BA;;EgB/4BU;IFhBV,2BAAA;Edm6BA;;EgBn5BU;IFhBV,gBAAA;Edu6BA;;EgBv5BU;IFhBV,2BAAA;Ed26BA;;EgB35BU;IFhBV,2BAAA;Ed+6BA;;EgB/5BU;IFhBV,gBAAA;Edm7BA;;EgBn6BU;IFhBV,2BAAA;Edu7BA;;EgBv6BU;IFhBV,2BAAA;Ed27BA;AACF;Aev7BI;EC3BE;IACE,aAAA;IACA,YAAA;IACA,eAAA;EhBq9BN;;Ecz7BA;IACE,cAAA;IACA,eAAA;Ed47BF;;Ec97BA;IACE,aAAA;IACA,cAAA;Edi8BF;;Ecn8BA;IACE,wBAAA;IACA,yBAAA;Eds8BF;;Ecx8BA;IACE,aAAA;IACA,cAAA;Ed28BF;;Ec78BA;IACE,aAAA;IACA,cAAA;Edg9BF;;Ecl9BA;IACE,wBAAA;IACA,yBAAA;Edq9BF;;EgBx+BI;IFCJ,cAAA;IACA,WAAA;IACA,eAAA;Ed2+BA;;EgBx+BQ;IFbR,uBAAA;IAIA,wBAAA;Eds/BA;;EgB7+BQ;IFbR,wBAAA;IAIA,yBAAA;Ed2/BA;;EgBl/BQ;IFbR,aAAA;IAIA,cAAA;EdggCA;;EgBv/BQ;IFbR,wBAAA;IAIA,yBAAA;EdqgCA;;EgB5/BQ;IFbR,wBAAA;IAIA,yBAAA;Ed0gCA;;EgBjgCQ;IFbR,aAAA;IAIA,cAAA;Ed+gCA;;EgBtgCQ;IFbR,wBAAA;IAIA,yBAAA;EdohCA;;EgB3gCQ;IFbR,wBAAA;IAIA,yBAAA;EdyhCA;;EgBhhCQ;IFbR,aAAA;IAIA,cAAA;Ed8hCA;;EgBrhCQ;IFbR,wBAAA;IAIA,yBAAA;EdmiCA;;EgB1hCQ;IFbR,wBAAA;IAIA,yBAAA;EdwiCA;;EgB/hCQ;IFbR,cAAA;IAIA,eAAA;Ed6iCA;;EgB9hCI;IAAwB,SAAA;EhBkiC5B;;EgBhiCI;IAAuB,SAAA;EhBoiC3B;;EgBjiCM;IAAwB,QADb;EhBsiCjB;;EgBriCM;IAAwB,QADb;EhB0iCjB;;EgBziCM;IAAwB,QADb;EhB8iCjB;;EgB7iCM;IAAwB,QADb;EhBkjCjB;;EgBjjCM;IAAwB,QADb;EhBsjCjB;;EgBrjCM;IAAwB,QADb;EhB0jCjB;;EgBzjCM;IAAwB,QADb;EhB8jCjB;;EgB7jCM;IAAwB,QADb;EhBkkCjB;;EgBjkCM;IAAwB,QADb;EhBskCjB;;EgBrkCM;IAAwB,QADb;EhB0kCjB;;EgBzkCM;IAAwB,SADb;EhB8kCjB;;EgB7kCM;IAAwB,SADb;EhBklCjB;;EgBjlCM;IAAwB,SADb;EhBslCjB;;EgB9kCU;IFhBV,cAAA;EdkmCA;;EgBllCU;IFhBV,0BAAA;EdsmCA;;EgBtlCU;IFhBV,2BAAA;Ed0mCA;;EgB1lCU;IFhBV,gBAAA;Ed8mCA;;EgB9lCU;IFhBV,2BAAA;EdknCA;;EgBlmCU;IFhBV,2BAAA;EdsnCA;;EgBtmCU;IFhBV,gBAAA;Ed0nCA;;EgB1mCU;IFhBV,2BAAA;Ed8nCA;;EgB9mCU;IFhBV,2BAAA;EdkoCA;;EgBlnCU;IFhBV,gBAAA;EdsoCA;;EgBtnCU;IFhBV,2BAAA;Ed0oCA;;EgB1nCU;IFhBV,2BAAA;Ed8oCA;AACF;Ae1oCI;EC3BE;IACE,aAAA;IACA,YAAA;IACA,eAAA;EhBwqCN;;Ec5oCA;IACE,cAAA;IACA,eAAA;Ed+oCF;;EcjpCA;IACE,aAAA;IACA,cAAA;EdopCF;;EctpCA;IACE,wBAAA;IACA,yBAAA;EdypCF;;Ec3pCA;IACE,aAAA;IACA,cAAA;Ed8pCF;;EchqCA;IACE,aAAA;IACA,cAAA;EdmqCF;;EcrqCA;IACE,wBAAA;IACA,yBAAA;EdwqCF;;EgB3rCI;IFCJ,cAAA;IACA,WAAA;IACA,eAAA;Ed8rCA;;EgB3rCQ;IFbR,uBAAA;IAIA,wBAAA;EdysCA;;EgBhsCQ;IFbR,wBAAA;IAIA,yBAAA;Ed8sCA;;EgBrsCQ;IFbR,aAAA;IAIA,cAAA;EdmtCA;;EgB1sCQ;IFbR,wBAAA;IAIA,yBAAA;EdwtCA;;EgB/sCQ;IFbR,wBAAA;IAIA,yBAAA;Ed6tCA;;EgBptCQ;IFbR,aAAA;IAIA,cAAA;EdkuCA;;EgBztCQ;IFbR,wBAAA;IAIA,yBAAA;EduuCA;;EgB9tCQ;IFbR,wBAAA;IAIA,yBAAA;Ed4uCA;;EgBnuCQ;IFbR,aAAA;IAIA,cAAA;EdivCA;;EgBxuCQ;IFbR,wBAAA;IAIA,yBAAA;EdsvCA;;EgB7uCQ;IFbR,wBAAA;IAIA,yBAAA;Ed2vCA;;EgBlvCQ;IFbR,cAAA;IAIA,eAAA;EdgwCA;;EgBjvCI;IAAwB,SAAA;EhBqvC5B;;EgBnvCI;IAAuB,SAAA;EhBuvC3B;;EgBpvCM;IAAwB,QADb;EhByvCjB;;EgBxvCM;IAAwB,QADb;EhB6vCjB;;EgB5vCM;IAAwB,QADb;EhBiwCjB;;EgBhwCM;IAAwB,QADb;EhBqwCjB;;EgBpwCM;IAAwB,QADb;EhBywCjB;;EgBxwCM;IAAwB,QADb;EhB6wCjB;;EgB5wCM;IAAwB,QADb;EhBixCjB;;EgBhxCM;IAAwB,QADb;EhBqxCjB;;EgBpxCM;IAAwB,QADb;EhByxCjB;;EgBxxCM;IAAwB,QADb;EhB6xCjB;;EgB5xCM;IAAwB,SADb;EhBiyCjB;;EgBhyCM;IAAwB,SADb;EhBqyCjB;;EgBpyCM;IAAwB,SADb;EhByyCjB;;EgBjyCU;IFhBV,cAAA;EdqzCA;;EgBryCU;IFhBV,0BAAA;EdyzCA;;EgBzyCU;IFhBV,2BAAA;Ed6zCA;;EgB7yCU;IFhBV,gBAAA;Edi0CA;;EgBjzCU;IFhBV,2BAAA;Edq0CA;;EgBrzCU;IFhBV,2BAAA;Edy0CA;;EgBzzCU;IFhBV,gBAAA;Ed60CA;;EgB7zCU;IFhBV,2BAAA;Edi1CA;;EgBj0CU;IFhBV,2BAAA;Edq1CA;;EgBr0CU;IFhBV,gBAAA;Edy1CA;;EgBz0CU;IFhBV,2BAAA;Ed61CA;;EgB70CU;IFhBV,2BAAA;Edi2CA;AACF;Ae71CI;EC3BE;IACE,aAAA;IACA,YAAA;IACA,eAAA;EhB23CN;;Ec/1CA;IACE,cAAA;IACA,eAAA;Edk2CF;;Ecp2CA;IACE,aAAA;IACA,cAAA;Edu2CF;;Ecz2CA;IACE,wBAAA;IACA,yBAAA;Ed42CF;;Ec92CA;IACE,aAAA;IACA,cAAA;Edi3CF;;Ecn3CA;IACE,aAAA;IACA,cAAA;Eds3CF;;Ecx3CA;IACE,wBAAA;IACA,yBAAA;Ed23CF;;EgB94CI;IFCJ,cAAA;IACA,WAAA;IACA,eAAA;Edi5CA;;EgB94CQ;IFbR,uBAAA;IAIA,wBAAA;Ed45CA;;EgBn5CQ;IFbR,wBAAA;IAIA,yBAAA;Edi6CA;;EgBx5CQ;IFbR,aAAA;IAIA,cAAA;Eds6CA;;EgB75CQ;IFbR,wBAAA;IAIA,yBAAA;Ed26CA;;EgBl6CQ;IFbR,wBAAA;IAIA,yBAAA;Edg7CA;;EgBv6CQ;IFbR,aAAA;IAIA,cAAA;Edq7CA;;EgB56CQ;IFbR,wBAAA;IAIA,yBAAA;Ed07CA;;EgBj7CQ;IFbR,wBAAA;IAIA,yBAAA;Ed+7CA;;EgBt7CQ;IFbR,aAAA;IAIA,cAAA;Edo8CA;;EgB37CQ;IFbR,wBAAA;IAIA,yBAAA;Edy8CA;;EgBh8CQ;IFbR,wBAAA;IAIA,yBAAA;Ed88CA;;EgBr8CQ;IFbR,cAAA;IAIA,eAAA;Edm9CA;;EgBp8CI;IAAwB,SAAA;EhBw8C5B;;EgBt8CI;IAAuB,SAAA;EhB08C3B;;EgBv8CM;IAAwB,QADb;EhB48CjB;;EgB38CM;IAAwB,QADb;EhBg9CjB;;EgB/8CM;IAAwB,QADb;EhBo9CjB;;EgBn9CM;IAAwB,QADb;EhBw9CjB;;EgBv9CM;IAAwB,QADb;EhB49CjB;;EgB39CM;IAAwB,QADb;EhBg+CjB;;EgB/9CM;IAAwB,QADb;EhBo+CjB;;EgBn+CM;IAAwB,QADb;EhBw+CjB;;EgBv+CM;IAAwB,QADb;EhB4+CjB;;EgB3+CM;IAAwB,QADb;EhBg/CjB;;EgB/+CM;IAAwB,SADb;EhBo/CjB;;EgBn/CM;IAAwB,SADb;EhBw/CjB;;EgBv/CM;IAAwB,SADb;EhB4/CjB;;EgBp/CU;IFhBV,cAAA;EdwgDA;;EgBx/CU;IFhBV,0BAAA;Ed4gDA;;EgB5/CU;IFhBV,2BAAA;EdghDA;;EgBhgDU;IFhBV,gBAAA;EdohDA;;EgBpgDU;IFhBV,2BAAA;EdwhDA;;EgBxgDU;IFhBV,2BAAA;Ed4hDA;;EgB5gDU;IFhBV,gBAAA;EdgiDA;;EgBhhDU;IFhBV,2BAAA;EdoiDA;;EgBphDU;IFhBV,2BAAA;EdwiDA;;EgBxhDU;IFhBV,gBAAA;Ed4iDA;;EgB5hDU;IFhBV,2BAAA;EdgjDA;;EgBhiDU;IFhBV,2BAAA;EdojDA;AACF;AiBxmDA;EACE,WAAA;EACA,mBbiIO;EahIP,cbSS;AJimDX;AiBvmDE;;EAEE,gBbkV0B;EajV1B,mBAAA;EACA,6BAAA;AjBymDJ;AiBtmDE;EACE,sBAAA;EACA,gCAAA;AjBwmDJ;AiBrmDE;EACE,6BAAA;AjBumDJ;;AiB7lDE;;EAEE,eb4T0B;AJoyC9B;;AiBvlDA;EACE,yBAAA;AjB0lDF;AiBxlDE;;EAEE,yBAAA;AjB0lDJ;AiBtlDI;;EAEE,wBAAA;AjBwlDN;;AiBllDE;;;;EAIE,SAAA;AjBqlDJ;;AiB5kDE;EACE,qCbwR0B;AJuzC9B;;AM9oDE;EW2EI,cbvEK;EawEL,sCb6QwB;AJ0zC9B;;AkBzpDI;;;EAGE,yBD2F+B;AjBikDrC;AkBxpDM;;;;EAIE,qBDmFyE;AjBukDjF;;AM/pDE;EYiBM,yBAJe;AlBspDvB;AkBhpDQ;;EAEE,yBARa;AlB0pDvB;;AkB7qDI;;;EAGE,yBD2F+B;AjBqlDrC;AkB5qDM;;;;EAIE,qBDmFyE;AjB2lDjF;;AMnrDE;EYiBM,yBAJe;AlB0qDvB;AkBpqDQ;;EAEE,yBARa;AlB8qDvB;;AkBjsDI;;;EAGE,yBD2F+B;AjBymDrC;AkBhsDM;;;;EAIE,qBDmFyE;AjB+mDjF;;AMvsDE;EYiBM,yBAJe;AlB8rDvB;AkBxrDQ;;EAEE,yBARa;AlBksDvB;;AkBrtDI;;;EAGE,yBD2F+B;AjB6nDrC;AkBptDM;;;;EAIE,qBDmFyE;AjBmoDjF;;AM3tDE;EYiBM,yBAJe;AlBktDvB;AkB5sDQ;;EAEE,yBARa;AlBstDvB;;AkBzuDI;;;EAGE,yBD2F+B;AjBipDrC;AkBxuDM;;;;EAIE,qBDmFyE;AjBupDjF;;AM/uDE;EYiBM,yBAJe;AlBsuDvB;AkBhuDQ;;EAEE,yBARa;AlB0uDvB;;AkB7vDI;;;EAGE,yBD2F+B;AjBqqDrC;AkB5vDM;;;;EAIE,qBDmFyE;AjB2qDjF;;AMnwDE;EYiBM,yBAJe;AlB0vDvB;AkBpvDQ;;EAEE,yBARa;AlB8vDvB;;AkBjxDI;;;EAGE,yBD2F+B;AjByrDrC;AkBhxDM;;;;EAIE,qBDmFyE;AjB+rDjF;;AMvxDE;EYiBM,yBAJe;AlB8wDvB;AkBxwDQ;;EAEE,yBARa;AlBkxDvB;;AkBryDI;;;EAGE,yBD2F+B;AjB6sDrC;AkBpyDM;;;;EAIE,qBDmFyE;AjBmtDjF;;AM3yDE;EYiBM,yBAJe;AlBkyDvB;AkB5xDQ;;EAEE,yBARa;AlBsyDvB;;AkBzzDI;;;EAGE,sCd4VwB;AJg+C9B;;AMzzDE;EYiBM,sCAJe;AlBgzDvB;AkB1yDQ;;EAEE,sCARa;AlBozDvB;;AiB5tDI;EACE,Wb3GK;Ea4GL,yBbpGK;EaqGL,qBbgQwB;AJ+9C9B;AiB1tDI;EACE,cb5GK;Ea6GL,yBblHK;EamHL,qBblHK;AJ80DX;;AiBvtDA;EACE,Wb3HS;Ea4HT,yBbpHS;AJ80DX;AiBxtDE;;;EAGE,qBb4O0B;AJ8+C9B;AiBvtDE;EACE,SAAA;AjBytDJ;AiBrtDI;EACE,2CbgOwB;AJu/C9B;AM51DE;EW4IM,WbjJG;EakJH,4Cb0NsB;AJy/C9B;;AenyDI;EEiGA;IAEI,cAAA;IACA,WAAA;IACA,gBAAA;IACA,iCAAA;EjBqsDN;EiBlsDM;IACE,SAAA;EjBosDR;AACF;Ae/yDI;EEiGA;IAEI,cAAA;IACA,WAAA;IACA,gBAAA;IACA,iCAAA;EjBgtDN;EiB7sDM;IACE,SAAA;EjB+sDR;AACF;Ae1zDI;EEiGA;IAEI,cAAA;IACA,WAAA;IACA,gBAAA;IACA,iCAAA;EjB2tDN;EiBxtDM;IACE,SAAA;EjB0tDR;AACF;Aer0DI;EEiGA;IAEI,cAAA;IACA,WAAA;IACA,gBAAA;IACA,iCAAA;EjBsuDN;EiBnuDM;IACE,SAAA;EjBquDR;AACF;AiB/uDI;EAEI,cAAA;EACA,WAAA;EACA,gBAAA;EACA,iCAAA;AjBgvDR;AiB7uDQ;EACE,SAAA;AjB+uDV;;AmB55DA;EACE,cAAA;EACA,WAAA;EACA,mCf0esC;EezetC,yBAAA;EdqHI,eAtCa;Ec5EjB,gBfkR4B;EejR5B,gBfsR4B;EerR5B,cfDS;EeET,sBfTS;EeUT,4BAAA;EACA,yBAAA;ERAE,sBAAA;ESFE,wEDQJ;AnB05DF;AoB95DM;EDdN;ICeQ,gBAAA;EpBi6DN;AACF;AmB55DE;EACE,6BAAA;EACA,SAAA;AnB85DJ;AmB15DE;EACE,kBAAA;EACA,0BAAA;AnB45DJ;AqBl7DE;EACE,cAAA;EACA,sBjBRO;EiBSP,qBjBqdoC;EiBpdpC,UAAA;EAKE,gDjBoXwB;AJ4jD9B;AmB55DE;EACE,cf9BO;EegCP,UAAA;AnB65DJ;AmBh6DE;EACE,cf9BO;EegCP,UAAA;AnB65DJ;AmBh6DE;EACE,cf9BO;EegCP,UAAA;AnB65DJ;AmBr5DE;EAEE,yBf9CO;EegDP,UAAA;AnBq5DJ;;AmB74DE;;;;EACE,wBAAA;KAAA,qBAAA;UAAA,gBAAA;AnBm5DJ;;AmB94DE;EAME,cf/DO;EegEP,sBfvEO;AJm9DX;;AmBv4DA;;EAEE,cAAA;EACA,WAAA;AnB04DF;;AmBh4DA;EACE,iCAAA;EACA,oCAAA;EACA,gBAAA;Ed3BE,kBAAA;Ec6BF,gBf+L4B;AJosD9B;;AmBh4DA;EACE,+BAAA;EACA,kCAAA;EdqBI,kBAtCa;EcmBjB,gBf6H4B;AJswD9B;;AmBh4DA;EACE,gCAAA;EACA,mCAAA;EdcI,mBAtCa;Ec0BjB,gBfuH4B;AJ4wD9B;;AmB13DA;EACE,cAAA;EACA,WAAA;EACA,mBAAA;EACA,gBAAA;EdDI,eAtCa;EcyCjB,gBfkK4B;EejK5B,cfnHS;EeoHT,6BAAA;EACA,yBAAA;EACA,mBAAA;AnB63DF;AmB33DE;EAEE,gBAAA;EACA,eAAA;AnB43DJ;;AmBh3DA;EACE,kCf4VsC;Ee3VtC,uBAAA;Ed1BI,mBAtCa;EckEjB,gBf+E4B;EOxN1B,qBAAA;AX6/DJ;;AmBh3DA;EACE,gCfqVsC;EepVtC,oBAAA;EdlCI,kBAtCa;Ec0EjB,gBfsE4B;EOvN1B,qBAAA;AXqgEJ;;AmB92DE;EAEE,YAAA;AnBg3DJ;;AmB52DA;EACE,YAAA;AnB+2DF;;AmBv2DA;EACE,mBf0UsC;AJgiDxC;;AmBv2DA;EACE,cAAA;EACA,mBf2TsC;AJ+iDxC;;AmBl2DA;EACE,aAAA;EACA,eAAA;EACA,kBAAA;EACA,iBAAA;AnBq2DF;AmBn2DE;;EAEE,kBAAA;EACA,iBAAA;AnBq2DJ;;AmB51DA;EACE,kBAAA;EACA,cAAA;EACA,qBfgSsC;AJ+jDxC;;AmB51DA;EACE,kBAAA;EACA,kBf4RsC;Ee3RtC,qBAAA;AnB+1DF;AmB51DE;EAEE,cfzNO;AJsjEX;;AmBz1DA;EACE,gBAAA;AnB41DF;;AmBz1DA;EACE,oBAAA;EACA,mBAAA;EACA,eAAA;EACA,qBf6QsC;AJ+kDxC;AmBz1DE;EACE,gBAAA;EACA,aAAA;EACA,uBfwQoC;EevQpC,cAAA;AnB21DJ;;AqBxiEE;EACE,aAAA;EACA,WAAA;EACA,mBjB0coC;ECjbpC,cAAA;EgBvBA,cFqNqC;AnBs1DzC;;AqBxiEE;EACE,kBAAA;EACA,SAAA;EACA,OAAA;EACA,UAAA;EACA,aAAA;EACA,eAAA;EACA,uBAAA;EACA,kBAAA;EhBmEE,mBAtCa;EgB3Bf,gBjBsO0B;EiBrO1B,WAAA;EACA,wCAAA;EV9CA,sBAAA;AX0lEJ;AqBviEI;EAEE,SAAA;ArBwiEN;;AqBniEI;;;;EAEE,cAAA;ArBwiEN;;AqBtlEI;EAoDE,qBFkLmC;EE/KjC,oCjBwZgC;EiBvZhC,iRAAA;EACA,4BAAA;EACA,2DAAA;EACA,gEAAA;ArBoiER;AqBjiEM;EACE,qBFuKiC;EEtKjC,gDAAA;ArBmiER;;AqBnmEI;EAyEI,oCjBsYgC;EiBrYhC,kFAAA;ArB8hER;;AqBxmEI;EAiFE,qBFqJmC;EElJjC,uCjBudoC;EiBtdpC,ujBAAA;ArByhER;AqBthEM;EACE,qBF6IiC;EE5IjC,gDAAA;ArBwhER;;AqBjhEM;EACE,cFoIiC;AnBg5DzC;AqBjhEM;;;EAEE,cAAA;ArBohER;;AqB7gEM;EACE,cFuHiC;AnBy5DzC;AqB9gEQ;EACE,qBFoH+B;AnB45DzC;AqB3gEQ;EACE,qBAAA;EClJN,yBDmJ2B;ArB6gE/B;AqBxgEQ;EACE,gDAAA;ArB0gEV;AqBvgEQ;EACE,qBAVqB;ArBmhE/B;;AqBhgEM;EACE,qBApBuB;ArBuhE/B;AqB//DQ;EACE,qBAzBqB;EA0BrB,gDAAA;ArBigEV;;AqBxoEE;EACE,aAAA;EACA,WAAA;EACA,mBjB0coC;ECjbpC,cAAA;EgBvBA,cFqNqC;AnBs7DzC;;AqBxoEE;EACE,kBAAA;EACA,SAAA;EACA,OAAA;EACA,UAAA;EACA,aAAA;EACA,eAAA;EACA,uBAAA;EACA,kBAAA;EhBmEE,mBAtCa;EgB3Bf,gBjBsO0B;EiBrO1B,WAAA;EACA,wCAAA;EV9CA,sBAAA;AX0rEJ;AqBvoEI;EAEE,SAAA;ArBwoEN;;AqBnoEI;;;;EAEE,cAAA;ArBwoEN;;AqBtrEI;EAoDE,qBFkLmC;EE/KjC,oCjBwZgC;EiBvZhC,4UAAA;EACA,4BAAA;EACA,2DAAA;EACA,gEAAA;ArBooER;AqBjoEM;EACE,qBFuKiC;EEtKjC,gDAAA;ArBmoER;;AqBnsEI;EAyEI,oCjBsYgC;EiBrYhC,kFAAA;ArB8nER;;AqBxsEI;EAiFE,qBFqJmC;EElJjC,uCjBudoC;EiBtdpC,knBAAA;ArBynER;AqBtnEM;EACE,qBF6IiC;EE5IjC,gDAAA;ArBwnER;;AqBjnEM;EACE,cFoIiC;AnBg/DzC;AqBjnEM;;;EAEE,cAAA;ArBonER;;AqB7mEM;EACE,cFuHiC;AnBy/DzC;AqB9mEQ;EACE,qBFoH+B;AnB4/DzC;AqB3mEQ;EACE,qBAAA;EClJN,yBDmJ2B;ArB6mE/B;AqBxmEQ;EACE,gDAAA;ArB0mEV;AqBvmEQ;EACE,qBAVqB;ArBmnE/B;;AqBhmEM;EACE,qBApBuB;ArBunE/B;AqB/lEQ;EACE,qBAzBqB;EA0BrB,gDAAA;ArBimEV;;AmBlgEA;EACE,aAAA;EACA,mBAAA;EACA,mBAAA;AnBqgEF;AmBhgEE;EACE,WAAA;AnBkgEJ;AejuEI;EIoOA;IACE,aAAA;IACA,mBAAA;IACA,uBAAA;IACA,gBAAA;EnBggEJ;EmB5/DE;IACE,aAAA;IACA,cAAA;IACA,mBAAA;IACA,mBAAA;IACA,gBAAA;EnB8/DJ;EmB1/DE;IACE,qBAAA;IACA,WAAA;IACA,sBAAA;EnB4/DJ;EmBx/DE;IACE,qBAAA;EnB0/DJ;EmBv/DE;;IAEE,WAAA;EnBy/DJ;EmBp/DE;IACE,aAAA;IACA,mBAAA;IACA,uBAAA;IACA,WAAA;IACA,eAAA;EnBs/DJ;EmBp/DE;IACE,kBAAA;IACA,cAAA;IACA,aAAA;IACA,qBf+KkC;Ie9KlC,cAAA;EnBs/DJ;EmBn/DE;IACE,mBAAA;IACA,uBAAA;EnBq/DJ;EmBn/DE;IACE,gBAAA;EnBq/DJ;AACF;;AuBv0EA;EACE,qBAAA;EAEA,gBnBsR4B;EmBrR5B,cnBMS;EmBLT,kBAAA;EAGA,sBAAA;EACA,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;EACA,6BAAA;EACA,6BAAA;ECuFA,yBAAA;EnBuBI,eAtCa;EmBiBjB,gBpB0L4B;EOlR1B,sBAAA;ESFE,qIGGJ;AvB00EF;AoBz0EM;EGdN;IHeQ,gBAAA;EpB40EN;AACF;AMt1EE;EiBUE,cnBNO;EmBOP,qBAAA;AvB+0EJ;AuB50EE;EAEE,UAAA;EACA,gDnB6W0B;AJg+D9B;AuBz0EE;EAEE,anBiZ0B;AJy7D9B;AuBt0EE;EACE,eAAA;AvBw0EJ;AuB1zEA;;EAEE,oBAAA;AvB4zEF;;AuBnzEE;EC3DA,WAAA;EFAE,yBlBsEW;EoBpEb,qBpBoEa;AJ8yEf;AM92EE;EkBAE,WAAA;EFNA,yBED2D;EAS3D,qBATqG;AxB03EzG;AwB92EE;EAEE,WAAA;EFbA,yBED2D;EAgB3D,qBAhBqG;EAqBnG,gDAAA;AxB22EN;AwBt2EE;EAEE,WAAA;EACA,yBpB0CW;EoBzCX,qBpByCW;AJ8zEf;AwBh2EE;EAGE,WAAA;EACA,yBAzC+I;EA6C/I,qBA7CyL;AxB04E7L;AwB31EI;EAKI,gDAAA;AxBy1ER;;AuBj1EE;EC3DA,WAAA;EFAE,yBlBsEW;EoBpEb,qBpBoEa;AJ40Ef;AM54EE;EkBAE,WAAA;EFNA,yBED2D;EAS3D,qBATqG;AxBw5EzG;AwB54EE;EAEE,WAAA;EFbA,yBED2D;EAgB3D,qBAhBqG;EAqBnG,iDAAA;AxBy4EN;AwBp4EE;EAEE,WAAA;EACA,yBpB0CW;EoBzCX,qBpByCW;AJ41Ef;AwB93EE;EAGE,WAAA;EACA,yBAzC+I;EA6C/I,qBA7CyL;AxBw6E7L;AwBz3EI;EAKI,iDAAA;AxBu3ER;;AuB/2EE;EC3DA,WAAA;EFAE,yBlBsEW;EoBpEb,qBpBoEa;AJ02Ef;AM16EE;EkBAE,WAAA;EFNA,yBED2D;EAS3D,qBATqG;AxBs7EzG;AwB16EE;EAEE,WAAA;EFbA,yBED2D;EAgB3D,qBAhBqG;EAqBnG,+CAAA;AxBu6EN;AwBl6EE;EAEE,WAAA;EACA,yBpB0CW;EoBzCX,qBpByCW;AJ03Ef;AwB55EE;EAGE,WAAA;EACA,yBAzC+I;EA6C/I,qBA7CyL;AxBs8E7L;AwBv5EI;EAKI,+CAAA;AxBq5ER;;AuB74EE;EC3DA,WAAA;EFAE,yBlBsEW;EoBpEb,qBpBoEa;AJw4Ef;AMx8EE;EkBAE,WAAA;EFNA,yBED2D;EAS3D,qBATqG;AxBo9EzG;AwBx8EE;EAEE,WAAA;EFbA,yBED2D;EAgB3D,qBAhBqG;EAqBnG,gDAAA;AxBq8EN;AwBh8EE;EAEE,WAAA;EACA,yBpB0CW;EoBzCX,qBpByCW;AJw5Ef;AwB17EE;EAGE,WAAA;EACA,yBAzC+I;EA6C/I,qBA7CyL;AxBo+E7L;AwBr7EI;EAKI,gDAAA;AxBm7ER;;AuB36EE;EC3DA,cAAA;EFAE,yBlBsEW;EoBpEb,qBpBoEa;AJs6Ef;AMt+EE;EkBAE,cAAA;EFNA,yBED2D;EAS3D,qBATqG;AxBk/EzG;AwBt+EE;EAEE,cAAA;EFbA,yBED2D;EAgB3D,qBAhBqG;EAqBnG,gDAAA;AxBm+EN;AwB99EE;EAEE,cAAA;EACA,yBpB0CW;EoBzCX,qBpByCW;AJs7Ef;AwBx9EE;EAGE,cAAA;EACA,yBAzC+I;EA6C/I,qBA7CyL;AxBkgF7L;AwBn9EI;EAKI,gDAAA;AxBi9ER;;AuBz8EE;EC3DA,WAAA;EFAE,yBlBsEW;EoBpEb,qBpBoEa;AJo8Ef;AMpgFE;EkBAE,WAAA;EFNA,yBED2D;EAS3D,qBATqG;AxBghFzG;AwBpgFE;EAEE,WAAA;EFbA,yBED2D;EAgB3D,qBAhBqG;EAqBnG,+CAAA;AxBigFN;AwB5/EE;EAEE,WAAA;EACA,yBpB0CW;EoBzCX,qBpByCW;AJo9Ef;AwBt/EE;EAGE,WAAA;EACA,yBAzC+I;EA6C/I,qBA7CyL;AxBgiF7L;AwBj/EI;EAKI,+CAAA;AxB++ER;;AuBv+EE;EC3DA,cAAA;EFAE,yBlBsEW;EoBpEb,qBpBoEa;AJk+Ef;AMliFE;EkBAE,cAAA;EFNA,yBED2D;EAS3D,qBATqG;AxB8iFzG;AwBliFE;EAEE,cAAA;EFbA,yBED2D;EAgB3D,qBAhBqG;EAqBnG,iDAAA;AxB+hFN;AwB1hFE;EAEE,cAAA;EACA,yBpB0CW;EoBzCX,qBpByCW;AJk/Ef;AwBphFE;EAGE,cAAA;EACA,yBAzC+I;EA6C/I,qBA7CyL;AxB8jF7L;AwB/gFI;EAKI,iDAAA;AxB6gFR;;AuBrgFE;EC3DA,WAAA;EFAE,yBlBsEW;EoBpEb,qBpBoEa;AJggFf;AMhkFE;EkBAE,WAAA;EFNA,yBED2D;EAS3D,qBATqG;AxB4kFzG;AwBhkFE;EAEE,WAAA;EFbA,yBED2D;EAgB3D,qBAhBqG;EAqBnG,8CAAA;AxB6jFN;AwBxjFE;EAEE,WAAA;EACA,yBpB0CW;EoBzCX,qBpByCW;AJghFf;AwBljFE;EAGE,WAAA;EACA,yBAzC+I;EA6C/I,qBA7CyL;AxB4lF7L;AwB7iFI;EAKI,8CAAA;AxB2iFR;;AuB7hFE;ECPA,cpBYa;EoBXb,qBpBWa;AJ6hFf;AM7lFE;EkBwDE,WALgD;EAMhD,yBpBOW;EoBNX,qBpBMW;AJkiFf;AwBriFE;EAEE,+CAAA;AxBsiFJ;AwBniFE;EAEE,cpBJW;EoBKX,6BAAA;AxBoiFJ;AwBjiFE;EAGE,WAAA;EACA,yBpBZW;EoBaX,qBpBbW;AJ8iFf;AwB/hFI;EAKI,+CAAA;AxB6hFR;;AuBtjFE;ECPA,cpBYa;EoBXb,qBpBWa;AJsjFf;AMtnFE;EkBwDE,WALgD;EAMhD,yBpBOW;EoBNX,qBpBMW;AJ2jFf;AwB9jFE;EAEE,iDAAA;AxB+jFJ;AwB5jFE;EAEE,cpBJW;EoBKX,6BAAA;AxB6jFJ;AwB1jFE;EAGE,WAAA;EACA,yBpBZW;EoBaX,qBpBbW;AJukFf;AwBxjFI;EAKI,iDAAA;AxBsjFR;;AuB/kFE;ECPA,cpBYa;EoBXb,qBpBWa;AJ+kFf;AM/oFE;EkBwDE,WALgD;EAMhD,yBpBOW;EoBNX,qBpBMW;AJolFf;AwBvlFE;EAEE,+CAAA;AxBwlFJ;AwBrlFE;EAEE,cpBJW;EoBKX,6BAAA;AxBslFJ;AwBnlFE;EAGE,WAAA;EACA,yBpBZW;EoBaX,qBpBbW;AJgmFf;AwBjlFI;EAKI,+CAAA;AxB+kFR;;AuBxmFE;ECPA,cpBYa;EoBXb,qBpBWa;AJwmFf;AMxqFE;EkBwDE,WALgD;EAMhD,yBpBOW;EoBNX,qBpBMW;AJ6mFf;AwBhnFE;EAEE,gDAAA;AxBinFJ;AwB9mFE;EAEE,cpBJW;EoBKX,6BAAA;AxB+mFJ;AwB5mFE;EAGE,WAAA;EACA,yBpBZW;EoBaX,qBpBbW;AJynFf;AwB1mFI;EAKI,gDAAA;AxBwmFR;;AuBjoFE;ECPA,cpBYa;EoBXb,qBpBWa;AJioFf;AMjsFE;EkBwDE,cALgD;EAMhD,yBpBOW;EoBNX,qBpBMW;AJsoFf;AwBzoFE;EAEE,+CAAA;AxB0oFJ;AwBvoFE;EAEE,cpBJW;EoBKX,6BAAA;AxBwoFJ;AwBroFE;EAGE,cAAA;EACA,yBpBZW;EoBaX,qBpBbW;AJkpFf;AwBnoFI;EAKI,+CAAA;AxBioFR;;AuB1pFE;ECPA,cpBYa;EoBXb,qBpBWa;AJ0pFf;AM1tFE;EkBwDE,WALgD;EAMhD,yBpBOW;EoBNX,qBpBMW;AJ+pFf;AwBlqFE;EAEE,+CAAA;AxBmqFJ;AwBhqFE;EAEE,cpBJW;EoBKX,6BAAA;AxBiqFJ;AwB9pFE;EAGE,WAAA;EACA,yBpBZW;EoBaX,qBpBbW;AJ2qFf;AwB5pFI;EAKI,+CAAA;AxB0pFR;;AuBnrFE;ECPA,cpBYa;EoBXb,qBpBWa;AJmrFf;AMnvFE;EkBwDE,cALgD;EAMhD,yBpBOW;EoBNX,qBpBMW;AJwrFf;AwB3rFE;EAEE,iDAAA;AxB4rFJ;AwBzrFE;EAEE,cpBJW;EoBKX,6BAAA;AxB0rFJ;AwBvrFE;EAGE,cAAA;EACA,yBpBZW;EoBaX,qBpBbW;AJosFf;AwBrrFI;EAKI,iDAAA;AxBmrFR;;AuB5sFE;ECPA,cpBYa;EoBXb,qBpBWa;AJ4sFf;AM5wFE;EkBwDE,WALgD;EAMhD,yBpBOW;EoBNX,qBpBMW;AJitFf;AwBptFE;EAEE,8CAAA;AxBqtFJ;AwBltFE;EAEE,cpBJW;EoBKX,6BAAA;AxBmtFJ;AwBhtFE;EAGE,WAAA;EACA,yBpBZW;EoBaX,qBpBbW;AJ6tFf;AwB9sFI;EAKI,8CAAA;AxB4sFR;;AuB1tFA;EACE,gBnB4M4B;EmB3M5B,cnB2FwC;EmB1FxC,qBnB2FwC;AJkoF1C;AMtyFE;EiB4EE,cnByFsC;EmBxFtC,0BnByFsC;AJooF1C;AuB1tFE;EAEE,0BnBoFsC;AJuoF1C;AuBxtFE;EAEE,cnBtFO;EmBuFP,oBAAA;AvBytFJ;;AuB9sFA;ECPE,oBAAA;EnBuBI,kBAtCa;EmBiBjB,gBpB+H4B;EOvN1B,qBAAA;AXkzFJ;;AuBjtFA;ECXE,uBAAA;EnBuBI,mBAtCa;EmBiBjB,gBpBgI4B;EOxN1B,qBAAA;AXyzFJ;;AuB/sFA;EACE,cAAA;EACA,WAAA;AvBktFF;AuB/sFE;EACE,kBnBuT0B;AJ05E9B;;AuBzsFE;;;EACE,WAAA;AvB8sFJ;;AyBz1FA;ELgBM,gCKfJ;AzB41FF;AoBz0FM;EKpBN;ILqBQ,gBAAA;EpB40FN;AACF;AyB/1FE;EACE,UAAA;AzBi2FJ;;AyB51FE;EACE,aAAA;AzB+1FJ;;AyB31FA;EACE,kBAAA;EACA,SAAA;EACA,gBAAA;ELDI,6BKEJ;AzB81FF;AoB51FM;EKNN;ILOQ,gBAAA;EpB+1FN;AACF;;A0Bp3FA;;;;EAIE,kBAAA;A1Bu3FF;;A0Bp3FA;EACE,mBAAA;A1Bu3FF;A2Bn2FI;EACE,qBAAA;EACA,oBvB+NwB;EuB9NxB,uBvB6NwB;EuB5NxB,WAAA;EAhCJ,uBAAA;EACA,qCAAA;EACA,gBAAA;EACA,oCAAA;A3Bs4FF;A2Bj1FI;EACE,cAAA;A3Bm1FN;;A0B73FA;EACE,kBAAA;EACA,SAAA;EACA,OAAA;EACA,atBwpBkC;EsBvpBlC,aAAA;EACA,WAAA;EACA,gBtBguBkC;EsB/tBlC,iBAAA;EACA,oBAAA;ErBsGI,eAtCa;EqB9DjB,ctBXS;EsBYT,gBAAA;EACA,gBAAA;EACA,sBtBvBS;EsBwBT,4BAAA;EACA,qCAAA;EfdE,sBAAA;AX+4FJ;;A0Bx3FI;EACE,WAAA;EACA,OAAA;A1B23FN;;A0Bx3FI;EACE,QAAA;EACA,UAAA;A1B23FN;;Ae/2FI;EWnBA;IACE,WAAA;IACA,OAAA;E1Bs4FJ;;E0Bn4FE;IACE,QAAA;IACA,UAAA;E1Bs4FJ;AACF;Ae33FI;EWnBA;IACE,WAAA;IACA,OAAA;E1Bi5FJ;;E0B94FE;IACE,QAAA;IACA,UAAA;E1Bi5FJ;AACF;Aet4FI;EWnBA;IACE,WAAA;IACA,OAAA;E1B45FJ;;E0Bz5FE;IACE,QAAA;IACA,UAAA;E1B45FJ;AACF;Aej5FI;EWnBA;IACE,WAAA;IACA,OAAA;E1Bu6FJ;;E0Bp6FE;IACE,QAAA;IACA,UAAA;E1Bu6FJ;AACF;A0Bh6FE;EACE,SAAA;EACA,YAAA;EACA,aAAA;EACA,uBtB8rBgC;AJouEpC;A2Bj8FI;EACE,qBAAA;EACA,oBvB+NwB;EuB9NxB,uBvB6NwB;EuB5NxB,WAAA;EAzBJ,aAAA;EACA,qCAAA;EACA,0BAAA;EACA,oCAAA;A3B69FF;A2B/6FI;EACE,cAAA;A3Bi7FN;;A0Bt6FE;EACE,MAAA;EACA,WAAA;EACA,UAAA;EACA,aAAA;EACA,qBtBgrBgC;AJyvEpC;A2Bt9FI;EACE,qBAAA;EACA,oBvB+NwB;EuB9NxB,uBvB6NwB;EuB5NxB,WAAA;EAlBJ,mCAAA;EACA,eAAA;EACA,sCAAA;EACA,wBAAA;A3B2+FF;A2Bp8FI;EACE,cAAA;A3Bs8FN;A0Bj7FI;EACE,iBAAA;A1Bm7FN;;A0B76FE;EACE,MAAA;EACA,WAAA;EACA,UAAA;EACA,aAAA;EACA,sBtB+pBgC;AJixEpC;A2B9+FI;EACE,qBAAA;EACA,oBvB+NwB;EuB9NxB,uBvB6NwB;EuB5NxB,WAAA;A3Bg/FN;A2Br+FM;EACE,aAAA;A3Bu+FR;A2Bp+FM;EACE,qBAAA;EACA,qBvB4MsB;EuB3MtB,uBvB0MsB;EuBzMtB,WAAA;EA9BN,mCAAA;EACA,yBAAA;EACA,sCAAA;A3BqgGF;A2Bp+FI;EACE,cAAA;A3Bs+FN;A0Bh8FI;EACE,iBAAA;A1Bk8FN;;A0B17FE;EAIE,WAAA;EACA,YAAA;A1B07FJ;;A0Br7FA;EE9GE,SAAA;EACA,gBAAA;EACA,gBAAA;EACA,6BAAA;A5BuiGF;;A0Br7FA;EACE,cAAA;EACA,WAAA;EACA,uBAAA;EACA,WAAA;EACA,gBtBgK4B;EsB/J5B,ctBhHS;EsBiHT,mBAAA;EAEA,mBAAA;EACA,6BAAA;EACA,SAAA;A1Bu7FF;AM5iGE;EoBoIE,ctBmnBgC;EsBlnBhC,qBAAA;EJ/IA,yBlBGO;AJwjGX;A0Bx6FE;EAEE,WtBpJO;EsBqJP,qBAAA;EJtJA,yBlBoP0B;AJ40F9B;A0Bt6FE;EAEE,ctBtJO;EsBuJP,oBAAA;EACA,6BAAA;A1Bu6FJ;;A0B/5FA;EACE,cAAA;A1Bk6FF;;A0B95FA;EACE,cAAA;EACA,sBtBgmBkC;EsB/lBlC,gBAAA;ErBrDI,mBAtCa;EqB6FjB,ctBzKS;EsB0KT,mBAAA;A1Bi6FF;;A0B75FA;EACE,cAAA;EACA,uBAAA;EACA,ctB9KS;AJ8kGX;;A6B3lGA;;EAEE,kBAAA;EACA,oBAAA;EACA,sBAAA;A7B8lGF;A6B5lGE;;EACE,kBAAA;EACA,cAAA;A7B+lGJ;AM9lGE;;EuBII,UAAA;A7B8lGN;A6B5lGI;;;;EAGE,UAAA;A7B+lGN;;A6BzlGA;EACE,aAAA;EACA,eAAA;EACA,2BAAA;A7B4lGF;A6B1lGE;EACE,WAAA;A7B4lGJ;;A6BtlGE;;EAEE,iBAAA;A7BylGJ;A6BrlGE;;ElBXE,0BAAA;EACA,6BAAA;AXomGJ;A6BrlGE;;ElBFE,yBAAA;EACA,4BAAA;AX2lGJ;;A6BxkGA;EACE,wBAAA;EACA,uBAAA;A7B2kGF;A6BzkGE;EAGE,cAAA;A7BykGJ;A6BtkGE;EACE,eAAA;A7BwkGJ;;A6BpkGA;EACE,uBAAA;EACA,sBAAA;A7BukGF;;A6BpkGA;EACE,sBAAA;EACA,qBAAA;A7BukGF;;A6BnjGA;EACE,sBAAA;EACA,uBAAA;EACA,uBAAA;A7BsjGF;A6BpjGE;;EAEE,WAAA;A7BsjGJ;A6BnjGE;;EAEE,gBAAA;A7BqjGJ;A6BjjGE;;ElBrFE,6BAAA;EACA,4BAAA;AX0oGJ;A6BjjGE;;ElBxGE,yBAAA;EACA,0BAAA;AX6pGJ;;A6BliGE;;EAEE,gBAAA;A7BqiGJ;A6BniGI;;;;EAEE,kBAAA;EACA,sBAAA;EACA,oBAAA;A7BuiGN;;A8BhsGA;EACE,kBAAA;EACA,aAAA;EACA,eAAA;EACA,oBAAA;EACA,WAAA;A9BmsGF;A8BjsGE;;;;EAIE,kBAAA;EACA,cAAA;EACA,SAAA;EACA,YAAA;EACA,gBAAA;A9BmsGJ;A8BjsGI;;;;;;;;;;;;EAGE,iBAAA;A9B4sGN;A8BvsGE;;;EAGE,UAAA;A9BysGJ;A8BrsGE;EACE,UAAA;A9BusGJ;A8BlsGI;;EnBIA,yBAAA;EACA,4BAAA;AXksGJ;A8BlsGE;EACE,aAAA;EACA,mBAAA;A9BosGJ;A8BlsGI;EnBLA,yBAAA;EACA,4BAAA;AX0sGJ;A8BjsGI;;;EnBxBA,0BAAA;EACA,6BAAA;AX8tGJ;A8B/rGI;;;EnBhCA,0BAAA;EACA,6BAAA;AXouGJ;;A8BtrGA;;EAEE,aAAA;A9ByrGF;A8BprGE;;EACE,kBAAA;EACA,UAAA;A9BurGJ;A8BrrGI;;EACE,UAAA;A9BwrGN;A8BprGE;;;;;;;;EAIE,iBAAA;A9B0rGJ;;A8BtrGA;EAAuB,kBAAA;A9B0rGvB;;A8BzrGA;EAAsB,iBAAA;A9B6rGtB;;A8BrrGA;EACE,aAAA;EACA,mBAAA;EACA,yBAAA;EACA,gBAAA;EzBSI,eAtCa;EyB+BjB,gB1BuK4B;E0BtK5B,gB1B2K4B;E0B1K5B,c1B5GS;E0B6GT,kBAAA;EACA,mBAAA;EACA,yB1BpHS;E0BqHT,yBAAA;EnB5GE,sBAAA;AXqyGJ;A8BrrGE;;EAEE,aAAA;A9BurGJ;;A8B7qGA;;EAEE,gC1BqWsC;AJ20FxC;;A8B7qGA;;;;;;EAME,oBAAA;EzB1BI,kBAtCa;EyBkEjB,gB1B8E4B;EOvN1B,qBAAA;AX0zGJ;;A8B7qGA;;EAEE,kC1BmVsC;AJ61FxC;;A8B7qGA;;;;;;EAME,uBAAA;EzB3CI,mBAtCa;EyBmFjB,gB1B8D4B;EOxN1B,qBAAA;AX20GJ;;A8B7qGA;;EAEE,sBAAA;A9BgrGF;;A8BrqGA;;;;;;;;EnB3JI,0BAAA;EACA,6BAAA;AX20GJ;;A8BtqGA;;;;;;EnBxJI,yBAAA;EACA,4BAAA;AXu0GJ;;A+B/2GA;EACE,kBAAA;EACA,UAAA;EACA,cAAA;EACA,kBAAA;EACA,oBAAA;EACA,iCAAA;UAAA,mBAAA;A/Bk3GF;;A+B/2GA;EACE,oBAAA;EACA,kB3BwfsC;AJ03FxC;;A+B/2GA;EACE,kBAAA;EACA,OAAA;EACA,WAAA;EACA,W3BofsC;E2BnftC,eAAA;EACA,UAAA;A/Bk3GF;A+Bh3GE;EACE,W3BzBO;E2B0BP,qB3ByN0B;EkBpP1B,yBlBoP0B;AJ0pG9B;A+B92GE;EAKI,gD3B+VwB;AJ6gG9B;A+Bx2GE;EACE,qB3BqboC;AJq7FxC;A+Bv2GE;EACE,W3B7CO;E2B8CP,yB3Bif4C;E2Bhf5C,qB3Bgf4C;AJy3FhD;A+Bl2GI;EACE,c3BjDK;AJq5GX;A+Bl2GM;EACE,yB3BxDG;AJ45GX;;A+B11GA;EACE,kBAAA;EACA,gBAAA;EAEA,mBAAA;A/B41GF;A+Bx1GE;EACE,kBAAA;EACA,YAAA;EACA,aAAA;EACA,cAAA;EACA,W3BuboC;E2BtbpC,Y3BsboC;E2BrbpC,oBAAA;EACA,WAAA;EACA,sB3BrFO;E2BsFP,yBAAA;A/B01GJ;A+Br1GE;EACE,kBAAA;EACA,YAAA;EACA,aAAA;EACA,cAAA;EACA,W3BwaoC;E2BvapC,Y3BuaoC;E2BtapC,WAAA;EACA,iCAAA;A/Bu1GJ;;A+B70GE;EpBlGE,sBAAA;AXm7GJ;A+B50GI;EACE,kOAAA;A/B80GN;A+Bz0GI;EACE,qB3B0HwB;EkBpP1B,yBlBoP0B;AJktG9B;A+Bx0GI;EACE,+KAAA;A/B00GN;A+Br0GI;ETpIA,wClBwhB4C;AJo7FhD;A+Br0GI;ETvIA,wClBwhB4C;AJu7FhD;;A+B7zGE;EAEE,kB3ByZ4C;AJs6FhD;A+B3zGI;EACE,8KAAA;A/B6zGN;A+BxzGI;ET9JA,wClBwhB4C;AJi8FhD;;A+BhzGA;EACE,qBAAA;A/BmzGF;A+BhzGI;EACE,cAAA;EACA,c3BiY0C;E2BhY1C,mBAAA;EAEA,qB3B+X0C;AJk7FhD;A+B9yGI;EACE,wBAAA;EACA,0BAAA;EACA,uB3B0X0C;E2BzX1C,wB3ByX0C;E2BxX1C,yB3BpLK;E2BsLL,qB3BqX0C;EgBviB1C,yIWmLA;A/B+yGN;AoB99GM;EWuKF;IXtKI,gBAAA;EpBi+GN;AACF;A+B/yGI;EACE,sB3BlMK;E2BmML,8BAAA;A/BizGN;A+B5yGI;ETzMA,wClBwhB4C;AJg+FhD;;A+BlyGA;EACE,qBAAA;EACA,WAAA;EACA,mC3BoRsC;E2BnRtC,0CAAA;E1BjGI,eAtCa;E0B0IjB,gB3B4D4B;E2B3D5B,gB3BgE4B;E2B/D5B,c3BvNS;E2BwNT,sBAAA;EACA,uOAAA;EACA,yBAAA;EpBtNE,sBAAA;EoByNF,wBAAA;KAAA,qBAAA;UAAA,gBAAA;A/BmyGF;A+BjyGE;EACE,qB3BuPoC;E2BtPpC,UAAA;EAKE,gD3BkW8B;AJ67FpC;A+B5xGI;EAME,c3B/OK;E2BgPL,sB3BvPK;AJghHX;A+BrxGE;EAEE,YAAA;EACA,sB3B8H0B;E2B7H1B,sBAAA;A/BsxGJ;A+BnxGE;EACE,c3B7PO;E2B8PP,yB3BlQO;AJuhHX;A+BjxGE;EACE,aAAA;A/BmxGJ;A+B/wGE;EACE,kBAAA;EACA,0BAAA;A/BixGJ;;A+B7wGA;EACE,kC3ByNsC;E2BxNtC,oB3BgH4B;E2B/G5B,uB3B+G4B;E2B9G5B,oB3B+G4B;EC9QxB,mBAtCa;ALs9GnB;;A+B7wGA;EACE,gC3BkNsC;E2BjNtC,mB3B6G4B;E2B5G5B,sB3B4G4B;E2B3G5B,kB3B4G4B;ECnRxB,kBAtCa;AL89GnB;;A+BxwGA;EACE,kBAAA;EACA,qBAAA;EACA,WAAA;EACA,mC3BgMsC;E2B/LtC,gBAAA;A/B2wGF;;A+BxwGA;EACE,kBAAA;EACA,UAAA;EACA,WAAA;EACA,mC3BwLsC;E2BvLtC,SAAA;EACA,gBAAA;EACA,UAAA;A/B2wGF;A+BzwGE;EACE,qB3BoKoC;E2BnKpC,gD3BwE0B;AJmsG9B;A+BvwGE;EAEE,yB3B/TO;AJukHX;A+BpwGI;EACE,iB3B0Ta;AJ48FnB;A+BlwGE;EACE,0BAAA;A/BowGJ;;A+BhwGA;EACE,kBAAA;EACA,MAAA;EACA,QAAA;EACA,OAAA;EACA,UAAA;EACA,mC3BuJsC;E2BtJtC,yBAAA;EACA,gBAAA;EAEA,gB3BjE4B;E2BkE5B,gB3B7D4B;E2B8D5B,c3BpVS;E2BqVT,sB3B5VS;E2B6VT,yBAAA;EpBlVE,sBAAA;AXqlHJ;A+B/vGE;EACE,kBAAA;EACA,MAAA;EACA,QAAA;EACA,SAAA;EACA,UAAA;EACA,cAAA;EACA,6B3BgIoC;E2B/HpC,yBAAA;EACA,gB3B7E0B;E2B8E1B,c3BpWO;E2BqWP,iBAAA;ET7WA,yBlBGO;E2B4WP,oBAAA;EpBnWA,kCAAA;AXqmHJ;;A+BvvGA;EACE,WAAA;EACA,cAAA;EACA,UAAA;EACA,6BAAA;EACA,wBAAA;KAAA,qBAAA;UAAA,gBAAA;A/B0vGF;A+BxvGE;EACE,UAAA;A/B0vGJ;A+BtvGI;EAA0B,gE3BmOe;AJshG7C;A+BxvGI;EAA0B,gE3BkOe;AJyhG7C;A+B1vGI;EAA0B,gE3BiOe;AJ4hG7C;A+B1vGE;EACE,SAAA;A/B4vGJ;A+BzvGE;EACE,W3BmNyC;E2BlNzC,Y3BkNyC;E2BjNzC,oBAAA;ETlZA,yBlBoP0B;E2BgK1B,S3BkNyC;EO1lBzC,mBAAA;ESFE,oHW6YF;EX7YE,4GW6YF;EACA,wBAAA;UAAA,gBAAA;A/B0vGJ;AoBpoHM;EWiYJ;IXhYM,wBAAA;IAAA,gBAAA;EpBuoHN;AACF;A+B7vGI;ET1ZA,yBlB2mByC;AJ+iG7C;A+B3vGE;EACE,W3B4LgC;E2B3LhC,c3B4LgC;E2B3LhC,kBAAA;EACA,e3B2LgC;E2B1LhC,yB3BhaO;E2BiaP,yBAAA;EpBzZA,mBAAA;AXupHJ;A+BzvGE;EACE,W3BwLyC;E2BvLzC,Y3BuLyC;EkBnmBzC,yBlBoP0B;E2B0L1B,S3BwLyC;EO1lBzC,mBAAA;ESFE,iHWuaF;EXvaE,4GWuaF;EACA,qBAAA;OAAA,gBAAA;A/B0vGJ;AoB9pHM;EW4ZJ;IX3ZM,qBAAA;IAAA,gBAAA;EpBiqHN;AACF;A+B7vGI;ETpbA,yBlB2mByC;AJykG7C;A+B3vGE;EACE,W3BkKgC;E2BjKhC,c3BkKgC;E2BjKhC,kBAAA;EACA,e3BiKgC;E2BhKhC,yB3B1bO;E2B2bP,yBAAA;EpBnbA,mBAAA;AXirHJ;A+BzvGE;EACE,W3B8JyC;E2B7JzC,Y3B6JyC;E2B5JzC,aAAA;EACA,oB3BtE0B;E2BuE1B,mB3BvE0B;EkBlY1B,yBlBoP0B;E2BuN1B,S3B2JyC;EO1lBzC,mBAAA;ESFE,gHWocF;EXpcE,4GWocF;EACA,gBAAA;A/B0vGJ;AoB3rHM;EWsbJ;IXrbM,oBAAA;IAAA,gBAAA;EpB8rHN;AACF;A+B7vGI;ETjdA,yBlB2mByC;AJsmG7C;A+B3vGE;EACE,W3BqIgC;E2BpIhC,c3BqIgC;E2BpIhC,kBAAA;EACA,e3BoIgC;E2BnIhC,6BAAA;EACA,yBAAA;EACA,oBAAA;A/B6vGJ;A+BzvGE;EACE,yB3B9dO;EOQP,mBAAA;AXktHJ;A+BxvGE;EACE,kBAAA;EACA,yB3BpeO;EOQP,mBAAA;AXutHJ;A+BtvGI;EACE,yB3BxeK;AJguHX;A+BrvGI;EACE,eAAA;A/BuvGN;A+BpvGI;EACE,yB3BhfK;AJsuHX;A+BnvGI;EACE,eAAA;A/BqvGN;A+BlvGI;EACE,yB3BxfK;AJ4uHX;;A+B/uGA;;;EXzfM,4GW4fJ;A/BkvGF;AoB1uHM;EWqfN;;;IXpfQ,gBAAA;EpB+uHN;AACF;;AgChwHA;EACE,aAAA;EACA,eAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;AhCmwHF;;AgChwHA;EACE,cAAA;EACA,oBAAA;AhCmwHF;AMlwHE;E0BGE,qBAAA;AhCkwHJ;AgC9vHE;EACE,c5BXO;E4BYP,oBAAA;EACA,eAAA;AhCgwHJ;;AgCxvHA;EACE,gCAAA;AhC2vHF;AgCzvHE;EACE,mBAAA;EACA,6BAAA;ErBZA,+BAAA;EACA,gCAAA;AXwwHJ;AMpxHE;E0B2BI,qC5BmpB8B;AJymGpC;AgCzvHI;EACE,c5BlCK;E4BmCL,6BAAA;EACA,yBAAA;AhC2vHN;AgCvvHE;;EAEE,c5BzCO;E4B0CP,sB5BjDO;E4BkDP,kC5BwoBgC;AJinGpC;AgCtvHE;EAEE,gBAAA;ErBnCA,yBAAA;EACA,0BAAA;AX2xHJ;;AgC7uHE;ErBxDE,sBAAA;AXyyHJ;AgC7uHE;;EAEE,W5BzEO;E4B0EP,yB5ByK0B;AJskH9B;;AgCruHE;;EAEE,cAAA;EACA,kBAAA;AhCwuHJ;;AgCnuHE;;EAEE,aAAA;EACA,YAAA;EACA,kBAAA;AhCsuHJ;;AgC5tHE;EACE,aAAA;AhC+tHJ;AgC7tHE;EACE,cAAA;AhC+tHJ;;AiCn0HA;EACE,kBAAA;EACA,aAAA;EACA,eAAA;EACA,mBAAA;EACA,8BAAA;EACA,oBAAA;AjCs0HF;AiCl0HE;;;;;;EACE,aAAA;EACA,eAAA;EACA,mBAAA;EACA,8BAAA;AjCy0HJ;AiCrzHA;EACE,qBAAA;EACA,sB7BiqBkC;E6BhqBlC,yB7BgqBkC;E6B/pBlC,kB7BgFO;ECRH,kBAtCa;E4BhCjB,oBAAA;EACA,mBAAA;AjCuzHF;AMj2HE;E2B6CE,qBAAA;AjCuzHJ;;AiC9yHA;EACE,aAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;AjCizHF;AiC/yHE;EACE,gBAAA;EACA,eAAA;AjCizHJ;AiC9yHE;EACE,gBAAA;EACA,WAAA;AjCgzHJ;;AiCvyHA;EACE,qBAAA;EACA,mB7BwlBkC;E6BvlBlC,sB7BulBkC;AJmtGpC;;AiC9xHA;EACE,gBAAA;EACA,YAAA;EAGA,mBAAA;AjC+xHF;;AiC3xHA;EACE,wBAAA;E5BSI,kBAtCa;E4B+BjB,cAAA;EACA,6BAAA;EACA,6BAAA;EtBxGE,sBAAA;AXu4HJ;AMz4HE;E2B8GE,qBAAA;AjC8xHJ;;AiCxxHA;EACE,qBAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,WAAA;EACA,mCAAA;AjC2xHF;;AiCxxHA;EACE,gB7B+kBkC;E6B9kBlC,gBAAA;AjC2xHF;;Aej2HI;EkBkFI;;;;;;IACE,gBAAA;IACA,eAAA;EjCwxHR;AACF;Ae13HI;EkB6FA;IAoBI,qBAAA;IACA,2BAAA;EjC6wHN;EiC3wHM;IACE,mBAAA;EjC6wHR;EiC3wHQ;IACE,kBAAA;EjC6wHV;EiC1wHQ;IACE,qB7BwhBwB;I6BvhBxB,oB7BuhBwB;EJqvGlC;EiCvwHM;;;;;;IACE,iBAAA;EjC8wHR;EiChwHM;IACE,iBAAA;EjCkwHR;EiC/vHM;IACE,wBAAA;IAGA,gBAAA;EjC+vHR;EiC5vHM;IACE,aAAA;EjC8vHR;AACF;Ae/4HI;EkBkFI;;;;;;IACE,gBAAA;IACA,eAAA;EjCq0HR;AACF;Aev6HI;EkB6FA;IAoBI,qBAAA;IACA,2BAAA;EjC0zHN;EiCxzHM;IACE,mBAAA;EjC0zHR;EiCxzHQ;IACE,kBAAA;EjC0zHV;EiCvzHQ;IACE,qB7BwhBwB;I6BvhBxB,oB7BuhBwB;EJkyGlC;EiCpzHM;;;;;;IACE,iBAAA;EjC2zHR;EiC7yHM;IACE,iBAAA;EjC+yHR;EiC5yHM;IACE,wBAAA;IAGA,gBAAA;EjC4yHR;EiCzyHM;IACE,aAAA;EjC2yHR;AACF;Ae57HI;EkBkFI;;;;;;IACE,gBAAA;IACA,eAAA;EjCk3HR;AACF;Aep9HI;EkB6FA;IAoBI,qBAAA;IACA,2BAAA;EjCu2HN;EiCr2HM;IACE,mBAAA;EjCu2HR;EiCr2HQ;IACE,kBAAA;EjCu2HV;EiCp2HQ;IACE,qB7BwhBwB;I6BvhBxB,oB7BuhBwB;EJ+0GlC;EiCj2HM;;;;;;IACE,iBAAA;EjCw2HR;EiC11HM;IACE,iBAAA;EjC41HR;EiCz1HM;IACE,wBAAA;IAGA,gBAAA;EjCy1HR;EiCt1HM;IACE,aAAA;EjCw1HR;AACF;Aez+HI;EkBkFI;;;;;;IACE,gBAAA;IACA,eAAA;EjC+5HR;AACF;AejgII;EkB6FA;IAoBI,qBAAA;IACA,2BAAA;EjCo5HN;EiCl5HM;IACE,mBAAA;EjCo5HR;EiCl5HQ;IACE,kBAAA;EjCo5HV;EiCj5HQ;IACE,qB7BwhBwB;I6BvhBxB,oB7BuhBwB;EJ43GlC;EiC94HM;;;;;;IACE,iBAAA;EjCq5HR;EiCv4HM;IACE,iBAAA;EjCy4HR;EiCt4HM;IACE,wBAAA;IAGA,gBAAA;EjCs4HR;EiCn4HM;IACE,aAAA;EjCq4HR;AACF;AiCt8HI;EAoBI,qBAAA;EACA,2BAAA;AjCq7HR;AiCx8HQ;;;;;;EACE,gBAAA;EACA,eAAA;AjC+8HV;AiC57HQ;EACE,mBAAA;AjC87HV;AiC57HU;EACE,kBAAA;AjC87HZ;AiC37HU;EACE,qB7BwhBwB;E6BvhBxB,oB7BuhBwB;AJs6GpC;AiCx7HQ;;;;;;EACE,iBAAA;AjC+7HV;AiCj7HQ;EACE,iBAAA;AjCm7HV;AiCh7HQ;EACE,wBAAA;EAGA,gBAAA;AjCg7HV;AiC76HQ;EACE,aAAA;AjC+6HV;;AiCj6HE;EACE,yB7BggBgC;AJo6GpC;AM5nIE;E2B2NI,yB7B6f8B;AJu6GpC;AiC/5HI;EACE,yB7Bqf8B;AJ46GpC;AMloIE;E2BoOM,yB7Bmf4B;AJ86GpC;AiC95HM;EACE,yB7Bif4B;AJ+6GpC;AiC55HI;;;;EAIE,yB7Bwe8B;AJs7GpC;AiC15HE;EACE,yB7BiegC;E6BhehC,gC7BqegC;AJu7GpC;AiCz5HE;EACE,mRAAA;AjC25HJ;AiCx5HE;EACE,yB7BwdgC;AJk8GpC;AiCz5HI;EACE,yB7Bwd8B;AJm8GpC;AM3pIE;E2BmQM,yB7Bqd4B;AJs8GpC;;AiCn5HE;EACE,W7BrRO;AJ2qIX;AMlqIE;E2B+QI,W7BxRK;AJ8qIX;AiCj5HI;EACE,+B7B0b8B;AJy9GpC;AMxqIE;E2BwRM,gC7Bwb4B;AJ29GpC;AiCh5HM;EACE,gC7Bsb4B;AJ49GpC;AiC94HI;;;;EAIE,W7B7SK;AJ6rIX;AiC54HE;EACE,+B7BsagC;E6BrahC,sC7B0agC;AJo+GpC;AiC34HE;EACE,yRAAA;AjC64HJ;AiC14HE;EACE,+B7B6ZgC;AJ++GpC;AiC34HI;EACE,W7B7TK;AJ0sIX;AMjsIE;E2BuTM,W7BhUG;AJ6sIX;;AkChtIA;EACE,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;EAEA,qBAAA;EACA,sB9BJS;E8BKT,2BAAA;EACA,sCAAA;EvBKE,sBAAA;AX8sIJ;AkChtIE;EACE,eAAA;EACA,cAAA;AlCktIJ;AkC/sIE;EACE,mBAAA;EACA,sBAAA;AlCitIJ;AkC/sII;EACE,mBAAA;EvBCF,2CAAA;EACA,4CAAA;AXitIJ;AkC/sII;EACE,sBAAA;EvBUF,+CAAA;EACA,8CAAA;AXwsIJ;AkC5sIE;;EAEE,aAAA;AlC8sIJ;;AkC1sIA;EAGE,cAAA;EAGA,eAAA;EACA,gB9B8wBkC;AJ27GpC;;AkCrsIA;EACE,sB9BwwBkC;AJg8GpC;;AkCrsIA;EACE,qBAAA;EACA,gBAAA;AlCwsIF;;AkCrsIA;EACE,gBAAA;AlCwsIF;;AM7vIE;E4B0DE,qBAAA;AlCusIJ;AkCpsIE;EACE,oB9BuvBgC;AJ+8GpC;;AkC9rIA;EACE,wBAAA;EACA,gBAAA;EAEA,qC9BgvBkC;E8B/uBlC,6CAAA;AlCgsIF;AkC9rIE;EvBvEE,0DAAA;AXwwIJ;;AkC5rIA;EACE,wBAAA;EAEA,qC9BquBkC;E8BpuBlC,0CAAA;AlC8rIF;AkC5rIE;EvBlFE,0DAAA;AXixIJ;;AkCrrIA;EACE,uBAAA;EACA,uBAAA;EACA,sBAAA;EACA,gBAAA;AlCwrIF;;AkCrrIA;EACE,uBAAA;EACA,sBAAA;AlCwrIF;;AkCprIA;EACE,kBAAA;EACA,MAAA;EACA,QAAA;EACA,SAAA;EACA,OAAA;EACA,gB9B2sBkC;EO1zBhC,kCAAA;AXuyIJ;;AkCprIA;;;EAGE,cAAA;EACA,WAAA;AlCurIF;;AkCprIA;;EvBjHI,2CAAA;EACA,4CAAA;AX0yIJ;;AkCrrIA;;EvBxGI,+CAAA;EACA,8CAAA;AXkyIJ;;AkClrIE;EACE,mB9BmrBgC;AJkgHpC;AepxII;EmB6FJ;IAMI,aAAA;IACA,mBAAA;IACA,mBAAA;IACA,kBAAA;ElCqrIF;EkCnrIE;IAEE,YAAA;IACA,kB9BuqB8B;I8BtqB9B,gBAAA;IACA,iB9BqqB8B;EJ+gHlC;AACF;;AkCxqIE;EACE,mB9BupBgC;AJohHpC;AetyII;EmBuHJ;IAQI,aAAA;IACA,mBAAA;ElC2qIF;EkCxqIE;IAEE,YAAA;IACA,gBAAA;ElCyqIJ;EkCvqII;IACE,cAAA;IACA,cAAA;ElCyqIN;EkCpqIM;IvBzKJ,0BAAA;IACA,6BAAA;EXg1IF;EkCrqIQ;;IAGE,0BAAA;ElCsqIV;EkCpqIQ;;IAGE,6BAAA;ElCqqIV;EkCjqIM;IvB1KJ,yBAAA;IACA,4BAAA;EX80IF;EkClqIQ;;IAGE,yBAAA;ElCmqIV;EkCjqIQ;;IAGE,4BAAA;ElCkqIV;AACF;;AkCrpIE;EACE,sB9B4kBgC;AJ4kHpC;Aeh1II;EmBsLJ;IAMI,oB9BylBgC;S8BzlBhC,e9BylBgC;I8BxlBhC,wB9BylBgC;S8BzlBhC,mB9BylBgC;I8BxlBhC,UAAA;IACA,SAAA;ElCwpIF;EkCtpIE;IACE,qBAAA;IACA,WAAA;ElCwpIJ;AACF;;AkC/oIA;EACE,qBAAA;AlCkpIF;AkChpIE;EACE,gBAAA;AlCkpIJ;AkChpII;EACE,gBAAA;EvBvOF,6BAAA;EACA,4BAAA;AX03IJ;AkChpII;EvBzPA,yBAAA;EACA,0BAAA;AX44IJ;AkChpII;EvBtQA,gBAAA;EuBwQE,mBAAA;AlCkpIN;;AmC56IA;EACE,aAAA;EACA,eAAA;EACA,qBAAA;EACA,mB/BmiCkC;E+BjiClC,gBAAA;EACA,yB/BES;EOSP,sBAAA;AXo6IJ;;AmCz6IE;EACE,oB/BuhCgC;AJq5GpC;AmC16II;EACE,WAAA;EACA,qB/BmhC8B;E+BlhC9B,c/BNK;E+BOL,YAAA;AnC46IN;AmCl6IE;EACE,0BAAA;AnCo6IJ;AmCj6IE;EACE,qBAAA;AnCm6IJ;AmCh6IE;EACE,c/B1BO;AJ47IX;;AoCz8IA;EACE,aAAA;E5BGA,eAAA;EACA,gBAAA;EGaE,sBAAA;AX87IJ;;AoC18IA;EACE,kBAAA;EACA,cAAA;EACA,uBAAA;EACA,iBAAA;EACA,iBhCmxBkC;EgClxBlC,chCmKwC;EgCjKxC,sBhCPS;EgCQT,yBAAA;ApC48IF;AoC18IE;EACE,UAAA;EACA,chC8JsC;EgC7JtC,qBAAA;EACA,yBhCZO;EgCaP,qBhCZO;AJw9IX;AoCz8IE;EACE,UAAA;EACA,UhC2wBgC;EgC1wBhC,gDhC8W0B;AJ6lI9B;;AoCr8II;EACE,cAAA;EzBaF,+BAAA;EACA,kCAAA;AX47IJ;AoCr8II;EzBNA,gCAAA;EACA,mCAAA;AX88IJ;AoCp8IE;EACE,UAAA;EACA,WhCxCO;EgCyCP,yBhC0M0B;EgCzM1B,qBhCyM0B;AJ6vI9B;AoCn8IE;EACE,chCxCO;EgCyCP,oBAAA;EAEA,YAAA;EACA,sBhClDO;EgCmDP,qBhChDO;AJo/IX;;AqC3/IE;EACE,uBAAA;EhC2HE,kBAtCa;EgCnFf,gBjCmO0B;AJ2xI9B;AqCz/IM;E1BqCF,8BAAA;EACA,iCAAA;AXu9IJ;AqCx/IM;E1BkBF,+BAAA;EACA,kCAAA;AXy+IJ;;AqCzgJE;EACE,uBAAA;EhC2HE,mBAtCa;EgCnFf,gBjCoO0B;AJwyI9B;AqCvgJM;E1BqCF,8BAAA;EACA,iCAAA;AXq+IJ;AqCtgJM;E1BkBF,+BAAA;EACA,kCAAA;AXu/IJ;;AsCrhJA;EACE,qBAAA;EACA,qBAAA;EjCiEE,cAAA;EiC/DF,gBlCuR4B;EkCtR5B,cAAA;EACA,kBAAA;EACA,mBAAA;EACA,wBAAA;E3BKE,sBAAA;ESFE,qIkBDJ;AtCwhJF;AoBnhJM;EkBfN;IlBgBQ,gBAAA;EpBshJN;AACF;AM5hJE;EgCGI,qBAAA;AtC4hJN;;AsCvhJE;EACE,aAAA;AtC0hJJ;;AsCrhJA;EACE,kBAAA;EACA,SAAA;AtCwhJF;;AsCjhJA;EACE,oBlC+3BkC;EkC93BlC,mBlC83BkC;EOr5BhC,oBAAA;AX4iJJ;;AsC5gJE;ECjDA,WAAA;EACA,yBnC0Ea;AJu/If;AMnjJE;EiCVI,WAAA;EACA,yBAAA;AvCgkJN;AuC7jJI;EAEE,UAAA;EACA,+CAAA;AvC8jJN;;AsCzhJE;ECjDA,WAAA;EACA,yBnC0Ea;AJogJf;AMhkJE;EiCVI,WAAA;EACA,yBAAA;AvC6kJN;AuC1kJI;EAEE,UAAA;EACA,iDAAA;AvC2kJN;;AsCtiJE;ECjDA,WAAA;EACA,yBnC0Ea;AJihJf;AM7kJE;EiCVI,WAAA;EACA,yBAAA;AvC0lJN;AuCvlJI;EAEE,UAAA;EACA,+CAAA;AvCwlJN;;AsCnjJE;ECjDA,WAAA;EACA,yBnC0Ea;AJ8hJf;AM1lJE;EiCVI,WAAA;EACA,yBAAA;AvCumJN;AuCpmJI;EAEE,UAAA;EACA,gDAAA;AvCqmJN;;AsChkJE;ECjDA,cAAA;EACA,yBnC0Ea;AJ2iJf;AMvmJE;EiCVI,cAAA;EACA,yBAAA;AvConJN;AuCjnJI;EAEE,UAAA;EACA,+CAAA;AvCknJN;;AsC7kJE;ECjDA,WAAA;EACA,yBnC0Ea;AJwjJf;AMpnJE;EiCVI,WAAA;EACA,yBAAA;AvCioJN;AuC9nJI;EAEE,UAAA;EACA,+CAAA;AvC+nJN;;AsC1lJE;ECjDA,cAAA;EACA,yBnC0Ea;AJqkJf;AMjoJE;EiCVI,cAAA;EACA,yBAAA;AvC8oJN;AuC3oJI;EAEE,UAAA;EACA,iDAAA;AvC4oJN;;AsCvmJE;ECjDA,WAAA;EACA,yBnC0Ea;AJklJf;AM9oJE;EiCVI,WAAA;EACA,yBAAA;AvC2pJN;AuCxpJI;EAEE,UAAA;EACA,8CAAA;AvCypJN;;AwCtqJA;EACE,kBAAA;EACA,mBpCuzBkC;EoCrzBlC,yBpCKS;EOSP,qBAAA;AX2pJJ;AejnJI;EyB5DJ;IAQI,kBAAA;ExCyqJF;AACF;;AwCtqJA;EACE,gBAAA;EACA,eAAA;E7BIE,gBAAA;AXsqJJ;;AyCprJA;EACE,kBAAA;EACA,wBAAA;EACA,mBrCu9BkC;EqCt9BlC,6BAAA;E9BUE,sBAAA;AX8qJJ;;AyCnrJA;EAEE,cAAA;AzCqrJF;;AyCjrJA;EACE,gBrC4Q4B;AJw6I9B;;AyC5qJA;EACE,mBAAA;AzC+qJF;AyC5qJE;EACE,kBAAA;EACA,MAAA;EACA,QAAA;EACA,UAAA;EACA,wBAAA;EACA,cAAA;AzC8qJJ;;AyCpqJE;EC/CA,cDgDqH;EnB3CnH,yBmB2CuB;EC9CzB,qBD8CqE;AzCyqJvE;A0CrtJE;EACE,yBAAA;A1CutJJ;A0CptJE;EACE,cAAA;A1CstJJ;;AyChrJE;EC/CA,cDgDqH;EnB3CnH,yBmB2CuB;EC9CzB,qBD8CqE;AzCqrJvE;A0CjuJE;EACE,yBAAA;A1CmuJJ;A0ChuJE;EACE,cAAA;A1CkuJJ;;AyC5rJE;EC/CA,cDgDqH;EnB3CnH,yBmB2CuB;EC9CzB,qBD8CqE;AzCisJvE;A0C7uJE;EACE,yBAAA;A1C+uJJ;A0C5uJE;EACE,cAAA;A1C8uJJ;;AyCxsJE;EC/CA,cDgDqH;EnB3CnH,yBmB2CuB;EC9CzB,qBD8CqE;AzC6sJvE;A0CzvJE;EACE,yBAAA;A1C2vJJ;A0CxvJE;EACE,cAAA;A1C0vJJ;;AyCptJE;EC/CA,cDgDqH;EnB3CnH,yBmB2CuB;EC9CzB,qBD8CqE;AzCytJvE;A0CrwJE;EACE,yBAAA;A1CuwJJ;A0CpwJE;EACE,cAAA;A1CswJJ;;AyChuJE;EC/CA,cDgDqH;EnB3CnH,yBmB2CuB;EC9CzB,qBD8CqE;AzCquJvE;A0CjxJE;EACE,yBAAA;A1CmxJJ;A0ChxJE;EACE,cAAA;A1CkxJJ;;AyC5uJE;EC/CA,cDgDqH;EnB3CnH,yBmB2CuB;EC9CzB,qBD8CqE;AzCivJvE;A0C7xJE;EACE,yBAAA;A1C+xJJ;A0C5xJE;EACE,cAAA;A1C8xJJ;;AyCxvJE;EC/CA,cDgDqH;EnB3CnH,yBmB2CuB;EC9CzB,qBD8CqE;AzC6vJvE;A0CzyJE;EACE,yBAAA;A1C2yJJ;A0CxyJE;EACE,cAAA;A1C0yJJ;;A2ClzJE;EACE;IAAO,2BAAA;E3CszJT;E2CrzJE;IAAK,wBAAA;E3CwzJP;AACF;;A2C3zJE;EACE;IAAO,2BAAA;E3CszJT;E2CrzJE;IAAK,wBAAA;E3CwzJP;AACF;A2CrzJA;EACE,aAAA;EACA,YvCg+BkC;EuC/9BlC,gBAAA;EACA,cAAA;EtCmHI,kBAtCa;EsC3EjB,yBvCLS;EOSP,sBAAA;AXozJJ;;A2CnzJA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,gBAAA;EACA,WvCjBS;EuCkBT,kBAAA;EACA,mBAAA;EACA,yBvCq9BkC;EgBh+B9B,2BuBYJ;A3CszJF;AoB9zJM;EuBDN;IvBEQ,gBAAA;EpBi0JN;AACF;;A2CxzJA;ErBYE,qMAAA;EqBVA,0BAAA;A3C2zJF;;A2CvzJE;EACE,0DAAA;UAAA,kDAAA;A3C0zJJ;A2CvzJM;EAJJ;IAKM,uBAAA;YAAA,eAAA;E3C0zJN;AACF;;A4Cr2JA;EACE,aAAA;EACA,uBAAA;A5Cw2JF;;A4Cr2JA;EACE,OAAA;A5Cw2JF;;A6C12JA;EACE,aAAA;EACA,sBAAA;EAGA,eAAA;EACA,gBAAA;ElCQE,sBAAA;AXo2JJ;;A6Cl2JA;EACE,WAAA;EACA,czCRS;EyCST,mBAAA;A7Cq2JF;AM52JE;EuCWE,UAAA;EACA,czCdO;EyCeP,qBAAA;EACA,yBzCtBO;AJ03JX;A6Cj2JE;EACE,czClBO;EyCmBP,yBzC1BO;AJ63JX;;A6C11JA;EACE,kBAAA;EACA,cAAA;EACA,wBAAA;EAGA,sBzC3CS;EyC4CT,sCAAA;A7C21JF;A6Cz1JE;ElC1BE,+BAAA;EACA,gCAAA;AXs3JJ;A6Cz1JE;ElChBE,mCAAA;EACA,kCAAA;AX42JJ;A6Cz1JE;EAEE,czClDO;EyCmDP,oBAAA;EACA,sBzC1DO;AJo5JX;A6Ct1JE;EACE,UAAA;EACA,WzChEO;EyCiEP,yBzCkL0B;EyCjL1B,qBzCiL0B;AJuqJ9B;A6Cr1JE;EACE,mBAAA;A7Cu1JJ;A6Cr1JI;EACE,gBAAA;EACA,qBzC2JwB;AJ4rJ9B;;A6Cz0JI;EACE,mBAAA;A7C40JN;A6Cz0JQ;ElC1BJ,kCAAA;EAZA,0BAAA;AXm3JJ;A6Cx0JQ;ElC3CJ,gCAAA;EAYA,4BAAA;AX22JJ;A6Cv0JQ;EACE,aAAA;A7Cy0JV;A6Ct0JQ;EACE,qBzC0HoB;EyCzHpB,oBAAA;A7Cw0JV;A6Ct0JU;EACE,iBAAA;EACA,sBzCqHkB;AJmtJ9B;;Aen4JI;E8BmCA;IACE,mBAAA;E7Co2JJ;E6Cj2JM;IlC1BJ,kCAAA;IAZA,0BAAA;EX24JF;E6Ch2JM;IlC3CJ,gCAAA;IAYA,4BAAA;EXm4JF;E6C/1JM;IACE,aAAA;E7Ci2JR;E6C91JM;IACE,qBzC0HoB;IyCzHpB,oBAAA;E7Cg2JR;E6C91JQ;IACE,iBAAA;IACA,sBzCqHkB;EJ2uJ5B;AACF;Ae55JI;E8BmCA;IACE,mBAAA;E7C43JJ;E6Cz3JM;IlC1BJ,kCAAA;IAZA,0BAAA;EXm6JF;E6Cx3JM;IlC3CJ,gCAAA;IAYA,4BAAA;EX25JF;E6Cv3JM;IACE,aAAA;E7Cy3JR;E6Ct3JM;IACE,qBzC0HoB;IyCzHpB,oBAAA;E7Cw3JR;E6Ct3JQ;IACE,iBAAA;IACA,sBzCqHkB;EJmwJ5B;AACF;Aep7JI;E8BmCA;IACE,mBAAA;E7Co5JJ;E6Cj5JM;IlC1BJ,kCAAA;IAZA,0BAAA;EX27JF;E6Ch5JM;IlC3CJ,gCAAA;IAYA,4BAAA;EXm7JF;E6C/4JM;IACE,aAAA;E7Ci5JR;E6C94JM;IACE,qBzC0HoB;IyCzHpB,oBAAA;E7Cg5JR;E6C94JQ;IACE,iBAAA;IACA,sBzCqHkB;EJ2xJ5B;AACF;Ae58JI;E8BmCA;IACE,mBAAA;E7C46JJ;E6Cz6JM;IlC1BJ,kCAAA;IAZA,0BAAA;EXm9JF;E6Cx6JM;IlC3CJ,gCAAA;IAYA,4BAAA;EX28JF;E6Cv6JM;IACE,aAAA;E7Cy6JR;E6Ct6JM;IACE,qBzC0HoB;IyCzHpB,oBAAA;E7Cw6JR;E6Ct6JQ;IACE,iBAAA;IACA,sBzCqHkB;EJmzJ5B;AACF;A6C35JA;ElCnHI,gBAAA;AXihKJ;A6C35JE;EACE,qBAAA;A7C65JJ;A6C35JI;EACE,sBAAA;A7C65JN;;A8CtiKE;EACE,cDoJsE;ECnJtE,yBDmJuC;A7Cs5J3C;AM9hKE;EwCPM,cD+IkE;EC9IlE,yBAAA;A9CwiKR;A8CriKM;EACE,W1CPG;E0CQH,yBDyIkE;ECxIlE,qBDwIkE;A7C+5J1E;;A8CpjKE;EACE,cDoJsE;ECnJtE,yBDmJuC;A7Co6J3C;AM5iKE;EwCPM,cD+IkE;EC9IlE,yBAAA;A9CsjKR;A8CnjKM;EACE,W1CPG;E0CQH,yBDyIkE;ECxIlE,qBDwIkE;A7C66J1E;;A8ClkKE;EACE,cDoJsE;ECnJtE,yBDmJuC;A7Ck7J3C;AM1jKE;EwCPM,cD+IkE;EC9IlE,yBAAA;A9CokKR;A8CjkKM;EACE,W1CPG;E0CQH,yBDyIkE;ECxIlE,qBDwIkE;A7C27J1E;;A8ChlKE;EACE,cDoJsE;ECnJtE,yBDmJuC;A7Cg8J3C;AMxkKE;EwCPM,cD+IkE;EC9IlE,yBAAA;A9CklKR;A8C/kKM;EACE,W1CPG;E0CQH,yBDyIkE;ECxIlE,qBDwIkE;A7Cy8J1E;;A8C9lKE;EACE,cDoJsE;ECnJtE,yBDmJuC;A7C88J3C;AMtlKE;EwCPM,cD+IkE;EC9IlE,yBAAA;A9CgmKR;A8C7lKM;EACE,W1CPG;E0CQH,yBDyIkE;ECxIlE,qBDwIkE;A7Cu9J1E;;A8C5mKE;EACE,cDoJsE;ECnJtE,yBDmJuC;A7C49J3C;AMpmKE;EwCPM,cD+IkE;EC9IlE,yBAAA;A9C8mKR;A8C3mKM;EACE,W1CPG;E0CQH,yBDyIkE;ECxIlE,qBDwIkE;A7Cq+J1E;;A8C1nKE;EACE,cDoJsE;ECnJtE,yBDmJuC;A7C0+J3C;AMlnKE;EwCPM,cD+IkE;EC9IlE,yBAAA;A9C4nKR;A8CznKM;EACE,W1CPG;E0CQH,yBDyIkE;ECxIlE,qBDwIkE;A7Cm/J1E;;A8CxoKE;EACE,cDoJsE;ECnJtE,yBDmJuC;A7Cw/J3C;AMhoKE;EwCPM,cD+IkE;EC9IlE,yBAAA;A9C0oKR;A8CvoKM;EACE,W1CPG;E0CQH,yBDyIkE;ECxIlE,qBDwIkE;A7CigK1E;;A+CzpKA;EACE,YAAA;E1C8HI,iBAtCa;E0CtFjB,gB3C6R4B;E2C5R5B,cAAA;EACA,W3CYS;E2CXT,yB3CslCkC;E2CrlClC,YAAA;A/C4pKF;AMvpKE;EyCDE,W3CMO;E2CLP,qBAAA;A/C2pKJ;AMvpKE;EyCCI,aAAA;A/CypKN;;A+C9oKA;EACE,UAAA;EACA,6BAAA;EACA,SAAA;A/CipKF;;A+C3oKA;EACE,oBAAA;A/C8oKF;;AgDprKA;EAGE,iB5Cy4BkC;E4Cx4BlC,gB5Cw4BkC;EC7wB9B,mBAtCa;E2ClFjB,2C5C04BkC;E4Cz4BlC,4BAAA;EACA,oCAAA;EACA,gD5C24BkC;E4C14BlC,UAAA;ErCOE,sBAAA;AX8qKJ;AgDlrKE;EACE,sB5C83BgC;AJszIpC;AgDjrKE;EACE,UAAA;AhDmrKJ;AgDhrKE;EACE,cAAA;EACA,UAAA;AhDkrKJ;AgD/qKE;EACE,aAAA;AhDirKJ;;AgD7qKA;EACE,aAAA;EACA,mBAAA;EACA,wBAAA;EACA,c5CvBS;E4CwBT,2C5Cm3BkC;E4Cl3BlC,4BAAA;EACA,4CAAA;ErCZE,2CAAA;EACA,4CAAA;AX6rKJ;;AgD9qKA;EACE,gB5Ci2BkC;AJg1IpC;;AiDvtKA;EAEE,gBAAA;AjDytKF;AiDvtKE;EACE,kBAAA;EACA,gBAAA;AjDytKJ;;AiDptKA;EACE,eAAA;EACA,MAAA;EACA,OAAA;EACA,a7C2pBkC;E6C1pBlC,aAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EAGA,UAAA;AjDqtKF;;AiD9sKA;EACE,kBAAA;EACA,WAAA;EACA,c7C+4BkC;E6C74BlC,oBAAA;AjDgtKF;AiD7sKE;E7B3BI,mC6B4BF;EACA,8B7Cq6BgC;AJ0yIpC;AoBxuKM;E6BuBJ;I7BtBM,gBAAA;EpB2uKN;AACF;AiDltKE;EACE,e7Cm6BgC;AJizIpC;AiDhtKE;EACE,sB7Cg6BgC;AJkzIpC;;AiD9sKA;EACE,aAAA;EACA,6BAAA;AjDitKF;AiD/sKE;EACE,8BAAA;EACA,gBAAA;AjDitKJ;AiD9sKE;;EAEE,cAAA;AjDgtKJ;AiD7sKE;EACE,gBAAA;AjD+sKJ;;AiD3sKA;EACE,aAAA;EACA,mBAAA;EACA,6BAAA;AjD8sKF;AiD3sKE;EACE,cAAA;EACA,0BAAA;EACA,2BAAA;EAAA,wBAAA;EAAA,mBAAA;EACA,WAAA;AjD6sKJ;AiDzsKE;EACE,sBAAA;EACA,uBAAA;EACA,YAAA;AjD2sKJ;AiDzsKI;EACE,gBAAA;AjD2sKN;AiDxsKI;EACE,aAAA;AjD0sKN;;AiDpsKA;EACE,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,WAAA;EAGA,oBAAA;EACA,sB7C3GS;E6C4GT,4BAAA;EACA,oCAAA;EtClGE,qBAAA;EsCsGF,UAAA;AjDmsKF;;AiD/rKA;EACE,eAAA;EACA,MAAA;EACA,OAAA;EACA,a7C+iBkC;E6C9iBlC,YAAA;EACA,aAAA;EACA,sB7ClHS;AJozKX;AiD/rKE;EAAS,UAAA;AjDksKX;AiDjsKE;EAAS,Y7C6zByB;AJu4IpC;;AiD/rKA;EACE,aAAA;EACA,uBAAA;EACA,8BAAA;EACA,kB7C2zBkC;E6C1zBlC,gCAAA;EtCtHE,0CAAA;EACA,2CAAA;AXyzKJ;AiDjsKE;EACE,kB7CszBgC;E6CpzBhC,8BAAA;AjDksKJ;;AiD7rKA;EACE,gBAAA;EACA,gB7CsI4B;AJ0jK9B;;AiD3rKA;EACE,kBAAA;EAGA,cAAA;EACA,a7CwwBkC;AJo7IpC;;AiDxrKA;EACE,aAAA;EACA,eAAA;EACA,mBAAA;EACA,yBAAA;EACA,gBAAA;EACA,6BAAA;EtCzIE,8CAAA;EACA,6CAAA;AXq0KJ;AiDvrKE;EACE,eAAA;AjDyrKJ;;AiDprKA;EACE,kBAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;AjDurKF;;Ae9zKI;EkC6IF;IACE,gB7CqwBgC;I6CpwBhC,oBAAA;EjDqrKF;;EiDlrKA;IACE,+BAAA;EjDqrKF;EiDnrKE;IACE,gCAAA;EjDqrKJ;;EiDjrKA;IACE,+BAAA;EjDorKF;EiDlrKE;IACE,4BAAA;IACA,2BAAA;IAAA,wBAAA;IAAA,mBAAA;EjDorKJ;;EiD5qKA;IAAY,gB7C6uBsB;EJm8IlC;AACF;Aex1KI;EkC2KF;;IAEE,gB7CquBgC;EJ28IlC;AACF;Ae91KI;EkCkLF;IAAY,iB7C+tBsB;EJi9IlC;AACF;AkD95KA;EACE,kBAAA;EACA,a9C+qBkC;E8C9qBlC,cAAA;EACA,S9C21BkC;E+C/1BlC,qN/CmR4B;E+CjR5B,kBAAA;EACA,gB/C2R4B;E+C1R5B,gB/C+R4B;E+C9R5B,gBAAA;EACA,iBAAA;EACA,qBAAA;EACA,iBAAA;EACA,oBAAA;EACA,sBAAA;EACA,kBAAA;EACA,oBAAA;EACA,mBAAA;EACA,gBAAA;E9CgHI,mBAtCa;E6C9EjB,qBAAA;EACA,UAAA;AlD06KF;AkDx6KE;EAAS,Y9C+0ByB;AJ4lJpC;AkDz6KE;EACE,kBAAA;EACA,cAAA;EACA,a9C+0BgC;E8C90BhC,c9C+0BgC;AJ4lJpC;AkDz6KI;EACE,kBAAA;EACA,WAAA;EACA,yBAAA;EACA,mBAAA;AlD26KN;;AkDt6KA;EACE,iBAAA;AlDy6KF;AkDv6KE;EACE,SAAA;AlDy6KJ;AkDv6KI;EACE,MAAA;EACA,6BAAA;EACA,sB9CvBK;AJg8KX;;AkDp6KA;EACE,iBAAA;AlDu6KF;AkDr6KE;EACE,OAAA;EACA,a9CizBgC;E8ChzBhC,c9C+yBgC;AJwnJpC;AkDr6KI;EACE,QAAA;EACA,oCAAA;EACA,wB9CvCK;AJ88KX;;AkDl6KA;EACE,iBAAA;AlDq6KF;AkDn6KE;EACE,MAAA;AlDq6KJ;AkDn6KI;EACE,SAAA;EACA,6BAAA;EACA,yB9CrDK;AJ09KX;;AkDh6KA;EACE,iBAAA;AlDm6KF;AkDj6KE;EACE,QAAA;EACA,a9CmxBgC;E8ClxBhC,c9CixBgC;AJkpJpC;AkDj6KI;EACE,OAAA;EACA,oCAAA;EACA,uB9CrEK;AJw+KX;;AkD94KA;EACE,gB9C6uBkC;E8C5uBlC,uBAAA;EACA,W9CvGS;E8CwGT,kBAAA;EACA,sB9C/FS;EOCP,sBAAA;AXg/KJ;;AoDlgLA;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,ahD6qBkC;EgD5qBlC,cAAA;EACA,gBhD62BkC;E+Cl3BlC,qN/CmR4B;E+CjR5B,kBAAA;EACA,gB/C2R4B;E+C1R5B,gB/C+R4B;E+C9R5B,gBAAA;EACA,iBAAA;EACA,qBAAA;EACA,iBAAA;EACA,oBAAA;EACA,sBAAA;EACA,kBAAA;EACA,oBAAA;EACA,mBAAA;EACA,gBAAA;E9CgHI,mBAtCa;E+C7EjB,qBAAA;EACA,sBhDNS;EgDOT,4BAAA;EACA,oCAAA;EzCGE,qBAAA;AX6gLJ;AoD5gLE;EACE,kBAAA;EACA,cAAA;EACA,WhD62BgC;EgD52BhC,chD62BgC;EgD52BhC,gBAAA;ApD8gLJ;AoD5gLI;EAEE,kBAAA;EACA,cAAA;EACA,WAAA;EACA,yBAAA;EACA,mBAAA;ApD6gLN;;AoDxgLA;EACE,qBhD81BkC;AJ6qJpC;AoDzgLE;EACE,2BAAA;ApD2gLJ;AoDzgLI;EACE,SAAA;EACA,6BAAA;EACA,qChDy1B8B;AJkrJpC;AoDxgLI;EACE,WhD0LwB;EgDzLxB,6BAAA;EACA,sBhD7CK;AJujLX;;AoDrgLA;EACE,mBhD00BkC;AJ8rJpC;AoDtgLE;EACE,yBAAA;EACA,ahDs0BgC;EgDr0BhC,YhDo0BgC;EgDn0BhC,gBAAA;ApDwgLJ;AoDtgLI;EACE,OAAA;EACA,oCAAA;EACA,uChDk0B8B;AJssJpC;AoDrgLI;EACE,ShDmKwB;EgDlKxB,oCAAA;EACA,wBhDpEK;AJ2kLX;;AoDlgLA;EACE,kBhDmzBkC;AJktJpC;AoDngLE;EACE,wBAAA;ApDqgLJ;AoDngLI;EACE,MAAA;EACA,oCAAA;EACA,wChD8yB8B;AJutJpC;AoDlgLI;EACE,QhD+IwB;EgD9IxB,oCAAA;EACA,yBhDxFK;AJ4lLX;AoD//KE;EACE,kBAAA;EACA,MAAA;EACA,SAAA;EACA,cAAA;EACA,WhD0xBgC;EgDzxBhC,oBAAA;EACA,WAAA;EACA,gCAAA;ApDigLJ;;AoD7/KA;EACE,oBhDmxBkC;AJ6uJpC;AoD9/KE;EACE,0BAAA;EACA,ahD+wBgC;EgD9wBhC,YhD6wBgC;EgD5wBhC,gBAAA;ApDggLJ;AoD9/KI;EACE,QAAA;EACA,oCAAA;EACA,sChD2wB8B;AJqvJpC;AoD7/KI;EACE,UhD4GwB;EgD3GxB,oCAAA;EACA,uBhD3HK;AJ0nLX;;AoDz+KA;EACE,uBAAA;EACA,gBAAA;E/C3BI,eAtCa;E+CoEjB,yBhD6tBkC;EgD5tBlC,gCAAA;EzCnIE,0CAAA;EACA,2CAAA;AX+mLJ;AoD1+KE;EACE,aAAA;ApD4+KJ;;AoDx+KA;EACE,uBAAA;EACA,chDxJS;AJmoLX;;AqDtoLA;EACE,kBAAA;ArDyoLF;;AqDtoLA;EACE,mBAAA;ArDyoLF;;AqDtoLA;EACE,kBAAA;EACA,WAAA;EACA,gBAAA;ArDyoLF;AsDhqLE;EACE,cAAA;EACA,WAAA;EACA,WAAA;AtDkqLJ;;AqD1oLA;EACE,kBAAA;EACA,aAAA;EACA,WAAA;EACA,WAAA;EACA,mBAAA;EACA,mCAAA;UAAA,2BAAA;EjClBI,sCiCmBJ;ArD6oLF;AoB5pLM;EiCQN;IjCPQ,gBAAA;EpB+pLN;AACF;;AqD/oLA;;;EAGE,cAAA;ArDkpLF;;AqD/oLA;;EAEE,2BAAA;ArDkpLF;;AqD/oLA;;EAEE,4BAAA;ArDkpLF;;AqDzoLE;EACE,UAAA;EACA,4BAAA;EACA,eAAA;ArD4oLJ;AqDzoLE;;;EAGE,UAAA;EACA,UAAA;ArD2oLJ;AqDxoLE;;EAEE,UAAA;EACA,UAAA;EjC5DE,2BiC6DF;ArD0oLJ;AoBnsLM;EiCqDJ;;IjCpDM,gBAAA;EpBusLN;AACF;;AqDvoLA;;EAEE,kBAAA;EACA,MAAA;EACA,SAAA;EACA,UAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,UjDo9BmC;EiDn9BnC,WjD1FS;EiD2FT,kBAAA;EACA,YjDk9BmC;EgBriC/B,8BiCoFJ;ArDyoLF;AoBztLM;EiCkEN;;IjCjEQ,gBAAA;EpB6tLN;AACF;AMnuLE;;;E+CwFE,WjDjGO;EiDkGP,qBAAA;EACA,UAAA;EACA,YjD28BiC;AJqsJrC;;AqD7oLA;EACE,OAAA;ArDgpLF;;AqD3oLA;EACE,QAAA;ArD8oLF;;AqDvoLA;;EAEE,qBAAA;EACA,WjDo8BmC;EiDn8BnC,YjDm8BmC;EiDl8BnC,mCAAA;ArD0oLF;;AqDxoLA;EACE,sNAAA;ArD2oLF;;AqDzoLA;EACE,uNAAA;ArD4oLF;;AqDnoLA;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,OAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;EACA,eAAA;EAEA,iBjD05BmC;EiDz5BnC,gBjDy5BmC;EiDx5BnC,gBAAA;ArDqoLF;AqDnoLE;EACE,uBAAA;EACA,cAAA;EACA,WjDw5BiC;EiDv5BjC,WjDw5BiC;EiDv5BjC,iBjDy5BiC;EiDx5BjC,gBjDw5BiC;EiDv5BjC,mBAAA;EACA,eAAA;EACA,sBjDhKO;EiDiKP,4BAAA;EAEA,kCAAA;EACA,qCAAA;EACA,YAAA;EjC5JE,6BiC6JF;ArDooLJ;AoB7xLM;EiC0IJ;IjCzIM,gBAAA;EpBgyLN;AACF;AqDtoLE;EACE,UAAA;ArDwoLJ;;AqD/nLA;EACE,kBAAA;EACA,UAAA;EACA,YAAA;EACA,SAAA;EACA,WAAA;EACA,iBAAA;EACA,oBAAA;EACA,WjD3LS;EiD4LT,kBAAA;ArDkoLF;;AuDj0LA;EACE;IAAK,yBAAA;EvDq0LL;AACF;;AuDv0LA;EACE;IAAK,yBAAA;EvDq0LL;AACF;AuDn0LA;EACE,qBAAA;EACA,WnDokCsB;EmDnkCtB,YnDmkCsB;EmDlkCtB,2BAAA;EACA,iCAAA;EACA,+BAAA;EAEA,kBAAA;EACA,uDAAA;UAAA,+CAAA;AvDo0LF;;AuDj0LA;EACE,WnD6jCwB;EmD5jCxB,YnD4jCwB;EmD3jCxB,mBnD6jCwB;AJuwJ1B;;AuD7zLA;EACE;IACE,mBAAA;EvDg0LF;EuD9zLA;IACE,UAAA;IACA,eAAA;EvDg0LF;AACF;;AuDv0LA;EACE;IACE,mBAAA;EvDg0LF;EuD9zLA;IACE,UAAA;IACA,eAAA;EvDg0LF;AACF;AuD7zLA;EACE,qBAAA;EACA,WnDoiCsB;EmDniCtB,YnDmiCsB;EmDliCtB,2BAAA;EACA,8BAAA;EAEA,kBAAA;EACA,UAAA;EACA,qDAAA;UAAA,6CAAA;AvD8zLF;;AuD3zLA;EACE,WnD6hCwB;EmD5hCxB,YnD4hCwB;AJkyJ1B;;AuD1zLE;EACE;;IAEE,gCAAA;YAAA,wBAAA;EvD6zLJ;AACF;AwDz3LA;EAAqB,mCAAA;AxD43LrB;;AwD33LA;EAAqB,8BAAA;AxD+3LrB;;AwD93LA;EAAqB,iCAAA;AxDk4LrB;;AwDj4LA;EAAqB,iCAAA;AxDq4LrB;;AwDp4LA;EAAqB,sCAAA;AxDw4LrB;;AwDv4LA;EAAqB,mCAAA;AxD24LrB;;AyD74LE;EACE,oCAAA;AzDg5LJ;;AMt4LE;;;EmDLI,oCAAA;AzDi5LN;;AyDv5LE;EACE,oCAAA;AzD05LJ;;AMh5LE;;;EmDLI,oCAAA;AzD25LN;;AyDj6LE;EACE,oCAAA;AzDo6LJ;;AM15LE;;;EmDLI,oCAAA;AzDq6LN;;AyD36LE;EACE,oCAAA;AzD86LJ;;AMp6LE;;;EmDLI,oCAAA;AzD+6LN;;AyDr7LE;EACE,oCAAA;AzDw7LJ;;AM96LE;;;EmDLI,oCAAA;AzDy7LN;;AyD/7LE;EACE,oCAAA;AzDk8LJ;;AMx7LE;;;EmDLI,oCAAA;AzDm8LN;;AyDz8LE;EACE,oCAAA;AzD48LJ;;AMl8LE;;;EmDLI,oCAAA;AzD68LN;;AyDn9LE;EACE,oCAAA;AzDs9LJ;;AM58LE;;;EmDLI,oCAAA;AzDu9LN;;A0Dt9LA;EACE,iCAAA;A1Dy9LF;;A0Dt9LA;EACE,wCAAA;A1Dy9LF;;A2Dp+LA;EAAkB,oCAAA;A3Dw+LlB;;A2Dv+LA;EAAkB,wCAAA;A3D2+LlB;;A2D1+LA;EAAkB,0CAAA;A3D8+LlB;;A2D7+LA;EAAkB,2CAAA;A3Di/LlB;;A2Dh/LA;EAAkB,yCAAA;A3Do/LlB;;A2Dl/LA;EAAmB,oBAAA;A3Ds/LnB;;A2Dr/LA;EAAmB,wBAAA;A3Dy/LnB;;A2Dx/LA;EAAmB,0BAAA;A3D4/LnB;;A2D3/LA;EAAmB,2BAAA;A3D+/LnB;;A2D9/LA;EAAmB,yBAAA;A3DkgMnB;;A2D//LE;EACE,gCAAA;A3DkgMJ;;A2DngME;EACE,gCAAA;A3DsgMJ;;A2DvgME;EACE,gCAAA;A3D0gMJ;;A2D3gME;EACE,gCAAA;A3D8gMJ;;A2D/gME;EACE,gCAAA;A3DkhMJ;;A2DnhME;EACE,gCAAA;A3DshMJ;;A2DvhME;EACE,gCAAA;A3D0hMJ;;A2D3hME;EACE,gCAAA;A3D8hMJ;;A2D1hMA;EACE,6BAAA;A3D6hMF;;A2DthMA;EACE,gCAAA;A3DyhMF;;A2DthMA;EACE,iCAAA;A3DyhMF;;A2DthMA;EACE,0CAAA;EACA,2CAAA;A3DyhMF;;A2DthMA;EACE,2CAAA;EACA,8CAAA;A3DyhMF;;A2DthMA;EACE,8CAAA;EACA,6CAAA;A3DyhMF;;A2DthMA;EACE,0CAAA;EACA,6CAAA;A3DyhMF;;A2DthMA;EACE,gCAAA;A3DyhMF;;A2DthMA;EACE,6BAAA;A3DyhMF;;A2DthMA;EACE,+BAAA;A3DyhMF;;A2DthMA;EACE,2BAAA;A3DyhMF;;AsDjmME;EACE,cAAA;EACA,WAAA;EACA,WAAA;AtDomMJ;;A4D7lMM;EAAwB,wBAAA;A5DimM9B;;A4DjmMM;EAAwB,0BAAA;A5DqmM9B;;A4DrmMM;EAAwB,gCAAA;A5DymM9B;;A4DzmMM;EAAwB,yBAAA;A5D6mM9B;;A4D7mMM;EAAwB,yBAAA;A5DinM9B;;A4DjnMM;EAAwB,6BAAA;A5DqnM9B;;A4DrnMM;EAAwB,8BAAA;A5DynM9B;;A4DznMM;EAAwB,wBAAA;A5D6nM9B;;A4D7nMM;EAAwB,+BAAA;A5DioM9B;;AehlMI;E6CjDE;IAAwB,wBAAA;E5DsoM5B;;E4DtoMI;IAAwB,0BAAA;E5D0oM5B;;E4D1oMI;IAAwB,gCAAA;E5D8oM5B;;E4D9oMI;IAAwB,yBAAA;E5DkpM5B;;E4DlpMI;IAAwB,yBAAA;E5DspM5B;;E4DtpMI;IAAwB,6BAAA;E5D0pM5B;;E4D1pMI;IAAwB,8BAAA;E5D8pM5B;;E4D9pMI;IAAwB,wBAAA;E5DkqM5B;;E4DlqMI;IAAwB,+BAAA;E5DsqM5B;AACF;AetnMI;E6CjDE;IAAwB,wBAAA;E5D2qM5B;;E4D3qMI;IAAwB,0BAAA;E5D+qM5B;;E4D/qMI;IAAwB,gCAAA;E5DmrM5B;;E4DnrMI;IAAwB,yBAAA;E5DurM5B;;E4DvrMI;IAAwB,yBAAA;E5D2rM5B;;E4D3rMI;IAAwB,6BAAA;E5D+rM5B;;E4D/rMI;IAAwB,8BAAA;E5DmsM5B;;E4DnsMI;IAAwB,wBAAA;E5DusM5B;;E4DvsMI;IAAwB,+BAAA;E5D2sM5B;AACF;Ae3pMI;E6CjDE;IAAwB,wBAAA;E5DgtM5B;;E4DhtMI;IAAwB,0BAAA;E5DotM5B;;E4DptMI;IAAwB,gCAAA;E5DwtM5B;;E4DxtMI;IAAwB,yBAAA;E5D4tM5B;;E4D5tMI;IAAwB,yBAAA;E5DguM5B;;E4DhuMI;IAAwB,6BAAA;E5DouM5B;;E4DpuMI;IAAwB,8BAAA;E5DwuM5B;;E4DxuMI;IAAwB,wBAAA;E5D4uM5B;;E4D5uMI;IAAwB,+BAAA;E5DgvM5B;AACF;AehsMI;E6CjDE;IAAwB,wBAAA;E5DqvM5B;;E4DrvMI;IAAwB,0BAAA;E5DyvM5B;;E4DzvMI;IAAwB,gCAAA;E5D6vM5B;;E4D7vMI;IAAwB,yBAAA;E5DiwM5B;;E4DjwMI;IAAwB,yBAAA;E5DqwM5B;;E4DrwMI;IAAwB,6BAAA;E5DywM5B;;E4DzwMI;IAAwB,8BAAA;E5D6wM5B;;E4D7wMI;IAAwB,wBAAA;E5DixM5B;;E4DjxMI;IAAwB,+BAAA;E5DqxM5B;AACF;A4D5wMA;EAEI;IAAqB,wBAAA;E5D8wMvB;;E4D9wME;IAAqB,0BAAA;E5DkxMvB;;E4DlxME;IAAqB,gCAAA;E5DsxMvB;;E4DtxME;IAAqB,yBAAA;E5D0xMvB;;E4D1xME;IAAqB,yBAAA;E5D8xMvB;;E4D9xME;IAAqB,6BAAA;E5DkyMvB;;E4DlyME;IAAqB,8BAAA;E5DsyMvB;;E4DtyME;IAAqB,wBAAA;E5D0yMvB;;E4D1yME;IAAqB,+BAAA;E5D8yMvB;AACF;A6Dp0MA;EACE,kBAAA;EACA,cAAA;EACA,WAAA;EACA,UAAA;EACA,gBAAA;A7Ds0MF;A6Dp0ME;EACE,cAAA;EACA,WAAA;A7Ds0MJ;A6Dn0ME;;;;;EAKE,kBAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,SAAA;A7Dq0MJ;;A6D5zMI;EACE,2BAAA;A7D+zMN;;A6Dh0MI;EACE,mBAAA;A7Dm0MN;;A6Dp0MI;EACE,gBAAA;A7Du0MN;;A6Dx0MI;EACE,iBAAA;A7D20MN;;A8Dp2MI;EAAgC,8BAAA;A9Dw2MpC;;A8Dv2MI;EAAgC,iCAAA;A9D22MpC;;A8D12MI;EAAgC,sCAAA;A9D82MpC;;A8D72MI;EAAgC,yCAAA;A9Di3MpC;;A8D/2MI;EAA8B,0BAAA;A9Dm3MlC;;A8Dl3MI;EAA8B,4BAAA;A9Ds3MlC;;A8Dr3MI;EAA8B,kCAAA;A9Dy3MlC;;A8Dx3MI;EAA8B,yBAAA;A9D43MlC;;A8D33MI;EAA8B,uBAAA;A9D+3MlC;;A8D93MI;EAA8B,uBAAA;A9Dk4MlC;;A8Dj4MI;EAA8B,yBAAA;A9Dq4MlC;;A8Dp4MI;EAA8B,yBAAA;A9Dw4MlC;;A8Dt4MI;EAAoC,sCAAA;A9D04MxC;;A8Dz4MI;EAAoC,oCAAA;A9D64MxC;;A8D54MI;EAAoC,kCAAA;A9Dg5MxC;;A8D/4MI;EAAoC,yCAAA;A9Dm5MxC;;A8Dl5MI;EAAoC,wCAAA;A9Ds5MxC;;A8Dp5MI;EAAiC,kCAAA;A9Dw5MrC;;A8Dv5MI;EAAiC,gCAAA;A9D25MrC;;A8D15MI;EAAiC,8BAAA;A9D85MrC;;A8D75MI;EAAiC,gCAAA;A9Di6MrC;;A8Dh6MI;EAAiC,+BAAA;A9Do6MrC;;A8Dl6MI;EAAkC,oCAAA;A9Ds6MtC;;A8Dr6MI;EAAkC,kCAAA;A9Dy6MtC;;A8Dx6MI;EAAkC,gCAAA;A9D46MtC;;A8D36MI;EAAkC,uCAAA;A9D+6MtC;;A8D96MI;EAAkC,sCAAA;A9Dk7MtC;;A8Dj7MI;EAAkC,iCAAA;A9Dq7MtC;;A8Dn7MI;EAAgC,2BAAA;A9Du7MpC;;A8Dt7MI;EAAgC,iCAAA;A9D07MpC;;A8Dz7MI;EAAgC,+BAAA;A9D67MpC;;A8D57MI;EAAgC,6BAAA;A9Dg8MpC;;A8D/7MI;EAAgC,+BAAA;A9Dm8MpC;;A8Dl8MI;EAAgC,8BAAA;A9Ds8MpC;;Ae17MI;E+ClDA;IAAgC,8BAAA;E9Di/MlC;;E8Dh/ME;IAAgC,iCAAA;E9Do/MlC;;E8Dn/ME;IAAgC,sCAAA;E9Du/MlC;;E8Dt/ME;IAAgC,yCAAA;E9D0/MlC;;E8Dx/ME;IAA8B,0BAAA;E9D4/MhC;;E8D3/ME;IAA8B,4BAAA;E9D+/MhC;;E8D9/ME;IAA8B,kCAAA;E9DkgNhC;;E8DjgNE;IAA8B,yBAAA;E9DqgNhC;;E8DpgNE;IAA8B,uBAAA;E9DwgNhC;;E8DvgNE;IAA8B,uBAAA;E9D2gNhC;;E8D1gNE;IAA8B,yBAAA;E9D8gNhC;;E8D7gNE;IAA8B,yBAAA;E9DihNhC;;E8D/gNE;IAAoC,sCAAA;E9DmhNtC;;E8DlhNE;IAAoC,oCAAA;E9DshNtC;;E8DrhNE;IAAoC,kCAAA;E9DyhNtC;;E8DxhNE;IAAoC,yCAAA;E9D4hNtC;;E8D3hNE;IAAoC,wCAAA;E9D+hNtC;;E8D7hNE;IAAiC,kCAAA;E9DiiNnC;;E8DhiNE;IAAiC,gCAAA;E9DoiNnC;;E8DniNE;IAAiC,8BAAA;E9DuiNnC;;E8DtiNE;IAAiC,gCAAA;E9D0iNnC;;E8DziNE;IAAiC,+BAAA;E9D6iNnC;;E8D3iNE;IAAkC,oCAAA;E9D+iNpC;;E8D9iNE;IAAkC,kCAAA;E9DkjNpC;;E8DjjNE;IAAkC,gCAAA;E9DqjNpC;;E8DpjNE;IAAkC,uCAAA;E9DwjNpC;;E8DvjNE;IAAkC,sCAAA;E9D2jNpC;;E8D1jNE;IAAkC,iCAAA;E9D8jNpC;;E8D5jNE;IAAgC,2BAAA;E9DgkNlC;;E8D/jNE;IAAgC,iCAAA;E9DmkNlC;;E8DlkNE;IAAgC,+BAAA;E9DskNlC;;E8DrkNE;IAAgC,6BAAA;E9DykNlC;;E8DxkNE;IAAgC,+BAAA;E9D4kNlC;;E8D3kNE;IAAgC,8BAAA;E9D+kNlC;AACF;AepkNI;E+ClDA;IAAgC,8BAAA;E9D0nNlC;;E8DznNE;IAAgC,iCAAA;E9D6nNlC;;E8D5nNE;IAAgC,sCAAA;E9DgoNlC;;E8D/nNE;IAAgC,yCAAA;E9DmoNlC;;E8DjoNE;IAA8B,0BAAA;E9DqoNhC;;E8DpoNE;IAA8B,4BAAA;E9DwoNhC;;E8DvoNE;IAA8B,kCAAA;E9D2oNhC;;E8D1oNE;IAA8B,yBAAA;E9D8oNhC;;E8D7oNE;IAA8B,uBAAA;E9DipNhC;;E8DhpNE;IAA8B,uBAAA;E9DopNhC;;E8DnpNE;IAA8B,yBAAA;E9DupNhC;;E8DtpNE;IAA8B,yBAAA;E9D0pNhC;;E8DxpNE;IAAoC,sCAAA;E9D4pNtC;;E8D3pNE;IAAoC,oCAAA;E9D+pNtC;;E8D9pNE;IAAoC,kCAAA;E9DkqNtC;;E8DjqNE;IAAoC,yCAAA;E9DqqNtC;;E8DpqNE;IAAoC,wCAAA;E9DwqNtC;;E8DtqNE;IAAiC,kCAAA;E9D0qNnC;;E8DzqNE;IAAiC,gCAAA;E9D6qNnC;;E8D5qNE;IAAiC,8BAAA;E9DgrNnC;;E8D/qNE;IAAiC,gCAAA;E9DmrNnC;;E8DlrNE;IAAiC,+BAAA;E9DsrNnC;;E8DprNE;IAAkC,oCAAA;E9DwrNpC;;E8DvrNE;IAAkC,kCAAA;E9D2rNpC;;E8D1rNE;IAAkC,gCAAA;E9D8rNpC;;E8D7rNE;IAAkC,uCAAA;E9DisNpC;;E8DhsNE;IAAkC,sCAAA;E9DosNpC;;E8DnsNE;IAAkC,iCAAA;E9DusNpC;;E8DrsNE;IAAgC,2BAAA;E9DysNlC;;E8DxsNE;IAAgC,iCAAA;E9D4sNlC;;E8D3sNE;IAAgC,+BAAA;E9D+sNlC;;E8D9sNE;IAAgC,6BAAA;E9DktNlC;;E8DjtNE;IAAgC,+BAAA;E9DqtNlC;;E8DptNE;IAAgC,8BAAA;E9DwtNlC;AACF;Ae7sNI;E+ClDA;IAAgC,8BAAA;E9DmwNlC;;E8DlwNE;IAAgC,iCAAA;E9DswNlC;;E8DrwNE;IAAgC,sCAAA;E9DywNlC;;E8DxwNE;IAAgC,yCAAA;E9D4wNlC;;E8D1wNE;IAA8B,0BAAA;E9D8wNhC;;E8D7wNE;IAA8B,4BAAA;E9DixNhC;;E8DhxNE;IAA8B,kCAAA;E9DoxNhC;;E8DnxNE;IAA8B,yBAAA;E9DuxNhC;;E8DtxNE;IAA8B,uBAAA;E9D0xNhC;;E8DzxNE;IAA8B,uBAAA;E9D6xNhC;;E8D5xNE;IAA8B,yBAAA;E9DgyNhC;;E8D/xNE;IAA8B,yBAAA;E9DmyNhC;;E8DjyNE;IAAoC,sCAAA;E9DqyNtC;;E8DpyNE;IAAoC,oCAAA;E9DwyNtC;;E8DvyNE;IAAoC,kCAAA;E9D2yNtC;;E8D1yNE;IAAoC,yCAAA;E9D8yNtC;;E8D7yNE;IAAoC,wCAAA;E9DizNtC;;E8D/yNE;IAAiC,kCAAA;E9DmzNnC;;E8DlzNE;IAAiC,gCAAA;E9DszNnC;;E8DrzNE;IAAiC,8BAAA;E9DyzNnC;;E8DxzNE;IAAiC,gCAAA;E9D4zNnC;;E8D3zNE;IAAiC,+BAAA;E9D+zNnC;;E8D7zNE;IAAkC,oCAAA;E9Di0NpC;;E8Dh0NE;IAAkC,kCAAA;E9Do0NpC;;E8Dn0NE;IAAkC,gCAAA;E9Du0NpC;;E8Dt0NE;IAAkC,uCAAA;E9D00NpC;;E8Dz0NE;IAAkC,sCAAA;E9D60NpC;;E8D50NE;IAAkC,iCAAA;E9Dg1NpC;;E8D90NE;IAAgC,2BAAA;E9Dk1NlC;;E8Dj1NE;IAAgC,iCAAA;E9Dq1NlC;;E8Dp1NE;IAAgC,+BAAA;E9Dw1NlC;;E8Dv1NE;IAAgC,6BAAA;E9D21NlC;;E8D11NE;IAAgC,+BAAA;E9D81NlC;;E8D71NE;IAAgC,8BAAA;E9Di2NlC;AACF;Aet1NI;E+ClDA;IAAgC,8BAAA;E9D44NlC;;E8D34NE;IAAgC,iCAAA;E9D+4NlC;;E8D94NE;IAAgC,sCAAA;E9Dk5NlC;;E8Dj5NE;IAAgC,yCAAA;E9Dq5NlC;;E8Dn5NE;IAA8B,0BAAA;E9Du5NhC;;E8Dt5NE;IAA8B,4BAAA;E9D05NhC;;E8Dz5NE;IAA8B,kCAAA;E9D65NhC;;E8D55NE;IAA8B,yBAAA;E9Dg6NhC;;E8D/5NE;IAA8B,uBAAA;E9Dm6NhC;;E8Dl6NE;IAA8B,uBAAA;E9Ds6NhC;;E8Dr6NE;IAA8B,yBAAA;E9Dy6NhC;;E8Dx6NE;IAA8B,yBAAA;E9D46NhC;;E8D16NE;IAAoC,sCAAA;E9D86NtC;;E8D76NE;IAAoC,oCAAA;E9Di7NtC;;E8Dh7NE;IAAoC,kCAAA;E9Do7NtC;;E8Dn7NE;IAAoC,yCAAA;E9Du7NtC;;E8Dt7NE;IAAoC,wCAAA;E9D07NtC;;E8Dx7NE;IAAiC,kCAAA;E9D47NnC;;E8D37NE;IAAiC,gCAAA;E9D+7NnC;;E8D97NE;IAAiC,8BAAA;E9Dk8NnC;;E8Dj8NE;IAAiC,gCAAA;E9Dq8NnC;;E8Dp8NE;IAAiC,+BAAA;E9Dw8NnC;;E8Dt8NE;IAAkC,oCAAA;E9D08NpC;;E8Dz8NE;IAAkC,kCAAA;E9D68NpC;;E8D58NE;IAAkC,gCAAA;E9Dg9NpC;;E8D/8NE;IAAkC,uCAAA;E9Dm9NpC;;E8Dl9NE;IAAkC,sCAAA;E9Ds9NpC;;E8Dr9NE;IAAkC,iCAAA;E9Dy9NpC;;E8Dv9NE;IAAgC,2BAAA;E9D29NlC;;E8D19NE;IAAgC,iCAAA;E9D89NlC;;E8D79NE;IAAgC,+BAAA;E9Di+NlC;;E8Dh+NE;IAAgC,6BAAA;E9Do+NlC;;E8Dn+NE;IAAgC,+BAAA;E9Du+NlC;;E8Dt+NE;IAAgC,8BAAA;E9D0+NlC;AACF;A+DrhOI;EAAwB,sBAAA;A/DwhO5B;;A+DvhOI;EAAwB,uBAAA;A/D2hO5B;;A+D1hOI;EAAwB,sBAAA;A/D8hO5B;;Ae1+NI;EgDtDA;IAAwB,sBAAA;E/DqiO1B;;E+DpiOE;IAAwB,uBAAA;E/DwiO1B;;E+DviOE;IAAwB,sBAAA;E/D2iO1B;AACF;Aex/NI;EgDtDA;IAAwB,sBAAA;E/DkjO1B;;E+DjjOE;IAAwB,uBAAA;E/DqjO1B;;E+DpjOE;IAAwB,sBAAA;E/DwjO1B;AACF;AergOI;EgDtDA;IAAwB,sBAAA;E/D+jO1B;;E+D9jOE;IAAwB,uBAAA;E/DkkO1B;;E+DjkOE;IAAwB,sBAAA;E/DqkO1B;AACF;AelhOI;EgDtDA;IAAwB,sBAAA;E/D4kO1B;;E+D3kOE;IAAwB,uBAAA;E/D+kO1B;;E+D9kOE;IAAwB,sBAAA;E/DklO1B;AACF;AgExlOE;EAAyB,mCAAA;KAAA,gCAAA;UAAA,2BAAA;AhE2lO3B;;AgE3lOE;EAAyB,oCAAA;KAAA,iCAAA;MAAA,gCAAA;UAAA,4BAAA;AhE+lO3B;;AgE/lOE;EAAyB,oCAAA;KAAA,iCAAA;MAAA,gCAAA;UAAA,4BAAA;AhEmmO3B;;AiEnmOE;EAAsB,yBAAA;AjEumOxB;;AiEvmOE;EAAsB,2BAAA;AjE2mOxB;;AkE1mOE;EAAyB,2BAAA;AlE8mO3B;;AkE9mOE;EAAyB,6BAAA;AlEknO3B;;AkElnOE;EAAyB,6BAAA;AlEsnO3B;;AkEtnOE;EAAyB,0BAAA;AlE0nO3B;;AkE1nOE;EAAyB,2BAAA;AlE8nO3B;;AkEznOA;EACE,eAAA;EACA,MAAA;EACA,QAAA;EACA,OAAA;EACA,a9DgqBkC;AJ49MpC;;AkEznOA;EACE,eAAA;EACA,QAAA;EACA,SAAA;EACA,OAAA;EACA,a9DwpBkC;AJo+MpC;;AkExnOE;EADF;IAEI,gBAAA;IACA,MAAA;IACA,a9DgpBgC;EJ4+MlC;AACF;;AmEtpOA;ECEE,kBAAA;EACA,UAAA;EACA,WAAA;EACA,UAAA;EACA,YAAA;EACA,gBAAA;EACA,sBAAA;EACA,mBAAA;EACA,SAAA;ApEwpOF;;AoE9oOE;EAEE,gBAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;EACA,UAAA;EACA,mBAAA;ApEgpOJ;;AqE7qOA;EAAa,8DAAA;ArEirOb;;AqEhrOA;EAAU,wDAAA;ArEorOV;;AqEnrOA;EAAa,uDAAA;ArEurOb;;AqEtrOA;EAAe,2BAAA;ArE0rOf;;AsEzrOI;EAAuB,qBAAA;AtE6rO3B;;AsE7rOI;EAAuB,qBAAA;AtEisO3B;;AsEjsOI;EAAuB,qBAAA;AtEqsO3B;;AsErsOI;EAAuB,sBAAA;AtEysO3B;;AsEzsOI;EAAuB,sBAAA;AtE6sO3B;;AsE7sOI;EAAuB,sBAAA;AtEitO3B;;AsEjtOI;EAAuB,sBAAA;AtEqtO3B;;AsErtOI;EAAuB,sBAAA;AtEytO3B;;AsEztOI;EAAuB,uBAAA;AtE6tO3B;;AsE7tOI;EAAuB,uBAAA;AtEiuO3B;;AsE7tOA;EAAU,0BAAA;AtEiuOV;;AsEhuOA;EAAU,2BAAA;AtEouOV;;AsEhuOA;EAAc,2BAAA;AtEouOd;;AsEnuOA;EAAc,4BAAA;AtEuuOd;;AsEruOA;EAAU,uBAAA;AtEyuOV;;AsExuOA;EAAU,wBAAA;AtE4uOV;;AuErvOQ;EAAgC,oBAAA;AvEyvOxC;;AuExvOQ;;EAEE,wBAAA;AvE2vOV;;AuEzvOQ;;EAEE,0BAAA;AvE4vOV;;AuE1vOQ;;EAEE,2BAAA;AvE6vOV;;AuE3vOQ;;EAEE,yBAAA;AvE8vOV;;AuE7wOQ;EAAgC,0BAAA;AvEixOxC;;AuEhxOQ;;EAEE,8BAAA;AvEmxOV;;AuEjxOQ;;EAEE,gCAAA;AvEoxOV;;AuElxOQ;;EAEE,iCAAA;AvEqxOV;;AuEnxOQ;;EAEE,+BAAA;AvEsxOV;;AuEryOQ;EAAgC,yBAAA;AvEyyOxC;;AuExyOQ;;EAEE,6BAAA;AvE2yOV;;AuEzyOQ;;EAEE,+BAAA;AvE4yOV;;AuE1yOQ;;EAEE,gCAAA;AvE6yOV;;AuE3yOQ;;EAEE,8BAAA;AvE8yOV;;AuE7zOQ;EAAgC,uBAAA;AvEi0OxC;;AuEh0OQ;;EAEE,2BAAA;AvEm0OV;;AuEj0OQ;;EAEE,6BAAA;AvEo0OV;;AuEl0OQ;;EAEE,8BAAA;AvEq0OV;;AuEn0OQ;;EAEE,4BAAA;AvEs0OV;;AuEr1OQ;EAAgC,yBAAA;AvEy1OxC;;AuEx1OQ;;EAEE,6BAAA;AvE21OV;;AuEz1OQ;;EAEE,+BAAA;AvE41OV;;AuE11OQ;;EAEE,gCAAA;AvE61OV;;AuE31OQ;;EAEE,8BAAA;AvE81OV;;AuE72OQ;EAAgC,uBAAA;AvEi3OxC;;AuEh3OQ;;EAEE,2BAAA;AvEm3OV;;AuEj3OQ;;EAEE,6BAAA;AvEo3OV;;AuEl3OQ;;EAEE,8BAAA;AvEq3OV;;AuEn3OQ;;EAEE,4BAAA;AvEs3OV;;AuEr4OQ;EAAgC,qBAAA;AvEy4OxC;;AuEx4OQ;;EAEE,yBAAA;AvE24OV;;AuEz4OQ;;EAEE,2BAAA;AvE44OV;;AuE14OQ;;EAEE,4BAAA;AvE64OV;;AuE34OQ;;EAEE,0BAAA;AvE84OV;;AuE75OQ;EAAgC,2BAAA;AvEi6OxC;;AuEh6OQ;;EAEE,+BAAA;AvEm6OV;;AuEj6OQ;;EAEE,iCAAA;AvEo6OV;;AuEl6OQ;;EAEE,kCAAA;AvEq6OV;;AuEn6OQ;;EAEE,gCAAA;AvEs6OV;;AuEr7OQ;EAAgC,0BAAA;AvEy7OxC;;AuEx7OQ;;EAEE,8BAAA;AvE27OV;;AuEz7OQ;;EAEE,gCAAA;AvE47OV;;AuE17OQ;;EAEE,iCAAA;AvE67OV;;AuE37OQ;;EAEE,+BAAA;AvE87OV;;AuE78OQ;EAAgC,wBAAA;AvEi9OxC;;AuEh9OQ;;EAEE,4BAAA;AvEm9OV;;AuEj9OQ;;EAEE,8BAAA;AvEo9OV;;AuEl9OQ;;EAEE,+BAAA;AvEq9OV;;AuEn9OQ;;EAEE,6BAAA;AvEs9OV;;AuEr+OQ;EAAgC,0BAAA;AvEy+OxC;;AuEx+OQ;;EAEE,8BAAA;AvE2+OV;;AuEz+OQ;;EAEE,gCAAA;AvE4+OV;;AuE1+OQ;;EAEE,iCAAA;AvE6+OV;;AuE3+OQ;;EAEE,+BAAA;AvE8+OV;;AuE7/OQ;EAAgC,wBAAA;AvEigPxC;;AuEhgPQ;;EAEE,4BAAA;AvEmgPV;;AuEjgPQ;;EAEE,8BAAA;AvEogPV;;AuElgPQ;;EAEE,+BAAA;AvEqgPV;;AuEngPQ;;EAEE,6BAAA;AvEsgPV;;AuE9/OQ;EAAwB,2BAAA;AvEkgPhC;;AuEjgPQ;;EAEE,+BAAA;AvEogPV;;AuElgPQ;;EAEE,iCAAA;AvEqgPV;;AuEngPQ;;EAEE,kCAAA;AvEsgPV;;AuEpgPQ;;EAEE,gCAAA;AvEugPV;;AuEthPQ;EAAwB,0BAAA;AvE0hPhC;;AuEzhPQ;;EAEE,8BAAA;AvE4hPV;;AuE1hPQ;;EAEE,gCAAA;AvE6hPV;;AuE3hPQ;;EAEE,iCAAA;AvE8hPV;;AuE5hPQ;;EAEE,+BAAA;AvE+hPV;;AuE9iPQ;EAAwB,wBAAA;AvEkjPhC;;AuEjjPQ;;EAEE,4BAAA;AvEojPV;;AuEljPQ;;EAEE,8BAAA;AvEqjPV;;AuEnjPQ;;EAEE,+BAAA;AvEsjPV;;AuEpjPQ;;EAEE,6BAAA;AvEujPV;;AuEtkPQ;EAAwB,0BAAA;AvE0kPhC;;AuEzkPQ;;EAEE,8BAAA;AvE4kPV;;AuE1kPQ;;EAEE,gCAAA;AvE6kPV;;AuE3kPQ;;EAEE,iCAAA;AvE8kPV;;AuE5kPQ;;EAEE,+BAAA;AvE+kPV;;AuE9lPQ;EAAwB,wBAAA;AvEkmPhC;;AuEjmPQ;;EAEE,4BAAA;AvEomPV;;AuElmPQ;;EAEE,8BAAA;AvEqmPV;;AuEnmPQ;;EAEE,+BAAA;AvEsmPV;;AuEpmPQ;;EAEE,6BAAA;AvEumPV;;AuEjmPI;EAAmB,uBAAA;AvEqmPvB;;AuEpmPI;;EAEE,2BAAA;AvEumPN;;AuErmPI;;EAEE,6BAAA;AvEwmPN;;AuEtmPI;;EAEE,8BAAA;AvEymPN;;AuEvmPI;;EAEE,4BAAA;AvE0mPN;;AennPI;EwDlDI;IAAgC,oBAAA;EvE0qPtC;;EuEzqPM;;IAEE,wBAAA;EvE4qPR;;EuE1qPM;;IAEE,0BAAA;EvE6qPR;;EuE3qPM;;IAEE,2BAAA;EvE8qPR;;EuE5qPM;;IAEE,yBAAA;EvE+qPR;;EuE9rPM;IAAgC,0BAAA;EvEksPtC;;EuEjsPM;;IAEE,8BAAA;EvEosPR;;EuElsPM;;IAEE,gCAAA;EvEqsPR;;EuEnsPM;;IAEE,iCAAA;EvEssPR;;EuEpsPM;;IAEE,+BAAA;EvEusPR;;EuEttPM;IAAgC,yBAAA;EvE0tPtC;;EuEztPM;;IAEE,6BAAA;EvE4tPR;;EuE1tPM;;IAEE,+BAAA;EvE6tPR;;EuE3tPM;;IAEE,gCAAA;EvE8tPR;;EuE5tPM;;IAEE,8BAAA;EvE+tPR;;EuE9uPM;IAAgC,uBAAA;EvEkvPtC;;EuEjvPM;;IAEE,2BAAA;EvEovPR;;EuElvPM;;IAEE,6BAAA;EvEqvPR;;EuEnvPM;;IAEE,8BAAA;EvEsvPR;;EuEpvPM;;IAEE,4BAAA;EvEuvPR;;EuEtwPM;IAAgC,yBAAA;EvE0wPtC;;EuEzwPM;;IAEE,6BAAA;EvE4wPR;;EuE1wPM;;IAEE,+BAAA;EvE6wPR;;EuE3wPM;;IAEE,gCAAA;EvE8wPR;;EuE5wPM;;IAEE,8BAAA;EvE+wPR;;EuE9xPM;IAAgC,uBAAA;EvEkyPtC;;EuEjyPM;;IAEE,2BAAA;EvEoyPR;;EuElyPM;;IAEE,6BAAA;EvEqyPR;;EuEnyPM;;IAEE,8BAAA;EvEsyPR;;EuEpyPM;;IAEE,4BAAA;EvEuyPR;;EuEtzPM;IAAgC,qBAAA;EvE0zPtC;;EuEzzPM;;IAEE,yBAAA;EvE4zPR;;EuE1zPM;;IAEE,2BAAA;EvE6zPR;;EuE3zPM;;IAEE,4BAAA;EvE8zPR;;EuE5zPM;;IAEE,0BAAA;EvE+zPR;;EuE90PM;IAAgC,2BAAA;EvEk1PtC;;EuEj1PM;;IAEE,+BAAA;EvEo1PR;;EuEl1PM;;IAEE,iCAAA;EvEq1PR;;EuEn1PM;;IAEE,kCAAA;EvEs1PR;;EuEp1PM;;IAEE,gCAAA;EvEu1PR;;EuEt2PM;IAAgC,0BAAA;EvE02PtC;;EuEz2PM;;IAEE,8BAAA;EvE42PR;;EuE12PM;;IAEE,gCAAA;EvE62PR;;EuE32PM;;IAEE,iCAAA;EvE82PR;;EuE52PM;;IAEE,+BAAA;EvE+2PR;;EuE93PM;IAAgC,wBAAA;EvEk4PtC;;EuEj4PM;;IAEE,4BAAA;EvEo4PR;;EuEl4PM;;IAEE,8BAAA;EvEq4PR;;EuEn4PM;;IAEE,+BAAA;EvEs4PR;;EuEp4PM;;IAEE,6BAAA;EvEu4PR;;EuEt5PM;IAAgC,0BAAA;EvE05PtC;;EuEz5PM;;IAEE,8BAAA;EvE45PR;;EuE15PM;;IAEE,gCAAA;EvE65PR;;EuE35PM;;IAEE,iCAAA;EvE85PR;;EuE55PM;;IAEE,+BAAA;EvE+5PR;;EuE96PM;IAAgC,wBAAA;EvEk7PtC;;EuEj7PM;;IAEE,4BAAA;EvEo7PR;;EuEl7PM;;IAEE,8BAAA;EvEq7PR;;EuEn7PM;;IAEE,+BAAA;EvEs7PR;;EuEp7PM;;IAEE,6BAAA;EvEu7PR;;EuE/6PM;IAAwB,2BAAA;EvEm7P9B;;EuEl7PM;;IAEE,+BAAA;EvEq7PR;;EuEn7PM;;IAEE,iCAAA;EvEs7PR;;EuEp7PM;;IAEE,kCAAA;EvEu7PR;;EuEr7PM;;IAEE,gCAAA;EvEw7PR;;EuEv8PM;IAAwB,0BAAA;EvE28P9B;;EuE18PM;;IAEE,8BAAA;EvE68PR;;EuE38PM;;IAEE,gCAAA;EvE88PR;;EuE58PM;;IAEE,iCAAA;EvE+8PR;;EuE78PM;;IAEE,+BAAA;EvEg9PR;;EuE/9PM;IAAwB,wBAAA;EvEm+P9B;;EuEl+PM;;IAEE,4BAAA;EvEq+PR;;EuEn+PM;;IAEE,8BAAA;EvEs+PR;;EuEp+PM;;IAEE,+BAAA;EvEu+PR;;EuEr+PM;;IAEE,6BAAA;EvEw+PR;;EuEv/PM;IAAwB,0BAAA;EvE2/P9B;;EuE1/PM;;IAEE,8BAAA;EvE6/PR;;EuE3/PM;;IAEE,gCAAA;EvE8/PR;;EuE5/PM;;IAEE,iCAAA;EvE+/PR;;EuE7/PM;;IAEE,+BAAA;EvEggQR;;EuE/gQM;IAAwB,wBAAA;EvEmhQ9B;;EuElhQM;;IAEE,4BAAA;EvEqhQR;;EuEnhQM;;IAEE,8BAAA;EvEshQR;;EuEphQM;;IAEE,+BAAA;EvEuhQR;;EuErhQM;;IAEE,6BAAA;EvEwhQR;;EuElhQE;IAAmB,uBAAA;EvEshQrB;;EuErhQE;;IAEE,2BAAA;EvEwhQJ;;EuEthQE;;IAEE,6BAAA;EvEyhQJ;;EuEvhQE;;IAEE,8BAAA;EvE0hQJ;;EuExhQE;;IAEE,4BAAA;EvE2hQJ;AACF;AeriQI;EwDlDI;IAAgC,oBAAA;EvE2lQtC;;EuE1lQM;;IAEE,wBAAA;EvE6lQR;;EuE3lQM;;IAEE,0BAAA;EvE8lQR;;EuE5lQM;;IAEE,2BAAA;EvE+lQR;;EuE7lQM;;IAEE,yBAAA;EvEgmQR;;EuE/mQM;IAAgC,0BAAA;EvEmnQtC;;EuElnQM;;IAEE,8BAAA;EvEqnQR;;EuEnnQM;;IAEE,gCAAA;EvEsnQR;;EuEpnQM;;IAEE,iCAAA;EvEunQR;;EuErnQM;;IAEE,+BAAA;EvEwnQR;;EuEvoQM;IAAgC,yBAAA;EvE2oQtC;;EuE1oQM;;IAEE,6BAAA;EvE6oQR;;EuE3oQM;;IAEE,+BAAA;EvE8oQR;;EuE5oQM;;IAEE,gCAAA;EvE+oQR;;EuE7oQM;;IAEE,8BAAA;EvEgpQR;;EuE/pQM;IAAgC,uBAAA;EvEmqQtC;;EuElqQM;;IAEE,2BAAA;EvEqqQR;;EuEnqQM;;IAEE,6BAAA;EvEsqQR;;EuEpqQM;;IAEE,8BAAA;EvEuqQR;;EuErqQM;;IAEE,4BAAA;EvEwqQR;;EuEvrQM;IAAgC,yBAAA;EvE2rQtC;;EuE1rQM;;IAEE,6BAAA;EvE6rQR;;EuE3rQM;;IAEE,+BAAA;EvE8rQR;;EuE5rQM;;IAEE,gCAAA;EvE+rQR;;EuE7rQM;;IAEE,8BAAA;EvEgsQR;;EuE/sQM;IAAgC,uBAAA;EvEmtQtC;;EuEltQM;;IAEE,2BAAA;EvEqtQR;;EuEntQM;;IAEE,6BAAA;EvEstQR;;EuEptQM;;IAEE,8BAAA;EvEutQR;;EuErtQM;;IAEE,4BAAA;EvEwtQR;;EuEvuQM;IAAgC,qBAAA;EvE2uQtC;;EuE1uQM;;IAEE,yBAAA;EvE6uQR;;EuE3uQM;;IAEE,2BAAA;EvE8uQR;;EuE5uQM;;IAEE,4BAAA;EvE+uQR;;EuE7uQM;;IAEE,0BAAA;EvEgvQR;;EuE/vQM;IAAgC,2BAAA;EvEmwQtC;;EuElwQM;;IAEE,+BAAA;EvEqwQR;;EuEnwQM;;IAEE,iCAAA;EvEswQR;;EuEpwQM;;IAEE,kCAAA;EvEuwQR;;EuErwQM;;IAEE,gCAAA;EvEwwQR;;EuEvxQM;IAAgC,0BAAA;EvE2xQtC;;EuE1xQM;;IAEE,8BAAA;EvE6xQR;;EuE3xQM;;IAEE,gCAAA;EvE8xQR;;EuE5xQM;;IAEE,iCAAA;EvE+xQR;;EuE7xQM;;IAEE,+BAAA;EvEgyQR;;EuE/yQM;IAAgC,wBAAA;EvEmzQtC;;EuElzQM;;IAEE,4BAAA;EvEqzQR;;EuEnzQM;;IAEE,8BAAA;EvEszQR;;EuEpzQM;;IAEE,+BAAA;EvEuzQR;;EuErzQM;;IAEE,6BAAA;EvEwzQR;;EuEv0QM;IAAgC,0BAAA;EvE20QtC;;EuE10QM;;IAEE,8BAAA;EvE60QR;;EuE30QM;;IAEE,gCAAA;EvE80QR;;EuE50QM;;IAEE,iCAAA;EvE+0QR;;EuE70QM;;IAEE,+BAAA;EvEg1QR;;EuE/1QM;IAAgC,wBAAA;EvEm2QtC;;EuEl2QM;;IAEE,4BAAA;EvEq2QR;;EuEn2QM;;IAEE,8BAAA;EvEs2QR;;EuEp2QM;;IAEE,+BAAA;EvEu2QR;;EuEr2QM;;IAEE,6BAAA;EvEw2QR;;EuEh2QM;IAAwB,2BAAA;EvEo2Q9B;;EuEn2QM;;IAEE,+BAAA;EvEs2QR;;EuEp2QM;;IAEE,iCAAA;EvEu2QR;;EuEr2QM;;IAEE,kCAAA;EvEw2QR;;EuEt2QM;;IAEE,gCAAA;EvEy2QR;;EuEx3QM;IAAwB,0BAAA;EvE43Q9B;;EuE33QM;;IAEE,8BAAA;EvE83QR;;EuE53QM;;IAEE,gCAAA;EvE+3QR;;EuE73QM;;IAEE,iCAAA;EvEg4QR;;EuE93QM;;IAEE,+BAAA;EvEi4QR;;EuEh5QM;IAAwB,wBAAA;EvEo5Q9B;;EuEn5QM;;IAEE,4BAAA;EvEs5QR;;EuEp5QM;;IAEE,8BAAA;EvEu5QR;;EuEr5QM;;IAEE,+BAAA;EvEw5QR;;EuEt5QM;;IAEE,6BAAA;EvEy5QR;;EuEx6QM;IAAwB,0BAAA;EvE46Q9B;;EuE36QM;;IAEE,8BAAA;EvE86QR;;EuE56QM;;IAEE,gCAAA;EvE+6QR;;EuE76QM;;IAEE,iCAAA;EvEg7QR;;EuE96QM;;IAEE,+BAAA;EvEi7QR;;EuEh8QM;IAAwB,wBAAA;EvEo8Q9B;;EuEn8QM;;IAEE,4BAAA;EvEs8QR;;EuEp8QM;;IAEE,8BAAA;EvEu8QR;;EuEr8QM;;IAEE,+BAAA;EvEw8QR;;EuEt8QM;;IAEE,6BAAA;EvEy8QR;;EuEn8QE;IAAmB,uBAAA;EvEu8QrB;;EuEt8QE;;IAEE,2BAAA;EvEy8QJ;;EuEv8QE;;IAEE,6BAAA;EvE08QJ;;EuEx8QE;;IAEE,8BAAA;EvE28QJ;;EuEz8QE;;IAEE,4BAAA;EvE48QJ;AACF;Aet9QI;EwDlDI;IAAgC,oBAAA;EvE4gRtC;;EuE3gRM;;IAEE,wBAAA;EvE8gRR;;EuE5gRM;;IAEE,0BAAA;EvE+gRR;;EuE7gRM;;IAEE,2BAAA;EvEghRR;;EuE9gRM;;IAEE,yBAAA;EvEihRR;;EuEhiRM;IAAgC,0BAAA;EvEoiRtC;;EuEniRM;;IAEE,8BAAA;EvEsiRR;;EuEpiRM;;IAEE,gCAAA;EvEuiRR;;EuEriRM;;IAEE,iCAAA;EvEwiRR;;EuEtiRM;;IAEE,+BAAA;EvEyiRR;;EuExjRM;IAAgC,yBAAA;EvE4jRtC;;EuE3jRM;;IAEE,6BAAA;EvE8jRR;;EuE5jRM;;IAEE,+BAAA;EvE+jRR;;EuE7jRM;;IAEE,gCAAA;EvEgkRR;;EuE9jRM;;IAEE,8BAAA;EvEikRR;;EuEhlRM;IAAgC,uBAAA;EvEolRtC;;EuEnlRM;;IAEE,2BAAA;EvEslRR;;EuEplRM;;IAEE,6BAAA;EvEulRR;;EuErlRM;;IAEE,8BAAA;EvEwlRR;;EuEtlRM;;IAEE,4BAAA;EvEylRR;;EuExmRM;IAAgC,yBAAA;EvE4mRtC;;EuE3mRM;;IAEE,6BAAA;EvE8mRR;;EuE5mRM;;IAEE,+BAAA;EvE+mRR;;EuE7mRM;;IAEE,gCAAA;EvEgnRR;;EuE9mRM;;IAEE,8BAAA;EvEinRR;;EuEhoRM;IAAgC,uBAAA;EvEooRtC;;EuEnoRM;;IAEE,2BAAA;EvEsoRR;;EuEpoRM;;IAEE,6BAAA;EvEuoRR;;EuEroRM;;IAEE,8BAAA;EvEwoRR;;EuEtoRM;;IAEE,4BAAA;EvEyoRR;;EuExpRM;IAAgC,qBAAA;EvE4pRtC;;EuE3pRM;;IAEE,yBAAA;EvE8pRR;;EuE5pRM;;IAEE,2BAAA;EvE+pRR;;EuE7pRM;;IAEE,4BAAA;EvEgqRR;;EuE9pRM;;IAEE,0BAAA;EvEiqRR;;EuEhrRM;IAAgC,2BAAA;EvEorRtC;;EuEnrRM;;IAEE,+BAAA;EvEsrRR;;EuEprRM;;IAEE,iCAAA;EvEurRR;;EuErrRM;;IAEE,kCAAA;EvEwrRR;;EuEtrRM;;IAEE,gCAAA;EvEyrRR;;EuExsRM;IAAgC,0BAAA;EvE4sRtC;;EuE3sRM;;IAEE,8BAAA;EvE8sRR;;EuE5sRM;;IAEE,gCAAA;EvE+sRR;;EuE7sRM;;IAEE,iCAAA;EvEgtRR;;EuE9sRM;;IAEE,+BAAA;EvEitRR;;EuEhuRM;IAAgC,wBAAA;EvEouRtC;;EuEnuRM;;IAEE,4BAAA;EvEsuRR;;EuEpuRM;;IAEE,8BAAA;EvEuuRR;;EuEruRM;;IAEE,+BAAA;EvEwuRR;;EuEtuRM;;IAEE,6BAAA;EvEyuRR;;EuExvRM;IAAgC,0BAAA;EvE4vRtC;;EuE3vRM;;IAEE,8BAAA;EvE8vRR;;EuE5vRM;;IAEE,gCAAA;EvE+vRR;;EuE7vRM;;IAEE,iCAAA;EvEgwRR;;EuE9vRM;;IAEE,+BAAA;EvEiwRR;;EuEhxRM;IAAgC,wBAAA;EvEoxRtC;;EuEnxRM;;IAEE,4BAAA;EvEsxRR;;EuEpxRM;;IAEE,8BAAA;EvEuxRR;;EuErxRM;;IAEE,+BAAA;EvEwxRR;;EuEtxRM;;IAEE,6BAAA;EvEyxRR;;EuEjxRM;IAAwB,2BAAA;EvEqxR9B;;EuEpxRM;;IAEE,+BAAA;EvEuxRR;;EuErxRM;;IAEE,iCAAA;EvEwxRR;;EuEtxRM;;IAEE,kCAAA;EvEyxRR;;EuEvxRM;;IAEE,gCAAA;EvE0xRR;;EuEzyRM;IAAwB,0BAAA;EvE6yR9B;;EuE5yRM;;IAEE,8BAAA;EvE+yRR;;EuE7yRM;;IAEE,gCAAA;EvEgzRR;;EuE9yRM;;IAEE,iCAAA;EvEizRR;;EuE/yRM;;IAEE,+BAAA;EvEkzRR;;EuEj0RM;IAAwB,wBAAA;EvEq0R9B;;EuEp0RM;;IAEE,4BAAA;EvEu0RR;;EuEr0RM;;IAEE,8BAAA;EvEw0RR;;EuEt0RM;;IAEE,+BAAA;EvEy0RR;;EuEv0RM;;IAEE,6BAAA;EvE00RR;;EuEz1RM;IAAwB,0BAAA;EvE61R9B;;EuE51RM;;IAEE,8BAAA;EvE+1RR;;EuE71RM;;IAEE,gCAAA;EvEg2RR;;EuE91RM;;IAEE,iCAAA;EvEi2RR;;EuE/1RM;;IAEE,+BAAA;EvEk2RR;;EuEj3RM;IAAwB,wBAAA;EvEq3R9B;;EuEp3RM;;IAEE,4BAAA;EvEu3RR;;EuEr3RM;;IAEE,8BAAA;EvEw3RR;;EuEt3RM;;IAEE,+BAAA;EvEy3RR;;EuEv3RM;;IAEE,6BAAA;EvE03RR;;EuEp3RE;IAAmB,uBAAA;EvEw3RrB;;EuEv3RE;;IAEE,2BAAA;EvE03RJ;;EuEx3RE;;IAEE,6BAAA;EvE23RJ;;EuEz3RE;;IAEE,8BAAA;EvE43RJ;;EuE13RE;;IAEE,4BAAA;EvE63RJ;AACF;Aev4RI;EwDlDI;IAAgC,oBAAA;EvE67RtC;;EuE57RM;;IAEE,wBAAA;EvE+7RR;;EuE77RM;;IAEE,0BAAA;EvEg8RR;;EuE97RM;;IAEE,2BAAA;EvEi8RR;;EuE/7RM;;IAEE,yBAAA;EvEk8RR;;EuEj9RM;IAAgC,0BAAA;EvEq9RtC;;EuEp9RM;;IAEE,8BAAA;EvEu9RR;;EuEr9RM;;IAEE,gCAAA;EvEw9RR;;EuEt9RM;;IAEE,iCAAA;EvEy9RR;;EuEv9RM;;IAEE,+BAAA;EvE09RR;;EuEz+RM;IAAgC,yBAAA;EvE6+RtC;;EuE5+RM;;IAEE,6BAAA;EvE++RR;;EuE7+RM;;IAEE,+BAAA;EvEg/RR;;EuE9+RM;;IAEE,gCAAA;EvEi/RR;;EuE/+RM;;IAEE,8BAAA;EvEk/RR;;EuEjgSM;IAAgC,uBAAA;EvEqgStC;;EuEpgSM;;IAEE,2BAAA;EvEugSR;;EuErgSM;;IAEE,6BAAA;EvEwgSR;;EuEtgSM;;IAEE,8BAAA;EvEygSR;;EuEvgSM;;IAEE,4BAAA;EvE0gSR;;EuEzhSM;IAAgC,yBAAA;EvE6hStC;;EuE5hSM;;IAEE,6BAAA;EvE+hSR;;EuE7hSM;;IAEE,+BAAA;EvEgiSR;;EuE9hSM;;IAEE,gCAAA;EvEiiSR;;EuE/hSM;;IAEE,8BAAA;EvEkiSR;;EuEjjSM;IAAgC,uBAAA;EvEqjStC;;EuEpjSM;;IAEE,2BAAA;EvEujSR;;EuErjSM;;IAEE,6BAAA;EvEwjSR;;EuEtjSM;;IAEE,8BAAA;EvEyjSR;;EuEvjSM;;IAEE,4BAAA;EvE0jSR;;EuEzkSM;IAAgC,qBAAA;EvE6kStC;;EuE5kSM;;IAEE,yBAAA;EvE+kSR;;EuE7kSM;;IAEE,2BAAA;EvEglSR;;EuE9kSM;;IAEE,4BAAA;EvEilSR;;EuE/kSM;;IAEE,0BAAA;EvEklSR;;EuEjmSM;IAAgC,2BAAA;EvEqmStC;;EuEpmSM;;IAEE,+BAAA;EvEumSR;;EuErmSM;;IAEE,iCAAA;EvEwmSR;;EuEtmSM;;IAEE,kCAAA;EvEymSR;;EuEvmSM;;IAEE,gCAAA;EvE0mSR;;EuEznSM;IAAgC,0BAAA;EvE6nStC;;EuE5nSM;;IAEE,8BAAA;EvE+nSR;;EuE7nSM;;IAEE,gCAAA;EvEgoSR;;EuE9nSM;;IAEE,iCAAA;EvEioSR;;EuE/nSM;;IAEE,+BAAA;EvEkoSR;;EuEjpSM;IAAgC,wBAAA;EvEqpStC;;EuEppSM;;IAEE,4BAAA;EvEupSR;;EuErpSM;;IAEE,8BAAA;EvEwpSR;;EuEtpSM;;IAEE,+BAAA;EvEypSR;;EuEvpSM;;IAEE,6BAAA;EvE0pSR;;EuEzqSM;IAAgC,0BAAA;EvE6qStC;;EuE5qSM;;IAEE,8BAAA;EvE+qSR;;EuE7qSM;;IAEE,gCAAA;EvEgrSR;;EuE9qSM;;IAEE,iCAAA;EvEirSR;;EuE/qSM;;IAEE,+BAAA;EvEkrSR;;EuEjsSM;IAAgC,wBAAA;EvEqsStC;;EuEpsSM;;IAEE,4BAAA;EvEusSR;;EuErsSM;;IAEE,8BAAA;EvEwsSR;;EuEtsSM;;IAEE,+BAAA;EvEysSR;;EuEvsSM;;IAEE,6BAAA;EvE0sSR;;EuElsSM;IAAwB,2BAAA;EvEssS9B;;EuErsSM;;IAEE,+BAAA;EvEwsSR;;EuEtsSM;;IAEE,iCAAA;EvEysSR;;EuEvsSM;;IAEE,kCAAA;EvE0sSR;;EuExsSM;;IAEE,gCAAA;EvE2sSR;;EuE1tSM;IAAwB,0BAAA;EvE8tS9B;;EuE7tSM;;IAEE,8BAAA;EvEguSR;;EuE9tSM;;IAEE,gCAAA;EvEiuSR;;EuE/tSM;;IAEE,iCAAA;EvEkuSR;;EuEhuSM;;IAEE,+BAAA;EvEmuSR;;EuElvSM;IAAwB,wBAAA;EvEsvS9B;;EuErvSM;;IAEE,4BAAA;EvEwvSR;;EuEtvSM;;IAEE,8BAAA;EvEyvSR;;EuEvvSM;;IAEE,+BAAA;EvE0vSR;;EuExvSM;;IAEE,6BAAA;EvE2vSR;;EuE1wSM;IAAwB,0BAAA;EvE8wS9B;;EuE7wSM;;IAEE,8BAAA;EvEgxSR;;EuE9wSM;;IAEE,gCAAA;EvEixSR;;EuE/wSM;;IAEE,iCAAA;EvEkxSR;;EuEhxSM;;IAEE,+BAAA;EvEmxSR;;EuElySM;IAAwB,wBAAA;EvEsyS9B;;EuErySM;;IAEE,4BAAA;EvEwySR;;EuEtySM;;IAEE,8BAAA;EvEyySR;;EuEvySM;;IAEE,+BAAA;EvE0ySR;;EuExySM;;IAEE,6BAAA;EvE2ySR;;EuErySE;IAAmB,uBAAA;EvEyySrB;;EuExySE;;IAEE,2BAAA;EvE2ySJ;;EuEzySE;;IAEE,6BAAA;EvE4ySJ;;EuE1ySE;;IAEE,8BAAA;EvE6ySJ;;EuE3ySE;;IAEE,4BAAA;EvE8ySJ;AACF;AwE/2SE;EACE,kBAAA;EACA,MAAA;EACA,QAAA;EACA,SAAA;EACA,OAAA;EACA,UAAA;EAEA,oBAAA;EACA,WAAA;EAEA,kCAAA;AxE+2SJ;;AyEz3SA;EAAkB,4GAAA;AzE63SlB;;AyEz3SA;EAAiB,8BAAA;AzE63SjB;;AyE53SA;EAAiB,8BAAA;AzEg4SjB;;AyE/3SA;EAAiB,8BAAA;AzEm4SjB;;AyEl4SA;ECTE,gBAAA;EACA,uBAAA;EACA,mBAAA;A1E+4SF;;AyEh4SI;EAAwB,2BAAA;AzEo4S5B;;AyEn4SI;EAAwB,4BAAA;AzEu4S5B;;AyEt4SI;EAAwB,6BAAA;AzE04S5B;;Aer2SI;E0DvCA;IAAwB,2BAAA;EzEi5S1B;;EyEh5SE;IAAwB,4BAAA;EzEo5S1B;;EyEn5SE;IAAwB,6BAAA;EzEu5S1B;AACF;Aen3SI;E0DvCA;IAAwB,2BAAA;EzE85S1B;;EyE75SE;IAAwB,4BAAA;EzEi6S1B;;EyEh6SE;IAAwB,6BAAA;EzEo6S1B;AACF;Aeh4SI;E0DvCA;IAAwB,2BAAA;EzE26S1B;;EyE16SE;IAAwB,4BAAA;EzE86S1B;;EyE76SE;IAAwB,6BAAA;EzEi7S1B;AACF;Ae74SI;E0DvCA;IAAwB,2BAAA;EzEw7S1B;;EyEv7SE;IAAwB,4BAAA;EzE27S1B;;EyE17SE;IAAwB,6BAAA;EzE87S1B;AACF;AyEz7SA;EAAmB,oCAAA;AzE47SnB;;AyE37SA;EAAmB,oCAAA;AzE+7SnB;;AyE97SA;EAAmB,qCAAA;AzEk8SnB;;AyE97SA;EAAuB,2BAAA;AzEk8SvB;;AyEj8SA;EAAuB,+BAAA;AzEq8SvB;;AyEp8SA;EAAuB,2BAAA;AzEw8SvB;;AyEv8SA;EAAuB,2BAAA;AzE28SvB;;AyE18SA;EAAuB,8BAAA;AzE88SvB;;AyE78SA;EAAuB,6BAAA;AzEi9SvB;;AyE78SA;EAAc,sBAAA;AzEi9Sd;;A2Ex/SE;EACE,yBAAA;A3E2/SJ;;AMj/SE;EqELM,yBAAA;A3E0/SR;;A2EhgTE;EACE,yBAAA;A3EmgTJ;;AMz/SE;EqELM,yBAAA;A3EkgTR;;A2ExgTE;EACE,yBAAA;A3E2gTJ;;AMjgTE;EqELM,yBAAA;A3E0gTR;;A2EhhTE;EACE,yBAAA;A3EmhTJ;;AMzgTE;EqELM,yBAAA;A3EkhTR;;A2ExhTE;EACE,yBAAA;A3E2hTJ;;AMjhTE;EqELM,yBAAA;A3E0hTR;;A2EhiTE;EACE,yBAAA;A3EmiTJ;;AMzhTE;EqELM,yBAAA;A3EkiTR;;A2ExiTE;EACE,yBAAA;A3E2iTJ;;AMjiTE;EqELM,yBAAA;A3E0iTR;;A2EhjTE;EACE,yBAAA;A3EmjTJ;;AMziTE;EqELM,yBAAA;A3EkjTR;;AyE3gTA;EAAa,yBAAA;AzE+gTb;;AyE9gTA;EAAc,yBAAA;AzEkhTd;;AyEhhTA;EAAiB,oCAAA;AzEohTjB;;AyEnhTA;EAAiB,0CAAA;AzEuhTjB;;AyEnhTA;EGvDE,WAAA;EACA,kBAAA;EACA,iBAAA;EACA,6BAAA;EACA,SAAA;A5E8kTF;;AyEvhTA;EAAwB,gCAAA;AzE2hTxB;;AyEzhTA;EACE,iCAAA;EACA,gCAAA;AzE4hTF;;AyEvhTA;EAAc,yBAAA;AzE2hTd;;A6E5lTA;EACE,8BAAA;A7E+lTF;;A6E5lTA;EACE,6BAAA;A7E+lTF;;A8E/lTE;EACE;;;IAKE,4BAAA;IAEA,2BAAA;E9E+lTJ;;E8E3lTI;IACE,0BAAA;E9E8lTN;;E8ErlTE;IACE,6BAAA;E9EwlTJ;;E8E1kTE;IACE,gCAAA;E9E6kTJ;;E8E3kTE;;IAEE,yBAAA;IACA,wBAAA;E9E8kTJ;;E8EtkTE;IACE,2BAAA;E9EykTJ;;E8EtkTE;;IAEE,wBAAA;E9EykTJ;;E8EtkTE;;;IAGE,UAAA;IACA,SAAA;E9EykTJ;;E8EtkTE;;IAEE,uBAAA;E9EykTJ;;E8EjkTE;IACE,Q1E+hC8B;EJqiRlC;E8ElkTE;IACE,2BAAA;E9EokTJ;;E8ElkTE;IACE,2BAAA;E9EqkTJ;;E8EjkTE;IACE,aAAA;E9EokTJ;;E8ElkTE;IACE,sBAAA;E9EqkTJ;;E8ElkTE;IACE,oCAAA;E9EqkTJ;E8EnkTI;;IAEE,iCAAA;E9EqkTN;;E8EhkTI;;IAEE,oCAAA;E9EmkTN;;E8E/jTE;IACE,cAAA;E9EkkTJ;E8EhkTI;;;;IAIE,qB1EvHG;EJyrTT;;E8E9jTE;IACE,cAAA;IACA,qB1E7HK;EJ8rTT;AACF;AAtsTA;EACE,mBAAA;EACA,SAAA;AAwsTF;;AArsTA;EACE,cAAA;EACA,iBAAA;AAwsTF;;AArsTA;EAEE,sBAAA;AAwsTF;AAvsTE;EAGE,sBAAA;AAwsTJ;;AApsTA;EACE,sBAAA;AAusTF;AAtsTE;EACE,WAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;EACA,aAAA;AAwsTJ;AAvsTI;EACE,aAAA;AAysTN;AAvsTI;EACE,YAAA;AAysTN;AAxsTM;EACE,YAAA;AA0sTR;;AApsTA;EACE,eAAA;EACA,UAAA;EACA,SAAA;EACA,qBAAA;EACA,sCAAA;EACA,WAAA;EACA,aAAA;EACA,sCAAA;AAusTF;;AApsTA;;4EAAA;AAIA;EACE,eAAA;EACA,gBAAA;EACA,WAAA;EACA,gBAAA;AAssTF;;AAnsTA;;4EAAA;AAIA;EACE,6BAAA;EACA,yBAAA;EACA,eAAA;EACA,iBAAA;AAqsTF;AApsTE;EACE,6BAAA;EACA,yBAAA;AAssTJ;AApsTE;EAEE,gBAAA;AAssTJ;;AAlsTA;;4EAAA;AAIA,4DAAA;AACA;EACE,eAAA;AAosTF;;AAjsTA,yBAAA;AAEA;EACE,iBAAA;EACA,yBAAA;AAmsTF;;AAhsTA;EACE,gBAAA;EACA,yBAAA;AAmsTF;;AAhsTA;EACE,4EAAA;EACA,kBAAA;AAmsTF;;AAhsTA;EACE,YAAA;EACA,qBAAA;AAmsTF;;AAhsTA;EACE,mBAAA;EACA,qBAAA;AAmsTF;;AAhsTA;EACE,mBAAA;EACA,oBAAA;AAmsTF;;AAhsTA;EACE,qBAAA;AAmsTF;;AAhsTA,oBAAA;AAKM;EACE,wBAAA;AA+rTR;;AAtrTM;EACE,uBAAA;AAyrTR;;AA1rTM;EACE,uBAAA;AA6rTR;;AA9rTM;EACE,uBAAA;AAisTR;;AAlsTM;EACE,wBAAA;AAqsTR;;AAtsTM;EACE,wBAAA;AAysTR;;AA1sTM;EACE,wBAAA;AA6sTR;;AA9sTM;EACE,wBAAA;AAitTR;;AAltTM;EACE,wBAAA;AAqtTR;;AAttTM;EACE,wBAAA;AAytTR;;AA1tTM;EACE,yBAAA;AA6tTR;;AA1tTM;EACE,2BAAA;AA6tTR;;AA9tTM;EACE,2BAAA;AAiuTR;;AAluTM;EACE,4BAAA;AAquTR;;AAtuTM;EACE,4BAAA;AAyuTR;;AA1uTM;EACE,4BAAA;AA6uTR;;AA9uTM;EACE,4BAAA;AAivTR;;AAlvTM;EACE,4BAAA;AAqvTR;;AAtvTM;EACE,4BAAA;AAyvTR;;AA1vTM;EACE,6BAAA;AA6vTR;;AA9vTM;EACE,8BAAA;AAiwTR;;AAlwTM;EACE,8BAAA;AAqwTR;;AAtwTM;EACE,+BAAA;AAywTR;;AA1wTM;EACE,+BAAA;AA6wTR;;AA9wTM;EACE,+BAAA;AAixTR;;AAlxTM;EACE,+BAAA;AAqxTR;;AAtxTM;EACE,+BAAA;AAyxTR;;AA1xTM;EACE,+BAAA;AA6xTR;;AA9xTM;EACE,gCAAA;AAiyTR;;AAlyTM;EACE,6BAAA;AAqyTR;;AAtyTM;EACE,8BAAA;AAyyTR;;AA1yTM;EACE,8BAAA;AA6yTR;;AA9yTM;EACE,8BAAA;AAizTR;;AAlzTM;EACE,8BAAA;AAqzTR;;AAtzTM;EACE,8BAAA;AAyzTR;;AA1zTM;EACE,8BAAA;AA6zTR;;AA9zTM;EACE,+BAAA;AAi0TR;;AAl0TM;EACE,4BAAA;AAq0TR;;AAt0TM;EACE,6BAAA;AAy0TR;;AA10TM;EACE,6BAAA;AA60TR;;AA90TM;EACE,6BAAA;AAi1TR;;AAl1TM;EACE,6BAAA;AAq1TR;;AAt1TM;EACE,6BAAA;AAy1TR;;AA11TM;EACE,6BAAA;AA61TR;;AA91TM;EACE,8BAAA;AAi2TR;;AAvyTI;EACE,0BAAA;AA0yTN;;AA3yTI;EACE,2BAAA;AA8yTN;;AA/yTI;EACE,yBAAA;AAkzTN;;AAnzTI;EACE,4BAAA;AAszTN;;AA3zTI;EACE,qBAAA;AA8zTN;;AA/yTA,2BAAA;AAEA;EACE,WAAA;AAizTF;;AA7yTI;EACE,0BAAA;AAgzTN;;AA7yTI;EACE,0BAAA;AAgzTN;;AAjzTI;EACE,2BAAA;AAozTN;;AArzTI;EACE,2BAAA;AAwzTN;;AAzzTI;EACE,2BAAA;AA4zTN;;AA7zTI;EACE,2BAAA;AAg0TN;;AAj0TI;EACE,2BAAA;AAo0TN;;AAr0TI;EACE,2BAAA;AAw0TN;;AAz0TI;EACE,4BAAA;AA40TN;;AA70TI;EACE,4BAAA;AAg1TN;;AAh0TA;EACE,sBAAA;EACA,UAAA;AAm0TF;;AAh0TA;;4EAAA;AAIA;EACE,eAAA;AAk0TF;;AA/zTA;EACE,eAAA;AAk0TF;;AA/zTA;EACE,gBAAA;EACA,YAAA;EACA,UAAA;EACA,oBAAA;EACA,mBAAA;EACA,WAAA;AAk0TF;;AA/zTA;EACE,qBAAA;AAk0TF;;AA/zTA;;4EAAA;AAIA;;EAEE,YAAA;EACA,cAAA;EACA,eAAA;EACA,iBAAA;AAi0TF;;AA9zTA;EACE,gBAAA;EACA,gBAAA;EACA,uBAAA;EACA,mBAAA;AAi0TF;;AA9zTA;EACE,kBAAA;AAi0TF;;AA9zTA;EACE,gBAAA;AAi0TF;;AA9zTA;+EAAA;AAGA;EACE,oBAAA;AAg0TF;;AA7zTA,kEAAA","sourcesContent":["// Override Boostrap variables\n// Import Bootstrap source files from node_modules\n@import 'node_modules/bootstrap/scss/bootstrap';\nbody {\n  background: #fafafa;\n  margin: 0;\n}\n\na {\n  color: #533f03;\n  font-weight: bold;\n}\n\n* {\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  &:after,\n  &::before {\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n}\n\n.app-container {\n  box-sizing: border-box;\n  .view-container {\n    width: 100%;\n    height: calc(100% - 40px);\n    overflow-y: auto;\n    overflow-x: hidden;\n    padding: 1rem;\n    .card {\n      padding: 1rem;\n    }\n    .view-routes {\n      height: 100%;\n      > div {\n        height: 100%;\n      }\n    }\n  }\n}\n\n.fullscreen {\n  position: fixed;\n  top: 100px;\n  left: 0px;\n  width: 99% !important;\n  height: calc(100vh - 110px) !important;\n  margin: 5px;\n  z-index: 1000;\n  padding: 5px 25px 50px 25px !important;\n}\n\n/* ==========================================================================\nBrowser Upgrade Prompt\n========================================================================== */\n\n.browserupgrade {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n/* ==========================================================================\nCustom button styles\n========================================================================== */\n\n.icon-button > .btn {\n  background-color: transparent;\n  border-color: transparent;\n  padding: 0.5rem;\n  line-height: 1rem;\n  &:hover {\n    background-color: transparent;\n    border-color: transparent;\n  }\n  &:focus {\n    -webkit-box-shadow: none;\n    box-shadow: none;\n  }\n}\n\n/* ==========================================================================\nGeneric styles\n========================================================================== */\n\n/* Temporary workaround for availity-reactstrap-validation */\n.invalid-feedback {\n  display: inline;\n}\n\n/* other generic styles */\n\n.title {\n  font-size: 1.25em;\n  margin: 1px 10px 1px 10px;\n}\n\n.description {\n  font-size: 0.9em;\n  margin: 1px 10px 1px 10px;\n}\n\n.shadow {\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;\n  border-radius: 2px;\n}\n\n.error {\n  color: white;\n  background-color: red;\n}\n\n.break {\n  white-space: normal;\n  word-break: break-all;\n}\n\n.break-word {\n  white-space: normal;\n  word-break: keep-all;\n}\n\n.preserve-space {\n  white-space: pre-wrap;\n}\n\n/* padding helpers */\n\n@mixin pad($size, $side) {\n  @if $size== '' {\n    @if $side== '' {\n      .pad {\n        padding: 10px !important;\n      }\n    } @else {\n      .pad {\n        padding-#{$side}: 10px !important;\n      }\n    }\n  } @else {\n    @if $side== '' {\n      .pad-#{$size} {\n        padding: #{$size}px !important;\n      }\n    } @else {\n      .pad-#{$side}-#{$size} {\n        padding-#{$side}: #{$size}px !important;\n      }\n    }\n  }\n}\n\n@include pad('', '');\n@include pad('2', '');\n@include pad('3', '');\n@include pad('5', '');\n@include pad('10', '');\n@include pad('20', '');\n@include pad('25', '');\n@include pad('30', '');\n@include pad('50', '');\n@include pad('75', '');\n@include pad('100', '');\n@include pad('4', 'top');\n@include pad('5', 'top');\n@include pad('10', 'top');\n@include pad('20', 'top');\n@include pad('25', 'top');\n@include pad('30', 'top');\n@include pad('50', 'top');\n@include pad('75', 'top');\n@include pad('100', 'top');\n@include pad('4', 'bottom');\n@include pad('5', 'bottom');\n@include pad('10', 'bottom');\n@include pad('20', 'bottom');\n@include pad('25', 'bottom');\n@include pad('30', 'bottom');\n@include pad('50', 'bottom');\n@include pad('75', 'bottom');\n@include pad('100', 'bottom');\n@include pad('5', 'right');\n@include pad('10', 'right');\n@include pad('20', 'right');\n@include pad('25', 'right');\n@include pad('30', 'right');\n@include pad('50', 'right');\n@include pad('75', 'right');\n@include pad('100', 'right');\n@include pad('5', 'left');\n@include pad('10', 'left');\n@include pad('20', 'left');\n@include pad('25', 'left');\n@include pad('30', 'left');\n@include pad('50', 'left');\n@include pad('75', 'left');\n@include pad('100', 'left');\n\n@mixin no-padding($side) {\n  @if $side== 'all' {\n    .no-padding {\n      padding: 0 !important;\n    }\n  } @else {\n    .no-padding-#{$side} {\n      padding-#{$side}: 0 !important;\n    }\n  }\n}\n\n@include no-padding('left');\n@include no-padding('right');\n@include no-padding('top');\n@include no-padding('bottom');\n@include no-padding('all');\n\n/* end of padding helpers */\n\n.no-margin {\n  margin: 0px;\n}\n@mixin voffset($size) {\n  @if $size== '' {\n    .voffset {\n      margin-top: 2px !important;\n    }\n  } @else {\n    .voffset-#{$size} {\n      margin-top: #{$size}px !important;\n    }\n  }\n}\n\n@include voffset('');\n@include voffset('5');\n@include voffset('10');\n@include voffset('15');\n@include voffset('30');\n@include voffset('40');\n@include voffset('60');\n@include voffset('80');\n@include voffset('100');\n@include voffset('150');\n\n.readonly {\n  background-color: #eee;\n  opacity: 1;\n}\n\n/* ==========================================================================\nmake sure browsers use the pointer cursor for anchors, even with no href\n========================================================================== */\n\na:hover {\n  cursor: pointer;\n}\n\n.hand {\n  cursor: pointer;\n}\n\nbutton.anchor-btn {\n  background: none;\n  border: none;\n  padding: 0;\n  align-items: initial;\n  text-align: initial;\n  width: 100%;\n}\n\na.anchor-btn:hover {\n  text-decoration: none;\n}\n\n/* ==========================================================================\nMetrics and Health styles\n========================================================================== */\n\n#threadDump .popover,\n#healthCheck .popover {\n  top: inherit;\n  display: block;\n  font-size: 10px;\n  max-width: 1024px;\n}\n\n.thread-dump-modal-lock {\n  max-width: 450px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n#healthCheck .popover {\n  margin-left: -50px;\n}\n\n.health-details {\n  min-width: 400px;\n}\n\n/* bootstrap 3 input-group 100% width\nhttp://stackoverflow.com/questions/23436430/bootstrap-3-input-group-100-width */\n\n.width-min {\n  width: 1% !important;\n}\n\n/* jhipster-needle-scss-add-main JHipster will add new css style */\n","/*!\n * Bootstrap v4.6.0 (https://getbootstrap.com/)\n * Copyright 2011-2021 The Bootstrap Authors\n * Copyright 2011-2021 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */\n\n@import \"functions\";\n@import \"variables\";\n@import \"mixins\";\n@import \"root\";\n@import \"reboot\";\n@import \"type\";\n@import \"images\";\n@import \"code\";\n@import \"grid\";\n@import \"tables\";\n@import \"forms\";\n@import \"buttons\";\n@import \"transitions\";\n@import \"dropdown\";\n@import \"button-group\";\n@import \"input-group\";\n@import \"custom-forms\";\n@import \"nav\";\n@import \"navbar\";\n@import \"card\";\n@import \"breadcrumb\";\n@import \"pagination\";\n@import \"badge\";\n@import \"jumbotron\";\n@import \"alert\";\n@import \"progress\";\n@import \"media\";\n@import \"list-group\";\n@import \"close\";\n@import \"toasts\";\n@import \"modal\";\n@import \"tooltip\";\n@import \"popover\";\n@import \"carousel\";\n@import \"spinners\";\n@import \"utilities\";\n@import \"print\";\n",":root {\n  // Custom variable values only support SassScript inside `#{}`.\n  @each $color, $value in $colors {\n    --#{$color}: #{$value};\n  }\n\n  @each $color, $value in $theme-colors {\n    --#{$color}: #{$value};\n  }\n\n  @each $bp, $value in $grid-breakpoints {\n    --breakpoint-#{$bp}: #{$value};\n  }\n\n  // Use `inspect` for lists so that quoted items keep the quotes.\n  // See https://github.com/sass/sass/issues/2383#issuecomment-336349172\n  --font-family-sans-serif: #{inspect($font-family-sans-serif)};\n  --font-family-monospace: #{inspect($font-family-monospace)};\n}\n","// stylelint-disable declaration-no-important, selector-no-qualifying-type, property-no-vendor-prefix\n\n// Reboot\n//\n// Normalization of HTML elements, manually forked from Normalize.css to remove\n// styles targeting irrelevant browsers while applying new styles.\n//\n// Normalize is licensed MIT. https://github.com/necolas/normalize.css\n\n\n// Document\n//\n// 1. Change from `box-sizing: content-box` so that `width` is not affected by `padding` or `border`.\n// 2. Change the default font family in all browsers.\n// 3. Correct the line height in all browsers.\n// 4. Prevent adjustments of font size after orientation changes in IE on Windows Phone and in iOS.\n// 5. Change the default tap highlight to be completely transparent in iOS.\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box; // 1\n}\n\nhtml {\n  font-family: sans-serif; // 2\n  line-height: 1.15; // 3\n  -webkit-text-size-adjust: 100%; // 4\n  -webkit-tap-highlight-color: rgba($black, 0); // 5\n}\n\n// Shim for \"new\" HTML5 structural elements to display correctly (IE10, older browsers)\n// TODO: remove in v5\n// stylelint-disable-next-line selector-list-comma-newline-after\narticle, aside, figcaption, figure, footer, header, hgroup, main, nav, section {\n  display: block;\n}\n\n// Body\n//\n// 1. Remove the margin in all browsers.\n// 2. As a best practice, apply a default `background-color`.\n// 3. Set an explicit initial text-align value so that we can later use\n//    the `inherit` value on things like `<th>` elements.\n\nbody {\n  margin: 0; // 1\n  font-family: $font-family-base;\n  @include font-size($font-size-base);\n  font-weight: $font-weight-base;\n  line-height: $line-height-base;\n  color: $body-color;\n  text-align: left; // 3\n  background-color: $body-bg; // 2\n}\n\n// Future-proof rule: in browsers that support :focus-visible, suppress the focus outline\n// on elements that programmatically receive focus but wouldn't normally show a visible\n// focus outline. In general, this would mean that the outline is only applied if the\n// interaction that led to the element receiving programmatic focus was a keyboard interaction,\n// or the browser has somehow determined that the user is primarily a keyboard user and/or\n// wants focus outlines to always be presented.\n//\n// See https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible\n// and https://developer.paciellogroup.com/blog/2018/03/focus-visible-and-backwards-compatibility/\n[tabindex=\"-1\"]:focus:not(:focus-visible) {\n  outline: 0 !important;\n}\n\n\n// Content grouping\n//\n// 1. Add the correct box sizing in Firefox.\n// 2. Show the overflow in Edge and IE.\n\nhr {\n  box-sizing: content-box; // 1\n  height: 0; // 1\n  overflow: visible; // 2\n}\n\n\n//\n// Typography\n//\n\n// Remove top margins from headings\n//\n// By default, `<h1>`-`<h6>` all receive top and bottom margins. We nuke the top\n// margin for easier control within type scales as it avoids margin collapsing.\n// stylelint-disable-next-line selector-list-comma-newline-after\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: $headings-margin-bottom;\n}\n\n// Reset margins on paragraphs\n//\n// Similarly, the top margin on `<p>`s get reset. However, we also reset the\n// bottom margin to use `rem` units instead of `em`.\np {\n  margin-top: 0;\n  margin-bottom: $paragraph-margin-bottom;\n}\n\n// Abbreviations\n//\n// 1. Duplicate behavior to the data-* attribute for our tooltip plugin\n// 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n// 3. Add explicit cursor to indicate changed behavior.\n// 4. Remove the bottom border in Firefox 39-.\n// 5. Prevent the text-decoration to be skipped.\n\nabbr[title],\nabbr[data-original-title] { // 1\n  text-decoration: underline; // 2\n  text-decoration: underline dotted; // 2\n  cursor: help; // 3\n  border-bottom: 0; // 4\n  text-decoration-skip-ink: none; // 5\n}\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit;\n}\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0;\n}\n\ndt {\n  font-weight: $dt-font-weight;\n}\n\ndd {\n  margin-bottom: .5rem;\n  margin-left: 0; // Undo browser default\n}\n\nblockquote {\n  margin: 0 0 1rem;\n}\n\nb,\nstrong {\n  font-weight: $font-weight-bolder; // Add the correct font weight in Chrome, Edge, and Safari\n}\n\nsmall {\n  @include font-size(80%); // Add the correct font size in all browsers\n}\n\n//\n// Prevent `sub` and `sup` elements from affecting the line height in\n// all browsers.\n//\n\nsub,\nsup {\n  position: relative;\n  @include font-size(75%);\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsub { bottom: -.25em; }\nsup { top: -.5em; }\n\n\n//\n// Links\n//\n\na {\n  color: $link-color;\n  text-decoration: $link-decoration;\n  background-color: transparent; // Remove the gray background on active links in IE 10.\n\n  @include hover() {\n    color: $link-hover-color;\n    text-decoration: $link-hover-decoration;\n  }\n}\n\n// And undo these styles for placeholder links/named anchors (without href).\n// It would be more straightforward to just use a[href] in previous block, but that\n// causes specificity issues in many other styles that are too complex to fix.\n// See https://github.com/twbs/bootstrap/issues/19402\n\na:not([href]):not([class]) {\n  color: inherit;\n  text-decoration: none;\n\n  @include hover() {\n    color: inherit;\n    text-decoration: none;\n  }\n}\n\n\n//\n// Code\n//\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: $font-family-monospace;\n  @include font-size(1em); // Correct the odd `em` font sizing in all browsers.\n}\n\npre {\n  // Remove browser default top margin\n  margin-top: 0;\n  // Reset browser default of `1em` to use `rem`s\n  margin-bottom: 1rem;\n  // Don't allow content to break outside\n  overflow: auto;\n  // Disable auto-hiding scrollbar in IE & legacy Edge to avoid overlap,\n  // making it impossible to interact with the content\n  -ms-overflow-style: scrollbar;\n}\n\n\n//\n// Figures\n//\n\nfigure {\n  // Apply a consistent margin strategy (matches our type styles).\n  margin: 0 0 1rem;\n}\n\n\n//\n// Images and content\n//\n\nimg {\n  vertical-align: middle;\n  border-style: none; // Remove the border on images inside links in IE 10-.\n}\n\nsvg {\n  // Workaround for the SVG overflow bug in IE10/11 is still required.\n  // See https://github.com/twbs/bootstrap/issues/26878\n  overflow: hidden;\n  vertical-align: middle;\n}\n\n\n//\n// Tables\n//\n\ntable {\n  border-collapse: collapse; // Prevent double borders\n}\n\ncaption {\n  padding-top: $table-cell-padding;\n  padding-bottom: $table-cell-padding;\n  color: $table-caption-color;\n  text-align: left;\n  caption-side: bottom;\n}\n\n// 1. Removes font-weight bold by inheriting\n// 2. Matches default `<td>` alignment by inheriting `text-align`.\n// 3. Fix alignment for Safari\n\nth {\n  font-weight: $table-th-font-weight; // 1\n  text-align: inherit; // 2\n  text-align: -webkit-match-parent; // 3\n}\n\n\n//\n// Forms\n//\n\nlabel {\n  // Allow labels to use `margin` for spacing.\n  display: inline-block;\n  margin-bottom: $label-margin-bottom;\n}\n\n// Remove the default `border-radius` that macOS Chrome adds.\n//\n// Details at https://github.com/twbs/bootstrap/issues/24093\nbutton {\n  // stylelint-disable-next-line property-disallowed-list\n  border-radius: 0;\n}\n\n// Explicitly remove focus outline in Chromium when it shouldn't be\n// visible (e.g. as result of mouse click or touch tap). It already\n// should be doing this automatically, but seems to currently be\n// confused and applies its very visible two-tone outline anyway.\n\nbutton:focus:not(:focus-visible) {\n  outline: 0;\n}\n\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0; // Remove the margin in Firefox and Safari\n  font-family: inherit;\n  @include font-size(inherit);\n  line-height: inherit;\n}\n\nbutton,\ninput {\n  overflow: visible; // Show the overflow in Edge\n}\n\nbutton,\nselect {\n  text-transform: none; // Remove the inheritance of text transform in Firefox\n}\n\n// Set the cursor for non-`<button>` buttons\n//\n// Details at https://github.com/twbs/bootstrap/pull/30562\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n// Remove the inheritance of word-wrap in Safari.\n//\n// Details at https://github.com/twbs/bootstrap/issues/24990\nselect {\n  word-wrap: normal;\n}\n\n\n// 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n//    controls in Android 4.\n// 2. Correct the inability to style clickable types in iOS and Safari.\nbutton,\n[type=\"button\"], // 1\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; // 2\n}\n\n// Opinionated: add \"hand\" cursor to non-disabled button elements.\n@if $enable-pointer-cursor-for-buttons {\n  button,\n  [type=\"button\"],\n  [type=\"reset\"],\n  [type=\"submit\"] {\n    &:not(:disabled) {\n      cursor: pointer;\n    }\n  }\n}\n\n// Remove inner border and padding from Firefox, but don't restore the outline like Normalize.\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  box-sizing: border-box; // 1. Add the correct box sizing in IE 10-\n  padding: 0; // 2. Remove the padding in IE 10-\n}\n\n\ntextarea {\n  overflow: auto; // Remove the default vertical scrollbar in IE.\n  // Textareas should really only resize vertically so they don't break their (horizontal) containers.\n  resize: vertical;\n}\n\nfieldset {\n  // Browsers set a default `min-width: min-content;` on fieldsets,\n  // unlike e.g. `<div>`s, which have `min-width: 0;` by default.\n  // So we reset that to ensure fieldsets behave more like a standard block element.\n  // See https://github.com/twbs/bootstrap/issues/12359\n  // and https://html.spec.whatwg.org/multipage/#the-fieldset-and-legend-elements\n  min-width: 0;\n  // Reset the default outline behavior of fieldsets so they don't affect page layout.\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\n// 1. Correct the text wrapping in Edge and IE.\n// 2. Correct the color inheritance from `fieldset` elements in IE.\nlegend {\n  display: block;\n  width: 100%;\n  max-width: 100%; // 1\n  padding: 0;\n  margin-bottom: .5rem;\n  @include font-size(1.5rem);\n  line-height: inherit;\n  color: inherit; // 2\n  white-space: normal; // 1\n}\n\nprogress {\n  vertical-align: baseline; // Add the correct vertical alignment in Chrome, Firefox, and Opera.\n}\n\n// Correct the cursor style of increment and decrement buttons in Chrome.\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n[type=\"search\"] {\n  // This overrides the extra rounded corners on search inputs in iOS so that our\n  // `.form-control` class can properly style them. Note that this cannot simply\n  // be added to `.form-control` as it's not specific enough. For details, see\n  // https://github.com/twbs/bootstrap/issues/11586.\n  outline-offset: -2px; // 2. Correct the outline style in Safari.\n  -webkit-appearance: none;\n}\n\n//\n// Remove the inner padding in Chrome and Safari on macOS.\n//\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n//\n// 1. Correct the inability to style clickable types in iOS and Safari.\n// 2. Change font properties to `inherit` in Safari.\n//\n\n::-webkit-file-upload-button {\n  font: inherit; // 2\n  -webkit-appearance: button; // 1\n}\n\n//\n// Correct element displays\n//\n\noutput {\n  display: inline-block;\n}\n\nsummary {\n  display: list-item; // Add the correct display in all browsers\n  cursor: pointer;\n}\n\ntemplate {\n  display: none; // Add the correct display in IE\n}\n\n// Always hide an element with the `hidden` HTML attribute (from PureCSS).\n// Needed for proper display in IE 10-.\n[hidden] {\n  display: none !important;\n}\n","// Variables\n//\n// Variables should follow the `$component-state-property-size` formula for\n// consistent naming. Ex: $nav-link-disabled-color and $modal-content-box-shadow-xs.\n\n// Color system\n\n$white:    #fff !default;\n$gray-100: #f8f9fa !default;\n$gray-200: #e9ecef !default;\n$gray-300: #dee2e6 !default;\n$gray-400: #ced4da !default;\n$gray-500: #adb5bd !default;\n$gray-600: #6c757d !default;\n$gray-700: #495057 !default;\n$gray-800: #343a40 !default;\n$gray-900: #212529 !default;\n$black:    #000 !default;\n\n$grays: () !default;\n$grays: map-merge(\n  (\n    \"100\": $gray-100,\n    \"200\": $gray-200,\n    \"300\": $gray-300,\n    \"400\": $gray-400,\n    \"500\": $gray-500,\n    \"600\": $gray-600,\n    \"700\": $gray-700,\n    \"800\": $gray-800,\n    \"900\": $gray-900\n  ),\n  $grays\n);\n\n$blue:    #007bff !default;\n$indigo:  #6610f2 !default;\n$purple:  #6f42c1 !default;\n$pink:    #e83e8c !default;\n$red:     #dc3545 !default;\n$orange:  #fd7e14 !default;\n$yellow:  #ffc107 !default;\n$green:   #28a745 !default;\n$teal:    #20c997 !default;\n$cyan:    #17a2b8 !default;\n\n$colors: () !default;\n$colors: map-merge(\n  (\n    \"blue\":       $blue,\n    \"indigo\":     $indigo,\n    \"purple\":     $purple,\n    \"pink\":       $pink,\n    \"red\":        $red,\n    \"orange\":     $orange,\n    \"yellow\":     $yellow,\n    \"green\":      $green,\n    \"teal\":       $teal,\n    \"cyan\":       $cyan,\n    \"white\":      $white,\n    \"gray\":       $gray-600,\n    \"gray-dark\":  $gray-800\n  ),\n  $colors\n);\n\n$primary:       $blue !default;\n$secondary:     $gray-600 !default;\n$success:       $green !default;\n$info:          $cyan !default;\n$warning:       $yellow !default;\n$danger:        $red !default;\n$light:         $gray-100 !default;\n$dark:          $gray-800 !default;\n\n$theme-colors: () !default;\n$theme-colors: map-merge(\n  (\n    \"primary\":    $primary,\n    \"secondary\":  $secondary,\n    \"success\":    $success,\n    \"info\":       $info,\n    \"warning\":    $warning,\n    \"danger\":     $danger,\n    \"light\":      $light,\n    \"dark\":       $dark\n  ),\n  $theme-colors\n);\n\n// Set a specific jump point for requesting color jumps\n$theme-color-interval:      8% !default;\n\n// The yiq lightness value that determines when the lightness of color changes from \"dark\" to \"light\". Acceptable values are between 0 and 255.\n$yiq-contrasted-threshold:  150 !default;\n\n// Customize the light and dark text colors for use in our YIQ color contrast function.\n$yiq-text-dark:             $gray-900 !default;\n$yiq-text-light:            $white !default;\n\n// Characters which are escaped by the escape-svg function\n$escaped-characters: (\n  (\"<\", \"%3c\"),\n  (\">\", \"%3e\"),\n  (\"#\", \"%23\"),\n  (\"(\", \"%28\"),\n  (\")\", \"%29\"),\n) !default;\n\n\n// Options\n//\n// Quickly modify global styling by enabling or disabling optional features.\n\n$enable-caret:                                true !default;\n$enable-rounded:                              true !default;\n$enable-shadows:                              false !default;\n$enable-gradients:                            false !default;\n$enable-transitions:                          true !default;\n$enable-prefers-reduced-motion-media-query:   true !default;\n$enable-hover-media-query:                    false !default; // Deprecated, no longer affects any compiled CSS\n$enable-grid-classes:                         true !default;\n$enable-pointer-cursor-for-buttons:           true !default;\n$enable-print-styles:                         true !default;\n$enable-responsive-font-sizes:                false !default;\n$enable-validation-icons:                     true !default;\n$enable-deprecation-messages:                 true !default;\n\n\n// Spacing\n//\n// Control the default styling of most Bootstrap elements by modifying these\n// variables. Mostly focused on spacing.\n// You can add more entries to the $spacers map, should you need more variation.\n\n$spacer: 1rem !default;\n$spacers: () !default;\n$spacers: map-merge(\n  (\n    0: 0,\n    1: ($spacer * .25),\n    2: ($spacer * .5),\n    3: $spacer,\n    4: ($spacer * 1.5),\n    5: ($spacer * 3)\n  ),\n  $spacers\n);\n\n// This variable affects the `.h-*` and `.w-*` classes.\n$sizes: () !default;\n$sizes: map-merge(\n  (\n    25: 25%,\n    50: 50%,\n    75: 75%,\n    100: 100%,\n    auto: auto\n  ),\n  $sizes\n);\n\n\n// Body\n//\n// Settings for the `<body>` element.\n\n$body-bg:                   $white !default;\n$body-color:                $gray-900 !default;\n\n\n// Links\n//\n// Style anchor elements.\n\n$link-color:                              theme-color(\"primary\") !default;\n$link-decoration:                         none !default;\n$link-hover-color:                        darken($link-color, 15%) !default;\n$link-hover-decoration:                   underline !default;\n// Darken percentage for links with `.text-*` class (e.g. `.text-success`)\n$emphasized-link-hover-darken-percentage: 15% !default;\n\n// Paragraphs\n//\n// Style p element.\n\n$paragraph-margin-bottom:   1rem !default;\n\n\n// Grid breakpoints\n//\n// Define the minimum dimensions at which your layout will change,\n// adapting to different screen sizes, for use in media queries.\n\n$grid-breakpoints: (\n  xs: 0,\n  sm: 576px,\n  md: 768px,\n  lg: 992px,\n  xl: 1200px\n) !default;\n\n@include _assert-ascending($grid-breakpoints, \"$grid-breakpoints\");\n@include _assert-starts-at-zero($grid-breakpoints, \"$grid-breakpoints\");\n\n\n// Grid containers\n//\n// Define the maximum width of `.container` for different screen sizes.\n\n$container-max-widths: (\n  sm: 540px,\n  md: 720px,\n  lg: 960px,\n  xl: 1140px\n) !default;\n\n@include _assert-ascending($container-max-widths, \"$container-max-widths\");\n\n\n// Grid columns\n//\n// Set the number of columns and specify the width of the gutters.\n\n$grid-columns:                12 !default;\n$grid-gutter-width:           30px !default;\n$grid-row-columns:            6 !default;\n\n\n// Components\n//\n// Define common padding and border radius sizes and more.\n\n$line-height-lg:              1.5 !default;\n$line-height-sm:              1.5 !default;\n\n$border-width:                1px !default;\n$border-color:                $gray-300 !default;\n\n$border-radius:               .25rem !default;\n$border-radius-lg:            .3rem !default;\n$border-radius-sm:            .2rem !default;\n\n$rounded-pill:                50rem !default;\n\n$box-shadow-sm:               0 .125rem .25rem rgba($black, .075) !default;\n$box-shadow:                  0 .5rem 1rem rgba($black, .15) !default;\n$box-shadow-lg:               0 1rem 3rem rgba($black, .175) !default;\n\n$component-active-color:      $white !default;\n$component-active-bg:         theme-color(\"primary\") !default;\n\n$caret-width:                 .3em !default;\n$caret-vertical-align:        $caret-width * .85 !default;\n$caret-spacing:               $caret-width * .85 !default;\n\n$transition-base:             all .2s ease-in-out !default;\n$transition-fade:             opacity .15s linear !default;\n$transition-collapse:         height .35s ease !default;\n\n$embed-responsive-aspect-ratios: () !default;\n$embed-responsive-aspect-ratios: join(\n  (\n    (21 9),\n    (16 9),\n    (4 3),\n    (1 1),\n  ),\n  $embed-responsive-aspect-ratios\n);\n\n// Typography\n//\n// Font, line-height, and color for body text, headings, and more.\n\n// stylelint-disable value-keyword-case\n$font-family-sans-serif:      -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\" !default;\n$font-family-monospace:       SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !default;\n$font-family-base:            $font-family-sans-serif !default;\n// stylelint-enable value-keyword-case\n\n$font-size-base:              1rem !default; // Assumes the browser default, typically `16px`\n$font-size-lg:                $font-size-base * 1.25 !default;\n$font-size-sm:                $font-size-base * .875 !default;\n\n$font-weight-lighter:         lighter !default;\n$font-weight-light:           300 !default;\n$font-weight-normal:          400 !default;\n$font-weight-bold:            700 !default;\n$font-weight-bolder:          bolder !default;\n\n$font-weight-base:            $font-weight-normal !default;\n$line-height-base:            1.5 !default;\n\n$h1-font-size:                $font-size-base * 2.5 !default;\n$h2-font-size:                $font-size-base * 2 !default;\n$h3-font-size:                $font-size-base * 1.75 !default;\n$h4-font-size:                $font-size-base * 1.5 !default;\n$h5-font-size:                $font-size-base * 1.25 !default;\n$h6-font-size:                $font-size-base !default;\n\n$headings-margin-bottom:      $spacer / 2 !default;\n$headings-font-family:        null !default;\n$headings-font-weight:        500 !default;\n$headings-line-height:        1.2 !default;\n$headings-color:              null !default;\n\n$display1-size:               6rem !default;\n$display2-size:               5.5rem !default;\n$display3-size:               4.5rem !default;\n$display4-size:               3.5rem !default;\n\n$display1-weight:             300 !default;\n$display2-weight:             300 !default;\n$display3-weight:             300 !default;\n$display4-weight:             300 !default;\n$display-line-height:         $headings-line-height !default;\n\n$lead-font-size:              $font-size-base * 1.25 !default;\n$lead-font-weight:            300 !default;\n\n$small-font-size:             80% !default;\n\n$text-muted:                  $gray-600 !default;\n\n$blockquote-small-color:      $gray-600 !default;\n$blockquote-small-font-size:  $small-font-size !default;\n$blockquote-font-size:        $font-size-base * 1.25 !default;\n\n$hr-border-color:             rgba($black, .1) !default;\n$hr-border-width:             $border-width !default;\n\n$mark-padding:                .2em !default;\n\n$dt-font-weight:              $font-weight-bold !default;\n\n$kbd-box-shadow:              inset 0 -.1rem 0 rgba($black, .25) !default;\n$nested-kbd-font-weight:      $font-weight-bold !default;\n\n$list-inline-padding:         .5rem !default;\n\n$mark-bg:                     #fcf8e3 !default;\n\n$hr-margin-y:                 $spacer !default;\n\n\n// Tables\n//\n// Customizes the `.table` component with basic values, each used across all table variations.\n\n$table-cell-padding:          .75rem !default;\n$table-cell-padding-sm:       .3rem !default;\n\n$table-color:                 $body-color !default;\n$table-bg:                    null !default;\n$table-accent-bg:             rgba($black, .05) !default;\n$table-hover-color:           $table-color !default;\n$table-hover-bg:              rgba($black, .075) !default;\n$table-active-bg:             $table-hover-bg !default;\n\n$table-border-width:          $border-width !default;\n$table-border-color:          $border-color !default;\n\n$table-head-bg:               $gray-200 !default;\n$table-head-color:            $gray-700 !default;\n$table-th-font-weight:        null !default;\n\n$table-dark-color:            $white !default;\n$table-dark-bg:               $gray-800 !default;\n$table-dark-accent-bg:        rgba($white, .05) !default;\n$table-dark-hover-color:      $table-dark-color !default;\n$table-dark-hover-bg:         rgba($white, .075) !default;\n$table-dark-border-color:     lighten($table-dark-bg, 7.5%) !default;\n\n$table-striped-order:         odd !default;\n\n$table-caption-color:         $text-muted !default;\n\n$table-bg-level:              -9 !default;\n$table-border-level:          -6 !default;\n\n\n// Buttons + Forms\n//\n// Shared variables that are reassigned to `$input-` and `$btn-` specific variables.\n\n$input-btn-padding-y:         .375rem !default;\n$input-btn-padding-x:         .75rem !default;\n$input-btn-font-family:       null !default;\n$input-btn-font-size:         $font-size-base !default;\n$input-btn-line-height:       $line-height-base !default;\n\n$input-btn-focus-width:       .2rem !default;\n$input-btn-focus-color:       rgba($component-active-bg, .25) !default;\n$input-btn-focus-box-shadow:  0 0 0 $input-btn-focus-width $input-btn-focus-color !default;\n\n$input-btn-padding-y-sm:      .25rem !default;\n$input-btn-padding-x-sm:      .5rem !default;\n$input-btn-font-size-sm:      $font-size-sm !default;\n$input-btn-line-height-sm:    $line-height-sm !default;\n\n$input-btn-padding-y-lg:      .5rem !default;\n$input-btn-padding-x-lg:      1rem !default;\n$input-btn-font-size-lg:      $font-size-lg !default;\n$input-btn-line-height-lg:    $line-height-lg !default;\n\n$input-btn-border-width:      $border-width !default;\n\n\n// Buttons\n//\n// For each of Bootstrap's buttons, define text, background, and border color.\n\n$btn-padding-y:               $input-btn-padding-y !default;\n$btn-padding-x:               $input-btn-padding-x !default;\n$btn-font-family:             $input-btn-font-family !default;\n$btn-font-size:               $input-btn-font-size !default;\n$btn-line-height:             $input-btn-line-height !default;\n$btn-white-space:             null !default; // Set to `nowrap` to prevent text wrapping\n\n$btn-padding-y-sm:            $input-btn-padding-y-sm !default;\n$btn-padding-x-sm:            $input-btn-padding-x-sm !default;\n$btn-font-size-sm:            $input-btn-font-size-sm !default;\n$btn-line-height-sm:          $input-btn-line-height-sm !default;\n\n$btn-padding-y-lg:            $input-btn-padding-y-lg !default;\n$btn-padding-x-lg:            $input-btn-padding-x-lg !default;\n$btn-font-size-lg:            $input-btn-font-size-lg !default;\n$btn-line-height-lg:          $input-btn-line-height-lg !default;\n\n$btn-border-width:            $input-btn-border-width !default;\n\n$btn-font-weight:             $font-weight-normal !default;\n$btn-box-shadow:              inset 0 1px 0 rgba($white, .15), 0 1px 1px rgba($black, .075) !default;\n$btn-focus-width:             $input-btn-focus-width !default;\n$btn-focus-box-shadow:        $input-btn-focus-box-shadow !default;\n$btn-disabled-opacity:        .65 !default;\n$btn-active-box-shadow:       inset 0 3px 5px rgba($black, .125) !default;\n\n$btn-link-disabled-color:     $gray-600 !default;\n\n$btn-block-spacing-y:         .5rem !default;\n\n// Allows for customizing button radius independently from global border radius\n$btn-border-radius:           $border-radius !default;\n$btn-border-radius-lg:        $border-radius-lg !default;\n$btn-border-radius-sm:        $border-radius-sm !default;\n\n$btn-transition:              color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;\n\n\n// Forms\n\n$label-margin-bottom:                   .5rem !default;\n\n$input-padding-y:                       $input-btn-padding-y !default;\n$input-padding-x:                       $input-btn-padding-x !default;\n$input-font-family:                     $input-btn-font-family !default;\n$input-font-size:                       $input-btn-font-size !default;\n$input-font-weight:                     $font-weight-base !default;\n$input-line-height:                     $input-btn-line-height !default;\n\n$input-padding-y-sm:                    $input-btn-padding-y-sm !default;\n$input-padding-x-sm:                    $input-btn-padding-x-sm !default;\n$input-font-size-sm:                    $input-btn-font-size-sm !default;\n$input-line-height-sm:                  $input-btn-line-height-sm !default;\n\n$input-padding-y-lg:                    $input-btn-padding-y-lg !default;\n$input-padding-x-lg:                    $input-btn-padding-x-lg !default;\n$input-font-size-lg:                    $input-btn-font-size-lg !default;\n$input-line-height-lg:                  $input-btn-line-height-lg !default;\n\n$input-bg:                              $white !default;\n$input-disabled-bg:                     $gray-200 !default;\n\n$input-color:                           $gray-700 !default;\n$input-border-color:                    $gray-400 !default;\n$input-border-width:                    $input-btn-border-width !default;\n$input-box-shadow:                      inset 0 1px 1px rgba($black, .075) !default;\n\n$input-border-radius:                   $border-radius !default;\n$input-border-radius-lg:                $border-radius-lg !default;\n$input-border-radius-sm:                $border-radius-sm !default;\n\n$input-focus-bg:                        $input-bg !default;\n$input-focus-border-color:              lighten($component-active-bg, 25%) !default;\n$input-focus-color:                     $input-color !default;\n$input-focus-width:                     $input-btn-focus-width !default;\n$input-focus-box-shadow:                $input-btn-focus-box-shadow !default;\n\n$input-placeholder-color:               $gray-600 !default;\n$input-plaintext-color:                 $body-color !default;\n\n$input-height-border:                   $input-border-width * 2 !default;\n\n$input-height-inner:                    add($input-line-height * 1em, $input-padding-y * 2) !default;\n$input-height-inner-half:               add($input-line-height * .5em, $input-padding-y) !default;\n$input-height-inner-quarter:            add($input-line-height * .25em, $input-padding-y / 2) !default;\n\n$input-height:                          add($input-line-height * 1em, add($input-padding-y * 2, $input-height-border, false)) !default;\n$input-height-sm:                       add($input-line-height-sm * 1em, add($input-padding-y-sm * 2, $input-height-border, false)) !default;\n$input-height-lg:                       add($input-line-height-lg * 1em, add($input-padding-y-lg * 2, $input-height-border, false)) !default;\n\n$input-transition:                      border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;\n\n$form-text-margin-top:                  .25rem !default;\n\n$form-check-input-gutter:               1.25rem !default;\n$form-check-input-margin-y:             .3rem !default;\n$form-check-input-margin-x:             .25rem !default;\n\n$form-check-inline-margin-x:            .75rem !default;\n$form-check-inline-input-margin-x:      .3125rem !default;\n\n$form-grid-gutter-width:                10px !default;\n$form-group-margin-bottom:              1rem !default;\n\n$input-group-addon-color:               $input-color !default;\n$input-group-addon-bg:                  $gray-200 !default;\n$input-group-addon-border-color:        $input-border-color !default;\n\n$custom-forms-transition:               background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;\n\n$custom-control-gutter:                 .5rem !default;\n$custom-control-spacer-x:               1rem !default;\n$custom-control-cursor:                 null !default;\n\n$custom-control-indicator-size:         1rem !default;\n$custom-control-indicator-bg:           $input-bg !default;\n\n$custom-control-indicator-bg-size:      50% 50% !default;\n$custom-control-indicator-box-shadow:   $input-box-shadow !default;\n$custom-control-indicator-border-color: $gray-500 !default;\n$custom-control-indicator-border-width: $input-border-width !default;\n\n$custom-control-label-color:            null !default;\n\n$custom-control-indicator-disabled-bg:          $input-disabled-bg !default;\n$custom-control-label-disabled-color:           $gray-600 !default;\n\n$custom-control-indicator-checked-color:        $component-active-color !default;\n$custom-control-indicator-checked-bg:           $component-active-bg !default;\n$custom-control-indicator-checked-disabled-bg:  rgba(theme-color(\"primary\"), .5) !default;\n$custom-control-indicator-checked-box-shadow:   null !default;\n$custom-control-indicator-checked-border-color: $custom-control-indicator-checked-bg !default;\n\n$custom-control-indicator-focus-box-shadow:     $input-focus-box-shadow !default;\n$custom-control-indicator-focus-border-color:   $input-focus-border-color !default;\n\n$custom-control-indicator-active-color:         $component-active-color !default;\n$custom-control-indicator-active-bg:            lighten($component-active-bg, 35%) !default;\n$custom-control-indicator-active-box-shadow:    null !default;\n$custom-control-indicator-active-border-color:  $custom-control-indicator-active-bg !default;\n\n$custom-checkbox-indicator-border-radius:       $border-radius !default;\n$custom-checkbox-indicator-icon-checked:        url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'><path fill='#{$custom-control-indicator-checked-color}' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/></svg>\") !default;\n\n$custom-checkbox-indicator-indeterminate-bg:           $component-active-bg !default;\n$custom-checkbox-indicator-indeterminate-color:        $custom-control-indicator-checked-color !default;\n$custom-checkbox-indicator-icon-indeterminate:         url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'><path stroke='#{$custom-checkbox-indicator-indeterminate-color}' d='M0 2h4'/></svg>\") !default;\n$custom-checkbox-indicator-indeterminate-box-shadow:   null !default;\n$custom-checkbox-indicator-indeterminate-border-color: $custom-checkbox-indicator-indeterminate-bg !default;\n\n$custom-radio-indicator-border-radius:          50% !default;\n$custom-radio-indicator-icon-checked:           url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='-4 -4 8 8'><circle r='3' fill='#{$custom-control-indicator-checked-color}'/></svg>\") !default;\n\n$custom-switch-width:                           $custom-control-indicator-size * 1.75 !default;\n$custom-switch-indicator-border-radius:         $custom-control-indicator-size / 2 !default;\n$custom-switch-indicator-size:                  subtract($custom-control-indicator-size, $custom-control-indicator-border-width * 4) !default;\n\n$custom-select-padding-y:           $input-padding-y !default;\n$custom-select-padding-x:           $input-padding-x !default;\n$custom-select-font-family:         $input-font-family !default;\n$custom-select-font-size:           $input-font-size !default;\n$custom-select-height:              $input-height !default;\n$custom-select-indicator-padding:   1rem !default; // Extra padding to account for the presence of the background-image based indicator\n$custom-select-font-weight:         $input-font-weight !default;\n$custom-select-line-height:         $input-line-height !default;\n$custom-select-color:               $input-color !default;\n$custom-select-disabled-color:      $gray-600 !default;\n$custom-select-bg:                  $input-bg !default;\n$custom-select-disabled-bg:         $gray-200 !default;\n$custom-select-bg-size:             8px 10px !default; // In pixels because image dimensions\n$custom-select-indicator-color:     $gray-800 !default;\n$custom-select-indicator:           url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'><path fill='#{$custom-select-indicator-color}' d='M2 0L0 2h4zm0 5L0 3h4z'/></svg>\") !default;\n$custom-select-background:          escape-svg($custom-select-indicator) right $custom-select-padding-x center / $custom-select-bg-size no-repeat !default; // Used so we can have multiple background elements (e.g., arrow and feedback icon)\n\n$custom-select-feedback-icon-padding-right: add(1em * .75, (2 * $custom-select-padding-y * .75) + $custom-select-padding-x + $custom-select-indicator-padding) !default;\n$custom-select-feedback-icon-position:      center right ($custom-select-padding-x + $custom-select-indicator-padding) !default;\n$custom-select-feedback-icon-size:          $input-height-inner-half $input-height-inner-half !default;\n\n$custom-select-border-width:        $input-border-width !default;\n$custom-select-border-color:        $input-border-color !default;\n$custom-select-border-radius:       $border-radius !default;\n$custom-select-box-shadow:          inset 0 1px 2px rgba($black, .075) !default;\n\n$custom-select-focus-border-color:  $input-focus-border-color !default;\n$custom-select-focus-width:         $input-focus-width !default;\n$custom-select-focus-box-shadow:    0 0 0 $custom-select-focus-width $input-btn-focus-color !default;\n\n$custom-select-padding-y-sm:        $input-padding-y-sm !default;\n$custom-select-padding-x-sm:        $input-padding-x-sm !default;\n$custom-select-font-size-sm:        $input-font-size-sm !default;\n$custom-select-height-sm:           $input-height-sm !default;\n\n$custom-select-padding-y-lg:        $input-padding-y-lg !default;\n$custom-select-padding-x-lg:        $input-padding-x-lg !default;\n$custom-select-font-size-lg:        $input-font-size-lg !default;\n$custom-select-height-lg:           $input-height-lg !default;\n\n$custom-range-track-width:          100% !default;\n$custom-range-track-height:         .5rem !default;\n$custom-range-track-cursor:         pointer !default;\n$custom-range-track-bg:             $gray-300 !default;\n$custom-range-track-border-radius:  1rem !default;\n$custom-range-track-box-shadow:     inset 0 .25rem .25rem rgba($black, .1) !default;\n\n$custom-range-thumb-width:                   1rem !default;\n$custom-range-thumb-height:                  $custom-range-thumb-width !default;\n$custom-range-thumb-bg:                      $component-active-bg !default;\n$custom-range-thumb-border:                  0 !default;\n$custom-range-thumb-border-radius:           1rem !default;\n$custom-range-thumb-box-shadow:              0 .1rem .25rem rgba($black, .1) !default;\n$custom-range-thumb-focus-box-shadow:        0 0 0 1px $body-bg, $input-focus-box-shadow !default;\n$custom-range-thumb-focus-box-shadow-width:  $input-focus-width !default; // For focus box shadow issue in IE/Edge\n$custom-range-thumb-active-bg:               lighten($component-active-bg, 35%) !default;\n$custom-range-thumb-disabled-bg:             $gray-500 !default;\n\n$custom-file-height:                $input-height !default;\n$custom-file-height-inner:          $input-height-inner !default;\n$custom-file-focus-border-color:    $input-focus-border-color !default;\n$custom-file-focus-box-shadow:      $input-focus-box-shadow !default;\n$custom-file-disabled-bg:           $input-disabled-bg !default;\n\n$custom-file-padding-y:             $input-padding-y !default;\n$custom-file-padding-x:             $input-padding-x !default;\n$custom-file-line-height:           $input-line-height !default;\n$custom-file-font-family:           $input-font-family !default;\n$custom-file-font-weight:           $input-font-weight !default;\n$custom-file-color:                 $input-color !default;\n$custom-file-bg:                    $input-bg !default;\n$custom-file-border-width:          $input-border-width !default;\n$custom-file-border-color:          $input-border-color !default;\n$custom-file-border-radius:         $input-border-radius !default;\n$custom-file-box-shadow:            $input-box-shadow !default;\n$custom-file-button-color:          $custom-file-color !default;\n$custom-file-button-bg:             $input-group-addon-bg !default;\n$custom-file-text: (\n  en: \"Browse\"\n) !default;\n\n\n// Form validation\n\n$form-feedback-margin-top:          $form-text-margin-top !default;\n$form-feedback-font-size:           $small-font-size !default;\n$form-feedback-valid-color:         theme-color(\"success\") !default;\n$form-feedback-invalid-color:       theme-color(\"danger\") !default;\n\n$form-feedback-icon-valid-color:    $form-feedback-valid-color !default;\n$form-feedback-icon-valid:          url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'><path fill='#{$form-feedback-icon-valid-color}' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/></svg>\") !default;\n$form-feedback-icon-invalid-color:  $form-feedback-invalid-color !default;\n$form-feedback-icon-invalid:        url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='#{$form-feedback-icon-invalid-color}' viewBox='0 0 12 12'><circle cx='6' cy='6' r='4.5'/><path stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/><circle cx='6' cy='8.2' r='.6' fill='#{$form-feedback-icon-invalid-color}' stroke='none'/></svg>\") !default;\n\n$form-validation-states: () !default;\n$form-validation-states: map-merge(\n  (\n    \"valid\": (\n      \"color\": $form-feedback-valid-color,\n      \"icon\": $form-feedback-icon-valid\n    ),\n    \"invalid\": (\n      \"color\": $form-feedback-invalid-color,\n      \"icon\": $form-feedback-icon-invalid\n    ),\n  ),\n  $form-validation-states\n);\n\n// Z-index master list\n//\n// Warning: Avoid customizing these values. They're used for a bird's eye view\n// of components dependent on the z-axis and are designed to all work together.\n\n$zindex-dropdown:                   1000 !default;\n$zindex-sticky:                     1020 !default;\n$zindex-fixed:                      1030 !default;\n$zindex-modal-backdrop:             1040 !default;\n$zindex-modal:                      1050 !default;\n$zindex-popover:                    1060 !default;\n$zindex-tooltip:                    1070 !default;\n\n\n// Navs\n\n$nav-link-padding-y:                .5rem !default;\n$nav-link-padding-x:                1rem !default;\n$nav-link-disabled-color:           $gray-600 !default;\n\n$nav-tabs-border-color:             $gray-300 !default;\n$nav-tabs-border-width:             $border-width !default;\n$nav-tabs-border-radius:            $border-radius !default;\n$nav-tabs-link-hover-border-color:  $gray-200 $gray-200 $nav-tabs-border-color !default;\n$nav-tabs-link-active-color:        $gray-700 !default;\n$nav-tabs-link-active-bg:           $body-bg !default;\n$nav-tabs-link-active-border-color: $gray-300 $gray-300 $nav-tabs-link-active-bg !default;\n\n$nav-pills-border-radius:           $border-radius !default;\n$nav-pills-link-active-color:       $component-active-color !default;\n$nav-pills-link-active-bg:          $component-active-bg !default;\n\n$nav-divider-color:                 $gray-200 !default;\n$nav-divider-margin-y:              $spacer / 2 !default;\n\n\n// Navbar\n\n$navbar-padding-y:                  $spacer / 2 !default;\n$navbar-padding-x:                  $spacer !default;\n\n$navbar-nav-link-padding-x:         .5rem !default;\n\n$navbar-brand-font-size:            $font-size-lg !default;\n// Compute the navbar-brand padding-y so the navbar-brand will have the same height as navbar-text and nav-link\n$nav-link-height:                   $font-size-base * $line-height-base + $nav-link-padding-y * 2 !default;\n$navbar-brand-height:               $navbar-brand-font-size * $line-height-base !default;\n$navbar-brand-padding-y:            ($nav-link-height - $navbar-brand-height) / 2 !default;\n\n$navbar-toggler-padding-y:          .25rem !default;\n$navbar-toggler-padding-x:          .75rem !default;\n$navbar-toggler-font-size:          $font-size-lg !default;\n$navbar-toggler-border-radius:      $btn-border-radius !default;\n\n$navbar-nav-scroll-max-height:      75vh !default;\n\n$navbar-dark-color:                 rgba($white, .5) !default;\n$navbar-dark-hover-color:           rgba($white, .75) !default;\n$navbar-dark-active-color:          $white !default;\n$navbar-dark-disabled-color:        rgba($white, .25) !default;\n$navbar-dark-toggler-icon-bg:       url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'><path stroke='#{$navbar-dark-color}' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>\") !default;\n$navbar-dark-toggler-border-color:  rgba($white, .1) !default;\n\n$navbar-light-color:                rgba($black, .5) !default;\n$navbar-light-hover-color:          rgba($black, .7) !default;\n$navbar-light-active-color:         rgba($black, .9) !default;\n$navbar-light-disabled-color:       rgba($black, .3) !default;\n$navbar-light-toggler-icon-bg:      url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'><path stroke='#{$navbar-light-color}' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>\") !default;\n$navbar-light-toggler-border-color: rgba($black, .1) !default;\n\n$navbar-light-brand-color:                $navbar-light-active-color !default;\n$navbar-light-brand-hover-color:          $navbar-light-active-color !default;\n$navbar-dark-brand-color:                 $navbar-dark-active-color !default;\n$navbar-dark-brand-hover-color:           $navbar-dark-active-color !default;\n\n\n// Dropdowns\n//\n// Dropdown menu container and contents.\n\n$dropdown-min-width:                10rem !default;\n$dropdown-padding-x:                0 !default;\n$dropdown-padding-y:                .5rem !default;\n$dropdown-spacer:                   .125rem !default;\n$dropdown-font-size:                $font-size-base !default;\n$dropdown-color:                    $body-color !default;\n$dropdown-bg:                       $white !default;\n$dropdown-border-color:             rgba($black, .15) !default;\n$dropdown-border-radius:            $border-radius !default;\n$dropdown-border-width:             $border-width !default;\n$dropdown-inner-border-radius:      subtract($dropdown-border-radius, $dropdown-border-width) !default;\n$dropdown-divider-bg:               $gray-200 !default;\n$dropdown-divider-margin-y:         $nav-divider-margin-y !default;\n$dropdown-box-shadow:               0 .5rem 1rem rgba($black, .175) !default;\n\n$dropdown-link-color:               $gray-900 !default;\n$dropdown-link-hover-color:         darken($gray-900, 5%) !default;\n$dropdown-link-hover-bg:            $gray-200 !default;\n\n$dropdown-link-active-color:        $component-active-color !default;\n$dropdown-link-active-bg:           $component-active-bg !default;\n\n$dropdown-link-disabled-color:      $gray-500 !default;\n\n$dropdown-item-padding-y:           .25rem !default;\n$dropdown-item-padding-x:           1.5rem !default;\n\n$dropdown-header-color:             $gray-600 !default;\n$dropdown-header-padding:           $dropdown-padding-y $dropdown-item-padding-x !default;\n\n\n// Pagination\n\n$pagination-padding-y:              .5rem !default;\n$pagination-padding-x:              .75rem !default;\n$pagination-padding-y-sm:           .25rem !default;\n$pagination-padding-x-sm:           .5rem !default;\n$pagination-padding-y-lg:           .75rem !default;\n$pagination-padding-x-lg:           1.5rem !default;\n$pagination-line-height:            1.25 !default;\n\n$pagination-color:                  $link-color !default;\n$pagination-bg:                     $white !default;\n$pagination-border-width:           $border-width !default;\n$pagination-border-color:           $gray-300 !default;\n\n$pagination-focus-box-shadow:       $input-btn-focus-box-shadow !default;\n$pagination-focus-outline:          0 !default;\n\n$pagination-hover-color:            $link-hover-color !default;\n$pagination-hover-bg:               $gray-200 !default;\n$pagination-hover-border-color:     $gray-300 !default;\n\n$pagination-active-color:           $component-active-color !default;\n$pagination-active-bg:              $component-active-bg !default;\n$pagination-active-border-color:    $pagination-active-bg !default;\n\n$pagination-disabled-color:         $gray-600 !default;\n$pagination-disabled-bg:            $white !default;\n$pagination-disabled-border-color:  $gray-300 !default;\n\n$pagination-border-radius-sm:       $border-radius-sm !default;\n$pagination-border-radius-lg:       $border-radius-lg !default;\n\n// Jumbotron\n\n$jumbotron-padding:                 2rem !default;\n$jumbotron-color:                   null !default;\n$jumbotron-bg:                      $gray-200 !default;\n\n\n// Cards\n\n$card-spacer-y:                     .75rem !default;\n$card-spacer-x:                     1.25rem !default;\n$card-border-width:                 $border-width !default;\n$card-border-radius:                $border-radius !default;\n$card-border-color:                 rgba($black, .125) !default;\n$card-inner-border-radius:          subtract($card-border-radius, $card-border-width) !default;\n$card-cap-bg:                       rgba($black, .03) !default;\n$card-cap-color:                    null !default;\n$card-height:                       null !default;\n$card-color:                        null !default;\n$card-bg:                           $white !default;\n\n$card-img-overlay-padding:          1.25rem !default;\n\n$card-group-margin:                 $grid-gutter-width / 2 !default;\n$card-deck-margin:                  $card-group-margin !default;\n\n$card-columns-count:                3 !default;\n$card-columns-gap:                  1.25rem !default;\n$card-columns-margin:               $card-spacer-y !default;\n\n\n// Tooltips\n\n$tooltip-font-size:                 $font-size-sm !default;\n$tooltip-max-width:                 200px !default;\n$tooltip-color:                     $white !default;\n$tooltip-bg:                        $black !default;\n$tooltip-border-radius:             $border-radius !default;\n$tooltip-opacity:                   .9 !default;\n$tooltip-padding-y:                 .25rem !default;\n$tooltip-padding-x:                 .5rem !default;\n$tooltip-margin:                    0 !default;\n\n$tooltip-arrow-width:               .8rem !default;\n$tooltip-arrow-height:              .4rem !default;\n$tooltip-arrow-color:               $tooltip-bg !default;\n\n// Form tooltips must come after regular tooltips\n$form-feedback-tooltip-padding-y:     $tooltip-padding-y !default;\n$form-feedback-tooltip-padding-x:     $tooltip-padding-x !default;\n$form-feedback-tooltip-font-size:     $tooltip-font-size !default;\n$form-feedback-tooltip-line-height:   $line-height-base !default;\n$form-feedback-tooltip-opacity:       $tooltip-opacity !default;\n$form-feedback-tooltip-border-radius: $tooltip-border-radius !default;\n\n\n// Popovers\n\n$popover-font-size:                 $font-size-sm !default;\n$popover-bg:                        $white !default;\n$popover-max-width:                 276px !default;\n$popover-border-width:              $border-width !default;\n$popover-border-color:              rgba($black, .2) !default;\n$popover-border-radius:             $border-radius-lg !default;\n$popover-inner-border-radius:       subtract($popover-border-radius, $popover-border-width) !default;\n$popover-box-shadow:                0 .25rem .5rem rgba($black, .2) !default;\n\n$popover-header-bg:                 darken($popover-bg, 3%) !default;\n$popover-header-color:              $headings-color !default;\n$popover-header-padding-y:          .5rem !default;\n$popover-header-padding-x:          .75rem !default;\n\n$popover-body-color:                $body-color !default;\n$popover-body-padding-y:            $popover-header-padding-y !default;\n$popover-body-padding-x:            $popover-header-padding-x !default;\n\n$popover-arrow-width:               1rem !default;\n$popover-arrow-height:              .5rem !default;\n$popover-arrow-color:               $popover-bg !default;\n\n$popover-arrow-outer-color:         fade-in($popover-border-color, .05) !default;\n\n\n// Toasts\n\n$toast-max-width:                   350px !default;\n$toast-padding-x:                   .75rem !default;\n$toast-padding-y:                   .25rem !default;\n$toast-font-size:                   .875rem !default;\n$toast-color:                       null !default;\n$toast-background-color:            rgba($white, .85) !default;\n$toast-border-width:                1px !default;\n$toast-border-color:                rgba(0, 0, 0, .1) !default;\n$toast-border-radius:               .25rem !default;\n$toast-box-shadow:                  0 .25rem .75rem rgba($black, .1) !default;\n\n$toast-header-color:                $gray-600 !default;\n$toast-header-background-color:     rgba($white, .85) !default;\n$toast-header-border-color:         rgba(0, 0, 0, .05) !default;\n\n\n// Badges\n\n$badge-font-size:                   75% !default;\n$badge-font-weight:                 $font-weight-bold !default;\n$badge-padding-y:                   .25em !default;\n$badge-padding-x:                   .4em !default;\n$badge-border-radius:               $border-radius !default;\n\n$badge-transition:                  $btn-transition !default;\n$badge-focus-width:                 $input-btn-focus-width !default;\n\n$badge-pill-padding-x:              .6em !default;\n// Use a higher than normal value to ensure completely rounded edges when\n// customizing padding or font-size on labels.\n$badge-pill-border-radius:          10rem !default;\n\n\n// Modals\n\n// Padding applied to the modal body\n$modal-inner-padding:               1rem !default;\n\n// Margin between elements in footer, must be lower than or equal to 2 * $modal-inner-padding\n$modal-footer-margin-between:       .5rem !default;\n\n$modal-dialog-margin:               .5rem !default;\n$modal-dialog-margin-y-sm-up:       1.75rem !default;\n\n$modal-title-line-height:           $line-height-base !default;\n\n$modal-content-color:               null !default;\n$modal-content-bg:                  $white !default;\n$modal-content-border-color:        rgba($black, .2) !default;\n$modal-content-border-width:        $border-width !default;\n$modal-content-border-radius:       $border-radius-lg !default;\n$modal-content-inner-border-radius: subtract($modal-content-border-radius, $modal-content-border-width) !default;\n$modal-content-box-shadow-xs:       0 .25rem .5rem rgba($black, .5) !default;\n$modal-content-box-shadow-sm-up:    0 .5rem 1rem rgba($black, .5) !default;\n\n$modal-backdrop-bg:                 $black !default;\n$modal-backdrop-opacity:            .5 !default;\n$modal-header-border-color:         $border-color !default;\n$modal-footer-border-color:         $modal-header-border-color !default;\n$modal-header-border-width:         $modal-content-border-width !default;\n$modal-footer-border-width:         $modal-header-border-width !default;\n$modal-header-padding-y:            1rem !default;\n$modal-header-padding-x:            1rem !default;\n$modal-header-padding:              $modal-header-padding-y $modal-header-padding-x !default; // Keep this for backwards compatibility\n\n$modal-xl:                          1140px !default;\n$modal-lg:                          800px !default;\n$modal-md:                          500px !default;\n$modal-sm:                          300px !default;\n\n$modal-fade-transform:              translate(0, -50px) !default;\n$modal-show-transform:              none !default;\n$modal-transition:                  transform .3s ease-out !default;\n$modal-scale-transform:             scale(1.02) !default;\n\n\n// Alerts\n//\n// Define alert colors, border radius, and padding.\n\n$alert-padding-y:                   .75rem !default;\n$alert-padding-x:                   1.25rem !default;\n$alert-margin-bottom:               1rem !default;\n$alert-border-radius:               $border-radius !default;\n$alert-link-font-weight:            $font-weight-bold !default;\n$alert-border-width:                $border-width !default;\n\n$alert-bg-level:                    -10 !default;\n$alert-border-level:                -9 !default;\n$alert-color-level:                 6 !default;\n\n\n// Progress bars\n\n$progress-height:                   1rem !default;\n$progress-font-size:                $font-size-base * .75 !default;\n$progress-bg:                       $gray-200 !default;\n$progress-border-radius:            $border-radius !default;\n$progress-box-shadow:               inset 0 .1rem .1rem rgba($black, .1) !default;\n$progress-bar-color:                $white !default;\n$progress-bar-bg:                   theme-color(\"primary\") !default;\n$progress-bar-animation-timing:     1s linear infinite !default;\n$progress-bar-transition:           width .6s ease !default;\n\n\n// List group\n\n$list-group-color:                  null !default;\n$list-group-bg:                     $white !default;\n$list-group-border-color:           rgba($black, .125) !default;\n$list-group-border-width:           $border-width !default;\n$list-group-border-radius:          $border-radius !default;\n\n$list-group-item-padding-y:         .75rem !default;\n$list-group-item-padding-x:         1.25rem !default;\n\n$list-group-hover-bg:               $gray-100 !default;\n$list-group-active-color:           $component-active-color !default;\n$list-group-active-bg:              $component-active-bg !default;\n$list-group-active-border-color:    $list-group-active-bg !default;\n\n$list-group-disabled-color:         $gray-600 !default;\n$list-group-disabled-bg:            $list-group-bg !default;\n\n$list-group-action-color:           $gray-700 !default;\n$list-group-action-hover-color:     $list-group-action-color !default;\n\n$list-group-action-active-color:    $body-color !default;\n$list-group-action-active-bg:       $gray-200 !default;\n\n\n// Image thumbnails\n\n$thumbnail-padding:                 .25rem !default;\n$thumbnail-bg:                      $body-bg !default;\n$thumbnail-border-width:            $border-width !default;\n$thumbnail-border-color:            $gray-300 !default;\n$thumbnail-border-radius:           $border-radius !default;\n$thumbnail-box-shadow:              0 1px 2px rgba($black, .075) !default;\n\n\n// Figures\n\n$figure-caption-font-size:          90% !default;\n$figure-caption-color:              $gray-600 !default;\n\n\n// Breadcrumbs\n\n$breadcrumb-font-size:              null !default;\n\n$breadcrumb-padding-y:              .75rem !default;\n$breadcrumb-padding-x:              1rem !default;\n$breadcrumb-item-padding:           .5rem !default;\n\n$breadcrumb-margin-bottom:          1rem !default;\n\n$breadcrumb-bg:                     $gray-200 !default;\n$breadcrumb-divider-color:          $gray-600 !default;\n$breadcrumb-active-color:           $gray-600 !default;\n$breadcrumb-divider:                quote(\"/\") !default;\n\n$breadcrumb-border-radius:          $border-radius !default;\n\n\n// Carousel\n\n$carousel-control-color:             $white !default;\n$carousel-control-width:             15% !default;\n$carousel-control-opacity:           .5 !default;\n$carousel-control-hover-opacity:     .9 !default;\n$carousel-control-transition:        opacity .15s ease !default;\n\n$carousel-indicator-width:           30px !default;\n$carousel-indicator-height:          3px !default;\n$carousel-indicator-hit-area-height: 10px !default;\n$carousel-indicator-spacer:          3px !default;\n$carousel-indicator-active-bg:       $white !default;\n$carousel-indicator-transition:      opacity .6s ease !default;\n\n$carousel-caption-width:             70% !default;\n$carousel-caption-color:             $white !default;\n\n$carousel-control-icon-width:        20px !default;\n\n$carousel-control-prev-icon-bg:      url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' fill='#{$carousel-control-color}' width='8' height='8' viewBox='0 0 8 8'><path d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/></svg>\") !default;\n$carousel-control-next-icon-bg:      url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' fill='#{$carousel-control-color}' width='8' height='8' viewBox='0 0 8 8'><path d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/></svg>\") !default;\n\n$carousel-transition-duration:       .6s !default;\n$carousel-transition:                transform $carousel-transition-duration ease-in-out !default; // Define transform transition first if using multiple transitions (e.g., `transform 2s ease, opacity .5s ease-out`)\n\n\n// Spinners\n\n$spinner-width:         2rem !default;\n$spinner-height:        $spinner-width !default;\n$spinner-border-width:  .25em !default;\n\n$spinner-width-sm:        1rem !default;\n$spinner-height-sm:       $spinner-width-sm !default;\n$spinner-border-width-sm: .2em !default;\n\n\n// Close\n\n$close-font-size:                   $font-size-base * 1.5 !default;\n$close-font-weight:                 $font-weight-bold !default;\n$close-color:                       $black !default;\n$close-text-shadow:                 0 1px 0 $white !default;\n\n\n// Code\n\n$code-font-size:                    87.5% !default;\n$code-color:                        $pink !default;\n\n$kbd-padding-y:                     .2rem !default;\n$kbd-padding-x:                     .4rem !default;\n$kbd-font-size:                     $code-font-size !default;\n$kbd-color:                         $white !default;\n$kbd-bg:                            $gray-900 !default;\n\n$pre-color:                         $gray-900 !default;\n$pre-scrollable-max-height:         340px !default;\n\n\n// Utilities\n\n$displays: none, inline, inline-block, block, table, table-row, table-cell, flex, inline-flex !default;\n$overflows: auto, hidden !default;\n$positions: static, relative, absolute, fixed, sticky !default;\n$user-selects: all, auto, none !default;\n\n\n// Printing\n\n$print-page-size:                   a3 !default;\n$print-body-min-width:              map-get($grid-breakpoints, \"lg\") !default;\n","// stylelint-disable property-blacklist, scss/dollar-variable-default\n\n// SCSS RFS mixin\n//\n// Automated font-resizing\n//\n// See https://github.com/twbs/rfs\n\n// Configuration\n\n// Base font size\n$rfs-base-font-size: 1.25rem !default;\n$rfs-font-size-unit: rem !default;\n\n// Breakpoint at where font-size starts decreasing if screen width is smaller\n$rfs-breakpoint: 1200px !default;\n$rfs-breakpoint-unit: px !default;\n\n// Resize font-size based on screen height and width\n$rfs-two-dimensional: false !default;\n\n// Factor of decrease\n$rfs-factor: 10 !default;\n\n@if type-of($rfs-factor) != \"number\" or $rfs-factor <= 1 {\n  @error \"`#{$rfs-factor}` is not a valid  $rfs-factor, it must be greater than 1.\";\n}\n\n// Generate enable or disable classes. Possibilities: false, \"enable\" or \"disable\"\n$rfs-class: false !default;\n\n// 1 rem = $rfs-rem-value px\n$rfs-rem-value: 16 !default;\n\n// Safari iframe resize bug: https://github.com/twbs/rfs/issues/14\n$rfs-safari-iframe-resize-bug-fix: false !default;\n\n// Disable RFS by setting $enable-responsive-font-sizes to false\n$enable-responsive-font-sizes: true !default;\n\n// Cache $rfs-base-font-size unit\n$rfs-base-font-size-unit: unit($rfs-base-font-size);\n\n// Remove px-unit from $rfs-base-font-size for calculations\n@if $rfs-base-font-size-unit == \"px\" {\n  $rfs-base-font-size: $rfs-base-font-size / ($rfs-base-font-size * 0 + 1);\n}\n@else if $rfs-base-font-size-unit == \"rem\" {\n  $rfs-base-font-size: $rfs-base-font-size / ($rfs-base-font-size * 0 + 1 / $rfs-rem-value);\n}\n\n// Cache $rfs-breakpoint unit to prevent multiple calls\n$rfs-breakpoint-unit-cache: unit($rfs-breakpoint);\n\n// Remove unit from $rfs-breakpoint for calculations\n@if $rfs-breakpoint-unit-cache == \"px\" {\n  $rfs-breakpoint: $rfs-breakpoint / ($rfs-breakpoint * 0 + 1);\n}\n@else if $rfs-breakpoint-unit-cache == \"rem\" or $rfs-breakpoint-unit-cache == \"em\" {\n  $rfs-breakpoint: $rfs-breakpoint / ($rfs-breakpoint * 0 + 1 / $rfs-rem-value);\n}\n\n// Responsive font-size mixin\n@mixin rfs($fs, $important: false) {\n  // Cache $fs unit\n  $fs-unit: if(type-of($fs) == \"number\", unit($fs), false);\n\n  // Add !important suffix if needed\n  $rfs-suffix: if($important, \" !important\", \"\");\n\n  // If $fs isn't a number (like inherit) or $fs has a unit (not px or rem, like 1.5em) or $ is 0, just print the value\n  @if not $fs-unit or $fs-unit != \"\" and $fs-unit != \"px\" and $fs-unit != \"rem\" or $fs == 0 {\n    font-size: #{$fs}#{$rfs-suffix};\n  }\n  @else {\n    // Variables for storing static and fluid rescaling\n    $rfs-static: null;\n    $rfs-fluid: null;\n\n    // Remove px-unit from $fs for calculations\n    @if $fs-unit == \"px\" {\n      $fs: $fs / ($fs * 0 + 1);\n    }\n    @else if $fs-unit == \"rem\" {\n      $fs: $fs / ($fs * 0 + 1 / $rfs-rem-value);\n    }\n\n    // Set default font-size\n    @if $rfs-font-size-unit == rem {\n      $rfs-static: #{$fs / $rfs-rem-value}rem#{$rfs-suffix};\n    }\n    @else if $rfs-font-size-unit == px {\n      $rfs-static: #{$fs}px#{$rfs-suffix};\n    }\n    @else {\n      @error \"`#{$rfs-font-size-unit}` is not a valid unit for $rfs-font-size-unit. Use `px` or `rem`.\";\n    }\n\n    // Only add media query if font-size is bigger as the minimum font-size\n    // If $rfs-factor == 1, no rescaling will take place\n    @if $fs > $rfs-base-font-size and $enable-responsive-font-sizes {\n      $min-width: null;\n      $variable-unit: null;\n\n      // Calculate minimum font-size for given font-size\n      $fs-min: $rfs-base-font-size + ($fs - $rfs-base-font-size) / $rfs-factor;\n\n      // Calculate difference between given font-size and minimum font-size for given font-size\n      $fs-diff: $fs - $fs-min;\n\n      // Base font-size formatting\n      // No need to check if the unit is valid, because we did that before\n      $min-width: if($rfs-font-size-unit == rem, #{$fs-min / $rfs-rem-value}rem, #{$fs-min}px);\n\n      // If two-dimensional, use smallest of screen width and height\n      $variable-unit: if($rfs-two-dimensional, vmin, vw);\n\n      // Calculate the variable width between 0 and $rfs-breakpoint\n      $variable-width: #{$fs-diff * 100 / $rfs-breakpoint}#{$variable-unit};\n\n      // Set the calculated font-size.\n      $rfs-fluid: calc(#{$min-width} + #{$variable-width}) #{$rfs-suffix};\n    }\n\n    // Rendering\n    @if $rfs-fluid == null {\n      // Only render static font-size if no fluid font-size is available\n      font-size: $rfs-static;\n    }\n    @else {\n      $mq-value: null;\n\n      // RFS breakpoint formatting\n      @if $rfs-breakpoint-unit == em or $rfs-breakpoint-unit == rem {\n        $mq-value: #{$rfs-breakpoint / $rfs-rem-value}#{$rfs-breakpoint-unit};\n      }\n      @else if $rfs-breakpoint-unit == px {\n        $mq-value: #{$rfs-breakpoint}px;\n      }\n      @else {\n        @error \"`#{$rfs-breakpoint-unit}` is not a valid unit for $rfs-breakpoint-unit. Use `px`, `em` or `rem`.\";\n      }\n\n      @if $rfs-class == \"disable\" {\n        // Adding an extra class increases specificity,\n        // which prevents the media query to override the font size\n        &,\n        .disable-responsive-font-size &,\n        &.disable-responsive-font-size {\n          font-size: $rfs-static;\n        }\n      }\n      @else {\n        font-size: $rfs-static;\n      }\n\n      @if $rfs-two-dimensional {\n        @media (max-width: #{$mq-value}), (max-height: #{$mq-value}) {\n          @if $rfs-class == \"enable\" {\n            .enable-responsive-font-size &,\n            &.enable-responsive-font-size {\n              font-size: $rfs-fluid;\n            }\n          }\n          @else {\n            font-size: $rfs-fluid;\n          }\n\n          @if $rfs-safari-iframe-resize-bug-fix {\n            // stylelint-disable-next-line length-zero-no-unit\n            min-width: 0vw;\n          }\n        }\n      }\n      @else {\n        @media (max-width: #{$mq-value}) {\n          @if $rfs-class == \"enable\" {\n            .enable-responsive-font-size &,\n            &.enable-responsive-font-size {\n              font-size: $rfs-fluid;\n            }\n          }\n          @else {\n            font-size: $rfs-fluid;\n          }\n\n          @if $rfs-safari-iframe-resize-bug-fix {\n            // stylelint-disable-next-line length-zero-no-unit\n            min-width: 0vw;\n          }\n        }\n      }\n    }\n  }\n}\n\n// The font-size & responsive-font-size mixin uses RFS to rescale font sizes\n@mixin font-size($fs, $important: false) {\n  @include rfs($fs, $important);\n}\n\n@mixin responsive-font-size($fs, $important: false) {\n  @include rfs($fs, $important);\n}\n","// Hover mixin and `$enable-hover-media-query` are deprecated.\n//\n// Originally added during our alphas and maintained during betas, this mixin was\n// designed to prevent `:hover` stickiness on iOS-an issue where hover styles\n// would persist after initial touch.\n//\n// For backward compatibility, we've kept these mixins and updated them to\n// always return their regular pseudo-classes instead of a shimmed media query.\n//\n// Issue: https://github.com/twbs/bootstrap/issues/25195\n\n@mixin hover() {\n  &:hover { @content; }\n}\n\n@mixin hover-focus() {\n  &:hover,\n  &:focus {\n    @content;\n  }\n}\n\n@mixin plain-hover-focus() {\n  &,\n  &:hover,\n  &:focus {\n    @content;\n  }\n}\n\n@mixin hover-focus-active() {\n  &:hover,\n  &:focus,\n  &:active {\n    @content;\n  }\n}\n","// stylelint-disable selector-list-comma-newline-after\n\n//\n// Headings\n//\n\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: $headings-margin-bottom;\n  font-family: $headings-font-family;\n  font-weight: $headings-font-weight;\n  line-height: $headings-line-height;\n  color: $headings-color;\n}\n\nh1, .h1 { @include font-size($h1-font-size); }\nh2, .h2 { @include font-size($h2-font-size); }\nh3, .h3 { @include font-size($h3-font-size); }\nh4, .h4 { @include font-size($h4-font-size); }\nh5, .h5 { @include font-size($h5-font-size); }\nh6, .h6 { @include font-size($h6-font-size); }\n\n.lead {\n  @include font-size($lead-font-size);\n  font-weight: $lead-font-weight;\n}\n\n// Type display classes\n.display-1 {\n  @include font-size($display1-size);\n  font-weight: $display1-weight;\n  line-height: $display-line-height;\n}\n.display-2 {\n  @include font-size($display2-size);\n  font-weight: $display2-weight;\n  line-height: $display-line-height;\n}\n.display-3 {\n  @include font-size($display3-size);\n  font-weight: $display3-weight;\n  line-height: $display-line-height;\n}\n.display-4 {\n  @include font-size($display4-size);\n  font-weight: $display4-weight;\n  line-height: $display-line-height;\n}\n\n\n//\n// Horizontal rules\n//\n\nhr {\n  margin-top: $hr-margin-y;\n  margin-bottom: $hr-margin-y;\n  border: 0;\n  border-top: $hr-border-width solid $hr-border-color;\n}\n\n\n//\n// Emphasis\n//\n\nsmall,\n.small {\n  @include font-size($small-font-size);\n  font-weight: $font-weight-normal;\n}\n\nmark,\n.mark {\n  padding: $mark-padding;\n  background-color: $mark-bg;\n}\n\n\n//\n// Lists\n//\n\n.list-unstyled {\n  @include list-unstyled();\n}\n\n// Inline turns list items into inline-block\n.list-inline {\n  @include list-unstyled();\n}\n.list-inline-item {\n  display: inline-block;\n\n  &:not(:last-child) {\n    margin-right: $list-inline-padding;\n  }\n}\n\n\n//\n// Misc\n//\n\n// Builds on `abbr`\n.initialism {\n  @include font-size(90%);\n  text-transform: uppercase;\n}\n\n// Blockquotes\n.blockquote {\n  margin-bottom: $spacer;\n  @include font-size($blockquote-font-size);\n}\n\n.blockquote-footer {\n  display: block;\n  @include font-size($blockquote-small-font-size);\n  color: $blockquote-small-color;\n\n  &::before {\n    content: \"\\2014\\00A0\"; // em dash, nbsp\n  }\n}\n","// Lists\n\n// Unstyled keeps list items block level, just removes default browser padding and list-style\n@mixin list-unstyled() {\n  padding-left: 0;\n  list-style: none;\n}\n","// Responsive images (ensure images don't scale beyond their parents)\n//\n// This is purposefully opt-in via an explicit class rather than being the default for all `<img>`s.\n// We previously tried the \"images are responsive by default\" approach in Bootstrap v2,\n// and abandoned it in Bootstrap v3 because it breaks lots of third-party widgets (including Google Maps)\n// which weren't expecting the images within themselves to be involuntarily resized.\n// See also https://github.com/twbs/bootstrap/issues/18178\n.img-fluid {\n  @include img-fluid();\n}\n\n\n// Image thumbnails\n.img-thumbnail {\n  padding: $thumbnail-padding;\n  background-color: $thumbnail-bg;\n  border: $thumbnail-border-width solid $thumbnail-border-color;\n  @include border-radius($thumbnail-border-radius);\n  @include box-shadow($thumbnail-box-shadow);\n\n  // Keep them at most 100% wide\n  @include img-fluid();\n}\n\n//\n// Figures\n//\n\n.figure {\n  // Ensures the caption's text aligns with the image.\n  display: inline-block;\n}\n\n.figure-img {\n  margin-bottom: $spacer / 2;\n  line-height: 1;\n}\n\n.figure-caption {\n  @include font-size($figure-caption-font-size);\n  color: $figure-caption-color;\n}\n","// Image Mixins\n// - Responsive image\n// - Retina image\n\n\n// Responsive image\n//\n// Keep images from scaling beyond the width of their parents.\n\n@mixin img-fluid() {\n  // Part 1: Set a maximum relative to the parent\n  max-width: 100%;\n  // Part 2: Override the height to auto, otherwise images will be stretched\n  // when setting a width and height attribute on the img element.\n  height: auto;\n}\n\n\n// Retina image\n//\n// Short retina mixin for setting background-image and -size.\n\n@mixin img-retina($file-1x, $file-2x, $width-1x, $height-1x) {\n  background-image: url($file-1x);\n\n  // Autoprefixer takes care of adding -webkit-min-device-pixel-ratio and -o-min-device-pixel-ratio,\n  // but doesn't convert dppx=>dpi.\n  // There's no such thing as unprefixed min-device-pixel-ratio since it's nonstandard.\n  // Compatibility info: https://caniuse.com/css-media-resolution\n  @media only screen and (min-resolution: 192dpi), // IE9-11 don't support dppx\n    only screen and (min-resolution: 2dppx) { // Standardized\n    background-image: url($file-2x);\n    background-size: $width-1x $height-1x;\n  }\n  @include deprecate(\"`img-retina()`\", \"v4.3.0\", \"v5\");\n}\n","// stylelint-disable property-disallowed-list\n// Single side border-radius\n\n// Helper function to replace negative values with 0\n@function valid-radius($radius) {\n  $return: ();\n  @each $value in $radius {\n    @if type-of($value) == number {\n      $return: append($return, max($value, 0));\n    } @else {\n      $return: append($return, $value);\n    }\n  }\n  @return $return;\n}\n\n@mixin border-radius($radius: $border-radius, $fallback-border-radius: false) {\n  @if $enable-rounded {\n    border-radius: valid-radius($radius);\n  }\n  @else if $fallback-border-radius != false {\n    border-radius: $fallback-border-radius;\n  }\n}\n\n@mixin border-top-radius($radius) {\n  @if $enable-rounded {\n    border-top-left-radius: valid-radius($radius);\n    border-top-right-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-right-radius($radius) {\n  @if $enable-rounded {\n    border-top-right-radius: valid-radius($radius);\n    border-bottom-right-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-bottom-radius($radius) {\n  @if $enable-rounded {\n    border-bottom-right-radius: valid-radius($radius);\n    border-bottom-left-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-left-radius($radius) {\n  @if $enable-rounded {\n    border-top-left-radius: valid-radius($radius);\n    border-bottom-left-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-top-left-radius($radius) {\n  @if $enable-rounded {\n    border-top-left-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-top-right-radius($radius) {\n  @if $enable-rounded {\n    border-top-right-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-bottom-right-radius($radius) {\n  @if $enable-rounded {\n    border-bottom-right-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-bottom-left-radius($radius) {\n  @if $enable-rounded {\n    border-bottom-left-radius: valid-radius($radius);\n  }\n}\n","// Inline code\ncode {\n  @include font-size($code-font-size);\n  color: $code-color;\n  word-wrap: break-word;\n\n  // Streamline the style when inside anchors to avoid broken underline and more\n  a > & {\n    color: inherit;\n  }\n}\n\n// User input typically entered via keyboard\nkbd {\n  padding: $kbd-padding-y $kbd-padding-x;\n  @include font-size($kbd-font-size);\n  color: $kbd-color;\n  background-color: $kbd-bg;\n  @include border-radius($border-radius-sm);\n  @include box-shadow($kbd-box-shadow);\n\n  kbd {\n    padding: 0;\n    @include font-size(100%);\n    font-weight: $nested-kbd-font-weight;\n    @include box-shadow(none);\n  }\n}\n\n// Blocks of code\npre {\n  display: block;\n  @include font-size($code-font-size);\n  color: $pre-color;\n\n  // Account for some code outputs that place code tags in pre tags\n  code {\n    @include font-size(inherit);\n    color: inherit;\n    word-break: normal;\n  }\n}\n\n// Enable scrollable blocks of code\n.pre-scrollable {\n  max-height: $pre-scrollable-max-height;\n  overflow-y: scroll;\n}\n","// Container widths\n//\n// Set the container width, and override it for fixed navbars in media queries.\n\n@if $enable-grid-classes {\n  // Single container class with breakpoint max-widths\n  .container,\n  // 100% wide container at all breakpoints\n  .container-fluid {\n    @include make-container();\n  }\n\n  // Responsive containers that are 100% wide until a breakpoint\n  @each $breakpoint, $container-max-width in $container-max-widths {\n    .container-#{$breakpoint} {\n      @extend .container-fluid;\n    }\n\n    @include media-breakpoint-up($breakpoint, $grid-breakpoints) {\n      %responsive-container-#{$breakpoint} {\n        max-width: $container-max-width;\n      }\n\n      // Extend each breakpoint which is smaller or equal to the current breakpoint\n      $extend-breakpoint: true;\n\n      @each $name, $width in $grid-breakpoints {\n        @if ($extend-breakpoint) {\n          .container#{breakpoint-infix($name, $grid-breakpoints)} {\n            @extend %responsive-container-#{$breakpoint};\n          }\n\n          // Once the current breakpoint is reached, stop extending\n          @if ($breakpoint == $name) {\n            $extend-breakpoint: false;\n          }\n        }\n      }\n    }\n  }\n}\n\n\n// Row\n//\n// Rows contain your columns.\n\n@if $enable-grid-classes {\n  .row {\n    @include make-row();\n  }\n\n  // Remove the negative margin from default .row, then the horizontal padding\n  // from all immediate children columns (to prevent runaway style inheritance).\n  .no-gutters {\n    margin-right: 0;\n    margin-left: 0;\n\n    > .col,\n    > [class*=\"col-\"] {\n      padding-right: 0;\n      padding-left: 0;\n    }\n  }\n}\n\n// Columns\n//\n// Common styles for small and large grid columns\n\n@if $enable-grid-classes {\n  @include make-grid-columns();\n}\n","/// Grid system\n//\n// Generate semantic grid columns with these mixins.\n\n@mixin make-container($gutter: $grid-gutter-width) {\n  width: 100%;\n  padding-right: $gutter / 2;\n  padding-left: $gutter / 2;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n@mixin make-row($gutter: $grid-gutter-width) {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -$gutter / 2;\n  margin-left: -$gutter / 2;\n}\n\n// For each breakpoint, define the maximum width of the container in a media query\n@mixin make-container-max-widths($max-widths: $container-max-widths, $breakpoints: $grid-breakpoints) {\n  @each $breakpoint, $container-max-width in $max-widths {\n    @include media-breakpoint-up($breakpoint, $breakpoints) {\n      max-width: $container-max-width;\n    }\n  }\n  @include deprecate(\"The `make-container-max-widths` mixin\", \"v4.5.2\", \"v5\");\n}\n\n@mixin make-col-ready($gutter: $grid-gutter-width) {\n  position: relative;\n  // Prevent columns from becoming too narrow when at smaller grid tiers by\n  // always setting `width: 100%;`. This works because we use `flex` values\n  // later on to override this initial width.\n  width: 100%;\n  padding-right: $gutter / 2;\n  padding-left: $gutter / 2;\n}\n\n@mixin make-col($size, $columns: $grid-columns) {\n  flex: 0 0 percentage($size / $columns);\n  // Add a `max-width` to ensure content within each column does not blow out\n  // the width of the column. Applies to IE10+ and Firefox. Chrome and Safari\n  // do not appear to require this.\n  max-width: percentage($size / $columns);\n}\n\n@mixin make-col-auto() {\n  flex: 0 0 auto;\n  width: auto;\n  max-width: 100%; // Reset earlier grid tiers\n}\n\n@mixin make-col-offset($size, $columns: $grid-columns) {\n  $num: $size / $columns;\n  margin-left: if($num == 0, 0, percentage($num));\n}\n\n// Row columns\n//\n// Specify on a parent element(e.g., .row) to force immediate children into NN\n// numberof columns. Supports wrapping to new lines, but does not do a Masonry\n// style grid.\n@mixin row-cols($count) {\n  > * {\n    flex: 0 0 100% / $count;\n    max-width: 100% / $count;\n  }\n}\n","// Breakpoint viewport sizes and media queries.\n//\n// Breakpoints are defined as a map of (name: minimum width), order from small to large:\n//\n//    (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px)\n//\n// The map defined in the `$grid-breakpoints` global variable is used as the `$breakpoints` argument by default.\n\n// Name of the next breakpoint, or null for the last breakpoint.\n//\n//    >> breakpoint-next(sm)\n//    md\n//    >> breakpoint-next(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    md\n//    >> breakpoint-next(sm, $breakpoint-names: (xs sm md lg xl))\n//    md\n@function breakpoint-next($name, $breakpoints: $grid-breakpoints, $breakpoint-names: map-keys($breakpoints)) {\n  $n: index($breakpoint-names, $name);\n  @return if($n != null and $n < length($breakpoint-names), nth($breakpoint-names, $n + 1), null);\n}\n\n// Minimum breakpoint width. Null for the smallest (first) breakpoint.\n//\n//    >> breakpoint-min(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    576px\n@function breakpoint-min($name, $breakpoints: $grid-breakpoints) {\n  $min: map-get($breakpoints, $name);\n  @return if($min != 0, $min, null);\n}\n\n// Maximum breakpoint width. Null for the largest (last) breakpoint.\n// The maximum value is calculated as the minimum of the next one less 0.02px\n// to work around the limitations of `min-` and `max-` prefixes and viewports with fractional widths.\n// See https://www.w3.org/TR/mediaqueries-4/#mq-min-max\n// Uses 0.02px rather than 0.01px to work around a current rounding bug in Safari.\n// See https://bugs.webkit.org/show_bug.cgi?id=178261\n//\n//    >> breakpoint-max(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    767.98px\n@function breakpoint-max($name, $breakpoints: $grid-breakpoints) {\n  $next: breakpoint-next($name, $breakpoints);\n  @return if($next, breakpoint-min($next, $breakpoints) - .02, null);\n}\n\n// Returns a blank string if smallest breakpoint, otherwise returns the name with a dash in front.\n// Useful for making responsive utilities.\n//\n//    >> breakpoint-infix(xs, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    \"\"  (Returns a blank string)\n//    >> breakpoint-infix(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    \"-sm\"\n@function breakpoint-infix($name, $breakpoints: $grid-breakpoints) {\n  @return if(breakpoint-min($name, $breakpoints) == null, \"\", \"-#{$name}\");\n}\n\n// Media of at least the minimum breakpoint width. No query for the smallest breakpoint.\n// Makes the @content apply to the given breakpoint and wider.\n@mixin media-breakpoint-up($name, $breakpoints: $grid-breakpoints) {\n  $min: breakpoint-min($name, $breakpoints);\n  @if $min {\n    @media (min-width: $min) {\n      @content;\n    }\n  } @else {\n    @content;\n  }\n}\n\n// Media of at most the maximum breakpoint width. No query for the largest breakpoint.\n// Makes the @content apply to the given breakpoint and narrower.\n@mixin media-breakpoint-down($name, $breakpoints: $grid-breakpoints) {\n  $max: breakpoint-max($name, $breakpoints);\n  @if $max {\n    @media (max-width: $max) {\n      @content;\n    }\n  } @else {\n    @content;\n  }\n}\n\n// Media that spans multiple breakpoint widths.\n// Makes the @content apply between the min and max breakpoints\n@mixin media-breakpoint-between($lower, $upper, $breakpoints: $grid-breakpoints) {\n  $min: breakpoint-min($lower, $breakpoints);\n  $max: breakpoint-max($upper, $breakpoints);\n\n  @if $min != null and $max != null {\n    @media (min-width: $min) and (max-width: $max) {\n      @content;\n    }\n  } @else if $max == null {\n    @include media-breakpoint-up($lower, $breakpoints) {\n      @content;\n    }\n  } @else if $min == null {\n    @include media-breakpoint-down($upper, $breakpoints) {\n      @content;\n    }\n  }\n}\n\n// Media between the breakpoint's minimum and maximum widths.\n// No minimum for the smallest breakpoint, and no maximum for the largest one.\n// Makes the @content apply only to the given breakpoint, not viewports any wider or narrower.\n@mixin media-breakpoint-only($name, $breakpoints: $grid-breakpoints) {\n  $min: breakpoint-min($name, $breakpoints);\n  $max: breakpoint-max($name, $breakpoints);\n\n  @if $min != null and $max != null {\n    @media (min-width: $min) and (max-width: $max) {\n      @content;\n    }\n  } @else if $max == null {\n    @include media-breakpoint-up($name, $breakpoints) {\n      @content;\n    }\n  } @else if $min == null {\n    @include media-breakpoint-down($name, $breakpoints) {\n      @content;\n    }\n  }\n}\n","// Framework grid generation\n//\n// Used only by Bootstrap to generate the correct number of grid classes given\n// any value of `$grid-columns`.\n\n@mixin make-grid-columns($columns: $grid-columns, $gutter: $grid-gutter-width, $breakpoints: $grid-breakpoints) {\n  // Common properties for all breakpoints\n  %grid-column {\n    position: relative;\n    width: 100%;\n    padding-right: $gutter / 2;\n    padding-left: $gutter / 2;\n  }\n\n  @each $breakpoint in map-keys($breakpoints) {\n    $infix: breakpoint-infix($breakpoint, $breakpoints);\n\n    @if $columns > 0 {\n      // Allow columns to stretch full width below their breakpoints\n      @for $i from 1 through $columns {\n        .col#{$infix}-#{$i} {\n          @extend %grid-column;\n        }\n      }\n    }\n\n    .col#{$infix},\n    .col#{$infix}-auto {\n      @extend %grid-column;\n    }\n\n    @include media-breakpoint-up($breakpoint, $breakpoints) {\n      // Provide basic `.col-{bp}` classes for equal-width flexbox columns\n      .col#{$infix} {\n        flex-basis: 0;\n        flex-grow: 1;\n        max-width: 100%;\n      }\n\n      @if $grid-row-columns > 0 {\n        @for $i from 1 through $grid-row-columns {\n          .row-cols#{$infix}-#{$i} {\n            @include row-cols($i);\n          }\n        }\n      }\n\n      .col#{$infix}-auto {\n        @include make-col-auto();\n      }\n\n      @if $columns > 0 {\n        @for $i from 1 through $columns {\n          .col#{$infix}-#{$i} {\n            @include make-col($i, $columns);\n          }\n        }\n      }\n\n      .order#{$infix}-first { order: -1; }\n\n      .order#{$infix}-last { order: $columns + 1; }\n\n      @for $i from 0 through $columns {\n        .order#{$infix}-#{$i} { order: $i; }\n      }\n\n      @if $columns > 0 {\n        // `$columns - 1` because offsetting by the width of an entire row isn't possible\n        @for $i from 0 through ($columns - 1) {\n          @if not ($infix == \"\" and $i == 0) { // Avoid emitting useless .offset-0\n            .offset#{$infix}-#{$i} {\n              @include make-col-offset($i, $columns);\n            }\n          }\n        }\n      }\n    }\n  }\n}\n","//\n// Basic Bootstrap table\n//\n\n.table {\n  width: 100%;\n  margin-bottom: $spacer;\n  color: $table-color;\n  background-color: $table-bg; // Reset for nesting within parents with `background-color`.\n\n  th,\n  td {\n    padding: $table-cell-padding;\n    vertical-align: top;\n    border-top: $table-border-width solid $table-border-color;\n  }\n\n  thead th {\n    vertical-align: bottom;\n    border-bottom: (2 * $table-border-width) solid $table-border-color;\n  }\n\n  tbody + tbody {\n    border-top: (2 * $table-border-width) solid $table-border-color;\n  }\n}\n\n\n//\n// Condensed table w/ half padding\n//\n\n.table-sm {\n  th,\n  td {\n    padding: $table-cell-padding-sm;\n  }\n}\n\n\n// Border versions\n//\n// Add or remove borders all around the table and between all the columns.\n\n.table-bordered {\n  border: $table-border-width solid $table-border-color;\n\n  th,\n  td {\n    border: $table-border-width solid $table-border-color;\n  }\n\n  thead {\n    th,\n    td {\n      border-bottom-width: 2 * $table-border-width;\n    }\n  }\n}\n\n.table-borderless {\n  th,\n  td,\n  thead th,\n  tbody + tbody {\n    border: 0;\n  }\n}\n\n// Zebra-striping\n//\n// Default zebra-stripe styles (alternating gray and transparent backgrounds)\n\n.table-striped {\n  tbody tr:nth-of-type(#{$table-striped-order}) {\n    background-color: $table-accent-bg;\n  }\n}\n\n\n// Hover effect\n//\n// Placed here since it has to come after the potential zebra striping\n\n.table-hover {\n  tbody tr {\n    @include hover() {\n      color: $table-hover-color;\n      background-color: $table-hover-bg;\n    }\n  }\n}\n\n\n// Table backgrounds\n//\n// Exact selectors below required to override `.table-striped` and prevent\n// inheritance to nested tables.\n\n@each $color, $value in $theme-colors {\n  @include table-row-variant($color, theme-color-level($color, $table-bg-level), theme-color-level($color, $table-border-level));\n}\n\n@include table-row-variant(active, $table-active-bg);\n\n\n// Dark styles\n//\n// Same table markup, but inverted color scheme: dark background and light text.\n\n// stylelint-disable-next-line no-duplicate-selectors\n.table {\n  .thead-dark {\n    th {\n      color: $table-dark-color;\n      background-color: $table-dark-bg;\n      border-color: $table-dark-border-color;\n    }\n  }\n\n  .thead-light {\n    th {\n      color: $table-head-color;\n      background-color: $table-head-bg;\n      border-color: $table-border-color;\n    }\n  }\n}\n\n.table-dark {\n  color: $table-dark-color;\n  background-color: $table-dark-bg;\n\n  th,\n  td,\n  thead th {\n    border-color: $table-dark-border-color;\n  }\n\n  &.table-bordered {\n    border: 0;\n  }\n\n  &.table-striped {\n    tbody tr:nth-of-type(#{$table-striped-order}) {\n      background-color: $table-dark-accent-bg;\n    }\n  }\n\n  &.table-hover {\n    tbody tr {\n      @include hover() {\n        color: $table-dark-hover-color;\n        background-color: $table-dark-hover-bg;\n      }\n    }\n  }\n}\n\n\n// Responsive tables\n//\n// Generate series of `.table-responsive-*` classes for configuring the screen\n// size of where your table will overflow.\n\n.table-responsive {\n  @each $breakpoint in map-keys($grid-breakpoints) {\n    $next: breakpoint-next($breakpoint, $grid-breakpoints);\n    $infix: breakpoint-infix($next, $grid-breakpoints);\n\n    &#{$infix} {\n      @include media-breakpoint-down($breakpoint) {\n        display: block;\n        width: 100%;\n        overflow-x: auto;\n        -webkit-overflow-scrolling: touch;\n\n        // Prevent double border on horizontal scroll due to use of `display: block;`\n        > .table-bordered {\n          border: 0;\n        }\n      }\n    }\n  }\n}\n","// Tables\n\n@mixin table-row-variant($state, $background, $border: null) {\n  // Exact selectors below required to override `.table-striped` and prevent\n  // inheritance to nested tables.\n  .table-#{$state} {\n    &,\n    > th,\n    > td {\n      background-color: $background;\n    }\n\n    @if $border != null {\n      th,\n      td,\n      thead th,\n      tbody + tbody {\n        border-color: $border;\n      }\n    }\n  }\n\n  // Hover states for `.table-hover`\n  // Note: this is not available for cells or rows within `thead` or `tfoot`.\n  .table-hover {\n    $hover-background: darken($background, 5%);\n\n    .table-#{$state} {\n      @include hover() {\n        background-color: $hover-background;\n\n        > td,\n        > th {\n          background-color: $hover-background;\n        }\n      }\n    }\n  }\n}\n","// stylelint-disable selector-no-qualifying-type\n\n//\n// Textual form controls\n//\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: $input-height;\n  padding: $input-padding-y $input-padding-x;\n  font-family: $input-font-family;\n  @include font-size($input-font-size);\n  font-weight: $input-font-weight;\n  line-height: $input-line-height;\n  color: $input-color;\n  background-color: $input-bg;\n  background-clip: padding-box;\n  border: $input-border-width solid $input-border-color;\n\n  // Note: This has no effect on <select>s in some browsers, due to the limited stylability of `<select>`s in CSS.\n  @include border-radius($input-border-radius, 0);\n\n  @include box-shadow($input-box-shadow);\n  @include transition($input-transition);\n\n  // Unstyle the caret on `<select>`s in IE10+.\n  &::-ms-expand {\n    background-color: transparent;\n    border: 0;\n  }\n\n  // Remove select outline from select box in FF\n  &:-moz-focusring {\n    color: transparent;\n    text-shadow: 0 0 0 $input-color;\n  }\n\n  // Customize the `:focus` state to imitate native WebKit styles.\n  @include form-control-focus($ignore-warning: true);\n\n  // Placeholder\n  &::placeholder {\n    color: $input-placeholder-color;\n    // Override Firefox's unusual default opacity; see https://github.com/twbs/bootstrap/pull/11526.\n    opacity: 1;\n  }\n\n  // Disabled and read-only inputs\n  //\n  // HTML5 says that controls under a fieldset > legend:first-child won't be\n  // disabled if the fieldset is disabled. Due to implementation difficulty, we\n  // don't honor that edge case; we style them as disabled anyway.\n  &:disabled,\n  &[readonly] {\n    background-color: $input-disabled-bg;\n    // iOS fix for unreadable disabled content; see https://github.com/twbs/bootstrap/issues/11655.\n    opacity: 1;\n  }\n}\n\ninput[type=\"date\"],\ninput[type=\"time\"],\ninput[type=\"datetime-local\"],\ninput[type=\"month\"] {\n  &.form-control {\n    appearance: none; // Fix appearance for date inputs in Safari\n  }\n}\n\nselect.form-control {\n  &:focus::-ms-value {\n    // Suppress the nested default white text on blue background highlight given to\n    // the selected option text when the (still closed) <select> receives focus\n    // in IE and (under certain conditions) Edge, as it looks bad and cannot be made to\n    // match the appearance of the native widget.\n    // See https://github.com/twbs/bootstrap/issues/19398.\n    color: $input-color;\n    background-color: $input-bg;\n  }\n}\n\n// Make file inputs better match text inputs by forcing them to new lines.\n.form-control-file,\n.form-control-range {\n  display: block;\n  width: 100%;\n}\n\n\n//\n// Labels\n//\n\n// For use with horizontal and inline forms, when you need the label (or legend)\n// text to align with the form controls.\n.col-form-label {\n  padding-top: add($input-padding-y, $input-border-width);\n  padding-bottom: add($input-padding-y, $input-border-width);\n  margin-bottom: 0; // Override the `<label>/<legend>` default\n  @include font-size(inherit); // Override the `<legend>` default\n  line-height: $input-line-height;\n}\n\n.col-form-label-lg {\n  padding-top: add($input-padding-y-lg, $input-border-width);\n  padding-bottom: add($input-padding-y-lg, $input-border-width);\n  @include font-size($input-font-size-lg);\n  line-height: $input-line-height-lg;\n}\n\n.col-form-label-sm {\n  padding-top: add($input-padding-y-sm, $input-border-width);\n  padding-bottom: add($input-padding-y-sm, $input-border-width);\n  @include font-size($input-font-size-sm);\n  line-height: $input-line-height-sm;\n}\n\n\n// Readonly controls as plain text\n//\n// Apply class to a readonly input to make it appear like regular plain\n// text (without any border, background color, focus indicator)\n\n.form-control-plaintext {\n  display: block;\n  width: 100%;\n  padding: $input-padding-y 0;\n  margin-bottom: 0; // match inputs if this class comes on inputs with default margins\n  @include font-size($input-font-size);\n  line-height: $input-line-height;\n  color: $input-plaintext-color;\n  background-color: transparent;\n  border: solid transparent;\n  border-width: $input-border-width 0;\n\n  &.form-control-sm,\n  &.form-control-lg {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n\n\n// Form control sizing\n//\n// Build on `.form-control` with modifier classes to decrease or increase the\n// height and font-size of form controls.\n//\n// Repeated in `_input_group.scss` to avoid Sass extend issues.\n\n.form-control-sm {\n  height: $input-height-sm;\n  padding: $input-padding-y-sm $input-padding-x-sm;\n  @include font-size($input-font-size-sm);\n  line-height: $input-line-height-sm;\n  @include border-radius($input-border-radius-sm);\n}\n\n.form-control-lg {\n  height: $input-height-lg;\n  padding: $input-padding-y-lg $input-padding-x-lg;\n  @include font-size($input-font-size-lg);\n  line-height: $input-line-height-lg;\n  @include border-radius($input-border-radius-lg);\n}\n\n// stylelint-disable-next-line no-duplicate-selectors\nselect.form-control {\n  &[size],\n  &[multiple] {\n    height: auto;\n  }\n}\n\ntextarea.form-control {\n  height: auto;\n}\n\n// Form groups\n//\n// Designed to help with the organization and spacing of vertical forms. For\n// horizontal forms, use the predefined grid classes.\n\n.form-group {\n  margin-bottom: $form-group-margin-bottom;\n}\n\n.form-text {\n  display: block;\n  margin-top: $form-text-margin-top;\n}\n\n\n// Form grid\n//\n// Special replacement for our grid system's `.row` for tighter form layouts.\n\n.form-row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -$form-grid-gutter-width / 2;\n  margin-left: -$form-grid-gutter-width / 2;\n\n  > .col,\n  > [class*=\"col-\"] {\n    padding-right: $form-grid-gutter-width / 2;\n    padding-left: $form-grid-gutter-width / 2;\n  }\n}\n\n\n// Checkboxes and radios\n//\n// Indent the labels to position radios/checkboxes as hanging controls.\n\n.form-check {\n  position: relative;\n  display: block;\n  padding-left: $form-check-input-gutter;\n}\n\n.form-check-input {\n  position: absolute;\n  margin-top: $form-check-input-margin-y;\n  margin-left: -$form-check-input-gutter;\n\n  // Use [disabled] and :disabled for workaround https://github.com/twbs/bootstrap/issues/28247\n  &[disabled] ~ .form-check-label,\n  &:disabled ~ .form-check-label {\n    color: $text-muted;\n  }\n}\n\n.form-check-label {\n  margin-bottom: 0; // Override default `<label>` bottom margin\n}\n\n.form-check-inline {\n  display: inline-flex;\n  align-items: center;\n  padding-left: 0; // Override base .form-check\n  margin-right: $form-check-inline-margin-x;\n\n  // Undo .form-check-input defaults and add some `margin-right`.\n  .form-check-input {\n    position: static;\n    margin-top: 0;\n    margin-right: $form-check-inline-input-margin-x;\n    margin-left: 0;\n  }\n}\n\n\n// Form validation\n//\n// Provide feedback to users when form field values are valid or invalid. Works\n// primarily for client-side validation via scoped `:invalid` and `:valid`\n// pseudo-classes but also includes `.is-invalid` and `.is-valid` classes for\n// server side validation.\n\n@each $state, $data in $form-validation-states {\n  @include form-validation-state($state, map-get($data, color), map-get($data, icon));\n}\n\n// Inline forms\n//\n// Make forms appear inline(-block) by adding the `.form-inline` class. Inline\n// forms begin stacked on extra small (mobile) devices and then go inline when\n// viewports reach <768px.\n//\n// Requires wrapping inputs and labels with `.form-group` for proper display of\n// default HTML form controls and our custom form controls (e.g., input groups).\n\n.form-inline {\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center; // Prevent shorter elements from growing to same height as others (e.g., small buttons growing to normal sized button height)\n\n  // Because we use flex, the initial sizing of checkboxes is collapsed and\n  // doesn't occupy the full-width (which is what we want for xs grid tier),\n  // so we force that here.\n  .form-check {\n    width: 100%;\n  }\n\n  // Kick in the inline\n  @include media-breakpoint-up(sm) {\n    label {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin-bottom: 0;\n    }\n\n    // Inline-block all the things for \"inline\"\n    .form-group {\n      display: flex;\n      flex: 0 0 auto;\n      flex-flow: row wrap;\n      align-items: center;\n      margin-bottom: 0;\n    }\n\n    // Allow folks to *not* use `.form-group`\n    .form-control {\n      display: inline-block;\n      width: auto; // Prevent labels from stacking above inputs in `.form-group`\n      vertical-align: middle;\n    }\n\n    // Make static controls behave like regular ones\n    .form-control-plaintext {\n      display: inline-block;\n    }\n\n    .input-group,\n    .custom-select {\n      width: auto;\n    }\n\n    // Remove default margin on radios/checkboxes that were used for stacking, and\n    // then undo the floating of radios and checkboxes to match.\n    .form-check {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      width: auto;\n      padding-left: 0;\n    }\n    .form-check-input {\n      position: relative;\n      flex-shrink: 0;\n      margin-top: 0;\n      margin-right: $form-check-input-margin-x;\n      margin-left: 0;\n    }\n\n    .custom-control {\n      align-items: center;\n      justify-content: center;\n    }\n    .custom-control-label {\n      margin-bottom: 0;\n    }\n  }\n}\n","// stylelint-disable property-disallowed-list\n@mixin transition($transition...) {\n  @if length($transition) == 0 {\n    $transition: $transition-base;\n  }\n\n  @if length($transition) > 1 {\n    @each $value in $transition {\n      @if $value == null or $value == none {\n        @warn \"The keyword 'none' or 'null' must be used as a single argument.\";\n      }\n    }\n  }\n\n  @if $enable-transitions {\n    @if nth($transition, 1) != null {\n      transition: $transition;\n    }\n\n    @if $enable-prefers-reduced-motion-media-query and nth($transition, 1) != null and nth($transition, 1) != none {\n      @media (prefers-reduced-motion: reduce) {\n        transition: none;\n      }\n    }\n  }\n}\n","// Form control focus state\n//\n// Generate a customized focus state and for any input with the specified color,\n// which defaults to the `$input-focus-border-color` variable.\n//\n// We highly encourage you to not customize the default value, but instead use\n// this to tweak colors on an as-needed basis. This aesthetic change is based on\n// WebKit's default styles, but applicable to a wider range of browsers. Its\n// usability and accessibility should be taken into account with any change.\n//\n// Example usage: change the default blue border and shadow to white for better\n// contrast against a dark gray background.\n@mixin form-control-focus($ignore-warning: false) {\n  &:focus {\n    color: $input-focus-color;\n    background-color: $input-focus-bg;\n    border-color: $input-focus-border-color;\n    outline: 0;\n    @if $enable-shadows {\n      @include box-shadow($input-box-shadow, $input-focus-box-shadow);\n    } @else {\n      // Avoid using mixin so we can pass custom focus shadow properly\n      box-shadow: $input-focus-box-shadow;\n    }\n  }\n  @include deprecate(\"The `form-control-focus()` mixin\", \"v4.4.0\", \"v5\", $ignore-warning);\n}\n\n// This mixin uses an `if()` technique to be compatible with Dart Sass\n// See https://github.com/sass/sass/issues/1873#issuecomment-152293725 for more details\n@mixin form-validation-state-selector($state) {\n  @if ($state == \"valid\" or $state == \"invalid\") {\n    .was-validated #{if(&, \"&\", \"\")}:#{$state},\n    #{if(&, \"&\", \"\")}.is-#{$state} {\n      @content;\n    }\n  } @else {\n    #{if(&, \"&\", \"\")}.is-#{$state} {\n      @content;\n    }\n  }\n}\n\n@mixin form-validation-state($state, $color, $icon) {\n  .#{$state}-feedback {\n    display: none;\n    width: 100%;\n    margin-top: $form-feedback-margin-top;\n    @include font-size($form-feedback-font-size);\n    color: $color;\n  }\n\n  .#{$state}-tooltip {\n    position: absolute;\n    top: 100%;\n    left: 0;\n    z-index: 5;\n    display: none;\n    max-width: 100%; // Contain to parent when possible\n    padding: $form-feedback-tooltip-padding-y $form-feedback-tooltip-padding-x;\n    margin-top: .1rem;\n    @include font-size($form-feedback-tooltip-font-size);\n    line-height: $form-feedback-tooltip-line-height;\n    color: color-yiq($color);\n    background-color: rgba($color, $form-feedback-tooltip-opacity);\n    @include border-radius($form-feedback-tooltip-border-radius);\n\n    // See https://github.com/twbs/bootstrap/pull/31557\n    // Align tooltip to form elements\n    .form-row > .col > &,\n    .form-row > [class*=\"col-\"] > & {\n      left: $form-grid-gutter-width / 2;\n    }\n  }\n\n  @include form-validation-state-selector($state) {\n    ~ .#{$state}-feedback,\n    ~ .#{$state}-tooltip {\n      display: block;\n    }\n  }\n\n  .form-control {\n    @include form-validation-state-selector($state) {\n      border-color: $color;\n\n      @if $enable-validation-icons {\n        padding-right: $input-height-inner;\n        background-image: escape-svg($icon);\n        background-repeat: no-repeat;\n        background-position: right $input-height-inner-quarter center;\n        background-size: $input-height-inner-half $input-height-inner-half;\n      }\n\n      &:focus {\n        border-color: $color;\n        box-shadow: 0 0 0 $input-focus-width rgba($color, .25);\n      }\n    }\n  }\n\n  // stylelint-disable-next-line selector-no-qualifying-type\n  textarea.form-control {\n    @include form-validation-state-selector($state) {\n      @if $enable-validation-icons {\n        padding-right: $input-height-inner;\n        background-position: top $input-height-inner-quarter right $input-height-inner-quarter;\n      }\n    }\n  }\n\n  .custom-select {\n    @include form-validation-state-selector($state) {\n      border-color: $color;\n\n      @if $enable-validation-icons {\n        padding-right: $custom-select-feedback-icon-padding-right;\n        background: $custom-select-background, $custom-select-bg escape-svg($icon) $custom-select-feedback-icon-position / $custom-select-feedback-icon-size no-repeat;\n      }\n\n      &:focus {\n        border-color: $color;\n        box-shadow: 0 0 0 $input-focus-width rgba($color, .25);\n      }\n    }\n  }\n\n  .form-check-input {\n    @include form-validation-state-selector($state) {\n      ~ .form-check-label {\n        color: $color;\n      }\n\n      ~ .#{$state}-feedback,\n      ~ .#{$state}-tooltip {\n        display: block;\n      }\n    }\n  }\n\n  .custom-control-input {\n    @include form-validation-state-selector($state) {\n      ~ .custom-control-label {\n        color: $color;\n\n        &::before {\n          border-color: $color;\n        }\n      }\n\n      &:checked {\n        ~ .custom-control-label::before {\n          border-color: lighten($color, 10%);\n          @include gradient-bg(lighten($color, 10%));\n        }\n      }\n\n      &:focus {\n        ~ .custom-control-label::before {\n          box-shadow: 0 0 0 $input-focus-width rgba($color, .25);\n        }\n\n        &:not(:checked) ~ .custom-control-label::before {\n          border-color: $color;\n        }\n      }\n    }\n  }\n\n  // custom file\n  .custom-file-input {\n    @include form-validation-state-selector($state) {\n      ~ .custom-file-label {\n        border-color: $color;\n      }\n\n      &:focus {\n        ~ .custom-file-label {\n          border-color: $color;\n          box-shadow: 0 0 0 $input-focus-width rgba($color, .25);\n        }\n      }\n    }\n  }\n}\n","// Gradients\n\n@mixin gradient-bg($color) {\n  @if $enable-gradients {\n    background: $color linear-gradient(180deg, mix($body-bg, $color, 15%), $color) repeat-x;\n  } @else {\n    background-color: $color;\n  }\n}\n\n// Horizontal gradient, from left to right\n//\n// Creates two color stops, start and end, by specifying a color and position for each color stop.\n@mixin gradient-x($start-color: $gray-700, $end-color: $gray-800, $start-percent: 0%, $end-percent: 100%) {\n  background-image: linear-gradient(to right, $start-color $start-percent, $end-color $end-percent);\n  background-repeat: repeat-x;\n}\n\n// Vertical gradient, from top to bottom\n//\n// Creates two color stops, start and end, by specifying a color and position for each color stop.\n@mixin gradient-y($start-color: $gray-700, $end-color: $gray-800, $start-percent: 0%, $end-percent: 100%) {\n  background-image: linear-gradient(to bottom, $start-color $start-percent, $end-color $end-percent);\n  background-repeat: repeat-x;\n}\n\n@mixin gradient-directional($start-color: $gray-700, $end-color: $gray-800, $deg: 45deg) {\n  background-image: linear-gradient($deg, $start-color, $end-color);\n  background-repeat: repeat-x;\n}\n@mixin gradient-x-three-colors($start-color: $blue, $mid-color: $purple, $color-stop: 50%, $end-color: $red) {\n  background-image: linear-gradient(to right, $start-color, $mid-color $color-stop, $end-color);\n  background-repeat: no-repeat;\n}\n@mixin gradient-y-three-colors($start-color: $blue, $mid-color: $purple, $color-stop: 50%, $end-color: $red) {\n  background-image: linear-gradient($start-color, $mid-color $color-stop, $end-color);\n  background-repeat: no-repeat;\n}\n@mixin gradient-radial($inner-color: $gray-700, $outer-color: $gray-800) {\n  background-image: radial-gradient(circle, $inner-color, $outer-color);\n  background-repeat: no-repeat;\n}\n@mixin gradient-striped($color: rgba($white, .15), $angle: 45deg) {\n  background-image: linear-gradient($angle, $color 25%, transparent 25%, transparent 50%, $color 50%, $color 75%, transparent 75%, transparent);\n}\n","// stylelint-disable selector-no-qualifying-type\n\n//\n// Base styles\n//\n\n.btn {\n  display: inline-block;\n  font-family: $btn-font-family;\n  font-weight: $btn-font-weight;\n  color: $body-color;\n  text-align: center;\n  text-decoration: if($link-decoration == none, null, none);\n  white-space: $btn-white-space;\n  vertical-align: middle;\n  user-select: none;\n  background-color: transparent;\n  border: $btn-border-width solid transparent;\n  @include button-size($btn-padding-y, $btn-padding-x, $btn-font-size, $btn-line-height, $btn-border-radius);\n  @include transition($btn-transition);\n\n  @include hover() {\n    color: $body-color;\n    text-decoration: none;\n  }\n\n  &:focus,\n  &.focus {\n    outline: 0;\n    box-shadow: $btn-focus-box-shadow;\n  }\n\n  // Disabled comes first so active can properly restyle\n  &.disabled,\n  &:disabled {\n    opacity: $btn-disabled-opacity;\n    @include box-shadow(none);\n  }\n\n  &:not(:disabled):not(.disabled) {\n    cursor: if($enable-pointer-cursor-for-buttons, pointer, null);\n\n    &:active,\n    &.active {\n      @include box-shadow($btn-active-box-shadow);\n\n      &:focus {\n        @include box-shadow($btn-focus-box-shadow, $btn-active-box-shadow);\n      }\n    }\n  }\n}\n\n// Future-proof disabling of clicks on `<a>` elements\na.btn.disabled,\nfieldset:disabled a.btn {\n  pointer-events: none;\n}\n\n\n//\n// Alternate buttons\n//\n\n@each $color, $value in $theme-colors {\n  .btn-#{$color} {\n    @include button-variant($value, $value);\n  }\n}\n\n@each $color, $value in $theme-colors {\n  .btn-outline-#{$color} {\n    @include button-outline-variant($value);\n  }\n}\n\n\n//\n// Link buttons\n//\n\n// Make a button look and behave like a link\n.btn-link {\n  font-weight: $font-weight-normal;\n  color: $link-color;\n  text-decoration: $link-decoration;\n\n  @include hover() {\n    color: $link-hover-color;\n    text-decoration: $link-hover-decoration;\n  }\n\n  &:focus,\n  &.focus {\n    text-decoration: $link-hover-decoration;\n  }\n\n  &:disabled,\n  &.disabled {\n    color: $btn-link-disabled-color;\n    pointer-events: none;\n  }\n\n  // No need for an active state here\n}\n\n\n//\n// Button Sizes\n//\n\n.btn-lg {\n  @include button-size($btn-padding-y-lg, $btn-padding-x-lg, $btn-font-size-lg, $btn-line-height-lg, $btn-border-radius-lg);\n}\n\n.btn-sm {\n  @include button-size($btn-padding-y-sm, $btn-padding-x-sm, $btn-font-size-sm, $btn-line-height-sm, $btn-border-radius-sm);\n}\n\n\n//\n// Block button\n//\n\n.btn-block {\n  display: block;\n  width: 100%;\n\n  // Vertically space out multiple block buttons\n  + .btn-block {\n    margin-top: $btn-block-spacing-y;\n  }\n}\n\n// Specificity overrides\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"button\"] {\n  &.btn-block {\n    width: 100%;\n  }\n}\n","// Button variants\n//\n// Easily pump out default styles, as well as :hover, :focus, :active,\n// and disabled options for all buttons\n\n@mixin button-variant($background, $border, $hover-background: darken($background, 7.5%), $hover-border: darken($border, 10%), $active-background: darken($background, 10%), $active-border: darken($border, 12.5%)) {\n  color: color-yiq($background);\n  @include gradient-bg($background);\n  border-color: $border;\n  @include box-shadow($btn-box-shadow);\n\n  @include hover() {\n    color: color-yiq($hover-background);\n    @include gradient-bg($hover-background);\n    border-color: $hover-border;\n  }\n\n  &:focus,\n  &.focus {\n    color: color-yiq($hover-background);\n    @include gradient-bg($hover-background);\n    border-color: $hover-border;\n    @if $enable-shadows {\n      @include box-shadow($btn-box-shadow, 0 0 0 $btn-focus-width rgba(mix(color-yiq($background), $border, 15%), .5));\n    } @else {\n      // Avoid using mixin so we can pass custom focus shadow properly\n      box-shadow: 0 0 0 $btn-focus-width rgba(mix(color-yiq($background), $border, 15%), .5);\n    }\n  }\n\n  // Disabled comes first so active can properly restyle\n  &.disabled,\n  &:disabled {\n    color: color-yiq($background);\n    background-color: $background;\n    border-color: $border;\n    // Remove CSS gradients if they're enabled\n    @if $enable-gradients {\n      background-image: none;\n    }\n  }\n\n  &:not(:disabled):not(.disabled):active,\n  &:not(:disabled):not(.disabled).active,\n  .show > &.dropdown-toggle {\n    color: color-yiq($active-background);\n    background-color: $active-background;\n    @if $enable-gradients {\n      background-image: none; // Remove the gradient for the pressed/active state\n    }\n    border-color: $active-border;\n\n    &:focus {\n      @if $enable-shadows and $btn-active-box-shadow != none {\n        @include box-shadow($btn-active-box-shadow, 0 0 0 $btn-focus-width rgba(mix(color-yiq($background), $border, 15%), .5));\n      } @else {\n        // Avoid using mixin so we can pass custom focus shadow properly\n        box-shadow: 0 0 0 $btn-focus-width rgba(mix(color-yiq($background), $border, 15%), .5);\n      }\n    }\n  }\n}\n\n@mixin button-outline-variant($color, $color-hover: color-yiq($color), $active-background: $color, $active-border: $color) {\n  color: $color;\n  border-color: $color;\n\n  @include hover() {\n    color: $color-hover;\n    background-color: $active-background;\n    border-color: $active-border;\n  }\n\n  &:focus,\n  &.focus {\n    box-shadow: 0 0 0 $btn-focus-width rgba($color, .5);\n  }\n\n  &.disabled,\n  &:disabled {\n    color: $color;\n    background-color: transparent;\n  }\n\n  &:not(:disabled):not(.disabled):active,\n  &:not(:disabled):not(.disabled).active,\n  .show > &.dropdown-toggle {\n    color: color-yiq($active-background);\n    background-color: $active-background;\n    border-color: $active-border;\n\n    &:focus {\n      @if $enable-shadows and $btn-active-box-shadow != none {\n        @include box-shadow($btn-active-box-shadow, 0 0 0 $btn-focus-width rgba($color, .5));\n      } @else {\n        // Avoid using mixin so we can pass custom focus shadow properly\n        box-shadow: 0 0 0 $btn-focus-width rgba($color, .5);\n      }\n    }\n  }\n}\n\n// Button sizes\n@mixin button-size($padding-y, $padding-x, $font-size, $line-height, $border-radius) {\n  padding: $padding-y $padding-x;\n  @include font-size($font-size);\n  line-height: $line-height;\n  // Manually declare to provide an override to the browser default\n  @include border-radius($border-radius, 0);\n}\n",".fade {\n  @include transition($transition-fade);\n\n  &:not(.show) {\n    opacity: 0;\n  }\n}\n\n.collapse {\n  &:not(.show) {\n    display: none;\n  }\n}\n\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  @include transition($transition-collapse);\n}\n","// The dropdown wrapper (`<div>`)\n.dropup,\n.dropright,\n.dropdown,\n.dropleft {\n  position: relative;\n}\n\n.dropdown-toggle {\n  white-space: nowrap;\n\n  // Generate the caret automatically\n  @include caret();\n}\n\n// The dropdown menu\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: $zindex-dropdown;\n  display: none; // none by default, but block on \"open\" of the menu\n  float: left;\n  min-width: $dropdown-min-width;\n  padding: $dropdown-padding-y $dropdown-padding-x;\n  margin: $dropdown-spacer 0 0; // override default ul\n  @include font-size($dropdown-font-size);\n  color: $dropdown-color;\n  text-align: left; // Ensures proper alignment if parent has it changed (e.g., modal footer)\n  list-style: none;\n  background-color: $dropdown-bg;\n  background-clip: padding-box;\n  border: $dropdown-border-width solid $dropdown-border-color;\n  @include border-radius($dropdown-border-radius);\n  @include box-shadow($dropdown-box-shadow);\n}\n\n@each $breakpoint in map-keys($grid-breakpoints) {\n  @include media-breakpoint-up($breakpoint) {\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n    .dropdown-menu#{$infix}-left {\n      right: auto;\n      left: 0;\n    }\n\n    .dropdown-menu#{$infix}-right {\n      right: 0;\n      left: auto;\n    }\n  }\n}\n\n// Allow for dropdowns to go bottom up (aka, dropup-menu)\n// Just add .dropup after the standard .dropdown class and you're set.\n.dropup {\n  .dropdown-menu {\n    top: auto;\n    bottom: 100%;\n    margin-top: 0;\n    margin-bottom: $dropdown-spacer;\n  }\n\n  .dropdown-toggle {\n    @include caret(up);\n  }\n}\n\n.dropright {\n  .dropdown-menu {\n    top: 0;\n    right: auto;\n    left: 100%;\n    margin-top: 0;\n    margin-left: $dropdown-spacer;\n  }\n\n  .dropdown-toggle {\n    @include caret(right);\n    &::after {\n      vertical-align: 0;\n    }\n  }\n}\n\n.dropleft {\n  .dropdown-menu {\n    top: 0;\n    right: 100%;\n    left: auto;\n    margin-top: 0;\n    margin-right: $dropdown-spacer;\n  }\n\n  .dropdown-toggle {\n    @include caret(left);\n    &::before {\n      vertical-align: 0;\n    }\n  }\n}\n\n// When Popper is enabled, reset the basic dropdown position\n// stylelint-disable-next-line no-duplicate-selectors\n.dropdown-menu {\n  &[x-placement^=\"top\"],\n  &[x-placement^=\"right\"],\n  &[x-placement^=\"bottom\"],\n  &[x-placement^=\"left\"] {\n    right: auto;\n    bottom: auto;\n  }\n}\n\n// Dividers (basically an `<hr>`) within the dropdown\n.dropdown-divider {\n  @include nav-divider($dropdown-divider-bg, $dropdown-divider-margin-y, true);\n}\n\n// Links, buttons, and more within the dropdown menu\n//\n// `<button>`-specific styles are denoted with `// For <button>s`\n.dropdown-item {\n  display: block;\n  width: 100%; // For `<button>`s\n  padding: $dropdown-item-padding-y $dropdown-item-padding-x;\n  clear: both;\n  font-weight: $font-weight-normal;\n  color: $dropdown-link-color;\n  text-align: inherit; // For `<button>`s\n  text-decoration: if($link-decoration == none, null, none);\n  white-space: nowrap; // prevent links from randomly breaking onto new lines\n  background-color: transparent; // For `<button>`s\n  border: 0; // For `<button>`s\n\n  // Prevent dropdown overflow if there's no padding\n  // See https://github.com/twbs/bootstrap/pull/27703\n  @if $dropdown-padding-y == 0 {\n    &:first-child {\n      @include border-top-radius($dropdown-inner-border-radius);\n    }\n\n    &:last-child {\n      @include border-bottom-radius($dropdown-inner-border-radius);\n    }\n  }\n\n  @include hover-focus() {\n    color: $dropdown-link-hover-color;\n    text-decoration: none;\n    @include gradient-bg($dropdown-link-hover-bg);\n  }\n\n  &.active,\n  &:active {\n    color: $dropdown-link-active-color;\n    text-decoration: none;\n    @include gradient-bg($dropdown-link-active-bg);\n  }\n\n  &.disabled,\n  &:disabled {\n    color: $dropdown-link-disabled-color;\n    pointer-events: none;\n    background-color: transparent;\n    // Remove CSS gradients if they're enabled\n    @if $enable-gradients {\n      background-image: none;\n    }\n  }\n}\n\n.dropdown-menu.show {\n  display: block;\n}\n\n// Dropdown section headers\n.dropdown-header {\n  display: block;\n  padding: $dropdown-header-padding;\n  margin-bottom: 0; // for use with heading elements\n  @include font-size($font-size-sm);\n  color: $dropdown-header-color;\n  white-space: nowrap; // as with > li > a\n}\n\n// Dropdown text\n.dropdown-item-text {\n  display: block;\n  padding: $dropdown-item-padding-y $dropdown-item-padding-x;\n  color: $dropdown-link-color;\n}\n","@mixin caret-down() {\n  border-top: $caret-width solid;\n  border-right: $caret-width solid transparent;\n  border-bottom: 0;\n  border-left: $caret-width solid transparent;\n}\n\n@mixin caret-up() {\n  border-top: 0;\n  border-right: $caret-width solid transparent;\n  border-bottom: $caret-width solid;\n  border-left: $caret-width solid transparent;\n}\n\n@mixin caret-right() {\n  border-top: $caret-width solid transparent;\n  border-right: 0;\n  border-bottom: $caret-width solid transparent;\n  border-left: $caret-width solid;\n}\n\n@mixin caret-left() {\n  border-top: $caret-width solid transparent;\n  border-right: $caret-width solid;\n  border-bottom: $caret-width solid transparent;\n}\n\n@mixin caret($direction: down) {\n  @if $enable-caret {\n    &::after {\n      display: inline-block;\n      margin-left: $caret-spacing;\n      vertical-align: $caret-vertical-align;\n      content: \"\";\n      @if $direction == down {\n        @include caret-down();\n      } @else if $direction == up {\n        @include caret-up();\n      } @else if $direction == right {\n        @include caret-right();\n      }\n    }\n\n    @if $direction == left {\n      &::after {\n        display: none;\n      }\n\n      &::before {\n        display: inline-block;\n        margin-right: $caret-spacing;\n        vertical-align: $caret-vertical-align;\n        content: \"\";\n        @include caret-left();\n      }\n    }\n\n    &:empty::after {\n      margin-left: 0;\n    }\n  }\n}\n","// Horizontal dividers\n//\n// Dividers (basically an hr) within dropdowns and nav lists\n\n@mixin nav-divider($color: $nav-divider-color, $margin-y: $nav-divider-margin-y, $ignore-warning: false) {\n  height: 0;\n  margin: $margin-y 0;\n  overflow: hidden;\n  border-top: 1px solid $color;\n  @include deprecate(\"The `nav-divider()` mixin\", \"v4.4.0\", \"v5\", $ignore-warning);\n}\n","// stylelint-disable selector-no-qualifying-type\n\n// Make the div behave like a button\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle; // match .btn alignment given font-size hack above\n\n  > .btn {\n    position: relative;\n    flex: 1 1 auto;\n\n    // Bring the hover, focused, and \"active\" buttons to the front to overlay\n    // the borders properly\n    @include hover() {\n      z-index: 1;\n    }\n    &:focus,\n    &:active,\n    &.active {\n      z-index: 1;\n    }\n  }\n}\n\n// Optional: Group multiple button groups together for a toolbar\n.btn-toolbar {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n\n  .input-group {\n    width: auto;\n  }\n}\n\n.btn-group {\n  // Prevent double borders when buttons are next to each other\n  > .btn:not(:first-child),\n  > .btn-group:not(:first-child) {\n    margin-left: -$btn-border-width;\n  }\n\n  // Reset rounded corners\n  > .btn:not(:last-child):not(.dropdown-toggle),\n  > .btn-group:not(:last-child) > .btn {\n    @include border-right-radius(0);\n  }\n\n  > .btn:not(:first-child),\n  > .btn-group:not(:first-child) > .btn {\n    @include border-left-radius(0);\n  }\n}\n\n// Sizing\n//\n// Remix the default button sizing classes into new ones for easier manipulation.\n\n.btn-group-sm > .btn { @extend .btn-sm; }\n.btn-group-lg > .btn { @extend .btn-lg; }\n\n\n//\n// Split button dropdowns\n//\n\n.dropdown-toggle-split {\n  padding-right: $btn-padding-x * .75;\n  padding-left: $btn-padding-x * .75;\n\n  &::after,\n  .dropup &::after,\n  .dropright &::after {\n    margin-left: 0;\n  }\n\n  .dropleft &::before {\n    margin-right: 0;\n  }\n}\n\n.btn-sm + .dropdown-toggle-split {\n  padding-right: $btn-padding-x-sm * .75;\n  padding-left: $btn-padding-x-sm * .75;\n}\n\n.btn-lg + .dropdown-toggle-split {\n  padding-right: $btn-padding-x-lg * .75;\n  padding-left: $btn-padding-x-lg * .75;\n}\n\n\n// The clickable button for toggling the menu\n// Set the same inset shadow as the :active state\n.btn-group.show .dropdown-toggle {\n  @include box-shadow($btn-active-box-shadow);\n\n  // Show no shadow for `.btn-link` since it has no other button styles.\n  &.btn-link {\n    @include box-shadow(none);\n  }\n}\n\n\n//\n// Vertical button groups\n//\n\n.btn-group-vertical {\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n\n  > .btn,\n  > .btn-group {\n    width: 100%;\n  }\n\n  > .btn:not(:first-child),\n  > .btn-group:not(:first-child) {\n    margin-top: -$btn-border-width;\n  }\n\n  // Reset rounded corners\n  > .btn:not(:last-child):not(.dropdown-toggle),\n  > .btn-group:not(:last-child) > .btn {\n    @include border-bottom-radius(0);\n  }\n\n  > .btn:not(:first-child),\n  > .btn-group:not(:first-child) > .btn {\n    @include border-top-radius(0);\n  }\n}\n\n\n// Checkbox and radio options\n//\n// In order to support the browser's form validation feedback, powered by the\n// `required` attribute, we have to \"hide\" the inputs via `clip`. We cannot use\n// `display: none;` or `visibility: hidden;` as that also hides the popover.\n// Simply visually hiding the inputs via `opacity` would leave them clickable in\n// certain cases which is prevented by using `clip` and `pointer-events`.\n// This way, we ensure a DOM element is visible to position the popover from.\n//\n// See https://github.com/twbs/bootstrap/pull/12794 and\n// https://github.com/twbs/bootstrap/pull/14559 for more information.\n\n.btn-group-toggle {\n  > .btn,\n  > .btn-group > .btn {\n    margin-bottom: 0; // Override default `<label>` value\n\n    input[type=\"radio\"],\n    input[type=\"checkbox\"] {\n      position: absolute;\n      clip: rect(0, 0, 0, 0);\n      pointer-events: none;\n    }\n  }\n}\n","// stylelint-disable selector-no-qualifying-type\n\n//\n// Base styles\n//\n\n.input-group {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap; // For form validation feedback\n  align-items: stretch;\n  width: 100%;\n\n  > .form-control,\n  > .form-control-plaintext,\n  > .custom-select,\n  > .custom-file {\n    position: relative; // For focus state's z-index\n    flex: 1 1 auto;\n    width: 1%;\n    min-width: 0; // https://stackoverflow.com/questions/36247140/why-dont-flex-items-shrink-past-content-size\n    margin-bottom: 0;\n\n    + .form-control,\n    + .custom-select,\n    + .custom-file {\n      margin-left: -$input-border-width;\n    }\n  }\n\n  // Bring the \"active\" form control to the top of surrounding elements\n  > .form-control:focus,\n  > .custom-select:focus,\n  > .custom-file .custom-file-input:focus ~ .custom-file-label {\n    z-index: 3;\n  }\n\n  // Bring the custom file input above the label\n  > .custom-file .custom-file-input:focus {\n    z-index: 4;\n  }\n\n  > .form-control,\n  > .custom-select {\n    &:not(:first-child) { @include border-left-radius(0); }\n  }\n\n  // Custom file inputs have more complex markup, thus requiring different\n  // border-radius overrides.\n  > .custom-file {\n    display: flex;\n    align-items: center;\n\n    &:not(:last-child) .custom-file-label,\n    &:not(:first-child) .custom-file-label { @include border-left-radius(0); }\n  }\n\n  &:not(.has-validation) {\n    > .form-control:not(:last-child),\n    > .custom-select:not(:last-child),\n    > .custom-file:not(:last-child) .custom-file-label::after {\n      @include border-right-radius(0);\n    }\n  }\n\n  &.has-validation {\n    > .form-control:nth-last-child(n + 3),\n    > .custom-select:nth-last-child(n + 3),\n    > .custom-file:nth-last-child(n + 3) .custom-file-label::after {\n      @include border-right-radius(0);\n    }\n  }\n}\n\n\n// Prepend and append\n//\n// While it requires one extra layer of HTML for each, dedicated prepend and\n// append elements allow us to 1) be less clever, 2) simplify our selectors, and\n// 3) support HTML5 form validation.\n\n.input-group-prepend,\n.input-group-append {\n  display: flex;\n\n  // Ensure buttons are always above inputs for more visually pleasing borders.\n  // This isn't needed for `.input-group-text` since it shares the same border-color\n  // as our inputs.\n  .btn {\n    position: relative;\n    z-index: 2;\n\n    &:focus {\n      z-index: 3;\n    }\n  }\n\n  .btn + .btn,\n  .btn + .input-group-text,\n  .input-group-text + .input-group-text,\n  .input-group-text + .btn {\n    margin-left: -$input-border-width;\n  }\n}\n\n.input-group-prepend { margin-right: -$input-border-width; }\n.input-group-append { margin-left: -$input-border-width; }\n\n\n// Textual addons\n//\n// Serves as a catch-all element for any text or radio/checkbox input you wish\n// to prepend or append to an input.\n\n.input-group-text {\n  display: flex;\n  align-items: center;\n  padding: $input-padding-y $input-padding-x;\n  margin-bottom: 0; // Allow use of <label> elements by overriding our default margin-bottom\n  @include font-size($input-font-size); // Match inputs\n  font-weight: $font-weight-normal;\n  line-height: $input-line-height;\n  color: $input-group-addon-color;\n  text-align: center;\n  white-space: nowrap;\n  background-color: $input-group-addon-bg;\n  border: $input-border-width solid $input-group-addon-border-color;\n  @include border-radius($input-border-radius);\n\n  // Nuke default margins from checkboxes and radios to vertically center within.\n  input[type=\"radio\"],\n  input[type=\"checkbox\"] {\n    margin-top: 0;\n  }\n}\n\n\n// Sizing\n//\n// Remix the default form control sizing classes into new ones for easier\n// manipulation.\n\n.input-group-lg > .form-control:not(textarea),\n.input-group-lg > .custom-select {\n  height: $input-height-lg;\n}\n\n.input-group-lg > .form-control,\n.input-group-lg > .custom-select,\n.input-group-lg > .input-group-prepend > .input-group-text,\n.input-group-lg > .input-group-append > .input-group-text,\n.input-group-lg > .input-group-prepend > .btn,\n.input-group-lg > .input-group-append > .btn {\n  padding: $input-padding-y-lg $input-padding-x-lg;\n  @include font-size($input-font-size-lg);\n  line-height: $input-line-height-lg;\n  @include border-radius($input-border-radius-lg);\n}\n\n.input-group-sm > .form-control:not(textarea),\n.input-group-sm > .custom-select {\n  height: $input-height-sm;\n}\n\n.input-group-sm > .form-control,\n.input-group-sm > .custom-select,\n.input-group-sm > .input-group-prepend > .input-group-text,\n.input-group-sm > .input-group-append > .input-group-text,\n.input-group-sm > .input-group-prepend > .btn,\n.input-group-sm > .input-group-append > .btn {\n  padding: $input-padding-y-sm $input-padding-x-sm;\n  @include font-size($input-font-size-sm);\n  line-height: $input-line-height-sm;\n  @include border-radius($input-border-radius-sm);\n}\n\n.input-group-lg > .custom-select,\n.input-group-sm > .custom-select {\n  padding-right: $custom-select-padding-x + $custom-select-indicator-padding;\n}\n\n\n// Prepend and append rounded corners\n//\n// These rulesets must come after the sizing ones to properly override sm and lg\n// border-radius values when extending. They're more specific than we'd like\n// with the `.input-group >` part, but without it, we cannot override the sizing.\n\n\n.input-group > .input-group-prepend > .btn,\n.input-group > .input-group-prepend > .input-group-text,\n.input-group:not(.has-validation) > .input-group-append:not(:last-child) > .btn,\n.input-group:not(.has-validation) > .input-group-append:not(:last-child) > .input-group-text,\n.input-group.has-validation > .input-group-append:nth-last-child(n + 3) > .btn,\n.input-group.has-validation > .input-group-append:nth-last-child(n + 3) > .input-group-text,\n.input-group > .input-group-append:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group > .input-group-append:last-child > .input-group-text:not(:last-child) {\n  @include border-right-radius(0);\n}\n\n.input-group > .input-group-append > .btn,\n.input-group > .input-group-append > .input-group-text,\n.input-group > .input-group-prepend:not(:first-child) > .btn,\n.input-group > .input-group-prepend:not(:first-child) > .input-group-text,\n.input-group > .input-group-prepend:first-child > .btn:not(:first-child),\n.input-group > .input-group-prepend:first-child > .input-group-text:not(:first-child) {\n  @include border-left-radius(0);\n}\n","// Embedded icons from Open Iconic.\n// Released under MIT and copyright 2014 Waybury.\n// https://useiconic.com/open\n\n\n// Checkboxes and radios\n//\n// Base class takes care of all the key behavioral aspects.\n\n.custom-control {\n  position: relative;\n  z-index: 1;\n  display: block;\n  min-height: $font-size-base * $line-height-base;\n  padding-left: $custom-control-gutter + $custom-control-indicator-size;\n  color-adjust: exact; // Keep themed appearance for print\n}\n\n.custom-control-inline {\n  display: inline-flex;\n  margin-right: $custom-control-spacer-x;\n}\n\n.custom-control-input {\n  position: absolute;\n  left: 0;\n  z-index: -1; // Put the input behind the label so it doesn't overlay text\n  width: $custom-control-indicator-size;\n  height: ($font-size-base * $line-height-base + $custom-control-indicator-size) / 2;\n  opacity: 0;\n\n  &:checked ~ .custom-control-label::before {\n    color: $custom-control-indicator-checked-color;\n    border-color: $custom-control-indicator-checked-border-color;\n    @include gradient-bg($custom-control-indicator-checked-bg);\n    @include box-shadow($custom-control-indicator-checked-box-shadow);\n  }\n\n  &:focus ~ .custom-control-label::before {\n    // the mixin is not used here to make sure there is feedback\n    @if $enable-shadows {\n      box-shadow: $input-box-shadow, $custom-control-indicator-focus-box-shadow;\n    } @else {\n      box-shadow: $custom-control-indicator-focus-box-shadow;\n    }\n  }\n\n  &:focus:not(:checked) ~ .custom-control-label::before {\n    border-color: $custom-control-indicator-focus-border-color;\n  }\n\n  &:not(:disabled):active ~ .custom-control-label::before {\n    color: $custom-control-indicator-active-color;\n    background-color: $custom-control-indicator-active-bg;\n    border-color: $custom-control-indicator-active-border-color;\n    @include box-shadow($custom-control-indicator-active-box-shadow);\n  }\n\n  // Use [disabled] and :disabled to work around https://github.com/twbs/bootstrap/issues/28247\n  &[disabled],\n  &:disabled {\n    ~ .custom-control-label {\n      color: $custom-control-label-disabled-color;\n\n      &::before {\n        background-color: $custom-control-indicator-disabled-bg;\n      }\n    }\n  }\n}\n\n// Custom control indicators\n//\n// Build the custom controls out of pseudo-elements.\n\n.custom-control-label {\n  position: relative;\n  margin-bottom: 0;\n  color: $custom-control-label-color;\n  vertical-align: top;\n  cursor: $custom-control-cursor;\n\n  // Background-color and (when enabled) gradient\n  &::before {\n    position: absolute;\n    top: ($font-size-base * $line-height-base - $custom-control-indicator-size) / 2;\n    left: -($custom-control-gutter + $custom-control-indicator-size);\n    display: block;\n    width: $custom-control-indicator-size;\n    height: $custom-control-indicator-size;\n    pointer-events: none;\n    content: \"\";\n    background-color: $custom-control-indicator-bg;\n    border: $custom-control-indicator-border-color solid $custom-control-indicator-border-width;\n    @include box-shadow($custom-control-indicator-box-shadow);\n  }\n\n  // Foreground (icon)\n  &::after {\n    position: absolute;\n    top: ($font-size-base * $line-height-base - $custom-control-indicator-size) / 2;\n    left: -($custom-control-gutter + $custom-control-indicator-size);\n    display: block;\n    width: $custom-control-indicator-size;\n    height: $custom-control-indicator-size;\n    content: \"\";\n    background: 50% / #{$custom-control-indicator-bg-size} no-repeat;\n  }\n}\n\n\n// Checkboxes\n//\n// Tweak just a few things for checkboxes.\n\n.custom-checkbox {\n  .custom-control-label::before {\n    @include border-radius($custom-checkbox-indicator-border-radius);\n  }\n\n  .custom-control-input:checked ~ .custom-control-label {\n    &::after {\n      background-image: escape-svg($custom-checkbox-indicator-icon-checked);\n    }\n  }\n\n  .custom-control-input:indeterminate ~ .custom-control-label {\n    &::before {\n      border-color: $custom-checkbox-indicator-indeterminate-border-color;\n      @include gradient-bg($custom-checkbox-indicator-indeterminate-bg);\n      @include box-shadow($custom-checkbox-indicator-indeterminate-box-shadow);\n    }\n    &::after {\n      background-image: escape-svg($custom-checkbox-indicator-icon-indeterminate);\n    }\n  }\n\n  .custom-control-input:disabled {\n    &:checked ~ .custom-control-label::before {\n      @include gradient-bg($custom-control-indicator-checked-disabled-bg);\n    }\n    &:indeterminate ~ .custom-control-label::before {\n      @include gradient-bg($custom-control-indicator-checked-disabled-bg);\n    }\n  }\n}\n\n// Radios\n//\n// Tweak just a few things for radios.\n\n.custom-radio {\n  .custom-control-label::before {\n    // stylelint-disable-next-line property-disallowed-list\n    border-radius: $custom-radio-indicator-border-radius;\n  }\n\n  .custom-control-input:checked ~ .custom-control-label {\n    &::after {\n      background-image: escape-svg($custom-radio-indicator-icon-checked);\n    }\n  }\n\n  .custom-control-input:disabled {\n    &:checked ~ .custom-control-label::before {\n      @include gradient-bg($custom-control-indicator-checked-disabled-bg);\n    }\n  }\n}\n\n\n// switches\n//\n// Tweak a few things for switches\n\n.custom-switch {\n  padding-left: $custom-switch-width + $custom-control-gutter;\n\n  .custom-control-label {\n    &::before {\n      left: -($custom-switch-width + $custom-control-gutter);\n      width: $custom-switch-width;\n      pointer-events: all;\n      // stylelint-disable-next-line property-disallowed-list\n      border-radius: $custom-switch-indicator-border-radius;\n    }\n\n    &::after {\n      top: add(($font-size-base * $line-height-base - $custom-control-indicator-size) / 2, $custom-control-indicator-border-width * 2);\n      left: add(-($custom-switch-width + $custom-control-gutter), $custom-control-indicator-border-width * 2);\n      width: $custom-switch-indicator-size;\n      height: $custom-switch-indicator-size;\n      background-color: $custom-control-indicator-border-color;\n      // stylelint-disable-next-line property-disallowed-list\n      border-radius: $custom-switch-indicator-border-radius;\n      @include transition(transform .15s ease-in-out, $custom-forms-transition);\n    }\n  }\n\n  .custom-control-input:checked ~ .custom-control-label {\n    &::after {\n      background-color: $custom-control-indicator-bg;\n      transform: translateX($custom-switch-width - $custom-control-indicator-size);\n    }\n  }\n\n  .custom-control-input:disabled {\n    &:checked ~ .custom-control-label::before {\n      @include gradient-bg($custom-control-indicator-checked-disabled-bg);\n    }\n  }\n}\n\n\n// Select\n//\n// Replaces the browser default select with a custom one, mostly pulled from\n// https://primer.github.io/.\n//\n\n.custom-select {\n  display: inline-block;\n  width: 100%;\n  height: $custom-select-height;\n  padding: $custom-select-padding-y ($custom-select-padding-x + $custom-select-indicator-padding) $custom-select-padding-y $custom-select-padding-x;\n  font-family: $custom-select-font-family;\n  @include font-size($custom-select-font-size);\n  font-weight: $custom-select-font-weight;\n  line-height: $custom-select-line-height;\n  color: $custom-select-color;\n  vertical-align: middle;\n  background: $custom-select-bg $custom-select-background;\n  border: $custom-select-border-width solid $custom-select-border-color;\n  @include border-radius($custom-select-border-radius, 0);\n  @include box-shadow($custom-select-box-shadow);\n  appearance: none;\n\n  &:focus {\n    border-color: $custom-select-focus-border-color;\n    outline: 0;\n    @if $enable-shadows {\n      @include box-shadow($custom-select-box-shadow, $custom-select-focus-box-shadow);\n    } @else {\n      // Avoid using mixin so we can pass custom focus shadow properly\n      box-shadow: $custom-select-focus-box-shadow;\n    }\n\n    &::-ms-value {\n      // For visual consistency with other platforms/browsers,\n      // suppress the default white text on blue background highlight given to\n      // the selected option text when the (still closed) <select> receives focus\n      // in IE and (under certain conditions) Edge.\n      // See https://github.com/twbs/bootstrap/issues/19398.\n      color: $input-color;\n      background-color: $input-bg;\n    }\n  }\n\n  &[multiple],\n  &[size]:not([size=\"1\"]) {\n    height: auto;\n    padding-right: $custom-select-padding-x;\n    background-image: none;\n  }\n\n  &:disabled {\n    color: $custom-select-disabled-color;\n    background-color: $custom-select-disabled-bg;\n  }\n\n  // Hides the default caret in IE11\n  &::-ms-expand {\n    display: none;\n  }\n\n  // Remove outline from select box in FF\n  &:-moz-focusring {\n    color: transparent;\n    text-shadow: 0 0 0 $custom-select-color;\n  }\n}\n\n.custom-select-sm {\n  height: $custom-select-height-sm;\n  padding-top: $custom-select-padding-y-sm;\n  padding-bottom: $custom-select-padding-y-sm;\n  padding-left: $custom-select-padding-x-sm;\n  @include font-size($custom-select-font-size-sm);\n}\n\n.custom-select-lg {\n  height: $custom-select-height-lg;\n  padding-top: $custom-select-padding-y-lg;\n  padding-bottom: $custom-select-padding-y-lg;\n  padding-left: $custom-select-padding-x-lg;\n  @include font-size($custom-select-font-size-lg);\n}\n\n\n// File\n//\n// Custom file input.\n\n.custom-file {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  height: $custom-file-height;\n  margin-bottom: 0;\n}\n\n.custom-file-input {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  height: $custom-file-height;\n  margin: 0;\n  overflow: hidden;\n  opacity: 0;\n\n  &:focus ~ .custom-file-label {\n    border-color: $custom-file-focus-border-color;\n    box-shadow: $custom-file-focus-box-shadow;\n  }\n\n  // Use [disabled] and :disabled to work around https://github.com/twbs/bootstrap/issues/28247\n  &[disabled] ~ .custom-file-label,\n  &:disabled ~ .custom-file-label {\n    background-color: $custom-file-disabled-bg;\n  }\n\n  @each $lang, $value in $custom-file-text {\n    &:lang(#{$lang}) ~ .custom-file-label::after {\n      content: $value;\n    }\n  }\n\n  ~ .custom-file-label[data-browse]::after {\n    content: attr(data-browse);\n  }\n}\n\n.custom-file-label {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n  height: $custom-file-height;\n  padding: $custom-file-padding-y $custom-file-padding-x;\n  overflow: hidden;\n  font-family: $custom-file-font-family;\n  font-weight: $custom-file-font-weight;\n  line-height: $custom-file-line-height;\n  color: $custom-file-color;\n  background-color: $custom-file-bg;\n  border: $custom-file-border-width solid $custom-file-border-color;\n  @include border-radius($custom-file-border-radius);\n  @include box-shadow($custom-file-box-shadow);\n\n  &::after {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 3;\n    display: block;\n    height: $custom-file-height-inner;\n    padding: $custom-file-padding-y $custom-file-padding-x;\n    line-height: $custom-file-line-height;\n    color: $custom-file-button-color;\n    content: \"Browse\";\n    @include gradient-bg($custom-file-button-bg);\n    border-left: inherit;\n    @include border-radius(0 $custom-file-border-radius $custom-file-border-radius 0);\n  }\n}\n\n// Range\n//\n// Style range inputs the same across browsers. Vendor-specific rules for pseudo\n// elements cannot be mixed. As such, there are no shared styles for focus or\n// active states on prefixed selectors.\n\n.custom-range {\n  width: 100%;\n  height: add($custom-range-thumb-height, $custom-range-thumb-focus-box-shadow-width * 2);\n  padding: 0; // Need to reset padding\n  background-color: transparent;\n  appearance: none;\n\n  &:focus {\n    outline: 0;\n\n    // Pseudo-elements must be split across multiple rulesets to have an effect.\n    // No box-shadow() mixin for focus accessibility.\n    &::-webkit-slider-thumb { box-shadow: $custom-range-thumb-focus-box-shadow; }\n    &::-moz-range-thumb     { box-shadow: $custom-range-thumb-focus-box-shadow; }\n    &::-ms-thumb            { box-shadow: $custom-range-thumb-focus-box-shadow; }\n  }\n\n  &::-moz-focus-outer {\n    border: 0;\n  }\n\n  &::-webkit-slider-thumb {\n    width: $custom-range-thumb-width;\n    height: $custom-range-thumb-height;\n    margin-top: ($custom-range-track-height - $custom-range-thumb-height) / 2; // Webkit specific\n    @include gradient-bg($custom-range-thumb-bg);\n    border: $custom-range-thumb-border;\n    @include border-radius($custom-range-thumb-border-radius);\n    @include box-shadow($custom-range-thumb-box-shadow);\n    @include transition($custom-forms-transition);\n    appearance: none;\n\n    &:active {\n      @include gradient-bg($custom-range-thumb-active-bg);\n    }\n  }\n\n  &::-webkit-slider-runnable-track {\n    width: $custom-range-track-width;\n    height: $custom-range-track-height;\n    color: transparent; // Why?\n    cursor: $custom-range-track-cursor;\n    background-color: $custom-range-track-bg;\n    border-color: transparent;\n    @include border-radius($custom-range-track-border-radius);\n    @include box-shadow($custom-range-track-box-shadow);\n  }\n\n  &::-moz-range-thumb {\n    width: $custom-range-thumb-width;\n    height: $custom-range-thumb-height;\n    @include gradient-bg($custom-range-thumb-bg);\n    border: $custom-range-thumb-border;\n    @include border-radius($custom-range-thumb-border-radius);\n    @include box-shadow($custom-range-thumb-box-shadow);\n    @include transition($custom-forms-transition);\n    appearance: none;\n\n    &:active {\n      @include gradient-bg($custom-range-thumb-active-bg);\n    }\n  }\n\n  &::-moz-range-track {\n    width: $custom-range-track-width;\n    height: $custom-range-track-height;\n    color: transparent;\n    cursor: $custom-range-track-cursor;\n    background-color: $custom-range-track-bg;\n    border-color: transparent; // Firefox specific?\n    @include border-radius($custom-range-track-border-radius);\n    @include box-shadow($custom-range-track-box-shadow);\n  }\n\n  &::-ms-thumb {\n    width: $custom-range-thumb-width;\n    height: $custom-range-thumb-height;\n    margin-top: 0; // Edge specific\n    margin-right: $custom-range-thumb-focus-box-shadow-width; // Workaround that overflowed box-shadow is hidden.\n    margin-left: $custom-range-thumb-focus-box-shadow-width;  // Workaround that overflowed box-shadow is hidden.\n    @include gradient-bg($custom-range-thumb-bg);\n    border: $custom-range-thumb-border;\n    @include border-radius($custom-range-thumb-border-radius);\n    @include box-shadow($custom-range-thumb-box-shadow);\n    @include transition($custom-forms-transition);\n    appearance: none;\n\n    &:active {\n      @include gradient-bg($custom-range-thumb-active-bg);\n    }\n  }\n\n  &::-ms-track {\n    width: $custom-range-track-width;\n    height: $custom-range-track-height;\n    color: transparent;\n    cursor: $custom-range-track-cursor;\n    background-color: transparent;\n    border-color: transparent;\n    border-width: $custom-range-thumb-height / 2;\n    @include box-shadow($custom-range-track-box-shadow);\n  }\n\n  &::-ms-fill-lower {\n    background-color: $custom-range-track-bg;\n    @include border-radius($custom-range-track-border-radius);\n  }\n\n  &::-ms-fill-upper {\n    margin-right: 15px; // arbitrary?\n    background-color: $custom-range-track-bg;\n    @include border-radius($custom-range-track-border-radius);\n  }\n\n  &:disabled {\n    &::-webkit-slider-thumb {\n      background-color: $custom-range-thumb-disabled-bg;\n    }\n\n    &::-webkit-slider-runnable-track {\n      cursor: default;\n    }\n\n    &::-moz-range-thumb {\n      background-color: $custom-range-thumb-disabled-bg;\n    }\n\n    &::-moz-range-track {\n      cursor: default;\n    }\n\n    &::-ms-thumb {\n      background-color: $custom-range-thumb-disabled-bg;\n    }\n  }\n}\n\n.custom-control-label::before,\n.custom-file-label,\n.custom-select {\n  @include transition($custom-forms-transition);\n}\n","// Base class\n//\n// Kickstart any navigation component with a set of style resets. Works with\n// `<nav>`s, `<ul>`s or `<ol>`s.\n\n.nav {\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n\n.nav-link {\n  display: block;\n  padding: $nav-link-padding-y $nav-link-padding-x;\n  text-decoration: if($link-decoration == none, null, none);\n\n  @include hover-focus() {\n    text-decoration: none;\n  }\n\n  // Disabled state lightens text\n  &.disabled {\n    color: $nav-link-disabled-color;\n    pointer-events: none;\n    cursor: default;\n  }\n}\n\n//\n// Tabs\n//\n\n.nav-tabs {\n  border-bottom: $nav-tabs-border-width solid $nav-tabs-border-color;\n\n  .nav-link {\n    margin-bottom: -$nav-tabs-border-width;\n    border: $nav-tabs-border-width solid transparent;\n    @include border-top-radius($nav-tabs-border-radius);\n\n    @include hover-focus() {\n      border-color: $nav-tabs-link-hover-border-color;\n    }\n\n    &.disabled {\n      color: $nav-link-disabled-color;\n      background-color: transparent;\n      border-color: transparent;\n    }\n  }\n\n  .nav-link.active,\n  .nav-item.show .nav-link {\n    color: $nav-tabs-link-active-color;\n    background-color: $nav-tabs-link-active-bg;\n    border-color: $nav-tabs-link-active-border-color;\n  }\n\n  .dropdown-menu {\n    // Make dropdown border overlap tab border\n    margin-top: -$nav-tabs-border-width;\n    // Remove the top rounded corners here since there is a hard edge above the menu\n    @include border-top-radius(0);\n  }\n}\n\n\n//\n// Pills\n//\n\n.nav-pills {\n  .nav-link {\n    @include border-radius($nav-pills-border-radius);\n  }\n\n  .nav-link.active,\n  .show > .nav-link {\n    color: $nav-pills-link-active-color;\n    background-color: $nav-pills-link-active-bg;\n  }\n}\n\n\n//\n// Justified variants\n//\n\n.nav-fill {\n  > .nav-link,\n  .nav-item {\n    flex: 1 1 auto;\n    text-align: center;\n  }\n}\n\n.nav-justified {\n  > .nav-link,\n  .nav-item {\n    flex-basis: 0;\n    flex-grow: 1;\n    text-align: center;\n  }\n}\n\n\n// Tabbable tabs\n//\n// Hide tabbable panes to start, show them when `.active`\n\n.tab-content {\n  > .tab-pane {\n    display: none;\n  }\n  > .active {\n    display: block;\n  }\n}\n","// Contents\n//\n// Navbar\n// Navbar brand\n// Navbar nav\n// Navbar text\n// Navbar divider\n// Responsive navbar\n// Navbar position\n// Navbar themes\n\n\n// Navbar\n//\n// Provide a static navbar from which we expand to create full-width, fixed, and\n// other navbar variations.\n\n.navbar {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap; // allow us to do the line break for collapsing content\n  align-items: center;\n  justify-content: space-between; // space out brand from logo\n  padding: $navbar-padding-y $navbar-padding-x;\n\n  // Because flex properties aren't inherited, we need to redeclare these first\n  // few properties so that content nested within behave properly.\n  %container-flex-properties {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between;\n  }\n\n  .container,\n  .container-fluid {\n    @extend %container-flex-properties;\n  }\n\n  @each $breakpoint, $container-max-width in $container-max-widths {\n    > .container#{breakpoint-infix($breakpoint, $container-max-widths)} {\n      @extend %container-flex-properties;\n    }\n  }\n}\n\n\n// Navbar brand\n//\n// Used for brand, project, or site names.\n\n.navbar-brand {\n  display: inline-block;\n  padding-top: $navbar-brand-padding-y;\n  padding-bottom: $navbar-brand-padding-y;\n  margin-right: $navbar-padding-x;\n  @include font-size($navbar-brand-font-size);\n  line-height: inherit;\n  white-space: nowrap;\n\n  @include hover-focus() {\n    text-decoration: none;\n  }\n}\n\n\n// Navbar nav\n//\n// Custom navbar navigation (doesn't require `.nav`, but does make use of `.nav-link`).\n\n.navbar-nav {\n  display: flex;\n  flex-direction: column; // cannot use `inherit` to get the `.navbar`s value\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n\n  .nav-link {\n    padding-right: 0;\n    padding-left: 0;\n  }\n\n  .dropdown-menu {\n    position: static;\n    float: none;\n  }\n}\n\n\n// Navbar text\n//\n//\n\n.navbar-text {\n  display: inline-block;\n  padding-top: $nav-link-padding-y;\n  padding-bottom: $nav-link-padding-y;\n}\n\n\n// Responsive navbar\n//\n// Custom styles for responsive collapsing and toggling of navbar contents.\n// Powered by the collapse Bootstrap JavaScript plugin.\n\n// When collapsed, prevent the toggleable navbar contents from appearing in\n// the default flexbox row orientation. Requires the use of `flex-wrap: wrap`\n// on the `.navbar` parent.\n.navbar-collapse {\n  flex-basis: 100%;\n  flex-grow: 1;\n  // For always expanded or extra full navbars, ensure content aligns itself\n  // properly vertically. Can be easily overridden with flex utilities.\n  align-items: center;\n}\n\n// Button for toggling the navbar when in its collapsed state\n.navbar-toggler {\n  padding: $navbar-toggler-padding-y $navbar-toggler-padding-x;\n  @include font-size($navbar-toggler-font-size);\n  line-height: 1;\n  background-color: transparent; // remove default button style\n  border: $border-width solid transparent; // remove default button style\n  @include border-radius($navbar-toggler-border-radius);\n\n  @include hover-focus() {\n    text-decoration: none;\n  }\n}\n\n// Keep as a separate element so folks can easily override it with another icon\n// or image file as needed.\n.navbar-toggler-icon {\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  content: \"\";\n  background: 50% / 100% 100% no-repeat;\n}\n\n.navbar-nav-scroll {\n  max-height: $navbar-nav-scroll-max-height;\n  overflow-y: auto;\n}\n\n// Generate series of `.navbar-expand-*` responsive classes for configuring\n// where your navbar collapses.\n.navbar-expand {\n  @each $breakpoint in map-keys($grid-breakpoints) {\n    $next: breakpoint-next($breakpoint, $grid-breakpoints);\n    $infix: breakpoint-infix($next, $grid-breakpoints);\n\n    &#{$infix} {\n      @include media-breakpoint-down($breakpoint) {\n        %container-navbar-expand-#{$breakpoint} {\n          padding-right: 0;\n          padding-left: 0;\n        }\n\n        > .container,\n        > .container-fluid {\n          @extend %container-navbar-expand-#{$breakpoint};\n        }\n\n        @each $size, $container-max-width in $container-max-widths {\n          > .container#{breakpoint-infix($size, $container-max-widths)} {\n            @extend %container-navbar-expand-#{$breakpoint};\n          }\n        }\n      }\n\n      @include media-breakpoint-up($next) {\n        flex-flow: row nowrap;\n        justify-content: flex-start;\n\n        .navbar-nav {\n          flex-direction: row;\n\n          .dropdown-menu {\n            position: absolute;\n          }\n\n          .nav-link {\n            padding-right: $navbar-nav-link-padding-x;\n            padding-left: $navbar-nav-link-padding-x;\n          }\n        }\n\n        // For nesting containers, have to redeclare for alignment purposes\n        %container-nesting-#{$breakpoint} {\n          flex-wrap: nowrap;\n        }\n\n        > .container,\n        > .container-fluid {\n          @extend %container-nesting-#{$breakpoint};\n        }\n\n        @each $size, $container-max-width in $container-max-widths {\n          > .container#{breakpoint-infix($size, $container-max-widths)} {\n            @extend %container-nesting-#{$breakpoint};\n          }\n        }\n\n        .navbar-nav-scroll {\n          overflow: visible;\n        }\n\n        .navbar-collapse {\n          display: flex !important; // stylelint-disable-line declaration-no-important\n\n          // Changes flex-bases to auto because of an IE10 bug\n          flex-basis: auto;\n        }\n\n        .navbar-toggler {\n          display: none;\n        }\n      }\n    }\n  }\n}\n\n\n// Navbar themes\n//\n// Styles for switching between navbars with light or dark background.\n\n// Dark links against a light background\n.navbar-light {\n  .navbar-brand {\n    color: $navbar-light-brand-color;\n\n    @include hover-focus() {\n      color: $navbar-light-brand-hover-color;\n    }\n  }\n\n  .navbar-nav {\n    .nav-link {\n      color: $navbar-light-color;\n\n      @include hover-focus() {\n        color: $navbar-light-hover-color;\n      }\n\n      &.disabled {\n        color: $navbar-light-disabled-color;\n      }\n    }\n\n    .show > .nav-link,\n    .active > .nav-link,\n    .nav-link.show,\n    .nav-link.active {\n      color: $navbar-light-active-color;\n    }\n  }\n\n  .navbar-toggler {\n    color: $navbar-light-color;\n    border-color: $navbar-light-toggler-border-color;\n  }\n\n  .navbar-toggler-icon {\n    background-image: escape-svg($navbar-light-toggler-icon-bg);\n  }\n\n  .navbar-text {\n    color: $navbar-light-color;\n    a {\n      color: $navbar-light-active-color;\n\n      @include hover-focus() {\n        color: $navbar-light-active-color;\n      }\n    }\n  }\n}\n\n// White links against a dark background\n.navbar-dark {\n  .navbar-brand {\n    color: $navbar-dark-brand-color;\n\n    @include hover-focus() {\n      color: $navbar-dark-brand-hover-color;\n    }\n  }\n\n  .navbar-nav {\n    .nav-link {\n      color: $navbar-dark-color;\n\n      @include hover-focus() {\n        color: $navbar-dark-hover-color;\n      }\n\n      &.disabled {\n        color: $navbar-dark-disabled-color;\n      }\n    }\n\n    .show > .nav-link,\n    .active > .nav-link,\n    .nav-link.show,\n    .nav-link.active {\n      color: $navbar-dark-active-color;\n    }\n  }\n\n  .navbar-toggler {\n    color: $navbar-dark-color;\n    border-color: $navbar-dark-toggler-border-color;\n  }\n\n  .navbar-toggler-icon {\n    background-image: escape-svg($navbar-dark-toggler-icon-bg);\n  }\n\n  .navbar-text {\n    color: $navbar-dark-color;\n    a {\n      color: $navbar-dark-active-color;\n\n      @include hover-focus() {\n        color: $navbar-dark-active-color;\n      }\n    }\n  }\n}\n","//\n// Base styles\n//\n\n.card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0; // See https://github.com/twbs/bootstrap/pull/22740#issuecomment-305868106\n  height: $card-height;\n  word-wrap: break-word;\n  background-color: $card-bg;\n  background-clip: border-box;\n  border: $card-border-width solid $card-border-color;\n  @include border-radius($card-border-radius);\n\n  > hr {\n    margin-right: 0;\n    margin-left: 0;\n  }\n\n  > .list-group {\n    border-top: inherit;\n    border-bottom: inherit;\n\n    &:first-child {\n      border-top-width: 0;\n      @include border-top-radius($card-inner-border-radius);\n    }\n\n    &:last-child  {\n      border-bottom-width: 0;\n      @include border-bottom-radius($card-inner-border-radius);\n    }\n  }\n\n  // Due to specificity of the above selector (`.card > .list-group`), we must\n  // use a child selector here to prevent double borders.\n  > .card-header + .list-group,\n  > .list-group + .card-footer {\n    border-top: 0;\n  }\n}\n\n.card-body {\n  // Enable `flex-grow: 1` for decks and groups so that card blocks take up\n  // as much space as possible, ensuring footers are aligned to the bottom.\n  flex: 1 1 auto;\n  // Workaround for the image size bug in IE\n  // See: https://github.com/twbs/bootstrap/pull/28855\n  min-height: 1px;\n  padding: $card-spacer-x;\n  color: $card-color;\n}\n\n.card-title {\n  margin-bottom: $card-spacer-y;\n}\n\n.card-subtitle {\n  margin-top: -$card-spacer-y / 2;\n  margin-bottom: 0;\n}\n\n.card-text:last-child {\n  margin-bottom: 0;\n}\n\n.card-link {\n  @include hover() {\n    text-decoration: none;\n  }\n\n  + .card-link {\n    margin-left: $card-spacer-x;\n  }\n}\n\n//\n// Optional textual caps\n//\n\n.card-header {\n  padding: $card-spacer-y $card-spacer-x;\n  margin-bottom: 0; // Removes the default margin-bottom of <hN>\n  color: $card-cap-color;\n  background-color: $card-cap-bg;\n  border-bottom: $card-border-width solid $card-border-color;\n\n  &:first-child {\n    @include border-radius($card-inner-border-radius $card-inner-border-radius 0 0);\n  }\n}\n\n.card-footer {\n  padding: $card-spacer-y $card-spacer-x;\n  color: $card-cap-color;\n  background-color: $card-cap-bg;\n  border-top: $card-border-width solid $card-border-color;\n\n  &:last-child {\n    @include border-radius(0 0 $card-inner-border-radius $card-inner-border-radius);\n  }\n}\n\n\n//\n// Header navs\n//\n\n.card-header-tabs {\n  margin-right: -$card-spacer-x / 2;\n  margin-bottom: -$card-spacer-y;\n  margin-left: -$card-spacer-x / 2;\n  border-bottom: 0;\n}\n\n.card-header-pills {\n  margin-right: -$card-spacer-x / 2;\n  margin-left: -$card-spacer-x / 2;\n}\n\n// Card image\n.card-img-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: $card-img-overlay-padding;\n  @include border-radius($card-inner-border-radius);\n}\n\n.card-img,\n.card-img-top,\n.card-img-bottom {\n  flex-shrink: 0; // For IE: https://github.com/twbs/bootstrap/issues/29396\n  width: 100%; // Required because we use flexbox and this inherently applies align-self: stretch\n}\n\n.card-img,\n.card-img-top {\n  @include border-top-radius($card-inner-border-radius);\n}\n\n.card-img,\n.card-img-bottom {\n  @include border-bottom-radius($card-inner-border-radius);\n}\n\n\n// Card deck\n\n.card-deck {\n  .card {\n    margin-bottom: $card-deck-margin;\n  }\n\n  @include media-breakpoint-up(sm) {\n    display: flex;\n    flex-flow: row wrap;\n    margin-right: -$card-deck-margin;\n    margin-left: -$card-deck-margin;\n\n    .card {\n      // Flexbugs #4: https://github.com/philipwalton/flexbugs#flexbug-4\n      flex: 1 0 0%;\n      margin-right: $card-deck-margin;\n      margin-bottom: 0; // Override the default\n      margin-left: $card-deck-margin;\n    }\n  }\n}\n\n\n//\n// Card groups\n//\n\n.card-group {\n  // The child selector allows nested `.card` within `.card-group`\n  // to display properly.\n  > .card {\n    margin-bottom: $card-group-margin;\n  }\n\n  @include media-breakpoint-up(sm) {\n    display: flex;\n    flex-flow: row wrap;\n    // The child selector allows nested `.card` within `.card-group`\n    // to display properly.\n    > .card {\n      // Flexbugs #4: https://github.com/philipwalton/flexbugs#flexbug-4\n      flex: 1 0 0%;\n      margin-bottom: 0;\n\n      + .card {\n        margin-left: 0;\n        border-left: 0;\n      }\n\n      // Handle rounded corners\n      @if $enable-rounded {\n        &:not(:last-child) {\n          @include border-right-radius(0);\n\n          .card-img-top,\n          .card-header {\n            // stylelint-disable-next-line property-disallowed-list\n            border-top-right-radius: 0;\n          }\n          .card-img-bottom,\n          .card-footer {\n            // stylelint-disable-next-line property-disallowed-list\n            border-bottom-right-radius: 0;\n          }\n        }\n\n        &:not(:first-child) {\n          @include border-left-radius(0);\n\n          .card-img-top,\n          .card-header {\n            // stylelint-disable-next-line property-disallowed-list\n            border-top-left-radius: 0;\n          }\n          .card-img-bottom,\n          .card-footer {\n            // stylelint-disable-next-line property-disallowed-list\n            border-bottom-left-radius: 0;\n          }\n        }\n      }\n    }\n  }\n}\n\n\n//\n// Columns\n//\n\n.card-columns {\n  .card {\n    margin-bottom: $card-columns-margin;\n  }\n\n  @include media-breakpoint-up(sm) {\n    column-count: $card-columns-count;\n    column-gap: $card-columns-gap;\n    orphans: 1;\n    widows: 1;\n\n    .card {\n      display: inline-block; // Don't let them vertically span multiple columns\n      width: 100%; // Don't let their width change\n    }\n  }\n}\n\n\n//\n// Accordion\n//\n\n.accordion {\n  overflow-anchor: none;\n\n  > .card {\n    overflow: hidden;\n\n    &:not(:last-of-type) {\n      border-bottom: 0;\n      @include border-bottom-radius(0);\n    }\n\n    &:not(:first-of-type) {\n      @include border-top-radius(0);\n    }\n\n    > .card-header {\n      @include border-radius(0);\n      margin-bottom: -$card-border-width;\n    }\n  }\n}\n",".breadcrumb {\n  display: flex;\n  flex-wrap: wrap;\n  padding: $breadcrumb-padding-y $breadcrumb-padding-x;\n  margin-bottom: $breadcrumb-margin-bottom;\n  @include font-size($breadcrumb-font-size);\n  list-style: none;\n  background-color: $breadcrumb-bg;\n  @include border-radius($breadcrumb-border-radius);\n}\n\n.breadcrumb-item {\n  // The separator between breadcrumbs (by default, a forward-slash: \"/\")\n  + .breadcrumb-item {\n    padding-left: $breadcrumb-item-padding;\n\n    &::before {\n      float: left; // Suppress inline spacings and underlining of the separator\n      padding-right: $breadcrumb-item-padding;\n      color: $breadcrumb-divider-color;\n      content: escape-svg($breadcrumb-divider);\n    }\n  }\n\n  // IE9-11 hack to properly handle hyperlink underlines for breadcrumbs built\n  // without `<ul>`s. The `::before` pseudo-element generates an element\n  // *within* the .breadcrumb-item and thereby inherits the `text-decoration`.\n  //\n  // To trick IE into suppressing the underline, we give the pseudo-element an\n  // underline and then immediately remove it.\n  + .breadcrumb-item:hover::before {\n    text-decoration: underline;\n  }\n  // stylelint-disable-next-line no-duplicate-selectors\n  + .breadcrumb-item:hover::before {\n    text-decoration: none;\n  }\n\n  &.active {\n    color: $breadcrumb-active-color;\n  }\n}\n",".pagination {\n  display: flex;\n  @include list-unstyled();\n  @include border-radius();\n}\n\n.page-link {\n  position: relative;\n  display: block;\n  padding: $pagination-padding-y $pagination-padding-x;\n  margin-left: -$pagination-border-width;\n  line-height: $pagination-line-height;\n  color: $pagination-color;\n  text-decoration: if($link-decoration == none, null, none);\n  background-color: $pagination-bg;\n  border: $pagination-border-width solid $pagination-border-color;\n\n  &:hover {\n    z-index: 2;\n    color: $pagination-hover-color;\n    text-decoration: none;\n    background-color: $pagination-hover-bg;\n    border-color: $pagination-hover-border-color;\n  }\n\n  &:focus {\n    z-index: 3;\n    outline: $pagination-focus-outline;\n    box-shadow: $pagination-focus-box-shadow;\n  }\n}\n\n.page-item {\n  &:first-child {\n    .page-link {\n      margin-left: 0;\n      @include border-left-radius($border-radius);\n    }\n  }\n  &:last-child {\n    .page-link {\n      @include border-right-radius($border-radius);\n    }\n  }\n\n  &.active .page-link {\n    z-index: 3;\n    color: $pagination-active-color;\n    background-color: $pagination-active-bg;\n    border-color: $pagination-active-border-color;\n  }\n\n  &.disabled .page-link {\n    color: $pagination-disabled-color;\n    pointer-events: none;\n    // Opinionated: remove the \"hand\" cursor set previously for .page-link\n    cursor: auto;\n    background-color: $pagination-disabled-bg;\n    border-color: $pagination-disabled-border-color;\n  }\n}\n\n\n//\n// Sizing\n//\n\n.pagination-lg {\n  @include pagination-size($pagination-padding-y-lg, $pagination-padding-x-lg, $font-size-lg, $line-height-lg, $pagination-border-radius-lg);\n}\n\n.pagination-sm {\n  @include pagination-size($pagination-padding-y-sm, $pagination-padding-x-sm, $font-size-sm, $line-height-sm, $pagination-border-radius-sm);\n}\n","// Pagination\n\n@mixin pagination-size($padding-y, $padding-x, $font-size, $line-height, $border-radius) {\n  .page-link {\n    padding: $padding-y $padding-x;\n    @include font-size($font-size);\n    line-height: $line-height;\n  }\n\n  .page-item {\n    &:first-child {\n      .page-link {\n        @include border-left-radius($border-radius);\n      }\n    }\n    &:last-child {\n      .page-link {\n        @include border-right-radius($border-radius);\n      }\n    }\n  }\n}\n","// Base class\n//\n// Requires one of the contextual, color modifier classes for `color` and\n// `background-color`.\n\n.badge {\n  display: inline-block;\n  padding: $badge-padding-y $badge-padding-x;\n  @include font-size($badge-font-size);\n  font-weight: $badge-font-weight;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  @include border-radius($badge-border-radius);\n  @include transition($badge-transition);\n\n  @at-root a#{&} {\n    @include hover-focus() {\n      text-decoration: none;\n    }\n  }\n\n  // Empty badges collapse automatically\n  &:empty {\n    display: none;\n  }\n}\n\n// Quick fix for badges in buttons\n.btn .badge {\n  position: relative;\n  top: -1px;\n}\n\n// Pill badges\n//\n// Make them extra rounded with a modifier to replace v3's badges.\n\n.badge-pill {\n  padding-right: $badge-pill-padding-x;\n  padding-left: $badge-pill-padding-x;\n  @include border-radius($badge-pill-border-radius);\n}\n\n// Colors\n//\n// Contextual variations (linked badges get darker on :hover).\n\n@each $color, $value in $theme-colors {\n  .badge-#{$color} {\n    @include badge-variant($value);\n  }\n}\n","@mixin badge-variant($bg) {\n  color: color-yiq($bg);\n  background-color: $bg;\n\n  @at-root a#{&} {\n    @include hover-focus() {\n      color: color-yiq($bg);\n      background-color: darken($bg, 10%);\n    }\n\n    &:focus,\n    &.focus {\n      outline: 0;\n      box-shadow: 0 0 0 $badge-focus-width rgba($bg, .5);\n    }\n  }\n}\n",".jumbotron {\n  padding: $jumbotron-padding ($jumbotron-padding / 2);\n  margin-bottom: $jumbotron-padding;\n  color: $jumbotron-color;\n  background-color: $jumbotron-bg;\n  @include border-radius($border-radius-lg);\n\n  @include media-breakpoint-up(sm) {\n    padding: ($jumbotron-padding * 2) $jumbotron-padding;\n  }\n}\n\n.jumbotron-fluid {\n  padding-right: 0;\n  padding-left: 0;\n  @include border-radius(0);\n}\n","//\n// Base styles\n//\n\n.alert {\n  position: relative;\n  padding: $alert-padding-y $alert-padding-x;\n  margin-bottom: $alert-margin-bottom;\n  border: $alert-border-width solid transparent;\n  @include border-radius($alert-border-radius);\n}\n\n// Headings for larger alerts\n.alert-heading {\n  // Specified to prevent conflicts of changing $headings-color\n  color: inherit;\n}\n\n// Provide class for links that match alerts\n.alert-link {\n  font-weight: $alert-link-font-weight;\n}\n\n\n// Dismissible alerts\n//\n// Expand the right padding and account for the close button's positioning.\n\n.alert-dismissible {\n  padding-right: $close-font-size + $alert-padding-x * 2;\n\n  // Adjust close link position\n  .close {\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: 2;\n    padding: $alert-padding-y $alert-padding-x;\n    color: inherit;\n  }\n}\n\n\n// Alternate styles\n//\n// Generate contextual modifier classes for colorizing the alert.\n\n@each $color, $value in $theme-colors {\n  .alert-#{$color} {\n    @include alert-variant(theme-color-level($color, $alert-bg-level), theme-color-level($color, $alert-border-level), theme-color-level($color, $alert-color-level));\n  }\n}\n","@mixin alert-variant($background, $border, $color) {\n  color: $color;\n  @include gradient-bg($background);\n  border-color: $border;\n\n  hr {\n    border-top-color: darken($border, 5%);\n  }\n\n  .alert-link {\n    color: darken($color, 10%);\n  }\n}\n","// Disable animation if transitions are disabled\n@if $enable-transitions {\n  @keyframes progress-bar-stripes {\n    from { background-position: $progress-height 0; }\n    to { background-position: 0 0; }\n  }\n}\n\n.progress {\n  display: flex;\n  height: $progress-height;\n  overflow: hidden; // force rounded corners by cropping it\n  line-height: 0;\n  @include font-size($progress-font-size);\n  background-color: $progress-bg;\n  @include border-radius($progress-border-radius);\n  @include box-shadow($progress-box-shadow);\n}\n\n.progress-bar {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n  color: $progress-bar-color;\n  text-align: center;\n  white-space: nowrap;\n  background-color: $progress-bar-bg;\n  @include transition($progress-bar-transition);\n}\n\n.progress-bar-striped {\n  @include gradient-striped();\n  background-size: $progress-height $progress-height;\n}\n\n@if $enable-transitions {\n  .progress-bar-animated {\n    animation: $progress-bar-animation-timing progress-bar-stripes;\n\n    @if $enable-prefers-reduced-motion-media-query {\n      @media (prefers-reduced-motion: reduce) {\n        animation: none;\n      }\n    }\n  }\n}\n",".media {\n  display: flex;\n  align-items: flex-start;\n}\n\n.media-body {\n  flex: 1;\n}\n","// Base class\n//\n// Easily usable on <ul>, <ol>, or <div>.\n\n.list-group {\n  display: flex;\n  flex-direction: column;\n\n  // No need to set list-style: none; since .list-group-item is block level\n  padding-left: 0; // reset padding because ul and ol\n  margin-bottom: 0;\n  @include border-radius($list-group-border-radius);\n}\n\n\n// Interactive list items\n//\n// Use anchor or button elements instead of `li`s or `div`s to create interactive\n// list items. Includes an extra `.active` modifier class for selected items.\n\n.list-group-item-action {\n  width: 100%; // For `<button>`s (anchors become 100% by default though)\n  color: $list-group-action-color;\n  text-align: inherit; // For `<button>`s (anchors inherit)\n\n  // Hover state\n  @include hover-focus() {\n    z-index: 1; // Place hover/focus items above their siblings for proper border styling\n    color: $list-group-action-hover-color;\n    text-decoration: none;\n    background-color: $list-group-hover-bg;\n  }\n\n  &:active {\n    color: $list-group-action-active-color;\n    background-color: $list-group-action-active-bg;\n  }\n}\n\n\n// Individual list items\n//\n// Use on `li`s or `div`s within the `.list-group` parent.\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: $list-group-item-padding-y $list-group-item-padding-x;\n  color: $list-group-color;\n  text-decoration: if($link-decoration == none, null, none);\n  background-color: $list-group-bg;\n  border: $list-group-border-width solid $list-group-border-color;\n\n  &:first-child {\n    @include border-top-radius(inherit);\n  }\n\n  &:last-child {\n    @include border-bottom-radius(inherit);\n  }\n\n  &.disabled,\n  &:disabled {\n    color: $list-group-disabled-color;\n    pointer-events: none;\n    background-color: $list-group-disabled-bg;\n  }\n\n  // Include both here for `<a>`s and `<button>`s\n  &.active {\n    z-index: 2; // Place active items above their siblings for proper border styling\n    color: $list-group-active-color;\n    background-color: $list-group-active-bg;\n    border-color: $list-group-active-border-color;\n  }\n\n  & + & {\n    border-top-width: 0;\n\n    &.active {\n      margin-top: -$list-group-border-width;\n      border-top-width: $list-group-border-width;\n    }\n  }\n}\n\n\n// Horizontal\n//\n// Change the layout of list group items from vertical (default) to horizontal.\n\n@each $breakpoint in map-keys($grid-breakpoints) {\n  @include media-breakpoint-up($breakpoint) {\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n    .list-group-horizontal#{$infix} {\n      flex-direction: row;\n\n      > .list-group-item {\n        &:first-child {\n          @include border-bottom-left-radius($list-group-border-radius);\n          @include border-top-right-radius(0);\n        }\n\n        &:last-child {\n          @include border-top-right-radius($list-group-border-radius);\n          @include border-bottom-left-radius(0);\n        }\n\n        &.active {\n          margin-top: 0;\n        }\n\n        + .list-group-item {\n          border-top-width: $list-group-border-width;\n          border-left-width: 0;\n\n          &.active {\n            margin-left: -$list-group-border-width;\n            border-left-width: $list-group-border-width;\n          }\n        }\n      }\n    }\n  }\n}\n\n\n// Flush list items\n//\n// Remove borders and border-radius to keep list group items edge-to-edge. Most\n// useful within other components (e.g., cards).\n\n.list-group-flush {\n  @include border-radius(0);\n\n  > .list-group-item {\n    border-width: 0 0 $list-group-border-width;\n\n    &:last-child {\n      border-bottom-width: 0;\n    }\n  }\n}\n\n\n// Contextual variants\n//\n// Add modifier classes to change text and background color on individual items.\n// Organizationally, this must come after the `:hover` states.\n\n@each $color, $value in $theme-colors {\n  @include list-group-item-variant($color, theme-color-level($color, -9), theme-color-level($color, 6));\n}\n","// List Groups\n\n@mixin list-group-item-variant($state, $background, $color) {\n  .list-group-item-#{$state} {\n    color: $color;\n    background-color: $background;\n\n    &.list-group-item-action {\n      @include hover-focus() {\n        color: $color;\n        background-color: darken($background, 5%);\n      }\n\n      &.active {\n        color: $white;\n        background-color: $color;\n        border-color: $color;\n      }\n    }\n  }\n}\n",".close {\n  float: right;\n  @include font-size($close-font-size);\n  font-weight: $close-font-weight;\n  line-height: 1;\n  color: $close-color;\n  text-shadow: $close-text-shadow;\n  opacity: .5;\n\n  // Override <a>'s hover style\n  @include hover() {\n    color: $close-color;\n    text-decoration: none;\n  }\n\n  &:not(:disabled):not(.disabled) {\n    @include hover-focus() {\n      opacity: .75;\n    }\n  }\n}\n\n// Additional properties for button version\n// iOS requires the button element instead of an anchor tag.\n// If you want the anchor version, it requires `href=\"#\"`.\n// See https://developer.mozilla.org/en-US/docs/Web/Events/click#Safari_Mobile\n\n// stylelint-disable-next-line selector-no-qualifying-type\nbutton.close {\n  padding: 0;\n  background-color: transparent;\n  border: 0;\n}\n\n// Future-proof disabling of clicks on `<a>` elements\n\n// stylelint-disable-next-line selector-no-qualifying-type\na.close.disabled {\n  pointer-events: none;\n}\n",".toast {\n  // Prevents from shrinking in IE11, when in a flex container\n  // See https://github.com/twbs/bootstrap/issues/28341\n  flex-basis: $toast-max-width;\n  max-width: $toast-max-width;\n  @include font-size($toast-font-size);\n  color: $toast-color;\n  background-color: $toast-background-color;\n  background-clip: padding-box;\n  border: $toast-border-width solid $toast-border-color;\n  box-shadow: $toast-box-shadow;\n  opacity: 0;\n  @include border-radius($toast-border-radius);\n\n  &:not(:last-child) {\n    margin-bottom: $toast-padding-x;\n  }\n\n  &.showing {\n    opacity: 1;\n  }\n\n  &.show {\n    display: block;\n    opacity: 1;\n  }\n\n  &.hide {\n    display: none;\n  }\n}\n\n.toast-header {\n  display: flex;\n  align-items: center;\n  padding: $toast-padding-y $toast-padding-x;\n  color: $toast-header-color;\n  background-color: $toast-header-background-color;\n  background-clip: padding-box;\n  border-bottom: $toast-border-width solid $toast-header-border-color;\n  @include border-top-radius(subtract($toast-border-radius, $toast-border-width));\n}\n\n.toast-body {\n  padding: $toast-padding-x; // apply to both vertical and horizontal\n}\n","// .modal-open      - body class for killing the scroll\n// .modal           - container to scroll within\n// .modal-dialog    - positioning shell for the actual modal\n// .modal-content   - actual modal w/ bg and corners and stuff\n\n\n.modal-open {\n  // Kill the scroll on the body\n  overflow: hidden;\n\n  .modal {\n    overflow-x: hidden;\n    overflow-y: auto;\n  }\n}\n\n// Container that the modal scrolls within\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: $zindex-modal;\n  display: none;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  // Prevent Chrome on Windows from adding a focus outline. For details, see\n  // https://github.com/twbs/bootstrap/pull/10951.\n  outline: 0;\n  // We deliberately don't use `-webkit-overflow-scrolling: touch;` due to a\n  // gnarly iOS Safari bug: https://bugs.webkit.org/show_bug.cgi?id=158342\n  // See also https://github.com/twbs/bootstrap/issues/17695\n}\n\n// Shell div to position the modal with bottom padding\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: $modal-dialog-margin;\n  // allow clicks to pass through for custom click handling to close modal\n  pointer-events: none;\n\n  // When fading in the modal, animate it to slide down\n  .modal.fade & {\n    @include transition($modal-transition);\n    transform: $modal-fade-transform;\n  }\n  .modal.show & {\n    transform: $modal-show-transform;\n  }\n\n  // When trying to close, animate focus to scale\n  .modal.modal-static & {\n    transform: $modal-scale-transform;\n  }\n}\n\n.modal-dialog-scrollable {\n  display: flex; // IE10/11\n  max-height: subtract(100%, $modal-dialog-margin * 2);\n\n  .modal-content {\n    max-height: subtract(100vh, $modal-dialog-margin * 2); // IE10/11\n    overflow: hidden;\n  }\n\n  .modal-header,\n  .modal-footer {\n    flex-shrink: 0;\n  }\n\n  .modal-body {\n    overflow-y: auto;\n  }\n}\n\n.modal-dialog-centered {\n  display: flex;\n  align-items: center;\n  min-height: subtract(100%, $modal-dialog-margin * 2);\n\n  // Ensure `modal-dialog-centered` extends the full height of the view (IE10/11)\n  &::before {\n    display: block; // IE10\n    height: subtract(100vh, $modal-dialog-margin * 2);\n    height: min-content; // Reset height to 0 except on IE\n    content: \"\";\n  }\n\n  // Ensure `.modal-body` shows scrollbar (IE10/11)\n  &.modal-dialog-scrollable {\n    flex-direction: column;\n    justify-content: center;\n    height: 100%;\n\n    .modal-content {\n      max-height: none;\n    }\n\n    &::before {\n      content: none;\n    }\n  }\n}\n\n// Actual modal\n.modal-content {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%; // Ensure `.modal-content` extends the full width of the parent `.modal-dialog`\n  // counteract the pointer-events: none; in the .modal-dialog\n  color: $modal-content-color;\n  pointer-events: auto;\n  background-color: $modal-content-bg;\n  background-clip: padding-box;\n  border: $modal-content-border-width solid $modal-content-border-color;\n  @include border-radius($modal-content-border-radius);\n  @include box-shadow($modal-content-box-shadow-xs);\n  // Remove focus outline from opened modal\n  outline: 0;\n}\n\n// Modal background\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: $zindex-modal-backdrop;\n  width: 100vw;\n  height: 100vh;\n  background-color: $modal-backdrop-bg;\n\n  // Fade for backdrop\n  &.fade { opacity: 0; }\n  &.show { opacity: $modal-backdrop-opacity; }\n}\n\n// Modal header\n// Top section of the modal w/ title and dismiss\n.modal-header {\n  display: flex;\n  align-items: flex-start; // so the close btn always stays on the upper right corner\n  justify-content: space-between; // Put modal header elements (title and dismiss) on opposite ends\n  padding: $modal-header-padding;\n  border-bottom: $modal-header-border-width solid $modal-header-border-color;\n  @include border-top-radius($modal-content-inner-border-radius);\n\n  .close {\n    padding: $modal-header-padding;\n    // auto on the left force icon to the right even when there is no .modal-title\n    margin: (-$modal-header-padding-y) (-$modal-header-padding-x) (-$modal-header-padding-y) auto;\n  }\n}\n\n// Title text within header\n.modal-title {\n  margin-bottom: 0;\n  line-height: $modal-title-line-height;\n}\n\n// Modal body\n// Where all modal content resides (sibling of .modal-header and .modal-footer)\n.modal-body {\n  position: relative;\n  // Enable `flex-grow: 1` so that the body take up as much space as possible\n  // when there should be a fixed height on `.modal-dialog`.\n  flex: 1 1 auto;\n  padding: $modal-inner-padding;\n}\n\n// Footer (for actions)\n.modal-footer {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center; // vertically center\n  justify-content: flex-end; // Right align buttons with flex property because text-align doesn't work on flex items\n  padding: $modal-inner-padding - $modal-footer-margin-between / 2;\n  border-top: $modal-footer-border-width solid $modal-footer-border-color;\n  @include border-bottom-radius($modal-content-inner-border-radius);\n\n  // Place margin between footer elements\n  // This solution is far from ideal because of the universal selector usage,\n  // but is needed to fix https://github.com/twbs/bootstrap/issues/24800\n  > * {\n    margin: $modal-footer-margin-between / 2;\n  }\n}\n\n// Measure scrollbar width for padding body during modal show/hide\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n\n// Scale up the modal\n@include media-breakpoint-up(sm) {\n  // Automatically set modal's width for larger viewports\n  .modal-dialog {\n    max-width: $modal-md;\n    margin: $modal-dialog-margin-y-sm-up auto;\n  }\n\n  .modal-dialog-scrollable {\n    max-height: subtract(100%, $modal-dialog-margin-y-sm-up * 2);\n\n    .modal-content {\n      max-height: subtract(100vh, $modal-dialog-margin-y-sm-up * 2);\n    }\n  }\n\n  .modal-dialog-centered {\n    min-height: subtract(100%, $modal-dialog-margin-y-sm-up * 2);\n\n    &::before {\n      height: subtract(100vh, $modal-dialog-margin-y-sm-up * 2);\n      height: min-content;\n    }\n  }\n\n  .modal-content {\n    @include box-shadow($modal-content-box-shadow-sm-up);\n  }\n\n  .modal-sm { max-width: $modal-sm; }\n}\n\n@include media-breakpoint-up(lg) {\n  .modal-lg,\n  .modal-xl {\n    max-width: $modal-lg;\n  }\n}\n\n@include media-breakpoint-up(xl) {\n  .modal-xl { max-width: $modal-xl; }\n}\n","// Base class\n.tooltip {\n  position: absolute;\n  z-index: $zindex-tooltip;\n  display: block;\n  margin: $tooltip-margin;\n  // Our parent element can be arbitrary since tooltips are by default inserted as a sibling of their target element.\n  // So reset our font and text properties to avoid inheriting weird values.\n  @include reset-text();\n  @include font-size($tooltip-font-size);\n  // Allow breaking very long words so they don't overflow the tooltip's bounds\n  word-wrap: break-word;\n  opacity: 0;\n\n  &.show { opacity: $tooltip-opacity; }\n\n  .arrow {\n    position: absolute;\n    display: block;\n    width: $tooltip-arrow-width;\n    height: $tooltip-arrow-height;\n\n    &::before {\n      position: absolute;\n      content: \"\";\n      border-color: transparent;\n      border-style: solid;\n    }\n  }\n}\n\n.bs-tooltip-top {\n  padding: $tooltip-arrow-height 0;\n\n  .arrow {\n    bottom: 0;\n\n    &::before {\n      top: 0;\n      border-width: $tooltip-arrow-height ($tooltip-arrow-width / 2) 0;\n      border-top-color: $tooltip-arrow-color;\n    }\n  }\n}\n\n.bs-tooltip-right {\n  padding: 0 $tooltip-arrow-height;\n\n  .arrow {\n    left: 0;\n    width: $tooltip-arrow-height;\n    height: $tooltip-arrow-width;\n\n    &::before {\n      right: 0;\n      border-width: ($tooltip-arrow-width / 2) $tooltip-arrow-height ($tooltip-arrow-width / 2) 0;\n      border-right-color: $tooltip-arrow-color;\n    }\n  }\n}\n\n.bs-tooltip-bottom {\n  padding: $tooltip-arrow-height 0;\n\n  .arrow {\n    top: 0;\n\n    &::before {\n      bottom: 0;\n      border-width: 0 ($tooltip-arrow-width / 2) $tooltip-arrow-height;\n      border-bottom-color: $tooltip-arrow-color;\n    }\n  }\n}\n\n.bs-tooltip-left {\n  padding: 0 $tooltip-arrow-height;\n\n  .arrow {\n    right: 0;\n    width: $tooltip-arrow-height;\n    height: $tooltip-arrow-width;\n\n    &::before {\n      left: 0;\n      border-width: ($tooltip-arrow-width / 2) 0 ($tooltip-arrow-width / 2) $tooltip-arrow-height;\n      border-left-color: $tooltip-arrow-color;\n    }\n  }\n}\n\n.bs-tooltip-auto {\n  &[x-placement^=\"top\"] {\n    @extend .bs-tooltip-top;\n  }\n  &[x-placement^=\"right\"] {\n    @extend .bs-tooltip-right;\n  }\n  &[x-placement^=\"bottom\"] {\n    @extend .bs-tooltip-bottom;\n  }\n  &[x-placement^=\"left\"] {\n    @extend .bs-tooltip-left;\n  }\n}\n\n// Wrapper for the tooltip content\n.tooltip-inner {\n  max-width: $tooltip-max-width;\n  padding: $tooltip-padding-y $tooltip-padding-x;\n  color: $tooltip-color;\n  text-align: center;\n  background-color: $tooltip-bg;\n  @include border-radius($tooltip-border-radius);\n}\n","@mixin reset-text() {\n  font-family: $font-family-base;\n  // We deliberately do NOT reset font-size or word-wrap.\n  font-style: normal;\n  font-weight: $font-weight-normal;\n  line-height: $line-height-base;\n  text-align: left; // Fallback for where `start` is not supported\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n}\n",".popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: $zindex-popover;\n  display: block;\n  max-width: $popover-max-width;\n  // Our parent element can be arbitrary since tooltips are by default inserted as a sibling of their target element.\n  // So reset our font and text properties to avoid inheriting weird values.\n  @include reset-text();\n  @include font-size($popover-font-size);\n  // Allow breaking very long words so they don't overflow the popover's bounds\n  word-wrap: break-word;\n  background-color: $popover-bg;\n  background-clip: padding-box;\n  border: $popover-border-width solid $popover-border-color;\n  @include border-radius($popover-border-radius);\n  @include box-shadow($popover-box-shadow);\n\n  .arrow {\n    position: absolute;\n    display: block;\n    width: $popover-arrow-width;\n    height: $popover-arrow-height;\n    margin: 0 $popover-border-radius;\n\n    &::before,\n    &::after {\n      position: absolute;\n      display: block;\n      content: \"\";\n      border-color: transparent;\n      border-style: solid;\n    }\n  }\n}\n\n.bs-popover-top {\n  margin-bottom: $popover-arrow-height;\n\n  > .arrow {\n    bottom: subtract(-$popover-arrow-height, $popover-border-width);\n\n    &::before {\n      bottom: 0;\n      border-width: $popover-arrow-height ($popover-arrow-width / 2) 0;\n      border-top-color: $popover-arrow-outer-color;\n    }\n\n    &::after {\n      bottom: $popover-border-width;\n      border-width: $popover-arrow-height ($popover-arrow-width / 2) 0;\n      border-top-color: $popover-arrow-color;\n    }\n  }\n}\n\n.bs-popover-right {\n  margin-left: $popover-arrow-height;\n\n  > .arrow {\n    left: subtract(-$popover-arrow-height, $popover-border-width);\n    width: $popover-arrow-height;\n    height: $popover-arrow-width;\n    margin: $popover-border-radius 0; // make sure the arrow does not touch the popover's rounded corners\n\n    &::before {\n      left: 0;\n      border-width: ($popover-arrow-width / 2) $popover-arrow-height ($popover-arrow-width / 2) 0;\n      border-right-color: $popover-arrow-outer-color;\n    }\n\n    &::after {\n      left: $popover-border-width;\n      border-width: ($popover-arrow-width / 2) $popover-arrow-height ($popover-arrow-width / 2) 0;\n      border-right-color: $popover-arrow-color;\n    }\n  }\n}\n\n.bs-popover-bottom {\n  margin-top: $popover-arrow-height;\n\n  > .arrow {\n    top: subtract(-$popover-arrow-height, $popover-border-width);\n\n    &::before {\n      top: 0;\n      border-width: 0 ($popover-arrow-width / 2) $popover-arrow-height ($popover-arrow-width / 2);\n      border-bottom-color: $popover-arrow-outer-color;\n    }\n\n    &::after {\n      top: $popover-border-width;\n      border-width: 0 ($popover-arrow-width / 2) $popover-arrow-height ($popover-arrow-width / 2);\n      border-bottom-color: $popover-arrow-color;\n    }\n  }\n\n  // This will remove the popover-header's border just below the arrow\n  .popover-header::before {\n    position: absolute;\n    top: 0;\n    left: 50%;\n    display: block;\n    width: $popover-arrow-width;\n    margin-left: -$popover-arrow-width / 2;\n    content: \"\";\n    border-bottom: $popover-border-width solid $popover-header-bg;\n  }\n}\n\n.bs-popover-left {\n  margin-right: $popover-arrow-height;\n\n  > .arrow {\n    right: subtract(-$popover-arrow-height, $popover-border-width);\n    width: $popover-arrow-height;\n    height: $popover-arrow-width;\n    margin: $popover-border-radius 0; // make sure the arrow does not touch the popover's rounded corners\n\n    &::before {\n      right: 0;\n      border-width: ($popover-arrow-width / 2) 0 ($popover-arrow-width / 2) $popover-arrow-height;\n      border-left-color: $popover-arrow-outer-color;\n    }\n\n    &::after {\n      right: $popover-border-width;\n      border-width: ($popover-arrow-width / 2) 0 ($popover-arrow-width / 2) $popover-arrow-height;\n      border-left-color: $popover-arrow-color;\n    }\n  }\n}\n\n.bs-popover-auto {\n  &[x-placement^=\"top\"] {\n    @extend .bs-popover-top;\n  }\n  &[x-placement^=\"right\"] {\n    @extend .bs-popover-right;\n  }\n  &[x-placement^=\"bottom\"] {\n    @extend .bs-popover-bottom;\n  }\n  &[x-placement^=\"left\"] {\n    @extend .bs-popover-left;\n  }\n}\n\n\n// Offset the popover to account for the popover arrow\n.popover-header {\n  padding: $popover-header-padding-y $popover-header-padding-x;\n  margin-bottom: 0; // Reset the default from Reboot\n  @include font-size($font-size-base);\n  color: $popover-header-color;\n  background-color: $popover-header-bg;\n  border-bottom: $popover-border-width solid darken($popover-header-bg, 5%);\n  @include border-top-radius($popover-inner-border-radius);\n\n  &:empty {\n    display: none;\n  }\n}\n\n.popover-body {\n  padding: $popover-body-padding-y $popover-body-padding-x;\n  color: $popover-body-color;\n}\n","// Notes on the classes:\n//\n// 1. .carousel.pointer-event should ideally be pan-y (to allow for users to scroll vertically)\n//    even when their scroll action started on a carousel, but for compatibility (with Firefox)\n//    we're preventing all actions instead\n// 2. The .carousel-item-left and .carousel-item-right is used to indicate where\n//    the active slide is heading.\n// 3. .active.carousel-item is the current slide.\n// 4. .active.carousel-item-left and .active.carousel-item-right is the current\n//    slide in its in-transition state. Only one of these occurs at a time.\n// 5. .carousel-item-next.carousel-item-left and .carousel-item-prev.carousel-item-right\n//    is the upcoming slide in transition.\n\n.carousel {\n  position: relative;\n}\n\n.carousel.pointer-event {\n  touch-action: pan-y;\n}\n\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  @include clearfix();\n}\n\n.carousel-item {\n  position: relative;\n  display: none;\n  float: left;\n  width: 100%;\n  margin-right: -100%;\n  backface-visibility: hidden;\n  @include transition($carousel-transition);\n}\n\n.carousel-item.active,\n.carousel-item-next,\n.carousel-item-prev {\n  display: block;\n}\n\n.carousel-item-next:not(.carousel-item-left),\n.active.carousel-item-right {\n  transform: translateX(100%);\n}\n\n.carousel-item-prev:not(.carousel-item-right),\n.active.carousel-item-left {\n  transform: translateX(-100%);\n}\n\n\n//\n// Alternate transitions\n//\n\n.carousel-fade {\n  .carousel-item {\n    opacity: 0;\n    transition-property: opacity;\n    transform: none;\n  }\n\n  .carousel-item.active,\n  .carousel-item-next.carousel-item-left,\n  .carousel-item-prev.carousel-item-right {\n    z-index: 1;\n    opacity: 1;\n  }\n\n  .active.carousel-item-left,\n  .active.carousel-item-right {\n    z-index: 0;\n    opacity: 0;\n    @include transition(opacity 0s $carousel-transition-duration);\n  }\n}\n\n\n//\n// Left/right controls for nav\n//\n\n.carousel-control-prev,\n.carousel-control-next {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  // Use flex for alignment (1-3)\n  display: flex; // 1. allow flex styles\n  align-items: center; // 2. vertically center contents\n  justify-content: center; // 3. horizontally center contents\n  width: $carousel-control-width;\n  color: $carousel-control-color;\n  text-align: center;\n  opacity: $carousel-control-opacity;\n  @include transition($carousel-control-transition);\n\n  // Hover/focus state\n  @include hover-focus() {\n    color: $carousel-control-color;\n    text-decoration: none;\n    outline: 0;\n    opacity: $carousel-control-hover-opacity;\n  }\n}\n.carousel-control-prev {\n  left: 0;\n  @if $enable-gradients {\n    background-image: linear-gradient(90deg, rgba($black, .25), rgba($black, .001));\n  }\n}\n.carousel-control-next {\n  right: 0;\n  @if $enable-gradients {\n    background-image: linear-gradient(270deg, rgba($black, .25), rgba($black, .001));\n  }\n}\n\n// Icons for within\n.carousel-control-prev-icon,\n.carousel-control-next-icon {\n  display: inline-block;\n  width: $carousel-control-icon-width;\n  height: $carousel-control-icon-width;\n  background: 50% / 100% 100% no-repeat;\n}\n.carousel-control-prev-icon {\n  background-image: escape-svg($carousel-control-prev-icon-bg);\n}\n.carousel-control-next-icon {\n  background-image: escape-svg($carousel-control-next-icon-bg);\n}\n\n\n// Optional indicator pips\n//\n// Add an ordered list with the following class and add a list item for each\n// slide your carousel holds.\n\n.carousel-indicators {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 15;\n  display: flex;\n  justify-content: center;\n  padding-left: 0; // override <ol> default\n  // Use the .carousel-control's width as margin so we don't overlay those\n  margin-right: $carousel-control-width;\n  margin-left: $carousel-control-width;\n  list-style: none;\n\n  li {\n    box-sizing: content-box;\n    flex: 0 1 auto;\n    width: $carousel-indicator-width;\n    height: $carousel-indicator-height;\n    margin-right: $carousel-indicator-spacer;\n    margin-left: $carousel-indicator-spacer;\n    text-indent: -999px;\n    cursor: pointer;\n    background-color: $carousel-indicator-active-bg;\n    background-clip: padding-box;\n    // Use transparent borders to increase the hit area by 10px on top and bottom.\n    border-top: $carousel-indicator-hit-area-height solid transparent;\n    border-bottom: $carousel-indicator-hit-area-height solid transparent;\n    opacity: .5;\n    @include transition($carousel-indicator-transition);\n  }\n\n  .active {\n    opacity: 1;\n  }\n}\n\n\n// Optional captions\n//\n//\n\n.carousel-caption {\n  position: absolute;\n  right: (100% - $carousel-caption-width) / 2;\n  bottom: 20px;\n  left: (100% - $carousel-caption-width) / 2;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: $carousel-caption-color;\n  text-align: center;\n}\n","@mixin clearfix() {\n  &::after {\n    display: block;\n    clear: both;\n    content: \"\";\n  }\n}\n","//\n// Rotating border\n//\n\n@keyframes spinner-border {\n  to { transform: rotate(360deg); }\n}\n\n.spinner-border {\n  display: inline-block;\n  width: $spinner-width;\n  height: $spinner-height;\n  vertical-align: text-bottom;\n  border: $spinner-border-width solid currentColor;\n  border-right-color: transparent;\n  // stylelint-disable-next-line property-disallowed-list\n  border-radius: 50%;\n  animation: .75s linear infinite spinner-border;\n}\n\n.spinner-border-sm {\n  width: $spinner-width-sm;\n  height: $spinner-height-sm;\n  border-width: $spinner-border-width-sm;\n}\n\n//\n// Growing circle\n//\n\n@keyframes spinner-grow {\n  0% {\n    transform: scale(0);\n  }\n  50% {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n.spinner-grow {\n  display: inline-block;\n  width: $spinner-width;\n  height: $spinner-height;\n  vertical-align: text-bottom;\n  background-color: currentColor;\n  // stylelint-disable-next-line property-disallowed-list\n  border-radius: 50%;\n  opacity: 0;\n  animation: .75s linear infinite spinner-grow;\n}\n\n.spinner-grow-sm {\n  width: $spinner-width-sm;\n  height: $spinner-height-sm;\n}\n\n@if $enable-prefers-reduced-motion-media-query {\n  @media (prefers-reduced-motion: reduce) {\n    .spinner-border,\n    .spinner-grow {\n      animation-duration: 1.5s;\n    }\n  }\n}\n","// stylelint-disable declaration-no-important\n\n.align-baseline    { vertical-align: baseline !important; } // Browser default\n.align-top         { vertical-align: top !important; }\n.align-middle      { vertical-align: middle !important; }\n.align-bottom      { vertical-align: bottom !important; }\n.align-text-bottom { vertical-align: text-bottom !important; }\n.align-text-top    { vertical-align: text-top !important; }\n","// stylelint-disable declaration-no-important\n\n// Contextual backgrounds\n\n@mixin bg-variant($parent, $color, $ignore-warning: false) {\n  #{$parent} {\n    background-color: $color !important;\n  }\n  a#{$parent},\n  button#{$parent} {\n    @include hover-focus() {\n      background-color: darken($color, 10%) !important;\n    }\n  }\n  @include deprecate(\"The `bg-variant` mixin\", \"v4.4.0\", \"v5\", $ignore-warning);\n}\n\n@mixin bg-gradient-variant($parent, $color, $ignore-warning: false) {\n  #{$parent} {\n    background: $color linear-gradient(180deg, mix($body-bg, $color, 15%), $color) repeat-x !important;\n  }\n  @include deprecate(\"The `bg-gradient-variant` mixin\", \"v4.5.0\", \"v5\", $ignore-warning);\n}\n","// stylelint-disable declaration-no-important\n\n@each $color, $value in $theme-colors {\n  @include bg-variant(\".bg-#{$color}\", $value, true);\n}\n\n@if $enable-gradients {\n  @each $color, $value in $theme-colors {\n    @include bg-gradient-variant(\".bg-gradient-#{$color}\", $value, true);\n  }\n}\n\n.bg-white {\n  background-color: $white !important;\n}\n\n.bg-transparent {\n  background-color: transparent !important;\n}\n","// stylelint-disable property-disallowed-list, declaration-no-important\n\n//\n// Border\n//\n\n.border         { border: $border-width solid $border-color !important; }\n.border-top     { border-top: $border-width solid $border-color !important; }\n.border-right   { border-right: $border-width solid $border-color !important; }\n.border-bottom  { border-bottom: $border-width solid $border-color !important; }\n.border-left    { border-left: $border-width solid $border-color !important; }\n\n.border-0        { border: 0 !important; }\n.border-top-0    { border-top: 0 !important; }\n.border-right-0  { border-right: 0 !important; }\n.border-bottom-0 { border-bottom: 0 !important; }\n.border-left-0   { border-left: 0 !important; }\n\n@each $color, $value in $theme-colors {\n  .border-#{$color} {\n    border-color: $value !important;\n  }\n}\n\n.border-white {\n  border-color: $white !important;\n}\n\n//\n// Border-radius\n//\n\n.rounded-sm {\n  border-radius: $border-radius-sm !important;\n}\n\n.rounded {\n  border-radius: $border-radius !important;\n}\n\n.rounded-top {\n  border-top-left-radius: $border-radius !important;\n  border-top-right-radius: $border-radius !important;\n}\n\n.rounded-right {\n  border-top-right-radius: $border-radius !important;\n  border-bottom-right-radius: $border-radius !important;\n}\n\n.rounded-bottom {\n  border-bottom-right-radius: $border-radius !important;\n  border-bottom-left-radius: $border-radius !important;\n}\n\n.rounded-left {\n  border-top-left-radius: $border-radius !important;\n  border-bottom-left-radius: $border-radius !important;\n}\n\n.rounded-lg {\n  border-radius: $border-radius-lg !important;\n}\n\n.rounded-circle {\n  border-radius: 50% !important;\n}\n\n.rounded-pill {\n  border-radius: $rounded-pill !important;\n}\n\n.rounded-0 {\n  border-radius: 0 !important;\n}\n","// stylelint-disable declaration-no-important\n\n//\n// Utilities for common `display` values\n//\n\n@each $breakpoint in map-keys($grid-breakpoints) {\n  @include media-breakpoint-up($breakpoint) {\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n    @each $value in $displays {\n      .d#{$infix}-#{$value} { display: $value !important; }\n    }\n  }\n}\n\n\n//\n// Utilities for toggling `display` in print\n//\n\n@media print {\n  @each $value in $displays {\n    .d-print-#{$value} { display: $value !important; }\n  }\n}\n","// Credit: Nicolas Gallagher and SUIT CSS.\n\n.embed-responsive {\n  position: relative;\n  display: block;\n  width: 100%;\n  padding: 0;\n  overflow: hidden;\n\n  &::before {\n    display: block;\n    content: \"\";\n  }\n\n  .embed-responsive-item,\n  iframe,\n  embed,\n  object,\n  video {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border: 0;\n  }\n}\n\n@each $embed-responsive-aspect-ratio in $embed-responsive-aspect-ratios {\n  $embed-responsive-aspect-ratio-x: nth($embed-responsive-aspect-ratio, 1);\n  $embed-responsive-aspect-ratio-y: nth($embed-responsive-aspect-ratio, 2);\n\n  .embed-responsive-#{$embed-responsive-aspect-ratio-x}by#{$embed-responsive-aspect-ratio-y} {\n    &::before {\n      padding-top: percentage($embed-responsive-aspect-ratio-y / $embed-responsive-aspect-ratio-x);\n    }\n  }\n}\n","// stylelint-disable declaration-no-important\n\n// Flex variation\n//\n// Custom styles for additional flex alignment options.\n\n@each $breakpoint in map-keys($grid-breakpoints) {\n  @include media-breakpoint-up($breakpoint) {\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n    .flex#{$infix}-row            { flex-direction: row !important; }\n    .flex#{$infix}-column         { flex-direction: column !important; }\n    .flex#{$infix}-row-reverse    { flex-direction: row-reverse !important; }\n    .flex#{$infix}-column-reverse { flex-direction: column-reverse !important; }\n\n    .flex#{$infix}-wrap         { flex-wrap: wrap !important; }\n    .flex#{$infix}-nowrap       { flex-wrap: nowrap !important; }\n    .flex#{$infix}-wrap-reverse { flex-wrap: wrap-reverse !important; }\n    .flex#{$infix}-fill         { flex: 1 1 auto !important; }\n    .flex#{$infix}-grow-0       { flex-grow: 0 !important; }\n    .flex#{$infix}-grow-1       { flex-grow: 1 !important; }\n    .flex#{$infix}-shrink-0     { flex-shrink: 0 !important; }\n    .flex#{$infix}-shrink-1     { flex-shrink: 1 !important; }\n\n    .justify-content#{$infix}-start   { justify-content: flex-start !important; }\n    .justify-content#{$infix}-end     { justify-content: flex-end !important; }\n    .justify-content#{$infix}-center  { justify-content: center !important; }\n    .justify-content#{$infix}-between { justify-content: space-between !important; }\n    .justify-content#{$infix}-around  { justify-content: space-around !important; }\n\n    .align-items#{$infix}-start    { align-items: flex-start !important; }\n    .align-items#{$infix}-end      { align-items: flex-end !important; }\n    .align-items#{$infix}-center   { align-items: center !important; }\n    .align-items#{$infix}-baseline { align-items: baseline !important; }\n    .align-items#{$infix}-stretch  { align-items: stretch !important; }\n\n    .align-content#{$infix}-start   { align-content: flex-start !important; }\n    .align-content#{$infix}-end     { align-content: flex-end !important; }\n    .align-content#{$infix}-center  { align-content: center !important; }\n    .align-content#{$infix}-between { align-content: space-between !important; }\n    .align-content#{$infix}-around  { align-content: space-around !important; }\n    .align-content#{$infix}-stretch { align-content: stretch !important; }\n\n    .align-self#{$infix}-auto     { align-self: auto !important; }\n    .align-self#{$infix}-start    { align-self: flex-start !important; }\n    .align-self#{$infix}-end      { align-self: flex-end !important; }\n    .align-self#{$infix}-center   { align-self: center !important; }\n    .align-self#{$infix}-baseline { align-self: baseline !important; }\n    .align-self#{$infix}-stretch  { align-self: stretch !important; }\n  }\n}\n","// stylelint-disable declaration-no-important\n\n@each $breakpoint in map-keys($grid-breakpoints) {\n  @include media-breakpoint-up($breakpoint) {\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n    .float#{$infix}-left  { float: left !important; }\n    .float#{$infix}-right { float: right !important; }\n    .float#{$infix}-none  { float: none !important; }\n  }\n}\n","// stylelint-disable declaration-no-important\n\n@each $value in $user-selects {\n  .user-select-#{$value} { user-select: $value !important; }\n}\n","// stylelint-disable declaration-no-important\n\n@each $value in $overflows {\n  .overflow-#{$value} { overflow: $value !important; }\n}\n","// stylelint-disable declaration-no-important\n\n// Common values\n@each $position in $positions {\n  .position-#{$position} { position: $position !important; }\n}\n\n// Shorthand\n\n.fixed-top {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: $zindex-fixed;\n}\n\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: $zindex-fixed;\n}\n\n.sticky-top {\n  @supports (position: sticky) {\n    position: sticky;\n    top: 0;\n    z-index: $zindex-sticky;\n  }\n}\n","//\n// Screenreaders\n//\n\n.sr-only {\n  @include sr-only();\n}\n\n.sr-only-focusable {\n  @include sr-only-focusable();\n}\n","// Only display content to screen readers\n//\n// See: https://www.a11yproject.com/posts/2013-01-11-how-to-hide-content/\n// See: https://hugogiraudel.com/2016/10/13/css-hide-and-seek/\n\n@mixin sr-only() {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px; // Fix for https://github.com/twbs/bootstrap/issues/25686\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n\n// Use in conjunction with .sr-only to only display content when it's focused.\n//\n// Useful for \"Skip to main content\" links; see https://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G1\n//\n// Credit: HTML5 Boilerplate\n\n@mixin sr-only-focusable() {\n  &:active,\n  &:focus {\n    position: static;\n    width: auto;\n    height: auto;\n    overflow: visible;\n    clip: auto;\n    white-space: normal;\n  }\n}\n","// stylelint-disable declaration-no-important\n\n.shadow-sm { box-shadow: $box-shadow-sm !important; }\n.shadow { box-shadow: $box-shadow !important; }\n.shadow-lg { box-shadow: $box-shadow-lg !important; }\n.shadow-none { box-shadow: none !important; }\n","// stylelint-disable declaration-no-important\n\n// Width and height\n\n@each $prop, $abbrev in (width: w, height: h) {\n  @each $size, $length in $sizes {\n    .#{$abbrev}-#{$size} { #{$prop}: $length !important; }\n  }\n}\n\n.mw-100 { max-width: 100% !important; }\n.mh-100 { max-height: 100% !important; }\n\n// Viewport additional helpers\n\n.min-vw-100 { min-width: 100vw !important; }\n.min-vh-100 { min-height: 100vh !important; }\n\n.vw-100 { width: 100vw !important; }\n.vh-100 { height: 100vh !important; }\n","// stylelint-disable declaration-no-important\n\n// Margin and Padding\n\n@each $breakpoint in map-keys($grid-breakpoints) {\n  @include media-breakpoint-up($breakpoint) {\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n    @each $prop, $abbrev in (margin: m, padding: p) {\n      @each $size, $length in $spacers {\n        .#{$abbrev}#{$infix}-#{$size} { #{$prop}: $length !important; }\n        .#{$abbrev}t#{$infix}-#{$size},\n        .#{$abbrev}y#{$infix}-#{$size} {\n          #{$prop}-top: $length !important;\n        }\n        .#{$abbrev}r#{$infix}-#{$size},\n        .#{$abbrev}x#{$infix}-#{$size} {\n          #{$prop}-right: $length !important;\n        }\n        .#{$abbrev}b#{$infix}-#{$size},\n        .#{$abbrev}y#{$infix}-#{$size} {\n          #{$prop}-bottom: $length !important;\n        }\n        .#{$abbrev}l#{$infix}-#{$size},\n        .#{$abbrev}x#{$infix}-#{$size} {\n          #{$prop}-left: $length !important;\n        }\n      }\n    }\n\n    // Negative margins (e.g., where `.mb-n1` is negative version of `.mb-1`)\n    @each $size, $length in $spacers {\n      @if $size != 0 {\n        .m#{$infix}-n#{$size} { margin: -$length !important; }\n        .mt#{$infix}-n#{$size},\n        .my#{$infix}-n#{$size} {\n          margin-top: -$length !important;\n        }\n        .mr#{$infix}-n#{$size},\n        .mx#{$infix}-n#{$size} {\n          margin-right: -$length !important;\n        }\n        .mb#{$infix}-n#{$size},\n        .my#{$infix}-n#{$size} {\n          margin-bottom: -$length !important;\n        }\n        .ml#{$infix}-n#{$size},\n        .mx#{$infix}-n#{$size} {\n          margin-left: -$length !important;\n        }\n      }\n    }\n\n    // Some special margin utils\n    .m#{$infix}-auto { margin: auto !important; }\n    .mt#{$infix}-auto,\n    .my#{$infix}-auto {\n      margin-top: auto !important;\n    }\n    .mr#{$infix}-auto,\n    .mx#{$infix}-auto {\n      margin-right: auto !important;\n    }\n    .mb#{$infix}-auto,\n    .my#{$infix}-auto {\n      margin-bottom: auto !important;\n    }\n    .ml#{$infix}-auto,\n    .mx#{$infix}-auto {\n      margin-left: auto !important;\n    }\n  }\n}\n","//\n// Stretched link\n//\n\n.stretched-link {\n  &::after {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1;\n    // Just in case `pointer-events: none` is set on a parent\n    pointer-events: auto;\n    content: \"\";\n    // IE10 bugfix, see https://stackoverflow.com/questions/16947967/ie10-hover-pseudo-class-doesnt-work-without-background-color\n    background-color: rgba(0, 0, 0, 0);\n  }\n}\n","// stylelint-disable declaration-no-important\n\n//\n// Text\n//\n\n.text-monospace { font-family: $font-family-monospace !important; }\n\n// Alignment\n\n.text-justify  { text-align: justify !important; }\n.text-wrap     { white-space: normal !important; }\n.text-nowrap   { white-space: nowrap !important; }\n.text-truncate { @include text-truncate(); }\n\n// Responsive alignment\n\n@each $breakpoint in map-keys($grid-breakpoints) {\n  @include media-breakpoint-up($breakpoint) {\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n    .text#{$infix}-left   { text-align: left !important; }\n    .text#{$infix}-right  { text-align: right !important; }\n    .text#{$infix}-center { text-align: center !important; }\n  }\n}\n\n// Transformation\n\n.text-lowercase  { text-transform: lowercase !important; }\n.text-uppercase  { text-transform: uppercase !important; }\n.text-capitalize { text-transform: capitalize !important; }\n\n// Weight and italics\n\n.font-weight-light   { font-weight: $font-weight-light !important; }\n.font-weight-lighter { font-weight: $font-weight-lighter !important; }\n.font-weight-normal  { font-weight: $font-weight-normal !important; }\n.font-weight-bold    { font-weight: $font-weight-bold !important; }\n.font-weight-bolder  { font-weight: $font-weight-bolder !important; }\n.font-italic         { font-style: italic !important; }\n\n// Contextual colors\n\n.text-white { color: $white !important; }\n\n@each $color, $value in $theme-colors {\n  @include text-emphasis-variant(\".text-#{$color}\", $value, true);\n}\n\n.text-body { color: $body-color !important; }\n.text-muted { color: $text-muted !important; }\n\n.text-black-50 { color: rgba($black, .5) !important; }\n.text-white-50 { color: rgba($white, .5) !important; }\n\n// Misc\n\n.text-hide {\n  @include text-hide($ignore-warning: true);\n}\n\n.text-decoration-none { text-decoration: none !important; }\n\n.text-break {\n  word-break: break-word !important; // Deprecated, but avoids issues with flex containers\n  word-wrap: break-word !important; // Used instead of `overflow-wrap` for IE & Edge Legacy\n}\n\n// Reset\n\n.text-reset { color: inherit !important; }\n","// Text truncate\n// Requires inline-block or block for proper styling\n\n@mixin text-truncate() {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n","// stylelint-disable declaration-no-important\n\n// Typography\n\n@mixin text-emphasis-variant($parent, $color, $ignore-warning: false) {\n  #{$parent} {\n    color: $color !important;\n  }\n  @if $emphasized-link-hover-darken-percentage != 0 {\n    a#{$parent} {\n      @include hover-focus() {\n        color: darken($color, $emphasized-link-hover-darken-percentage) !important;\n      }\n    }\n  }\n  @include deprecate(\"`text-emphasis-variant()`\", \"v4.4.0\", \"v5\", $ignore-warning);\n}\n","// CSS image replacement\n@mixin text-hide($ignore-warning: false) {\n  // stylelint-disable-next-line font-family-no-missing-generic-family-keyword\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n\n  @include deprecate(\"`text-hide()`\", \"v4.1.0\", \"v5\", $ignore-warning);\n}\n","// stylelint-disable declaration-no-important\n\n//\n// Visibility utilities\n//\n\n.visible {\n  visibility: visible !important;\n}\n\n.invisible {\n  visibility: hidden !important;\n}\n","// stylelint-disable declaration-no-important, selector-no-qualifying-type\n\n// Source: https://github.com/h5bp/main.css/blob/master/src/_print.css\n\n// ==========================================================================\n// Print styles.\n// Inlined to avoid the additional HTTP request:\n// https://www.phpied.com/delay-loading-your-print-css/\n// ==========================================================================\n\n@if $enable-print-styles {\n  @media print {\n    *,\n    *::before,\n    *::after {\n      // Bootstrap specific; comment out `color` and `background`\n      //color: $black !important; // Black prints faster\n      text-shadow: none !important;\n      //background: transparent !important;\n      box-shadow: none !important;\n    }\n\n    a {\n      &:not(.btn) {\n        text-decoration: underline;\n      }\n    }\n\n    // Bootstrap specific; comment the following selector out\n    //a[href]::after {\n    //  content: \" (\" attr(href) \")\";\n    //}\n\n    abbr[title]::after {\n      content: \" (\" attr(title) \")\";\n    }\n\n    // Bootstrap specific; comment the following selector out\n    //\n    // Don't show links that are fragment identifiers,\n    // or use the `javascript:` pseudo protocol\n    //\n\n    //a[href^=\"#\"]::after,\n    //a[href^=\"javascript:\"]::after {\n    // content: \"\";\n    //}\n\n    pre {\n      white-space: pre-wrap !important;\n    }\n    pre,\n    blockquote {\n      border: $border-width solid $gray-500; // Bootstrap custom code; using `$border-width` instead of 1px\n      page-break-inside: avoid;\n    }\n\n    //\n    // Printing Tables:\n    // https://web.archive.org/web/20180815150934/http://css-discuss.incutio.com/wiki/Printing_Tables\n    //\n\n    thead {\n      display: table-header-group;\n    }\n\n    tr,\n    img {\n      page-break-inside: avoid;\n    }\n\n    p,\n    h2,\n    h3 {\n      orphans: 3;\n      widows: 3;\n    }\n\n    h2,\n    h3 {\n      page-break-after: avoid;\n    }\n\n    // Bootstrap specific changes start\n\n    // Specify a size and min-width to make printing closer across browsers.\n    // We don't set margin here because it breaks `size` in Chrome. We also\n    // don't use `!important` on `size` as it breaks in Chrome.\n    @page {\n      size: $print-page-size;\n    }\n    body {\n      min-width: $print-body-min-width !important;\n    }\n    .container {\n      min-width: $print-body-min-width !important;\n    }\n\n    // Bootstrap components\n    .navbar {\n      display: none;\n    }\n    .badge {\n      border: $border-width solid $black;\n    }\n\n    .table {\n      border-collapse: collapse !important;\n\n      td,\n      th {\n        background-color: $white !important;\n      }\n    }\n\n    .table-bordered {\n      th,\n      td {\n        border: 1px solid $gray-300 !important;\n      }\n    }\n\n    .table-dark {\n      color: inherit;\n\n      th,\n      td,\n      thead th,\n      tbody + tbody {\n        border-color: $table-border-color;\n      }\n    }\n\n    .table .thead-dark th {\n      color: inherit;\n      border-color: $table-border-color;\n    }\n\n    // Bootstrap specific changes end\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./src/main/webapp/app/modules/home/home.scss":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./src/main/webapp/app/modules/home/home.scss ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _content_images_jhipster_family_member_2_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../content/images/jhipster_family_member_2.svg */ "./src/main/webapp/content/images/jhipster_family_member_2.svg");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_content_images_jhipster_family_member_2_svg__WEBPACK_IMPORTED_MODULE_3__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* ==========================================================================\nMain page styles\n========================================================================== */\n.hipster {\n  display: inline-block;\n  width: 100%;\n  height: 497px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center top;\n  background-size: contain;\n}", "",{"version":3,"sources":["webpack://./src/main/webapp/app/modules/home/home.scss"],"names":[],"mappings":"AAAA;;4EAAA;AAGA;EACE,qBAAA;EACA,WAAA;EACA,aAAA;EACA,wEAAA;EACA,wBAAA;AACF","sourcesContent":["/* ==========================================================================\nMain page styles\n========================================================================== */\n.hipster {\n  display: inline-block;\n  width: 100%;\n  height: 497px;\n  background: url('../../../content/images/jhipster_family_member_2.svg') no-repeat center top;\n  background-size: contain;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./src/main/webapp/app/shared/layout/footer/footer.scss":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./src/main/webapp/app/shared/layout/footer/footer.scss ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".footer {\n  height: 50px;\n}", "",{"version":3,"sources":["webpack://./src/main/webapp/app/shared/layout/footer/footer.scss"],"names":[],"mappings":"AAAA;EACE,YAAA;AACF","sourcesContent":[".footer {\n  height: 50px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./src/main/webapp/app/shared/layout/header/header.scss":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./src/main/webapp/app/shared/layout/header/header.scss ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* ==========================================================================\nDevelopement Ribbon\n========================================================================== */\n.ribbon {\n  background-color: rgba(170, 0, 0, 0.5);\n  left: -3.5em;\n  transform: rotate(-45deg);\n  overflow: hidden;\n  position: absolute;\n  top: 30px;\n  white-space: nowrap;\n  width: 15em;\n  z-index: 99999;\n  pointer-events: none;\n  opacity: 0.75;\n}\n.ribbon a {\n  color: #fff;\n  display: block;\n  font-weight: 400;\n  margin: 1px 0;\n  padding: 10px 50px;\n  text-align: center;\n  text-decoration: none;\n  text-shadow: 0 0 5px #444;\n  pointer-events: none;\n}\n\n/* ==========================================================================\nNavbar styles\n========================================================================== */\n.jh-navbar {\n  background-color: #353d47;\n  padding: 0.2em 1em;\n}\n.jh-navbar .profile-image {\n  margin: -10px 0px;\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n}\n.jh-navbar .dropdown-item.active,\n.jh-navbar .dropdown-item.active:focus,\n.jh-navbar .dropdown-item.active:hover {\n  background-color: #353d47;\n}\n.jh-navbar .dropdown-toggle::after {\n  margin-left: 0.15em;\n}\n.jh-navbar ul.navbar-nav {\n  padding: 0.5em;\n}\n.jh-navbar ul.navbar-nav .nav-item {\n  margin-left: 1.5rem;\n}\n.jh-navbar a.nav-link {\n  font-weight: 400;\n}\n.jh-navbar a.nav-link > span {\n  margin-left: 5px;\n}\n.jh-navbar .jh-navbar-toggler {\n  color: #ccc;\n  font-size: 1.5em;\n  padding: 10px;\n}\n.jh-navbar .jh-navbar-toggler:hover {\n  color: #fff;\n}\n\n.navbar-version {\n  font-size: 10px;\n  color: #bbb;\n  padding: 0 0 0 10px;\n}\n\n.brand-logo:hover {\n  text-decoration: none;\n}\n.brand-logo .brand-icon {\n  height: 35px;\n  width: auto;\n  display: inline-block;\n}\n.brand-logo .brand-icon img {\n  height: 45px;\n}\n\n.brand-title {\n  font-size: 24px;\n  color: #fff;\n}\n.brand-title:hover {\n  color: #cccccc;\n  text-decoration: none;\n}\n\n.loading-bar {\n  height: 3px;\n  background-color: #009cd8;\n  position: absolute;\n  top: 0px;\n  z-index: 1031;\n}", "",{"version":3,"sources":["webpack://./src/main/webapp/app/shared/layout/header/header.scss"],"names":[],"mappings":"AAIA;;4EAAA;AAGA;EACE,sCAAA;EACA,YAAA;EAKA,yBAAA;EACA,gBAAA;EACA,kBAAA;EACA,SAAA;EACA,mBAAA;EACA,WAAA;EACA,cAAA;EACA,oBAAA;EACA,aAAA;AAHF;AAIE;EACE,WAAA;EACA,cAAA;EACA,gBAAA;EACA,aAAA;EACA,kBAAA;EACA,kBAAA;EACA,qBAAA;EACA,yBAAA;EACA,oBAAA;AAFJ;;AAMA;;4EAAA;AAGA;EACE,yBAAA;EACA,kBAAA;AAHF;AAIE;EACE,iBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;AAFJ;AAIE;;;EAGE,yBAAA;AAFJ;AAIE;EACE,mBAAA;AAFJ;AAIE;EACE,cAAA;AAFJ;AAGI;EACE,mBAAA;AADN;AAIE;EACE,gBAAA;AAFJ;AAGI;EACE,gBAAA;AADN;AAIE;EACE,WAAA;EACA,gBAAA;EACA,aAAA;AAFJ;AAGI;EACE,WAAA;AADN;;AAKA;EACE,eAAA;EACA,WA9EuB;EA+EvB,mBAAA;AAFF;;AAME;EACE,qBAAA;AAHJ;AAKE;EACE,YAAA;EACA,WAAA;EACA,qBAAA;AAHJ;AAII;EACE,YAAA;AAFN;;AAOA;EACE,eAAA;EACA,WAnGa;AA+Ff;AAKE;EACE,cAnGiB;EAoGjB,qBAAA;AAHJ;;AAOA;EACE,WAAA;EACA,yBAAA;EACA,kBAAA;EACA,QAAA;EACA,aAAA;AAJF","sourcesContent":["$header-color: #fff;\n$header-color-secondary: #bbb;\n$header-color-hover: darken($header-color, 20%);\n\n/* ==========================================================================\nDevelopement Ribbon\n========================================================================== */\n.ribbon {\n  background-color: rgba(170, 0, 0, 0.5);\n  left: -3.5em;\n  -moz-transform: rotate(-45deg);\n  -ms-transform: rotate(-45deg);\n  -o-transform: rotate(-45deg);\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n  overflow: hidden;\n  position: absolute;\n  top: 30px;\n  white-space: nowrap;\n  width: 15em;\n  z-index: 99999;\n  pointer-events: none;\n  opacity: 0.75;\n  a {\n    color: #fff;\n    display: block;\n    font-weight: 400;\n    margin: 1px 0;\n    padding: 10px 50px;\n    text-align: center;\n    text-decoration: none;\n    text-shadow: 0 0 5px #444;\n    pointer-events: none;\n  }\n}\n\n/* ==========================================================================\nNavbar styles\n========================================================================== */\n.jh-navbar {\n  background-color: #353d47;\n  padding: 0.2em 1em;\n  .profile-image {\n    margin: -10px 0px;\n    height: 40px;\n    width: 40px;\n    border-radius: 50%;\n  }\n  .dropdown-item.active,\n  .dropdown-item.active:focus,\n  .dropdown-item.active:hover {\n    background-color: #353d47;\n  }\n  .dropdown-toggle::after {\n    margin-left: 0.15em;\n  }\n  ul.navbar-nav {\n    padding: 0.5em;\n    .nav-item {\n      margin-left: 1.5rem;\n    }\n  }\n  a.nav-link {\n    font-weight: 400;\n    > span {\n      margin-left: 5px;\n    }\n  }\n  .jh-navbar-toggler {\n    color: #ccc;\n    font-size: 1.5em;\n    padding: 10px;\n    &:hover {\n      color: #fff;\n    }\n  }\n}\n.navbar-version {\n  font-size: 10px;\n  color: $header-color-secondary;\n  padding: 0 0 0 10px;\n}\n\n.brand-logo {\n  &:hover {\n    text-decoration: none;\n  }\n  .brand-icon {\n    height: 35px;\n    width: auto;\n    display: inline-block;\n    img {\n      height: 45px;\n    }\n  }\n}\n\n.brand-title {\n  font-size: 24px;\n  color: $header-color;\n  &:hover {\n    color: $header-color-hover;\n    text-decoration: none;\n  }\n}\n\n.loading-bar {\n  height: 3px;\n  background-color: #009cd8;\n  position: absolute;\n  top: 0px;\n  z-index: 1031;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./src/main/webapp/app/shared/layout/password/password-strength-bar.scss":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./src/main/webapp/app/shared/layout/password/password-strength-bar.scss ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* ==========================================================================\nstart Password strength bar style\n========================================================================== */\nul#strength {\n  display: inline;\n  list-style: none;\n  margin: 0;\n  margin-left: 15px;\n  padding: 0;\n  vertical-align: 2px;\n}\n\n.point {\n  background: #ddd;\n  border-radius: 2px;\n  display: inline-block;\n  height: 5px;\n  margin-right: 1px;\n  width: 20px;\n}\n.point:last-child {\n  margin: 0 !important;\n}", "",{"version":3,"sources":["webpack://./src/main/webapp/app/shared/layout/password/password-strength-bar.scss"],"names":[],"mappings":"AAAA;;4EAAA;AAGA;EACE,eAAA;EACA,gBAAA;EACA,SAAA;EACA,iBAAA;EACA,UAAA;EACA,mBAAA;AACF;;AAEA;EACE,gBAAA;EACA,kBAAA;EACA,qBAAA;EACA,WAAA;EACA,iBAAA;EACA,WAAA;AACF;AAAE;EACE,oBAAA;AAEJ","sourcesContent":["/* ==========================================================================\nstart Password strength bar style\n========================================================================== */\nul#strength {\n  display: inline;\n  list-style: none;\n  margin: 0;\n  margin-left: 15px;\n  padding: 0;\n  vertical-align: 2px;\n}\n\n.point {\n  background: #ddd;\n  border-radius: 2px;\n  display: inline-block;\n  height: 5px;\n  margin-right: 1px;\n  width: 20px;\n  &:last-child {\n    margin: 0 !important;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/dayjs/locale sync recursive ^\\.\\/.*\\.js$":
/*!******************************************************!*\
  !*** ./node_modules/dayjs/locale/ sync ^\.\/.*\.js$ ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af.js": "./node_modules/dayjs/locale/af.js",
	"./am.js": "./node_modules/dayjs/locale/am.js",
	"./ar-dz.js": "./node_modules/dayjs/locale/ar-dz.js",
	"./ar-kw.js": "./node_modules/dayjs/locale/ar-kw.js",
	"./ar-ly.js": "./node_modules/dayjs/locale/ar-ly.js",
	"./ar-ma.js": "./node_modules/dayjs/locale/ar-ma.js",
	"./ar-sa.js": "./node_modules/dayjs/locale/ar-sa.js",
	"./ar-tn.js": "./node_modules/dayjs/locale/ar-tn.js",
	"./ar.js": "./node_modules/dayjs/locale/ar.js",
	"./az.js": "./node_modules/dayjs/locale/az.js",
	"./be.js": "./node_modules/dayjs/locale/be.js",
	"./bg.js": "./node_modules/dayjs/locale/bg.js",
	"./bi.js": "./node_modules/dayjs/locale/bi.js",
	"./bm.js": "./node_modules/dayjs/locale/bm.js",
	"./bn.js": "./node_modules/dayjs/locale/bn.js",
	"./bo.js": "./node_modules/dayjs/locale/bo.js",
	"./br.js": "./node_modules/dayjs/locale/br.js",
	"./bs.js": "./node_modules/dayjs/locale/bs.js",
	"./ca.js": "./node_modules/dayjs/locale/ca.js",
	"./cs.js": "./node_modules/dayjs/locale/cs.js",
	"./cv.js": "./node_modules/dayjs/locale/cv.js",
	"./cy.js": "./node_modules/dayjs/locale/cy.js",
	"./da.js": "./node_modules/dayjs/locale/da.js",
	"./de-at.js": "./node_modules/dayjs/locale/de-at.js",
	"./de-ch.js": "./node_modules/dayjs/locale/de-ch.js",
	"./de.js": "./node_modules/dayjs/locale/de.js",
	"./dv.js": "./node_modules/dayjs/locale/dv.js",
	"./el.js": "./node_modules/dayjs/locale/el.js",
	"./en-au.js": "./node_modules/dayjs/locale/en-au.js",
	"./en-ca.js": "./node_modules/dayjs/locale/en-ca.js",
	"./en-gb.js": "./node_modules/dayjs/locale/en-gb.js",
	"./en-ie.js": "./node_modules/dayjs/locale/en-ie.js",
	"./en-il.js": "./node_modules/dayjs/locale/en-il.js",
	"./en-in.js": "./node_modules/dayjs/locale/en-in.js",
	"./en-nz.js": "./node_modules/dayjs/locale/en-nz.js",
	"./en-sg.js": "./node_modules/dayjs/locale/en-sg.js",
	"./en-tt.js": "./node_modules/dayjs/locale/en-tt.js",
	"./en.js": "./node_modules/dayjs/locale/en.js",
	"./eo.js": "./node_modules/dayjs/locale/eo.js",
	"./es-do.js": "./node_modules/dayjs/locale/es-do.js",
	"./es-pr.js": "./node_modules/dayjs/locale/es-pr.js",
	"./es-us.js": "./node_modules/dayjs/locale/es-us.js",
	"./es.js": "./node_modules/dayjs/locale/es.js",
	"./et.js": "./node_modules/dayjs/locale/et.js",
	"./eu.js": "./node_modules/dayjs/locale/eu.js",
	"./fa.js": "./node_modules/dayjs/locale/fa.js",
	"./fi.js": "./node_modules/dayjs/locale/fi.js",
	"./fo.js": "./node_modules/dayjs/locale/fo.js",
	"./fr-ca.js": "./node_modules/dayjs/locale/fr-ca.js",
	"./fr-ch.js": "./node_modules/dayjs/locale/fr-ch.js",
	"./fr.js": "./node_modules/dayjs/locale/fr.js",
	"./fy.js": "./node_modules/dayjs/locale/fy.js",
	"./ga.js": "./node_modules/dayjs/locale/ga.js",
	"./gd.js": "./node_modules/dayjs/locale/gd.js",
	"./gl.js": "./node_modules/dayjs/locale/gl.js",
	"./gom-latn.js": "./node_modules/dayjs/locale/gom-latn.js",
	"./gu.js": "./node_modules/dayjs/locale/gu.js",
	"./he.js": "./node_modules/dayjs/locale/he.js",
	"./hi.js": "./node_modules/dayjs/locale/hi.js",
	"./hr.js": "./node_modules/dayjs/locale/hr.js",
	"./ht.js": "./node_modules/dayjs/locale/ht.js",
	"./hu.js": "./node_modules/dayjs/locale/hu.js",
	"./hy-am.js": "./node_modules/dayjs/locale/hy-am.js",
	"./id.js": "./node_modules/dayjs/locale/id.js",
	"./is.js": "./node_modules/dayjs/locale/is.js",
	"./it-ch.js": "./node_modules/dayjs/locale/it-ch.js",
	"./it.js": "./node_modules/dayjs/locale/it.js",
	"./ja.js": "./node_modules/dayjs/locale/ja.js",
	"./jv.js": "./node_modules/dayjs/locale/jv.js",
	"./ka.js": "./node_modules/dayjs/locale/ka.js",
	"./kk.js": "./node_modules/dayjs/locale/kk.js",
	"./km.js": "./node_modules/dayjs/locale/km.js",
	"./kn.js": "./node_modules/dayjs/locale/kn.js",
	"./ko.js": "./node_modules/dayjs/locale/ko.js",
	"./ku.js": "./node_modules/dayjs/locale/ku.js",
	"./ky.js": "./node_modules/dayjs/locale/ky.js",
	"./lb.js": "./node_modules/dayjs/locale/lb.js",
	"./lo.js": "./node_modules/dayjs/locale/lo.js",
	"./lt.js": "./node_modules/dayjs/locale/lt.js",
	"./lv.js": "./node_modules/dayjs/locale/lv.js",
	"./me.js": "./node_modules/dayjs/locale/me.js",
	"./mi.js": "./node_modules/dayjs/locale/mi.js",
	"./mk.js": "./node_modules/dayjs/locale/mk.js",
	"./ml.js": "./node_modules/dayjs/locale/ml.js",
	"./mn.js": "./node_modules/dayjs/locale/mn.js",
	"./mr.js": "./node_modules/dayjs/locale/mr.js",
	"./ms-my.js": "./node_modules/dayjs/locale/ms-my.js",
	"./ms.js": "./node_modules/dayjs/locale/ms.js",
	"./mt.js": "./node_modules/dayjs/locale/mt.js",
	"./my.js": "./node_modules/dayjs/locale/my.js",
	"./nb.js": "./node_modules/dayjs/locale/nb.js",
	"./ne.js": "./node_modules/dayjs/locale/ne.js",
	"./nl-be.js": "./node_modules/dayjs/locale/nl-be.js",
	"./nl.js": "./node_modules/dayjs/locale/nl.js",
	"./nn.js": "./node_modules/dayjs/locale/nn.js",
	"./oc-lnc.js": "./node_modules/dayjs/locale/oc-lnc.js",
	"./pa-in.js": "./node_modules/dayjs/locale/pa-in.js",
	"./pl.js": "./node_modules/dayjs/locale/pl.js",
	"./pt-br.js": "./node_modules/dayjs/locale/pt-br.js",
	"./pt.js": "./node_modules/dayjs/locale/pt.js",
	"./ro.js": "./node_modules/dayjs/locale/ro.js",
	"./ru.js": "./node_modules/dayjs/locale/ru.js",
	"./rw.js": "./node_modules/dayjs/locale/rw.js",
	"./sd.js": "./node_modules/dayjs/locale/sd.js",
	"./se.js": "./node_modules/dayjs/locale/se.js",
	"./si.js": "./node_modules/dayjs/locale/si.js",
	"./sk.js": "./node_modules/dayjs/locale/sk.js",
	"./sl.js": "./node_modules/dayjs/locale/sl.js",
	"./sq.js": "./node_modules/dayjs/locale/sq.js",
	"./sr-cyrl.js": "./node_modules/dayjs/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/dayjs/locale/sr.js",
	"./ss.js": "./node_modules/dayjs/locale/ss.js",
	"./sv.js": "./node_modules/dayjs/locale/sv.js",
	"./sw.js": "./node_modules/dayjs/locale/sw.js",
	"./ta.js": "./node_modules/dayjs/locale/ta.js",
	"./te.js": "./node_modules/dayjs/locale/te.js",
	"./tet.js": "./node_modules/dayjs/locale/tet.js",
	"./tg.js": "./node_modules/dayjs/locale/tg.js",
	"./th.js": "./node_modules/dayjs/locale/th.js",
	"./tk.js": "./node_modules/dayjs/locale/tk.js",
	"./tl-ph.js": "./node_modules/dayjs/locale/tl-ph.js",
	"./tlh.js": "./node_modules/dayjs/locale/tlh.js",
	"./tr.js": "./node_modules/dayjs/locale/tr.js",
	"./tzl.js": "./node_modules/dayjs/locale/tzl.js",
	"./tzm-latn.js": "./node_modules/dayjs/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/dayjs/locale/tzm.js",
	"./ug-cn.js": "./node_modules/dayjs/locale/ug-cn.js",
	"./uk.js": "./node_modules/dayjs/locale/uk.js",
	"./ur.js": "./node_modules/dayjs/locale/ur.js",
	"./uz-latn.js": "./node_modules/dayjs/locale/uz-latn.js",
	"./uz.js": "./node_modules/dayjs/locale/uz.js",
	"./vi.js": "./node_modules/dayjs/locale/vi.js",
	"./x-pseudo.js": "./node_modules/dayjs/locale/x-pseudo.js",
	"./yo.js": "./node_modules/dayjs/locale/yo.js",
	"./zh-cn.js": "./node_modules/dayjs/locale/zh-cn.js",
	"./zh-hk.js": "./node_modules/dayjs/locale/zh-hk.js",
	"./zh-tw.js": "./node_modules/dayjs/locale/zh-tw.js",
	"./zh.js": "./node_modules/dayjs/locale/zh.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/dayjs/locale sync recursive ^\\.\\/.*\\.js$";

/***/ }),

/***/ "./src/main/webapp/content/images/jhipster_family_member_2.svg":
/*!*********************************************************************!*\
  !*** ./src/main/webapp/content/images/jhipster_family_member_2.svg ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "content/5ca455d9523062f1bd3847c191e60147.svg");

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/main/webapp/app/app.tsx":
/*!*************************************!*\
  !*** ./src/main/webapp/app/app.tsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* binding */ App),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.scss */ "./src/main/webapp/app/app.scss");
/* harmony import */ var app_config_dayjs_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/config/dayjs.ts */ "./src/main/webapp/app/config/dayjs.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Card.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js");
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var app_shared_reducers_authentication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/reducers/authentication */ "./src/main/webapp/app/shared/reducers/authentication.ts");
/* harmony import */ var app_shared_reducers_application_profile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/reducers/application-profile */ "./src/main/webapp/app/shared/reducers/application-profile.ts");
/* harmony import */ var app_shared_layout_header_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/layout/header/header */ "./src/main/webapp/app/shared/layout/header/header.tsx");
/* harmony import */ var app_shared_layout_footer_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/layout/footer/footer */ "./src/main/webapp/app/shared/layout/footer/footer.tsx");
/* harmony import */ var app_shared_auth_private_route__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/auth/private-route */ "./src/main/webapp/app/shared/auth/private-route.tsx");
/* harmony import */ var app_shared_error_error_boundary__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/shared/error/error-boundary */ "./src/main/webapp/app/shared/error/error-boundary.tsx");
/* harmony import */ var app_config_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/config/constants */ "./src/main/webapp/app/config/constants.ts");
/* harmony import */ var app_routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/routes */ "./src/main/webapp/app/routes.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);

















const baseHref = document.querySelector('base').getAttribute('href').replace(/\/$/, '');
const App = (props) => {
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
        props.getSession();
        props.getProfile();
    }, []);
    const paddingTop = '60px';
    return (react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.BrowserRouter, { basename: baseHref },
        react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", { className: "app-container", style: { paddingTop } },
            react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_toastify__WEBPACK_IMPORTED_MODULE_14__.ToastContainer, { position: react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.POSITION.TOP_LEFT, className: "toastify-container", toastClassName: "toastify-toast" }),
            react__WEBPACK_IMPORTED_MODULE_3__.createElement(app_shared_error_error_boundary__WEBPACK_IMPORTED_MODULE_10__.default, null,
                react__WEBPACK_IMPORTED_MODULE_3__.createElement(app_shared_layout_header_header__WEBPACK_IMPORTED_MODULE_7__.default, { isAuthenticated: props.isAuthenticated, isAdmin: props.isAdmin, ribbonEnv: props.ribbonEnv, isInProduction: props.isInProduction, isOpenAPIEnabled: props.isOpenAPIEnabled })),
            react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", { className: "container-fluid view-container", id: "app-view-container" },
                react__WEBPACK_IMPORTED_MODULE_3__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_15__.default, { className: "jh-card" },
                    react__WEBPACK_IMPORTED_MODULE_3__.createElement(app_shared_error_error_boundary__WEBPACK_IMPORTED_MODULE_10__.default, null,
                        react__WEBPACK_IMPORTED_MODULE_3__.createElement(app_routes__WEBPACK_IMPORTED_MODULE_12__.default, null))),
                react__WEBPACK_IMPORTED_MODULE_3__.createElement(app_shared_layout_footer_footer__WEBPACK_IMPORTED_MODULE_8__.default, null)))));
};
const mapStateToProps = ({ authentication, applicationProfile }) => ({
    isAuthenticated: authentication.isAuthenticated,
    isAdmin: (0,app_shared_auth_private_route__WEBPACK_IMPORTED_MODULE_9__.hasAnyAuthority)(authentication.account.authorities, [app_config_constants__WEBPACK_IMPORTED_MODULE_11__.AUTHORITIES.ADMIN]),
    ribbonEnv: applicationProfile.ribbonEnv,
    isInProduction: applicationProfile.inProduction,
    isOpenAPIEnabled: applicationProfile.isOpenAPIEnabled,
});
const mapDispatchToProps = { getSession: app_shared_reducers_authentication__WEBPACK_IMPORTED_MODULE_5__.getSession, getProfile: app_shared_reducers_application_profile__WEBPACK_IMPORTED_MODULE_6__.getProfile };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(mapStateToProps, mapDispatchToProps)((0,react_hot_loader__WEBPACK_IMPORTED_MODULE_16__.hot)(module)(App)));

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/app.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/app.tsx"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/config/axios-interceptor.ts":
/*!*********************************************************!*\
  !*** ./src/main/webapp/app/config/axios-interceptor.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_config_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/config/constants */ "./src/main/webapp/app/config/constants.ts");


const TIMEOUT = 1 * 60 * 1000;
(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.timeout) = TIMEOUT;
(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.baseURL) = app_config_constants__WEBPACK_IMPORTED_MODULE_1__.SERVER_API_URL;
const setupAxiosInterceptors = onUnauthenticated => {
    const onRequestSuccess = config => {
        return config;
    };
    const onResponseSuccess = response => response;
    const onResponseError = err => {
        const status = err.status || (err.response ? err.response.status : 0);
        if (status === 403 || status === 401) {
            onUnauthenticated();
        }
        return Promise.reject(err);
    };
    axios__WEBPACK_IMPORTED_MODULE_0___default().interceptors.request.use(onRequestSuccess);
    axios__WEBPACK_IMPORTED_MODULE_0___default().interceptors.response.use(onResponseSuccess, onResponseError);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setupAxiosInterceptors);

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/config/axios-interceptor.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/config/axios-interceptor.ts"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/config/constants.ts":
/*!*************************************************!*\
  !*** ./src/main/webapp/app/config/constants.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "SERVER_API_URL": () => (/* binding */ SERVER_API_URL),
/* harmony export */   "AUTHORITIES": () => (/* binding */ AUTHORITIES),
/* harmony export */   "messages": () => (/* binding */ messages),
/* harmony export */   "APP_DATE_FORMAT": () => (/* binding */ APP_DATE_FORMAT),
/* harmony export */   "APP_TIMESTAMP_FORMAT": () => (/* binding */ APP_TIMESTAMP_FORMAT),
/* harmony export */   "APP_LOCAL_DATE_FORMAT": () => (/* binding */ APP_LOCAL_DATE_FORMAT),
/* harmony export */   "APP_LOCAL_DATETIME_FORMAT": () => (/* binding */ APP_LOCAL_DATETIME_FORMAT),
/* harmony export */   "APP_LOCAL_DATETIME_FORMAT_Z": () => (/* binding */ APP_LOCAL_DATETIME_FORMAT_Z),
/* harmony export */   "APP_WHOLE_NUMBER_FORMAT": () => (/* binding */ APP_WHOLE_NUMBER_FORMAT),
/* harmony export */   "APP_TWO_DIGITS_AFTER_POINT_NUMBER_FORMAT": () => (/* binding */ APP_TWO_DIGITS_AFTER_POINT_NUMBER_FORMAT)
/* harmony export */ });
const config = {
    VERSION: '0.0.1-SNAPSHOT',
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);
const SERVER_API_URL = '';
const AUTHORITIES = {
    ADMIN: 'ROLE_ADMIN',
    USER: 'ROLE_USER',
};
const messages = {
    DATA_ERROR_ALERT: 'Internal Error',
};
const APP_DATE_FORMAT = 'DD/MM/YY HH:mm';
const APP_TIMESTAMP_FORMAT = 'DD/MM/YY HH:mm:ss';
const APP_LOCAL_DATE_FORMAT = 'DD/MM/YYYY';
const APP_LOCAL_DATETIME_FORMAT = 'YYYY-MM-DDTHH:mm';
const APP_LOCAL_DATETIME_FORMAT_Z = 'YYYY-MM-DDTHH:mm Z';
const APP_WHOLE_NUMBER_FORMAT = '0,0';
const APP_TWO_DIGITS_AFTER_POINT_NUMBER_FORMAT = '0,0.[00]';

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/config/constants.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/config/constants.ts"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/config/dayjs.ts":
/*!*********************************************!*\
  !*** ./src/main/webapp/app/config/dayjs.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs/plugin/customParseFormat */ "./node_modules/dayjs/plugin/customParseFormat.js");
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs_plugin_duration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs/plugin/duration */ "./node_modules/dayjs/plugin/duration.js");
/* harmony import */ var dayjs_plugin_duration__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_duration__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs/plugin/relativeTime */ "./node_modules/dayjs/plugin/relativeTime.js");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_3__);




// jhipster-needle-i18n-language-dayjs-imports - JHipster will import languages from dayjs here
// DAYJS CONFIGURATION
dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_1___default()));
dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_duration__WEBPACK_IMPORTED_MODULE_2___default()));
dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_3___default()));

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/config/dayjs.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/config/dayjs.ts"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/config/devtools.tsx":
/*!*************************************************!*\
  !*** ./src/main/webapp/app/config/devtools.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var redux_devtools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools */ "./node_modules/redux-devtools/lib/index.js");
/* harmony import */ var redux_devtools_log_monitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-log-monitor */ "./node_modules/redux-devtools-log-monitor/lib/index.js");
/* harmony import */ var redux_devtools_dock_monitor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-dock-monitor */ "./node_modules/redux-devtools-dock-monitor/lib/index.js");




// You can toggle visibility of devTools with ctrl + H
// and change their position with ctrl + Q
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux_devtools__WEBPACK_IMPORTED_MODULE_1__.createDevTools)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(redux_devtools_dock_monitor__WEBPACK_IMPORTED_MODULE_3__.default, { toggleVisibilityKey: "ctrl-h", changePositionKey: "ctrl-q", defaultIsVisible: false },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(redux_devtools_log_monitor__WEBPACK_IMPORTED_MODULE_2__.default, null))));

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/config/devtools.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/config/devtools.tsx"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/config/error-middleware.ts":
/*!********************************************************!*\
  !*** ./src/main/webapp/app/config/error-middleware.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-jhipster */ "./node_modules/react-jhipster/lib/index.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jhipster__WEBPACK_IMPORTED_MODULE_0__);

const getErrorMessage = errorData => {
    let message = errorData.message;
    if (errorData.fieldErrors) {
        errorData.fieldErrors.forEach(fErr => {
            message += `\nfield: ${fErr.field},  Object: ${fErr.objectName}, message: ${fErr.message}\n`;
        });
    }
    return message;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => next => action => {
    // If not a promise, continue on
    if (!(0,react_jhipster__WEBPACK_IMPORTED_MODULE_0__.isPromise)(action.payload)) {
        return next(action);
    }
    /**
     *
     * The error middleware serves to dispatch the initial pending promise to
     * the promise middleware, but adds a `catch`.
     * It need not run in production
     */
    if (true) {
        // Dispatch initial pending promise, but catch any errors
        return next(action).catch(error => {
            console.error(`${action.type} caught at middleware with reason: ${JSON.stringify(error.message)}.`);
            if (error && error.response && error.response.data) {
                const message = getErrorMessage(error.response.data);
                console.error(`Actual cause: ${message}`);
            }
            return Promise.reject(error);
        });
    }
    return next(action);
});

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/config/error-middleware.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/config/error-middleware.ts"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/config/icon-loader.ts":
/*!***************************************************!*\
  !*** ./src/main/webapp/app/config/icon-loader.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadIcons": () => (/* binding */ loadIcons)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCogs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faCogs */ "./node_modules/@fortawesome/free-solid-svg-icons/faCogs.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faBan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faBan */ "./node_modules/@fortawesome/free-solid-svg-icons/faBan.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faAsterisk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faAsterisk */ "./node_modules/@fortawesome/free-solid-svg-icons/faAsterisk.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faArrowLeft__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faArrowLeft */ "./node_modules/@fortawesome/free-solid-svg-icons/faArrowLeft.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faBell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faBell */ "./node_modules/@fortawesome/free-solid-svg-icons/faBell.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faBook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faBook */ "./node_modules/@fortawesome/free-solid-svg-icons/faBook.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCloud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faCloud */ "./node_modules/@fortawesome/free-solid-svg-icons/faCloud.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faDatabase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faDatabase */ "./node_modules/@fortawesome/free-solid-svg-icons/faDatabase.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faEye__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faEye */ "./node_modules/@fortawesome/free-solid-svg-icons/faEye.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faFlag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faFlag */ "./node_modules/@fortawesome/free-solid-svg-icons/faFlag.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faHeart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faHeart */ "./node_modules/@fortawesome/free-solid-svg-icons/faHeart.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faHome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faHome */ "./node_modules/@fortawesome/free-solid-svg-icons/faHome.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faList */ "./node_modules/@fortawesome/free-solid-svg-icons/faList.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faLock__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faLock */ "./node_modules/@fortawesome/free-solid-svg-icons/faLock.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faPencilAlt__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faPencilAlt */ "./node_modules/@fortawesome/free-solid-svg-icons/faPencilAlt.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faPlus__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faPlus */ "./node_modules/@fortawesome/free-solid-svg-icons/faPlus.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faSave__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faSave */ "./node_modules/@fortawesome/free-solid-svg-icons/faSave.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faSearch__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faSearch */ "./node_modules/@fortawesome/free-solid-svg-icons/faSearch.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faSort__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faSort */ "./node_modules/@fortawesome/free-solid-svg-icons/faSort.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faSync__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faSync */ "./node_modules/@fortawesome/free-solid-svg-icons/faSync.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faRoad__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faRoad */ "./node_modules/@fortawesome/free-solid-svg-icons/faRoad.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faSignInAlt__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faSignInAlt */ "./node_modules/@fortawesome/free-solid-svg-icons/faSignInAlt.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faSignOutAlt__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faSignOutAlt */ "./node_modules/@fortawesome/free-solid-svg-icons/faSignOutAlt.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faTachometerAlt__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faTachometerAlt */ "./node_modules/@fortawesome/free-solid-svg-icons/faTachometerAlt.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faTasks__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faTasks */ "./node_modules/@fortawesome/free-solid-svg-icons/faTasks.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faThList__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faThList */ "./node_modules/@fortawesome/free-solid-svg-icons/faThList.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faTimesCircle__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faTimesCircle */ "./node_modules/@fortawesome/free-solid-svg-icons/faTimesCircle.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faTrash__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faTrash */ "./node_modules/@fortawesome/free-solid-svg-icons/faTrash.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faUser__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faUser */ "./node_modules/@fortawesome/free-solid-svg-icons/faUser.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faUserPlus__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faUserPlus */ "./node_modules/@fortawesome/free-solid-svg-icons/faUserPlus.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faUsers__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faUsers */ "./node_modules/@fortawesome/free-solid-svg-icons/faUsers.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faUsersCog__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faUsersCog */ "./node_modules/@fortawesome/free-solid-svg-icons/faUsersCog.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faWrench__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faWrench */ "./node_modules/@fortawesome/free-solid-svg-icons/faWrench.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");


































const loadIcons = () => {
    _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.library.add(_fortawesome_free_solid_svg_icons_faArrowLeft__WEBPACK_IMPORTED_MODULE_1__.faArrowLeft, _fortawesome_free_solid_svg_icons_faAsterisk__WEBPACK_IMPORTED_MODULE_2__.faAsterisk, _fortawesome_free_solid_svg_icons_faBan__WEBPACK_IMPORTED_MODULE_3__.faBan, _fortawesome_free_solid_svg_icons_faBell__WEBPACK_IMPORTED_MODULE_4__.faBell, _fortawesome_free_solid_svg_icons_faBook__WEBPACK_IMPORTED_MODULE_5__.faBook, _fortawesome_free_solid_svg_icons_faCloud__WEBPACK_IMPORTED_MODULE_6__.faCloud, _fortawesome_free_solid_svg_icons_faCogs__WEBPACK_IMPORTED_MODULE_7__.faCogs, _fortawesome_free_solid_svg_icons_faDatabase__WEBPACK_IMPORTED_MODULE_8__.faDatabase, _fortawesome_free_solid_svg_icons_faEye__WEBPACK_IMPORTED_MODULE_9__.faEye, _fortawesome_free_solid_svg_icons_faFlag__WEBPACK_IMPORTED_MODULE_10__.faFlag, _fortawesome_free_solid_svg_icons_faHeart__WEBPACK_IMPORTED_MODULE_11__.faHeart, _fortawesome_free_solid_svg_icons_faHome__WEBPACK_IMPORTED_MODULE_12__.faHome, _fortawesome_free_solid_svg_icons_faList__WEBPACK_IMPORTED_MODULE_13__.faList, _fortawesome_free_solid_svg_icons_faLock__WEBPACK_IMPORTED_MODULE_14__.faLock, _fortawesome_free_solid_svg_icons_faPencilAlt__WEBPACK_IMPORTED_MODULE_15__.faPencilAlt, _fortawesome_free_solid_svg_icons_faPlus__WEBPACK_IMPORTED_MODULE_16__.faPlus, _fortawesome_free_solid_svg_icons_faRoad__WEBPACK_IMPORTED_MODULE_17__.faRoad, _fortawesome_free_solid_svg_icons_faSave__WEBPACK_IMPORTED_MODULE_18__.faSave, _fortawesome_free_solid_svg_icons_faSignInAlt__WEBPACK_IMPORTED_MODULE_19__.faSignInAlt, _fortawesome_free_solid_svg_icons_faSignOutAlt__WEBPACK_IMPORTED_MODULE_20__.faSignOutAlt, _fortawesome_free_solid_svg_icons_faSearch__WEBPACK_IMPORTED_MODULE_21__.faSearch, _fortawesome_free_solid_svg_icons_faSort__WEBPACK_IMPORTED_MODULE_22__.faSort, _fortawesome_free_solid_svg_icons_faSync__WEBPACK_IMPORTED_MODULE_23__.faSync, _fortawesome_free_solid_svg_icons_faTachometerAlt__WEBPACK_IMPORTED_MODULE_24__.faTachometerAlt, _fortawesome_free_solid_svg_icons_faTasks__WEBPACK_IMPORTED_MODULE_25__.faTasks, _fortawesome_free_solid_svg_icons_faThList__WEBPACK_IMPORTED_MODULE_26__.faThList, _fortawesome_free_solid_svg_icons_faTimesCircle__WEBPACK_IMPORTED_MODULE_27__.faTimesCircle, _fortawesome_free_solid_svg_icons_faTrash__WEBPACK_IMPORTED_MODULE_28__.faTrash, _fortawesome_free_solid_svg_icons_faUser__WEBPACK_IMPORTED_MODULE_29__.faUser, _fortawesome_free_solid_svg_icons_faUserPlus__WEBPACK_IMPORTED_MODULE_30__.faUserPlus, _fortawesome_free_solid_svg_icons_faUsers__WEBPACK_IMPORTED_MODULE_31__.faUsers, _fortawesome_free_solid_svg_icons_faUsersCog__WEBPACK_IMPORTED_MODULE_32__.faUsersCog, _fortawesome_free_solid_svg_icons_faWrench__WEBPACK_IMPORTED_MODULE_33__.faWrench);
};

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/config/icon-loader.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/config/icon-loader.ts"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/config/logger-middleware.ts":
/*!*********************************************************!*\
  !*** ./src/main/webapp/app/config/logger-middleware.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint no-console: off */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => next => action => {
    if (true) {
        const { type, payload, meta } = action;
        console.groupCollapsed(type);
        console.log('Payload:', payload);
        console.log('Meta:', meta);
        console.groupEnd();
    }
    return next(action);
});

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/config/logger-middleware.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/config/logger-middleware.ts"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/config/notification-middleware.ts":
/*!***************************************************************!*\
  !*** ./src/main/webapp/app/config/notification-middleware.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-jhipster */ "./node_modules/react-jhipster/lib/index.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jhipster__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");


const addErrorAlert = (message, key, data) => {
    react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(message);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => next => action => {
    // If not a promise, continue on
    if (!(0,react_jhipster__WEBPACK_IMPORTED_MODULE_0__.isPromise)(action.payload)) {
        return next(action);
    }
    /**
     *
     * The notification middleware serves to dispatch the initial pending promise to
     * the promise middleware, but adds a `then` and `catch.
     */
    return next(action)
        .then(response => {
        if (action.meta && action.meta.successMessage) {
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success(action.meta.successMessage);
        }
        else if (response && response.action && response.action.payload && response.action.payload.headers) {
            const headers = response.action.payload.headers;
            let alert = null;
            Object.entries(headers).forEach(([k, v]) => {
                if (k.toLowerCase().endsWith('app-alert')) {
                    alert = v;
                }
            });
            if (alert) {
                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success(alert);
            }
        }
        return Promise.resolve(response);
    })
        .catch(error => {
        if (action.meta && action.meta.errorMessage) {
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(action.meta.errorMessage);
        }
        else if (error && error.response) {
            const response = error.response;
            const data = response.data;
            if (!(response.status === 401 && (error.message === '' || (data && data.path && data.path.includes('/api/account'))))) {
                let i;
                switch (response.status) {
                    // connection refused, server not reachable
                    case 0:
                        addErrorAlert('Server not reachable', 'error.server.not.reachable');
                        break;
                    case 400: {
                        const headers = Object.entries(response.headers);
                        let errorHeader = null;
                        let entityKey = null;
                        headers.forEach(([k, v]) => {
                            if (k.toLowerCase().endsWith('app-error')) {
                                errorHeader = v;
                            }
                            else if (k.toLowerCase().endsWith('app-params')) {
                                entityKey = v;
                            }
                        });
                        if (errorHeader) {
                            const entityName = entityKey;
                            addErrorAlert(errorHeader, errorHeader, { entityName });
                        }
                        else if (data !== '' && data.fieldErrors) {
                            const fieldErrors = data.fieldErrors;
                            for (i = 0; i < fieldErrors.length; i++) {
                                const fieldError = fieldErrors[i];
                                if (['Min', 'Max', 'DecimalMin', 'DecimalMax'].includes(fieldError.message)) {
                                    fieldError.message = 'Size';
                                }
                                // convert 'something[14].other[4].id' to 'something[].other[].id' so translations can be written to it
                                const convertedField = fieldError.field.replace(/\[\d*\]/g, '[]');
                                const fieldName = convertedField.charAt(0).toUpperCase() + convertedField.slice(1);
                                addErrorAlert(`Error on field "${fieldName}"`, `error.${fieldError.message}`, { fieldName });
                            }
                        }
                        else if (data !== '' && data.message) {
                            addErrorAlert(data.message, data.message, data.params);
                        }
                        else {
                            addErrorAlert(data);
                        }
                        break;
                    }
                    case 404:
                        addErrorAlert('Not found', 'error.url.not.found');
                        break;
                    default:
                        if (data !== '' && data.message) {
                            addErrorAlert(data.message);
                        }
                        else {
                            addErrorAlert(data);
                        }
                }
            }
        }
        else if (error && error.config && error.config.url === 'api/account' && error.config.method === 'get') {
            /* eslint-disable no-console */
            console.log('Authentication Error: Trying to access url api/account with GET.');
        }
        else if (error && error.message) {
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(error.message);
        }
        else {
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error('Unknown error!');
        }
        return Promise.reject(error);
    });
});

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/config/notification-middleware.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/config/notification-middleware.ts"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/config/store.ts":
/*!*********************************************!*\
  !*** ./src/main/webapp/app/config/store.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_promise_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-promise-middleware */ "./node_modules/redux-promise-middleware/dist/es/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var app_shared_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/reducers */ "./src/main/webapp/app/shared/reducers/index.ts");
/* harmony import */ var _devtools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./devtools */ "./src/main/webapp/app/config/devtools.tsx");
/* harmony import */ var _error_middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error-middleware */ "./src/main/webapp/app/config/error-middleware.ts");
/* harmony import */ var _notification_middleware__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notification-middleware */ "./src/main/webapp/app/config/notification-middleware.ts");
/* harmony import */ var _logger_middleware__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logger-middleware */ "./src/main/webapp/app/config/logger-middleware.ts");
/* harmony import */ var react_redux_loading_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux-loading-bar */ "./node_modules/react-redux-loading-bar/build/index.js");









const defaultMiddlewares = [
    redux_thunk__WEBPACK_IMPORTED_MODULE_1__.default,
    _error_middleware__WEBPACK_IMPORTED_MODULE_4__.default,
    _notification_middleware__WEBPACK_IMPORTED_MODULE_5__.default,
    redux_promise_middleware__WEBPACK_IMPORTED_MODULE_0__.default,
    (0,react_redux_loading_bar__WEBPACK_IMPORTED_MODULE_7__.loadingBarMiddleware)(),
    _logger_middleware__WEBPACK_IMPORTED_MODULE_6__.default,
];
const composedMiddlewares = middlewares =>  true
    ? (0,redux__WEBPACK_IMPORTED_MODULE_8__.compose)((0,redux__WEBPACK_IMPORTED_MODULE_8__.applyMiddleware)(...defaultMiddlewares, ...middlewares), _devtools__WEBPACK_IMPORTED_MODULE_3__.default.instrument())
    : 0;
const initialize = (initialState, middlewares = []) => (0,redux__WEBPACK_IMPORTED_MODULE_8__.createStore)(app_shared_reducers__WEBPACK_IMPORTED_MODULE_2__.default, initialState, composedMiddlewares(middlewares));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialize);

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/config/store.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/config/store.ts"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/entities/index.tsx":
/*!************************************************!*\
  !*** ./src/main/webapp/app/entities/index.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");


/* jhipster-needle-add-route-import - JHipster will add routes here */
const Routes = ({ match }) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Switch, null)));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Routes);

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/entities/index.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/entities/index.tsx"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/index.tsx":
/*!***************************************!*\
  !*** ./src/main/webapp/app/index.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _config_devtools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/devtools */ "./src/main/webapp/app/config/devtools.tsx");
/* harmony import */ var _config_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config/store */ "./src/main/webapp/app/config/store.ts");
/* harmony import */ var _config_axios_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config/axios-interceptor */ "./src/main/webapp/app/config/axios-interceptor.ts");
/* harmony import */ var _shared_reducers_authentication__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/reducers/authentication */ "./src/main/webapp/app/shared/reducers/authentication.ts");
/* harmony import */ var _shared_error_error_boundary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/error/error-boundary */ "./src/main/webapp/app/shared/error/error-boundary.tsx");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app */ "./src/main/webapp/app/app.tsx");
/* harmony import */ var _config_icon_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./config/icon-loader */ "./src/main/webapp/app/config/icon-loader.ts");











const devTools =  true ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_config_devtools__WEBPACK_IMPORTED_MODULE_3__.default, null) : 0;
const store = (0,_config_store__WEBPACK_IMPORTED_MODULE_4__.default)();
const actions = (0,redux__WEBPACK_IMPORTED_MODULE_10__.bindActionCreators)({ clearAuthentication: _shared_reducers_authentication__WEBPACK_IMPORTED_MODULE_6__.clearAuthentication }, store.dispatch);
(0,_config_axios_interceptor__WEBPACK_IMPORTED_MODULE_5__.default)(() => actions.clearAuthentication('login.error.unauthorized'));
(0,_config_icon_loader__WEBPACK_IMPORTED_MODULE_9__.loadIcons)();
const rootEl = document.getElementById('root');
const render = Component => 
// eslint-disable-next-line react/no-render-return-value
react_dom__WEBPACK_IMPORTED_MODULE_1__.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_error_error_boundary__WEBPACK_IMPORTED_MODULE_7__.default, null,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, { store: store },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
            devTools,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, null)))), rootEl);
render(_app__WEBPACK_IMPORTED_MODULE_8__.default);

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/index.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/index.tsx"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/modules/account/activate/activate.reducer.ts":
/*!**************************************************************************!*\
  !*** ./src/main/webapp/app/modules/account/activate/activate.reducer.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ACTION_TYPES": () => (/* binding */ ACTION_TYPES),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "activateAction": () => (/* binding */ activateAction),
/* harmony export */   "reset": () => (/* binding */ reset)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/reducers/action-type.util */ "./src/main/webapp/app/shared/reducers/action-type.util.ts");


const ACTION_TYPES = {
    ACTIVATE_ACCOUNT: 'activate/ACTIVATE_ACCOUNT',
    RESET: 'activate/RESET',
};
const initialState = {
    activationSuccess: false,
    activationFailure: false,
};
// Reducer
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((state = initialState, action) => {
    switch (action.type) {
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.REQUEST)(ACTION_TYPES.ACTIVATE_ACCOUNT):
            return Object.assign({}, state);
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.FAILURE)(ACTION_TYPES.ACTIVATE_ACCOUNT):
            return Object.assign(Object.assign({}, state), { activationFailure: true });
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.SUCCESS)(ACTION_TYPES.ACTIVATE_ACCOUNT):
            return Object.assign(Object.assign({}, state), { activationSuccess: true });
        case ACTION_TYPES.RESET:
            return Object.assign({}, initialState);
        default:
            return state;
    }
});
// Actions
const activateAction = key => ({
    type: ACTION_TYPES.ACTIVATE_ACCOUNT,
    payload: axios__WEBPACK_IMPORTED_MODULE_0___default().get('api/activate?key=' + key),
});
const reset = () => ({
    type: ACTION_TYPES.RESET,
});

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/modules/account/activate/activate.reducer.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/modules/account/activate/activate.reducer.ts"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/modules/account/activate/activate.tsx":
/*!*******************************************************************!*\
  !*** ./src/main/webapp/app/modules/account/activate/activate.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivatePage": () => (/* binding */ ActivatePage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Alert.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jhipster */ "./node_modules/react-jhipster/lib/index.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jhipster__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _activate_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./activate.reducer */ "./src/main/webapp/app/modules/account/activate/activate.reducer.ts");






const successAlert = (react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.default, { color: "success" },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Your user account has been activated."),
    " Please",
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, { to: "/login", className: "alert-link" }, "sign in"),
    "."));
const failureAlert = (react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.default, { color: "danger" },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Your user could not be activated."),
    " Please use the registration form to sign up."));
const ActivatePage = (props) => {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const key = (0,react_jhipster__WEBPACK_IMPORTED_MODULE_2__.getUrlParameter)('key', props.location.search);
        props.activateAction(key);
        return () => {
            props.reset();
        };
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, { className: "justify-content-center" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, { md: "8" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Activation"),
                props.activationSuccess ? successAlert : undefined,
                props.activationFailure ? failureAlert : undefined))));
};
const mapStateToProps = ({ activate }) => ({
    activationSuccess: activate.activationSuccess,
    activationFailure: activate.activationFailure,
});
const mapDispatchToProps = { activateAction: _activate_reducer__WEBPACK_IMPORTED_MODULE_3__.activateAction, reset: _activate_reducer__WEBPACK_IMPORTED_MODULE_3__.reset };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(ActivatePage));

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/modules/account/activate/activate.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/modules/account/activate/activate.tsx"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/modules/account/password-reset/finish/password-reset-finish.tsx":
/*!*********************************************************************************************!*\
  !*** ./src/main/webapp/app/modules/account/password-reset/finish/password-reset-finish.tsx ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordResetFinishPage": () => (/* binding */ PasswordResetFinishPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Button.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! availity-reactstrap-validation */ "./node_modules/availity-reactstrap-validation/lib/index.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-jhipster */ "./node_modules/react-jhipster/lib/index.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jhipster__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _password_reset_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../password-reset.reducer */ "./src/main/webapp/app/modules/account/password-reset/password-reset.reducer.ts");
/* harmony import */ var app_shared_layout_password_password_strength_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/layout/password/password-strength-bar */ "./src/main/webapp/app/shared/layout/password/password-strength-bar.tsx");







const PasswordResetFinishPage = (props) => {
    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const [key] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,react_jhipster__WEBPACK_IMPORTED_MODULE_3__.getUrlParameter)('key', props.location.search));
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => () => {
        props.reset();
    }, []);
    const handleValidSubmit = (event, values) => props.handlePasswordResetFinish(key, values.newPassword);
    const updatePassword = event => setPassword(event.target.value);
    const getResetForm = () => {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_2__.AvForm, { onValidSubmit: handleValidSubmit },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_2__.AvField, { name: "newPassword", label: "New password", placeholder: 'New password', type: "password", validate: {
                    required: { value: true, errorMessage: 'Your password is required.' },
                    minLength: { value: 4, errorMessage: 'Your password is required to be at least 4 characters.' },
                    maxLength: { value: 50, errorMessage: 'Your password cannot be longer than 50 characters.' },
                }, onChange: updatePassword, "data-cy": "resetPassword" }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(app_shared_layout_password_password_strength_bar__WEBPACK_IMPORTED_MODULE_5__.default, { password: password }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_2__.AvField, { name: "confirmPassword", label: "New password confirmation", placeholder: "Confirm the new password", type: "password", validate: {
                    required: { value: true, errorMessage: 'Your confirmation password is required.' },
                    minLength: { value: 4, errorMessage: 'Your confirmation password is required to be at least 4 characters.' },
                    maxLength: { value: 50, errorMessage: 'Your confirmation password cannot be longer than 50 characters.' },
                    match: { value: 'newPassword', errorMessage: 'The password and its confirmation do not match!' },
                }, "data-cy": "confirmResetPassword" }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, { color: "success", type: "submit", "data-cy": "submit" }, "Validate new password")));
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, { className: "justify-content-center" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.default, { md: "4" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Reset password"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, key ? getResetForm() : null)))));
};
const mapDispatchToProps = { handlePasswordResetFinish: _password_reset_reducer__WEBPACK_IMPORTED_MODULE_4__.handlePasswordResetFinish, reset: _password_reset_reducer__WEBPACK_IMPORTED_MODULE_4__.reset };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(null, mapDispatchToProps)(PasswordResetFinishPage));

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/modules/account/password-reset/finish/password-reset-finish.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/modules/account/password-reset/finish/password-reset-finish.tsx"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/modules/account/password-reset/init/password-reset-init.tsx":
/*!*****************************************************************************************!*\
  !*** ./src/main/webapp/app/modules/account/password-reset/init/password-reset-init.tsx ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordResetInit": () => (/* binding */ PasswordResetInit),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! availity-reactstrap-validation */ "./node_modules/availity-reactstrap-validation/lib/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Alert.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Button.js");
/* harmony import */ var _password_reset_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../password-reset.reducer */ "./src/main/webapp/app/modules/account/password-reset/password-reset.reducer.ts");





class PasswordResetInit extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    constructor() {
        super(...arguments);
        this.handleValidSubmit = (event, values) => {
            this.props.handlePasswordResetInit(values.email);
            event.preventDefault();
        };
    }
    componentWillUnmount() {
        this.props.reset();
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.default, { className: "justify-content-center" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, { md: "8" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Reset your password"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, { color: "warning" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Enter the email address you used to register")),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_2__.AvForm, { onValidSubmit: this.handleValidSubmit },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_2__.AvField, { name: "email", label: "Email", placeholder: 'Your email', type: "email", validate: {
                                required: { value: true, errorMessage: 'Your email is required.' },
                                minLength: { value: 5, errorMessage: 'Your email is required to be at least 5 characters.' },
                                maxLength: { value: 254, errorMessage: 'Your email cannot be longer than 50 characters.' },
                            }, "data-cy": "emailResetPassword" }),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, { color: "primary", type: "submit", "data-cy": "submit" }, "Reset password"))))));
    }
}
const mapDispatchToProps = { handlePasswordResetInit: _password_reset_reducer__WEBPACK_IMPORTED_MODULE_3__.handlePasswordResetInit, reset: _password_reset_reducer__WEBPACK_IMPORTED_MODULE_3__.reset };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(null, mapDispatchToProps)(PasswordResetInit));

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/modules/account/password-reset/init/password-reset-init.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/modules/account/password-reset/init/password-reset-init.tsx"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/modules/account/password-reset/password-reset.reducer.ts":
/*!**************************************************************************************!*\
  !*** ./src/main/webapp/app/modules/account/password-reset/password-reset.reducer.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ACTION_TYPES": () => (/* binding */ ACTION_TYPES),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "handlePasswordResetInit": () => (/* binding */ handlePasswordResetInit),
/* harmony export */   "handlePasswordResetFinish": () => (/* binding */ handlePasswordResetFinish),
/* harmony export */   "reset": () => (/* binding */ reset)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/reducers/action-type.util */ "./src/main/webapp/app/shared/reducers/action-type.util.ts");


const ACTION_TYPES = {
    RESET_PASSWORD_INIT: 'passwordReset/RESET_PASSWORD_INIT',
    RESET_PASSWORD_FINISH: 'passwordReset/RESET_PASSWORD_FINISH',
    RESET: 'passwordReset/RESET',
};
const initialState = {
    loading: false,
    resetPasswordSuccess: false,
    resetPasswordFailure: false,
};
// Reducer
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((state = initialState, action) => {
    switch (action.type) {
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.REQUEST)(ACTION_TYPES.RESET_PASSWORD_FINISH):
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.REQUEST)(ACTION_TYPES.RESET_PASSWORD_INIT):
            return Object.assign(Object.assign({}, state), { loading: true });
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.FAILURE)(ACTION_TYPES.RESET_PASSWORD_FINISH):
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.FAILURE)(ACTION_TYPES.RESET_PASSWORD_INIT):
            return Object.assign(Object.assign({}, initialState), { loading: false, resetPasswordFailure: true });
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.SUCCESS)(ACTION_TYPES.RESET_PASSWORD_FINISH):
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.SUCCESS)(ACTION_TYPES.RESET_PASSWORD_INIT):
            return Object.assign(Object.assign({}, initialState), { loading: false, resetPasswordSuccess: true });
        case ACTION_TYPES.RESET:
            return Object.assign({}, initialState);
        default:
            return state;
    }
});
const apiUrl = 'api/account/reset-password';
// Actions
const handlePasswordResetInit = mail => ({
    type: ACTION_TYPES.RESET_PASSWORD_INIT,
    // If the content-type isn't set that way, axios will try to encode the body and thus modify the data sent to the server.
    payload: axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${apiUrl}/init`, mail, { headers: { ['Content-Type']: 'text/plain' } }),
    meta: {
        successMessage: 'Check your emails for details on how to reset your password.',
    },
});
const handlePasswordResetFinish = (key, newPassword) => ({
    type: ACTION_TYPES.RESET_PASSWORD_FINISH,
    payload: axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${apiUrl}/finish`, { key, newPassword }),
    meta: {
        successMessage: '<strong>Your password has been reset.</strong> Please ',
    },
});
const reset = () => ({
    type: ACTION_TYPES.RESET,
});

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/modules/account/password-reset/password-reset.reducer.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/modules/account/password-reset/password-reset.reducer.ts"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/modules/account/password/password.reducer.ts":
/*!**************************************************************************!*\
  !*** ./src/main/webapp/app/modules/account/password/password.reducer.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ACTION_TYPES": () => (/* binding */ ACTION_TYPES),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "savePassword": () => (/* binding */ savePassword),
/* harmony export */   "reset": () => (/* binding */ reset)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/reducers/action-type.util */ "./src/main/webapp/app/shared/reducers/action-type.util.ts");


const ACTION_TYPES = {
    UPDATE_PASSWORD: 'account/UPDATE_PASSWORD',
    RESET: 'account/RESET',
};
const initialState = {
    loading: false,
    errorMessage: null,
    updateSuccess: false,
    updateFailure: false,
};
// Reducer
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((state = initialState, action) => {
    switch (action.type) {
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.REQUEST)(ACTION_TYPES.UPDATE_PASSWORD):
            return Object.assign(Object.assign({}, initialState), { errorMessage: null, updateSuccess: false, loading: true });
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.FAILURE)(ACTION_TYPES.UPDATE_PASSWORD):
            return Object.assign(Object.assign({}, initialState), { loading: false, updateSuccess: false, updateFailure: true });
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.SUCCESS)(ACTION_TYPES.UPDATE_PASSWORD):
            return Object.assign(Object.assign({}, initialState), { loading: false, updateSuccess: true, updateFailure: false });
        case ACTION_TYPES.RESET:
            return Object.assign({}, initialState);
        default:
            return state;
    }
});
// Actions
const apiUrl = 'api/account';
const savePassword = (currentPassword, newPassword) => ({
    type: ACTION_TYPES.UPDATE_PASSWORD,
    payload: axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${apiUrl}/change-password`, { currentPassword, newPassword }),
    meta: {
        successMessage: '<strong>Password changed!</strong>',
        errorMessage: '<strong>An error has occurred!</strong> The password could not be changed.',
    },
});
const reset = () => ({
    type: ACTION_TYPES.RESET,
});

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/modules/account/password/password.reducer.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/modules/account/password/password.reducer.ts"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/modules/account/register/register.reducer.ts":
/*!**************************************************************************!*\
  !*** ./src/main/webapp/app/modules/account/register/register.reducer.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ACTION_TYPES": () => (/* binding */ ACTION_TYPES),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "handleRegister": () => (/* binding */ handleRegister),
/* harmony export */   "reset": () => (/* binding */ reset)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/reducers/action-type.util */ "./src/main/webapp/app/shared/reducers/action-type.util.ts");


const ACTION_TYPES = {
    CREATE_ACCOUNT: 'register/CREATE_ACCOUNT',
    RESET: 'register/RESET',
};
const initialState = {
    loading: false,
    registrationSuccess: false,
    registrationFailure: false,
    errorMessage: null,
};
// Reducer
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((state = initialState, action) => {
    switch (action.type) {
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.REQUEST)(ACTION_TYPES.CREATE_ACCOUNT):
            return Object.assign(Object.assign({}, state), { loading: true });
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.FAILURE)(ACTION_TYPES.CREATE_ACCOUNT):
            return Object.assign(Object.assign({}, initialState), { registrationFailure: true, errorMessage: action.payload.response.data.errorKey });
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.SUCCESS)(ACTION_TYPES.CREATE_ACCOUNT):
            return Object.assign(Object.assign({}, initialState), { registrationSuccess: true });
        case ACTION_TYPES.RESET:
            return Object.assign({}, initialState);
        default:
            return state;
    }
});
// Actions
const handleRegister = (login, email, password, langKey = 'en') => ({
    type: ACTION_TYPES.CREATE_ACCOUNT,
    payload: axios__WEBPACK_IMPORTED_MODULE_0___default().post('api/register', { login, email, password, langKey }),
    meta: {
        successMessage: '<strong>Registration saved!</strong> Please check your email for confirmation.',
    },
});
const reset = () => ({
    type: ACTION_TYPES.RESET,
});

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/modules/account/register/register.reducer.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/modules/account/register/register.reducer.ts"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/modules/account/register/register.tsx":
/*!*******************************************************************!*\
  !*** ./src/main/webapp/app/modules/account/register/register.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! availity-reactstrap-validation */ "./node_modules/availity-reactstrap-validation/lib/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Button.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Alert.js");
/* harmony import */ var app_shared_layout_password_password_strength_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/layout/password/password-strength-bar */ "./src/main/webapp/app/shared/layout/password/password-strength-bar.tsx");
/* harmony import */ var _register_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register.reducer */ "./src/main/webapp/app/modules/account/register/register.reducer.ts");






const RegisterPage = (props) => {
    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => () => {
        props.reset();
    }, []);
    const handleValidSubmit = (event, values) => {
        props.handleRegister(values.username, values.email, values.firstPassword);
        event.preventDefault();
    };
    const updatePassword = event => setPassword(event.target.value);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, { className: "justify-content-center" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, { md: "8" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", { id: "register-title", "data-cy": "registerTitle" }, "Registration"))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, { className: "justify-content-center" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, { md: "8" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_2__.AvForm, { id: "register-form", onValidSubmit: handleValidSubmit },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_2__.AvField, { name: "username", label: "Username", placeholder: 'Your username', validate: {
                            required: { value: true, errorMessage: 'Your username is required.' },
                            pattern: {
                                value: '^[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$|^[_.@A-Za-z0-9-]+$',
                                errorMessage: 'Your username is invalid.',
                            },
                            minLength: { value: 1, errorMessage: 'Your username is required to be at least 1 character.' },
                            maxLength: { value: 50, errorMessage: 'Your username cannot be longer than 50 characters.' },
                        }, "data-cy": "username" }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_2__.AvField, { name: "email", label: "Email", placeholder: 'Your email', type: "email", validate: {
                            required: { value: true, errorMessage: 'Your email is required.' },
                            minLength: { value: 5, errorMessage: 'Your email is required to be at least 5 characters.' },
                            maxLength: { value: 254, errorMessage: 'Your email cannot be longer than 50 characters.' },
                        }, "data-cy": "email" }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_2__.AvField, { name: "firstPassword", label: "New password", placeholder: 'New password', type: "password", onChange: updatePassword, validate: {
                            required: { value: true, errorMessage: 'Your password is required.' },
                            minLength: { value: 4, errorMessage: 'Your password is required to be at least 4 characters.' },
                            maxLength: { value: 50, errorMessage: 'Your password cannot be longer than 50 characters.' },
                        }, "data-cy": "firstPassword" }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(app_shared_layout_password_password_strength_bar__WEBPACK_IMPORTED_MODULE_3__.default, { password: password }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_2__.AvField, { name: "secondPassword", label: "New password confirmation", placeholder: "Confirm the new password", type: "password", validate: {
                            required: { value: true, errorMessage: 'Your confirmation password is required.' },
                            minLength: { value: 4, errorMessage: 'Your confirmation password is required to be at least 4 characters.' },
                            maxLength: { value: 50, errorMessage: 'Your confirmation password cannot be longer than 50 characters.' },
                            match: { value: 'firstPassword', errorMessage: 'The password and its confirmation do not match!' },
                        }, "data-cy": "secondPassword" }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, { id: "register-submit", color: "primary", type: "submit", "data-cy": "submit" }, "Register")),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "\u00A0"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.default, { color: "warning" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "If you want to"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { className: "alert-link" }, " sign in"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null,
                        ", you can try the default accounts:",
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null),
                        "- Administrator (login=\"admin\" and password=\"admin\")",
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null),
                        "- User (login=\"user\" and password=\"user\")."))))));
};
const mapDispatchToProps = { handleRegister: _register_reducer__WEBPACK_IMPORTED_MODULE_4__.handleRegister, reset: _register_reducer__WEBPACK_IMPORTED_MODULE_4__.reset };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(null, mapDispatchToProps)(RegisterPage));

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/modules/account/register/register.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/modules/account/register/register.tsx"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/modules/account/sessions/sessions.reducer.ts":
/*!**************************************************************************!*\
  !*** ./src/main/webapp/app/modules/account/sessions/sessions.reducer.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ACTION_TYPES": () => (/* binding */ ACTION_TYPES),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "findAll": () => (/* binding */ findAll),
/* harmony export */   "invalidateSession": () => (/* binding */ invalidateSession)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/reducers/action-type.util */ "./src/main/webapp/app/shared/reducers/action-type.util.ts");


const ACTION_TYPES = {
    FIND_ALL: 'sessions/FIND_ALL',
    INVALIDATE: 'sessions/INVALIDATE',
};
const initialState = {
    loading: false,
    sessions: [],
    updateSuccess: false,
    updateFailure: false,
};
// Reducer
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((state = initialState, action) => {
    switch (action.type) {
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.REQUEST)(ACTION_TYPES.FIND_ALL):
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.REQUEST)(ACTION_TYPES.INVALIDATE):
            return Object.assign(Object.assign({}, state), { loading: true });
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.FAILURE)(ACTION_TYPES.FIND_ALL):
            return Object.assign(Object.assign({}, state), { loading: false });
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.FAILURE)(ACTION_TYPES.INVALIDATE):
            return Object.assign(Object.assign({}, state), { loading: false, updateFailure: true });
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.SUCCESS)(ACTION_TYPES.FIND_ALL):
            return Object.assign(Object.assign({}, state), { loading: false, sessions: action.payload.data });
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.SUCCESS)(ACTION_TYPES.INVALIDATE):
            return Object.assign(Object.assign({}, state), { loading: false, updateSuccess: true });
        default:
            return state;
    }
});
// Actions
const apiURL = '/api/account/sessions/';
const findAll = () => ({
    type: ACTION_TYPES.FIND_ALL,
    payload: axios__WEBPACK_IMPORTED_MODULE_0___default().get(apiURL),
});
const invalidateSession = series => ({
    type: ACTION_TYPES.INVALIDATE,
    payload: axios__WEBPACK_IMPORTED_MODULE_0___default().delete(`${apiURL}${series}`),
});

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/modules/account/sessions/sessions.reducer.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/modules/account/sessions/sessions.reducer.ts"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/modules/account/settings/settings.reducer.ts":
/*!**************************************************************************!*\
  !*** ./src/main/webapp/app/modules/account/settings/settings.reducer.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ACTION_TYPES": () => (/* binding */ ACTION_TYPES),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "saveAccountSettings": () => (/* binding */ saveAccountSettings),
/* harmony export */   "reset": () => (/* binding */ reset)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/reducers/action-type.util */ "./src/main/webapp/app/shared/reducers/action-type.util.ts");
/* harmony import */ var app_shared_reducers_authentication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/reducers/authentication */ "./src/main/webapp/app/shared/reducers/authentication.ts");




const ACTION_TYPES = {
    UPDATE_ACCOUNT: 'account/UPDATE_ACCOUNT',
    RESET: 'account/RESET',
};
const initialState = {
    loading: false,
    errorMessage: null,
    updateSuccess: false,
    updateFailure: false,
};
// Reducer
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((state = initialState, action) => {
    switch (action.type) {
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.REQUEST)(ACTION_TYPES.UPDATE_ACCOUNT):
            return Object.assign(Object.assign({}, state), { errorMessage: null, updateSuccess: false, loading: true });
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.FAILURE)(ACTION_TYPES.UPDATE_ACCOUNT):
            return Object.assign(Object.assign({}, state), { loading: false, updateSuccess: false, updateFailure: true });
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.SUCCESS)(ACTION_TYPES.UPDATE_ACCOUNT):
            return Object.assign(Object.assign({}, state), { loading: false, updateSuccess: true, updateFailure: false });
        case ACTION_TYPES.RESET:
            return Object.assign({}, initialState);
        default:
            return state;
    }
});
// Actions
const apiUrl = 'api/account';
const saveAccountSettings = account => (dispatch) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(void 0, void 0, void 0, function* () {
    yield dispatch({
        type: ACTION_TYPES.UPDATE_ACCOUNT,
        payload: axios__WEBPACK_IMPORTED_MODULE_0___default().post(apiUrl, account),
        meta: {
            successMessage: '<strong>Settings saved!</strong>',
        },
    });
    yield dispatch((0,app_shared_reducers_authentication__WEBPACK_IMPORTED_MODULE_2__.getSession)());
});
const reset = () => ({
    type: ACTION_TYPES.RESET,
});

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/modules/account/settings/settings.reducer.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/modules/account/settings/settings.reducer.ts"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/modules/administration/administration.reducer.ts":
/*!******************************************************************************!*\
  !*** ./src/main/webapp/app/modules/administration/administration.reducer.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ACTION_TYPES": () => (/* binding */ ACTION_TYPES),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "systemHealth": () => (/* binding */ systemHealth),
/* harmony export */   "systemMetrics": () => (/* binding */ systemMetrics),
/* harmony export */   "systemThreadDump": () => (/* binding */ systemThreadDump),
/* harmony export */   "getLoggers": () => (/* binding */ getLoggers),
/* harmony export */   "changeLogLevel": () => (/* binding */ changeLogLevel),
/* harmony export */   "getConfigurations": () => (/* binding */ getConfigurations),
/* harmony export */   "getEnv": () => (/* binding */ getEnv)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/reducers/action-type.util */ "./src/main/webapp/app/shared/reducers/action-type.util.ts");



const ACTION_TYPES = {
    FETCH_LOGS: 'administration/FETCH_LOGS',
    FETCH_LOGS_CHANGE_LEVEL: 'administration/FETCH_LOGS_CHANGE_LEVEL',
    FETCH_HEALTH: 'administration/FETCH_HEALTH',
    FETCH_METRICS: 'administration/FETCH_METRICS',
    FETCH_THREAD_DUMP: 'administration/FETCH_THREAD_DUMP',
    FETCH_CONFIGURATIONS: 'administration/FETCH_CONFIGURATIONS',
    FETCH_ENV: 'administration/FETCH_ENV',
};
const initialState = {
    loading: false,
    errorMessage: null,
    logs: {
        loggers: [],
    },
    health: {},
    metrics: {},
    threadDump: [],
    configuration: {
        configProps: {},
        env: {},
    },
    totalItems: 0,
};
// Reducer
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((state = initialState, action) => {
    switch (action.type) {
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.REQUEST)(ACTION_TYPES.FETCH_METRICS):
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.REQUEST)(ACTION_TYPES.FETCH_THREAD_DUMP):
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.REQUEST)(ACTION_TYPES.FETCH_LOGS):
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.REQUEST)(ACTION_TYPES.FETCH_CONFIGURATIONS):
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.REQUEST)(ACTION_TYPES.FETCH_ENV):
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.REQUEST)(ACTION_TYPES.FETCH_HEALTH):
            return Object.assign(Object.assign({}, state), { errorMessage: null, loading: true });
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.FAILURE)(ACTION_TYPES.FETCH_METRICS):
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.FAILURE)(ACTION_TYPES.FETCH_THREAD_DUMP):
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.FAILURE)(ACTION_TYPES.FETCH_LOGS):
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.FAILURE)(ACTION_TYPES.FETCH_CONFIGURATIONS):
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.FAILURE)(ACTION_TYPES.FETCH_ENV):
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.FAILURE)(ACTION_TYPES.FETCH_HEALTH):
            return Object.assign(Object.assign({}, state), { loading: false, errorMessage: action.payload });
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.SUCCESS)(ACTION_TYPES.FETCH_METRICS):
            return Object.assign(Object.assign({}, state), { loading: false, metrics: action.payload.data });
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.SUCCESS)(ACTION_TYPES.FETCH_THREAD_DUMP):
            return Object.assign(Object.assign({}, state), { loading: false, threadDump: action.payload.data });
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.SUCCESS)(ACTION_TYPES.FETCH_LOGS):
            return Object.assign(Object.assign({}, state), { loading: false, logs: {
                    loggers: action.payload.data.loggers,
                } });
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.SUCCESS)(ACTION_TYPES.FETCH_CONFIGURATIONS):
            return Object.assign(Object.assign({}, state), { loading: false, configuration: Object.assign(Object.assign({}, state.configuration), { configProps: action.payload.data }) });
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.SUCCESS)(ACTION_TYPES.FETCH_ENV):
            return Object.assign(Object.assign({}, state), { loading: false, configuration: Object.assign(Object.assign({}, state.configuration), { env: action.payload.data }) });
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.SUCCESS)(ACTION_TYPES.FETCH_HEALTH):
            return Object.assign(Object.assign({}, state), { loading: false, health: action.payload.data });
        default:
            return state;
    }
});
// Actions
const systemHealth = () => ({
    type: ACTION_TYPES.FETCH_HEALTH,
    payload: axios__WEBPACK_IMPORTED_MODULE_0___default().get('management/health'),
});
const systemMetrics = () => ({
    type: ACTION_TYPES.FETCH_METRICS,
    payload: axios__WEBPACK_IMPORTED_MODULE_0___default().get('management/jhimetrics'),
});
const systemThreadDump = () => ({
    type: ACTION_TYPES.FETCH_THREAD_DUMP,
    payload: axios__WEBPACK_IMPORTED_MODULE_0___default().get('management/threaddump'),
});
const getLoggers = () => ({
    type: ACTION_TYPES.FETCH_LOGS,
    payload: axios__WEBPACK_IMPORTED_MODULE_0___default().get('management/loggers'),
});
const changeLogLevel = (name, configuredLevel) => {
    const body = { configuredLevel };
    return (dispatch) => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(void 0, void 0, void 0, function* () {
        yield dispatch({
            type: ACTION_TYPES.FETCH_LOGS_CHANGE_LEVEL,
            payload: axios__WEBPACK_IMPORTED_MODULE_0___default().post('management/loggers/' + name, body),
        });
        dispatch(getLoggers());
    });
};
const getConfigurations = () => ({
    type: ACTION_TYPES.FETCH_CONFIGURATIONS,
    payload: axios__WEBPACK_IMPORTED_MODULE_0___default().get('management/configprops'),
});
const getEnv = () => ({
    type: ACTION_TYPES.FETCH_ENV,
    payload: axios__WEBPACK_IMPORTED_MODULE_0___default().get('management/env'),
});

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/modules/administration/administration.reducer.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/modules/administration/administration.reducer.ts"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/modules/administration/user-management/user-management.reducer.ts":
/*!***********************************************************************************************!*\
  !*** ./src/main/webapp/app/modules/administration/user-management/user-management.reducer.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ACTION_TYPES": () => (/* binding */ ACTION_TYPES),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getUsers": () => (/* binding */ getUsers),
/* harmony export */   "getUsersAsAdmin": () => (/* binding */ getUsersAsAdmin),
/* harmony export */   "getRoles": () => (/* binding */ getRoles),
/* harmony export */   "getUser": () => (/* binding */ getUser),
/* harmony export */   "createUser": () => (/* binding */ createUser),
/* harmony export */   "updateUser": () => (/* binding */ updateUser),
/* harmony export */   "deleteUser": () => (/* binding */ deleteUser),
/* harmony export */   "reset": () => (/* binding */ reset)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/reducers/action-type.util */ "./src/main/webapp/app/shared/reducers/action-type.util.ts");
/* harmony import */ var app_shared_model_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/model/user.model */ "./src/main/webapp/app/shared/model/user.model.ts");




const ACTION_TYPES = {
    FETCH_ROLES: 'userManagement/FETCH_ROLES',
    FETCH_USERS: 'userManagement/FETCH_USERS',
    FETCH_USERS_AS_ADMIN: 'userManagement/FETCH_USERS_AS_ADMIN',
    FETCH_USER: 'userManagement/FETCH_USER',
    CREATE_USER: 'userManagement/CREATE_USER',
    UPDATE_USER: 'userManagement/UPDATE_USER',
    DELETE_USER: 'userManagement/DELETE_USER',
    RESET: 'userManagement/RESET',
};
const initialState = {
    loading: false,
    errorMessage: null,
    users: [],
    authorities: [],
    user: app_shared_model_user_model__WEBPACK_IMPORTED_MODULE_2__.defaultValue,
    updating: false,
    updateSuccess: false,
    totalItems: 0,
};
// Reducer
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((state = initialState, action) => {
    switch (action.type) {
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.REQUEST)(ACTION_TYPES.FETCH_ROLES):
            return Object.assign({}, state);
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.REQUEST)(ACTION_TYPES.FETCH_USERS):
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.REQUEST)(ACTION_TYPES.FETCH_USERS_AS_ADMIN):
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.REQUEST)(ACTION_TYPES.FETCH_USER):
            return Object.assign(Object.assign({}, state), { errorMessage: null, updateSuccess: false, loading: true });
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.REQUEST)(ACTION_TYPES.CREATE_USER):
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.REQUEST)(ACTION_TYPES.UPDATE_USER):
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.REQUEST)(ACTION_TYPES.DELETE_USER):
            return Object.assign(Object.assign({}, state), { errorMessage: null, updateSuccess: false, updating: true });
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.FAILURE)(ACTION_TYPES.FETCH_USERS):
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.FAILURE)(ACTION_TYPES.FETCH_USERS_AS_ADMIN):
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.FAILURE)(ACTION_TYPES.FETCH_USER):
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.FAILURE)(ACTION_TYPES.FETCH_ROLES):
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.FAILURE)(ACTION_TYPES.CREATE_USER):
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.FAILURE)(ACTION_TYPES.UPDATE_USER):
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.FAILURE)(ACTION_TYPES.DELETE_USER):
            return Object.assign(Object.assign({}, state), { loading: false, updating: false, updateSuccess: false, errorMessage: action.payload });
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.SUCCESS)(ACTION_TYPES.FETCH_ROLES):
            return Object.assign(Object.assign({}, state), { authorities: action.payload.data });
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.SUCCESS)(ACTION_TYPES.FETCH_USERS):
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.SUCCESS)(ACTION_TYPES.FETCH_USERS_AS_ADMIN):
            return Object.assign(Object.assign({}, state), { loading: false, users: action.payload.data, totalItems: parseInt(action.payload.headers['x-total-count'], 10) });
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.SUCCESS)(ACTION_TYPES.FETCH_USER):
            return Object.assign(Object.assign({}, state), { loading: false, user: action.payload.data });
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.SUCCESS)(ACTION_TYPES.CREATE_USER):
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.SUCCESS)(ACTION_TYPES.UPDATE_USER):
            return Object.assign(Object.assign({}, state), { updating: false, updateSuccess: true, user: action.payload.data });
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.SUCCESS)(ACTION_TYPES.DELETE_USER):
            return Object.assign(Object.assign({}, state), { updating: false, updateSuccess: true, user: app_shared_model_user_model__WEBPACK_IMPORTED_MODULE_2__.defaultValue });
        case ACTION_TYPES.RESET:
            return Object.assign({}, initialState);
        default:
            return state;
    }
});
const apiUrl = 'api/users';
const adminUrl = 'api/admin/users';
// Actions
const getUsers = (page, size, sort) => {
    const requestUrl = `${apiUrl}${sort ? `?page=${page}&size=${size}&sort=${sort}` : ''}`;
    return {
        type: ACTION_TYPES.FETCH_USERS,
        payload: axios__WEBPACK_IMPORTED_MODULE_0___default().get(requestUrl),
    };
};
const getUsersAsAdmin = (page, size, sort) => {
    const requestUrl = `${adminUrl}${sort ? `?page=${page}&size=${size}&sort=${sort}` : ''}`;
    return {
        type: ACTION_TYPES.FETCH_USERS_AS_ADMIN,
        payload: axios__WEBPACK_IMPORTED_MODULE_0___default().get(requestUrl),
    };
};
const getRoles = () => ({
    type: ACTION_TYPES.FETCH_ROLES,
    payload: axios__WEBPACK_IMPORTED_MODULE_0___default().get(`api/authorities`),
});
const getUser = id => {
    const requestUrl = `${adminUrl}/${id}`;
    return {
        type: ACTION_TYPES.FETCH_USER,
        payload: axios__WEBPACK_IMPORTED_MODULE_0___default().get(requestUrl),
    };
};
const createUser = user => (dispatch) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(void 0, void 0, void 0, function* () {
    const result = yield dispatch({
        type: ACTION_TYPES.CREATE_USER,
        payload: axios__WEBPACK_IMPORTED_MODULE_0___default().post(adminUrl, user),
    });
    dispatch(getUsersAsAdmin());
    return result;
});
const updateUser = user => (dispatch) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(void 0, void 0, void 0, function* () {
    const result = yield dispatch({
        type: ACTION_TYPES.UPDATE_USER,
        payload: axios__WEBPACK_IMPORTED_MODULE_0___default().put(adminUrl, user),
    });
    dispatch(getUsersAsAdmin());
    return result;
});
const deleteUser = id => (dispatch) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(void 0, void 0, void 0, function* () {
    const requestUrl = `${adminUrl}/${id}`;
    const result = yield dispatch({
        type: ACTION_TYPES.DELETE_USER,
        payload: axios__WEBPACK_IMPORTED_MODULE_0___default().delete(requestUrl),
    });
    dispatch(getUsersAsAdmin());
    return result;
});
const reset = () => ({
    type: ACTION_TYPES.RESET,
});

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/modules/administration/user-management/user-management.reducer.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/modules/administration/user-management/user-management.reducer.ts"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/modules/home/home.tsx":
/*!***************************************************!*\
  !*** ./src/main/webapp/app/modules/home/home.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Home": () => (/* binding */ Home),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.scss */ "./src/main/webapp/app/modules/home/home.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Alert.js");





const Home = (props) => {
    const { account } = props;
    return (react__WEBPACK_IMPORTED_MODULE_1__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__.default, null,
        react__WEBPACK_IMPORTED_MODULE_1__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.default, { md: "3", className: "pad" },
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", { className: "hipster rounded" })),
        react__WEBPACK_IMPORTED_MODULE_1__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.default, { md: "9" },
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("h2", null, "Welcome, Java Hipster!"),
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", { className: "lead" }, "This is your homepage"),
            account && account.login ? (react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_1__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, { color: "success" },
                    "You are logged in as user ",
                    account.login,
                    "."))) : (react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_1__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, { color: "warning" },
                    "If you want to",
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "\u00A0"),
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, { to: "/login", className: "alert-link" },
                        ' ',
                        "sign in"),
                    ", you can try the default accounts:",
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", null),
                    "- Administrator (login=\"admin\" and password=\"admin\")",
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", null),
                    "- User (login=\"user\" and password=\"user\")."),
                react__WEBPACK_IMPORTED_MODULE_1__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, { color: "warning" },
                    "You do not have an account yet?\u00A0",
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, { to: "/account/register", className: "alert-link" }, "Register a new account")))),
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, "If you have any question on JHipster:"),
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("ul", null,
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", null,
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", { href: "https://www.jhipster.tech/", target: "_blank", rel: "noopener noreferrer" }, "JHipster homepage")),
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", null,
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", { href: "http://stackoverflow.com/tags/jhipster/info", target: "_blank", rel: "noopener noreferrer" }, "JHipster on Stack Overflow")),
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", null,
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", { href: "https://github.com/jhipster/generator-jhipster/issues?state=open", target: "_blank", rel: "noopener noreferrer" }, "JHipster bug tracker")),
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", null,
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", { href: "https://gitter.im/jhipster/generator-jhipster", target: "_blank", rel: "noopener noreferrer" }, "JHipster public chat room")),
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", null,
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", { href: "https://twitter.com/jhipster", target: "_blank", rel: "noopener noreferrer" }, "follow @jhipster on Twitter"))),
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null,
                "If you like JHipster, do not forget to give us a star on",
                ' ',
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", { href: "https://github.com/jhipster/generator-jhipster", target: "_blank", rel: "noopener noreferrer" }, "GitHub"),
                "!"))));
};
const mapStateToProps = storeState => ({
    account: storeState.authentication.account,
    isAuthenticated: storeState.authentication.isAuthenticated,
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps)(Home));

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/modules/home/home.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/modules/home/home.tsx"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/modules/login/login-modal.tsx":
/*!***********************************************************!*\
  !*** ./src/main/webapp/app/modules/login/login-modal.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Modal.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/ModalHeader.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/ModalBody.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Alert.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Label.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/ModalFooter.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Button.js");
/* harmony import */ var availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! availity-reactstrap-validation */ "./node_modules/availity-reactstrap-validation/lib/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");




class LoginModal extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    constructor() {
        super(...arguments);
        this.handleSubmit = (event, errors, { username, password, rememberMe }) => {
            const { handleLogin } = this.props;
            handleLogin(username, password, rememberMe);
        };
    }
    render() {
        const { loginError, handleClose } = this.props;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__.default, { isOpen: this.props.showModal, toggle: handleClose, backdrop: "static", id: "login-page", autoFocus: false },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__.AvForm, { onSubmit: this.handleSubmit },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__.default, { id: "login-title", "data-cy": "loginTitle", toggle: handleClose }, "Sign in"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.default, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, null,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, { md: "12" }, loginError ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, { color: "danger", "data-cy": "loginError" },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Failed to sign in!"),
                            " Please check your credentials and try again.")) : null),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, { md: "12" },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__.AvField, { name: "username", label: "Username", placeholder: "Your username", required: true, errorMessage: "Username cannot be empty!", autoFocus: true, "data-cy": "username" }),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__.AvField, { name: "password", type: "password", label: "Password", placeholder: "Your password", required: true, errorMessage: "Password cannot be empty!", "data-cy": "password" }),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__.AvGroup, { check: true, inline: true },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.default, { className: "form-check-label" },
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__.AvInput, { type: "checkbox", name: "rememberMe" }),
                                    " Remember me")))),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "mt-1" }, "\u00A0"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, { color: "warning" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, { to: "/account/reset/request", "data-cy": "forgetYourPasswordSelector" }, "Did you forget your password?")),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, { color: "warning" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "You don't have an account yet?"),
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, { to: "/account/register" }, "Register a new account"))),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__.default, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__.default, { color: "secondary", onClick: handleClose, tabIndex: 1 }, "Cancel"),
                    ' ',
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__.default, { color: "primary", type: "submit", "data-cy": "submit" }, "Sign in")))));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginModal);

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/modules/login/login-modal.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/modules/login/login-modal.tsx"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/modules/login/login.tsx":
/*!*****************************************************!*\
  !*** ./src/main/webapp/app/modules/login/login.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Login": () => (/* binding */ Login),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var app_shared_reducers_authentication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/reducers/authentication */ "./src/main/webapp/app/shared/reducers/authentication.ts");
/* harmony import */ var _login_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-modal */ "./src/main/webapp/app/modules/login/login-modal.tsx");





const Login = (props) => {
    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.showModal);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        setShowModal(true);
    }, []);
    const handleLogin = (username, password, rememberMe = false) => props.login(username, password, rememberMe);
    const handleClose = () => {
        setShowModal(false);
        props.history.push('/');
    };
    const { location, isAuthenticated } = props;
    const { from } = location.state || { from: { pathname: '/', search: location.search } };
    if (isAuthenticated) {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Redirect, { to: from });
    }
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_login_modal__WEBPACK_IMPORTED_MODULE_3__.default, { showModal: showModal, handleLogin: handleLogin, handleClose: handleClose, loginError: props.loginError });
};
const mapStateToProps = ({ authentication }) => ({
    isAuthenticated: authentication.isAuthenticated,
    loginError: authentication.loginError,
    showModal: authentication.showModalLogin,
});
const mapDispatchToProps = { login: app_shared_reducers_authentication__WEBPACK_IMPORTED_MODULE_2__.login };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(Login));

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/modules/login/login.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/modules/login/login.tsx"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/modules/login/logout.tsx":
/*!******************************************************!*\
  !*** ./src/main/webapp/app/modules/login/logout.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Logout": () => (/* binding */ Logout),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var app_shared_reducers_authentication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/reducers/authentication */ "./src/main/webapp/app/shared/reducers/authentication.ts");



const Logout = (props) => {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
        props.logout();
        const logoutUrl = props.logoutUrl;
        if (logoutUrl) {
            // if Keycloak, logoutUrl has protocol/openid-connect in it
            window.location.href = logoutUrl.includes('/protocol')
                ? logoutUrl + '?redirect_uri=' + window.location.origin
                : logoutUrl + '?id_token_hint=' + props.idToken + '&post_logout_redirect_uri=' + window.location.origin;
        }
    });
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "p-5" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Logged out successfully!")));
};
const mapStateToProps = (storeState) => ({
    logoutUrl: storeState.authentication.logoutUrl,
    idToken: storeState.authentication.idToken,
});
const mapDispatchToProps = { logout: app_shared_reducers_authentication__WEBPACK_IMPORTED_MODULE_2__.logout };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(Logout));

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/modules/login/logout.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/modules/login/logout.tsx"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/routes.tsx":
/*!****************************************!*\
  !*** ./src/main/webapp/app/routes.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loadable */ "./node_modules/react-loadable/lib/index.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_modules_login_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/modules/login/login */ "./src/main/webapp/app/modules/login/login.tsx");
/* harmony import */ var app_modules_account_register_register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/modules/account/register/register */ "./src/main/webapp/app/modules/account/register/register.tsx");
/* harmony import */ var app_modules_account_activate_activate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/modules/account/activate/activate */ "./src/main/webapp/app/modules/account/activate/activate.tsx");
/* harmony import */ var app_modules_account_password_reset_init_password_reset_init__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/modules/account/password-reset/init/password-reset-init */ "./src/main/webapp/app/modules/account/password-reset/init/password-reset-init.tsx");
/* harmony import */ var app_modules_account_password_reset_finish_password_reset_finish__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/modules/account/password-reset/finish/password-reset-finish */ "./src/main/webapp/app/modules/account/password-reset/finish/password-reset-finish.tsx");
/* harmony import */ var app_modules_login_logout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/modules/login/logout */ "./src/main/webapp/app/modules/login/logout.tsx");
/* harmony import */ var app_modules_home_home__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/modules/home/home */ "./src/main/webapp/app/modules/home/home.tsx");
/* harmony import */ var app_entities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/entities */ "./src/main/webapp/app/entities/index.tsx");
/* harmony import */ var app_shared_auth_private_route__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/shared/auth/private-route */ "./src/main/webapp/app/shared/auth/private-route.tsx");
/* harmony import */ var app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/shared/error/error-boundary-route */ "./src/main/webapp/app/shared/error/error-boundary-route.tsx");
/* harmony import */ var app_shared_error_page_not_found__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/shared/error/page-not-found */ "./src/main/webapp/app/shared/error/page-not-found.tsx");
/* harmony import */ var app_config_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/config/constants */ "./src/main/webapp/app/config/constants.ts");















const Account = react_loadable__WEBPACK_IMPORTED_MODULE_1___default()({
    loader: () => __webpack_require__.e(/*! import() | account */ "account").then(__webpack_require__.bind(__webpack_require__, /*! app/modules/account */ "./src/main/webapp/app/modules/account/index.tsx")),
    loading: () => react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "loading ..."),
});
const Admin = react_loadable__WEBPACK_IMPORTED_MODULE_1___default()({
    loader: () => Promise.all(/*! import() | administration */[__webpack_require__.e("vendors"), __webpack_require__.e("administration")]).then(__webpack_require__.bind(__webpack_require__, /*! app/modules/administration */ "./src/main/webapp/app/modules/administration/index.tsx")),
    loading: () => react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "loading ..."),
});
const Routes = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "view-routes" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Switch, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_11__.default, { path: "/login", component: app_modules_login_login__WEBPACK_IMPORTED_MODULE_2__.default }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_11__.default, { path: "/logout", component: app_modules_login_logout__WEBPACK_IMPORTED_MODULE_7__.default }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_11__.default, { path: "/account/register", component: app_modules_account_register_register__WEBPACK_IMPORTED_MODULE_3__.default }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_11__.default, { path: "/account/activate/:key?", component: app_modules_account_activate_activate__WEBPACK_IMPORTED_MODULE_4__.default }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_11__.default, { path: "/account/reset/request", component: app_modules_account_password_reset_init_password_reset_init__WEBPACK_IMPORTED_MODULE_5__.default }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_11__.default, { path: "/account/reset/finish/:key?", component: app_modules_account_password_reset_finish_password_reset_finish__WEBPACK_IMPORTED_MODULE_6__.default }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(app_shared_auth_private_route__WEBPACK_IMPORTED_MODULE_10__.default, { path: "/admin", component: Admin, hasAnyAuthorities: [app_config_constants__WEBPACK_IMPORTED_MODULE_13__.AUTHORITIES.ADMIN] }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(app_shared_auth_private_route__WEBPACK_IMPORTED_MODULE_10__.default, { path: "/account", component: Account, hasAnyAuthorities: [app_config_constants__WEBPACK_IMPORTED_MODULE_13__.AUTHORITIES.ADMIN, app_config_constants__WEBPACK_IMPORTED_MODULE_13__.AUTHORITIES.USER] }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_11__.default, { path: "/", exact: true, component: app_modules_home_home__WEBPACK_IMPORTED_MODULE_8__.default }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(app_shared_auth_private_route__WEBPACK_IMPORTED_MODULE_10__.default, { path: "/", component: app_entities__WEBPACK_IMPORTED_MODULE_9__.default, hasAnyAuthorities: [app_config_constants__WEBPACK_IMPORTED_MODULE_13__.AUTHORITIES.USER] }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_11__.default, { component: app_shared_error_page_not_found__WEBPACK_IMPORTED_MODULE_12__.default }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Routes);

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/routes.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/routes.tsx"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/shared/auth/private-route.tsx":
/*!***********************************************************!*\
  !*** ./src/main/webapp/app/shared/auth/private-route.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivateRouteComponent": () => (/* binding */ PrivateRouteComponent),
/* harmony export */   "hasAnyAuthority": () => (/* binding */ hasAnyAuthority),
/* harmony export */   "PrivateRoute": () => (/* binding */ PrivateRoute),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var app_shared_error_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/error/error-boundary */ "./src/main/webapp/app/shared/error/error-boundary.tsx");





const PrivateRouteComponent = (_a) => {
    var { component: Component, isAuthenticated, sessionHasBeenFetched, isAuthorized, hasAnyAuthorities = [] } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__rest)(_a, ["component", "isAuthenticated", "sessionHasBeenFetched", "isAuthorized", "hasAnyAuthorities"]);
    const checkAuthorities = props => isAuthorized ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(app_shared_error_error_boundary__WEBPACK_IMPORTED_MODULE_2__.default, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, Object.assign({}, props)))) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "insufficient-authority" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "alert alert-danger" }, "You are not authorized to access this page.")));
    const renderRedirect = props => {
        if (!sessionHasBeenFetched) {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null);
        }
        else {
            return isAuthenticated ? (checkAuthorities(props)) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Redirect, { to: {
                    pathname: '/login',
                    search: props.location.search,
                    state: { from: props.location },
                } }));
        }
    };
    if (!Component)
        throw new Error(`A component needs to be specified for private route for path ${rest.path}`);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, Object.assign({}, rest, { render: renderRedirect }));
};
const hasAnyAuthority = (authorities, hasAnyAuthorities) => {
    if (authorities && authorities.length !== 0) {
        if (hasAnyAuthorities.length === 0) {
            return true;
        }
        return hasAnyAuthorities.some(auth => authorities.includes(auth));
    }
    return false;
};
const mapStateToProps = ({ authentication: { isAuthenticated, account, sessionHasBeenFetched } }, { hasAnyAuthorities = [] }) => ({
    isAuthenticated,
    isAuthorized: hasAnyAuthority(account.authorities, hasAnyAuthorities),
    sessionHasBeenFetched,
});
/**
 * A route wrapped in an authentication check so that routing happens only when you are authenticated.
 * Accepts same props as React router Route.
 * The route also checks for authorization if hasAnyAuthorities is specified.
 */
const PrivateRoute = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, null, null, { pure: false })(PrivateRouteComponent);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrivateRoute);

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/shared/auth/private-route.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/shared/auth/private-route.tsx"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/shared/error/error-boundary-route.tsx":
/*!*******************************************************************!*\
  !*** ./src/main/webapp/app/shared/error/error-boundary-route.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorBoundaryRoute": () => (/* binding */ ErrorBoundaryRoute),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var app_shared_error_error_boundary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/error/error-boundary */ "./src/main/webapp/app/shared/error/error-boundary.tsx");




const ErrorBoundaryRoute = (_a) => {
    var { component: Component } = _a, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__rest)(_a, ["component"]);
    const encloseInErrorBoundary = props => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(app_shared_error_error_boundary__WEBPACK_IMPORTED_MODULE_1__.default, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, Object.assign({}, props))));
    if (!Component)
        throw new Error(`A component needs to be specified for path ${rest.path}`);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, Object.assign({}, rest, { render: encloseInErrorBoundary }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorBoundaryRoute);

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/shared/error/error-boundary-route.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/shared/error/error-boundary-route.tsx"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/shared/error/error-boundary.tsx":
/*!*************************************************************!*\
  !*** ./src/main/webapp/app/shared/error/error-boundary.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

class ErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    constructor() {
        super(...arguments);
        this.state = { error: undefined, errorInfo: undefined };
    }
    componentDidCatch(error, errorInfo) {
        this.setState({
            error,
            errorInfo,
        });
    }
    render() {
        const { error, errorInfo } = this.state;
        if (errorInfo) {
            const errorDetails =  true ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("details", { className: "preserve-space" },
                error && error.toString(),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null),
                errorInfo.componentStack)) : 0;
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", { className: "error" }, "An unexpected error has occurred."),
                errorDetails));
        }
        return this.props.children;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorBoundary);

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/shared/error/error-boundary.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/shared/error/error-boundary.tsx"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/shared/error/page-not-found.tsx":
/*!*************************************************************!*\
  !*** ./src/main/webapp/app/shared/error/page-not-found.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Alert.js");


class PageNotFound extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__.default, { color: "danger" }, "The page does not exist.")));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageNotFound);

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/shared/error/page-not-found.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/shared/error/page-not-found.tsx"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/shared/layout/footer/footer.tsx":
/*!*************************************************************!*\
  !*** ./src/main/webapp/app/shared/layout/footer/footer.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.scss */ "./src/main/webapp/app/shared/layout/footer/footer.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");



const Footer = props => (react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "footer page-content" },
    react__WEBPACK_IMPORTED_MODULE_1__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__.default, null,
        react__WEBPACK_IMPORTED_MODULE_1__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__.default, { md: "12" },
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, "Your footer")))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/shared/layout/footer/footer.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/shared/layout/footer/footer.tsx"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/shared/layout/header/header-components.tsx":
/*!************************************************************************!*\
  !*** ./src/main/webapp/app/shared/layout/header/header-components.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrandIcon": () => (/* binding */ BrandIcon),
/* harmony export */   "Brand": () => (/* binding */ Brand),
/* harmony export */   "Home": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/NavbarBrand.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/NavItem.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/NavLink.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var app_config_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/config/constants */ "./src/main/webapp/app/config/constants.ts");





const BrandIcon = props => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", Object.assign({}, props, { className: "brand-icon" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { src: "content/images/logo-jhipster.png", alt: "Logo" })));
const Brand = props => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__.default, { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, to: "/", className: "brand-logo" },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(BrandIcon, null),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "brand-title" }, "AXA"),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "navbar-version" }, app_config_constants__WEBPACK_IMPORTED_MODULE_2__.default.VERSION)));
const Home = props => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, null,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, to: "/", className: "d-flex align-items-center" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, { icon: "home" }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Home"))));

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/shared/layout/header/header-components.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/shared/layout/header/header-components.tsx"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/shared/layout/header/header.tsx":
/*!*************************************************************!*\
  !*** ./src/main/webapp/app/shared/layout/header/header.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.scss */ "./src/main/webapp/app/shared/layout/header/header.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Navbar.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/NavbarToggler.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Collapse.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Nav.js");
/* harmony import */ var react_redux_loading_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux-loading-bar */ "./node_modules/react-redux-loading-bar/build/index.js");
/* harmony import */ var _header_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header-components */ "./src/main/webapp/app/shared/layout/header/header-components.tsx");
/* harmony import */ var _menus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../menus */ "./src/main/webapp/app/shared/layout/menus/index.ts");






const Header = (props) => {
    const [menuOpen, setMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const renderDevRibbon = () => props.isInProduction === false ? (react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "ribbon dev" },
        react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", { href: "" }, "Development"))) : null;
    const toggleMenu = () => setMenuOpen(!menuOpen);
    /* jhipster-needle-add-element-to-menu - JHipster will add new menu items here */
    return (react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { id: "app-header" },
        renderDevRibbon(),
        react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_redux_loading_bar__WEBPACK_IMPORTED_MODULE_2__.default, { className: "loading-bar" }),
        react__WEBPACK_IMPORTED_MODULE_1__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, { "data-cy": "navbar", dark: true, expand: "sm", fixed: "top", className: "jh-navbar" },
            react__WEBPACK_IMPORTED_MODULE_1__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, { "aria-label": "Menu", onClick: toggleMenu }),
            react__WEBPACK_IMPORTED_MODULE_1__.createElement(_header_components__WEBPACK_IMPORTED_MODULE_3__.Brand, null),
            react__WEBPACK_IMPORTED_MODULE_1__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, { isOpen: menuOpen, navbar: true },
                react__WEBPACK_IMPORTED_MODULE_1__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.default, { id: "header-tabs", className: "ml-auto", navbar: true },
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement(_header_components__WEBPACK_IMPORTED_MODULE_3__.Home, null),
                    props.isAuthenticated && react__WEBPACK_IMPORTED_MODULE_1__.createElement(_menus__WEBPACK_IMPORTED_MODULE_4__.EntitiesMenu, null),
                    props.isAuthenticated && props.isAdmin && react__WEBPACK_IMPORTED_MODULE_1__.createElement(_menus__WEBPACK_IMPORTED_MODULE_4__.AdminMenu, { showOpenAPI: props.isOpenAPIEnabled }),
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement(_menus__WEBPACK_IMPORTED_MODULE_4__.AccountMenu, { isAuthenticated: props.isAuthenticated }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/shared/layout/header/header.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/shared/layout/header/header.tsx"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/shared/layout/menus/account.tsx":
/*!*************************************************************!*\
  !*** ./src/main/webapp/app/shared/layout/menus/account.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountMenu": () => (/* binding */ AccountMenu),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var app_shared_layout_menus_menu_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/layout/menus/menu-item */ "./src/main/webapp/app/shared/layout/menus/menu-item.tsx");
/* harmony import */ var _menu_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-components */ "./src/main/webapp/app/shared/layout/menus/menu-components.tsx");



const accountMenuItemsAuthenticated = (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(app_shared_layout_menus_menu_item__WEBPACK_IMPORTED_MODULE_1__.default, { icon: "wrench", to: "/account/settings", "data-cy": "settings" }, "Settings"),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(app_shared_layout_menus_menu_item__WEBPACK_IMPORTED_MODULE_1__.default, { icon: "lock", to: "/account/password", "data-cy": "passwordItem" }, "Password"),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(app_shared_layout_menus_menu_item__WEBPACK_IMPORTED_MODULE_1__.default, { icon: "cloud", to: "/account/sessions" }, "Sessions"),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(app_shared_layout_menus_menu_item__WEBPACK_IMPORTED_MODULE_1__.default, { icon: "sign-out-alt", to: "/logout", "data-cy": "logout" }, "Sign out")));
const accountMenuItems = (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(app_shared_layout_menus_menu_item__WEBPACK_IMPORTED_MODULE_1__.default, { id: "login-item", icon: "sign-in-alt", to: "/login", "data-cy": "login" }, "Sign in"),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(app_shared_layout_menus_menu_item__WEBPACK_IMPORTED_MODULE_1__.default, { icon: "user-plus", to: "/account/register", "data-cy": "register" }, "Register")));
const AccountMenu = ({ isAuthenticated = false }) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_menu_components__WEBPACK_IMPORTED_MODULE_2__.NavDropdown, { icon: "user", name: "Account", id: "account-menu", "data-cy": "accountMenu" }, isAuthenticated ? accountMenuItemsAuthenticated : accountMenuItems));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountMenu);

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/shared/layout/menus/account.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/shared/layout/menus/account.tsx"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/shared/layout/menus/admin.tsx":
/*!***********************************************************!*\
  !*** ./src/main/webapp/app/shared/layout/menus/admin.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminMenu": () => (/* binding */ AdminMenu),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var app_shared_layout_menus_menu_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/layout/menus/menu-item */ "./src/main/webapp/app/shared/layout/menus/menu-item.tsx");
/* harmony import */ var _menu_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-components */ "./src/main/webapp/app/shared/layout/menus/menu-components.tsx");



const adminMenuItems = (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(app_shared_layout_menus_menu_item__WEBPACK_IMPORTED_MODULE_1__.default, { icon: "users", to: "/admin/user-management" }, "User management"),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(app_shared_layout_menus_menu_item__WEBPACK_IMPORTED_MODULE_1__.default, { icon: "tachometer-alt", to: "/admin/metrics" }, "Metrics"),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(app_shared_layout_menus_menu_item__WEBPACK_IMPORTED_MODULE_1__.default, { icon: "heart", to: "/admin/health" }, "Health"),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(app_shared_layout_menus_menu_item__WEBPACK_IMPORTED_MODULE_1__.default, { icon: "cogs", to: "/admin/configuration" }, "Configuration"),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(app_shared_layout_menus_menu_item__WEBPACK_IMPORTED_MODULE_1__.default, { icon: "tasks", to: "/admin/logs" }, "Logs")));
const openAPIItem = (react__WEBPACK_IMPORTED_MODULE_0__.createElement(app_shared_layout_menus_menu_item__WEBPACK_IMPORTED_MODULE_1__.default, { icon: "book", to: "/admin/docs" }, "API"));
const AdminMenu = ({ showOpenAPI }) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_menu_components__WEBPACK_IMPORTED_MODULE_2__.NavDropdown, { icon: "users-cog", name: "Administration", id: "admin-menu", "data-cy": "adminMenu" },
    adminMenuItems,
    showOpenAPI && openAPIItem));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminMenu);

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/shared/layout/menus/admin.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/shared/layout/menus/admin.tsx"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/shared/layout/menus/entities.tsx":
/*!**************************************************************!*\
  !*** ./src/main/webapp/app/shared/layout/menus/entities.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntitiesMenu": () => (/* binding */ EntitiesMenu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _menu_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-components */ "./src/main/webapp/app/shared/layout/menus/menu-components.tsx");


const EntitiesMenu = props => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_menu_components__WEBPACK_IMPORTED_MODULE_1__.NavDropdown, { icon: "th-list", name: "Entities", id: "entity-menu", "data-cy": "entity", style: { maxHeight: '80vh', overflow: 'auto' } }));

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/shared/layout/menus/entities.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/shared/layout/menus/entities.tsx"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/shared/layout/menus/index.ts":
/*!**********************************************************!*\
  !*** ./src/main/webapp/app/shared/layout/menus/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountMenu": () => (/* reexport safe */ _account__WEBPACK_IMPORTED_MODULE_0__.AccountMenu),
/* harmony export */   "AdminMenu": () => (/* reexport safe */ _admin__WEBPACK_IMPORTED_MODULE_1__.AdminMenu),
/* harmony export */   "EntitiesMenu": () => (/* reexport safe */ _entities__WEBPACK_IMPORTED_MODULE_2__.EntitiesMenu)
/* harmony export */ });
/* harmony import */ var _account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account */ "./src/main/webapp/app/shared/layout/menus/account.tsx");
/* harmony import */ var _admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin */ "./src/main/webapp/app/shared/layout/menus/admin.tsx");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entities */ "./src/main/webapp/app/shared/layout/menus/entities.tsx");




 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/shared/layout/menus/index.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/shared/layout/menus/index.ts"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/shared/layout/menus/menu-components.tsx":
/*!*********************************************************************!*\
  !*** ./src/main/webapp/app/shared/layout/menus/menu-components.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavDropdown": () => (/* binding */ NavDropdown)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/UncontrolledDropdown.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/DropdownToggle.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/DropdownMenu.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");



const NavDropdown = props => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__.default, { nav: true, inNavbar: true, id: props.id, "data-cy": props['data-cy'] },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__.default, { nav: true, caret: true, className: "d-flex align-items-center" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, { icon: props.icon }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, props.name)),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.default, { right: true, style: props.style }, props.children)));

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/shared/layout/menus/menu-components.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/shared/layout/menus/menu-components.tsx"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/shared/layout/menus/menu-item.tsx":
/*!***************************************************************!*\
  !*** ./src/main/webapp/app/shared/layout/menus/menu-item.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MenuItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/DropdownItem.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");




class MenuItem extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    render() {
        const { to, icon, id, children, 'data-cy': string } = this.props;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__.default, { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_3__.NavLink, to: to, id: id, "data-cy": this.props['data-cy'] },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, { icon: icon, fixedWidth: true }),
            " ",
            children));
    }
}

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/shared/layout/menus/menu-item.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/shared/layout/menus/menu-item.tsx"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/shared/layout/password/password-strength-bar.tsx":
/*!******************************************************************************!*\
  !*** ./src/main/webapp/app/shared/layout/password/password-strength-bar.tsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordStrengthBar": () => (/* binding */ PasswordStrengthBar),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _password_strength_bar_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password-strength-bar.scss */ "./src/main/webapp/app/shared/layout/password/password-strength-bar.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


const PasswordStrengthBar = ({ password }) => {
    const colors = ['#F00', '#F90', '#FF0', '#9F0', '#0F0'];
    const measureStrength = (p) => {
        let force = 0;
        const regex = /[$-/:-?{-~!"^_`[\]]/g;
        const flags = {
            lowerLetters: /[a-z]+/.test(p),
            upperLetters: /[A-Z]+/.test(p),
            numbers: /[0-9]+/.test(p),
            symbols: regex.test(p),
        };
        const passedMatches = Object.values(flags).filter((isMatchedFlag) => !!isMatchedFlag).length;
        force += 2 * p.length + (p.length >= 10 ? 1 : 0);
        force += passedMatches * 10;
        // penalty (short password)
        force = p.length <= 6 ? Math.min(force, 10) : force;
        // penalty (poor variety of characters)
        force = passedMatches === 1 ? Math.min(force, 10) : force;
        force = passedMatches === 2 ? Math.min(force, 20) : force;
        force = passedMatches === 3 ? Math.min(force, 40) : force;
        return force;
    };
    const getColor = (s) => {
        let idx = 0;
        if (s <= 10) {
            idx = 0;
        }
        else if (s <= 20) {
            idx = 1;
        }
        else if (s <= 30) {
            idx = 2;
        }
        else if (s <= 40) {
            idx = 3;
        }
        else {
            idx = 4;
        }
        return { idx: idx + 1, col: colors[idx] };
    };
    const getPoints = force => {
        const pts = [];
        for (let i = 0; i < 5; i++) {
            pts.push(react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", { key: i, className: "point", style: i < force.idx ? { backgroundColor: force.col } : { backgroundColor: '#DDD' } }));
        }
        return pts;
    };
    const strength = getColor(measureStrength(password));
    const points = getPoints(strength);
    return (react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { id: "strength" },
        react__WEBPACK_IMPORTED_MODULE_1__.createElement("small", null, "Password strength:"),
        react__WEBPACK_IMPORTED_MODULE_1__.createElement("ul", { id: "strengthBar" }, points)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PasswordStrengthBar);

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/shared/layout/password/password-strength-bar.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/shared/layout/password/password-strength-bar.tsx"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/shared/model/user.model.ts":
/*!********************************************************!*\
  !*** ./src/main/webapp/app/shared/model/user.model.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultValue": () => (/* binding */ defaultValue)
/* harmony export */ });
const defaultValue = {
    id: '',
    login: '',
    firstName: '',
    lastName: '',
    email: '',
    activated: true,
    langKey: '',
    authorities: [],
    createdBy: '',
    createdDate: null,
    lastModifiedBy: '',
    lastModifiedDate: null,
    password: '',
};

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/shared/model/user.model.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/shared/model/user.model.ts"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/shared/reducers/action-type.util.ts":
/*!*****************************************************************!*\
  !*** ./src/main/webapp/app/shared/reducers/action-type.util.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "REQUEST": () => (/* binding */ REQUEST),
/* harmony export */   "SUCCESS": () => (/* binding */ SUCCESS),
/* harmony export */   "FAILURE": () => (/* binding */ FAILURE)
/* harmony export */ });
/**
 * Appends REQUEST async action type
 */
const REQUEST = actionType => `${actionType}_PENDING`;
/**
 * Appends SUCCESS async action type
 */
const SUCCESS = actionType => `${actionType}_FULFILLED`;
/**
 * Appends FAILURE async action type
 */
const FAILURE = actionType => `${actionType}_REJECTED`;

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/shared/reducers/action-type.util.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/shared/reducers/action-type.util.ts"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/shared/reducers/application-profile.ts":
/*!********************************************************************!*\
  !*** ./src/main/webapp/app/shared/reducers/application-profile.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ACTION_TYPES": () => (/* binding */ ACTION_TYPES),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getProfile": () => (/* binding */ getProfile)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/reducers/action-type.util */ "./src/main/webapp/app/shared/reducers/action-type.util.ts");


const ACTION_TYPES = {
    GET_PROFILE: 'applicationProfile/GET_PROFILE',
};
const initialState = {
    ribbonEnv: '',
    inProduction: true,
    isOpenAPIEnabled: false,
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((state = initialState, action) => {
    switch (action.type) {
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.SUCCESS)(ACTION_TYPES.GET_PROFILE): {
            const { data } = action.payload;
            return Object.assign(Object.assign({}, state), { ribbonEnv: data['display-ribbon-on-profiles'], inProduction: data.activeProfiles.includes('prod'), isOpenAPIEnabled: data.activeProfiles.includes('api-docs') });
        }
        default:
            return state;
    }
});
const getProfile = () => ({
    type: ACTION_TYPES.GET_PROFILE,
    payload: axios__WEBPACK_IMPORTED_MODULE_0___default().get('management/info'),
});

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/shared/reducers/application-profile.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/shared/reducers/application-profile.ts"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/shared/reducers/authentication.ts":
/*!***************************************************************!*\
  !*** ./src/main/webapp/app/shared/reducers/authentication.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ACTION_TYPES": () => (/* binding */ ACTION_TYPES),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "displayAuthError": () => (/* binding */ displayAuthError),
/* harmony export */   "getSession": () => (/* binding */ getSession),
/* harmony export */   "login": () => (/* binding */ login),
/* harmony export */   "logout": () => (/* binding */ logout),
/* harmony export */   "clearAuthentication": () => (/* binding */ clearAuthentication)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/reducers/action-type.util */ "./src/main/webapp/app/shared/reducers/action-type.util.ts");



const ACTION_TYPES = {
    LOGIN: 'authentication/LOGIN',
    GET_SESSION: 'authentication/GET_SESSION',
    LOGOUT: 'authentication/LOGOUT',
    CLEAR_AUTH: 'authentication/CLEAR_AUTH',
    ERROR_MESSAGE: 'authentication/ERROR_MESSAGE',
};
const initialState = {
    loading: false,
    isAuthenticated: false,
    loginSuccess: false,
    loginError: false,
    showModalLogin: false,
    account: {},
    errorMessage: null,
    redirectMessage: null,
    sessionHasBeenFetched: false,
    idToken: null,
    logoutUrl: null,
};
// Reducer
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((state = initialState, action) => {
    switch (action.type) {
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.REQUEST)(ACTION_TYPES.LOGIN):
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.REQUEST)(ACTION_TYPES.GET_SESSION):
            return Object.assign(Object.assign({}, state), { loading: true });
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.FAILURE)(ACTION_TYPES.LOGIN):
            return Object.assign(Object.assign({}, initialState), { errorMessage: action.payload, showModalLogin: true, loginError: true });
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.FAILURE)(ACTION_TYPES.GET_SESSION):
            return Object.assign(Object.assign({}, state), { loading: false, isAuthenticated: false, sessionHasBeenFetched: true, showModalLogin: true, errorMessage: action.payload });
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.SUCCESS)(ACTION_TYPES.LOGIN):
            return Object.assign(Object.assign({}, state), { loading: false, loginError: false, showModalLogin: false, loginSuccess: true });
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.SUCCESS)(ACTION_TYPES.LOGOUT):
            return Object.assign(Object.assign({}, initialState), { showModalLogin: true });
        case (0,app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_1__.SUCCESS)(ACTION_TYPES.GET_SESSION): {
            const isAuthenticated = action.payload && action.payload.data && action.payload.data.activated;
            return Object.assign(Object.assign({}, state), { isAuthenticated, loading: false, sessionHasBeenFetched: true, account: action.payload.data });
        }
        case ACTION_TYPES.ERROR_MESSAGE:
            return Object.assign(Object.assign({}, initialState), { showModalLogin: true, redirectMessage: action.message });
        case ACTION_TYPES.CLEAR_AUTH:
            return Object.assign(Object.assign({}, state), { loading: false, showModalLogin: true, isAuthenticated: false });
        default:
            return state;
    }
});
const displayAuthError = message => ({ type: ACTION_TYPES.ERROR_MESSAGE, message });
const getSession = () => (dispatch, getState) => {
    dispatch({
        type: ACTION_TYPES.GET_SESSION,
        payload: axios__WEBPACK_IMPORTED_MODULE_0___default().get('api/account'),
    });
};
const login = (username, password, rememberMe = false) => (dispatch, getState) => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(void 0, void 0, void 0, function* () {
    const data = `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&remember-me=${rememberMe}&submit=Login`;
    yield dispatch({
        type: ACTION_TYPES.LOGIN,
        payload: axios__WEBPACK_IMPORTED_MODULE_0___default().post('api/authentication', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }),
    });
    yield dispatch(getSession());
});
const logout = () => (dispatch) => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(void 0, void 0, void 0, function* () {
    yield dispatch({
        type: ACTION_TYPES.LOGOUT,
        payload: axios__WEBPACK_IMPORTED_MODULE_0___default().post('api/logout', {}),
    });
    // fetch new csrf token
    dispatch(getSession());
});
const clearAuthentication = messageKey => (dispatch, getState) => {
    dispatch(displayAuthError(messageKey));
    dispatch({
        type: ACTION_TYPES.CLEAR_AUTH,
    });
};

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/shared/reducers/authentication.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/shared/reducers/authentication.ts"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/shared/reducers/index.ts":
/*!******************************************************!*\
  !*** ./src/main/webapp/app/shared/reducers/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux_loading_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux-loading-bar */ "./node_modules/react-redux-loading-bar/build/index.js");
/* harmony import */ var _authentication__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication */ "./src/main/webapp/app/shared/reducers/authentication.ts");
/* harmony import */ var _application_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./application-profile */ "./src/main/webapp/app/shared/reducers/application-profile.ts");
/* harmony import */ var app_modules_administration_administration_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/modules/administration/administration.reducer */ "./src/main/webapp/app/modules/administration/administration.reducer.ts");
/* harmony import */ var app_modules_administration_user_management_user_management_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/modules/administration/user-management/user-management.reducer */ "./src/main/webapp/app/modules/administration/user-management/user-management.reducer.ts");
/* harmony import */ var app_modules_account_register_register_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/modules/account/register/register.reducer */ "./src/main/webapp/app/modules/account/register/register.reducer.ts");
/* harmony import */ var app_modules_account_activate_activate_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/modules/account/activate/activate.reducer */ "./src/main/webapp/app/modules/account/activate/activate.reducer.ts");
/* harmony import */ var app_modules_account_password_password_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/modules/account/password/password.reducer */ "./src/main/webapp/app/modules/account/password/password.reducer.ts");
/* harmony import */ var app_modules_account_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/modules/account/settings/settings.reducer */ "./src/main/webapp/app/modules/account/settings/settings.reducer.ts");
/* harmony import */ var app_modules_account_password_reset_password_reset_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/modules/account/password-reset/password-reset.reducer */ "./src/main/webapp/app/modules/account/password-reset/password-reset.reducer.ts");
/* harmony import */ var app_modules_account_sessions_sessions_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/modules/account/sessions/sessions.reducer */ "./src/main/webapp/app/modules/account/sessions/sessions.reducer.ts");












const rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_11__.combineReducers)({
    authentication: _authentication__WEBPACK_IMPORTED_MODULE_1__.default,
    applicationProfile: _application_profile__WEBPACK_IMPORTED_MODULE_2__.default,
    administration: app_modules_administration_administration_reducer__WEBPACK_IMPORTED_MODULE_3__.default,
    userManagement: app_modules_administration_user_management_user_management_reducer__WEBPACK_IMPORTED_MODULE_4__.default,
    register: app_modules_account_register_register_reducer__WEBPACK_IMPORTED_MODULE_5__.default,
    activate: app_modules_account_activate_activate_reducer__WEBPACK_IMPORTED_MODULE_6__.default,
    passwordReset: app_modules_account_password_reset_password_reset_reducer__WEBPACK_IMPORTED_MODULE_9__.default,
    password: app_modules_account_password_password_reducer__WEBPACK_IMPORTED_MODULE_7__.default,
    settings: app_modules_account_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_8__.default,
    sessions: app_modules_account_sessions_sessions_reducer__WEBPACK_IMPORTED_MODULE_10__.default,
    /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
    loadingBar: react_redux_loading_bar__WEBPACK_IMPORTED_MODULE_0__.loadingBarReducer,
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/shared/reducers/index.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/home/dakixr/Desktop/Github/AXA/src/main/webapp/app/shared/reducers/index.ts"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/app.scss":
/*!**************************************!*\
  !*** ./src/main/webapp/app/app.scss ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./app.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./src/main/webapp/app/app.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_app_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_app_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_app_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./app.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./src/main/webapp/app/app.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./app.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./src/main/webapp/app/app.scss");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_app_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_app_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_app_scss__WEBPACK_IMPORTED_MODULE_1__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_app_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/main/webapp/app/modules/home/home.scss":
/*!****************************************************!*\
  !*** ./src/main/webapp/app/modules/home/home.scss ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_home_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./home.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./src/main/webapp/app/modules/home/home.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_home_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_home_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_home_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

    module.hot.accept(
      /*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./home.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./src/main/webapp/app/modules/home/home.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_home_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./home.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./src/main/webapp/app/modules/home/home.scss");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_home_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_home_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_home_scss__WEBPACK_IMPORTED_MODULE_1__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_home_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/main/webapp/app/shared/layout/footer/footer.scss":
/*!**************************************************************!*\
  !*** ./src/main/webapp/app/shared/layout/footer/footer.scss ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_footer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./footer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./src/main/webapp/app/shared/layout/footer/footer.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_footer_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_footer_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_footer_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

    module.hot.accept(
      /*! !!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./footer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./src/main/webapp/app/shared/layout/footer/footer.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_footer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./footer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./src/main/webapp/app/shared/layout/footer/footer.scss");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_footer_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_footer_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_footer_scss__WEBPACK_IMPORTED_MODULE_1__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_footer_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/main/webapp/app/shared/layout/header/header.scss":
/*!**************************************************************!*\
  !*** ./src/main/webapp/app/shared/layout/header/header.scss ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./header.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./src/main/webapp/app/shared/layout/header/header.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_header_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_header_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_header_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

    module.hot.accept(
      /*! !!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./header.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./src/main/webapp/app/shared/layout/header/header.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./header.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./src/main/webapp/app/shared/layout/header/header.scss");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_header_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_header_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_header_scss__WEBPACK_IMPORTED_MODULE_1__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_header_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/main/webapp/app/shared/layout/password/password-strength-bar.scss":
/*!*******************************************************************************!*\
  !*** ./src/main/webapp/app/shared/layout/password/password-strength-bar.scss ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_password_strength_bar_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./password-strength-bar.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./src/main/webapp/app/shared/layout/password/password-strength-bar.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_password_strength_bar_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_password_strength_bar_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_password_strength_bar_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

    module.hot.accept(
      /*! !!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./password-strength-bar.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./src/main/webapp/app/shared/layout/password/password-strength-bar.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_password_strength_bar_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./password-strength-bar.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./src/main/webapp/app/shared/layout/password/password-strength-bar.scss");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_password_strength_bar_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_password_strength_bar_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_password_strength_bar_scss__WEBPACK_IMPORTED_MODULE_1__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_password_strength_bar_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "?5580":
/*!**************************************!*\
  !*** ./terminal-highlight (ignored) ***!
  \**************************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?51ca":
/*!***************************!*\
  !*** colorette (ignored) ***!
  \***************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?03fb":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?6197":
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?c717":
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd define */
/******/ 	(() => {
/******/ 		__webpack_require__.amdD = function () {
/******/ 			throw new Error('define cannot be used indirect');
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "app/" + chunkId + ".chunk.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("de13d28b967310fdb43d")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "axa:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: currentChildModule !== moduleId,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				registeredStatusHandlers[i].call(null, newStatus);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			setStatus("check");
/******/ 			return __webpack_require__.hmrM().then(function (update) {
/******/ 				if (!update) {
/******/ 					setStatus(applyInvalidatedModules() ? "ready" : "idle");
/******/ 					return null;
/******/ 				}
/******/ 		
/******/ 				setStatus("prepare");
/******/ 		
/******/ 				var updatedModules = [];
/******/ 				blockingPromises = [];
/******/ 				currentUpdateApplyHandlers = [];
/******/ 		
/******/ 				return Promise.all(
/******/ 					Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 						promises,
/******/ 						key
/******/ 					) {
/******/ 						__webpack_require__.hmrC[key](
/******/ 							update.c,
/******/ 							update.r,
/******/ 							update.m,
/******/ 							promises,
/******/ 							currentUpdateApplyHandlers,
/******/ 							updatedModules
/******/ 						);
/******/ 						return promises;
/******/ 					},
/******/ 					[])
/******/ 				).then(function () {
/******/ 					return waitForBlockingPromises(function () {
/******/ 						if (applyOnUpdate) {
/******/ 							return internalApply(applyOnUpdate);
/******/ 						} else {
/******/ 							setStatus("ready");
/******/ 		
/******/ 							return updatedModules;
/******/ 						}
/******/ 					});
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				setStatus("abort");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			// handle errors in accept handlers and self accepted module load
/******/ 			if (error) {
/******/ 				setStatus("fail");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw error;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			if (queuedInvalidatedModules) {
/******/ 				return internalApply(options).then(function (list) {
/******/ 					outdatedModules.forEach(function (moduleId) {
/******/ 						if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 					});
/******/ 					return list;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			setStatus("idle");
/******/ 			return Promise.resolve(outdatedModules);
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdateaxa"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					module.hot._selfAccepted &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			__webpack_require__.O();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkaxa"] = self["webpackChunkaxa"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module factories are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./src/main/webapp/app/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.bundle.js.map