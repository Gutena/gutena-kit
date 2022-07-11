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
  __
} = wp.i18n;
const {
  Icon
} = wp.components;
const {
  Fragment,
  useContext
} = wp.element;

const DemoCard = props => {
  const {
    import_preview_image_url,
    import_file_name,
    preview_url,
    demo_type
  } = props.demoWithVariation.default;
  const {
    isPreviewDemo,
    previewDemoData,
    styleSelected,
    baseDemoIndex,
    demoIndex,
    dispatch
  } = useContext(_data_DemoContextProvider__WEBPACK_IMPORTED_MODULE_1__.DemoContext); //Get actual demo index including all styles variation

  const getDemoindex = () => {
    let selectedDemoIndex = props.demoIndex;

    if (selectedDemoIndex > 0) {
      //noOfStyles = style variation + main demo
      let noOfStyles = Object.keys(props.demoWithVariation).length;
      selectedDemoIndex = selectedDemoIndex * noOfStyles;
    }

    return selectedDemoIndex;
  }; //On click demo card open preview demo modal


  const onClickDemoCard = () => {
    if ('freepro' === demo_type) {
      window.open(preview_url, '_blank');
    } else {
      let selectedDemoIndex = getDemoindex();
      dispatch({
        type: 'PREVIEW_DEMO',
        selectedDemoData: props.demoWithVariation,
        selectedDemoIndex: selectedDemoIndex
      });
    }
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
  }, import_file_name)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-overlay"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-overlay-import-btn"
  }, 'freepro' === demo_type ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, __('View Demo ', 'gutena-kit'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Icon, {
    icon: "external",
    size: "5"
  })) : __('Import Demo', 'gutena-kit'))));
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
    baseDemoIndex,
    demoIndex,
    dispatch
  } = useContext(_data_DemoContextProvider__WEBPACK_IMPORTED_MODULE_1__.DemoContext);
  const defaultDemo = previewDemoData.default; //RESET DEMO STYLE FOR PREVIEW AND IMPORT

  const demoStyleReSet = () => {
    dispatch({
      type: 'RESET_PREVIEW_DEMO'
    }); //Send Message to iframe to change global styles as per user choice for preview

    document.getElementById("gk-demo-preview-frame").contentWindow.postMessage({
      "style": "default"
    }, "*");
  }; //SET DEMO STYLE FOR PREVIEW AND IMPORT


  const demoStyleSet = (styleSlug, selectedDemoIndex) => {
    dispatch({
      type: 'SET_PREVIEW_DEMO',
      styleSelected: styleSlug,
      demoIndex: selectedDemoIndex
    }); //Send Message to iframe to change global styles as per user choice for preview

    document.getElementById("gk-demo-preview-frame").contentWindow.postMessage({
      "style": styleSlug
    }, "*");
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, isPreviewDemo && defaultDemo.preview_url.length > 5 ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-demo-preview wp-full-overlay expanded preview-desktop"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "customize-controls",
    className: "gk-left-section wrap wp-full-overlay-sidebar"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-header"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-back-button",
    onClick: () => dispatch({
      type: 'CLOSE_PREVIEW_DEMO'
    })
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
    className: "gk-reset-icon",
    title: "reset",
    onClick: () => demoStyleReSet()
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Icon, {
    icon: "image-rotate"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-style-variation-cards"
  }, Object.keys(previewDemoData).length > 0 ? Object.keys(previewDemoData).map(function (styleSlug, index) {
    let demoVariation = previewDemoData[styleSlug];
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: 'gk-demo-variation' + styleSlug,
      className: `gk-color-demo-variation-card ${styleSelected === styleSlug ? "style-selected" : ""}`,
      onClick: () => demoStyleSet(styleSlug, parseInt(baseDemoIndex) + index)
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "gk-demo-color-palette"
    }, demoVariation.colors.length > 0 ? demoVariation.colors.map((colorCode, colorIndex) => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        key: 'gk-colors-' + colorIndex,
        className: "gk-color-swatch",
        style: {
          background: colorCode
        }
      });
    }) : ''), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "demo-style-details"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "style-title"
    }, demoVariation.title), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "font-families"
    }, demoVariation.fontFamily.join(', '))));
  }) : '')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "import-demo-action"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "import-demo-btn",
    href: gutenakit_demo_info.demo_import_url + demoIndex
  }, "Import Demo"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "customize-preview",
    className: "gk-right-section wp-full-overlay-main iframe-ready"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("iframe", {
    id: "gk-demo-preview-frame",
    title: "Site Preview",
    width: "100%",
    height: "100%",
    sandbox: "allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts",
    src: defaultDemo.preview_url + '?embedddemo=gd'
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
    baseDemoIndex: 0,
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
    baseDemoIndex,
    demoIndex
  } = state; //Destructuring 

  let update = {};

  switch (action.type) {
    case 'PREVIEW_DEMO':
      update = {
        isPreviewDemo: true,
        previewDemoData: action.selectedDemoData,
        styleSelected: 'default',
        baseDemoIndex: action.selectedDemoIndex,
        demoIndex: action.selectedDemoIndex
      };
      return update;
      break;

    case 'SET_PREVIEW_DEMO':
      update = {
        isPreviewDemo: true,
        previewDemoData: previewDemoData,
        styleSelected: action.styleSelected,
        baseDemoIndex: baseDemoIndex,
        demoIndex: action.demoIndex
      };
      return update;
      break;

    case 'RESET_PREVIEW_DEMO':
      update = {
        isPreviewDemo: true,
        previewDemoData: previewDemoData,
        styleSelected: 'default',
        baseDemoIndex: baseDemoIndex,
        demoIndex: baseDemoIndex
      };
      return update;
      break;

    case 'CLOSE_PREVIEW_DEMO':
      update = {
        isPreviewDemo: false,
        previewDemoData: previewDemoData,
        styleSelected: 'default',
        baseDemoIndex: 0,
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
  SelectControl
} = wp.components;
const {
  Fragment,
  render,
  useState
} = wp.element; //add all to category list

gutenakit_demo_info.category.unshift('all');

const GutenaKitDemoImportDashboard = props => {
  //check for info
  if (typeof gutenakit_demo_info === 'undefined') {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, __('Sorry! Gutena kit dashboard not available.', 'gutena-kit'));
  } //Main Demos object with index actual number


  let mainDemos = {};
  Object.keys(gutenakit_demo_info.demo_list).forEach((demoName, index) => {
    mainDemos[demoName] = index;
  });
  const demoArray = Object.values(gutenakit_demo_info.demo_list); //Prepare demo list

  const [demoList, setdemoList] = useState(demoArray);
  const [category, setCategory] = useState('all');
  const [demoType, setDemoType] = useState('all'); //Category Filter

  const applyCategoryFilter = categorySelected => {
    setCategory(categorySelected);

    if ('all' === categorySelected) {
      setdemoList(demoArray);
    } else {
      setdemoList(demoArray.filter(currDemo => {
        return currDemo.default.category.indexOf(categorySelected) >= 0;
      }));
    }
  }; //Demo Filter


  const applyDemoTypeFilter = demoTypeSelected => {
    setDemoType(demoTypeSelected);

    if ('all' === demoTypeSelected) {
      setdemoList(demoArray);
    } else {
      setdemoList(demoArray.filter(currDemo => {
        if ('free' === demoTypeSelected) {
          return currDemo.default.demo_type === 'free';
        } else {
          return currDemo.default.demo_type != 'free';
        }
      }));
    }
  }; //HTML VIEW


  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_data_DemoContextProvider__WEBPACK_IMPORTED_MODULE_1__["default"], null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-dashboard"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_demo_preview_DemoPreview__WEBPACK_IMPORTED_MODULE_3__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-top-header"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-logo"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: gutenakit_demo_info.logo
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-center-tabs"
  }, '1' === gutenakit_demo_info.show_demo_type_filter ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `gk-tab ${'all' === demoType ? 'selected' : ''}`,
    onClick: () => applyDemoTypeFilter('all')
  }, __('All', 'gutena-kit')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `gk-tab ${'free' === demoType ? 'selected' : ''}`,
    onClick: () => applyDemoTypeFilter('free')
  }, __('Free Templates', 'gutena-kit')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `gk-tab ${'pro' === demoType ? 'selected' : ''}`,
    onClick: () => applyDemoTypeFilter('pro')
  }, __('Premium Templates', 'gutena-kit'))) : ''), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-right-filters"
  }, '1' === gutenakit_demo_info.show_category_filter ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    value: category,
    options: gutenakit_demo_info.category.map(cat => {
      return {
        value: cat,
        label: cat[0].toUpperCase() + cat.slice(1)
      };
    }),
    onChange: newCategory => applyCategoryFilter(newCategory),
    __nextHasNoMarginBottom: true
  }) : '')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-dashboard-body"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-demo-grid"
  }, demoList.length > 0 ? demoList.map((item, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_DemoCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: 'gk-demo-' + index,
      demoWithVariation: item,
      demoIndex: mainDemos[item.default.demo_slug]
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