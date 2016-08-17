angular.module('appRoutes', [])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');
 
        $stateProvider
            .state('welcome', {
                url: '/',
                templateUrl: 'views/welcome.html',
                controller: 'WelcomeController'
            })
            .state('homepage', {
                url: '/home',
                templateUrl: 'views/homepage.html',
                controller: 'HomepageController'
            })
            
            ;
        $locationProvider.html5Mode(true);
    });