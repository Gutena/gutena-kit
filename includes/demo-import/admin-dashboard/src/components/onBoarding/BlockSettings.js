/* Block activate and deactivate settings */
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element'

const noop = () => {};

const ToggleTickCross = ( props ) => {
    const { 
        toggleID = ( Math.floor(Math.random() * 1000) + 1) , // Returns a random integer from 1 to 1000
        size = '',//large or default
        isActive = false,
        onChangeFunc = noop,
        msg = ''
    } = props;

    const newToggleID = "gk-switch-target-"+toggleID;
    //console.log( "toggle ", props);
    return(
        <div className={ "gk-toggle-tick-cross "+size } > 
            <div className="gk-toggle">
            <input type="checkbox" 
            id={ newToggleID } 
            onChange={ () => onChangeFunc() } 
            checked={ isActive?'checked':'' } 
            value={ toggleID } 
            /> 
            <label className="gk-toggle" htmlFor={ newToggleID } >
                { ( 'large' === size && '' !== msg ) ? <div className="gk-toggle-msg">{ msg }</div> : '' }
                <span className="gk-toggle-knob" role="switch" ></span>
            </label> 
            </div>
        </div>
    );
}

const BlockSettings = ( props ) => {
    const gutenaBlockData = gutenakit_dahboard_info.onboarding_info.step_two;
   
    //console.log("gutenaBlockData",gutenaBlockData);
    
    //Get status for all block action toogle btn
    const getAllBlockActionToggleStatus = ( blocks ) => {
        let status = 0;//0:all disabled, 1: few enabled, 2: All enabled
        let message = __( 'All Blocks Disabled', 'gutena-kit' );
        for (let i = 0; i < blocks.length; i++) {
            //set status = 2 intially if a block is enabled
            if ( blocks[i].is_enabled ) {
                status = 2;
                message = __( 'All Blocks Enabled', 'gutena-kit' );
            } 
            //set status = 1, if a block is disabled and initially it was 2
            if ( 2 === status && ! blocks[i].is_enabled ) {
                status = 1;
                message = __( 'Few Blocks Enabled', 'gutena-kit' );
                break;
            } 
        }

        return { is_enabled: status > 0 , msg: message };
    }

    //Block data : blocks:[{slug, name, is_enabled}], allBlocksActionToggle:{ is_enabled, msg: message }
    const [ blockData, setBlockData ] = useState( { 
        blocks: gutenaBlockData.blocks.map( block => ( { ...block, status: block.is_enabled } ) ), 
        allBlocksActionToggle : getAllBlockActionToggleStatus( gutenaBlockData.blocks ),
        saveStatus: 0, //0:not initiated, 1 : in progress, 2: Completed, 3:Error
    } );

    //Set Blocks status
    const toggleBlockStatus = ( slug ) => {
        let blocks = blockData.blocks.map( 
            block =>  slug === block.slug ? 
            { ...block, is_enabled: ! block.is_enabled } 
            : block );
        //Set block Data
        setBlockData( {
            ...blockData,
            blocks: blocks,
            allBlocksActionToggle: getAllBlockActionToggleStatus( blocks )
        } );
    }

    //Set toggleAllBlocksAction btn status
    const toggleAllBlocksActionToggle = ( status ) => {
        
        //Set status to all blocks
        let blocks = blockData.blocks.map( block =>( {...block, is_enabled: status } ) );
        
        //Set block Data
        setBlockData( {
            ...blockData,
            blocks: blocks,
            allBlocksActionToggle: getAllBlockActionToggleStatus( blocks )
        } );
    }


    //Save Block Settings : install and activate block plugins 
    const SaveBlockSettings = () => {
        //if already in progress
        if ( 1 === blockData.saveStatus ) {
            return false;
        }
        //Set status in progress 
        setBlockData( {
            ...blockData,
            saveStatus: 1
        } );

        var current_plugin = false;
        var plugin_processed = [];
        var countBlocks = 0;
        var resStore = [];
        var resError = false;
        const process_current_plugin = ( ) => {
            if ( current_plugin.slug &&  -1 === plugin_processed.indexOf( current_plugin.slug ) ) {
                //Add in activated block list
                plugin_processed.push( current_plugin.slug );
                //console.log(" current_plugin", current_plugin);
                fetch(gutenakit_dahboard_info.ajax_url, {
                    method: 'POST',
                    credentials: 'same-origin', // <-- make sure to include credentials
                    headers:{
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Accept': 'application/json',
                        'X-WP-Nonce' : gutenakit_dahboard_info.nonce
                    },
                    body: new URLSearchParams({
                        action: "manage_gutena_blocks",
                        gutena_kit_security: gutenakit_dahboard_info.nonce,
                        slug: current_plugin.slug,
                        activate_action: current_plugin.activate ? 'activate': 'deactivate'
                    })
                }).then((response) => response.json()).then((data) => { 
                    //Store response for log
                    resStore[ current_plugin.slug ] = data;
                    if ( false === resError && false === data.success ) {
                        resError = true;
                    }
                    next_plugin();
                } );
            }
        }

        //Process plugin one at a time
        const next_plugin = () => {
            if ( countBlocks >= blockData.blocks.length ) {
                return false;
            }
            let index = countBlocks;
            for ( index = countBlocks ; index < blockData.blocks.length; index++ ) {
               
                let item = blockData.blocks[ index ];
                //console.log("item",item);
                countBlocks++;
                //Continue loop if block already enabled or disabled by admin
                if ( item.status !== item.is_enabled && -1 === plugin_processed.indexOf( item.slug ) ) {
                    current_plugin = item;
                    current_plugin.activate = item.is_enabled;//action activate or not
                    process_current_plugin( );
                    break;
                }
            }
            if ( countBlocks >= blockData.blocks.length || index === blockData.blocks.length ) {
                setTimeout(() => {
                    process_done();
                }, 1000);
                return false;
            }
        }

        //process completed
        const process_done = () => {
            //Set status in progress 
            console.log("process completed",resStore);

            if ( resError ) {
                //On error
                setBlockData( {
                    ...blockData,
                    saveStatus: 3 //error status
                } );
            } else {
                //On success: Set status to all blocks
                let blocks = blockData.blocks.map( block =>( {...block, status: block.is_enabled } ) );
                setBlockData( {
                    ...blockData,
                    blocks: blocks,
                    allBlocksActionToggle: getAllBlockActionToggleStatus( blocks ),
                    saveStatus: 2
                } );
            }
            
        }

        next_plugin();
        
    }

    //Get btn Name
    const getSaveBtnName = () => {
        let btnName = '';
        switch ( blockData.saveStatus ) {
            case 0://initial
                btnName = __( 'Save', 'gutena-kit' );
            break;
            case 1://In progress
                btnName = __( 'Saving...', 'gutena-kit' );
            break;
            case 2://Success
                btnName = __( 'Saved', 'gutena-kit' );
            break;
            case 3://failed
                btnName = __( 'Save', 'gutena-kit' );
            break;
            default:
                btnName = __( 'Save', 'gutena-kit' );
            break;
        }
        return btnName;
    }

    //HTML VIEW
    return(
        <>
        <div className='gk-block-settings-card'> 
            <div className='gk-header'> 
                <div className='gk-title'> 
                    { gutenaBlockData.title }
                </div>
                <div className='gk-all-blocks-action'> 
                    <ToggleTickCross 
                    toggleID="all-blocks-action"
                    size="large"
                    isActive={ blockData.allBlocksActionToggle.is_enabled }
                    msg={ blockData.allBlocksActionToggle.msg }
                    onChangeFunc={ () => toggleAllBlocksActionToggle( ! blockData.allBlocksActionToggle.is_enabled ) }
                    />
                </div>
            </div>
            <div className='gk-block-list'> 
             {
                blockData.blocks.map((block)=>{
                    return(
                        <div className={ 'gk-block-control-section '+block.slug } key={ block.slug } >
                            <div className='gk-block-control-wrapper' >
                                <div className='gk-block-name'>
                                    { block.name }
                                </div>
                                <div className='gk-block-control'>
                                    <ToggleTickCross 
                                    toggleID={ block.slug }
                                    isActive={ block.is_enabled }
                                    onChangeFunc={ () => toggleBlockStatus( block.slug ) }
                                    />
                                </div>
                            </div>
                        </div>
                    )
                })
             }  
            </div>

             <div className='gk-message' >
                {
                    ( 3 === blockData.saveStatus ) ? 
                    <div id='unknown_error' className='notice notice-error is-dismissible'><p>{ __( 'Failed: Please check user or file permission to save block settings.', 'gutena-kit' ) }</p>
                    <button 
                    type='button' 
                    className='notice-dismiss'
                    onClick={()=>  setBlockData( {
                        ...blockData,
                        saveStatus: 0
                    })}
                    >
                        <span className='screen-reader-text'>{ __( 'Dismiss this notice.', 'gutena-kit' ) }</span>
                    </button>
                    </div>
                    :''
                }
                {
                    ( 2 === blockData.saveStatus ) ? 
                    <div id='unknown_error' className='notice notice-success is-dismissible'><p>{ __( 'Success: Block settings saved successfully.', 'gutena-kit' ) } </p>
                    <button 
                    type='button' 
                    className='notice-dismiss'
                    onClick={()=>  setBlockData( {
                        ...blockData,
                        saveStatus: 0
                    })}
                    >
                        <span className='screen-reader-text'>{ __( 'Dismiss this notice.', 'gutena-kit' ) }</span>
                    </button>
                    </div>
                    :''
                }
             </div>

        </div>
        <div className='gk-save-block-settings'> 
            <div className={ "gutena-button "+( ( 1 === blockData.saveStatus )?"start-installing":"" ) }
            onClick={()=>SaveBlockSettings()} 
            disabled={ ( 1 === blockData.saveStatus ) }
            >
                { getSaveBtnName() }
            </div> 
        </div>
        </>
    );
}

export default BlockSettings;