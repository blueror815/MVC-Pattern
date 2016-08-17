angular
	.module('homepage')
	.factory('HomepageService', HomepageService);

	HomepageService.$inject = ['$resource', '$http'];
	function HomepageService($resource, $http) {
		return $resource('custom');
	};