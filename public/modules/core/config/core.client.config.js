'use strict';

//Configuring the Core module
angular.module('core').run(['Menus',
	function(Menus) {
    Menus.addMenuItem('topbar', 'Setup', 'setup', 'dropdown');
    Menus.addSubMenuItem('topbar', 'setup', 'Client', 'clients'); 
    Menus.addSubMenuItem('topbar', 'setup', 'Settings', 'settings'); 
  }
]);