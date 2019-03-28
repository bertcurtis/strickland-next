module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ ({

/***/ "./components/CommonLayout.js":
/*!************************************!*\
  !*** ./components/CommonLayout.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-server/head */ "next-server/head");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/bertcurtis/strickland-next/components/CommonLayout.js";





var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1411209644",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-1411209644",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-1411209644",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1411209644" + " " + 'main',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, props.children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1411209644",
    __self: this
  }, "body{font:13px menlo;margin:0;padding:0;}.main{margin-top:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZXJ0Y3VydGlzL3N0cmlja2xhbmQtbmV4dC9jb21wb25lbnRzL0NvbW1vbkxheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhMkIsQUFHNkIsQUFLQSxnQkFKUCxBQUtiLFNBSmMsVUFDZCIsImZpbGUiOiIvVXNlcnMvYmVydGN1cnRpcy9zdHJpY2tsYW5kLW5leHQvY29tcG9uZW50cy9Db21tb25MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IChcbiAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT57cHJvcHMudGl0bGV9PC90aXRsZT5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluJz4gICBcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgIGJvZHkgeyBcbiAgICAgICAgICAgIGZvbnQ6IDEzcHggbWVubG87XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5tYWluIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPiAgICAgXG4gICAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IExheW91dCJdfQ== */\n/*@ sourceURL=/Users/bertcurtis/strickland-next/components/CommonLayout.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Link */ "./components/Link.js");
/* harmony import */ var _img_strickland_home_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/strickland-home.jpg */ "./img/strickland-home.jpg");
/* harmony import */ var _img_strickland_home_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_strickland_home_jpg__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/bertcurtis/strickland-next/components/Header.js";





function navProps() {
  return [{
    href: '/',
    text: 'Home',
    align: 'left'
  }, {
    href: '/about',
    text: 'About',
    align: 'right'
  }, {
    href: '/inventory',
    text: 'Inventory',
    align: 'right'
  }, {
    href: '/contact',
    text: 'Contact Us',
    align: 'right'
  }];
}

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["842115812", [_img_strickland_home_jpg__WEBPACK_IMPORTED_MODULE_3___default.a]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["842115812", [_img_strickland_home_jpg__WEBPACK_IMPORTED_MODULE_3___default.a]]]) + " " + "topnav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, navProps().map(function (navProp) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: "".concat(navProp.text, "-li"),
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["842115812", [_img_strickland_home_jpg__WEBPACK_IMPORTED_MODULE_3___default.a]]]) + " " + ((navProp.align == 'left' ? 'left' : null) || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["842115812", [_img_strickland_home_jpg__WEBPACK_IMPORTED_MODULE_3___default.a]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: navProp.text,
      activeClassName: "active",
      href: navProp.href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["842115812", [_img_strickland_home_jpg__WEBPACK_IMPORTED_MODULE_3___default.a]]]) + " " + ((navProp.align == 'left' ? 'home-img' : 'nav-link') || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, navProp.text == 'Home' ? null : navProp.text))));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "842115812",
    dynamic: [_img_strickland_home_jpg__WEBPACK_IMPORTED_MODULE_3___default.a],
    __self: this
  }, ".active.__jsx-style-dynamic-selector{background-color:#0000FF;}.nav-link.__jsx-style-dynamic-selector{-webkit-text-decoration:none;text-decoration:none;display:grid;color:white;text-align:center;padding:14px 16px;font-family:\"Menlo\";}.home-img.__jsx-style-dynamic-selector{background-image:url(".concat(_img_strickland_home_jpg__WEBPACK_IMPORTED_MODULE_3___default.a, ");background-size:contain;background-position:center;background-repeat:no-repeat;padding:21px 23px;display:grid;height:100%;width:115%;}ul.topnav.__jsx-style-dynamic-selector{position:fixed;top:0;width:100%;list-style-type:none;margin:0;padding:0;overflow:hidden;background-color:#333;}ul.topnav.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector{float:right;}ul.topnav.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector:hover.__jsx-style-dynamic-selector:not(.active){background-color:#111;}ul.topnav.__jsx-style-dynamic-selector li.left.__jsx-style-dynamic-selector{float:left;}@media screen and (max-width:600px){ul.topnav.__jsx-style-dynamic-selector li.left.__jsx-style-dynamic-selector,ul.topnav.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector{float:none;}ul.topnav.__jsx-style-dynamic-selector{position:relative;}.home-img.__jsx-style-dynamic-selector{margin-left:-13%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZXJ0Y3VydGlzL3N0cmlja2xhbmQtbmV4dC9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4Qm9CLEFBR3NDLEFBR0osQUFROEIsQUFVcEMsQUFVSCxBQUdVLEFBR1gsQUFJSSxBQUdPLEFBR0QsV0FUekIsQUFJSSxDQVZKLEdBVlUsRUEwQk4sQ0FIQSxHQXRCVyxDQVlmLEdBbENBLE9BdUJ5QixrQkFwQlIsQ0FRVyxFQWFmLFNBQ0MsQ0FyQkUsU0FzQkksR0FyQkUsQUFPUyxhQWVMLEtBckJKLFNBT1UsUUFlaEMsQ0FyQndCLG1CQU9GLENBTnRCLGlCQU9pQixhQUNELFlBQ0QsV0FDZiIsImZpbGUiOiIvVXNlcnMvYmVydGN1cnRpcy9zdHJpY2tsYW5kLW5leHQvY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICcuL0xpbmsnXG5pbXBvcnQgaW1nIGZyb20gJy4uL2ltZy9zdHJpY2tsYW5kLWhvbWUuanBnJ1xuXG5cbmZ1bmN0aW9uIG5hdlByb3BzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAgIHsgaHJlZjogJy8nLCB0ZXh0OiAnSG9tZScsIGFsaWduOiAnbGVmdCd9LFxuICAgICAgICB7IGhyZWY6ICcvYWJvdXQnLCB0ZXh0OiAnQWJvdXQnLCBhbGlnbjogJ3JpZ2h0J30sXG4gICAgICAgIHsgaHJlZjogJy9pbnZlbnRvcnknLCB0ZXh0OiAnSW52ZW50b3J5JywgYWxpZ246ICdyaWdodCd9LFxuICAgICAgICB7IGhyZWY6ICcvY29udGFjdCcsIHRleHQ6ICdDb250YWN0IFVzJywgYWxpZ246ICdyaWdodCd9LFxuICAgIF1cbn1cbmNvbnN0IEhlYWRlciA9ICgpID0+IChcbiAgICA8ZGl2PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwidG9wbmF2XCI+XG4gICAgICAgICAgICB7bmF2UHJvcHMoKS5tYXAoKG5hdlByb3ApID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2Ake25hdlByb3AudGV4dH0tbGlgfSBjbGFzc05hbWU9e25hdlByb3AuYWxpZ24gPT0gJ2xlZnQnID8gJ2xlZnQnIDogbnVsbH0+IFxuICAgICAgICAgICAgICAgIDxkaXY+ICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bmF2UHJvcC50ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPSdhY3RpdmUnXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtuYXZQcm9wLmhyZWZ9PiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17bmF2UHJvcC5hbGlnbiA9PSAnbGVmdCcgPyAnaG9tZS1pbWcnIDogJ25hdi1saW5rJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge25hdlByb3AudGV4dCA9PSAnSG9tZScgPyAgbnVsbCA6IG5hdlByb3AudGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5hY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDBGRjtcbiAgICAgICAgfVxuICAgICAgICAubmF2LWxpbmsge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk1lbmxvXCI7XG4gICAgICAgIH1cbiAgICAgICAgLmhvbWUtaW1nIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke2ltZ30pO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIxcHggMjNweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB3aWR0aDogMTE1JTtcbiAgICAgICAgfVxuICAgICAgICB1bC50b3BuYXYge1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgICAgIH1cbiAgICAgICAgdWwudG9wbmF2IGxpIHtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgfSAgICAgICBcbiAgICAgICAgdWwudG9wbmF2IGxpIGE6aG92ZXI6bm90KC5hY3RpdmUpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XG4gICAgICAgIH1cbiAgICAgICAgdWwudG9wbmF2IGxpLmxlZnQge1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAgIHVsLnRvcG5hdiBsaS5sZWZ0LCB1bC50b3BuYXYgbGkge1xuICAgICAgICAgICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdWwudG9wbmF2IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaG9tZS1pbWcge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMTMlO1xuICAgICAgICAgICAgfSAgIFxuICAgICAgICB9YH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdfQ== */\n/*@ sourceURL=/Users/bertcurtis/strickland-next/components/Header.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Link.js":
/*!****************************!*\
  !*** ./components/Link.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);






var ActiveLink = function ActiveLink(_ref) {
  var router = _ref.router,
      children = _ref.children,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["router", "children"]);

  var child = react__WEBPACK_IMPORTED_MODULE_4__["Children"].only(children);
  var className = children.props.className || null;

  if (router.pathname === props.href && props.activeClassName) {
    className = "".concat(className !== null ? className : '', " ").concat(props.activeClassName).trim();
  }

  delete props.activeClassName;
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    key: props.key
  }, props), react__WEBPACK_IMPORTED_MODULE_4___default.a.cloneElement(child, {
    className: className
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(ActiveLink));

/***/ }),

/***/ "./img/strickland-home.jpg":
/*!*********************************!*\
  !*** ./img/strickland-home.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/strickland-home-bfcca4908e9ab100d7ed1f138dc8f106.jpg";

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "core-js/library/fn/reflect/construct");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/construct.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/construct.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Reflect$construct = __webpack_require__(/*! ../core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
  if (_Reflect$construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_Reflect$construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = _Reflect$construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__(/*! react-is */ "react-is");
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true
};

var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = TYPE_STATICS[targetComponent['$$typeof']] || REACT_STATICS;
        var sourceStatics = TYPE_STATICS[sourceComponent['$$typeof']] || REACT_STATICS;

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "./node_modules/next/router.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatUrl) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatUrl(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: href && (0, _typeof2.default)(href) === 'object' ? utils_1.formatWithValidation(href) : href,
        as: asHref && (0, _typeof2.default)(asHref) === 'object' ? utils_1.formatWithValidation(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
        props.href = router_1.Router._rewriteUrlForNextExport(props.href);
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/construct */ "./node_modules/@babel/runtime-corejs2/helpers/construct.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* global window */

var router_1 = __importDefault(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

var SingletonRouter = {
  router: null,
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (typeof window !== 'undefined') {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the SingletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(SingletonRouter, 'events', {
  get: function get() {
    return router_1.default.events;
  }
});
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(SingletonRouter, field, {
    get: function get() {
      throwIfNoRouter();
      return SingletonRouter.router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  SingletonRouter[field] = function () {
    var _SingletonRouter$rout;

    throwIfNoRouter();
    return (_SingletonRouter$rout = SingletonRouter.router)[field].apply(_SingletonRouter$rout, arguments);
  };
});
routerEvents.forEach(function (event) {
  SingletonRouter.ready(function () {
    router_1.default.events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));

      if (SingletonRouter[eventField]) {
        try {
          SingletonRouter[eventField].apply(SingletonRouter, arguments);
        } catch (err) {
          console.error("Error when running the Router event: ".concat(eventField));
          console.error("".concat(err.message, "\n").concat(err.stack));
        }
      }
    });
  });
});

function throwIfNoRouter() {
  if (!SingletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }
} // Export the SingletonRouter and this is the public API.


exports.default = SingletonRouter; // Reexport the withRoute HOC

var with_router_1 = __webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js");

exports.withRouter = with_router_1.default; // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.

exports.createRouter = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  SingletonRouter.router = (0, _construct2.default)(router_1.default, args);
  SingletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  SingletonRouter.readyCallbacks = [];
  return SingletonRouter.router;
}; // Export the actual Router class, which is usually used inside the server


exports.Router = router_1.default; // This function is used to create the `withRouter` router instance

function makePublicRouterInstance(router) {
  var instance = {};

  for (var _i = 0; _i < urlPropertyFields.length; _i++) {
    var property = urlPropertyFields[_i];

    if ((0, _typeof2.default)(router[property]) === 'object') {
      instance[property] = (0, _assign.default)({}, router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = router_1.default.events;
  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get: function get() {
        return router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return router[field].apply(router, arguments);
    };
  });
  return instance;
}

exports.makePublicRouterInstance = makePublicRouterInstance;

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var hoist_non_react_statics_1 = __importDefault(__webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function withRouter(ComposedComponent) {
  var displayName = utils_1.getDisplayName(ComposedComponent);

  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react_1$Component) {
    (0, _inherits2.default)(WithRouteWrapper, _react_1$Component);

    function WithRouteWrapper() {
      (0, _classCallCheck2.default)(this, WithRouteWrapper);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithRouteWrapper).apply(this, arguments));
    }

    (0, _createClass2.default)(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return react_1.default.createElement(ComposedComponent, (0, _assign.default)({
          router: this.context.router
        }, this.props));
      }
    }]);
    return WithRouteWrapper;
  }(react_1.Component);

  WithRouteWrapper.contextTypes = {
    router: prop_types_1.default.object
  };
  WithRouteWrapper.displayName = "withRouter(".concat(displayName, ")");
  return hoist_non_react_statics_1.default(WithRouteWrapper, ComposedComponent);
}

exports.default = withRouter;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/router */ "./node_modules/next/dist/client/router.js")


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/inventory.js":
/*!****************************!*\
  !*** ./pages/inventory.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_CommonLayout_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/CommonLayout.js */ "./components/CommonLayout.js");
/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-image-lightbox */ "react-image-lightbox");
/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_image_lightbox__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_Link_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Link.js */ "./components/Link.js");








var _jsxFileName = "/Users/bertcurtis/strickland-next/pages/inventory.js";








var Vehicles =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Vehicles, _Component);

  function Vehicles() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Vehicles);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Vehicles)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      photoIndex: 0,
      isOpen: false,
      vehicleIndex: 0
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "getVehicleContainer", function (vehicleData, vehicleIndex) {
      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        className: "jsx-4028159783",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        className: "jsx-4028159783" + " " + "listing-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        className: "jsx-4028159783" + " " + "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("h1", {
        className: "jsx-4028159783",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "".concat(vehicleData.year, " ").concat(vehicleData.make, " ").concat(vehicleData.model, " ").concat(vehicleData.trim != 'Not Specified' ? vehicleData.trim : ''))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        className: "jsx-4028159783" + " " + "wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        className: "jsx-4028159783" + " " + "main-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("img", {
        src: vehicleData.imgs[0],
        className: "jsx-4028159783" + " " + "grid-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        className: "jsx-4028159783" + " " + "second-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("img", {
        src: vehicleData.imgs[1],
        className: "jsx-4028159783" + " " + "grid-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        className: "jsx-4028159783" + " " + "third-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("img", {
        src: vehicleData.imgs[2],
        className: "jsx-4028159783" + " " + "grid-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        className: "jsx-4028159783" + " " + "fourth-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        className: "jsx-4028159783" + " " + "overlay-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("img", {
        src: vehicleData.imgs[3],
        className: "jsx-4028159783" + " " + "grid-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        onClick: function onClick() {
          return _this.setState({
            isOpen: true,
            vehicleIndex: vehicleIndex
          });
        },
        className: "jsx-4028159783" + " " + "overlay",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        className: "jsx-4028159783",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "See More...")))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        className: "jsx-4028159783" + " " + "fifth-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        className: "jsx-4028159783",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("p", {
        className: "jsx-4028159783" + " " + "item-granular",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("b", {
        className: "jsx-4028159783",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Price:"), " ".concat(vehicleData.price)), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("p", {
        className: "jsx-4028159783" + " " + "item-granular",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("b", {
        className: "jsx-4028159783",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Miles:"), " ".concat(vehicleData.miles)), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("p", {
        className: "jsx-4028159783" + " " + "item-granular",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("b", {
        className: "jsx-4028159783",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "VIN:"), " ".concat(vehicleData.vin)), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("p", {
        className: "jsx-4028159783" + " " + "item-granular",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("b", {
        className: "jsx-4028159783",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Transmission:"), " ".concat(vehicleData.transmission)), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("p", {
        className: "jsx-4028159783" + " " + "item-granular",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("b", {
        className: "jsx-4028159783",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Color:"), " ".concat(vehicleData.extcolor)))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        className: "jsx-4028159783" + " " + "sixth-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
        className: "jsx-4028159783",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("b", {
        className: "jsx-4028159783",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "All Details")), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
        className: "jsx-4028159783" + " " + "item-granular description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, vehicleData.description)))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "4028159783",
        __self: this
      }, ".overlay-container.jsx-4028159783{position:relative;display:block;margin:0 auto;height:100%;width:101%;}.overlay-container.jsx-4028159783:hover .overlay.jsx-4028159783{background:rgba(0,0,0,0.7);}.overlay-container.jsx-4028159783 .overlay.jsx-4028159783{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;top:0;background:rgba(0,0,0,0.6);color:#f1f1f1;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:auto;height:100%;width:101%;-webkit-transition:.5s ease;transition:.5s ease;cursor:pointer;}.header.jsx-4028159783{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:left;max-width:1200px;text-overflow:wrap;}.listing-wrapper.jsx-4028159783{width:100%;height:auto;padding:25px;}.wrapper.jsx-4028159783{display:grid;grid-template-columns:repeat(4,20vw);grid-template-rows:repeat(3,17vw);grid-gap:15px;max-width:1200px;}.grid-img.jsx-4028159783{width:100%;height:100%;object-fit:cover;display:block;border-style:solid;border-width:1px;border-color:#B8B8B8;}.item-granular.jsx-4028159783{display:block;background-color:#F0F0F0;padding:2px;overflow:scroll;width:100%;height:100%;}.main-item.jsx-4028159783{grid-column-start:1;grid-column-end:4;grid-row-start:1;grid-row-end:3;}.second-item.jsx-4028159783{grid-column-start:4;grid-column-end:5;grid-row-start:1;grid-row-end:2;}.third-item.jsx-4028159783{grid-column-start:4;grid-column-end:5;grid-row-start:2;grid-row-end:3;}.fourth-item.jsx-4028159783{position:relative;grid-column-start:4;grid-column-end:5;grid-row-start:3;grid-row-end:4;}.fifth-item.jsx-4028159783{padding:0 6px 0 0;grid-column-start:3;grid-column-end:4;grid-row-start:2;grid-row-end:3;}.sixth-item.jsx-4028159783{grid-column-start:1;grid-column-end:4;grid-row-start:3;grid-row-end:4;}.description.jsx-4028159783{font-size:15px;width:100%;height:88%;}@media screen and (max-width:900px){.fifth-item.jsx-4028159783{padding:6px;grid-column-start:1;grid-column-end:2;grid-row-start:1;grid-row-end:4;}}@media screen and (max-width:525px){.sixth-item.jsx-4028159783{grid-column-start:2;}.listing-wrapper.jsx-4028159783{width:90%;}.description.jsx-4028159783{font-size:12px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZXJ0Y3VydGlzL3N0cmlja2xhbmQtbmV4dC9wYWdlcy9pbnZlbnRvcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0RrQixBQUc2QixBQU9ZLEFBR1osQUFjTCxBQVFGLEFBS0UsQUFPRixBQVNHLEFBUU0sQUFNQSxBQU1BLEFBTUYsQUFPQSxBQU9FLEFBTUwsQUFNRCxBQVNRLEFBR1YsQUFHSyxVQUZqQixDQXJGWSxBQVlBLENBNkRVLENBcEVnQixDQWdCYixDQThDZCxBQXFCWCxHQXhIYyxBQVVELEFBcUVPLEFBT0EsRUF6QkYsQUFNQSxBQU1BLEFBb0JBLEFBcUJsQixHQWpGYSxBQVlJLEdBdUROLENBN0ZiLEtBTmdCLEFBeUdNLElBeEV0QixDQW1FQSxDQXZDbUIsQUFNQSxBQU1BLEFBTUMsQUFPQSxBQU9ELENBeENMLENBUkUsTUE1Q0YsSUFvQ3VCLEFBcUVoQixDQXBESCxHQVJHLENBZ0JKLEFBTUEsQUFNQSxBQW9CQSxDQWRFLEFBT0EsRUFyRk4sU0FxREEsQUFvRE0sRUF4R25CLENBNERBLEFBTUEsQUFNQSxBQW9CQSxHQWhEbUIsQUFrQ0YsQUFPQSxDQWpFSSxJQWlDUCxJQW9EWixFQXRFYyxJQTRDaEIsQUFPQSxFQXpDdUIsQUFTdkIsRUEvQ1EsTUFDd0IsQUE0QmIsYUFVbkIsSUFUQSxVQTVCZ0IsY0FDUyxJQVdKLDZGQUNILEVBWEcsY0FZRixpQkFDRSxtQkFDckIsMkNBYmMsWUFDQSxZQUNELFdBQ1MsZ0RBQ0wsZUFDakIiLCJmaWxlIjoiL1VzZXJzL2JlcnRjdXJ0aXMvc3RyaWNrbGFuZC1uZXh0L3BhZ2VzL2ludmVudG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9Db21tb25MYXlvdXQuanMnXG5pbXBvcnQgTGlnaHRib3ggZnJvbSAncmVhY3QtaW1hZ2UtbGlnaHRib3gnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICcuLi9jb21wb25lbnRzL0xpbmsuanMnXG5cblxuXG5jb25zdCBWZWhpY2xlcyA9IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgcGhvdG9JbmRleDogMCxcbiAgICBpc09wZW46IGZhbHNlLFxuICAgIHZlaGljbGVJbmRleDogMFxuICB9O1xuICBnZXRWZWhpY2xlQ29udGFpbmVyID0gKHZlaGljbGVEYXRhLCB2ZWhpY2xlSW5kZXgpID0+IChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nLXdyYXBwZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICA8aDE+e2Ake3ZlaGljbGVEYXRhLnllYXJ9ICR7dmVoaWNsZURhdGEubWFrZX0gJHt2ZWhpY2xlRGF0YS5tb2RlbH0gJHt2ZWhpY2xlRGF0YS50cmltICE9ICdOb3QgU3BlY2lmaWVkJyA/IHZlaGljbGVEYXRhLnRyaW0gOiAnJ31gfTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4taXRlbVwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJncmlkLWltZ1wiIHNyYz17dmVoaWNsZURhdGEuaW1nc1swXX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY29uZC1pdGVtXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImdyaWQtaW1nXCIgc3JjPXt2ZWhpY2xlRGF0YS5pbWdzWzFdfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGhpcmQtaXRlbVwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJncmlkLWltZ1wiIHNyYz17dmVoaWNsZURhdGEuaW1nc1syXX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvdXJ0aC1pdGVtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXktY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZ3JpZC1pbWdcIiBzcmM9e3ZlaGljbGVEYXRhLmltZ3NbM119IC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBpc09wZW46IHRydWUsIHZlaGljbGVJbmRleDogdmVoaWNsZUluZGV4IH0pfT5cbiAgICAgICAgICAgICAgICA8ZGl2PlNlZSBNb3JlLi4uPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWZ0aC1pdGVtXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpdGVtLWdyYW51bGFyXCI+PGI+UHJpY2U6PC9iPntgICR7dmVoaWNsZURhdGEucHJpY2V9YH08L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIml0ZW0tZ3JhbnVsYXJcIj48Yj5NaWxlczo8L2I+e2AgJHt2ZWhpY2xlRGF0YS5taWxlc31gfTwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaXRlbS1ncmFudWxhclwiPjxiPlZJTjo8L2I+e2AgJHt2ZWhpY2xlRGF0YS52aW59YH08L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIml0ZW0tZ3JhbnVsYXJcIj48Yj5UcmFuc21pc3Npb246PC9iPntgICR7dmVoaWNsZURhdGEudHJhbnNtaXNzaW9ufWB9PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpdGVtLWdyYW51bGFyXCI+PGI+Q29sb3I6PC9iPntgICR7dmVoaWNsZURhdGEuZXh0Y29sb3J9YH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpeHRoLWl0ZW1cIj5cbiAgICAgICAgICAgIDxzcGFuPjxiPkFsbCBEZXRhaWxzPC9iPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIml0ZW0tZ3JhbnVsYXIgZGVzY3JpcHRpb25cIj57dmVoaWNsZURhdGEuZGVzY3JpcHRpb259PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAub3ZlcmxheS1jb250YWluZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHdpZHRoOiAxMDElOyBcbiAgICAgICAgfVxuICAgICAgICAub3ZlcmxheS1jb250YWluZXI6aG92ZXIgLm92ZXJsYXkge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICAgICAgfVxuICAgICAgICAub3ZlcmxheS1jb250YWluZXIgLm92ZXJsYXkge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpOyBcbiAgICAgICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgd2lkdGg6IDEwMSU7IFxuICAgICAgICAgIHRyYW5zaXRpb246IC41cyBlYXNlO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IHdyYXA7XG4gICAgICAgIH1cbiAgICAgICAgLmxpc3Rpbmctd3JhcHBlciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMjB2dyk7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMTd2dyk7XG4gICAgICAgICAgZ3JpZC1nYXA6IDE1cHg7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmdyaWQtaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICNCOEI4Qjg7XG4gICAgICAgIH1cbiAgICAgICAgLml0ZW0tZ3JhbnVsYXIge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEYwRjA7XG4gICAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5tYWluLWl0ZW0ge1xuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogNDtcbiAgICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICAgICAgICBncmlkLXJvdy1lbmQ6IDM7XG4gICAgICAgIH1cbiAgICAgICAgLnNlY29uZC1pdGVtIHtcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogNDtcbiAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDU7XG4gICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gICAgICAgICAgZ3JpZC1yb3ctZW5kOiAyO1xuICAgICAgICB9XG4gICAgICAgIC50aGlyZC1pdGVtIHtcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogNDtcbiAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDU7XG4gICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XG4gICAgICAgICAgZ3JpZC1yb3ctZW5kOiAzO1xuICAgICAgICB9XG4gICAgICAgIC5mb3VydGgtaXRlbSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiA0O1xuICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogNTtcbiAgICAgICAgICBncmlkLXJvdy1zdGFydDogMztcbiAgICAgICAgICBncmlkLXJvdy1lbmQ6IDQ7XG4gICAgICAgIH1cbiAgICAgICAgLmZpZnRoLWl0ZW0ge1xuICAgICAgICAgIHBhZGRpbmc6IDAgNnB4IDAgMDtcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMztcbiAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XG4gICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XG4gICAgICAgICAgZ3JpZC1yb3ctZW5kOiAzO1xuICAgICAgICB9XG4gICAgICAgIC5zaXh0aC1pdGVtIHtcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XG4gICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDM7XG4gICAgICAgICAgZ3JpZC1yb3ctZW5kOiA0O1xuICAgICAgICB9XG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogODglO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gICAgICAgICAgLmZpZnRoLWl0ZW0ge1xuICAgICAgICAgICAgcGFkZGluZzogNnB4O1xuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XG4gICAgICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICAgICAgICAgIGdyaWQtcm93LWVuZDogNDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTI1cHgpIHtcbiAgICAgICAgICAuc2l4dGgtaXRlbSB7XG4gICAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpc3Rpbmctd3JhcHBlciB7XG4gICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICB9YH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbiAgcmVuZGVyVmVoaWNsZSA9IChrZXksIHZlaGljbGVEYXRhLCB2ZWhpY2xlSW5kZXgpID0+IChcbiAgICA8ZGl2IGtleT17a2V5fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiPlxuICAgICAgICB7dGhpcy5nZXRWZWhpY2xlQ29udGFpbmVyKHZlaGljbGVEYXRhLCB2ZWhpY2xlSW5kZXgpfVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4Pntge1xuICAgICAgICAuYmFja2dyb3VuZCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0QzRDNEMztcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQ1cHg7XG4gICAgICAgIH1cbiAgICAgIH1gfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxuXG4gIHJlbmRlciA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBwaG90b0luZGV4LFxuICAgICAgaXNPcGVuLFxuICAgICAgdmVoaWNsZUluZGV4XG4gICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4gPExheW91dCB0aXRsZT0nSW52ZW50b3J5Jz5cbiAgICAgIDxoMT5USEUgSU5WRU5UT1JZIFlPVSdWRSBCRUVOIFdBSVRJTkcgRk9SPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWNvbnRlbnQnPkNvbW1pdHRlZCB0byBwcm92aWRpbmcgdGhlIGhpZ2hlc3QgcXVhbGl0eSB2ZWhpY2xlJ3Mgd2l0aCBzbWFsbGVyIHByaWNlIHRhZ3MgYW5kIG5vIGhpZGRlbiBmZWUncy4gU3BlY2lhbGl6aW5nIGluIGJyYW5kZWQgdGl0bGUgVHJ1Y2tzITwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgIHt0aGlzLnByb3BzLnZlaGljbGVzLm1hcCgodmVoaWNsZSwgaW5kZXgpID0+IChcbiAgICAgICAgICB0aGlzLnJlbmRlclZlaGljbGUodmVoaWNsZS5pZCwgdmVoaWNsZSAsaW5kZXgpXG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlnaHRib3gnPntpc09wZW4gJiZcbiAgICAgICAgPExpZ2h0Ym94XG4gICAgICAgICAgbWFpblNyYz17dGhpcy5wcm9wcy52ZWhpY2xlc1t2ZWhpY2xlSW5kZXhdLmltZ3NbcGhvdG9JbmRleF19XG4gICAgICAgICAgbmV4dFNyYz17dGhpcy5wcm9wcy52ZWhpY2xlc1t2ZWhpY2xlSW5kZXhdLmltZ3NbKHBob3RvSW5kZXggKyAxKSAlIHRoaXMucHJvcHMudmVoaWNsZXNbdmVoaWNsZUluZGV4XS5pbWdzLmxlbmd0aF19XG4gICAgICAgICAgcHJldlNyYz17dGhpcy5wcm9wcy52ZWhpY2xlc1t2ZWhpY2xlSW5kZXhdLmltZ3NbKHBob3RvSW5kZXggKyB0aGlzLnByb3BzLnZlaGljbGVzW3ZlaGljbGVJbmRleF0uaW1ncy5sZW5ndGggLSAxKSAlIHRoaXMucHJvcHMudmVoaWNsZXNbdmVoaWNsZUluZGV4XS5pbWdzLmxlbmd0aF19XG5cbiAgICAgICAgICBvbkNsb3NlUmVxdWVzdD17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGlzT3BlbjogZmFsc2UgfSl9XG4gICAgICAgICAgb25Nb3ZlUHJldlJlcXVlc3Q9eygpID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcGhvdG9JbmRleDogKHBob3RvSW5kZXggKyB0aGlzLnByb3BzLnZlaGljbGVzW3ZlaGljbGVJbmRleF0uaW1ncy5sZW5ndGggLSAxKSAlIHRoaXMucHJvcHMudmVoaWNsZXNbdmVoaWNsZUluZGV4XS5pbWdzLmxlbmd0aCxcbiAgICAgICAgICB9KX1cbiAgICAgICAgICBvbk1vdmVOZXh0UmVxdWVzdD17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBwaG90b0luZGV4OiAocGhvdG9JbmRleCArIDEpICUgdGhpcy5wcm9wcy52ZWhpY2xlc1t2ZWhpY2xlSW5kZXhdLmltZ3MubGVuZ3RoLFxuICAgICAgICAgIH0pfVxuICAgICAgICAgIHdyYXBwZXJDbGFzc05hbWU9J2xpZ2h0Ym94J1xuICAgICAgICAvPlxuICAgICAgfTwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YHtcbiAgICAud3JhcHBlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICAubGlnaHRib3gge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICAudGV4dC1jb250ZW50IHtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxuICAgIGgxIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgICB9XG4gIH1gfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgfVxufVxuXG5WZWhpY2xlcy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyByZXEgfSkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9zdHJpY2tsYW5kLWNhcnMtYXBpLmhlcm9rdWFwcC5jb20vY2FycycpXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgY29uc29sZS5sb2coYENhciBkYXRhIGZldGNoZWQuIENvdW50OiAke2RhdGEubGVuZ3RofWApXG5cbiAgcmV0dXJuIHtcbiAgICB2ZWhpY2xlczogZGF0YVxuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihWZWhpY2xlcyk7XG4iXX0= */\n/*@ sourceURL=/Users/bertcurtis/strickland-next/pages/inventory.js */"));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "renderVehicle", function (key, vehicleData, vehicleIndex) {
      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        key: key,
        className: "jsx-667373447",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        className: "jsx-667373447" + " " + "background",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, _this.getVehicleContainer(vehicleData, vehicleIndex)), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "667373447",
        __self: this
      }, ".background.jsx-667373447{background-color:#D3D3D3;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);margin-bottom:45px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZXJ0Y3VydGlzL3N0cmlja2xhbmQtbmV4dC9wYWdlcy9pbnZlbnRvcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNExrQixBQUdvQyx5QkFDbUQscUVBQ3pELG1CQUNyQiIsImZpbGUiOiIvVXNlcnMvYmVydGN1cnRpcy9zdHJpY2tsYW5kLW5leHQvcGFnZXMvaW52ZW50b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0NvbW1vbkxheW91dC5qcydcbmltcG9ydCBMaWdodGJveCBmcm9tICdyZWFjdC1pbWFnZS1saWdodGJveCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJy4uL2NvbXBvbmVudHMvTGluay5qcydcblxuXG5cbmNvbnN0IFZlaGljbGVzID0gY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBwaG90b0luZGV4OiAwLFxuICAgIGlzT3BlbjogZmFsc2UsXG4gICAgdmVoaWNsZUluZGV4OiAwXG4gIH07XG4gIGdldFZlaGljbGVDb250YWluZXIgPSAodmVoaWNsZURhdGEsIHZlaGljbGVJbmRleCkgPT4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3Rpbmctd3JhcHBlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgIDxoMT57YCR7dmVoaWNsZURhdGEueWVhcn0gJHt2ZWhpY2xlRGF0YS5tYWtlfSAke3ZlaGljbGVEYXRhLm1vZGVsfSAke3ZlaGljbGVEYXRhLnRyaW0gIT0gJ05vdCBTcGVjaWZpZWQnID8gdmVoaWNsZURhdGEudHJpbSA6ICcnfWB9PC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1pdGVtXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImdyaWQtaW1nXCIgc3JjPXt2ZWhpY2xlRGF0YS5pbWdzWzBdfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vjb25kLWl0ZW1cIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZ3JpZC1pbWdcIiBzcmM9e3ZlaGljbGVEYXRhLmltZ3NbMV19IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aGlyZC1pdGVtXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImdyaWQtaW1nXCIgc3JjPXt2ZWhpY2xlRGF0YS5pbWdzWzJdfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm91cnRoLWl0ZW1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJncmlkLWltZ1wiIHNyYz17dmVoaWNsZURhdGEuaW1nc1szXX0gLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCIgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGlzT3BlbjogdHJ1ZSwgdmVoaWNsZUluZGV4OiB2ZWhpY2xlSW5kZXggfSl9PlxuICAgICAgICAgICAgICAgIDxkaXY+U2VlIE1vcmUuLi48L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZnRoLWl0ZW1cIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIml0ZW0tZ3JhbnVsYXJcIj48Yj5QcmljZTo8L2I+e2AgJHt2ZWhpY2xlRGF0YS5wcmljZX1gfTwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaXRlbS1ncmFudWxhclwiPjxiPk1pbGVzOjwvYj57YCAke3ZlaGljbGVEYXRhLm1pbGVzfWB9PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpdGVtLWdyYW51bGFyXCI+PGI+VklOOjwvYj57YCAke3ZlaGljbGVEYXRhLnZpbn1gfTwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaXRlbS1ncmFudWxhclwiPjxiPlRyYW5zbWlzc2lvbjo8L2I+e2AgJHt2ZWhpY2xlRGF0YS50cmFuc21pc3Npb259YH08L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIml0ZW0tZ3JhbnVsYXJcIj48Yj5Db2xvcjo8L2I+e2AgJHt2ZWhpY2xlRGF0YS5leHRjb2xvcn1gfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2l4dGgtaXRlbVwiPlxuICAgICAgICAgICAgPHNwYW4+PGI+QWxsIERldGFpbHM8L2I+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaXRlbS1ncmFudWxhciBkZXNjcmlwdGlvblwiPnt2ZWhpY2xlRGF0YS5kZXNjcmlwdGlvbn08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5vdmVybGF5LWNvbnRhaW5lciB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyBcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgd2lkdGg6IDEwMSU7IFxuICAgICAgICB9XG4gICAgICAgIC5vdmVybGF5LWNvbnRhaW5lcjpob3ZlciAub3ZlcmxheSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgICAgICB9XG4gICAgICAgIC5vdmVybGF5LWNvbnRhaW5lciAub3ZlcmxheSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7IFxuICAgICAgICAgIGNvbG9yOiAjZjFmMWYxO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB3aWR0aDogMTAxJTsgXG4gICAgICAgICAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogd3JhcDtcbiAgICAgICAgfVxuICAgICAgICAubGlzdGluZy13cmFwcGVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgcGFkZGluZzogMjVweDtcbiAgICAgICAgfVxuICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAyMHZ3KTtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxN3Z3KTtcbiAgICAgICAgICBncmlkLWdhcDogMTVweDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICAgICAgfVxuICAgICAgICAuZ3JpZC1pbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogI0I4QjhCODtcbiAgICAgICAgfVxuICAgICAgICAuaXRlbS1ncmFudWxhciB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjBGMDtcbiAgICAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLm1haW4taXRlbSB7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xuICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xuICAgICAgICAgIGdyaWQtcm93LWVuZDogMztcbiAgICAgICAgfVxuICAgICAgICAuc2Vjb25kLWl0ZW0ge1xuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiA0O1xuICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogNTtcbiAgICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICAgICAgICBncmlkLXJvdy1lbmQ6IDI7XG4gICAgICAgIH1cbiAgICAgICAgLnRoaXJkLWl0ZW0ge1xuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiA0O1xuICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogNTtcbiAgICAgICAgICBncmlkLXJvdy1zdGFydDogMjtcbiAgICAgICAgICBncmlkLXJvdy1lbmQ6IDM7XG4gICAgICAgIH1cbiAgICAgICAgLmZvdXJ0aC1pdGVtIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDQ7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiA1O1xuICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAzO1xuICAgICAgICAgIGdyaWQtcm93LWVuZDogNDtcbiAgICAgICAgfVxuICAgICAgICAuZmlmdGgtaXRlbSB7XG4gICAgICAgICAgcGFkZGluZzogMCA2cHggMCAwO1xuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xuICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogNDtcbiAgICAgICAgICBncmlkLXJvdy1zdGFydDogMjtcbiAgICAgICAgICBncmlkLXJvdy1lbmQ6IDM7XG4gICAgICAgIH1cbiAgICAgICAgLnNpeHRoLWl0ZW0ge1xuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogNDtcbiAgICAgICAgICBncmlkLXJvdy1zdGFydDogMztcbiAgICAgICAgICBncmlkLXJvdy1lbmQ6IDQ7XG4gICAgICAgIH1cbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiA4OCU7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICAgICAgICAuZmlmdGgtaXRlbSB7XG4gICAgICAgICAgICBwYWRkaW5nOiA2cHg7XG4gICAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogMjtcbiAgICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xuICAgICAgICAgICAgZ3JpZC1yb3ctZW5kOiA0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MjVweCkge1xuICAgICAgICAgIC5zaXh0aC1pdGVtIHtcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGlzdGluZy13cmFwcGVyIHtcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1gfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxuICByZW5kZXJWZWhpY2xlID0gKGtleSwgdmVoaWNsZURhdGEsIHZlaGljbGVJbmRleCkgPT4gKFxuICAgIDxkaXYga2V5PXtrZXl9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCI+XG4gICAgICAgIHt0aGlzLmdldFZlaGljbGVDb250YWluZXIodmVoaWNsZURhdGEsIHZlaGljbGVJbmRleCl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2B7XG4gICAgICAgIC5iYWNrZ3JvdW5kIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDNEM0QzO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDVweDtcbiAgICAgICAgfVxuICAgICAgfWB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG5cbiAgcmVuZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHBob3RvSW5kZXgsXG4gICAgICBpc09wZW4sXG4gICAgICB2ZWhpY2xlSW5kZXhcbiAgICB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiA8TGF5b3V0IHRpdGxlPSdJbnZlbnRvcnknPlxuICAgICAgPGgxPlRIRSBJTlZFTlRPUlkgWU9VJ1ZFIEJFRU4gV0FJVElORyBGT1I8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtY29udGVudCc+Q29tbWl0dGVkIHRvIHByb3ZpZGluZyB0aGUgaGlnaGVzdCBxdWFsaXR5IHZlaGljbGUncyB3aXRoIHNtYWxsZXIgcHJpY2UgdGFncyBhbmQgbm8gaGlkZGVuIGZlZSdzLiBTcGVjaWFsaXppbmcgaW4gYnJhbmRlZCB0aXRsZSBUcnVja3MhPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgICAge3RoaXMucHJvcHMudmVoaWNsZXMubWFwKCh2ZWhpY2xlLCBpbmRleCkgPT4gKFxuICAgICAgICAgIHRoaXMucmVuZGVyVmVoaWNsZSh2ZWhpY2xlLmlkLCB2ZWhpY2xlICxpbmRleClcbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaWdodGJveCc+e2lzT3BlbiAmJlxuICAgICAgICA8TGlnaHRib3hcbiAgICAgICAgICBtYWluU3JjPXt0aGlzLnByb3BzLnZlaGljbGVzW3ZlaGljbGVJbmRleF0uaW1nc1twaG90b0luZGV4XX1cbiAgICAgICAgICBuZXh0U3JjPXt0aGlzLnByb3BzLnZlaGljbGVzW3ZlaGljbGVJbmRleF0uaW1nc1socGhvdG9JbmRleCArIDEpICUgdGhpcy5wcm9wcy52ZWhpY2xlc1t2ZWhpY2xlSW5kZXhdLmltZ3MubGVuZ3RoXX1cbiAgICAgICAgICBwcmV2U3JjPXt0aGlzLnByb3BzLnZlaGljbGVzW3ZlaGljbGVJbmRleF0uaW1nc1socGhvdG9JbmRleCArIHRoaXMucHJvcHMudmVoaWNsZXNbdmVoaWNsZUluZGV4XS5pbWdzLmxlbmd0aCAtIDEpICUgdGhpcy5wcm9wcy52ZWhpY2xlc1t2ZWhpY2xlSW5kZXhdLmltZ3MubGVuZ3RoXX1cblxuICAgICAgICAgIG9uQ2xvc2VSZXF1ZXN0PXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgaXNPcGVuOiBmYWxzZSB9KX1cbiAgICAgICAgICBvbk1vdmVQcmV2UmVxdWVzdD17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBwaG90b0luZGV4OiAocGhvdG9JbmRleCArIHRoaXMucHJvcHMudmVoaWNsZXNbdmVoaWNsZUluZGV4XS5pbWdzLmxlbmd0aCAtIDEpICUgdGhpcy5wcm9wcy52ZWhpY2xlc1t2ZWhpY2xlSW5kZXhdLmltZ3MubGVuZ3RoLFxuICAgICAgICAgIH0pfVxuICAgICAgICAgIG9uTW92ZU5leHRSZXF1ZXN0PXsoKSA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHBob3RvSW5kZXg6IChwaG90b0luZGV4ICsgMSkgJSB0aGlzLnByb3BzLnZlaGljbGVzW3ZlaGljbGVJbmRleF0uaW1ncy5sZW5ndGgsXG4gICAgICAgICAgfSl9XG4gICAgICAgICAgd3JhcHBlckNsYXNzTmFtZT0nbGlnaHRib3gnXG4gICAgICAgIC8+XG4gICAgICB9PC9kaXY+XG4gICAgICA8c3R5bGUganN4Pntge1xuICAgIC53cmFwcGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIC5saWdodGJveCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIC50ZXh0LWNvbnRlbnQge1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG4gICAgaDEge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgIH1cbiAgfWB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICB9XG59XG5cblZlaGljbGVzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHJlcSB9KSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL3N0cmlja2xhbmQtY2Fycy1hcGkuaGVyb2t1YXBwLmNvbS9jYXJzJylcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcblxuICBjb25zb2xlLmxvZyhgQ2FyIGRhdGEgZmV0Y2hlZC4gQ291bnQ6ICR7ZGF0YS5sZW5ndGh9YClcblxuICByZXR1cm4ge1xuICAgIHZlaGljbGVzOiBkYXRhXG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFZlaGljbGVzKTtcbiJdfQ== */\n/*@ sourceURL=/Users/bertcurtis/strickland-next/pages/inventory.js */"));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "render", function () {
      var _this$state = _this.state,
          photoIndex = _this$state.photoIndex,
          isOpen = _this$state.isOpen,
          vehicleIndex = _this$state.vehicleIndex;
      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_CommonLayout_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "Inventory",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("h1", {
        className: "jsx-1034982499",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, "THE INVENTORY YOU'VE BEEN WAITING FOR"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        className: "jsx-1034982499" + " " + 'text-content',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, "Committed to providing the highest quality vehicle's with smaller price tags and no hidden fee's. Specializing in branded title Trucks!"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        className: "jsx-1034982499" + " " + "wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, _this.props.vehicles.map(function (vehicle, index) {
        return _this.renderVehicle(vehicle.id, vehicle, index);
      })), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        className: "jsx-1034982499" + " " + 'lightbox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, isOpen && react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_image_lightbox__WEBPACK_IMPORTED_MODULE_10___default.a, {
        mainSrc: _this.props.vehicles[vehicleIndex].imgs[photoIndex],
        nextSrc: _this.props.vehicles[vehicleIndex].imgs[(photoIndex + 1) % _this.props.vehicles[vehicleIndex].imgs.length],
        prevSrc: _this.props.vehicles[vehicleIndex].imgs[(photoIndex + _this.props.vehicles[vehicleIndex].imgs.length - 1) % _this.props.vehicles[vehicleIndex].imgs.length],
        onCloseRequest: function onCloseRequest() {
          return _this.setState({
            isOpen: false
          });
        },
        onMovePrevRequest: function onMovePrevRequest() {
          return _this.setState({
            photoIndex: (photoIndex + _this.props.vehicles[vehicleIndex].imgs.length - 1) % _this.props.vehicles[vehicleIndex].imgs.length
          });
        },
        onMoveNextRequest: function onMoveNextRequest() {
          return _this.setState({
            photoIndex: (photoIndex + 1) % _this.props.vehicles[vehicleIndex].imgs.length
          });
        },
        wrapperClassName: "lightbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "1034982499",
        __self: this
      }, ".wrapper.jsx-1034982499{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:20px;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.lightbox.jsx-1034982499{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.text-content.jsx-1034982499{padding:10px;}h1.jsx-1034982499{text-align:center;padding:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZXJ0Y3VydGlzL3N0cmlja2xhbmQtbmV4dC9wYWdlcy9pbnZlbnRvcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc09rQixBQUdvQixBQU9BLEFBTUEsQUFHSyxhQUZwQixLQUdjLFlBQ2QsNENBakJ3QixBQU9BLDhFQU5ULEFBT1EsYUFOQSwrREFPRixhQU5BLGdGQU9yQixhQU5BIiwiZmlsZSI6Ii9Vc2Vycy9iZXJ0Y3VydGlzL3N0cmlja2xhbmQtbmV4dC9wYWdlcy9pbnZlbnRvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvQ29tbW9uTGF5b3V0LmpzJ1xuaW1wb3J0IExpZ2h0Ym94IGZyb20gJ3JlYWN0LWltYWdlLWxpZ2h0Ym94JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnLi4vY29tcG9uZW50cy9MaW5rLmpzJ1xuXG5cblxuY29uc3QgVmVoaWNsZXMgPSBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHBob3RvSW5kZXg6IDAsXG4gICAgaXNPcGVuOiBmYWxzZSxcbiAgICB2ZWhpY2xlSW5kZXg6IDBcbiAgfTtcbiAgZ2V0VmVoaWNsZUNvbnRhaW5lciA9ICh2ZWhpY2xlRGF0YSwgdmVoaWNsZUluZGV4KSA9PiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZy13cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgPGgxPntgJHt2ZWhpY2xlRGF0YS55ZWFyfSAke3ZlaGljbGVEYXRhLm1ha2V9ICR7dmVoaWNsZURhdGEubW9kZWx9ICR7dmVoaWNsZURhdGEudHJpbSAhPSAnTm90IFNwZWNpZmllZCcgPyB2ZWhpY2xlRGF0YS50cmltIDogJyd9YH08L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWl0ZW1cIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZ3JpZC1pbWdcIiBzcmM9e3ZlaGljbGVEYXRhLmltZ3NbMF19IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWNvbmQtaXRlbVwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJncmlkLWltZ1wiIHNyYz17dmVoaWNsZURhdGEuaW1nc1sxXX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRoaXJkLWl0ZW1cIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZ3JpZC1pbWdcIiBzcmM9e3ZlaGljbGVEYXRhLmltZ3NbMl19IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3VydGgtaXRlbVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImdyaWQtaW1nXCIgc3JjPXt2ZWhpY2xlRGF0YS5pbWdzWzNdfSAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgaXNPcGVuOiB0cnVlLCB2ZWhpY2xlSW5kZXg6IHZlaGljbGVJbmRleCB9KX0+XG4gICAgICAgICAgICAgICAgPGRpdj5TZWUgTW9yZS4uLjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlmdGgtaXRlbVwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaXRlbS1ncmFudWxhclwiPjxiPlByaWNlOjwvYj57YCAke3ZlaGljbGVEYXRhLnByaWNlfWB9PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpdGVtLWdyYW51bGFyXCI+PGI+TWlsZXM6PC9iPntgICR7dmVoaWNsZURhdGEubWlsZXN9YH08L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIml0ZW0tZ3JhbnVsYXJcIj48Yj5WSU46PC9iPntgICR7dmVoaWNsZURhdGEudmlufWB9PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpdGVtLWdyYW51bGFyXCI+PGI+VHJhbnNtaXNzaW9uOjwvYj57YCAke3ZlaGljbGVEYXRhLnRyYW5zbWlzc2lvbn1gfTwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaXRlbS1ncmFudWxhclwiPjxiPkNvbG9yOjwvYj57YCAke3ZlaGljbGVEYXRhLmV4dGNvbG9yfWB9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXh0aC1pdGVtXCI+XG4gICAgICAgICAgICA8c3Bhbj48Yj5BbGwgRGV0YWlsczwvYj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpdGVtLWdyYW51bGFyIGRlc2NyaXB0aW9uXCI+e3ZlaGljbGVEYXRhLmRlc2NyaXB0aW9ufTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm92ZXJsYXktY29udGFpbmVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB3aWR0aDogMTAxJTsgXG4gICAgICAgIH1cbiAgICAgICAgLm92ZXJsYXktY29udGFpbmVyOmhvdmVyIC5vdmVybGF5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgICAgIH1cbiAgICAgICAgLm92ZXJsYXktY29udGFpbmVyIC5vdmVybGF5IHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTsgXG4gICAgICAgICAgY29sb3I6ICNmMWYxZjE7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHdpZHRoOiAxMDElOyBcbiAgICAgICAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiB3cmFwO1xuICAgICAgICB9XG4gICAgICAgIC5saXN0aW5nLXdyYXBwZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICBwYWRkaW5nOiAyNXB4O1xuICAgICAgICB9XG4gICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDIwdncpO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDE3dncpO1xuICAgICAgICAgIGdyaWQtZ2FwOiAxNXB4O1xuICAgICAgICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5ncmlkLWltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjQjhCOEI4O1xuICAgICAgICB9XG4gICAgICAgIC5pdGVtLWdyYW51bGFyIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMEYwO1xuICAgICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAubWFpbi1pdGVtIHtcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XG4gICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gICAgICAgICAgZ3JpZC1yb3ctZW5kOiAzO1xuICAgICAgICB9XG4gICAgICAgIC5zZWNvbmQtaXRlbSB7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDQ7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiA1O1xuICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xuICAgICAgICAgIGdyaWQtcm93LWVuZDogMjtcbiAgICAgICAgfVxuICAgICAgICAudGhpcmQtaXRlbSB7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDQ7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiA1O1xuICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xuICAgICAgICAgIGdyaWQtcm93LWVuZDogMztcbiAgICAgICAgfVxuICAgICAgICAuZm91cnRoLWl0ZW0ge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogNDtcbiAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDU7XG4gICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDM7XG4gICAgICAgICAgZ3JpZC1yb3ctZW5kOiA0O1xuICAgICAgICB9XG4gICAgICAgIC5maWZ0aC1pdGVtIHtcbiAgICAgICAgICBwYWRkaW5nOiAwIDZweCAwIDA7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xuICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xuICAgICAgICAgIGdyaWQtcm93LWVuZDogMztcbiAgICAgICAgfVxuICAgICAgICAuc2l4dGgtaXRlbSB7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xuICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAzO1xuICAgICAgICAgIGdyaWQtcm93LWVuZDogNDtcbiAgICAgICAgfVxuICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDg4JTtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgICAgICAgIC5maWZ0aC1pdGVtIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDZweDtcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xuICAgICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gICAgICAgICAgICBncmlkLXJvdy1lbmQ6IDQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUyNXB4KSB7XG4gICAgICAgICAgLnNpeHRoLWl0ZW0ge1xuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5saXN0aW5nLXdyYXBwZXIge1xuICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfWB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG4gIHJlbmRlclZlaGljbGUgPSAoa2V5LCB2ZWhpY2xlRGF0YSwgdmVoaWNsZUluZGV4KSA9PiAoXG4gICAgPGRpdiBrZXk9e2tleX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmRcIj5cbiAgICAgICAge3RoaXMuZ2V0VmVoaWNsZUNvbnRhaW5lcih2ZWhpY2xlRGF0YSwgdmVoaWNsZUluZGV4KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YHtcbiAgICAgICAgLmJhY2tncm91bmQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEM0QzRDM7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0NXB4O1xuICAgICAgICB9XG4gICAgICB9YH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcblxuICByZW5kZXIgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgcGhvdG9JbmRleCxcbiAgICAgIGlzT3BlbixcbiAgICAgIHZlaGljbGVJbmRleFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIDxMYXlvdXQgdGl0bGU9J0ludmVudG9yeSc+XG4gICAgICA8aDE+VEhFIElOVkVOVE9SWSBZT1UnVkUgQkVFTiBXQUlUSU5HIEZPUjwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1jb250ZW50Jz5Db21taXR0ZWQgdG8gcHJvdmlkaW5nIHRoZSBoaWdoZXN0IHF1YWxpdHkgdmVoaWNsZSdzIHdpdGggc21hbGxlciBwcmljZSB0YWdzIGFuZCBubyBoaWRkZW4gZmVlJ3MuIFNwZWNpYWxpemluZyBpbiBicmFuZGVkIHRpdGxlIFRydWNrcyE8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICB7dGhpcy5wcm9wcy52ZWhpY2xlcy5tYXAoKHZlaGljbGUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgdGhpcy5yZW5kZXJWZWhpY2xlKHZlaGljbGUuaWQsIHZlaGljbGUgLGluZGV4KVxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2xpZ2h0Ym94Jz57aXNPcGVuICYmXG4gICAgICAgIDxMaWdodGJveFxuICAgICAgICAgIG1haW5TcmM9e3RoaXMucHJvcHMudmVoaWNsZXNbdmVoaWNsZUluZGV4XS5pbWdzW3Bob3RvSW5kZXhdfVxuICAgICAgICAgIG5leHRTcmM9e3RoaXMucHJvcHMudmVoaWNsZXNbdmVoaWNsZUluZGV4XS5pbWdzWyhwaG90b0luZGV4ICsgMSkgJSB0aGlzLnByb3BzLnZlaGljbGVzW3ZlaGljbGVJbmRleF0uaW1ncy5sZW5ndGhdfVxuICAgICAgICAgIHByZXZTcmM9e3RoaXMucHJvcHMudmVoaWNsZXNbdmVoaWNsZUluZGV4XS5pbWdzWyhwaG90b0luZGV4ICsgdGhpcy5wcm9wcy52ZWhpY2xlc1t2ZWhpY2xlSW5kZXhdLmltZ3MubGVuZ3RoIC0gMSkgJSB0aGlzLnByb3BzLnZlaGljbGVzW3ZlaGljbGVJbmRleF0uaW1ncy5sZW5ndGhdfVxuXG4gICAgICAgICAgb25DbG9zZVJlcXVlc3Q9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBpc09wZW46IGZhbHNlIH0pfVxuICAgICAgICAgIG9uTW92ZVByZXZSZXF1ZXN0PXsoKSA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHBob3RvSW5kZXg6IChwaG90b0luZGV4ICsgdGhpcy5wcm9wcy52ZWhpY2xlc1t2ZWhpY2xlSW5kZXhdLmltZ3MubGVuZ3RoIC0gMSkgJSB0aGlzLnByb3BzLnZlaGljbGVzW3ZlaGljbGVJbmRleF0uaW1ncy5sZW5ndGgsXG4gICAgICAgICAgfSl9XG4gICAgICAgICAgb25Nb3ZlTmV4dFJlcXVlc3Q9eygpID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcGhvdG9JbmRleDogKHBob3RvSW5kZXggKyAxKSAlIHRoaXMucHJvcHMudmVoaWNsZXNbdmVoaWNsZUluZGV4XS5pbWdzLmxlbmd0aCxcbiAgICAgICAgICB9KX1cbiAgICAgICAgICB3cmFwcGVyQ2xhc3NOYW1lPSdsaWdodGJveCdcbiAgICAgICAgLz5cbiAgICAgIH08L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2B7XG4gICAgLndyYXBwZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgLmxpZ2h0Ym94IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgLnRleHQtY29udGVudCB7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cbiAgICBoMSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgfVxuICB9YH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gIH1cbn1cblxuVmVoaWNsZXMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcmVxIH0pID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vc3RyaWNrbGFuZC1jYXJzLWFwaS5oZXJva3VhcHAuY29tL2NhcnMnKVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gIGNvbnNvbGUubG9nKGBDYXIgZGF0YSBmZXRjaGVkLiBDb3VudDogJHtkYXRhLmxlbmd0aH1gKVxuXG4gIHJldHVybiB7XG4gICAgdmVoaWNsZXM6IGRhdGFcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoVmVoaWNsZXMpO1xuIl19 */\n/*@ sourceURL=/Users/bertcurtis/strickland-next/pages/inventory.js */"));
    });

    return _this;
  }

  return Vehicles;
}(react__WEBPACK_IMPORTED_MODULE_13__["Component"]);

Vehicles.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var req, res, data;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref.req;
            _context.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default()('https://strickland-cars-api.herokuapp.com/cars');

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            data = _context.sent;
            console.log("Car data fetched. Count: ".concat(data.length));
            return _context.abrupt("return", {
              vehicles: data
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_12__["withRouter"])(Vehicles));

/***/ }),

/***/ 4:
/*!**********************************!*\
  !*** multi ./pages/inventory.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bertcurtis/strickland-next/pages/inventory.js */"./pages/inventory.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/reflect/construct":
/*!*******************************************************!*\
  !*** external "core-js/library/fn/reflect/construct" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next-server/head":
/*!***********************************!*\
  !*** external "next-server/head" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-image-lightbox":
/*!***************************************!*\
  !*** external "react-image-lightbox" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-image-lightbox");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=inventory.js.map