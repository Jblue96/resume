var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: '/views/pages/profile.html',
    controller: 'ProfileController as pc'
  }).when('/repo', {
    templateUrl: '/views/pages/repo.html',
    controller: 'RepositoryController as rc'
  }).otherwise({ redirectTo: '/'});
  $locationProvider.html5Mode(true);
//end locationProvider

});//end config
