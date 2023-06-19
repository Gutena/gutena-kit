/**
 * Demo Preview Screen : admin can select styles variation
 */
import { DemoContext } from '../../data/DemoContextProvider';
 
import { __ } from '@wordpress/i18n';
import { Fragment, useContext } from '@wordpress/element';
import { Icon } from '@wordpress/components';
const DemoPreview = ( props ) => {

    const { isPreviewDemo, previewDemoData, styleSelected, baseDemoIndex, demoIndex, dispatch } = useContext( DemoContext );
    const  defaultDemo = previewDemoData.default;

    //RESET DEMO STYLE FOR PREVIEW AND IMPORT
    const demoStyleReSet = () => {
        dispatch({type: 'RESET_PREVIEW_DEMO'}) 
        //Send Message to iframe to change global styles as per user choice for preview
        document.getElementById("gk-demo-preview-frame").contentWindow.postMessage({"style":"default"},"*");
    }

    //SET DEMO STYLE FOR PREVIEW AND IMPORT
    const demoStyleSet = ( styleSlug, selectedDemoIndex ) => {
        dispatch({ 
            type: 'SET_PREVIEW_DEMO',
            styleSelected: styleSlug, 
            demoIndex: selectedDemoIndex 
        }); 
        //Send Message to iframe to change global styles as per user choice for preview
        document.getElementById("gk-demo-preview-frame").contentWindow.postMessage({"style":styleSlug},"*");
    }
    
    return(
        <Fragment> 
        {  ( isPreviewDemo && defaultDemo.preview_url.length > 5 ) ? 
            <div className="gk-demo-preview wp-full-overlay expanded preview-desktop" >
                <div id="customize-controls" className="gk-left-section wrap wp-full-overlay-sidebar">
                    <div className="gk-header" >
                        <div 
                        className="gk-back-button"
                        onClick={() => dispatch({type: 'CLOSE_PREVIEW_DEMO'}) }
                        >
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
                            <div 
                            className="gk-reset-icon" 
                            title="reset"  
                            onClick={() => demoStyleReSet() } 
                            > 
                                <Icon icon="image-rotate" /> 
                            </div>
                        </div>
                        <div className="gk-style-variation-cards" >
                            { ( Object.keys(previewDemoData).length > 0 ) ?  
                                Object.keys(previewDemoData).map(function( styleSlug, index ) {
                                    let demoVariation = previewDemoData[styleSlug];
                                    return(
                                        <div key={ 'gk-demo-variation'+styleSlug }
                                         className={`gk-color-demo-variation-card ${ ( styleSelected === styleSlug ) ? "style-selected" : "" }` } 
                                         onClick={ () => demoStyleSet( styleSlug, parseInt(baseDemoIndex)+index ) }
                                         >
                                            <div className="gk-demo-color-palette">   
                                             {
                                                ( demoVariation.colors.length > 0 ) ?  demoVariation.colors.map( ( colorCode, colorIndex) => {
                                                    return(
                                                        <span 
                                                            key={ 'gk-colors-'+colorIndex }
                                                            className="gk-color-swatch"
                                                            style={ {background:colorCode} }
                                                        />
                                                    );
                                                } ):''
                                             }
                                             </div>
                                             <div className="demo-style-details">
                                                 <div className="style-title">
                                                    {demoVariation.title}
                                                </div>
                                                 <div className="font-families">
                                                     {demoVariation.fontFamily.join(', ')}
                                                 </div>
                                             </div>
                                        </div>
                                    );
                                })
                                :'' 
                            }
                        </div>
                    </div>
                    <div className="import-demo-action">
                        <a 
                        className="import-demo-btn" 
                        href={gutenakit_demo_info.demo_import_url+demoIndex}
                        >
                            <span className="gk-btn-icon">
                                <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="12" width="12" height="1" fill="white"/>
                                <rect x="5" y="9" width="9" height="1" transform="rotate(-90 5 9)" fill="white"/>
                                <path d="M5.49994 10L1 5.55124L1.51037 5L5.5 8.94401L9.48963 5L10 5.55124L5.49994 10Z" fill="white"/>
                                </svg>
                            </span>
                            <span className="gk-btn-text">{ __('Import Demo','gutena-kit') }</span>
                        </a>
                    </div>
                </div>
                <div id="customize-preview" className="gk-right-section wp-full-overlay-main iframe-ready">
                    <iframe 
                        id="gk-demo-preview-frame"
                        title="Site Preview" 
                        width="100%"
                        height="100%"
                        sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts"
                        src={ defaultDemo.preview_url+'?embedddemo=gd' } 
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