module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Nav__ = __webpack_require__("./components/Nav.jsx");
var _jsxFileName = "/Users/joeyklee/Code/src/github/nyuitp/itp-tutorial-maker/components/Header.jsx";




var Header = function Header() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: "jsx-655460070"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Nav__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "655460070",
    css: "header.jsx-655460070{width:100%;height:60px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNYyxBQUdnQixXQUNBLFlBQ0MsMEVBQ1MsOEVBQ0gsNkZBQ25CIiwiZmlsZSI6ImNvbXBvbmVudHMvSGVhZGVyLmpzeCIsInNvdXJjZVJvb3QiOiIvVXNlcnMvam9leWtsZWUvQ29kZS9zcmMvZ2l0aHViL255dWl0cC9pdHAtdHV0b3JpYWwtbWFrZXIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvTmF2J1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAoXG5cdDxoZWFkZXI+XG5cdFx0PE5hdi8+XG5cblx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRoZWFkZXJ7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRoZWlnaHQ6NjBweDtcblx0XHRcdFx0ZGlzcGxheTpmbGV4O1xuXHRcdFx0XHRmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG5cdFx0XHRcdGFsaWduLWl0ZW1zOmNlbnRlcjtcblx0XHRcdH1cblx0XHRcdGB9PC9zdHlsZT5cblx0PC9oZWFkZXI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlciJdfQ== */\n/*@ sourceURL=components/Header.jsx */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/MyLayout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header__ = __webpack_require__("./components/Header.jsx");
var _jsxFileName = "/Users/joeyklee/Code/src/github/nyuitp/itp-tutorial-maker/components/MyLayout.js";




var Layout = function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-3053196678"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-3053196678"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-3053196678" + " " + "container"
  }, props.children)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3053196678",
    css: "*.jsx-3053196678{box-sizing:border-box;font-family:Helvetica,sans serif;}main.jsx-3053196678{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.container.jsx-3053196678{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;max-width:960px;min-width:560px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTXlMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYWMsQUFHMkIsQUFLWCxBQVFELFdBUEMsQUFRQSxXQWJ1QixDQU10QixBQVFBLGdDQWJiLDBDQU1zQixBQVFBLDhFQVBILEFBUUgsZ0JBQ0EsZ0JBRWhCLDZEQVZBIiwiZmlsZSI6ImNvbXBvbmVudHMvTXlMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pvZXlrbGVlL0NvZGUvc3JjL2dpdGh1Yi9ueXVpdHAvaXRwLXR1dG9yaWFsLW1ha2VyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcidcblxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiAoXG5cblx0PGRpdiBpZD1cIkFwcFwiPlxuXHRcdFxuXHRcdDxIZWFkZXIgLz5cblx0XHQ8bWFpbj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdHtwcm9wcy5jaGlsZHJlbn1cblx0XHRcdDwvZGl2PlxuXHRcdDwvbWFpbj5cblxuXHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdCp7XG5cdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMgc2VyaWY7XG5cdFx0XHR9XG5cblx0XHRcdG1haW57XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRoZWlnaHQ6MTAwJTtcblx0XHRcdFx0ZGlzcGxheTpmbGV4O1xuXHRcdFx0XHRmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG5cdFx0XHRcdGFsaWduLWl0ZW1zOmNlbnRlcjtcblx0XHRcdH1cblxuXHRcdFx0LmNvbnRhaW5lcntcblx0XHRcdFx0d2lkdGg6MTAwJTtcblx0XHRcdFx0aGVpZ2h0OjEwMCU7XG5cdFx0XHRcdGRpc3BsYXk6ZmxleDtcblx0XHRcdFx0ZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuXHRcdFx0XHRtYXgtd2lkdGg6OTYwcHg7XG5cdFx0XHRcdG1pbi13aWR0aDo1NjBweDtcblx0XHRcdFx0ey8qYm9yZGVyOjFweCBzb2xpZCBibGFjazsqL31cblx0XHRcdH1cblxuXG5cdFx0YH08L3N0eWxlPlxuXHQ8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0Il19 */\n/*@ sourceURL=components/MyLayout.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./components/Nav.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = "/Users/joeyklee/Code/src/github/nyuitp/itp-tutorial-maker/components/Nav.jsx";


// This is the Link API


var Nav = function Nav() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-11740906"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-11740906"
  }, "Home Page")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    className: "jsx-11740906"
  }, "About Page")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "11740906",
    css: "nav.jsx-11740906{width:100%;height:100%;max-width:960px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}nav.jsx-11740906 a.jsx-11740906{margin-right:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZZSxBQUlzQixBQVNPLFdBUk4sT0FTYixLQVJrQixnQkFDTCwwRUFDTyxxRUFDSSxtR0FDTCw2RkFDbkIiLCJmaWxlIjoiY29tcG9uZW50cy9OYXYuanN4Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qb2V5a2xlZS9Db2RlL3NyYy9naXRodWIvbnl1aXRwL2l0cC10dXRvcmlhbC1tYWtlciIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgaXMgdGhlIExpbmsgQVBJXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cblxuY29uc3QgTmF2ID0gKCkgPT4gKFxuXHQ8bmF2PlxuICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgIDxhPkhvbWUgUGFnZTwvYT5cbiAgICA8L0xpbms+XG4gIFx0PExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICBcdFx0PGE+QWJvdXQgUGFnZTwvYT5cbiAgXHQ8L0xpbms+XG4gIFx0PHN0eWxlIGpzeD57YFxuXG4gIFx0ICAgICAgbmF2e1xuICBcdCAgICAgIFx0d2lkdGg6IDEwMCU7XG4gIFx0ICAgICAgXHRoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBtYXgtd2lkdGg6OTYwcHg7XG4gIFx0ICAgICAgXHRkaXNwbGF5OmZsZXg7XG4gIFx0ICAgICAgXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuICBcdCAgICAgIFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIFx0ICAgICAgXHRhbGlnbi1pdGVtczpjZW50ZXI7XG4gIFx0ICAgICAgfVxuICBcdCAgICAgIG5hdiBhe1xuICBcdCAgICAgIFx0bWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBcdCAgICAgIH1cbiAgXHQgICAgYH08L3N0eWxlPlxuXHQ8L25hdj5cblx0XG4pXG5cbmV4cG9ydCBkZWZhdWx0IE5hdiJdfQ== */\n/*@ sourceURL=components/Nav.jsx */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Nav);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Header__ = __webpack_require__("./components/Header.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_MyLayout__ = __webpack_require__("./components/MyLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_isomorphic_unfetch__);
var _jsxFileName = "/Users/joeyklee/Code/src/github/nyuitp/itp-tutorial-maker/pages/index.js";


// This is the Link API





var Index = function Index(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_MyLayout__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    className: "jsx-1362669575"
  }, " Hello Magic Tutorial Maker! "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    className: "jsx-1362669575"
  }, " I'm here to..."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    className: "jsx-1362669575" + " " + "actions"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_next_link___default.a, {
    href: "/create",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    className: "jsx-1362669575"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    className: "jsx-1362669575"
  }, " \uD83D\uDC49 Create a new tutorial!"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    className: "jsx-1362669575"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strike", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    className: "jsx-1362669575"
  }, "\uD83D\uDC49 Add an existing tutorial from Github!"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1362669575",
    css: "h1.jsx-1362669575{color:black;font-size:60px;margin:10px 0px 10px 0px;}h2.jsx-1362669575{color:black;font-size:48px;margin:10px 0px 10px 0px;}a.jsx-1362669575{-webkit-text-decoration:none;text-decoration:none;}.actions.jsx-1362669575{margin:30px 30px 0px 0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCZ0IsQUFHd0IsQUFNQyxBQU1RLEFBS0ksWUFoQlYsQUFNQSxhQVdoQixFQWhCMEIsQUFNQSx1QkFLMUIsRUFWQSxBQU1BIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qb2V5a2xlZS9Db2RlL3NyYy9naXRodWIvbnl1aXRwL2l0cC10dXRvcmlhbC1tYWtlciIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgaXMgdGhlIExpbmsgQVBJXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcblxuXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4gKFxuICA8TGF5b3V0PlxuICAgIFxuICAgIDxoMT4gSGVsbG8gTWFnaWMgVHV0b3JpYWwgTWFrZXIhIDwvaDE+XG5cbiAgICA8aDE+IEknbSBoZXJlIHRvLi4uPC9oMT5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uc1wiPlxuICAgICAgPExpbmsgaHJlZj1cIi9jcmVhdGVcIj5cbiAgICAgICAgPGE+PGgyPiDwn5GJIENyZWF0ZSBhIG5ldyB0dXRvcmlhbCE8L2gyPjwvYT4gXG4gICAgICA8L0xpbms+XG4gICAgICA8aDI+PHN0cmlrZT7wn5GJIEFkZCBhbiBleGlzdGluZyB0dXRvcmlhbCBmcm9tIEdpdGh1YiE8L3N0cmlrZT48L2gyPlxuICAgIDwvZGl2PlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGgxe1xuICAgICAgICAgIFx0Y29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgZm9udC1zaXplOjYwcHg7XG4gICAgICAgICAgICBtYXJnaW46MTBweCAwcHggMTBweCAwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDJ7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBmb250LXNpemU6NDhweDtcbiAgICAgICAgICAgIG1hcmdpbjoxMHB4IDBweCAxMHB4IDBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgICAgICAgIH1cblxuXG4gICAgICAgICAgLmFjdGlvbnN7XG4gICAgICAgICAgICBtYXJnaW46MzBweCAzMHB4IDBweCAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gIDwvTGF5b3V0PlxuXG4pXG5cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXX0= */\n/*@ sourceURL=pages/index.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map