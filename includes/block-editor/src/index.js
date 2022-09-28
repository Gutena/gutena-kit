/****** Info : START ****
 This File is used to add controls in existing blocks and register new blocks
 
 Set Required Attributes for edit existing blocks inside block_settings_setup method in gutena_kit_public class 
 
 ****** Info : END ***/
import { __ } from '@wordpress/i18n';
import { addFilter } from  '@wordpress/hooks';
import {  gutenaKitEditMediaTextBlock } from './mediaTextBlockEdit';
import { GutenaKitSettings } from './GutenaKitSettings';


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