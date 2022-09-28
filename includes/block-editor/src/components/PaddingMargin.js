/**
 * Spacing : Padding | Margin 
 */
import { __ } from '@wordpress/i18n';
import { 
      __experimentalBoxControl as BoxControl,
} from '@wordpress/components';
import SelectDeviceDropdown from './SelectDeviceDropdown';
import { gkIsEmpty } from '../helpers/helpers';

const noop = () => {};
 
const PaddingMargin = ({
    label = __( 'Spacing', 'gutena-kit' ),
	attrValue,
	onChangeFunc = noop,
	negativeValue=false,
    allowReset=true
 }) => {

    return(
        <>
            <SelectDeviceDropdown />
            <BoxControl
                label={ label }
                values={ attrValue }
                onChange={ ( value ) =>onChangeFunc( value ) }
                allowReset={ allowReset }
                inputProps={ { min: negativeValue ? -Infinity : 0 } }
            />
        </>
    )
}

export default PaddingMargin;