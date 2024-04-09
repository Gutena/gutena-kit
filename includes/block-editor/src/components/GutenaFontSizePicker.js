/**
 * Gutena Responsive Font Size Picker
 */
import { __ } from '@wordpress/i18n';
import {
    FontSizePicker,
    useSettings,
} from '@wordpress/block-editor';
import {
    __experimentalUnitControl as UnitControl,
    __experimentalHStack as HStack,
    __experimentalSpacer as Spacer,
    FlexItem,
    BaseControl,
    SelectControl,
    Button,
} from '@wordpress/components';
import { settings } from '@wordpress/icons';
import { useState, useEffect } from '@wordpress/element';
import SelectDeviceDropdown from './SelectDeviceDropdown';
import { gkIsEmpty, getMatchArrObjKeyValue } from '../helpers/helpers';
 
const noop = () => {};
 
const GutenaFontSizePicker = ( props ) => {
    const {
        label = __( 'Size', 'gutena-kit' ),
        fontSize = undefined,
        onChangeFunc = noop,
        reponsive = false,
        setCustom = false
    } = props;

    //Variable to check if typography use custom font size or not
    const [ customSize, setCustomSize ] = useState( setCustom || ( ! gkIsEmpty( fontSize ) && 10 > fontSize.length ) );
 
    //Theme font size preset
    const [fontSizes] = useSettings( 'typography.fontSizes' );

    //Font size array for select
    const fonSizesArray = gkIsEmpty( fontSizes ) ? [] : fontSizes.map( ( item ) => ( { label: item?.name ?? item.slug.replace( 'xx-', __( 'Extra Extra ', 'gutena-kit' ) ), value: 'has-' + item.slug + '-font-size', fontSize: item.size } ) );

    //when switch theme font size to custom
    const setCustomFontSize = () => {
        if ( gkIsEmpty( fontSize ) ) {
            setCustomSize( ! customSize );
            return ! customSize;
        }
    
        if ( customSize ) {
            //check if any preset is exists equivalent to custom fontSize
            let newfontSlug = getMatchArrObjKeyValue( fonSizesArray, 'fontSize', fontSize, 'value' );
            if ( newfontSlug ) {
                onChangeFunc( newfontSlug );
            }
        } else {
            //if theme font size selected then it must be a string but for custom fontsize we require its value
            let newfontSize = getMatchArrObjKeyValue( fonSizesArray, 'value', fontSize, 'fontSize' );
            if ( newfontSize ) {
                onChangeFunc( newfontSize );
            }
        }

        setCustomSize( ! customSize );
    }
    
    //Font size theme preset label 
    let customLabel =  customSize ? __( 'Custom', 'gutena-kit' ) : getMatchArrObjKeyValue( fonSizesArray, 'value', fontSize, 'label' );
    
    customLabel = ( false === customLabel || ( ! customSize &&  gkIsEmpty( fontSize ) ) ) ? __( 'Default', 'gutena-kit' ) : '('+ customLabel + ')';

    return (
        reponsive ? 
        <>
            <HStack className="components-font-size-picker__header">
                <FlexItem>
                    <BaseControl.VisualLabel aria-label={ `${ __( 'Size', 'gutena-kit' ) } ${ customLabel || '' }` }>
                        { label }
                        <span className="components-font-size-picker__header__hint">{ customLabel }</span>
                    </BaseControl.VisualLabel>
                    { customSize &&
                        <SelectDeviceDropdown />
                    }
                </FlexItem>
                <FlexItem>
                    <Button
                        label={ customSize ? __( 'Use size preset', 'gutena-kit' ) : __( 'Set custom size', 'gutena-kit' ) }
                        icon={ settings }
                        onClick={ () => setCustomFontSize() }
                        isPressed={ customSize }
                        isSmall
                        iconSize={ 24 }
                    />
                </FlexItem>
            </HStack>
            <Spacer marginBottom={ 5 }>
                {
                    customSize 
                    ? <UnitControl
                        value={ fontSize }
                        onChange={ ( value ) => onChangeFunc( value ) }
                        __nextHasNoMarginBottom
                    />
                    : <SelectControl
                        value={ fontSize }
                        options={ fonSizesArray }
                        onChange={ ( newSize ) => onChangeFunc( newSize ) }
                        __nextHasNoMarginBottom
                    />
                }
            </Spacer>
        </> :
        <FontSizePicker
            value={ fontSize }
            onChange={ ( value ) => onChangeFunc( value ) }
            disableCustomFontSizes={ false }
            size="__unstable-large"
            __nextHasNoMarginBottom
        />
    );
}
 
export default GutenaFontSizePicker;