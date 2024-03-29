/****** Info : START ****
 This File is used to add controls in existing blocks and register new blocks
 
 Set Required Attributes for edit existing blocks inside block_settings_setup method in gutena_kit_public class 
 
 ****** Info : END ***/
import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import { gutenaKitEditMediaTextBlock } from './mediaTextBlockEdit';
import { GutenaKitSettings } from './GutenaKitSettings';
import { createHigherOrderComponent } from  '@wordpress/compose';
import { joinObjectValues } from './helpers/helpers';

import './blocks/advanced-buttons'
import './blocks/advanced-button'
import './blocks/navigation-child'

/*************************************
 Add controls in existing blocks
 **************************************/
//Block edit modified componenet 
const editBlocksComponents = {
    "media-text-block":gutenaKitEditMediaTextBlock,
    "common-block":GutenaKitSettings,
};

//Register existing block edit controls by custom componenet 
Object.keys( editBlocksComponents ).forEach( blockSlug => {
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

addFilter(
    'editor.BlockListBlock',
    'gutena-kit/with-gutena-kit-class-name',
    withGutenaKitClassName
);


/********************************************************************
 Add custom attributes
********************************************************************/
const addGutenaKitCustomAttributes = ( settings, name ) => {
   if ( 'undefined' !== typeof settings.attributes && 'undefined' === typeof settings.attributes.gutenaKitStyle ) {
        //gutena kit settings
        settings.attributes = Object.assign( settings.attributes, {
            "gutenaKitID":{
                "type":"string"
            },
            "gutenaKitCSS":{
                "type":"object"
            },
            "gutenaKitClass":{
                "type":"object"
            },
            "gutenaKitStyle":{
                "type":"object"
            },
        });

        if ( 'core/media-text' === name ) {
            settings.attributes = Object.assign( settings.attributes, {
                "gutenaKitGridGap":{
                    "type":"string",
                    "default":"0px",
                }
            });
        }
   }
   return settings;
}

addFilter(
    'blocks.registerBlockType',
    'gutena-kit/add-gutena-kit-custom-attributes',
    addGutenaKitCustomAttributes
);