/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../src/fonts/CarnivaleeFreakshow.woff */ "./src/fonts/CarnivaleeFreakshow.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../src/fonts/CarnivaleeFreakshow.woff2 */ "./src/fonts/CarnivaleeFreakshow.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../src/img/paper-old-west1.png */ "./src/img/paper-old-west1.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../src/img/bullet-hole.png */ "./src/img/bullet-hole.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../../src/img/wood-board.jpg */ "./src/img/wood-board.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: \"old-west\";\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff2\");;\n}\n:root {\n    /* --blue: #1e90ff;\n    --white: #ffffff; */\n    --shadow-weight: 3px 3px 5px 5px ;\n    --shadow-color: rgb(24, 23, 23);\n    \n  }\n* {\n    font-family: \"old-west\";\n}\n#content {\n    display: grid;\n    grid-template-columns: 1fr 2fr 1fr; \n    grid-template-rows: repeat(auto-fill, minmax(200px,1fr));\n    text-align: center;\n    row-gap: 50px;\n}\n\n.sub-containers {\n    font-size: 1.5rem;\n    gap: 20px;\n    background-repeat: no-repeat;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-size: cover;\n    padding: 30px;\n    margin-bottom: 100px;\n    box-shadow: var(--shadow-weight) var(--shadow-color);\n}\n\nbutton {\n    width: 245px;\n    height: 100px;\n    font-size: 2rem;\n    /* border: 3px solid black; */\n    background: rgba(253, 253, 253, 0);\n    background-repeat: no-repeat;\n    background-position: right bottom;\n    background-size: 70px 70px;\n}\n\n#icon-on {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    background-position: right bottom;\n    background-size: 70px 70px;\n    outline: none\n\n}\nbody{\n    padding: 0;\n    margin: 0;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n}\n.header > div {\n    font-size: 2.3rem;\n\n}\n.header{\n    grid-row: 1;\n    grid-column: 2;\n}\n\n\n\n.sub-containers-img{\n    width: 100%;\n    border-radius: 20px;\n\n}\n.name-logo {\n    grid-column: 1/-1;\n    grid-row: 1;\n    font-size: 4rem;\n}\n.home {\n    grid-row: 2;\n    /* background-image: url(\"/src/img/bullet-hole.png\");\n    background-position: right bottom;\n    background-size: 70px 70px; */\n\n}\n\n.menu {\n    grid-row: 2;\n}\n\n.contact {\n    grid-row: 2;\n}\n.location {\n    font-size: 1.2rem;\n}\n/* .bullet {\n    width: 70px;\n} */\n.title {\n    font-size: 3rem;  \n}\n.info {\n    grid-row: 2;\n    grid-column: 2;\n}\n\n.the-family {\n    grid-row: 1;\n}\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;IACvB;2DAC2D;AAC/D;AACA;IACI;uBACmB;IACnB,iCAAiC;IACjC,+BAA+B;;EAEjC;AACF;IACI,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,kCAAkC;IAClC,wDAAwD;IACxD,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,SAAS;IACT,4BAA4B;IAC5B,yDAAqD;IACrD,sBAAsB;IACtB,aAAa;IACb,oBAAoB;IACpB,oDAAoD;AACxD;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,eAAe;IACf,6BAA6B;IAC7B,kCAAkC;IAClC,4BAA4B;IAC5B,iCAAiC;IACjC,0BAA0B;AAC9B;;AAEA;IACI,yDAAiD;IACjD,iCAAiC;IACjC,0BAA0B;IAC1B;;AAEJ;AACA;IACI,UAAU;IACV,SAAS;IACT,yDAAgD;AACpD;AACA;IACI,iBAAiB;;AAErB;AACA;IACI,WAAW;IACX,cAAc;AAClB;;;;AAIA;IACI,WAAW;IACX,mBAAmB;;AAEvB;AACA;IACI,iBAAiB;IACjB,WAAW;IACX,eAAe;AACnB;AACA;IACI,WAAW;IACX;;iCAE6B;;AAEjC;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;AACf;AACA;IACI,iBAAiB;AACrB;AACA;;GAEG;AACH;IACI,eAAe;AACnB;AACA;IACI,WAAW;IACX,cAAc;AAClB;;AAEA;IACI,WAAW;AACf","sourcesContent":["@font-face {\n    font-family: \"old-west\";\n    src: url(\"/src/fonts/CarnivaleeFreakshow.woff\") format(\"woff\"),\n    url(\"/src/fonts/CarnivaleeFreakshow.woff2\") format(\"woff2\");;\n}\n:root {\n    /* --blue: #1e90ff;\n    --white: #ffffff; */\n    --shadow-weight: 3px 3px 5px 5px ;\n    --shadow-color: rgb(24, 23, 23);\n    \n  }\n* {\n    font-family: \"old-west\";\n}\n#content {\n    display: grid;\n    grid-template-columns: 1fr 2fr 1fr; \n    grid-template-rows: repeat(auto-fill, minmax(200px,1fr));\n    text-align: center;\n    row-gap: 50px;\n}\n\n.sub-containers {\n    font-size: 1.5rem;\n    gap: 20px;\n    background-repeat: no-repeat;\n    background-image: url(\"/src/img/paper-old-west1.png\");\n    background-size: cover;\n    padding: 30px;\n    margin-bottom: 100px;\n    box-shadow: var(--shadow-weight) var(--shadow-color);\n}\n\nbutton {\n    width: 245px;\n    height: 100px;\n    font-size: 2rem;\n    /* border: 3px solid black; */\n    background: rgba(253, 253, 253, 0);\n    background-repeat: no-repeat;\n    background-position: right bottom;\n    background-size: 70px 70px;\n}\n\n#icon-on {\n    background-image: url(\"/src/img/bullet-hole.png\");\n    background-position: right bottom;\n    background-size: 70px 70px;\n    outline: none\n\n}\nbody{\n    padding: 0;\n    margin: 0;\n    background-image: url(\"/src/img/wood-board.jpg\");\n}\n.header > div {\n    font-size: 2.3rem;\n\n}\n.header{\n    grid-row: 1;\n    grid-column: 2;\n}\n\n\n\n.sub-containers-img{\n    width: 100%;\n    border-radius: 20px;\n\n}\n.name-logo {\n    grid-column: 1/-1;\n    grid-row: 1;\n    font-size: 4rem;\n}\n.home {\n    grid-row: 2;\n    /* background-image: url(\"/src/img/bullet-hole.png\");\n    background-position: right bottom;\n    background-size: 70px 70px; */\n\n}\n\n.menu {\n    grid-row: 2;\n}\n\n.contact {\n    grid-row: 2;\n}\n.location {\n    font-size: 1.2rem;\n}\n/* .bullet {\n    width: 70px;\n} */\n.title {\n    font-size: 3rem;  \n}\n.info {\n    grid-row: 2;\n    grid-column: 2;\n}\n\n.the-family {\n    grid-row: 1;\n}\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/MenuStyle.js":
/*!**************************!*\
  !*** ./src/MenuStyle.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createPages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createPages.js */ "./src/createPages.js");


function btnIconActive() {
  
  const btnHome = document.querySelector(".home");
  btnHome.setAttribute("id", "icon-on");
  const callPages = {
    'Contact':_createPages_js__WEBPACK_IMPORTED_MODULE_0__.ContactPage,
    'Menu': _createPages_js__WEBPACK_IMPORTED_MODULE_0__.MenuPage,
    'Home': _createPages_js__WEBPACK_IMPORTED_MODULE_0__.HomePage 
  }
  function clean_info(e) {
    const info = document.querySelector(".info");
    while (info.firstChild) {
      info.removeChild(info.lastChild);
    }
    callPages[e.textContent]()
  }

  function btnActive() {
    let current = document.getElementById("icon-on");
    current.setAttribute("id", "");
    this.setAttribute("id", "icon-on");
    clean_info(this);
  }
  let btns = document.querySelectorAll("button");
  btns.forEach((btn) => btn.addEventListener("click", btnActive));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (btnIconActive);

/***/ }),

/***/ "./src/createPages.js":
/*!****************************!*\
  !*** ./src/createPages.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactPage": () => (/* binding */ ContactPage),
/* harmony export */   "HomePage": () => (/* binding */ HomePage),
/* harmony export */   "MenuPage": () => (/* binding */ MenuPage)
/* harmony export */ });
/* harmony import */ var _src_dom_manipulation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/dom-manipulation.js */ "./src/dom-manipulation.js");
/* harmony import */ var _src_getmultipleimgs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/getmultipleimgs.js */ "./src/getmultipleimgs.js");
/* harmony import */ var _src_img_pearson_stew_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/img/pearson-stew.jpeg */ "./src/img/pearson-stew.jpeg");
/* harmony import */ var _src_img_family_photo_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/img/family-photo.jpeg */ "./src/img/family-photo.jpeg");





const create = (0,_src_dom_manipulation_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

function appendElementsObj (element_obj){
  let keys = Object.keys(element_obj);
  for (let key of keys) {
  let img = (0,_src_getmultipleimgs_js__WEBPACK_IMPORTED_MODULE_1__.getNameDescriptionSrc)(element_obj[key]);
  create.defaultBodyCreator(img);
}
  create.smaller_img();
}
function MenuPage() {
  document.title = 'Menu'
  const img_description = [
    "Fried Catfish, with greens and boiled beans.",
    "Lamb's Heart, with boiled cabbage.",
    "Lamb's Fry, with green peas and boiled potatoes.",
    "Prime Rib, with potatoes dauphinoise and spring salad.",
    "Roast Beef, with corn and glazed carrots.",
    "Roast Prairie Chicken, with green beans, mashed potatoes and gravy.",
  ];
  const path_search = __webpack_require__("./src/img/restaurant-imgs-foods sync \\.jpeg");
  const imgsObj = (0,_src_getmultipleimgs_js__WEBPACK_IMPORTED_MODULE_1__.getAllImgs)(path_search, img_description);
  appendElementsObj(imgsObj)
}

function ContactPage() {
  document.title = 'Contact'
  const description = [
      "Chef Cook and The Butcher",
      "Security and Waiter",
      "Finance Management",
      "Security and Waiter",
  ]
  const path_search = __webpack_require__("./src/img/workers sync \\.jpg");
  const imgsObj = (0,_src_getmultipleimgs_js__WEBPACK_IMPORTED_MODULE_1__.getAllImgs)(path_search, description);
  appendElementsObj(imgsObj)
  /* const create = HtmlGenerator(); */
  
}

function HomePage() {
  document.title = 'Home'
  const container_chef = [
    "Chef Special",
    "Pearson's Stew (Beef Stew).",
    _src_img_pearson_stew_jpeg__WEBPACK_IMPORTED_MODULE_2__,
  ];
  const container_family = [
    "The Family",
    "An old west theme restaurant",
    _src_img_family_photo_jpeg__WEBPACK_IMPORTED_MODULE_3__,
  ];
  
  /* const create = HtmlGenerator(); */
  create.defaultBodyCreator(container_family);
  create.defaultBodyCreator(container_chef);
  
}



/***/ }),

/***/ "./src/dom-manipulation.js":
/*!*********************************!*\
  !*** ./src/dom-manipulation.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

function pageCreator() {
  const content = document.getElementById("content");
  
  function elementsGenerator(element_obj) {
    const el = document.createElement(element_obj["type"]);
    if (element_obj["type"] == "IMG") {
      el.setAttribute("src", element_obj["src_img"]);
    }

    if (element_obj["selector_type"] == "class") {
      el.classList.add(element_obj["selector_name"]);
    }
    if (element_obj["selector_type"] == "id") {
      el.setAttribute("id", element_obj["selector_name"]);
    }

    el.textContent = element_obj["text_content"];
    return el;
  }

  function objNameCreator(lst, makeElement) {
    const obj = {
      type: lst[0],
      selector_type: lst[1],
      selector_name: lst[2],
      text_content: lst[3],
      src_img: lst[4],
    };
    if (makeElement) {
      const el = elementsGenerator(obj);
      return el;
    }
    return obj;
  }
  function nav() {
    const header = objNameCreator(["div", "class", "header", null], true);
    const restaurantName = objNameCreator([
      "h1",
      "class",
      "name-logo",
      "Van der Linde",
    ]);
    const btnHome = objNameCreator(["button", "class", "home", "Home"]);
    const btnMenu = objNameCreator(["button", "class", "menu", "Menu"]);
    const btnContact = objNameCreator([
      "button",
      "class",
      "contact",
      "Contact",
    ]);
    const arr = [restaurantName, btnHome, btnMenu, btnContact];

    content.appendChild(header);
    multipleDiv(arr, header);
  }
  function multipleDiv(el_info, parent) {
    el_info.forEach((toCreate) => {
      const el = elementsGenerator(toCreate);
      /* const span = objNameCreator(["span", "class", "img-bullet", ""],true)
      el.appendChild(span) */
      parent.appendChild(el);
    });
  }

  function objPattern(arr) {
    const keys = ["div-1-text", "pText", "img-src"];
    let obj = {};
    for (let k in keys) {
      obj[keys[k]] = arr[k];
    }
    return obj;
  }

  function pElement(text, parent) {
    const p = objNameCreator(["p", null, null, text], true);
    parent.appendChild(p);
  }

  function imgElement(imgSrc, parent, childAppend, default_selector) {
    let img_info = ["IMG", "class", "sub-containers-img", null, imgSrc, null]
    if (default_selector>= 1)(
      img_info[2] = default_selector
    )
    const imgTitle = objNameCreator(
      img_info,
      true
    );
    if (childAppend) {
      parent.firstChild.appendChild(imgTitle);
      return;
    }
    parent.appendChild(imgTitle);
  }

  function divWithChild(child_text) {
    const defaultContainer = objNameCreator(
      ["div", "class", "sub-containers"],
      true
    );
    const div_child = objNameCreator(
      ["div", "class", "title", child_text],
      true
    );
    defaultContainer.appendChild(div_child);
    return defaultContainer;
  }
  function has_info_div(){
    const info = document.querySelector('.info')
    if (info === null){
      const info = objNameCreator(["div", "class", "info", null], true);
      return info
    }
    return info
  }
  function defaultBodyCreator(arr) {

    const info = has_info_div();
    const obj = objPattern(arr);
    const mainDiv = divWithChild(obj["div-1-text"]);
    pElement(obj["pText"], mainDiv);
    imgElement(obj["img-src"], mainDiv);
    info.appendChild(mainDiv);
    content.append(info);
  }

  function smaller_img(){
    const imgs = document.querySelectorAll('.sub-containers-img')
    imgs.forEach(img => img.setAttribute("style",'width:650px'))
  }
  
  /* console.log('order of info = div-1-text,  img-top-src, pText, img-bot-name, img-bot-src') */
  return { defaultBodyCreator, nav , smaller_img, imgElement};
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageCreator);


/***/ }),

/***/ "./src/getmultipleimgs.js":
/*!********************************!*\
  !*** ./src/getmultipleimgs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllImgs": () => (/* binding */ getAllImgs),
/* harmony export */   "getNameDescriptionSrc": () => (/* binding */ getNameDescriptionSrc)
/* harmony export */ });
function  getAllImgs(imgs_files,contentDescription) {
    const folder_content = {};
    const name_src = imgs_files.keys();
    name_src.forEach(
    (key) =>
        (folder_content[key] = [imgs_files(key), contentDescription[name_src.indexOf(key)]])
    );
    return folder_content
}

function getNameDescriptionSrc(value) {
    const name = value[1].split(",")[0];
    const description =  value[1];
    const src = value[0];
    return [name, description, src];
}



/***/ }),

/***/ "./src/img/restaurant-imgs-foods sync \\.jpeg":
/*!*****************************************************************!*\
  !*** ./src/img/restaurant-imgs-foods/ sync nonrecursive \.jpeg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./fried-catfish.jpeg": "./src/img/restaurant-imgs-foods/fried-catfish.jpeg",
	"./labs-heart.jpeg": "./src/img/restaurant-imgs-foods/labs-heart.jpeg",
	"./lambs-fry.jpeg": "./src/img/restaurant-imgs-foods/lambs-fry.jpeg",
	"./prime-rib.jpeg": "./src/img/restaurant-imgs-foods/prime-rib.jpeg",
	"./roast-beef.jpeg": "./src/img/restaurant-imgs-foods/roast-beef.jpeg",
	"./roast-praire-chicken.jpeg": "./src/img/restaurant-imgs-foods/roast-praire-chicken.jpeg"
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
webpackContext.id = "./src/img/restaurant-imgs-foods sync \\.jpeg";

/***/ }),

/***/ "./src/img/workers sync \\.jpg":
/*!**************************************************!*\
  !*** ./src/img/workers/ sync nonrecursive \.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./1-pearson.jpg": "./src/img/workers/1-pearson.jpg",
	"./arthur.jpg": "./src/img/workers/arthur.jpg",
	"./leopold-strauss.jpg": "./src/img/workers/leopold-strauss.jpg",
	"./sadie.jpg": "./src/img/workers/sadie.jpg"
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
webpackContext.id = "./src/img/workers sync \\.jpg";

/***/ }),

/***/ "./src/fonts/CarnivaleeFreakshow.woff":
/*!********************************************!*\
  !*** ./src/fonts/CarnivaleeFreakshow.woff ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9d42eb9d4b5cb9cae1bf.woff";

/***/ }),

/***/ "./src/fonts/CarnivaleeFreakshow.woff2":
/*!*********************************************!*\
  !*** ./src/fonts/CarnivaleeFreakshow.woff2 ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1ebc42f7a3419f465d99.woff2";

/***/ }),

/***/ "./src/img/bullet-hole.png":
/*!*********************************!*\
  !*** ./src/img/bullet-hole.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "afee9d836a415af17126.png";

/***/ }),

/***/ "./src/img/family-photo.jpeg":
/*!***********************************!*\
  !*** ./src/img/family-photo.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7ae2ec8a671d65865cd6.jpeg";

/***/ }),

/***/ "./src/img/paper-old-west1.png":
/*!*************************************!*\
  !*** ./src/img/paper-old-west1.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f099b77a5d629b722b84.png";

/***/ }),

/***/ "./src/img/pearson-stew.jpeg":
/*!***********************************!*\
  !*** ./src/img/pearson-stew.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b85d14b5153997108df5.jpeg";

/***/ }),

/***/ "./src/img/restaurant-imgs-foods/fried-catfish.jpeg":
/*!**********************************************************!*\
  !*** ./src/img/restaurant-imgs-foods/fried-catfish.jpeg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "375a869c83539ff25fe6.jpeg";

/***/ }),

/***/ "./src/img/restaurant-imgs-foods/labs-heart.jpeg":
/*!*******************************************************!*\
  !*** ./src/img/restaurant-imgs-foods/labs-heart.jpeg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0320e767b715e0e0deb5.jpeg";

/***/ }),

/***/ "./src/img/restaurant-imgs-foods/lambs-fry.jpeg":
/*!******************************************************!*\
  !*** ./src/img/restaurant-imgs-foods/lambs-fry.jpeg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "968fbb9c433f1751e58d.jpeg";

/***/ }),

/***/ "./src/img/restaurant-imgs-foods/prime-rib.jpeg":
/*!******************************************************!*\
  !*** ./src/img/restaurant-imgs-foods/prime-rib.jpeg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0baa9fec8d8b94b321a3.jpeg";

/***/ }),

/***/ "./src/img/restaurant-imgs-foods/roast-beef.jpeg":
/*!*******************************************************!*\
  !*** ./src/img/restaurant-imgs-foods/roast-beef.jpeg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5de11f08002f1899f46d.jpeg";

/***/ }),

/***/ "./src/img/restaurant-imgs-foods/roast-praire-chicken.jpeg":
/*!*****************************************************************!*\
  !*** ./src/img/restaurant-imgs-foods/roast-praire-chicken.jpeg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1c10c669358fd8cb2888.jpeg";

/***/ }),

/***/ "./src/img/wood-board.jpg":
/*!********************************!*\
  !*** ./src/img/wood-board.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9f5fe7515758f7a6d0e9.jpg";

/***/ }),

/***/ "./src/img/workers/1-pearson.jpg":
/*!***************************************!*\
  !*** ./src/img/workers/1-pearson.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e79643d8e4cd0fc5e92d.jpg";

/***/ }),

/***/ "./src/img/workers/arthur.jpg":
/*!************************************!*\
  !*** ./src/img/workers/arthur.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2df19f50276f23209053.jpg";

/***/ }),

/***/ "./src/img/workers/leopold-strauss.jpg":
/*!*********************************************!*\
  !*** ./src/img/workers/leopold-strauss.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f13bfb064a2bd760ac0d.jpg";

/***/ }),

/***/ "./src/img/workers/sadie.jpg":
/*!***********************************!*\
  !*** ./src/img/workers/sadie.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "29611e39ab6dc23d89ce.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createPages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createPages.js */ "./src/createPages.js");
/* harmony import */ var _src_dom_manipulation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/dom-manipulation.js */ "./src/dom-manipulation.js");
/* harmony import */ var _MenuStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuStyle.js */ "./src/MenuStyle.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




/* const content = document.createElement('div')
content.setAttribute('id','content');
document.querySelector('body').appendChild(content) */
const menuDom = (0,_src_dom_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
menuDom.nav()
;(0,_createPages_js__WEBPACK_IMPORTED_MODULE_0__.HomePage)()
;(0,_MenuStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"]) ()



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0STNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3pCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBK0Q7QUFDWDtBQUNUO0FBQ3RCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixvRUFBYTtBQUM3QjtBQUNBLDBEQUFRO0FBQ1IsMERBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvTWVudVN0eWxlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jcmVhdGVQYWdlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZG9tLW1hbmlwdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZ2V0bXVsdGlwbGVpbWdzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbWcvcmVzdGF1cmFudC1pbWdzLWZvb2RzLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC5qcGVnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbWcvd29ya2Vycy8gc3luYyBub25yZWN1cnNpdmUgXFwuanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL2ZvbnRzL0Nhcm5pdmFsZWVGcmVha3Nob3cud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi9zcmMvZm9udHMvQ2Fybml2YWxlZUZyZWFrc2hvdy53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi9zcmMvaW1nL3BhcGVyLW9sZC13ZXN0MS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIvc3JjL2ltZy9idWxsZXQtaG9sZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIvc3JjL2ltZy93b29kLWJvYXJkLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJvbGQtd2VzdFxcXCI7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKSxcXG4gICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7O1xcbn1cXG46cm9vdCB7XFxuICAgIC8qIC0tYmx1ZTogIzFlOTBmZjtcXG4gICAgLS13aGl0ZTogI2ZmZmZmZjsgKi9cXG4gICAgLS1zaGFkb3ctd2VpZ2h0OiAzcHggM3B4IDVweCA1cHggO1xcbiAgICAtLXNoYWRvdy1jb2xvcjogcmdiKDI0LCAyMywgMjMpO1xcbiAgICBcXG4gIH1cXG4qIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJvbGQtd2VzdFxcXCI7XFxufVxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjsgXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDIwMHB4LDFmcikpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHJvdy1nYXA6IDUwcHg7XFxufVxcblxcbi5zdWItY29udGFpbmVycyB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctd2VpZ2h0KSB2YXIoLS1zaGFkb3ctY29sb3IpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICB3aWR0aDogMjQ1cHg7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgLyogYm9yZGVyOiAzcHggc29saWQgYmxhY2s7ICovXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjUzLCAyNTMsIDI1MywgMCk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGJvdHRvbTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA3MHB4IDcwcHg7XFxufVxcblxcbiNpY29uLW9uIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgYm90dG9tO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDcwcHggNzBweDtcXG4gICAgb3V0bGluZTogbm9uZVxcblxcbn1cXG5ib2R5e1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxufVxcbi5oZWFkZXIgPiBkaXYge1xcbiAgICBmb250LXNpemU6IDIuM3JlbTtcXG5cXG59XFxuLmhlYWRlcntcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbn1cXG5cXG5cXG5cXG4uc3ViLWNvbnRhaW5lcnMtaW1ne1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG5cXG59XFxuLm5hbWUtbG9nbyB7XFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG4uaG9tZSB7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi9zcmMvaW1nL2J1bGxldC1ob2xlLnBuZ1xcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBib3R0b207XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNzBweCA3MHB4OyAqL1xcblxcbn1cXG5cXG4ubWVudSB7XFxuICAgIGdyaWQtcm93OiAyO1xcbn1cXG5cXG4uY29udGFjdCB7XFxuICAgIGdyaWQtcm93OiAyO1xcbn1cXG4ubG9jYXRpb24ge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuLyogLmJ1bGxldCB7XFxuICAgIHdpZHRoOiA3MHB4O1xcbn0gKi9cXG4udGl0bGUge1xcbiAgICBmb250LXNpemU6IDNyZW07ICBcXG59XFxuLmluZm8ge1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxufVxcblxcbi50aGUtZmFtaWx5IHtcXG4gICAgZ3JpZC1yb3c6IDE7XFxufVxcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx1QkFBdUI7SUFDdkI7MkRBQzJEO0FBQy9EO0FBQ0E7SUFDSTt1QkFDbUI7SUFDbkIsaUNBQWlDO0lBQ2pDLCtCQUErQjs7RUFFakM7QUFDRjtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQyx3REFBd0Q7SUFDeEQsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsU0FBUztJQUNULDRCQUE0QjtJQUM1Qix5REFBcUQ7SUFDckQsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsb0RBQW9EO0FBQ3hEOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLGtDQUFrQztJQUNsQyw0QkFBNEI7SUFDNUIsaUNBQWlDO0lBQ2pDLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHlEQUFpRDtJQUNqRCxpQ0FBaUM7SUFDakMsMEJBQTBCO0lBQzFCOztBQUVKO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULHlEQUFnRDtBQUNwRDtBQUNBO0lBQ0ksaUJBQWlCOztBQUVyQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGNBQWM7QUFDbEI7Ozs7QUFJQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7O0FBRXZCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWDs7aUNBRTZCOztBQUVqQzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7O0dBRUc7QUFDSDtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIm9sZC13ZXN0XFxcIjtcXG4gICAgc3JjOiB1cmwoXFxcIi9zcmMvZm9udHMvQ2Fybml2YWxlZUZyZWFrc2hvdy53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIiksXFxuICAgIHVybChcXFwiL3NyYy9mb250cy9DYXJuaXZhbGVlRnJlYWtzaG93LndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpOztcXG59XFxuOnJvb3Qge1xcbiAgICAvKiAtLWJsdWU6ICMxZTkwZmY7XFxuICAgIC0td2hpdGU6ICNmZmZmZmY7ICovXFxuICAgIC0tc2hhZG93LXdlaWdodDogM3B4IDNweCA1cHggNXB4IDtcXG4gICAgLS1zaGFkb3ctY29sb3I6IHJnYigyNCwgMjMsIDIzKTtcXG4gICAgXFxuICB9XFxuKiB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwib2xkLXdlc3RcXFwiO1xcbn1cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7IFxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMDBweCwxZnIpKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICByb3ctZ2FwOiA1MHB4O1xcbn1cXG5cXG4uc3ViLWNvbnRhaW5lcnMge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi9zcmMvaW1nL3BhcGVyLW9sZC13ZXN0MS5wbmdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgcGFkZGluZzogMzBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy13ZWlnaHQpIHZhcigtLXNoYWRvdy1jb2xvcik7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIHdpZHRoOiAyNDVweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAvKiBib3JkZXI6IDNweCBzb2xpZCBibGFjazsgKi9cXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTMsIDI1MywgMjUzLCAwKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgYm90dG9tO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDcwcHggNzBweDtcXG59XFxuXFxuI2ljb24tb24ge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi9zcmMvaW1nL2J1bGxldC1ob2xlLnBuZ1xcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBib3R0b207XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNzBweCA3MHB4O1xcbiAgICBvdXRsaW5lOiBub25lXFxuXFxufVxcbmJvZHl7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIvc3JjL2ltZy93b29kLWJvYXJkLmpwZ1xcXCIpO1xcbn1cXG4uaGVhZGVyID4gZGl2IHtcXG4gICAgZm9udC1zaXplOiAyLjNyZW07XFxuXFxufVxcbi5oZWFkZXJ7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG59XFxuXFxuXFxuXFxuLnN1Yi1jb250YWluZXJzLWltZ3tcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuXFxufVxcbi5uYW1lLWxvZ28ge1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuLmhvbWUge1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIvc3JjL2ltZy9idWxsZXQtaG9sZS5wbmdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgYm90dG9tO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDcwcHggNzBweDsgKi9cXG5cXG59XFxuXFxuLm1lbnUge1xcbiAgICBncmlkLXJvdzogMjtcXG59XFxuXFxuLmNvbnRhY3Qge1xcbiAgICBncmlkLXJvdzogMjtcXG59XFxuLmxvY2F0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcbi8qIC5idWxsZXQge1xcbiAgICB3aWR0aDogNzBweDtcXG59ICovXFxuLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAzcmVtOyAgXFxufVxcbi5pbmZvIHtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbn1cXG5cXG4udGhlLWZhbWlseSB7XFxuICAgIGdyaWQtcm93OiAxO1xcbn1cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtNZW51UGFnZSxDb250YWN0UGFnZSxIb21lUGFnZSB9ZnJvbSAnLi9jcmVhdGVQYWdlcy5qcydcblxuZnVuY3Rpb24gYnRuSWNvbkFjdGl2ZSgpIHtcbiAgXG4gIGNvbnN0IGJ0bkhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVcIik7XG4gIGJ0bkhvbWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpY29uLW9uXCIpO1xuICBjb25zdCBjYWxsUGFnZXMgPSB7XG4gICAgJ0NvbnRhY3QnOkNvbnRhY3RQYWdlLFxuICAgICdNZW51JzogTWVudVBhZ2UsXG4gICAgJ0hvbWUnOiBIb21lUGFnZSBcbiAgfVxuICBmdW5jdGlvbiBjbGVhbl9pbmZvKGUpIHtcbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZvXCIpO1xuICAgIHdoaWxlIChpbmZvLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGluZm8ucmVtb3ZlQ2hpbGQoaW5mby5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgICBjYWxsUGFnZXNbZS50ZXh0Q29udGVudF0oKVxuICB9XG5cbiAgZnVuY3Rpb24gYnRuQWN0aXZlKCkge1xuICAgIGxldCBjdXJyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpY29uLW9uXCIpO1xuICAgIGN1cnJlbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJcIik7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImljb24tb25cIik7XG4gICAgY2xlYW5faW5mbyh0aGlzKTtcbiAgfVxuICBsZXQgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIik7XG4gIGJ0bnMuZm9yRWFjaCgoYnRuKSA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJ0bkFjdGl2ZSkpO1xufVxuZXhwb3J0IGRlZmF1bHQgYnRuSWNvbkFjdGl2ZSIsImltcG9ydCBIdG1sR2VuZXJhdG9yIGZyb20gXCIvc3JjL2RvbS1tYW5pcHVsYXRpb24uanNcIjtcbmltcG9ydCB7IGdldEFsbEltZ3MsIGdldE5hbWVEZXNjcmlwdGlvblNyYyB9IGZyb20gXCIvc3JjL2dldG11bHRpcGxlaW1ncy5qc1wiO1xuaW1wb3J0IENoZWZTcGVjaWFsIGZyb20gXCIvc3JjL2ltZy9wZWFyc29uLXN0ZXcuanBlZ1wiO1xuaW1wb3J0IEZhbWlseVBob3RvIGZyb20gXCIvc3JjL2ltZy9mYW1pbHktcGhvdG8uanBlZ1wiO1xuXG5jb25zdCBjcmVhdGUgPSBIdG1sR2VuZXJhdG9yKCk7XG5cbmZ1bmN0aW9uIGFwcGVuZEVsZW1lbnRzT2JqIChlbGVtZW50X29iail7XG4gIGxldCBrZXlzID0gT2JqZWN0LmtleXMoZWxlbWVudF9vYmopO1xuICBmb3IgKGxldCBrZXkgb2Yga2V5cykge1xuICBsZXQgaW1nID0gZ2V0TmFtZURlc2NyaXB0aW9uU3JjKGVsZW1lbnRfb2JqW2tleV0pO1xuICBjcmVhdGUuZGVmYXVsdEJvZHlDcmVhdG9yKGltZyk7XG59XG4gIGNyZWF0ZS5zbWFsbGVyX2ltZygpO1xufVxuZnVuY3Rpb24gTWVudVBhZ2UoKSB7XG4gIGRvY3VtZW50LnRpdGxlID0gJ01lbnUnXG4gIGNvbnN0IGltZ19kZXNjcmlwdGlvbiA9IFtcbiAgICBcIkZyaWVkIENhdGZpc2gsIHdpdGggZ3JlZW5zIGFuZCBib2lsZWQgYmVhbnMuXCIsXG4gICAgXCJMYW1iJ3MgSGVhcnQsIHdpdGggYm9pbGVkIGNhYmJhZ2UuXCIsXG4gICAgXCJMYW1iJ3MgRnJ5LCB3aXRoIGdyZWVuIHBlYXMgYW5kIGJvaWxlZCBwb3RhdG9lcy5cIixcbiAgICBcIlByaW1lIFJpYiwgd2l0aCBwb3RhdG9lcyBkYXVwaGlub2lzZSBhbmQgc3ByaW5nIHNhbGFkLlwiLFxuICAgIFwiUm9hc3QgQmVlZiwgd2l0aCBjb3JuIGFuZCBnbGF6ZWQgY2Fycm90cy5cIixcbiAgICBcIlJvYXN0IFByYWlyaWUgQ2hpY2tlbiwgd2l0aCBncmVlbiBiZWFucywgbWFzaGVkIHBvdGF0b2VzIGFuZCBncmF2eS5cIixcbiAgXTtcbiAgY29uc3QgcGF0aF9zZWFyY2ggPSByZXF1aXJlLmNvbnRleHQoXG4gICAgXCIvc3JjL2ltZy9yZXN0YXVyYW50LWltZ3MtZm9vZHNcIixcbiAgICBmYWxzZSxcbiAgICAvXFwuanBlZy9cbiAgKTtcbiAgY29uc3QgaW1nc09iaiA9IGdldEFsbEltZ3MocGF0aF9zZWFyY2gsIGltZ19kZXNjcmlwdGlvbik7XG4gIGFwcGVuZEVsZW1lbnRzT2JqKGltZ3NPYmopXG59XG5cbmZ1bmN0aW9uIENvbnRhY3RQYWdlKCkge1xuICBkb2N1bWVudC50aXRsZSA9ICdDb250YWN0J1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IFtcbiAgICAgIFwiQ2hlZiBDb29rIGFuZCBUaGUgQnV0Y2hlclwiLFxuICAgICAgXCJTZWN1cml0eSBhbmQgV2FpdGVyXCIsXG4gICAgICBcIkZpbmFuY2UgTWFuYWdlbWVudFwiLFxuICAgICAgXCJTZWN1cml0eSBhbmQgV2FpdGVyXCIsXG4gIF1cbiAgY29uc3QgcGF0aF9zZWFyY2ggPSByZXF1aXJlLmNvbnRleHQoXG4gICAgXCIvc3JjL2ltZy93b3JrZXJzXCIsXG4gICAgZmFsc2UsXG4gICAgL1xcLmpwZy9cbiAgKTtcbiAgY29uc3QgaW1nc09iaiA9IGdldEFsbEltZ3MocGF0aF9zZWFyY2gsIGRlc2NyaXB0aW9uKTtcbiAgYXBwZW5kRWxlbWVudHNPYmooaW1nc09iailcbiAgLyogY29uc3QgY3JlYXRlID0gSHRtbEdlbmVyYXRvcigpOyAqL1xuICBcbn1cblxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIGRvY3VtZW50LnRpdGxlID0gJ0hvbWUnXG4gIGNvbnN0IGNvbnRhaW5lcl9jaGVmID0gW1xuICAgIFwiQ2hlZiBTcGVjaWFsXCIsXG4gICAgXCJQZWFyc29uJ3MgU3RldyAoQmVlZiBTdGV3KS5cIixcbiAgICBDaGVmU3BlY2lhbCxcbiAgXTtcbiAgY29uc3QgY29udGFpbmVyX2ZhbWlseSA9IFtcbiAgICBcIlRoZSBGYW1pbHlcIixcbiAgICBcIkFuIG9sZCB3ZXN0IHRoZW1lIHJlc3RhdXJhbnRcIixcbiAgICBGYW1pbHlQaG90byxcbiAgXTtcbiAgXG4gIC8qIGNvbnN0IGNyZWF0ZSA9IEh0bWxHZW5lcmF0b3IoKTsgKi9cbiAgY3JlYXRlLmRlZmF1bHRCb2R5Q3JlYXRvcihjb250YWluZXJfZmFtaWx5KTtcbiAgY3JlYXRlLmRlZmF1bHRCb2R5Q3JlYXRvcihjb250YWluZXJfY2hlZik7XG4gIFxufVxuZXhwb3J0IHtNZW51UGFnZSxDb250YWN0UGFnZSxIb21lUGFnZX07XG4iLCJcbmZ1bmN0aW9uIHBhZ2VDcmVhdG9yKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBcbiAgZnVuY3Rpb24gZWxlbWVudHNHZW5lcmF0b3IoZWxlbWVudF9vYmopIHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudF9vYmpbXCJ0eXBlXCJdKTtcbiAgICBpZiAoZWxlbWVudF9vYmpbXCJ0eXBlXCJdID09IFwiSU1HXCIpIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZShcInNyY1wiLCBlbGVtZW50X29ialtcInNyY19pbWdcIl0pO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50X29ialtcInNlbGVjdG9yX3R5cGVcIl0gPT0gXCJjbGFzc1wiKSB7XG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKGVsZW1lbnRfb2JqW1wic2VsZWN0b3JfbmFtZVwiXSk7XG4gICAgfVxuICAgIGlmIChlbGVtZW50X29ialtcInNlbGVjdG9yX3R5cGVcIl0gPT0gXCJpZFwiKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBlbGVtZW50X29ialtcInNlbGVjdG9yX25hbWVcIl0pO1xuICAgIH1cblxuICAgIGVsLnRleHRDb250ZW50ID0gZWxlbWVudF9vYmpbXCJ0ZXh0X2NvbnRlbnRcIl07XG4gICAgcmV0dXJuIGVsO1xuICB9XG5cbiAgZnVuY3Rpb24gb2JqTmFtZUNyZWF0b3IobHN0LCBtYWtlRWxlbWVudCkge1xuICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgIHR5cGU6IGxzdFswXSxcbiAgICAgIHNlbGVjdG9yX3R5cGU6IGxzdFsxXSxcbiAgICAgIHNlbGVjdG9yX25hbWU6IGxzdFsyXSxcbiAgICAgIHRleHRfY29udGVudDogbHN0WzNdLFxuICAgICAgc3JjX2ltZzogbHN0WzRdLFxuICAgIH07XG4gICAgaWYgKG1ha2VFbGVtZW50KSB7XG4gICAgICBjb25zdCBlbCA9IGVsZW1lbnRzR2VuZXJhdG9yKG9iaik7XG4gICAgICByZXR1cm4gZWw7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH1cbiAgZnVuY3Rpb24gbmF2KCkge1xuICAgIGNvbnN0IGhlYWRlciA9IG9iak5hbWVDcmVhdG9yKFtcImRpdlwiLCBcImNsYXNzXCIsIFwiaGVhZGVyXCIsIG51bGxdLCB0cnVlKTtcbiAgICBjb25zdCByZXN0YXVyYW50TmFtZSA9IG9iak5hbWVDcmVhdG9yKFtcbiAgICAgIFwiaDFcIixcbiAgICAgIFwiY2xhc3NcIixcbiAgICAgIFwibmFtZS1sb2dvXCIsXG4gICAgICBcIlZhbiBkZXIgTGluZGVcIixcbiAgICBdKTtcbiAgICBjb25zdCBidG5Ib21lID0gb2JqTmFtZUNyZWF0b3IoW1wiYnV0dG9uXCIsIFwiY2xhc3NcIiwgXCJob21lXCIsIFwiSG9tZVwiXSk7XG4gICAgY29uc3QgYnRuTWVudSA9IG9iak5hbWVDcmVhdG9yKFtcImJ1dHRvblwiLCBcImNsYXNzXCIsIFwibWVudVwiLCBcIk1lbnVcIl0pO1xuICAgIGNvbnN0IGJ0bkNvbnRhY3QgPSBvYmpOYW1lQ3JlYXRvcihbXG4gICAgICBcImJ1dHRvblwiLFxuICAgICAgXCJjbGFzc1wiLFxuICAgICAgXCJjb250YWN0XCIsXG4gICAgICBcIkNvbnRhY3RcIixcbiAgICBdKTtcbiAgICBjb25zdCBhcnIgPSBbcmVzdGF1cmFudE5hbWUsIGJ0bkhvbWUsIGJ0bk1lbnUsIGJ0bkNvbnRhY3RdO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIG11bHRpcGxlRGl2KGFyciwgaGVhZGVyKTtcbiAgfVxuICBmdW5jdGlvbiBtdWx0aXBsZURpdihlbF9pbmZvLCBwYXJlbnQpIHtcbiAgICBlbF9pbmZvLmZvckVhY2goKHRvQ3JlYXRlKSA9PiB7XG4gICAgICBjb25zdCBlbCA9IGVsZW1lbnRzR2VuZXJhdG9yKHRvQ3JlYXRlKTtcbiAgICAgIC8qIGNvbnN0IHNwYW4gPSBvYmpOYW1lQ3JlYXRvcihbXCJzcGFuXCIsIFwiY2xhc3NcIiwgXCJpbWctYnVsbGV0XCIsIFwiXCJdLHRydWUpXG4gICAgICBlbC5hcHBlbmRDaGlsZChzcGFuKSAqL1xuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGVsKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9ialBhdHRlcm4oYXJyKSB7XG4gICAgY29uc3Qga2V5cyA9IFtcImRpdi0xLXRleHRcIiwgXCJwVGV4dFwiLCBcImltZy1zcmNcIl07XG4gICAgbGV0IG9iaiA9IHt9O1xuICAgIGZvciAobGV0IGsgaW4ga2V5cykge1xuICAgICAgb2JqW2tleXNba11dID0gYXJyW2tdO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgZnVuY3Rpb24gcEVsZW1lbnQodGV4dCwgcGFyZW50KSB7XG4gICAgY29uc3QgcCA9IG9iak5hbWVDcmVhdG9yKFtcInBcIiwgbnVsbCwgbnVsbCwgdGV4dF0sIHRydWUpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGltZ0VsZW1lbnQoaW1nU3JjLCBwYXJlbnQsIGNoaWxkQXBwZW5kLCBkZWZhdWx0X3NlbGVjdG9yKSB7XG4gICAgbGV0IGltZ19pbmZvID0gW1wiSU1HXCIsIFwiY2xhc3NcIiwgXCJzdWItY29udGFpbmVycy1pbWdcIiwgbnVsbCwgaW1nU3JjLCBudWxsXVxuICAgIGlmIChkZWZhdWx0X3NlbGVjdG9yPj0gMSkoXG4gICAgICBpbWdfaW5mb1syXSA9IGRlZmF1bHRfc2VsZWN0b3JcbiAgICApXG4gICAgY29uc3QgaW1nVGl0bGUgPSBvYmpOYW1lQ3JlYXRvcihcbiAgICAgIGltZ19pbmZvLFxuICAgICAgdHJ1ZVxuICAgICk7XG4gICAgaWYgKGNoaWxkQXBwZW5kKSB7XG4gICAgICBwYXJlbnQuZmlyc3RDaGlsZC5hcHBlbmRDaGlsZChpbWdUaXRsZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChpbWdUaXRsZSk7XG4gIH1cblxuICBmdW5jdGlvbiBkaXZXaXRoQ2hpbGQoY2hpbGRfdGV4dCkge1xuICAgIGNvbnN0IGRlZmF1bHRDb250YWluZXIgPSBvYmpOYW1lQ3JlYXRvcihcbiAgICAgIFtcImRpdlwiLCBcImNsYXNzXCIsIFwic3ViLWNvbnRhaW5lcnNcIl0sXG4gICAgICB0cnVlXG4gICAgKTtcbiAgICBjb25zdCBkaXZfY2hpbGQgPSBvYmpOYW1lQ3JlYXRvcihcbiAgICAgIFtcImRpdlwiLCBcImNsYXNzXCIsIFwidGl0bGVcIiwgY2hpbGRfdGV4dF0sXG4gICAgICB0cnVlXG4gICAgKTtcbiAgICBkZWZhdWx0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpdl9jaGlsZCk7XG4gICAgcmV0dXJuIGRlZmF1bHRDb250YWluZXI7XG4gIH1cbiAgZnVuY3Rpb24gaGFzX2luZm9fZGl2KCl7XG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvJylcbiAgICBpZiAoaW5mbyA9PT0gbnVsbCl7XG4gICAgICBjb25zdCBpbmZvID0gb2JqTmFtZUNyZWF0b3IoW1wiZGl2XCIsIFwiY2xhc3NcIiwgXCJpbmZvXCIsIG51bGxdLCB0cnVlKTtcbiAgICAgIHJldHVybiBpbmZvXG4gICAgfVxuICAgIHJldHVybiBpbmZvXG4gIH1cbiAgZnVuY3Rpb24gZGVmYXVsdEJvZHlDcmVhdG9yKGFycikge1xuXG4gICAgY29uc3QgaW5mbyA9IGhhc19pbmZvX2RpdigpO1xuICAgIGNvbnN0IG9iaiA9IG9ialBhdHRlcm4oYXJyKTtcbiAgICBjb25zdCBtYWluRGl2ID0gZGl2V2l0aENoaWxkKG9ialtcImRpdi0xLXRleHRcIl0pO1xuICAgIHBFbGVtZW50KG9ialtcInBUZXh0XCJdLCBtYWluRGl2KTtcbiAgICBpbWdFbGVtZW50KG9ialtcImltZy1zcmNcIl0sIG1haW5EaXYpO1xuICAgIGluZm8uYXBwZW5kQ2hpbGQobWFpbkRpdik7XG4gICAgY29udGVudC5hcHBlbmQoaW5mbyk7XG4gIH1cblxuICBmdW5jdGlvbiBzbWFsbGVyX2ltZygpe1xuICAgIGNvbnN0IGltZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3ViLWNvbnRhaW5lcnMtaW1nJylcbiAgICBpbWdzLmZvckVhY2goaW1nID0+IGltZy5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCd3aWR0aDo2NTBweCcpKVxuICB9XG4gIFxuICAvKiBjb25zb2xlLmxvZygnb3JkZXIgb2YgaW5mbyA9IGRpdi0xLXRleHQsICBpbWctdG9wLXNyYywgcFRleHQsIGltZy1ib3QtbmFtZSwgaW1nLWJvdC1zcmMnKSAqL1xuICByZXR1cm4geyBkZWZhdWx0Qm9keUNyZWF0b3IsIG5hdiAsIHNtYWxsZXJfaW1nLCBpbWdFbGVtZW50fTtcbn1cbmV4cG9ydCBkZWZhdWx0IHBhZ2VDcmVhdG9yO1xuIiwiZnVuY3Rpb24gIGdldEFsbEltZ3MoaW1nc19maWxlcyxjb250ZW50RGVzY3JpcHRpb24pIHtcbiAgICBjb25zdCBmb2xkZXJfY29udGVudCA9IHt9O1xuICAgIGNvbnN0IG5hbWVfc3JjID0gaW1nc19maWxlcy5rZXlzKCk7XG4gICAgbmFtZV9zcmMuZm9yRWFjaChcbiAgICAoa2V5KSA9PlxuICAgICAgICAoZm9sZGVyX2NvbnRlbnRba2V5XSA9IFtpbWdzX2ZpbGVzKGtleSksIGNvbnRlbnREZXNjcmlwdGlvbltuYW1lX3NyYy5pbmRleE9mKGtleSldXSlcbiAgICApO1xuICAgIHJldHVybiBmb2xkZXJfY29udGVudFxufVxuXG5mdW5jdGlvbiBnZXROYW1lRGVzY3JpcHRpb25TcmModmFsdWUpIHtcbiAgICBjb25zdCBuYW1lID0gdmFsdWVbMV0uc3BsaXQoXCIsXCIpWzBdO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gIHZhbHVlWzFdO1xuICAgIGNvbnN0IHNyYyA9IHZhbHVlWzBdO1xuICAgIHJldHVybiBbbmFtZSwgZGVzY3JpcHRpb24sIHNyY107XG59XG5cbmV4cG9ydCB7Z2V0TmFtZURlc2NyaXB0aW9uU3JjLCBnZXRBbGxJbWdzfSIsInZhciBtYXAgPSB7XG5cdFwiLi9mcmllZC1jYXRmaXNoLmpwZWdcIjogXCIuL3NyYy9pbWcvcmVzdGF1cmFudC1pbWdzLWZvb2RzL2ZyaWVkLWNhdGZpc2guanBlZ1wiLFxuXHRcIi4vbGFicy1oZWFydC5qcGVnXCI6IFwiLi9zcmMvaW1nL3Jlc3RhdXJhbnQtaW1ncy1mb29kcy9sYWJzLWhlYXJ0LmpwZWdcIixcblx0XCIuL2xhbWJzLWZyeS5qcGVnXCI6IFwiLi9zcmMvaW1nL3Jlc3RhdXJhbnQtaW1ncy1mb29kcy9sYW1icy1mcnkuanBlZ1wiLFxuXHRcIi4vcHJpbWUtcmliLmpwZWdcIjogXCIuL3NyYy9pbWcvcmVzdGF1cmFudC1pbWdzLWZvb2RzL3ByaW1lLXJpYi5qcGVnXCIsXG5cdFwiLi9yb2FzdC1iZWVmLmpwZWdcIjogXCIuL3NyYy9pbWcvcmVzdGF1cmFudC1pbWdzLWZvb2RzL3JvYXN0LWJlZWYuanBlZ1wiLFxuXHRcIi4vcm9hc3QtcHJhaXJlLWNoaWNrZW4uanBlZ1wiOiBcIi4vc3JjL2ltZy9yZXN0YXVyYW50LWltZ3MtZm9vZHMvcm9hc3QtcHJhaXJlLWNoaWNrZW4uanBlZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9pbWcvcmVzdGF1cmFudC1pbWdzLWZvb2RzIHN5bmMgXFxcXC5qcGVnXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuLzEtcGVhcnNvbi5qcGdcIjogXCIuL3NyYy9pbWcvd29ya2Vycy8xLXBlYXJzb24uanBnXCIsXG5cdFwiLi9hcnRodXIuanBnXCI6IFwiLi9zcmMvaW1nL3dvcmtlcnMvYXJ0aHVyLmpwZ1wiLFxuXHRcIi4vbGVvcG9sZC1zdHJhdXNzLmpwZ1wiOiBcIi4vc3JjL2ltZy93b3JrZXJzL2xlb3BvbGQtc3RyYXVzcy5qcGdcIixcblx0XCIuL3NhZGllLmpwZ1wiOiBcIi4vc3JjL2ltZy93b3JrZXJzL3NhZGllLmpwZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9pbWcvd29ya2VycyBzeW5jIFxcXFwuanBnXCI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQge01lbnVQYWdlLENvbnRhY3RQYWdlLEhvbWVQYWdlIH0gZnJvbSAnLi9jcmVhdGVQYWdlcy5qcydcbmltcG9ydCBIdG1sR2VuZXJhdG9yIGZyb20gJy9zcmMvZG9tLW1hbmlwdWxhdGlvbi5qcydcbmltcG9ydCBCdG5JY29uQWN0aXZlIGZyb20gJy4vTWVudVN0eWxlLmpzJztcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG4vKiBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsJ2NvbnRlbnQnKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZChjb250ZW50KSAqL1xuY29uc3QgbWVudURvbSA9IEh0bWxHZW5lcmF0b3IoKTtcbm1lbnVEb20ubmF2KClcbkhvbWVQYWdlKClcbkJ0bkljb25BY3RpdmUgKClcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=