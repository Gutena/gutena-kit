import { __ } from '@wordpress/i18n';
import domReady from '@wordpress/dom-ready';
import {render, useContext } from '@wordpress/element';
import './style.scss';
//On boarding dashboard
import GutenaKitAdminOnBoarding from './components/onBoarding/GutenaKitAdminOnBoarding';
//Admin dashboard Tabs
import GutenaKitAdminTabs from './components/tabs/GutenaKitAdminTabs';
//Data provider
import  DashboardContextProvider, { DashboardContext } from './data/DashboardContextProvider';

//Admin Dashboard
const GutenaKitAdminDashboard = () => {
    const { onBoarding, makeTemplateTabActive } = useContext(DashboardContext);
    return(
        onBoarding ? <GutenaKitAdminOnBoarding /> : <GutenaKitAdminTabs />   
    );
}

//Set dashboard at HTML id echo by Gutena_Kit_Admin class
domReady( () => {
    //check for info
    if ( typeof gutenakit_demo_info === 'undefined' || typeof gutenakit_dahboard_info === 'undefined' ){
        return(<div>{ __( 'Sorry! Gutena kit dashboard not available.', 'gutena-kit' ) }</div>);
    }
    render(
        <DashboardContextProvider >
          <GutenaKitAdminDashboard />
        </DashboardContextProvider>
        ,
        document.getElementById('gutenakit-admin-dashboard-page')
    );
});