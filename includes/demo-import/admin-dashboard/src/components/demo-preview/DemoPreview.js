/**
 * Demo Preview Screen : admin can select styles variation
 */
 import { DemoContext } from '../../data/DemoContextProvider';
 
const {__} = wp.i18n;
const { Fragment, useContext } = wp.element;
const { Icon } = wp.components;
const DemoPreview = ( props ) => {
 
    const { isPreviewDemo, previewDemoData, styleSelected, demoIndex, dispatch } = useContext( DemoContext );
    const  defaultDemo = previewDemoData.default;
   // console.log("previewDemoData", previewDemoData);
    //Get actual demo index including all styles variation
    const getDemoindex = () => {
        let selectedDemoIndex = props.demoIndex;
        if( selectedDemoIndex > 0 ){
            //noOfStyles = style variation + main demo
            let noOfStyles = Object.keys(previewDemoData).length;
            selectedDemoIndex = selectedDemoIndex * noOfStyles + 1;
        }
        return selectedDemoIndex;
    }
    
    //On click demo card open preview demo modal
    const onClickDemoCard = () => {
        let selectedDemoIndex = getDemoindex();
        dispatch({ 
            type: 'PREVIEW_DEMO', 
            selectedDemoData: props.demoInfo, 
            selectedDemoIndex:selectedDemoIndex 
        }); 
    }
    
    return(
        <Fragment> 
        {  ( isPreviewDemo && defaultDemo.preview_url.length > 5 ) ? 
            <div className="gk-demo-preview wp-full-overlay expanded preview-desktop" >
                <div id="customize-controls" className="gk-left-section wrap wp-full-overlay-sidebar">
                    <div className="gk-header" >
                        <div className="gk-back-button">
                            <div className="gk-icon">
                                <Icon icon="arrow-left-alt2" />
                            </div>
                            <div className="gk-text">
                                { __('BACK','gutena-kit') }
                            </div>
                        </div>
                        <div className="gk-demo-title">
                             { defaultDemo.import_file_name+' '+__('Demo','gutena kit') }
                        </div>
                    </div>
                    <div className="gk-style-variations" >
                        <div className="gk-section-title-reset-icon">
                            <div className="gk-section-title"> 
                                { __('Choose Style','gutena-kit') } 
                            </div>
                            <div className="gk-reset-icon"> 
                                <Icon icon="image-rotate" /> 
                            </div>
                        </div>
                        <div className="gk-style-variations-card" >
                            { ( Object.keys(previewDemoData).length > 0 ) ?  
                                Object.keys(previewDemoData).forEach(function(key) {
                                    console.log(key, previewDemoData[key]);
                                })
                                :'' 
                            }
                        </div>
                    </div>
                </div>
                <div id="customize-preview" className="gk-right-section wp-full-overlay-main iframe-ready">
                    <iframe 
                        id="gk-demo-preview-frame"
                        title="Site Preview" 
                        width="100%"
                        height="100%"
                        sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts"
                        src={ defaultDemo.preview_url+'?igu=1' } 
                   ></iframe>
                </div>
            </div>
            :
            '' 
        }
        </Fragment> 
    )
}

export default DemoPreview;