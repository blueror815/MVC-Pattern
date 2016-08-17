angular
	.module('welcome')
	.factory('WelcomeService', WelcomeService);

	WelcomeService.$inject = ['$resource', '$http'];
	function WelcomeService($resource, $http) {
		return $resource('welcome');
	};