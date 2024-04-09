import { __ } from '@wordpress/i18n';
import domReady from '@wordpress/dom-ready';
import { render, useContext } from '@wordpress/element';
import './style.scss';
//On boarding dashboardgutena-admin-logo
import GutenaKitAdminOnBoarding from './components/onBoarding/GutenaKitAdminOnBoarding';
//Admin dashboard Tabs
import GutenaKitAdminTabs from './components/tabs/GutenaKitAdminTabs';
//Data provider
import  DashboardContextProvider, { DashboardContext } from './data/DashboardContextProvider';

//Admin Dashboard
const GutenaKitAdminDashboard = () => {
    const { onBoarding, makeTemplateTabActive } = useContext( DashboardContext );
    return(
        onBoarding ? <GutenaKitAdminOnBoarding /> : <GutenaKitAdminTabs />   
    );
}

// Set dashboard at HTML id echo by Gutena_Kit_Admin class
let gutenaAdminDashboard = document.getElementById( 'gutenakit-admin-dashboard-page' );
if ( gutenaAdminDashboard ) {
    domReady( () => {
        //check for info
        if ( typeof gutenakit_demo_info === 'undefined' || typeof gutena_kit_dashboard_info === 'undefined' ) {
            return <div>{ __( 'Sorry! Gutena Kit dashboard is not available.', 'gutena-kit' ) }</div>;
        }
        render(
            <DashboardContextProvider >
                <GutenaKitAdminDashboard />
            </DashboardContextProvider>, 
            gutenaAdminDashboard
        );
    } );
}