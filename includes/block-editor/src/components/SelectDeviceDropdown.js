/**
 * Select Device Type
 */
 import { __ } from '@wordpress/i18n';
 import { useDispatch, useSelect } from "@wordpress/data";
 import {
    DropdownMenu,
    __experimentalHStack as HStack,
 } from "@wordpress/components";

const SelectDeviceDropdown = ({ sideLabel="" }) => {

    //Get Device preview type
    const deviceType = useSelect((select) => {
        return select("core/edit-post").__experimentalGetPreviewDeviceType();
        }, []);
    
    //Set Preview
    const { __experimentalSetPreviewDeviceType: setPreviewDeviceType } =
        useDispatch("core/edit-post");

    return (
        <HStack justify="flex-start">
        <DropdownMenu
        label={ __('Select device','gutena-kit') }
        className="my-container-class-name"
        icon={ ( 'Mobile' === deviceType ) ? 'smartphone' : deviceType.toLowerCase() }
        controls={ [
            {
                title: __( 'Desktop', 'gutena-kit' ),
                icon: 'desktop',
                onClick: () => setPreviewDeviceType( 'Desktop' ),
            },
            {
                title: __( 'Tablet', 'gutena-kit' ),
                icon: 'tablet',
                onClick: () => setPreviewDeviceType( 'Tablet' ),
            },
            {
                title: __( 'Mobile', 'gutena-kit' ),
                icon: 'smartphone',
                onClick: () => setPreviewDeviceType( 'Mobile' ),
            }
        ] }
        />
        <label>{ sideLabel }</label>
        </HStack>
    );
}

export default SelectDeviceDropdown;