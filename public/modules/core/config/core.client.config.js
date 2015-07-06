'use strict';

//Configuring the Core module
angular.module('core').run(['Menus',
	function(Menus) {
    Menus.addMenuItem('topbar', 'Setup', 'setup', 'dropdown');
    Menus.addSubMenuItem('topbar', 'setup', 'Client', 'clients'); 
    Menus.addSubMenuItem('topbar', 'setup', 'Settings', 'settings'); 
    Menus.addSubMenuItem('topbar', 'setup', 'Products', 'products'); 
    Menus.addMenuItem('topbar', 'Transactions', 'transactions', 'dropdown');
    Menus.addSubMenuItem('topbar', 'transactions', 'Orders', 'orders'); 
    Menus.addSubMenuItem('topbar', 'transactions', 'Projects', 'projects'); 
    Menus.addSubMenuItem('topbar', 'transactions', 'Invoices', 'invoices');
    Menus.addSubMenuItem('topbar', 'transactions', 'Expenses', 'expenses');
  }
]);