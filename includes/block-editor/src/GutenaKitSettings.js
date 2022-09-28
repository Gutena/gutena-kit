//Common Text Block : Add gap controls between media and text
import { __ } from '@wordpress/i18n';
import { createHigherOrderComponent } from  '@wordpress/compose';
import {  useSelect } from "@wordpress/data";
import { store as blocksStore } from '@wordpress/blocks';
import { Fragment } from  '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import {  PanelBody, 
    __experimentalHStack as HStack,
    FlexItem,
    __experimentalBoxControl as BoxControl,
    ToggleControl,
    Button,
} from  '@wordpress/components';
import SelectDeviceDropdown from './components/SelectDeviceDropdown';
import  RangeControlUnit  from './components/RangeControlUnit';
import BorderGroup from './components/BorderGroup';
import EventsControl from './components/EventsControl';
import { gkIsEmpty, spaceCss, borderCss, boxShadowCss } from './helpers/helpers';
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

        if('core/group' !== name){
            return ( <BlockEdit { ...props } /> );
        }
        
        /***** Check Core support for block : start ******/
        /**
         * https://developer.wordpress.org/block-editor/reference-guides/data/data-core-blocks/#getblocktype
         */
        const { supports={}  } = useSelect(
            ( select ) =>
                select( blocksStore ).getBlockType( name, '' ),
            []
        );
        //console.log("supports",supports);

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
                }
            }
        }

        const DEFAULT_STYLE = {
            enable: true,
            style: DefaultStyle,
            Tstyle:undefined,
            Mstyle:undefined
        };

        const { 
            gutenaKitID,
            gutenaKitCSS,
            gutenaKitStyle=DEFAULT_STYLE, 
            style={}
        } = attributes;

         //Get Device preview type
        const deviceType = useSelect((select) => {
            return select("core/edit-post").__experimentalGetPreviewDeviceType();
            }, []);
        
        //Style name based on device type
        const styleName = ( 'Desktop' === deviceType ) ? 'style' : ( ( 'Tablet' === deviceType ) ? 'Tstyle' : 'Mstyle' ) ;
       
        
        

        //Generate css 
        const generateCss = ( styleVar = gutenaKitStyle, id = '#block-'+clientId ) => {
            //All media variable
           return ['style', 'Tstyle', 'Mstyle'].map( ( style ) => {
                let css = '';
                let cssHover = '';
                let cssLink = '';
                let cssLinkHover = '';
                let cssBefore = '';
                let cssHoverBefore = '';

                if ( gkIsEmpty( styleVar[style] ) ) {
                    return css;
                }

                //media specific style variable
                let deviceStyle = styleVar[style];

                //spacing
                css += spaceCss( deviceStyle?.spacing?.padding, 'padding' ) ;
                css += spaceCss( deviceStyle?.spacing?.margin, 'margin' ) ;

                if ( 'style' === style ) {
                    //color normal
                    if ( ! gkIsEmpty( deviceStyle?.color?.normal ) ) {
                       // Text Color
                       css += gkIsEmpty( deviceStyle.color.normal?.text ) ? '' : ' color:'+deviceStyle.color.normal.text+' !important;';

                       // Background Color
                       css += gkIsEmpty( deviceStyle.color.normal?.background ) ? '' : ' background:'+deviceStyle.color.normal.background+' !important;';

                       // Link Color
                       cssLink += gkIsEmpty( deviceStyle.color.normal?.link ) ? '' : ' color:'+deviceStyle.color.normal.link+' !important;';
                    }

                    //color hover
                    if ( ! gkIsEmpty( deviceStyle?.color?.hover ) ) {
                        // Text Color
                        cssHover += gkIsEmpty( deviceStyle.color.hover?.text ) ? '' : ' color:'+deviceStyle.color.hover.text+' !important;';

                        // Background Color
                        cssHover += gkIsEmpty( deviceStyle.color.hover?.background ) ? '' : ' background:'+deviceStyle.color.hover.background+' !important;';

                        // Link Color
                        cssLinkHover += gkIsEmpty( deviceStyle.color.hover?.link ) ? '' : ' color:'+deviceStyle.color.hover.link+' !important;';
                    }

                    //Pseudo CSS before : Overlay
                    if ( ! gkIsEmpty( deviceStyle?.overlay ) ) {
                        css += 'position: relative;';

                        //Overlay color
                        if ( deviceStyle?.overlay?.normal?.color ) {
                            cssBefore += ` 
                            content:'';
                            background:${deviceStyle.overlay.normal.color} !important; 
                            opacity: ${ gkIsEmpty( deviceStyle.overlay?.normal?.opacity ) ? '80': deviceStyle.overlay.normal.opacity }% !important ;
                            position: absolute;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            `;
                        }

                        //Hover : Overlay
                        if ( deviceStyle?.overlay?.hover?.color ) {
                            cssHoverBefore += ` 
                            content:'';
                            background:${deviceStyle.overlay.hover.color} !important; 
                            opacity: ${ gkIsEmpty( deviceStyle.overlay?.hover?.opacity ) ? '80': deviceStyle.overlay.hover.opacity }% !important ;
                            position: absolute;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            `;
                        }
                    }
                    
                    //Border
                    css += borderCss( deviceStyle?.border?.normal );
                    cssHover += borderCss( deviceStyle?.border?.hover );

                    //box shadow
                    css += boxShadowCss( deviceStyle?.boxShadow?.normal );
                    //box hover shadow
                    cssHover += boxShadowCss( deviceStyle?.boxShadow?.hover );
                }



                //if hide in device then do not generate any other css
                if ( ! gkIsEmpty( deviceStyle?.hideDisplay ) && true ===  deviceStyle.hideDisplay ) {
                    css = ( 'style' === style ) ? css + ' display:none; ' : ' display:none; ';
                }
                
                if ( 9 < css.length ) {
                    if ( 'style' === style ) {
                        //Normal Css 
                        css = ' '+id+'{'+css+'} ';

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

                        return css;
                    }

                    if ( 'Tstyle' === style ) {
                        return  ' @media only screen and (min-width: 768px) and (max-width: 1080px) { '+id+'{'+css+'} }';
                    }

                    if ( 'Mstyle' === style ) {
                        return  ' @media only screen and (max-width: 767px){ '+id+'{'+css+'} }';
                    }
                }
            }).join(' ');
            
        }

        const setAttr = ( value, attrName = null, deviceStyle='style', styleAttr = null ) => {
            //styleAttr like spacing, border, color etc
            if ( gkIsEmpty( styleAttr ) ) {
                return;
            }
            
            //Initialize style
            let newstyle = gkIsEmpty( gutenaKitStyle ) ? DEFAULT_STYLE : gutenaKitStyle;
            
            //check if deice specific style available or not
            if ( gkIsEmpty( newstyle[ deviceStyle ] ) ) {
                newstyle[ deviceStyle ] = { };
            }

            //check if required style attribute available or not
            if ( gkIsEmpty( newstyle[ deviceStyle ][ styleAttr ] ) ) {
                newstyle[ deviceStyle ][ styleAttr ] = {};
            }

            if ( gkIsEmpty( attrName ) ) {
                newstyle[ deviceStyle ][ styleAttr ] = value;
            } else {
                newstyle[ deviceStyle ][ styleAttr ][ attrName ] = value;
            }

            if ( !gkIsEmpty( attrName ) && 'blockGap' === attrName ) {
                setAttributes( {  
                    gutenaKitStyle:{ ...newstyle },
                    gutenaKitID:clientId,
                    gutenaKitCSS: {
                        ...gutenaKitCSS,
                        blockCss:generateCss( newstyle, " .gutenakitid-"+clientId )
                    },
                    style:{  ...style,
                        spacing:{
                            ...style.spacing,
                            blockGap:value
                        } 
                    }
                } );
            }else{
                setAttributes( { 
                    gutenaKitStyle:{ ...newstyle }, 
                    gutenaKitID:clientId,
                    gutenaKitCSS: {
                    ...gutenaKitCSS,
                    blockCss:generateCss( newstyle, " .gutenakitid-"+clientId )
                } } );
            }
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

        const Style = generateCss();
        console.log("gutenaKitStyle",gutenaKitStyle);

        return (
            <Fragment>
                <BlockEdit { ...props } />
                <style>
                    { Style }
                </style>
                { isSelected && 
                <InspectorControls>
                    <PanelBody 
                        title={__("Gutena Kit Settings", "gutena-kit")}
                        initialOpen={ false }
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
                                { __('reset') }
                            </Button>
                        </FlexItem>
                    </HStack>
                    <EventsControl 
                        componentName='ColorControl'
                        label={ __("Color", "gutena-kit") }
                        attrValue ={ gutenaKitStyle?.style?.color }
                        onChangeFunc ={ ( value ) => setAttr( value, null, 'style', 'color' ) }
                    />
                    <EventsControl 
                        componentName='OverlayControl'
                        label={ __("Overlay", "gutena-kit") }
                        attrValue ={ gutenaKitStyle?.style?.overlay }
                        onChangeFunc ={ ( value ) => setAttr( value, null, 'style', 'overlay' ) }
                    />
                    
                    <PanelBody 
                        title={__("Spacing", "gutena-kit")}
                        initialOpen={ false }
                    >   
                        <SelectDeviceDropdown />
                        <BoxControl
                            label={ __( "Padding", "gutena-kit" ) }
                            values={ gkIsEmpty( gutenaKitStyle[styleName] ) ? undefined : gutenaKitStyle[styleName]?.spacing?.padding }
                            onChange={ ( value ) =>  setAttr( value, 'padding', styleName, 'spacing' ) }
                            allowReset={true}
                            sides={ paddingSides }
                        />

                        <SelectDeviceDropdown />
                        <BoxControl
                            label={ __( "Margin", "gutena-kit" ) }
                            values={ gkIsEmpty( gutenaKitStyle[styleName] ) ? undefined : gutenaKitStyle[styleName]?.spacing?.margin }
                            onChange={ ( value ) =>  setAttr( value, 'margin', styleName, 'spacing' ) }
                            allowReset={true}
                            sides={ marginSides }
                            inputProps={ { min: -Infinity } }
                        />

                        <RangeControlUnit 
                            rangeLabel={ __( "Block spacing", "gutena-kit" ) }
                            attrValue={ gutenaKitStyle?.style?.spacing?.blockGap }
                            onChangeFunc={ ( value ) =>  setAttr( value, 'blockGap', 'style', 'spacing' ) }
                            rangeMin={ 0 }
                            rangeMax={ MAX_SPACE_VALUES }
                            rangeStep={ 10 }
                        />
                    </PanelBody>
                    <BorderGroup 
                        attrValue={ gutenaKitStyle?.style?.border }
                        onChangeFunc = { ( value ) => setAttr( value, null, 'style', 'border' ) }
                    />
                    <EventsControl 
                        componentName='BoxShadowControl'
                        label={ __("Box Shadow", "gutena-kit") }
                        attrValue={ gutenaKitStyle?.style?.boxShadow }
                        onChangeFunc = { ( value ) => setAttr( value, null, 'style', 'boxShadow' ) }
                    />
                    <PanelBody 
                        title={__("Display", "gutena-kit")}
                        initialOpen={ false }
                    >
                        { 
                            [ 'Desktop', 'Tablet', 'Mobile' ].map( ( deviceName ) => {
                                let deviceStyle = ( 'Desktop' === deviceName ) ? 'style' : ( ( 'Tablet' === deviceName ) ? 'Tstyle' : 'Mstyle' )
                                return(<ToggleControl
                                    key={ deviceName }
                                    label={ deviceAvailable[ deviceName ] }
                                    checked={ gkIsEmpty( gutenaKitStyle?.[deviceStyle]?.hideDisplay ) ? false : gutenaKitStyle?.[deviceStyle]?.hideDisplay  }
                                    onChange={ ( value ) =>  setAttr( value, null, deviceStyle, 'hideDisplay' ) }
                                /> )} 
                            )
                        }
                    </PanelBody>
                    </PanelBody>
                </InspectorControls>
                }
            </Fragment>
        );
    };
}, 'GutenaKitSettings' );
 
/**** Block: core/media-text : END ******/