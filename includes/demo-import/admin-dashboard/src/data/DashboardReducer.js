/**
 * Tab reducer : perform exactly one action on each dispatch
 */
export const DashboardReducer = (state,action) =>{
    /**
     * "action" variable contain details object on click "install gutena kit" button 
     * 
     * "state" variable contain initialize array or object defined in TabContext.js
     * **/
    const { blocks, onBoarding, makeTemplateTabActive } = state;//Destructuring 
    let update = {};
    switch (action.type) {
        case 'ACTIVE_TEMPLATE_TAB':
            update = {
                blocks: action.blocks,
                onBoarding: false,
                makeTemplateTabActive: true
            };
            return update;
            break;
        default: return state;
    }
}