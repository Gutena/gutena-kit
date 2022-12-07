/**
 * Box Shadow Group
 */
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { 
    PanelBody, 
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';
import GetComponent from './GetComponent';
 
const DEFAULT_EVENTS_TABS = {
    normal: __( 'Normal', 'gutena-kit' ),
    hover: __( 'Hover', 'gutena-kit' )
}
 
const noop = () => {};
 
const EventsControl = ( props ) => {
    const {
        componentName = '',
        label = '',
        attrValue = {},
        eventTabs = DEFAULT_EVENTS_TABS,
        onChangeFunc = noop,
        withPanel = true,
        openPanel = false
    } = props;

    const eventAttr = Object.keys( eventTabs );
    const [ activeTab, setActiveTab ] = useState( eventAttr[0] );

    //Set attribute
    const setAttr = ( value ) => {
        let newAttr = attrValue;
        newAttr[activeTab] = value;
        onChangeFunc( { ...newAttr } );
    };

    const controls = (
        <>
            { eventAttr.length > 1 && /* show only if there is multiple items present. */
                <ToggleGroupControl 
                    label={ label } 
                    value={ activeTab } 
                    onChange={ ( value ) => setActiveTab( value ) } 
                    isBlock 
                    hideLabelFromVision={ withPanel } 
                >
                    {
                        eventAttr.map( ( value ) => (
                            <ToggleGroupControlOption key={ value } value={ value } label={ eventTabs[ value ] } />
                        ) )
                    }
                </ToggleGroupControl>
            }
            <GetComponent 
                { ...props }
                attrValue = { attrValue[ activeTab ] }
                onChangeFunc = { ( value ) => setAttr( value ) }
                withPanel = { false }
            />
        </>
    );

    if ( withPanel ) {
        return (
            <PanelBody title={ label } initialOpen={ openPanel }>
                { controls }
            </PanelBody>
        );
    }

    return controls;
};

export default EventsControl;