import BlockSettings from './BlockSettings';
import { __ } from '@wordpress/i18n';

const GutenaKitAdminOnBoarding = (props) => {
    //check for info
    if ( typeof gutenakit_demo_info === 'undefined' || typeof gutenakit_dahboard_info === 'undefined' ){
        return(<div>{ __( 'Sorry! Gutena kit dashboard not available.', 'gutena-kit' ) }</div>);
    }

    const onboardingInfo = gutenakit_dahboard_info.onboarding_info;
    return(
        <>     
            <div className="gutenakit-admin-dashboard gk-onboarding" >
                <div className="gutena-header" >
                    <div className="gutena-admin-logo">
                        <img src={gutenakit_dahboard_info.logo} />
                    </div>
                    <h3>{ onboardingInfo.heading }</h3>
                </div>
                <div className="gutena-tab-panel" >
                    <div className="components-tab-panel__tab-content" >
                        <BlockSettings />
                    </div>
                </div>
            </div>
        </>
    );
}

export default GutenaKitAdminOnBoarding;