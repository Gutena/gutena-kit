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
    console.log("makeTemplateTabActive",makeTemplateTabActive);
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
                    initialTabName={ makeTemplateTabActive ? 'templates': 'welcome' }
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