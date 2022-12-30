/**
 * gutena: doc tab
 */
 import { __ } from '@wordpress/i18n';

 const DocTab = ( props ) => {
    const changelog = props.details.changelog;
    return(
         <div className="gutena-tab-body gutena-knowledge-tab">
            <div className=" gutena-doc-tab">
                <div className="gutena-details">
                    <h2 className="gutena-title" >{ props.details.title }</h2>
                    <div className="gutena-topics">
                        {
                            props.details.topics.map( ( item, index) => {
                                return(
                                    <div key={'gutena-topics-'+index} >
                                        
                                        <p className="gutena-heading" >{ (index+1)+'. ' } { (typeof item.link === 'undefined' || item.link === '')?item.heading: <a href={ item.link } target="_blank" >{ item.heading }</a> } </p>
                                        <p className="" >{ item.description }</p>
                                    </div>
                                );
                            } )
                        }
                    </div>
                    <hr />
                    <div className="gutena-support">
                        <h2 className="gutena-title" >{ props.details.support.title }</h2>
                        <p className="gutena-description" >{ props.details.support.description }</p>
                        <div className="gutena-buttons">
                            <a href={ props.details.support.documentation_link } className='gk-black-btn gutena-button' target='_blank' >  
                            { __( 'Documentation' ) }
                            </a>
                            <a href={ props.details.support.link_url } className={ `gutena-support-link gutena-button` } target="_blank" >  
                            { props.details.support.link_text }
                            </a>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
            <div className=" gutena-changelog-tab">
                <div className="gutena-details">
                    <h2 className="gutena-title" >{ changelog.title }</h2>
                    <p 
                    className="gutena-description"  
                    dangerouslySetInnerHTML={{ __html: changelog.description }}
                    />
                </div>
            </div>
        </div>
    )
}

export default DocTab;