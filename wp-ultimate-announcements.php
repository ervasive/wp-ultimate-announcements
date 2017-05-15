<?php
/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @package WPUA/Main
 *
 * @wordpress-plugin
 * Plugin Name: WP Ultimate Announcements
 * Plugin URI: https://wordpress.org/plugins/wp-ultimate-announcements/
 * Description: TODO
 * Version: 0.1.0
 * Author: Ruslan Vasiliev
 * Author URI: https://github.com/ervasive/
 * License: GPL v3
 * Text Domain: wpua
 * Domain Path: /languages/
 */

if ( ! function_exists( 'add_filter' ) ) {
	header( 'Status: 403 Forbidden' );
	header( 'HTTP/1.1 403 Forbidden' );
	exit();
}

/**
 * Class WP_Ultimate_Announcements
 * @author yourname
 */
class WP_Ultimate_Announcements {

}
