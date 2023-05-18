/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "scripts//" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([146,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["a"] = (Array.from);

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(65);
            var content = __webpack_require__(134);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(65);
            var content = __webpack_require__(136);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__(107);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(54);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/in-view/dist/in-view.min.js
var in_view_min = __webpack_require__(105);
var in_view_min_default = /*#__PURE__*/__webpack_require__.n(in_view_min);

// CONCATENATED MODULE: ./src/js/dmi/constants.js
var DMI_SELECTOR = '.js-dmi';
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(68);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(69);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(70);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(96);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(97);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(71);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.js
var es_set = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(67);

// EXTERNAL MODULE: ./src/js/var/array-from.js
var array_from = __webpack_require__(103);

// CONCATENATED MODULE: ./src/js/var/is-array.js
/* harmony default export */ var is_array = (Array.isArray);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__(72);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(73);

// CONCATENATED MODULE: ./src/js/utils/classes.js














function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


/**
 * @param {HTMLElement|HTMLCollection} elements
 * @param {String|String[]} classes
 */

var classes_removeClass = function removeClass(elements, classes) {
  if (!elements) {
    return '';
  }

  var remove = function remove(el) {
    if (is_array(classes)) {
      var _el$classList;

      (_el$classList = el.classList).remove.apply(_el$classList, _toConsumableArray(classes));
    } else {
      el.classList.remove(classes);
    }
  };

  if (is_array(elements) || elements instanceof NodeList) {
    elements.forEach(remove);
  } else if (elements instanceof HTMLElement) {
    remove(elements);
  }
};
/**
 * @param {HTMLElement|HTMLCollection} elements
 * @param {String|String[]} classes
 */

var classes_addClass = function addClass(elements, classes) {
  if (!elements) {
    return '';
  }

  var add = function add(el) {
    if (is_array(classes)) {
      var _el$classList2;

      (_el$classList2 = el.classList).add.apply(_el$classList2, _toConsumableArray(classes));
    } else {
      el.classList.add(classes);
    }
  };

  if (is_array(elements) || elements instanceof NodeList) {
    elements.forEach(add);
  } else if (elements instanceof HTMLElement) {
    add(elements);
  }
};
/**
 * @param {HTMLElement} element
 * @param {String} selector
 * @returns {boolean}
 */

var hasClass = function hasClass(element, selector) {
  return element && element.classList.contains(selector);
};
// CONCATENATED MODULE: ./src/js/utils/dispatch.js




/**
 * @param {HTMLCollection|HTMLElement[]|Window} targets
 * @param {String} eventName
 * @param {Object} detail
 */

var dispatch_dispatch = function dispatch(targets, eventName) {
  var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (!is_array(targets)) {
    targets = [targets];
  }

  targets.filter(function (target) {
    return target;
  }).forEach(function (target) {
    if (target instanceof Node || target instanceof Window) {
      target.dispatchEvent(new CustomEvent(eventName, {
        detail: detail,
        bubbles: true
      }));
    }
  });
};
// CONCATENATED MODULE: ./src/js/dmi/create.js


















function create_toConsumableArray(arr) { return create_arrayWithoutHoles(arr) || create_iterableToArray(arr) || create_unsupportedIterableToArray(arr) || create_nonIterableSpread(); }

function create_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function create_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return create_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return create_arrayLikeToArray(o, minLen); }

function create_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function create_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return create_arrayLikeToArray(arr); }

function create_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





/**
 * @param {DMIOptions.modules} modules
 * @param {DMIOptions.selector} selector
 * @param {DMIOptions.debug} debug
 * @param {DMIOptions.pendingCssClass} pendingCssClass
 * @param {DMIOptions.loadedCssClass} loadedCssClass
 * @param {DMIOptions.errorCssClass} errorCssClass
 * @returns {DynamicModulesImport}
 */

var create_create = function create(_ref) {
  var modules = _ref.modules,
      selector = _ref.selector,
      debug = _ref.debug,
      pendingCssClass = _ref.pendingCssClass,
      loadedCssClass = _ref.loadedCssClass,
      errorCssClass = _ref.errorCssClass;

  var _cache = new Set();
  /**
   * @private
   * @param {string} message
   */


  var log = function log(message) {
    if (debug) {
      console.log('[DMI]: ' + message);
    }
  };
  /**
   * @private
   * @param {HTMLElement} container
   * @returns {HTMLElement|NodeList}
   */


  var getElements = function getElements(container) {
    var elements = container.matches(selector) ? [container].concat(create_toConsumableArray(container.querySelectorAll(selector))) : container.querySelectorAll(selector);

    if (elements.length === 0) {
      log("No import elements with selector \"".concat(selector, "\""));
    }

    return elements;
  };
  /**
   * @private
   * @param {string} moduleName
   * @param {string} message
   * @returns {Promise<void>}
   */


  var resolveWithErrors = function resolveWithErrors(moduleName, message) {
    console.warn("[DMI]: Module \"".concat(moduleName, "\" resolved width errors!!!"));
    console.error(message);
    return Promise.resolve();
  };
  /**
   * @private
   * @param {HTMLElement[]} elements
   * @param {DMIModuleStats} stats
   * @returns {Promise<void>}
   */


  var markAsPending = function markAsPending(elements, stats) {
    classes_removeClass(elements, [DMI.loadedEvent, DMI.errorCssClass]);
    classes_addClass(elements, DMI.pendingCssClass);
    dispatch_dispatch(elements, DMI.pendingEvent, {
      stats: stats
    });
  };
  /**
   * @private
   * @param {HTMLElement[]} elements
   * @param {DMIModuleStats} stats
   * @returns {Promise<void>}
   */


  var markAsLoaded = function markAsLoaded(elements, stats) {
    classes_removeClass(elements, [DMI.pendingCssClass, DMI.errorCssClass]);
    classes_addClass(elements, DMI.loadedCssClass);
    dispatch_dispatch(elements, DMI.loadedEvent, {
      stats: stats
    });
  };
  /**
   * @private
   * @param {HTMLElement[]} elements
   * @param {DMIModuleStats} stats
   * @returns {Promise<void>}
   */


  var markAsError = function markAsError(elements, stats) {
    classes_removeClass(elements, [DMI.pendingCssClass, DMI.loadedCssClass]);
    classes_addClass(elements, DMI.errorCssClass);
    dispatch_dispatch(elements, DMI.errorEvent, {
      stats: stats
    });
  };
  /**
   * @private
   * @param {string} moduleName
   * @param {HTMLElement[]} elements
   * @param {HTMLElement} container
   * @param {DMIImportCondition} useImportCondition
   * @returns {Promise<void>|*}
   */


  var importFn = function importFn(moduleName, elements, container, useImportCondition) {
    if (!modules.hasOwnProperty(moduleName)) {
      return resolveWithErrors(moduleName, "Undefined moduleName \"".concat(moduleName, "\""));
    }

    elements = is_array(elements) ? elements : Object(array_from["a" /* default */])(elements);
    var module = modules[moduleName];
    var moduleElements = typeof module.filter === 'function' ? elements.filter(module.filter) : elements.filter(function (element) {
      return element.matches(module.filter);
    });

    if (moduleElements.length === 0) {
      return Promise.resolve();
    }

    var stats = {
      moduleName: moduleName
    };

    if (useImportCondition && !_cache.has(moduleName) && typeof module.importCondition === 'function') {
      var allowed = module.importCondition(moduleElements, container, stats);

      if (allowed !== true) {
        log("module \"".concat(moduleName, "\" skipped by \".importCondition()\""));
        return Promise.resolve();
      }
    }

    _cache.add(moduleName);

    markAsPending(moduleElements, stats);
    return module.importFn(stats).then(function (_ref2) {
      var _default = _ref2.default;

      if (typeof _default !== 'function') {
        markAsError(moduleElements, stats);
        return resolveWithErrors(moduleName, "imported module \"".concat(moduleName, "\" - must export default method"));
      }

      markAsLoaded(moduleElements, stats);
      log("module \"".concat(moduleName, "\" is loaded"));

      _default(moduleElements);

      return Promise.resolve();
    }).catch(function (err) {
      return resolveWithErrors(moduleName, err);
    });
  };

  var DMI = {
    get modules() {
      return modules;
    },

    get debug() {
      return debug === true;
    },

    get selector() {
      return selector;
    },

    get pendingCssClass() {
      return pendingCssClass || '_dmi-is-pending';
    },

    get pendingEvent() {
      return 'dmi:pending';
    },

    get loadedCssClass() {
      return loadedCssClass || '_dmi-is-loaded';
    },

    get loadedEvent() {
      return 'dmi:loaded';
    },

    get errorCssClass() {
      return errorCssClass || '_dmi-has-error';
    },

    get errorEvent() {
      return 'dmi:error';
    },

    /**
     * @param {string} moduleName
     * @param {HTMLElement} container
     * @param {DMIImportCondition} ignoreImportCondition
     * @returns {Promise<void>|*}
     */
    importModule: function importModule(moduleName) {
      var container = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.body;
      var ignoreImportCondition = arguments.length > 2 ? arguments[2] : undefined;
      var elements = getElements(container);

      if (elements.length === 0) {
        log('No elements');
        return Promise.resolve();
      }

      return importFn(moduleName, elements, container, ignoreImportCondition !== true);
    },

    /**
     * @param {HTMLElement} container
     * @param {Boolean} awaitAll
     * @param {DMIImportCondition} ignoreImportCondition
     * @returns {Promise<void>|Promise<void[]>}
     */
    importAll: function importAll() {
      var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;
      var awaitAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var ignoreImportCondition = arguments.length > 2 ? arguments[2] : undefined;
      var elements = getElements(container);

      if (elements.length === 0) {
        log('No elements');
        return Promise.resolve();
      }

      var _getAll = function _getAll() {
        return Object.keys(modules).map(function (moduleName) {
          return importFn(moduleName, elements, container, ignoreImportCondition !== true);
        });
      };

      if (awaitAll) {
        return Promise.all(_getAll());
      } else {
        _getAll();

        return Promise.resolve();
      }
    }
  };
  DMI.importModule.bind(DMI);
  return DMI;
};
// CONCATENATED MODULE: ./src/js/dmi/index.js







function importConditionInView(elements, container, stats) {
  var _this = this;

  in_view_min_default()(this.filter).once('enter', function () {
    console.log(_this.filter);
    dmi_DMI.importModule(stats.moduleName, container, true);
  });
  return false;
}

var dmi_DMI = create_create({
  selector: DMI_SELECTOR,
  debug: 0,
  modules: {
    sliders: {
      filter: '[data-slider]',
      importFn: function importFn() {
        return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, 157));
      }
    }
  }
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(131);

// CONCATENATED MODULE: ./src/js/modules/lazy-load.js




/**
 * @typedef lozad
 * @property {function} observe
 * @property {function} triggerLoad
 */

/**
 * @see https://github.com/ApoorvSaxena/lozad.js
 * @param {Object} options
 * @return {Promise<lozad>}
 */
var lazyLoad = function lazyLoad(options) {
  options = Object.assign({}, {
    rootMargin: '50px'
  }, options);
  return new Promise(function (resolve, reject) {
    __webpack_require__.e(/* import() */ 0).then(__webpack_require__.t.bind(null, 156, 7)).then(function (_ref) {
      var lozad = _ref.default;
      resolve(lozad('.lazy', options));
    }).catch(function (e) {
      reject(e);
    });
  });
};
/**
 * @param {HTMLImageElement} el
 */

var imageLazyTrigger = function imageLazyTrigger(el) {
  if (el instanceof HTMLImageElement && el.classList.contains('lazy')) {
    lazyLoad().then(function (lozad) {
      lozad.triggerLoad(el);
    });
  }
};
// CONCATENATED MODULE: ./src/js/common.js




document.addEventListener('DOMContentLoaded', function (event) {
  dmi_DMI.importAll();
  lazyLoad().then(function (lozad) {
    lozad.observe();
  });
  var headerHeight = document.querySelector('.header').offsetHeight;
  document.addEventListener('scroll', function () {
    if (window.pageYOffset > headerHeight) {
      document.querySelector('.header').classList.add('scroll');
    } else if (window.pageYOffset > headerHeight || window.pageYOffset === 0) {
      document.querySelector('.header').classList.remove('scroll');
    }
  });

  if (window.pageYOffset > headerHeight) {
    document.querySelector('.header').classList.add('scroll');
  } else if (window.pageYOffset > headerHeight || window.pageYOffset === 0) {
    document.querySelector('.header').classList.remove('scroll');
  }

  document.querySelector('.js-open-menu').addEventListener('click', function () {
    document.querySelector('.mobile-menu').classList.add('open');
  });
  document.querySelector('.js-close-menu').addEventListener('click', function () {
    document.querySelector('.mobile-menu').classList.remove('open');
  });
  setTimeout(function () {
    document.body.classList.add('show');
  }, 200);
  setTimeout(function () {
    document.body.classList.add('hide-after');
  }, 400);
});
// EXTERNAL MODULE: ./src/content/css/main.css
var main = __webpack_require__(133);

// EXTERNAL MODULE: ./src/content/scss/main.scss
var scss_main = __webpack_require__(135);

// CONCATENATED MODULE: ./src/index.js




if (false) {}

/***/ })

/******/ });