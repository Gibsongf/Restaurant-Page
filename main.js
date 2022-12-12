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




const menuDom = (0,_src_dom_manipulation_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
menuDom.nav()
;(0,_createPages_js__WEBPACK_IMPORTED_MODULE_0__.HomePage)()
;(0,_MenuStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"]) ()
/* const btnHome = document.querySelector('.home')
btnHome.setAttribute('id','bullet')

const pagesObj = {
    'Contact':ContactPage,
    'Menu': MenuPage,
    'Home': HomePage 
  }
function clean_info (e){
    const info  = document.querySelector('.info')
    while (info.firstChild) {
        info.removeChild(info.lastChild);
    }
    pagesObj[e.textContent]()
}

function btnActive() {
    let current = document.getElementById('bullet')
    current.setAttribute('id','');
    this.setAttribute('id','bullet')
    clean_info(this)
  }
let btns = document.querySelectorAll('button');
btns.forEach(btn => btn.addEventListener('click',btnActive) ) */


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckkzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQStEO0FBQ1g7QUFDVDtBQUN0QjtBQUNyQixnQkFBZ0Isb0VBQWE7QUFDN0I7QUFDQSwwREFBUTtBQUNSLDBEQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9NZW51U3R5bGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NyZWF0ZVBhZ2VzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9kb20tbWFuaXB1bGF0aW9uLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9nZXRtdWx0aXBsZWltZ3MuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2ltZy9yZXN0YXVyYW50LWltZ3MtZm9vZHMvIHN5bmMgbm9ucmVjdXJzaXZlIFxcLmpwZWciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2ltZy93b3JrZXJzLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvZm9udHMvQ2Fybml2YWxlZUZyZWFrc2hvdy53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiL3NyYy9mb250cy9DYXJuaXZhbGVlRnJlYWtzaG93LndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiL3NyYy9pbWcvcGFwZXItb2xkLXdlc3QxLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi9zcmMvaW1nL2J1bGxldC1ob2xlLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi9zcmMvaW1nL3dvb2QtYm9hcmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIm9sZC13ZXN0XFxcIjtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpLFxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKTs7XFxufVxcbjpyb290IHtcXG4gICAgLyogLS1ibHVlOiAjMWU5MGZmO1xcbiAgICAtLXdoaXRlOiAjZmZmZmZmOyAqL1xcbiAgICAtLXNoYWRvdy13ZWlnaHQ6IDNweCAzcHggNXB4IDVweCA7XFxuICAgIC0tc2hhZG93LWNvbG9yOiByZ2IoMjQsIDIzLCAyMyk7XFxuICAgIFxcbiAgfVxcbioge1xcbiAgICBmb250LWZhbWlseTogXFxcIm9sZC13ZXN0XFxcIjtcXG59XFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyOyBcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjAwcHgsMWZyKSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcm93LWdhcDogNTBweDtcXG59XFxuXFxuLnN1Yi1jb250YWluZXJzIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGdhcDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgcGFkZGluZzogMzBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy13ZWlnaHQpIHZhcigtLXNoYWRvdy1jb2xvcik7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIHdpZHRoOiAyNDVweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAvKiBib3JkZXI6IDNweCBzb2xpZCBibGFjazsgKi9cXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTMsIDI1MywgMjUzLCAwKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgYm90dG9tO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDcwcHggNzBweDtcXG59XFxuXFxuI2ljb24tb24ge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBib3R0b207XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNzBweCA3MHB4O1xcbiAgICBvdXRsaW5lOiBub25lXFxuXFxufVxcbmJvZHl7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXG59XFxuLmhlYWRlciA+IGRpdiB7XFxuICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xcblxcbn1cXG4uaGVhZGVye1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxufVxcblxcblxcblxcbi5zdWItY29udGFpbmVycy1pbWd7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcblxcbn1cXG4ubmFtZS1sb2dvIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBmb250LXNpemU6IDRyZW07XFxufVxcbi5ob21lIHtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiL3NyYy9pbWcvYnVsbGV0LWhvbGUucG5nXFxcIik7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGJvdHRvbTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA3MHB4IDcwcHg7ICovXFxuXFxufVxcblxcbi5tZW51IHtcXG4gICAgZ3JpZC1yb3c6IDI7XFxufVxcblxcbi5jb250YWN0IHtcXG4gICAgZ3JpZC1yb3c6IDI7XFxufVxcbi5sb2NhdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG4vKiAuYnVsbGV0IHtcXG4gICAgd2lkdGg6IDcwcHg7XFxufSAqL1xcbi50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTsgIFxcbn1cXG4uaW5mbyB7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG59XFxuXFxuLnRoZS1mYW1pbHkge1xcbiAgICBncmlkLXJvdzogMTtcXG59XFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QjsyREFDMkQ7QUFDL0Q7QUFDQTtJQUNJO3VCQUNtQjtJQUNuQixpQ0FBaUM7SUFDakMsK0JBQStCOztFQUVqQztBQUNGO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLHdEQUF3RDtJQUN4RCxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsNEJBQTRCO0lBQzVCLHlEQUFxRDtJQUNyRCxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixvREFBb0Q7QUFDeEQ7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0Isa0NBQWtDO0lBQ2xDLDRCQUE0QjtJQUM1QixpQ0FBaUM7SUFDakMsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0kseURBQWlEO0lBQ2pELGlDQUFpQztJQUNqQywwQkFBMEI7SUFDMUI7O0FBRUo7QUFDQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1QseURBQWdEO0FBQ3BEO0FBQ0E7SUFDSSxpQkFBaUI7O0FBRXJCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsY0FBYztBQUNsQjs7OztBQUlBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjs7QUFFdkI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYOztpQ0FFNkI7O0FBRWpDOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTs7R0FFRztBQUNIO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwib2xkLXdlc3RcXFwiO1xcbiAgICBzcmM6IHVybChcXFwiL3NyYy9mb250cy9DYXJuaXZhbGVlRnJlYWtzaG93LndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKSxcXG4gICAgdXJsKFxcXCIvc3JjL2ZvbnRzL0Nhcm5pdmFsZWVGcmVha3Nob3cud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7O1xcbn1cXG46cm9vdCB7XFxuICAgIC8qIC0tYmx1ZTogIzFlOTBmZjtcXG4gICAgLS13aGl0ZTogI2ZmZmZmZjsgKi9cXG4gICAgLS1zaGFkb3ctd2VpZ2h0OiAzcHggM3B4IDVweCA1cHggO1xcbiAgICAtLXNoYWRvdy1jb2xvcjogcmdiKDI0LCAyMywgMjMpO1xcbiAgICBcXG4gIH1cXG4qIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJvbGQtd2VzdFxcXCI7XFxufVxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjsgXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDIwMHB4LDFmcikpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHJvdy1nYXA6IDUwcHg7XFxufVxcblxcbi5zdWItY29udGFpbmVycyB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiL3NyYy9pbWcvcGFwZXItb2xkLXdlc3QxLnBuZ1xcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXdlaWdodCkgdmFyKC0tc2hhZG93LWNvbG9yKTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgd2lkdGg6IDI0NXB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIC8qIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrOyAqL1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1MywgMjUzLCAyNTMsIDApO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBib3R0b207XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNzBweCA3MHB4O1xcbn1cXG5cXG4jaWNvbi1vbiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiL3NyYy9pbWcvYnVsbGV0LWhvbGUucG5nXFxcIik7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGJvdHRvbTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA3MHB4IDcwcHg7XFxuICAgIG91dGxpbmU6IG5vbmVcXG5cXG59XFxuYm9keXtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi9zcmMvaW1nL3dvb2QtYm9hcmQuanBnXFxcIik7XFxufVxcbi5oZWFkZXIgPiBkaXYge1xcbiAgICBmb250LXNpemU6IDIuM3JlbTtcXG5cXG59XFxuLmhlYWRlcntcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbn1cXG5cXG5cXG5cXG4uc3ViLWNvbnRhaW5lcnMtaW1ne1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG5cXG59XFxuLm5hbWUtbG9nbyB7XFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG4uaG9tZSB7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi9zcmMvaW1nL2J1bGxldC1ob2xlLnBuZ1xcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBib3R0b207XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNzBweCA3MHB4OyAqL1xcblxcbn1cXG5cXG4ubWVudSB7XFxuICAgIGdyaWQtcm93OiAyO1xcbn1cXG5cXG4uY29udGFjdCB7XFxuICAgIGdyaWQtcm93OiAyO1xcbn1cXG4ubG9jYXRpb24ge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuLyogLmJ1bGxldCB7XFxuICAgIHdpZHRoOiA3MHB4O1xcbn0gKi9cXG4udGl0bGUge1xcbiAgICBmb250LXNpemU6IDNyZW07ICBcXG59XFxuLmluZm8ge1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxufVxcblxcbi50aGUtZmFtaWx5IHtcXG4gICAgZ3JpZC1yb3c6IDE7XFxufVxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge01lbnVQYWdlLENvbnRhY3RQYWdlLEhvbWVQYWdlIH1mcm9tICcuL2NyZWF0ZVBhZ2VzLmpzJ1xuXG5mdW5jdGlvbiBidG5JY29uQWN0aXZlKCkge1xuICBcbiAgY29uc3QgYnRuSG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZVwiKTtcbiAgYnRuSG9tZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImljb24tb25cIik7XG4gIGNvbnN0IGNhbGxQYWdlcyA9IHtcbiAgICAnQ29udGFjdCc6Q29udGFjdFBhZ2UsXG4gICAgJ01lbnUnOiBNZW51UGFnZSxcbiAgICAnSG9tZSc6IEhvbWVQYWdlIFxuICB9XG4gIGZ1bmN0aW9uIGNsZWFuX2luZm8oZSkge1xuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZm9cIik7XG4gICAgd2hpbGUgKGluZm8uZmlyc3RDaGlsZCkge1xuICAgICAgaW5mby5yZW1vdmVDaGlsZChpbmZvLmxhc3RDaGlsZCk7XG4gICAgfVxuICAgIGNhbGxQYWdlc1tlLnRleHRDb250ZW50XSgpXG4gIH1cblxuICBmdW5jdGlvbiBidG5BY3RpdmUoKSB7XG4gICAgbGV0IGN1cnJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImljb24tb25cIik7XG4gICAgY3VycmVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIlwiKTtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaWNvbi1vblwiKTtcbiAgICBjbGVhbl9pbmZvKHRoaXMpO1xuICB9XG4gIGxldCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKTtcbiAgYnRucy5mb3JFYWNoKChidG4pID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYnRuQWN0aXZlKSk7XG59XG5leHBvcnQgZGVmYXVsdCBidG5JY29uQWN0aXZlIiwiaW1wb3J0IEh0bWxHZW5lcmF0b3IgZnJvbSBcIi9zcmMvZG9tLW1hbmlwdWxhdGlvbi5qc1wiO1xuaW1wb3J0IHsgZ2V0QWxsSW1ncywgZ2V0TmFtZURlc2NyaXB0aW9uU3JjIH0gZnJvbSBcIi9zcmMvZ2V0bXVsdGlwbGVpbWdzLmpzXCI7XG5pbXBvcnQgQ2hlZlNwZWNpYWwgZnJvbSBcIi9zcmMvaW1nL3BlYXJzb24tc3Rldy5qcGVnXCI7XG5pbXBvcnQgRmFtaWx5UGhvdG8gZnJvbSBcIi9zcmMvaW1nL2ZhbWlseS1waG90by5qcGVnXCI7XG5cbmNvbnN0IGNyZWF0ZSA9IEh0bWxHZW5lcmF0b3IoKTtcblxuZnVuY3Rpb24gYXBwZW5kRWxlbWVudHNPYmogKGVsZW1lbnRfb2JqKXtcbiAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhlbGVtZW50X29iaik7XG4gIGZvciAobGV0IGtleSBvZiBrZXlzKSB7XG4gIGxldCBpbWcgPSBnZXROYW1lRGVzY3JpcHRpb25TcmMoZWxlbWVudF9vYmpba2V5XSk7XG4gIGNyZWF0ZS5kZWZhdWx0Qm9keUNyZWF0b3IoaW1nKTtcbn1cbiAgY3JlYXRlLnNtYWxsZXJfaW1nKCk7XG59XG5mdW5jdGlvbiBNZW51UGFnZSgpIHtcbiAgY29uc3QgaW1nX2Rlc2NyaXB0aW9uID0gW1xuICAgIFwiRnJpZWQgQ2F0ZmlzaCwgd2l0aCBncmVlbnMgYW5kIGJvaWxlZCBiZWFucy5cIixcbiAgICBcIkxhbWIncyBIZWFydCwgd2l0aCBib2lsZWQgY2FiYmFnZS5cIixcbiAgICBcIkxhbWIncyBGcnksIHdpdGggZ3JlZW4gcGVhcyBhbmQgYm9pbGVkIHBvdGF0b2VzLlwiLFxuICAgIFwiUHJpbWUgUmliLCB3aXRoIHBvdGF0b2VzIGRhdXBoaW5vaXNlIGFuZCBzcHJpbmcgc2FsYWQuXCIsXG4gICAgXCJSb2FzdCBCZWVmLCB3aXRoIGNvcm4gYW5kIGdsYXplZCBjYXJyb3RzLlwiLFxuICAgIFwiUm9hc3QgUHJhaXJpZSBDaGlja2VuLCB3aXRoIGdyZWVuIGJlYW5zLCBtYXNoZWQgcG90YXRvZXMgYW5kIGdyYXZ5LlwiLFxuICBdO1xuICBjb25zdCBwYXRoX3NlYXJjaCA9IHJlcXVpcmUuY29udGV4dChcbiAgICBcIi9zcmMvaW1nL3Jlc3RhdXJhbnQtaW1ncy1mb29kc1wiLFxuICAgIGZhbHNlLFxuICAgIC9cXC5qcGVnL1xuICApO1xuICBjb25zdCBpbWdzT2JqID0gZ2V0QWxsSW1ncyhwYXRoX3NlYXJjaCwgaW1nX2Rlc2NyaXB0aW9uKTtcbiAgYXBwZW5kRWxlbWVudHNPYmooaW1nc09iailcbn1cblxuZnVuY3Rpb24gQ29udGFjdFBhZ2UoKSB7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gW1xuICAgICAgXCJDaGVmIENvb2sgYW5kIFRoZSBCdXRjaGVyXCIsXG4gICAgICBcIlNlY3VyaXR5IGFuZCBXYWl0ZXJcIixcbiAgICAgIFwiRmluYW5jZSBNYW5hZ2VtZW50XCIsXG4gICAgICBcIlNlY3VyaXR5IGFuZCBXYWl0ZXJcIixcbiAgXVxuICBjb25zdCBwYXRoX3NlYXJjaCA9IHJlcXVpcmUuY29udGV4dChcbiAgICBcIi9zcmMvaW1nL3dvcmtlcnNcIixcbiAgICBmYWxzZSxcbiAgICAvXFwuanBnL1xuICApO1xuICBjb25zdCBpbWdzT2JqID0gZ2V0QWxsSW1ncyhwYXRoX3NlYXJjaCwgZGVzY3JpcHRpb24pO1xuICBhcHBlbmRFbGVtZW50c09iaihpbWdzT2JqKVxuICAvKiBjb25zdCBjcmVhdGUgPSBIdG1sR2VuZXJhdG9yKCk7ICovXG4gIFxufVxuXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgY29uc3QgY29udGFpbmVyX2NoZWYgPSBbXG4gICAgXCJDaGVmIFNwZWNpYWxcIixcbiAgICBcIlBlYXJzb24ncyBTdGV3IChCZWVmIFN0ZXcpLlwiLFxuICAgIENoZWZTcGVjaWFsLFxuICBdO1xuICBjb25zdCBjb250YWluZXJfZmFtaWx5ID0gW1xuICAgIFwiVGhlIEZhbWlseVwiLFxuICAgIFwiQW4gb2xkIHdlc3QgdGhlbWUgcmVzdGF1cmFudFwiLFxuICAgIEZhbWlseVBob3RvLFxuICBdO1xuICBcbiAgLyogY29uc3QgY3JlYXRlID0gSHRtbEdlbmVyYXRvcigpOyAqL1xuICBjcmVhdGUuZGVmYXVsdEJvZHlDcmVhdG9yKGNvbnRhaW5lcl9mYW1pbHkpO1xuICBjcmVhdGUuZGVmYXVsdEJvZHlDcmVhdG9yKGNvbnRhaW5lcl9jaGVmKTtcbiAgXG59XG5leHBvcnQge01lbnVQYWdlLENvbnRhY3RQYWdlLEhvbWVQYWdlfTtcbiIsIlxuZnVuY3Rpb24gcGFnZUNyZWF0b3IoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgZnVuY3Rpb24gZWxlbWVudHNHZW5lcmF0b3IoZWxlbWVudF9vYmopIHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudF9vYmpbXCJ0eXBlXCJdKTtcbiAgICBpZiAoZWxlbWVudF9vYmpbXCJ0eXBlXCJdID09IFwiSU1HXCIpIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZShcInNyY1wiLCBlbGVtZW50X29ialtcInNyY19pbWdcIl0pO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50X29ialtcInNlbGVjdG9yX3R5cGVcIl0gPT0gXCJjbGFzc1wiKSB7XG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKGVsZW1lbnRfb2JqW1wic2VsZWN0b3JfbmFtZVwiXSk7XG4gICAgfVxuICAgIGlmIChlbGVtZW50X29ialtcInNlbGVjdG9yX3R5cGVcIl0gPT0gXCJpZFwiKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBlbGVtZW50X29ialtcInNlbGVjdG9yX25hbWVcIl0pO1xuICAgIH1cblxuICAgIGVsLnRleHRDb250ZW50ID0gZWxlbWVudF9vYmpbXCJ0ZXh0X2NvbnRlbnRcIl07XG4gICAgcmV0dXJuIGVsO1xuICB9XG5cbiAgZnVuY3Rpb24gb2JqTmFtZUNyZWF0b3IobHN0LCBtYWtlRWxlbWVudCkge1xuICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgIHR5cGU6IGxzdFswXSxcbiAgICAgIHNlbGVjdG9yX3R5cGU6IGxzdFsxXSxcbiAgICAgIHNlbGVjdG9yX25hbWU6IGxzdFsyXSxcbiAgICAgIHRleHRfY29udGVudDogbHN0WzNdLFxuICAgICAgc3JjX2ltZzogbHN0WzRdLFxuICAgIH07XG4gICAgaWYgKG1ha2VFbGVtZW50KSB7XG4gICAgICBjb25zdCBlbCA9IGVsZW1lbnRzR2VuZXJhdG9yKG9iaik7XG4gICAgICByZXR1cm4gZWw7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH1cbiAgZnVuY3Rpb24gbmF2KCkge1xuICAgIGNvbnN0IGhlYWRlciA9IG9iak5hbWVDcmVhdG9yKFtcImRpdlwiLCBcImNsYXNzXCIsIFwiaGVhZGVyXCIsIG51bGxdLCB0cnVlKTtcbiAgICBjb25zdCByZXN0YXVyYW50TmFtZSA9IG9iak5hbWVDcmVhdG9yKFtcbiAgICAgIFwiaDFcIixcbiAgICAgIFwiY2xhc3NcIixcbiAgICAgIFwibmFtZS1sb2dvXCIsXG4gICAgICBcIlZhbiBkZXIgTGluZGVcIixcbiAgICBdKTtcbiAgICBjb25zdCBidG5Ib21lID0gb2JqTmFtZUNyZWF0b3IoW1wiYnV0dG9uXCIsIFwiY2xhc3NcIiwgXCJob21lXCIsIFwiSG9tZVwiXSk7XG4gICAgY29uc3QgYnRuTWVudSA9IG9iak5hbWVDcmVhdG9yKFtcImJ1dHRvblwiLCBcImNsYXNzXCIsIFwibWVudVwiLCBcIk1lbnVcIl0pO1xuICAgIGNvbnN0IGJ0bkNvbnRhY3QgPSBvYmpOYW1lQ3JlYXRvcihbXG4gICAgICBcImJ1dHRvblwiLFxuICAgICAgXCJjbGFzc1wiLFxuICAgICAgXCJjb250YWN0XCIsXG4gICAgICBcIkNvbnRhY3RcIixcbiAgICBdKTtcbiAgICBjb25zdCBhcnIgPSBbcmVzdGF1cmFudE5hbWUsIGJ0bkhvbWUsIGJ0bk1lbnUsIGJ0bkNvbnRhY3RdO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIG11bHRpcGxlRGl2KGFyciwgaGVhZGVyKTtcbiAgfVxuICBmdW5jdGlvbiBtdWx0aXBsZURpdihlbF9pbmZvLCBwYXJlbnQpIHtcbiAgICBlbF9pbmZvLmZvckVhY2goKHRvQ3JlYXRlKSA9PiB7XG4gICAgICBjb25zdCBlbCA9IGVsZW1lbnRzR2VuZXJhdG9yKHRvQ3JlYXRlKTtcbiAgICAgIC8qIGNvbnN0IHNwYW4gPSBvYmpOYW1lQ3JlYXRvcihbXCJzcGFuXCIsIFwiY2xhc3NcIiwgXCJpbWctYnVsbGV0XCIsIFwiXCJdLHRydWUpXG4gICAgICBlbC5hcHBlbmRDaGlsZChzcGFuKSAqL1xuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGVsKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9ialBhdHRlcm4oYXJyKSB7XG4gICAgY29uc3Qga2V5cyA9IFtcImRpdi0xLXRleHRcIiwgXCJwVGV4dFwiLCBcImltZy1zcmNcIl07XG4gICAgbGV0IG9iaiA9IHt9O1xuICAgIGZvciAobGV0IGsgaW4ga2V5cykge1xuICAgICAgb2JqW2tleXNba11dID0gYXJyW2tdO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgZnVuY3Rpb24gcEVsZW1lbnQodGV4dCwgcGFyZW50KSB7XG4gICAgY29uc3QgcCA9IG9iak5hbWVDcmVhdG9yKFtcInBcIiwgbnVsbCwgbnVsbCwgdGV4dF0sIHRydWUpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGltZ0VsZW1lbnQoaW1nU3JjLCBwYXJlbnQsIGNoaWxkQXBwZW5kLCBkZWZhdWx0X3NlbGVjdG9yKSB7XG4gICAgbGV0IGltZ19pbmZvID0gW1wiSU1HXCIsIFwiY2xhc3NcIiwgXCJzdWItY29udGFpbmVycy1pbWdcIiwgbnVsbCwgaW1nU3JjLCBudWxsXVxuICAgIGlmIChkZWZhdWx0X3NlbGVjdG9yPj0gMSkoXG4gICAgICBpbWdfaW5mb1syXSA9IGRlZmF1bHRfc2VsZWN0b3JcbiAgICApXG4gICAgY29uc3QgaW1nVGl0bGUgPSBvYmpOYW1lQ3JlYXRvcihcbiAgICAgIGltZ19pbmZvLFxuICAgICAgdHJ1ZVxuICAgICk7XG4gICAgaWYgKGNoaWxkQXBwZW5kKSB7XG4gICAgICBwYXJlbnQuZmlyc3RDaGlsZC5hcHBlbmRDaGlsZChpbWdUaXRsZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChpbWdUaXRsZSk7XG4gIH1cblxuICBmdW5jdGlvbiBkaXZXaXRoQ2hpbGQoY2hpbGRfdGV4dCkge1xuICAgIGNvbnN0IGRlZmF1bHRDb250YWluZXIgPSBvYmpOYW1lQ3JlYXRvcihcbiAgICAgIFtcImRpdlwiLCBcImNsYXNzXCIsIFwic3ViLWNvbnRhaW5lcnNcIl0sXG4gICAgICB0cnVlXG4gICAgKTtcbiAgICBjb25zdCBkaXZfY2hpbGQgPSBvYmpOYW1lQ3JlYXRvcihcbiAgICAgIFtcImRpdlwiLCBcImNsYXNzXCIsIFwidGl0bGVcIiwgY2hpbGRfdGV4dF0sXG4gICAgICB0cnVlXG4gICAgKTtcbiAgICBkZWZhdWx0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpdl9jaGlsZCk7XG4gICAgcmV0dXJuIGRlZmF1bHRDb250YWluZXI7XG4gIH1cbiAgZnVuY3Rpb24gaGFzX2luZm9fZGl2KCl7XG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvJylcbiAgICBpZiAoaW5mbyA9PT0gbnVsbCl7XG4gICAgICBjb25zdCBpbmZvID0gb2JqTmFtZUNyZWF0b3IoW1wiZGl2XCIsIFwiY2xhc3NcIiwgXCJpbmZvXCIsIG51bGxdLCB0cnVlKTtcbiAgICAgIHJldHVybiBpbmZvXG4gICAgfVxuICAgIHJldHVybiBpbmZvXG4gIH1cbiAgZnVuY3Rpb24gZGVmYXVsdEJvZHlDcmVhdG9yKGFycikge1xuICAgIGNvbnN0IGluZm8gPSBoYXNfaW5mb19kaXYoKTtcbiAgICBjb25zdCBvYmogPSBvYmpQYXR0ZXJuKGFycik7XG4gICAgY29uc3QgbWFpbkRpdiA9IGRpdldpdGhDaGlsZChvYmpbXCJkaXYtMS10ZXh0XCJdKTtcbiAgICBwRWxlbWVudChvYmpbXCJwVGV4dFwiXSwgbWFpbkRpdik7XG4gICAgaW1nRWxlbWVudChvYmpbXCJpbWctc3JjXCJdLCBtYWluRGl2KTtcbiAgICBpbmZvLmFwcGVuZENoaWxkKG1haW5EaXYpO1xuICAgIGNvbnRlbnQuYXBwZW5kKGluZm8pO1xuICB9XG5cbiAgZnVuY3Rpb24gc21hbGxlcl9pbWcoKXtcbiAgICBjb25zdCBpbWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN1Yi1jb250YWluZXJzLWltZycpXG4gICAgaW1ncy5mb3JFYWNoKGltZyA9PiBpbWcuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwnd2lkdGg6NjUwcHgnKSlcbiAgfVxuICBcbiAgLyogY29uc29sZS5sb2coJ29yZGVyIG9mIGluZm8gPSBkaXYtMS10ZXh0LCAgaW1nLXRvcC1zcmMsIHBUZXh0LCBpbWctYm90LW5hbWUsIGltZy1ib3Qtc3JjJykgKi9cbiAgcmV0dXJuIHsgZGVmYXVsdEJvZHlDcmVhdG9yLCBuYXYgLCBzbWFsbGVyX2ltZywgaW1nRWxlbWVudH07XG59XG5leHBvcnQgZGVmYXVsdCBwYWdlQ3JlYXRvcjtcbiIsImZ1bmN0aW9uICBnZXRBbGxJbWdzKGltZ3NfZmlsZXMsY29udGVudERlc2NyaXB0aW9uKSB7XG4gICAgY29uc3QgZm9sZGVyX2NvbnRlbnQgPSB7fTtcbiAgICBjb25zdCBuYW1lX3NyYyA9IGltZ3NfZmlsZXMua2V5cygpO1xuICAgIG5hbWVfc3JjLmZvckVhY2goXG4gICAgKGtleSkgPT5cbiAgICAgICAgKGZvbGRlcl9jb250ZW50W2tleV0gPSBbaW1nc19maWxlcyhrZXkpLCBjb250ZW50RGVzY3JpcHRpb25bbmFtZV9zcmMuaW5kZXhPZihrZXkpXV0pXG4gICAgKTtcbiAgICByZXR1cm4gZm9sZGVyX2NvbnRlbnRcbn1cblxuZnVuY3Rpb24gZ2V0TmFtZURlc2NyaXB0aW9uU3JjKHZhbHVlKSB7XG4gICAgY29uc3QgbmFtZSA9IHZhbHVlWzFdLnNwbGl0KFwiLFwiKVswXTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9ICB2YWx1ZVsxXTtcbiAgICBjb25zdCBzcmMgPSB2YWx1ZVswXTtcbiAgICByZXR1cm4gW25hbWUsIGRlc2NyaXB0aW9uLCBzcmNdO1xufVxuXG5leHBvcnQge2dldE5hbWVEZXNjcmlwdGlvblNyYywgZ2V0QWxsSW1nc30iLCJ2YXIgbWFwID0ge1xuXHRcIi4vZnJpZWQtY2F0ZmlzaC5qcGVnXCI6IFwiLi9zcmMvaW1nL3Jlc3RhdXJhbnQtaW1ncy1mb29kcy9mcmllZC1jYXRmaXNoLmpwZWdcIixcblx0XCIuL2xhYnMtaGVhcnQuanBlZ1wiOiBcIi4vc3JjL2ltZy9yZXN0YXVyYW50LWltZ3MtZm9vZHMvbGFicy1oZWFydC5qcGVnXCIsXG5cdFwiLi9sYW1icy1mcnkuanBlZ1wiOiBcIi4vc3JjL2ltZy9yZXN0YXVyYW50LWltZ3MtZm9vZHMvbGFtYnMtZnJ5LmpwZWdcIixcblx0XCIuL3ByaW1lLXJpYi5qcGVnXCI6IFwiLi9zcmMvaW1nL3Jlc3RhdXJhbnQtaW1ncy1mb29kcy9wcmltZS1yaWIuanBlZ1wiLFxuXHRcIi4vcm9hc3QtYmVlZi5qcGVnXCI6IFwiLi9zcmMvaW1nL3Jlc3RhdXJhbnQtaW1ncy1mb29kcy9yb2FzdC1iZWVmLmpwZWdcIixcblx0XCIuL3JvYXN0LXByYWlyZS1jaGlja2VuLmpwZWdcIjogXCIuL3NyYy9pbWcvcmVzdGF1cmFudC1pbWdzLWZvb2RzL3JvYXN0LXByYWlyZS1jaGlja2VuLmpwZWdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1nL3Jlc3RhdXJhbnQtaW1ncy1mb29kcyBzeW5jIFxcXFwuanBlZ1wiOyIsInZhciBtYXAgPSB7XG5cdFwiLi8xLXBlYXJzb24uanBnXCI6IFwiLi9zcmMvaW1nL3dvcmtlcnMvMS1wZWFyc29uLmpwZ1wiLFxuXHRcIi4vYXJ0aHVyLmpwZ1wiOiBcIi4vc3JjL2ltZy93b3JrZXJzL2FydGh1ci5qcGdcIixcblx0XCIuL2xlb3BvbGQtc3RyYXVzcy5qcGdcIjogXCIuL3NyYy9pbWcvd29ya2Vycy9sZW9wb2xkLXN0cmF1c3MuanBnXCIsXG5cdFwiLi9zYWRpZS5qcGdcIjogXCIuL3NyYy9pbWcvd29ya2Vycy9zYWRpZS5qcGdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1nL3dvcmtlcnMgc3luYyBcXFxcLmpwZ1wiOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHtNZW51UGFnZSxDb250YWN0UGFnZSxIb21lUGFnZSB9IGZyb20gJy4vY3JlYXRlUGFnZXMuanMnXG5pbXBvcnQgSHRtbEdlbmVyYXRvciBmcm9tICcvc3JjL2RvbS1tYW5pcHVsYXRpb24uanMnXG5pbXBvcnQgQnRuSWNvbkFjdGl2ZSBmcm9tICcuL01lbnVTdHlsZS5qcyc7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuY29uc3QgbWVudURvbSA9IEh0bWxHZW5lcmF0b3IoKTtcbm1lbnVEb20ubmF2KClcbkhvbWVQYWdlKClcbkJ0bkljb25BY3RpdmUgKClcbi8qIGNvbnN0IGJ0bkhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZScpXG5idG5Ib21lLnNldEF0dHJpYnV0ZSgnaWQnLCdidWxsZXQnKVxuXG5jb25zdCBwYWdlc09iaiA9IHtcbiAgICAnQ29udGFjdCc6Q29udGFjdFBhZ2UsXG4gICAgJ01lbnUnOiBNZW51UGFnZSxcbiAgICAnSG9tZSc6IEhvbWVQYWdlIFxuICB9XG5mdW5jdGlvbiBjbGVhbl9pbmZvIChlKXtcbiAgICBjb25zdCBpbmZvICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvJylcbiAgICB3aGlsZSAoaW5mby5maXJzdENoaWxkKSB7XG4gICAgICAgIGluZm8ucmVtb3ZlQ2hpbGQoaW5mby5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgICBwYWdlc09ialtlLnRleHRDb250ZW50XSgpXG59XG5cbmZ1bmN0aW9uIGJ0bkFjdGl2ZSgpIHtcbiAgICBsZXQgY3VycmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidWxsZXQnKVxuICAgIGN1cnJlbnQuc2V0QXR0cmlidXRlKCdpZCcsJycpO1xuICAgIHRoaXMuc2V0QXR0cmlidXRlKCdpZCcsJ2J1bGxldCcpXG4gICAgY2xlYW5faW5mbyh0aGlzKVxuICB9XG5sZXQgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xuYnRucy5mb3JFYWNoKGJ0biA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGJ0bkFjdGl2ZSkgKSAqL1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=