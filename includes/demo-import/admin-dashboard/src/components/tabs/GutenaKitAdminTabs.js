import WelcomeTab from './WelcomeTab.js';
import TemplatesTab from './TemplatesTab.js';
import BlockSettingsTab from './BlockSettingsTab.js';
import DocTab from './DocTab.js';
import { DashboardContext } from '../../data/DashboardContextProvider';
import DemoContextProvider from '../../data/DemoContextProvider';
import { __ } from '@wordpress/i18n';
import { TabPanel } from '@wordpress/components';
import { Fragment, useContext, useState } from '@wordpress/element';

const GutenaKitAdminTabs = ( props ) => {
    const { onBoarding, makeTemplateTabActive } = useContext( DashboardContext );
    
    //check for info
    if ( typeof gutenakit_demo_info === 'undefined' || typeof gutena_kit_dashboard_info === 'undefined' ) {
        return <div>{ __( 'Sorry! Gutena kit dashboard is not available.', 'gutena-kit' ) }</div>;
    }

    const [ activationRunning, setActivationRunning ] = useState( false );
    const [ errorNotice, setErrorNoticeNotice ] = useState( null );

    const [ licenseKey, setLicenseKey ] = useState( '' );
    const [ licenseActivated, setLicenseActivated ] = useState( !! gutena_kit_dashboard_info?.pro_version?.is_activated );

    const handleLicenseKeyChange = event => {
        setLicenseKey( event.target.value );
    };

    const handleLicenseActivation = () => {
        setActivationRunning( true );

        const data = new FormData();
        data.append( 'action', 'gutena_activate_license' );
        data.append( 'nonce', gutena_kit_dashboard_info?.pro_version?.nonce );
        data.append( 'license_key', licenseKey );

        fetch( gutena_kit_dashboard_info.ajax_url, {
            method: 'POST',
            credentials: 'same-origin',
            body: data
        } )
        .then( response => response.json() )
        .then( response => {
            setActivationRunning( false );
            if ( response?.success ) {
                setLicenseActivated( true );
            } else {
                setErrorNoticeNotice( response?.data?.message );
            }
        } )
        .catch( response => {
            setActivationRunning( false );
            setErrorNoticeNotice( response );
        } );
    }

    const handleLicenseDeactivation = () => {
        var result = confirm( gutena_kit_dashboard_info?.pro_version?.text?.deactivation );
        if ( result ) {
            const data = new FormData();
            data.append( 'action', 'gutena_deactivate_license' );
            data.append( 'nonce', gutena_kit_dashboard_info?.pro_version?.nonce );

            fetch( gutena_kit_dashboard_info.ajax_url, {
                method: 'POST',
                credentials: 'same-origin',
                body: data
            } )
            .then( response => response.json() )
            .then( response => {
                console.log( response )
                if ( response?.success ) {
                    setErrorNoticeNotice( null );
                    setLicenseActivated( false );
                    setLicenseKey( '' );
                } else {
                    setErrorNoticeNotice( response?.data?.message );
                }
            } )
            .catch( response => {
                setActivationRunning( false );
                setErrorNoticeNotice( response );
            } );
        }
    }

    const handleRetry = () => {
        setActivationRunning( false );
        setErrorNoticeNotice( null );
    }

    //Tab body
    const tabsComponent = {
        welcome: WelcomeTab,
        templates: TemplatesTab,
        blockSettings: BlockSettingsTab,
        doc: DocTab,
    };

    //tabs
    const tabs = [];
    for ( let tabName in gutena_kit_dashboard_info?.tabs ) {
        let tab = gutena_kit_dashboard_info.tabs[ tabName ];
        tabs.push( {
            name: tabName,
            title: tab.tab_title,
            className: 'gutena-dashboard-' + tabName,
            details: tab
        } );
    }

    const getInitialTabName = () => {
        let initialActiveTab = 'welcome';
        //get Url part start from ?
        let urlParams = new URLSearchParams( window.location.search );
        let activeTab = urlParams.get('tab');

        if ( 'undefined' !== typeof activeTab && null != activeTab && '' !== activeTab ) {
            if ( 'blocksettings' === activeTab ) {
                initialActiveTab = 'blockSettings';
            } else if ( 'templates' === activeTab ) {
                initialActiveTab = 'templates';
            } else if ( 'doc' === activeTab ) {
                initialActiveTab = 'doc';
            }
        }

        return initialActiveTab;
    }

    return(
        <Fragment>   
            <DemoContextProvider>
                <div className="gutenakit-admin-dashboard">
                    <div className="gutena-header">
                        <div className="gutena-admin-logo">
                            <img src={ gutena_kit_dashboard_info?.logo } />
                        </div>
                            <div className="gutena-pro-license-container">
                            { gutena_kit_dashboard_info?.pro_version?.is_installed ? 
                                <>
                                    { errorNotice ? 
                                        <>
                                            <div className="gutena-pro-license-error">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20ZM10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9 13H11V15H9V13ZM9 5H11V11H9V5Z" fill="#E24F4F"/>
                                                </svg>
                                                <span>{ errorNotice }</span>
                                            </div>
                                            <button type="button" className="gutena-kit-pro-retry-button" onClick={ handleRetry }>{ gutena_kit_dashboard_info?.pro_version?.text?.retry_btn }</button>
                                        </> :
                                        <>
                                            { licenseActivated ? 
                                                <>
                                                    <div className="gutena-pro-license-activated">
                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="10" cy="10" r="10" fill="#0EA489"/>
                                                            <path d="M8.81038 13.6366C8.65168 13.6366 8.4933 13.577 8.37211 13.4576L5.45422 10.5814L6.33077 9.71709L8.81038 12.1612L13.7696 7.27295L14.6461 8.13726L9.24865 13.4576C9.12746 13.577 8.96907 13.6366 8.81038 13.6366Z" fill="white"/>
                                                        </svg>
                                                        <span>{ gutena_kit_dashboard_info?.pro_version?.text?.activated_label }</span>
                                                    </div>
                                                    <button type="button" className="gutena-kit-pro-deactivate-button" onClick={ handleLicenseDeactivation }>{ gutena_kit_dashboard_info?.pro_version?.text?.deactivate_btn }</button>
                                                </> : 
                                                <>
                                                    { activationRunning ?
                                                        <>
                                                            <input type="text" className="gutena-pro-license-field" onChange={ handleLicenseKeyChange } placeholder={ gutena_kit_dashboard_info?.pro_version?.text?.input_placeholder } value={ licenseKey } readOnly={ true } />
                                                            <button type="button" className="gutena-kit-pro-activate-button" onClick={ handleLicenseActivation }>
                                                                <img src={ gutena_kit_dashboard_info?.pro_version?.activating_img } className="gutena-kit-pro-activation-loader" />
                                                                <span>{ gutena_kit_dashboard_info?.pro_version?.text?.activating_btn }</span>
                                                            </button>
                                                        </> :
                                                        <>
                                                            <input type="text" className="gutena-pro-license-field" onChange={ handleLicenseKeyChange } placeholder={ gutena_kit_dashboard_info?.pro_version?.text?.input_placeholder } value={ licenseKey } />
                                                            <button type="button" className="gutena-kit-pro-activate-button" onClick={ handleLicenseActivation }>
                                                                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M3.69867 1.35523L4.55893 2.58419C3.01156 3.66935 2 5.46655 2 7.5C2 10.8137 4.68629 13.5 8 13.5C11.3137 13.5 14 10.8137 14 7.5C14 5.46655 12.9884 3.66935 11.4411 2.58419L12.3013 1.35523C14.2356 2.71169 15.5 4.95818 15.5 7.5C15.5 11.6421 12.1421 15 8 15C3.85786 15 0.5 11.6421 0.5 7.5C0.5 4.95818 1.76446 2.71169 3.69867 1.35523ZM7.25 7.5V0H8.75V7.5H7.25Z" fill="white"/>
                                                                </svg>
                                                                <span>{ gutena_kit_dashboard_info?.pro_version?.text?.activate_btn }</span>
                                                            </button>
                                                        </>
                                                    }
                                                </>
                                            }
                                        </>
                                    }
                                </> : 
                                <a href={ gutena_kit_dashboard_info?.pro_version?.purchase_url } className="gutena-kit-pro-redirect" target="_blank">{ gutena_kit_dashboard_info?.pro_version?.text?.purchase_btn }</a> 
                            }
                            </div>
                    </div>
                    <TabPanel
                        className="gutena-tab-panel"
                        activeClass="active-tab"
                        tabs={ tabs }
                        initialTabName={ makeTemplateTabActive ? 'templates': getInitialTabName() }
                    >
                        { ( tab ) => {
                            const TabSelected = tabsComponent[ tab.name ] || WelcomeTab;
                            return <TabSelected details={ tab.details } />;
                        } }
                    </TabPanel>
                </div>
            </DemoContextProvider>
        </Fragment>
    );
}

export default GutenaKitAdminTabs;