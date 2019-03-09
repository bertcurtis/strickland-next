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
    className: "jsx-2506736175"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-2506736175" + " " + "topnav"
  }, navProps().map(function (navProp) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: "".concat(navProp.text, "-li"),
      className: "jsx-2506736175" + " " + ((navProp.align == 'left' ? 'left' : null) || "")
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: navProp.text,
      activeClassName: "active",
      href: navProp.href
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-2506736175" + " " + (( true ? ' home-link' : undefined) || false)
    }, navProp.text)));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2506736175"
  }, "body.jsx-2506736175{margin:0;}.active.jsx-2506736175{background-color:#0000FF;}.nav-link.jsx-2506736175{-webkit-text-decoration:none;text-decoration:none;padding:10px;display:grid;}.img.jsx-2506736175{max-width:100%;max-height:100vh;margin:auto;}ul.topnav.jsx-2506736175{list-style-type:none;margin:0;padding:0;overflow:hidden;background-color:#333;}ul.topnav.jsx-2506736175 li.jsx-2506736175{float:right;}ul.topnav.jsx-2506736175 li.jsx-2506736175 a.jsx-2506736175{display:grid;color:white;text-align:center;padding:14px 16px;-webkit-text-decoration:none;text-decoration:none;font-family:\"Menlo\";}ul.topnav.jsx-2506736175 li.jsx-2506736175 a.jsx-2506736175:hover.jsx-2506736175:not(.active){background-color:#111;}ul.topnav.jsx-2506736175 li.left.jsx-2506736175{float:left;}@media screen and (max-width:600px){ul.topnav.jsx-2506736175 li.left.jsx-2506736175,ul.topnav.jsx-2506736175 li.jsx-2506736175{float:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZXJ0Y3VydGlzL3N0cmlja2xhbmQtbmV4dC9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ1ksQUFFc0IsQUFHZ0IsQUFHSixBQUtOLEFBS00sQUFPVCxBQUdDLEFBUVMsQUFHWCxBQUlhLFNBeEM1QixFQXFDQSxBQUc2QixDQWpCN0IsQ0FHZ0IsRUFmSyxNQUtSLENBa0JiLEdBL0JBLEFBd0JzQixLQVZSLEVBTEUsUUFNSSxHQVVFLENBZnRCLE1BUGlCLE1BYVMsS0FVRCxFQXRCUixhQUNqQixFQVlBLGlDQVV3QixvQkFDeEIiLCJmaWxlIjoiL1VzZXJzL2JlcnRjdXJ0aXMvc3RyaWNrbGFuZC1uZXh0L2NvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnLi9MaW5rJ1xuaW1wb3J0IGltZyBmcm9tICcuLi9pbWcvbG9nby53ZWJwJ1xuXG4vKipcbiAqICAgICAgICAgICAgICAgICBcbiAqL1xuXG5mdW5jdGlvbiBuYXZQcm9wcygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgICB7IGhyZWY6ICcvJywgdGV4dDogJ0hvbWUnLCBhbGlnbjogJ2xlZnQnLCBpc0FjdGl2ZTogdHJ1ZSB9LFxuICAgICAgICB7IGhyZWY6ICcvYWJvdXQnLCB0ZXh0OiAnQWJvdXQnLCBhbGlnbjogJ3JpZ2h0JywgaXNBY3RpdmU6IGZhbHNlIH0sXG4gICAgICAgIHsgaHJlZjogJy9pbnZlbnRvcnknLCB0ZXh0OiAnSW52ZW50b3J5JywgYWxpZ246ICdyaWdodCcsIGlzQWN0aXZlOiBmYWxzZSB9LFxuICAgICAgICB7IGhyZWY6ICcvY29udGFjdCcsIHRleHQ6ICdDb250YWN0IFVzJywgYWxpZ246ICdyaWdodCcsIGlzQWN0aXZlOiBmYWxzZSB9LFxuICAgIF1cbn1cbmNvbnN0IEhlYWRlciA9ICgpID0+IChcbiAgICA8ZGl2PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwidG9wbmF2XCI+XG4gICAgICAgICAgICB7bmF2UHJvcHMoKS5tYXAoKG5hdlByb3ApID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2Ake25hdlByb3AudGV4dH0tbGlgfSBjbGFzc05hbWU9e25hdlByb3AuYWxpZ24gPT0gJ2xlZnQnID8gJ2xlZnQnIDogbnVsbH0+ICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAga2V5PXtuYXZQcm9wLnRleHR9XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT0nYWN0aXZlJ1xuICAgICAgICAgICAgICAgICAgICBocmVmPXtuYXZQcm9wLmhyZWZ9PiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXsnbmF2LWxpbmsnICsgbmF2UHJvcC5pc0FjdGl2ZSA/ICcgaG9tZS1saW5rJyA6ICcnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtuYXZQcm9wLnRleHR9XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxzdHlsZSBqc3g+e1xuICAgICAgICAgICAgYGJvZHkge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5hY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDBGRjtcbiAgICAgICAgfVxuICAgICAgICAubmF2LWxpbmsge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIH1cbiAgICAgICAgLmltZyB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgfVxuICAgICAgICB1bC50b3BuYXYge1xuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAgICAgICB9XG4gICAgICAgIHVsLnRvcG5hdiBsaSB7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIH0gICAgIFxuICAgICAgICB1bC50b3BuYXYgbGkgYSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMTRweCAxNnB4O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTWVubG9cIjtcbiAgICAgICAgfSAgICBcbiAgICAgICAgdWwudG9wbmF2IGxpIGE6aG92ZXI6bm90KC5hY3RpdmUpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XG4gICAgICAgIH1cbiAgICAgICAgdWwudG9wbmF2IGxpLmxlZnQge1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAgIHVsLnRvcG5hdiBsaS5sZWZ0LCBcbiAgICAgICAgICAgIHVsLnRvcG5hdiBsaSB7ZmxvYXQ6IG5vbmU7fSAgICAgICAgICAgXG4gICAgICAgIH1gfVxuICAgICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il19 */\n/*@ sourceURL=/Users/bertcurtis/strickland-next/components/Header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.cdcfb976621bde5aaf30.hot-update.js.map