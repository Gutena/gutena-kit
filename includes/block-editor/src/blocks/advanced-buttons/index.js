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
    title: __( 'Advanced Buttons', 'gutena-kit' ),
    description: __( 'Prompt visitors to take action with a Advanced Buttons.', 'gutena-kit' ),
    category: 'gutena',
    attributes: {
        gutenaAdvancedButtons: true,
        className: 'gutena-advanced-buttons',
    },
    scope: [ 'block', 'inserter' ],
    icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1027_37)">
                <path d="M12.4444 11H10.5556H3.94444C3.69396 11 3.45374 10.9122 3.27662 10.7559C3.0995 10.5996 3 10.3877 3 10.1667V1.83333C3 1.61232 3.0995 1.40036 3.27662 1.24408C3.45374 1.0878 3.69396 1 3.94444 1H19.0556C19.306 1 19.5463 1.0878 19.7234 1.24408C19.9005 1.40036 20 1.61232 20 1.83333V10.1667C20 10.3877 19.9005 10.5996 19.7234 10.7559C19.5463 10.9122 19.306 11 19.0556 11H12.4444ZM4.88889 9.33333H18.1111V2.66667H4.88889V9.33333ZM7.72222 5.16667H15.2778V6.83333H7.72222V5.16667Z" fill="#3F6DE4"/>
                <path d="M12.4444 24H10.5556H3.94444C3.69396 24 3.45374 23.9122 3.27662 23.7559C3.0995 23.5996 3 23.3877 3 23.1667V14.8333C3 14.6123 3.0995 14.4004 3.27662 14.2441C3.45374 14.0878 3.69396 14 3.94444 14H19.0556C19.306 14 19.5463 14.0878 19.7234 14.2441C19.9005 14.4004 20 14.6123 20 14.8333V23.1667C20 23.3877 19.9005 23.5996 19.7234 23.7559C19.5463 23.9122 19.306 24 19.0556 24H12.4444ZM4.88889 22.3333H18.1111V15.6667H4.88889V22.3333ZM7.72222 18.1667H15.2778V19.8333H7.72222V18.1667Z" fill="#3F6DE4"/>
            </g>
            <defs>
                <clipPath id="clip0_1027_37">
                    <rect width="24" height="24" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    ),
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