/**
 * Color controls : Text | Background | link
 */
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element'
import {  
    __experimentalColorGradientSettingsDropdown as ColorGradientSettingsDropdown,
    __experimentalUseGradient,
} from "@wordpress/block-editor";
import { PanelBody,
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption,
    __experimentalToolsPanel as ToolsPanel,
} from '@wordpress/components';
import { gkIsEmpty } from '../helpers/helpers';
import colorSettingsData from './colorSettingsData'

 const DEFAULT_COLOR = {
	text:undefined,
    background:undefined,
    link:undefined
};

 const noop = () => {};
 
 const ColorControl = ( {
     label = __( 'Color', 'gutena-kit' ),
     attrValue = {},
     colorPanelsSettings=false,
     onChangeFunc = noop,
     panelId=0,
     enableAlpha = false,
     disableCustomColors = false,
     withPanel = true,
     textColor = true,
     bgColor = true,
     isGradient = true,
     linkColor = true,
 } ) => {
 
    //Set attribute
    const setAttr = ( value, attrName ) => {
        let newAttr = attrValue;
        //check if active tab has value
        newAttr[ attrName ] = value;
        onChangeFunc( { ...newAttr } );
    };

    const { gradientValue, setGradient } = __experimentalUseGradient();
    const colorGradientSettings = colorSettingsData();

    //Multiple color settings i.e. text, background, link etc
    let colorSettings = [];

    if ( false === colorPanelsSettings ) {
        if ( textColor ) {
            colorSettings.push({
                colorValue: attrValue?.text,
                onColorChange: ( value ) => setAttr( value, 'text' ),
                label: __("Text", "gutena-kit"),
            });
        }

        if ( bgColor ) {
            let gradientSettings = {};
            if ( isGradient ) {
                gradientSettings = { 
                    gradientValue,
                    onGradientChange: setGradient, 
                }
            }
            colorSettings.push({
                colorValue: attrValue?.background,
                onColorChange: ( value ) => setAttr( value, 'background' ),
                label: __("Background", "gutena-kit"),
                ...gradientSettings
            });
        }

        if ( linkColor ) {
            colorSettings.push({
                colorValue: attrValue?.link,
                onColorChange: ( value ) => setAttr( value, 'link' ),
                label: __("Link", "gutena-kit"),
            });
        }
    }else{
        colorSettings = colorPanelsSettings;
    }
    
     const controls = (
         <>
         <ToolsPanel label="" className="gutena-kit-color-toolpanel" resetAll={ () => onChangeFunc( {} ) }  panelId={ panelId } >
            <ColorGradientSettingsDropdown 
             __experimentalHasMultipleOrigins
             __experimentalIsRenderedInSidebar
             settings={ colorSettings }
            disableCustomColors={ disableCustomColors }
            enableAlpha={ enableAlpha }
            panelId={ panelId }
            { ...colorGradientSettings }
             />
        </ToolsPanel>
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
 
 export default ColorControl;