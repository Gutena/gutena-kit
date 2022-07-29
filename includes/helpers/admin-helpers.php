<?php 
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'gutendkit_extract_css_from_block' ) ) {
	function gutendkit_extract_css_from_block( $blocks ) {
		$gutenakit_ids = array();
		$gutenakit_css = '';
		$gutenakit_id = '';//for duplicateIDs
		$duplicate_blocks = [];
		//Consisting block loop
		foreach ( $blocks as $block ) {
			
			if ( ! empty( $block['attrs'] ) && ! empty( $block['attrs']['gutenaKitID'] ) && ! empty( $block['attrs']['gutenaKitCSS'] ) ) {
				
				if ( ! in_array( $block['attrs']['gutenaKitID'], $gutenakit_ids, true ) ) {
					$gutenakit_ids[] = $block['attrs']['gutenaKitID'];    
				}else {
					 $duplicate_blocks[] = $block;
				}
				//collect css content
				foreach ( $block['attrs']['gutenaKitCSS'] as $css ) {
					if ( ! empty( $css ) ) {
						$gutenakit_css .= ' .'.gutenakit_block_id_classname_prefix().$block['attrs']['gutenaKitID'].' '.$css.' ';
					}
				}           
			}

			if ( ! empty( $block['innerBlocks'] ) && is_array( $block['innerBlocks'] ) ) {
				$res = gutendkit_extract_css_from_block( $block['innerBlocks'] );
				$gutenakit_css .= $res['gutenakit_css'];
				$gutenakit_ids = array_merge( $gutenakit_ids,$res['gutenakit_ids'] );
				$duplicate_blocks = array_merge( $duplicate_blocks,$res['duplicate_blocks'] );
			}
		}
		return array(
			'gutenakit_ids'    => $gutenakit_ids,
			'gutenakit_css'    => $gutenakit_css,
			'duplicate_blocks' => $duplicate_blocks,
		);
	}
}

//demo category
if ( ! function_exists( 'gutendkit_demo_category_list' ) ) {
	function gutendkit_demo_category_list( ) {
		return array(
			'agency',
			'business',
			'blog'
		);
	}
}
//Demo List
if ( ! function_exists( 'gutendkit_categorize_demo_list' ) ) {
	function gutendkit_categorize_demo_list() {
		$demos = array();
		if ( function_exists( 'wp_json_file_decode' ) ) { 
			$demo_site = 'https://demo.gutena.io/wp-content/uploads/demo-files/';
			$demos = array(
				'agency'   => array(
					'default' => array_merge(
						wp_json_file_decode( GUTENA_KIT_DIR_PATH . 'includes/demo-import/demo-files/agency/agency_demo_settings.json', array( 'associative' => true ) ),
						array(
							'demo_slug'					=> 'agency',
							'demo_type'					=> 'free',
							'category'					=> array('agency'),
							'import_file_url'          	=> esc_url( $demo_site . '/agency/content.xml' ),
							'import_preview_image_url' 	=> esc_url( $demo_site . '/agency/demo-screenshot.png' ),
							'import_notice'           	=> '',
							'style_slug'				=> 'default',
							'title'						=> 'Default',
							'fontFamily'				=> array(
								'Manrope',
								'Inter'
							),
							'colors'					=> array(
								'#E7694E',
								'#202020',
								'#555555',
								'#FFF3F0',
								'#FFFFFF'
							),
						)
					),
				),
				'business' => array(
					'default' => array_merge(
						wp_json_file_decode( GUTENA_KIT_DIR_PATH . 'includes/demo-import/demo-files/business/business_demo_settings.json', array( 'associative' => true ) ),
						array(
							'demo_slug'					=> 'business',
							'demo_type'					=> 'free',
							'category'					=> array('business'),
							'import_file_url'          => esc_url( $demo_site . '/business/content.xml' ),
							'import_preview_image_url' => esc_url( $demo_site . '/business/demo-screenshot.png' ),
							'import_notice'            => '',
							'style_slug'				=> 'default',
							'title'						=> 'Default',
							'fontFamily'				=> array(
								'Manrope',
								'Inter'
							),
							'colors'					=> array(
								'#3F6DE4',
								'#252740',
								'#575B7A',
								'#E7F0FF',
								'#FFFFFF'
							),
						)
					),
				),
				'blog' => array(
					'default' => array_merge(
						wp_json_file_decode( GUTENA_KIT_DIR_PATH . 'includes/demo-import/demo-files/blog/blog_demo_settings.json', array( 'associative' => true ) ),
						array(
							'demo_slug'					=> 'blog',
							'demo_type'					=> 'free',
							'category'					=> array('blog'),
							'import_file_url'          => esc_url( $demo_site . '/blog/content.xml' ),
							'import_preview_image_url' => esc_url( $demo_site . '/blog/demo-screenshot.png' ),
							'import_notice'            => '',
							'style_slug'				=> 'default',
							'title'						=> 'Default',
							'fontFamily'				=> array(
								'Plus Jakarta Sans',
							),
							'colors'					=> array(
								'#0897B7',
								'#000000',
								'#151515',
								'#DAF0F4',
								'#FFFFFF'
							),
						)
					),
				),
			);
			//Get style variations
			$demo_styles = wp_json_file_decode( GUTENA_KIT_DIR_PATH . 'includes/demo-import/demo-files/styles/all_styles.json', array( 'associative' => true ) );

			foreach ( $demos as $key => $demo_array ) {
				//Add style variations in demo array
				foreach ( $demo_styles as $demo_style ) {
					$demos[$key][$demo_style['style_slug']] = array_merge( $demo_array['default'], $demo_style );
				}
			}
		}

		return $demos;
	}
}

//demo deatils list OR make an array of all demos 
if ( ! function_exists( 'gutendkit_demo_deatils_list' ) ) {
	function gutendkit_demo_deatils_list( $index = false ) {
		$demos = gutendkit_categorize_demo_list();

		if ( empty( $demos ) ) {
			return $demos;
		}

		$demo = array();
		
		foreach ( $demos as $demo_array ) {
			foreach ( $demo_array as $demo_details ) {
				$demo[] = $demo_details;
			}
		}
		return (false === $index ) ? $demo : $demo[ $index ];
	}
}

//Check if gutena theme activated
if ( ! function_exists( 'is_gutena_theme_activated' ) ) {
	function is_gutena_theme_activated() {
		$theme = wp_get_theme();
		return ! ( false === stripos( $theme->get( 'Name' ), 'gutena' ) );
	}
}

//file_get_contents
if ( ! function_exists( 'gutenakit_file_get_contents' ) ) {
	function gutenakit_file_get_contents( $url ) {
		$response = wp_remote_get( esc_url_raw( $url ) );
		return ( ! is_wp_error( $response ) ) ? wp_remote_retrieve_body( $response ) : '';
	}
}

//file_put_contents
if ( ! function_exists( 'gutenakit_file_put_contents' ) ) {
	function gutenakit_file_put_contents( $file_path, $contents ) {

		if ( 'direct' === get_filesystem_method() )
		{
			/* you can safely run request_filesystem_credentials() without any issues and don't need to worry about passing in a URL */
			$creds = request_filesystem_credentials( wp_nonce_url( admin_url() ), '', false, false, array() );
		
			/* initialize the API */
			if ( ! WP_Filesystem( $creds ) ) {
				/* any problems and we exit */
				return false;
			}   
		
			global $wp_filesystem;
			/* do our file manipulations below */
			return $wp_filesystem->put_contents( $file_path, $contents );

		} else {
			return false;
		}
	}
}