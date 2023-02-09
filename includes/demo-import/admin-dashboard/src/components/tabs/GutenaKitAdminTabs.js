import WelcomeTab from './WelcomeTab.js';
import TemplatesTab from './TemplatesTab.js';
import BlockSettingsTab from './BlockSettingsTab.js';
import DocTab from './DocTab.js';
import { DashboardContext } from '../../data/DashboardContextProvider';
import DemoContextProvider from '../../data/DemoContextProvider';
import { __ } from '@wordpress/i18n';
import { TabPanel } from '@wordpress/components';
import { Component, Fragment, render, useContext } from '@wordpress/element';

const GutenaKitAdminTabs = (props) => {
    const { onBoarding, makeTemplateTabActive } = useContext(DashboardContext);
    
    //check for info
    if ( typeof gutenakit_demo_info === 'undefined' || typeof gutenakit_dahboard_info === 'undefined' ){
        return(<div>{ __( 'Sorry! Gutena kit dashboard not available.', 'gutena-kit' ) }</div>);
    }

    //Tab body
    const tabsComponent = {
        welcome:WelcomeTab,
        templates:TemplatesTab,
        blockSettings:BlockSettingsTab,
        doc:DocTab,
    };
    //tabs
    const tabs = [];
    for (let tabName in gutenakit_dahboard_info.tabs) {
        let tab = gutenakit_dahboard_info.tabs[tabName];
        tabs.push(
            {
                name: tabName,
                title: tab.tab_title,
                className: 'gutena-dashboard-'+tabName,
                details: tab
            }
        );
    }

    const onSelect = ( tabName ) => {
    };

    const getInitialTabName = () => {
        
        let initiaActiveTab = 'welcome';
        //get Url part start from ?
        let urlParams = new URLSearchParams( window.location.search );
        let activeTab = urlParams.get('tab');

        if ( 'undefined' !== typeof activeTab && null != activeTab && '' !== activeTab ) {
            if ( 'blocksettings' === activeTab ) {
                initiaActiveTab = 'blockSettings';
            } else if ( 'templates' === activeTab ) {
                initiaActiveTab = 'templates';
            } else if ( 'doc' === activeTab ) {
                initiaActiveTab = 'doc';
            }
        }

        return initiaActiveTab;
    }

    return(
        <Fragment>   
            <DemoContextProvider>    
            <div className="gutenakit-admin-dashboard" >
                <div className="gutena-header" >
                    <div className="gutena-admin-logo">
                        <img src={gutenakit_dahboard_info.logo} />
                    </div>
                    
                    
                </div>
                <TabPanel
                    className="gutena-tab-panel"
                    activeClass="active-tab"
                    onSelect={ onSelect }
                    tabs={ tabs }
                    initialTabName={ makeTemplateTabActive ? 'templates': getInitialTabName() }
                >
                    { ( tab ) => {
                    const TabSelected = tabsComponent[tab.name] || WelcomeTab;
                    return( <TabSelected details={ tab.details } /> );
                    } }
                </TabPanel>
            </div>
            </DemoContextProvider>
        </Fragment>
    );
}

export default GutenaKitAdminTabs;