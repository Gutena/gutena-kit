/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./includes/block-editor/src/GutenaKitSettings.js":
/*!********************************************************!*\
  !*** ./includes/block-editor/src/GutenaKitSettings.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GutenaKitSettings": function() { return /* binding */ GutenaKitSettings; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_SelectDeviceDropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/SelectDeviceDropdown */ "./includes/block-editor/src/components/SelectDeviceDropdown.js");
/* harmony import */ var _components_RangeControlUnit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/RangeControlUnit */ "./includes/block-editor/src/components/RangeControlUnit.js");
/* harmony import */ var _components_BorderGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/BorderGroup */ "./includes/block-editor/src/components/BorderGroup.js");
/* harmony import */ var _components_EventsControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/EventsControl */ "./includes/block-editor/src/components/EventsControl.js");
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helpers/helpers */ "./includes/block-editor/src/helpers/helpers.js");

//Common Text Block : Add gap controls between media and text











 //https://make.wordpress.org/core/2019/04/09/the-block-editor-javascript-module-in-5-2/
//Edit Function

const GutenaKitSettings = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.createHigherOrderComponent)(BlockEdit => {
  return props => {
    var _supports$spacing, _supports$spacing2, _gutenaKitStyle$style, _gutenaKitStyle$style2, _gutenaKitStyle$style3, _gutenaKitStyle$style4, _gutenaKitStyle$style5, _gutenaKitStyle$style6, _gutenaKitStyle$style7, _gutenaKitStyle$style8, _gutenaKitStyle$style9, _gutenaKitStyle$style10;

    const {
      name,
      attributes,
      setAttributes,
      isSelected,
      clientId
    } = props;

    if ('core/group' !== name) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props);
    }
    /***** Check Core support for block : start ******/

    /**
     * https://developer.wordpress.org/block-editor/reference-guides/data/data-core-blocks/#getblocktype
     */


    const {
      supports = {}
    } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.store).getBlockType(name, ''), []); //console.log("supports",supports);
    //Allowed margin sides

    const marginSides = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_11__.gkIsEmpty)(supports === null || supports === void 0 ? void 0 : (_supports$spacing = supports.spacing) === null || _supports$spacing === void 0 ? void 0 : _supports$spacing.margin) || !Array.isArray(supports.spacing.margin) ? ['top', 'right', 'bottom', 'left'] : supports.spacing.margin; //Allowed padding sides

    const paddingSides = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_11__.gkIsEmpty)(supports === null || supports === void 0 ? void 0 : (_supports$spacing2 = supports.spacing) === null || _supports$spacing2 === void 0 ? void 0 : _supports$spacing2.padding) || !Array.isArray(supports.spacing.padding) ? ['top', 'right', 'bottom', 'left'] : supports.spacing.padding;
    /***** Check Core support for block : end ******/
    //Default sides

    let DefaultStyle = attributes.style;

    if (!(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_11__.gkIsEmpty)(DefaultStyle)) {
      var _attributes$style, _attributes$style2, _attributes$style2$bo;

      DefaultStyle = { ...DefaultStyle,
        border: {
          normal: {
            border: (_attributes$style = attributes.style) === null || _attributes$style === void 0 ? void 0 : _attributes$style.border,
            radius: (_attributes$style2 = attributes.style) === null || _attributes$style2 === void 0 ? void 0 : (_attributes$style2$bo = _attributes$style2.border) === null || _attributes$style2$bo === void 0 ? void 0 : _attributes$style2$bo.radius
          }
        }
      };
    }

    const DEFAULT_STYLE = {
      enable: true,
      style: DefaultStyle,
      Tstyle: undefined,
      Mstyle: undefined
    };
    const {
      gutenaKitID,
      gutenaKitCSS,
      gutenaKitStyle = DEFAULT_STYLE,
      style = {}
    } = attributes; //Get Device preview type

    const deviceType = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
      return select("core/edit-post").__experimentalGetPreviewDeviceType();
    }, []); //Style name based on device type

    const styleName = 'Desktop' === deviceType ? 'style' : 'Tablet' === deviceType ? 'Tstyle' : 'Mstyle'; //Generate css 

    const generateCss = function () {
      let styleVar = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : gutenaKitStyle;
      let id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#block-' + clientId;
      //All media variable
      return ['style', 'Tstyle', 'Mstyle'].map(style => {
        var _deviceStyle$spacing, _deviceStyle$spacing2;

        let css = '';
        let cssHover = '';
        let cssLink = '';
        let cssLinkHover = '';
        let cssBefore = '';
        let cssHoverBefore = '';

        if ((0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_11__.gkIsEmpty)(styleVar[style])) {
          return css;
        } //media specific style variable


        let deviceStyle = styleVar[style]; //spacing

        css += (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_11__.spaceCss)(deviceStyle === null || deviceStyle === void 0 ? void 0 : (_deviceStyle$spacing = deviceStyle.spacing) === null || _deviceStyle$spacing === void 0 ? void 0 : _deviceStyle$spacing.padding, 'padding');
        css += (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_11__.spaceCss)(deviceStyle === null || deviceStyle === void 0 ? void 0 : (_deviceStyle$spacing2 = deviceStyle.spacing) === null || _deviceStyle$spacing2 === void 0 ? void 0 : _deviceStyle$spacing2.margin, 'margin');

        if ('style' === style) {
          var _deviceStyle$color, _deviceStyle$color2, _deviceStyle$border, _deviceStyle$border2, _deviceStyle$boxShado, _deviceStyle$boxShado2;

          //color normal
          if (!(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_11__.gkIsEmpty)(deviceStyle === null || deviceStyle === void 0 ? void 0 : (_deviceStyle$color = deviceStyle.color) === null || _deviceStyle$color === void 0 ? void 0 : _deviceStyle$color.normal)) {
            var _deviceStyle$color$no, _deviceStyle$color$no2, _deviceStyle$color$no3;

            // Text Color
            css += (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_11__.gkIsEmpty)((_deviceStyle$color$no = deviceStyle.color.normal) === null || _deviceStyle$color$no === void 0 ? void 0 : _deviceStyle$color$no.text) ? '' : ' color:' + deviceStyle.color.normal.text + ' !important;'; // Background Color

            css += (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_11__.gkIsEmpty)((_deviceStyle$color$no2 = deviceStyle.color.normal) === null || _deviceStyle$color$no2 === void 0 ? void 0 : _deviceStyle$color$no2.background) ? '' : ' background:' + deviceStyle.color.normal.background + ' !important;'; // Link Color

            cssLink += (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_11__.gkIsEmpty)((_deviceStyle$color$no3 = deviceStyle.color.normal) === null || _deviceStyle$color$no3 === void 0 ? void 0 : _deviceStyle$color$no3.link) ? '' : ' color:' + deviceStyle.color.normal.link + ' !important;';
          } //color hover


          if (!(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_11__.gkIsEmpty)(deviceStyle === null || deviceStyle === void 0 ? void 0 : (_deviceStyle$color2 = deviceStyle.color) === null || _deviceStyle$color2 === void 0 ? void 0 : _deviceStyle$color2.hover)) {
            var _deviceStyle$color$ho, _deviceStyle$color$ho2, _deviceStyle$color$ho3;

            // Text Color
            cssHover += (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_11__.gkIsEmpty)((_deviceStyle$color$ho = deviceStyle.color.hover) === null || _deviceStyle$color$ho === void 0 ? void 0 : _deviceStyle$color$ho.text) ? '' : ' color:' + deviceStyle.color.hover.text + ' !important;'; // Background Color

            cssHover += (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_11__.gkIsEmpty)((_deviceStyle$color$ho2 = deviceStyle.color.hover) === null || _deviceStyle$color$ho2 === void 0 ? void 0 : _deviceStyle$color$ho2.background) ? '' : ' background:' + deviceStyle.color.hover.background + ' !important;'; // Link Color

            cssLinkHover += (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_11__.gkIsEmpty)((_deviceStyle$color$ho3 = deviceStyle.color.hover) === null || _deviceStyle$color$ho3 === void 0 ? void 0 : _deviceStyle$color$ho3.link) ? '' : ' color:' + deviceStyle.color.hover.link + ' !important;';
          } //Pseudo CSS before : Overlay


          if (!(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_11__.gkIsEmpty)(deviceStyle === null || deviceStyle === void 0 ? void 0 : deviceStyle.overlay)) {
            var _deviceStyle$overlay, _deviceStyle$overlay$, _deviceStyle$overlay4, _deviceStyle$overlay5;

            css += 'position: relative;'; //Overlay color

            if (deviceStyle !== null && deviceStyle !== void 0 && (_deviceStyle$overlay = deviceStyle.overlay) !== null && _deviceStyle$overlay !== void 0 && (_deviceStyle$overlay$ = _deviceStyle$overlay.normal) !== null && _deviceStyle$overlay$ !== void 0 && _deviceStyle$overlay$.color) {
              var _deviceStyle$overlay2, _deviceStyle$overlay3;

              cssBefore += ` 
                            content:'';
                            background:${deviceStyle.overlay.normal.color} !important; 
                            opacity: ${(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_11__.gkIsEmpty)((_deviceStyle$overlay2 = deviceStyle.overlay) === null || _deviceStyle$overlay2 === void 0 ? void 0 : (_deviceStyle$overlay3 = _deviceStyle$overlay2.normal) === null || _deviceStyle$overlay3 === void 0 ? void 0 : _deviceStyle$overlay3.opacity) ? '80' : deviceStyle.overlay.normal.opacity}% !important ;
                            position: absolute;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            `;
            } //Hover : Overlay


            if (deviceStyle !== null && deviceStyle !== void 0 && (_deviceStyle$overlay4 = deviceStyle.overlay) !== null && _deviceStyle$overlay4 !== void 0 && (_deviceStyle$overlay5 = _deviceStyle$overlay4.hover) !== null && _deviceStyle$overlay5 !== void 0 && _deviceStyle$overlay5.color) {
              var _deviceStyle$overlay6, _deviceStyle$overlay7;

              cssHoverBefore += ` 
                            content:'';
                            background:${deviceStyle.overlay.hover.color} !important; 
                            opacity: ${(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_11__.gkIsEmpty)((_deviceStyle$overlay6 = deviceStyle.overlay) === null || _deviceStyle$overlay6 === void 0 ? void 0 : (_deviceStyle$overlay7 = _deviceStyle$overlay6.hover) === null || _deviceStyle$overlay7 === void 0 ? void 0 : _deviceStyle$overlay7.opacity) ? '80' : deviceStyle.overlay.hover.opacity}% !important ;
                            position: absolute;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            `;
            }
          } //Border


          css += (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_11__.borderCss)(deviceStyle === null || deviceStyle === void 0 ? void 0 : (_deviceStyle$border = deviceStyle.border) === null || _deviceStyle$border === void 0 ? void 0 : _deviceStyle$border.normal);
          cssHover += (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_11__.borderCss)(deviceStyle === null || deviceStyle === void 0 ? void 0 : (_deviceStyle$border2 = deviceStyle.border) === null || _deviceStyle$border2 === void 0 ? void 0 : _deviceStyle$border2.hover); //box shadow

          css += (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_11__.boxShadowCss)(deviceStyle === null || deviceStyle === void 0 ? void 0 : (_deviceStyle$boxShado = deviceStyle.boxShadow) === null || _deviceStyle$boxShado === void 0 ? void 0 : _deviceStyle$boxShado.normal); //box hover shadow

          cssHover += (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_11__.boxShadowCss)(deviceStyle === null || deviceStyle === void 0 ? void 0 : (_deviceStyle$boxShado2 = deviceStyle.boxShadow) === null || _deviceStyle$boxShado2 === void 0 ? void 0 : _deviceStyle$boxShado2.hover);
        } //if hide in device then do not generate any other css


        if (!(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_11__.gkIsEmpty)(deviceStyle === null || deviceStyle === void 0 ? void 0 : deviceStyle.hideDisplay) && true === deviceStyle.hideDisplay) {
          css = 'style' === style ? css + ' display:none; ' : ' display:none; ';
        }

        if (9 < css.length) {
          if ('style' === style) {
            //Normal Css 
            css = ' ' + id + '{' + css + '} '; //Before pseudo css: Overlay Css 

            css += 9 < cssBefore.length ? ' ' + id + ':before{' + cssBefore + '} ' : ''; //Hover before pseudo css: Overlay Css

            css += 9 < cssHoverBefore.length ? ' ' + id + ':hover:before{' + cssHoverBefore + '} ' : ''; //Hover Css

            css += 9 < cssHover.length ? ' ' + id + ':hover{' + cssHover + '} ' : ''; //Link css

            css += 9 < cssLink.length ? ' ' + id + ' a {' + cssLink + '} ' : ''; //Link hover css

            css += 9 < cssLinkHover.length ? ' ' + id + ' a:hover {' + cssLinkHover + '} ' : '';
            return css;
          }

          if ('Tstyle' === style) {
            return ' @media only screen and (min-width: 768px) and (max-width: 1080px) { ' + id + '{' + css + '} }';
          }

          if ('Mstyle' === style) {
            return ' @media only screen and (max-width: 767px){ ' + id + '{' + css + '} }';
          }
        }
      }).join(' ');
    };

    const setAttr = function (value) {
      let attrName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      let deviceStyle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'style';
      let styleAttr = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

      //styleAttr like spacing, border, color etc
      if ((0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_11__.gkIsEmpty)(styleAttr)) {
        return;
      } //Initialize style


      let newstyle = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_11__.gkIsEmpty)(gutenaKitStyle) ? DEFAULT_STYLE : gutenaKitStyle; //check if deice specific style available or not

      if ((0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_11__.gkIsEmpty)(newstyle[deviceStyle])) {
        newstyle[deviceStyle] = {};
      } //check if required style attribute available or not


      if ((0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_11__.gkIsEmpty)(newstyle[deviceStyle][styleAttr])) {
        newstyle[deviceStyle][styleAttr] = {};
      }

      if ((0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_11__.gkIsEmpty)(attrName)) {
        newstyle[deviceStyle][styleAttr] = value;
      } else {
        newstyle[deviceStyle][styleAttr][attrName] = value;
      }

      if (!(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_11__.gkIsEmpty)(attrName) && 'blockGap' === attrName) {
        setAttributes({
          gutenaKitStyle: { ...newstyle
          },
          gutenaKitID: clientId,
          gutenaKitCSS: { ...gutenaKitCSS,
            blockCss: generateCss(newstyle, " .gutenakitid-" + clientId)
          },
          style: { ...style,
            spacing: { ...style.spacing,
              blockGap: value
            }
          }
        });
      } else {
        setAttributes({
          gutenaKitStyle: { ...newstyle
          },
          gutenaKitID: clientId,
          gutenaKitCSS: { ...gutenaKitCSS,
            blockCss: generateCss(newstyle, " .gutenakitid-" + clientId)
          }
        });
      }
    };

    const MAX_SPACE_VALUES = {
      px: 500,
      em: 40,
      rem: 40,
      vh: 100,
      vw: 100
    };
    const deviceAvailable = {
      Desktop: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hide on Desktop', 'gutena-kit'),
      Tablet: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hide on Tablet', 'gutena-kit'),
      Mobile: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hide on Mobile', 'gutena-kit')
    };
    const Style = generateCss();
    console.log("gutenaKitStyle", gutenaKitStyle);
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, Style), isSelected && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Gutena Kit Settings", "gutena-kit"),
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.__experimentalHStack, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.FlexItem, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
      variant: "secondary",
      isSmall: true,
      disabled: (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_11__.gkIsEmpty)(gutenaKitCSS === null || gutenaKitCSS === void 0 ? void 0 : gutenaKitCSS.blockCss),
      onClick: () => setAttributes({
        gutenaKitStyle: undefined,
        gutenaKitCSS: { ...gutenaKitCSS,
          blockCss: undefined
        }
      })
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('reset')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_EventsControl__WEBPACK_IMPORTED_MODULE_10__["default"], {
      componentName: "ColorControl",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Color", "gutena-kit"),
      attrValue: gutenaKitStyle === null || gutenaKitStyle === void 0 ? void 0 : (_gutenaKitStyle$style = gutenaKitStyle.style) === null || _gutenaKitStyle$style === void 0 ? void 0 : _gutenaKitStyle$style.color,
      onChangeFunc: value => setAttr(value, null, 'style', 'color')
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_EventsControl__WEBPACK_IMPORTED_MODULE_10__["default"], {
      componentName: "OverlayControl",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Overlay", "gutena-kit"),
      attrValue: gutenaKitStyle === null || gutenaKitStyle === void 0 ? void 0 : (_gutenaKitStyle$style2 = gutenaKitStyle.style) === null || _gutenaKitStyle$style2 === void 0 ? void 0 : _gutenaKitStyle$style2.overlay,
      onChangeFunc: value => setAttr(value, null, 'style', 'overlay')
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Spacing", "gutena-kit"),
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_SelectDeviceDropdown__WEBPACK_IMPORTED_MODULE_7__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.__experimentalBoxControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Padding", "gutena-kit"),
      values: (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_11__.gkIsEmpty)(gutenaKitStyle[styleName]) ? undefined : (_gutenaKitStyle$style3 = gutenaKitStyle[styleName]) === null || _gutenaKitStyle$style3 === void 0 ? void 0 : (_gutenaKitStyle$style4 = _gutenaKitStyle$style3.spacing) === null || _gutenaKitStyle$style4 === void 0 ? void 0 : _gutenaKitStyle$style4.padding,
      onChange: value => setAttr(value, 'padding', styleName, 'spacing'),
      allowReset: true,
      sides: paddingSides
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_SelectDeviceDropdown__WEBPACK_IMPORTED_MODULE_7__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.__experimentalBoxControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Margin", "gutena-kit"),
      values: (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_11__.gkIsEmpty)(gutenaKitStyle[styleName]) ? undefined : (_gutenaKitStyle$style5 = gutenaKitStyle[styleName]) === null || _gutenaKitStyle$style5 === void 0 ? void 0 : (_gutenaKitStyle$style6 = _gutenaKitStyle$style5.spacing) === null || _gutenaKitStyle$style6 === void 0 ? void 0 : _gutenaKitStyle$style6.margin,
      onChange: value => setAttr(value, 'margin', styleName, 'spacing'),
      allowReset: true,
      sides: marginSides,
      inputProps: {
        min: -Infinity
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_RangeControlUnit__WEBPACK_IMPORTED_MODULE_8__["default"], {
      rangeLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Block spacing", "gutena-kit"),
      attrValue: gutenaKitStyle === null || gutenaKitStyle === void 0 ? void 0 : (_gutenaKitStyle$style7 = gutenaKitStyle.style) === null || _gutenaKitStyle$style7 === void 0 ? void 0 : (_gutenaKitStyle$style8 = _gutenaKitStyle$style7.spacing) === null || _gutenaKitStyle$style8 === void 0 ? void 0 : _gutenaKitStyle$style8.blockGap,
      onChangeFunc: value => setAttr(value, 'blockGap', 'style', 'spacing'),
      rangeMin: 0,
      rangeMax: MAX_SPACE_VALUES,
      rangeStep: 10
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_BorderGroup__WEBPACK_IMPORTED_MODULE_9__["default"], {
      attrValue: gutenaKitStyle === null || gutenaKitStyle === void 0 ? void 0 : (_gutenaKitStyle$style9 = gutenaKitStyle.style) === null || _gutenaKitStyle$style9 === void 0 ? void 0 : _gutenaKitStyle$style9.border,
      onChangeFunc: value => setAttr(value, null, 'style', 'border')
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_EventsControl__WEBPACK_IMPORTED_MODULE_10__["default"], {
      componentName: "BoxShadowControl",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Box Shadow", "gutena-kit"),
      attrValue: gutenaKitStyle === null || gutenaKitStyle === void 0 ? void 0 : (_gutenaKitStyle$style10 = gutenaKitStyle.style) === null || _gutenaKitStyle$style10 === void 0 ? void 0 : _gutenaKitStyle$style10.boxShadow,
      onChangeFunc: value => setAttr(value, null, 'style', 'boxShadow')
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Display", "gutena-kit"),
      initialOpen: false
    }, ['Desktop', 'Tablet', 'Mobile'].map(deviceName => {
      var _gutenaKitStyle$devic, _gutenaKitStyle$devic2;

      let deviceStyle = 'Desktop' === deviceName ? 'style' : 'Tablet' === deviceName ? 'Tstyle' : 'Mstyle';
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl, {
        key: deviceName,
        label: deviceAvailable[deviceName],
        checked: (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_11__.gkIsEmpty)(gutenaKitStyle === null || gutenaKitStyle === void 0 ? void 0 : (_gutenaKitStyle$devic = gutenaKitStyle[deviceStyle]) === null || _gutenaKitStyle$devic === void 0 ? void 0 : _gutenaKitStyle$devic.hideDisplay) ? false : gutenaKitStyle === null || gutenaKitStyle === void 0 ? void 0 : (_gutenaKitStyle$devic2 = gutenaKitStyle[deviceStyle]) === null || _gutenaKitStyle$devic2 === void 0 ? void 0 : _gutenaKitStyle$devic2.hideDisplay,
        onChange: value => setAttr(value, null, deviceStyle, 'hideDisplay')
      });
    })))));
  };
}, 'GutenaKitSettings');
/**** Block: core/media-text : END ******/

/***/ }),

/***/ "./includes/block-editor/src/components/BorderGroup.js":
/*!*************************************************************!*\
  !*** ./includes/block-editor/src/components/BorderGroup.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _colorSettingsData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./colorSettingsData */ "./includes/block-editor/src/components/colorSettingsData.js");
/* harmony import */ var _RangeControlUnit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RangeControlUnit */ "./includes/block-editor/src/components/RangeControlUnit.js");
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/helpers */ "./includes/block-editor/src/helpers/helpers.js");


/**
 * Border Group
 * output 
 * { normal: { border: {top,right,bottom,left}, radius:npx }, hover:{} }
 * OR
 * { normal: { border: {color: '#1a4548', style: 'solid', width: '50px'}, radius:npx }, hover:{} }
 */






const DEFAULT_PROPS = {
  normal: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Normal', 'gutena-kit'),
  hover: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hover', 'gutena-kit')
};

const noop = () => {};

const MAX_SPACE_VALUES = {
  px: 200,
  em: 40,
  rem: 40,
  vh: 100,
  vw: 100
};

const BorderGroup = _ref => {
  var _attrValue$activeTab, _attrValue$activeTab2;

  let {
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Settings', 'gutena-kit'),
    panelLabel = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border', 'gutena-kit'),
    attrValue = {},
    attrProps = DEFAULT_PROPS,
    onChangeFunc = noop,
    rangeMax = MAX_SPACE_VALUES,
    withPanel = true
  } = _ref;
  const propsData = Object.keys(attrProps);
  const [activeTab, setActiveTab] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(propsData[0]); //Set attribute

  const setAttr = (value, attrName) => {
    let newAttr = attrValue;

    if ((0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_5__.gkIsEmpty)(newAttr[activeTab])) {
      newAttr[activeTab] = {};
    }

    newAttr[activeTab][attrName] = value;
    onChangeFunc({ ...newAttr
    });
  };

  const {
    colors
  } = (0,_colorSettingsData__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const controls = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, propsData.length > 1 &&
  /* show only if there is multiple items present. */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToggleGroupControl, {
    label: label,
    value: activeTab,
    onChange: value => setActiveTab(value),
    isBlock: true,
    hideLabelFromVision: withPanel
  }, propsData.map(value => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToggleGroupControlOption, {
    key: value,
    value: value,
    label: attrProps[value]
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalBorderBoxControl, {
    onChange: value => setAttr(value, 'border'),
    value: (_attrValue$activeTab = attrValue[activeTab]) === null || _attrValue$activeTab === void 0 ? void 0 : _attrValue$activeTab.border,
    colors: colors,
    enableAlpha: true,
    popoverOffset: 40,
    popoverPlacement: "left-start",
    __experimentalHasMultipleOrigins: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RangeControlUnit__WEBPACK_IMPORTED_MODULE_4__["default"], {
    rangeLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Radius", "gutena-kit"),
    attrValue: (_attrValue$activeTab2 = attrValue[activeTab]) === null || _attrValue$activeTab2 === void 0 ? void 0 : _attrValue$activeTab2.radius,
    onChangeFunc: radius => setAttr(radius, 'radius'),
    rangeMin: 0,
    rangeMax: rangeMax,
    rangeStep: 5
  }));

  if (withPanel) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: panelLabel,
      initialOpen: false
    }, controls);
  }

  return controls;
};

/* harmony default export */ __webpack_exports__["default"] = (BorderGroup);

/***/ }),

/***/ "./includes/block-editor/src/components/BoxShadowControl.js":
/*!******************************************************************!*\
  !*** ./includes/block-editor/src/components/BoxShadowControl.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _RangeControlUnit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RangeControlUnit */ "./includes/block-editor/src/components/RangeControlUnit.js");
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/helpers */ "./includes/block-editor/src/helpers/helpers.js");


/**
 * Box Shadow  : offset-x | offset-y | blur-radius | spread-radius | color
 * box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
 * onBoxShadow : Box shadow on|off
 */




const DEFAULT_BOX_SHADOW = {
  onBoxShadow: false,
  inset: false,
  offsetX: undefined,
  offsetY: undefined,
  blurRadius: undefined,
  spreadRadius: undefined,
  color: undefined
};

const noop = () => {};

const BoxShadowControl = _ref => {
  let {
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enable Box Shadow', 'gutena-kit'),
    toggleLabel = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('On', 'gutena-kit'),
    attrValue = DEFAULT_BOX_SHADOW,
    onChangeFunc = noop,
    withPanel = true
  } = _ref;
  const MAX_SPACE_VALUES = {
    px: 50,
    em: 10,
    rem: 10,
    vh: 10,
    vw: 10
  };
  const boxShadowAttr = {
    offsetX: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Offset X', 'gutena-kit'),
    offsetY: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Offset Y', 'gutena-kit'),
    blurRadius: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Blur radius', 'gutena-kit'),
    spreadRadius: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Spread radius', 'gutena-kit')
  };

  const setBoxShadowAttr = (value, attrName) => {
    let newBoxShadowAttr = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_4__.gkIsEmpty)(attrValue) ? DEFAULT_BOX_SHADOW : attrValue;
    newBoxShadowAttr[attrName] = value;
    onChangeFunc({ ...newBoxShadowAttr
    });
  };

  const controls = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: toggleLabel,
    checked: attrValue.onBoxShadow,
    onChange: onBoxShadow => setBoxShadowAttr(onBoxShadow, 'onBoxShadow')
  }), attrValue.onBoxShadow && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("legend", {
    style: {
      'marginBottom': '8px'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Shadow Color', 'gutena-kit')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPalette, {
    colors: [{
      name: 'Blue alpha 1',
      color: 'rgba(9, 7, 37, 0.05)'
    }, {
      name: 'Black alpha 1',
      color: 'rgba(0, 0, 0, 0.09)'
    }, {
      name: 'Blue alpha 2',
      color: 'rgba(33, 37, 71, 0.1)'
    }],
    value: attrValue.color,
    onChange: value => setBoxShadowAttr(value, 'color'),
    enableAlpha: true
  }), ['offsetX', 'offsetY', 'blurRadius', 'spreadRadius'].map(attrName => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RangeControlUnit__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: attrName,
    rangeLabel: boxShadowAttr[attrName],
    attrValue: (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_4__.gkIsEmpty)(attrValue[attrName]) ? undefined : attrValue[attrName],
    onChangeFunc: value => setBoxShadowAttr(value, attrName),
    rangeMin: 0,
    rangeMax: MAX_SPACE_VALUES,
    rangeStep: 1
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalSpacer, {
    marginTop: 2
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Inset', 'gutena-kit'),
    checked: attrValue.inset,
    onChange: inset => setBoxShadowAttr(inset, 'inset')
  }))));

  if (withPanel) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: label
    }, controls);
  }

  return controls;
};

/* harmony default export */ __webpack_exports__["default"] = (BoxShadowControl);

/***/ }),

/***/ "./includes/block-editor/src/components/ColorControl.js":
/*!**************************************************************!*\
  !*** ./includes/block-editor/src/components/ColorControl.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/helpers */ "./includes/block-editor/src/helpers/helpers.js");
/* harmony import */ var _colorSettingsData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./colorSettingsData */ "./includes/block-editor/src/components/colorSettingsData.js");



/**
 * Color controls : Text | Background | link
 */






const DEFAULT_COLOR = {
  text: undefined,
  background: undefined,
  link: undefined
};

const noop = () => {};

const ColorControl = _ref => {
  let {
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'gutena-kit'),
    attrValue = {},
    colorPanelsSettings = false,
    onChangeFunc = noop,
    enableAlpha = false,
    disableCustomColors = false,
    withPanel = true,
    textColor = true,
    bgColor = true,
    isGradient = true,
    linkColor = true
  } = _ref;

  //Set attribute
  const setAttr = (value, attrName) => {
    let newAttr = attrValue; //check if active tab has value

    newAttr[attrName] = value;
    onChangeFunc({ ...newAttr
    });
  };

  const {
    gradientValue,
    setGradient
  } = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalUseGradient)();

  const colorGradientSettings = (0,_colorSettingsData__WEBPACK_IMPORTED_MODULE_6__["default"])(); //Multiple color settings i.e. text, background, link etc

  let colorSettings = [];

  if (false === colorPanelsSettings) {
    if (textColor) {
      colorSettings.push({
        colorValue: attrValue === null || attrValue === void 0 ? void 0 : attrValue.text,
        onColorChange: value => setAttr(value, 'text'),
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Text", "gutena-kit")
      });
    }

    if (bgColor) {
      let gradientSettings = {};

      if (isGradient) {
        gradientSettings = {
          gradientValue,
          onGradientChange: setGradient
        };
      }

      colorSettings.push({
        colorValue: attrValue === null || attrValue === void 0 ? void 0 : attrValue.background,
        onColorChange: value => setAttr(value, 'background'),
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Background", "gutena-kit"),
        ...gradientSettings
      });
    }

    if (linkColor) {
      colorSettings.push({
        colorValue: attrValue === null || attrValue === void 0 ? void 0 : attrValue.link,
        onColorChange: value => setAttr(value, 'link'),
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Link", "gutena-kit")
      });
    }
  } else {
    colorSettings = colorPanelsSettings;
  }

  const controls = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalColorGradientSettingsDropdown, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    __experimentalHasMultipleOrigins: true,
    __experimentalIsRenderedInSidebar: true,
    settings: colorSettings,
    disableCustomColors: disableCustomColors,
    enableAlpha: enableAlpha
  }, colorGradientSettings)));

  if (withPanel) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: label,
      initialOpen: false
    }, controls);
  }

  return controls;
};

/* harmony default export */ __webpack_exports__["default"] = (ColorControl);

/***/ }),

/***/ "./includes/block-editor/src/components/EventsControl.js":
/*!***************************************************************!*\
  !*** ./includes/block-editor/src/components/EventsControl.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _GetComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GetComponent */ "./includes/block-editor/src/components/GetComponent.js");



/**
 * Box Shadow Group
 */




const DEFAULT_EVENTS_TABS = {
  normal: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Normal', 'gutena-kit'),
  hover: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hover', 'gutena-kit')
};

const noop = () => {};

const EventsControl = props => {
  const {
    componentName = '',
    label = '',
    attrValue = {},
    eventTabs = DEFAULT_EVENTS_TABS,
    onChangeFunc = noop,
    withPanel = true
  } = props;
  const eventAttr = Object.keys(eventTabs);
  const [activeTab, setActiveTab] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(eventAttr[0]); //Set attribute

  const setAttr = value => {
    let newAttr = attrValue;
    newAttr[activeTab] = value;
    onChangeFunc({ ...newAttr
    });
  };

  const controls = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, eventAttr.length > 1 &&
  /* show only if there is multiple items present. */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControl, {
    label: label,
    value: activeTab,
    onChange: value => setActiveTab(value),
    isBlock: true,
    hideLabelFromVision: withPanel
  }, eventAttr.map(value => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, {
    key: value,
    value: value,
    label: eventTabs[value]
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_GetComponent__WEBPACK_IMPORTED_MODULE_4__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    attrValue: attrValue[activeTab],
    onChangeFunc: value => setAttr(value),
    withPanel: false
  })));

  if (withPanel) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: label,
      initialOpen: false
    }, controls);
  }

  return controls;
};

/* harmony default export */ __webpack_exports__["default"] = (EventsControl);

/***/ }),

/***/ "./includes/block-editor/src/components/GetComponent.js":
/*!**************************************************************!*\
  !*** ./includes/block-editor/src/components/GetComponent.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _OverlayControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OverlayControl */ "./includes/block-editor/src/components/OverlayControl.js");
/* harmony import */ var _ColorControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColorControl */ "./includes/block-editor/src/components/ColorControl.js");
/* harmony import */ var _BoxShadowControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BoxShadowControl */ "./includes/block-editor/src/components/BoxShadowControl.js");


/**
 * Get dynamic component
 */




const GetComponent = props => {
  const {
    componentName = ''
  } = props;

  if ('OverlayControl' === componentName) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_OverlayControl__WEBPACK_IMPORTED_MODULE_1__["default"], props);
  }

  if ('ColorControl' === componentName) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ColorControl__WEBPACK_IMPORTED_MODULE_2__["default"], props);
  }

  if ('BoxShadowControl' === componentName) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_BoxShadowControl__WEBPACK_IMPORTED_MODULE_3__["default"], props);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (GetComponent);

/***/ }),

/***/ "./includes/block-editor/src/components/OverlayControl.js":
/*!****************************************************************!*\
  !*** ./includes/block-editor/src/components/OverlayControl.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _colorSettingsData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./colorSettingsData */ "./includes/block-editor/src/components/colorSettingsData.js");



/**
 * Overaly with opacity control
 */




const DEFAULT_OVERLAY = {
  color: undefined,
  opacity: undefined
};

const noop = () => {};

const OverlayControl = _ref => {
  let {
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Overaly', 'gutena-kit'),
    attrValue = DEFAULT_OVERLAY,
    onChangeFunc = noop,
    disableCustomColors = false,
    withPanel = true
  } = _ref;

  //Set attribute
  const setAttr = (value, attrName) => {
    let newAttr = attrValue;
    newAttr[attrName] = value;
    onChangeFunc({ ...newAttr
    });
  };

  const {
    gradientValue,
    setGradient
  } = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalUseGradient)();

  const colorGradientSettings = (0,_colorSettingsData__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const controls = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalColorGradientSettingsDropdown, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    __experimentalHasMultipleOrigins: true,
    __experimentalIsRenderedInSidebar: true,
    settings: [{
      colorValue: attrValue === null || attrValue === void 0 ? void 0 : attrValue.color,
      onColorChange: value => setAttr(value, 'color'),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("color", "gutena-kit"),
      gradientValue,
      onGradientChange: setGradient
    }],
    disableCustomColors: disableCustomColors
  }, colorGradientSettings)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Opacity", "gutena-kit"),
    value: attrValue === null || attrValue === void 0 ? void 0 : attrValue.opacity,
    withInputField: true,
    onChange: value => setAttr(value, 'opacity'),
    min: 10,
    max: 100,
    step: 10,
    className: "components-spacing-sizes-control__custom-value-range"
  }));

  if (withPanel) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: label,
      initialOpen: false
    }, controls);
  }

  return controls;
};

/* harmony default export */ __webpack_exports__["default"] = (OverlayControl);

/***/ }),

/***/ "./includes/block-editor/src/components/RangeControlUnit.js":
/*!******************************************************************!*\
  !*** ./includes/block-editor/src/components/RangeControlUnit.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/helpers */ "./includes/block-editor/src/helpers/helpers.js");


/**
 * Range Unit control :
 * unit selection with set space attributes
 */




const RangeControlUnit = props => {
  const {
    rangeLabel,
    attrValue,
    onChangeFunc,
    rangeMin,
    rangeMax,
    rangeStep,
    attrUnits = ['px', 'em', 'rem', 'vh', 'vw']
  } = props;
  const units = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUseCustomUnits)({
    availableUnits: attrUnits,
    defaultValues: {
      px: 0,
      em: 0,
      rem: 0,
      vh: 0,
      vw: 0,
      '%': 0
    }
  });

  const getQtyOrunit = function (rawUnit) {
    let quantityOrUnit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'unit';
    const [quantityToReturn, unitToReturn] = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalParseQuantityAndUnitFromRawValue)(rawUnit);
    let unit = 'undefined' === typeof unitToReturn || null === unitToReturn ? 'px' : unitToReturn;
    return 'unit' === quantityOrUnit ? unit : quantityToReturn;
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", {
    className: "components-gk-range-unit-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("legend", null, (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__.gkIsEmpty)(rangeLabel) ? '' : rangeLabel), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "components-gk-range-unit-control__wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
    units: units,
    value: attrValue,
    onChange: attrValue => onChangeFunc(attrValue),
    className: "components-spacing-sizes-control__custom-value-input"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: getQtyOrunit(attrValue, 'Qty'),
    withInputField: false,
    onChange: qty => onChangeFunc(qty + getQtyOrunit(attrValue)),
    min: rangeMin,
    max: rangeMax[getQtyOrunit(attrValue)],
    step: rangeStep,
    className: "components-spacing-sizes-control__custom-value-range"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (RangeControlUnit);

/***/ }),

/***/ "./includes/block-editor/src/components/SelectDeviceDropdown.js":
/*!**********************************************************************!*\
  !*** ./includes/block-editor/src/components/SelectDeviceDropdown.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);


/**
 * Select Device Type
 */




const SelectDeviceDropdown = _ref => {
  let {
    sideLabel = ""
  } = _ref;
  //Get Device preview type
  const deviceType = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    return select("core/edit-post").__experimentalGetPreviewDeviceType();
  }, []); //Set Preview

  const {
    __experimentalSetPreviewDeviceType: setPreviewDeviceType
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)("core/edit-post");
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalHStack, {
    justify: "flex-start"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.DropdownMenu, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select device', 'gutena-kit'),
    className: "my-container-class-name",
    icon: 'Mobile' === deviceType ? 'smartphone' : deviceType.toLowerCase(),
    controls: [{
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Desktop', 'gutena-kit'),
      icon: 'desktop',
      onClick: () => setPreviewDeviceType('Desktop')
    }, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tablet', 'gutena-kit'),
      icon: 'tablet',
      onClick: () => setPreviewDeviceType('Tablet')
    }, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Mobile', 'gutena-kit'),
      icon: 'smartphone',
      onClick: () => setPreviewDeviceType('Mobile')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, sideLabel));
};

/* harmony default export */ __webpack_exports__["default"] = (SelectDeviceDropdown);

/***/ }),

/***/ "./includes/block-editor/src/components/colorSettingsData.js":
/*!*******************************************************************!*\
  !*** ./includes/block-editor/src/components/colorSettingsData.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/**
 * Retrieves color and gradient related settings.
 *
 * The arrays for colors and gradients are made up of color palettes from each
 * origin i.e. "Core", "Theme", and "User".
 *
 * @return {Object} Color and gradient related settings.
 * 
 * Ref: useMultipleOriginColorsAndGradients from gutenberg
 */




const colorSettingsData = () => {
  const colorGradientSettings = {
    disableCustomColors: !(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useSetting)('color.custom'),
    disableCustomGradients: !(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useSetting)('color.customGradient')
  };
  const customColors = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useSetting)('color.palette.custom');
  const themeColors = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useSetting)('color.palette.theme');
  const defaultColors = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useSetting)('color.palette.default');
  const shouldDisplayDefaultColors = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useSetting)('color.defaultPalette');
  colorGradientSettings.colors = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const result = [];

    if (themeColors && themeColors.length) {
      result.push({
        name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('Theme', 'Indicates this palette comes from the theme.'),
        colors: themeColors
      });
    }

    if (shouldDisplayDefaultColors && defaultColors && defaultColors.length) {
      result.push({
        name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('Default', 'Indicates this palette comes from WordPress.'),
        colors: defaultColors
      });
    }

    if (customColors && customColors.length) {
      result.push({
        name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('Custom', 'Indicates this palette comes from the theme.'),
        colors: customColors
      });
    }

    return result;
  }, [defaultColors, themeColors, customColors]);
  const customGradients = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useSetting)('color.gradients.custom');
  const themeGradients = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useSetting)('color.gradients.theme');
  const defaultGradients = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useSetting)('color.gradients.default');
  const shouldDisplayDefaultGradients = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useSetting)('color.defaultGradients');
  colorGradientSettings.gradients = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const result = [];

    if (themeGradients && themeGradients.length) {
      result.push({
        name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('Theme', 'Indicates this palette comes from the theme.'),
        gradients: themeGradients
      });
    }

    if (shouldDisplayDefaultGradients && defaultGradients && defaultGradients.length) {
      result.push({
        name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('Default', 'Indicates this palette comes from WordPress.'),
        gradients: defaultGradients
      });
    }

    if (customGradients && customGradients.length) {
      result.push({
        name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('Custom', 'Indicates this palette is created by the user.'),
        gradients: customGradients
      });
    }

    return result;
  }, [customGradients, themeGradients, defaultGradients]);
  return colorGradientSettings;
};

/* harmony default export */ __webpack_exports__["default"] = (colorSettingsData);

/***/ }),

/***/ "./includes/block-editor/src/helpers/helpers.js":
/*!******************************************************!*\
  !*** ./includes/block-editor/src/helpers/helpers.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "borderCss": function() { return /* binding */ borderCss; },
/* harmony export */   "boxShadowCss": function() { return /* binding */ boxShadowCss; },
/* harmony export */   "getEditorDoc": function() { return /* binding */ getEditorDoc; },
/* harmony export */   "getParents": function() { return /* binding */ getParents; },
/* harmony export */   "gkIsEmpty": function() { return /* binding */ gkIsEmpty; },
/* harmony export */   "gutenakitDocReady": function() { return /* binding */ gutenakitDocReady; },
/* harmony export */   "hasClass": function() { return /* binding */ hasClass; },
/* harmony export */   "isNumericVar": function() { return /* binding */ isNumericVar; },
/* harmony export */   "spaceCss": function() { return /* binding */ spaceCss; },
/* harmony export */   "toggleClass": function() { return /* binding */ toggleClass; },
/* harmony export */   "toogleStyleDisplay": function() { return /* binding */ toogleStyleDisplay; },
/* harmony export */   "typographyCss": function() { return /* binding */ typographyCss; }
/* harmony export */ });
// Check if variable is numeric or not
const isNumericVar = n => !isNaN(parseFloat(n)) && isFinite(n); // document Ready

const gutenakitDocReady = fn => {
  // see if DOM is already available
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    // call on next available tick
    setTimeout(fn, 1);
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}; //Check if empty

const gkIsEmpty = data => 'undefined' === typeof data || null === data || '' === data; //Get parent HTML elemnet

const getParents = (el, query) => {
  let parents = [];

  while (el.parentNode !== document.body) {
    el.matches(query) && parents.push(el);
    el = el.parentNode;
  }

  return parents;
}; //Get editor document: used in responsive preview

const getEditorDoc = function () {
  let query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  let multiple = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  const frames = window.frames;
  let editorDoc = '';

  for (let i = 0; i < frames.length; i++) {
    if (!gkIsEmpty(frames[i].name) && 'editor-canvas' === frames[i].name) {
      editorDoc = frames[i].document;

      if (!gkIsEmpty(query)) {
        editorDoc = multiple ? editorDoc.querySelectorAll(query) : editorDoc.querySelector(query);
      }
    }
  }

  return editorDoc;
}; //Check

const hasClass = (element, className) => {
  return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
};
const toggleClass = (element, class1, class2) => {
  if (hasClass(element, class1)) {
    element.classList.remove(class1);
    element.classList.add(class2);
  } else {
    element.classList.remove(class2);
    element.classList.add(class1);
  }
};
const toogleStyleDisplay = element => {
  if (gkIsEmpty(element) || element.length < 1) {
    return false;
  }

  if (element.style.display === 'none') {
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }
}; //Generate box shadow css

const boxShadowCss = function (boxShadow) {
  let generateCss = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  let data;

  if (gkIsEmpty(boxShadow) || gkIsEmpty(boxShadow === null || boxShadow === void 0 ? void 0 : boxShadow.onBoxShadow) || gkIsEmpty(boxShadow === null || boxShadow === void 0 ? void 0 : boxShadow.offsetX) || gkIsEmpty(boxShadow === null || boxShadow === void 0 ? void 0 : boxShadow.offsetY) || gkIsEmpty(boxShadow === null || boxShadow === void 0 ? void 0 : boxShadow.color) || !(boxShadow !== null && boxShadow !== void 0 && boxShadow.onBoxShadow)) {
    return '';
  } else {
    data = `${boxShadow === null || boxShadow === void 0 ? void 0 : boxShadow.offsetX} ${boxShadow === null || boxShadow === void 0 ? void 0 : boxShadow.offsetY} ${!gkIsEmpty(boxShadow === null || boxShadow === void 0 ? void 0 : boxShadow.blurRadius) ? boxShadow === null || boxShadow === void 0 ? void 0 : boxShadow.blurRadius : ``} ${!gkIsEmpty(boxShadow === null || boxShadow === void 0 ? void 0 : boxShadow.spreadRadius) ? boxShadow === null || boxShadow === void 0 ? void 0 : boxShadow.spreadRadius : ``} ${boxShadow === null || boxShadow === void 0 ? void 0 : boxShadow.color} ${!gkIsEmpty(boxShadow === null || boxShadow === void 0 ? void 0 : boxShadow.inset) && boxShadow !== null && boxShadow !== void 0 && boxShadow.inset ? `inset` : ``}`;
  }

  if (generateCss) {
    return `box-shadow: ${data};`;
  }

  return data;
}; //Generate padding|margin css: spacing: value, spaceName: padding|margin

const spaceCss = (spacing, spaceName) => {
  if (gkIsEmpty(spacing)) {
    return ``;
  }

  return ['top', 'right', 'bottom', 'left'].map(side => gkIsEmpty(spacing[side]) ? '' : spaceName + '-' + side + ':' + spacing[side] + ' !important; ').join(' ');
}; //Generate border css

const borderCss = borderVar => {
  let css = '';

  if (!gkIsEmpty(borderVar === null || borderVar === void 0 ? void 0 : borderVar.border)) {
    let border = borderVar.border;
    css = gkIsEmpty(border.color) ? ['top', 'right', 'bottom', 'left'].map(side => {
      var _border$side, _border$side2, _border$side3, _border$side4;

      return `
            ${gkIsEmpty(border[side]) ? `` : `border-${side}: ${(_border$side = border[side]) === null || _border$side === void 0 ? void 0 : _border$side.width}  ${gkIsEmpty((_border$side2 = border[side]) === null || _border$side2 === void 0 ? void 0 : _border$side2.style) ? 'solid' : (_border$side3 = border[side]) === null || _border$side3 === void 0 ? void 0 : _border$side3.style} ${(_border$side4 = border[side]) === null || _border$side4 === void 0 ? void 0 : _border$side4.color} !important; `}
        `;
    }).join(' ') : `border: ${border === null || border === void 0 ? void 0 : border.width}  ${gkIsEmpty(border === null || border === void 0 ? void 0 : border.style) ? 'solid' : border === null || border === void 0 ? void 0 : border.style} ${border === null || border === void 0 ? void 0 : border.color} !important; `;
  }

  return gkIsEmpty(borderVar === null || borderVar === void 0 ? void 0 : borderVar.radius) ? css : css + ' border-radius:' + borderVar.radius + ' !important;';
}; //Generate typographyCss

const typographyCss = typography => {
  if (gkIsEmpty(typography)) {
    return ``;
  }

  return `${gkIsEmpty(typography.fontSize) ? `` : `font-size: ${typography.fontSize};`}
			${gkIsEmpty(typography.lineHeight) ? `` : `font-size: ${typography.lineHeight};`}
			${gkIsEmpty(typography.fontWeight) ? `` : `font-size: ${typography.fontWeight};`}`;
};

/***/ }),

/***/ "./includes/block-editor/src/mediaTextBlockEdit.js":
/*!*********************************************************!*\
  !*** ./includes/block-editor/src/mediaTextBlockEdit.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gutenaKitEditMediaTextBlock": function() { return /* binding */ gutenaKitEditMediaTextBlock; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_RangeControlUnit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/RangeControlUnit */ "./includes/block-editor/src/components/RangeControlUnit.js");
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/helpers */ "./includes/block-editor/src/helpers/helpers.js");

//Media Text Block : Add gap controls between media and text






 //https://make.wordpress.org/core/2019/04/09/the-block-editor-javascript-module-in-5-2/
//Edit Function

const gutenaKitEditMediaTextBlock = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.createHigherOrderComponent)(BlockEdit => {
  return props => {
    const {
      name,
      attributes,
      setAttributes,
      isSelected,
      clientId
    } = props;

    if ('core/media-text' !== name) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props);
    }

    const {
      gutenaKitGridGap,
      gutenaKitID,
      gutenaKitCSS = {}
    } = attributes;
    const [blockCss, setBlockCss] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      let SetID = true;

      if (SetID) {
        setAttributes({
          gutenaKitCSS: { ...gutenaKitCSS,
            mediaText: generateCss(' .gutenakitid-' + clientId)
          },
          gutenaKitID: clientId
        });
        setBlockCss(generateCss(' #block-' + clientId));
      }

      return () => {
        SetID = false;
      };
    }, [gutenaKitGridGap]);

    const generateCss = preText => {
      return (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_6__.gkIsEmpty)(gutenaKitGridGap) || gutenaKitGridGap == '0px' || gutenaKitGridGap == '0' ? '' : `${preText}{grid-gap:${gutenaKitGridGap};}
            ${preText} .wp-block-media-text__content{padding: 0;}`;
    };

    const MAX_SPACE_VALUES = {
      px: 500,
      em: 40,
      rem: 40,
      vh: 100,
      vw: 100
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, blockCss), isSelected && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: "Spacing",
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_RangeControlUnit__WEBPACK_IMPORTED_MODULE_5__["default"], {
      data: props,
      rangeLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Grid gap', 'gutena-kit'),
      attrValue: gutenaKitGridGap,
      onChangeFunc: value => setAttributes({
        gutenaKitGridGap: value
      }),
      rangeMin: 0,
      rangeMax: MAX_SPACE_VALUES,
      rangeStep: 1
    }))));
  };
}, 'gutenaKitEditMediaTextBlock');
/**** Block: core/media-text : END ******/

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ (function(module) {

module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

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
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!********************************************!*\
  !*** ./includes/block-editor/src/index.js ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mediaTextBlockEdit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mediaTextBlockEdit */ "./includes/block-editor/src/mediaTextBlockEdit.js");
/* harmony import */ var _GutenaKitSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GutenaKitSettings */ "./includes/block-editor/src/GutenaKitSettings.js");
/****** Info : START ****
 This File is used to add controls in existing blocks and register new blocks
 
 Set Required Attributes for edit existing blocks inside block_settings_setup method in gutena_kit_public class 
 
 ****** Info : END ***/




/*************************************
 Add controls in existing blocks
 **************************************/
//Block edit modified componenet 

const editBlocksComponents = {
  "media-text-block": _mediaTextBlockEdit__WEBPACK_IMPORTED_MODULE_2__.gutenaKitEditMediaTextBlock,
  "common-block": _GutenaKitSettings__WEBPACK_IMPORTED_MODULE_3__.GutenaKitSettings
}; //Register existing block edit controls by custom componenet 

Object.keys(editBlocksComponents).forEach(blockSlug => {
  console.log("blockSlug", blockSlug);
  (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('editor.BlockEdit', 'gutena-kit/edit-' + blockSlug, editBlocksComponents[blockSlug]);
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map