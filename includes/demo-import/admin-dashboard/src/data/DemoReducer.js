/**
 * demo reducer : perform exactly one action on each dispatch
 */
export const DemoReducer = (state,action) =>{
    /**
     * "action" variable contain details object type of action
     * 
     * "state" variable contain initialize array or object defined in DemoContext.js
     * **/
    const { isPreviewDemo, previewDemoData, styleSelected, demoIndex } = state;//Destructuring 
    let update = {};
    switch (action.type) {
        case 'PREVIEW_DEMO':
            update = {
                isPreviewDemo: true, 
                previewDemoData: action.selectedDemoData, 
                styleSelected: 'default', 
                demoIndex: action.selectedDemoIndex
            };
            return update;
            break;
        case 'CLOSE_PREVIEW_DEMO':
            update = {
                isPreviewDemo: false, 
                previewDemoData: action.selectedDemoData, 
                styleSelected: 'default', 
                demoIndex: 0
            };
            return update;
            break;
        default: return state;
            
    }
}