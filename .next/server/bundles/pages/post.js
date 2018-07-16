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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

/***/ "./pages/post.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_MyLayout_js__ = __webpack_require__("./components/MyLayout.js");

var _jsxFileName = "/Users/joeyklee/Code/src/github/nyuitp/itp-tutorial-maker/pages/post.js";



function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }


 // const Content = withRouter((props) => (
// 	<div>
// 		{console.log(props)}
// 		<h1>{props.router.query.title}</h1>
// 		<p>This is the blog post content.</p>
// 	</div>
// ))

var Post = function Post(props) {
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_MyLayout_js__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    className: "jsx-1311163570"
  }, props.resource.title), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
    src: props.resource.imageUrl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    className: "jsx-1311163570"
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    className: "jsx-1311163570"
  }, "Go To Resource: ", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
    href: props.resource.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    className: "jsx-1311163570"
  }, props.resource.url)), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    className: "jsx-1311163570"
  }, props.resource.desc), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    className: "jsx-1311163570"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    className: "jsx-1311163570"
  }, "Marked as: "), props.resource.levelRating.map(function (rating) {
    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      className: "jsx-1311163570"
    }, rating.property);
  })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    className: "jsx-1311163570"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    className: "jsx-1311163570"
  }, "Estimated Time Commitment between : "), props.resource.timeCommitment.map(function (time) {
    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      className: "jsx-1311163570"
    }, time.property);
  })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    className: "jsx-1311163570"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    className: "jsx-1311163570"
  }, "tags:"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    className: "jsx-1311163570"
  }, props.resource.tags.map(function (tag) {
    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      className: "jsx-1311163570"
    }, tag.property);
  }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
    styleId: "1311163570",
    css: "img.jsx-1311163570{width:200px;height:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Bvc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0NtQixBQUdzQixZQUNBLFlBQ1oiLCJmaWxlIjoicGFnZXMvcG9zdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvam9leWtsZWUvQ29kZS9zcmMvZ2l0aHViL255dWl0cC9pdHAtdHV0b3JpYWwtbWFrZXIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3dpdGhSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0LmpzJ1xuXG5cbi8vIGNvbnN0IENvbnRlbnQgPSB3aXRoUm91dGVyKChwcm9wcykgPT4gKFxuLy8gXHQ8ZGl2PlxuLy8gXHRcdHtjb25zb2xlLmxvZyhwcm9wcyl9XG4vLyBcdFx0PGgxPntwcm9wcy5yb3V0ZXIucXVlcnkudGl0bGV9PC9oMT5cbi8vIFx0XHQ8cD5UaGlzIGlzIHRoZSBibG9nIHBvc3QgY29udGVudC48L3A+XG4vLyBcdDwvZGl2PlxuLy8gKSlcblxuY29uc3QgUG9zdCA9IChwcm9wcykgPT4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICAgey8qPENvbnRlbnQgLz4qL31cbiAgICAgICA8aDE+e3Byb3BzLnJlc291cmNlLnRpdGxlfTwvaDE+XG4gICAgICAgPGltZyBzcmM9e3Byb3BzLnJlc291cmNlLmltYWdlVXJsfS8+XG4gICAgICAgPGgyPkdvIFRvIFJlc291cmNlOiA8YSBocmVmPXtwcm9wcy5yZXNvdXJjZS51cmx9Pntwcm9wcy5yZXNvdXJjZS51cmx9PC9hPjwvaDI+XG4gICAgICAgPGg0Pntwcm9wcy5yZXNvdXJjZS5kZXNjfTwvaDQ+XG4gICAgICAgPGg0PjxzcGFuPk1hcmtlZCBhczogPC9zcGFuPntwcm9wcy5yZXNvdXJjZS5sZXZlbFJhdGluZy5tYXAocmF0aW5nID0+IHtcblx0ICAgICAgIFx0XHRyZXR1cm4oPGxpPntyYXRpbmcucHJvcGVydHl9PC9saT4pXG5cdCAgICAgICBcdH0pfVxuICAgICAgIDwvaDQ+XG5cdCAgICAgIDxoND48c3Bhbj5Fc3RpbWF0ZWQgVGltZSBDb21taXRtZW50IGJldHdlZW4gOiA8L3NwYW4+XG4gICAgICAgIHtcbiAgICAgICAgICBwcm9wcy5yZXNvdXJjZS50aW1lQ29tbWl0bWVudC5tYXAodGltZSA9PiB7XG5cdFx0ICAgICAgIFx0XHRyZXR1cm4oPGxpPnt0aW1lLnByb3BlcnR5fTwvbGk+KVxuXHRcdCAgICAgICBcdH0pXG4gICAgICAgIH1cblx0ICAgICAgPC9oND5cbiAgICAgICA8cD5cbiAgICAgICBcdDxsYWJlbD50YWdzOjwvbGFiZWw+XG5cdCAgICAgIDx1bD5cblx0ICAgICAgIFx0e3Byb3BzLnJlc291cmNlLnRhZ3MubWFwKHRhZyA9PiB7XG5cdCAgICAgICBcdFx0cmV0dXJuKDxsaT57dGFnLnByb3BlcnR5fTwvbGk+KVxuXHQgICAgICAgXHR9KX1cblx0ICAgICAgPC91bD5cbiAgICAgICA8L3A+XG4gICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgIFx0XHRpbWd7XG4gICAgICAgXHRcdFx0d2lkdGg6MjAwcHg7XG4gICAgICAgXHRcdFx0aGVpZ2h0OmF1dG87XG4gICAgICAgXHRcdH1cbiAgICAgICBcdGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbilcblxuUG9zdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbihjb250ZXh0KXtcblx0Y29uc3Qge2lkfSA9IGNvbnRleHQucXVlcnlcblxuXHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovLzEyNy4wLjAuMTo1MDAwL2FwaS9yZXNvdXJjZXMvJHtpZH1gKVxuXHRjb25zdCByZXNvdXJjZSA9IGF3YWl0IHJlcy5qc29uKClcblxuXHRjb25zb2xlLmxvZyhgRmV0Y2hlZCBzaG93OiAke3Jlc291cmNlLmlkfWApXG5cbiAgcmV0dXJuIHsgcmVzb3VyY2UgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0Il19 */\n/*@ sourceURL=pages/post.js */"
  }));
};

Post.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(context) {
    var id, res, resource;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = context.query.id;
            _context.next = 3;
            return fetch("http://127.0.0.1:5000/api/resources/".concat(id));

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            resource = _context.sent;
            console.log("Fetched show: ".concat(resource.id));
            return _context.abrupt("return", {
              resource: resource
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/post.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

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
//# sourceMappingURL=post.js.map