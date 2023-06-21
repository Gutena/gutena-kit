/**
 * demo global data
 */
import { DemoReducer } from './DemoReducer';
import { createContext, useReducer } from '@wordpress/element';
const DemoContext = createContext();

const DemoContextProvider = (props) => {
    
    let currentDemo = {
        showGutenaThemeRequireModal:false,
        gutenaThemeAvailable: '1' === gutenakit_demo_info.gutena_theme_available,
        previewDemoDispatchData:{},//Use after theme install to send to preview demo
        isPreviewDemo: false, 
        previewDemoData: {}, 
        styleSelected: 'default', 
        baseDemoIndex: 0,
        demoIndex: 0
    };
    const [demoInfo, dispatch] = useReducer(DemoReducer,currentDemo);
    //dispatch = DemoReducer : it's a reducer function defined in DemoReducer.js
    // DemoReducer function can access { demoIndex, styleSelected, demoSelected, msg } as a state
    return(
        <DemoContext.Provider value={{...demoInfo,dispatch}} >
        {props.children}
        </DemoContext.Provider>
    );
}

export default DemoContextProvider;

export { DemoContext };