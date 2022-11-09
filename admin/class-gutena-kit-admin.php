<?php
/**
 * The admin-specific functionality of the plugin.
 * @package    Gutena_Kit
 * @subpackage Gutena_Kit/admin
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Gutena_Kit_Admin {

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
	 * @param      string    $gutena_kit       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $gutena_kit, $version ) {

		$this->gutena_kit = $gutena_kit;
		$this->version        = ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) ? time() : $version;
		$this->load_dependencies();
	}

	/**
	 * Load the required dependencies for admin area.
	 */
	private function load_dependencies() {
		/**
		 * Admin helper functions
		 */
		require_once GUTENA_KIT_DIR_PATH . 'includes/helpers/admin-helpers.php';
		//Merlin WP for demo import
		require_once GUTENA_KIT_DIR_PATH . 'includes/demo-import/merlin/class-merlin.php';
		//Extend and modify Merlin WP
		require_once GUTENA_KIT_DIR_PATH . 'includes/demo-import/class-gutenakit-demosetup.php';
		
		if ( ! class_exists( 'Merlin' ) || ! class_exists( 'GutenakitDemoSetup' ) ) {
			return;
		}
		//add admin gutena kit stylesheet on merlin demo import page
		if ( isset( $_GET['page'] ) && 'merlin' === sanitize_text_field( wp_unslash( $_GET['page'] ) ) ) {
			add_action( 'admin_print_styles', array( $this, 'enqueue_styles' ) );
		}
		/**
		 * Set directory locations, text strings, and settings.
		 */
		global $gutenakit_merlin_class;
		$gutenakit_merlin_class = new GutenakitDemoSetup(
		
			$config = array(
				'base_path'                 => GUTENA_KIT_DIR_PATH . 'includes/demo-import',
				'base_url'                  => GUTENA_KIT_PLUGIN_URL.'includes/demo-import',
				'directory'                 => 'merlin', //where Merlin WP is placed.
				'merlin_url'                => 'merlin', // The wp-admin page slug where Merlin WP loads.
				'parent_slug'               => 'options.php', // The wp-admin parent page slug for the admin menu item.
				'capability'                => 'manage_options', // The capability required for this menu to be displayed to the user.
				'child_action_btn_url'      => '', // URL for the 'child-action-link'.
				'dev_mode'                  => true, // Enable development mode for testing.
				'license_step'              => false, // EDD license activation step.
				'license_required'          => false, // Require the license activation step.
				'license_help_url'          => '', // URL for the 'license-tooltip'.
				'edd_remote_api_url'        => '', // EDD_Theme_Updater_Admin remote_api_url.
				'edd_item_name'             => '', // EDD_Theme_Updater_Admin item_name.
				'edd_theme_slug'            => '', // EDD_Theme_Updater_Admin item_slug.
				'ready_big_button_url'      => function_exists( 'get_bloginfo' ) ? get_bloginfo( 'url' ) : '', // Link for the big button on the ready step.
				//Added key values by gutenakit
				'child_theme_step_enabled'  => false,
				'is_gutena_theme_activated' => is_gutena_theme_activated(),
			),
			$strings = array(
				'admin-menu'               => esc_html__( 'Demo Setup', 'gutena-kit' ),
		
				/* translators: 1: Title Tag 2: Theme Name 3: Closing Title Tag */
				'title%s%s%s%s'            => esc_html__( '%1$s%2$s Demo &lsaquo; Demo Setup: %3$s%4$s', 'gutena-kit' ),
				'return-to-dashboard'      => esc_html__( 'Return to the dashboard', 'gutena-kit' ),
				'ignore'                   => esc_html__( 'Disable this wizard', 'gutena-kit' ),
		
				'btn-skip'                 => esc_html__( 'Skip', 'gutena-kit' ),
				'btn-next'                 => esc_html__( 'Next', 'gutena-kit' ),
				'btn-start'                => esc_html__( 'Start', 'gutena-kit' ),
				'btn-no'                   => esc_html__( 'Cancel', 'gutena-kit' ),
				'btn-plugins-install'      => esc_html__( 'Install', 'gutena-kit' ),
				'btn-child-install'        => esc_html__( 'Install', 'gutena-kit' ),
				'btn-content-install'      => esc_html__( 'Install', 'gutena-kit' ),
				'btn-import'               => esc_html__( 'Import', 'gutena-kit' ),
				'btn-license-activate'     => esc_html__( 'Activate', 'gutena-kit' ),
				'btn-license-skip'         => esc_html__( 'Later', 'gutena-kit' ),
		
				/* translators: Theme Name */
				'license-header%s'         => esc_html__( 'Activate %s', 'gutena-kit' ),
				/* translators: Theme Name */
				'license-header-success%s' => esc_html__( '%s is Activated', 'gutena-kit' ),
				/* translators: Theme Name */
				'license%s'                => esc_html__( 'Enter your license key to enable remote updates and theme support.', 'gutena-kit' ),
				'license-label'            => esc_html__( 'License key', 'gutena-kit' ),
				'license-success%s'        => esc_html__( 'The theme is already registered, so you can go to the next step!', 'gutena-kit' ),
				'license-json-success%s'   => esc_html__( 'Your theme is activated! Remote updates and theme support are enabled.', 'gutena-kit' ),
				'license-tooltip'          => esc_html__( 'Need help?', 'gutena-kit' ),
		
				/* translators: Theme Name */
				'welcome-header%s'         => esc_html__( 'Welcome to %s', 'gutena-kit' ),
				'welcome-header-success%s' => esc_html__( 'Welcome to Gutena Kit', 'gutena-kit' ),
				'welcome%s'                => esc_html__( 'This wizard will set up your theme, install plugins, and import content. It is optional & should take only a few minutes.', 'gutena-kit' ),
				'welcome-success%s'        => esc_html__( 'You may have already run this demo setup wizard. If you would like to proceed anyway, click on the "Start" button below.', 'gutena-kit' ),
		
				'child-header'             => esc_html__( 'Install Child Theme', 'gutena-kit' ),
				'child-header-success'     => esc_html__( 'You\'re good to go!', 'gutena-kit' ),
				'child'                    => esc_html__( 'Let\'s build & activate a child theme so you may easily make theme changes.', 'gutena-kit' ),
				'child-success%s'          => esc_html__( 'Your child theme has already been installed and is now activated, if it wasn\'t already.', 'gutena-kit' ),
				'child-action-link'        => esc_html__( 'Learn about child themes', 'gutena-kit' ),
				'child-json-success%s'     => esc_html__( 'Awesome. Your child theme has already been installed and is now activated.', 'gutena-kit' ),
				'child-json-already%s'     => esc_html__( 'Awesome. Your child theme has been created and is now activated.', 'gutena-kit' ),
		
				'plugins-header'           => esc_html__( 'Install Plugins', 'gutena-kit' ),
				'plugins-header-success'   => esc_html__( 'You\'re up to speed!', 'gutena-kit' ),
				'plugins'                  => esc_html__( 'Let\'s install some essential WordPress plugins to get your site up to speed.', 'gutena-kit' ),
				'plugins-success%s'        => esc_html__( 'The required WordPress plugins are all installed and up to date. Press "Next" to continue the setup wizard.', 'gutena-kit' ),
				'plugins-action-link'      => esc_html__( 'Advanced', 'gutena-kit' ),
		
				'import-header'            => esc_html__( 'Import Content', 'gutena-kit' ),
				'import'                   => esc_html__( 'Let\'s import content to your website, to help you get familiar with the theme.', 'gutena-kit' ),
				'import-action-link'       => esc_html__( 'Advanced', 'gutena-kit' ),
		
				'ready-header'             => esc_html__( 'All done. Have fun!', 'gutena-kit' ),
		
				/* translators: Theme Author */
				'ready%s'                  => esc_html__( 'Your demo has been all set up. Enjoy your new demo by %s.', 'gutena-kit' ),
				'ready-action-link'        => esc_html__( 'Extras', 'gutena-kit' ),
				'ready-big-button'         => esc_html__( 'View your website', 'gutena-kit' ),
				'ready-link-1'             => sprintf( '<a href="%1$s" target="_blank">%2$s</a>', 'https://wordpress.org/support/', esc_html__( 'Explore WordPress', 'gutena-kit' ) ),
				'ready-link-2'             => sprintf( '<a href="%1$s" target="_blank">%2$s</a>', 'https://wordpress.org/support/theme/gutena/', esc_html__( 'Get Theme Support', 'gutena-kit' ) ),
				'ready-link-3'             => sprintf( '<a href="%1$s">%2$s</a>', admin_url( 'customize.php' ), esc_html__( 'Start Customizing', 'gutena-kit' ) ),
			)
		);
	}


	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {
		wp_enqueue_style( $this->gutena_kit, GUTENA_KIT_PLUGIN_URL . 'admin/css/gutena-kit-admin.css', array(), $this->version, 'all' );
	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts( $hook_suffix ) {
		wp_enqueue_script( $this->gutena_kit, GUTENA_KIT_PLUGIN_URL . 'admin/js/gutena-kit-admin.js', array(), $this->version, false );
	}

	public function add_admin_menu(){
		$page_hook_suffix =	add_submenu_page( 'themes.php', 'Gutena Kit', 'Gutena Kit', 'manage_options', 'gutenakit_demo_import', array( $this, 'demo_import_page' ));

		if ( ! empty( $page_hook_suffix ) ){
			add_action( 'admin_print_styles-' . $page_hook_suffix, array( $this, 'demo_import_dashboard_styles' ) );
			add_action( 'admin_print_scripts-' . $page_hook_suffix, array( $this, 'demo_import_dashboard_scripts' ) );
	   }
	}

	public function admin_dashboard_page(){
		require_once GUTENA_KIT_DIR_PATH. 'admin/partials/admin-dashboard.php';
	}

	/**
	 * List Demos and Import
	 */
	public function demo_import_page(){
		echo '<div id="gutenakit-demo-import-page"></div>';
	}

	/**
	 * Demo import styles
	 */
	public function demo_import_dashboard_styles() {
		wp_enqueue_style( 'gutena-theme-dashboard-style', GUTENA_KIT_PLUGIN_URL . 'includes/demo-import/admin-dashboard/assets/dashboard.css', array(), $this->version, 'all' );
	}

	/**
	 * Demo import script
	 */
	public function demo_import_dashboard_scripts() {
		if ( function_exists( 'wp_json_file_decode' ) ) {
			wp_enqueue_script( 'gutena-kit-demo-import-dashboard', GUTENA_KIT_PLUGIN_URL . 'includes/demo-import/admin-dashboard/build/index.js', array( 'wp-components', 'wp-element', 'wp-i18n' ), $this->version, false );
	
			wp_localize_script( 
			'gutena-kit-demo-import-dashboard' , 
			'gutenakit_demo_info',
				array(
				'show_demo_type_filter' => '0',
				'show_category_filter'  => '0',
				'category' => gutendkit_demo_category_list(),
				'demo_list' => gutendkit_categorize_demo_list(),
				'logo' => esc_url( GUTENA_KIT_PLUGIN_URL . 'admin/img/logo.png' ),
				'demo_import_url' => esc_url( admin_url( 'options.php?page=merlin&demo_index=' ) ),
				'styles' => wp_json_file_decode( GUTENA_KIT_DIR_PATH . 'includes/demo-import/demo-files/styles/all_styles.json', array( 'associative' => true ) )
				)
			);
		}
	}

	/**
	 * Gutena Kit scripts and styles for block editor
	 */
	public function add_blocks_and_settings(){
		
		wp_enqueue_script( 'gutena-kit-block-editor', GUTENA_KIT_PLUGIN_URL . 'includes/block-editor/build/index.js', array('wp-block-editor', 'wp-blocks', 'wp-components', 'wp-compose', 'wp-core-data', 'wp-data', 'wp-element', 'wp-hooks', 'wp-i18n', 'wp-primitives'), $this->version, false );

		wp_enqueue_style( 'gutena-kit-block-editor-style', GUTENA_KIT_PLUGIN_URL . 'admin/css/gutena-kit-editor.css', array(), $this->version, 'all' );

		//enqueue global typography
		global $gutena_kit_global_typography;

		//check if global typography exists 
		if ( ! isset( $gutena_kit_global_typography ) ) {
			$gutena_kit_global_typography = get_option( 'gutena_kit_global_typography', array() );
		}

		wp_localize_script( 
			'gutena-kit-block-editor' , 
			'gutena_kit_block_editor',
			 array(
				'save_typography_action' => 'save_global_typography',
				'nonce' => wp_create_nonce( 'gutena-kit-save' ),
				'ajax_url' => esc_url( admin_url('admin-ajax.php') ),
				'globalTypography'=> $gutena_kit_global_typography,
				'media_query_tab' => apply_filters('gutena-kit-media-query-tab', '1080px' ),
				'media_query_mobile' => apply_filters('gutena-kit-media-query-mobile', '767px' )
			 )
		);
	}

	/**
	 * Save global typography
	 */
	public function save_global_typography(){
		check_ajax_referer( 'gutena-kit-save', 'nonce' );
		
		if( ! function_exists( 'is_gutenakit_admin' ) ||  true !== is_gutenakit_admin() ){
			wp_send_json(
				array(
					'status'  => 'error',
					'message' => __( 'Incorrect permission', 'gutena-kit' ),
				)
			);
		}

		if ( empty( $_POST['typography'] ) ) {
			wp_send_json(
				array(
					'status'  => 'error',
					'message' => __( 'Missing typography name', 'gutena-kit' ),
				)
			);
		}

		$typography =  gutenakit_sanitize_array( json_decode( stripslashes(  $_POST['typography'] ), true ) ) ;

		if ( empty( $typography['slug'] ) ) {
			wp_send_json(
				array(
					'status'  => 'error',
					'message' => __( 'Missing typography name', 'gutena-kit' ),
					'details'=> __( 'Missing typography name slug', 'gutena-kit' )
				)
			);
		}

		$typography_group = empty( $_POST['typography_group'] ) ? 'default' : sanitize_key( $_POST['typography_group'] );
		// Get global typography
		$global_typography = get_option( 'gutena_kit_global_typography', array() );

		$message = '';
		if ( isset( $_POST['delete_typography'] ) ) {
			if ( $typography['slug'] === sanitize_key( $_POST['delete_typography'] ) && ! empty( $global_typography[ $typography_group ] )  && ! empty( $global_typography[ $typography_group ][ $typography['slug'] ] ) ) {
				// destroy a single element of an array
				unset( $global_typography[ $typography_group ][ $typography['slug'] ] );
			}
			$message = __( 'Typography deleted', 'gutena-kit' );
		} else {
			// slug : typography 
			$global_typography[ $typography_group ][ $typography['slug'] ] = $typography;
			$message = __( 'Typography saved', 'gutena-kit' );
		}

		// Set global typography
		update_option( 'gutena_kit_global_typography', $global_typography );

		//Success
		wp_send_json(
			array(
				'status'  => 'success',
				'message' => $message,
				'globalTypography'=> $global_typography
			)
		);
		
	}
	

}