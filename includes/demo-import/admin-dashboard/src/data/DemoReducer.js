/**
 * demo reducer : perform exactly one action on each dispatch
 */
export const DemoReducer = (state,action) =>{
    /**
     * "action" variable contain details object type of action
     * 
     * "state" variable contain initialize array or object defined in DemoContext.js
     * **/
    const { isPreviewDemo, previewDemoData, styleSelected, baseDemoIndex, demoIndex } = state;//Destructuring 
    let update = {};
    switch (action.type) {
        case 'PREVIEW_DEMO':
            update = {
                isPreviewDemo: true, 
                previewDemoData: action.selectedDemoData, 
                styleSelected: 'default', 
                baseDemoIndex:action.selectedDemoIndex,
                demoIndex: action.selectedDemoIndex
            };
            return update;
            break;
        case 'SET_PREVIEW_DEMO':
            update = {
                isPreviewDemo: true, 
                previewDemoData: previewDemoData, 
                styleSelected: action.styleSelected, 
                baseDemoIndex:baseDemoIndex,
                demoIndex: action.demoIndex
            };
            return update;
            break;
        case 'RESET_PREVIEW_DEMO':
            update = {
                isPreviewDemo: true, 
                previewDemoData: previewDemoData, 
                styleSelected: 'default', 
                baseDemoIndex:baseDemoIndex,
                demoIndex: baseDemoIndex
            };
            return update;
            break;
        case 'CLOSE_PREVIEW_DEMO':
            update = {
                isPreviewDemo: false, 
                previewDemoData: previewDemoData, 
                styleSelected: 'default', 
                baseDemoIndex: 0,
                demoIndex: 0
            };
            return update;
            break;
        default: return state;
            
    }
}