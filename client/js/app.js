'use strict';

angular.module('myKitchen', [
  'ngRoute',
  'ngPassword',
  'ngResource'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/recipe', {
      templateUrl: 'html/templates/recipe-list.html',
      controller: 'RecipeListController',
    })
    .when('/recipe/:recipeId', {
      templateUrl: 'html/templates/recipe-detail.html',
      controller: 'RecipeDetailController',
    })
    .when('/user/registration', {
  	  templateUrl: 'html/templates/user-registration.html',
  	  controller: 'UserRegistrationController',
    })
    .when('/user/connection', {
  	  templateUrl: 'html/templates/user-connection.html',
  	  controller: 'UserConnectionController',
    })
    .when('/user/profile/:userNickname', {
  	  templateUrl: 'html/templates/user-profile',
  	  controller: 'UserProfileController',
    })
    .otherwise({
      redirectTo: '/user/connection',
    })
  ;
  }])
;
