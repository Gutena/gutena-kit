/**
 * demo global data
 */
import { DemoReducer } from './DemoReducer';
const { createContext, useReducer } = wp.element;
const DemoContext = createContext();

const DemoContextProvider = (props) => {
    
    let currentDemo = {
        isPreviewDemo: false, 
        previewDemoData: {}, 
        styleSelected: 'default', 
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