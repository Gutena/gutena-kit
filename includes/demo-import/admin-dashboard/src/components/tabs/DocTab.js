/**
 * gutena: doc tab
 */
 import { __ } from '@wordpress/i18n';

 const DocTab = ( props ) => {
    return(
        <div className="gutena-tab-body gutena-knowledge-tab">
            {/* <div className="gutena-docs">
                <div className="gutena-details">
                    <h2 className="gutena-title">{ props?.details?.title }</h2>
                    <ol className="gutena-topics">
                        {
                            props?.details?.topics.map( ( item, index ) => {
                                return(
                                    <li className="gutena-topic" key={ index }>
                                        <a className="gutena-topic-link" href={ item?.link } target="_blank" >{ item?.heading }</a>
                                        <p className="gutena-topic-description">{ item?.description }</p>
                                    </li>
                                );
                            } )
                        }
                    </ol>
                </div>
            </div> */}
            <div className="gutena-support">
                <div className="gutena-details">
                    <h2 className="gutena-title">{ props?.details?.support?.title }</h2>
                    <p className="gutena-description">{ props?.details?.support?.description }</p>
                    <div className="gutena-buttons">
                        <a href={ props?.details?.support?.documentation_link } className='gk-black-btn gutena-button' target="_blank">  
                            { props?.details?.support?.documentation_text }
                        </a>
                        <a href={ props?.details?.support?.link_url } className={ `gutena-support-link gutena-button` } target="_blank">  
                            { props?.details?.support?.link_text }
                        </a>
                    </div>
                </div>
            </div>
            <div className="gutena-changelog">
                <div className="gutena-details">
                    <h2 className="gutena-title">{ props?.details?.changelog?.title }</h2>
                    <p 
                        className="gutena-description"  
                        dangerouslySetInnerHTML={{ __html: props?.details?.changelog?.description }}
                    />
                </div>
            </div>
        </div>
    )
}

export default DocTab;