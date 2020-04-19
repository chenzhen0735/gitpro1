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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_cyztest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/cyztest */ \"./src/cyztest.js\");\n/* harmony import */ var _src_cyztest__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_cyztest__WEBPACK_IMPORTED_MODULE_0__);\n// import test from \"./src/test\"\r\n// import \"./src/const\"\r\n// import \"./src/scope\"\r\n// import \"./src/arrow-function\"\r\n// import \"./src/parameter\"\r\n// import \"./src/proxy\"\r\n// test()\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./src/cyztest.js":
/*!************************!*\
  !*** ./src/cyztest.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// //ES3,ES5中 函数的写法\r\n// {\r\n//     var factory = function () {\r\n//         this.a = \"a\";\r\n//         this.b = {\r\n//             a: \"a+\",\r\n//             c: function () {\r\n//                 return this.a;\r\n//             }\r\n//         }\r\n//     }\r\n//     console.log(new factory().b.c())\r\n// }\r\n\r\n// //Es6中的写法\r\n// {\r\n//     var factory = function () {\r\n//         this.a = \"a\";\r\n//         this.b = {\r\n//             a: \"a+\",\r\n//             c: () => {\r\n//                 return this.a;\r\n//             }\r\n//         }\r\n//     }\r\n//     console.log(new factory().b.c())\r\n// }\r\n// //== 和 ====\r\n// {\r\n//     console.log(1 === \"1\")\r\n// }\r\n\r\n\r\n// //ES6中必填参数的判断和处理\r\n// {\r\n//     function check(x) {\r\n//         if (x === undefined) {\r\n//             throw new Error(\"参数必填\");\r\n//         }\r\n//     }\r\n//     function f(x = check(x), y = 1) {\r\n//         return x + y;\r\n//     }\r\n//     try {\r\n//         console.log(f());\r\n//     } catch (e) {\r\n//         console.log(e)\r\n//     }\r\n// }\r\n\r\n// //ES3,ES5中 可变参数的处理\r\n// {\r\n//     function func() {\r\n//         var a = Array.prototype.slice.call(arguments);\r\n//         var sum = 0;\r\n//         a.forEach(function (item) {\r\n//             sum += item;\r\n//         })\r\n//         return sum;\r\n//     }\r\n//     console.log(func(1, 2, 3))\r\n// }\r\n// //ES6 中可变参数\r\n// {\r\n//     function func(...a) {\r\n//         var sum = 0;\r\n//         a.forEach(item => { sum += item });\r\n//         return sum;\r\n//     }\r\n//     console.log(func(1, 2, 3))\r\n// }\r\n\r\n// //ES5中 数组合并\r\n// {\r\n//     var arr1 = [1, 2];\r\n//     var arr2 = [3, 4];\r\n//     console.log(arr1.concat(arr2));\r\n// }\r\n// //ES6 中数组合并\r\n// {\r\n//     let arr1 = [1, 2];\r\n//     let arr2 = [...arr1, 3, 4];\r\n//     console.log(arr2)\r\n\r\n// }\r\n\r\n\r\n// //ES3 数据保护\r\n// {\r\n//     var Person = function () {\r\n//         var arr = {\r\n//             name: \"zhangsan\",\r\n//             age: 15,\r\n//             sex: \"male\"\r\n//         };\r\n//         this.get = function (key) {\r\n//             return arr[key];\r\n//         }\r\n//         this.set = function (key, value) {\r\n//             if (key != \"sex\") {\r\n//                 arr[key] = value;\r\n//             }\r\n//         }\r\n//     }\r\n//     var person = new Person();\r\n//     person.set(\"sex\", \"femal\");\r\n//     console.table(\r\n//         { \"name\": person.get(\"name\"), \"age\": person.get(\"age\"), \"sex\": person.get(\"sex\") }\r\n//     );\r\n// }\r\n// //ES5\r\n// {\r\n//     var Person = {\r\n//         name:\"zhangsan\",\r\n//         age:15\r\n//     }\r\n//     Object.defineProperty(Person,\"sex\",{\r\n//         value:\"male\",\r\n//         writable:false\r\n//     })\r\n//     try{\r\n//         Person.name = \"new name\";\r\n//         console.table(\r\n//             { \"name\": Person.name, \"age\": Person.age, \"sex\": Person.sex }\r\n//         );\r\n//     }catch(e){\r\n\r\n//     }\r\n    \r\n// }\r\n//ES6 数据保护\r\n{\r\n    //使用代理\r\n    // let Person = {\r\n    //     name:\"张三\",\r\n    //     age:14,\r\n    //     sex:\"male\"\r\n    // };\r\n    \r\n    // let person = new Proxy( Person,{\r\n    //     get(target,key){\r\n    //         return target[key];\r\n    //     },\r\n    //     set(target,key,value){\r\n    //         if( key !== \"sex\" ){\r\n    //             target[key] = value;\r\n    //         }\r\n    //     }\r\n    // } );\r\n    let Person = {\r\n        name: 'es6',\r\n        sex: 'male',\r\n        age: 15\r\n      };\r\n    let person = new Proxy(Person, {\r\n        get(target, key) {\r\n          return target[key]\r\n        },\r\n        set(target,key,value){\r\n          if(key!=='sex'){\r\n            target[key]=value;\r\n          }\r\n          \r\n          return true;\r\n        }\r\n      });\r\n    person.name = \"sss\";\r\n    console.table(\r\n        {name:person.name,age:person.age,sex:person.sex}\r\n    );\r\n      alert(\"ddde\")\r\n}\n\n//# sourceURL=webpack:///./src/cyztest.js?");

/***/ })

/******/ });