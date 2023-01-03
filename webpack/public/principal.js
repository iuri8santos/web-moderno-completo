/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/css/estilo.css":
/*!***********************************!*\
  !*** ./src/assets/css/estilo.css ***!
  \***********************************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nError: Automatic publicPath is not supported in this browser\\n    at C:\\\\Users\\\\User\\\\Documents\\\\programacao\\\\web-moderno-completo\\\\webpack\\\\node_modules\\\\css-loader\\\\dist\\\\cjs.js!C:\\\\Users\\\\User\\\\Documents\\\\programacao\\\\web-moderno-completo\\\\webpack\\\\node_modules\\\\sass-loader\\\\dist\\\\cjs.js!C:\\\\Users\\\\User\\\\Documents\\\\programacao\\\\web-moderno-completo\\\\webpack\\\\src\\\\assets\\\\css\\\\estilo.css:147:34\\n    at C:\\\\Users\\\\User\\\\Documents\\\\programacao\\\\web-moderno-completo\\\\webpack\\\\node_modules\\\\css-loader\\\\dist\\\\cjs.js!C:\\\\Users\\\\User\\\\Documents\\\\programacao\\\\web-moderno-completo\\\\webpack\\\\node_modules\\\\sass-loader\\\\dist\\\\cjs.js!C:\\\\Users\\\\User\\\\Documents\\\\programacao\\\\web-moderno-completo\\\\webpack\\\\src\\\\assets\\\\css\\\\estilo.css:150:13\\n    at Object.<anonymous> (C:\\\\Users\\\\User\\\\Documents\\\\programacao\\\\web-moderno-completo\\\\webpack\\\\node_modules\\\\css-loader\\\\dist\\\\cjs.js!C:\\\\Users\\\\User\\\\Documents\\\\programacao\\\\web-moderno-completo\\\\webpack\\\\node_modules\\\\sass-loader\\\\dist\\\\cjs.js!C:\\\\Users\\\\User\\\\Documents\\\\programacao\\\\web-moderno-completo\\\\webpack\\\\src\\\\assets\\\\css\\\\estilo.css:160:12)\\n    at Module._compile (node:internal/modules/cjs/loader:1159:14)\\n    at evalModuleCode (C:\\\\Users\\\\User\\\\Documents\\\\programacao\\\\web-moderno-completo\\\\webpack\\\\node_modules\\\\mini-css-extract-plugin\\\\dist\\\\utils.js:41:10)\\n    at C:\\\\Users\\\\User\\\\Documents\\\\programacao\\\\web-moderno-completo\\\\webpack\\\\node_modules\\\\mini-css-extract-plugin\\\\dist\\\\loader.js:167:57\\n    at finalCallback (C:\\\\Users\\\\User\\\\Documents\\\\programacao\\\\web-moderno-completo\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compiler.js:551:5)\\n    at C:\\\\Users\\\\User\\\\Documents\\\\programacao\\\\web-moderno-completo\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compiler.js:577:11\\n    at C:\\\\Users\\\\User\\\\Documents\\\\programacao\\\\web-moderno-completo\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compiler.js:1196:17\\n    at Hook.eval [as callAsync] (eval at create (C:\\\\Users\\\\User\\\\Documents\\\\programacao\\\\web-moderno-completo\\\\webpack\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:6:1)\");\n\n//# sourceURL=webpack://capitulo-webpack/./src/assets/css/estilo.css?");

/***/ }),

/***/ "./src/assets/scss/index.scss":
/*!************************************!*\
  !*** ./src/assets/scss/index.scss ***!
  \************************************/
/***/ (() => {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://capitulo-webpack/./src/assets/scss/index.scss?");

/***/ }),

/***/ "./src/assets/index.js":
/*!*****************************!*\
  !*** ./src/assets/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_estilo_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/estilo.css */ \"./src/assets/css/estilo.css\");\n/* harmony import */ var _css_estilo_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_estilo_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/index.scss */ \"./src/assets/scss/index.scss\");\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_index_scss__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\n\n//# sourceURL=webpack://capitulo-webpack/./src/assets/index.js?");

/***/ }),

/***/ "./src/modulos/moduloA.js":
/*!********************************!*\
  !*** ./src/modulos/moduloA.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const moduloB = __webpack_require__(/*! ./moduloB */ \"./src/modulos/moduloB.js\")\r\nconsole.log(moduloB.saudacao())\n\n//# sourceURL=webpack://capitulo-webpack/./src/modulos/moduloA.js?");

/***/ }),

/***/ "./src/modulos/moduloB.js":
/*!********************************!*\
  !*** ./src/modulos/moduloB.js ***!
  \********************************/
/***/ ((module) => {

eval("module.exports = {\r\n    saudacao() {return 'Olá eu sou o Módulo B!'}\r\n}\n\n//# sourceURL=webpack://capitulo-webpack/./src/modulos/moduloB.js?");

/***/ }),

/***/ "./src/pessoa.js":
/*!***********************!*\
  !*** ./src/pessoa.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Pessoa)\n/* harmony export */ });\n/* harmony import */ var _modulos_moduloA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulos/moduloA */ \"./src/modulos/moduloA.js\");\n/* harmony import */ var _modulos_moduloA__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modulos_moduloA__WEBPACK_IMPORTED_MODULE_0__);\n\r\nclass Pessoa {\r\n    cumprimentar() {\r\n        return 'Bom dia!'\r\n    }\r\n}\n\n//# sourceURL=webpack://capitulo-webpack/./src/pessoa.js?");

/***/ }),

/***/ "./src/principal.js":
/*!**************************!*\
  !*** ./src/principal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pessoa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pessoa */ \"./src/pessoa.js\");\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets */ \"./src/assets/index.js\");\n\r\n\r\nconst atendente = new _pessoa__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\r\nconsole.log(atendente.cumprimentar())\n\n//# sourceURL=webpack://capitulo-webpack/./src/principal.js?");

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
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/principal.js");
/******/ 	
/******/ })()
;