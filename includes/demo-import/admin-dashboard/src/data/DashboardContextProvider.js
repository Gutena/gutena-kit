/**
 * Tab global data
 */
const { createContext, useReducer } = wp.element;
import { DashboardReducer } from './DashboardReducer';
const DashboardContext = createContext();

const DashboardContextProvider = (props) =>{
    let dashboardInfo = {
        blocks: gutenakit_dahboard_info.onboarding_info.step_two.blocks.map( block => ( { ...block, status: block.is_enabled } ) ),
        onBoarding: gutenakit_dahboard_info.onboarding,
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