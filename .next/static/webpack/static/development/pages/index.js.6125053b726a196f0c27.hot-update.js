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
    className: "jsx-3404759241"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-3404759241" + " " + "topnav"
  }, navProps().map(function (navProp) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: "".concat(navProp.text, "-li"),
      className: "jsx-3404759241" + " " + ((navProp.align == 'left' ? 'left' : null) || "")
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: navProp.text,
      activeClassName: "active",
      href: navProp.href
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-3404759241" + " " + (( true ? ' home-link' : undefined) || false)
    }, navProp.text == 'Home' ? '' : navProp.text, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: navProp.text == 'Home' ? _img_logo_webp__WEBPACK_IMPORTED_MODULE_3___default.a : null,
      className: "jsx-3404759241" + " " + 'img'
    }))));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3404759241"
  }, "body.jsx-3404759241{margin:0;}.active.jsx-3404759241{background-color:#0000FF;}.nav-link.jsx-3404759241{-webkit-text-decoration:none;text-decoration:none;padding:10px;display:block;}.img.jsx-3404759241{display:block;padding:0;}ul.topnav.jsx-3404759241{list-style-type:none;margin:0;padding:0;overflow:hidden;background-color:#333;}ul.topnav.jsx-3404759241 li.jsx-3404759241{float:right;}ul.topnav.jsx-3404759241 li.jsx-3404759241 a.jsx-3404759241{display:block;color:white;text-align:center;padding:14px 16px;-webkit-text-decoration:none;text-decoration:none;font-family:\"Menlo\";}ul.topnav.jsx-3404759241 li.jsx-3404759241 a.jsx-3404759241:hover.jsx-3404759241:not(.active){background-color:#111;}ul.topnav.jsx-3404759241 li.left.jsx-3404759241{float:left;}@media screen and (max-width:600px){ul.topnav.jsx-3404759241 li.left.jsx-3404759241,ul.topnav.jsx-3404759241 li.jsx-3404759241{float:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZXJ0Y3VydGlzL3N0cmlja2xhbmQtbmV4dC9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQ1ksQUFFc0IsQUFHZ0IsQUFHSixBQUtQLEFBSU8sQUFPVCxBQUdFLEFBUVEsQUFHWCxBQUlhLFNBdkM1QixFQW9DQSxBQUc2QixDQWpCN0IsRUFYYyxBQWNFLE9BVkgsQ0FrQmIsRUFyQkEsQ0FUQSxDQXVCc0IsSUFWUixVQUNNLElBVUUsTUFyQkwsTUFZUyxNQVVELENBckJQLGNBQ2xCLENBV0Esa0NBVXdCLG9CQUN4QiIsImZpbGUiOiIvVXNlcnMvYmVydGN1cnRpcy9zdHJpY2tsYW5kLW5leHQvY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICcuL0xpbmsnXG5pbXBvcnQgaW1nIGZyb20gJy4uL2ltZy9sb2dvLndlYnAnXG5cbi8qKlxuICogICAgICAgICAgICAgICAgIFxuICovXG5cbmZ1bmN0aW9uIG5hdlByb3BzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAgIHsgaHJlZjogJy8nLCB0ZXh0OiAnSG9tZScsIGFsaWduOiAnbGVmdCcsIGlzQWN0aXZlOiB0cnVlIH0sXG4gICAgICAgIHsgaHJlZjogJy9hYm91dCcsIHRleHQ6ICdBYm91dCcsIGFsaWduOiAncmlnaHQnLCBpc0FjdGl2ZTogZmFsc2UgfSxcbiAgICAgICAgeyBocmVmOiAnL2ludmVudG9yeScsIHRleHQ6ICdJbnZlbnRvcnknLCBhbGlnbjogJ3JpZ2h0JywgaXNBY3RpdmU6IGZhbHNlIH0sXG4gICAgICAgIHsgaHJlZjogJy9jb250YWN0JywgdGV4dDogJ0NvbnRhY3QgVXMnLCBhbGlnbjogJ3JpZ2h0JywgaXNBY3RpdmU6IGZhbHNlIH0sXG4gICAgXVxufVxuY29uc3QgSGVhZGVyID0gKCkgPT4gKFxuICAgIDxkaXY+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0b3BuYXZcIj5cbiAgICAgICAgICAgIHtuYXZQcm9wcygpLm1hcCgobmF2UHJvcCkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17YCR7bmF2UHJvcC50ZXh0fS1saWB9IGNsYXNzTmFtZT17bmF2UHJvcC5hbGlnbiA9PSAnbGVmdCcgPyAnbGVmdCcgOiBudWxsfT4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICBrZXk9e25hdlByb3AudGV4dH1cbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPSdhY3RpdmUnXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e25hdlByb3AuaHJlZn0+ICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9eyduYXYtbGluaycgKyBuYXZQcm9wLmlzQWN0aXZlID8gJyBob21lLWxpbmsnIDogJyd9PlxuICAgICAgICAgICAgICAgICAgICAgICAge25hdlByb3AudGV4dCA9PSAnSG9tZScgPyAnJyA6IG5hdlByb3AudGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdpbWcnIHNyYz17bmF2UHJvcC50ZXh0ID09ICdIb21lJyA/IGltZyA6IG51bGx9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgICAgPHN0eWxlIGpzeD57XG4gICAgICAgICAgICBgYm9keSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMEZGO1xuICAgICAgICB9XG4gICAgICAgIC5uYXYtbGluayB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgLmltZyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cbiAgICAgICAgdWwudG9wbmF2IHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICAgICAgfVxuICAgICAgICB1bC50b3BuYXYgbGkge1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB9ICAgICBcbiAgICAgICAgdWwudG9wbmF2IGxpIGEge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJNZW5sb1wiO1xuICAgICAgICB9ICAgIFxuICAgICAgICB1bC50b3BuYXYgbGkgYTpob3Zlcjpub3QoLmFjdGl2ZSkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcbiAgICAgICAgfVxuICAgICAgICB1bC50b3BuYXYgbGkubGVmdCB7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgdWwudG9wbmF2IGxpLmxlZnQsIFxuICAgICAgICAgICAgdWwudG9wbmF2IGxpIHtmbG9hdDogbm9uZTt9ICAgICAgICAgICBcbiAgICAgICAgfWB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXX0= */\n/*@ sourceURL=/Users/bertcurtis/strickland-next/components/Header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.6125053b726a196f0c27.hot-update.js.map