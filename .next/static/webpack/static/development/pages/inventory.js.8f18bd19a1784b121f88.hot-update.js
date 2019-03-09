webpackHotUpdate("static/development/pages/inventory.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_CommonLayout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CommonLayout.js */ "./components/CommonLayout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_6__);








var Vehicle = function Vehicle(_ref) {
  var key = _ref.key,
      vehicleData = _ref.vehicleData;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    key: key
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", null, "".concat(vehicleData.year, " ").concat(vehicleData.make, " ").concat(vehicleData.model)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "Miles: ".concat(vehicleData.miles)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "Color: ".concat(vehicleData.extcolor)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "Trim: ".concat(vehicleData.trim)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "Price: ".concat(vehicleData.price)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "".concat(vehicleData.description)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: vehicleData.imgs[0]
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: vehicleData.imgs[1]
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: vehicleData.imgs[2]
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Link, {
    href: "/car"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", null, "See More...")))))));
};

var Vehicles = function Vehicles(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_CommonLayout_js__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", null, props.vehicles.map(function (vehicle) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Vehicle, {
      key: vehicle.id,
      vehicleData: vehicle
    });
  })));
};

Vehicles.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('https://strickland-cars-api.herokuapp.com/cars');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          console.log("Car data fetched. Count: ".concat(data.length));
          return _context.abrupt("return", {
            vehicles: data
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(Vehicles));

/***/ })

})
//# sourceMappingURL=inventory.js.8f18bd19a1784b121f88.hot-update.js.map