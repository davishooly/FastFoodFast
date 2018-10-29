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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/create_fooditem.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/create_fooditem.js":
/*!********************************!*\
  !*** ./src/create_fooditem.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var add_food = document.querySelector(\"#add_food\");\nadd_food.addEventListener(\"submit\", function (event) {\n  event.preventDefault();\n  var name = document.querySelector(\"#name\").value;\n  var description = document.querySelector(\"#description\").value;\n  var path = document.querySelector(\"#image\").files[0].name;\n  var price = document.querySelector(\"#price\").value;\n  var token = window.localStorage.getItem(\"token\");\n  console.log(path);\n  fetch(\"https://fasty-v2.herokuapp.com/api/v2/menu\", {\n    method: \"POST\",\n    headers: {\n      \"Content-Type\": \"application/json\",\n      Authorization: \"Bearer \".concat(token),\n      'Access-Control-Allow-Origin': '*'\n    },\n    body: JSON.stringify({\n      name: name,\n      description: description,\n      path: path,\n      price: price\n    })\n  }).then(function (response) {\n    return response.json();\n  }).then(function (data) {\n    console.log(data);\n    var message = data.message;\n\n    if (message === \"foodname must be a string\") {\n      document.querySelector('.message').innerHTML = \"Enter valid food name\";\n      document.querySelector('.message').style.color = 'red';\n    }\n\n    if (message === \"description must contain alphanumeric characters only\") {\n      document.querySelector(\".desc\").innerHTML = \"description must contain alphanumeric characters only\";\n      document.querySelector('.desc').style.color = 'red';\n    }\n\n    if (message === \"food item already exists\") {\n      document.querySelector(\".created\").innerHTML = \"foodname already exists\";\n      document.querySelector('.created').style.color = 'red';\n    }\n\n    if (message === \"Food item created successfully\") {\n      document.querySelector(\".created\").innerHTML = \"Food item created successfully\";\n      document.querySelector('.created').style.color = 'green';\n      setTimeout(function () {\n        location.reload();\n      }, 2000);\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/create_fooditem.js?");

/***/ })

/******/ });