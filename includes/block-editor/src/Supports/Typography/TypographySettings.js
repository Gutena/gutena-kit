/**
 * Typography Controls with add and edit Global styles
 */
import { __ } from '@wordpress/i18n';
import {
    __experimentalText as Text,
    __experimentalHStack as HStack,
    PanelBody,
    SelectControl,
    FlexItem,
    TextControl,
    Button,
    Icon,
    Modal,
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';
import { useSelect } from "@wordpress/data";
import { useState, useEffect } from '@wordpress/element';
import TypographyControl from '../../components/TypographyControl';
import { deleteIcon } from '../../components/gutenaIcons';
import { gkIsEmpty, getMatchArrObjKeyValue, typographyVar, generateSlug, gkCssJson, renderBlockCSSForResponsive } from '../../helpers/helpers';

const noop = () => {}; 

const TypographySettings = ( {
    fontFamilies={},
    blockName = '',
    attrValue = undefined,
	onChangeFunc = noop,
    setGlobalTypography = noop,
    globalTypographySlug = undefined,
    openPanel = false, 
    canReset = false
} ) => {

    /*
        Active tab : set_global_typography| add_typography | edit_typography 
        Status : '' | progress | error | success 
        Message : Global typography save message
        globalTypography: Array of global Typography data
        deleteTypography: true on delete button click
        deleteTypographyConfirm: true on delete button click of popup modal
    */
    const [ typographyTab, setTypographyTab ] = useState( {
        label: __( 'Saved Typography', 'gutena-kit' ),
        activeTab: 'set_global_typography',
        action: '',
        status: '',
        message: '',
        deleteTypography: false,
        deleteTypographyConfirm: false,
        globalTypography: ( 'core/button' === blockName ) ? gutena_kit_block_editor?.globalTypography?.button : gutena_kit_block_editor?.globalTypography?.default
    } );

    //For add|Edit global typography state
    const [ addEditTypography, setAddEditTypography ] = useState( {
        fluidTypography: false,
        name: undefined,
        slug: undefined,
        fontFamily:undefined,
        fontSize: undefined,
        TfontSize: undefined,
        MfontSize: undefined,
        fluidFontSize: undefined,
        lineHeight: undefined,
        TlineHeight: undefined,
        MlineHeight: undefined,
        fontStyle: undefined,
        fontWeight: undefined,
        letterSpacing: undefined,
        textTransform: undefined,
        textDecoration: undefined,
        cssJson: undefined,
    } );
    
    //Get Device preview type
    const deviceType = useSelect( select => {
        return select( 'core/editor' ).getDeviceType();
    }, [] );

    //Save Global Typography
	useEffect( () => {
		if ( 'progress' === typographyTab?.status ) {
            
            if ( gkIsEmpty( addEditTypography?.name ) || gkIsEmpty( addEditTypography?.slug ) ) {
                setTypographyTab( {
                    ...typographyTab,
                    status:'error',
                    message: ( 'add_typography' === typographyTab?.activeTab ) ? __( 'Name is required', 'gutena-kit' ): __( 'Please select a global typography', 'gutena-kit' ),
                } );
            } else if ( ! isDeleteConfirmationRequired() ) {

                //Create form data
                const data = new FormData();
                //form action
                data.append( 'action', gutena_kit_block_editor.save_typography_action );
                //set nonce
                data.append( 'nonce', gutena_kit_block_editor.nonce );
                //set typography group
                data.append( 'typography_group', ( 'core/button' === blockName ) ? 'button' : 'default' );
                //If typography deleted
                if ( isDeleteTypographyInitiated() && typographyTab.deleteTypography && typographyTab.deleteTypographyConfirm ) {
                    data.append( 'delete_typography', addEditTypography?.slug ); 
                }
                //typography data
                data.append( 'typography', JSON.stringify( addEditTypography ) );
        
                fetch( gutena_kit_block_editor.ajax_url, {
                    method: "POST",
                    credentials: 'same-origin',
                    body: data
                } )
                .then( ( response ) => response.json() )
                .then( ( response ) => {
                    //Update global typogrphy
                    if ( ! gkIsEmpty( response?.globalTypography ) ) {
                        //update global variable
                        gutena_kit_block_editor.globalTypography = response.globalTypography;
                        //update global variable css
                        renderBlockCSSForResponsive( gutena_kit_block_editor, deviceType );
                        //update local global variable as per block
                        response.globalTypography = ( 'core/button' === blockName ) ? response.globalTypography?.button : response.globalTypography?.default;
                    }
                    let activeTab = ( gkIsEmpty( response.globalTypography ) || 0 === response.globalTypography.length ) ? { activeTab: 'set_global_typography', label: __( 'Saved Typography', 'gutena-kit' ) } : {};
                    setTypographyTab( {
                        ...typographyTab,
                        ...response,
                        ...activeTab,
                        deleteTypography: false,
                        deleteTypographyConfirm: false,
                    } );
                } );
            }
		}
	}, [ typographyTab ] );

    //Prepare global typography array for select options
    const globalTypographyOptions = () => {
        if ( gkIsEmpty( typographyTab.globalTypography ) ) {
            return [];
        }

        let typographyOptions = [ {
            label: __( 'Select typography', 'gutena-kit' ), 
            value: ''
        } ];

        Object.keys( typographyTab.globalTypography ).forEach( slug => {
            if ( ! gkIsEmpty( slug ) ) {
                typographyOptions.push( {
                    label: typographyTab.globalTypography[slug].name, 
                    value: slug 
                } );
            }
        } );

        return typographyOptions;
    }

    //Get global typgraphy slug 
    const getSlug = ( name = null ) => {
        let slug = addEditTypography?.slug;
        if ( 'add_typography' === typographyTab.activeTab && null !== name ) {
            slug = ( 'core/button' === blockName ) ? 'btn-'+generateSlug( name ) : generateSlug( name );
            let d = new Date();
            let slugkey = d.getTime();
            slug = gkIsEmpty( typographyTab?.globalTypography?.[ slug ] ) ? slug : slug+'-'+slugkey;
        } 

        return slug;
    }

    //Css in json form
    const getCssJson = () => gkCssJson( typographyVar( addEditTypography, 'gt' ) );

    const isDeleteTypographyInitiated = () => ( true === typographyTab.deleteTypography );
    const isProgressStatus = () => ( 'progress' === typographyTab.status );
    const isDeleteConfirmationRequired = () => ( isDeleteTypographyInitiated() && isProgressStatus() && ! typographyTab.deleteTypographyConfirm );
    const isGlobalTypographyEmpty = ( gkIsEmpty( globalTypographyOptions() ) || 1 >= globalTypographyOptions().length );

    const closeDeletePrompt = () => setTypographyTab( {
        ...typographyTab,
        deleteTypography:false,
        status:'',
        message:'',
    } );

    const tabs = [
        { tabName : 'edit_typography', icon:'edit', label: __( 'Edit Typography', 'gutena-kit' ) },
        { tabName : 'add_typography', icon:'plus-alt2', label: __( 'Add New Typography', 'gutena-kit' ) }
    ];

    const DEFAULT_EVENTS_TABS = {
        default: __( 'Default', 'gutena-kit' ),
        global: __( 'Global', 'gutena-kit' )
    }

    const eventAttr = Object.keys( DEFAULT_EVENTS_TABS );
    const [ activeTab, setActiveTab ] = useState( gkIsEmpty( globalTypographySlug ) ? 'default' : 'global' );

    return(
        <PanelBody title={ __( 'Typography', 'gutena-kit' ) } initialOpen={ openPanel }>
            { eventAttr.length > 1 && /* show only if there is multiple items present. */
               <ToggleGroupControl 
                   value={ activeTab } 
                   onChange={ ( value ) => setActiveTab( value ) } 
                   isBlock 
                   hideLabelFromVision={ true } 
               >
                    {
                        eventAttr.map( ( value ) => (
                            <ToggleGroupControlOption key={ value } value={ value } label={ DEFAULT_EVENTS_TABS[ value ] } />
                        ) )
                    }
                </ToggleGroupControl>
            }

            {  'default' === activeTab ? 
                <TypographyControl 
                    fontFamilies = { fontFamilies }
                    attrValue = { attrValue }
                    onChangeFunc = { ( value ) => onChangeFunc( value ) }
                    withPanel = { false }
                    canReset = { canReset }
                />
            :
            <>
                <HStack style={ { 'marginBottom': '12px' } }>
                    <FlexItem>
                        <Text isBlock>
                            { typographyTab.label }
                        </Text>
                    </FlexItem>
                    <FlexItem>
                        {
                            tabs.map( ( tab ) => ( 'edit_typography' === tab.tabName && isGlobalTypographyEmpty ) ? '' : <Button
                            key={ tab.tabName }
                            label={ ( typographyTab.activeTab === tab.tabName ) ? __( 'Saved Typography', 'gutena-kit' ) : tab.label }
                            icon={ tab.icon }
                            onClick={ () => {
                                setAddEditTypography( undefined );
                            
                                setTypographyTab( {
                                    ...typographyTab,
                                    label: ( typographyTab.activeTab === tab.tabName ) ? __( 'Saved Typography', 'gutena-kit' ) : tab.label,
                                    activeTab: ( typographyTab.activeTab === tab.tabName ) ? 'set_global_typography': tab.tabName,
                                    status: '',
                                    message: '',
                                } );
                            } }
                            isPressed={ typographyTab.activeTab === tab.tabName }
                            isSmall
                            iconSize={ 24 }
                        /> )
                        }
                    </FlexItem>
                </HStack>
                { 'set_global_typography' === typographyTab.activeTab && ( isGlobalTypographyEmpty 
                    ? <>
                        <Text align="center" className="gutena-kit-border-text" isBlock  >
                            { __( 'No typography found', 'gutena-kit' ) }
                        </Text>
                        <p>
                            { __( 'Add a new Typography by clicking on', 'gutena-kit' ) }
                            <strong> + </strong>
                            { __( 'icon', 'gutena-kit' ) }
                        </p>
                    </>
                    : <SelectControl
                        value={ globalTypographySlug }
                        options={ globalTypographyOptions() }
                        onChange={ ( value ) => setGlobalTypography( value )  }
                        __nextHasNoMarginBottom
                    /> )
                }
                { 'edit_typography' === typographyTab.activeTab && ! isGlobalTypographyEmpty && 
                    <SelectControl
                        value={ gkIsEmpty( addEditTypography?.slug ) ? '' : addEditTypography.slug }
                        options={ globalTypographyOptions() }
                        onChange={ ( value ) => setAddEditTypography( { 
                            ...typographyTab?.globalTypography?.[value],
                        } ) }
                        __nextHasNoMarginBottom
                    />  
                }
                { ( 'add_typography' === typographyTab.activeTab || ( 'edit_typography' === typographyTab.activeTab && ! isGlobalTypographyEmpty && ! gkIsEmpty( addEditTypography?.slug ) ) ) && (
                    <>
                        <TextControl
                            label={ __( 'Name', 'gutena-kit' ) }
                            value={ addEditTypography?.name || '' }
                            onChange={ ( name ) => setAddEditTypography( {
                                ...addEditTypography,
                                name:name,
                                slug: getSlug( name ),
                                cssJson: getCssJson()
                            } ) }
                        />
                        <TypographyControl 
                            fontFamilies = { fontFamilies }
                            attrValue = { addEditTypography }
                            onChangeFunc = { ( value ) => setAddEditTypography( {
                                ...value, 
                                cssJson: getCssJson()
                            } ) }
                            editGlobalTypography = { true }
                            makeFluidTypography = { true }
                            withPanel = { false }
                            resetButton = { false }
                            devicePreview = { false }
                        />
                        <HStack>
                            <FlexItem>
                                <Button 
                                    label={ __( 'Save typography', 'gutena-kit' ) }
                                    variant="secondary"
                                    disabled={ isProgressStatus() }
                                    onClick={ () => setTypographyTab( {
                                        ...typographyTab,
                                        status:'progress',
                                    } ) }
                                >
                                        { __( 'Save', 'gutena-kit' ) }
                                </Button>
                            </FlexItem>
                            { 'edit_typography' === typographyTab.activeTab && 
                                <FlexItem>
                                    <Button 
                                        label={ __( 'Delete typography', 'gutena-kit' ) }
                                        variant="link"
                                        disabled={ isProgressStatus() }
                                        onClick={ () => setTypographyTab( {
                                            ...typographyTab,
                                            status:'progress',
                                            deleteTypography:true,
                                        } ) }
                                        isDestructive={ true }
                                        icon={ deleteIcon }
                                        className="gutena-kit-delete-btn"
                                    >
                                            {  __( 'Delete', 'gutena-kit' ) }
                                    </Button>
                                </FlexItem>
                            }
                        </HStack>
                        <HStack style={ { 'marginTop': '10px' } }>
                            <Text isDestructive={ ( 'error' === typographyTab.status ) }  >
                                { isProgressStatus() ? 
                                __( 'Please wait...', 'gutena-kit' ) : 
                                <>
                                { 'success' === typographyTab.status && <Icon icon="yes-alt" /> }
                                { typographyTab.message }
                                </> }
                            </Text>
                        </HStack>
                    </>
                )
                }
                { isDeleteConfirmationRequired() && (
                    <Modal
                        closeLabel={ __( 'Close', 'gutena-kit' ) }
                        onRequestClose={ () => closeDeletePrompt() }
                        title={ __( 'Delete global typography?', 'gutena-kit' ) }
                        className={ 'wp-block-page-list-modal' }
                        aria={ { describedby: 'wp-block-page-list-modal__description' } }
                    >
                        <p id={ 'wp-block-page-list-modal__description' }>
                            { __( 'Do you wanna delete typography: ', 'gutena-kit' )+addEditTypography?.name }
                        </p>
                        <p>
                            { __(
                                'Note: If you have assigned this typography to any block, it will lost the typography.', 'gutena-kit'
                            ) }
                        </p>
                        <div className="wp-block-page-list-modal-buttons">
                            <Button variant="tertiary" onClick={ () => closeDeletePrompt() }>
                                { __( 'Cancel' ) }
                            </Button>
                            <Button
                                variant="secondary"
                                onClick={  () => setTypographyTab( {
                                    ...typographyTab,
                                    deleteTypographyConfirm:true,
                                } ) }
                                isDestructive={ true }
                            >
                                { __( 'Delete' ) }
                            </Button>
                        </div>
                    </Modal>
                ) }
            </>
            }
        </PanelBody>
    );
}

export default TypographySettings;