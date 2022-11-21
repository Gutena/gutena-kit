/**
 * Border Group
 * output 
 * { normal: { border: {top,right,bottom,left}, radius:npx }, hover:{} }
 * OR
 * { normal: { border: {color: '#1a4548', style: 'solid', width: '50px'}, radius:npx }, hover:{} }
 */
 import { __ } from '@wordpress/i18n';
 import {useState } from '@wordpress/element'
 import { 
     PanelBody,
     __experimentalBorderBoxControl as BorderBoxControl,
     __experimentalToggleGroupControl as ToggleGroupControl,
     __experimentalToggleGroupControlOption as ToggleGroupControlOption,
 } from '@wordpress/components';
 import colorSettingsData from './colorSettingsData';
 import  RangeControlUnit  from './RangeControlUnit';
import { gkIsEmpty, getGlobalColorVar } from '../helpers/helpers';
 
 const DEFAULT_PROPS = {
     normal: __( 'Normal', 'gutena-kit' ),
     hover: __( 'Hover', 'gutena-kit' )
 }
 
 const noop = () => {};

 const MAX_SPACE_VALUES = {
    px: 200,
    em: 40,
    rem: 40,
    vh: 100,
    vw: 100,
};
 
 const BorderGroup = ( {
     label = __( 'Border Settings', 'gutena-kit' ),
     panelLabel = __( 'Border', 'gutena-kit' ),
     attrValue = {},
     attrProps = DEFAULT_PROPS,
     onChangeFunc = noop,
     rangeMax=MAX_SPACE_VALUES,
     withPanel = true
 } ) => {
     const propsData = Object.keys( attrProps );
     const [ activeTab, setActiveTab ] = useState( propsData[0] );
     const colorGradientSettings = colorSettingsData();
     //Set attribute
     const setAttr = ( value , attrName ) => {
        let newAttr = attrValue;
        if( gkIsEmpty( newAttr[activeTab] ) ){
            newAttr[activeTab] = {};
        }

        //get global color var name
        /*** 
        if ( 'border' === attrName ) {
            if ( ! gkIsEmpty(value?.color) ) {
                value.color = getGlobalColorVar( colorGradientSettings, value.color );
            } else {
                [ 'top', 'right', 'bottom', 'left' ].forEach( ( position ) => {
                    if ( ! gkIsEmpty( value?.[ position ]?.color ) ) {
                        value[ position ]['color'] = getGlobalColorVar( colorGradientSettings, value[ position ]['color'] );
                    }
                });
            }
        }***/

        newAttr[activeTab][ attrName ] = value;
        
        onChangeFunc( { ...newAttr } );
    };

     const { colors } = colorSettingsData();
     
     const controls = (
         <>
             { propsData.length > 1 && /* show only if there is multiple items present. */
                <ToggleGroupControl 
                  label={ label } 
                  value={ activeTab } 
                  onChange={ ( value ) => setActiveTab( value ) } 
                  isBlock
                  hideLabelFromVision={ withPanel }
                >
                     {
                         propsData.map( ( value ) => (
                             <ToggleGroupControlOption key={ value } value={ value } label={ attrProps[ value ] } />
                         ) )
                     }
                 </ToggleGroupControl>
             }
             <BorderBoxControl
                onChange={ ( value ) => setAttr( value, 'border' ) }
                value={ attrValue[ activeTab ]?.border }
                colors={ colors }
                enableAlpha={ true }
                popoverOffset={ 40 }
				popoverPlacement="left-start"
                __experimentalHasMultipleOrigins={ true }
             />
              <RangeControlUnit 
                rangeLabel={ __( "Radius", "gutena-kit" ) }
                attrValue={ attrValue[ activeTab ]?.radius }
                onChangeFunc={ ( radius ) => setAttr( radius, 'radius' ) }
                rangeMin={ 0 }
                rangeMax={ rangeMax }
                rangeStep={ 5 }
            />
         </>
     )
 
     if ( withPanel ) {
         return (
             <PanelBody title={ panelLabel } initialOpen={ false } >
                 { controls }
             </PanelBody>
         );
     }
 
     return controls;
 };
 
 export default BorderGroup;