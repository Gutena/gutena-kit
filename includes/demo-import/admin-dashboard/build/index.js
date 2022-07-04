/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/DemoCard.js":
/*!************************************!*\
  !*** ./src/components/DemoCard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_DemoContextProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/DemoContextProvider */ "./src/data/DemoContextProvider.js");


/**
 * Demo card
 */

const {
  useContext
} = wp.element;

const DemoCard = props => {
  const {
    import_preview_image_url,
    import_file_name
  } = props.demoWithVariation.default;
  const {
    isPreviewDemo,
    previewDemoData,
    styleSelected,
    demoIndex,
    dispatch
  } = useContext(_data_DemoContextProvider__WEBPACK_IMPORTED_MODULE_1__.DemoContext); //Get actual demo index including all styles variation

  const getDemoindex = () => {
    let selectedDemoIndex = props.demoIndex;

    if (selectedDemoIndex > 0) {
      //noOfStyles = style variation + main demo
      let noOfStyles = Object.keys(props.demoWithVariation).length;
      selectedDemoIndex = selectedDemoIndex * noOfStyles + 1;
    }

    return selectedDemoIndex;
  }; //On click demo card open preview demo modal


  const onClickDemoCard = () => {
    let selectedDemoIndex = getDemoindex();
    dispatch({
      type: 'PREVIEW_DEMO',
      selectedDemoData: props.demoWithVariation,
      selectedDemoIndex: selectedDemoIndex
    });
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-demo-card",
    onClick: () => onClickDemoCard()
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-demo-card-img"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: import_preview_image_url,
    alt: import_file_name,
    loading: "lazy"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-demo-card-footer"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-demo-title"
  }, import_file_name)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DemoCard);

/***/ }),

/***/ "./src/components/demo-preview/DemoPreview.js":
/*!****************************************************!*\
  !*** ./src/components/demo-preview/DemoPreview.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_DemoContextProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/DemoContextProvider */ "./src/data/DemoContextProvider.js");


/**
 * Demo Preview Screen : admin can select styles variation
 */

const {
  __
} = wp.i18n;
const {
  Fragment,
  useContext
} = wp.element;
const {
  Icon
} = wp.components;

const DemoPreview = props => {
  const {
    isPreviewDemo,
    previewDemoData,
    styleSelected,
    demoIndex,
    dispatch
  } = useContext(_data_DemoContextProvider__WEBPACK_IMPORTED_MODULE_1__.DemoContext);
  const defaultDemo = previewDemoData.default; // console.log("previewDemoData", previewDemoData);
  //Get actual demo index including all styles variation

  const getDemoindex = () => {
    let selectedDemoIndex = props.demoIndex;

    if (selectedDemoIndex > 0) {
      //noOfStyles = style variation + main demo
      let noOfStyles = Object.keys(previewDemoData).length;
      selectedDemoIndex = selectedDemoIndex * noOfStyles + 1;
    }

    return selectedDemoIndex;
  }; //On click demo card open preview demo modal


  const onClickDemoCard = () => {
    let selectedDemoIndex = getDemoindex();
    dispatch({
      type: 'PREVIEW_DEMO',
      selectedDemoData: props.demoInfo,
      selectedDemoIndex: selectedDemoIndex
    });
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, isPreviewDemo && defaultDemo.preview_url.length > 5 ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-demo-preview wp-full-overlay expanded preview-desktop"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "customize-controls",
    className: "gk-left-section wrap wp-full-overlay-sidebar"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-header"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-back-button"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Icon, {
    icon: "arrow-left-alt2"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-text"
  }, __('BACK', 'gutena-kit'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-demo-title"
  }, defaultDemo.import_file_name + ' ' + __('Demo', 'gutena kit'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-style-variations"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-section-title-reset-icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-section-title"
  }, __('Choose Style', 'gutena-kit')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-reset-icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Icon, {
    icon: "image-rotate"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-style-variations-card"
  }, Object.keys(previewDemoData).length > 0 ? Object.keys(previewDemoData).forEach(function (key) {
    console.log(key, previewDemoData[key]);
  }) : ''))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "customize-preview",
    className: "gk-right-section wp-full-overlay-main iframe-ready"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("iframe", {
    id: "gk-demo-preview-frame",
    title: "Site Preview",
    width: "100%",
    height: "100%",
    sandbox: "allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts",
    src: defaultDemo.preview_url + '?igu=1'
  }))) : '');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DemoPreview);

/***/ }),

/***/ "./src/data/DemoContextProvider.js":
/*!*****************************************!*\
  !*** ./src/data/DemoContextProvider.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoContext": () => (/* binding */ DemoContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DemoReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DemoReducer */ "./src/data/DemoReducer.js");


/**
 * demo global data
 */

const {
  createContext,
  useReducer
} = wp.element;
const DemoContext = createContext();

const DemoContextProvider = props => {
  let currentDemo = {
    isPreviewDemo: false,
    previewDemoData: {},
    styleSelected: 'default',
    demoIndex: 0
  };
  const [demoInfo, dispatch] = useReducer(_DemoReducer__WEBPACK_IMPORTED_MODULE_1__.DemoReducer, currentDemo); //dispatch = DemoReducer : it's a reducer function defined in DemoReducer.js
  // DemoReducer function can access { demoIndex, styleSelected, demoSelected, msg } as a state

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(DemoContext.Provider, {
    value: { ...demoInfo,
      dispatch
    }
  }, props.children);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DemoContextProvider);


/***/ }),

/***/ "./src/data/DemoReducer.js":
/*!*********************************!*\
  !*** ./src/data/DemoReducer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoReducer": () => (/* binding */ DemoReducer)
/* harmony export */ });
/**
 * demo reducer : perform exactly one action on each dispatch
 */
const DemoReducer = (state, action) => {
  /**
   * "action" variable contain details object type of action
   * 
   * "state" variable contain initialize array or object defined in DemoContext.js
   * **/
  const {
    isPreviewDemo,
    previewDemoData,
    styleSelected,
    demoIndex
  } = state; //Destructuring 

  let update = {};

  switch (action.type) {
    case 'PREVIEW_DEMO':
      update = {
        isPreviewDemo: true,
        previewDemoData: action.selectedDemoData,
        styleSelected: 'default',
        demoIndex: action.selectedDemoIndex
      };
      return update;
      break;

    case 'CLOSE_PREVIEW_DEMO':
      update = {
        isPreviewDemo: false,
        previewDemoData: action.selectedDemoData,
        styleSelected: 'default',
        demoIndex: 0
      };
      return update;
      break;

    default:
      return state;
  }
};

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_DemoContextProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/DemoContextProvider */ "./src/data/DemoContextProvider.js");
/* harmony import */ var _components_DemoCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/DemoCard */ "./src/components/DemoCard.js");
/* harmony import */ var _components_demo_preview_DemoPreview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/demo-preview/DemoPreview */ "./src/components/demo-preview/DemoPreview.js");




const {
  __
} = wp.i18n;
const {
  Fragment,
  render,
  useState
} = wp.element;

const GutenaKitDemoImportDashboard = props => {
  //check for info
  if (typeof gutenakit_demo_info === 'undefined') {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, __('Sorry! Gutena kit dashboard not available.', 'gutena-kit'));
  }

  const [demoList, setdemoList] = useState(Object.values(gutenakit_demo_info.demo_list));
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_data_DemoContextProvider__WEBPACK_IMPORTED_MODULE_1__["default"], null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-dashboard"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_demo_preview_DemoPreview__WEBPACK_IMPORTED_MODULE_3__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-top-header"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-logo"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: gutenakit_demo_info.logo
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "center-tabs"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "right-filters"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-dashboard-body"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-demo-grid"
  }, demoList.length > 0 ? demoList.map((item, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_DemoCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: 'gk-demo-' + index,
      demoWithVariation: item,
      demoIndex: index
    });
  }) : '')))));
};

wp.domReady(() => {
  render((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(GutenaKitDemoImportDashboard, null), document.querySelector('#gutenakit-demo-import-page'));
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map