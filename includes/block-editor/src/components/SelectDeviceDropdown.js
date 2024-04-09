/**
 * Select Device Type
 */
import { __ } from '@wordpress/i18n';
import { useDispatch, useSelect } from "@wordpress/data";
import {
    DropdownMenu,
    __experimentalHStack as HStack,
    Icon,
} from "@wordpress/components";
import {
	store as editorStore,
} from '@wordpress/editor';
import { gkIsEmpty } from '../helpers/helpers';
import { desktopIcon, tabletIcon, mobileIcon  } from './gutenaIcons';

const SelectDeviceDropdown = ( { 
    sideLabel = "", 
    onChangefunc = undefined,
    deviceTypeLocal = undefined,
    labelAtLeft = false,
} ) => {

    //Get Device preview type
    const deviceType = useSelect( select => {
        return select( 'core/editor' ).getDeviceType();
    }, [] );
    
    //Local device type based on parent component
    const deviceTypeView = gkIsEmpty( deviceTypeLocal ) ? deviceType : deviceTypeLocal;

    //Set Preview
    const { setDeviceType } = useDispatch( editorStore );
    
    const setDeviceTypeFunc = gkIsEmpty( onChangefunc ) ? setDeviceType : onChangefunc;

    const selectedIcon = ( 'Desktop' === deviceTypeView ) ? desktopIcon : ( 'Tablet' === deviceTypeView ) ? tabletIcon : mobileIcon ;

    return (
        <HStack justify="flex-start">
            { labelAtLeft && 1 < sideLabel.length && <label> { sideLabel } </label> }
            <DropdownMenu
                label={ __('Select device','gutena-kit') }
                className="gutena-kit-select-device"
                popoverProps={ {
                    className:"gutena-kit-select-device-popover"
                } }
                icon={ selectedIcon }
                controls={ [
                    {
                        title: __( 'Desktop', 'gutena-kit' ),
                        icon: desktopIcon,
                        onClick: () => setDeviceTypeFunc( 'Desktop' ),
                    },
                    {
                        title: __( 'Tablet', 'gutena-kit' ),
                        icon: tabletIcon,
                        onClick: () => setDeviceTypeFunc( 'Tablet' ),
                    },
                    {
                        title: __( 'Mobile', 'gutena-kit' ),
                        icon: mobileIcon,
                        onClick: () => setDeviceTypeFunc( 'Mobile' ),
                    }
                ] }
            />
            { ! labelAtLeft && 1 < sideLabel.length && <label> { sideLabel } </label> }
        </HStack>
    );
}

export default SelectDeviceDropdown;