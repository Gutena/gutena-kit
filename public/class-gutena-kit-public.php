<?php
/**
 * The public-facing functionality of the plugin.
 *
 * @package    Gutena_Kit
 * @subpackage Gutena_Kit/public
 */

 // Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    Gutena_Kit
 * @subpackage Gutena_Kit/public
 */
class Gutena_Kit_Public {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $gutena_kit    The ID of this plugin.
	 */
	private $gutena_kit;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string $gutena_kit       The name of the plugin.
	 * @param      string $version    The version of this plugin.
	 */
	public function __construct( $gutena_kit, $version ) {

		$this->gutena_kit = $gutena_kit;
		$this->version    = $version;

	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {
		wp_enqueue_style( $this->gutena_kit . '-block', GUTENA_KIT_PLUGIN_URL . 'public/css/block-editor' . GUTENA_KIT_MIN_FILE . '.css', array(), $this->version, 'all' );
		wp_enqueue_style( $this->gutena_kit, GUTENA_KIT_PLUGIN_URL . 'public/css/gutena-kit-public' . GUTENA_KIT_MIN_FILE . '.css', array(), $this->version, 'all' );
	}

	public function add_post_css() {
		$gutenakit_post_config = get_post_meta( get_the_ID(), 'gutenakit_post_config', true );
		if ( ! empty( $gutenakit_post_config ) && ! empty( $gutenakit_post_config['gutenakit_css'] ) ) {
			echo '<style id="gutena-kit-post-css">' . esc_html( $gutenakit_post_config['gutenakit_css'] ) . '</style>';
		}
	}

	/**
	 * Registers editor stylesheets
	 */
	public function add_editor_styles() {
		add_editor_style( GUTENA_KIT_PLUGIN_URL . 'public/css/block-editor' . GUTENA_KIT_MIN_FILE . '.css' );

		 // Add support for Block Styles.
		 add_theme_support( 'wp-block-styles' );

		 // Add support for editor styles.
		 add_theme_support( 'editor-styles' );

	}


	/**
	 * Register the JavaScript for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Gutena_Kit_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Gutena_Kit_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */
	}
	// wp_enqueue_script( $this->gutena_kit, plugin_dir_url( __FILE__ ) . 'js/gutena-kit-public.js', array( 'wp-hooks' ), $this->version, false );	}

	/**
	 * Add typography support to Blocks
	 */
	public function add_block_typography_support( $metadata ) {
		if ( in_array( $metadata['name'], array( 'core/button', 'core/paragraph', 'core/heading' ), true ) && isset( $metadata['supports']['typography'] ) ) {
			if ( empty( $metadata['supports']['typography']['__experimentalFontFamily'] ) ) {
				$metadata['supports']['typography']['__experimentalFontFamily'] = true;
			}
			if ( empty( $metadata['supports']['typography']['lineHeight'] ) ) {
				$metadata['supports']['typography']['lineHeight'] = true;
			}
			if ( empty( $metadata['supports']['typography']['__experimentalFontStyle'] ) ) {
				$metadata['supports']['typography']['__experimentalFontStyle'] = true;
			}
			if ( empty( $metadata['supports']['typography']['__experimentalFontWeight'] ) ) {
				$metadata['supports']['typography']['__experimentalFontWeight'] = true;
			}
		}
		return $metadata;
	}

	/**
	 * Add Spacing support to Blocks
	 */
	public function add_block_space_support( $metadata ) {
		if ( isset( $metadata['supports'] ) ) {
			// Margin Padding support
			if ( in_array( $metadata['name'], array( 'core/paragraph' ), true ) ) {
				$metadata['supports']['spacing']['margin']  = array( 'top', 'bottom' );
				$metadata['supports']['spacing']['padding'] = true;
			}

			// BlockGap Support
			if ( in_array( $metadata['name'], array( 'core/columns' ), true ) ) {
				// $metadata['supports']['spacing']['blockGap'] = true;
			}
			// Layout support like align wide
			if ( in_array( $metadata['name'], array( 'core/media-text' ), true ) && isset( $metadata['supports']['align'] ) ) {
				$metadata['supports']['__experimentalLayout'] = true;
			}
		}
		return $metadata;
	}

	public function add_block_attribute( $metadata ) {
		// For custom added controls Css generation
		$metadata['attributes']['gutenaKitID']['type']    = 'string';// Unique ID
		$metadata['attributes']['gutenaKitCSS']['type']   = 'object';// Block CSS
		$metadata['attributes']['gutenaKitClass']['type'] = 'object';// Block classes
		$metadata['attributes']['gutenaKitStyle']['type'] = 'object';// Block Style Controls

		// Media Text Block extra controls
		if ( 'core/media-text' === $metadata['name'] ) {
			// Add gap controls between media and text
			$metadata['attributes']['gutenaKitGridGap'] = array(
				'type'    => 'string',
				'default' => '0px',
			);
		}

		return $metadata;
	}
	// block_type_metadata Filter
	public function edit_block_metadata( $metadata ) {
		if ( ! empty( $metadata['name'] ) ) {
			$metadata = $this->add_block_typography_support( $metadata );
			$metadata = $this->add_block_attribute( $metadata );
			$metadata = $this->add_block_space_support( $metadata );
		}
		return $metadata;
	}

	// Get gutena Kit settings
	private function get_gutena_kit_settings_css( $attrs ){
		static $css_slug_array = array();
		if ( empty( $attrs['gutenaKitID'] ) || empty( $attrs['gutenaKitStyle'] ) ) {
			return $attrs;
		}

		//Check css properties in array format
		if ( empty( $attrs['gutenaKitStyle']['cssJson'] ) ) {
			$attrs['gutenaKitStyle']['cssJson'] = array();
		} else if ( ! is_array( $attrs['gutenaKitStyle']['cssJson'] ) ) {
			return $attrs;
		}
	
		//global typography flag
		$global_typography = false;
	
		// global typography data merge with main cssJson
		if ( ! empty( $attrs['gutenaKitStyle']['globalTypography'] ) && ! in_array( $attrs['gutenaKitStyle']['globalTypography'], $css_slug_array, true ) ) {
			$global_typography = $attrs['gutenaKitStyle']['globalTypography'];
			//global typography
			global $gutena_kit_global_typography;
	
			//check if global typography exists 
			if ( ! isset( $gutena_kit_global_typography ) ) {
				$gutena_kit_global_typography = get_option( 'gutena_kit_global_typography', array() );
			}
	
			if ( ! empty( $gutena_kit_global_typography ) && is_array( $gutena_kit_global_typography ) && ! empty( $gutena_kit_global_typography[ $global_typography ] ) && ! empty( $gutena_kit_global_typography[ $global_typography ]['cssJson'] ) ) { 
				$attrs['gutenaKitStyle']['cssJson'] = array_merge( $attrs['gutenaKitStyle']['cssJson'],$gutena_kit_global_typography[ $global_typography ]['cssJson'] );
				array_push( $css_slug_array, $global_typography );
			}else{
				$global_typography = false;
			}
		}
	
		//print_r($attrs['gutenaKitStyle']['cssJson']);exit;
	
		$media_query_tab = apply_filters('gutena-kit-media-query-tab', '1080px' );
		$media_query_mobile = apply_filters('gutena-kit-media-query-mobile', '767px' );
	
		$attrs['gutenaKitCSS']['generatedCss'] = '';
		//Css 
		$css = '';
		$gk_id = ' .gutenakitid-'.$attrs['gutenaKitID'];
	
		/*******************
		 Default :start
		 *********************/
			//spacing
			foreach ( array( 'margin', 'padding' ) as $spacing ) {
				foreach ( array( 'top', 'right', 'bottom', 'left' ) as $position ) {
					if ( true === array_key_exists( '--gutenakit--default-'.$spacing.'-'.$position, $attrs['gutenaKitStyle']['cssJson'] ) ) {
						$css .= ' '.$spacing.'-'.$position.':'. $attrs['gutenaKitStyle']['cssJson']['--gutenakit--default-'.$spacing.'-'.$position] .' !important;';
					}
				}
			}
	
			// Text color
			if ( true === array_key_exists( '--gutenakit--color-normal-text', $attrs['gutenaKitStyle']['cssJson'] ) ) {
				$css .= ' color:'. $attrs['gutenaKitStyle']['cssJson']['--gutenakit--color-normal-text'] .' !important;';
			}
	
			// Background color
			if ( true === array_key_exists( '--gutenakit--color-normal-background', $attrs['gutenaKitStyle']['cssJson'] ) ) {
				$css .= ' background:'. $attrs['gutenaKitStyle']['cssJson']['--gutenakit--color-normal-background'] .' !important;';
			}
	
			// Border
			if ( true === array_key_exists( '--gutenakit--border-normal', $attrs['gutenaKitStyle']['cssJson'] ) ) {
				$css .= ' border:'. $attrs['gutenaKitStyle']['cssJson']['--gutenakit--border-normal'] .' !important;';
			} else {
				foreach ( array( 'top', 'right', 'bottom', 'left' ) as $position ) {
					if ( true === array_key_exists( '--gutenakit--border-normal-'.$position, $attrs['gutenaKitStyle']['cssJson'] ) ) {
						$css .= ' border-'.$position.':'. $attrs['gutenaKitStyle']['cssJson']['--gutenakit--border-normal-'.$position] .' !important;';
					}
				}
			}

			// Border radius
			if ( true === array_key_exists( '--gutenakit--border-normal-radius', $attrs['gutenaKitStyle']['cssJson'] ) ) {
				$css .= ' border-radius:'. $attrs['gutenaKitStyle']['cssJson']['--gutenakit--border-normal-radius'] .' !important;';
			}
	
			// Box Shadow
			if ( true === array_key_exists( '--gutenakit--boxshadow-normal', $attrs['gutenaKitStyle']['cssJson'] ) ) {
				$css .= 'box-shadow:'. $attrs['gutenaKitStyle']['cssJson']['--gutenakit--boxshadow-normal'] .' !important;';
			}
	
			// Overlay parent
			if ( true === array_key_exists( '--gutenakit--overlay-normal-background', $attrs['gutenaKitStyle']['cssJson'] ) || true === array_key_exists( '--gutenakit--overlay-hover-background', $attrs['gutenaKitStyle']['cssJson'] ) ) {
				$css .= ' position: relative;';
			}
	
			//typography
			if ( empty( $global_typography ) ) {
				foreach ( array( 'font-size', 'line-height', 'font-family', 'font-style', 'font-weight', 'letter-spacing', 'text-transfor', 'text-decoration' ) as $font_property ) {
					if ( true === array_key_exists( '--gutenakit--'.$font_property, $attrs['gutenaKitStyle']['cssJson'] ) ) {
						$css .= ' '.$font_property.':'. $attrs['gutenaKitStyle']['cssJson']['--gutenakit--'.$font_property] .' !important;';
					}
				}
			}
	
			//Hide in desktop
			if ( true === array_key_exists( '--gutenakit--display-default', $attrs['gutenaKitStyle']['cssJson'] ) ) {
				$css .= ' display: '.$attrs['gutenaKitStyle']['cssJson']['--gutenakit--display-default'].';';
			} elseif (true === array_key_exists( '--gutenakit--textcontentgap', $attrs['gutenaKitStyle']['cssJson'] ) ) {
				 //text content gap, usually use for inline image gap
				$css .= ' display:flex; gap:'.$attrs['gutenaKitStyle']['cssJson']['--gutenakit--textcontentgap'].';';
			}

			//translate3d in desktop
			if ( true === array_key_exists( '--gutenakit--translate3d-default', $attrs['gutenaKitStyle']['cssJson'] ) ) {
				$css .= ' transform: '.$attrs['gutenaKitStyle']['cssJson']['--gutenakit--translate3d-default'].';';
			}

			if ( ! empty( $css ) ) {
				$attrs['gutenaKitCSS']['generatedCss'] .=  $gk_id .'{ ' . $css . '}';
			}
		
			//Add global typography
			if ( ! empty( $global_typography ) && ! empty( $gutena_kit_global_typography[ $global_typography ]['cssJson'] ) ) {
				$css = '';
				//typography
				foreach ( array( 'font-size', 'line-height', 'font-family', 'font-style', 'font-weight', 'letter-spacing', 'text-transfor', 'text-decoration' ) as $font_property ) {
					if ( true === array_key_exists( '--gutenakit--gt--'.$font_property, $gutena_kit_global_typography[ $global_typography ]['cssJson'] ) ) {
						$css .= ' '.$font_property.':'. $attrs['gutenaKitStyle']['cssJson']['--gutenakit--gt--'.$font_property] .' !important;';
					}
				}
				
				if ( ! empty( $css ) ) {
					$attrs['gutenaKitCSS']['generatedCss'] .= ' .has-gutenakit-gt-'.$global_typography.'{' . $css . '}';
				}
			}
		/*******************
		 Default :end
		 *********************/
	
		/************************
		 Block hover : START
		**************************/
		$css = '';
		// Text color
		if ( true === array_key_exists( '--gutenakit--color-hover-text', $attrs['gutenaKitStyle']['cssJson'] ) ) {
			$css .= ' color:'. $attrs['gutenaKitStyle']['cssJson']['--gutenakit--color-hover-text'] .' !important;';
		}
	
		// Background color
		if ( true === array_key_exists( '--gutenakit--color-hover-background', $attrs['gutenaKitStyle']['cssJson'] ) ) {
			$css .= ' background:'. $attrs['gutenaKitStyle']['cssJson']['--gutenakit--color-hover-background'] .' !important;';
		}
	
		// Border
		if ( true === array_key_exists( '--gutenakit--border-hover', $attrs['gutenaKitStyle']['cssJson'] ) ) {
			$css .= ' border:'. $attrs['gutenaKitStyle']['cssJson']['--gutenakit--border-hover'] .' !important;';
		} else {
			foreach ( array( 'top', 'right', 'bottom', 'left' ) as $position ) {
				if ( true === array_key_exists( '--gutenakit--border-hover-'.$position, $attrs['gutenaKitStyle']['cssJson'] ) ) {
					$css .= ' border-'.$position.':'. $attrs['gutenaKitStyle']['cssJson']['--gutenakit--border-hover-'.$position] .' !important;';
				}
			}
		}

		// Border radius
		if ( true === array_key_exists( '--gutenakit--border-hover-radius', $attrs['gutenaKitStyle']['cssJson'] ) ) {
			$css .= ' border-radius:'. $attrs['gutenaKitStyle']['cssJson']['--gutenakit--border-hover-radius'] .' !important;';
		}
	
		// Box Shadow
		if ( true === array_key_exists( '--gutenakit--boxshadow-hover', $attrs['gutenaKitStyle']['cssJson'] ) ) {
			$css .= 'box-shadow:'. $attrs['gutenaKitStyle']['cssJson']['--gutenakit--boxshadow-hover'] .' !important;';
		}
	
		if ( ! empty( $css ) ) {
			$attrs['gutenaKitCSS']['generatedCss'] .=  $gk_id .':hover {' . $css . '}';
		}
		/************************
		 Block hover : END
		**************************/
	
		// Link color
		if ( true === array_key_exists( '--gutenakit--linkdecorationline', $attrs['gutenaKitStyle']['cssJson'] ) ) {
			$attrs['gutenaKitCSS']['generatedCss'] .=  $gk_id .' a {
				text-decoration-line:'. $attrs['gutenaKitStyle']['cssJson']['--gutenakit--linkdecorationline'] .' !important;
			}';
		}

		// Link color
		if ( true === array_key_exists( '--gutenakit--color-normal-link', $attrs['gutenaKitStyle']['cssJson'] ) ) {
			$attrs['gutenaKitCSS']['generatedCss'] .=  $gk_id .' a {
				color:'. $attrs['gutenaKitStyle']['cssJson']['--gutenakit--color-normal-link'] .' !important;
			}';
		}
	
		// Link hover color
		if ( true === array_key_exists( '--gutenakit--color-hover-link', $attrs['gutenaKitStyle']['cssJson'] ) ) {
			$attrs['gutenaKitCSS']['generatedCss'] .=  $gk_id .' a:hover {
				color:'. $attrs['gutenaKitStyle']['cssJson']['--gutenakit--color-hover-link'] .' !important;
			}';
		}
	
		// overlay color
		if ( true === array_key_exists( '--gutenakit--overlay-normal-background', $attrs['gutenaKitStyle']['cssJson'] ) && true === array_key_exists( '--gutenakit--overlay-normal-opacity', $attrs['gutenaKitStyle']['cssJson'] ) ) {
			$attrs['gutenaKitCSS']['generatedCss'] .=  $gk_id .':before {
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
			$attrs['gutenaKitCSS']['generatedCss'] .=  $gk_id .':hover:before {
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
		
			$css = '';
			//Hide in Tablet
			if ( true === array_key_exists( '--gutenakit--display-tablet', $attrs['gutenaKitStyle']['cssJson'] ) ) {
				$css .= ' display: '.$attrs['gutenaKitStyle']['cssJson']['--gutenakit--display-tablet'].';';
			} else {
	
				//spacing
				foreach ( array( 'margin', 'padding' ) as $spacing ) {
					foreach ( array( 'top', 'right', 'bottom', 'left' ) as $position ) {
						if ( true === array_key_exists( '--gutenakit--tablet-'.$spacing.'-'.$position, $attrs['gutenaKitStyle']['cssJson'] ) ) {
							$css .= ' '.$spacing.'-'.$position.':'. $attrs['gutenaKitStyle']['cssJson']['--gutenakit--tablet-'.$spacing.'-'.$position] .' !important;';
						}
					}
				}
	
				if ( empty( $global_typography ) ) {
					//typography
					foreach ( array( 'font-size', 'line-height' ) as $font_property ) {
						if ( true === array_key_exists( '--gutenakit--t-'.$font_property, $attrs['gutenaKitStyle']['cssJson'] ) ) {
							$css .= ' '.$font_property.':'. $attrs['gutenaKitStyle']['cssJson']['--gutenakit--t-'.$font_property] .' !important;';
						}
					}
				}

				//translate3d in tablet
				if ( true === array_key_exists( '--gutenakit--translate3d-tablet', $attrs['gutenaKitStyle']['cssJson'] ) ) {
					$css .= ' transform: '.$attrs['gutenaKitStyle']['cssJson']['--gutenakit--translate3d-tablet'].';';
				}
	
			}
	
			if ( ! empty( $css ) ) {
				$css =  $gk_id .' {' . $css . '} ';
			}
			//$attrs['gutenaKitCSS']['generatedCss'] .= '@media only screen and (min-width: 768px) and (max-width: '.$media_query_tab.') { .' . $gk_id .' {';
	
			// global typography for mobile
			if ( ! empty( $global_typography ) && ! empty( $gutena_kit_global_typography[ $global_typography ]['cssJson'] ) ) {
				$css .= '.has-gutenakit-gt-'.$global_typography.'{';
				//typography
				foreach ( array( 'font-size', 'line-height' ) as $font_property ) {
					if ( true === array_key_exists( '--gutenakit--gt--t-'.$font_property, $gutena_kit_global_typography[ $global_typography ]['cssJson'] ) ) {
						$css .= ' '.$font_property.':'. $attrs['gutenaKitStyle']['cssJson']['--gutenakit--gt--t-'.$font_property] .' !important;';
					}
				}
				$css .='}'; 
			}

			if ( ! empty( $css ) ) {
				$attrs['gutenaKitCSS']['generatedCss'] .= '@media only screen and (min-width: 768px) and (max-width: '.$media_query_tab.') { ' . $css . '} ';
			}
		/************************
		 Block Tablet : END
		**************************/
	
		/************************
		 Block Mobile : START
		**************************/
			$css = '';
			//Hide in Mobile
			if ( true === array_key_exists( '--gutenakit--display-mobile', $attrs['gutenaKitStyle']['cssJson'] ) ) { 
				$css .= ' display: '.$attrs['gutenaKitStyle']['cssJson']['--gutenakit--display-mobile'].';';
			} else {
				//spacing
				foreach ( array( 'margin', 'padding' ) as $spacing ) {
					foreach ( array( 'top', 'right', 'bottom', 'left' ) as $position ) {
						if ( true === array_key_exists( '--gutenakit--mobile-'.$spacing.'-'.$position, $attrs['gutenaKitStyle']['cssJson'] ) ) {
							$css .= ' '.$spacing.'-'.$position.':'. $attrs['gutenaKitStyle']['cssJson']['--gutenakit--mobile-'.$spacing.'-'.$position] .' !important;';
						}
					}
				}
	
				if ( empty( $global_typography ) ) {
					//typography
					foreach ( array( 'font-size', 'line-height' ) as $font_property ) {
						if ( true === array_key_exists( '--gutenakit--m-'.$font_property, $attrs['gutenaKitStyle']['cssJson'] ) ) {
							$css .= ' '.$font_property.':'. $attrs['gutenaKitStyle']['cssJson']['--gutenakit--m-'.$font_property] .' !important;';
						}
					}
				}

				//translate3d in mobile
				if ( true === array_key_exists( '--gutenakit--translate3d-mobile', $attrs['gutenaKitStyle']['cssJson'] ) ) {
					$css .= ' transform: '.$attrs['gutenaKitStyle']['cssJson']['--gutenakit--translate3d-mobile'].';';
				}
			}

			if ( ! empty( $css ) ) {
				$css =  $gk_id .' {' . $css . '} ';
			}

			// global typography for mobile
			if ( ! empty( $global_typography ) && ! empty( $gutena_kit_global_typography[ $global_typography ]['cssJson'] ) ) {
				$css .= '.has-gutenakit-gt-'.$global_typography.'{';
				//typography
				foreach ( array( 'font-size', 'line-height' ) as $font_property ) {
					if ( true === array_key_exists( '--gutenakit--gt--m-'.$font_property, $gutena_kit_global_typography[ $global_typography ]['cssJson'] ) ) {
						$css .= ' '.$font_property.':'. $attrs['gutenaKitStyle']['cssJson']['--gutenakit--gt--m-'.$font_property] .' !important;';
					}
				}
				$css .='}'; 
			}
	
			if ( ! empty( $css ) ) {
				$attrs['gutenaKitCSS']['generatedCss'] .= '@media only screen and (max-width: '.$media_query_mobile .') { '  . $css . '} ';
			}
		/************************
		 Block Mobile : END
		**************************/
		//echo "<pre>";print_r($attrs['gutenaKitCSS']);exit;
		return $attrs;
		
	}

	// Print style css and global typography once only 
	private function enqueue_block_control_css( $attrs ) {
		$attrs = $this->get_gutena_kit_settings_css( $attrs );

		if ( ! empty( $attrs['gutenaKitID'] ) &&  ! empty( $attrs['gutenaKitCSS'] )  ) {
			//echo "<pre>";print_r($attrs['gutenaKitCSS']);exit;
			$this->enqueue_block_gutenakit_styles( $attrs['gutenaKitCSS'] , 11 );
		}
	}

	/**
	 * Render Block customization call on render_block filter
	 */
	public function render_block_customization( $block_content, $block ) {
		
		if ( ! empty( $block['attrs']['gutenaKitID'] ) ) {

			// if ( 'core/group' === $block['blockName'] && 'jjjjjjjjjjjjjjj' === $block['attrs']['className'] ) {
			// 	//echo "<pre>";print_r($block['attrs']);exit;
			// }
			
			//get block class
			$block_classes = ( ! empty( $block['attrs']['gutenaKitClass'] ) && ! empty( $block['attrs']['gutenaKitClass']['blockClasses'] ) ) ?  $block['attrs']['gutenaKitClass']['blockClasses'] : '';

			$block_classes = gutenakit_block_id_classname_prefix() . $block['attrs']['gutenaKitID'] . ' '.$block_classes;

			//check if block content has class and its position must inside first html element
			$class_pos = strpos( $block_content, 'class="' );
			if ( false === $class_pos || $class_pos > strpos( $block_content, '>' ) ) {
				//if class not exists add class attribute
				$block_content = preg_replace(
					'/' . preg_quote( '>', '/' ) . '/',
					' class="' . esc_attr( $block_classes ) . '" > ',
					$block_content,
					1
				);
			} else {
				//add classes inside class attribute
				$block_content = preg_replace(
					'/' . preg_quote( 'class="', '/' ) . '/',
					'class="' . esc_attr( $block_classes ) . ' ',
					$block_content,
					1
				);
			}
			
			// Enqueue block css
			$this->enqueue_block_control_css( $block['attrs'] );
		}
		
		return $block_content;
	}

	// enqueue block styles saved by gutena kit
	private function enqueue_block_gutenakit_styles( $style, $priority = 10 ) {
		if ( empty( $style ) || ! is_array( $style ) || ! function_exists( 'wp_strip_all_tags' ) ) {
			return;
		}

		// Join all css
		$style = implode( ' ', array_values( $style ) );

		// Filter Css
		$style = apply_filters( 'gutena_kit_block_style', $style );

		$action_hook_name = 'wp_footer';
		if ( function_exists( 'wp_is_block_theme' ) && wp_is_block_theme() ) {
			$action_hook_name = 'wp_head';
		}
		add_action(
			$action_hook_name,
			static function () use ( $style ) {
				echo '<style>' . wp_strip_all_tags( $style ) . "</style>\n";
			},
			$priority
		);
	}

	// Register Gutena category if not exists
	public function register_block_category( $block_categories, $editor_context ) {
		$fields = wp_list_pluck( $block_categories, 'slug' );

		if ( ! empty( $editor_context->post ) && ! in_array( 'gutena', $fields, true ) ) {
			array_push(
				$block_categories,
				array(
					'slug'  => 'gutena',
					'title' => __( 'Gutena', 'gutena-forms' ),
				)
			);
		}

		return $block_categories;
	}

}
