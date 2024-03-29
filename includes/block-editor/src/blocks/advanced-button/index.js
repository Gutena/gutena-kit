import { __ } from '@wordpress/i18n';
import { settings } from '@wordpress/icons';
import { addFilter } from '@wordpress/hooks';
import { registerBlockVariation } from '@wordpress/blocks';
import { InspectorControls } from '@wordpress/block-editor';
import { useEffect, renderToString } from '@wordpress/element';
import { createHigherOrderComponent } from '@wordpress/compose';
import {
    __experimentalUseCustomUnits as useCustomUnits,
    __experimentalUnitControl as UnitControl,
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
import EventsControl from '../../components/EventsControl';
import RangeControlUnit from '../../components/RangeControlUnit';
import IconControl from '../../components/IconControl';

import DynamicStyles from './styles'
import '../../helpers/helpers'

import './editor.scss'

/*************************************
 Register Navigation Variation
 **************************************/
registerBlockVariation( 'core/button', {
    name: 'gutena-advanced-button',
    title: __( 'Button', 'gutena-kit' ),
    description: __( 'Prompt visitors to take action with a Button.', 'gutena-kit' ),
    category: 'gutena',
    attributes: {
        gutenaAdvancedButton: true,
        className: 'gutena-advanced-button',
    },
    scope: [ 'block', 'inserter' ],
    icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1026_34)">
                <path d="M13 18H11H4C3.73478 18 3.48043 17.8946 3.29289 17.7071C3.10536 17.5196 3 17.2652 3 17V7C3 6.73478 3.10536 6.48043 3.29289 6.29289C3.48043 6.10536 3.73478 6 4 6H20C20.2652 6 20.5196 6.10536 20.7071 6.29289C20.8946 6.48043 21 6.73478 21 7V17C21 17.2652 20.8946 17.5196 20.7071 17.7071C20.5196 17.8946 20.2652 18 20 18H13ZM5 16H19V8H5V16ZM8 11H16V13H8V11Z" fill="#0EA489"/>
            </g>
            <defs>
                <clipPath id="clip0_1026_34">
                    <rect width="24" height="24" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    ),
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
                        .block-editor-blocfk-inspector > div:nth-child(2) {
                            display: none !important;
                        }
                        .components-gk-range-unit-control legend {
                            padding-top: 0 !important;
                            padding-bottom: 0.5rem !important;
                        }
                    `}
                </style>
            );

            const eventAttr = Object.keys( DEFAULT_SIZES );
            const currentSize = DEFAULT_SIZES[ btnSize?.size ]?.name

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
                                        { __( 'Size', 'gutena-kit' ) } { currentSize && <Text variant="muted" size="13">({ DEFAULT_SIZES[ btnSize?.size ]?.name })</Text> }
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
                            <IconControl 
                                label="select icon" 
                                activeIcon={ btnIcon } 
                                value={ btnIcon } 
                                onChange={ ( value ) => {
                                    setAttributes( { btnIcon: value?.iconName } )
                                    setAttributes( { btnIconSVG: renderToString( value?.icon ) } )
                                } }
                                onClear={ () => setAttributes( { btnIcon: '', btnIconSVG: '' } ) }
                            />
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
    'gutena/with-inspector-controls',
    withInspectorControls
);