'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

        // Some example string
        $scope.helloText = 'Welcome to Q & R Exports';
        $scope.descriptionText = 'This is a web application for managing business activities @ Q & R Exports. You can use it create product gallery, maker purchase and maintain inventory of stock lots, sell goods and generate invoices, follow-up with buyers and sellers.';
	}
]);