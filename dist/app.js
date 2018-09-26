/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/cacl/cacl.js":
/*!**************************!*\
  !*** ./src/cacl/cacl.js ***!
  \**************************/
/*! exports provided: default, a, can, to, when, an, from */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CACL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"can\", function() { return can; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"to\", function() { return to; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"when\", function() { return when; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"an\", function() { return a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"from\", function() { return to; });\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n// creating ACL General Class\nvar gACL = function gACL() {\n  _classCallCheck(this, gACL);\n\n  //  console.log('gACL Constructor');\n  this.role = '';\n  this.permission = [];\n  this.urls = {};\n  this.conditions = [];\n};\n\nvar CACL =\n/*#__PURE__*/\nfunction (_gACL) {\n  _inherits(CACL, _gACL);\n\n  function CACL() {\n    var _this;\n\n    _classCallCheck(this, CACL);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(CACL).call(this)); // console.log('CACL Constructor');\n\n    _this.role = 'MainAdmin';\n    _this.permission = [];\n    _this.urls = [\"all\"];\n    _this.conditions = [{\n      \"when\": \"nothing\"\n    }];\n    return _this;\n  }\n\n  _createClass(CACL, [{\n    key: \"createRole\",\n    value: function createRole(passedRol) {\n      this.role = passedRol;\n      return this.role;\n    }\n  }, {\n    key: \"updateRole\",\n    value: function updateRole() {\n      console.log(\"Here\");\n    }\n  }]);\n\n  return CACL;\n}(gACL); // Calling functions\n\n\n\nfunction a(arg) {\n  CACL.role = arg;\n  return this;\n}\nfunction can(arg) {\n  //CACL.permission.push(arg);\n  console.log(CACL.permission);\n  return CACL.permission;\n}\nfunction to(arg) {\n  this.urls.push(arg);\n  console.log(arg);\n}\nfunction when(key, value) {\n  console.log(key, value);\n} // Exporting Aliases\n\n\n\n\n//# sourceURL=webpack:///./src/cacl/cacl.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cacl_cacl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cacl/cacl.js */ \"./src/cacl/cacl.js\");\n\n\n\nvar acl = new _cacl_cacl_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconsole.log(acl.permission);\nObject(_cacl_cacl_js__WEBPACK_IMPORTED_MODULE_0__[\"can\"])(\"post\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });