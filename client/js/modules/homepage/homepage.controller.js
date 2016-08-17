(function() {
	'use strict';

	angular
		.module('homepage')
		.controller('HomepageController', HomepageController);

		HomepageController.$inject = ['$state'];
		function HomepageController(HomepageService, $state) {

			activate();

			function activate() {
				
			}
		};
})();