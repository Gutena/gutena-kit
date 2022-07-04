/**
 * Demo card
 */
 import { DemoContext } from '../data/DemoContextProvider';
 
 const { useContext } = wp.element;

const DemoCard = ( props ) => {
    const { import_preview_image_url, import_file_name } = props.demoWithVariation.default;
    const { isPreviewDemo, previewDemoData, styleSelected, demoIndex, dispatch } = useContext( DemoContext );

    //Get actual demo index including all styles variation
    const getDemoindex = () => {
        let selectedDemoIndex = props.demoIndex;
        if( selectedDemoIndex > 0 ){
            //noOfStyles = style variation + main demo
            let noOfStyles = Object.keys(props.demoWithVariation).length;
            selectedDemoIndex = selectedDemoIndex * noOfStyles + 1;
        }
        return selectedDemoIndex;
    }
    
    //On click demo card open preview demo modal
    const onClickDemoCard = () => {
        let selectedDemoIndex = getDemoindex();
        dispatch({ 
            type: 'PREVIEW_DEMO', 
            selectedDemoData: props.demoWithVariation, 
            selectedDemoIndex:selectedDemoIndex 
        }); 
    }
    
    return(
        <div className="gk-demo-card" onClick={ () => onClickDemoCard() } >
            <div className="gk-demo-card-img">
                <img src={  import_preview_image_url } alt={  import_file_name } loading="lazy"/>
            </div>
            <div className="gk-demo-card-footer">
                <div className="gk-demo-title">
                    { import_file_name }
                </div>
            </div>
        </div>
    )
}

export default DemoCard;