<?php
/**
 * Gutena Kit
 *
 * @package           Gutena_Kit
 * @author            ExpressTech
 * @copyright         2022 ExpressTech
 * @license           GPL-3.0
 * 
 * Plugin Name:       Gutena Kit
 * Plugin URI:        https://Gutena.io
 * Description:       Add typography, spacing supports to editor blocks and demo import.
 * Version:           1.0.6
 * Requires at least: 5.8
 * Requires PHP:      5.6
 * Author:            ExpressTech
 * Author URI:        https://expresstech.io
 * License:           GPL v3
 * License URI:       https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:       gutena-kit
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Plugin version.
 */
if ( ! defined( 'GUTENA_KIT_VERSION' ) ) {
	define( 'GUTENA_KIT_VERSION', '1.0.6' );
}

/**
 * Plugin dir path
 */
if ( ! defined( 'GUTENA_KIT_DIR_PATH' ) ) {
	define( 'GUTENA_KIT_DIR_PATH', trailingslashit(plugin_dir_path( __FILE__ ) ) );
}

/**
 * Plugin url
 */
if ( ! defined( 'GUTENA_KIT_PLUGIN_URL' ) ) {
	define( 'GUTENA_KIT_PLUGIN_URL', trailingslashit(plugins_url( '', __FILE__ ) ) );
}

if ( ! defined( 'GUTENA_KIT_MIN_FILE' ) ) {
	define( 'GUTENA_KIT_MIN_FILE', ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) ? '' : '.min');
}

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-gutena-kit-activator.php
 */
function activate_gutena_kit() {
	require_once GUTENA_KIT_DIR_PATH . 'includes/class-gutena-kit-activator.php';
	Gutena_Kit_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-gutena-kit-deactivator.php
 */
function deactivate_gutena_kit() {
	require_once GUTENA_KIT_DIR_PATH . 'includes/class-gutena-kit-deactivator.php';
	Gutena_Kit_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_gutena_kit' );
register_deactivation_hook( __FILE__, 'deactivate_gutena_kit' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require GUTENA_KIT_DIR_PATH . 'includes/class-gutena-kit.php';

/**
 * Begins execution of the plugin.
 */
function run_gutena_kit() {

	$plugin = new Gutena_Kit();
	$plugin->run();

}
run_gutena_kit();

//Get activated gutena plugins
if ( !function_exists( 'get_active_plugins' ) ){
	function get_active_plugins(){
		//Include reuired file for get_plugins function
		if ( ! function_exists( 'get_plugins' ) ) {
			require_once ABSPATH . 'wp-admin/includes/plugin.php';
		}

		if ( ! function_exists( 'get_plugins' ) ) {
			return array();
		}
		
		$plugins=get_plugins();
		$activated_plugins=array();
		$apl=array();//active_plugins

		//check for multisite
		if ( defined( 'MULTISITE' ) && true === MULTISITE && function_exists( 'get_sites' ) && class_exists( 'WP_Site_Query' ) && function_exists( 'get_blog_option' ) && function_exists( 'get_current_blog_id' ) && function_exists( 'get_site_option' ) ) {
			// Network activated
			$apl = array_keys( get_site_option('active_sitewide_plugins', array() ) );
			//current site
			$site_plugins =  get_blog_option( get_current_blog_id(), 'active_plugins' , array() ) ;

			$apl = array_merge( $apl, $site_plugins );

		} else {
			$apl=get_option('active_plugins');
		}

		foreach ($apl as $p){           
			if(isset($plugins[$p])){
				//add gutena plugins only
				$text_domain = $plugins[$p]['TextDomain'];
				if ( ! empty( $text_domain ) && false !== stripos( $text_domain, "gutena" ) && ! in_array( $text_domain,  array( 'gutena-demo-settings-export', 'gutena-iframe-support', 'gutena-kit', 'gutena-kit-pro' )) ) {
					
					//Correct text-domain for wordpress plugin slug
					if ( 'photofeed-block-gutena' === $text_domain ) {
						$text_domain = 'photofeed-block-by-gutena';
					} elseif ( 'post-featured-tag-block-gutena' === $text_domain ) {
						$text_domain = 'post-featured-tag-block-by-gutena';
					} elseif ( 'newsletter-block-gutena' === $text_domain ) {
						$text_domain = 'newsletter-block-by-gutena';
					}

					//Add plugin in activated list
					array_push( $activated_plugins, array(
						'name'     => $plugins[$p]['Name'],
						'slug'     => $text_domain,
						'required' => false,
					) );
				}
			}           
		}

		$plugins = array_keys( $plugins );
		$plugin = array_map( function( $plugin_path ){
			$plugin_path = explode("/",$plugin_path);
			return( $plugin_path[0] );
		}, $plugins );
		echo "<pre><br>";
		print_r($plugin);
		print_r($plugins);
		echo "<pre><br>";
		print_r($apl);exit;
		return $activated_plugins;
	}

	//add_action('admin_init','get_active_plugins');
}