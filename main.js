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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("console.log(\"Everything looks fine!!\")\n\n\nfunction elementsGenerator (type, name=false,selector) {\n    const el = document.createElement(type)\n    if(name != false){\n        if (selector == 'class'){\n            el.classList.add(name)\n        }\n        if (selector == 'id'){\n            el.setAttribute('id',name)\n        }\n    }\n    return el\n}\nfunction menu (){\n    const content = document.getElementById('content')\n    \n    let y=elementsGenerator('div','upa','class')\n    content.appendChild(y)\n   \n}\nmenu()\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;