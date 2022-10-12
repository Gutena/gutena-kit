/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import metadata from './block.json';
import edit from "./edit";
import save from './save';

/**
 * Register Block
 */
registerBlockType( metadata, {
	edit,
    save,
    icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_3268_159)">
                <path d="M22 13H20V7.238L12.072 14.338L4 7.216V19H14V21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V13ZM4.511 5L12.061 11.662L19.502 5H4.511ZM19.5 21.75L16.855 23.14L17.36 20.195L15.22 18.109L18.177 17.679L19.5 15L20.823 17.68L23.78 18.11L21.64 20.195L22.145 23.141L19.5 21.75Z" fill="#3F6DE4"/>
            </g>
            <defs>
                <clipPath id="clip0_3268_159">
                    <rect width="24" height="24" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    )
} );