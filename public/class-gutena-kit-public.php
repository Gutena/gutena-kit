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

	// Print style css and global typography once only 
	private function enqueue_block_control_css( $slug = 'gk-total-var-css' ) {
		//Css variable to store rendered block css 
		static $css = array();

		if ( ! in_array( $slug, $css, true ) ) {

			//Enqueue required global typography 
			$this->enqueue_block_gutenakit_styles( array( 
				( 'gk-total-var-css' === $slug ) ? gutenakit_block_additional_controls_css() : get_gutena_kit_global_typography_css( $slug ) ), 11 );
		
			array_push( $css, $slug );
		}
	}

	/**
	 * Render Block customization call on render_block filter
	 */
	public function render_block_customization( $block_content, $block ) {
		if ( ! empty( $block['attrs']['gutenaKitID'] ) && ! empty( $block['attrs']['gutenaKitCSS'] ) ) {

			
			//get block class
			$block_classes = ( ! empty( $block['attrs']['gutenaKitClass'] ) && ! empty( $block['attrs']['gutenaKitClass']['blockClasses'] ) ) ?  $block['attrs']['gutenaKitClass']['blockClasses'] : '';

			// Core block advance controls css
			if ( ! empty( $block_classes ) && ! empty( $block['attrs']['gutenaKitStyle'] ) ) {

				// Enqueue core block advance controls css
				$this->enqueue_block_control_css();

				//Global typography
				if (  ! empty( $block['attrs']['gutenaKitStyle']['globalTypography'] ) ) {
					$this->enqueue_block_control_css( $block['attrs']['gutenaKitStyle']['globalTypography'] );
					$block_classes = $block_classes .' '. get_gutena_kit_global_typography_class( $block['attrs']['gutenaKitStyle']['globalTypography'] );
				}
			}

			$block_classes = gutenakit_block_id_classname_prefix() . $block['attrs']['gutenaKitID'] . ' '.$block_classes;

			//check if block content has class
			if ( false === strpos( $block_content, 'class="' ) ) {
				//if class not exists add class attribute
				$block_content = preg_replace(
					'/' . preg_quote( '>', '/' ) . '/',
					' class="' . esc_attr( $block_classes ) . '" > ',
					$block_content,
					1
				);
			} else {
				//add class attribute
				$block_content = preg_replace(
					'/' . preg_quote( 'class="', '/' ) . '/',
					'class="' . esc_attr( $block_classes ) . ' ',
					$block_content,
					1
				);
			}
			

			// Enqueue block css
			$this->enqueue_block_gutenakit_styles( $block['attrs']['gutenaKitCSS'], 11 );

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
