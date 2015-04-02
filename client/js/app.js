'use strict';

var myKitchen = angular.module('myKitchen', [
  'ngRoute',
  'ngPassword',
  'recipeControllers',
  'userControllers'
]);

myKitchen.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/recipe', {
        templateUrl: 'html/templates/recipe-list.html',
        controller: 'RecipeListCtrl',
      })
      .when('/recipe/:recipeId', {
        templateUrl: 'html/templates/recipe-detail.html',
        controller: 'RecipeDetailCtrl',
      })
	  .when('/user/registration', {
		  templateUrl: 'html/templates/user-registration.html',
		  controller: 'UserRegistrationCtrl',
	  })
	  .when('/user/connection', {
		  templateUrl: 'html/templates/user-connection.html',
		  controller: 'UserConnectionCtrl',
	  })
      .otherwise({
        redirectTo: '/user/connection',
      });
  }]);
