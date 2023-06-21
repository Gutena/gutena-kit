/**
 * Tab global data
 */
import { createContext, useReducer } from '@wordpress/element';
import { DashboardReducer } from './DashboardReducer';
const DashboardContext = createContext();

const DashboardContextProvider = (props) =>{
    let dashboardInfo = {
        blocks: gutena_kit_dashboard_info.onboarding_info.step_two.blocks.map( block => ( { 
            ...block, 
            status: block.is_enabled, 
            is_enabled: '1' == gutena_kit_dashboard_info.onboarding ? true : block.is_enabled 
        } ) ),
        onBoarding: gutena_kit_dashboard_info.onboarding,
        makeTemplateTabActive: false,
    };
    const [dashboardProgress, dispatch] = useReducer(DashboardReducer,dashboardInfo);
    //dispatch = DashboardReducer : it's a reducer function defined in DashboardReducer.js
    // DashboardReducer function can access { installationInProgress, dashboardRes, message } as a state
    return(
        <DashboardContext.Provider value={{...dashboardProgress,dispatch}} >
        {props.children}
        </DashboardContext.Provider>
    );
}

export default DashboardContextProvider;

export {DashboardContext};