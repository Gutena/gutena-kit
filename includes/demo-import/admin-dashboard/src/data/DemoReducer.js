/**
 * demo reducer : perform exactly one action on each dispatch
 */
export const DemoReducer = (state,action) =>{
    /**
     * "action" variable contain details object type of action
     * 
     * "state" variable contain initialize array or object defined in DemoContext.js
     * **/
    const { showGutenaThemeRequireModal, gutenaThemeAvailable, previewDemoDispatchData, isPreviewDemo, previewDemoData, styleSelected, baseDemoIndex, demoIndex } = state;//Destructuring 
    let update = {};
    switch (action.type) {
        case 'GUTENA_THEME_INSTALLED':
            update = {
                ...state,
                showGutenaThemeRequireModal: false,
                gutenaThemeAvailable: true
            };
            return update;
            break;
        case 'SHOW_GUTENA_THEME_REQUIRE_MODAL':
            update = {
                ...state,
                showGutenaThemeRequireModal: true,
                previewDemoDispatchData: action.previewData
            };
            return update;
            break;
        case 'CLOSE_GUTENA_THEME_REQUIRE_MODAL':
            update = {
                ...state,
                showGutenaThemeRequireModal: false
            };
            return update;
            break;
        case 'PREVIEW_DEMO':
            update = {
                ...state,
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
                ...state,
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
                ...state,
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
                ...state,
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