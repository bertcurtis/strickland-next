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
    className: "jsx-1188567482"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-1188567482" + " " + "topnav"
  }, navProps().map(function (navProp) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: "".concat(navProp.text, "-li"),
      className: "jsx-1188567482" + " " + ((navProp.align == 'left' ? 'left' : null) || "")
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: navProp.text,
      activeClassName: "active",
      href: navProp.href
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: navProp.text == 'Home' ? _img_logo_webp__WEBPACK_IMPORTED_MODULE_3___default.a : null,
      className: "jsx-1188567482"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-1188567482" + " " + (( true ? ' home-link' : undefined) || false)
    }, navProp.text)));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1188567482"
  }, "body.jsx-1188567482{margin:0;}.active.jsx-1188567482{background-color:#0000FF;}.nav-link.jsx-1188567482{-webkit-text-decoration:none;text-decoration:none;padding:10px;display:block;}ul.topnav.jsx-1188567482{list-style-type:none;margin:0;padding:0;overflow:hidden;background-color:#333;}ul.topnav.jsx-1188567482 li.jsx-1188567482{float:right;}ul.topnav.jsx-1188567482 li.jsx-1188567482 a.jsx-1188567482{display:block;color:white;text-align:center;padding:14px 16px;-webkit-text-decoration:none;text-decoration:none;font-family:\"Menlo\";}ul.topnav.jsx-1188567482 li.jsx-1188567482 a.jsx-1188567482:hover.jsx-1188567482:not(.active){background-color:#111;}ul.topnav.jsx-1188567482 li.left.jsx-1188567482{float:left;}@media screen and (max-width:600px){ul.topnav.jsx-1188567482 li.left.jsx-1188567482,ul.topnav.jsx-1188567482 li.jsx-1188567482{float:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZXJ0Y3VydGlzL3N0cmlja2xhbmQtbmV4dC9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQ1ksQUFFc0IsQUFHZ0IsQUFHSixBQUtBLEFBT1QsQUFHRSxBQVFRLEFBR1gsQUFJYSxTQW5DNUIsRUFnQ0EsQUFHNkIsQ0FqQjdCLEVBR2dCLE9BVkgsQ0FrQmIsR0ExQkEsQ0FtQnNCLElBVlIsVUFDTSxJQVVFLE1BakJMLE1BUVMsTUFVRCxDQWpCUCxjQUNsQixDQU9BLGtDQVV3QixvQkFDeEIiLCJmaWxlIjoiL1VzZXJzL2JlcnRjdXJ0aXMvc3RyaWNrbGFuZC1uZXh0L2NvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnLi9MaW5rJ1xuaW1wb3J0IGltZyBmcm9tICcuLi9pbWcvbG9nby53ZWJwJ1xuXG4vKipcbiAqICAgICAgICAgICAgICAgICBcbiAqL1xuXG5mdW5jdGlvbiBuYXZQcm9wcygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgICB7IGhyZWY6ICcvJywgdGV4dDogJ0hvbWUnLCBhbGlnbjogJ2xlZnQnLCBpc0FjdGl2ZTogdHJ1ZSB9LFxuICAgICAgICB7IGhyZWY6ICcvYWJvdXQnLCB0ZXh0OiAnQWJvdXQnLCBhbGlnbjogJ3JpZ2h0JywgaXNBY3RpdmU6IGZhbHNlIH0sXG4gICAgICAgIHsgaHJlZjogJy9pbnZlbnRvcnknLCB0ZXh0OiAnSW52ZW50b3J5JywgYWxpZ246ICdyaWdodCcsIGlzQWN0aXZlOiBmYWxzZSB9LFxuICAgICAgICB7IGhyZWY6ICcvY29udGFjdCcsIHRleHQ6ICdDb250YWN0IFVzJywgYWxpZ246ICdyaWdodCcsIGlzQWN0aXZlOiBmYWxzZSB9LFxuICAgIF1cbn1cbmNvbnN0IEhlYWRlciA9ICgpID0+IChcbiAgICA8ZGl2PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwidG9wbmF2XCI+XG4gICAgICAgICAgICB7bmF2UHJvcHMoKS5tYXAoKG5hdlByb3ApID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2Ake25hdlByb3AudGV4dH0tbGlgfSBjbGFzc05hbWU9e25hdlByb3AuYWxpZ24gPT0gJ2xlZnQnID8gJ2xlZnQnIDogbnVsbH0+XG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAga2V5PXtuYXZQcm9wLnRleHR9XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT0nYWN0aXZlJ1xuICAgICAgICAgICAgICAgICAgICBocmVmPXtuYXZQcm9wLmhyZWZ9PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bmF2UHJvcC50ZXh0ID09ICdIb21lJyA/IGltZyA6IG51bGx9Lz4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17J25hdi1saW5rJyArIG5hdlByb3AuaXNBY3RpdmUgPyAnIGhvbWUtbGluaycgOiAnJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bmF2UHJvcC50ZXh0fVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8c3R5bGUganN4PntcbiAgICAgICAgICAgIGBib2R5IHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICAuYWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwRkY7XG4gICAgICAgIH1cbiAgICAgICAgLm5hdi1saW5rIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICB1bC50b3BuYXYge1xuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAgICAgICB9XG4gICAgICAgIHVsLnRvcG5hdiBsaSB7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIH0gICAgIFxuICAgICAgICB1bC50b3BuYXYgbGkgYSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk1lbmxvXCI7XG4gICAgICAgIH0gICAgXG4gICAgICAgIHVsLnRvcG5hdiBsaSBhOmhvdmVyOm5vdCguYWN0aXZlKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xuICAgICAgICB9XG4gICAgICAgIHVsLnRvcG5hdiBsaS5sZWZ0IHtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgICB1bC50b3BuYXYgbGkubGVmdCwgXG4gICAgICAgICAgICB1bC50b3BuYXYgbGkge2Zsb2F0OiBub25lO30gICAgICAgICAgIFxuICAgICAgICB9YH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdfQ== */\n/*@ sourceURL=/Users/bertcurtis/strickland-next/components/Header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.57ee023ecda91f3912d6.hot-update.js.map