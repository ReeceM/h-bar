(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["hBar"] = factory();
	else
		root["hBar"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(1);
            var content = __webpack_require__(2);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".hb-bg-white{background-color:#fff}.hb-bg-gray-900{background-color:#1a202c}.hb-bg-blue-100{background-color:#ebf8ff}.hb-bg-blue-900{background-color:#2a4365}.hb-rounded-full{border-radius:9999px}.hb-cursor-pointer{cursor:pointer}.hb-flex{display:flex}.hb-items-center{align-items:center}.hb-justify-between{justify-content:space-between}.hb-font-semibold{font-weight:600}.hb-leading-relaxed{line-height:1.625}.hb-mx-2{margin-left:.5rem;margin-right:.5rem}.hb-mx-5{margin-left:1.25rem;margin-right:1.25rem}.hb-px-1{padding-left:.25rem;padding-right:.25rem}.hb-py-2{padding-top:.5rem;padding-bottom:.5rem}.hb-px-2{padding-left:.5rem;padding-right:.5rem}.hb-text-gray-100{color:#f7fafc}.hb-text-gray-900{color:#1a202c}.hb-text-blue-100{color:#ebf8ff}.hb-text-blue-900{color:#2a4365}.hover\\:hb-text-gray-300:hover{color:#e2e8f0}.hover\\:hb-text-blue-300:hover{color:#90cdf4}.hb-text-xs{font-size:.75rem}.hb-text-sm{font-size:.875rem}.hb-uppercase{text-transform:uppercase}.hover\\:hb-underline:hover{text-decoration:underline}.hb-tracking-wider{letter-spacing:.05em}.hb-w-full{width:100%}a{color:inherit;text-decoration:inherit;background-color:transparent}*{box-sizing:border-box;border:0 solid #e2e8f0}.fade-in-top{-webkit-animation:fade-in-top .8s cubic-bezier(.39,.575,.565,1);animation:fade-in-top .8s cubic-bezier(.39,.575,.565,1)}@-webkit-keyframes fade-in-top{to{transform:translateY(0);opacity:1}}@keyframes fade-in-top{0%{transform:translateY(-50px);opacity:0}to{transform:translateY(0);opacity:1}}@media (min-width:640px){.sm\\:hb-flex-row{flex-direction:row}}@media (min-width:768px){.md\\:hb-flex-row{flex-direction:row}.md\\:hb-px-20{padding-left:5rem;padding-right:5rem}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/styles.css
var styles = __webpack_require__(0);

// CONCATENATED MODULE: ./src/config/config.js
/**
 * The default configuration for the package
 *
 * @var {object} config
 */
var config = {
  url: '',
  theme: "gray",
  secondaryLinks: [],
  onCompleted: null,
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
// CONCATENATED MODULE: ./src/functions/normalise.js
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

  if (title == undefined) {
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
// CONCATENATED MODULE: ./src/config/styling.js
/**
 * The class styling configurations.
 *
 * Has the base styles and the themes
 *
 * @var {object} styling
 */
var styling = {
  wrapper: "hb-flex hb-w-full hd-flex-col md:hb-flex-row sm:hb-flex-row hb-text-sm hb-py-2 md:hb-px-20 hb-px-1 hb-items-center hb-justify-between",
  linkWrapper: "hb-flex hb-items-center",
  badge: "hb-px-2 hb-mx-2 hb-leading-relaxed hb-tracking-wider hb-uppercase hb-font-semibold hb-rounded-full hb-text-xs",
  postTitle: "hover:hb-underline",
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
    secondaryLink: "hover:hb-text-gray-300"
  },
  blue: {
    wrapper: "hb-bg-blue-900 hb-text-blue-100",
    linkWrapper: "",
    badge: "hb-bg-blue-100 hb-text-blue-900",
    postTitle: "hover:hb-text-blue-300",
    secondaryLink: "hover:hb-text-blue-300"
  }
};
// CONCATENATED MODULE: ./src/functions/init.js



/**
 *
 * @param {object} param0
 * @param {string} param0.url
 * @param {string} param0.badge
 * @param {array} param0.secondaryLinks
 * @param {object} param0.options
 * @param {object} param0.customStyles
 * @param {function} param0.parser
 * @param {function} param0.onCompleted
 * @param {string} param0.link Manual override
 * @param {string} param0.title Manual Override
 */

function init(_ref) {
  var url = _ref.url,
      badge = _ref.badge,
      secondaryLinks = _ref.secondaryLinks,
      options = _ref.options,
      customStyles = _ref.customStyles,
      onCompleted = _ref.onCompleted,
      parser = _ref.parser,
      link = _ref.link,
      title = _ref.title;
  this.url = url;
  this.config = Object.assign(config, options);
  this.styling = Object.assign(styling, customStyles);
  this.secondaryLinks = secondaryLinks;

  this.onCompleted = onCompleted || function () {};

  this.badge = badge || 'New';
  this.postLink = link;
  this.postTitle = title;
  this.theme = this.config.theme;
  initNormalise(parser);
  return this;
}
// CONCATENATED MODULE: ./src/utils.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// Thanks @stimulus:
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

  if (children)
    /*run*/
    {
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
// CONCATENATED MODULE: ./src/index.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * h-bar announcement banner
 *
 * @version 0.1.0
 * @author ReeceM
 */





var hBar = {
  /**
   * h-bar version number
  */
  version: "0.1.0",

  /**
   * Initialise the hBar package
   * @param {string} url The endpoint to get data from
   * @param {function} onCompleted The function that is called when done
   *
   * @returns {hBar}
   */
  init: init,

  /**
   * Fetch the data from the endpoint
   */
  fetchData: function fetchData() {
    var _this = this;

    fetch(this.url, this.config.fetchOptions).then(function (response) {
      return response.json();
    }).then(function (json) {
      if (_typeof(json) == "object") {
        normaliser(json).then(function (_ref) {
          var title = _ref.title,
              link = _ref.link,
              secondaryLinks = _ref.secondaryLinks;
          _this.postTitle = title;
          _this.postLink = link;
          _this.secondaryLinks = secondaryLinks || [];

          _this.render();
        })["catch"](function (error) {
          console.error(error);
        });
      } else {
        console.error("".concat(_this.url, " Did not return an object"));
      }
    });
  },

  /**
   * Render the element.
   */
  render: function render() {
    var _this2 = this;

    domReady().then(function () {
      var secondaryLinkList = _this2.createSecondaryLinks();

      var secondaryElement = newElement('div', {
        children: secondaryLinkList,
        classes: "".concat(_this2.styling.linkWrapper, " ").concat(themes[_this2.theme].linkWrapper)
      });
      var badge = newElement('span', {
        classes: "".concat(_this2.styling.badge, " ").concat(themes[_this2.theme].badge)
      });
      var postLink = newElement('a', {
        classes: "".concat(_this2.styling.postTitle, " ").concat(themes[_this2.theme].postTitle)
      });
      badge.innerText = _this2.badge;
      postLink.href = _this2.postLink;
      postLink.innerText = _this2.postTitle;
      var postElement = newElement('div', {
        classes: "".concat(_this2.styling.linkWrapper, " ").concat(themes[_this2.theme].linkWrapper),
        children: [badge, postLink]
      });

      var _hbar = newElement('div', {
        classes: "".concat(_this2.styling.wrapper, " ").concat(themes[_this2.theme].wrapper),
        children: [postElement, secondaryElement]
      });

      document.getElementById('h-bar').innerHTML = "";
      document.getElementById('h-bar').appendChild(_hbar); // ? what to send out

      _this2.onCompleted('done');
    });
  },

  /**
   * Creates the secondary links for the bar.
   */
  createSecondaryLinks: function createSecondaryLinks() {
    var _this3 = this;

    if (!this.secondaryLinks) return [];
    return this.secondaryLinks.map(function (_ref2) {
      var title = _ref2.title,
          link = _ref2.link;
      var style = "".concat(_this3.styling.secondaryLink, " ").concat(themes[_this3.theme].secondaryLink);
      var butter = newElement('a', {
        classes: style
      });
      butter.href = link;
      butter.innerText = title;
      return butter;
    }, this);
  }
};
/* harmony default export */ var src = __webpack_exports__["default"] = (hBar);

/***/ })
/******/ ])["default"];
});