//Media Text Block : Add gap controls between media and text
import { __ } from '@wordpress/i18n';
import { createHigherOrderComponent } from  '@wordpress/compose';
import { Fragment, useEffect, useState } from  '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import {  PanelBody } from  '@wordpress/components';
import  RangeControlUnit  from './components/RangeControlUnit';
import { gkIsEmpty } from './helpers/helpers';
//https://make.wordpress.org/core/2019/04/09/the-block-editor-javascript-module-in-5-2/

 
//Edit Function
export const gutenaKitEditMediaTextBlock = createHigherOrderComponent( ( BlockEdit ) => {

    return ( props ) => {
        const {
			name,
			attributes,
			setAttributes,
			isSelected,
            clientId,
		} = props;

        if('core/media-text' !== name){
            return ( <BlockEdit { ...props } /> );
        }
       
		const {
			gutenaKitGridGap,
            gutenaKitID,
            gutenaKitCSS={},
		} = attributes;
        const [ blockCss, setBlockCss ] = useState( '' );
        
        useEffect(() => {
            let SetID = true;
            if( SetID ) {
                setAttributes( { 
                    gutenaKitCSS:{
                        ...gutenaKitCSS,
                        mediaText:generateCss( ' .gutenakitid-'+clientId )
                    },
                    gutenaKitID: clientId 
                } );
                setBlockCss( generateCss( ' #block-'+clientId ) );
            }
            return () => {
                SetID = false;
            }
        }, [
            gutenaKitGridGap
        ]);


        const generateCss = ( preText ) => {
            return ( ( gkIsEmpty( gutenaKitGridGap ) || gutenaKitGridGap=='0px'||gutenaKitGridGap=='0' ) ? '' : `${ preText }{grid-gap:${gutenaKitGridGap};}
            ${ preText } .wp-block-media-text__content{padding: 0;}` );
        }

        const MAX_SPACE_VALUES = {
            px: 500,
            em: 40,
            rem: 40,
            vh: 100,
            vw: 100,
        };

        return (
            <Fragment>
                <BlockEdit { ...props } />
                <style>
                    {
                        blockCss
                    }
                </style>
                { isSelected && 
                <InspectorControls>
                    <PanelBody title="Spacing"  initialOpen={ false }>
                        <RangeControlUnit 
                        data={ props }
                        rangeLabel={ __( 'Grid gap', 'gutena-kit' ) }
                        attrValue={ gutenaKitGridGap }
                        onChangeFunc={ (value) => setAttributes( { gutenaKitGridGap: value } ) }
                        rangeMin={ 0 }
                        rangeMax={ MAX_SPACE_VALUES }
                        rangeStep={ 1 }
                        />
                    </PanelBody>
                </InspectorControls>
                }
            </Fragment>
        );
    };
}, 'gutenaKitEditMediaTextBlock' );
 
/**** Block: core/media-text : END ******/