/****** Info : START ****
 This File is used to add controls in existing blocks and register new blocks
 
 Set Required Attributes for edit existing blocks inside block_settings_setup method in gutena_kit_public class 
 
 ****** Info : END ***/
import { __ } from '@wordpress/i18n';
import { addFilter } from  '@wordpress/hooks';
import {  gutenaKitEditMediaTextBlock } from './mediaTextBlockEdit';
import { GutenaKitSettings } from './GutenaKitSettings';
import { createHigherOrderComponent } from  '@wordpress/compose';
import { joinObjectValues } from './helpers/helpers';



/*************************************
 Add controls in existing blocks
 **************************************/
//Block edit modified componenet 
const editBlocksComponents = {
    "media-text-block":gutenaKitEditMediaTextBlock,
    "common-block":GutenaKitSettings,
};

//Register existing block edit controls by custom componenet 
Object.keys( editBlocksComponents ).forEach( blockSlug =>{
    
    console.log("blockSlug",blockSlug);
    
    addFilter(
        'editor.BlockEdit',
        'gutena-kit/edit-'+blockSlug,
        editBlocksComponents[blockSlug]
    );
} );


/********************************************************************
 Add classes in editor without saving as main classname attributes
********************************************************************/
const withGutenaKitClassName = createHigherOrderComponent(
    ( BlockListBlock ) => {
        return ( props ) => {
            const { 
                gutenaKitClass={}
            } = props.attributes;
            return (
                <BlockListBlock
                    { ...props }
                    className={ joinObjectValues( gutenaKitClass ) }
                />
            );
        };
    },
    'withGutenaKitClassName'
);

wp.hooks.addFilter(
    'editor.BlockListBlock',
    'my-plugin/with-client-id-class-name',
    withGutenaKitClassName
);