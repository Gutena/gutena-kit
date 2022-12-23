import WelcomeTab from './components/tabs/WelcomeTab.js';
import TemplatesTab from './components/tabs/TemplatesTab.js';
import BlockSettingsTab from './components/tabs/BlockSettingsTab.js';
import DocTab from './components/tabs/DocTab.js';
import { __ } from '@wordpress/i18n';
import { TabPanel } from '@wordpress/components';
import { Component, Fragment, render } from '@wordpress/element';
import './style.scss';

class GutenaKitAdminDashboard extends Component {
    render(){
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
                    >
                        { ( tab ) => {
                        const TabSelected = tabsComponent[tab.name] || WelcomeTab;
                        return( <TabSelected details={ tab.details } /> );
                        } }
                    </TabPanel>
                </div>
            </Fragment>
        );
    }
}

class GutenaKitAdminOnBoarding extends Component {
    render(){
        //check for info
        if ( typeof gutenakit_demo_info === 'undefined' || typeof gutenakit_dahboard_info === 'undefined' ){
            return(<div>{ __( 'Sorry! Gutena kit dashboard not available.', 'gutena-kit' ) }</div>);
        }

        return(
            <Fragment>     
                <div className="gutenakit-admin-dashboard" >
                    <div className="gutena-header" >
                        <div className="gutena-admin-logo">
                            <img src={gutenakit_dahboard_info.logo} />
                        </div>
                        
                        
                    </div>
                    
                </div>
            </Fragment>
        );
    }
}

wp.domReady( () => {
    render(
        <GutenaKitAdminDashboard />,
        document.querySelector('#gutenakit-admin-dashboard-page')
    );
});