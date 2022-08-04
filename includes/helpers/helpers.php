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