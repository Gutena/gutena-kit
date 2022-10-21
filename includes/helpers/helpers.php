<?php 
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

//block id classname prefix
if ( ! function_exists( 'gutenakit_block_id_classname_prefix' ) ) {
	function gutenakit_block_id_classname_prefix(){
		return 'gutenakitid-';
	}
}

if ( ! function_exists( 'gutendkit_str_replace_first' ) ) {
    function gutendkit_str_replace_first( $search, $replace, $given_string ) {
        return implode( $replace, explode( $search, $given_string, 2 ));
    }
}

if ( ! function_exists( 'gutendkit_uniqid_base36' ) ) {
	function gutendkit_uniqid_base36( $more_entropy=false ) {
		static $id_counter = 0;
		$s = uniqid( '', $more_entropy );
		if ( ! $more_entropy)
			return base_convert( $s, 16, 36 );
			
		$hex = substr( $s, 0, 13 );
		$dec = $s[13] . substr( $s, 15 ); // skip the dot
		return base_convert( $hex, 16, 36 ) . base_convert( $dec, 10, 36 ). (string) ++$id_counter;
	}
}

if ( ! function_exists( 'gutendkit_last_str_replace' ) ) {
	function gutendkit_last_str_replace( $search, $replace, $given_string ) {
		$pos = strrpos( $given_string, $search );
		if ( $pos > 1 ) {
			$given_string = substr_replace( $given_string, $replace, $pos, strlen( $search ) );
		}
		return $given_string;
	}
}

if ( ! function_exists( 'gutenakit_is_remove_wp_emoji' ) ) {
	function gutenakit_is_remove_wp_emoji(){
		return apply_filters( 'gutenakit_remove_wp_emoji', true );
	}
}

//Check admin capabilities
if ( ! function_exists( 'is_gutenakit_admin' ) ) {
	function is_gutenakit_admin(){
		if ( ! function_exists( 'wp_get_current_user' ) ) { 
			require_once( ABSPATH . "wp-includes/pluggable.php" ); 
		}
		if ( ! function_exists( 'current_user_can' ) ) { 
			require_once( ABSPATH . "wp-includes/capabilities.php" ); 
		}
		return ( function_exists( 'current_user_can' ) && current_user_can( 'manage_options' ) );
	}
}

//Check admin capabilities
if ( ! function_exists( 'gutenakit_sanitize_array' ) ) {
	function gutenakit_sanitize_array( $array ) {
		if ( ! empty( $array ) ) {
			foreach ( (array) $array as $key => $value ) {
				if ( is_array( $value ) ) {
					$array[ $key ] = gutenakit_sanitize_array( $value );
				} else {
					$array[ $key ] = sanitize_text_field( $value );
				}
			}
		}
		return $array;
	}
}

//Editor Block list
if ( ! function_exists( 'gutenakit_block_list' ) ) {
	function gutenakit_block_list(){
		$inactive_blocks = get_option( 'gutena_inactive_blocks', array() );
		//'gutena/newsletter' = block name taken from block.json
		return array(
			'gutena/newsletter' => array(
				'dirname'	=>	'newsletter-block-gutena',
				'filepath' 	=>	'newsletter-block-gutena/newsletter-block-gutena.php',
				'active'	=>	empty( $inactive_blocks['gutena/newsletter'] )	 	
			), 
			'gutena/post-featured-tag' => array(
				'dirname'	=>	'post-featured-tag-block-gutena',
				'filepath' 	=>	'post-featured-tag-block-gutena/post-featured-tag-block-gutena.php',
				'active'	=>	empty( $inactive_blocks['gutena/post-featured-tag'] )	 	
			), 
			'gutena/instagram-gallery' => array(
				'dirname'	=>	'photofeed-block-gutena',
				'filepath' 	=>	'photofeed-block-gutena/photofeed-block-gutena.php',
				'active'	=>	empty( $inactive_blocks['gutena/instagram-gallery'] )	 	
			), 
		);
	}
}


//define global typography
if ( ! function_exists( 'get_gutena_kit_global_typography' ) ) {
	function get_gutena_kit_global_typography(){
		//global typography
		global $gutena_kit_global_typography;

		//check if global typography exists 
		if ( ! isset( $gutena_kit_global_typography ) ) {
			$gutena_kit_global_typography = get_option( 'gutena_kit_global_typography', array() );
		}

		return $gutena_kit_global_typography;
	}
}

//Get global typography css
if ( ! function_exists( 'get_gutena_kit_global_typography_css' ) ) {
	function get_gutena_kit_global_typography_css( $slug = false ){
		//get global typography
		get_gutena_kit_global_typography();

		global $gutena_kit_global_typography;

		//check if global typography exists 
		if ( empty( $gutena_kit_global_typography ) && ! is_array( $gutena_kit_global_typography ) ) {
			return '';
		}

		//Specific typography
		if ( ! empty( $slug ) ) {
			return ( ! empty( $gutena_kit_global_typography[ $slug ] ) && ! empty( $gutena_kit_global_typography[ $slug ]['css'] ) ) ? $gutena_kit_global_typography[ $slug ]['css'] : '';
		} else {
			$css = '';
			foreach ( $gutena_kit_global_typography as $typography) {
				$css .= empty( $typography['css'] ) ? '': $typography['css'];
			}
			return $css;
		}

		return '';
	}
}


//Compile css from json
if ( ! function_exists( 'gutenakit_blockstyle_css_from_json' ) ) {
	function gutenakit_blockstyle_css_from_json( $attrs ){
		if ( empty( $attrs ) || ! is_array( $attrs ) || empty( $attrs['gutenaKitStyle'] ) || empty( $attrs['gutenaKitStyle']['cssJson'] ) || ! is_array( $attrs['gutenaKitStyle']['cssJson'] ) ) {
			return $attrs;
		}

		$media_query_tab = apply_filters('gutena-kit-media-query-tab', '1080px' );
		$media_query_mobile = apply_filters('gutena-kit-media-query-mobile', '767px' );

		//Css 
		$attrs['gutenaKitCSS']['generatedCss'] = ' .' . $attrs['gutenaKitID'] .'{ ';

		//spacing
		foreach ( array( 'margin', 'padding' ) as $spacing ) {
			foreach ( array( 'top', 'right', 'bottom', 'left' ) as $position ) {
				if ( true === array_key_exists( '--gutenakit--default-'.$spacing.'-'.$position, $attrs['gutenaKitStyle']['cssJson'] ) ) {
					$attrs['gutenaKitCSS']['generatedCss'] .= ' '.$spacing.'-'.$position.':'. $attrs['gutenaKitStyle']['cssJson']['--gutenakit--default-'.$spacing.'-'.$position] .' !important;';
				}
			}
		}

		// Text color
		if ( true === array_key_exists( '--gutenakit--color-normal-text', $attrs['gutenaKitStyle']['cssJson'] ) ) {
			$attrs['gutenaKitCSS']['generatedCss'] .= ' color:'. $attrs['gutenaKitStyle']['cssJson']['--gutenakit--color-normal-text'] .' !important;';
		}

		// Background color
		if ( true === array_key_exists( '--gutenakit--color-normal-background', $attrs['gutenaKitStyle']['cssJson'] ) ) {
			$attrs['gutenaKitCSS']['generatedCss'] .= ' background:'. $attrs['gutenaKitStyle']['cssJson']['--gutenakit--color-normal-background'] .' !important;';
		}

		// Border
		if ( true === array_key_exists( '--gutenakit--border-normal', $attrs['gutenaKitStyle']['cssJson'] ) ) {
			$attrs['gutenaKitCSS']['generatedCss'] .= ' border:'. $attrs['gutenaKitStyle']['cssJson']['--gutenakit--border-normal'] .' !important;';
		} else {
			foreach ( array( 'top', 'right', 'bottom', 'left' ) as $position ) {
				if ( true === array_key_exists( '---gutenakit--border-normal-'.$position, $attrs['gutenaKitStyle']['cssJson'] ) ) {
					$attrs['gutenaKitCSS']['generatedCss'] .= ' border-'.$position.':'. $attrs['gutenaKitStyle']['cssJson']['---gutenakit--border-normal-'.$position] .' !important;';
				}
			}
		}

		// Box Shadow
		if ( true === array_key_exists( '--gutenakit--boxshadow-normal', $attrs['gutenaKitStyle']['cssJson'] ) ) {
			$attrs['gutenaKitCSS']['generatedCss'] .= 'box-shadow:'. $attrs['gutenaKitStyle']['cssJson']['--gutenakit--boxshadow-normal'] .' !important;';
		}

		// Overlay parent
		if ( true === array_key_exists( '--gutenakit--overlay-normal-background', $attrs['gutenaKitStyle']['cssJson'] ) || true === array_key_exists( '--gutenakit--overlay-hover-background', $attrs['gutenaKitStyle']['cssJson'] ) ) {
			$attrs['gutenaKitCSS']['generatedCss'] .= ' position: relative;';
		}

		//typography
		foreach ( array( 'font-size', 'line-height', 'font-family', 'font-style', 'font-weight', 'letter-spacing', 'text-transfor', 'text-decoration' ) as $font_property ) {
			if ( true === array_key_exists( '---gutenakit--'.$font_property, $attrs['gutenaKitStyle']['cssJson'] ) ) {
				$attrs['gutenaKitCSS']['generatedCss'] .= ' '.$font_property.':'. $attrs['gutenaKitStyle']['cssJson']['---gutenakit--'.$font_property] .' !important;';
			}
		}

		//Hide in desktop
		if ( true === array_key_exists( '--gutenakit--display-default', $attrs['gutenaKitStyle']['cssJson'] ) ) {
			$attrs['gutenaKitCSS']['generatedCss'] .= ' display: '.$attrs['gutenaKitStyle']['cssJson']['--gutenakit--display-default'].';';
		}
		
		$attrs['gutenaKitCSS']['generatedCss'] .= ' }';

		/************************
		 Block hover : START
		**************************/
		$attrs['gutenaKitCSS']['generatedCss'] .= ' .' . $attrs['gutenaKitID'] .':hover {';

		// Text color
		if ( true === array_key_exists( '--gutenakit--color-hover-text', $attrs['gutenaKitStyle']['cssJson'] ) ) {
			$attrs['gutenaKitCSS']['generatedCss'] .= ' color:'. $attrs['gutenaKitStyle']['cssJson']['--gutenakit--color-hover-text'] .' !important;';
		}

		// Background color
		if ( true === array_key_exists( '--gutenakit--color-hover-background', $attrs['gutenaKitStyle']['cssJson'] ) ) {
			$attrs['gutenaKitCSS']['generatedCss'] .= ' background:'. $attrs['gutenaKitStyle']['cssJson']['--gutenakit--color-hover-background'] .' !important;';
		}

		// Border
		if ( true === array_key_exists( '--gutenakit--border-hover', $attrs['gutenaKitStyle']['cssJson'] ) ) {
			$attrs['gutenaKitCSS']['generatedCss'] .= ' border:'. $attrs['gutenaKitStyle']['cssJson']['--gutenakit--border-hover'] .' !important;';
		} else {
			foreach ( array( 'top', 'right', 'bottom', 'left' ) as $position ) {
				if ( true === array_key_exists( '---gutenakit--border-hover-'.$position, $attrs['gutenaKitStyle']['cssJson'] ) ) {
					$attrs['gutenaKitCSS']['generatedCss'] .= ' border-'.$position.':'. $attrs['gutenaKitStyle']['cssJson']['---gutenakit--border-hover-'.$position] .' !important;';
				}
			}
		}

		// Box Shadow
		if ( true === array_key_exists( '--gutenakit--boxshadow-hover', $attrs['gutenaKitStyle']['cssJson'] ) ) {
			$attrs['gutenaKitCSS']['generatedCss'] .= 'box-shadow:'. $attrs['gutenaKitStyle']['cssJson']['--gutenakit--boxshadow-hover'] .' !important;';
		}

		$attrs['gutenaKitCSS']['generatedCss'] .= ' }';
		/************************
		 Block hover : END
		**************************/

		// Link color
		if ( true === array_key_exists( '--gutenakit--color-normal-link', $attrs['gutenaKitStyle']['cssJson'] ) ) {
			$attrs['gutenaKitCSS']['generatedCss'] .= ' .' . $attrs['gutenaKitID'] .' a {
				color:'. $attrs['gutenaKitStyle']['cssJson']['--gutenakit--color-normal-link'] .' !important;
			}';
		}

		// Link hover color
		if ( true === array_key_exists( '--gutenakit--color-hover-link', $attrs['gutenaKitStyle']['cssJson'] ) ) {
			$attrs['gutenaKitCSS']['generatedCss'] .= ' .' . $attrs['gutenaKitID'] .' a:hover {
				color:'. $attrs['gutenaKitStyle']['cssJson']['--gutenakit--color-hover-link'] .' !important;
			}';
		}

		// overlay color
		if ( true === array_key_exists( '--gutenakit--overlay-normal-background', $attrs['gutenaKitStyle']['cssJson'] ) && true === array_key_exists( '--gutenakit--overlay-normal-opacity', $attrs['gutenaKitStyle']['cssJson'] ) ) {
			$attrs['gutenaKitCSS']['generatedCss'] .= ' .' . $attrs['gutenaKitID'] .':before {
				content:"";
				background:'. $attrs['gutenaKitStyle']['cssJson']['--gutenakit--overlay-normal-background'] .'; 
				opacity: '. $attrs['gutenaKitStyle']['cssJson']['--gutenakit--overlay-normal-opacity'] .';
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
			}';
		}

		// overlay color
		if ( true === array_key_exists( '--gutenakit--overlay-hover-background', $attrs['gutenaKitStyle']['cssJson'] ) && true === array_key_exists( '--gutenakit--overlay-hover-opacity', $attrs['gutenaKitStyle']['cssJson'] ) ) {
			$attrs['gutenaKitCSS']['generatedCss'] .= ' .' . $attrs['gutenaKitID'] .':hover:before {
				content:"";
				background:'. $attrs['gutenaKitStyle']['cssJson']['--gutenakit--overlay-hover-background'] .'; 
				opacity: '. $attrs['gutenaKitStyle']['cssJson']['--gutenakit--overlay-hover-opacity'] .';
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
			}';
		}

		/************************
		 Block Tablet : START
		**************************/
			$attrs['gutenaKitCSS']['generatedCss'] .= '@media only screen and (min-width: 768px) and (max-width: '.$media_query_tab.') { .' . $attrs['gutenaKitID'] .' {';

			//Hide in Tablet
			if ( true === array_key_exists( '--gutenakit--display-tablet', $attrs['gutenaKitStyle']['cssJson'] ) ) {
				$attrs['gutenaKitCSS']['generatedCss'] .= ' display: '.$attrs['gutenaKitStyle']['cssJson']['--gutenakit--display-tablet'].';';
			} else {

				//spacing
				foreach ( array( 'margin', 'padding' ) as $spacing ) {
					foreach ( array( 'top', 'right', 'bottom', 'left' ) as $position ) {
						if ( true === array_key_exists( '--gutenakit--tablet-'.$spacing.'-'.$position, $attrs['gutenaKitStyle']['cssJson'] ) ) {
							$attrs['gutenaKitCSS']['generatedCss'] .= ' '.$spacing.'-'.$position.':'. $attrs['gutenaKitStyle']['cssJson']['--gutenakit--tablet-'.$spacing.'-'.$position] .' !important;';
						}
					}
				}

				//typography
				foreach ( array( 'font-size', 'line-height' ) as $font_property ) {
					if ( true === array_key_exists( '---gutenakit--t-'.$font_property, $attrs['gutenaKitStyle']['cssJson'] ) ) {
						$attrs['gutenaKitCSS']['generatedCss'] .= ' '.$font_property.':'. $attrs['gutenaKitStyle']['cssJson']['---gutenakit--t-'.$font_property] .' !important;';
					}
				}

			}

			$attrs['gutenaKitCSS']['generatedCss'] .= ' } }';
		/************************
		 Block Tablet : END
		**************************/

		/************************
		 Block Mobile : START
		**************************/
		$attrs['gutenaKitCSS']['generatedCss'] .= '@media only screen and (max-width: '.$media_query_mobile .') { .' . $attrs['gutenaKitID'] .' {';

			//Hide in Mobile
			if ( true === array_key_exists( '--gutenakit--display-mobile', $attrs['gutenaKitStyle']['cssJson'] ) ) {
				$attrs['gutenaKitCSS']['generatedCss'] .= ' display: '.$attrs['gutenaKitStyle']['cssJson']['--gutenakit--display-mobile'].';';
			} else {
				//spacing
				foreach ( array( 'margin', 'padding' ) as $spacing ) {
					foreach ( array( 'top', 'right', 'bottom', 'left' ) as $position ) {
						if ( true === array_key_exists( '--gutenakit--mobile-'.$spacing.'-'.$position, $attrs['gutenaKitStyle']['cssJson'] ) ) {
							$attrs['gutenaKitCSS']['generatedCss'] .= ' '.$spacing.'-'.$position.':'. $attrs['gutenaKitStyle']['cssJson']['--gutenakit--mobile-'.$spacing.'-'.$position] .' !important;';
						}
					}
				}

				//typography
				foreach ( array( 'font-size', 'line-height' ) as $font_property ) {
					if ( true === array_key_exists( '---gutenakit--m-'.$font_property, $attrs['gutenaKitStyle']['cssJson'] ) ) {
						$attrs['gutenaKitCSS']['generatedCss'] .= ' '.$font_property.':'. $attrs['gutenaKitStyle']['cssJson']['---gutenakit--m-'.$font_property] .' !important;';
					}
				}
			}

			$attrs['gutenaKitCSS']['generatedCss'] .= ' } } ';
		/************************
		 Block Mobile : END
		**************************/

		return $attrs;
		
	}
}


//Compile css from var
if ( ! function_exists( 'gutenakit_blockstyle_css_from_var' ) ) {
	function gutenakit_blockstyle_css_from_var( $attrs ){
		if ( empty( $attrs ) || ! is_array( $attrs ) || empty( $attrs['gutenaKitCSS'] ) || empty( $attrs['gutenaKitCSS']['blockCss'] ) ) {
			return $attrs;
		}

		$media_query_tab = apply_filters('gutena-kit-media-query-tab', '1080px' );
		$media_query_mobile = apply_filters('gutena-kit-media-query-mobile', '767px' );

		//Css 
		$attrs['gutenaKitCSS']['generatedCss'] = ' .' . $attrs['gutenaKitID'] .'{ ';

		//spacing
		foreach ( array( 'margin', 'padding' ) as $spacing ) {
			foreach ( array( 'top', 'right', 'bottom', 'left' ) as $position ) {
				if ( false !== stripos( $attrs['gutenaKitCSS']['blockCss'] , '--gutenakit--default-'.$spacing.'-'.$position ) ) {
					$attrs['gutenaKitCSS']['generatedCss'] .= ' '.$spacing.'-'.$position.':var(--gutenakit--default-'.$spacing.'-'.$position.',initial) !important;';
				}
			}
		}

		// Text color
		if ( false !== stripos( $attrs['gutenaKitCSS']['blockCss'] , '--gutenakit--color-normal-text') ) {
			$attrs['gutenaKitCSS']['generatedCss'] .= ' color:var(--gutenakit--color-normal-text,initial) !important;';
		}

		// Background color
		if ( false !== stripos( $attrs['gutenaKitCSS']['blockCss'] , '--gutenakit--color-normal-background') ) {
			$attrs['gutenaKitCSS']['generatedCss'] .= ' background:var(--gutenakit--color-normal-background,initial) !important;';
		}

		// Border
		if ( false !== stripos( $attrs['gutenaKitCSS']['blockCss'] , '--gutenakit--border-normal') ) {
			$attrs['gutenaKitCSS']['generatedCss'] .= ' border:var(--gutenakit--border-normal,initial) !important;';
		} else {
			foreach ( array( 'top', 'right', 'bottom', 'left' ) as $position ) {
				if ( false !== stripos( $attrs['gutenaKitCSS']['blockCss'] , '---gutenakit--border-normal-'.$position ) ) {
					$attrs['gutenaKitCSS']['generatedCss'] .= ' border-'.$position.':var(--gutenakit--border-normal-'.$position.',initial) !important;';
				}
			}
		}

		// Box Shadow
		if ( false !== stripos( $attrs['gutenaKitCSS']['blockCss'] , '--gutenakit--boxshadow-normal') ) {
			$attrs['gutenaKitCSS']['generatedCss'] .= 'box-shadow:var(--gutenakit--boxshadow-normal,initial) !important;';
		}

		// Overlay parent
		if ( false !== stripos( $attrs['gutenaKitCSS']['blockCss'] , '--gutenakit--overlay-normal-background') || false !== stripos( $attrs['gutenaKitCSS']['blockCss'] , '--gutenakit--overlay-hover-background') ) {
			$attrs['gutenaKitCSS']['generatedCss'] .= ' position: relative;';
		}

		//typography
		foreach ( array( 'font-size', 'line-height', 'font-family', 'font-style', 'font-weight', 'letter-spacing', 'text-transfor', 'text-decoration' ) as $font_property ) {
			if ( false !== stripos( $attrs['gutenaKitCSS']['blockCss'] , '---gutenakit--'.$font_property ) ) {
				$attrs['gutenaKitCSS']['generatedCss'] .= ' '.$font_property.':var(--gutenakit--'.$font_property.',initial) !important;';
			}
		}
		
		$attrs['gutenaKitCSS']['generatedCss'] .= ' }';

		/************************
		 Block hover : START
		**************************/
		$attrs['gutenaKitCSS']['generatedCss'] .= ' .' . $attrs['gutenaKitID'] .':hover {';

		// Text color
		if ( false !== stripos( $attrs['gutenaKitCSS']['blockCss'] , '--gutenakit--color-hover-text') ) {
			$attrs['gutenaKitCSS']['generatedCss'] .= ' color:var(--gutenakit--color-hover-text,initial) !important;';
		}

		// Background color
		if ( false !== stripos( $attrs['gutenaKitCSS']['blockCss'] , '--gutenakit--color-hover-background') ) {
			$attrs['gutenaKitCSS']['generatedCss'] .= ' background:var(--gutenakit--color-hover-background,initial) !important;';
		}

		// Border
		if ( false !== stripos( $attrs['gutenaKitCSS']['blockCss'] , '--gutenakit--border-hover') ) {
			$attrs['gutenaKitCSS']['generatedCss'] .= ' border:var(--gutenakit--border-hover,initial) !important;';
		} else {
			foreach ( array( 'top', 'right', 'bottom', 'left' ) as $position ) {
				if ( false !== stripos( $attrs['gutenaKitCSS']['blockCss'] , '---gutenakit--border-hover-'.$position ) ) {
					$attrs['gutenaKitCSS']['generatedCss'] .= ' border-'.$position.':var(--gutenakit--border-hover-'.$position.',initial) !important;';
				}
			}
		}

		// Box Shadow
		if ( false !== stripos( $attrs['gutenaKitCSS']['blockCss'] , '--gutenakit--boxshadow-hover') ) {
			$attrs['gutenaKitCSS']['generatedCss'] .= 'box-shadow:var(--gutenakit--boxshadow-hover,initial) !important;';
		}

		$attrs['gutenaKitCSS']['generatedCss'] .= ' }';
		/************************
		 Block hover : END
		**************************/

		// Link color
		if ( false !== stripos( $attrs['gutenaKitCSS']['blockCss'] , '--gutenakit--color-normal-link') ) {
			$attrs['gutenaKitCSS']['generatedCss'] .= ' .' . $attrs['gutenaKitID'] .' a {
				color:var(--gutenakit--color-normal-link,initial) !important;
			}';
		}

		// Link hover color
		if ( false !== stripos( $attrs['gutenaKitCSS']['blockCss'] , '--gutenakit--color-hover-link') ) {
			$attrs['gutenaKitCSS']['generatedCss'] .= ' .' . $attrs['gutenaKitID'] .' a:hover {
				color:var(--gutenakit--color-hover-link,initial) !important;
			}';
		}

		// overlay color
		if ( false !== stripos( $attrs['gutenaKitCSS']['blockCss'] , '--gutenakit--overlay-normal-background' ) ) {
			$attrs['gutenaKitCSS']['generatedCss'] .= ' .' . $attrs['gutenaKitID'] .':before {
				content:"";
				background:var(--gutenakit--overlay-normal-background,initial); 
				opacity: var(--gutenakit--overlay-normal-opacity, 0.8);
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
			}';
		}

		// overlay color
		if ( false !== stripos( $attrs['gutenaKitCSS']['blockCss'] , '--gutenakit--overlay-hover-background') ) {
			$attrs['gutenaKitCSS']['generatedCss'] .= ' .' . $attrs['gutenaKitID'] .':hover:before {
				content:"";
				background:var(--gutenakit--overlay-hover-background,initial); 
				opacity: var(--gutenakit--overlay-hover-opacity,0.8);
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
			}';
		}

		/************************
		 Block Tablet : START
		**************************/
			$attrs['gutenaKitCSS']['generatedCss'] .= '@media only screen and (min-width: 768px) and (max-width: '.$media_query_tab.') { .' . $attrs['gutenaKitID'] .' {';

			//spacing
			foreach ( array( 'margin', 'padding' ) as $spacing ) {
				foreach ( array( 'top', 'right', 'bottom', 'left' ) as $position ) {
					if ( false !== stripos( $attrs['gutenaKitCSS']['blockCss'] , '--gutenakit--tablet-'.$spacing.'-'.$position ) ) {
						$attrs['gutenaKitCSS']['generatedCss'] .= ' '.$spacing.'-'.$position.':var(--gutenakit--tablet-'.$spacing.'-'.$position.',initial) !important;';
					}
				}
			}

			//typography
			foreach ( array( 'font-size', 'line-height' ) as $font_property ) {
				if ( false !== stripos( $attrs['gutenaKitCSS']['blockCss'] , '---gutenakit--t-'.$font_property ) ) {
					$attrs['gutenaKitCSS']['generatedCss'] .= ' '.$font_property.':var(--gutenakit--t-'.$font_property.',initial) !important;';
				}
			}

			$attrs['gutenaKitCSS']['generatedCss'] .= ' } }';
		/************************
		 Block Tablet : END
		**************************/

		/************************
		 Block Mobile : START
		**************************/
		$attrs['gutenaKitCSS']['generatedCss'] .= '@media only screen and (max-width: '.$media_query_mobile .') { .' . $attrs['gutenaKitID'] .' {';

			//spacing
			foreach ( array( 'margin', 'padding' ) as $spacing ) {
				foreach ( array( 'top', 'right', 'bottom', 'left' ) as $position ) {
					if ( false !== stripos( $attrs['gutenaKitCSS']['blockCss'] , '--gutenakit--mobile-'.$spacing.'-'.$position ) ) {
						$attrs['gutenaKitCSS']['generatedCss'] .= ' '.$spacing.'-'.$position.':var(--gutenakit--mobile-'.$spacing.'-'.$position.',initial) !important;';
					}
				}
			}

			//typography
			foreach ( array( 'font-size', 'line-height' ) as $font_property ) {
				if ( false !== stripos( $attrs['gutenaKitCSS']['blockCss'] , '---gutenakit--m-'.$font_property ) ) {
					$attrs['gutenaKitCSS']['generatedCss'] .= ' '.$font_property.':var(--gutenakit--m-'.$font_property.',initial) !important;';
				}
			}

			$attrs['gutenaKitCSS']['generatedCss'] .= ' } } ';
		/************************
		 Block Mobile : END
		**************************/

		return $attrs;
		
	}
}


//Block advance controls css
if ( ! function_exists( 'gutenakit_block_additional_controls_css' ) ) {
	function gutenakit_block_additional_controls_css( $editor = false ){
		$media_query_tab = apply_filters('gutena-kit-media-query-tab', '1080px' );
		$media_query_mobile = apply_filters('gutena-kit-media-query-mobile', '767px' );
		$editor_class = $editor ? ' .editor-styles-wrapper ':' ';
		return "
		$editor_class.has-gutenakit-padding-default{
			padding-top:var(--gutenakit--default-padding-top,initial);
			padding-right:var(--gutenakit--default-padding-right,initial);
			padding-bottom:var(--gutenakit--default-padding-bottom,initial);
			padding-left:var(--gutenakit--default-padding-left,initial);
		}

		".( $editor ? " .editor-styles-wrapper .block-editor-block-list__layout.is-root-container .has-gutenakit-margin-default ," : $editor_class ).".has-gutenakit-margin-default{
			margin-top:var(--gutenakit--default-margin-top,initial);
			margin-right:var(--gutenakit--default-margin-right,initial);
			margin-bottom:var(--gutenakit--default-margin-bottom,initial);
			margin-left:var(--gutenakit--default-margin-left,initial);
		}

		$editor_class.has-gutenakit-color-normal {
			color:var(--gutenakit--color-normal-text,initial);
			background:var(--gutenakit--color-normal-background,initial);
		}

		$editor_class.has-gutenakit-color-hover:hover {
			color:var(--gutenakit--color-hover-text,initial);
			background:var(--gutenakit--color-hover-background,initial);
		}

		$editor_class.has-gutenakit-color-normal-link a {
			color:var(--gutenakit--color-normal-link,initial);
		}

		$editor_class.has-gutenakit-color-hover-link a:hover {
			color:var(--gutenakit--color-hover-link,initial);
		}

		$editor_class.has-gutenakit-border-normal {
			border:var(--gutenakit--border-normal,initial);
			border-top:var(--gutenakit--border-normal-top,initial);
			border-right:var(--gutenakit--border-normal-right,initial);
			border-bottom:var(--gutenakit--border-normal-bottom,initial);
			border-left:var(--gutenakit--border-normal-left,initial);
			border-radius:var(--gutenakit--border-normal-radius,initial);
		}

		$editor_class.has-gutenakit-border-hover:hover {
			border:var(--gutenakit--border-hover,initial);
			border-top:var(--gutenakit--border-hover-top,initial);
			border-right:var(--gutenakit--border-hover-right,initial);
			border-bottom:var(--gutenakit--border-hover-bottom,initial);
			border-left:var(--gutenakit--border-hover-left,initial);
			border-radius:var(--gutenakit--border-hover-radius,initial);
		}

		$editor_class.has-gutenakit-boxshadow-normal {
			box-shadow:var(--gutenakit--boxshadow-normal,initial);
		}

		$editor_class.has-gutenakit-boxshadow-hover:hover {
			box-shadow:var(--gutenakit--boxshadow-hover,initial);
		}

		$editor_class.has-gutenakit-overlay-normal, 
		$editor_class.has-gutenakit-overlay-hover, {
			position: relative;
		}

		$editor_class.has-gutenakit-overlay-normal:before{
			content:'';
			background:var(--gutenakit--overlay-normal-background,initial); 
			opacity: var(--gutenakit--overlay-normal-opacity,initial);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		$editor_class.has-gutenakit-overlay-hover:hover:before{
			content:'';
			background:var(--gutenakit--overlay-hover-background,initial); 
			opacity: var(--gutenakit--overlay-hover-opacity,initial);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		$editor_class.has-gutenakit-hide-in-default{
			display:none;
		}

		$editor_class.has-gutenakit-g-typography {
			font-size:var(--gutenakit--gt--font-size,initial);
			line-height:var(--gutenakit--gt--line-height,initial);
			font-family:var(--gutenakit--gt--font-family,initial);
			font-style:var(--gutenakit--gt--font-style,initial);
			font-weight:var(--gutenakit--gt--font-weight,initial);
			letter-spacing:var(--gutenakit--gt--letter-spacing,initial);
			text-transform:var(--gutenakit--gt--text-transform,initial);
			text-decoration:var(--gutenakit--gt--text-decoration,initial);
		}
		
		$editor_class.has-gutenakit-typography-d,
		$editor_class.has-gutenakit-typography-d-t,
		$editor_class.has-gutenakit-typography-d-t-m,
		$editor_class.has-gutenakit-typography-d.has-gutenakit-g-typography,
		$editor_class.has-gutenakit-typography-d-t.has-gutenakit-g-typography,
		$editor_class.has-gutenakit-typography-d-t-m.has-gutenakit-g-typography
		 {
			font-size:var(--gutenakit--font-size,initial);
			line-height:var(--gutenakit--line-height,initial);
			font-family:var(--gutenakit--font-family,initial);
			font-style:var(--gutenakit--font-style,initial);
			font-weight:var(--gutenakit--font-weight,initial);
			letter-spacing:var(--gutenakit--letter-spacing,initial);
			text-transform:var(--gutenakit--text-transform,initial);
			text-decoration:var(--gutenakit--text-decoration,initial);
		}
		
		@media only screen and (min-width: 768px) and (max-width: $media_query_tab) {
			
			$editor_class.has-gutenakit-padding-tablet{
				padding-top:var(--gutenakit--tablet-padding-top,initial);
				padding-right:var(--gutenakit--tablet-padding-right,initial);
				padding-bottom:var(--gutenakit--tablet-padding-bottom,initial);
				padding-left:var(--gutenakit--tablet-padding-left,initial);
			}

			$editor_class.has-gutenakit-margin-tablet{
				margin-top:var(--gutenakit--tablet-margin-top,initial);
				margin-right:var(--gutenakit--tablet-margin-right,initial);
				margin-bottom:var(--gutenakit--tablet-margin-bottom,initial);
				margin-left:var(--gutenakit--tablet-margin-left,initial);
			}

			$editor_class.has-gutenakit-g-typography:not(.has-gutenakit-f-typography) {
				font-size:var(--gutenakit--gt--t-font-size,initial);
			}

			$editor_class.has-gutenakit-g-typography {
				line-height:var(--gutenakit--gt--t-line-height,var(--gutenakit--line-height,initial));
			}

			$editor_class.has-gutenakit-typography-t,
			$editor_class.has-gutenakit-typography-d-t,
			$editor_class.has-gutenakit-typography-t-m,
			$editor_class.has-gutenakit-typography-d-t-m {
				font-size:var(--gutenakit--t-font-size,initial);
			}

			$editor_class.has-gutenakit-hide-in-tablet{
				display:none;
			}
			
		}

		@media only screen and (max-width: $media_query_mobile) {

			$editor_class.has-gutenakit-padding-mobile{
				padding-top:var(--gutenakit--mobile-padding-top,initial);
				padding-right:var(--gutenakit--mobile-padding-right,initial);
				padding-bottom:var(--gutenakit--mobile-padding-bottom,initial);
				padding-left:var(--gutenakit--mobile-padding-left,initial);
			}

			$editor_class.has-gutenakit-margin-mobile{
				margin-top:var(--gutenakit--mobile-margin-top,initial);
				margin-right:var(--gutenakit--mobile-margin-right,initial);
				margin-bottom:var(--gutenakit--mobile-margin-bottom,initial);
				margin-left:var(--gutenakit--mobile-margin-left,initial);
			}

			$editor_class.has-gutenakit-g-typography:not(.has-gutenakit-f-typography) {
				font-size:var(--gutenakit--gt--m-font-size,initial);
			}

			$editor_class.has-gutenakit-g-typography {
				line-height:var(--gutenakit--gt--m-line-height,var(--gutenakit--line-height,initial));
			}

			$editor_class.has-gutenakit-typography-m,
			$editor_class.has-gutenakit-typography-d-m,
			$editor_class.has-gutenakit-typography-t-m,
			$editor_class.has-gutenakit-typography-d-t-m {
				font-size:var(--gutenakit--m-font-size,initial);
			}

			$editor_class.has-gutenakit-hide-in-mobile{
				display:none;
			}
		}

		";
		
	}
}