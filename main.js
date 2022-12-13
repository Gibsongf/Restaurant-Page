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

/***/ "./src/Menubtn.js":
/*!************************!*\
  !*** ./src/Menubtn.js ***!
  \************************/
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

function appendElementsObj(element_obj) {
  let keys = Object.keys(element_obj);
  for (let key of keys) {
    let img = (0,_src_getmultipleimgs_js__WEBPACK_IMPORTED_MODULE_1__.getNameDescriptionSrc)(element_obj[key]);
    create.defaultBodyCreator(img);
  }
  create.smaller_img();
}
function MenuPage() {
  document.title = "Menu";
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
  appendElementsObj(imgsObj);
}

function ContactPage() {
  document.title = "Contact";
  const description = [
    "Chef Cook and The Butcher",
    "Security and Waiter",
    "Finance Management",
    "Security and Waiter",
  ];
  const path_search = __webpack_require__("./src/img/workers sync \\.jpg");
  const imgsObj = (0,_src_getmultipleimgs_js__WEBPACK_IMPORTED_MODULE_1__.getAllImgs)(path_search, description);
  appendElementsObj(imgsObj);
  /* const create = HtmlGenerator(); */
}

function HomePage() {
  document.title = "Home";
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
    let img_info = ["IMG", "class", "sub-containers-img", null, imgSrc, null];
    if (default_selector >= 1) img_info[2] = default_selector;
    const imgTitle = objNameCreator(img_info, true);
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
  function has_info_div() {
    const info = document.querySelector(".info");
    if (info === null) {
      const info = objNameCreator(["div", "class", "info", null], true);
      return info;
    }
    return info;
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

  function smaller_img() {
    const imgs = document.querySelectorAll(".sub-containers-img");
    imgs.forEach((img) => img.setAttribute("style", "width:650px"));
  }

  return { defaultBodyCreator, nav, smaller_img, imgElement };
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
function getAllImgs(imgs_files, contentDescription) {
  const folder_content = {};
  const name_src = imgs_files.keys();
  name_src.forEach(
    (key) =>
      (folder_content[key] = [
        imgs_files(key),
        contentDescription[name_src.indexOf(key)],
      ])
  );
  return folder_content;
}

function getNameDescriptionSrc(value) {
  const name = value[1].split(",")[0];
  const description = value[1];
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
/* harmony import */ var _src_dom_manipulation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/dom-manipulation.js */ "./src/dom-manipulation.js");
/* harmony import */ var _Menubtn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menubtn.js */ "./src/Menubtn.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _createPages_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createPages.js */ "./src/createPages.js");





const menuDom = (0,_src_dom_manipulation_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
menuDom.nav()
/* put an icon when a menu btn is selected */
;(0,_Menubtn_js__WEBPACK_IMPORTED_MODULE_1__["default"])()
;(0,_createPages_js__WEBPACK_IMPORTED_MODULE_3__.HomePage)()



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1SDNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTZDOzs7Ozs7Ozs7OztBQ3BCN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FvRDtBQUNYO0FBQ3BCO0FBQ29COztBQUV6QyxnQkFBZ0Isb0VBQWE7QUFDN0I7QUFDQTtBQUNBLHdEQUFhO0FBQ2IsMERBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvTWVudWJ0bi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3JlYXRlUGFnZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2RvbS1tYW5pcHVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2dldG11bHRpcGxlaW1ncy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW1nL3Jlc3RhdXJhbnQtaW1ncy1mb29kcy8gc3luYyBub25yZWN1cnNpdmUgXFwuanBlZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW1nL3dvcmtlcnMvIHN5bmMgbm9ucmVjdXJzaXZlIFxcLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9mb250cy9DYXJuaXZhbGVlRnJlYWtzaG93LndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvc3JjL2ZvbnRzL0Nhcm5pdmFsZWVGcmVha3Nob3cud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIvc3JjL2ltZy9wYXBlci1vbGQtd2VzdDEucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiL3NyYy9pbWcvYnVsbGV0LWhvbGUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiL3NyYy9pbWcvd29vZC1ib2FyZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwib2xkLXdlc3RcXFwiO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIiksXFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpOztcXG59XFxuOnJvb3Qge1xcbiAgICAvKiAtLWJsdWU6ICMxZTkwZmY7XFxuICAgIC0td2hpdGU6ICNmZmZmZmY7ICovXFxuICAgIC0tc2hhZG93LXdlaWdodDogM3B4IDNweCA1cHggNXB4IDtcXG4gICAgLS1zaGFkb3ctY29sb3I6IHJnYigyNCwgMjMsIDIzKTtcXG4gICAgXFxuICB9XFxuKiB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwib2xkLXdlc3RcXFwiO1xcbn1cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7IFxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMDBweCwxZnIpKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICByb3ctZ2FwOiA1MHB4O1xcbn1cXG5cXG4uc3ViLWNvbnRhaW5lcnMge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXdlaWdodCkgdmFyKC0tc2hhZG93LWNvbG9yKTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgd2lkdGg6IDI0NXB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIC8qIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrOyAqL1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1MywgMjUzLCAyNTMsIDApO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBib3R0b207XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNzBweCA3MHB4O1xcbn1cXG5cXG4jaWNvbi1vbiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGJvdHRvbTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA3MHB4IDcwcHg7XFxuICAgIG91dGxpbmU6IG5vbmVcXG5cXG59XFxuYm9keXtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbn1cXG4uaGVhZGVyID4gZGl2IHtcXG4gICAgZm9udC1zaXplOiAyLjNyZW07XFxuXFxufVxcbi5oZWFkZXJ7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG59XFxuXFxuXFxuXFxuLnN1Yi1jb250YWluZXJzLWltZ3tcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuXFxufVxcbi5uYW1lLWxvZ28ge1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuLmhvbWUge1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIvc3JjL2ltZy9idWxsZXQtaG9sZS5wbmdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgYm90dG9tO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDcwcHggNzBweDsgKi9cXG5cXG59XFxuXFxuLm1lbnUge1xcbiAgICBncmlkLXJvdzogMjtcXG59XFxuXFxuLmNvbnRhY3Qge1xcbiAgICBncmlkLXJvdzogMjtcXG59XFxuLmxvY2F0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcbi8qIC5idWxsZXQge1xcbiAgICB3aWR0aDogNzBweDtcXG59ICovXFxuLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAzcmVtOyAgXFxufVxcbi5pbmZvIHtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbn1cXG5cXG4udGhlLWZhbWlseSB7XFxuICAgIGdyaWQtcm93OiAxO1xcbn1cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCOzJEQUMyRDtBQUMvRDtBQUNBO0lBQ0k7dUJBQ21CO0lBQ25CLGlDQUFpQztJQUNqQywrQkFBK0I7O0VBRWpDO0FBQ0Y7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsd0RBQXdEO0lBQ3hELGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCw0QkFBNEI7SUFDNUIseURBQXFEO0lBQ3JELHNCQUFzQjtJQUN0QixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLG9EQUFvRDtBQUN4RDs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixrQ0FBa0M7SUFDbEMsNEJBQTRCO0lBQzVCLGlDQUFpQztJQUNqQywwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSx5REFBaUQ7SUFDakQsaUNBQWlDO0lBQ2pDLDBCQUEwQjtJQUMxQjs7QUFFSjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCx5REFBZ0Q7QUFDcEQ7QUFDQTtJQUNJLGlCQUFpQjs7QUFFckI7QUFDQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOzs7O0FBSUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1COztBQUV2QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxXQUFXO0lBQ1g7O2lDQUU2Qjs7QUFFakM7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBOztHQUVHO0FBQ0g7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJvbGQtd2VzdFxcXCI7XFxuICAgIHNyYzogdXJsKFxcXCIvc3JjL2ZvbnRzL0Nhcm5pdmFsZWVGcmVha3Nob3cud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpLFxcbiAgICB1cmwoXFxcIi9zcmMvZm9udHMvQ2Fybml2YWxlZUZyZWFrc2hvdy53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKTs7XFxufVxcbjpyb290IHtcXG4gICAgLyogLS1ibHVlOiAjMWU5MGZmO1xcbiAgICAtLXdoaXRlOiAjZmZmZmZmOyAqL1xcbiAgICAtLXNoYWRvdy13ZWlnaHQ6IDNweCAzcHggNXB4IDVweCA7XFxuICAgIC0tc2hhZG93LWNvbG9yOiByZ2IoMjQsIDIzLCAyMyk7XFxuICAgIFxcbiAgfVxcbioge1xcbiAgICBmb250LWZhbWlseTogXFxcIm9sZC13ZXN0XFxcIjtcXG59XFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyOyBcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjAwcHgsMWZyKSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcm93LWdhcDogNTBweDtcXG59XFxuXFxuLnN1Yi1jb250YWluZXJzIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGdhcDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIvc3JjL2ltZy9wYXBlci1vbGQtd2VzdDEucG5nXFxcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctd2VpZ2h0KSB2YXIoLS1zaGFkb3ctY29sb3IpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICB3aWR0aDogMjQ1cHg7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgLyogYm9yZGVyOiAzcHggc29saWQgYmxhY2s7ICovXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjUzLCAyNTMsIDI1MywgMCk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGJvdHRvbTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA3MHB4IDcwcHg7XFxufVxcblxcbiNpY29uLW9uIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIvc3JjL2ltZy9idWxsZXQtaG9sZS5wbmdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgYm90dG9tO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDcwcHggNzBweDtcXG4gICAgb3V0bGluZTogbm9uZVxcblxcbn1cXG5ib2R5e1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiL3NyYy9pbWcvd29vZC1ib2FyZC5qcGdcXFwiKTtcXG59XFxuLmhlYWRlciA+IGRpdiB7XFxuICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xcblxcbn1cXG4uaGVhZGVye1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxufVxcblxcblxcblxcbi5zdWItY29udGFpbmVycy1pbWd7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcblxcbn1cXG4ubmFtZS1sb2dvIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBmb250LXNpemU6IDRyZW07XFxufVxcbi5ob21lIHtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiL3NyYy9pbWcvYnVsbGV0LWhvbGUucG5nXFxcIik7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGJvdHRvbTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA3MHB4IDcwcHg7ICovXFxuXFxufVxcblxcbi5tZW51IHtcXG4gICAgZ3JpZC1yb3c6IDI7XFxufVxcblxcbi5jb250YWN0IHtcXG4gICAgZ3JpZC1yb3c6IDI7XFxufVxcbi5sb2NhdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG4vKiAuYnVsbGV0IHtcXG4gICAgd2lkdGg6IDcwcHg7XFxufSAqL1xcbi50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTsgIFxcbn1cXG4uaW5mbyB7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG59XFxuXFxuLnRoZS1mYW1pbHkge1xcbiAgICBncmlkLXJvdzogMTtcXG59XFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7TWVudVBhZ2UsQ29udGFjdFBhZ2UsSG9tZVBhZ2UgfWZyb20gJy4vY3JlYXRlUGFnZXMuanMnXG5cbmZ1bmN0aW9uIGJ0bkljb25BY3RpdmUoKSB7XG4gIFxuICBjb25zdCBidG5Ib21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lXCIpO1xuICBidG5Ib21lLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaWNvbi1vblwiKTtcbiAgY29uc3QgY2FsbFBhZ2VzID0ge1xuICAgICdDb250YWN0JzpDb250YWN0UGFnZSxcbiAgICAnTWVudSc6IE1lbnVQYWdlLFxuICAgICdIb21lJzogSG9tZVBhZ2UgXG4gIH1cbiAgZnVuY3Rpb24gY2xlYW5faW5mbyhlKSB7XG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5mb1wiKTtcbiAgICB3aGlsZSAoaW5mby5maXJzdENoaWxkKSB7XG4gICAgICBpbmZvLnJlbW92ZUNoaWxkKGluZm8ubGFzdENoaWxkKTtcbiAgICB9XG4gICAgY2FsbFBhZ2VzW2UudGV4dENvbnRlbnRdKClcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ0bkFjdGl2ZSgpIHtcbiAgICBsZXQgY3VycmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaWNvbi1vblwiKTtcbiAgICBjdXJyZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiXCIpO1xuICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpY29uLW9uXCIpO1xuICAgIGNsZWFuX2luZm8odGhpcyk7XG4gIH1cbiAgbGV0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpO1xuICBidG5zLmZvckVhY2goKGJ0bikgPT4gYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBidG5BY3RpdmUpKTtcbn1cbmV4cG9ydCBkZWZhdWx0IGJ0bkljb25BY3RpdmUiLCJpbXBvcnQgSHRtbEdlbmVyYXRvciBmcm9tIFwiL3NyYy9kb20tbWFuaXB1bGF0aW9uLmpzXCI7XG5pbXBvcnQgeyBnZXRBbGxJbWdzLCBnZXROYW1lRGVzY3JpcHRpb25TcmMgfSBmcm9tIFwiL3NyYy9nZXRtdWx0aXBsZWltZ3MuanNcIjtcbmltcG9ydCBDaGVmU3BlY2lhbCBmcm9tIFwiL3NyYy9pbWcvcGVhcnNvbi1zdGV3LmpwZWdcIjtcbmltcG9ydCBGYW1pbHlQaG90byBmcm9tIFwiL3NyYy9pbWcvZmFtaWx5LXBob3RvLmpwZWdcIjtcblxuY29uc3QgY3JlYXRlID0gSHRtbEdlbmVyYXRvcigpO1xuXG5mdW5jdGlvbiBhcHBlbmRFbGVtZW50c09iaihlbGVtZW50X29iaikge1xuICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKGVsZW1lbnRfb2JqKTtcbiAgZm9yIChsZXQga2V5IG9mIGtleXMpIHtcbiAgICBsZXQgaW1nID0gZ2V0TmFtZURlc2NyaXB0aW9uU3JjKGVsZW1lbnRfb2JqW2tleV0pO1xuICAgIGNyZWF0ZS5kZWZhdWx0Qm9keUNyZWF0b3IoaW1nKTtcbiAgfVxuICBjcmVhdGUuc21hbGxlcl9pbWcoKTtcbn1cbmZ1bmN0aW9uIE1lbnVQYWdlKCkge1xuICBkb2N1bWVudC50aXRsZSA9IFwiTWVudVwiO1xuICBjb25zdCBpbWdfZGVzY3JpcHRpb24gPSBbXG4gICAgXCJGcmllZCBDYXRmaXNoLCB3aXRoIGdyZWVucyBhbmQgYm9pbGVkIGJlYW5zLlwiLFxuICAgIFwiTGFtYidzIEhlYXJ0LCB3aXRoIGJvaWxlZCBjYWJiYWdlLlwiLFxuICAgIFwiTGFtYidzIEZyeSwgd2l0aCBncmVlbiBwZWFzIGFuZCBib2lsZWQgcG90YXRvZXMuXCIsXG4gICAgXCJQcmltZSBSaWIsIHdpdGggcG90YXRvZXMgZGF1cGhpbm9pc2UgYW5kIHNwcmluZyBzYWxhZC5cIixcbiAgICBcIlJvYXN0IEJlZWYsIHdpdGggY29ybiBhbmQgZ2xhemVkIGNhcnJvdHMuXCIsXG4gICAgXCJSb2FzdCBQcmFpcmllIENoaWNrZW4sIHdpdGggZ3JlZW4gYmVhbnMsIG1hc2hlZCBwb3RhdG9lcyBhbmQgZ3JhdnkuXCIsXG4gIF07XG4gIGNvbnN0IHBhdGhfc2VhcmNoID0gcmVxdWlyZS5jb250ZXh0KFxuICAgIFwiL3NyYy9pbWcvcmVzdGF1cmFudC1pbWdzLWZvb2RzXCIsXG4gICAgZmFsc2UsXG4gICAgL1xcLmpwZWcvXG4gICk7XG4gIGNvbnN0IGltZ3NPYmogPSBnZXRBbGxJbWdzKHBhdGhfc2VhcmNoLCBpbWdfZGVzY3JpcHRpb24pO1xuICBhcHBlbmRFbGVtZW50c09iaihpbWdzT2JqKTtcbn1cblxuZnVuY3Rpb24gQ29udGFjdFBhZ2UoKSB7XG4gIGRvY3VtZW50LnRpdGxlID0gXCJDb250YWN0XCI7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gW1xuICAgIFwiQ2hlZiBDb29rIGFuZCBUaGUgQnV0Y2hlclwiLFxuICAgIFwiU2VjdXJpdHkgYW5kIFdhaXRlclwiLFxuICAgIFwiRmluYW5jZSBNYW5hZ2VtZW50XCIsXG4gICAgXCJTZWN1cml0eSBhbmQgV2FpdGVyXCIsXG4gIF07XG4gIGNvbnN0IHBhdGhfc2VhcmNoID0gcmVxdWlyZS5jb250ZXh0KFwiL3NyYy9pbWcvd29ya2Vyc1wiLCBmYWxzZSwgL1xcLmpwZy8pO1xuICBjb25zdCBpbWdzT2JqID0gZ2V0QWxsSW1ncyhwYXRoX3NlYXJjaCwgZGVzY3JpcHRpb24pO1xuICBhcHBlbmRFbGVtZW50c09iaihpbWdzT2JqKTtcbiAgLyogY29uc3QgY3JlYXRlID0gSHRtbEdlbmVyYXRvcigpOyAqL1xufVxuXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgZG9jdW1lbnQudGl0bGUgPSBcIkhvbWVcIjtcbiAgY29uc3QgY29udGFpbmVyX2NoZWYgPSBbXG4gICAgXCJDaGVmIFNwZWNpYWxcIixcbiAgICBcIlBlYXJzb24ncyBTdGV3IChCZWVmIFN0ZXcpLlwiLFxuICAgIENoZWZTcGVjaWFsLFxuICBdO1xuICBjb25zdCBjb250YWluZXJfZmFtaWx5ID0gW1xuICAgIFwiVGhlIEZhbWlseVwiLFxuICAgIFwiQW4gb2xkIHdlc3QgdGhlbWUgcmVzdGF1cmFudFwiLFxuICAgIEZhbWlseVBob3RvLFxuICBdO1xuXG4gIC8qIGNvbnN0IGNyZWF0ZSA9IEh0bWxHZW5lcmF0b3IoKTsgKi9cbiAgY3JlYXRlLmRlZmF1bHRCb2R5Q3JlYXRvcihjb250YWluZXJfZmFtaWx5KTtcbiAgY3JlYXRlLmRlZmF1bHRCb2R5Q3JlYXRvcihjb250YWluZXJfY2hlZik7XG59XG5leHBvcnQgeyBNZW51UGFnZSwgQ29udGFjdFBhZ2UsIEhvbWVQYWdlIH07XG4iLCJmdW5jdGlvbiBwYWdlQ3JlYXRvcigpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICBmdW5jdGlvbiBlbGVtZW50c0dlbmVyYXRvcihlbGVtZW50X29iaikge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50X29ialtcInR5cGVcIl0pO1xuICAgIGlmIChlbGVtZW50X29ialtcInR5cGVcIl0gPT0gXCJJTUdcIikge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKFwic3JjXCIsIGVsZW1lbnRfb2JqW1wic3JjX2ltZ1wiXSk7XG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnRfb2JqW1wic2VsZWN0b3JfdHlwZVwiXSA9PSBcImNsYXNzXCIpIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoZWxlbWVudF9vYmpbXCJzZWxlY3Rvcl9uYW1lXCJdKTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnRfb2JqW1wic2VsZWN0b3JfdHlwZVwiXSA9PSBcImlkXCIpIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZShcImlkXCIsIGVsZW1lbnRfb2JqW1wic2VsZWN0b3JfbmFtZVwiXSk7XG4gICAgfVxuXG4gICAgZWwudGV4dENvbnRlbnQgPSBlbGVtZW50X29ialtcInRleHRfY29udGVudFwiXTtcbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICBmdW5jdGlvbiBvYmpOYW1lQ3JlYXRvcihsc3QsIG1ha2VFbGVtZW50KSB7XG4gICAgY29uc3Qgb2JqID0ge1xuICAgICAgdHlwZTogbHN0WzBdLFxuICAgICAgc2VsZWN0b3JfdHlwZTogbHN0WzFdLFxuICAgICAgc2VsZWN0b3JfbmFtZTogbHN0WzJdLFxuICAgICAgdGV4dF9jb250ZW50OiBsc3RbM10sXG4gICAgICBzcmNfaW1nOiBsc3RbNF0sXG4gICAgfTtcbiAgICBpZiAobWFrZUVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGVsID0gZWxlbWVudHNHZW5lcmF0b3Iob2JqKTtcbiAgICAgIHJldHVybiBlbDtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuICBmdW5jdGlvbiBuYXYoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gb2JqTmFtZUNyZWF0b3IoW1wiZGl2XCIsIFwiY2xhc3NcIiwgXCJoZWFkZXJcIiwgbnVsbF0sIHRydWUpO1xuICAgIGNvbnN0IHJlc3RhdXJhbnROYW1lID0gb2JqTmFtZUNyZWF0b3IoW1xuICAgICAgXCJoMVwiLFxuICAgICAgXCJjbGFzc1wiLFxuICAgICAgXCJuYW1lLWxvZ29cIixcbiAgICAgIFwiVmFuIGRlciBMaW5kZVwiLFxuICAgIF0pO1xuICAgIGNvbnN0IGJ0bkhvbWUgPSBvYmpOYW1lQ3JlYXRvcihbXCJidXR0b25cIiwgXCJjbGFzc1wiLCBcImhvbWVcIiwgXCJIb21lXCJdKTtcbiAgICBjb25zdCBidG5NZW51ID0gb2JqTmFtZUNyZWF0b3IoW1wiYnV0dG9uXCIsIFwiY2xhc3NcIiwgXCJtZW51XCIsIFwiTWVudVwiXSk7XG4gICAgY29uc3QgYnRuQ29udGFjdCA9IG9iak5hbWVDcmVhdG9yKFtcbiAgICAgIFwiYnV0dG9uXCIsXG4gICAgICBcImNsYXNzXCIsXG4gICAgICBcImNvbnRhY3RcIixcbiAgICAgIFwiQ29udGFjdFwiLFxuICAgIF0pO1xuICAgIGNvbnN0IGFyciA9IFtyZXN0YXVyYW50TmFtZSwgYnRuSG9tZSwgYnRuTWVudSwgYnRuQ29udGFjdF07XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgbXVsdGlwbGVEaXYoYXJyLCBoZWFkZXIpO1xuICB9XG4gIGZ1bmN0aW9uIG11bHRpcGxlRGl2KGVsX2luZm8sIHBhcmVudCkge1xuICAgIGVsX2luZm8uZm9yRWFjaCgodG9DcmVhdGUpID0+IHtcbiAgICAgIGNvbnN0IGVsID0gZWxlbWVudHNHZW5lcmF0b3IodG9DcmVhdGUpO1xuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGVsKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9ialBhdHRlcm4oYXJyKSB7XG4gICAgY29uc3Qga2V5cyA9IFtcImRpdi0xLXRleHRcIiwgXCJwVGV4dFwiLCBcImltZy1zcmNcIl07XG4gICAgbGV0IG9iaiA9IHt9O1xuICAgIGZvciAobGV0IGsgaW4ga2V5cykge1xuICAgICAgb2JqW2tleXNba11dID0gYXJyW2tdO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgZnVuY3Rpb24gcEVsZW1lbnQodGV4dCwgcGFyZW50KSB7XG4gICAgY29uc3QgcCA9IG9iak5hbWVDcmVhdG9yKFtcInBcIiwgbnVsbCwgbnVsbCwgdGV4dF0sIHRydWUpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGltZ0VsZW1lbnQoaW1nU3JjLCBwYXJlbnQsIGNoaWxkQXBwZW5kLCBkZWZhdWx0X3NlbGVjdG9yKSB7XG4gICAgbGV0IGltZ19pbmZvID0gW1wiSU1HXCIsIFwiY2xhc3NcIiwgXCJzdWItY29udGFpbmVycy1pbWdcIiwgbnVsbCwgaW1nU3JjLCBudWxsXTtcbiAgICBpZiAoZGVmYXVsdF9zZWxlY3RvciA+PSAxKSBpbWdfaW5mb1syXSA9IGRlZmF1bHRfc2VsZWN0b3I7XG4gICAgY29uc3QgaW1nVGl0bGUgPSBvYmpOYW1lQ3JlYXRvcihpbWdfaW5mbywgdHJ1ZSk7XG4gICAgaWYgKGNoaWxkQXBwZW5kKSB7XG4gICAgICBwYXJlbnQuZmlyc3RDaGlsZC5hcHBlbmRDaGlsZChpbWdUaXRsZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChpbWdUaXRsZSk7XG4gIH1cblxuICBmdW5jdGlvbiBkaXZXaXRoQ2hpbGQoY2hpbGRfdGV4dCkge1xuICAgIGNvbnN0IGRlZmF1bHRDb250YWluZXIgPSBvYmpOYW1lQ3JlYXRvcihcbiAgICAgIFtcImRpdlwiLCBcImNsYXNzXCIsIFwic3ViLWNvbnRhaW5lcnNcIl0sXG4gICAgICB0cnVlXG4gICAgKTtcbiAgICBjb25zdCBkaXZfY2hpbGQgPSBvYmpOYW1lQ3JlYXRvcihcbiAgICAgIFtcImRpdlwiLCBcImNsYXNzXCIsIFwidGl0bGVcIiwgY2hpbGRfdGV4dF0sXG4gICAgICB0cnVlXG4gICAgKTtcbiAgICBkZWZhdWx0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpdl9jaGlsZCk7XG4gICAgcmV0dXJuIGRlZmF1bHRDb250YWluZXI7XG4gIH1cbiAgZnVuY3Rpb24gaGFzX2luZm9fZGl2KCkge1xuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZm9cIik7XG4gICAgaWYgKGluZm8gPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGluZm8gPSBvYmpOYW1lQ3JlYXRvcihbXCJkaXZcIiwgXCJjbGFzc1wiLCBcImluZm9cIiwgbnVsbF0sIHRydWUpO1xuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuICAgIHJldHVybiBpbmZvO1xuICB9XG4gIGZ1bmN0aW9uIGRlZmF1bHRCb2R5Q3JlYXRvcihhcnIpIHtcbiAgICBjb25zdCBpbmZvID0gaGFzX2luZm9fZGl2KCk7XG4gICAgY29uc3Qgb2JqID0gb2JqUGF0dGVybihhcnIpO1xuICAgIGNvbnN0IG1haW5EaXYgPSBkaXZXaXRoQ2hpbGQob2JqW1wiZGl2LTEtdGV4dFwiXSk7XG4gICAgcEVsZW1lbnQob2JqW1wicFRleHRcIl0sIG1haW5EaXYpO1xuICAgIGltZ0VsZW1lbnQob2JqW1wiaW1nLXNyY1wiXSwgbWFpbkRpdik7XG4gICAgaW5mby5hcHBlbmRDaGlsZChtYWluRGl2KTtcbiAgICBjb250ZW50LmFwcGVuZChpbmZvKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNtYWxsZXJfaW1nKCkge1xuICAgIGNvbnN0IGltZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnN1Yi1jb250YWluZXJzLWltZ1wiKTtcbiAgICBpbWdzLmZvckVhY2goKGltZykgPT4gaW1nLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwid2lkdGg6NjUwcHhcIikpO1xuICB9XG5cbiAgcmV0dXJuIHsgZGVmYXVsdEJvZHlDcmVhdG9yLCBuYXYsIHNtYWxsZXJfaW1nLCBpbWdFbGVtZW50IH07XG59XG5leHBvcnQgZGVmYXVsdCBwYWdlQ3JlYXRvcjtcbiIsImZ1bmN0aW9uIGdldEFsbEltZ3MoaW1nc19maWxlcywgY29udGVudERlc2NyaXB0aW9uKSB7XG4gIGNvbnN0IGZvbGRlcl9jb250ZW50ID0ge307XG4gIGNvbnN0IG5hbWVfc3JjID0gaW1nc19maWxlcy5rZXlzKCk7XG4gIG5hbWVfc3JjLmZvckVhY2goXG4gICAgKGtleSkgPT5cbiAgICAgIChmb2xkZXJfY29udGVudFtrZXldID0gW1xuICAgICAgICBpbWdzX2ZpbGVzKGtleSksXG4gICAgICAgIGNvbnRlbnREZXNjcmlwdGlvbltuYW1lX3NyYy5pbmRleE9mKGtleSldLFxuICAgICAgXSlcbiAgKTtcbiAgcmV0dXJuIGZvbGRlcl9jb250ZW50O1xufVxuXG5mdW5jdGlvbiBnZXROYW1lRGVzY3JpcHRpb25TcmModmFsdWUpIHtcbiAgY29uc3QgbmFtZSA9IHZhbHVlWzFdLnNwbGl0KFwiLFwiKVswXTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSB2YWx1ZVsxXTtcbiAgY29uc3Qgc3JjID0gdmFsdWVbMF07XG4gIHJldHVybiBbbmFtZSwgZGVzY3JpcHRpb24sIHNyY107XG59XG5cbmV4cG9ydCB7IGdldE5hbWVEZXNjcmlwdGlvblNyYywgZ2V0QWxsSW1ncyB9O1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL2ZyaWVkLWNhdGZpc2guanBlZ1wiOiBcIi4vc3JjL2ltZy9yZXN0YXVyYW50LWltZ3MtZm9vZHMvZnJpZWQtY2F0ZmlzaC5qcGVnXCIsXG5cdFwiLi9sYWJzLWhlYXJ0LmpwZWdcIjogXCIuL3NyYy9pbWcvcmVzdGF1cmFudC1pbWdzLWZvb2RzL2xhYnMtaGVhcnQuanBlZ1wiLFxuXHRcIi4vbGFtYnMtZnJ5LmpwZWdcIjogXCIuL3NyYy9pbWcvcmVzdGF1cmFudC1pbWdzLWZvb2RzL2xhbWJzLWZyeS5qcGVnXCIsXG5cdFwiLi9wcmltZS1yaWIuanBlZ1wiOiBcIi4vc3JjL2ltZy9yZXN0YXVyYW50LWltZ3MtZm9vZHMvcHJpbWUtcmliLmpwZWdcIixcblx0XCIuL3JvYXN0LWJlZWYuanBlZ1wiOiBcIi4vc3JjL2ltZy9yZXN0YXVyYW50LWltZ3MtZm9vZHMvcm9hc3QtYmVlZi5qcGVnXCIsXG5cdFwiLi9yb2FzdC1wcmFpcmUtY2hpY2tlbi5qcGVnXCI6IFwiLi9zcmMvaW1nL3Jlc3RhdXJhbnQtaW1ncy1mb29kcy9yb2FzdC1wcmFpcmUtY2hpY2tlbi5qcGVnXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltZy9yZXN0YXVyYW50LWltZ3MtZm9vZHMgc3luYyBcXFxcLmpwZWdcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vMS1wZWFyc29uLmpwZ1wiOiBcIi4vc3JjL2ltZy93b3JrZXJzLzEtcGVhcnNvbi5qcGdcIixcblx0XCIuL2FydGh1ci5qcGdcIjogXCIuL3NyYy9pbWcvd29ya2Vycy9hcnRodXIuanBnXCIsXG5cdFwiLi9sZW9wb2xkLXN0cmF1c3MuanBnXCI6IFwiLi9zcmMvaW1nL3dvcmtlcnMvbGVvcG9sZC1zdHJhdXNzLmpwZ1wiLFxuXHRcIi4vc2FkaWUuanBnXCI6IFwiLi9zcmMvaW1nL3dvcmtlcnMvc2FkaWUuanBnXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltZy93b3JrZXJzIHN5bmMgXFxcXC5qcGdcIjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBIdG1sR2VuZXJhdG9yIGZyb20gJy9zcmMvZG9tLW1hbmlwdWxhdGlvbi5qcydcbmltcG9ydCBCdG5JY29uQWN0aXZlIGZyb20gJy4vTWVudWJ0bi5qcyc7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHtIb21lUGFnZSB9ZnJvbSAnLi9jcmVhdGVQYWdlcy5qcydcblxuY29uc3QgbWVudURvbSA9IEh0bWxHZW5lcmF0b3IoKTtcbm1lbnVEb20ubmF2KClcbi8qIHB1dCBhbiBpY29uIHdoZW4gYSBtZW51IGJ0biBpcyBzZWxlY3RlZCAqL1xuQnRuSWNvbkFjdGl2ZSgpXG5Ib21lUGFnZSgpXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9