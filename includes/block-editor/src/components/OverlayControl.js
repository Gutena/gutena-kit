/**
 * Overaly with opacity control
 */
 import { __ } from '@wordpress/i18n';
 import {  
     __experimentalColorGradientSettingsDropdown as ColorGradientSettingsDropdown,
     __experimentalUseGradient,
 } from "@wordpress/block-editor";
 import { PanelBody,
    RangeControl,
 } from '@wordpress/components';
 import { gkIsEmpty, getGlobalColorVar } from '../helpers/helpers';
 import colorSettingsData from './colorSettingsData';
 
const DEFAULT_OVERLAY = {
    color:undefined,
    opacity:undefined
};

const noop = () => {};

const OverlayControl = ( {
    label = __( 'Overaly', 'gutena-kit' ),
    attrValue = DEFAULT_OVERLAY,
    onChangeFunc = noop,
    disableCustomColors = false,
    withPanel = true
} ) => {

    const { gradientValue, setGradient } = __experimentalUseGradient();
    const colorGradientSettings = colorSettingsData();

    //Set attribute
    const setAttr = ( value, attrName ) => {
        let newAttr = attrValue;
        if ( 'color' === attrName ) {
            value = getGlobalColorVar( colorGradientSettings, value );
        }
        newAttr[ attrName ] = value;
        onChangeFunc( { ...newAttr } );
    };
    
    const controls = (
        <>
            <ColorGradientSettingsDropdown 
            __experimentalHasMultipleOrigins
            __experimentalIsRenderedInSidebar
            settings={ [
                {
                    colorValue: attrValue?.color,
                    onColorChange: ( value ) => setAttr( value, 'color' ),
                    label: __("color", "gutena-kit"),
                    gradientValue:attrValue?.gradient,
                    onGradientChange: ( value ) => setAttr( value, 'gradient' ), 
                }
            ] }
            disableCustomColors={ disableCustomColors }
            { ...colorGradientSettings }
            />
            <RangeControl
                label={ __("Opacity", "gutena-kit") }
                value={ attrValue?.opacity }
                withInputField={ true }
                onChange={ ( value ) =>  setAttr( value, 'opacity' ) }
                min={ 10 }
                max={ 100 }
                step={ 10 }
                className="components-spacing-sizes-control__custom-value-range"
            />
        </>
    );

    if ( withPanel ) {
        return (
            <PanelBody title={ label } initialOpen={ false } >
                { controls }
            </PanelBody>
        );
    }

    return controls;
};

export default OverlayControl;