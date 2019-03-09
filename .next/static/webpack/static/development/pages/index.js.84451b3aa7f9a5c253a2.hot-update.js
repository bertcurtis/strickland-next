webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Link */ "./components/Link.js");
/* harmony import */ var _img_logo_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/logo.webp */ "./img/logo.webp");
/* harmony import */ var _img_logo_webp__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_logo_webp__WEBPACK_IMPORTED_MODULE_3__);




/**
 *                 
 */

function navProps() {
  return [{
    href: '/',
    text: 'Home',
    align: 'left',
    isActive: true
  }, {
    href: '/about',
    text: 'About',
    align: 'right',
    isActive: false
  }, {
    href: '/inventory',
    text: 'Inventory',
    align: 'right',
    isActive: false
  }, {
    href: '/contact',
    text: 'Contact Us',
    align: 'right',
    isActive: false
  }];
}

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-669862732"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-669862732" + " " + "topnav"
  }, navProps().map(function (navProp) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: "".concat(navProp.text, "-li"),
      className: "jsx-669862732" + " " + ((navProp.align == 'left' ? 'left' : null) || "")
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: navProp.text,
      activeClassName: "active",
      href: navProp.href
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-669862732" + " " + (( true ? ' home-link' : undefined) || false)
    }, navProp.text == 'Home' ? '' : navProp.text, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: navProp.text == 'Home' ? _img_logo_webp__WEBPACK_IMPORTED_MODULE_3___default.a : null,
      className: "jsx-669862732" + " " + 'img'
    }))));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "669862732"
  }, "body.jsx-669862732{margin:0;}.active.jsx-669862732{background-color:#0000FF;}.nav-link.jsx-669862732{-webkit-text-decoration:none;text-decoration:none;padding:10px;display:block;}.img.jsx-669862732{display:block;padding:14px 16px;}ul.topnav.jsx-669862732{list-style-type:none;margin:0;padding:0;overflow:hidden;background-color:#333;}ul.topnav.jsx-669862732 li.jsx-669862732{float:right;}ul.topnav.jsx-669862732 li.jsx-669862732 a.jsx-669862732{display:block;color:white;text-align:center;padding:14px 16px;-webkit-text-decoration:none;text-decoration:none;font-family:\"Menlo\";}ul.topnav.jsx-669862732 li.jsx-669862732 a.jsx-669862732:hover.jsx-669862732:not(.active){background-color:#111;}ul.topnav.jsx-669862732 li.left.jsx-669862732{float:left;}@media screen and (max-width:600px){ul.topnav.jsx-669862732 li.left.jsx-669862732,ul.topnav.jsx-669862732 li.jsx-669862732{float:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZXJ0Y3VydGlzL3N0cmlja2xhbmQtbmV4dC9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQ1ksQUFFc0IsQUFHZ0IsQUFHSixBQUtQLEFBSU8sQUFPVCxBQUdFLEFBUVEsQUFHWCxBQUlhLFNBdkM1QixFQW9DQSxBQUc2QixDQWpCN0IsRUFYc0IsQUFjTixPQVZILENBa0JiLEdBOUJBLENBdUJzQixJQVZSLEVBSmQsUUFLb0IsSUFVRSxNQXJCTCxNQVlTLE1BVUQsQ0FyQlAsY0FDbEIsQ0FXQSxrQ0FVd0Isb0JBQ3hCIiwiZmlsZSI6Ii9Vc2Vycy9iZXJ0Y3VydGlzL3N0cmlja2xhbmQtbmV4dC9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJy4vTGluaydcbmltcG9ydCBpbWcgZnJvbSAnLi4vaW1nL2xvZ28ud2VicCdcblxuLyoqXG4gKiAgICAgICAgICAgICAgICAgXG4gKi9cblxuZnVuY3Rpb24gbmF2UHJvcHMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgeyBocmVmOiAnLycsIHRleHQ6ICdIb21lJywgYWxpZ246ICdsZWZ0JywgaXNBY3RpdmU6IHRydWUgfSxcbiAgICAgICAgeyBocmVmOiAnL2Fib3V0JywgdGV4dDogJ0Fib3V0JywgYWxpZ246ICdyaWdodCcsIGlzQWN0aXZlOiBmYWxzZSB9LFxuICAgICAgICB7IGhyZWY6ICcvaW52ZW50b3J5JywgdGV4dDogJ0ludmVudG9yeScsIGFsaWduOiAncmlnaHQnLCBpc0FjdGl2ZTogZmFsc2UgfSxcbiAgICAgICAgeyBocmVmOiAnL2NvbnRhY3QnLCB0ZXh0OiAnQ29udGFjdCBVcycsIGFsaWduOiAncmlnaHQnLCBpc0FjdGl2ZTogZmFsc2UgfSxcbiAgICBdXG59XG5jb25zdCBIZWFkZXIgPSAoKSA9PiAoXG4gICAgPGRpdj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRvcG5hdlwiPlxuICAgICAgICAgICAge25hdlByb3BzKCkubWFwKChuYXZQcm9wKSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtgJHtuYXZQcm9wLnRleHR9LWxpYH0gY2xhc3NOYW1lPXtuYXZQcm9wLmFsaWduID09ICdsZWZ0JyA/ICdsZWZ0JyA6IG51bGx9PiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgIGtleT17bmF2UHJvcC50ZXh0fVxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9J2FjdGl2ZSdcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17bmF2UHJvcC5ocmVmfT4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17J25hdi1saW5rJyArIG5hdlByb3AuaXNBY3RpdmUgPyAnIGhvbWUtbGluaycgOiAnJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bmF2UHJvcC50ZXh0ID09ICdIb21lJyA/ICcnIDogbmF2UHJvcC50ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2ltZycgc3JjPXtuYXZQcm9wLnRleHQgPT0gJ0hvbWUnID8gaW1nIDogbnVsbH0vPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8c3R5bGUganN4PntcbiAgICAgICAgICAgIGBib2R5IHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICAuYWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwRkY7XG4gICAgICAgIH1cbiAgICAgICAgLm5hdi1saW5rIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICAuaW1nIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcGFkZGluZzogMTRweCAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIHVsLnRvcG5hdiB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgICAgIH1cbiAgICAgICAgdWwudG9wbmF2IGxpIHtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgfSAgICAgXG4gICAgICAgIHVsLnRvcG5hdiBsaSBhIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMTRweCAxNnB4O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTWVubG9cIjtcbiAgICAgICAgfSAgICBcbiAgICAgICAgdWwudG9wbmF2IGxpIGE6aG92ZXI6bm90KC5hY3RpdmUpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XG4gICAgICAgIH1cbiAgICAgICAgdWwudG9wbmF2IGxpLmxlZnQge1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAgIHVsLnRvcG5hdiBsaS5sZWZ0LCBcbiAgICAgICAgICAgIHVsLnRvcG5hdiBsaSB7ZmxvYXQ6IG5vbmU7fSAgICAgICAgICAgXG4gICAgICAgIH1gfVxuICAgICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il19 */\n/*@ sourceURL=/Users/bertcurtis/strickland-next/components/Header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.84451b3aa7f9a5c253a2.hot-update.js.map