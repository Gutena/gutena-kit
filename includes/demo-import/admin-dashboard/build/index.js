/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/demo/DemoCard.js":
/*!*****************************************!*\
  !*** ./src/components/demo/DemoCard.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_DemoContextProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/DemoContextProvider */ "./src/data/DemoContextProvider.js");

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
  } = useContext(_data_DemoContextProvider__WEBPACK_IMPORTED_MODULE_1__.DemoContext);

  //Get actual demo index including all styles variation
  const getDemoindex = () => {
    let selectedDemoIndex = props.demoIndex;
    if (selectedDemoIndex > 0) {
      //noOfStyles = style variation + main demo
      let noOfStyles = Object.keys(props.demoWithVariation).length;
      selectedDemoIndex = selectedDemoIndex * noOfStyles;
    }
    return selectedDemoIndex;
  };

  //On click demo card open preview demo modal
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
    className: "gk-demo-card"
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
  }, import_file_name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-demo-import-action",
    onClick: () => onClickDemoCard()
  }, 'freepro' === demo_type ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "import-icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Icon, {
    icon: "external",
    size: "5"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "import-btn-name"
  }, __('View', 'gutena-kit'))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "import-icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Icon, {
    size: "5",
    icon: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      width: "20",
      height: "17",
      viewBox: "0 0 20 17",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M0.833375 11.0835C0.832862 10.1631 1.06706 9.25771 1.51383 8.45296C1.96061 7.64821 2.60521 6.97067 3.38671 6.48438C3.59297 4.87612 4.37821 3.39813 5.59547 2.32701C6.81274 1.25589 8.37861 0.665039 10 0.665039C11.6215 0.665039 13.1873 1.25589 14.4046 2.32701C15.6219 3.39813 16.4071 4.87612 16.6134 6.48438C17.5827 7.08745 18.3368 7.98138 18.7678 9.03853C19.1988 10.0957 19.2848 11.262 19.0135 12.3709C18.7422 13.4798 18.1274 14.4747 17.257 15.2134C16.3866 15.9522 15.305 16.397 14.1667 16.4844L5.83337 16.5002C3.03671 16.2719 0.833375 13.9352 0.833375 11.0835ZM14.04 14.8227C14.8282 14.7621 15.5771 14.454 16.1797 13.9423C16.7823 13.4307 17.2078 12.7417 17.3954 11.9737C17.583 11.2058 17.5232 10.3982 17.2244 9.66636C16.9256 8.93449 16.4032 8.31576 15.7317 7.89854L15.0592 7.47938L14.9592 6.69438C14.8034 5.48912 14.2141 4.38182 13.3014 3.57945C12.3886 2.77708 11.2149 2.33453 9.99963 2.33453C8.78434 2.33453 7.61064 2.77708 6.69789 3.57945C5.78515 4.38182 5.19581 5.48912 5.04004 6.69438L4.94004 7.47938L4.26921 7.89854C3.59779 8.31571 3.07536 8.93437 2.77654 9.66617C2.47772 10.398 2.41778 11.2055 2.6053 11.9734C2.79281 12.7413 3.21819 13.4303 3.82067 13.942C4.42315 14.4537 5.17192 14.762 5.96004 14.8227L6.10421 14.8335H13.8959L14.04 14.8227ZM10.8334 9.00021H13.3334L10 13.1669L6.66671 9.00021H9.16671V5.66688H10.8334V9.00021Z",
      fill: "#484952"
    }))
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "import-btn-name"
  }, __('Import', 'gutena-kit'))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DemoCard);

/***/ }),

/***/ "./src/components/demo/DemoPreview.js":
/*!********************************************!*\
  !*** ./src/components/demo/DemoPreview.js ***!
  \********************************************/
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
  const defaultDemo = previewDemoData.default;

  //RESET DEMO STYLE FOR PREVIEW AND IMPORT
  const demoStyleReSet = () => {
    dispatch({
      type: 'RESET_PREVIEW_DEMO'
    });
    //Send Message to iframe to change global styles as per user choice for preview
    document.getElementById("gk-demo-preview-frame").contentWindow.postMessage({
      "style": "default"
    }, "*");
  };

  //SET DEMO STYLE FOR PREVIEW AND IMPORT
  const demoStyleSet = (styleSlug, selectedDemoIndex) => {
    dispatch({
      type: 'SET_PREVIEW_DEMO',
      styleSelected: styleSlug,
      demoIndex: selectedDemoIndex
    });
    //Send Message to iframe to change global styles as per user choice for preview
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
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "gk-btn-icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "12",
    height: "13",
    viewBox: "0 0 12 13",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    y: "12",
    width: "12",
    height: "1",
    fill: "white"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "5",
    y: "9",
    width: "9",
    height: "1",
    transform: "rotate(-90 5 9)",
    fill: "white"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M5.49994 10L1 5.55124L1.51037 5L5.5 8.94401L9.48963 5L10 5.55124L5.49994 10Z",
    fill: "white"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "gk-btn-text"
  }, __('Import Demo', 'gutena-kit'))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
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

/***/ "./src/components/onBoarding/BlockSettings.js":
/*!****************************************************!*\
  !*** ./src/components/onBoarding/BlockSettings.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);

/* Block activate and deactivate settings */


const noop = () => {};
const ToggleTickCross = props => {
  const {
    toggleID = Math.floor(Math.random() * 1000) + 1,
    // Returns a random integer from 1 to 1000
    size = '',
    //large or default
    isActive = false,
    onChangeFunc = noop,
    msg = ''
  } = props;
  const newToggleID = "gk-switch-target-" + toggleID;
  //console.log( "toggle ", props);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-toggle-tick-cross " + size
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-toggle"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    id: newToggleID,
    onChange: () => onChangeFunc(),
    checked: isActive ? 'checked' : '',
    value: toggleID
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "gk-toggle",
    htmlFor: newToggleID
  }, 'large' === size && '' !== msg ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-toggle-msg"
  }, msg) : '', (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "gk-toggle-knob",
    role: "switch"
  }))));
};
const BlockSettings = props => {
  const gutenaBlockData = gutenakit_dahboard_info.onboarding_info.step_two;

  //console.log("gutenaBlockData",gutenaBlockData);

  //Get status for all block action toogle btn
  const getAllBlockActionToggleStatus = blocks => {
    let status = 0; //0:all disabled, 1: few enabled, 2: All enabled
    let message = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('All Blocks Disabled', 'gutena-kit');
    for (let i = 0; i < blocks.length; i++) {
      //set status = 2 intially if a block is enabled
      if (blocks[i].is_enabled) {
        status = 2;
        message = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('All Blocks Enabled', 'gutena-kit');
      }
      //set status = 1, if a block is disabled and initially it was 2
      if (2 === status && !blocks[i].is_enabled) {
        status = 1;
        message = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Few Blocks Enabled', 'gutena-kit');
        break;
      }
    }
    return {
      is_enabled: status > 0,
      msg: message
    };
  };

  //Block data : blocks:[{slug, name, is_enabled}], allBlocksActionToggle:{ is_enabled, msg: message }
  const [blockData, setBlockData] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({
    blocks: gutenaBlockData.blocks.map(block => ({
      ...block,
      status: block.is_enabled
    })),
    allBlocksActionToggle: getAllBlockActionToggleStatus(gutenaBlockData.blocks),
    saveStatus: 0 //0:not initiated, 1 : in progress, 2: Completed, 3:Error
  });

  //Set Blocks status
  const toggleBlockStatus = slug => {
    let blocks = blockData.blocks.map(block => slug === block.slug ? {
      ...block,
      is_enabled: !block.is_enabled
    } : block);
    //Set block Data
    setBlockData({
      ...blockData,
      blocks: blocks,
      allBlocksActionToggle: getAllBlockActionToggleStatus(blocks)
    });
  };

  //Set toggleAllBlocksAction btn status
  const toggleAllBlocksActionToggle = status => {
    //Set status to all blocks
    let blocks = blockData.blocks.map(block => ({
      ...block,
      is_enabled: status
    }));

    //Set block Data
    setBlockData({
      ...blockData,
      blocks: blocks,
      allBlocksActionToggle: getAllBlockActionToggleStatus(blocks)
    });
  };

  //Save Block Settings : install and activate block plugins 
  const SaveBlockSettings = () => {
    //if already in progress
    if (1 === blockData.saveStatus) {
      return false;
    }
    //Set status in progress 
    setBlockData({
      ...blockData,
      saveStatus: 1
    });
    var current_plugin = false;
    var plugin_processed = [];
    var countBlocks = 0;
    var resStore = [];
    var resError = false;
    const process_current_plugin = () => {
      if (current_plugin.slug && -1 === plugin_processed.indexOf(current_plugin.slug)) {
        //Add in activated block list
        plugin_processed.push(current_plugin.slug);
        //console.log(" current_plugin", current_plugin);
        fetch(gutenakit_dahboard_info.ajax_url, {
          method: 'POST',
          credentials: 'same-origin',
          // <-- make sure to include credentials
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
            'X-WP-Nonce': gutenakit_dahboard_info.nonce
          },
          body: new URLSearchParams({
            action: "manage_gutena_blocks",
            gutena_kit_security: gutenakit_dahboard_info.nonce,
            slug: current_plugin.slug,
            activate_action: current_plugin.activate ? 'activate' : 'deactivate'
          })
        }).then(response => response.json()).then(data => {
          //Store response for log
          resStore[current_plugin.slug] = data;
          if (false === resError && false === data.success) {
            resError = true;
          }
          next_plugin();
        });
      }
    };

    //Process plugin one at a time
    const next_plugin = () => {
      if (countBlocks >= blockData.blocks.length) {
        return false;
      }
      let index = countBlocks;
      for (index = countBlocks; index < blockData.blocks.length; index++) {
        let item = blockData.blocks[index];
        //console.log("item",item);
        countBlocks++;
        //Continue loop if block already enabled or disabled by admin
        if (item.status !== item.is_enabled && -1 === plugin_processed.indexOf(item.slug)) {
          current_plugin = item;
          current_plugin.activate = item.is_enabled; //action activate or not
          process_current_plugin();
          break;
        }
      }
      if (countBlocks >= blockData.blocks.length || index === blockData.blocks.length) {
        setTimeout(() => {
          process_done();
        }, 1000);
        return false;
      }
    };

    //process completed
    const process_done = () => {
      //Set status in progress 
      console.log("process completed", resStore);
      if (resError) {
        //On error
        setBlockData({
          ...blockData,
          saveStatus: 3 //error status
        });
      } else {
        //On success: Set status to all blocks
        let blocks = blockData.blocks.map(block => ({
          ...block,
          status: block.is_enabled
        }));
        setBlockData({
          ...blockData,
          blocks: blocks,
          allBlocksActionToggle: getAllBlockActionToggleStatus(blocks),
          saveStatus: 2
        });
      }
    };
    next_plugin();
  };

  //Get btn Name
  const getSaveBtnName = () => {
    let btnName = '';
    switch (blockData.saveStatus) {
      case 0:
        //initial
        btnName = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Save', 'gutena-kit');
        break;
      case 1:
        //In progress
        btnName = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Saving...', 'gutena-kit');
        break;
      case 2:
        //Success
        btnName = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Saved', 'gutena-kit');
        break;
      case 3:
        //failed
        btnName = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Save', 'gutena-kit');
        break;
      default:
        btnName = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Save', 'gutena-kit');
        break;
    }
    return btnName;
  };

  //HTML VIEW
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-block-settings-card"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-header"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-title"
  }, gutenaBlockData.title), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-all-blocks-action"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleTickCross, {
    toggleID: "all-blocks-action",
    size: "large",
    isActive: blockData.allBlocksActionToggle.is_enabled,
    msg: blockData.allBlocksActionToggle.msg,
    onChangeFunc: () => toggleAllBlocksActionToggle(!blockData.allBlocksActionToggle.is_enabled)
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-block-list"
  }, blockData.blocks.map(block => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'gk-block-control-section ' + block.slug,
      key: block.slug
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "gk-block-control-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "gk-block-name"
    }, block.name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "gk-block-control"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleTickCross, {
      toggleID: block.slug,
      isActive: block.is_enabled,
      onChangeFunc: () => toggleBlockStatus(block.slug)
    }))));
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-message"
  }, 3 === blockData.saveStatus ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "unknown_error",
    className: "notice notice-error is-dismissible"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Failed: Please check user or file permission to save block settings.', 'gutena-kit')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    className: "notice-dismiss",
    onClick: () => setBlockData({
      ...blockData,
      saveStatus: 0
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "screen-reader-text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dismiss this notice.', 'gutena-kit')))) : '', 2 === blockData.saveStatus ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "unknown_error",
    className: "notice notice-success is-dismissible"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Success: Block settings saved successfully.', 'gutena-kit'), " "), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    className: "notice-dismiss",
    onClick: () => setBlockData({
      ...blockData,
      saveStatus: 0
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "screen-reader-text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dismiss this notice.', 'gutena-kit')))) : '')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-save-block-settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gutena-button " + (1 === blockData.saveStatus ? "start-installing" : ""),
    onClick: () => SaveBlockSettings(),
    disabled: 1 === blockData.saveStatus
  }, getSaveBtnName())));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockSettings);

/***/ }),

/***/ "./src/components/tabs/BlockSettingsTab.js":
/*!*************************************************!*\
  !*** ./src/components/tabs/BlockSettingsTab.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _onBoarding_BlockSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../onBoarding/BlockSettings */ "./src/components/onBoarding/BlockSettings.js");

/**
 * gutena: Settings tab
 */





//add all to category list
gutenakit_demo_info.category.unshift('all');
const BlockSettingsTab = props => {
  //HTML VIEW
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-block-settings-tab"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_onBoarding_BlockSettings__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockSettingsTab);

/***/ }),

/***/ "./src/components/tabs/DocTab.js":
/*!***************************************!*\
  !*** ./src/components/tabs/DocTab.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

/**
 * gutena: doc tab
 */

const DocTab = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gutena-tab-body gutena-doc-tab"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gutena-details"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "gutena-title"
  }, props.details.title), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gutena-topics"
  }, props.details.topics.map((item, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: 'gutena-topics-' + index
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "gutena-heading"
    }, index + 1 + '. ', " ", typeof item.link === 'undefined' || item.link === '' ? item.heading : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: item.link,
      target: "_blank"
    }, item.heading), " "), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: ""
    }, item.description));
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gutena-support"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "gutena-title"
  }, props.details.support.title), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "gutena-description"
  }, props.details.support.description), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: props.details.support.link_url,
    className: "gutena-support-link",
    target: "_blank"
  }, props.details.support.link_text))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DocTab);

/***/ }),

/***/ "./src/components/tabs/TemplatesTab.js":
/*!*********************************************!*\
  !*** ./src/components/tabs/TemplatesTab.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_DemoContextProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/DemoContextProvider */ "./src/data/DemoContextProvider.js");
/* harmony import */ var _demo_DemoCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../demo/DemoCard */ "./src/components/demo/DemoCard.js");
/* harmony import */ var _demo_DemoPreview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../demo/DemoPreview */ "./src/components/demo/DemoPreview.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);

/**
 * Starter Templates tab 
 */







//add all to category list
gutenakit_demo_info.category.unshift('all');
const TemplatesTab = props => {
  //check for info
  if (typeof gutenakit_demo_info === 'undefined') {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Sorry! Gutena kit dashboard not available.', 'gutena-kit'));
  }

  //Main Demos object with index actual number
  let mainDemos = {};
  Object.keys(gutenakit_demo_info.demo_list).forEach((demoName, index) => {
    mainDemos[demoName] = index;
  });
  const demoArray = Object.values(gutenakit_demo_info.demo_list);
  //Prepare demo list
  const [demoList, setdemoList] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(demoArray);
  const [category, setCategory] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('all');
  const [demoType, setDemoType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('all');

  //Category Filter
  const applyCategoryFilter = categorySelected => {
    setCategory(categorySelected);
    if ('all' === categorySelected) {
      setdemoList(demoArray);
    } else {
      setdemoList(demoArray.filter(currDemo => {
        return currDemo.default.category.indexOf(categorySelected) >= 0;
      }));
    }
  };

  //Demo Filter
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
  };

  //HTML VIEW
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_data_DemoContextProvider__WEBPACK_IMPORTED_MODULE_1__["default"], null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-dashboard"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_demo_DemoPreview__WEBPACK_IMPORTED_MODULE_3__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-top-header"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-logo"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: gutenakit_demo_info.logo
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-center-tabs"
  }, '1' === gutenakit_demo_info.show_demo_type_filter ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `gk-tab ${'all' === demoType ? 'selected' : ''}`,
    onClick: () => applyDemoTypeFilter('all')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('All', 'gutena-kit')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `gk-tab ${'free' === demoType ? 'selected' : ''}`,
    onClick: () => applyDemoTypeFilter('free')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Free Templates', 'gutena-kit')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `gk-tab ${'pro' === demoType ? 'selected' : ''}`,
    onClick: () => applyDemoTypeFilter('pro')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Premium Templates', 'gutena-kit'))) : ''), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gk-right-filters"
  }, '1' === gutenakit_demo_info.show_category_filter ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
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
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_demo_DemoCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: 'gk-demo-' + index,
      demoWithVariation: item,
      demoIndex: mainDemos[item.default.demo_slug]
    });
  }) : '')))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TemplatesTab);

/***/ }),

/***/ "./src/components/tabs/WelcomeTab.js":
/*!*******************************************!*\
  !*** ./src/components/tabs/WelcomeTab.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

/**
 * gutena: Welcome tab
 */

const WelcomeTab = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gutena-tab-body gutena-welcome-tab gutena-grid"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gutena-video"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: props.details.button_link,
    target: "_blank"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: props.details.video_img_url,
    alt: props.details.title,
    title: props.details.title
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gutena-details"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "gutena-title"
  }, props.details.title), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "gutena-description"
  }, props.details.description), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: props.details.button_link,
    className: "gutena-button",
    target: "_blank"
  }, props.details.button_text)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WelcomeTab);

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
  const [demoInfo, dispatch] = useReducer(_DemoReducer__WEBPACK_IMPORTED_MODULE_1__.DemoReducer, currentDemo);
  //dispatch = DemoReducer : it's a reducer function defined in DemoReducer.js
  // DemoReducer function can access { demoIndex, styleSelected, demoSelected, msg } as a state
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(DemoContext.Provider, {
    value: {
      ...demoInfo,
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_tabs_WelcomeTab_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/tabs/WelcomeTab.js */ "./src/components/tabs/WelcomeTab.js");
/* harmony import */ var _components_tabs_TemplatesTab_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/tabs/TemplatesTab.js */ "./src/components/tabs/TemplatesTab.js");
/* harmony import */ var _components_tabs_BlockSettingsTab_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tabs/BlockSettingsTab.js */ "./src/components/tabs/BlockSettingsTab.js");
/* harmony import */ var _components_tabs_DocTab_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tabs/DocTab.js */ "./src/components/tabs/DocTab.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");









class GutenaKitAdminDashboard extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    //check for info
    if (typeof gutenakit_demo_info === 'undefined' || typeof gutenakit_dahboard_info === 'undefined') {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Sorry! Gutena kit dashboard not available.', 'gutena-kit'));
    }

    //Tab body
    const tabsComponent = {
      welcome: _components_tabs_WelcomeTab_js__WEBPACK_IMPORTED_MODULE_1__["default"],
      templates: _components_tabs_TemplatesTab_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      blockSettings: _components_tabs_BlockSettingsTab_js__WEBPACK_IMPORTED_MODULE_3__["default"],
      doc: _components_tabs_DocTab_js__WEBPACK_IMPORTED_MODULE_4__["default"]
    };
    //tabs
    const tabs = [];
    for (let tabName in gutenakit_dahboard_info.tabs) {
      let tab = gutenakit_dahboard_info.tabs[tabName];
      tabs.push({
        name: tabName,
        title: tab.tab_title,
        className: 'gutena-dashboard-' + tabName,
        details: tab
      });
    }
    const onSelect = tabName => {};
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "gutenakit-admin-dashboard"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "gutena-header"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "gutena-admin-logo"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: gutenakit_dahboard_info.logo
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TabPanel, {
      className: "gutena-tab-panel",
      activeClass: "active-tab",
      onSelect: onSelect,
      tabs: tabs
    }, tab => {
      const TabSelected = tabsComponent[tab.name] || _components_tabs_WelcomeTab_js__WEBPACK_IMPORTED_MODULE_1__["default"];
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TabSelected, {
        details: tab.details
      });
    })));
  }
}
class GutenaKitAdminOnBoarding extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    //check for info
    if (typeof gutenakit_demo_info === 'undefined' || typeof gutenakit_dahboard_info === 'undefined') {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Sorry! Gutena kit dashboard not available.', 'gutena-kit'));
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "gutenakit-admin-dashboard"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "gutena-header"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "gutena-admin-logo"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: gutenakit_dahboard_info.logo
    })))));
  }
}
wp.domReady(() => {
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.render)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(GutenaKitAdminDashboard, null), document.querySelector('#gutenakit-admin-dashboard-page'));
});

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkgutena_kit_demo_import"] = globalThis["webpackChunkgutena_kit_demo_import"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map