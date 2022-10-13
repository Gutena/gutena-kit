/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/library/settings.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/settings.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const settings = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M14.5 13.8c-1.1 0-2.1.7-2.4 1.8H4V17h8.1c.3 1 1.3 1.8 2.4 1.8s2.1-.7 2.4-1.8H20v-1.5h-3.1c-.3-1-1.3-1.7-2.4-1.7zM11.9 7c-.3-1-1.3-1.8-2.4-1.8S7.4 6 7.1 7H4v1.5h3.1c.3 1 1.3 1.8 2.4 1.8s2.1-.7 2.4-1.8H20V7h-8.1z"
}));
/* harmony default export */ __webpack_exports__["default"] = (settings);
//# sourceMappingURL=settings.js.map

/***/ }),

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
/* harmony import */ var _Supports_Typography_TypographySettings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Supports/Typography/TypographySettings */ "./includes/block-editor/src/Supports/Typography/TypographySettings.js");
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./helpers/helpers */ "./includes/block-editor/src/helpers/helpers.js");

//Common Text Block : Add gap controls between media and text












 //https://make.wordpress.org/core/2019/04/09/the-block-editor-javascript-module-in-5-2/
//Edit Function

const GutenaKitSettings = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.createHigherOrderComponent)(BlockEdit => {
  return props => {
    var _supports$spacing, _supports$spacing2, _gutena_kit_block_edi2, _gutena_kit_block_edi3, _gutena_kit_block_edi4, _gutenaKitStyle$spaci, _gutenaKitStyle$spaci2, _gutenaKitStyle$spaci3, _gutenaKitStyle$spaci4;

    const {
      name,
      attributes,
      setAttributes,
      isSelected,
      clientId
    } = props;

    if (-1 === ['core/group', 'core/column', 'core/paragraph', 'core/heading'].indexOf(name)) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props);
    } //Show or hide controls in gutena kit settings


    const gkSupports = {
      color: true,
      overlay: -1 !== ['core/group', 'core/column'].indexOf(name),
      spacing: true,
      border: -1 !== ['core/group', 'core/column'].indexOf(name),
      boxShadow: true,
      display: true,
      typography: -1 !== ['core/paragraph', 'core/heading'].indexOf(name)
    };
    /***** Check Core support for block : start ******/

    /**
     * https://developer.wordpress.org/block-editor/reference-guides/data/data-core-blocks/#getblocktype
     */

    const {
      supports = {}
    } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.store).getBlockType(name, ''), []); //Allowed margin sides

    const marginSides = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)(supports === null || supports === void 0 ? void 0 : (_supports$spacing = supports.spacing) === null || _supports$spacing === void 0 ? void 0 : _supports$spacing.margin) || !Array.isArray(supports.spacing.margin) ? ['top', 'right', 'bottom', 'left'] : supports.spacing.margin; //Allowed padding sides

    const paddingSides = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)(supports === null || supports === void 0 ? void 0 : (_supports$spacing2 = supports.spacing) === null || _supports$spacing2 === void 0 ? void 0 : _supports$spacing2.padding) || !Array.isArray(supports.spacing.padding) ? ['top', 'right', 'bottom', 'left'] : supports.spacing.padding;
    /***** Check Core support for block : end ******/
    //Default sides

    let DefaultStyle = attributes.style;

    if (!(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)(DefaultStyle)) {
      var _attributes$style, _attributes$style2, _attributes$style2$bo, _attributes$style3, _attributes$style3$sp, _attributes$style4, _attributes$style4$sp;

      DefaultStyle = { ...DefaultStyle,
        border: {
          normal: {
            border: (_attributes$style = attributes.style) === null || _attributes$style === void 0 ? void 0 : _attributes$style.border,
            radius: (_attributes$style2 = attributes.style) === null || _attributes$style2 === void 0 ? void 0 : (_attributes$style2$bo = _attributes$style2.border) === null || _attributes$style2$bo === void 0 ? void 0 : _attributes$style2$bo.radius
          }
        },
        spacing: {
          padding: {
            default: (_attributes$style3 = attributes.style) === null || _attributes$style3 === void 0 ? void 0 : (_attributes$style3$sp = _attributes$style3.spacing) === null || _attributes$style3$sp === void 0 ? void 0 : _attributes$style3$sp.padding
          },
          margin: {
            default: (_attributes$style4 = attributes.style) === null || _attributes$style4 === void 0 ? void 0 : (_attributes$style4$sp = _attributes$style4.spacing) === null || _attributes$style4$sp === void 0 ? void 0 : _attributes$style4$sp.margin
          }
        }
      };
    }

    const DEFAULT_STYLE = {
      enable: true,
      style: DefaultStyle
    };
    const {
      gutenaKitID,
      gutenaKitCSS,
      gutenaKitClass = {},
      gutenaKitStyle = DEFAULT_STYLE,
      style = {}
    } = attributes; //Get Device preview type

    const deviceType = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
      return select("core/edit-post").__experimentalGetPreviewDeviceType();
    }, []); //Style name based on device type

    const styleName = 'Desktop' === deviceType ? 'default' : 'Tablet' === deviceType ? 'tablet' : 'mobile';

    const gutenaKitIcon = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Icon, {
      icon: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M4.22391 11.3335H0.00208904L11.3348 0.000746265V4.18958L4.22391 11.3335Z",
        fill: "#0DA88C"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M19.7791 11.3325H24.001L12.6682 -0.000230298V4.18861L19.7791 11.3325Z",
        fill: "#0DA88C"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M4.22184 12.6655H1.3843e-05L11.3328 23.9983V19.8094L4.22184 12.6655Z",
        fill: "#0DA88C"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M19.7772 12.6675H23.999L12.6663 24.0002V19.8114L19.7772 12.6675Z",
        fill: "#0DA88C"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
        width: "8.81436",
        height: "2.60358",
        transform: "matrix(1 0 0 -1 11.9625 15.2695)",
        fill: "#0DA88C"
      }))
    }); //Generate css 


    const generateCss = function () {
      var _styleVar$spacing, _styleVar$spacing2, _styleVar$color, _styleVar$color2, _styleVar$border, _styleVar$border2, _styleVar$boxShadow, _styleVar$boxShadow2;

      let styleVar = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : gutenaKitStyle;
      let id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#block-' + clientId;
      let css = '';
      let cssHover = '';
      let cssLink = '';
      let cssLinkHover = '';
      let cssBefore = '';
      let cssHoverBefore = '';
      let cssTablet = '';
      let cssMobile = '';

      if ((0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)(styleVar)) {
        return css;
      } //Spacing Css 


      if (!(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)(styleVar === null || styleVar === void 0 ? void 0 : (_styleVar$spacing = styleVar.spacing) === null || _styleVar$spacing === void 0 ? void 0 : _styleVar$spacing.padding) || !(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)(styleVar === null || styleVar === void 0 ? void 0 : (_styleVar$spacing2 = styleVar.spacing) === null || _styleVar$spacing2 === void 0 ? void 0 : _styleVar$spacing2.margin)) {
        //Spacing variables
        ['padding', 'margin'].forEach(spaceName => {
          var _styleVar$spacing3;

          //Check if exists
          if (!(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)(styleVar === null || styleVar === void 0 ? void 0 : (_styleVar$spacing3 = styleVar.spacing) === null || _styleVar$spacing3 === void 0 ? void 0 : _styleVar$spacing3[spaceName])) {
            //Responsive styles
            ['default', 'tablet', 'mobile'].forEach(deviceName => {
              var _styleVar$spacing4, _styleVar$spacing4$sp;

              //Check if exists
              if (!(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)(styleVar === null || styleVar === void 0 ? void 0 : (_styleVar$spacing4 = styleVar.spacing) === null || _styleVar$spacing4 === void 0 ? void 0 : (_styleVar$spacing4$sp = _styleVar$spacing4[spaceName]) === null || _styleVar$spacing4$sp === void 0 ? void 0 : _styleVar$spacing4$sp[deviceName])) {
                var _styleVar$spacing5, _styleVar$spacing5$sp;

                //gettings css
                let spacing = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.spaceCss)(styleVar === null || styleVar === void 0 ? void 0 : (_styleVar$spacing5 = styleVar.spacing) === null || _styleVar$spacing5 === void 0 ? void 0 : (_styleVar$spacing5$sp = _styleVar$spacing5[spaceName]) === null || _styleVar$spacing5$sp === void 0 ? void 0 : _styleVar$spacing5$sp[deviceName], spaceName);

                if ('default' === deviceName) {
                  css += spacing;
                } else if ('tablet' === deviceName) {
                  cssTablet += spacing;
                } else {
                  cssMobile += spacing;
                }
              }
            });
          }
        });
      } //color normal


      if (!(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)(styleVar === null || styleVar === void 0 ? void 0 : (_styleVar$color = styleVar.color) === null || _styleVar$color === void 0 ? void 0 : _styleVar$color.normal)) {
        var _styleVar$color$norma, _styleVar$color$norma2, _styleVar$color$norma3;

        // Text Color
        css += (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)((_styleVar$color$norma = styleVar.color.normal) === null || _styleVar$color$norma === void 0 ? void 0 : _styleVar$color$norma.text) ? '' : ' color:' + styleVar.color.normal.text + ' !important;'; // Background Color

        css += (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)((_styleVar$color$norma2 = styleVar.color.normal) === null || _styleVar$color$norma2 === void 0 ? void 0 : _styleVar$color$norma2.background) ? '' : ' background:' + styleVar.color.normal.background + ' !important;'; // Link Color

        cssLink += (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)((_styleVar$color$norma3 = styleVar.color.normal) === null || _styleVar$color$norma3 === void 0 ? void 0 : _styleVar$color$norma3.link) ? '' : ' color:' + styleVar.color.normal.link + ' !important;';
      } //color hover


      if (!(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)(styleVar === null || styleVar === void 0 ? void 0 : (_styleVar$color2 = styleVar.color) === null || _styleVar$color2 === void 0 ? void 0 : _styleVar$color2.hover)) {
        var _styleVar$color$hover, _styleVar$color$hover2, _styleVar$color$hover3;

        // Text Color
        cssHover += (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)((_styleVar$color$hover = styleVar.color.hover) === null || _styleVar$color$hover === void 0 ? void 0 : _styleVar$color$hover.text) ? '' : ' color:' + styleVar.color.hover.text + ' !important;'; // Background Color

        cssHover += (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)((_styleVar$color$hover2 = styleVar.color.hover) === null || _styleVar$color$hover2 === void 0 ? void 0 : _styleVar$color$hover2.background) ? '' : ' background:' + styleVar.color.hover.background + ' !important;'; // Link Color

        cssLinkHover += (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)((_styleVar$color$hover3 = styleVar.color.hover) === null || _styleVar$color$hover3 === void 0 ? void 0 : _styleVar$color$hover3.link) ? '' : ' color:' + styleVar.color.hover.link + ' !important;';
      } //Pseudo CSS before : Overlay


      if (!(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)(styleVar === null || styleVar === void 0 ? void 0 : styleVar.overlay)) {
        var _styleVar$overlay, _styleVar$overlay$nor, _styleVar$overlay3, _styleVar$overlay3$ho;

        css += 'position: relative;'; //Overlay color

        if (styleVar !== null && styleVar !== void 0 && (_styleVar$overlay = styleVar.overlay) !== null && _styleVar$overlay !== void 0 && (_styleVar$overlay$nor = _styleVar$overlay.normal) !== null && _styleVar$overlay$nor !== void 0 && _styleVar$overlay$nor.color) {
          var _styleVar$overlay2, _styleVar$overlay2$no;

          cssBefore += ` 
                    content:'';
                    background:${styleVar.overlay.normal.color} !important; 
                    opacity: ${(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)((_styleVar$overlay2 = styleVar.overlay) === null || _styleVar$overlay2 === void 0 ? void 0 : (_styleVar$overlay2$no = _styleVar$overlay2.normal) === null || _styleVar$overlay2$no === void 0 ? void 0 : _styleVar$overlay2$no.opacity) ? '80' : styleVar.overlay.normal.opacity}% !important ;
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    `;
        } //Hover : Overlay


        if (styleVar !== null && styleVar !== void 0 && (_styleVar$overlay3 = styleVar.overlay) !== null && _styleVar$overlay3 !== void 0 && (_styleVar$overlay3$ho = _styleVar$overlay3.hover) !== null && _styleVar$overlay3$ho !== void 0 && _styleVar$overlay3$ho.color) {
          var _styleVar$overlay4, _styleVar$overlay4$ho;

          cssHoverBefore += ` 
                    content:'';
                    background:${styleVar.overlay.hover.color} !important; 
                    opacity: ${(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)((_styleVar$overlay4 = styleVar.overlay) === null || _styleVar$overlay4 === void 0 ? void 0 : (_styleVar$overlay4$ho = _styleVar$overlay4.hover) === null || _styleVar$overlay4$ho === void 0 ? void 0 : _styleVar$overlay4$ho.opacity) ? '80' : styleVar.overlay.hover.opacity}% !important ;
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    `;
        }
      } //Border


      css += (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.borderCss)(styleVar === null || styleVar === void 0 ? void 0 : (_styleVar$border = styleVar.border) === null || _styleVar$border === void 0 ? void 0 : _styleVar$border.normal);
      cssHover += (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.borderCss)(styleVar === null || styleVar === void 0 ? void 0 : (_styleVar$border2 = styleVar.border) === null || _styleVar$border2 === void 0 ? void 0 : _styleVar$border2.hover); //box shadow

      css += (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.boxShadowCss)(styleVar === null || styleVar === void 0 ? void 0 : (_styleVar$boxShadow = styleVar.boxShadow) === null || _styleVar$boxShadow === void 0 ? void 0 : _styleVar$boxShadow.normal); //box hover shadow

      cssHover += (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.boxShadowCss)(styleVar === null || styleVar === void 0 ? void 0 : (_styleVar$boxShadow2 = styleVar.boxShadow) === null || _styleVar$boxShadow2 === void 0 ? void 0 : _styleVar$boxShadow2.hover); //Typography

      css += (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.typographyCss)(styleVar === null || styleVar === void 0 ? void 0 : styleVar.typography); //responsive typography stored in style variable only due to most of its variable same across all device

      let typography = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.typographyCss)(styleVar === null || styleVar === void 0 ? void 0 : styleVar.typography);
      let fluidTypograph = false;

      if (-1 == typography.indexOf('font-size:clamp')) {
        fluidTypograph = true;
      } //Font size and line height. leave font size if fluidTypograph true


      let device = 'Tstyle' === style ? 'T' : 'M';
      css += ['fontSize', 'lineHeight'].map(fontProperty => {
        var _styleVar$typography;

        return 'fontSize' === fontProperty && fluidTypograph ? '' : (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)(styleVar === null || styleVar === void 0 ? void 0 : (_styleVar$typography = styleVar.typography) === null || _styleVar$typography === void 0 ? void 0 : _styleVar$typography[device + '' + fontProperty]) ? '' : (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkCamelToDash)(fontProperty) + ':' + styleVar.typography[device + '' + fontProperty] + ';';
      }).join(' '); //if hide in device then do not generate any other css
      //Responsive styles

      if (!(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)(styleVar === null || styleVar === void 0 ? void 0 : styleVar.hideDisplay)) {
        ['default', 'tablet', 'mobile'].forEach(deviceName => {
          var _styleVar$hideDisplay, _styleVar$hideDisplay2;

          if (!(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)(styleVar === null || styleVar === void 0 ? void 0 : (_styleVar$hideDisplay = styleVar.hideDisplay) === null || _styleVar$hideDisplay === void 0 ? void 0 : _styleVar$hideDisplay[deviceName]) && true === (styleVar === null || styleVar === void 0 ? void 0 : (_styleVar$hideDisplay2 = styleVar.hideDisplay) === null || _styleVar$hideDisplay2 === void 0 ? void 0 : _styleVar$hideDisplay2[deviceName])) {
            if ('default' === deviceName) {
              css += ' display:none; ';
            } else if ('tablet' === deviceName) {
              cssTablet = ' display:none; ';
            } else {
              cssMobile = ' display:none; ';
            }
          }
        });
      } //Normal Css 


      css = 9 < css.length ? ' ' + id + '{' + css + '} ' : ''; //Before pseudo css: Overlay Css 

      css += 9 < cssBefore.length ? ' ' + id + ':before{' + cssBefore + '} ' : ''; //Hover before pseudo css: Overlay Css

      css += 9 < cssHoverBefore.length ? ' ' + id + ':hover:before{' + cssHoverBefore + '} ' : ''; //Hover Css

      css += 9 < cssHover.length ? ' ' + id + ':hover{' + cssHover + '} ' : ''; //Link css

      css += 9 < cssLink.length ? ' ' + id + ' a {' + cssLink + '} ' : ''; //Link hover css

      css += 9 < cssLinkHover.length ? ' ' + id + ' a:hover {' + cssLinkHover + '} ' : '';
      css += 9 < cssTablet.length ? ' @media only screen and (min-width: 768px) and (max-width: 1080px) { ' + id + '{' + cssTablet + '} }' : '';
      css += 9 < cssMobile.length ? ' @media only screen and (min-width: 768px) and (max-width: 1080px) { ' + id + '{' + cssMobile + '} }' : '';
      return css;
    }; //generate Css var


    const generateCssVar = function () {
      let styleVar = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : gutenaKitStyle;
      let id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#block-' + clientId;
      let cssVar = '';

      if ((0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)(styleVar)) {
        return '';
      }

      let varName = '--gutenakit-'; //spacing: padding and margin

      if (!(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)(styleVar === null || styleVar === void 0 ? void 0 : styleVar.spacing)) {
        ['padding', 'margin'].forEach(spaceName => {
          if (!(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)(styleVar.spacing[spaceName])) {
            //Responsive styles
            ['default', 'tablet', 'mobile'].forEach(deviceName => {
              var _styleVar$spacing$spa;

              if (!(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)((_styleVar$spacing$spa = styleVar.spacing[spaceName]) === null || _styleVar$spacing$spa === void 0 ? void 0 : _styleVar$spacing$spa[deviceName])) {
                cssVar += (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.spaceVar)(styleVar.spacing[spaceName][deviceName], varName + '-' + deviceName + '-' + spaceName);
              }
            });
          }
        });
      }

      ['color', 'overlay', 'border', 'boxShadow'].forEach(cssProperty => {
        ['normal', 'hover'].forEach(eventName => {
          var _styleVar$cssProperty;

          if (!(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)(styleVar === null || styleVar === void 0 ? void 0 : (_styleVar$cssProperty = styleVar[cssProperty]) === null || _styleVar$cssProperty === void 0 ? void 0 : _styleVar$cssProperty[eventName])) {
            let newVarName = varName + '-' + cssProperty.toLowerCase() + '-' + eventName; // Color

            if ('color' === cssProperty) {
              ['text', 'background', 'link'].forEach(colorName => {
                if (!(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)(styleVar[cssProperty][eventName][colorName])) {
                  cssVar += newVarName + '-' + colorName + ':' + styleVar[cssProperty][eventName][colorName] + ';';
                }
              });
            } // Overlay 


            if ('overlay' === cssProperty && !(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)(styleVar[cssProperty][eventName].color)) {
              var _styleVar$cssProperty2;

              //color
              cssVar += newVarName + '-background:' + styleVar[cssProperty][eventName].color + ';'; //opacity

              cssVar += newVarName + '-opacity:' + ((0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)((_styleVar$cssProperty2 = styleVar[cssProperty][eventName]) === null || _styleVar$cssProperty2 === void 0 ? void 0 : _styleVar$cssProperty2.opacity) ? '80%;' : styleVar[cssProperty][eventName].opacity + '%;');
            } // Border


            if ('border' === cssProperty) {
              cssVar += (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.borderVar)(styleVar[cssProperty][eventName], newVarName);
            } // Box shadow


            if ('boxShadow' === cssProperty) {
              cssVar += newVarName + ':' + (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.boxShadowCss)(styleVar[cssProperty][eventName], false);
            }
          }
        });
      }); //Typography

      cssVar += (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.typographyVar)(styleVar === null || styleVar === void 0 ? void 0 : styleVar.typography, varName);
      return 10 > cssVar.length ? '' : ' ' + id + '{' + cssVar + '} ';
    };

    const generateClasses = function () {
      let styleVar = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : gutenaKitStyle;

      if ((0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)(styleVar)) {
        return false;
      }

      let cssClass = [];
      let classPre = 'has-gutenakit'; //spacing: padding and margin

      if (!(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)(styleVar === null || styleVar === void 0 ? void 0 : styleVar.spacing)) {} //spacing: padding and margin


      if (!(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)(styleVar === null || styleVar === void 0 ? void 0 : styleVar.spacing)) {
        ['padding', 'margin'].forEach(spaceName => {
          if (!(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)(styleVar.spacing[spaceName])) {
            //Responsive styles
            ['default', 'tablet', 'mobile'].forEach(deviceName => {
              var _styleVar$spacing$spa2;

              if (!(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)((_styleVar$spacing$spa2 = styleVar.spacing[spaceName]) === null || _styleVar$spacing$spa2 === void 0 ? void 0 : _styleVar$spacing$spa2[deviceName])) {
                cssClass.push(classPre + '-' + spaceName + '-' + deviceName);
              }
            });
          }
        });
      }

      ['color', 'overlay', 'border', 'boxShadow'].forEach(cssProperty => {
        ['normal', 'hover'].forEach(eventName => {
          var _styleVar$cssProperty3;

          if (!(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)(styleVar === null || styleVar === void 0 ? void 0 : (_styleVar$cssProperty3 = styleVar[cssProperty]) === null || _styleVar$cssProperty3 === void 0 ? void 0 : _styleVar$cssProperty3[eventName])) {
            var _styleVar$cssProperty4, _styleVar$cssProperty5;

            cssClass.push(classPre + '-' + cssProperty.toLowerCase() + '-' + eventName); //color link class

            if ('color' === cssProperty && !(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)(styleVar === null || styleVar === void 0 ? void 0 : (_styleVar$cssProperty4 = styleVar[cssProperty]) === null || _styleVar$cssProperty4 === void 0 ? void 0 : (_styleVar$cssProperty5 = _styleVar$cssProperty4[eventName]) === null || _styleVar$cssProperty5 === void 0 ? void 0 : _styleVar$cssProperty5['link'])) {
              cssClass.push(classPre + '-' + cssProperty.toLowerCase() + '-' + eventName + '-link');
            }
          }
        });
      }); //display none for other devices

      if (!(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)(styleVar === null || styleVar === void 0 ? void 0 : styleVar.hideDisplay)) {
        ['default', 'tablet', 'mobile'].forEach(deviceName => {
          var _styleVar$hideDisplay3, _styleVar$hideDisplay4;

          if (!(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)((_styleVar$hideDisplay3 = styleVar.hideDisplay) === null || _styleVar$hideDisplay3 === void 0 ? void 0 : _styleVar$hideDisplay3[deviceName]) && true === ((_styleVar$hideDisplay4 = styleVar.hideDisplay) === null || _styleVar$hideDisplay4 === void 0 ? void 0 : _styleVar$hideDisplay4[deviceName])) {
            cssClass.push(classPre + '-hide-in-' + deviceName);
          }
        });
      }

      if (!(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)(styleVar === null || styleVar === void 0 ? void 0 : styleVar.typography)) {
        var _styleVar$typography4;

        //Check if any typography used
        let isTypography = false;
        let typographyClass = '';
        ['fontFamily', 'fontSize', 'lineHeight', 'fontStyle', 'fontWeight', 'letterSpacing', 'textTransform', 'textDecoration'].forEach(tproperty => {
          var _styleVar$typography2, _styleVar$typography3;

          //check if font-size-preset used
          if ('fontSize' === tproperty && !(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)((_styleVar$typography2 = styleVar.typography) === null || _styleVar$typography2 === void 0 ? void 0 : _styleVar$typography2.fontSize) && 10 < styleVar.typography.fontSize.length) {
            cssClass.push(styleVar.typography.fontSize);
          } else if (!(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)((_styleVar$typography3 = styleVar.typography) === null || _styleVar$typography3 === void 0 ? void 0 : _styleVar$typography3[tproperty])) {
            isTypography = true;
            return;
          }
        }); //default

        typographyClass += isTypography ? '-d' : ''; //has fluid typography

        if (!(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)((_styleVar$typography4 = styleVar.typography) === null || _styleVar$typography4 === void 0 ? void 0 : _styleVar$typography4.fluidTypography) && (true === styleVar.typography.fluidTypography || '1' == styleVar.typography.fluidTypography)) {
          var _styleVar$typography5, _styleVar$typography6;

          cssClass.push('has-gutenakit-f-typography'); //tablet

          typographyClass += !(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)((_styleVar$typography5 = styleVar.typography) === null || _styleVar$typography5 === void 0 ? void 0 : _styleVar$typography5.TlineHeight) ? '-t' : ''; //mobile

          typographyClass += !(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)((_styleVar$typography6 = styleVar.typography) === null || _styleVar$typography6 === void 0 ? void 0 : _styleVar$typography6.MlineHeight) ? '-m' : '';
        } else {
          var _styleVar$typography7, _styleVar$typography8, _styleVar$typography9, _styleVar$typography10;

          //tablet
          typographyClass += !(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)((_styleVar$typography7 = styleVar.typography) === null || _styleVar$typography7 === void 0 ? void 0 : _styleVar$typography7.TfontSize) || !(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)((_styleVar$typography8 = styleVar.typography) === null || _styleVar$typography8 === void 0 ? void 0 : _styleVar$typography8.TlineHeight) ? '-t' : ''; //mobile

          typographyClass += !(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)((_styleVar$typography9 = styleVar.typography) === null || _styleVar$typography9 === void 0 ? void 0 : _styleVar$typography9.MfontSize) || !(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)((_styleVar$typography10 = styleVar.typography) === null || _styleVar$typography10 === void 0 ? void 0 : _styleVar$typography10.MlineHeight) ? '-m' : '';
        } //final typography class


        if (1 < typographyClass.length) {
          cssClass.push(classPre + '-typography' + typographyClass);
        }
      } else if (!(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)(styleVar === null || styleVar === void 0 ? void 0 : styleVar.globalTypography)) {
        //Global typography
        cssClass.push(classPre + '-g-typography');
        cssClass.push(classPre + '-' + styleVar.globalTypography);
      }

      return cssClass.join(' ');
    };

    const setAttr = function (value) {
      let styleAttr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      let attrName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      let deviceStyle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

      /**
       * 
       * styleAttr like spacing, border, color etc
       * attrName like padding, margin under spacing styleAttr
       * deviceStyle like default, tablet, mobile inside attrName like spacing.padding.default
       */
      if ((0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)(styleAttr)) {
        return;
      } //Initialize style


      let newstyle = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)(gutenaKitStyle) ? DEFAULT_STYLE : gutenaKitStyle; //check if required style attribute available or not

      if ((0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)(newstyle[styleAttr])) {
        newstyle[styleAttr] = {};
      }

      if ((0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)(attrName)) {
        if (!(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)(deviceStyle)) {
          newstyle[styleAttr][deviceStyle] = value;
        } else {
          newstyle[styleAttr] = value;
        }
      } else {
        if (!(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)(deviceStyle)) {
          if ((0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)(newstyle[styleAttr][attrName])) {
            newstyle[styleAttr][attrName] = {};
          }

          newstyle[styleAttr][attrName][deviceStyle] = value;
        } else {
          newstyle[styleAttr][attrName] = value;
        }
      } //Global typography


      if ('globalTypography' === styleAttr && !(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)(newstyle === null || newstyle === void 0 ? void 0 : newstyle.typography)) {
        //Reset typography when global typography applied
        newstyle.typography = undefined;
      } else if ('typography' === styleAttr && !(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)(newstyle === null || newstyle === void 0 ? void 0 : newstyle.globalTypography)) {
        //Reset global typography when custom typography applied
        newstyle.globalTypography = undefined;
      }

      setAttributes({
        gutenaKitStyle: { ...newstyle
        },
        gutenaKitID: clientId,
        gutenaKitCSS: { ...gutenaKitCSS,
          blockCss: generateCssVar(newstyle, " .gutenakitid-" + clientId)
        },
        gutenaKitClass: { ...gutenaKitClass,
          blockClasses: generateClasses(newstyle)
        }
      });
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
    /* To Fix mobile and tablet preview due to a wordpress bug
        In mobile and tablet preview WP editor use iframe which cause css fall outside of iframe 
    */

    const renderBlockCSSForResponsive = () => {
      var _gutena_kit_block_edi;

      if ('Desktop' !== deviceType && !(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)((_gutena_kit_block_edi = gutena_kit_block_editor) === null || _gutena_kit_block_edi === void 0 ? void 0 : _gutena_kit_block_edi.css) && (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)(gutena_kit_block_editor.cssCount)) {
        //Get editor iframe document
        let editorDoc = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.getEditorDoc)('head');

        if ((0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)(editorDoc) || editorDoc.length < 1) {
          return false;
        }

        editorDoc.insertAdjacentHTML("afterend", "<style>" + gutena_kit_block_editor.css + "</style>");
        gutena_kit_block_editor.cssCount = 1;
      }

      return '';
    };

    let global_typography_block_css = '';

    if (gkSupports.typography && !(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)(gutenaKitStyle === null || gutenaKitStyle === void 0 ? void 0 : gutenaKitStyle.globalTypography) && !(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)((_gutena_kit_block_edi2 = gutena_kit_block_editor) === null || _gutena_kit_block_edi2 === void 0 ? void 0 : (_gutena_kit_block_edi3 = _gutena_kit_block_edi2.globalTypography) === null || _gutena_kit_block_edi3 === void 0 ? void 0 : (_gutena_kit_block_edi4 = _gutena_kit_block_edi3[gutenaKitStyle.globalTypography]) === null || _gutena_kit_block_edi4 === void 0 ? void 0 : _gutena_kit_block_edi4['css'])) {
      var _gutena_kit_block_edi5, _gutena_kit_block_edi6, _gutena_kit_block_edi7;

      global_typography_block_css += '#block-' + clientId + ((_gutena_kit_block_edi5 = gutena_kit_block_editor) === null || _gutena_kit_block_edi5 === void 0 ? void 0 : (_gutena_kit_block_edi6 = _gutena_kit_block_edi5.globalTypography) === null || _gutena_kit_block_edi6 === void 0 ? void 0 : (_gutena_kit_block_edi7 = _gutena_kit_block_edi6[gutenaKitStyle.globalTypography]) === null || _gutena_kit_block_edi7 === void 0 ? void 0 : _gutena_kit_block_edi7['css']);
    }

    const Style = generateCssVar() + ' ' + global_typography_block_css + '' + renderBlockCSSForResponsive();
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, Style), isSelected && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
      icon: gutenaKitIcon,
      iconPosition: "left",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Gutena Kit Settings", "gutena-kit"),
      className: "gutena-kit-settings",
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.__experimentalHStack, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.FlexItem, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
      variant: "secondary",
      isSmall: true,
      disabled: (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)(gutenaKitCSS === null || gutenaKitCSS === void 0 ? void 0 : gutenaKitCSS.blockCss),
      onClick: () => setAttributes({
        gutenaKitStyle: undefined,
        gutenaKitCSS: { ...gutenaKitCSS,
          blockCss: undefined
        }
      })
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Reset')))), gkSupports.typography && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Supports_Typography_TypographySettings__WEBPACK_IMPORTED_MODULE_11__["default"], {
      attrValue: gutenaKitStyle === null || gutenaKitStyle === void 0 ? void 0 : gutenaKitStyle.typography,
      onChangeFunc: typography => setAttr(typography, 'typography'),
      globalTypographySlug: gutenaKitStyle === null || gutenaKitStyle === void 0 ? void 0 : gutenaKitStyle.globalTypography,
      setGlobalTypography: gt => setAttr(gt, 'globalTypography')
    }), gkSupports.color && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_EventsControl__WEBPACK_IMPORTED_MODULE_10__["default"], {
      componentName: "ColorControl",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Color", "gutena-kit"),
      attrValue: gutenaKitStyle === null || gutenaKitStyle === void 0 ? void 0 : gutenaKitStyle.color,
      onChangeFunc: value => setAttr(value, 'color'),
      panelId: clientId
    }), gkSupports.overlay && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_EventsControl__WEBPACK_IMPORTED_MODULE_10__["default"], {
      componentName: "OverlayControl",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Overlay", "gutena-kit"),
      attrValue: gutenaKitStyle === null || gutenaKitStyle === void 0 ? void 0 : gutenaKitStyle.overlay,
      onChangeFunc: value => setAttr(value, 'overlay')
    }), gkSupports.spacing && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Spacing", "gutena-kit"),
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_SelectDeviceDropdown__WEBPACK_IMPORTED_MODULE_7__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.__experimentalBoxControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Padding", "gutena-kit"),
      values: gutenaKitStyle === null || gutenaKitStyle === void 0 ? void 0 : (_gutenaKitStyle$spaci = gutenaKitStyle.spacing) === null || _gutenaKitStyle$spaci === void 0 ? void 0 : (_gutenaKitStyle$spaci2 = _gutenaKitStyle$spaci.padding) === null || _gutenaKitStyle$spaci2 === void 0 ? void 0 : _gutenaKitStyle$spaci2[styleName],
      onChange: value => setAttr(value, 'spacing', 'padding', styleName),
      allowReset: true,
      sides: paddingSides
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_SelectDeviceDropdown__WEBPACK_IMPORTED_MODULE_7__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.__experimentalBoxControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Margin", "gutena-kit"),
      values: gutenaKitStyle === null || gutenaKitStyle === void 0 ? void 0 : (_gutenaKitStyle$spaci3 = gutenaKitStyle.spacing) === null || _gutenaKitStyle$spaci3 === void 0 ? void 0 : (_gutenaKitStyle$spaci4 = _gutenaKitStyle$spaci3.margin) === null || _gutenaKitStyle$spaci4 === void 0 ? void 0 : _gutenaKitStyle$spaci4[styleName],
      onChange: value => setAttr(value, 'spacing', 'margin', styleName),
      allowReset: true,
      sides: marginSides,
      inputProps: {
        min: -Infinity
      }
    })), gkSupports.border && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_BorderGroup__WEBPACK_IMPORTED_MODULE_9__["default"], {
      attrValue: gutenaKitStyle === null || gutenaKitStyle === void 0 ? void 0 : gutenaKitStyle.border,
      onChangeFunc: value => setAttr(value, 'border')
    }), gkSupports.border && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_EventsControl__WEBPACK_IMPORTED_MODULE_10__["default"], {
      componentName: "BoxShadowControl",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Box Shadow", "gutena-kit"),
      attrValue: gutenaKitStyle === null || gutenaKitStyle === void 0 ? void 0 : gutenaKitStyle.boxShadow,
      onChangeFunc: value => setAttr(value, 'boxShadow'),
      onBoxShadow: true
    }), gkSupports.display && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Display", "gutena-kit"),
      initialOpen: false
    }, ['Desktop', 'Tablet', 'Mobile'].map(deviceName => {
      var _gutenaKitStyle$hideD, _gutenaKitStyle$hideD2;

      let deviceStyle = 'Desktop' === deviceName ? 'default' : 'Tablet' === deviceName ? 'tablet' : 'mobile';
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl, {
        key: deviceName,
        label: deviceAvailable[deviceName],
        checked: (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_12__.gkIsEmpty)(gutenaKitStyle === null || gutenaKitStyle === void 0 ? void 0 : (_gutenaKitStyle$hideD = gutenaKitStyle.hideDisplay) === null || _gutenaKitStyle$hideD === void 0 ? void 0 : _gutenaKitStyle$hideD[deviceStyle]) ? false : gutenaKitStyle === null || gutenaKitStyle === void 0 ? void 0 : (_gutenaKitStyle$hideD2 = gutenaKitStyle.hideDisplay) === null || _gutenaKitStyle$hideD2 === void 0 ? void 0 : _gutenaKitStyle$hideD2[deviceStyle],
        onChange: value => setAttr(value, 'hideDisplay', null, deviceStyle)
      });
    })))));
  };
}, 'GutenaKitSettings');
/**** Block: core/media-text : END ******/

/***/ }),

/***/ "./includes/block-editor/src/Supports/Typography/TypographySettings.js":
/*!*****************************************************************************!*\
  !*** ./includes/block-editor/src/Supports/Typography/TypographySettings.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_TypographyControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/TypographyControl */ "./includes/block-editor/src/components/TypographyControl.js");
/* harmony import */ var _components_SelectDeviceDropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/SelectDeviceDropdown */ "./includes/block-editor/src/components/SelectDeviceDropdown.js");
/* harmony import */ var _components_gutenaIcons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/gutenaIcons */ "./includes/block-editor/src/components/gutenaIcons.js");
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/helpers */ "./includes/block-editor/src/helpers/helpers.js");


/**
 * Typography Controls with add and edit Global styles
 */









const noop = () => {};

const TypographySettings = _ref => {
  var _gutena_kit_block_edi;

  let {
    attrValue,
    onChangeFunc = noop,
    setGlobalTypography = noop,
    globalTypographySlug = undefined
  } = _ref;

  /*
  Active tab : set_global_typography| add_typography | edit_typography 
  Status : '' | progress | error | success 
  Message : Global typography save message
  globalTypography: Array of global Typography data
  deleteTypography: true on delete button click
  deleteTypographyConfirm: true on delete button click of popup modal
  */
  const [typographyTab, setTypographyTab] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Saved Typography', 'gutena-kit'),
    activeTab: 'set_global_typography',
    action: '',
    status: '',
    message: '',
    deleteTypography: false,
    deleteTypographyConfirm: false,
    globalTypography: (_gutena_kit_block_edi = gutena_kit_block_editor) === null || _gutena_kit_block_edi === void 0 ? void 0 : _gutena_kit_block_edi.globalTypography
  }); //For add|Edit global typography state

  const [addEditTypography, setAddEditTypography] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({
    fluidTypography: false,
    name: undefined,
    slug: undefined,
    fontFamily: undefined,
    fontSize: undefined,
    TfontSize: undefined,
    MfontSize: undefined,
    fluidFontSize: undefined,
    lineHeight: undefined,
    TlineHeight: undefined,
    MlineHeight: undefined,
    fontStyle: undefined,
    fontWeight: undefined,
    letterSpacing: undefined,
    textTransform: undefined,
    textDecoration: undefined,
    css: undefined
  }); //Save Global Typography

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if ('progress' === (typographyTab === null || typographyTab === void 0 ? void 0 : typographyTab.status)) {
      if ((0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_6__.gkIsEmpty)(addEditTypography === null || addEditTypography === void 0 ? void 0 : addEditTypography.name) || (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_6__.gkIsEmpty)(addEditTypography === null || addEditTypography === void 0 ? void 0 : addEditTypography.slug)) {
        setTypographyTab({ ...typographyTab,
          status: 'error',
          message: 'add_typography' === (typographyTab === null || typographyTab === void 0 ? void 0 : typographyTab.activeTab) ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Name is required', 'gutena-kit') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Please select a global typography', 'gutena-kit')
        });
      } else if (!isDeleteConfirmationRequired()) {
        //Create form data
        const data = new FormData(); //form action

        data.append('action', gutena_kit_block_editor.save_typography_action); //set nonce

        data.append('nonce', gutena_kit_block_editor.nonce); //If typography deleted

        if (isDeleteTypographyInitiated() && typographyTab.deleteTypography && typographyTab.deleteTypographyConfirm) {
          data.append('delete_typography', addEditTypography === null || addEditTypography === void 0 ? void 0 : addEditTypography.slug);
        } //typography data


        data.append('typography', JSON.stringify(addEditTypography));
        fetch(gutena_kit_block_editor.ajax_url, {
          method: "POST",
          credentials: 'same-origin',
          body: data
        }).then(response => response.json()).then(response => {
          if (!(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_6__.gkIsEmpty)(response === null || response === void 0 ? void 0 : response.globalTypography)) {
            gutena_kit_block_editor.globalTypography = response.globalTypography;
          }

          let activeTab = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_6__.gkIsEmpty)(gutena_kit_block_editor.globalTypography) || 0 === gutena_kit_block_editor.globalTypography.length ? {
            activeTab: 'set_global_typography',
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Saved Typography', 'gutena-kit')
          } : {};
          setTypographyTab({ ...typographyTab,
            ...response,
            ...activeTab,
            deleteTypography: false,
            deleteTypographyConfirm: false
          });
        });
      }
    }
  }, [typographyTab]); //Prepare global typography array for select options

  const globalTypographyOptions = () => {
    if ((0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_6__.gkIsEmpty)(typographyTab.globalTypography)) {
      return [];
    }

    let typographyOptions = [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select typography', 'gutena-kit'),
      value: ''
    }];
    Object.keys(typographyTab.globalTypography).forEach(function (slug) {
      if (!(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_6__.gkIsEmpty)(slug)) {
        typographyOptions.push({
          label: typographyTab.globalTypography[slug].name,
          value: slug
        });
      }
    });
    return typographyOptions;
  }; //Get global typgraphy slug 


  const getSlug = function () {
    let name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    let slug = addEditTypography === null || addEditTypography === void 0 ? void 0 : addEditTypography.slug;

    if ('add_typography' === typographyTab.activeTab && null !== name) {
      var _typographyTab$global;

      slug = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_6__.generateSlug)(name);
      let d = new Date();
      let slugkey = d.getTime();
      slug = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_6__.gkIsEmpty)(typographyTab === null || typographyTab === void 0 ? void 0 : (_typographyTab$global = typographyTab.globalTypography) === null || _typographyTab$global === void 0 ? void 0 : _typographyTab$global[slug]) ? slug : slug + '-' + slugkey;
    }

    return slug;
  };

  const getCss = function () {
    let typographyName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    let slug = getSlug(typographyName);
    return (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_6__.gkIsEmpty)(slug) ? '' : '.has-gutenakit-g-typography.has-gutenakit-' + slug + '{' + (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_6__.typographyVar)(addEditTypography, '--gutenakit--gt-') + '}';
  };

  const isDeleteTypographyInitiated = () => true === typographyTab.deleteTypography;

  const isProgressStatus = () => 'progress' === typographyTab.status;

  const isDeleteConfirmationRequired = () => isDeleteTypographyInitiated() && isProgressStatus() && !typographyTab.deleteTypographyConfirm;

  const isGlobalTypographyEmpty = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_6__.gkIsEmpty)(globalTypographyOptions()) || 1 >= globalTypographyOptions().length;

  const closeDeletePrompt = () => setTypographyTab({ ...typographyTab,
    deleteTypography: false,
    status: '',
    message: ''
  });

  const tabs = [{
    tabName: 'edit_typography',
    icon: 'edit',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Edit Typography', 'gutena-kit')
  }, {
    tabName: 'add_typography',
    icon: 'plus-alt2',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add New Typography', 'gutena-kit')
  }];
  const DEFAULT_EVENTS_TABS = {
    default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Default', 'gutena-kit'),
    global: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Global', 'gutena-kit')
  };
  const eventAttr = Object.keys(DEFAULT_EVENTS_TABS);
  const [activeTab, setActiveTab] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_6__.gkIsEmpty)(globalTypographySlug) ? 'default' : 'global');
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Typography', 'gutena-kit'),
    initialOpen: false
  }, eventAttr.length > 1 &&
  /* show only if there is multiple items present. */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToggleGroupControl, {
    value: activeTab,
    onChange: value => setActiveTab(value),
    isBlock: true
  }, eventAttr.map(value => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToggleGroupControlOption, {
    key: value,
    value: value,
    label: DEFAULT_EVENTS_TABS[value]
  }))), 'default' === activeTab ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_TypographyControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
    attrValue: attrValue,
    onChangeFunc: value => onChangeFunc(value),
    withPanel: false
  }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalHStack, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalText, {
    isBlock: true
  }, typographyTab.label)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, tabs.map(tab => 'edit_typography' === tab.tabName && isGlobalTypographyEmpty ? '' : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    key: tab.tabName,
    label: typographyTab.activeTab === tab.tabName ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Saved Typography', 'gutena-kit') : tab.label,
    icon: tab.icon,
    onClick: () => {
      setAddEditTypography(undefined);
      setTypographyTab({ ...typographyTab,
        label: typographyTab.activeTab === tab.tabName ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Saved Typography', 'gutena-kit') : tab.label,
        activeTab: typographyTab.activeTab === tab.tabName ? 'set_global_typography' : tab.tabName,
        status: '',
        message: ''
      });
    },
    isPressed: typographyTab.activeTab === tab.tabName,
    isSmall: true,
    iconSize: 24
  })))), 'set_global_typography' === typographyTab.activeTab && (isGlobalTypographyEmpty ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalText, {
    align: "center",
    className: "gutena-kit-border-text",
    isBlock: true
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No typography found', 'gutena-kit')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add a new Typography by clicking on', 'gutena-kit'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, " + "), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('icon', 'gutena-kit'))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    value: globalTypographySlug,
    options: globalTypographyOptions(),
    onChange: value => setGlobalTypography(value),
    __nextHasNoMarginBottom: true
  })), 'edit_typography' === typographyTab.activeTab && !isGlobalTypographyEmpty && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    value: (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_6__.gkIsEmpty)(addEditTypography === null || addEditTypography === void 0 ? void 0 : addEditTypography.slug) ? '' : addEditTypography.slug,
    options: globalTypographyOptions(),
    onChange: value => {
      var _typographyTab$global2;

      return setAddEditTypography({ ...(typographyTab === null || typographyTab === void 0 ? void 0 : (_typographyTab$global2 = typographyTab.globalTypography) === null || _typographyTab$global2 === void 0 ? void 0 : _typographyTab$global2[value])
      });
    },
    __nextHasNoMarginBottom: true
  }), ('add_typography' === typographyTab.activeTab || 'edit_typography' === typographyTab.activeTab && !isGlobalTypographyEmpty && !(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_6__.gkIsEmpty)(addEditTypography === null || addEditTypography === void 0 ? void 0 : addEditTypography.slug)) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Name', 'gutena-kit'),
    value: (addEditTypography === null || addEditTypography === void 0 ? void 0 : addEditTypography.name) || '',
    onChange: name => setAddEditTypography({ ...addEditTypography,
      name: name,
      slug: getSlug(name),
      css: getCss(name)
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_TypographyControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
    attrValue: addEditTypography,
    onChangeFunc: value => setAddEditTypography({ ...value,
      css: getCss()
    }),
    editGlobalTypography: true,
    makeFluidTypography: true,
    withPanel: false,
    resetButton: false,
    devicePreview: false
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalHStack, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Save typography', 'gutena-kit'),
    variant: "secondary",
    disabled: isProgressStatus(),
    onClick: () => setTypographyTab({ ...typographyTab,
      status: 'progress'
    })
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Save', 'gutena-kit'))), 'edit_typography' === typographyTab.activeTab && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Delete typography', 'gutena-kit'),
    variant: "link",
    disabled: isProgressStatus(),
    onClick: () => setTypographyTab({ ...typographyTab,
      status: 'progress',
      deleteTypography: true
    }),
    isDestructive: true,
    icon: _components_gutenaIcons__WEBPACK_IMPORTED_MODULE_5__.deleteIcon,
    className: "gutena-kit-delete-btn"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Delete', 'gutena-kit')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalHStack, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalText, {
    isDestructive: 'error' === typographyTab.status
  }, isProgressStatus() ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Please wait...', 'gutena-kit') : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, 'success' === typographyTab.status && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    icon: "yes-alt"
  }), typographyTab.message)))), isDeleteConfirmationRequired() && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    closeLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Close', 'gutena-kit'),
    onRequestClose: () => closeDeletePrompt(),
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Delete global typography?', 'gutena-kit'),
    className: 'wp-block-page-list-modal',
    aria: {
      describedby: 'wp-block-page-list-modal__description'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    id: 'wp-block-page-list-modal__description'
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Do you wanna delete typography: ', 'gutena-kit') + (addEditTypography === null || addEditTypography === void 0 ? void 0 : addEditTypography.name)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Note: If you have assigned this typography to any block, it will lost the typography.', 'gutena-kit')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-page-list-modal-buttons"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "tertiary",
    onClick: () => closeDeletePrompt()
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cancel')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "secondary",
    onClick: () => setTypographyTab({ ...typographyTab,
      deleteTypographyConfirm: true
    }),
    isDestructive: true
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Delete'))))));
};

/* harmony default export */ __webpack_exports__["default"] = (TypographySettings);

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
    onBoxShadow = false,
    withPanel = true
  } = _ref;
  // props: onBoxShadow : variable use to hide enable box shadow toggle button
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

    if (onBoxShadow) {
      newBoxShadowAttr.onBoxShadow = true;
    }

    newBoxShadowAttr[attrName] = value;
    onChangeFunc({ ...newBoxShadowAttr
    });
  };

  const controls = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !onBoxShadow && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: toggleLabel,
    checked: attrValue.onBoxShadow,
    onChange: onBoxShadow => setBoxShadowAttr(onBoxShadow, 'onBoxShadow')
  }), (onBoxShadow || attrValue.onBoxShadow) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("legend", {
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
    panelId = 0,
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

  const controls = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalToolsPanel, {
    label: "",
    className: "gutena-kit-color-toolpanel",
    resetAll: () => onChangeFunc({}),
    panelId: panelId
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalColorGradientSettingsDropdown, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    __experimentalHasMultipleOrigins: true,
    __experimentalIsRenderedInSidebar: true,
    settings: colorSettings,
    disableCustomColors: disableCustomColors,
    enableAlpha: enableAlpha,
    panelId: panelId
  }, colorGradientSettings))));

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

/***/ "./includes/block-editor/src/components/GutenaFontSizePicker.js":
/*!**********************************************************************!*\
  !*** ./includes/block-editor/src/components/GutenaFontSizePicker.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/settings.js");
/* harmony import */ var _SelectDeviceDropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SelectDeviceDropdown */ "./includes/block-editor/src/components/SelectDeviceDropdown.js");
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/helpers */ "./includes/block-editor/src/helpers/helpers.js");


/**
 * Gutena Responsive Font Size Picker
 */









const noop = () => {};

const GutenaFontSizePicker = props => {
  const {
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Size', 'gutena-kit'),
    fontSize = undefined,
    onChangeFunc = noop,
    reponsive = false,
    setCustom = false
  } = props; //setFontAttr : if theme font selected
  //Get Device preview type

  const deviceType = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    return select("core/edit-post").__experimentalGetPreviewDeviceType();
  }, []); //Variable to check if typography use custom font size or not

  const [customSize, setCustomSize] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(setCustom || !(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_6__.gkIsEmpty)(fontSize) && 10 > fontSize.length); //Theme font size preset

  const fontSizes = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useSetting)('typography.fontSizes'); //Font size array for select

  const fonSizesArray = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_6__.gkIsEmpty)(fontSizes) ? [] : fontSizes.map(item => ({
    label: item.name,
    value: 'has-' + item.slug + '-font-size',
    fontSize: item.size
  })); //when switch theme font size to custom

  const setCustomFontSize = () => {
    if ((0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_6__.gkIsEmpty)(fontSize)) {
      setCustomSize(!customSize);
      return !customSize;
    }

    if (customSize) {
      //check if any preset is exists equivalent to custom fontSize
      let newfontSlug = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_6__.getMatchArrObjKeyValue)(fonSizesArray, 'fontSize', fontSize, 'value');

      if (newfontSlug) {
        onChangeFunc(newfontSlug);
      }
    } else {
      //if theme font size selected then it must be a string but for custom fontsize we require its value
      let newfontSize = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_6__.getMatchArrObjKeyValue)(fonSizesArray, 'value', fontSize, 'fontSize');

      if (newfontSize) {
        onChangeFunc(newfontSize);
      }
    }

    setCustomSize(!customSize);
  }; //Font size theme preset label 


  let customLabel = customSize ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Custom', 'gutena-kit') : (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_6__.getMatchArrObjKeyValue)(fonSizesArray, 'value', fontSize, 'label');
  customLabel = false === customLabel ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Default', 'gutena-kit') : '(' + customLabel + ')';
  return reponsive ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalHStack, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, label, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "components-font-size-picker__header__hint"
  }, customLabel)), customSize && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_SelectDeviceDropdown__WEBPACK_IMPORTED_MODULE_5__["default"], null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    label: customSize ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Use size preset', 'gutena-kit') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Set custom size', 'gutena-kit'),
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__["default"],
    onClick: () => setCustomFontSize(),
    isPressed: customSize,
    isSmall: true,
    iconSize: 24
  }))), customSize ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalUnitControl, {
    value: fontSize,
    onChange: value => onChangeFunc(value)
  }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    value: fontSize,
    options: fonSizesArray,
    onChange: newSize => onChangeFunc(newSize),
    __nextHasNoMarginBottom: true
  })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.FontSizePicker, {
    value: fontSize,
    onChange: value => onChangeFunc(value),
    disableCustomFontSizes: false,
    size: "__unstable-large",
    __nextHasNoMarginBottom: true
  });
};

/* harmony default export */ __webpack_exports__["default"] = (GutenaFontSizePicker);

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
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/helpers */ "./includes/block-editor/src/helpers/helpers.js");
/* harmony import */ var _gutenaIcons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gutenaIcons */ "./includes/block-editor/src/components/gutenaIcons.js");


/**
 * Select Device Type
 */






const SelectDeviceDropdown = _ref => {
  let {
    sideLabel = "",
    onChangefunc = undefined,
    deviceTypeLocal = undefined,
    labelAtLeft = false
  } = _ref;
  //Get Device preview type
  const deviceType = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    return select("core/edit-post").__experimentalGetPreviewDeviceType();
  }, []); //Local device type based on parent component

  const deviceTypeView = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_4__.gkIsEmpty)(deviceTypeLocal) ? deviceType : deviceTypeLocal; //Set Preview

  const {
    __experimentalSetPreviewDeviceType: setPreviewDeviceType
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)("core/edit-post");
  const setDeviceType = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_4__.gkIsEmpty)(onChangefunc) ? setPreviewDeviceType : onChangefunc;
  const selectedIcon = 'Desktop' === deviceTypeView ? _gutenaIcons__WEBPACK_IMPORTED_MODULE_5__.desktopIcon : 'Tablet' === deviceTypeView ? _gutenaIcons__WEBPACK_IMPORTED_MODULE_5__.tabletIcon : _gutenaIcons__WEBPACK_IMPORTED_MODULE_5__.mobileIcon;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalHStack, {
    justify: "flex-start"
  }, labelAtLeft && 1 < sideLabel.length && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, " ", sideLabel, " "), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.DropdownMenu, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select device', 'gutena-kit'),
    className: "gutena-kit-select-device",
    popoverProps: {
      className: "gutena-kit-select-device-popover"
    },
    icon: selectedIcon,
    controls: [{
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Desktop', 'gutena-kit'),
      icon: _gutenaIcons__WEBPACK_IMPORTED_MODULE_5__.desktopIcon,
      onClick: () => setDeviceType('Desktop')
    }, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tablet', 'gutena-kit'),
      icon: _gutenaIcons__WEBPACK_IMPORTED_MODULE_5__.tabletIcon,
      onClick: () => setDeviceType('Tablet')
    }, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Mobile', 'gutena-kit'),
      icon: _gutenaIcons__WEBPACK_IMPORTED_MODULE_5__.mobileIcon,
      onClick: () => setDeviceType('Mobile')
    }]
  }), !labelAtLeft && 1 < sideLabel.length && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, " ", sideLabel, " "));
};

/* harmony default export */ __webpack_exports__["default"] = (SelectDeviceDropdown);

/***/ }),

/***/ "./includes/block-editor/src/components/TypographyControl.js":
/*!*******************************************************************!*\
  !*** ./includes/block-editor/src/components/TypographyControl.js ***!
  \*******************************************************************/
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
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _GutenaFontSizePicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GutenaFontSizePicker */ "./includes/block-editor/src/components/GutenaFontSizePicker.js");
/* harmony import */ var _SelectDeviceDropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SelectDeviceDropdown */ "./includes/block-editor/src/components/SelectDeviceDropdown.js");
/* harmony import */ var _gutenaIcons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gutenaIcons */ "./includes/block-editor/src/components/gutenaIcons.js");
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/helpers */ "./includes/block-editor/src/helpers/helpers.js");



/**
 * Typography Controls
 */









const DEFAULT_TYPOGRAPHY = {
  fluidTypography: false,
  fontFamily: undefined,
  fontSize: undefined,
  TfontSize: undefined,
  MfontSize: undefined,
  fluidFontSize: undefined,
  lineHeight: undefined,
  TlineHeight: undefined,
  MlineHeight: undefined,
  fontStyle: undefined,
  fontWeight: undefined,
  letterSpacing: undefined,
  textTransform: undefined,
  textDecoration: undefined
};

const noop = () => {};

const TypographyControl = props => {
  const {
    label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography', 'gutena-kit'),
    attrValue = DEFAULT_TYPOGRAPHY,
    onChangeFunc = noop,
    hasFontSizeEnabled = true,
    hasAppearanceControl = true,
    hasLetterSpacingControl = true,
    hasLineHeightEnabled = true,
    hasFontFamilyControl = true,
    hasTextTransform = true,
    editGlobalTypography = false,
    makeFluidTypography = false,
    withPanel = true,
    resetButton = true,
    devicePreview = true,
    globalTypography = undefined
  } = props;

  const setAttr = (value, attrName) => {
    let newattrValue = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_9__.gkIsEmpty)(attrValue) ? DEFAULT_TYPOGRAPHY : attrValue;
    newattrValue[attrName] = value; //Fluid typography

    if (!(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_9__.gkIsEmpty)(newattrValue.fontSize) && (!(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_9__.gkIsEmpty)(newattrValue.MfontSize) || !(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_9__.gkIsEmpty)(newattrValue.TfontSize))) {
      newattrValue.fluidFontSize = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_9__.fluidSpacing)((0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_9__.gkIsEmpty)(newattrValue.MfontSize) ? newattrValue.TfontSize : newattrValue.MfontSize, newattrValue.fontSize);
    }

    onChangeFunc({ ...newattrValue
    });
  }; //Get Device preview type


  const deviceType = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => {
    return select("core/edit-post").__experimentalGetPreviewDeviceType();
  }, []); //If device preview not required

  const [deviceTypeNoPreview, setDeviceTypeNoPreview] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('Desktop'); //Local device type based on preview required or not 

  const deviceTypeLocal = devicePreview ? deviceType : deviceTypeNoPreview;
  const deviceChangeFunc = devicePreview ? {} : {
    deviceTypeLocal: deviceTypeLocal,
    onChangefunc: device => setDeviceTypeNoPreview(device)
  }; //Save font size and line height according to selected device, if font size is a theme preset then then responsive not require

  const fontSizeName = 'Desktop' === deviceTypeLocal || (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_9__.gkIsEmpty)(attrValue === null || attrValue === void 0 ? void 0 : attrValue.fontSize) || 10 < attrValue.fontSize.length ? 'fontSize' : 'Tablet' === deviceTypeLocal ? 'TfontSize' : 'MfontSize';
  const lineHeightName = 'Desktop' === deviceTypeLocal || false === editGlobalTypography ? 'lineHeight' : 'Tablet' === deviceTypeLocal ? 'TlineHeight' : 'MlineHeight';
  const controls = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalGrid, {
    columns: 2
  }, !(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_9__.gkIsEmpty)(globalTypography) && 0 < globalTypography.length && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "edit-site-typography-panel__full-width-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Global typography', 'gutena-kit'),
    value: attrValue === null || attrValue === void 0 ? void 0 : attrValue.globalTypography,
    options: globalTypography,
    onChange: value => onChangeFunc({ ...attrValue,
      fluidTypography: false,
      globalTypography: value,
      fontFamily: undefined,
      fontSize: undefined,
      TfontSize: undefined,
      MfontSize: undefined,
      fluidFontSize: undefined,
      lineHeight: undefined,
      TlineHeight: undefined,
      MlineHeight: undefined,
      fontStyle: undefined,
      fontWeight: undefined,
      letterSpacing: undefined,
      textTransform: undefined,
      textDecoration: undefined
    }),
    __nextHasNoMarginBottom: true
  })), hasFontFamilyControl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "edit-site-typography-panel__full-width-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalFontFamilyControl, {
    value: attrValue === null || attrValue === void 0 ? void 0 : attrValue.fontFamily,
    onChange: value => setAttr(value, 'fontFamily'),
    size: "__unstable-large",
    __nextHasNoMarginBottom: true
  })), hasFontSizeEnabled && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, !editGlobalTypography && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "edit-site-typography-panel__full-width-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_GutenaFontSizePicker__WEBPACK_IMPORTED_MODULE_6__["default"], {
    fontSize: attrValue === null || attrValue === void 0 ? void 0 : attrValue[fontSizeName],
    onChangeFunc: value => setAttr(value, fontSizeName),
    reponsive: true,
    setCustom: !(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_9__.gkIsEmpty)(attrValue === null || attrValue === void 0 ? void 0 : attrValue.fontSize) && 10 > attrValue.fontSize.length
  })), editGlobalTypography && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_SelectDeviceDropdown__WEBPACK_IMPORTED_MODULE_7__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    sideLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Font size', 'gutena-kit')
  }, deviceChangeFunc)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalUnitControl, {
    value: attrValue === null || attrValue === void 0 ? void 0 : attrValue[fontSizeName],
    onChange: value => setAttr(value, fontSizeName)
  })))), hasLineHeightEnabled && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", null, editGlobalTypography && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_SelectDeviceDropdown__WEBPACK_IMPORTED_MODULE_7__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    sideLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Line height', 'gutena-kit')
  }, deviceChangeFunc)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalInputControl, {
    label: editGlobalTypography ? '' : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Line height', 'gutena-kit'),
    type: "number",
    value: (attrValue === null || attrValue === void 0 ? void 0 : attrValue[lineHeightName]) || '',
    onChange: value => setAttr(value, lineHeightName)
  })), hasLetterSpacingControl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalLetterSpacingControl, {
    value: attrValue === null || attrValue === void 0 ? void 0 : attrValue.letterSpacing,
    onChange: value => setAttr(value, 'letterSpacing'),
    size: "__unstable-large",
    __unstableInputWidth: "auto"
  }), hasTextTransform && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalTextTransformControl, {
    value: attrValue === null || attrValue === void 0 ? void 0 : attrValue.textTransform,
    onChange: value => setAttr(value, 'textTransform')
  }), hasAppearanceControl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: editGlobalTypography ? "edit-site-typography-panel__full-width-control" : ""
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalFontAppearanceControl, {
    value: {
      fontStyle: attrValue === null || attrValue === void 0 ? void 0 : attrValue.fontStyle,
      fontWeight: attrValue === null || attrValue === void 0 ? void 0 : attrValue.fontWeight
    },
    onChange: _ref => {
      let {
        fontStyle: newFontStyle,
        fontWeight: newFontWeight
      } = _ref;
      let newattrValue = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_9__.gkIsEmpty)(attrValue) ? DEFAULT_TYPOGRAPHY : attrValue;
      newattrValue.fontStyle = newFontStyle;
      newattrValue.fontWeight = newFontWeight;
      onChangeFunc({ ...newattrValue
      });
    },
    hasFontStyles: true,
    hasFontWeights: true,
    size: "__unstable-large",
    __nextHasNoMarginBottom: true
  })), makeFluidTypography && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "edit-site-typography-panel__full-width-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalHStack, {
    className: "gutena-kit-fluid-typography-toggle-hstack"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Make it Fluid typography', 'gutena-kit'),
    checked: (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_9__.gkIsEmpty)(attrValue === null || attrValue === void 0 ? void 0 : attrValue.fluidTypography) ? false : attrValue === null || attrValue === void 0 ? void 0 : attrValue.fluidTypography,
    onChange: value => setAttr(value, 'fluidTypography')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Dropdown, {
    className: "gutena-kit-popover-help-text",
    contentClassName: "gutena-kit-popover-help-content",
    position: "bottom right",
    renderToggle: _ref2 => {
      let {
        isOpen,
        onToggle
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        variant: "link",
        onClick: onToggle,
        "aria-expanded": isOpen,
        icon: _gutenaIcons__WEBPACK_IMPORTED_MODULE_8__.questionIcon
      });
    },
    renderContent: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Create fluid typography using provided minimum and maximum font-size value', 'gutena-kit'))
  }))))), resetButton && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalHStack, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.FlexItem, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Reset typography settings', 'gutena-kit'),
    variant: "secondary",
    isSmall: true,
    disabled: (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_9__.gkIsEmpty)(props === null || props === void 0 ? void 0 : props.attrValue),
    onClick: () => onChangeFunc(undefined)
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Reset', 'gutena-kit')))));

  if (withPanel) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: label,
      initialOpen: false
    }, controls);
  }

  return controls;
};

/* harmony default export */ __webpack_exports__["default"] = (TypographyControl);

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

/***/ "./includes/block-editor/src/components/gutenaIcons.js":
/*!*************************************************************!*\
  !*** ./includes/block-editor/src/components/gutenaIcons.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addLineIcon": function() { return /* binding */ addLineIcon; },
/* harmony export */   "deleteIcon": function() { return /* binding */ deleteIcon; },
/* harmony export */   "desktopIcon": function() { return /* binding */ desktopIcon; },
/* harmony export */   "mobileIcon": function() { return /* binding */ mobileIcon; },
/* harmony export */   "questionIcon": function() { return /* binding */ questionIcon; },
/* harmony export */   "tabletIcon": function() { return /* binding */ tabletIcon; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const desktopIcon = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
  icon: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M4 16h16V5H4v11zm9 2v2h4v2H7v-2h4v-2H2.992A.998.998 0 0 1 2 16.993V4.007C2 3.451 2.455 3 2.992 3h18.016c.548 0 .992.449.992 1.007v12.986c0 .556-.455 1.007-.992 1.007H13z"
  }))
});
const tabletIcon = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
  icon: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M6 4v16h12V4H6zM5 2h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm7 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
  }))
});
const mobileIcon = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
  icon: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M7 4v16h10V4H7zM6 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm6 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
  }))
});
const addLineIcon = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
  icon: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
  }))
});
const deleteIcon = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
  icon: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z"
  }))
});
const questionIcon = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
  icon: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm2-1.645V14h-2v-1.5a1 1 0 0 1 1-1 1.5 1.5 0 1 0-1.471-1.794l-1.962-.393A3.501 3.501 0 1 1 13 13.355z"
  }))
});

/***/ }),

/***/ "./includes/block-editor/src/helpers/helpers.js":
/*!******************************************************!*\
  !*** ./includes/block-editor/src/helpers/helpers.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "borderCss": function() { return /* binding */ borderCss; },
/* harmony export */   "borderVar": function() { return /* binding */ borderVar; },
/* harmony export */   "boxShadowCss": function() { return /* binding */ boxShadowCss; },
/* harmony export */   "fluidSpacing": function() { return /* binding */ fluidSpacing; },
/* harmony export */   "generateSlug": function() { return /* binding */ generateSlug; },
/* harmony export */   "getEditorDoc": function() { return /* binding */ getEditorDoc; },
/* harmony export */   "getMatchArrObjKeyValue": function() { return /* binding */ getMatchArrObjKeyValue; },
/* harmony export */   "getParents": function() { return /* binding */ getParents; },
/* harmony export */   "gkCamelToDash": function() { return /* binding */ gkCamelToDash; },
/* harmony export */   "gkDashToCamel": function() { return /* binding */ gkDashToCamel; },
/* harmony export */   "gkIsEmpty": function() { return /* binding */ gkIsEmpty; },
/* harmony export */   "gkSearchArrObj": function() { return /* binding */ gkSearchArrObj; },
/* harmony export */   "gutenakitDocReady": function() { return /* binding */ gutenakitDocReady; },
/* harmony export */   "hasClass": function() { return /* binding */ hasClass; },
/* harmony export */   "isNumericVar": function() { return /* binding */ isNumericVar; },
/* harmony export */   "joinObjectValues": function() { return /* binding */ joinObjectValues; },
/* harmony export */   "spaceCss": function() { return /* binding */ spaceCss; },
/* harmony export */   "spaceVar": function() { return /* binding */ spaceVar; },
/* harmony export */   "toggleClass": function() { return /* binding */ toggleClass; },
/* harmony export */   "toogleStyleDisplay": function() { return /* binding */ toogleStyleDisplay; },
/* harmony export */   "typographyCss": function() { return /* binding */ typographyCss; },
/* harmony export */   "typographyVar": function() { return /* binding */ typographyVar; }
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
}; //Camel case to dash name

const gkCamelToDash = str => str.replace(/([A-Z])/g, val => `-${val.toLowerCase()}`); //Dash to camel case name

const gkDashToCamel = str => str.replace(/(\-[a-z])/g, val => val.toUpperCase().replace('-', ''));
/* search key value index in array of object
arrObj: array of object 
key: search key
value: search value
Return : index of first match or -1 on fail
*/

const gkSearchArrObj = (arrObj, key, value) => {
  if (gkIsEmpty(arrObj) || !Array.isArray(arrObj) || 0 === arrObj.length) {
    return -1;
  } //Register existing block edit controls by custom componenet 


  for (let i = 0; i < arrObj.length; i++) {
    if (arrObj[i][key] === value) {
      return i;
    }
  }

  return -1;
};
/* get value of a key of matched key value obect in array of object
arrObj: array of object 
key: search key for match
value: search value for match
findKeyValue: key whose value to be find 
Return : value of first match index object key or false on fail
e.g arrObj = [{a:'xyz',b:'pqr'},{a:'x1yz',b:'pq1r'},{a:'x2yz',b:'pq2r'}]
getMatchArrObjKeyValue(arrObj,'a','x1yz','b') will return value of b i.e. pq1r
*/

const getMatchArrObjKeyValue = (arrObj, key, value, findKeyValue) => {
  let index = gkSearchArrObj(arrObj, key, value);
  return -1 === index ? false : arrObj[index][findKeyValue];
}; //Check if empty

const gkIsEmpty = data => 'undefined' === typeof data || null === data || '' === data; //Get parent HTML elemnet

const getParents = (el, query) => {
  let parents = [];

  while (el.parentNode !== document.body) {
    el.matches(query) && parents.push(el);
    el = el.parentNode;
  }

  return parents;
}; //Slug 

const generateSlug = name => gkIsEmpty(name) ? '' : name.trim().toLowerCase().replace(/\s+/g, "-"); //Get editor document: used in responsive preview

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
}; //Generate padding|margin css var: spacing: value, varName: css var name

const spaceVar = (spacing, varName) => {
  if (gkIsEmpty(spacing)) {
    return ``;
  }

  return ['top', 'right', 'bottom', 'left'].map(side => gkIsEmpty(spacing[side]) ? '' : varName + '-' + side + ':' + spacing[side] + '; ').join(' ');
}; //Generate border css var borderVar={border:{},radius:2px}, varName = css var

const borderVar = (borderVar, varName) => {
  let css = '';

  if (!gkIsEmpty(borderVar === null || borderVar === void 0 ? void 0 : borderVar.border)) {
    let border = borderVar.border;
    css = gkIsEmpty(border.color) ? ['top', 'right', 'bottom', 'left'].map(side => {
      var _border$side, _border$side2, _border$side3, _border$side4;

      return `
            ${gkIsEmpty(border[side]) ? `` : `${varName}-${side}: ${(_border$side = border[side]) === null || _border$side === void 0 ? void 0 : _border$side.width}  ${gkIsEmpty((_border$side2 = border[side]) === null || _border$side2 === void 0 ? void 0 : _border$side2.style) ? 'solid' : (_border$side3 = border[side]) === null || _border$side3 === void 0 ? void 0 : _border$side3.style} ${(_border$side4 = border[side]) === null || _border$side4 === void 0 ? void 0 : _border$side4.color}; `}
        `;
    }).join(' ') : `${varName}: ${border === null || border === void 0 ? void 0 : border.width}  ${gkIsEmpty(border === null || border === void 0 ? void 0 : border.style) ? 'solid' : border === null || border === void 0 ? void 0 : border.style} ${border === null || border === void 0 ? void 0 : border.color}; `;
  }

  return gkIsEmpty(borderVar === null || borderVar === void 0 ? void 0 : borderVar.radius) ? css : css + ' ' + varName + '-radius:' + borderVar.radius + '; ';
}; //Generate border css

const borderCss = borderVar => {
  let css = '';

  if (!gkIsEmpty(borderVar === null || borderVar === void 0 ? void 0 : borderVar.border)) {
    let border = borderVar.border;
    css = gkIsEmpty(border.color) ? ['top', 'right', 'bottom', 'left'].map(side => {
      var _border$side5, _border$side6, _border$side7, _border$side8;

      return `
            ${gkIsEmpty(border[side]) ? `` : `border-${side}: ${(_border$side5 = border[side]) === null || _border$side5 === void 0 ? void 0 : _border$side5.width}  ${gkIsEmpty((_border$side6 = border[side]) === null || _border$side6 === void 0 ? void 0 : _border$side6.style) ? 'solid' : (_border$side7 = border[side]) === null || _border$side7 === void 0 ? void 0 : _border$side7.style} ${(_border$side8 = border[side]) === null || _border$side8 === void 0 ? void 0 : _border$side8.color} !important; `}
        `;
    }).join(' ') : `border: ${border === null || border === void 0 ? void 0 : border.width}  ${gkIsEmpty(border === null || border === void 0 ? void 0 : border.style) ? 'solid' : border === null || border === void 0 ? void 0 : border.style} ${border === null || border === void 0 ? void 0 : border.color} !important; `;
  }

  return gkIsEmpty(borderVar === null || borderVar === void 0 ? void 0 : borderVar.radius) ? css : css + ' border-radius:' + borderVar.radius + ' !important;';
}; //Generate typographyCss

const typographyCss = function (typography) {
  let varName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (gkIsEmpty(typography)) {
    return '';
  }

  let fontSize = null;
  let min_max_var = ''; //Fluid font size

  if (typography.fluidTypography && !gkIsEmpty(typography.fontSize) && (!gkIsEmpty(typography.MfontSize) || !gkIsEmpty(typography.TfontSize))) {
    let maxFontSize = typography.fontSize;
    let minFontSize = gkIsEmpty(typography.MfontSize) ? typography.TfontSize : typography.MfontSize; //All units should be in rem

    let maxUnit = maxFontSize.replace(/[0-9]/g, ''); //replace number with empty string

    let minUnit = minFontSize.replace(/[0-9]/g, '');
    maxFontSize = maxFontSize.replace(/[a-z]/g, '');
    minFontSize = minFontSize.replace(/[a-z]/g, '');
    let allowedUnit = ['px', 'em', 'rem'];

    if (-1 !== allowedUnit.indexOf(maxUnit) && -1 !== allowedUnit.indexOf(minUnit)) {
      // maxFontSize = (( 'px' === maxUnit ) ? (parseInt( maxFontSize )/16) : maxFontSize)+'rem' ;
      // minFontSize = (( 'px' === minUnit ) ? (parseInt( minFontSize )/16) : minFontSize)+'rem';
      //https://websemantics.uk/tools/responsive-font-calculator/
      //$linear_factor = 100 * ( ( $maximum_font_size['value'] - $minimum_font_size['value'] ) / ( $maximum_viewport_width['value'] - $minimum_viewport_width['value'] ) )
      // let linear_factor = ( 100 * ( parseInt(maxFontSize) - parseInt(minFontSize) )/(100-48) );
      // fontSize = 'clamp('+minFontSize+', calc('+minFontSize+' + ((1vw - 0.48rem) * '+linear_factor+')), '+maxFontSize+')';
      //Min Max var
      min_max_var = gkIsEmpty(varName) ? '' : varName + '-min-font-size:' + minFontSize + '; ' + varName + '-max-font-size:' + maxFontSize + '; ';
    }
  }

  if (typography.fluidTypography && !gkIsEmpty(typography.fluidFontSize)) {
    fontSize = typography.fluidFontSize;
  }

  varName = gkIsEmpty(varName) ? '' : varName + '-'; //font properties

  return ['fontFamily', 'fontSize', 'lineHeight', 'fontStyle', 'fontWeight', 'letterSpacing', 'textTransform', 'textDecoration'].map(fontProperty => {
    if ('fontSize' === fontProperty && !gkIsEmpty(fontSize)) {
      //Fluid typography
      return min_max_var + ' ' + varName + 'font-size:' + fontSize + ';';
    } else if ('fontSize' === fontProperty && !gkIsEmpty(typography === null || typography === void 0 ? void 0 : typography.fontSize) && 10 < typography.fontSize.length) {
      //font size use theme font-size preset here which will use as a class
      return '';
    } else {
      return gkIsEmpty(typography === null || typography === void 0 ? void 0 : typography[fontProperty]) ? '' : varName + gkCamelToDash(fontProperty) + ':' + typography[fontProperty] + ';';
    }
  }).join(' ');
}; //Generate typographyCss

const typographyVar = function (typography) {
  let varName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (gkIsEmpty(typography)) {
    return '';
  }

  let fontSize = null;
  let css = ''; //Fluid font size

  if (!gkIsEmpty(varName) && typography.fluidTypography && !gkIsEmpty(typography.fontSize) && (!gkIsEmpty(typography.MfontSize) || !gkIsEmpty(typography.TfontSize))) {
    let maxFontSize = typography.fontSize;
    let minFontSize = gkIsEmpty(typography.MfontSize) ? typography.TfontSize : typography.MfontSize; //All units should be in rem

    let maxUnit = maxFontSize.replace(/[0-9]/g, ''); //replace number with empty string

    let minUnit = minFontSize.replace(/[0-9]/g, '');
    maxFontSize = maxFontSize.replace(/[a-z]/g, '');
    minFontSize = minFontSize.replace(/[a-z]/g, '');
    let allowedUnit = ['px', 'em', 'rem'];

    if (-1 !== allowedUnit.indexOf(maxUnit) && -1 !== allowedUnit.indexOf(minUnit)) {
      maxFontSize = ('px' === maxUnit ? parseInt(maxFontSize) / 16 : maxFontSize) + 'rem';
      minFontSize = ('px' === minUnit ? parseInt(minFontSize) / 16 : minFontSize) + 'rem'; //Min Max var

      css += varName + '-min-font-size:' + minFontSize + '; ' + varName + '-max-font-size:' + maxFontSize + '; ';
    }
  }

  if (typography.fluidTypography && !gkIsEmpty(typography.fluidFontSize)) {
    fontSize = typography.fluidFontSize;
  } else {
    css += gkIsEmpty(typography.MfontSize) ? '' : varName + '-m-font-size:' + typography.MfontSize + '; ';
    css += gkIsEmpty(typography.TfontSize) ? '' : varName + '-t-font-size:' + typography.TfontSize + '; ';
    css += gkIsEmpty(typography.MlineHeight) ? '' : varName + '-m-line-height:' + typography.MlineHeight + '; ';
    css += gkIsEmpty(typography.TlineHeight) ? '' : varName + '-t-line-height:' + typography.TlineHeight + '; ';
  } //font properties


  css += ['fontFamily', 'fontSize', 'lineHeight', 'fontStyle', 'fontWeight', 'letterSpacing', 'textTransform', 'textDecoration'].map(fontProperty => {
    if ('fontSize' === fontProperty && !gkIsEmpty(fontSize)) {
      //Fluid typography
      return varName + '-font-size:' + fontSize + ';';
    } else if ('fontSize' === fontProperty && !gkIsEmpty(typography === null || typography === void 0 ? void 0 : typography.fontSize) && 10 < typography.fontSize.length) {
      //font size use theme font-size preset here which will use as a class
      return '';
    } else {
      return gkIsEmpty(typography === null || typography === void 0 ? void 0 : typography[fontProperty]) ? '' : varName + '-' + gkCamelToDash(fontProperty) + ':' + typography[fontProperty] + ';';
    }
  }).join(' ');
  return css;
};
const fluidSpacing = (min, max) => {
  let spacing = '';

  if (!gkIsEmpty(min) && !gkIsEmpty(max)) {
    //All units should be in rem
    let maxUnit = max.replace(/[0-9]/g, ''); //replace number with empty string

    let minUnit = min.replace(/[0-9]/g, ''); //replace decimal with empty string

    maxUnit = maxUnit.replace('.', '');
    minUnit = minUnit.replace('.', '');
    max = max.replace(/[a-z]/g, '');
    min = min.replace(/[a-z]/g, '');
    let allowedUnit = ['px', 'em', 'rem'];

    if (-1 !== allowedUnit.indexOf(maxUnit) && -1 !== allowedUnit.indexOf(minUnit)) {
      max = ('px' === maxUnit ? parseInt(max) / 16 : max) + 'rem';
      min = ('px' === minUnit ? parseInt(min) / 16 : min) + 'rem'; //https://websemantics.uk/tools/responsive-font-calculator/
      //$linear_factor = 100 * ( ( $maximum_font_size['value'] - $minimum_font_size['value'] ) / ( $maximum_viewport_width['value'] - $minimum_viewport_width['value'] ) )

      let linear_factor = (100 * (parseInt(max) - parseInt(min)) / (100 - 48)).toFixed(2);
      spacing = 'clamp(' + min + ', calc(' + min + ' + ((1vw - 0.48rem) * ' + linear_factor + ')), ' + max + ')';
    }
  }

  return spacing;
};
/**
 * 
 * @param {*} obj 
 * @returns string: joined values of object
 */

const joinObjectValues = obj => {
  if (gkIsEmpty(obj)) {
    return '';
  }

  let joinedValues = '';
  Object.values(obj).forEach(function (val) {
    if (!gkIsEmpty(val) && 'string' === typeof val) {
      joinedValues += val;
    }
  });
  return joinedValues;
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

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["primitives"];

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
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mediaTextBlockEdit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mediaTextBlockEdit */ "./includes/block-editor/src/mediaTextBlockEdit.js");
/* harmony import */ var _GutenaKitSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GutenaKitSettings */ "./includes/block-editor/src/GutenaKitSettings.js");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers/helpers */ "./includes/block-editor/src/helpers/helpers.js");



/****** Info : START ****
 This File is used to add controls in existing blocks and register new blocks
 
 Set Required Attributes for edit existing blocks inside block_settings_setup method in gutena_kit_public class 
 
 ****** Info : END ***/






/*************************************
 Add controls in existing blocks
 **************************************/
//Block edit modified componenet 

const editBlocksComponents = {
  "media-text-block": _mediaTextBlockEdit__WEBPACK_IMPORTED_MODULE_4__.gutenaKitEditMediaTextBlock,
  "common-block": _GutenaKitSettings__WEBPACK_IMPORTED_MODULE_5__.GutenaKitSettings
}; //Register existing block edit controls by custom componenet 

Object.keys(editBlocksComponents).forEach(blockSlug => {
  console.log("blockSlug", blockSlug);
  (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.addFilter)('editor.BlockEdit', 'gutena-kit/edit-' + blockSlug, editBlocksComponents[blockSlug]);
});
/********************************************************************
 Add classes in editor without saving as main classname attributes
********************************************************************/

const withGutenaKitClassName = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__.createHigherOrderComponent)(BlockListBlock => {
  return props => {
    const {
      gutenaKitClass = {}
    } = props.attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockListBlock, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      className: (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_7__.joinObjectValues)(gutenaKitClass)
    }));
  };
}, 'withGutenaKitClassName');
wp.hooks.addFilter('editor.BlockListBlock', 'my-plugin/with-client-id-class-name', withGutenaKitClassName);
}();
/******/ })()
;
//# sourceMappingURL=index.js.map