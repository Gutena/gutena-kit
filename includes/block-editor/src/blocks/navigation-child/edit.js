import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

export default function edit() {
	const ALLOWED_BLOCKS = [
		'core/navigation-link',
		'core/search',
		'core/social-links',
		'core/page-list',
		'core/spacer',
		'core/home-link',
		'core/site-title',
		'core/site-logo',
		'core/navigation-submenu',
		'core/image',
		'core/media-text',
		'core/paragraph',
		'core/buttons',
	];

	const blockProps = useBlockProps();
	const innerBlockProps = useInnerBlocksProps( blockProps, {
		allowedBlocks: ALLOWED_BLOCKS,
		orientation: "horizontal"
	} )

	return <div { ...innerBlockProps } />
}
