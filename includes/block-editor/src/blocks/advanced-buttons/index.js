import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import { useSelect, useDispatch } from '@wordpress/data';
import { registerBlockVariation } from '@wordpress/blocks';
import { createHigherOrderComponent } from '@wordpress/compose';
import { store as blockEditorStore } from '@wordpress/block-editor';

import '../../helpers/helpers'

/*************************************
 Register Navigation Variation
 **************************************/
registerBlockVariation( 'core/buttons', {
    name: 'gutena/advanced-buttons',
    title: __( 'Advanced Buttons', 'gutena-forms' ),
    description: __( 'Advance navigation controls', 'gutena-forms' ),
    category: 'gutena',
    attributes: {
        gutenaAdvancedButtons: true,
        className: 'gutena-advanced-buttons',
    },
    scope: [ 'block', 'inserter' ],
    //icon: hamburgerIcon,
    isActive: ( { className }, variationAttributes ) =>
        true === variationAttributes.gutenaAdvancedButtons &&
        'undefined' !== typeof className &&
        null !== typeof className &&
        0 <= className.indexOf( variationAttributes.className ),
    }
);

const withInspectorControls = createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {
        const { name, attributes, setAttributes, isSelected, clientId } = props;

        if ( 'core/buttons' === name && attributes?.className?.includes( 'gutena-advanced-buttons' ) ) {
            const { updateBlockAttributes } = useDispatch( blockEditorStore );
            const { getBlockOrder } = useSelect( blockEditorStore );
            
            const { getBlock } = useSelect( ( select ) => {
                return {
                    getBlock: select( blockEditorStore ).getBlock
                };
            }, [ clientId ] );

            const innerBlockClientIds = getBlockOrder( clientId );
			innerBlockClientIds.forEach( ( innerBlockClientId ) => {
                const blockProps = getBlock( innerBlockClientId );
                const { attributes } = blockProps;

                if ( ! attributes?.gutenaAdvancedButton || ! attributes?.className?.includes( 'gutena-advanced-button' ) ) {
                    updateBlockAttributes( innerBlockClientId, {
                        gutenaAdvancedButton: true,
                        className: `gutena-advanced-button gutena-advanced-button-${ innerBlockClientId.substr( 2, 9 ) }`,
                        uniqueId: innerBlockClientId.substr( 2, 9 ),
                        btnSize: {
                            size: 'm',
                            custom: false
                        },
                        btnFontSize: '15px',
                        btnColors: {
                            normal: {
                                icon: '#21222F'
                            }
                        },
                        btnIconSize: '16px',
                        btnIconGap: '9px',
                        btnIconPosition: 'before',
                        style: {
                            spacing: {
                                padding: {
                                    top: '12px',
                                    right: '22px',
                                    bottom: '12px',
                                    left: '22px',
                                }
                            }
                        },
                    } );
                }
			} );
        }

        return <BlockEdit { ...props } />;
    }
}, 'withInspectorControl' );

addFilter(
    'editor.BlockEdit',
    'my-plugin/with-inspector-controls',
    withInspectorControls
);