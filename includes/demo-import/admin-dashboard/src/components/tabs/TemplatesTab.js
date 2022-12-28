/**
 * Starter Templates tab 
 */
 import { DemoContext } from '../../data/DemoContextProvider';
 import DemoCard from '../demo/DemoCard';
 import DemoPreview from '../demo/DemoPreview';
 import { __ } from '@wordpress/i18n';
 import { SelectControl, Button, Modal } from '@wordpress/components';
 import { Fragment, render, useState, useContext } from '@wordpress/element';

 //add all to category list
gutenakit_demo_info.category.unshift('all');

const TemplatesTab = ( props ) => {
    //check for info
    if ( typeof gutenakit_demo_info === 'undefined' ){
        return(<div>{ __( 'Sorry! Gutena kit dashboard not available.', 'gutena-kit' ) }</div>);
    }

    const { showGutenaThemeRequireModal, previewDemoDispatchData, dispatch } = useContext( DemoContext );
    console.log( "showGutenaThemeRequireModal", showGutenaThemeRequireModal);
    //Main Demos object with index actual number
    let mainDemos = {};
    Object.keys( gutenakit_demo_info.demo_list ).forEach((demoName,index) => {
        mainDemos[demoName] = index;
    });

    const demoArray = Object.values( gutenakit_demo_info.demo_list );
    //Prepare demo list
    const [demoList, setdemoList] = useState( demoArray );
    const [ category, setCategory ] = useState( 'all' );
    const [ demoType, setDemoType ] = useState( 'all' );

    //Gutena Theme install
    const [ gutenaThemeStatus, setIsGutenaThemeInstall] = useState({
        available:gutenakit_demo_info.gutena_theme_available,
        action:gutenakit_demo_info.gutena_theme_action,
        status: 0
    } );

    console.log('gutenaThemeStatus',gutenaThemeStatus);

    const getGutenaActionInfo = ( key = 'btnName' ) => {
        let info = {
            btnName:( 'install' === gutenaThemeStatus.action ) ? __( 'Install Gutena Theme', 'gutena-kit' ) : __( 'Activate Gutena Theme', 'gutena-kit' ),
            message: __( 'Starter templates requires Gutena theme to be installed in order to work properly.', 'gutena-kit' ),
            statusClass: 'warning'
        };
        

        switch ( gutenaThemeStatus.status ) {
            case 0:
            break;
            case 1://In progress
                info = {
                    ...info,
                    btnName: ('install' === gutenaThemeStatus.action ) ? __( 'Installing...', 'gutena-kit' ) : __( 'Activating...', 'gutena-kit' )
                };
            break;
            case 2://Success
                info = {
                    ...info,
                    btnName: __( 'Gutena Theme Activated', 'gutena-kit' ),
                    message:__( 'Success: Gutena theme activated successfully.', 'gutena-kit' ),
                    statusClass: 'success'
                };
            break;
            case 3://failed
                info = {
                    ...info,
                    message:__( 'Failed: Please check user or file permission to install or activate theme.', 'gutena-kit' ),
                    statusClass: 'error'
                };
            break;
            default:
            break;
        }
        return info?.[key];
    }


    //Preview demo 
    const previewDemo = () => {
        dispatch( previewDemoDispatchData );
    }

    //Activate gutena theme
    const activate_gutena_theme = ( demoPreview = false ) => {
        //if already in progress
        if ( 0 < gutenaThemeStatus.status ) {
            return false;
        }
        //Set status in progress 
        setIsGutenaThemeInstall( {
            ...gutenaThemeStatus,
            status: 1
        } );

        //Activate Theme
        fetch(gutenakit_dahboard_info.ajax_url, {
            method: 'POST',
            credentials: 'same-origin', // <-- make sure to include credentials
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
                'X-WP-Nonce' : gutenakit_dahboard_info.nonce
            },
            body: new URLSearchParams({
                action: "activate_gutena_theme",
                gutena_kit_security: gutenakit_dahboard_info.nonce,
                theme_slug: gutenakit_dahboard_info.theme_slug
            })
        }).then((response) => response.json()).then((data) => { 
           
           setTimeout(() => {
            setIsGutenaThemeInstall( {
                ...gutenaThemeStatus,
                status: ( false === data.success ) ? 3 : 2
            } );
           }, 1000);

           //Update status or preview demo
            setTimeout(() => {
                demoPreview ? previewDemo() : dispatch( { type: 'GUTENA_THEME_INSTALLED' } );
            }, 1500);
        
        } );

    }

    //Category Filter
    const applyCategoryFilter = ( categorySelected ) => {
        setCategory(categorySelected);
        if( 'all' === categorySelected ){
            setdemoList(demoArray);
        }else{
            setdemoList( demoArray.filter( ( currDemo ) => {
                return  currDemo.default.category.indexOf(categorySelected) >= 0;
            } ) );
        }
        
    }

    //Demo Filter
    const applyDemoTypeFilter = ( demoTypeSelected ) => {
        setDemoType(demoTypeSelected);
        if( 'all' === demoTypeSelected ){
            setdemoList(demoArray);
        }else{
            setdemoList( demoArray.filter( ( currDemo ) => {
                if( 'free' === demoTypeSelected ){
                    return  currDemo.default.demo_type === 'free';
                }else{
                    return  currDemo.default.demo_type != 'free';
                }
            } ) );
        }
        
    }

    //HTML VIEW
    return(
        <Fragment> 
            <div className="gk-dashboard" >
                <DemoPreview />
                { showGutenaThemeRequireModal && (
                    <Modal
                    closeLabel={ __( 'Close', 'gutena-kit' ) }
                    onRequestClose={ () => dispatch( { type: 'CLOSE_GUTENA_THEME_REQUIRE_MODAL' } ) }
                    title=''
                    className='gutena-theme-require-modal'
                    aria={ { describedby: 'gk-description' } }
                >
                    <div className='gutena-theme-require-modal-description' >
                        <img src={ 2 === gutenaThemeStatus.status ? gutenakit_demo_info.success_icon_green : gutenakit_demo_info.warning_icon } alt="gutena-theme-require" className={getGutenaActionInfo( 'statusClass' )}  /> 
                        <p id={ 'gk-description' }>
                            { 0 === gutenaThemeStatus.status ? __( 'This template requires Gutena (free) theme to be installed in order to work properly, do you wish to import this template? ', 'gutena-kit' ) : getGutenaActionInfo( 'message' ) }
                        </p>
                    </div>
                    <div className="gutena-theme-require-modal-buttons gutena-buttons">
                        <span className='gk-black-btn gutena-button ' onClick={ () => previewDemo() } >
                            { __( 'Continue Anyway' ) }
                        </span>
                        <span 
                        className={ `gutena-action-button gutena-button ${ 1 === gutenaThemeStatus.status? 'start-installing':'' } ${getGutenaActionInfo( 'statusClass' )}-btn` } onClick={ () => activate_gutena_theme( true ) } > 
                        <img src={  2 === gutenaThemeStatus.status ? gutenakit_demo_info.success_icon_white : gutenakit_demo_info.download_icon } alt={ getGutenaActionInfo( 'btnName' ) } /> 
                        <span>{ getGutenaActionInfo( 'btnName' ) }</span> 
                        </span>
                    </div>
                </Modal>
                ) }
                <div className="gk-top-header" >
                    <div className="gk-logo">
                        <img src={gutenakit_demo_info.logo} />
                    </div>
                    <div className="gk-center-tabs">
                        { ('1' === gutenakit_demo_info.show_demo_type_filter) ? 
                            <Fragment>
                                <div 
                                className={ `gk-tab ${ ( 'all' === demoType )? 'selected': ''}` }
                                onClick={ () => applyDemoTypeFilter('all')} 
                                >
                                    { __( 'All', 'gutena-kit' ) }
                                </div>
                                <div 
                                className={ `gk-tab ${ ( 'free' === demoType )? 'selected': ''}` }
                                onClick={ () => applyDemoTypeFilter('free')} 
                                >
                                    { __( 'Free Templates', 'gutena-kit' ) }
                                </div>
                                <div 
                                className={ `gk-tab ${ ( 'pro' === demoType )? 'selected': ''}` }
                                onClick={ () => applyDemoTypeFilter('pro')} 
                                >
                                    { __( 'Premium Templates', 'gutena-kit' ) }
                                </div>
                            </Fragment>
                            :'' 
                        }
                    </div>
                    <div className="gk-right-filters">
                        { ('1' === gutenakit_demo_info.show_category_filter) ?
                            <SelectControl
                            value={ category }
                            options={ gutenakit_demo_info.category.map( (cat) => {
                                return({
                                    value:cat,
                                    label:(cat[0].toUpperCase() + cat.slice(1))
                                })
                            })}
                            onChange={ ( newCategory ) => applyCategoryFilter( newCategory ) }
                            __nextHasNoMarginBottom
                            />
                            :''
                        }
                    </div>
                </div>
                <div className="gk-dashboard-body">
                {
                    '1' === gutenaThemeStatus.available ? '' :
                    <div id='block_warning' className={ ' gk-save-block-settings notice gk-notice gutena-theme-require-notice is-dismissible notice-'+getGutenaActionInfo( 'statusClass' ) } ><img src={ 2 === gutenaThemeStatus.status ? gutenakit_demo_info.success_icon_green : gutenakit_demo_info.warning_icon } alt="gutena-theme-require" /> <p>  { getGutenaActionInfo( 'message' ) } </p>
                      <span 
                      className={ `gutena-action-button gutena-button ${ 1 === gutenaThemeStatus.status? 'start-installing':'' } ${getGutenaActionInfo( 'statusClass' )}-btn` } onClick={ () => activate_gutena_theme() } > 
                      <img src={  2 === gutenaThemeStatus.status ? gutenakit_demo_info.success_icon_white : gutenakit_demo_info.download_icon } alt={ getGutenaActionInfo( 'btnName' ) } /> 
                      <span>{ getGutenaActionInfo( 'btnName' ) }</span> 
                      </span>
                    </div>
                 }
                    <div className="gk-demo-grid">
                        { ( demoList.length > 0 ) ?  demoList.map( ( item, index) => {
                            return(
                                <DemoCard 
                                    key={ 'gk-demo-'+index }
                                    demoWithVariation={ item }
                                    demoIndex={ mainDemos[item.default.demo_slug] }
                                />
                            );
                        } ):'' }
                    </div>
                </div>
                
            </div>
        </Fragment>
    );
}

export default TemplatesTab;