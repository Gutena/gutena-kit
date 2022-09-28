/**
 * Spacing : Padding | Margin 
 */
import { __ } from '@wordpress/i18n';
import {  useEffect, useState } from "@wordpress/element";
import { useSelect } from "@wordpress/data";
 import { 
     PanelBody,
     RangeControl, 
     ToggleControl,
      __experimentalBoxControl as BoxControl,
 } from '@wordpress/components';
 import  RangeControlUnit  from '../../components/RangeControlUnit';
 import SelectDeviceDropdown from '../../components/SelectDeviceDropdown';
 import { gkIsEmpty } from '../../helpers/helpers';
 const noop = () => {};
 
const SpacingControls = ({
    deviceType,
    data
 }) => {

    const {
        name,
        attributes,
        setAttributes,
        isSelected,
        clientId,
    } = data;

    const styleAttr = {
        "style": {
            "spacing": {
                "padding": {
                    "top": "20px",
                    "right": "20px",
                    "bottom": "20px",
                    "left": "20px"
                },
                "blockGap": "25px",
                "margin": {
                    "top": "2px",
                    "bottom": "2px"
                }
            },
            "border": {
                "width": "2px",
                "style": "solid",
                "radius": "2px"
            },
            "typography": {
                "fontStyle": "normal",
                "fontWeight": "500",
                "letterSpacing": "20px",
                "lineHeight": "1.2",
                "textTransform": "capitalize"
            }
        }
    }

    const { 
        gutenaKitStyle={
            style: attributes?.style,
            Tstyle:undefined,
            Mstyle:undefined
        }, 
        style={}
    } = attributes;


    const setAttr = ( value, attrName, deviceStyle='style' ) => {
        let newgutenaKitStyle = gutenaKitStyle;
            if ( gkIsEmpty( newgutenaKitStyle[ deviceStyle ] ) ) {
                newgutenaKitStyle[ deviceStyle ] = {
                    spacing:{}
                };
            }
            newgutenaKitStyle[ deviceStyle ][ 'spacing' ][ attrName ] = value;
        if ( 'blockGap' === attrName ) {
            setAttributes( { 
                gutenaKitStyle:{ ...newgutenaKitStyle },
                style:{  ...style,
                    spacing:{
                        ...style.spacing,
                        blockGap:value
                    } 
                }
             } );
        }else{
            setAttributes( { gutenaKitStyle:{ ...newgutenaKitStyle } } );
        }
    };

    const styleName = ( 'Desktop' === deviceType ) ? 'style' : ( ( 'Tablet' === deviceType ) ? 'Tstyle' : 'Mstyle' ) ;

    const MAX_SPACE_VALUES = {
        px: 500,
        em: 40,
        rem: 40,
        vh: 100,
        vw: 100,
    };

    return(
        <PanelBody 
            title={__("Spacing", "gutena-kit-pro")}
            initialOpen={ false }
        >   
            <SelectDeviceDropdown />
            <BoxControl
                label={ __( "Padding", "gutena-kit" ) }
                values={ gkIsEmpty( gutenaKitStyle[styleName] ) ? undefined : gutenaKitStyle[styleName]?.spacing?.padding }
                onChange={ ( padding ) =>setAttr( padding, 'padding', styleName)}
                allowReset={true}
            />

            <SelectDeviceDropdown />
            <BoxControl
                label={ __( "Margin", "gutena-kit" ) }
                values={ gkIsEmpty( gutenaKitStyle[styleName] ) ? undefined : gutenaKitStyle[styleName]?.spacing?.margin }
                onChange={ ( margin ) =>setAttr( margin, 'margin', styleName )}
                allowReset={true}
            />

            <RangeControlUnit 
                rangeLabel={ __( "Block spacing", "gutena-kit" ) }
                attrValue={ gutenaKitStyle?.style?.spacing?.blockGap }
                onChangeFunc={ ( gap ) => setAttr( gap, 'blockGap' ) }
                rangeMin={ 0 }
                rangeMax={ MAX_SPACE_VALUES }
                rangeStep={ 10 }
            />
        </PanelBody>
    )
}

export default SpacingControls;