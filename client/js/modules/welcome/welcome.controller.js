(function() {
	'use strict';

	angular
		.module('welcome')
		.controller('WelcomeController', WelcomeController);

		WelcomeController.$inject = ['$state'];
		function WelcomeController(HomepageService, $state) {

			activate();

			function activate() {
				
			}
		};
})();