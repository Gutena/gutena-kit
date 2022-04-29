<?php

/**
 * The public-facing functionality of the plugin.
 *
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
 * 
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
	 * @param      string    $gutena_kit       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $gutena_kit, $version ) {

		$this->gutena_kit = $gutena_kit;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {
		wp_enqueue_style( $this->gutena_kit.'-block', GUTENA_KIT_PLUGIN_URL . 'public/css/block-editor'.GUTENA_KIT_MIN_FILE.'.css', array(), $this->version, 'all' );
		wp_enqueue_style( $this->gutena_kit, GUTENA_KIT_PLUGIN_URL . 'public/css/gutena-kit-public'.GUTENA_KIT_MIN_FILE.'.css', array(), $this->version, 'all' );
	}

	public function add_post_css(){
		$gutenakit_post_config = get_post_meta( get_the_ID(), 'gutenakit_post_config', true );
		if ( ! empty( $gutenakit_post_config ) && ! empty( $gutenakit_post_config['gutenakit_css'] ) ) {
			echo '<style id="gutena-kit-post-css">'.esc_html( $gutenakit_post_config['gutenakit_css'] ).'</style>';
		}
	}

	/**
	* Registers editor stylesheets
	*/
	public function add_editor_styles() {
		add_editor_style( GUTENA_KIT_PLUGIN_URL . 'public/css/block-editor'.GUTENA_KIT_MIN_FILE.'.css' );

		 // Add support for Block Styles.
		 add_theme_support( 'wp-block-styles' );

		 // Add support for editor styles.
		 add_theme_support( 'editor-styles' );

	}

	/**
	* Registers Block styles
	*/
	public function register_block_styles_gutenakit(){
		if ( function_exists( 'register_block_style') ) {
		}
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

		//wp_enqueue_script( $this->gutena_kit, plugin_dir_url( __FILE__ ) . 'js/gutena-kit-public.js', array( 'wp-hooks' ), $this->version, false );

	}

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
			//Margin Padding support
			if ( in_array( $metadata['name'], array( 'core/paragraph' ), true ) ) {
				$metadata['supports']['spacing']['margin'] = [ "top", "bottom" ];
				$metadata['supports']['spacing']['padding'] = true;
			}
			//BlockGap Support
			if ( in_array( $metadata['name'], array( 'core/columns' ), true ) ) {
				//$metadata['supports']['spacing']['blockGap'] = true;
			}
			//Layout support like align wide 
			if ( in_array( $metadata['name'], array( 'core/media-text' ), true ) && isset( $metadata['supports']['align'] ) ) {
				$metadata['supports']['__experimentalLayout'] = true;
			}       
}
		return $metadata;
	}

	public function add_block_attribute( $metadata ) {
		if ( in_array( $metadata['name'], array( 'core/media-text' ), true ) ) {
			$metadata['attributes']['gutenaKitID']['type'] = 'string';//Unique ID
			$metadata['attributes']['gutenaKitCSS']['type'] = 'array';//Block CSS
			$metadata['attributes']['gutenaKitGridGap'] = array(
				'type'    => 'string', 
				'default' => '0px',
			);
		}
		return $metadata;
	}

	public function block_settings_setup( $metadata ) {
		if ( ! empty( $metadata['name'] ) ) {
			$metadata = $this->add_block_typography_support( $metadata );
			$metadata = $this->add_block_space_support( $metadata );
			$metadata = $this->add_block_attribute( $metadata );
		}
    	return $metadata;
	}

	public function add_class_to_block( $block_content, $classname ) {
		$block_content = explode( 'class="', $block_content, 2 );
		$classname = ( 2 === count( $block_content ) ) ? 'class="'.sanitize_html_class( $classname ).'  ' : 'class="';
		return implode( $classname, $block_content );
	}

	/**
	 * Render Block customization
	 */
	public function render_block_customization( $block_content, $block ) {
		if ( ! empty( $block['attrs']['gutenaKitID'] ) ) {
			$block_content = $this->add_class_to_block( $block_content, gutenakit_block_id_classname_prefix().$block['attrs']['gutenaKitID'] );
		}
		return $block_content;
	}

}
