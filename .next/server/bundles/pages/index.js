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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Nav__ = __webpack_require__("./components/Nav.jsx");
var _jsxFileName = "/Users/joeyklee/Code/src/github/nyuitp/itp-tutorial-maker/components/Header.jsx";



var Header = function Header() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Nav__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-2144369387"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), props.children, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2144369387",
    css: "*.jsx-2144369387{box-sizing:border-box;font-family:Helvetica,sans serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTXlMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUWMsQUFHMkIsc0JBQ1ksaUNBQ25DIiwiZmlsZSI6ImNvbXBvbmVudHMvTXlMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pvZXlrbGVlL0NvZGUvc3JjL2dpdGh1Yi9ueXVpdHAvaXRwLXR1dG9yaWFsLW1ha2VyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcidcblxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiAoXG5cblx0PGRpdj5cblx0XHQ8SGVhZGVyIC8+XG5cdFx0e3Byb3BzLmNoaWxkcmVufVxuXG5cdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0Kntcblx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdFx0Zm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2FucyBzZXJpZjtcblx0XHRcdH1cblx0XHRgfTwvc3R5bGU+XG5cdDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQiXX0= */\n/*@ sourceURL=components/MyLayout.js */"
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
    className: "jsx-1439450989"
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
    className: "jsx-1439450989"
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
    className: "jsx-1439450989"
  }, "About Page")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1439450989",
    css: "nav.jsx-1439450989{width:100%;height:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}nav.jsx-1439450989 a.jsx-1439450989{margin-right:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZZSxBQUlzQixBQVFPLFdBUE4sT0FRYixLQVBhLDBFQUNPLHFFQUNRLHlHQUNULDZGQUNuQiIsImZpbGUiOiJjb21wb25lbnRzL05hdi5qc3giLCJzb3VyY2VSb290IjoiL1VzZXJzL2pvZXlrbGVlL0NvZGUvc3JjL2dpdGh1Yi9ueXVpdHAvaXRwLXR1dG9yaWFsLW1ha2VyIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBpcyB0aGUgTGluayBBUElcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuXG5jb25zdCBOYXYgPSAoKSA9PiAoXG5cdDxuYXY+XG4gICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgPGE+SG9tZSBQYWdlPC9hPlxuICAgIDwvTGluaz5cbiAgXHQ8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gIFx0XHQ8YT5BYm91dCBQYWdlPC9hPlxuICBcdDwvTGluaz5cbiAgXHQ8c3R5bGUganN4PntgXG5cbiAgXHQgICAgICBuYXZ7XG4gIFx0ICAgICAgXHR3aWR0aDogMTAwJTtcbiAgXHQgICAgICBcdGhlaWdodDogMzBweDtcbiAgXHQgICAgICBcdGRpc3BsYXk6ZmxleDtcbiAgXHQgICAgICBcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIFx0ICAgICAgXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIFx0ICAgICAgXHRhbGlnbi1pdGVtczpjZW50ZXI7XG4gIFx0ICAgICAgfVxuICBcdCAgICAgIG5hdiBhe1xuICBcdCAgICAgIFx0bWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBcdCAgICAgIH1cbiAgXHQgICAgYH08L3N0eWxlPlxuXHQ8L25hdj5cblx0XG4pXG5cbmV4cG9ydCBkZWZhdWx0IE5hdiJdfQ== */\n/*@ sourceURL=components/Nav.jsx */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Nav);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Header__ = __webpack_require__("./components/Header.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_MyLayout__ = __webpack_require__("./components/MyLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_isomorphic_unfetch__);

var _jsxFileName = "/Users/joeyklee/Code/src/github/nyuitp/itp-tutorial-maker/pages/index.js";



function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// This is the Link API





var ResourceLink = function ResourceLink(props, pageId) {
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
    key: props._id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_link___default.a, {
    as: "/p/".concat(props._id),
    href: "/post?id=".concat(props._id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, props.title)));
};

var Index = function Index(props) {
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_MyLayout__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    className: "jsx-1830654436"
  }, " Current Submissions "), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    className: "jsx-1830654436"
  }, props.resources.map(function (resource) {
    var links = resource.videos.map(function (link) {
      var pageId = link.title.replace(/[^a-zA-Z0-9-_]/g, '');
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(ResourceLink, _extends({}, link, {
        pageId: pageId,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }));
    });
    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      className: "jsx-1830654436"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      className: "jsx-1830654436"
    }, " ", resource.playlist, " "), links);
  })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
    styleId: "1830654436",
    css: "h1.jsx-1830654436{color:tomato;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDZ0IsQUFJVSxhQUFDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qb2V5a2xlZS9Db2RlL3NyYy9naXRodWIvbnl1aXRwL2l0cC10dXRvcmlhbC1tYWtlciIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgaXMgdGhlIExpbmsgQVBJXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcblxuXG5jb25zdCBSZXNvdXJjZUxpbmsgPSAocHJvcHMsIHBhZ2VJZCkgPT4gKFxuXG5cdDxsaSBrZXk9e3Byb3BzLl9pZH0+XG5cdFx0PExpbmsgYXM9e2AvcC8ke3Byb3BzLl9pZH1gfSBocmVmPXtgL3Bvc3Q/aWQ9JHtwcm9wcy5faWR9YH0+XG5cdFx0XHQ8YT57cHJvcHMudGl0bGV9PC9hPlxuXHRcdDwvTGluaz5cblx0PC9saT5cbilcblxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IChcbiAgPExheW91dD5cbiAgICA8aDE+IEN1cnJlbnQgU3VibWlzc2lvbnMgPC9oMT5cbiAgICB7Lyo8UG9zdExpbmtzLz4qL31cbiAgICA8dWw+XG5cbiAgICBcdHtcblxuICAgICAgICBwcm9wcy5yZXNvdXJjZXMubWFwKCByZXNvdXJjZSA9PiB7IFxuXG4gICAgICAgICAgbGV0IGxpbmtzID0gcmVzb3VyY2UudmlkZW9zLm1hcChsaW5rID0+IHtcbiAgICAgICAgICAgIGxldCBwYWdlSWQgPSBsaW5rLnRpdGxlLnJlcGxhY2UoL1teYS16QS1aMC05LV9dL2csICcnKTtcbiAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgPFJlc291cmNlTGluayB7Li4ubGlua30gcGFnZUlkPXtwYWdlSWR9Lz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDI+IHtyZXNvdXJjZS5wbGF5bGlzdH0gPC9oMj5cbiAgICAgICAgICAgIHtsaW5rc31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICBcdFx0XHRcbiAgICBcdCB9KVxuICAgIFx0fVxuICAgIDwvdWw+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgaDF7XG4gICAgICAgICAgXHRjb2xvcjogdG9tYXRvXG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gIDwvTGF5b3V0PlxuXG4pXG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyAgPSBhc3luYyBmdW5jdGlvbigpe1xuXHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovLzEyNy4wLjAuMTo1MDAwL2FwaS9yZXNvdXJjZXMnKVxuXHRjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgbGV0IG91dHB1dFxuXG5cdGNvbnNvbGUubG9nKGByZXNvdXJjZXMgZmV0Y2hlZC4gY291bnQ6ICR7ZGF0YS5sZW5ndGh9YClcblxuICBvdXRwdXQgPSBzb3J0Q29kaW5nVHJhaW4oZGF0YSk7XG5cblx0cmV0dXJuIHtcblx0XHRyZXNvdXJjZXM6IG91dHB1dFxuXHR9XG59XG5cbmZ1bmN0aW9uIHNvcnRDb2RpbmdUcmFpbihkYXRhKXtcbiAgbGV0IHBsYXlsaXN0cyA9IFtcbiAgICB7cGxheWxpc3Q6XCJwNS5qcyBUdXRvcmlhbFwiLCB2aWRlb3M6W119LFxuICAgIHtwbGF5bGlzdDpcIlR3aXR0ZXIgQm90IFR1dG9yaWFsXCIsIHZpZGVvczpbXX0sXG4gICAge3BsYXlsaXN0OlwicDUuanMgU291bmQgVHV0b3JpYWxcIiwgdmlkZW9zOltdfSxcbiAgICB7cGxheWxpc3Q6XCJQcm9jZXNzaW5nIFR1dG9yaWFsXCIsIHZpZGVvczpbXX0sXG4gICAge3BsYXlsaXN0OlwiVGhlIE5hdHVyZSBvZiBDb2RlXCIsIHZpZGVvczpbXX0sXG4gICAge3BsYXlsaXN0OlwiQ29kaW5nIENoYWxsZW5nZVwiLCB2aWRlb3M6W119LFxuICAgIHtwbGF5bGlzdDpcIlByb2dyYW1taW5nIHdpdGggVGV4dFwiLCB2aWRlb3M6W119LFxuICAgIHtwbGF5bGlzdDpcIldlYkdMIGFuZCBwNS5qcyBUdXRvcmlhbFwiLCB2aWRlb3M6W119LFxuICAgIHtwbGF5bGlzdDpcIlRvcGljcyBvZiBKYXZhU2NyaXB0L0VTNlwiLCB2aWRlb3M6W119LFxuICAgIHtwbGF5bGlzdDpcIkd1ZXN0IFR1dG9yaWFsXCIsIHZpZGVvczpbXX0sXG4gICAge3BsYXlsaXN0OlwiUSZBXCIsIHZpZGVvczpbXX0sXG4gICAge3BsYXlsaXN0OlwiTWlzY1wiLCB2aWRlb3M6W119XG4gIF1cblxuICBwbGF5bGlzdHMuZm9yRWFjaChwbGF5bGlzdCA9PiB7XG4gICAgZGF0YS5mb3JFYWNoKHZpZGVvID0+IHtcblxuICAgIGlmKHZpZGVvLnRpdGxlLnNlYXJjaChwbGF5bGlzdC5wbGF5bGlzdCkgPiAtMSl7XG4gICAgICBwbGF5bGlzdC52aWRlb3MucHVzaCh2aWRlbylcbiAgICB9IFxuXG4gICAgfSlcblxuICAgIC8vIHNvcnQgYWxwaGFiZXRpY2FsXG4gICAgcGxheWxpc3QudmlkZW9zLnNvcnQoIGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgIHZhciBuYW1lQSA9IGEudGl0bGUudG9VcHBlckNhc2UoKTsgLy8gaWdub3JlIHVwcGVyIGFuZCBsb3dlcmNhc2VcbiAgICAgIHZhciBuYW1lQiA9IGIudGl0bGUudG9VcHBlckNhc2UoKTsgLy8gaWdub3JlIHVwcGVyIGFuZCBsb3dlcmNhc2VcbiAgICAgIGlmIChuYW1lQSA8IG5hbWVCKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIGlmIChuYW1lQSA+IG5hbWVCKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuXG4gICAgICAvLyBuYW1lcyBtdXN0IGJlIGVxdWFsXG4gICAgICByZXR1cm4gMDtcbiAgICB9IClcbiAgfSlcblxuXG5cbiAgcmV0dXJuIHBsYXlsaXN0cztcbn1cblxuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4Il19 */\n/*@ sourceURL=pages/index.js */"
  }));
};

Index.getInitialProps =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
  var res, data, output;
  return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return __WEBPACK_IMPORTED_MODULE_6_isomorphic_unfetch___default()('http://127.0.0.1:5000/api/resources');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          console.log("resources fetched. count: ".concat(data.length));
          output = sortCodingTrain(data);
          return _context.abrupt("return", {
            resources: output
          });

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));

function sortCodingTrain(data) {
  var playlists = [{
    playlist: "p5.js Tutorial",
    videos: []
  }, {
    playlist: "Twitter Bot Tutorial",
    videos: []
  }, {
    playlist: "p5.js Sound Tutorial",
    videos: []
  }, {
    playlist: "Processing Tutorial",
    videos: []
  }, {
    playlist: "The Nature of Code",
    videos: []
  }, {
    playlist: "Coding Challenge",
    videos: []
  }, {
    playlist: "Programming with Text",
    videos: []
  }, {
    playlist: "WebGL and p5.js Tutorial",
    videos: []
  }, {
    playlist: "Topics of JavaScript/ES6",
    videos: []
  }, {
    playlist: "Guest Tutorial",
    videos: []
  }, {
    playlist: "Q&A",
    videos: []
  }, {
    playlist: "Misc",
    videos: []
  }];
  playlists.forEach(function (playlist) {
    data.forEach(function (video) {
      if (video.title.search(playlist.playlist) > -1) {
        playlist.videos.push(video);
      }
    }); // sort alphabetical

    playlist.videos.sort(function (a, b) {
      var nameA = a.title.toUpperCase(); // ignore upper and lowercase

      var nameB = b.title.toUpperCase(); // ignore upper and lowercase

      if (nameA < nameB) {
        return -1;
      }

      if (nameA > nameB) {
        return 1;
      } // names must be equal


      return 0;
    });
  });
  return playlists;
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

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