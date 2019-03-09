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
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-1188567482" + " " + (( true ? ' home-link' : undefined) || false)
    }, navProp.text)));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1188567482"
  }, "body.jsx-1188567482{margin:0;}.active.jsx-1188567482{background-color:#0000FF;}.nav-link.jsx-1188567482{-webkit-text-decoration:none;text-decoration:none;padding:10px;display:block;}ul.topnav.jsx-1188567482{list-style-type:none;margin:0;padding:0;overflow:hidden;background-color:#333;}ul.topnav.jsx-1188567482 li.jsx-1188567482{float:right;}ul.topnav.jsx-1188567482 li.jsx-1188567482 a.jsx-1188567482{display:block;color:white;text-align:center;padding:14px 16px;-webkit-text-decoration:none;text-decoration:none;font-family:\"Menlo\";}ul.topnav.jsx-1188567482 li.jsx-1188567482 a.jsx-1188567482:hover.jsx-1188567482:not(.active){background-color:#111;}ul.topnav.jsx-1188567482 li.left.jsx-1188567482{float:left;}@media screen and (max-width:600px){ul.topnav.jsx-1188567482 li.left.jsx-1188567482,ul.topnav.jsx-1188567482 li.jsx-1188567482{float:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZXJ0Y3VydGlzL3N0cmlja2xhbmQtbmV4dC9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ1ksQUFFc0IsQUFHZ0IsQUFHSixBQUtBLEFBT1QsQUFHRSxBQVFRLEFBR1gsQUFJYSxTQW5DNUIsRUFnQ0EsQUFHNkIsQ0FqQjdCLEVBR2dCLE9BVkgsQ0FrQmIsR0ExQkEsQ0FtQnNCLElBVlIsVUFDTSxJQVVFLE1BakJMLE1BUVMsTUFVRCxDQWpCUCxjQUNsQixDQU9BLGtDQVV3QixvQkFDeEIiLCJmaWxlIjoiL1VzZXJzL2JlcnRjdXJ0aXMvc3RyaWNrbGFuZC1uZXh0L2NvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnLi9MaW5rJ1xuaW1wb3J0IGltZyBmcm9tICcuLi9pbWcvbG9nby53ZWJwJ1xuXG4vKipcbiAqICAgICAgICAgICAgICAgICBcbiAqL1xuXG5mdW5jdGlvbiBuYXZQcm9wcygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgICB7IGhyZWY6ICcvJywgdGV4dDogJ0hvbWUnLCBhbGlnbjogJ2xlZnQnLCBpc0FjdGl2ZTogdHJ1ZSB9LFxuICAgICAgICB7IGhyZWY6ICcvYWJvdXQnLCB0ZXh0OiAnQWJvdXQnLCBhbGlnbjogJ3JpZ2h0JywgaXNBY3RpdmU6IGZhbHNlIH0sXG4gICAgICAgIHsgaHJlZjogJy9pbnZlbnRvcnknLCB0ZXh0OiAnSW52ZW50b3J5JywgYWxpZ246ICdyaWdodCcsIGlzQWN0aXZlOiBmYWxzZSB9LFxuICAgICAgICB7IGhyZWY6ICcvY29udGFjdCcsIHRleHQ6ICdDb250YWN0IFVzJywgYWxpZ246ICdyaWdodCcsIGlzQWN0aXZlOiBmYWxzZSB9LFxuICAgIF1cbn1cbmNvbnN0IEhlYWRlciA9ICgpID0+IChcbiAgICA8ZGl2PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwidG9wbmF2XCI+XG4gICAgICAgICAgICB7bmF2UHJvcHMoKS5tYXAoKG5hdlByb3ApID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2Ake25hdlByb3AudGV4dH0tbGlgfSBjbGFzc05hbWU9e25hdlByb3AuYWxpZ24gPT0gJ2xlZnQnID8gJ2xlZnQnIDogbnVsbH0+XG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAga2V5PXtuYXZQcm9wLnRleHR9XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT0nYWN0aXZlJ1xuICAgICAgICAgICAgICAgICAgICBocmVmPXtuYXZQcm9wLmhyZWZ9PlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9eyduYXYtbGluaycgKyBuYXZQcm9wLmlzQWN0aXZlID8gJyBob21lLWxpbmsnIDogJyd9PlxuICAgICAgICAgICAgICAgICAgICAgICAge25hdlByb3AudGV4dH1cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgICAgPHN0eWxlIGpzeD57XG4gICAgICAgICAgICBgYm9keSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMEZGO1xuICAgICAgICB9XG4gICAgICAgIC5uYXYtbGluayB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgdWwudG9wbmF2IHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICAgICAgfVxuICAgICAgICB1bC50b3BuYXYgbGkge1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB9ICAgICBcbiAgICAgICAgdWwudG9wbmF2IGxpIGEge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJNZW5sb1wiO1xuICAgICAgICB9ICAgIFxuICAgICAgICB1bC50b3BuYXYgbGkgYTpob3Zlcjpub3QoLmFjdGl2ZSkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcbiAgICAgICAgfVxuICAgICAgICB1bC50b3BuYXYgbGkubGVmdCB7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgdWwudG9wbmF2IGxpLmxlZnQsIFxuICAgICAgICAgICAgdWwudG9wbmF2IGxpIHtmbG9hdDogbm9uZTt9ICAgICAgICAgICBcbiAgICAgICAgfWB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXX0= */\n/*@ sourceURL=/Users/bertcurtis/strickland-next/components/Header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.fe6649f9ddcbc085ddad.hot-update.js.map