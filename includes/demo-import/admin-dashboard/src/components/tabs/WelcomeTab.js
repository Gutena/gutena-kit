/**
 * gutena: Welcome tab
 */
 
const WelcomeTab = ( props ) => {
    return(
        <div className="gutena-tab-body gutena-welcome-tab">
            <div className="gutena-column">
                <div className="gutena-video">
                    <a href={ props.details?.video_link } target="_blank" className="gutena-video-link">
                        <img src={ props.details?.video_img_url } className="gutena-video-image" alt={ props.details?.title } title={ props.details?.title } />
                    </a>
                </div>
                <div className="gutena-details">
                    <h2 className="gutena-title">{ props.details?.title }</h2>
                    <p className="gutena-description">{ props.details?.description }</p>
                    <a href={ props.details.button_link } className="gutena-button" target="_blank">{ props.details?.button_text }</a> 
                </div>
            </div>
            <div className="gutena-column">
                <div className="gutena-pro-cta">
                    { ! props.details?.pro_cta?.is_installed ?  
                        <>
                            <span className="gutena-pro-cta-tag">{ props.details?.pro_cta?.ticker_tag }</span>
                            <h2 className="gutena-pro-cta-title">{ props.details?.pro_cta?.title }</h2>
                            <p className="gutena-pro-cta-description">{ props.details?.pro_cta?.description }</p>
                            <h3 className="gutena-pro-cta-form">{ props.details?.pro_cta?.forms?.form_tag }</h3>
                        </> :
                        <h3 className="gutena-pro-cta-title small">{ props.details?.pro_cta?.forms?.form_tag }</h3>
                    }
                    <h4 className="gutena-pro-cta-form-heading">{ props.details?.pro_cta?.forms?.input_label }</h4>
                    <ul className="gutena-pro-cta-features forms">
                        {
                            props.details?.pro_cta?.forms?.input_features?.map( ( item, index ) => {
                                return (
                                    <li key={ index } className="gutena-pro-cta-feature">{ item }</li>
                                );
                            } )
                        }
                    </ul>
                    <h4 className="gutena-pro-cta-form-heading">{ props.details?.pro_cta?.forms?.db_label }</h4>
                    <ul className="gutena-pro-cta-features">
                        {
                            props.details?.pro_cta?.forms?.db_features?.map( ( item, index ) => {
                                return (
                                    <li key={ index } className="gutena-pro-cta-feature">{ item }</li>
                                );
                            } )
                        }
                    </ul>
                    { ! props.details?.pro_cta?.is_installed && 
                        <>
                            <a href={ props.details?.pro_cta?.button_link } className="gutena-kit-pro-button" target="_blank">{ props.details?.pro_cta?.button_text }</a> 
                            <a href={ props.details?.pro_cta?.button_link_sub } className="gutena-kit-pro-learn-more" target="_blank">{ props.details?.pro_cta?.button_text_sub }</a> 
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default WelcomeTab;