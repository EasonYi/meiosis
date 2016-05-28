(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ReactDOM"));
	else if(typeof define === 'function' && define.amd)
		define(["ReactDOM"], factory);
	else if(typeof exports === 'object')
		exports["meiosisReact"] = factory(require("ReactDOM"));
	else
		root["meiosisReact"] = factory(root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(1));


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var react_dom_1 = __webpack_require__(2);
	var meiosis_render_1 = __webpack_require__(3);
	function renderIntoElement(element) {
	    return function (view) {
	        react_dom_1.render(view, element);
	    };
	}
	var renderer = meiosis_render_1.meiosisRender(renderIntoElement);
	exports.renderer = renderer;


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(4));
	//# sourceMappingURL=index.js.map

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	function meiosisRender(renderIntoElement) {
	    var renderIntoId = function (id) {
	        return renderIntoElement(document.getElementById(id));
	    };
	    var renderIntoSelector = function (selector) {
	        return renderIntoElement(document.querySelector(selector));
	    };
	    var intoElement = function (element) {
	        return ({ render: renderIntoElement(element) });
	    };
	    var intoId = function (id) {
	        return ({ render: renderIntoId(id) });
	    };
	    var intoSelector = function (selector) {
	        return ({ render: renderIntoSelector(selector) });
	    };
	    return {
	        renderIntoElement: renderIntoElement,
	        renderIntoId: renderIntoId,
	        renderIntoSelector: renderIntoSelector,
	        intoElement: intoElement,
	        intoId: intoId,
	        intoSelector: intoSelector
	    };
	}
	exports.meiosisRender = meiosisRender;
	//# sourceMappingURL=meiosis-render.js.map

/***/ }
/******/ ])
});
;
//# sourceMappingURL=meiosis-react.js.map