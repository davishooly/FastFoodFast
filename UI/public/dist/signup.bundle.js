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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/signup.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/signup.js":
/*!***********************!*\
  !*** ./src/signup.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var signup = document.querySelector(\"#signup_form\");\nsignup.addEventListener(\"submit\", function (event) {\n  event.preventDefault(); //method prevents browser default actions/behavoiur\n\n  var username = document.querySelector(\"#username\").value;\n  var email = document.querySelector(\"#email\").value;\n  var password = document.querySelector(\"#password\").value;\n  var signup_url = \"https://fasty-v2.herokuapp.com/api/v2/auth/signup\";\n  fetch(signup_url, {\n    method: \"POST\",\n    headers: {\n      \"Content-Type\": \"application/json\"\n    },\n    body: JSON.stringify({\n      username: username,\n      email: email,\n      password: password\n    })\n  }).then(function (response) {\n    return response.json();\n  }) //.json() also returns a promise\n  .then(function (data) {\n    var message = data.message;\n    console.log(message);\n\n    if (data.message === \"username must be a string\") {\n      document.querySelector(\".message\").innerHTML = \"username must be a string\";\n      document.querySelector(\".message\").style.color = 'red';\n    }\n\n    if (data.message === \"enter valid email\") {\n      document.querySelector(\".message\").innerHTML = \"Enter valid email\";\n      document.querySelector(\".message\").style.color = 'red';\n    }\n\n    if (data.message === \"password should start with a capital letter and include a number\") {\n      document.querySelector(\".message\").innerHTML = \"password should start with a capital letter and must include a number\";\n      document.querySelector(\".message\").style.color = 'red';\n    }\n\n    if (data.message === \"user \".concat(username, \" already exists\")) {\n      document.querySelector(\".message\").innerHTML = \"user with username  \".concat(username, \" already exists\");\n      document.querySelector(\".message\").style.color = 'red';\n    }\n\n    if (data.message === \"user with \".concat(email, \" already exists\")) {\n      document.querySelector(\".message\").innerHTML = \"email \".concat(email, \" already exists\");\n      document.querySelector(\".message\").style.color = 'red';\n    }\n\n    if (data.message === \"user \".concat(username, \" created successfully\")) {\n      document.querySelector(\".message\").innerHTML = \"Account for \".concat(username, \" created sucessfully\");\n      document.querySelector(\".message\").style.color = 'green';\n      window.location.assign(\"login.html\");\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/signup.js?");

/***/ })

/******/ });