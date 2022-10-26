/**
 * translate3d : offset-x(abscissa) | offset-y(ordinate) | offset-z
 * transform: translate3d(tx, ty, tz);
 * tx, ty: length or % of representing the abscissa and ordinate of the translating vector respectively.
 * tz : length representing the z component of the translating vector. It can't be a % value. 
 */
 import { __ } from '@wordpress/i18n';
 import { 
     PanelBody, 
     __experimentalSpacer as Spacer
 } from '@wordpress/components';
 import RangeControlUnit from './RangeControlUnit';
 import SelectDeviceDropdown from './SelectDeviceDropdown';
 import { gkIsEmpty } from '../helpers/helpers';
 
 const DEFAULT_TRANSLATE3D = {
     x: undefined,
     y: undefined,
     z: undefined,
 };
 
 const noop = () => {};
 
 const Translate3dControl = ( {
     label = __( 'Offset', 'gutena-kit' ),
     attrValue = DEFAULT_TRANSLATE3D,
     onChangeFunc = noop
 } ) => {
 
     const MAX_SPACE_VALUES = {
         px: 1000,
         em: 100,
         rem: 100,
         '%': 200,
     };
 
     const translate3dAttr = {
         x: __( 'X-Axis', 'gutena-kit' ),
         y: __( 'Y-Axis', 'gutena-kit' ),
         z: __( 'Z-Axis', 'gutena-kit' ),
     };
 
     const setAttr = ( value, attrName ) => {
         let newAttr = gkIsEmpty( attrValue )
             ? DEFAULT_BOX_SHADOW
             : attrValue;
         newAttr[ attrName ] = value;
         onChangeFunc( { ...newAttr } );
     };
 
    return(
    <PanelBody title={ label } initialOpen={ false } >
        <SelectDeviceDropdown />
        { [ 'x', 'y', 'z' ].map( ( attrName ) => (
            <RangeControlUnit
                key={ attrName }
                rangeLabel={ translate3dAttr[ attrName ] }
                attrValue={
                    gkIsEmpty( attrValue[ attrName ] )
                        ? undefined
                        : attrValue[ attrName ]
                }
                onChangeFunc={ ( value ) => setAttr( value, attrName ) }
                rangeMin={ 0 }
                rangeMax={ MAX_SPACE_VALUES }
                rangeStep={ 10 }
                attrUnits= { ( 'z' === attrName ) ? [ 'px', 'em', 'rem' ] : [ 'px', 'em', 'rem', '%' ] }
            />
        ) ) }
    </PanelBody>
    )
 };
 
 export default Translate3dControl;