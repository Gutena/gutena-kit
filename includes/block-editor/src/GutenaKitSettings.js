//Common Text Block : Add gap controls between media and text
import { __ } from '@wordpress/i18n';
import { createHigherOrderComponent } from  '@wordpress/compose';
import {  useSelect } from "@wordpress/data";
import { store as blocksStore } from '@wordpress/blocks';
import { Fragment } from  '@wordpress/element';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import {  PanelBody, 
    __experimentalHStack as HStack,
    FlexItem,
    __experimentalBoxControl as BoxControl,
    ToggleControl,
    Button,
    Icon,
} from  '@wordpress/components';
import SelectDeviceDropdown from './components/SelectDeviceDropdown';
import  RangeControlUnit  from './components/RangeControlUnit';
import BorderGroup from './components/BorderGroup';
import EventsControl from './components/EventsControl';
import TypographySettings from './Supports/Typography/TypographySettings';
import { gkIsEmpty, spaceCss, spaceVar, borderCss, borderVar, boxShadowCss, typographyCss, typographyVar, gkCamelToDash, getEditorDoc, gkCssJson, renderBlockCSSForResponsive } from './helpers/helpers';

//https://make.wordpress.org/core/2019/04/09/the-block-editor-javascript-module-in-5-2/
 
//Edit Function
export const GutenaKitSettings = createHigherOrderComponent( ( BlockEdit ) => {

    return ( props ) => {
        const {
			name,
			attributes,
			setAttributes,
			isSelected,
            clientId,
		} = props;

        if( -1 === [ 'core/group', 'core/cover', 'core/column', 'core/paragraph', 'core/heading' ].indexOf( name ) ){
            return ( <BlockEdit { ...props } /> );
        }
        
        //Show or hide controls in gutena kit settings
        const gkSupports = {
            color:( -1 === [ 'core/cover' ].indexOf( name ) ),
            overlay:( -1 !== [ 'core/group', 'core/column' ].indexOf( name ) ),
            spacing:true,
            border:( -1 !== [ 'core/group', 'core/column' ].indexOf( name ) ),
            boxShadow:( -1 === [ 'core/cover' ].indexOf( name ) ),
            display:true,
            typography:( -1 !== [ 'core/paragraph', 'core/heading' ].indexOf( name ) )
        };
        /***** Check Core support for block : start ******/
        /**
         * https://developer.wordpress.org/block-editor/reference-guides/data/data-core-blocks/#getblocktype
         */
        const { supports={}  } = useSelect(
            ( select ) =>
                select( blocksStore ).getBlockType( name, '' ),
            []
        );
        

        //Allowed margin sides
        const marginSides =  ( gkIsEmpty( supports?.spacing?.margin ) || !Array.isArray( supports.spacing.margin )  ) ? ['top','right','bottom','left'] : supports.spacing.margin;
       
        //Allowed padding sides
        const paddingSides =  ( gkIsEmpty( supports?.spacing?.padding ) || !Array.isArray( supports.spacing.padding )  ) ? ['top','right','bottom','left'] : supports.spacing.padding;

        /***** Check Core support for block : end ******/

        //Default sides
        let DefaultStyle = attributes.style;

        if ( !gkIsEmpty( DefaultStyle ) ) {
            DefaultStyle = {
                ...DefaultStyle,
                border:{
                    normal:{
                        border:attributes.style?.border,
                        radius:attributes.style?.border?.radius
                    }
                },
                spacing:{
                    padding:{
                        default:attributes.style?.spacing?.padding
                    },
                    margin:{
                        default:attributes.style?.spacing?.margin
                    }
                }
            }
        }else{
            DefaultStyle = {};
        }

        const { 
            gutenaKitID,
            gutenaKitCSS,
            gutenaKitClass={},
            gutenaKitStyle=DefaultStyle, 
            style={},
        } = attributes;

         //Get Device preview type
        const deviceType = useSelect((select) => {
            return select("core/edit-post").__experimentalGetPreviewDeviceType();
            }, []);
        
        //Style name based on device type
        const styleName = ( 'Desktop' === deviceType ) ? 'default' : ( ( 'Tablet' === deviceType ) ? 'tablet' : 'mobile' ) ;
       
        const gutenaKitIcon = () => (
            <Icon
                icon={ () => (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.22391 11.3335H0.00208904L11.3348 0.000746265V4.18958L4.22391 11.3335Z" fill="#0DA88C"/>
                    <path d="M19.7791 11.3325H24.001L12.6682 -0.000230298V4.18861L19.7791 11.3325Z" fill="#0DA88C"/>
                    <path d="M4.22184 12.6655H1.3843e-05L11.3328 23.9983V19.8094L4.22184 12.6655Z" fill="#0DA88C"/>
                    <path d="M19.7772 12.6675H23.999L12.6663 24.0002V19.8114L19.7772 12.6675Z" fill="#0DA88C"/>
                    <rect width="8.81436" height="2.60358" transform="matrix(1 0 0 -1 11.9625 15.2695)" fill="#0DA88C"/>
                    </svg>
                ) }
            />
        );
        

        //Generate css 
        const generateCss = ( styleVar = gutenaKitStyle, id = '#block-'+clientId ) => {
            
            let css = '';
            let cssHover = '';
            let cssLink = '';
            let cssLinkHover = '';
            let cssBefore = '';
            let cssHoverBefore = '';
            let cssTablet = '';
            let cssMobile = '';
        
            if ( gkIsEmpty( styleVar ) ) {
                return css;
            }
        
            //Spacing Css 
            if ( ! gkIsEmpty( styleVar?.spacing?.padding ) || ! gkIsEmpty( styleVar?.spacing?.margin )  ) {
                //Spacing variables
                [ 'padding', 'margin' ].forEach( ( spaceName ) => {
                    //Check if exists
                    if ( ! gkIsEmpty( styleVar?.spacing?.[spaceName] ) ) {
                        //Responsive styles
                        ['default', 'tablet', 'mobile'].forEach( ( deviceName ) => {
                            //Check if exists
                            if ( ! gkIsEmpty( styleVar?.spacing?.[spaceName]?.[deviceName] ) ) {
                                //gettings css
                                let spacing = spaceCss( styleVar?.spacing?.[spaceName]?.[deviceName], spaceName );
                                if ( 'default' === deviceName ) {
                                    css += spacing;
                                }else if ( 'tablet' === deviceName ) {
                                    cssTablet += spacing;
                                }else{
                                    cssMobile += spacing;
                                }
                            }
                        });
                    }
                } );
            }
        
           
            //color normal
            if ( ! gkIsEmpty( styleVar?.color?.normal ) ) {
                // Text Color
                css += gkIsEmpty( styleVar.color.normal?.text ) ? '' : ' color:'+styleVar.color.normal.text+' !important;';
        
                // Background Color
                css += gkIsEmpty( styleVar.color.normal?.background ) ? '' : ' background:'+styleVar.color.normal.background+' !important;';
        
                // Link Color
                cssLink += gkIsEmpty( styleVar.color.normal?.link ) ? '' : ' color:'+styleVar.color.normal.link+' !important;';
            }
        
            //color hover
            if ( ! gkIsEmpty( styleVar?.color?.hover ) ) {
                // Text Color
                cssHover += gkIsEmpty( styleVar.color.hover?.text ) ? '' : ' color:'+styleVar.color.hover.text+' !important;';
        
                // Background Color
                cssHover += gkIsEmpty( styleVar.color.hover?.background ) ? '' : ' background:'+styleVar.color.hover.background+' !important;';
        
                // Link Color
                cssLinkHover += gkIsEmpty( styleVar.color.hover?.link ) ? '' : ' color:'+styleVar.color.hover.link+' !important;';
            }
        
            //Pseudo CSS before : Overlay
            if ( ! gkIsEmpty( styleVar?.overlay ) ) {
                css += 'position: relative;';
        
                //Overlay color
                if ( styleVar?.overlay?.normal?.color ) {
                    cssBefore += ` 
                    content:'';
                    background:${styleVar.overlay.normal.color} !important; 
                    opacity: ${ gkIsEmpty( styleVar.overlay?.normal?.opacity ) ? '80': styleVar.overlay.normal.opacity }% !important ;
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    `;
                }
        
                //Hover : Overlay
                if ( styleVar?.overlay?.hover?.color ) {
                    cssHoverBefore += ` 
                    content:'';
                    background:${styleVar.overlay.hover.color} !important; 
                    opacity: ${ gkIsEmpty( styleVar.overlay?.hover?.opacity ) ? '80': styleVar.overlay.hover.opacity }% !important ;
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    `;
                }
            }
            
            //Border
            css += borderCss( styleVar?.border?.normal );
            cssHover += borderCss( styleVar?.border?.hover );
        
            //box shadow
            css += boxShadowCss( styleVar?.boxShadow?.normal );
            //box hover shadow
            cssHover += boxShadowCss( styleVar?.boxShadow?.hover );
        
            //Typography
            css += typographyCss( styleVar?.typography );
        
            //responsive typography stored in style variable only due to most of its variable same across all device
            let typography = typographyCss( styleVar?.typography );
            let fluidTypograph = false;
            if( -1 == typography.indexOf('font-size:clamp') ){
                fluidTypograph = true;
            }
        
            //Font size and line height. leave font size if fluidTypograph true
            let device = ( 'Tstyle' === style ) ? 'T': 'M';
            css += [ 'fontSize', 'lineHeight' ].map( ( fontProperty ) => ( 'fontSize' === fontProperty && fluidTypograph) ? '' : ( 
                gkIsEmpty( styleVar?.typography?.[ device+''+fontProperty ] ) ? '': gkCamelToDash( fontProperty )+':' + styleVar.typography[device+''+fontProperty]+';'
                )
            ).join(' ');
            
            //if hide in device then do not generate any other css
            //Responsive styles
            if ( ! gkIsEmpty( styleVar?.hideDisplay ) ) {
                ['default', 'tablet', 'mobile'].forEach( ( deviceName ) => {
                    if ( ! gkIsEmpty( styleVar?.hideDisplay?.[ deviceName ] ) && true === styleVar?.hideDisplay?.[ deviceName ] ) {
                        if ( 'default' === deviceName ) {
                            css += ' display:none; ';
                        }else if ( 'tablet' === deviceName ) {
                            cssTablet = ' display:none; ';
                        }else{
                            cssMobile = ' display:none; ';
                        }
                    }
                });
                
            }
            
            //Normal Css 
            css = ( 9 < css.length ) ? ' '+id+'{'+css+'} ':'';
        
            //Before pseudo css: Overlay Css 
            css += ( 9 < cssBefore.length ) ? ' '+id+':before{'+cssBefore+'} ' : '';
        
            //Hover before pseudo css: Overlay Css
            css += ( 9 < cssHoverBefore.length ) ? ' '+id+':hover:before{'+cssHoverBefore+'} ' : '';
        
            //Hover Css
            css += ( 9 < cssHover.length ) ? ' '+id+':hover{'+cssHover+'} ':'';
            
            //Link css
            css += ( 9 < cssLink.length ) ? ' '+id+' a {'+cssLink+'} ':'';
        
            //Link hover css
            css += ( 9 < cssLinkHover.length ) ? ' '+id+' a:hover {'+cssLinkHover+'} ':'';
        
            css += ( 9 < cssTablet.length ) ? ' @media only screen and (min-width: 768px) and (max-width: 1080px) { '+id+'{'+cssTablet+'} }':'';
        
            css += ( 9 < cssMobile.length ) ? ' @media only screen and (min-width: 768px) and (max-width: 1080px) { '+id+'{'+cssMobile+'} }':'';
            
            return css;
        }

        const generateCssFromVar = ( styleVar = gutenaKitStyle, id = '#block-'+clientId ) => {
           let cssJson = generateCssVar( styleVar = gutenaKitStyle, id = '#block-'+clientId, true  );
           //console.log("json",cssJson);
           //global typography flag
		   let global_typography = '';
           if ( ! gkIsEmpty( styleVar?.globalTypography ) && ! gkIsEmpty( gutena_kit_block_editor?.globalTypography ) && ! gkIsEmpty( gutena_kit_block_editor?.globalTypography?.[styleVar.globalTypography]?.['cssJson'] ) ) {
                //slug
                global_typography = styleVar.globalTypography;
           }

           //Media size
           let media_query_tab = gkIsEmpty( gutena_kit_block_editor?.media_query_tab ) ?'1080px': gutena_kit_block_editor.media_query_tab;
           let media_query_mobile = gkIsEmpty( gutena_kit_block_editor?.media_query_mobile ) ?'767px': gutena_kit_block_editor.media_query_mobile;

           let css = id+' {';
           //spacing 
           [ 'padding', 'margin' ].forEach( ( spaceName ) => {
                [ 'top', 'right', 'bottom', 'left' ].forEach( ( position ) => {
                    if ( ! gkIsEmpty( cssJson?.['--gutenakit--default-'+spaceName+'-'+position] ) ) {
                        css += spaceName+'-'+position+':'+cssJson['--gutenakit--default-'+spaceName+'-'+position]+' !important;';
                    }
                });
           });

           // Text color
            if ( ! gkIsEmpty( cssJson?.['--gutenakit--color-normal-text'] ) ) {
                css += ' color:'+cssJson['--gutenakit--color-normal-text'] +' !important;';
            }

            // Background color
            if ( ! gkIsEmpty( cssJson?.['--gutenakit--color-normal-background'] ) ) {
                css += ' background-color:'+cssJson['--gutenakit--color-normal-background'] +' !important;';
            }

            // Border
            if ( ! gkIsEmpty( cssJson?.['--gutenakit--border-normal'] ) ) {
                css += ' border:'+cssJson['--gutenakit--border-normal'] +' !important;';
            } else {
                [ 'top', 'right', 'bottom', 'left' ].forEach( ( position ) => {
                    if ( ! gkIsEmpty( cssJson?.['--gutenakit--border-normal-'+position] ) ) {
                        css += ' border-'+position+':'+cssJson['--gutenakit--border-normal-'+position] +' !important;';
                    }
                });
            }

            // Border radius
            if ( ! gkIsEmpty( cssJson?.['--gutenakit--border-normal-radius'] ) ) {
                css += ' border-radius:'+cssJson['--gutenakit--border-normal-radius'] +' !important;';
            }

            // Box Shadow
            if ( ! gkIsEmpty( cssJson?.['--gutenakit--boxshadow-normal'] ) ) {
                css += 'box-shadow:'+cssJson['--gutenakit--boxshadow-normal'] +' !important;';
            }

            // Overlay parent
            if ( ! gkIsEmpty( cssJson?.['--gutenakit--overlay-normal-background'] ) || ! gkIsEmpty( cssJson?.['--gutenakit--overlay-hover-background'] ) ) {
                css += ' position: relative;';
            }

            //typography
            if ( gkIsEmpty( global_typography ) ) {
                [ 'font-size', 'line-height', 'font-family', 'font-style', 'font-weight', 'letter-spacing', 'text-transfor', 'text-decoration' ].forEach( ( font_property ) => {
                    if ( ! gkIsEmpty( cssJson?.['--gutenakit--'+font_property] ) ) {
                        css += ' '+font_property+':'+cssJson['--gutenakit--'+font_property] +' !important;';
                    }
                });
            } 

            //Hide in desktop
            if ( ! gkIsEmpty( cssJson?.['--gutenakit--display-default'] ) ) {
                css += ' display: '+cssJson['--gutenakit--display-default']+';';
            }
            
            css += ' }';

            /************************
             Block hover : START
            **************************/
            css += id+':hover {';

            // Text color
            if ( ! gkIsEmpty( cssJson?.['--gutenakit--color-hover-text'] ) ) {
                css += ' color:'+cssJson['--gutenakit--color-hover-text'] +' !important;';
            }

            // Background color
            if ( ! gkIsEmpty( cssJson?.['--gutenakit--color-hover-background'] ) ) {
                css += ' background-color:'+cssJson['--gutenakit--color-hover-background'] +' !important;';
            }

            // Border
            if ( ! gkIsEmpty( cssJson?.['--gutenakit--border-hover'] ) ) {
                css += ' border:'+cssJson['--gutenakit--border-hover'] +' !important;';
            } else {
                [ 'top', 'right', 'bottom', 'left' ].forEach( ( position ) => {
                    if ( ! gkIsEmpty( cssJson?.['--gutenakit--border-hover-'+position] ) ) {
                        css += ' border-'+position+':'+cssJson['--gutenakit--border-hover-'+position] +' !important;';
                    }
                });
            }

            // Border radius
            if ( ! gkIsEmpty( cssJson?.['--gutenakit--border-hover-radius'] ) ) {
                css += ' border-radius:'+cssJson['--gutenakit--border-hover-radius'] +' !important;';
            }

            // Box Shadow
            if ( ! gkIsEmpty( cssJson?.['--gutenakit--boxshadow-hover'] ) ) {
                css += 'box-shadow:'+cssJson['--gutenakit--boxshadow-hover'] +' !important;';
            }

            css += ' }';
            /************************
             Block hover : END
            **************************/

            // Link color
            if ( ! gkIsEmpty( cssJson?.['--gutenakit--color-normal-link'] ) ) {
                css += id+' a { color:'+cssJson['--gutenakit--color-normal-link'] +' !important; }';
            }

            // Link hover color
            if ( ! gkIsEmpty( cssJson?.['--gutenakit--color-hover-link'] ) ) {
                css += id+' a:hover { color:'+cssJson['--gutenakit--color-hover-link'] +' !important; }';
            }

            // overlay color
            if ( ! gkIsEmpty( cssJson?.['--gutenakit--overlay-normal-background'] ) && ! gkIsEmpty( cssJson?.['--gutenakit--overlay-normal-opacity'] ) ) {
                css += id+`:before {
                    content:"";
                    background-color:${ cssJson['--gutenakit--overlay-normal-background']}; 
                    opacity: ${cssJson['--gutenakit--overlay-normal-opacity']};
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                }`;
            }

            // overlay color
            if ( ! gkIsEmpty( cssJson?.['--gutenakit--overlay-hover-background'] ) && ! gkIsEmpty( cssJson?.['--gutenakit--overlay-hover-opacity'] ) ) {
                css += id+`:hover:before {
                    content:"";
                    background-color:${cssJson['--gutenakit--overlay-hover-background']}; 
                    opacity: ${cssJson['--gutenakit--overlay-hover-opacity']};
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                }`;
            }

            /************************
             Block Tablet : START
            **************************/
                css += '@media only screen and (min-width: 768px) and (max-width: '+media_query_tab+') { '+id+' {';

                //Hide in Tablet
                if ( ! gkIsEmpty( cssJson?.['--gutenakit--display-tablet'] ) ) {
                    css += ' display: '+cssJson['--gutenakit--display-tablet']+';';
                } else {

                    //spacing
                    [ 'padding', 'margin' ].forEach( ( spaceName ) => {
                        [ 'top', 'right', 'bottom', 'left' ].forEach( ( position ) => {
                            if ( ! gkIsEmpty( cssJson?.['--gutenakit--tablet-'+spaceName+'-'+position] ) ) {
                                css += spaceName+'-'+position+':'+cssJson['--gutenakit--tablet-'+spaceName+'-'+position]+' !important;';
                            }
                        });
                   });
                    
                    if ( gkIsEmpty( global_typography ) ) {
                        //typography
                        [ 'font-size', 'line-height' ].forEach( ( font_property ) => {
                            if ( ! gkIsEmpty( cssJson?.['--gutenakit--t-'+font_property] ) ) {
                                css += ' '+font_property+':'+cssJson['--gutenakit--t-'+font_property] +' !important;';
                            }
                        });
                    }

                }

                //gutena kit settings end
                css += '} }';
            /************************
             Block Tablet : END
            **************************/

            /************************
             Block Mobile : START
            **************************/
            css += '@media only screen and (max-width: '+media_query_mobile +') { '+id+' {';

                //Hide in Mobile
                if ( ! gkIsEmpty( cssJson?.['--gutenakit--display-mobile'] ) ) {
                    css += ' display: '+cssJson['--gutenakit--display-mobile']+';';
                } else {

                    //spacing
                    [ 'padding', 'margin' ].forEach( ( spaceName ) => {
                        [ 'top', 'right', 'bottom', 'left' ].forEach( ( position ) => {
                            if ( ! gkIsEmpty( cssJson?.['--gutenakit--mobile-'+spaceName+'-'+position] ) ) {
                                css += spaceName+'-'+position+':'+cssJson['--gutenakit--mobile-'+spaceName+'-'+position]+' !important;';
                            }
                        });
                   });
                    
                    if ( gkIsEmpty( global_typography ) ) {
                        //typography
                        [ 'font-size', 'line-height' ].forEach( ( font_property ) => {
                            if ( ! gkIsEmpty( cssJson?.['--gutenakit--m-'+font_property] ) ) {
                                css += ' '+font_property+':'+cssJson['--gutenakit--m-'+font_property] +' !important;';
                            }
                        });
                    }

                }

                //gutena kit settings end
                css += '} }';
            /************************
             Block Mobile : END
            **************************/

            return css;

        }

        //generate Css var
        const generateCssVar = ( styleVar = gutenaKitStyle, id = '#block-'+clientId, requireJson = false ) => {
            
            let cssVar = '';
        
            if ( gkIsEmpty( styleVar ) ) {
                return '';
            }
        
            let varName = '--gutenakit-';
        
            //spacing: padding and margin
            if ( ! gkIsEmpty( styleVar?.spacing ) ) {
                [ 'padding', 'margin' ].forEach( ( spaceName ) => {
                    if ( ! gkIsEmpty( styleVar.spacing[ spaceName ] ) ) {
                        //Responsive styles
                        ['default', 'tablet', 'mobile'].forEach( ( deviceName ) => {
                            if ( ! gkIsEmpty( styleVar.spacing[ spaceName ]?.[deviceName] ) ) {
                                cssVar += spaceVar( styleVar.spacing[ spaceName ][deviceName], varName+'-'+deviceName+'-'+spaceName ) ;
                            }
                        });
                        
                    }
                } );
            }
        
           
            [ 'color', 'overlay', 'border', 'boxShadow' ].forEach( ( cssProperty ) => {
                [ 'normal', 'hover' ].forEach( ( eventName ) => {
                    if ( ! gkIsEmpty( styleVar?.[ cssProperty ]?.[ eventName ] ) ) {
                        let newVarName = varName+'-'+cssProperty.toLowerCase()+'-'+eventName;
                        // Color
                        if ( 'color' === cssProperty ) {
                            [ 'text', 'background', 'link' ].forEach( ( colorName ) => {
                                if ( ! gkIsEmpty( styleVar[ cssProperty ][ eventName ][ colorName ] ) ) {
        
                                    cssVar += newVarName+'-'+colorName+':'+styleVar[ cssProperty ][ eventName ][ colorName ]+';' ;
                                }
                            } );
                        }
        
                        // Overlay 
                        if ( 'overlay' === cssProperty && ! gkIsEmpty( styleVar[ cssProperty ][ eventName ].color ) ) {
                            
                            //color
                            cssVar += newVarName+'-background:'+styleVar[ cssProperty ][ eventName ].color+';';
        
                            //opacity
                            cssVar += newVarName+'-opacity:'+(gkIsEmpty( styleVar[ cssProperty ][ eventName ]?.opacity ) ? '80%;' : styleVar[ cssProperty ][ eventName ].opacity+'%;');
                            
                        }
        
                        // Border
                        if ( 'border' === cssProperty ) {
                            cssVar += borderVar( styleVar[ cssProperty ][ eventName ] , newVarName);
                        }
                        
                        // Box shadow
                        if ( 'boxShadow' === cssProperty ) {
                            cssVar += newVarName+':'+boxShadowCss( styleVar[ cssProperty ][ eventName ] , false)+';';
                        }
                    }
                } );
            });

            //Typography
            cssVar += typographyVar( styleVar?.typography, varName );

            //display none for other devices
            if ( ! gkIsEmpty( styleVar?.hideDisplay ) ) {
                ['default', 'tablet', 'mobile'].forEach( ( deviceName ) => {
                    if ( ! gkIsEmpty( styleVar.hideDisplay?.[deviceName] ) && true === styleVar.hideDisplay?.[deviceName] ) {
                        cssVar += varName+'-display-'+deviceName+':none;';
                    }
                });
            }

            if ( 10 > cssVar.length ) {
                return '';
            }
            
            return requireJson ? gkCssJson( cssVar ) : ' '+id+'{'+cssVar+'} ' ;
        
        }

        //minimal classes
        const generateClassesMinimal = ( styleVar = gutenaKitStyle ) => {

            if ( gkIsEmpty( styleVar ) ) {
                return false;
            }
        
            let cssClass = [];
        
            let classPre = 'has-gutenakit';

            if ( ! gkIsEmpty( styleVar?.typography?.fontSize ) && 10 <  styleVar.typography.fontSize.length ) {
                cssClass.push( styleVar.typography.fontSize );
            } else if ( ! gkIsEmpty( styleVar?.globalTypography ) ) {
                //Global typography
                cssClass.push( classPre+'-gt-'+styleVar.globalTypography );
            }
            //console.log("cssClass",cssClass);
            return cssClass.join(' ');
        }

        //detailed classes
        const generateClasses = ( styleVar = gutenaKitStyle ) => {

            if ( gkIsEmpty( styleVar ) ) {
                return false;
            }
        
            let cssClass = [];
        
            let classPre = 'has-gutenakit';
        
            //spacing: padding and margin
            if ( ! gkIsEmpty( styleVar?.spacing ) ) {
                
            }
            //spacing: padding and margin
            if ( ! gkIsEmpty( styleVar?.spacing ) ) {
                [ 'padding', 'margin' ].forEach( ( spaceName ) => {
                    if ( ! gkIsEmpty( styleVar.spacing[ spaceName ] ) ) {
                        //Responsive styles
                        ['default', 'tablet', 'mobile'].forEach( ( deviceName ) => {
                            if ( ! gkIsEmpty( styleVar.spacing[ spaceName ]?.[deviceName] ) ) {
                                cssClass.push( classPre+'-'+spaceName+'-'+deviceName );
                            }
                        });
                        
                    }
                } );
            }
        
            [ 'color', 'overlay', 'border', 'boxShadow' ].forEach( ( cssProperty ) => {
                [ 'normal', 'hover' ].forEach( ( eventName ) => {
                    if ( ! gkIsEmpty( styleVar?.[ cssProperty ]?.[ eventName ] ) ) {
                        cssClass.push( classPre+'-'+cssProperty.toLowerCase()+'-'+eventName );
                        //color link class
                        if ( 'color' === cssProperty && ! gkIsEmpty( styleVar?.[ cssProperty ]?.[ eventName ]?.['link'] ) ) {
                            cssClass.push( classPre+'-'+cssProperty.toLowerCase()+'-'+eventName+'-link' );
                        }
                    }
                });
            });
         
            //display none for other devices
            if ( ! gkIsEmpty( styleVar?.hideDisplay ) ) {
                ['default', 'tablet', 'mobile'].forEach( ( deviceName ) => {
                    if ( ! gkIsEmpty( styleVar.hideDisplay?.[deviceName] ) && true === styleVar.hideDisplay?.[deviceName] ) {
                        cssClass.push( classPre+'-hide-in-'+deviceName );
                    }
                });
            }
        
            if ( ! gkIsEmpty( styleVar?.typography ) ) {
                
                //Check if any typography used
                let isTypography = false;
                let typographyClass = '';
                ['fontFamily', 'fontSize', 'lineHeight', 'fontStyle', 'fontWeight', 'letterSpacing', 'textTransform', 'textDecoration' ].forEach( ( tproperty ) => {
                    //check if font-size-preset used
                    if ( 'fontSize' === tproperty && ! gkIsEmpty( styleVar.typography?.fontSize ) && 10 <  styleVar.typography.fontSize.length ) {
                        cssClass.push( styleVar.typography.fontSize )
                    } else if ( !gkIsEmpty( styleVar.typography?.[tproperty] ) ) {
                        isTypography = true;
                        return;
                    }
                });
                //default
                typographyClass += ( isTypography )? '-d':'';

                //has fluid typography
                if ( ! gkIsEmpty( styleVar.typography?.fluidTypography ) && ( true === styleVar.typography.fluidTypography || '1' == styleVar.typography.fluidTypography ) ) {
                    cssClass.push( 'has-gutenakit-f-typography' );

                    //tablet
                    typographyClass += ( ! gkIsEmpty( styleVar.typography?.TlineHeight ) )? '-t': '';
                    
                    //mobile
                    typographyClass += ( ! gkIsEmpty( styleVar.typography?.MlineHeight ) )? '-m': '';
                }else{
                    //tablet
                    typographyClass += ( ! gkIsEmpty( styleVar.typography?.TfontSize ) || ! gkIsEmpty( styleVar.typography?.TlineHeight ) )? '-t': '';
                    //mobile
                    typographyClass += ( ! gkIsEmpty( styleVar.typography?.MfontSize ) || ! gkIsEmpty( styleVar.typography?.MlineHeight ) )? '-m': '';
                }
                
                //final typography class
                if ( 1 < typographyClass.length ) {
                    cssClass.push( classPre+'-typography'+typographyClass );
                }
                
                
                
               
            } else if ( ! gkIsEmpty( styleVar?.globalTypography ) ) {
                //Global typography
                cssClass.push( classPre+'-g-typography' )
                cssClass.push( classPre+'-'+styleVar.globalTypography );
            }
        
            return cssClass.join(' ');
        }

        //Set gutena kit settings attributes
        const setAttr = ( value, styleAttr = null, attrName = null, deviceStyle=null ) => {
            /**
             * 
             * styleAttr like spacing, border, color etc
             * attrName like padding, margin under spacing styleAttr
             * deviceStyle like default, tablet, mobile inside attrName like spacing.padding.default
             */
            
            if ( gkIsEmpty( styleAttr ) ) {
                return;
            }
            
            //Initialize style
            let newstyle = gkIsEmpty( gutenaKitStyle ) ? DefaultStyle : gutenaKitStyle;
            
            //check if required style attribute available or not
            if ( gkIsEmpty( newstyle[ styleAttr ] ) ) {
                newstyle[ styleAttr ] = { };
            }

            if ( gkIsEmpty( attrName ) ) {
                if ( ! gkIsEmpty( deviceStyle ) ) {
                    newstyle[ styleAttr ][ deviceStyle ] = value;
                } else {
                    newstyle[ styleAttr ] = value;
                }
                
            } else {
                if( ! gkIsEmpty( deviceStyle ) ) {
                    if ( gkIsEmpty( newstyle[ styleAttr ][ attrName ] ) ) {
                        newstyle[ styleAttr ][ attrName ] = {};
                    }
                    newstyle[ styleAttr ][ attrName ][ deviceStyle ] = value;
                } else {
                    newstyle[ styleAttr ][ attrName ] = value;
                }
            }

            //Global typography
            if ( 'globalTypography' === styleAttr && ! gkIsEmpty( newstyle?.typography ) ) {
                //Reset typography when global typography applied
                newstyle.typography = undefined;
            } else if ( 'typography' === styleAttr && ! gkIsEmpty( newstyle?.globalTypography ) ) {
                 //Reset global typography when custom typography applied
                newstyle.globalTypography = undefined;
            }

            //CSS json
            newstyle.cssJson = generateCssVar( newstyle, " .gutenakitid-"+clientId, true );
            
            setAttributes( { 
                gutenaKitStyle:{ ...newstyle }, 
                gutenaKitID:clientId,
                gutenaKitClass:{
                    ...gutenaKitClass,
                    blockClasses: generateClassesMinimal( newstyle )
                },
            } );
            
        };

        const MAX_SPACE_VALUES = {
            px: 500,
            em: 40,
            rem: 40,
            vh: 100,
            vw: 100,
        };

        const deviceAvailable = {
            Desktop: __( 'Hide on Desktop', 'gutena-kit' ),
            Tablet: __( 'Hide on Tablet', 'gutena-kit' ),
            Mobile: __( 'Hide on Mobile', 'gutena-kit' ),
        };


        const Style = generateCssFromVar()+''+renderBlockCSSForResponsive( gutena_kit_block_editor , deviceType );
      
        
        return (
            <Fragment>
                <BlockEdit { ...props } />
                <style>
                    { Style }
                </style>
                { isSelected && 
                <InspectorControls>
                    <PanelBody 
                        icon={ gutenaKitIcon }
                        iconPosition='left'
                        title={__("Gutena Kit Settings", "gutena-kit")}
                        className="gutena-kit-settings"
                        initialOpen={ true }
                    >
                    <HStack>
                        <FlexItem>
                        </FlexItem>
                        <FlexItem>
                            <Button 
                                variant="secondary"
                                isSmall
                                disabled={ gkIsEmpty( gutenaKitCSS?.blockCss ) }
                                onClick={ () => setAttributes( { 
                                    gutenaKitStyle:undefined,
                                    gutenaKitCSS: {
                                    ...gutenaKitCSS,
                                    blockCss:undefined
                                    } 
                                } ) }
                            >
                                { __('Reset') }
                            </Button>
                        </FlexItem>
                    </HStack>
                    { gkSupports.typography &&
                    <TypographySettings 
                        attrValue={  gutenaKitStyle?.typography }
                        onChangeFunc = { ( typography ) => setAttr( typography, 'typography' ) }
                        globalTypographySlug = { gutenaKitStyle?.globalTypography }
                        setGlobalTypography = { ( gt ) => setAttr( gt, 'globalTypography' ) }
                    />
                    }
                    { gkSupports.color && 
                    <EventsControl 
                        componentName='ColorControl'
                        label={ __("Color", "gutena-kit") }
                        attrValue ={ gutenaKitStyle?.color }
                        onChangeFunc ={ ( value ) => setAttr( value, 'color' ) }
                        panelId={ clientId }
                    />
                    }
                    { gkSupports.overlay && 
                    <EventsControl 
                        componentName='OverlayControl'
                        label={ __("Overlay", "gutena-kit") }
                        attrValue ={ gutenaKitStyle?.overlay }
                        onChangeFunc ={ ( value ) => setAttr( value, 'overlay' ) }
                    />
                    }
                    { gkSupports.spacing && 
                    <PanelBody 
                        title={__("Spacing", "gutena-kit")}
                        initialOpen={ false }
                    >   
                        <SelectDeviceDropdown />
                        <BoxControl
                            label={ __( "Padding", "gutena-kit" ) }
                            values={ gutenaKitStyle?.spacing?.padding?.[styleName] }
                            onChange={ ( value ) =>  setAttr( value, 'spacing', 'padding', styleName  ) }
                            allowReset={true}
                            sides={ paddingSides }
                        />

                        <SelectDeviceDropdown />
                        <BoxControl
                            label={ __( "Margin", "gutena-kit" ) }
                            values={ gutenaKitStyle?.spacing?.margin?.[styleName] }
                            onChange={ ( value ) =>  setAttr( value, 'spacing', 'margin', styleName ) }
                            allowReset={true}
                            sides={ marginSides }
                            inputProps={ { min: -Infinity } }
                        />
                    </PanelBody>
                    }
                    { gkSupports.border &&
                    <BorderGroup 
                        attrValue={ gutenaKitStyle?.border }
                        onChangeFunc = { ( value ) => setAttr( value, 'border' ) }
                    />
                    }
                    { gkSupports.border &&
                    <EventsControl 
                        componentName='BoxShadowControl'
                        label={ __("Box Shadow", "gutena-kit") }
                        attrValue={ gutenaKitStyle?.boxShadow }
                        onChangeFunc = { ( value ) => setAttr( value, 'boxShadow' ) }
                        onBoxShadow = { true }
                    />
                    }
                    { gkSupports.display &&
                    <PanelBody 
                        title={__("Display", "gutena-kit")}
                        initialOpen={ false }
                    >
                        { 
                            [ 'Desktop', 'Tablet', 'Mobile' ].map( ( deviceName ) => {
                                let deviceStyle = ( 'Desktop' === deviceName ) ? 'default' : ( ( 'Tablet' === deviceName ) ? 'tablet' : 'mobile' );
                                return(<ToggleControl
                                    key={ deviceName }
                                    label={ deviceAvailable[ deviceName ] }
                                    checked={ gkIsEmpty( gutenaKitStyle?.hideDisplay?.[deviceStyle] ) ? false : gutenaKitStyle?.hideDisplay?.[deviceStyle]  }
                                    onChange={ ( value ) =>  setAttr( value, 'hideDisplay', null, deviceStyle  ) }
                                /> )} 
                            )
                        }
                    </PanelBody>
                    }
                    </PanelBody>    
                </InspectorControls>
                }
            </Fragment>
        );
    };
}, 'GutenaKitSettings' );
 
/**** Block: core/media-text : END ******/