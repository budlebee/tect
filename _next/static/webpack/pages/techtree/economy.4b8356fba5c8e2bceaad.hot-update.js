webpackHotUpdate_N_E("pages/techtree/economy",{

/***/ "./pages/techtree/economy.js":
/*!***********************************!*\
  !*** ./pages/techtree/economy.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cytoscape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cytoscape */ \"./node_modules/cytoscape/dist/cytoscape.cjs.js\");\n/* harmony import */ var cytoscape__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cytoscape__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _techData_economyTechtree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../techData/economyTechtree */ \"./techData/economyTechtree.js\");\n/* harmony import */ var _styles_techtreeStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/techtreeStyles */ \"./styles/techtreeStyles.js\");\n/* harmony import */ var _styles_Techtree_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/Techtree.module.css */ \"./styles/Techtree.module.css\");\n/* harmony import */ var _styles_Techtree_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Techtree_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/jowan/Documents/web/201023-techtree/pages/techtree/economy.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction App() {\n  _s();\n\n  var containerRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var dagre = __webpack_require__(/*! cytoscape-dagre */ \"./node_modules/cytoscape-dagre/cytoscape-dagre.js\");\n\n    cytoscape__WEBPACK_IMPORTED_MODULE_1___default.a.use(dagre);\n    var cy_for_rank = cytoscape__WEBPACK_IMPORTED_MODULE_1___default()({\n      elements: _techData_economyTechtree__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    });\n    var pageRank = cy_for_rank.elements().pageRank(); // elements들의 rank들입니다.\n\n    var nodeMaxSize = _styles_techtreeStyles__WEBPACK_IMPORTED_MODULE_4__[\"default\"].nodeMaxSize;\n    var nodeMinSize = _styles_techtreeStyles__WEBPACK_IMPORTED_MODULE_4__[\"default\"].nodeMinSize;\n    var nodeActiveSize = _styles_techtreeStyles__WEBPACK_IMPORTED_MODULE_4__[\"default\"].nodeActiveSize;\n    var fontMaxSize = _styles_techtreeStyles__WEBPACK_IMPORTED_MODULE_4__[\"default\"].fontMaxSize;\n    var fontMinSize = _styles_techtreeStyles__WEBPACK_IMPORTED_MODULE_4__[\"default\"].fontMinSize;\n    var fontActiveSize = _styles_techtreeStyles__WEBPACK_IMPORTED_MODULE_4__[\"default\"].fontActiveSize; // node & font 크기 값\n\n    var edgeWidth = _styles_techtreeStyles__WEBPACK_IMPORTED_MODULE_4__[\"default\"].edgeWidth;\n    var edgeActiveWidth = _styles_techtreeStyles__WEBPACK_IMPORTED_MODULE_4__[\"default\"].edgeActiveWidth;\n    var arrowScale = _styles_techtreeStyles__WEBPACK_IMPORTED_MODULE_4__[\"default\"].arrowScale;\n    var arrowActiveScale = _styles_techtreeStyles__WEBPACK_IMPORTED_MODULE_4__[\"default\"].arrowActiveScale; // edge & arrow 크기값\n\n    var dimColor = _styles_techtreeStyles__WEBPACK_IMPORTED_MODULE_4__[\"default\"].dimColor;\n    var edgeColor = _styles_techtreeStyles__WEBPACK_IMPORTED_MODULE_4__[\"default\"].edgeColor;\n    var nodeColor = _styles_techtreeStyles__WEBPACK_IMPORTED_MODULE_4__[\"default\"].nodeColor;\n    var nodeActiveColor = _styles_techtreeStyles__WEBPACK_IMPORTED_MODULE_4__[\"default\"].nodeActiveColor;\n    var successorColor = _styles_techtreeStyles__WEBPACK_IMPORTED_MODULE_4__[\"default\"].successorColor; // 상위 node & edge color\n\n    var predecessorsColor = _styles_techtreeStyles__WEBPACK_IMPORTED_MODULE_4__[\"default\"].predecessorsColor; // 하위 node & edge color\n\n    var config = {\n      container: containerRef.current,\n      // container to render in\n      elements: _techData_economyTechtree__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n      style: [// the stylesheet for the graph\n      {\n        selector: 'node',\n        style: {\n          'background-color': nodeColor,\n          label: 'data(label)',\n          width: function width(ele) {\n            return nodeMaxSize * (pageRank.rank('#' + ele.id()) * 8) + nodeMinSize;\n          },\n          height: function height(ele) {\n            return nodeMaxSize * (pageRank.rank('#' + ele.id()) * 8) + nodeMinSize;\n          },\n          'font-size': function fontSize(ele) {\n            return fontMaxSize * pageRank.rank('#' + ele.id()) + fontMinSize;\n          },\n          color: nodeColor,\n          'text-wrap': 'wrap'\n        }\n      }, {\n        selector: 'edge',\n        style: {\n          width: edgeWidth,\n          'curve-style': 'bezier',\n          'line-color': edgeColor,\n          'target-arrow-color': edgeColor,\n          'target-arrow-shape': 'vee',\n          'arrow-scale': arrowScale\n        }\n      }],\n      layout: {\n        name: 'dagre',\n        animate: false,\n        gravityRangeCompound: 1.5,\n        fit: true,\n        tile: true\n      }\n    };\n    var cy = cytoscape__WEBPACK_IMPORTED_MODULE_1___default()(config);\n\n    function setDimStyle(target_cy, style) {\n      target_cy.nodes().forEach(function (target) {\n        target.style(style);\n      });\n      target_cy.edges().forEach(function (target) {\n        target.style(style);\n      });\n    }\n\n    function setFocus(target_element, successorColor, predecessorsColor, edgeWidth, arrowScale) {\n      target_element.style('background-color', nodeActiveColor);\n      target_element.style('color', nodeColor);\n      target_element.successors().each(function (e) {\n        // 상위  엣지와 노드\n        if (e.isEdge()) {\n          e.style('width', edgeWidth);\n          e.style('arrow-scale', arrowScale);\n        }\n\n        e.style('color', nodeColor);\n        e.style('background-color', successorColor);\n        e.style('line-color', successorColor);\n        e.style('target-arrow-color', successorColor);\n        setOpacityElement(e, 0.8);\n      });\n      target_element.predecessors().each(function (e) {\n        // 하위 엣지와 노드\n        if (e.isEdge()) {\n          e.style('width', edgeWidth);\n          e.style('arrow-scale', arrowScale);\n        }\n\n        e.style('color', nodeColor);\n        e.style('background-color', predecessorsColor);\n        e.style('line-color', predecessorsColor);\n        e.style('target-arrow-color', predecessorsColor);\n        setOpacityElement(e, 0.6);\n      });\n      target_element.neighborhood().each(function (e) {\n        // 이웃한 엣지와 노드\n        setOpacityElement(e, 1);\n      });\n      target_element.style('width', Math.max(parseFloat(target_element.style('width')), nodeActiveSize));\n      target_element.style('height', Math.max(parseFloat(target_element.style('height')), nodeActiveSize));\n      target_element.style('font-size', Math.max(parseFloat(target_element.style('font-size')), fontActiveSize));\n    }\n\n    function setOpacityElement(target_element, degree) {\n      target_element.style('opacity', degree);\n    }\n\n    function setResetFocus(target_cy) {\n      target_cy.nodes().forEach(function (target) {\n        target.style('background-color', nodeColor);\n        var rank = pageRank.rank(target);\n        target.style('width', nodeMaxSize * (rank * 8) + nodeMinSize);\n        target.style('height', nodeMaxSize * (rank * 8) + nodeMinSize);\n        target.style('font-size', fontMaxSize * rank + fontMinSize);\n        target.style('color', nodeColor);\n        target.style('opacity', 1);\n      });\n      target_cy.edges().forEach(function (target) {\n        target.style('line-color', edgeColor);\n        target.style('target-arrow-color', edgeColor);\n        target.style('width', edgeWidth);\n        target.style('arrow-scale', arrowScale);\n        target.style('opacity', 1);\n      });\n    }\n\n    cy.on('tap', function (e) {\n      var url = e.target.data('url');\n\n      if (url && url !== '') {\n        window.open(url);\n      }\n    });\n    cy.on('tapstart mouseover', 'node', function (e) {\n      setDimStyle(cy, {\n        'background-color': dimColor,\n        'line-color': dimColor,\n        'target-arrow-color': dimColor,\n        color: dimColor\n      });\n      setFocus(e.target, successorColor, predecessorsColor, edgeActiveWidth, arrowActiveScale);\n    });\n    cy.on('tapend mouseout', 'node', function (e) {\n      setResetFocus(e.cy);\n    });\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"rotate-alert\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"phone\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 209,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"message\",\n        children: \"Please rotate your device!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 210,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 208,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"tree\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        ref: containerRef,\n        style: {\n          height: '600px'\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 213,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: \"contributors\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 214,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 212,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 207,\n    columnNumber: 5\n  }, this);\n}\n\n_s(App, \"8puyVO4ts1RhCfXUmci3vLI3Njw=\");\n\n_c = App;\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVjaHRyZWUvZWNvbm9teS5qcz9lZmRmIl0sIm5hbWVzIjpbIkFwcCIsImNvbnRhaW5lclJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImRhZ3JlIiwicmVxdWlyZSIsImN5dG9zY2FwZSIsInVzZSIsImN5X2Zvcl9yYW5rIiwiZWxlbWVudHMiLCJkYXRhIiwicGFnZVJhbmsiLCJub2RlTWF4U2l6ZSIsInN0eWxlcyIsIm5vZGVNaW5TaXplIiwibm9kZUFjdGl2ZVNpemUiLCJmb250TWF4U2l6ZSIsImZvbnRNaW5TaXplIiwiZm9udEFjdGl2ZVNpemUiLCJlZGdlV2lkdGgiLCJlZGdlQWN0aXZlV2lkdGgiLCJhcnJvd1NjYWxlIiwiYXJyb3dBY3RpdmVTY2FsZSIsImRpbUNvbG9yIiwiZWRnZUNvbG9yIiwibm9kZUNvbG9yIiwibm9kZUFjdGl2ZUNvbG9yIiwic3VjY2Vzc29yQ29sb3IiLCJwcmVkZWNlc3NvcnNDb2xvciIsImNvbmZpZyIsImNvbnRhaW5lciIsImN1cnJlbnQiLCJzdHlsZSIsInNlbGVjdG9yIiwibGFiZWwiLCJ3aWR0aCIsImVsZSIsInJhbmsiLCJpZCIsImhlaWdodCIsImNvbG9yIiwibGF5b3V0IiwibmFtZSIsImFuaW1hdGUiLCJncmF2aXR5UmFuZ2VDb21wb3VuZCIsImZpdCIsInRpbGUiLCJjeSIsInNldERpbVN0eWxlIiwidGFyZ2V0X2N5Iiwibm9kZXMiLCJmb3JFYWNoIiwidGFyZ2V0IiwiZWRnZXMiLCJzZXRGb2N1cyIsInRhcmdldF9lbGVtZW50Iiwic3VjY2Vzc29ycyIsImVhY2giLCJlIiwiaXNFZGdlIiwic2V0T3BhY2l0eUVsZW1lbnQiLCJwcmVkZWNlc3NvcnMiLCJuZWlnaGJvcmhvb2QiLCJNYXRoIiwibWF4IiwicGFyc2VGbG9hdCIsImRlZ3JlZSIsInNldFJlc2V0Rm9jdXMiLCJvbiIsInVybCIsIndpbmRvdyIsIm9wZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7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LEVBQUgsQ0FBTSxpQkFBTixFQUF5QixNQUF6QixFQUFpQyxVQUFVVixDQUFWLEVBQWE7QUFDNUNTLG1CQUFhLENBQUNULENBQUMsQ0FBQ1gsRUFBSCxDQUFiO0FBQ0QsS0FGRDtBQUdELEdBak1RLEVBaU1OLEVBak1NLENBQVQ7QUFtTUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQyxjQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUtFO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQSw4QkFDRTtBQUFLLFdBQUcsRUFBRTlDLFlBQVY7QUFBd0IsYUFBSyxFQUFFO0FBQUVzQyxnQkFBTSxFQUFFO0FBQVY7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVlEOztHQWxOdUJ2QyxHOztLQUFBQSxHIiwiZmlsZSI6Ii4vcGFnZXMvdGVjaHRyZWUvZWNvbm9teS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjeXRvc2NhcGUgZnJvbSAnY3l0b3NjYXBlJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGRhdGEgZnJvbSAnLi4vLi4vdGVjaERhdGEvZWNvbm9teVRlY2h0cmVlJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3RlY2h0cmVlU3R5bGVzJztcbmltcG9ydCBjc3NTdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL1RlY2h0cmVlLm1vZHVsZS5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZGFncmUgPSByZXF1aXJlKCdjeXRvc2NhcGUtZGFncmUnKTtcbiAgICBjeXRvc2NhcGUudXNlKGRhZ3JlKTtcblxuICAgIGNvbnN0IGN5X2Zvcl9yYW5rID0gY3l0b3NjYXBlKHtcbiAgICAgIGVsZW1lbnRzOiBkYXRhLFxuICAgIH0pO1xuXG4gICAgY29uc3QgcGFnZVJhbmsgPSBjeV9mb3JfcmFuay5lbGVtZW50cygpLnBhZ2VSYW5rKCk7XG4gICAgLy8gZWxlbWVudHPrk6TsnZggcmFua+uTpOyeheuLiOuLpC5cbiAgICBjb25zdCBub2RlTWF4U2l6ZSA9IHN0eWxlcy5ub2RlTWF4U2l6ZTtcbiAgICBjb25zdCBub2RlTWluU2l6ZSA9IHN0eWxlcy5ub2RlTWluU2l6ZTtcbiAgICBjb25zdCBub2RlQWN0aXZlU2l6ZSA9IHN0eWxlcy5ub2RlQWN0aXZlU2l6ZTtcbiAgICBjb25zdCBmb250TWF4U2l6ZSA9IHN0eWxlcy5mb250TWF4U2l6ZTtcbiAgICBjb25zdCBmb250TWluU2l6ZSA9IHN0eWxlcy5mb250TWluU2l6ZTtcbiAgICBjb25zdCBmb250QWN0aXZlU2l6ZSA9IHN0eWxlcy5mb250QWN0aXZlU2l6ZTtcbiAgICAvLyBub2RlICYgZm9udCDtgazquLAg6rCSXG5cbiAgICBjb25zdCBlZGdlV2lkdGggPSBzdHlsZXMuZWRnZVdpZHRoO1xuICAgIHZhciBlZGdlQWN0aXZlV2lkdGggPSBzdHlsZXMuZWRnZUFjdGl2ZVdpZHRoO1xuICAgIGNvbnN0IGFycm93U2NhbGUgPSBzdHlsZXMuYXJyb3dTY2FsZTtcbiAgICBjb25zdCBhcnJvd0FjdGl2ZVNjYWxlID0gc3R5bGVzLmFycm93QWN0aXZlU2NhbGU7XG4gICAgLy8gZWRnZSAmIGFycm93IO2BrOq4sOqwklxuXG4gICAgY29uc3QgZGltQ29sb3IgPSBzdHlsZXMuZGltQ29sb3I7XG4gICAgY29uc3QgZWRnZUNvbG9yID0gc3R5bGVzLmVkZ2VDb2xvcjtcbiAgICBjb25zdCBub2RlQ29sb3IgPSBzdHlsZXMubm9kZUNvbG9yO1xuICAgIGNvbnN0IG5vZGVBY3RpdmVDb2xvciA9IHN0eWxlcy5ub2RlQWN0aXZlQ29sb3I7XG5cbiAgICBjb25zdCBzdWNjZXNzb3JDb2xvciA9IHN0eWxlcy5zdWNjZXNzb3JDb2xvcjtcbiAgICAvLyDsg4HsnIQgbm9kZSAmIGVkZ2UgY29sb3JcbiAgICBjb25zdCBwcmVkZWNlc3NvcnNDb2xvciA9IHN0eWxlcy5wcmVkZWNlc3NvcnNDb2xvcjtcbiAgICAvLyDtlZjsnIQgbm9kZSAmIGVkZ2UgY29sb3JcblxuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyUmVmLmN1cnJlbnQsIC8vIGNvbnRhaW5lciB0byByZW5kZXIgaW5cbiAgICAgIGVsZW1lbnRzOiBkYXRhLFxuICAgICAgc3R5bGU6IFtcbiAgICAgICAgLy8gdGhlIHN0eWxlc2hlZXQgZm9yIHRoZSBncmFwaFxuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0b3I6ICdub2RlJyxcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiBub2RlQ29sb3IsXG4gICAgICAgICAgICBsYWJlbDogJ2RhdGEobGFiZWwpJyxcbiAgICAgICAgICAgIHdpZHRoOiBmdW5jdGlvbiAoZWxlKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgbm9kZU1heFNpemUgKiAocGFnZVJhbmsucmFuaygnIycgKyBlbGUuaWQoKSkgKiA4KSArIG5vZGVNaW5TaXplXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGVpZ2h0OiBmdW5jdGlvbiAoZWxlKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgbm9kZU1heFNpemUgKiAocGFnZVJhbmsucmFuaygnIycgKyBlbGUuaWQoKSkgKiA4KSArIG5vZGVNaW5TaXplXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2ZvbnQtc2l6ZSc6IGZ1bmN0aW9uIChlbGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZvbnRNYXhTaXplICogcGFnZVJhbmsucmFuaygnIycgKyBlbGUuaWQoKSkgKyBmb250TWluU2l6ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb2xvcjogbm9kZUNvbG9yLFxuICAgICAgICAgICAgJ3RleHQtd3JhcCc6ICd3cmFwJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RvcjogJ2VkZ2UnLFxuICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICB3aWR0aDogZWRnZVdpZHRoLFxuICAgICAgICAgICAgJ2N1cnZlLXN0eWxlJzogJ2JlemllcicsXG4gICAgICAgICAgICAnbGluZS1jb2xvcic6IGVkZ2VDb2xvcixcbiAgICAgICAgICAgICd0YXJnZXQtYXJyb3ctY29sb3InOiBlZGdlQ29sb3IsXG4gICAgICAgICAgICAndGFyZ2V0LWFycm93LXNoYXBlJzogJ3ZlZScsXG4gICAgICAgICAgICAnYXJyb3ctc2NhbGUnOiBhcnJvd1NjYWxlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgbGF5b3V0OiB7XG4gICAgICAgIG5hbWU6ICdkYWdyZScsXG4gICAgICAgIGFuaW1hdGU6IGZhbHNlLFxuICAgICAgICBncmF2aXR5UmFuZ2VDb21wb3VuZDogMS41LFxuICAgICAgICBmaXQ6IHRydWUsXG4gICAgICAgIHRpbGU6IHRydWUsXG4gICAgICB9LFxuICAgIH07XG4gICAgdmFyIGN5ID0gY3l0b3NjYXBlKGNvbmZpZyk7XG4gICAgZnVuY3Rpb24gc2V0RGltU3R5bGUodGFyZ2V0X2N5LCBzdHlsZSkge1xuICAgICAgdGFyZ2V0X2N5Lm5vZGVzKCkuZm9yRWFjaChmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldC5zdHlsZShzdHlsZSk7XG4gICAgICB9KTtcbiAgICAgIHRhcmdldF9jeS5lZGdlcygpLmZvckVhY2goZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICB0YXJnZXQuc3R5bGUoc3R5bGUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0Rm9jdXMoXG4gICAgICB0YXJnZXRfZWxlbWVudCxcbiAgICAgIHN1Y2Nlc3NvckNvbG9yLFxuICAgICAgcHJlZGVjZXNzb3JzQ29sb3IsXG4gICAgICBlZGdlV2lkdGgsXG4gICAgICBhcnJvd1NjYWxlLFxuICAgICkge1xuICAgICAgdGFyZ2V0X2VsZW1lbnQuc3R5bGUoJ2JhY2tncm91bmQtY29sb3InLCBub2RlQWN0aXZlQ29sb3IpO1xuICAgICAgdGFyZ2V0X2VsZW1lbnQuc3R5bGUoJ2NvbG9yJywgbm9kZUNvbG9yKTtcbiAgICAgIHRhcmdldF9lbGVtZW50LnN1Y2Nlc3NvcnMoKS5lYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vIOyDgeychCAg7Jej7KeA7JmAIOuFuOuTnFxuICAgICAgICBpZiAoZS5pc0VkZ2UoKSkge1xuICAgICAgICAgIGUuc3R5bGUoJ3dpZHRoJywgZWRnZVdpZHRoKTtcbiAgICAgICAgICBlLnN0eWxlKCdhcnJvdy1zY2FsZScsIGFycm93U2NhbGUpO1xuICAgICAgICB9XG4gICAgICAgIGUuc3R5bGUoJ2NvbG9yJywgbm9kZUNvbG9yKTtcbiAgICAgICAgZS5zdHlsZSgnYmFja2dyb3VuZC1jb2xvcicsIHN1Y2Nlc3NvckNvbG9yKTtcbiAgICAgICAgZS5zdHlsZSgnbGluZS1jb2xvcicsIHN1Y2Nlc3NvckNvbG9yKTtcbiAgICAgICAgZS5zdHlsZSgndGFyZ2V0LWFycm93LWNvbG9yJywgc3VjY2Vzc29yQ29sb3IpO1xuICAgICAgICBzZXRPcGFjaXR5RWxlbWVudChlLCAwLjgpO1xuICAgICAgfSk7XG4gICAgICB0YXJnZXRfZWxlbWVudC5wcmVkZWNlc3NvcnMoKS5lYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vIO2VmOychCDsl6Psp4DsmYAg64W465OcXG4gICAgICAgIGlmIChlLmlzRWRnZSgpKSB7XG4gICAgICAgICAgZS5zdHlsZSgnd2lkdGgnLCBlZGdlV2lkdGgpO1xuICAgICAgICAgIGUuc3R5bGUoJ2Fycm93LXNjYWxlJywgYXJyb3dTY2FsZSk7XG4gICAgICAgIH1cbiAgICAgICAgZS5zdHlsZSgnY29sb3InLCBub2RlQ29sb3IpO1xuICAgICAgICBlLnN0eWxlKCdiYWNrZ3JvdW5kLWNvbG9yJywgcHJlZGVjZXNzb3JzQ29sb3IpO1xuICAgICAgICBlLnN0eWxlKCdsaW5lLWNvbG9yJywgcHJlZGVjZXNzb3JzQ29sb3IpO1xuICAgICAgICBlLnN0eWxlKCd0YXJnZXQtYXJyb3ctY29sb3InLCBwcmVkZWNlc3NvcnNDb2xvcik7XG4gICAgICAgIHNldE9wYWNpdHlFbGVtZW50KGUsIDAuNik7XG4gICAgICB9KTtcbiAgICAgIHRhcmdldF9lbGVtZW50Lm5laWdoYm9yaG9vZCgpLmVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy8g7J207JuD7ZWcIOyXo+yngOyZgCDrhbjrk5xcbiAgICAgICAgc2V0T3BhY2l0eUVsZW1lbnQoZSwgMSk7XG4gICAgICB9KTtcbiAgICAgIHRhcmdldF9lbGVtZW50LnN0eWxlKFxuICAgICAgICAnd2lkdGgnLFxuICAgICAgICBNYXRoLm1heChwYXJzZUZsb2F0KHRhcmdldF9lbGVtZW50LnN0eWxlKCd3aWR0aCcpKSwgbm9kZUFjdGl2ZVNpemUpLFxuICAgICAgKTtcbiAgICAgIHRhcmdldF9lbGVtZW50LnN0eWxlKFxuICAgICAgICAnaGVpZ2h0JyxcbiAgICAgICAgTWF0aC5tYXgocGFyc2VGbG9hdCh0YXJnZXRfZWxlbWVudC5zdHlsZSgnaGVpZ2h0JykpLCBub2RlQWN0aXZlU2l6ZSksXG4gICAgICApO1xuICAgICAgdGFyZ2V0X2VsZW1lbnQuc3R5bGUoXG4gICAgICAgICdmb250LXNpemUnLFxuICAgICAgICBNYXRoLm1heChwYXJzZUZsb2F0KHRhcmdldF9lbGVtZW50LnN0eWxlKCdmb250LXNpemUnKSksIGZvbnRBY3RpdmVTaXplKSxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0T3BhY2l0eUVsZW1lbnQodGFyZ2V0X2VsZW1lbnQsIGRlZ3JlZSkge1xuICAgICAgdGFyZ2V0X2VsZW1lbnQuc3R5bGUoJ29wYWNpdHknLCBkZWdyZWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFJlc2V0Rm9jdXModGFyZ2V0X2N5KSB7XG4gICAgICB0YXJnZXRfY3kubm9kZXMoKS5mb3JFYWNoKGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgdGFyZ2V0LnN0eWxlKCdiYWNrZ3JvdW5kLWNvbG9yJywgbm9kZUNvbG9yKTtcbiAgICAgICAgdmFyIHJhbmsgPSBwYWdlUmFuay5yYW5rKHRhcmdldCk7XG4gICAgICAgIHRhcmdldC5zdHlsZSgnd2lkdGgnLCBub2RlTWF4U2l6ZSAqIChyYW5rICogOCkgKyBub2RlTWluU2l6ZSk7XG4gICAgICAgIHRhcmdldC5zdHlsZSgnaGVpZ2h0Jywgbm9kZU1heFNpemUgKiAocmFuayAqIDgpICsgbm9kZU1pblNpemUpO1xuICAgICAgICB0YXJnZXQuc3R5bGUoJ2ZvbnQtc2l6ZScsIGZvbnRNYXhTaXplICogcmFuayArIGZvbnRNaW5TaXplKTtcbiAgICAgICAgdGFyZ2V0LnN0eWxlKCdjb2xvcicsIG5vZGVDb2xvcik7XG4gICAgICAgIHRhcmdldC5zdHlsZSgnb3BhY2l0eScsIDEpO1xuICAgICAgfSk7XG4gICAgICB0YXJnZXRfY3kuZWRnZXMoKS5mb3JFYWNoKGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgdGFyZ2V0LnN0eWxlKCdsaW5lLWNvbG9yJywgZWRnZUNvbG9yKTtcbiAgICAgICAgdGFyZ2V0LnN0eWxlKCd0YXJnZXQtYXJyb3ctY29sb3InLCBlZGdlQ29sb3IpO1xuICAgICAgICB0YXJnZXQuc3R5bGUoJ3dpZHRoJywgZWRnZVdpZHRoKTtcbiAgICAgICAgdGFyZ2V0LnN0eWxlKCdhcnJvdy1zY2FsZScsIGFycm93U2NhbGUpO1xuICAgICAgICB0YXJnZXQuc3R5bGUoJ29wYWNpdHknLCAxKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGN5Lm9uKCd0YXAnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgY29uc3QgdXJsID0gZS50YXJnZXQuZGF0YSgndXJsJyk7XG4gICAgICBpZiAodXJsICYmIHVybCAhPT0gJycpIHtcbiAgICAgICAgd2luZG93Lm9wZW4odXJsKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGN5Lm9uKCd0YXBzdGFydCBtb3VzZW92ZXInLCAnbm9kZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBzZXREaW1TdHlsZShjeSwge1xuICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6IGRpbUNvbG9yLFxuICAgICAgICAnbGluZS1jb2xvcic6IGRpbUNvbG9yLFxuICAgICAgICAndGFyZ2V0LWFycm93LWNvbG9yJzogZGltQ29sb3IsXG4gICAgICAgIGNvbG9yOiBkaW1Db2xvcixcbiAgICAgIH0pO1xuXG4gICAgICBzZXRGb2N1cyhcbiAgICAgICAgZS50YXJnZXQsXG4gICAgICAgIHN1Y2Nlc3NvckNvbG9yLFxuICAgICAgICBwcmVkZWNlc3NvcnNDb2xvcixcbiAgICAgICAgZWRnZUFjdGl2ZVdpZHRoLFxuICAgICAgICBhcnJvd0FjdGl2ZVNjYWxlLFxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIGN5Lm9uKCd0YXBlbmQgbW91c2VvdXQnLCAnbm9kZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBzZXRSZXNldEZvY3VzKGUuY3kpO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3RhdGUtYWxlcnRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaG9uZVwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VcIj5QbGVhc2Ugcm90YXRlIHlvdXIgZGV2aWNlITwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyZWVcIj5cbiAgICAgICAgPGRpdiByZWY9e2NvbnRhaW5lclJlZn0gc3R5bGU9e3sgaGVpZ2h0OiAnNjAwcHgnIH19IC8+XG4gICAgICAgIDxkaXY+Y29udHJpYnV0b3JzPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/techtree/economy.js\n");

/***/ })

})