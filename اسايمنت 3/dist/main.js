/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n    font-family: Arial, sans-serif;\r\n    text-align: center;\r\n    background-color: #f4f4f4;\r\n    margin: 0;\r\n    padding: 0;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100vh;\r\n}\r\n\r\n.main-container {\r\n    background: rgb(248, 81, 81);\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);\r\n    width: 600px;\r\n    color: white;\r\n}\r\n\r\n.timer-container {\r\n    font-size: 48px;\r\n    font-weight: bold;\r\n    margin: 20px 0;\r\n    color:white;\r\n}\r\n\r\n.control-container button {\r\n    margin: 5px;\r\n    padding: 10px 15px;\r\n    font-size: 16px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    transition:  0.3s;\r\n    font-weight: 400;\r\n}\r\n\r\n#start-btn,#pause-btn,#reset-btn,#work-btn,#short-btn,#long-btn  {\r\n    background: rgb(248, 141, 141);\r\n    color: white;\r\n}\r\n\r\n.control-container button:hover {\r\n    opacity: 0.8;\r\n}\r\n\r\n.settings-container {\r\n    margin-top: 20px;\r\n}\r\n\r\n.settings-container label {\r\n    display: block;\r\n    margin-top: 10px;\r\n    font-size: 18px;\r\n    font-weight: 400;\r\n}\r\n\r\n.settings-container input {\r\n    width: 50px;\r\n    text-align: center;\r\n    padding: 5px;\r\n    font-size: 16px;\r\n\r\n}\r\n.mode-container{\r\n    display: flex;\r\n    justify-content: center;\r\n\r\n}\r\n.mode-container button:hover {\r\n    opacity: 0.8;\r\n}\r\n.mode-container button{\r\n    margin: 5px;\r\n    padding: 10px 8px;\r\n    font-size: 16px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    transition:  0.3s;\r\n    font-weight: 400;\r\n\r\n}\r\n.grid-container{\r\n    display: grid;\r\n    grid-template-columns: 50% 50%;\r\n    grid-template-rows: 100%;\r\n}\r\n.col-2{\r\n    border: solid white 4px;\r\n    padding: 10px;\r\n    border-radius: 10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center ;\r\n\r\n}\r\n#add-btn{\r\n    background: rgb(248, 141, 141);\r\n    color: white;\r\n    padding: 10px 8px;\r\n    font-size: 16px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    transition:  0.3s;\r\n    font-weight: 400;\r\n    width: 100%;\r\n\r\n}\r\n.task-inputs{\r\n    border-radius: 5px;\r\n    border: none;\r\n    margin:5px;\r\n    font-size: 20px;\r\n}\r\nprogress {\r\n    width: 80%;\r\n    height: 10px;\r\n    margin-top: 10px;\r\n    border-radius: 5px;\r\n    overflow: hidden;\r\n}\r\n\r\nprogress::-webkit-progress-bar {\r\n    background-color: rgb(226, 226, 226);\r\n    border-radius: 5px;\r\n}\r\n\r\nprogress::-webkit-progress-value {\r\n    background-color: rgb(255, 255, 255);\r\n    border-radius: 5px;\r\n}\r\n\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://pomdoro-timer/./src/style.css?./node_modules/css-loader/dist/cjs.js");

    /***/ }),
    
    /***/ "./node_modules/css-loader/dist/runtime/api.js":
    /*!*****************************************************!*\
      !*** ./node_modules/css-loader/dist/runtime/api.js ***!
      \*****************************************************/
    /***/ ((module) => {
    
    eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://pomdoro-timer/./node_modules/css-loader/dist/runtime/api.js?");
    
    /***/ }),
    
    /***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
    /*!**************************************************************!*\
      !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
      \**************************************************************/
    /***/ ((module) => {
    
    eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://pomdoro-timer/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");
    
    /***/ }),
    
    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
    /*!****************************************************************************!*\
      !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
      \****************************************************************************/
    /***/ ((module) => {
    
    eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://pomdoro-timer/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");
    
    /***/ }),
    
    /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
    /*!********************************************************************!*\
      !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
      \********************************************************************/
    /***/ ((module) => {
    
    eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://pomdoro-timer/./node_modules/style-loader/dist/runtime/insertBySelector.js?");
    
    /***/ }),
    
    /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
    /*!**********************************************************************!*\
      !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
      \**********************************************************************/
    /***/ ((module) => {
    
    eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://pomdoro-timer/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");
    
    /***/ }),
    
    /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
    /*!**********************************************************************************!*\
      !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
      \**********************************************************************************/
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
    
    eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://pomdoro-timer/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");
    
    /***/ }),
    
    /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
    /*!***************************************************************!*\
      !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
      \***************************************************************/
    /***/ ((module) => {
    
    eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://pomdoro-timer/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");
    
    /***/ }),
    
    /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
    /*!*********************************************************************!*\
      !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
      \*********************************************************************/
    /***/ ((module) => {
    
    eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://pomdoro-timer/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");
    
    /***/ }),
    
    /***/ "./src/alert.mp3":
    /*!***********************!*\
      !*** ./src/alert.mp3 ***!
      \***********************/
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
    
    eval("module.exports = __webpack_require__.p + \"assets/sounds/alert.mp3\";\n\n//# sourceURL=webpack://pomdoro-timer/./src/alert.mp3?");
    
    /***/ }),
    
    /***/ "./src/index.js":
    /*!**********************!*\
      !*** ./src/index.js ***!
      \**********************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer.js */ \"./src/timer.js\");\n/* harmony import */ var _notifications_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notifications.js */ \"./src/notifications.js\");\n/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.js */ \"./src/settings.js\");\n/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui.js */ \"./src/ui.js\");\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://pomdoro-timer/./src/index.js?");
    
    /***/ }),
    
    /***/ "./src/notifications.js":
    /*!******************************!*\
      !*** ./src/notifications.js ***!
      \******************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   alarmSound: () => (/* binding */ alarmSound)\n/* harmony export */ });\n/*File for alarm sound*/\r\n\r\n//used require so that webpack can track the right path\r\nconst alarmSound=()=> {\r\n    const sound = new Audio(__webpack_require__(/*! ./alert.mp3 */ \"./src/alert.mp3\")); \r\n    sound.play();\r\n}\r\n\n\n//# sourceURL=webpack://pomdoro-timer/./src/notifications.js?");
    
    /***/ }),
    
    /***/ "./src/settings.js":
    /*!*************************!*\
      !*** ./src/settings.js ***!
      \*************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getBreakDuration: () => (/* binding */ getBreakDuration),\n/* harmony export */   getLongBreakDuration: () => (/* binding */ getLongBreakDuration),\n/* harmony export */   getWorkDuration: () => (/* binding */ getWorkDuration),\n/* harmony export */   setBreakDuration: () => (/* binding */ setBreakDuration),\n/* harmony export */   setLongBreakDuration: () => (/* binding */ setLongBreakDuration),\n/* harmony export */   setWorkDuration: () => (/* binding */ setWorkDuration)\n/* harmony export */ });\n/*File for user prefrences, where if the user updates a filed and refreshes the page the value that they want will be \r\nStored and called from the local storage*/\r\n\r\n//for user prefrences, I used localStorage so when the user refresh the page, info will still be there\r\nconst getWorkDuration=()=> {\r\n    return parseInt(localStorage.getItem(\"workDuration\")) || 25;\r\n}\r\n\r\nconst getBreakDuration=()=> {\r\n    return parseInt(localStorage.getItem(\"breakDuration\")) || 5;\r\n}\r\n\r\nconst getLongBreakDuration=()=> {\r\n    return parseInt(localStorage.getItem(\"longBreakDuration\")) || 15;\r\n}\r\n\r\n//some additional value validation here (extra testing)\r\nconst setWorkDuration=(value)=> {\r\n    if (value >= 1) {\r\n        localStorage.setItem(\"workDuration\", value);\r\n    }\r\n\r\n}\r\n\r\nconst setBreakDuration=(value)=> {  \r\n    if (value >= 1 ) {\r\n        localStorage.setItem(\"breakDuration\", value);\r\n    }\r\n}\r\n\r\nconst setLongBreakDuration=(value)=> {\r\n    if (value >= 1) {\r\n        localStorage.setItem(\"longBreakDuration\", value);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://pomdoro-timer/./src/settings.js?");
    
    /***/ }),
    
    /***/ "./src/style.css":
    /*!***********************!*\
      !*** ./src/style.css ***!
      \***********************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://pomdoro-timer/./src/style.css?");
    
    /***/ }),
    
    /***/ "./src/timer.js":
    /*!**********************!*\
      !*** ./src/timer.js ***!
      \**********************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changeMode: () => (/* binding */ changeMode),\n/* harmony export */   pauseTimer: () => (/* binding */ pauseTimer),\n/* harmony export */   resetTimer: () => (/* binding */ resetTimer),\n/* harmony export */   sessionState: () => (/* binding */ sessionState),\n/* harmony export */   setDurations: () => (/* binding */ setDurations),\n/* harmony export */   startTimer: () => (/* binding */ startTimer)\n/* harmony export */ });\n/* File for timer implementation */\r\n\r\n//some variables needed to make the tiemr work\r\nlet timer;\r\nlet isRunning = false;\r\n//I needed to export the variables, but I had an error, so with some reseach I found that putting them in an object fixed it\r\nconst sessionState = {\r\n    isWorkSession: true,\r\n    isBreak: false,\r\n    isLongBreak: false,\r\n};\r\n//default time durations\r\nlet workDuration = 25 * 60;\r\nlet breakDuration = 5 * 60;\r\nlet longBreakDuration = 15 * 60;\r\nlet timeLeft = workDuration;\r\nvar sessionCounter = 0;\r\n//initial time is for the progress bar fucntionlity\r\nlet initialTime;\r\n\r\n//used setInterval to run every 1000ms (1s) and update ui every second, move between modes, and end sessions\r\nconst startTimer=(updateUI, switchMode, playSound)=> {\r\n    initialTime=timeLeft;\r\n    if (!isRunning) {\r\n        isRunning = true;\r\n        timer = setInterval(() => {\r\n            if (timeLeft > 0) {\r\n                timeLeft--;\r\n                updateUI(timeLeft,initialTime);\r\n            } \r\n            else {\r\n                clearInterval(timer);\r\n                playSound();\r\n            if (sessionState.isWorkSession) {\r\n                    sessionCounter++;\r\n                    sessionState.isBreak=true;\r\n                    sessionState.isLongBreak=false;\r\n                    sessionState.isWorkSession=false; \r\n                    timeLeft=breakDuration;                   \r\n                    switchMode(!sessionState.isBreak);\r\n\r\n                }\r\n\r\n            else if(sessionState.isBreak) \r\n                {\r\n                sessionState.isBreak=false;\r\n                sessionState.isLongBreak=false;\r\n                sessionState.isWorkSession=true;\r\n                timeLeft=workDuration; \r\n                switchMode(sessionState.isWorkSession);\r\n                 \r\n\r\n                }    \r\n            if (sessionCounter % 4 === 0) {\r\n                sessionState.isLongBreak=true;\r\n                sessionState.isBreak=false;\r\n                sessionState.isWorkSession=false;                  \r\n                timeLeft=longBreakDuration;\r\n                switchMode(!sessionState.isLongBreak);\r\n                } \r\n\r\n                updateUI(timeLeft);\r\n                isRunning = false; \r\n            }\r\n        }, 1000);\r\n\r\n    }\r\n}\r\n\r\n\r\n//pause stops the interval\r\nconst pauseTimer=()=> {\r\n    clearInterval(timer);\r\n    isRunning = false;\r\n}\r\n\r\n//reset is mode specific, without that it will be always resting to a specific number ( we don't want that)\r\nconst resetTimer=(updateUI)=> {\r\n    clearInterval(timer);\r\n    isRunning = false;\r\n    if(sessionState.isWorkSession){\r\n        updateUI(workDuration)\r\n    }\r\n    else if(sessionState.isBreak)\r\n    {\r\n        updateUI(breakDuration)\r\n    }\r\n    else if(sessionState.isLongBreak)\r\n    {\r\n        updateUI(longBreakDuration)\r\n    }\r\n\r\n}\r\n\r\n//update the duration, the values are passed from the input whenever it is updated\r\nconst setDurations=(work, shortBreak, longBreak)=> {\r\n    workDuration = work * 60;\r\n    breakDuration = shortBreak * 60;\r\n    longBreakDuration = longBreak * 60;\r\n    \r\n    if (!isRunning) {\r\n        if(sessionState.isWorkSession){\r\n            timeLeft=workDuration;\r\n        }\r\n        else if(sessionState.isBreak){\r\n            timeLeft=breakDuration;\r\n        }        \r\n        else if(sessionState.isLongBreak){\r\n            timeLeft=longBreakDuration;\r\n        }\r\n    }\r\n    else if (isRunning){\r\n        pauseTimer();\r\n        if(sessionState.isWorkSession){\r\n            timeLeft=workDuration;\r\n        }\r\n        else if(sessionState.isBreak){\r\n            timeLeft=breakDuration;\r\n        }        \r\n        else if(sessionState.isLongBreak){\r\n            timeLeft=longBreakDuration;\r\n        }\r\n    }\r\n    }\r\n\r\n\r\n    //change between modes using buttons\r\nconst changeMode=(mode,updateUI,switchMode)=>{\r\n    if(mode===\"work\"){\r\n        sessionState.isWorkSession = true;\r\n        sessionState.isBreak=false;\r\n        isRunning=false;\r\n        sessionState.isLongBreak=false;\r\n        timeLeft=workDuration;\r\n        updateUI(timeLeft);\r\n        switchMode(true);\r\n        clearInterval(timer);\r\n    }\r\n    else if(mode===\"short\"){\r\n        sessionState.isWorkSession = false;\r\n        sessionState.isBreak=true;\r\n        isRunning=false;\r\n        sessionState.isLongBreak=false;\r\n        timeLeft=breakDuration;\r\n        updateUI(timeLeft);\r\n        switchMode(false);\r\n        clearInterval(timer);\r\n    }    \r\n    else if(mode===\"long\"){\r\n        sessionState.isWorkSession = false;\r\n        sessionState.isBreak=false;\r\n        isRunning=false;\r\n        sessionState.isLongBreak=true;\r\n        timeLeft=longBreakDuration;\r\n        updateUI(timeLeft);\r\n        switchMode(false);\r\n        clearInterval(timer);\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://pomdoro-timer/./src/timer.js?");
    
    /***/ }),
    
    /***/ "./src/ui.js":
    /*!*******************!*\
      !*** ./src/ui.js ***!
      \*******************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changeColor: () => (/* binding */ changeColor),\n/* harmony export */   updateTimer: () => (/* binding */ updateTimer)\n/* harmony export */ });\n/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer.js */ \"./src/timer.js\");\n/* harmony import */ var _notifications_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.js */ \"./src/notifications.js\");\n/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.js */ \"./src/settings.js\");\n/*File for UI and other functions that are not directly related to the alarm functionality */\r\n\r\n\r\n\r\n/* Poiting to all neded UI components */\r\nconst minutesCount = document.getElementById('minutes');\r\nconst secondsCount = document.getElementById('seconds');\r\nconst startButton = document.getElementById('start-btn');\r\nconst pauseButton = document.getElementById('pause-btn');\r\nconst resetButton = document.getElementById('reset-btn');\r\nconst workInput = document.getElementById('work-duration');\r\nconst breakInput = document.getElementById('break-duration');\r\nconst longBreakInput = document.getElementById('long-break-duration');\r\nconst workButton=document.getElementById('work-btn');\r\nconst shortButton=document.getElementById('short-btn');\r\nconst longButton=document.getElementById('long-btn');\r\nconst tasks=document.getElementById(\"tasks-container\");\r\nconst addButton=document.getElementById(\"add-btn\");\r\nconst progressBar=document.getElementById(\"progress-bar\")\r\nlet currentMode=\"work\";\r\n\r\n//update the visual of the timer every second\r\nconst updateTimer=(time,startTime)=> {\r\n    const minutes = Math.floor(time / 60);\r\n    const seconds = time % 60;\r\n    minutesCount.textContent = String(minutes).padStart(2, '0');\r\n    secondsCount.textContent = String(seconds).padStart(2, '0');\r\n    const progress = (time / startTime) * 100;\r\n    progressBar.setAttribute(\"value\",progress) \r\n\r\n}\r\n//a function to maintain colors between mulitple modes\r\nconst changeColor=(isWorkSession)=> {\r\n    const mainContainer = document.querySelector(\".main-container\");\r\n    mainContainer.style.backgroundColor = isWorkSession ? \"rgb(248, 81, 81)\" : \"#1ba2ff\";\r\n    startButton.style.backgroundColor = isWorkSession ? \"rgb(248, 141, 141)\" : \"#67c1ff\";\r\n    pauseButton.style.backgroundColor = isWorkSession ? \"rgb(248, 141, 141)\" : \"#67c1ff\";\r\n    resetButton.style.backgroundColor = isWorkSession ? \"rgb(248, 141, 141)\" : \"#67c1ff\";\r\n    workButton.style.backgroundColor = isWorkSession ? \"rgb(248, 141, 141)\" : \"#67c1ff\";\r\n    shortButton.style.backgroundColor = isWorkSession ? \"rgb(248, 141, 141)\" : \"#67c1ff\";\r\n    longButton.style.backgroundColor = isWorkSession ? \"rgb(248, 141, 141)\" : \"#67c1ff\";\r\n    addButton.style.backgroundColor = isWorkSession ? \"rgb(248, 141, 141)\" : \"#67c1ff\";\r\n\r\n}\r\n\r\n//implementing buttons functionality\r\nstartButton.addEventListener('click', () => (0,_timer_js__WEBPACK_IMPORTED_MODULE_0__.startTimer)(updateTimer, changeColor, _notifications_js__WEBPACK_IMPORTED_MODULE_1__.alarmSound));\r\npauseButton.addEventListener('click', _timer_js__WEBPACK_IMPORTED_MODULE_0__.pauseTimer);\r\nresetButton.addEventListener('click', () => (0,_timer_js__WEBPACK_IMPORTED_MODULE_0__.resetTimer)(updateTimer));\r\n//diffrenciated between modes, this will help in the timer logic, updating time and reseting\r\nworkButton.addEventListener('click',()=>{(0,_timer_js__WEBPACK_IMPORTED_MODULE_0__.changeMode)(\"work\",updateTimer,changeColor)\r\n    currentMode=\"work\"\r\n    _timer_js__WEBPACK_IMPORTED_MODULE_0__.sessionState.isWorkSession=true;\r\n    _timer_js__WEBPACK_IMPORTED_MODULE_0__.sessionState.isBreak=false;\r\n    _timer_js__WEBPACK_IMPORTED_MODULE_0__.sessionState.isLongBreak=false;\r\n})\r\nshortButton.addEventListener('click',()=>{;(0,_timer_js__WEBPACK_IMPORTED_MODULE_0__.changeMode)(\"short\",updateTimer,changeColor)\r\n    currentMode=\"short\"\r\n    _timer_js__WEBPACK_IMPORTED_MODULE_0__.sessionState.isBreak=true;\r\n    _timer_js__WEBPACK_IMPORTED_MODULE_0__.sessionState.isLongBreak=false;\r\n    _timer_js__WEBPACK_IMPORTED_MODULE_0__.sessionState.isWorkSession=false;\r\n\r\n})\r\nlongButton.addEventListener('click',()=>{;(0,_timer_js__WEBPACK_IMPORTED_MODULE_0__.changeMode)(\"long\",updateTimer,changeColor)\r\n    currentMode=\"long\"\r\n    _timer_js__WEBPACK_IMPORTED_MODULE_0__.sessionState.isBreak=false;\r\n    _timer_js__WEBPACK_IMPORTED_MODULE_0__.sessionState.isLongBreak=true;\r\n    _timer_js__WEBPACK_IMPORTED_MODULE_0__.sessionState.isWorkSession=false;\r\n})\r\n\r\n//task adding, when ever a user clicks the add button a task will be added and they can modify the name of it\r\naddButton.addEventListener('click',()=>{\r\n    const newTask=document.createElement(\"input\")\r\n    const checkBox=document.createElement(\"input\")\r\n    const doneSpan=document.createElement(\"span\")\r\n    tasks.append(newTask);\r\n    tasks.append(checkBox);\r\n    tasks.append(doneSpan);\r\n    newTask.classList.add(\"task-inputs\");\r\n    checkBox.setAttribute(\"type\",\"checkBox\")\r\n    doneSpan.textContent=\"Done?\"\r\n})\r\n\r\n//when the document loads take the values of each duration and send them to the timer\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    workInput.value = (0,_settings_js__WEBPACK_IMPORTED_MODULE_2__.getWorkDuration)();\r\n    breakInput.value = (0,_settings_js__WEBPACK_IMPORTED_MODULE_2__.getBreakDuration)();\r\n    longBreakInput.value = (0,_settings_js__WEBPACK_IMPORTED_MODULE_2__.getLongBreakDuration)();\r\n\r\n    (0,_timer_js__WEBPACK_IMPORTED_MODULE_0__.setDurations)((0,_settings_js__WEBPACK_IMPORTED_MODULE_2__.getWorkDuration)(), (0,_settings_js__WEBPACK_IMPORTED_MODULE_2__.getBreakDuration)(), (0,_settings_js__WEBPACK_IMPORTED_MODULE_2__.getLongBreakDuration)());\r\n    updateTimer(workInput.value*60)\r\n\r\n\r\n});\r\n//when inputs are modified values are also modified, it is mode specific, so that if I edit in a mode it does not affect other modes\r\nworkInput.addEventListener('input', () => {\r\n    validateInput(workInput);\r\n    (0,_settings_js__WEBPACK_IMPORTED_MODULE_2__.setWorkDuration)(workInput.value);\r\n    (0,_timer_js__WEBPACK_IMPORTED_MODULE_0__.setDurations)(workInput.value, breakInput.value, longBreakInput.value);\r\n    if(currentMode===\"work\"){\r\n        updateTimer(workInput.value*60)\r\n\r\n    }\r\n});\r\n\r\nbreakInput.addEventListener('input', () => {\r\n    validateInput(breakInput);\r\n    (0,_settings_js__WEBPACK_IMPORTED_MODULE_2__.setBreakDuration)(breakInput.value);\r\n    (0,_timer_js__WEBPACK_IMPORTED_MODULE_0__.setDurations)(workInput.value, breakInput.value, longBreakInput.value);\r\n    if(currentMode===\"short\"){\r\n        updateTimer(breakInput.value*60)\r\n\r\n    }\r\n\r\n\r\n});\r\n\r\nlongBreakInput.addEventListener('input', () => {\r\n    validateInput(longBreakInput);\r\n    (0,_settings_js__WEBPACK_IMPORTED_MODULE_2__.setLongBreakDuration)(longBreakInput.value);\r\n    (0,_timer_js__WEBPACK_IMPORTED_MODULE_0__.setDurations)(workInput.value, breakInput.value, longBreakInput.value);\r\n    if(currentMode===\"long\"){\r\n        updateTimer(longBreakInput.value*60)\r\n\r\n    }\r\n\r\n});\r\n\r\n//validation previting negative,empty,and non numeric values\r\nconst validateInput=(userInput)=> {\r\n    userInput.value = userInput.value.replace(/\\D/g, '');//regular exp, replace anything that is not a number with ''\r\n    if (userInput.value === \"\" || parseInt(userInput.value) < 1) {\r\n        userInput.value = 1; \r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://pomdoro-timer/./src/ui.js?");
    
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
    /******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
    /******/ 				scriptUrl = document.currentScript.src;
    /******/ 			if (!scriptUrl) {
    /******/ 				var scripts = document.getElementsByTagName("script");
    /******/ 				if(scripts.length) {
    /******/ 					var i = scripts.length - 1;
    /******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
    /******/ 				}
    /******/ 			}
    /******/ 		}
    /******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
    /******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
    /******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
    /******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
    /******/ 		__webpack_require__.p = scriptUrl;
    /******/ 	})();
    /******/ 	
    /******/ 	/* webpack/runtime/nonce */
    /******/ 	(() => {
    /******/ 		__webpack_require__.nc = undefined;
    /******/ 	})();
    /******/ 	
    /************************************************************************/
    /******/ 	
    /******/ 	// startup
    /******/ 	// Load entry module and return exports
    /******/ 	// This entry module can't be inlined because the eval devtool is used.
    /******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
    /******/ 	
    /******/ })()
    ;