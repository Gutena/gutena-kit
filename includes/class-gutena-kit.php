<?php

/**
 * The file that defines the core plugin class
 *
 * A class definition that includes attributes and functions used across both the
 * public-facing side of the site and the admin area.
 *
 * @link       https://Gutena.io
 * @since      1.0.0
 *
 * @package    Gutena_Kit
 * @subpackage Gutena_Kit/includes
 */

/**
 * The core plugin class.
 *
 * This is used to define internationalization, admin-specific hooks, and
 * public-facing site hooks.
 *
 * Also maintains the unique identifier of this plugin as well as the current
 * version of the plugin.
 *
 * @since      1.0.0
 * @package    Gutena_Kit
 * @subpackage Gutena_Kit/includes
 * 
 */

if ( class_exists( 'Gutena_Kit' ) ) {
	return;
}

class Gutena_Kit {

	/**
	 * The loader that's responsible for maintaining and registering all hooks that power
	 * the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      Gutena_Kit_Loader    $loader    Maintains and registers all hooks for the plugin.
	 */
	protected $loader;

	/**
	 * The unique identifier of this plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $gutena_kit    The string used to uniquely identify this plugin.
	 */
	protected $gutena_kit;

	/**
	 * The current version of the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $version    The current version of the plugin.
	 */
	protected $version;

	/**
	 * Define the core functionality of the plugin.
	 *
	 * Set the plugin name and the plugin version that can be used throughout the plugin.
	 * Load the dependencies, define the locale, and set the hooks for the admin area and
	 * the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function __construct() {
		if ( defined( 'GUTENA_KIT_VERSION' ) ) {
			$this->version = GUTENA_KIT_VERSION;
		} else {
			$this->version = '1.0.0';
		}
		$this->gutena_kit = 'gutena-kit';

		$this->load_dependencies();
		$this->set_locale();
		$this->define_admin_hooks();
		$this->define_public_hooks();

	}

	/**
	 * Load the required dependencies for this plugin.
	 *
	 * Include the following files that make up the plugin:
	 *
	 * - Gutena_Kit_Loader. Orchestrates the hooks of the plugin.
	 * - Gutena_Kit_i18n. Defines internationalization functionality.
	 * - Gutena_Kit_Admin. Defines all hooks for the admin area.
	 * - Gutena_Kit_Public. Defines all hooks for the public side of the site.
	 *
	 * Create an instance of the loader which will be used to register the hooks
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function load_dependencies() {

		/**
		 * The helper responsible for orchestrating helper functions of the
		 * core plugin.
		 */
		require_once GUTENA_KIT_DIR_PATH . 'includes/helpers/helpers.php';

		/**
		 * The class responsible for orchestrating the actions and filters of the
		 * core plugin.
		 */
		require_once GUTENA_KIT_DIR_PATH . 'includes/class-gutena-kit-loader.php';

		/**
		 * The class responsible for defining internationalization functionality
		 * of the plugin.
		 */
		require_once GUTENA_KIT_DIR_PATH . 'includes/class-gutena-kit-i18n.php';

		/**
		 * The class responsible for defining all actions that occur in the admin area.
		 */
		require_once GUTENA_KIT_DIR_PATH . 'admin/class-gutena-kit-admin.php';

		/**
		 * The class responsible for defining all actions that occur in the public-facing
		 * side of the site.
		 */
		require_once GUTENA_KIT_DIR_PATH . 'public/class-gutena-kit-public.php';

		$this->loader = new Gutena_Kit_Loader();

	}

	/**
	 * Define the locale for this plugin for internationalization.
	 *
	 * Uses the Gutena_Kit_i18n class in order to set the domain and to register the hook
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function set_locale() {

		$plugin_i18n = new Gutena_Kit_i18n();

		$this->loader->add_action( 'plugins_loaded', $plugin_i18n, 'load_plugin_textdomain' );

	}

	/**
	 * Register all of the hooks related to the admin area functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_admin_hooks() {
		if ( ! is_gutenakit_admin() ) {
			return;
		}
		$plugin_admin = new Gutena_Kit_Admin( $this->get_gutena_kit(), $this->get_version() );
		$this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_styles' );
		$this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_scripts' );
		$this->loader->add_action( 'admin_menu', $plugin_admin , 'add_admin_menu' );
		$this->loader->add_action( 'admin_init',$plugin_admin,'add_blocks_and_settings' );
		$this->loader->add_action( 'save_post', $plugin_admin,'save_post_settings_and_styles', 10,3 );
	}

	/**
	 * Register all of the hooks related to the public-facing functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_public_hooks() {

		$plugin_public = new Gutena_Kit_Public( $this->get_gutena_kit(), $this->get_version() );
		
		$this->loader->add_action( 'wp_enqueue_scripts',$plugin_public,'enqueue_styles' );
		$this->loader->add_action( 'wp_enqueue_scripts',$plugin_public,'enqueue_scripts' );
		$this->loader->add_action( 'after_setup_theme',$plugin_public,'add_editor_styles' );
		
		$this->loader->add_action( 'wp_head', $plugin_public,'add_post_css' );
		//Filters the metadata provided for registering a block type
		$this->loader->add_filter( 'block_type_metadata', $plugin_public, 'block_settings_setup', 10, 2 );
		$this->loader->add_filter( 'render_block', $plugin_public, 'render_block_customization', 10, 2 );
		

		//remove wp emoji script
		if ( gutenakit_is_remove_wp_emoji() ) {
			remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
			remove_action( 'wp_print_styles', 'print_emoji_styles' );
		}
	}

	/**
	 * Run the loader to execute all of the hooks with WordPress.
	 *
	 * @since    1.0.0
	 */
	public function run() {
		$this->loader->run();
	}

	/**
	 * The name of the plugin used to uniquely identify it within the context of
	 * WordPress and to define internationalization functionality.
	 *
	 * @since     1.0.0
	 * @return    string    The name of the plugin.
	 */
	public function get_gutena_kit() {
		return $this->gutena_kit;
	}

	/**
	 * The reference to the class that orchestrates the hooks with the plugin.
	 *
	 * @since     1.0.0
	 * @return    Gutena_Kit_Loader    Orchestrates the hooks of the plugin.
	 */
	public function get_loader() {
		return $this->loader;
	}

	/**
	 * Retrieve the version number of the plugin.
	 *
	 * @since     1.0.0
	 * @return    string    The version number of the plugin.
	 */
	public function get_version() {
		return $this->version;
	}

}
