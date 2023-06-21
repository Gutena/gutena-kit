/**
 * Demo card
 */
import { DemoContext } from '../../data/DemoContextProvider';

import { __ } from '@wordpress/i18n';
import { Icon } from '@wordpress/components';
import { useContext } from '@wordpress/element';

const DemoCard = ( props ) => {
    const { import_preview_image_url, import_file_name, preview_url, demo_type } = props.demoWithVariation.default;
    const { gutenaThemeAvailable, previewDemoDispatchData, isPreviewDemo, previewDemoData, styleSelected, baseDemoIndex, demoIndex, dispatch } = useContext( DemoContext );

    //Get actual demo index including all styles variation
    const getDemoindex = () => {
        let selectedDemoIndex = props.demoIndex;
        if( selectedDemoIndex > 0 ){
            //noOfStyles = style variation + main demo
            let noOfStyles = Object.keys(props.demoWithVariation).length;
            selectedDemoIndex = selectedDemoIndex * noOfStyles;
        }
        return selectedDemoIndex;
    }
    
    //On click demo card open preview demo modal
    const onClickDemoCard = () => {
        if('freepro'=== demo_type){
            window.open( preview_url, '_blank' );
        }else{
            let selectedDemoIndex = getDemoindex();
            let previewData = { 
                type: 'PREVIEW_DEMO', 
                selectedDemoData: props.demoWithVariation, 
                selectedDemoIndex:selectedDemoIndex 
            };
            dispatch(
                gutenaThemeAvailable ? previewData : { type: 'SHOW_GUTENA_THEME_REQUIRE_MODAL', previewData: previewData}
            );
           
        } 
    }
    
    return(
        <div className="gk-demo-card"  >
            {
                'freepro' === demo_type ? 
                <div className='gk-demo-pro-icon'>
                    <img src={gutenakit_demo_info.pro_icon} />
                </div> : ''
            }
            <div className='gk-demo-link'>
                <a href={ preview_url } target="_blank" >
                    <img src={gutenakit_demo_info.link_icon} />
                </a>
            </div>
            <div className="gk-demo-card-img">
                <img src={  import_preview_image_url } alt={  import_file_name } loading="lazy"/>
            </div>
            <div className="gk-demo-card-footer">
                <div className="gk-demo-title">
                    { import_file_name }
                </div>
                <div className="gk-demo-import-action" onClick={ () => onClickDemoCard() } >
                { 
                    ( 'freepro'=== demo_type ) ? 
                    <>
                        <div className="import-icon">
                        <Icon icon='external' size='5' />
                        </div>
                        <div className="import-btn-name">
                        {__( 'View', 'gutena-kit' )}
                        </div>
                    </>:
                    <>
                        <div className="import-icon">
                        <Icon
                            size='5'
                            icon={ () => (
                                <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.833375 11.0835C0.832862 10.1631 1.06706 9.25771 1.51383 8.45296C1.96061 7.64821 2.60521 6.97067 3.38671 6.48438C3.59297 4.87612 4.37821 3.39813 5.59547 2.32701C6.81274 1.25589 8.37861 0.665039 10 0.665039C11.6215 0.665039 13.1873 1.25589 14.4046 2.32701C15.6219 3.39813 16.4071 4.87612 16.6134 6.48438C17.5827 7.08745 18.3368 7.98138 18.7678 9.03853C19.1988 10.0957 19.2848 11.262 19.0135 12.3709C18.7422 13.4798 18.1274 14.4747 17.257 15.2134C16.3866 15.9522 15.305 16.397 14.1667 16.4844L5.83337 16.5002C3.03671 16.2719 0.833375 13.9352 0.833375 11.0835ZM14.04 14.8227C14.8282 14.7621 15.5771 14.454 16.1797 13.9423C16.7823 13.4307 17.2078 12.7417 17.3954 11.9737C17.583 11.2058 17.5232 10.3982 17.2244 9.66636C16.9256 8.93449 16.4032 8.31576 15.7317 7.89854L15.0592 7.47938L14.9592 6.69438C14.8034 5.48912 14.2141 4.38182 13.3014 3.57945C12.3886 2.77708 11.2149 2.33453 9.99963 2.33453C8.78434 2.33453 7.61064 2.77708 6.69789 3.57945C5.78515 4.38182 5.19581 5.48912 5.04004 6.69438L4.94004 7.47938L4.26921 7.89854C3.59779 8.31571 3.07536 8.93437 2.77654 9.66617C2.47772 10.398 2.41778 11.2055 2.6053 11.9734C2.79281 12.7413 3.21819 13.4303 3.82067 13.942C4.42315 14.4537 5.17192 14.762 5.96004 14.8227L6.10421 14.8335H13.8959L14.04 14.8227ZM10.8334 9.00021H13.3334L10 13.1669L6.66671 9.00021H9.16671V5.66688H10.8334V9.00021Z" fill="#484952"/>
                            </svg>
                            ) }
                        />
                        </div>
                        <div className="import-btn-name">
                        {__( 'Import', 'gutena-kit' )}
                        </div>
                    </>
                }
                </div>
            </div>
        </div>
    )
}

export default DemoCard;