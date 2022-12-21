(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["hBar"] = factory();
	else
		root["hBar"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 363:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 transparent;--tw-ring-shadow:0 0 transparent;--tw-shadow:0 0 transparent;--tw-shadow-colored:0 0 transparent;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 transparent;--tw-ring-shadow:0 0 transparent;--tw-shadow:0 0 transparent;--tw-shadow-colored:0 0 transparent;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.hb-mx-2{margin-left:.5rem;margin-right:.5rem}.hb-mx-5{margin-left:1.25rem;margin-right:1.25rem}.hb--mr-2{margin-right:-.5rem}.hb-flex{display:flex}.hb-inline-flex{display:inline-flex}.hb-h-3{height:.75rem}.hb-h-4{height:1rem}.hb-w-3{width:.75rem}.hb-w-4{width:1rem}.hb-w-full{width:100%}.hb-cursor-pointer{cursor:pointer}.hb-items-center{align-items:center}.hb-justify-between{justify-content:space-between}.hb-rounded-md{border-radius:.375rem}.hb-rounded-full{border-radius:9999px}.hb-bg-gray-900{--tw-bg-opacity:1;background-color:rgba(17,24,39,var(--tw-bg-opacity))}.hb-bg-white{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.hb-bg-gray-400{--tw-bg-opacity:1;background-color:rgba(156,163,175,var(--tw-bg-opacity))}.hb-bg-blue-900{--tw-bg-opacity:1;background-color:rgba(30,58,138,var(--tw-bg-opacity))}.hb-bg-blue-100{--tw-bg-opacity:1;background-color:rgba(219,234,254,var(--tw-bg-opacity))}.hb-bg-green-600{--tw-bg-opacity:1;background-color:rgba(22,163,74,var(--tw-bg-opacity))}.hb-bg-green-100{--tw-bg-opacity:1;background-color:rgba(220,252,231,var(--tw-bg-opacity))}.hb-bg-indigo-800{--tw-bg-opacity:1;background-color:rgba(55,48,163,var(--tw-bg-opacity))}.hb-bg-indigo-100{--tw-bg-opacity:1;background-color:rgba(224,231,255,var(--tw-bg-opacity))}.hb-bg-orange-300{--tw-bg-opacity:1;background-color:rgba(253,186,116,var(--tw-bg-opacity))}.hb-bg-orange-800{--tw-bg-opacity:1;background-color:rgba(154,52,18,var(--tw-bg-opacity))}.hb-bg-yellow-300{--tw-bg-opacity:1;background-color:rgba(253,224,71,var(--tw-bg-opacity))}.hb-bg-yellow-100{--tw-bg-opacity:1;background-color:rgba(254,249,195,var(--tw-bg-opacity))}.hb-bg-teal-500{--tw-bg-opacity:1;background-color:rgba(20,184,166,var(--tw-bg-opacity))}.hb-bg-teal-900{--tw-bg-opacity:1;background-color:rgba(19,78,74,var(--tw-bg-opacity))}.hb-bg-red-400{--tw-bg-opacity:1;background-color:rgba(248,113,113,var(--tw-bg-opacity))}.hb-bg-red-100{--tw-bg-opacity:1;background-color:rgba(254,226,226,var(--tw-bg-opacity))}.hb-p-1{padding:.25rem}.hb-py-2{padding-bottom:.5rem;padding-top:.5rem}.hb-px-1{padding-left:.25rem;padding-right:.25rem}.hb-px-2{padding-left:.5rem;padding-right:.5rem}.hb-text-sm{font-size:.875rem;line-height:1.25rem}.hb-text-xs{font-size:.75rem;line-height:1rem}.hb-font-semibold{font-weight:600}.hb-uppercase{text-transform:uppercase}.hb-leading-relaxed{line-height:1.625}.hb-tracking-wider{letter-spacing:.05em}.hb-text-gray-100{--tw-text-opacity:1;color:rgba(243,244,246,var(--tw-text-opacity))}.hb-text-gray-900{--tw-text-opacity:1;color:rgba(17,24,39,var(--tw-text-opacity))}.hb-text-gray-800{--tw-text-opacity:1;color:rgba(31,41,55,var(--tw-text-opacity))}.hb-text-blue-100{--tw-text-opacity:1;color:rgba(219,234,254,var(--tw-text-opacity))}.hb-text-blue-900{--tw-text-opacity:1;color:rgba(30,58,138,var(--tw-text-opacity))}.hb-text-green-100{--tw-text-opacity:1;color:rgba(220,252,231,var(--tw-text-opacity))}.hb-text-green-900{--tw-text-opacity:1;color:rgba(20,83,45,var(--tw-text-opacity))}.hb-text-indigo-100{--tw-text-opacity:1;color:rgba(224,231,255,var(--tw-text-opacity))}.hb-text-indigo-900{--tw-text-opacity:1;color:rgba(49,46,129,var(--tw-text-opacity))}.hb-text-orange-900{--tw-text-opacity:1;color:rgba(124,45,18,var(--tw-text-opacity))}.hb-text-orange-100{--tw-text-opacity:1;color:rgba(255,237,213,var(--tw-text-opacity))}.hb-text-yellow-900{--tw-text-opacity:1;color:rgba(113,63,18,var(--tw-text-opacity))}.hb-text-teal-100{--tw-text-opacity:1;color:rgba(204,251,241,var(--tw-text-opacity))}.hb-text-red-900{--tw-text-opacity:1;color:rgba(127,29,29,var(--tw-text-opacity))}a{background-color:transparent;color:inherit;text-decoration:inherit}*,:after,:before{border:0 solid #e2e8f0;box-sizing:border-box}.fade-in-top{animation:fade-in-top .8s cubic-bezier(.39,.575,.565,1)}@keyframes fade-in-top{0%{opacity:0;transform:translateY(-50px)}to{opacity:1;transform:translateY(0)}}.hover\\:hb-bg-gray-800:hover{--tw-bg-opacity:1;background-color:rgba(31,41,55,var(--tw-bg-opacity))}.hover\\:hb-text-white:hover{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}.hover\\:hb-text-gray-300:hover{--tw-text-opacity:1;color:rgba(209,213,219,var(--tw-text-opacity))}.hover\\:hb-text-gray-600:hover{--tw-text-opacity:1;color:rgba(75,85,99,var(--tw-text-opacity))}.hover\\:hb-text-blue-300:hover{--tw-text-opacity:1;color:rgba(147,197,253,var(--tw-text-opacity))}.hover\\:hb-text-green-300:hover{--tw-text-opacity:1;color:rgba(134,239,172,var(--tw-text-opacity))}.hover\\:hb-text-indigo-300:hover{--tw-text-opacity:1;color:rgba(165,180,252,var(--tw-text-opacity))}.hover\\:hb-text-orange-700:hover{--tw-text-opacity:1;color:rgba(194,65,12,var(--tw-text-opacity))}.hover\\:hb-text-yellow-700:hover{--tw-text-opacity:1;color:rgba(161,98,7,var(--tw-text-opacity))}.hover\\:hb-text-teal-300:hover{--tw-text-opacity:1;color:rgba(94,234,212,var(--tw-text-opacity))}.hover\\:hb-text-red-100:hover{--tw-text-opacity:1;color:rgba(254,226,226,var(--tw-text-opacity))}.hover\\:hb-underline:hover{text-decoration-line:underline}.focus\\:hb-bg-gray-800:focus{--tw-bg-opacity:1;background-color:rgba(31,41,55,var(--tw-bg-opacity))}.focus\\:hb-outline-none:focus{outline:2px solid transparent;outline-offset:2px}@media (min-width:768px){.md\\:hb-flex-row{flex-direction:row}.md\\:hb-px-20{padding-left:5rem;padding-right:5rem}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ ((module) => {



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

/***/ 81:
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 379:
/***/ ((module) => {



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

/***/ 569:
/***/ ((module) => {



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

/***/ 216:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ 565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 795:
/***/ ((module) => {



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

/***/ 589:
/***/ ((module) => {



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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ src)
});

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/styles.css
var styles = __webpack_require__(363);
;// CONCATENATED MODULE: ./src/styles.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(styles/* default */.Z, options);




       /* harmony default export */ const src_styles = (styles/* default */.Z && styles/* default.locals */.Z.locals ? styles/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/banner/styling.js
/**
 * The class styling configurations.
 *
 * Has the base styles and the themes
 *
 * @var {object} styling
 */
var styling = {
  wrapper: "hb-flex hb-w-full hd-flex-col md:hb-flex-row hb-text-sm hb-py-2 md:hb-px-20 hb-px-1 hb-items-center hb-justify-between",
  linkWrapper: "hb-flex hb-items-center",
  badge: "hb-px-2 hb-mx-2 hb-leading-relaxed hb-tracking-wider hb-uppercase hb-font-semibold hb-rounded-full hb-text-xs",
  postTitle: "hover:hb-underline hb-inline-flex hb-items-center",
  secondaryLink: "hb-mx-5 hb-cursor-pointer hover:hb-underline"
};

/**
 * THe themes for the bars
 *
 * @var {object} themes
 */
var themes = {
  gray: {
    wrapper: "hb-bg-gray-900 hb-text-gray-100",
    linkWrapper: "",
    badge: "hb-bg-white hb-text-gray-900",
    postTitle: "hover:hb-text-gray-300",
    secondaryLink: "hover:hb-text-gray-300",
    dismiss: "hb-text-gray-800"
  },
  lightGray: {
    wrapper: "hb-bg-gray-400 hb-text-gray-900",
    linkWrapper: "",
    badge: "hb-bg-white hb-text-gray-900 shadow",
    postTitle: "hover:hb-text-gray-600",
    secondaryLink: "hover:hb-text-gray-600",
    dismiss: "hb-text-gray-800"
  },
  blue: {
    wrapper: "hb-bg-blue-900 hb-text-blue-100",
    linkWrapper: "",
    badge: "hb-bg-blue-100 hb-text-blue-900 shadow",
    postTitle: "hover:hb-text-blue-300",
    secondaryLink: "hover:hb-text-blue-300",
    dismiss: "hb-text-gray-800"
  },
  green: {
    wrapper: "hb-bg-green-600 hb-text-green-100",
    linkWrapper: "",
    badge: "hb-bg-green-100 hb-text-green-900",
    postTitle: "hover:hb-text-green-300",
    secondaryLink: "hover:hb-text-green-300",
    dismiss: "hb-text-gray-800"
  },
  indigo: {
    wrapper: "hb-bg-indigo-800 hb-text-indigo-100",
    linkWrapper: "",
    badge: "hb-bg-indigo-100 hb-text-indigo-900 shadow",
    postTitle: "hover:hb-text-indigo-300",
    secondaryLink: "hover:hb-text-indigo-300",
    dismiss: "hb-text-gray-800"
  },
  orange: {
    wrapper: "hb-bg-orange-300 hb-text-orange-900",
    linkWrapper: "",
    badge: "hb-bg-orange-800 hb-text-orange-100 shadow",
    postTitle: "hover:hb-text-orange-700",
    secondaryLink: "hover:hb-text-orange-700",
    dismiss: "hb-text-gray-800"
  },
  yellow: {
    wrapper: "hb-bg-yellow-300 hb-text-yellow-900",
    linkWrapper: "",
    badge: "hb-bg-yellow-100 hb-text-yellow-900 shadow",
    postTitle: "hover:hb-text-yellow-700",
    secondaryLink: "hover:hb-text-yellow-700",
    dismiss: "hb-text-gray-800"
  },
  teal: {
    wrapper: "hb-bg-teal-500 hb-text-teal-100",
    linkWrapper: "",
    badge: "hb-bg-teal-900 hb-text-teal-100 shadow",
    postTitle: "hover:hb-text-teal-300",
    secondaryLink: "hover:hb-text-teal-300",
    dismiss: "hb-text-gray-800"
  },
  red: {
    wrapper: "hb-bg-red-400 hb-text-red-900",
    linkWrapper: "",
    badge: "hb-bg-red-100 hb-text-red-900 shadow",
    postTitle: "hover:hb-text-red-100",
    secondaryLink: "hover:hb-text-red-100",
    dismiss: "hb-text-gray-800"
  }
};
;// CONCATENATED MODULE: ./src/config/config.js
/**
 * The default configuration for the package
 *
 * @var {object} config
 * @var {object} config.fetchOptions
 */
var config = {
  fetchOptions: {
    method: 'GET',
    mode: 'cors',
    // no-cors, *cors, same-origin
    cache: 'no-cache',
    // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      'Accept': 'application/json'
    },
    redirect: 'follow' // manual, *follow, error
  }
};
;// CONCATENATED MODULE: ./src/functions/normalise.js
/**
 * Gets the normal format of the returned API data
 *
 * This is split up just incase it needs to be expanded feature wise
 */

/**
 * Converts the JSON result form the Wordpress wp-json api.
 *
 * @param {string} data.title.rendered
 * @param {string} data.link
 * @return {object} {title, link}
 */
function wpJsonParser(data) {
  var _data$ = data[0],
    rendered = _data$.title.rendered,
    link = _data$.link;
  if (rendered == undefined) {
    console.error("WP-json response doesn't have real values %o", data[0]);
  }
  return {
    title: rendered,
    link: link
  };
}

/**
 * Default normaliser parser assignment.
 */
var normaliseParser = wpJsonParser;

/**
 * Sets the parser for the data normaliser.
 *
 * @param {Function} parser
 */
function initNormalise(parser) {
  // if the parser is a function set it
  // if not just use the default one
  normaliseParser = typeof parser == 'function' ? parser : wpJsonParser;
}

/**
 * Uses the defined parser to normalise the data that comes out.
 *
 * @param {object} data Mixed incoming data
 */
function normaliser(data) {
  return new Promise(function (resolve, reject) {
    if (data) {
      try {
        resolve(normaliseParser(data));
      } catch (error) {
        reject(error);
      }
    }
    reject({
      "error": "No Data",
      data: data
    });
  });
}
;// CONCATENATED MODULE: ./src/functions/init.js




/**
 * Set all the configuration options for the hBar library
 *
 * @param {object} options
 * @param {string} options.el The element id
 * @param {string} options.template The template id
 * @param {string} options.url
 * @param {boolean} options.dismissible
 * @param {Date|boolean} options.dismissFor
 * @param {string} options.badge
 * @param {array} options.secondaryLinks
 * @param {object} options.headers
 * @param {object} options.customStyles
 * @param {function} options.parser
 * @param {function} options.onCompleted
 * @param {function} options.onFailure
 * @param {string} options.link Manual override
 * @param {string} options.title Manual Override
 */
function init_init() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var configuration = {};
  configuration.$el = options.el;
  configuration.url = options.url;
  // if the user has dompurify installed. It can be optional
  configuration.DOMPurify = options.DOMPurify || null;
  configuration.theme = themes[options.theme] || 'grey';
  configuration.badge = options.badge || null;

  // we will default to false for configuration
  configuration.dismissible = options.dismissible || false;
  configuration.dismissFor = options.dismissFor || false;
  configuration.secondaryLinks = options.secondaryLinks || [];

  /**
   * These will be the fallbacks if something isn't found.
   */
  configuration.title = options.title || null;
  configuration.link = options.link || null;
  configuration.onCompleted = options.onCompleted || function () {};
  configuration.onFailure = options.onFailure || function () {};
  if (typeof options.fetch == 'function') {
    configuration.fetch = options.fetch;
  }
  configuration.fetchOptions = config.fetchOptions;
  configuration.fetchOptions.headers = Object.assign(config.fetchOptions.headers, options.headers);
  initNormalise(options.parser || null);
  return configuration;
}
;// CONCATENATED MODULE: ./src/utils.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
// Thanks @stimulus: and I got it from @alpinejs
// https://github.com/stimulusjs/stimulus/blob/master/packages/%40stimulus/core/src/application.ts
function domReady() {
  return new Promise(function (resolve) {
    if (document.readyState == "loading") {
      document.addEventListener("DOMContentLoaded", resolve);
    } else {
      resolve();
    }
  });
}

/**
 * Create a new document element
 *
 * the documentFragment bit is abstracted from https://codereview.stackexchange.com/a/187006
 * innerHTML and outerHTML with a reduce function is meh
 *
 * @param {string} element element tag name
 * @param {object}
 */
function newElement(element, _ref) {
  var children = _ref.children,
    classes = _ref.classes;
  var parent = document.createElement(element);
  var documentFragment = document.createDocumentFragment();
  addClasses(parent, classes || '');
  if (children) /*run*/{
      children.forEach(function (child) {
        if (Array.isArray(child)) {
          child.forEach(function (child) {
            return documentFragment.appendChild(child);
          });
        } else {
          documentFragment.appendChild(child);
        }
      });
    }
  parent.appendChild(documentFragment);
  return parent;
}
function addClasses(element) {
  var _element$classList;
  var classes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var splitClasses = classes.trim().split(' ');
  (_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(splitClasses));
  return element;
}

/**
 * Binds all the methods on a JS Class to the `this` context of the class.
 * Adapted from https://github.com/sindresorhus/auto-bind
 * @param {object} self The `this` context of the class
 * @return {object} The `this` context of the class
 */
function autoBind(self) {
  var keys = Object.getOwnPropertyNames(self.constructor.prototype);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var val = self[key];
    if (key !== 'constructor' && typeof val === 'function') {
      self[key] = val.bind(self);
    }
  }
  return self;
}

/**
 * Gets the data-* values that area related to the config of the template options.
 *
 * @param {HTMLElement} element
 * @return {Object}
 */
function getElementOptions(element) {
  return {
    template: element.dataset.template,
    html: element.getAttribute('has-html') == "" ? true : false,
    dismissFor: element.dataset.dismissFor || null
  };
}

/**
 * Determines if the banner has been dismissed.
 *
 * @returns boolean
 */
function isDismissed() {
  if (localStorage) {
    var dismissDate = localStorage.getItem('h-bar_dismiss_for');
    if (!dismissDate) {
      return false;
    }
    dismissDate = dismissDate;
    var ourDate = new Date().getTime();
    if (ourDate <= dismissDate) {
      return true;
    }
  }
  return false;
}
;// CONCATENATED MODULE: ./src/functions/renderer.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Renderer = /*#__PURE__*/function () {
  /**
   * Creates a new simple renderer for the templates
   *
   * @param {string} el the element ID that has the template data
   * @param {object} data The key:value pair of the data to replace in the template
   * @param {DOMPurify} DOMPurify the DOMPurify library
   */
  function Renderer(el, DOMPurify) {
    _classCallCheck(this, Renderer);
    this.template = document.querySelector(el);
    this.DOMPurify = DOMPurify;
  }
  _createClass(Renderer, [{
    key: "resolve",
    value: function resolve(data) {
      var _this = this;
      var templateHTML = this.template.innerHTML;

      /**
       * Don't do anything if there is a no content
       */
      if (templateHTML == undefined) {
        return null;
      }
      Object.keys(data).forEach(function (key) {
        // skip any array things.
        // make the thing recursive in x version xD
        if (!Array.isArray(data[key])) {
          var regex = _this.regex(key);
          templateHTML = templateHTML.replace(regex, data[key]);
        }
      });
      if (this.DOMPurify) {
        return this.DOMPurify.sanitize(templateHTML);
      }
      return templateHTML;
    }

    /**
     * Create the matching regex for the template tags
     *
     * @param {string} key The key to search in the template data
     * @returns {RegExp}
     */
  }, {
    key: "regex",
    value: function regex(key) {
      // current tag is {% value %}
      return new RegExp("({%\\s*(".concat(key, ")\\s*%})"), 'g');
    }
  }]);
  return Renderer;
}();

;// CONCATENATED MODULE: ./src/banner/banner.js
function banner_typeof(obj) { "@babel/helpers - typeof"; return banner_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, banner_typeof(obj); }
function banner_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function banner_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, banner_toPropertyKey(descriptor.key), descriptor); } }
function banner_createClass(Constructor, protoProps, staticProps) { if (protoProps) banner_defineProperties(Constructor.prototype, protoProps); if (staticProps) banner_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function banner_toPropertyKey(arg) { var key = banner_toPrimitive(arg, "string"); return banner_typeof(key) === "symbol" ? key : String(key); }
function banner_toPrimitive(input, hint) { if (banner_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (banner_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var Banner = /*#__PURE__*/function () {
  /**
   *
   * @param {object} param0
   */
  function Banner(_ref) {
    var $el = _ref.$el,
      dismissible = _ref.dismissible,
      dismissFor = _ref.dismissFor,
      theme = _ref.theme,
      badge = _ref.badge;
    banner_classCallCheck(this, Banner);
    this.$el = $el;
    this.dismissible = dismissible;
    this.dismissFor = dismissFor;
    this.badge = badge;
    this.theme = theme;
  }

  /**
   * Render the element.
   */
  banner_createClass(Banner, [{
    key: "resolve",
    value: function resolve(_ref2) {
      var _this = this;
      var title = _ref2.title,
        link = _ref2.link,
        secondaryLinks = _ref2.secondaryLinks;
      if (isDismissed()) return;
      domReady().then(function () {
        if (!title) {
          console.error('[h-bar] no post data, unable to render');
          return;
        }
        var secondaryElement = null;
        if (!_this.dismissible) {
          var secondaryLinkList = _this.createSecondaryLinks(secondaryLinks);
          secondaryElement = newElement('div', {
            children: secondaryLinkList,
            classes: "".concat(styling.linkWrapper, " ").concat(_this.theme.linkWrapper)
          });
        } else {
          secondaryElement = _this.dismissibleButton();
        }
        var badgeElement = null;
        if (_this.badge) {
          badgeElement = newElement('span', {
            classes: "".concat(styling.badge, " ").concat(_this.theme.badge)
          });
          badgeElement.innerText = _this.badge;
        }
        var postLink = newElement('a', {
          classes: "".concat(styling.postTitle, " ").concat(_this.theme.postTitle)
        });
        postLink.href = link;
        postLink.innerText = title;
        postLink.innerHTML += "\n                <svg class=\"hb-h-3 hb-w-3\" viewBox=\"0 0 20 20\" fill=\"currentColor\">\n                    <path fill-rule=\"evenodd\" d=\"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z\" clip-rule=\"evenodd\"/>\n                </svg>\n                ";
        var postChildren = [postLink];
        if (badgeElement) {
          postChildren.unshift(badgeElement);
        }
        var postElement = newElement('div', {
          classes: "".concat(styling.linkWrapper, " ").concat(_this.theme.linkWrapper),
          children: postChildren
        });
        var _hbar = newElement('div', {
          classes: "".concat(styling.wrapper, " ").concat(_this.theme.wrapper),
          children: [postElement, secondaryElement]
        });
        var container = document.querySelector(_this.$el);
        container.innerHTML = "";
        container.appendChild(_hbar);
      });
    }

    /**
     * Removes the element in the case of it having issues.
     * Rather an aggressive option.
     *
     * Also used when dismissing.
     */
  }, {
    key: "destroy",
    value: function destroy() {
      try {
        document.querySelector(this.$el).innerHTML = '';
        return true;
      } catch (error) {
        console.error('Unable to destroy the h-bar wrapper');
        console.error(error);
      }
      return false;
    }

    /**
     * Creates the HTML node for a dismissible button.
     *
     * @returns HTMLElement
     */
  }, {
    key: "dismissibleButton",
    value: function dismissibleButton() {
      var _this2 = this;
      var dismiss = newElement('button', {
        classes: "hb--mr-2 hb-flex hb-p-1 hb-rounded-md ".concat(this.theme.dismiss, " hover:hb-text-white hover:hb-bg-gray-800 focus:hb-outline-none focus:hb-bg-gray-800")
      });
      dismiss.innerHTML = "<svg class=\"hb-h-4 hb-w-4\" stroke=\"currentColor\" fill=\"none\" viewBox=\"0 0 24 24\">\n                    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"></path>\n                  </svg>";
      dismiss.onclick = function (e) {
        e.preventDefault();

        // just do it early if we not logging time.
        if (!_this2.dismissFor) return _this2.destroy();
        if (localStorage) {
          localStorage.setItem('h-bar_dismiss_for', _this2.dismissFor.getTime());
        }
        return _this2.destroy();
      };
      return dismiss;
    }

    /**
     * Creates the secondary links for the bar.
     */
  }, {
    key: "createSecondaryLinks",
    value: function createSecondaryLinks(secondaryLinks) {
      var _this3 = this;
      if (!secondaryLinks) return [];
      return secondaryLinks.map(function (_ref3) {
        var title = _ref3.title,
          link = _ref3.link;
        var style = "".concat(styling.secondaryLink, " ").concat(_this3.theme.secondaryLink);
        var butter = newElement('a', {
          classes: style
        });
        butter.href = link;
        butter.innerText = title;
        return butter;
      }, this);
    }
  }]);
  return Banner;
}();

;// CONCATENATED MODULE: ./src/index.js
function src_typeof(obj) { "@babel/helpers - typeof"; return src_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, src_typeof(obj); }
/**
 * h-bar banner and dynamic announcement library
 *
 * @version 2.0.0
 * @license MIT
 * @copyright @ReeceM
 */







/**
 * Set all the configuration options for the hBar library
 *
 * @property {string} el The element id
 * @property {string} url
 * @property {boolean} dismissible
 * @property {Date|boolean} dismissFor
 * @property {string} badge
 * @property {DOMPurify} DOMPurify the DOMPurify library
 * @property {array} secondaryLinks
 * @property {object} headers
 * @property {object} customStyles
 * @property {function} parser
 * @property {object} renderer
 * @property {function} onCompleted
 * @property {function} onFailure
 * @property {string} link Manual override
 * @property {string} title Manual Override
 */
var hBar = {
  version: "2.0.0",
  rendered: false,
  fetching: false,
  usingBanner: true,
  /**
   * Set all the configuration options for the hBar library
   *
   * @param {object} options
   * @param {string} options.el The element id
   * @param {string} options.url
   * @param {boolean} options.dismissible
   * @param {Date|boolean} options.dismissFor
   * @param {string} options.badge
   * @param {array} options.secondaryLinks
   * @param {object} options.headers
   * @param {object} options.customStyles
   * @param {function} options.parser
   * @param {function} options.onCompleted
   * @param {string} options.link Manual override
   * @param {string} options.title Manual Override
   */
  init: function init() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    Object.assign(this, init_init(options));
    this.$elementOpt = getElementOptions(document.querySelector(this.$el));
    if (this.$elementOpt.template) {
      this.renderer = new Renderer(this.$elementOpt.template, this.DOMPurify);
    } else if (options.renderer) {
      /**
       * @todo this was added on a whim... bad idea possibly
       */
      this.renderer = new options.renderer(this);
    } else {
      this.renderer = new Banner(this);
    }
    Object.defineProperties(this, {
      'renderer': {
        configurable: false,
        writable: false
      }
    });
  },
  /**
   * Gets the data from the url endpoint.
   *
   * This is called by the
   */
  fetch: function (_fetch) {
    function fetch() {
      return _fetch.apply(this, arguments);
    }
    fetch.toString = function () {
      return _fetch.toString();
    };
    return fetch;
  }(function () {
    var _this = this;
    if (this.rendered) return;
    if (isDismissed()) return;
    this.fetching = true;
    fetch(this.url, this.fetchOptions).then(function (response) {
      return response.json();
    }).then(function (json) {
      if (src_typeof(json) == "object") {
        _this.render(json);
      } else {
        console.error("".concat(_this.url, " Did not return an object"));
      }
      _this.fetching = false;
    })["catch"](function (error) {
      console.error(error);
      _this.fetching = false;
      _this.rendered = false;
    });
  }),
  /**
   * Render the response to the actual message
   *
   * @param {Object} result
   */
  render: function render(result) {
    var _this2 = this;
    normaliser(result).then(function (result) {
      var element = document.querySelector(_this2.$el);
      element.innerHTML = _this2.renderer.resolve(result);
      element.__hbar__ = _this2;
      _this2.rendered = true;
      _this2.onCompleted({
        __hbar__: _this2,
        result: element
      });
    })["catch"](function (error) {
      console.error(error);
      _this2.destroy();
      _this2.fetching = false;
      _this2.rendered = false;
      _this2.onFailure({
        __hbar__: _this2
      });
    });
  },
  /**
   * Removes the element in the case of it having issues.
   * Rather an aggressive option.
   *
   * Also used when dismissing.
   */
  destroy: function destroy() {
    try {
      document.querySelector(this.$el).innerHTML = '';
      return true;
    } catch (error) {
      console.error('Unable to destroy the h-bar wrapper');
      console.error(error);
    }
    return false;
  }
};
Object.defineProperties(hBar, {
  /**
   * Config method should not be changed
   */
  'init': {
    writable: false,
    configurable: false
  },
  'destroy': {
    writable: false,
    configurable: false
  },
  'fetch': {
    writable: false,
    configurable: false
  }
});
/* harmony default export */ const src = (hBar);
})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});