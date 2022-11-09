import { __ } from '@wordpress/i18n';
import { settings } from '@wordpress/icons';
import { useEffect } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';
import { registerBlockVariation } from '@wordpress/blocks';
import { InspectorControls } from '@wordpress/block-editor';
import { createHigherOrderComponent } from '@wordpress/compose';
import {
    __experimentalUseCustomUnits as useCustomUnits,
    __experimentalBorderBoxControl as BorderBoxControl,
    __experimentalUnitControl as UnitControl,
    __experimentalBoxControl as BoxControl,
    __experimentalSpacer as Spacer,
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption,
    __experimentalHStack as HStack,
    __experimentalText as Text,
    FlexItem,
    Button,
    PanelBody,
    SelectControl,
} from '@wordpress/components';

import BorderGroup from '../../components/BorderGroup';
import FontIconPicker from '@fonticonpicker/react-fonticonpicker';
import EventsControl from '../../components/EventsControl';
import RangeControlUnit from '../../components/RangeControlUnit';

import DynamicStyles from './styles'
import { RemixIcons1 } from './icons';
import ReactHtmlParser from 'react-html-parser'

import '../../helpers/helpers'

import '@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.base-theme.react.css';
import '@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.material-theme.react.css';
import './editor.scss'

/*************************************
 Register Navigation Variation
 **************************************/
registerBlockVariation( 'core/button', {
    name: 'gutena-advanced-button',
    title: __( 'Advanced Button', 'gutena-forms' ),
    description: __( 'Advanced Button', 'gutena-forms' ),
    category: 'gutena',
    attributes: {
        gutenaAdvancedButton: true,
        className: 'gutena-advanced-button',
    },
    scope: [ 'block', 'inserter' ],
    //icon: hamburgerIcon,
    isActive: ( { className }, variationAttributes ) =>
        true === variationAttributes.gutenaAdvancedButton &&
        'undefined' !== typeof className &&
        null !== typeof className &&
        0 <= className.indexOf( variationAttributes.className ),
    }
);

const DEFAULT_SIZES = {
    s: {
        name: __( 'Small', 'gutena-kit' ),
        fontSize: '14px',
        padding: {
            top: '10px',
            right: '18px',
            bottom: '10px',
            left: '18px',
        },
        iconSize: '13px',
        iconGap: '6px',
    },
    m: {
        name: __( 'Medium', 'gutena-kit' ),
        fontSize: '15px',
        padding: {
            top: '12px',
            right: '22px',
            bottom: '12px',
            left: '22px',
        },
        iconSize: '16px',
        iconGap: '9px',
    },
    l: {
        name: __( 'Large', 'gutena-kit' ),
        fontSize: '16px',
        padding: {
            top: '14px',
            right: '26px',
            bottom: '14px',
            left: '26px',
        },
        iconSize: '18px',
        iconGap: '11px',
    },
    xl: {
        name: __( 'Extra Large', 'gutena-kit' ),
        fontSize: '17px',
        padding: {
            top: '18px',
            right: '34px',
            bottom: '18px',
            left: '34px',
        },
        iconSize: '21px',
        iconGap: '13px',
    }
}

const gutenaAdvBtnIds = [];

const withInspectorControls = createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {
        const { name, attributes, setAttributes, isSelected, clientId } = props;
        const { 
            uniqueId,
            btnSize,
            btnFontSize,
            btnBorder,
            btnTypography,
            btnColors,
            btnIcon,
            btnIconSVG,
            btnIconPosition,
            btnIconSize,
            btnIconGap,
            blockStyles,
            className,
            style
        } = attributes;

        if ( 'core/button' === name && attributes?.gutenaAdvancedButton === true ) {
            const units = useCustomUnits( {
                availableUnits: [ 'px', 'em', 'rem', 'vh', 'vw' ],
                defaultValues: { px: 0, em: 0, rem: 0, vh: 0, vw: 0, '%': 0 },
            } );
    
            useEffect( () => {
                if ( ! uniqueId || gutenaAdvBtnIds.includes( uniqueId ) ) {
                    setAttributes( {
                        uniqueId: clientId.substr( 2, 9 ),
                    } );
                    gutenaAdvBtnIds.push( clientId.substr( 2, 9 ) );
                } else {
                    gutenaAdvBtnIds.push( uniqueId );
                }
            }, [] )

            useEffect( () => {
                if ( ! className?.includes( `gutena-advanced-button-${ uniqueId }` ) ) {
                    setAttributes( {
                        className: `gutena-advanced-button gutena-advanced-button-${ uniqueId }`,
                    } );
                }
            }, [ uniqueId ] )

            useEffect( () => {
                if ( btnIcon ) {
                    if ( ! className?.includes( 'has-icon' ) ) {
                        setAttributes( {
                            className: className?.trim() + ' has-icon',
                        } );
                    }
                } else {
                    setAttributes( {
                        className: className?.replace( 'has-icon', '' ).trim(),
                    } );
                }
            }, [ btnIcon ] )
    
            const dynamicStyles = DynamicStyles( attributes )
            const renderCSS = (
                <style>
                    {`
                        .gutena-advanced-button-${ uniqueId } {
                            ${ Object.entries( dynamicStyles ).map( ( [ k, v ] ) => `${ k }:${ v }` ).join( ';' ) }
                        }
                        .gutena-advanced-button-${ uniqueId }.has-icon .wp-block-button__link:${ btnIconPosition } {
                            content: '';
                            -webkit-mask-image: url("data:image/svg+xml; utf8, ${ encodeURI( btnIconSVG ) }");
                            mask-image: url("data:image/svg+xml; utf8, ${ encodeURI( btnIconSVG ) }");
                        }
                    `}
                </style>
            );
            
            const customStyles = JSON.stringify( dynamicStyles )
            useEffect( () => {
                if ( customStyles != JSON.stringify( blockStyles ) ) {
                    setAttributes( {
                        blockStyles: dynamicStyles,
                    } );
                }
            }, [ customStyles ] )

            const hidePanelCSS = (
                <style>
                    {`
                        .color-block-support-panel, .typography-block-support-panel, .border-block-support-panel {
                            display: none !important;
                        }
                        .block-editor-block-inspector > div:nth-child(2) {
                            display: none !important;
                        }
                        .components-gk-range-unit-control legend {
                            padding-top: 0 !important;
                            padding-bottom: 0.5rem !important;
                        }
                    `}
                </style>
            );

            const icons = Object.keys( RemixIcons1 ).map( ( value ) => {
                return `ri-${ value }`
            } )
            const eventAttr = Object.keys( DEFAULT_SIZES );
            const currentSize = DEFAULT_SIZES[ btnSize?.size ]?.name

            const renderSVG = ( svg ) => (
                <div style={ { display: 'inline-flex', justifyContent: 'center', alignItems: 'center' } } className="gutena-render-svg">
                    { ReactHtmlParser( RemixIcons1?.[ svg.replace( 'ri-', '' ) ] ) }
                </div>
            )

            return (  
                <>
                    { renderCSS }
                    <BlockEdit { ...props } />
                    <InspectorControls> 
                        { hidePanelCSS } 
                        <PanelBody title={ __( 'Button Size', 'gutena-kit-pro' ) } initialOpen={ true }>
                            <HStack>
                                <FlexItem>
                                    <Text isBlock>
                                        { __( 'Size', 'gutena-kit' ) } { currentSize && <Text variant="muted" size="12">({ DEFAULT_SIZES[ btnSize?.size ]?.name })</Text> }
                                    </Text>
                                </FlexItem>
                                <FlexItem>
                                    <Button
                                        key={ btnSize?.size }
                                        label={ __( 'Custom', 'gutena-kit' ) }
                                        icon={ settings }
                                        onClick={ () => {
                                            setAttributes( { 
                                                btnSize: {
                                                    ...btnSize,
                                                    custom: ! btnSize?.custom
                                                },
                                            } )
                                        } }
                                        isPressed={ btnSize?.custom === true }
                                        isSmall
                                        iconSize={ 24 }
                                    /> 
                                </FlexItem>
                            </HStack>
                            <ToggleGroupControl 
                                value={ btnSize?.size } 
                                onChange={ ( value ) => {
                                    setAttributes( { 
                                        btnSize: {
                                            ...btnSize,
                                            size: value,
                                            data: DEFAULT_SIZES[ value ]
                                        },
                                        btnFontSize: DEFAULT_SIZES[ value ]?.fontSize,
                                        btnIconSize: DEFAULT_SIZES[ value ]?.iconSize,
                                        btnIconGap: DEFAULT_SIZES[ value ]?.iconGap,
                                        style: {
                                            ...style,
                                            spacing: {
                                                ...style?.spacing,
                                                padding: DEFAULT_SIZES[ value ]?.padding
                                            }
                                        },
                                    } )
                                } } 
                                isBlock
                                hideLabelFromVision
                            >
                                {
                                    eventAttr.map( ( value ) => (
                                        <ToggleGroupControlOption key={ value } value={ value } label={ value.toUpperCase() } />
                                    ) )
                                }
                            </ToggleGroupControl>
                            {
                                btnSize?.custom && (
                                    <UnitControl
                                        label={ __( 'Custom Font Size', 'gutena-kit-pro' ) }
                                        units={ units }
                                        value={ btnFontSize }
                                        onChange={ ( value ) => setAttributes( { btnFontSize: value } ) }
                                    /> 
                                )
                            }
                        </PanelBody>
                        <PanelBody title={ __( 'Icon', 'gutena-kit-pro' ) } initialOpen={ false }>
                            <Spacer marginBottom={ 3 } className="gutena-font-icon-picker">
                                <FontIconPicker
                                    icons={ icons }
                                    value={ btnIcon }
                                    onChange={ ( select ) => {
                                        setAttributes( { btnIcon: select } )
                                        setAttributes( { btnIconSVG: RemixIcons1?.[ select.replace( 'ri-', '' ) ] } )
                                    } }
                                    renderFunc={ renderSVG }
                                    appendTo="body"
                                    theme="default"
                                    isMulti={ false }
                                />
                            </Spacer>
                            { btnIcon && (
                                <Spacer marginTop={ 5 } marginBottom={ 0 }>
                                    <SelectControl
                                        label={ __( 'Position', 'gutena-kit-pro' ) }
                                        value={ btnIconPosition }
                                        options={ [
                                            { label: __( 'Before', 'gutena-kit-pro' ), value: 'before' },
                                            { label: __( 'After', 'gutena-kit-pro' ), value: 'after' },
                                        ] }
                                        onChange={ ( value ) => setAttributes( { btnIconPosition: value } ) }
                                    />
                                    <RangeControlUnit 
                                        rangeLabel={ __( 'Size', "gutena-kit" ) }
                                        attrValue={ btnIconSize }
                                        onChangeFunc={ ( value ) => setAttributes( { btnIconSize: value } ) }
                                        rangeMin={ 0 }
                                        rangeMax={ 100 }
                                    />
                                    <RangeControlUnit 
                                        rangeLabel={ __( 'Gap', "gutena-kit" ) }
                                        attrValue={ btnIconGap }
                                        onChangeFunc={ ( value ) => setAttributes( { btnIconGap: value } ) }
                                        rangeMin={ 0 }
                                        rangeMax={ 100 }
                                    />
                                </Spacer>
                            ) }
                        </PanelBody>
                        <EventsControl 
                            componentName='ColorControl'
                            label={ __( 'Color', 'gutena-kit' ) }
                            attrValue ={ btnColors }
                            onChangeFunc ={ ( value ) => setAttributes( { btnColors: value } ) }
                            panelId={ clientId }
                            linkColor={ false }
                            iconColor={ btnIcon }
                        />
                        <PanelBody title={ __( 'Border', 'gutena-kit-pro' ) } initialOpen={ false }>
                            <BorderGroup 
                                attrValue={ btnBorder }
                                onChangeFunc = { ( value ) => setAttributes( { btnBorder: value } ) }
                                withPanel={ false }
                                colorVar={ true }
                            />
                        </PanelBody>
                    </InspectorControls>
                </>
            );
        }

        return <BlockEdit { ...props } />;
    }
}, 'withInspectorControl' );

addFilter(
    'editor.BlockEdit',
    'my-plugin/with-inspector-controls',
    withInspectorControls
);